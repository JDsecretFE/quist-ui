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
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ({

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(70)
var $app_template$ = __webpack_require__(74)
var $app_style$ = __webpack_require__(75)
var $app_script$ = __webpack_require__(76)

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

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(71)
var $app_style$ = __webpack_require__(72)
var $app_script$ = __webpack_require__(73)

$app_define$('@app-component/quist-radio', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-radio"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": {
        "exp": function () {return this.options},
        "key": "index",
        "value": "row"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['quist-radio__item', this.isRight?'quist-radio__item--isRight':'', this.row.disabled?'quist-radio__item--disabled':'']},
          "events": {
            "click": function (evt) {this.click(this.row,evt)}
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.row.label||this.row}
              },
              "classList": [
                "quist-radio__name"
              ],
              "shown": function () {return this.isRight},
              "style": {
                "color": function () {return this.labelColor}
              }
            },
            {
              "type": "stack",
              "attr": {},
              "classList": [
                "quist-radio__check"
              ],
              "style": {
                "borderColor": function () {return this.replaceValue===(this.row.value||this.row)?this.checkedColor:this.checkColor}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['quist-radio__thumb', this.replaceValue===(this.row.value||this.row)?'quist-radio__thumb--open':'quist-radio__thumb--close']},
                  "style": {
                    "backgroundColor": function () {return this.replaceValue===(this.row.value||this.row)?this.checkedColor:this.checkColor}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.row.label||this.row}
              },
              "classList": [
                "quist-radio__name"
              ],
              "shown": function () {return !this.isRight},
              "style": {
                "color": function () {return this.labelColor}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 72:
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
  "@KEYFRAMES": {
    "open": [
      {
        "transform": "{\"scaleX\":0,\"scaleY\":0}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 100
      }
    ],
    "close": [
      {
        "transform": "{\"scaleX\":1,\"scaleY\":1}",
        "time": 0
      },
      {
        "transform": "{\"scaleX\":0,\"scaleY\":0}",
        "time": 100
      }
    ]
  },
  ".quist-radio": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "fontSize": "32px"
  },
  ".quist-radio__item": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px",
    "borderBottomWidth": "1px",
    "borderStyle": "solid",
    "borderBottomColor": "#d9d9d9"
  },
  ".quist-radio__item--disabled": {
    "opacity": 0.5
  },
  ".quist-radio__item--isRight": {
    "justifyContent": "space-between"
  },
  ".quist-radio__check": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "60px",
    "height": "60px",
    "borderRadius": "30px",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px",
    "marginRight": "10px"
  },
  ".quist-radio__thumb": {
    "width": "36px",
    "height": "36px",
    "borderRadius": "36px"
  },
  ".quist-radio__thumb--open": {
    "animationName": "open",
    "animationDuration": "0ms",
    "animationFillMode": "forwards"
  },
  ".quist-radio__thumb--close": {
    "animationName": "close",
    "animationDuration": "0ms",
    "animationFillMode": "forwards"
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  props: {
    value: String,
    options: {
      type: Array
    },
    labelColor: {
      type: String,
      default: '#000000'
    },
    isRight: {
      type: Boolean,
      default: false
    },
    checkColor: {
      type: String,
      default: '#CCCCCC'
    },
    checkedColor: {
      type: String,
      default: '#2998F9'
    }
  },
  data: function data() {
    return {
      replaceValue: this.value
    };
  },
  onInit: function onInit() {
    this.initialize();
  },
  onReady: function onReady() {
    this.$watch('value', 'initialize');
    this.$watch('replaceValue', 'change');
  },
  initialize: function initialize() {
    this.replaceValue = this.value;
  },
  click: function click(data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (!data.disabled) {
        this.replaceValue = data.value;
      }
    } else {
      this.replaceValue = data;
    }
  },
  change: function change() {
    this.$emit('onChange', { values: this.replaceValue });
  }
};}

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "radio-demo"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-box"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return '选中的值：' + (this.value)}
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-radio",
          "attr": {
            "value": "apple",
            "options": function () {return this.data}
          },
          "events": {
            "on-change": "callback"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-box"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "自定义样式"
          },
          "classList": [
            "item-txt"
          ],
          "events": {
            "click": "evtEmit"
          }
        },
        {
          "type": "quist-radio",
          "attr": {
            "checkedColor": "red",
            "isRight": "",
            "options": function () {return this.data1},
            "value": function () {return this.value1}
          },
          "events": {
            "on-change": "callback1"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {}
    }
  ]
}

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

module.exports = {
  ".radio-demo": {
    "flex": 1,
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".item-box": {
    "marginTop": "20px",
    "marginRight": "20px",
    "marginBottom": "20px",
    "marginLeft": "20px",
    "paddingBottom": "50px",
    "flexDirection": "column"
  },
  ".item-txt": {
    "width": "100%",
    "marginBottom": "30px",
    "fontSize": "32px",
    "color": "#666666"
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: {
    value: '',
    value1: '',
    data: [{
      disabled: true,
      label: '苹果',
      value: 'apple'
    }, {
      disabled: false,
      label: '香蕉',
      value: 'banana'
    }, {
      disabled: false,
      label: '芒果',
      value: 'mango'
    }],
    data1: [{
      label: '男',
      value: '1'
    }, {
      label: '女',
      value: '2'
    }]
  },
  onInit: function onInit() {
    this.value = this.data[0].value;
    this.$page.setTitleBar({ text: 'Radio' });
  },
  evtEmit: function evtEmit() {
    this.value1 = "2";
  },
  callback: function callback(data) {
    this.value = data.detail.values;
  },
  callback1: function callback1(data) {
    this.value1 = data.detail.values;
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

/******/ });
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=index.js.map