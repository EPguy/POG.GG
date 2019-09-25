module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: getPastMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPastMatch", function() { return getPastMatch; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const address = "http://localhost:8080";
function getPastMatch() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/pastMatch");
}

/***/ }),

/***/ "./components/AppLayout/AppLayout.js":
/*!*******************************************!*\
  !*** ./components/AppLayout/AppLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\AppLayout\\AppLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const AppLayout = ({
  children
}) => {
  return __jsx("div", {
    className: "jsx-3425952613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("nav", {
    className: "jsx-3425952613" + " " + "Navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3425952613" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link Gilroy brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "E-Pog.GG"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "\uACBD\uAE30 \uACB0\uACFC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\uD504\uB85C\uBE4C\uB4DC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\uACBD\uAE30 \uC77C\uC815"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\uD558\uC774\uB77C\uC774\uD2B8"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\uCEE4\uBBA4\uB2C8\uD2F0"), __jsx("span", {
    className: "jsx-3425952613" + " " + "Menus__login float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3425952613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778")))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3425952613",
    __self: undefined
  }, ".Navigation{clear:both;height:3.75rem;line-height:3.75rem;background-color:#27282d;color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:10;border-bottom:1px solid #2a2b30;}.container{color:#fbfbfb;max-width:1140px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.Menus__link{font-size:1px;font-size:1rem;margin-right:1.6rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;}.Menus__link.brand{font-size:1.875rem;font-family:Gilroy;color:#db0442;margin-right:4rem;}.Menus__link:not(.brand){top:-.25rem;position:relative;color:#fbfbfb;}.Menus__login{font-size:.75px;font-size:.75rem;padding-left:1.25rem;padding-right:1.25rem;cursor:pointer;margin-top:.875rem;height:2rem;line-height:normal;border:1px solid #01d1b2;color:#01d1b2;padding-top:.4rem;}.Menus__login:hover{-webkit-animation:login 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes login{100%{border-color:#16776A;color:#16776A;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxBcHBMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JpQixBQUdvQyxBQVdHLEFBU0EsQUFPSyxBQU1QLEFBS0ksQUFhcUIsQUFLWixXQXZEVixDQWlDRyxFQXRCRCxBQVNGLEVBa0JFLEdBWEUsRUE2QkEsS0F2REMsR0FvQkEsQ0FhTixDQXRCSCxFQTJCVSxFQWtCckIsQ0FMTCxFQXhCbUIsSUFmSyxFQXNCdkIsRUFqQzZCLEdBb0JSLEdBT0MsRUFXSSxPQTFCSixRQXNDdEIsQ0F0QkEsQ0EzQmUsS0FzQ0ksR0ExQkcsR0FYRixTQXNDRyxNQTFCRixhQTJCTCxJQTFCaEIsUUFaVSxBQXVDYSxNQXRDUixNQWlCTyxLQWhCYyxFQXNDUCxXQXJCN0IsY0FzQmtCLEtBdENsQixTQXVDc0Isa0JBQ3RCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxBcHBMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIk5hdmlnYXRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmsgR2lscm95IGJyYW5kXCIgaHJlZj1cIiNcIj5FLVBvZy5HRzwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+6rK96riwIOqysOqzvDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+7ZSE66Gc67mM65OcPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7qsr3quLAg7J287KCVPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7tlZjsnbTrnbzsnbTtirg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPuy7pOuupOuLiO2LsDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJNZW51c19fbG9naW4gZmxvYXQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+66Gc6re47J24PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLk5hdmlnYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogYm90aDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmEyYjMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19saW5rLmJyYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdpbHJveTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkYjA0NDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19saW5rOm5vdCguYnJhbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAtLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xvZ2luIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMWQxYjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDFkMWIyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogLjRyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbG9naW46aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjpsb2dpbiAgIDAuM3MgZWFzZSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6Ym90aFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbG9naW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEwMCV7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICMxNjc3NkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogICMxNjc3NkE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\AppLayout\\AppLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./components/Home/LeagueSelector.js":
/*!*******************************************!*\
  !*** ./components/Home/LeagueSelector.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\LeagueSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LeagueSelector = () => {
  console.log("hi");
  return __jsx("div", {
    className: "jsx-2918769045",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "FluidContainer container-fluid LeagueSelector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2918769045" + " " + "TournamentSymbol LeagueSelector__highlighted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: "static/lck_image.png",
    alt: "LCK 2019 Summer Season",
    className: "jsx-2918769045" + " " + "TournamentSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2918769045" + " " + "TournamentSymbol__label Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "LCK 2019 Summer")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2918769045",
    __self: undefined
  }, ".LeagueSelector{background-color:#27282d;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.LeagueSelector .container{position:relative;}.TournamentSymbol{padding-bottom:.625rem;border-bottom:2px solid transparent;}.TournamentSymbol__image{height:2.5rem;width:2.5rem;margin-top:.625rem;vertical-align:top;}.TournamentSymbol__badge,.TournamentSymbol__label{margin-left:.625rem;display:inline-block;vertical-align:top;margin-top:.625rem;line-height:2.5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcTGVhZ3VlU2VsZWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYStCLEFBRzhDLEFBS2QsQUFPTyxBQUdLLEFBSVQsQUFNTSxXQW5CRCxHQWNOLElBUGpCLEVBYXlCLEdBVmUsRUFmckIsRUFvQkksR0FkRCxVQUxELENBeUJFLEtBTEEsRUFkRCxXQVN0QixDQVd1QixLQUx2QixDQWRxQixhQW9CRSxJQW5CdkIsZUFvQkEsMkJBM0JBIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcTGVhZ3VlU2VsZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5jb25zdCBMZWFndWVTZWxlY3RvciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGbHVpZENvbnRhaW5lciBjb250YWluZXItZmx1aWQgTGVhZ3VlU2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUb3VybmFtZW50U3ltYm9sIExlYWd1ZVNlbGVjdG9yX19oaWdobGlnaHRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIlRvdXJuYW1lbnRTeW1ib2xfX2ltYWdlXCIgc3JjPVwic3RhdGljL2xja19pbWFnZS5wbmdcIiBhbHQ9XCJMQ0sgMjAxOSBTdW1tZXIgU2Vhc29uXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUb3VybmFtZW50U3ltYm9sX19sYWJlbCBHaWxyb3lcIj5MQ0sgMjAxOSBTdW1tZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgICAuTGVhZ3VlU2VsZWN0b3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI4MmQ7O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb250YWluZXItZmx1aWQge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5MZWFndWVTZWxlY3RvciAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuVG91cm5hbWVudFN5bWJvbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLlRvdXJuYW1lbnRTeW1ib2xfX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5Ub3VybmFtZW50U3ltYm9sX19iYWRnZSwgLlRvdXJuYW1lbnRTeW1ib2xfX2xhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExlYWd1ZVNlbGVjdG9yOyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\LeagueSelector.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LeagueSelector);

/***/ }),

