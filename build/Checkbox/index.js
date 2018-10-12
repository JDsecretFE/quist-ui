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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(17)
var $app_template$ = __webpack_require__(21)
var $app_style$ = __webpack_require__(22)
var $app_script$ = __webpack_require__(23)

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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(18)
var $app_style$ = __webpack_require__(19)
var $app_script$ = __webpack_require__(20)

$app_define$('@app-component/quist-checkbox', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-checkbox"
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
          "shown": function () {return !(this.index===0)&&this.replaceHasBorder},
          "classList": [
            "quist-checkbox-top"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['quist-checkbox__item', this.isRight?'quist-checkbox__item--isRight':'', this.row.disabled?'quist-checkbox__item--disabled':'']},
          "events": {
            "click": function (evt) {this.clickAction(this.row,evt)}
          },
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.row.label||this.row}
              },
              "classList": [
                "quist-checkbox__name"
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
                "quist-checkbox__checkbox"
              ],
              "style": {
                "backgroundColor": function () {return this.replaceChecked[this.index]?this.checkedColor:this.checkColor},
                "borderColor": function () {return this.replaceChecked[this.index]?this.checkedBorderColor:this.checkBorderColor}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": function () {return ['quist-checkbox__thumb', this.replaceChecked[this.index]?'quist-checkbox__thumb--open':'quist-checkbox__thumb--close']}
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "value": function () {return this.row.label||this.row}
              },
              "classList": [
                "quist-checkbox__name"
              ],
              "shown": function () {return !this.isRight},
              "style": {
                "marginLeft": function () {return this.labelMargin},
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
/* 19 */
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
  ".quist-checkbox": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".quist-checkbox__item": {
    "paddingTop": "30px",
    "paddingRight": "40px",
    "paddingBottom": "30px",
    "paddingLeft": "40px"
  },
  ".quist-checkbox__item--is-right": {
    "justifyContent": "space-between"
  },
  ".quist-checkbox__checkbox": {
    "alignItems": "center",
    "justifyContent": "center",
    "width": "60px",
    "height": "60px",
    "borderRadius": "30px",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px"
  },
  ".quist-checkbox__thumb": {
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "width": "15px",
    "height": "30px",
    "transform": "{\"rotate\":\"45deg\"}",
    "marginTop": "-8px"
  },
  ".quist-checkbox__thumb--open": {
    "animationName": "open",
    "animationDuration": "0ms",
    "animationFillMode": "forwards",
    "borderTopColor": "#ffffff",
    "borderRightColor": "#ffffff",
    "borderBottomColor": "#ffffff",
    "borderLeftColor": "#ffffff"
  },
  ".quist-checkbox__thumb--close": {
    "animationName": "close",
    "animationDuration": "0ms",
    "animationFillMode": "forwards"
  },
  ".quist-checkbox__item--disabled": {
    "color": "rgba(0,0,0,0.25)",
    "opacity": 0.5
  },
  ".quist-checkbox__name": {
    "fontSize": "32px"
  },
  ".quist-checkbox__item--isRight": {
    "justifyContent": "space-between"
  }
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  props: {
    values: {
      type: Array,
      default: []
    },
    options: {
      type: Array,
      default: []
    },
    labelMargin: {
      type: String,
      default: '30px'
    },
    labelColor: {
      type: String,
      default: '#000000'
    },
    checkColor: {
      type: String,
      default: '#FFFFFF'
    },
    checkedColor: {
      type: String,
      default: '#2998F9'
    },
    checkBorderColor: {
      type: String,
      default: '#CACBCC'
    },
    checkedBorderColor: {
      type: String,
      default: '#2998F9'
    },
    isRight: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      replaceHasBorder: true,
      replaceChecked: [],
      replaceValues: this.values
    };
  },
  onInit: function onInit() {
    this.initialize();
    this.updateChecked();
    this.$on('evtCast', this.updateArr);
  },
  onReady: function onReady() {
    this.$watch('values', 'initialize');
    this.$watch('replaceValues', 'change');
    this.$watch('replaceValues', 'updateChecked');
  },
  initialize: function initialize() {
    this.replaceValues = [].concat(_toConsumableArray(this.values));
  },
  clickAction: function clickAction(data) {
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (!data.disabled) {
        this.updateArr(data.value);
      }
    } else {
      this.updateArr(data);
    }
  },
  updateChecked: function updateChecked() {
    for (var i = 0, a = this.options.length; i < a; i++) {
      this.replaceChecked.splice(i, 1, false);
      for (var j = 0, b = this.replaceValues.length; j < b; j++) {
        var val = this.options[i].value || this.options[i];
        if (b > 0 && val === this.replaceValues[j]) {
          this.replaceChecked.splice(i, 1, true);
          break;
        }
      }
    }
  },
  updateArr: function updateArr(params) {
    var _this = this;

    var data = (typeof params === 'undefined' ? 'undefined' : _typeof(params)) === 'object' ? params.detail.params : params;
    if (this.checkInArr(this.replaceValues, data)) {
      this.replaceValues.forEach(function (val, idx) {
        if (val === data) {
          _this.replaceValues.splice(idx, 1);
        }
      });
    } else {
      this.replaceValues.push(data);
    }
  },
  checkInArr: function checkInArr(arr, data) {
    var isExist = false;
    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === data) {
        isExist = true;
      }
    }
    return isExist;
  },
  change: function change() {
    this.$emit('onChange', { values: this.replaceValues });
  }
};}

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "checkbox-demo"
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
            "value": function () {return 'CheckboxList - 选中的值：' + (this.value1)}
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-checkbox",
          "attr": {
            "values": function () {return this.data1.values},
            "options": function () {return this.data1.options}
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
          "type": "quist-checkbox",
          "attr": {
            "values": function () {return this.data2.values},
            "checked": function () {return this.data2.checked},
            "options": function () {return this.data2.options},
            "checkedColor": "red",
            "checkedBorderColor": "red",
            "id": "childVm",
            "isRight": ""
          },
          "id": "childVm"
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
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  ".checkbox-demo": {
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
/* 23 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
  data: {
    value1: [],
    data1: {
      values: ['apple', 'banana'],
      options: [{
        disabled: true,
        label: '苹果',
        value: 'apple'
      }, {
        disabled: false,
        label: '梨',
        value: 'pear'
      }, {
        label: '香蕉',
        value: 'banana'
      }, {
        disabled: true,
        label: '橘子',
        value: 'orange'
      }]
    },
    data2: {
      values: [],
      options: [{
        label: '记住我',
        value: 1
      }]
    }
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Checkbox' });
  },
  evtEmit: function evtEmit() {
    this.$vm('childVm').$broadcast('evtCast', { params: 1 });
  },
  callback: function callback(data) {
    this.value1 = [].concat(_toConsumableArray(data.detail.values));
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