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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(25)
var $app_template$ = __webpack_require__(29)
var $app_style$ = __webpack_require__(30)
var $app_script$ = __webpack_require__(31)

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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(26)
var $app_style$ = __webpack_require__(27)
var $app_script$ = __webpack_require__(28)

$app_define$('@app-component/quist-counter', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-counter"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "disabled": function () {return this.disabled}
      },
      "classList": [
        "quist-counter-reduce"
      ],
      "events": {
        "click": "reduceClicked"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "-"
          },
          "classList": function () {return ['quist-counter-icon', this.minClass,this.disabled?'quist-counter-disabled':'']}
        }
      ]
    },
    {
      "type": "input",
      "attr": {
        "id": "counter-input",
        "type": "number",
        "value": function () {return this.counterValue},
        "disabled": function () {return this.disabled}
      },
      "id": "counter-input",
      "classList": function () {return ['quist-counter-input', this.disabled?'quist-counter-disabled':'']},
      "events": {
        "change": "onChange"
      }
    },
    {
      "type": "div",
      "attr": {
        "disabled": function () {return this.disabled}
      },
      "classList": [
        "quist-counter-plus"
      ],
      "events": {
        "click": "plusClicked"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "+"
          },
          "classList": function () {return ['quist-counter-icon', this.maxClass,this.disabled?'quist-counter-disabled':'']}
        }
      ]
    }
  ]
}

/***/ }),

/***/ 27:
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
  ".quist-counter": {
    "width": "240px",
    "height": "80px",
    "display": "flex",
    "alignItems": "center",
    "borderTopWidth": "1px",
    "borderRightWidth": "1px",
    "borderBottomWidth": "1px",
    "borderLeftWidth": "1px",
    "borderStyle": "solid",
    "borderTopColor": "#d9d9d9",
    "borderRightColor": "#d9d9d9",
    "borderBottomColor": "#d9d9d9",
    "borderLeftColor": "#d9d9d9",
    "borderRadius": "6px"
  },
  ".quist-counter-reduce": {
    "width": "80px",
    "height": "100%",
    "backgroundColor": "#f3f2f8",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRightColor": "#d9d9d9",
    "borderRightWidth": "1px",
    "borderStyle": "solid"
  },
  ".quist-counter-plus": {
    "width": "80px",
    "height": "100%",
    "backgroundColor": "#f3f2f8",
    "alignItems": "center",
    "justifyContent": "center",
    "borderLeftColor": "#d9d9d9",
    "borderLeftWidth": "1px",
    "borderStyle": "solid"
  },
  ".quist-counter-input": {
    "textAlign": "center",
    "width": "118px",
    "height": "100%",
    "lineHeight": "80px",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".quist-counter-icon": {
    "fontSize": "32px",
    "color": "#666666",
    "fontWeight": "bold"
  },
  ".quist-counter-disabled": {
    "color": "#cccccc"
  }
}

/***/ }),

/***/ 28:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    value: {
      type: Number,
      default: 0
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      counterValue: this.value,
      minClass: '',
      maxClass: '',
      disabledClass: ''
    };
  },
  onInit: function onInit() {
    if (this.min && this.value < this.min) {
      this.counterValue = this.min;
      this.minClass = 'quist-counter-disabled';
    } else if (this.max && this.value > this.max) {
      this.counterValue = this.max;
      this.maxClass = 'quist-counter-disabled';
    }
  },
  onChange: function onChange(e) {
    this.counterValue = e.value * 1;
    this.$emit('onChange', { value: this.counterValue });
  },
  reduceClicked: function reduceClicked() {
    if (this.counterValue === this.min) {
      this.counterValue = this.min;
    } else {
      this.counterValue -= 1;
    }
    if (this.counterValue <= this.min) {
      this.minClass = 'quist-counter-disabled';
    } else {
      this.minClass = '';
      this.maxClass = '';
    }
    this.$element("counter-input").focus({
      focus: false
    });
  },
  plusClicked: function plusClicked() {
    if (this.counterValue === this.max) {
      this.counterValue = this.max;
    } else {
      this.counterValue += 1;
    }
    if (this.counterValue >= this.max) {
      this.maxClass = 'quist-counter-disabled';
    } else {
      this.minClass = '';
      this.maxClass = '';
    }
    this.$element("counter-input").focus({
      focus: false
    });
  }
};}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "counter-demo"
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
            "value": "默认计数器展示"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-counter",
          "attr": {
            "value": function () {return 1}
          },
          "events": {
            "on-change": "valueChange"
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
            "value": "禁止更改计数器展示"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-counter",
          "attr": {
            "value": function () {return 10},
            "disabled": ""
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
            "value": "设置最大值的计数器展示(最大值为10)"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-counter",
          "attr": {
            "value": function () {return 3},
            "max": function () {return 10}
          },
          "events": {
            "on-change": "valueChange"
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
            "value": "设置最小值的计数器展示(最小值为2)"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-counter",
          "attr": {
            "value": function () {return 1},
            "min": function () {return 2}
          },
          "events": {
            "on-change": "valueChange"
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

/***/ 30:
/***/ (function(module, exports) {

module.exports = {
  ".counter-demo": {
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

/***/ 31:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Counter' });
  },
  valueChange: function valueChange(e) {
    console.log('当前的值是：', e.detail.value);
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