/***/ "./components/Home/LiveStream.js":
/*!***************************************!*\
  !*** ./components/Home/LiveStream.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\LiveStream.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LiveStream = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2880612783" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2880612783" + " " + "container LiveStreams Intro__section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-2880612783" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2880612783" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2880612783" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2880612783" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2880612783" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2880612783" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), "Live STREAMING"), __jsx("div", {
    className: "jsx-2880612783" + " " + "LiveStreams__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2880612783" + " " + "LiveStreams__streaming",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-2880612783",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://static-cdn.jtvnw.net/previews-ttv/live_user_rush-320x180.jpg",
    className: "jsx-2880612783" + " " + "LiveStreams__streaming__thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2880612783" + " " + "LiveStreams__streaming_player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("figure", {
    style: {
      backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/60/FOX_Rush_2019_Split_1.png)"
    },
    className: "jsx-2880612783" + " " + "PlayerIcon LiveStreams__streaming__playerIcon small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-2880612783" + " " + "LiveStreams__streaming__playerName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "FOX Rush"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2880612783",
    __self: undefined
  }, ".LiveStreams__container{margin-right:-.625rem;}.LiveStreams__streaming{display:inline-block;vertical-align:top;margin-bottom:1.25rem;margin-right:.625rem;width:calc(20% - .625rem);}.LiveStreams__streaming__thumbnail{width:100%;height:auto;margin-bottom:.5rem;}.PlayerIcon{width:2.5rem;height:2.5rem;background-size:cover;border-radius:50%;margin:0;}.PlayerIcon.small{width:1.875rem;height:1.875rem;}.LiveStreams__streaming__playerName{display:inline-block;vertical-align:top;position:relative;margin-left:.5rem;top:.2rem;color:#fbfbfb;}.LiveStreams__streaming__playerIcon{display:inline-block;vertical-align:top;border:1px solid #d8d8d8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcTGl2ZVN0cmVhbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmlCLEFBRytDLEFBR0QsQUFPVixBQUtFLEFBT0UsQUFJTSxBQVFBLFdBdkJULEVBS0UsRUFPRSxNQW5CRyxBQXVCQSxBQVFBLENBbEN2QixDQVd3QixJQUtFLElBTzFCLFNBbkIwQixBQXVCSixBQVFPLEdBdkI3QixNQUtzQixTQVdBLElBdkJHLEdBK0J6QixFQWxCYSxTQUNiLEFBVWMsT0F2QmdCLEdBd0JaLGNBQ2xCLFNBeEJBIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcTGl2ZVN0cmVhbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMaXZlU3RyZWFtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZsdWlkQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgTGl2ZVN0cmVhbXMgSW50cm9fX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiVGl0bGUgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTGl2ZSBTVFJFQU1JTkdcclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGl2ZVN0cmVhbXNfX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxpdmVTdHJlYW1zX19zdHJlYW1pbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJMaXZlU3RyZWFtc19fc3RyZWFtaW5nX190aHVtYm5haWxcIiBzcmM9XCJodHRwczovL3N0YXRpYy1jZG4uanR2bncubmV0L3ByZXZpZXdzLXR0di9saXZlX3VzZXJfcnVzaC0zMjB4MTgwLmpwZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxpdmVTdHJlYW1zX19zdHJlYW1pbmdfcGxheWVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiUGxheWVySWNvbiBMaXZlU3RyZWFtc19fc3RyZWFtaW5nX19wbGF5ZXJJY29uIHNtYWxsXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vZ2FtZXBlZGlhLmN1cnNlY2RuLmNvbS9sb2xlc3BvcnRzX2dhbWVwZWRpYV9lbi82LzYwL0ZPWF9SdXNoXzIwMTlfU3BsaXRfMS5wbmcpXCJ9fT48L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMaXZlU3RyZWFtc19fc3RyZWFtaW5nX19wbGF5ZXJOYW1lXCI+Rk9YIFJ1c2g8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuTGl2ZVN0cmVhbXNfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLS42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MaXZlU3RyZWFtc19fc3RyZWFtaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDIwJSAtIC42MjVyZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGl2ZVN0cmVhbXNfX3N0cmVhbWluZ19fdGh1bWJuYWlsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5QbGF5ZXJJY29uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUGxheWVySWNvbi5zbWFsbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjg3NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxpdmVTdHJlYW1zX19zdHJlYW1pbmdfX3BsYXllck5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxpdmVTdHJlYW1zX19zdHJlYW1pbmdfX3BsYXllckljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGl2ZVN0cmVhbTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\LiveStream.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LiveStream);

/***/ }),

