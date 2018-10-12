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
/******/ 	return __webpack_require__(__webpack_require__.s = 52);
/******/ })
/************************************************************************/
/******/ ({

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)
var $app_template$ = __webpack_require__(57)
var $app_style$ = __webpack_require__(58)
var $app_script$ = __webpack_require__(59)

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

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(54)
var $app_style$ = __webpack_require__(55)
var $app_script$ = __webpack_require__(56)

$app_define$('@app-component/quist-input', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "quist-input"
      ],
      "style": {
        "width": function () {return this.width}
      },
      "children": [
        {
          "type": "input",
          "attr": {},
          "classList": [
            "quist-input__fix"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['quist-input__content', this.disabled?'quist-input__content--disabled':'quist-input__content--enable']},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quist-input__prefix"
              ],
              "style": {
                "display": function () {return this.prefixIcon?'':'none'}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.prefixIcon}
                  },
                  "classList": [
                    "quist-input__icon"
                  ]
                }
              ]
            },
            {
              "type": "input",
              "attr": {
                "id": "quist-input__box",
                "type": "text",
                "value": function () {return this.searchValue},
                "placeholder": function () {return this.placeholder},
                "disabled": function () {return this.disabled}
              },
              "id": "quist-input__box",
              "classList": [
                "quist-input__box"
              ],
              "events": {
                "focus": "onfocus",
                "blur": "onblur",
                "change": "onchange"
              }
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quist-input__suffix"
              ],
              "events": {
                "click": "clearClick"
              },
              "style": {
                "opacity": function () {return this.showClear?'1':'0'}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.suffixIcon}
                  },
                  "classList": [
                    "quist-input__img"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 55:
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
  ".quist-input": {
    "alignItems": "center"
  },
  ".quist-input__fix": {
    "width": "0px",
    "height": "0px"
  },
  ".quist-input__content": {
    "flex": 1,
    "alignItems": "center",
    "paddingTop": "12px",
    "paddingRight": "21px",
    "paddingBottom": "12px",
    "paddingLeft": "21px",
    "borderRadius": "18px",
    "backgroundColor": "#E5E5E5"
  },
  ".quist-input__content--disabled": {
    "opacity": 0.4
  },
  ".quist-input__content--enable": {
    "opacity": 1
  },
  ".quist-input__box": {
    "marginTop": "0px",
    "marginRight": "10px",
    "marginBottom": "0px",
    "marginLeft": "10px",
    "height": "72px",
    "flex": 1
  },
  ".quist-input__prefix": {
    "width": "72px",
    "height": "72px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".quist-input__img": {
    "width": "48px",
    "height": "48px",
    "resizeMode": "contain"
  },
  ".quist-input__suffix": {
    "width": "60px",
    "height": "60px",
    "alignItems": "center",
    "justifyContent": "center"
  },
  ".quist-input__suffix img": {
    "width": "33px",
    "height": "33px",
    "resizeMode": "contain",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-input__suffix"
        },
        {
          "t": "d"
        },
        {
          "t": "t",
          "n": "img"
        }
      ]
    }
  }
}

/***/ }),

/***/ 56:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '1080px'
    },
    prefix: {
      type: String,
      default: ''
    },
    suffix: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {
      searchValue: '',
      showClear: false,
      replaceShow: true
    };
  },
  onInit: function onInit() {
    this.initialize();
  },
  initialize: function initialize() {
    this.prefixIcon = this.prefix;
    this.suffixIcon = this.suffix;
  },
  onchange: function onchange(e) {
    this.searchValue = e.value;
    if (this.searchValue) {
      this.showClear = true;
    } else {
      this.showClear = false;
    }
  },
  onfocus: function onfocus() {
    this.$emit('onFocus', { value: this.searchValue });
  },
  onblur: function onblur() {
    this.$emit('onBlur', { value: this.searchValue });
  },
  clearClick: function clearClick() {
    this.searchValue = '';
    this.showClear = false;
    this.$emit('onClear');
  },
  searchClick: function searchClick() {
    this.blur();
    this.$emit('onClick', { value: this.searchValue });
  },
  focus: function focus() {
    this.$element("quist-input__box").focus({
      focus: true
    });
  },
  blur: function blur() {
    this.$element("quist-input__box").focus({
      focus: false
    });
  }
};}

/***/ }),

