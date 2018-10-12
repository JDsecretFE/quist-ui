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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(49)
var $app_style$ = __webpack_require__(50)
var $app_script$ = __webpack_require__(51)

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

/***/ 49:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "quist-doc-page"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "introduce"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Common/quist-logo.png"
          },
          "classList": [
            "quist-logo"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": "Quist-UI:快应用UI组件库，简洁，易用，高效"
          },
          "classList": [
            "introduce-text"
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "表单组件"
          },
          "classList": [
            "item-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Button',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "button "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "按钮"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Checkbox',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "checkbox "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "多选框"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Radio',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "radio "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "单选框"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Switch',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "switch "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "开关"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Input',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "input "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "输入框"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "item-container"
      ],
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "功能组件"
          },
          "classList": [
            "item-title"
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item-content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Counter',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "counter "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "计数器"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Loading',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "loading "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "加载"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-li"
              ],
              "events": {
                "click": function (evt) {this.detail('Swiper',evt)}
              },
              "children": [
                {
                  "type": "text",
                  "attr": {},
                  "classList": [
                    "item-li-detail"
                  ],
                  "children": [
                    {
                      "type": "span",
                      "attr": {
                        "value": "swiper "
                      }
                    },
                    {
                      "type": "span",
                      "attr": {
                        "value": "轮播图"
                      },
                      "classList": [
                        "item-name"
                      ]
                    }
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": "/Common/img/arrow_right.webp"
                  },
                  "classList": [
                    "item_arrow_img"
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "item-container"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "提示反馈"
              },
              "classList": [
                "item-title"
              ]
            },
            {
              "type": "div",
              "attr": {},
              "classList": [
                "item-content"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-li"
                  ],
                  "events": {
                    "click": function (evt) {this.detail('Drawer',evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "item-li-detail"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "drawer "
                          }
                        },
                        {
                          "type": "span",
                          "attr": {
                            "value": "抽屉"
                          },
                          "classList": [
                            "item-name"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/img/arrow_right.webp"
                      },
                      "classList": [
                        "item_arrow_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-li"
                  ],
                  "events": {
                    "click": function (evt) {this.detail('Toast',evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "item-li-detail"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "toast "
                          }
                        },
                        {
                          "type": "span",
                          "attr": {
                            "value": "提示"
                          },
                          "classList": [
                            "item-name"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/img/arrow_right.webp"
                      },
                      "classList": [
                        "item_arrow_img"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "item-li"
                  ],
                  "events": {
                    "click": function (evt) {this.detail('Dialog',evt)}
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {},
                      "classList": [
                        "item-li-detail"
                      ],
                      "children": [
                        {
                          "type": "span",
                          "attr": {
                            "value": "dialog "
                          }
                        },
                        {
                          "type": "span",
                          "attr": {
                            "value": "对话框"
                          },
                          "classList": [
                            "item-name"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": "/Common/img/arrow_right.webp"
                      },
                      "classList": [
                        "item_arrow_img"
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

/***/ 50:
/***/ (function(module, exports) {

module.exports = {
  ".quist-doc-page": {
    "backgroundColor": "#f8f8f8",
    "flexDirection": "column"
  },
  ".introduce": {
    "flexDirection": "column",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "paddingLeft": "30px",
    "paddingRight": "30px",
    "marginBottom": "60px",
    "marginTop": "60px"
  },
  ".quist-logo": {
    "width": "80px",
    "height": "80px",
    "marginBottom": "20px"
  },
  ".introduce-text": {
    "color": "#999999",
    "fontSize": "28px",
    "textAlign": "center"
  },
  ".item-container": {
    "flexDirection": "column",
    "marginBottom": "30px"
  },
  ".item-title": {
    "marginTop": "30px",
    "marginRight": "30px",
    "marginBottom": "30px",
    "marginLeft": "30px",
    "color": "#888888",
    "fontSize": "32px"
  },
  ".item-content": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff"
  },
  ".item-li": {
    "borderTopColor": "#d9d9d9",
    "borderRightColor": "#d9d9d9",
    "borderBottomColor": "#d9d9d9",
    "borderLeftColor": "#d9d9d9",
    "borderBottomWidth": "1px",
    "alignItems": "center"
  },
  ".item-li-detail": {
    "paddingTop": "30px",
    "paddingBottom": "30px",
    "color": "#000000",
    "flex": 1,
    "fontSize": "28px",
    "marginLeft": "30px"
  },
  ".item_arrow_img": {
    "height": "20px",
    "width": "20px",
    "marginRight": "30px",
    "resizeMode": "contain"
  },
  ".item-name": {
    "color": "#314659"
  }
}

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _system = $app_require$('@app-module/system.router');

var _system2 = _interopRequireDefault(_system);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  detail: function detail(src) {
    _system2.default.push({ uri: src });
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