/***/ "./components/Home/MatchSchedule.js":
/*!******************************************!*\
  !*** ./components/Home/MatchSchedule.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\MatchSchedule.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const MatchSchedule = () => {
  const {
    0: pastLCLMatch,
    1: SetPastLCLmatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: pastLJLMatch,
    1: SetPastLJLmatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: pastLECMatch,
    1: SetPastLECmatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: pastVCSMatch,
    1: SetPastVCSmatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const matchFilter = match => {
    for (let i = 0; i < match.length; i++) {
      if (match[i].league.name === "LCL") {
        SetPastLCLmatch(pastLCLMatch => pastLCLMatch.concat(match[i]));
      } else if (match[i].league.name === "LJL") {
        SetPastLJLmatch(pastLJLMatch => pastLJLMatch.concat(match[i]));
      } else if (match[i].league.name === "LEC") {
        SetPastLECmatch(pastLECMatch => pastLECMatch.concat(match[i]));
      } else if (match[i].league.name === "VCS") {
        SetPastVCSmatch(pastVCSMatch => pastVCSMatch.concat(match[i]));
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    _api_api__WEBPACK_IMPORTED_MODULE_2__["getPastMatch"]().then(response => {
      matchFilter(response.data);
    }).catch(error => console.log(error));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1100016805" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1100016805" + " " + "container Intro_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-1100016805" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "MATCH SCHEDULE", __jsx("div", {
    className: "jsx-1100016805" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1100016805" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }))), __jsx("ul", {
    className: "jsx-1100016805" + " " + "RecentMatches",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1100016805" + " " + "RecentMatches__split Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "LCL 2019 Summer Season"), pastLCLMatch && pastLCLMatch.map(v => {
    console.log(v);
    return __jsx("li", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "jsx-1100016805" + " " + "MatchBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column date Gilroy finished",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, v.end_at, __jsx("br", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }), "13:00"), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: undefined
    }, v.opponents[0].opponent.acronym), __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[0].opponent.image_url})`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: undefined
    }))), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard Gilroy MatchBar__column__score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard__overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: undefined
    }, "RESULT"), "3:1")), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column away",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: undefined
    }, __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[1].opponent.image_url}`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    })), __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, v.opponents[1].opponent.acronym)), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column arrow Gilroy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: undefined
    }, "DETAIL")));
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "RecentMatches__split Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "LJL 2019 Summer Season"), pastLJLMatch && pastLJLMatch.map(v => {
    console.log(v);
    return __jsx("li", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "jsx-1100016805" + " " + "MatchBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column date Gilroy finished",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: undefined
    }, v.end_at, __jsx("br", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }), "13:00"), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, v.opponents[0].opponent.acronym), __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[0].opponent.image_url})`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: undefined
    }))), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard Gilroy MatchBar__column__score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard__overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, "RESULT"), "3:1")), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column away",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[1].opponent.image_url}`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    })), __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: undefined
    }, v.opponents[1].opponent.acronym)), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column arrow Gilroy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, "DETAIL")));
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "RecentMatches__split Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "LEC 2019 Summer Season"), pastLECMatch && pastLECMatch.map(v => {
    console.log(v);
    return __jsx("li", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "jsx-1100016805" + " " + "MatchBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column date Gilroy finished",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: undefined
    }, v.end_at, __jsx("br", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: undefined
    }), "13:00"), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: undefined
    }, v.opponents[0].opponent.acronym), __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[0].opponent.image_url})`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: undefined
    }))), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard Gilroy MatchBar__column__score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard__overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: undefined
    }, "RESULT"), "3:1")), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column away",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: undefined
    }, __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[1].opponent.image_url}`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: undefined
    })), __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149
      },
      __self: undefined
    }, v.opponents[1].opponent.acronym)), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column arrow Gilroy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152
      },
      __self: undefined
    }, "DETAIL")));
  }), __jsx("div", {
    className: "jsx-1100016805" + " " + "RecentMatches__split Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "VCS 2019 Summer Season"), pastVCSMatch && pastVCSMatch.map(v => {
    console.log(v);
    return __jsx("li", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: undefined
    }, __jsx("a", {
      href: "#",
      className: "jsx-1100016805" + " " + "MatchBar",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column date Gilroy finished",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: undefined
    }, v.end_at, __jsx("br", {
      className: "jsx-1100016805",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169
      },
      __self: undefined
    }), "13:00"), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column home",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: undefined
    }, v.opponents[0].opponent.acronym), __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[0].opponent.image_url})`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175
      },
      __self: undefined
    }))), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column board",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard Gilroy MatchBar__column__score",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: undefined
    }, __jsx("div", {
      className: "jsx-1100016805" + " " + "ScoreBoard__overlay",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: undefined
    }, "RESULT"), "3:1")), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column away",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: undefined
    }, __jsx("figure", {
      className: "jsx-1100016805" + " " + "TeamSymbol MatchBar__column__symbol hidden-in-phone circleless",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185
      },
      __self: undefined
    }, __jsx("div", {
      style: {
        backgroundImage: `url(${v.opponents[1].opponent.image_url}`
      },
      className: "jsx-1100016805" + " " + "TeamSymbol__image",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: undefined
    })), __jsx("span", {
      className: "jsx-1100016805" + " " + "Gilroy MatchBar__team__line",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188
      },
      __self: undefined
    }, v.opponents[1].opponent.acronym)), __jsx("div", {
      className: "jsx-1100016805" + " " + "MatchBar__column arrow Gilroy",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191
      },
      __self: undefined
    }, "DETAIL")));
  })))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1100016805",
    __self: undefined
  }, ".RecentMatches{padding:0;margin:-1.5rem 0 0;}.RecentMatches__split{float:right;margin:.625rem;}.RecentMatches li,.RecentMatchesul{margin:0;list-style:none;}.MatchBar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:5rem;background-color:#27282d;width:100%;color:#fbfbfb;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;margin-bottom:.125rem;position:relative;}.MatchBar__column.arrow,.MatchBar__column.date{width:6.25rem;}.MatchBar__column.date{padding-left:1.25rem;}.MatchBar__column.finished{color:#5b5c64;}.MatchBar__column{white-space:nowrap;position:relative;}.MatchBar__column.home{text-align:right;}.MatchBar__column.away,.MatchBar__column.home{width:30%;}.MatchBar__column.board{text-align:center;}.MatchBar__column.away{text-align:left;}.MatchBar__column.away,.MatchBar__column.home{width:30%;}.MatchBar__column{white-space:nowrap;position:relative;}.MatchBar__column.arrow,.MatchBar__column.date{width:6.25rem;}.MatchBar__column.arrow{text-align:right;padding-right:1.25rem;justify-self:right;}.ScoreBoard{position:relative;width:7.5rem;height:2.5rem;line-height:2.5rem;background-color:#1e2025;overflow-y:hidden;cursor:pointer;}.ScoreBoard__overlay{position:absolute;top:0;width:100%;height:100%;-webkit-transition:top .15s;-webkit-transition:top .15s;transition:top .15s;background-color:#db0442;}.ScoreBoard__overlay:hover{-webkit-animation:overlay 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes overlay{100%{-webkit-transition:top .15s;transition:top .15s;-webkit-transition-property:top;transition-property:top;-webkit-transition-duration:0.15s;transition-duration:0.15s;-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-delay:0s;transition-delay:0s;}}.MatchBar__team__line{margin:0 1.5625rem;position:relative;top:-1.3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcTWF0Y2hTY2hlZHVsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwTWlCLEFBR21DLEFBSUUsQUFJSCxBQUlJLEFBYUMsQUFHTyxBQUdQLEFBR0ssQUFJRixBQUdQLEFBR1EsQUFHRixBQUdOLEFBR1MsQUFJTCxBQUdHLEFBS0MsQUFTQSxBQVNvQixBQUtkLEFBUUwsU0F2RkgsQ0FSRyxBQXlDdkIsQUFTQSxFQTlDbUIsRUFxQm5CLEFBTUEsQUEwQkEsRUFWQSxDQVRBLEFBc0IwQixDQWhCMUIsQUFxQmlCLEFBU1AsQ0F4Q1ksQUFtQkEsQUEyQ0EsRUFwRXRCLEdBK0NlLENBbEVmLEVBSkEsRUFKQSxFQWlFa0IsSUFVRixFQXpDaEIsQUFtQkEsQUEyQ2dCLENBYmpCLENBdkJ3QixNQU1BLEVBVVMsQ0FXQSxDQVVoQyxTQXBDQSxNQU02QixPQWdCN0IsR0F4RXVCLENBa0VDLGNBVEYsZUFvQlksR0FuQmYsZUFDbkIsQ0FRNkIseUJBQzdCLGdCQVV3QyxHQTdFTixxRUE4RU4sOENBN0VaLEVBOEVaLFVBN0V5Qix5QkFDZCxXQUNHLGNBQzJCLHlDQUNSLDBFQUNYLHNCQUNKLGtCQUN0QiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXE1hdGNoU2NoZWR1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi8uLi9hcGkvYXBpJztcclxuXHJcbmNvbnN0IE1hdGNoU2NoZWR1bGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbcGFzdExDTE1hdGNoLCBTZXRQYXN0TENMbWF0Y2hdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Bhc3RMSkxNYXRjaCwgU2V0UGFzdExKTG1hdGNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwYXN0TEVDTWF0Y2gsIFNldFBhc3RMRUNtYXRjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFzdFZDU01hdGNoLCBTZXRQYXN0VkNTbWF0Y2hdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgbWF0Y2hGaWx0ZXIgPSAobWF0Y2gpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbWF0Y2gubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYobWF0Y2hbaV0ubGVhZ3VlLm5hbWUgPT09IFwiTENMXCIpIHtcclxuICAgICAgICAgICAgICAgIFNldFBhc3RMQ0xtYXRjaChwYXN0TENMTWF0Y2ggPT4gcGFzdExDTE1hdGNoLmNvbmNhdChtYXRjaFtpXSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaFtpXS5sZWFndWUubmFtZSA9PT0gXCJMSkxcIikge1xyXG4gICAgICAgICAgICAgICAgU2V0UGFzdExKTG1hdGNoKHBhc3RMSkxNYXRjaCA9PiBwYXN0TEpMTWF0Y2guY29uY2F0KG1hdGNoW2ldKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG1hdGNoW2ldLmxlYWd1ZS5uYW1lID09PSBcIkxFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBTZXRQYXN0TEVDbWF0Y2gocGFzdExFQ01hdGNoID0+IHBhc3RMRUNNYXRjaC5jb25jYXQobWF0Y2hbaV0pKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobWF0Y2hbaV0ubGVhZ3VlLm5hbWUgPT09IFwiVkNTXCIpIHtcclxuICAgICAgICAgICAgICAgIFNldFBhc3RWQ1NtYXRjaChwYXN0VkNTTWF0Y2ggPT4gcGFzdFZDU01hdGNoLmNvbmNhdChtYXRjaFtpXSkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFwaS5nZXRQYXN0TWF0Y2goKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbWF0Y2hGaWx0ZXIocmVzcG9uc2UuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZsdWlkQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgSW50cm9fc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJUaXRsZSBHaWxyb3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTUFUQ0ggU0NIRURVTEVcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIlJlY2VudE1hdGNoZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWNlbnRNYXRjaGVzX19zcGxpdCBHaWxyb3lcIj5MQ0wgMjAxOSBTdW1tZXIgU2Vhc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RMQ0xNYXRjaCAmJiBwYXN0TENMTWF0Y2gubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWF0Y2hCYXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBkYXRlIEdpbHJveSBmaW5pc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5lbmRfYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzOjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzBdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2Lm9wcG9uZW50c1swXS5vcHBvbmVudC5pbWFnZV91cmx9KWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZCBHaWxyb3kgTWF0Y2hCYXJfX2NvbHVtbl9fc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZF9fb3ZlcmxheVwiPlJFU1VMVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzoxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBhd2F5XCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7di5vcHBvbmVudHNbMV0ub3Bwb25lbnQuaW1hZ2VfdXJsfWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzFdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hdGNoQmFyX19jb2x1bW4gYXJyb3cgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFVEFJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWNlbnRNYXRjaGVzX19zcGxpdCBHaWxyb3lcIj5MSkwgMjAxOSBTdW1tZXIgU2Vhc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RMSkxNYXRjaCAmJiBwYXN0TEpMTWF0Y2gubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWF0Y2hCYXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBkYXRlIEdpbHJveSBmaW5pc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5lbmRfYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzOjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzBdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2Lm9wcG9uZW50c1swXS5vcHBvbmVudC5pbWFnZV91cmx9KWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZCBHaWxyb3kgTWF0Y2hCYXJfX2NvbHVtbl9fc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZF9fb3ZlcmxheVwiPlJFU1VMVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzoxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBhd2F5XCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7di5vcHBvbmVudHNbMV0ub3Bwb25lbnQuaW1hZ2VfdXJsfWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzFdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hdGNoQmFyX19jb2x1bW4gYXJyb3cgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFVEFJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSZWNlbnRNYXRjaGVzX19zcGxpdCBHaWxyb3lcIj5MRUMgMjAxOSBTdW1tZXIgU2Vhc29uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3RMRUNNYXRjaCAmJiBwYXN0TEVDTWF0Y2gubWFwKHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHYpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWF0Y2hCYXJcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBkYXRlIEdpbHJveSBmaW5pc2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5lbmRfYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzOjAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGhvbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzBdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHt2Lm9wcG9uZW50c1swXS5vcHBvbmVudC5pbWFnZV91cmx9KWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZCBHaWxyb3kgTWF0Y2hCYXJfX2NvbHVtbl9fc2NvcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiU2NvcmVCb2FyZF9fb3ZlcmxheVwiPlJFU1VMVDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMzoxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBhd2F5XCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTWF0Y2hCYXJfX2NvbHVtbl9fc3ltYm9sIGhpZGRlbi1pbi1waG9uZSBjaXJjbGVsZXNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7di5vcHBvbmVudHNbMV0ub3Bwb25lbnQuaW1hZ2VfdXJsfWB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiR2lscm95IE1hdGNoQmFyX190ZWFtX19saW5lXCI+e3Yub3Bwb25lbnRzWzFdLm9wcG9uZW50LmFjcm9ueW19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hdGNoQmFyX19jb2x1bW4gYXJyb3cgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERFVEFJTFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUmVjZW50TWF0Y2hlc19fc3BsaXQgR2lscm95XCI+VkNTIDIwMTkgU3VtbWVyIFNlYXNvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXN0VkNTTWF0Y2ggJiYgcGFzdFZDU01hdGNoLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1hdGNoQmFyXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hdGNoQmFyX19jb2x1bW4gZGF0ZSBHaWxyb3kgZmluaXNoZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YuZW5kX2F0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxMzowMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBob21lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkdpbHJveSBNYXRjaEJhcl9fdGVhbV9fbGluZVwiPnt2Lm9wcG9uZW50c1swXS5vcHBvbmVudC5hY3JvbnltfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIE1hdGNoQmFyX19jb2x1bW5fX3N5bWJvbCBoaWRkZW4taW4tcGhvbmUgY2lyY2xlbGVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBgdXJsKCR7di5vcHBvbmVudHNbMF0ub3Bwb25lbnQuaW1hZ2VfdXJsfSlgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTWF0Y2hCYXJfX2NvbHVtbiBib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjb3JlQm9hcmQgR2lscm95IE1hdGNoQmFyX19jb2x1bW5fX3Njb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNjb3JlQm9hcmRfX292ZXJsYXlcIj5SRVNVTFQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM6MVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk1hdGNoQmFyX19jb2x1bW4gYXdheVwiPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIE1hdGNoQmFyX19jb2x1bW5fX3N5bWJvbCBoaWRkZW4taW4tcGhvbmUgY2lyY2xlbGVzc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke3Yub3Bwb25lbnRzWzFdLm9wcG9uZW50LmltYWdlX3VybH1gfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIkdpbHJveSBNYXRjaEJhcl9fdGVhbV9fbGluZVwiPnt2Lm9wcG9uZW50c1sxXS5vcHBvbmVudC5hY3JvbnltfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNYXRjaEJhcl9fY29sdW1uIGFycm93IEdpbHJveVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBERVRBSUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlJlY2VudE1hdGNoZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC0xLjVyZW0gMCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmVjZW50TWF0Y2hlc19fc3BsaXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogLjYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJlY2VudE1hdGNoZXMgbGksIC5SZWNlbnRNYXRjaGVzdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyODJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC4xMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uYXJyb3csIC5NYXRjaEJhcl9fY29sdW1uLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNi4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uZmluaXNoZWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzViNWM2NDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uLmhvbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uYXdheSwgLk1hdGNoQmFyX19jb2x1bW4uaG9tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uLmJvYXJkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hd2F5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX19jb2x1bW4uYXdheSwgLk1hdGNoQmFyX19jb2x1bW4uaG9tZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NYXRjaEJhcl9fY29sdW1uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hcnJvdywgLk1hdGNoQmFyX19jb2x1bW4uZGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2LjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWF0Y2hCYXJfX2NvbHVtbi5hcnJvdyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuU2NvcmVCb2FyZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTIwMjU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuU2NvcmVCb2FyZF9fb3ZlcmxheSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IHRvcCAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMDQ0MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlNjb3JlQm9hcmRfX292ZXJsYXkgOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246b3ZlcmxheSAgMC4zcyBlYXNlIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBvdmVybGF5e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1hdGNoQmFyX190ZWFtX19saW5lIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEuNTYyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xLjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF0Y2hTY2hlZHVsZTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\MatchSchedule.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (MatchSchedule);

/***/ }),

