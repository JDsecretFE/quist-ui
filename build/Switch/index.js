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
/******/ 	return __webpack_require__(__webpack_require__.s = 85);
/******/ })
/************************************************************************/
/******/ ({

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(86)
var $app_template$ = __webpack_require__(90)
var $app_style$ = __webpack_require__(91)
var $app_script$ = __webpack_require__(92)

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

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(87)
var $app_style$ = __webpack_require__(88)
var $app_script$ = __webpack_require__(89)

$app_define$('@app-component/quist-switch', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": function () {return ['quist-switch', this.className]},
      "children": [
        {
          "type": "stack",
          "attr": {
            "id": function () {return this.id}
          },
          "classList": function () {return ['quist-switch__checkbox', this.disabled?'quist-switch__checkbox--disabled':'']},
          "style": {
            "backgroundColor": function () {return this.checked?this.checkedColor:this.checkColor}
          },
          "id": function () {return this.id},
          "events": {
            "click": "onClick"
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": function () {return ['quist-switch__thumb', this.checked?'quist-switch__thumb--open':'quist-switch__thumb--close']}
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 88:
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
        "transform": "{\"translateX\":\"0px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"80px\"}",
        "time": 100
      }
    ],
    "close": [
      {
        "transform": "{\"translateX\":\"80px\"}",
        "time": 0
      },
      {
        "transform": "{\"translateX\":\"0px\"}",
        "time": 100
      }
    ]
  },
  ".quist-switch": {
    "alignItems": "center"
  },
  ".quist-switch__checkbox": {
    "width": "156px",
    "height": "76px",
    "borderRadius": "38px"
  },
  ".quist-switch__checkbox--disabled": {
    "opacity": 0.5
  },
  ".quist-switch__thumb": {
    "marginTop": "4px",
    "marginRight": "4px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "width": "68px",
    "height": "68px",
    "borderRadius": "34px",
    "backgroundColor": "#ffffff"
  },
  ".quist-switch__thumb--open": {
    "animationName": "open",
    "animationDuration": "200ms",
    "animationFillMode": "forwards"
  },
  ".quist-switch__thumb--close": {
    "animationName": "close",
    "animationDuration": "200ms",
    "animationFillMode": "forwards"
  }
}

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    id: String,
    checkColor: {
      type: String,
      default: '#C1C1C1'
    },
    checkedColor: {
      type: String,
      default: '#2998F9'
    },
    className: {
      type: String,
      default: ''
    }
  },
  onReady: function onReady() {
    this.$watch('checked', 'change');
  },
  onClick: function onClick() {
    if (!this.disabled) {
      this.checked = !this.checked;
    }
  },
  change: function change() {
    this.$emit('onChange', { id: this.id, checked: this.checked });
  }
};}

/***/ }),

/***/ 90:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "switch-demo"
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
            "value": function () {return '选项' + (this.data1)}
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-switch",
          "attr": {
            "checked": function () {return false},
            "className": "quist-switch-demo"
          },
          "events": {
            "on-change": "callback1"
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
            "value": function () {return '选项 ' + (this.data3) + ' - 不可用'}
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-switch",
          "attr": {
            "disabled": "",
            "checked": function () {return false}
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
            "value": function () {return '选项 ' + (this.data4) + ' - 不可用'}
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-switch",
          "attr": {
            "disabled": function () {return true},
            "checked": ""
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
          "type": "label",
          "attr": {
            "target": "isDefault",
            "value": "自定义样式开关"
          },
          "classList": [
            "item-txt"
          ]
        },
        {
          "type": "quist-switch",
          "attr": {
            "checked": function () {return false},
            "id": "isDefault",
            "checkedColor": "red"
          },
          "id": "isDefault"
        }
      ]
    }
  ]
}

/***/ }),

/***/ 91:
/***/ (function(module, exports) {

module.exports = {
  ".switch-demo": {
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

/***/ 92:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = {
  data: {
    data1: false,
    data3: false,
    data4: true
  },
  onInit: function onInit() {
    this.$page.setTitleBar({ text: 'Switch' });
  },
  callback1: function callback1(data) {
    this.data1 = data.detail.checked;
  },
  callback2: function callback2(data) {
    this.data2 = data.detail.checked;
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