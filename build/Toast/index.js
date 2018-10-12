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
/******/ 	return __webpack_require__(__webpack_require__.s = 93);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/quist-toast', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = {
  "type": "stack",
  "attr": {},
  "children": [
    {
      "type": "stack",
      "attr": {},
      "classList": [
        "quist-toast"
      ],
      "shown": function () {return this.value.text},
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "quist-toast__wrapper"
          ],
          "children": [
            {
              "type": "div",
              "attr": {
                "tid": "toast"
              },
              "classList": [
                "quist-toast__content"
              ],
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.value.src}
                  },
                  "shown": function () {return this.value.src},
                  "classList": [
                    "quist-toast__image"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": function () {return this.value.text}
                  },
                  "classList": [
                    "quist-toast__text"
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

/***/ 6:
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
    "quisttoastenter": [
      {
        "opacity": 0,
        "time": 0
      },
      {
        "opacity": 1,
        "time": 100
      }
    ],
    "quisttoastleave": [
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
  ".quist-toast": {
    "position": "fixed",
    "top": "0px",
    "left": "0px",
    "right": "0px",
    "bottom": "0px"
  },
  ".quist-toast__wrapper": {
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "animationName": "quisttoastenter",
    "animationDuration": "500ms",
    "animationFillMode": "forwards"
  },
  ".quist-toast__content": {
    "flexDirection": "column",
    "alignItems": "center",
    "paddingTop": "20px",
    "paddingRight": "27px",
    "paddingBottom": "20px",
    "paddingLeft": "27px",
    "borderRadius": "6px",
    "backgroundColor": "rgba(71,71,71,0.8)"
  },
  ".quist-toast__image": {
    "marginTop": "20px",
    "marginRight": "0px",
    "marginBottom": "24px",
    "marginLeft": "0px",
    "width": "100px"
  },
  ".quist-toast__text": {
    "color": "#1890ff",
    "fontSize": "32px"
  },
  ".quist-toast-leave": {
    "animationName": "quisttoastleave"
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  data: function data() {
    return {
      default: 500,
      value: {} };
  },
  show: function show(option) {
    var _this = this;

    this.value = {
      src: option.img,
      text: option.text || '',
      duration: option.duration || this.default };
    setTimeout(function () {
      setTimeout(function () {
        _this.value = {};
      }, 500);
    }, (option.duration || this.default) + 500);
  }
};}

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4)
var $app_template$ = __webpack_require__(94)
var $app_style$ = __webpack_require__(95)
var $app_script$ = __webpack_require__(96)

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

/***/ 94:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "toast-demo"
  ],
  "children": [
    {
      "type": "quist-toast",
      "attr": {
        "id": "quist-toast"
      },
      "id": "quist-toast"
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "默认样式提示"
      },
      "events": {
        "click": function (evt) {this.showToast('info',evt)}
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "自定义图标的提示"
      },
      "events": {
        "click": function (evt) {this.showToast('custom',evt)}
      }
    },
    {
      "type": "input",
      "attr": {
        "type": "button",
        "value": "自定义显示时长为5s的提示"
      },
      "events": {
        "click": function (evt) {this.showToast('duration',evt)}
      }
    }
  ]
}

/***/ }),

/***/ 95:
/***/ (function(module, exports) {

module.exports = {
  ".toast-demo": {
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

/***/ 96:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  private: {
    info: {
      text: '这是一个toast'
    },
    custom: {
      text: '这是一个toast',
      img: 'custom.png' },
    duration: {
      text: '这是一个toast',
      duration: 5000
    }
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Toast' });
  },
  onReady: function onReady() {
    this.toast = this.$child('quist-toast');
  },
  showToast: function showToast(type) {
    this.toast.show(this[type]);
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