/***/ "./components/Home/TeamIntro.js":
/*!**************************************!*\
  !*** ./components/Home/TeamIntro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamIntro.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const TeamIntro = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3733778277" + " " + "Intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-3733778277" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3733778277" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), "LEAGUE OF LEGENDS CHAMPIONS KOREA TEAMS"), __jsx("div", {
    className: "jsx-3733778277" + " " + "LeagueTeams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3733778277" + " " + "LeagueTeams__teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "AF"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "DWG"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "GEN"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "GRF"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "HLE"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "SKT"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "JAG"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "KT"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "KZ"))), __jsx("a", {
    href: "#",
    className: "jsx-3733778277" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-3733778277" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"
    },
    className: "jsx-3733778277" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-3733778277" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "SB")))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3733778277",
    __self: undefined
  }, ".Intro{background-color:#1e2025;padding-top:2.5rem;padding-bottom:2.5rem;}.Title{font-size:1.875px;font-size:1.875rem;position:relative;padding-top:1rem;color:#fbfbfb;text-transform:uppercase;}.Title__squares{font-size:0;position:absolute;top:0;}.Title__square{display:inline-block;vertical-align:top;width:10px;height:8px;margin-right:2px;background-color:#db0442;}.Title__square.small{width:8px;}.LeagueTeams{text-align:center;margin-bottom:3rem;}.LeagueTeams__link{margin-bottom:1.25rem;display:inline-block;}.LeagueSelector .container{position:relative;}.LeagueTeams__link:not(:last-child){margin-right:1.25rem;}.TeamSymbol.large{width:5rem;height:5rem;}.LeagueTeams__team{text-align:center;background-color:#fff;width:4.6875rem!important;height:4.6875rem!important;}.LeagueTeams__team:hover{-webkit-animation:team 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes team{0%{-webkit-transform:scale(1.0,1.0);}100%{-webkit-transform:scale(1.1,1.1);}}.TeamSymbol{display:inline-block;width:3.75rem;height:3.75rem;position:relative;margin:0;}.TeamSymbol:not(.circleless){border:1px solid #d8d8d8;border-radius:50%;background-color:#fbfbfb;}.TeamSymbol__image{width:100%;height:100%;-webkit-transform:scale(.7);-webkit-transform:scale(.7);-ms-transform:scale(.7);transform:scale(.7);background-size:contain;background-repeat:no-repeat;background-position:50%;}.TeamSymbol__acronym{margin-top:.625rem;display:inline-block;color:#5b5c64;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcVGVhbUludHJvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNGaUIsQUFHa0QsQUFLUCxBQVFOLEFBS1MsQUFRWCxBQUdRLEFBSUksQUFJSixBQUdHLEFBR1YsQUFJTyxBQU9rQixBQU1yQyxBQUdBLEFBR3NCLEFBT0ksQUFLZCxBQVVRLFVBN0R2QixDQWlCZ0IsQUFtQ0EsQ0FqRU0sTUFSQyxBQXdCQSxBQVF2QixBQVUwQixDQXlDRCxFQXRFRixBQXNCdkIsQUEwQmtCLENBakNPLENBV3pCLEFBbUNnQyxFQS9FVCxBQXlFRCxLQTNEWixHQTZDTixBQUdBLEVBUEwsQUFZb0IsQ0FwRG5CLENBVHNCLEFBd0J0QixHQVhlLEFBNkJlLEFBeUNaLEdBdkRsQixBQXdDNkIsQ0F6RUgsTUFtRUosQ0FoRFAsQUE0RFMsR0FVeEIsQ0FuRnFCLE9BY0EsSUFuQnJCLEFBK0MrQixFQU0vQixBQWNhLEFBTWIsSUFuRWtCLEtBOERsQixFQWhENkIsT0FiQSxPQTBDN0IsV0E1QkEsT0FiQSxZQXVFNEIsd0JBQ0ksNEJBQ0osd0JBRTVCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcVGVhbUludHJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRlYW1JbnRybyA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbnRyb1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGbHVpZENvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiVGl0bGUgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExFQUdVRSBPRiBMRUdFTkRTIENIQU1QSU9OUyBLT1JFQSBURUFNU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX190ZWFtc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvQUYucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkFGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9EV0cucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkRXRzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvR0VOLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5HRU48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0dSRi5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+R1JGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9ITEUucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkhMRTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvU0tULnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5TS1Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0pBRy5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+SkFHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9LVC5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+S1Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0taLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5LWjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvU0IucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPlNCPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkludHJvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlMjAyNTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpdGxlX19zcXVhcmVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRpdGxlX19zcXVhcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjA0NDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UaXRsZV9fc3F1YXJlLnNtYWxsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLkxlYWd1ZVRlYW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlVGVhbXNfX2xpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5MZWFndWVTZWxlY3RvciAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlVGVhbXNfX2xpbms6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRlYW1TeW1ib2wubGFyZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlVGVhbXNfX3RlYW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0LjY4NzVyZW0haW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQuNjg3NXJlbSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTGVhZ3VlVGVhbXNfX3RlYW06aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjp0ZWFtICAgMC4zcyBlYXNlIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyB0ZWFte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAwJXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjAsIDEuMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxMDAle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5UZWFtU3ltYm9sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRlYW1TeW1ib2w6bm90KC5jaXJjbGVsZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQ4ZDg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRlYW1TeW1ib2xfX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKC43KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlRlYW1TeW1ib2xfX2Fjcm9ueW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNWI1YzY0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlYW1JbnRybzsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamIntro.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamIntro);

/***/ }),

