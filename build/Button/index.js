(function(){
  
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9)
var $app_template$ = __webpack_require__(13)
var $app_style$ = __webpack_require__(14)
var $app_script$ = __webpack_require__(15)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(10)
var $app_style$ = __webpack_require__(11)
var $app_script$ = __webpack_require__(12)

$app_define$('@app-component/quist-button', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": function () {return ['quist-button', this.className, this.blockClassName]},
  "events": {
    "click": "clicked"
  },
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.value}
      },
      "classList": [
        "text"
      ]
    }
  ]
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "body": {
    "fontSize": "32px",
    "color": "#666666",
    "backgroundColor": "#ffffff",
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  "div": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  "text": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  "stack": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  "input": {
    "marginTop": "0px",
    "marginRight": "0px",
    "marginBottom": "0px",
    "marginLeft": "0px",
    "paddingTop": "0px",
    "paddingRight": "0px",
    "paddingBottom": "0px",
    "paddingLeft": "0px"
  },
  "image": {
    "borderTopWidth": "0px",
    "borderRightWidth": "0px",
    "borderBottomWidth": "0px",
    "borderLeftWidth": "0px"
  },
  ".quist-button": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "borderRadius": "6px",
    "width": "200px",
    "height": "70px"
  },
  ".quist-button-default": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#d9d9d9",
    "borderRightColor": "#d9d9d9",
    "borderBottomColor": "#d9d9d9",
    "borderLeftColor": "#d9d9d9",
    "backgroundColor": "#ffffff",
    "color": "#666666"
  },
  ".quist-button-primary": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#1890ff",
    "borderRightColor": "#1890ff",
    "borderBottomColor": "#1890ff",
    "borderLeftColor": "#1890ff",
    "backgroundColor": "#1890ff"
  },
  ".quist-button-primary .text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-button-primary"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text"
        }
      ]
    }
  },
  ".quist-button-danger": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#E64340",
    "borderRightColor": "#E64340",
    "borderBottomColor": "#E64340",
    "borderLeftColor": "#E64340",
    "backgroundColor": "#E64340"
  },
  ".quist-button-danger .text": {
    "color": "#ffffff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-button-danger"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "text"
        }
      ]
    }
  },
  ".quist-button-disabled": {
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#d9d9d9",
    "borderRightColor": "#d9d9d9",
    "borderBottomColor": "#d9d9d9",
    "borderLeftColor": "#d9d9d9",
    "backgroundColor": "#f3f5f7",
    "color": "#cccccc"
  },
  ".quist-button-block": {
    "width": "100%"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    value: {
      type: String,
      default: '确定'
    },
    block: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  private: {
    className: '',
    blockClassName: ''
  },
  onInit: function onInit() {
    if (this.type === 'primary') {
      this.className = 'quist-button-primary';
    } else if (this.type === 'danger') {
      this.className = 'quist-button-danger';
    } else {
      this.className = 'quist-button-default';
    }
    if (this.disabled) {
      this.className = 'quist-button-disabled';
    }
    if (this.block) {
      this.blockClassName = 'quist-button-block';
    }
  },
  clicked: function clicked() {
    this.$emit('onClick');
  }
};}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "button-demo"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button-type"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "explain"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "普通按钮"
              },
              "classList": [
                "explain-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__short"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "type": "primary",
                "value": "Primary"
              },
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__short"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {},
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__short"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "type": "danger",
                "value": "Danger"
              },
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__short"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "disabled": "",
                "value": "Disabled"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "button-type"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "explain"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "block 按钮"
              },
              "classList": [
                "explain-title"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__long"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "type": "primary",
                "block": "",
                "value": "Primary"
              },
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__long"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "block": ""
              },
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__long"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "type": "danger",
                "block": "",
                "value": "Danger"
              },
              "events": {
                "on-click": "onClick"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "button-type__long"
          ],
          "children": [
            {
              "type": "quist-button",
              "attr": {
                "disabled": "",
                "block": "",
                "value": "Disabled"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {
  ".button-demo": {
    "flexDirection": "column"
  },
  ".button-type": {
    "flexDirection": "column"
  },
  ".button-type__short": {
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px"
  },
  ".button-type__long": {
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".explain": {
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px"
  },
  ".explain-title": {
    "color": "#666666",
    "fontSize": "32px"
  }
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Button'
    });
  },
  onClick: function onClick(evt) {
    _system2.default.showToast({
      message: 'click'
    });
  }
};


var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];

if (moduleOwn.data && accessors.some(function (acc) {
  return moduleOwn[acc];
})) {
  throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function (acc) {
    var accType = _typeof(moduleOwn[acc]);
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = { access: acc };
      }
    } else if (accType === 'function') {
      console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
    }
  });
}}

/***/ })
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map