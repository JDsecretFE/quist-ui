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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(41)
var $app_template$ = __webpack_require__(45)
var $app_style$ = __webpack_require__(46)
var $app_script$ = __webpack_require__(47)

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

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(42)
var $app_style$ = __webpack_require__(43)
var $app_script$ = __webpack_require__(44)

$app_define$('@app-component/quist-drawer', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 42:
/***/ (function(module, exports) {

module.exports = {
  "type": "quist-overlay",
  "attr": {
    "visible": function () {return this.visible},
    "maskClosable": function () {return this.maskClosable}
  },
  "events": {
    "qui-overlay-click": "overlayClick"
  },
  "children": [
    {
      "type": "div",
      "attr": {
        "show": function () {return this.show}
      },
      "classList": function () {return ['quist-drawer', 'quist-drawer-' + (this.placement)]},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": function () {return ['quist-drawer-content', this.animationClass]},
          "style": function () {return this.contentStyle},
          "children": [
            {
              "type": "slot",
              "attr": {}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 43:
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
  ".bottomdrawerenter": {
    "animationName": "bottomdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".bottomdrawerleave": {
    "animationName": "bottomdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  "@KEYFRAMES": {
    "bottomdrawerenter": [
      {
        "height": "0px",
        "transform": "{\"translateY\":\"100%\"}",
        "time": 0
      },
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "bottomdrawerleave": [
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "height": "0px",
        "transform": "{\"translateY\":\"100%\"}",
        "time": 100
      }
    ],
    "topdrawerenter": [
      {
        "height": "0px",
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 0
      },
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 100
      }
    ],
    "topdrawerleave": [
      {
        "height": "100%",
        "transform": "{\"translateY\":\"0px\"}",
        "time": 0
      },
      {
        "height": "0px",
        "transform": "{\"translateY\":\"-100%\"}",
        "time": 100
      }
    ],
    "rightdrawerenter": [
      {
        "width": "0px",
        "transform": "{\"translateX\":\"100%\"}",
        "time": 0
      },
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "rightdrawerleave": [
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "width": "0px",
        "transform": "{\"translateX\":\"100%\"}",
        "time": 100
      }
    ],
    "leftdrawerenter": [
      {
        "width": "0px",
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 0
      },
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ],
    "leftdrawerleave": [
      {
        "width": "100%",
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "width": "0px",
        "transform": "{\"translateX\":\"-100%\"}",
        "time": 100
      }
    ]
  },
  ".topdrawerenter": {
    "animationName": "topdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".topdrawerleave": {
    "animationName": "topdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".rightdrawerenter": {
    "animationName": "rightdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".rightdrawerleave": {
    "animationName": "rightdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".leftdrawerenter": {
    "animationName": "leftdrawerenter",
    "animationDuration": "400ms",
    "animationTimingFunction": "ease-in"
  },
  ".leftdrawerleave": {
    "animationName": "leftdrawerleave",
    "animationDuration": "300ms",
    "animationTimingFunction": "ease-in"
  },
  ".quist-drawer": {
    "position": "fixed"
  },
  ".quist-drawer-top": {
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "flexDirection": "column",
    "justifyContent": "flex-end"
  },
  ".quist-drawer-right": {
    "top": "0px",
    "bottom": "0px",
    "right": "0px",
    "flexDirection": "row"
  },
  ".quist-drawer-bottom": {
    "bottom": "0px",
    "left": "0px",
    "right": "0px",
    "flexDirection": "column"
  },
  ".quist-drawer-left": {
    "top": "0px",
    "bottom": "0px",
    "left": "0px",
    "flexDirection": "row",
    "justifyContent": "flex-end"
  },
  ".quist-drawer-content": {
    "flexShrink": 0,
    "flexDirection": "column"
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    maskClosable: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data: function data() {
    return {
      show: this.visible,
      contentStyle: {},
      animationClass: ''
    };
  },
  onInit: function onInit() {
    this.setDefault();
    this.setContentStyle();
    this.toggleVisible(this.visible);
  },
  setDefault: function setDefault() {
    this.$watch('visible', 'toggleVisible');
  },
  toggleVisible: function toggleVisible(visible) {
    var _this = this;

    this.timeoutId && clearTimeout(this.timeoutId);
    if (visible) {
      this.show = true;
      this.animationClass = this.placement + 'drawerenter';
    } else {
      this.animationClass = this.placement + 'drawerleave';
      this.timeoutId = setTimeout(function () {
        _this.show = false;
      }, 300);
    }
  },
  setContentStyle: function setContentStyle() {
    if (this.placement === 'bottom' || this.placement === 'top') {
      this.contentStyle = {
        width: '750px',
        height: 'auto'
      };
    } else {
      this.contentStyle = {
        width: 'auto',
        height: '100%'
      };
    }
  },
  overlayClick: function overlayClick() {
    this.$emit('onClose');
  }
};}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "drawer-demo"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "点击弹出底部弹层"
      },
      "classList": [
        "input-button"
      ],
      "events": {
        "click": function (evt) {this.drawer('bottom',evt)}
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "点击弹出顶部弹层"
      },
      "classList": [
        "input-button"
      ],
      "events": {
        "click": function (evt) {this.drawer('top',evt)}
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "点击弹出左侧弹层"
      },
      "classList": [
        "input-button"
      ],
      "events": {
        "click": function (evt) {this.drawer('left',evt)}
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "点击弹出右侧弹层"
      },
      "classList": [
        "input-button"
      ],
      "events": {
        "click": function (evt) {this.drawer('right',evt)}
      }
    },
    {
      "type": "quist-drawer",
      "attr": {
        "visible": function () {return this.placement==='bottom'},
        "placement": "bottom"
      },
      "events": {
        "on-close": "close"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mask"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "hello qucikapp"
              },
              "classList": [
                "mask-cnt"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "quist-drawer",
      "attr": {
        "visible": function () {return this.placement==='top'},
        "placement": "top"
      },
      "events": {
        "on-close": "close"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mask"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "hello qucikapp"
              },
              "classList": [
                "mask-cnt"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "quist-drawer",
      "attr": {
        "visible": function () {return this.placement==='left'},
        "placement": "left"
      },
      "events": {
        "on-close": "close"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mask2"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "hello qucikapp"
              },
              "classList": [
                "mask-cnt"
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "quist-drawer",
      "attr": {
        "visible": function () {return this.placement==='right'},
        "placement": "right"
      },
      "events": {
        "on-close": "close"
      },
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "mask2"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "hello qucikapp"
              },
              "classList": [
                "mask-cnt"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 46:
/***/ (function(module, exports) {

module.exports = {
  ".drawer-demo": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px"
  },
  ".input-button": {
    "width": "100%",
    "height": "100px",
    "marginTop": "50px",
    "marginRight": "50px",
    "marginBottom": "50px",
    "marginLeft": "50px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "color": "#666666",
    "backgroundColor": "#f6f8fa"
  },
  ".mask": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "100%",
    "height": "400px",
    "backgroundColor": "#ffffff"
  },
  ".mask2": {
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "center",
    "width": "300px",
    "height": "100%",
    "backgroundColor": "#ffffff"
  },
  ".mask-cnt": {
    "fontSize": "30px"
  }
}

/***/ }),

/***/ 47:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    placement: ''
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Drawer'
    });
  },
  drawer: function drawer(txt) {
    this.placement = txt;
  },
  close: function close() {
    this.placement = '';
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