/***/ "./components/Home/TeamRank.js":
/*!*************************************!*\
  !*** ./components/Home/TeamRank.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamRank.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const TeamRank = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1057806656" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "container Intro_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "jsx-1057806656" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), "LCK 2019 Summer \uC21C\uC704"), __jsx("div", {
    className: "jsx-1057806656" + " " + "Ranks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("table", {
    className: "jsx-1057806656" + " " + "RankTable Gilroy Ranks--desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("thead", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("th", {
    colspan: "3",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("th", {
    scope: "col",
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "\uC2B9-\uD328")), __jsx("th", {
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "\uC138\uD2B8")), __jsx("th", {
    scope: "col",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "\uB4DD\uC2E4\uCC28")))), __jsx("tbody", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-1057806656" + " " + "RankTable__row RankTable__lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("td", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-1057806656" + " " + "RankTabe__row__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "1"), __jsx("td", {
    className: "jsx-1057806656" + " " + "RankTable__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-1057806656" + " " + "hidden-in-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Griffin")), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "13W\xA05L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "72.2%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "29W\xA013L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, "69.0%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "16"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1057806656",
    __self: undefined
  }, ".Ranks table{width:100%;}.RankTable{border-collapse:initial;border-spacing:0 1rem;width:100%;}thead{display:table-header-group;vertical-align:middle;border-color:inherit;}.RankTable thead th:first-child{font-size:1.875px;font-size:1.875rem;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}th{text-align:inherit;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}.RankTable tbody td:first-child{width:5rem;position:relative;background-color:#fbfbfb;background-size:60%;background-position:.625rem;background-repeat:no-repeat;}.RankTable tbody td{height:3.75rem;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;background-color:#5b5c64;}.RankTable tbody tr.RankTable__lead td:not(:first-child){background-color:#db0442;}.RankTable tbody td:nth-child(2){font-size:1.5px;font-size:1.5rem;text-align:center;width:3rem;}.RankTable tbody td:nth-child(4){width:6rem;}.RankTable tbody td:last-child{width:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcVGVhbVJhbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RpQixBQUdvQyxBQUdhLEFBS0csQUFLVCxBQUlGLEFBSUcsQUFHSCxBQUlRLEFBS2IsQUFRSSxBQU1VLEFBR1QsQUFNTCxBQUdBLFdBMURmLEFBaUNzQixBQXVCdEIsQUFHQSxJQWxCNkMsQ0F4QmhCLEFBT0EsQUEwQlIsRUFyQ0UsQ0FRdkIsS0FsQjBCLEFBeUJBLENBbUIxQixFQXZDMEIsRUEwQkcsSUFpQlAsSUFyQ3RCLElBSUEsQUFPQSxLQXJCZSxBQXlCVSxHQXBCQSxFQTJDVixHQWpCUyxFQU9hLENBckNyQyxLQWdEQSxLQXZCQSxHQXBCQSxJQTBCZ0MsNEJBQ0EsNEJBQ2hDLEFBSzZCLHlCQUM3QiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXFRlYW1SYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGVhbVJhbmsgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGbHVpZENvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIEludHJvX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiVGl0bGUgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTENLIDIwMTkgU3VtbWVyIOyInOychFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSYW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiUmFua1RhYmxlIEdpbHJveSBSYW5rcy0tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY29sc3Bhbj1cIjJcIj48c3Bhbj7sirkt7YyoPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPjxzcGFuPuyEuO2KuDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48c3Bhbj7rk53si6TssKg8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiUmFua1RhYmxlX19yb3cgUmFua1RhYmxlX19sZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJSYW5rVGFiZV9fcm93X19sb2dvXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvR1JGLnBuZylcIn19PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIlJhbmtUYWJsZV9fbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLWluLW1vYmlsZVwiPkdyaWZmaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzVyZuYnNwOzVMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD43Mi4yJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yOVcmbmJzcDsxM0w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NjkuMCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtzIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI1YzY0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRyLlJhbmtUYWJsZV9fbGVhZCB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjA0NDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbVJhbms7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamRank.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamRank);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
/* harmony import */ var _components_Home_LeagueSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/LeagueSelector */ "./components/Home/LeagueSelector.js");
/* harmony import */ var _components_Home_TeamIntro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home/TeamIntro */ "./components/Home/TeamIntro.js");
/* harmony import */ var _components_Home_LiveStream__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home/LiveStream */ "./components/Home/LiveStream.js");
/* harmony import */ var _components_Home_MatchSchedule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home/MatchSchedule */ "./components/Home/MatchSchedule.js");
/* harmony import */ var _components_Home_TeamRank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/TeamRank */ "./components/Home/TeamRank.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: "LeagueBackground",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), __jsx(_components_Home_LeagueSelector__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}), __jsx(_components_Home_TeamIntro__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), __jsx(_components_Home_LiveStream__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_components_Home_MatchSchedule__WEBPACK_IMPORTED_MODULE_5__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), __jsx(_components_Home_TeamRank__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ReactProject\javaproject\lod.gg\Forntend\e-pog_frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map