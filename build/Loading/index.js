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
/******/ 	return __webpack_require__(__webpack_require__.s = 61);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(1)
var $app_style$ = __webpack_require__(2)
var $app_script$ = __webpack_require__(3)

$app_define$('@app-component/quist-overlay', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-overlay"
  ],
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.show}
      },
      "classList": function () {return ['quist-overlay-mask', this.className]},
      "style": {
        "backgroundColor": function () {return this.background}
      },
      "events": {
        "click": "overlayClick"
      },
      "children": [
        {
          "type": "slot",
          "attr": {}
        }
      ]
    }
  ]
}

/***/ }),

/***/ 2:
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
    "quistOverlayEnter": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ],
    "quistOverlayLeave": [
      {
        "opacity": 1,
        "time": 0
      },
      {
        "opacity": 0,
        "time": 100
      }
    ]
  },
  ".quist-overlay-enter": {
    "animationName": "quistOverlayEnter"
  },
  ".quist-overlay-leave": {
    "animationName": "quistOverlayLeave"
  },
  ".quist-overlay-mask": {
    "position": "fixed",
    "left": "0px",
    "right": "0px",
    "top": "0px",
    "bottom": "0px",
    "justifyContent": "center",
    "alignItems": "center",
    "animationDuration": "200ms",
    "animationFillMode": "forwards"
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    maskClosable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6)'
    }
  },
  data: {
    show: false,
    className: ''
  },
  onInit: function onInit() {
    this.$watch('visible', 'updateVisible');
    this.updateVisible();
  },
  updateVisible: function updateVisible() {
    var _this = this;

    this.timeoutId && clearTimeout(this.timeoutId);
    if (this.visible) {
      this.show = true;
      this.className = 'quist-overlay-enter';
    } else {
      this.className = 'quist-overlay-leave';
      this.timeoutId = setTimeout(function () {
        _this.show = false;
      }, 500);
    }
  },
  overlayClick: function overlayClick() {
    this.maskClosable ? this.$emit('quiOverlayClick') : '';
  }
};}

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62)
var $app_template$ = __webpack_require__(66)
var $app_style$ = __webpack_require__(67)
var $app_script$ = __webpack_require__(68)

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

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(63)
var $app_style$ = __webpack_require__(64)
var $app_script$ = __webpack_require__(65)

$app_define$('@app-component/quist-loading', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 63:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.visible}
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quist-loading-mask"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quist-loading"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "quist-loading-box"
              ],
              "children": [
                {
                  "type": "slot",
                  "attr": {}
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.tip}
                  },
                  "classList": [
                    "quist-loading-text"
                  ],
                  "shown": function () {return this.tip}
                }
              ]
            },
            {
              "type": "quist-overlay",
              "attr": {
                "visible": function () {return this.visible},
                "background": function () {return this.background}
              },
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "quist-loading"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "attr": {},
                      "classList": [
                        "quist-loading-box"
                      ],
                      "children": [
                        {
                          "type": "slot",
                          "attr": {}
                        },
                        {
                          "type": "text",
                          "attr": {
                            "value": function () {return this.tip}
                          },
                          "classList": [
                            "quist-loading-text"
                          ],
                          "shown": function () {return this.tip}
                        }
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
  ]
}

/***/ }),

/***/ 64:
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
  ".quist-loading": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  ".quist-loading-box": {
    "paddingTop": "25px",
    "paddingRight": "40px",
    "paddingBottom": "25px",
    "paddingLeft": "40px",
    "flexDirection": "column",
    "alignItems": "center",
    "borderRadius": "20px",
    "backgroundColor": "rgba(71,71,71,0.8)"
  },
  ".quist-loading-text": {
    "color": "#ffffff",
    "fontSize": "34px"
  }
}

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    tip: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: 'rgba(0, 0, 0, 0)'
    }
  },
  data: function data() {
    return {
      className: ''
    };
  },
  onInit: function onInit() {
    this.mask ? this.className = 'maskShow' : this.className = 'maskHide';
  }
};}

/***/ }),

/***/ 66:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "loading-demo"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "显示loading"
      },
      "events": {
        "click": "showLoading"
      }
    },
    {
      "type": "quist-loading",
      "attr": {
        "visible": function () {return this.visible},
        "tip": function () {return this.tip},
        "background": "rgba(0, 0, 0, 0.4)"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "http://www.sucaijishi.com/uploadfile/2014/0524/20140524124238403.gif"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

module.exports = {
  ".loading-demo": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  "input": {
    "width": "100%",
    "height": "100px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "color": "#666666",
    "backgroundColor": "#f6f8fa"
  }
}

/***/ }),

/***/ 68:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    visible: false,
    tip: '加载中'
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Loading' });
  },
  showLoading: function showLoading() {
    var _this = this;

    this.visible = true;
    console.log('show');
    setTimeout(function () {
      _this.visible = false;
    }, 3000);
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