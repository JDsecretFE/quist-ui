(function(){
  
  var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 97);
/******/ })
/************************************************************************/
/******/ ({

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(98)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerVersion: '0.0.5'})


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.default = {};
(exports.default || module.exports).manifest = {"package":"com.quist-ui.demo","name":"quist-ui","versionName":"0.0.1","versionCode":"1","minPlatformVersion":"1000","icon":"/Common/quist-logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.device"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":750},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Button":{"component":"index"},"Toast":{"component":"index"},"Swiper":{"component":"index"},"Checkbox":{"component":"index"},"Radio":{"component":"index"},"Switch":{"component":"index"},"Input":{"component":"index"},"Counter":{"component":"index"},"Dialog":{"component":"index"},"Drawer":{"component":"index"},"Loading":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#000000","menu":false,"pages":{"Home":{"titleBarText":"QuistUI组件库"}}}};
}

/***/ })

/******/ });
  };
  if (typeof window === "undefined") {
    return createAppHandler();
  }
  else {
    window.createAppHandler = createAppHandler
    // H5注入manifest以获取features
    global.manifest = {"package":"com.quist-ui.demo","name":"quist-ui","versionName":"0.0.1","versionCode":"1","minPlatformVersion":"1000","icon":"/Common/quist-logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"},{"name":"system.device"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"debug","designWidth":750},"router":{"entry":"Home","pages":{"Home":{"component":"index"},"Button":{"component":"index"},"Toast":{"component":"index"},"Swiper":{"component":"index"},"Checkbox":{"component":"index"},"Radio":{"component":"index"},"Switch":{"component":"index"},"Input":{"component":"index"},"Counter":{"component":"index"},"Dialog":{"component":"index"},"Drawer":{"component":"index"},"Loading":{"component":"index"}}},"display":{"titleBarBackgroundColor":"#ffffff","titleBarTextColor":"#000000","menu":false,"pages":{"Home":{"titleBarText":"QuistUI组件库"}}}};
  }
})();
//# sourceMappingURL=app.js.map