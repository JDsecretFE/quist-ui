'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _esutils = require('esutils');

var _esutils2 = _interopRequireDefault(_esutils);

var _babelTypes = require('babel-types');

var t = _interopRequireWildcard(_babelTypes);

var _babelTraverse = require('babel-traverse');

var _babelTraverse2 = _interopRequireDefault(_babelTraverse);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

exports.default = transformJSX;

/**
 * Convert JSX in a babel ast to CallExpressions
 * @param ast {Object} - babel ast to transform JSX in
 * @param pragma {String} - pragma to use, e.g. `React.createElement`
 */

function transformJSX(ast, pragma) {
	(0, _assert2.default)(t.isFile(ast) || t.isProgram(ast), '<ast> must be a babel ast for transformJSX(ast: AST, pragma: String): AST');
	(0, _assert2.default)(typeof pragma === 'string' && pragma, '<pragma> must be a non-empty string for transformJSX(ast: AST, pragma: String): AST');

	const call = buildCall(pragma);

	(0, _babelTraverse2.default)(ast, {
		JSXElement: {
			exit: function exit(path) {
				const openingElement = path.get('openingElement');
				const expression = buildElementCall(call, openingElement);
				expression.arguments = [].concat(_toConsumableArray(expression.arguments), _toConsumableArray(path.node.children));
				path.replaceWith(t.inherits(expression, path.node));
			}
		}
	});
	return ast;
}

function buildCall(callName) {
	return callName.split('.').map(name => t.identifier(name)).reduce((object, property) => t.memberExpression(object, property));
}

function buildElementCall(call, path) {
	path.parent.children = t.react.buildChildren(path.parent);
	const tagAttribute = getJSXTagAttribute(path);
	const attributes = convertJSXAttributes(path.node.attributes);
	const args = [tagAttribute].concat(_toConsumableArray(attributes));
	return t.callExpression(call, args);
}

function getJSXTagAttribute(path) {
	const tagExpression = convertJSXIdentifier(path.node.name, path.node);
	const tagName = getJSXTagName(tagExpression);
	return t.react.isCompatTag(tagName) ? t.stringLiteral(tagName) : tagExpression;
}

function convertJSXAttributes(attributes) {
	if (!attributes.length) {
		return [t.nullLiteral()];
	}

	const objects = getAttributeObjects(attributes);

	if (objects.length === 1) {
		return objects;
	}

	const spreads = objects.map(object => t.spreadProperty(object));

	return [t.objectExpression(spreads)];
}

function getAttributeObjects(attributes) {
	const registry = attributes.reduce((registry, attribute) => {
		if (!t.isJSXSpreadAttribute(attribute)) {
			registry.props.push(convertJSXAttribute(attribute));
			return registry;
		}
		const r = push(registry);
		registry.objects.push(attribute.argument);
		return r;
	}, { objects: [], props: [] });

	const objects = push(registry).objects;
	return objects;
}

function convertJSXAttributeValue(node) {
	if (t.isJSXExpressionContainer(node)) {
		return node.expression;
	}
	return node;
}

function convertJSXAttribute(node) {
	const raw = node.value || t.booleanLiteral(true);
	const value = convertJSXAttributeValue(raw);

	if (t.isStringLiteral(value) && !t.isJSXExpressionContainer(node.value)) {
		value.value = value.value.replace(/\n\s+/g, ' ');
	}

	if (t.isValidIdentifier(node.name.name)) {
		node.name.type = 'Identifier';
	} else {
		node.name = t.stringLiteral(node.name.name);
	}

	return t.inherits(t.objectProperty(node.name, value), node);
}

function push(registry) {
	if (registry.props.length) {
		registry.objects.push(t.objectExpression(registry.props));
	}
	registry.props = [];
	return registry;
}

function getJSXTagName(tagExpression) {
	if (t.isIdentifier(tagExpression)) {
		return tagExpression.name;
	}
	if (t.isLiteral(tagExpression)) {
		return tagExpression.value;
	}
}

function convertJSXIdentifier(node, parent) {
	const isIdentifier = t.isJSXIdentifier(node);
	const isMember = t.isJSXMemberExpression(node);

	if (!isIdentifier && !isMember) {
		return node;
	}

	if (isMember) {
		return t.memberExpression(convertJSXIdentifier(node.object, node), convertJSXIdentifier(node.property, node));
	}

	if (node.name === 'this' && t.isReferenced(node, parent)) {
		return t.thisExpression();
	}

	if (_esutils2.default.keyword.isIdentifierNameES6(node.name)) {
		node.type = 'Identifier';
		return node;
	}

	return t.stringLiteral(node.name);
}