/***/ 57:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "input-demo"
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
            "value": "默认输入框"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-input",
          "attr": {
            "id": "search",
            "placeholder": "请输入关键字"
          },
          "id": "search",
          "events": {
            "on-focus": "focus",
            "on-blur": "blur",
            "on-clear": "clear"
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
            "value": "带后缀的输入框"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-input",
          "attr": {
            "placeholder": "请输入关键字",
            "suffix": function () {return this.suffix}
          },
          "events": {
            "on-focus": "focus",
            "on-blur": "blur",
            "on-clear": "clear"
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
            "value": "带前缀的输入框"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-input",
          "attr": {
            "placeholder": "请输入关键字",
            "prefix": function () {return this.prefix},
            "suffix": function () {return this.suffix}
          },
          "events": {
            "on-focus": "focus",
            "on-blur": "blur",
            "on-clear": "clear"
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
            "value": "禁用状态的输入框"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-input",
          "attr": {
            "placeholder": "请输入关键字",
            "disabled": ""
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

/***/ 58:
/***/ (function(module, exports) {

module.exports = {
  ".input-demo": {
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

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.prompt');

var _system2 = _interopRequireDefault(_system);

var _image = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: {
    prefix: _image.SEARCH_ICON,
    suffix: _image.CLEAR_ICON
  },
  onInit: function onInit() {
    var _this = this;

    this.$page.setTitleBar({ text: 'Input' });
    setTimeout(function () {
      _this.$child("search").focus();
    }, 1000);
  },
  focus: function focus(e) {
    _system2.default.showToast({
      message: 'focus value:' + e.detail.value
    });
  },
  blur: function blur(e) {
    _system2.default.showToast({
      message: 'blur value:' + e.detail.value
    });
  },
  clear: function clear() {
    _system2.default.showToast({
      message: 'clear'
    });
  },
  search: function search(e) {
    _system2.default.showToast({
      message: 'value:' + e.detail.value
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

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CLEAR_ICON = exports.CLEAR_ICON = 'data:image/webp;base64,UklGRjABAABXRUJQVlA4WAoAAAAQAAAAIAAAIAAAQUxQSK4AAAABgFpt2/LmDTMn7tdh5imSBdBFQbnL4Aq1uAbXk6ri9il+3/Op2ogwkLbN3ziYCnFNNtPCfmppFhXbAfDYI698A1yHagDw0uPcA8CkhN/RMJD9P7FOfeI/+RPnyhJRxVLH0cXQp8ekw6VGtqrCBgUqDTJTIt0/N/2N3c3v1RlQZOLNeJdXmb+ro1n/1i5TN6a7bCwb73JvZrzLreg1cErv8gB4KEhoMvAJ+7b+1BJWUDggXAAAAHAEAJ0BKiEAIQA+ZSaPRaQiIRqkAEAGRLSAADcWmGN2LzomserHJcP9Y9AAAP7XcXLDnyYT/48Hrxnuis0f/TF0LjP//9q7iRv//SACK3FS+0N9nTDy/6ccAAAA';

var SEARCH_ICON = exports.SEARCH_ICON = 'data:image/webp;base64,UklGRgQDAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSCgCAAABkGzbtmk768W2bdtOirZTslm0VXwuxratmu3U8mzbu7W75t57rfsFEeHAbSRFcvUeQy0+gnxpt+Hk4+/pJTFvb4ZOrUXqtNn9vsq4knd1UTWVhocKjD8/pimsSzWyvOonVPuMESdvlkjrN8byed/UQS1qdx6z5GSa1aRyp2T5b0DRiY7kSLUpr6wHYf53rcen2nsLTf+Dhdb54DeKl5Mg9W+CssmeP4IuKSNJlJAjUCq9uXN/p8LjkSRNJEyoy2EospzEarxgpV0dB18B/Bop0iKHi1207YZ/bU+a7IK938rygZ0glboJXG21deLAmdCRdIEfvIc2moBPpDQCdlw9cIrt0wqJ53KjwRM2lbS5zeaC72yQWjTbBNJZC7U97CgoYbXVtrEIEMM6qx1n+8FbNkbtNNsAbrIlaq/YfBDKTmo1KGE9wDSWVk1poQmIta4ZeVxiitJl95l2Da6GOn0r2ALLIjitp6ncNQEx1e3L2w/2p77CVMN2uC5u0ONmiFivbLgwNSRHXsMckWr6D1otJZd+eVAlsobsMS63PGVmVUKZFy0k38g2YLyvzk5sk7Ozru9f7xgrCT18E2b3OTLccfAtuFxhjHzWlRkr8bej92w7dvoVHKuamZxupLk1PkE4LcJKRdKXEvWQDnW9WOkVs6MhkWao1ep7xQ6xpxbwsaocovqj5246GrF/4wLsJBhVRBPTKOizioI9KyiYEwOnZzDTaNWK+gRWUDggtgAAADAHAJ0BKjAAMAA+aSiRRaQioZjrNvxABoS0gAqQAxU7MA/TN2Ft9JyLe031A6ZBpMHfaeU1o2dRRNG0K8HpKlIEAAD+7yOhZcI19h8rxYCTghZOiH1/wCmgPwQBt39a9+/5nr7rMV9g3kwCVE1flsQwMu+mqpLP/RAYFItcEYokflHbv618v/o7jbCaG0Uycm/oQtzGm/pXkO67cvA0bx5UJNA5zk5+ILNf2WLZFl4AAAqIhAAA';

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