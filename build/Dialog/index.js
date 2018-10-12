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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
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
/* 3 */
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
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(33)
var $app_template$ = __webpack_require__(37)
var $app_style$ = __webpack_require__(38)
var $app_script$ = __webpack_require__(39)

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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0)
var $app_template$ = __webpack_require__(34)
var $app_style$ = __webpack_require__(35)
var $app_script$ = __webpack_require__(36)

$app_define$('@app-component/quist-dialog', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 34 */
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
      "attr": {},
      "classList": [
        "quist-dialog"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": function () {return this.title}
          },
          "classList": [
            "quist-dialog-title"
          ],
          "shown": function () {return this.title}
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quist-dialog-content"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.content}
              },
              "classList": [
                "quist-dialog-text"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quist-dialog-btns"
          ],
          "shown": function () {return this.footer},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "cancel-btn"
              ],
              "shown": function () {return this.cancelText},
              "events": {
                "click": "cancelClick"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.cancelText}
                  },
                  "classList": [
                    "cancel-text"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "ok-btn"
              ],
              "events": {
                "click": "okClick"
              },
              "children": [
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.okText}
                  },
                  "classList": [
                    "ok-text"
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
/* 35 */
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
  ".quist-dialog": {
    "flexDirection": "column",
    "paddingTop": "40px",
    "width": "80%",
    "backgroundColor": "#ffffff",
    "borderRadius": "6px"
  },
  ".quist-dialog-title": {
    "marginBottom": "30px",
    "fontSize": "40px",
    "textAlign": "center"
  },
  ".quist-dialog-content": {
    "flex": 1,
    "paddingTop": "0px",
    "paddingRight": "60px",
    "paddingBottom": "30px",
    "paddingLeft": "60px",
    "justifyContent": "center",
    "fontSize": "32px",
    "alignItems": "center"
  },
  ".quist-dialog-text": {
    "textAlign": "center",
    "lineHeight": "40px"
  },
  ".quist-dialog-btns": {
    "width": "100%",
    "height": "80px",
    "alignItems": "center",
    "borderTopColor": "#d9d9d9",
    "borderTopWidth": "1px",
    "borderStyle": "solid"
  },
  ".quist-dialog .cancel-text": {
    "color": "#666666",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-dialog"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cancel-text"
        }
      ]
    }
  },
  ".quist-dialog .ok-text": {
    "color": "#1890ff",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-dialog"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ok-text"
        }
      ]
    }
  },
  ".quist-dialog .cancel-btn": {
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "flex": 1,
    "borderRightColor": "#d9d9d9",
    "borderRightWidth": "1px",
    "borderStyle": "solid",
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-dialog"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "cancel-btn"
        }
      ]
    }
  },
  ".quist-dialog .ok-btn": {
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "flex": 1,
    "_meta": {
      "ruleDef": [
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "quist-dialog"
        },
        {
          "t": "d"
        },
        {
          "t": "a",
          "n": "class",
          "i": false,
          "a": "element",
          "v": "ok-btn"
        }
      ]
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    footer: {
      type: Boolean,
      default: true
    },
    maskClosable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    }
  },
  overlayClick: function overlayClick() {
    this.$emit('onCancel', this.type);
  },
  cancelClick: function cancelClick() {
    this.$emit('onCancel', this.type);
  },
  okClick: function okClick() {
    this.$emit('onOk', this.type);
  }
};}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "dialog-demo"
  ],
  "children": [
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "常规对话框"
      },
      "events": {
        "click": "normal"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "只有一个按钮的对话框"
      },
      "events": {
        "click": "oneBtn"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "无标题的对话框"
      },
      "events": {
        "click": "noTitle"
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "无底部按钮无标题的对话框"
      },
      "events": {
        "click": "noFooter"
      }
    },
    {
      "type": "quist-dialog",
      "attr": {
        "visible": function () {return this.visible},
        "maskClosable": function () {return true},
        "title": "标题",
        "cancelText": "取消",
        "content": "这是内容这是内容",
        "type": "normal"
      },
      "events": {
        "on-cancel": "onCancel",
        "on-ok": "onOk"
      }
    },
    {
      "type": "quist-dialog",
      "attr": {
        "visible": function () {return this.visibleOnebtn},
        "maskClosable": "",
        "title": "标题",
        "content": "只有一个确定按钮",
        "type": "onebtn"
      },
      "events": {
        "on-cancel": "onCancel",
        "on-ok": "onOk"
      }
    },
    {
      "type": "quist-dialog",
      "attr": {
        "visible": function () {return this.visibleNotitle},
        "cancelText": "取消",
        "content": "没有标题没有标题没有标题没有标题没有标题",
        "type": "notitle"
      },
      "events": {
        "on-cancel": "onCancel",
        "on-ok": "onOk"
      }
    },
    {
      "type": "quist-dialog",
      "attr": {
        "visible": function () {return this.visibleNofooter},
        "maskClosable": function () {return true},
        "footer": function () {return false},
        "content": "没有标题没有标题没有标题没有标题没有标题",
        "type": "nofooter"
      },
      "events": {
        "on-cancel": "onCancel"
      }
    }
  ]
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = {
  ".dialog-demo": {
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
  }
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: function data() {
    return {
      visible: false,
      visibleOnebtn: false,
      visibleNotitle: false,
      visibleNofooter: false
    };
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: 'Dialog'
    });
  },
  normal: function normal() {
    this.visible = true;
  },
  oneBtn: function oneBtn() {
    this.visibleOnebtn = true;
  },
  noTitle: function noTitle() {
    this.visibleNotitle = true;
  },
  noFooter: function noFooter() {
    this.visibleNofooter = true;
  },
  onCancel: function onCancel(data) {
    switch (data.detail) {
      case 'normal':
        this.visible = false;
        break;
      case 'onebtn':
        this.visibleOnebtn = false;
        break;
      case 'notitle':
        this.visibleNotitle = false;
        break;
      case 'nofooter':
        this.visibleNofooter = false;
        break;
    }
    console.log('点击了取消按钮');
  },
  onOk: function onOk(data) {
    switch (data.detail) {
      case 'normal':
        this.visible = false;
        break;
      case 'onebtn':
        this.visibleOnebtn = false;
        break;
      case 'notitle':
        this.visibleNotitle = false;
        break;
      case 'nofooter':
        this.visibleNofooter = false;
        break;
    }
    console.log('点击了确认按钮');
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