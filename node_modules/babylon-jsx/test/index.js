import {AssertionError} from 'assert';
import test from 'ava';
import expect from 'unexpected';
import fs from 'mz/fs';
import transformJSX from '../source';
import {getTests, generate, parse} from './_helpers';

const tests = getTests();

test('calling it with a non-ast as <ast>', t => {
	t.throws(() => transformJSX({}, ''), AssertionError, 'should throw an AssertionError');
});

test('calling it with a non-string as <pragma>', t => {
	const ast = parse(`// beep. boop.`);
	t.throws(() => transformJSX(ast, {}), AssertionError, 'should throw an AssertionError');
});

test('calling it with am non-string as <pragma>', t => {
	const ast = parse(`// beep. boop.`);
	t.throws(() => transformJSX(ast, ''), AssertionError, 'should throw an AssertionError');
});

tests.forEach(config => {
	test(config.name, async () => {
		const source = await fs.readFile(config.sourcePath, 'utf-8');
		const expected = await fs.readFile(config.expectedPath, 'utf-8');
		const ast = parse(source);
		const transformed = transformJSX(ast, 'React.createElement');
		const actual = generate(transformed, {quotes: '"'}, source);
		expect(`${actual}\n`, 'to be', expected);
	});
});
