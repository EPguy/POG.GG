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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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
  }, __jsx("div", {
    className: "jsx-3425952613" + " " + "LeagueBackground",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("nav", {
    className: "jsx-3425952613" + " " + "Navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3425952613" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link Gilroy brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "E-Pog.GG"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "\uACBD\uAE30 \uACB0\uACFC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "\uD504\uB85C\uBE4C\uB4DC"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\uACBD\uAE30 \uC77C\uC815"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\uD558\uC774\uB77C\uC774\uD2B8"), __jsx("a", {
    href: "#",
    className: "jsx-3425952613" + " " + "Menus__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\uCEE4\uBBA4\uB2C8\uD2F0"), __jsx("a", {
    href: "/login",
    className: "jsx-3425952613" + " " + "Menus__login float-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3425952613",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "\uB85C\uADF8\uC778")))), children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3425952613",
    __self: undefined
  }, ".Navigation{clear:both;height:3.75rem;line-height:3.75rem;background-color:#27282d;color:#fff;position:-webkit-sticky;position:sticky;top:0;z-index:10;border-bottom:1px solid #2a2b30;}.container{color:#fbfbfb;max-width:1140px;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.Menus__link{font-size:1px;font-size:1rem;margin-right:1.6rem;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;}.Menus__link.brand{font-size:1.875rem;font-family:Gilroy;color:#db0442;margin-right:4rem;}.Menus__link:not(.brand){top:-.25rem;position:relative;color:#fbfbfb;}.Menus__login{font-size:.75px;font-size:.75rem;padding-left:1.25rem;padding-right:1.25rem;cursor:pointer;margin-top:.875rem;height:2rem;line-height:normal;border:1px solid #01d1b2;color:#01d1b2;padding-top:.4rem;}.Menus__login:hover{-webkit-animation:login 0.3s ease 1;-webkit-animation-fill-mode:both;}@-webkit-keyframes login{100%{border-color:#16776A;color:#16776A;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxBcHBMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJpQixBQUdvQyxBQVdHLEFBU0EsQUFPSyxBQU1QLEFBS0ksQUFhcUIsQUFLWixXQXZEVixDQWlDRyxFQXRCRCxBQVNGLEVBa0JFLEdBWEUsRUE2QkEsS0F2REMsR0FvQkEsQ0FhTixDQXRCSCxFQTJCVSxFQWtCckIsQ0FMTCxFQXhCbUIsSUFmSyxFQXNCdkIsRUFqQzZCLEdBb0JSLEdBT0MsRUFXSSxPQTFCSixRQXNDdEIsQ0F0QkEsQ0EzQmUsS0FzQ0ksR0ExQkcsR0FYRixTQXNDRyxNQTFCRixhQTJCTCxJQTFCaEIsUUFaVSxBQXVDYSxNQXRDUixNQWlCTyxLQWhCYyxFQXNDUCxXQXJCN0IsY0FzQmtCLEtBdENsQixTQXVDc0Isa0JBQ3RCIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcQXBwTGF5b3V0XFxBcHBMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwTGF5b3V0ID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkxlYWd1ZUJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJOYXZpZ2F0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rIEdpbHJveSBicmFuZFwiIGhyZWY9XCIjXCI+RS1Qb2cuR0c8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPuqyveq4sCDqsrDqs7w8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTWVudXNfX2xpbmtcIiBocmVmPVwiI1wiPu2UhOuhnOu5jOuTnDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+6rK96riwIOydvOyglTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJNZW51c19fbGlua1wiIGhyZWY9XCIjXCI+7ZWY7J2065287J207Yq4PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIk1lbnVzX19saW5rXCIgaHJlZj1cIiNcIj7su6TrrqTri4jti7A8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9sb2dpblwiIGNsYXNzTmFtZT1cIk1lbnVzX19sb2dpbiBmbG9hdC1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7roZzqt7jsnbg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuTmF2aWdhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyODJkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYTJiMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xpbmsuYnJhbmQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogR2lscm95O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RiMDQ0MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuTWVudXNfX2xpbms6bm90KC5icmFuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0uMjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5NZW51c19fbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC44NzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzAxZDFiMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMWQxYjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAuNHJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLk1lbnVzX19sb2dpbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOmxvZ2luICAgMC4zcyBlYXNlIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTpib3RoXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsb2dpbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgMTAwJXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE2Nzc2QTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAgIzE2Nzc2QTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\AppLayout\\AppLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/AppLayout/AppLayout */ "./components/AppLayout/AppLayout.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const EPogg = ({
  Component
}) => {
  console.log("hi");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-1573724804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, "e-pog.gg")), __jsx(_components_AppLayout_AppLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(Component, {
    className: "jsx-1573724804",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1573724804",
    __self: undefined
  }, ".LeagueBackground{position:absolute;top:0;left:0;right:0;bottom:0;position:fixed;background-repeat:no-repeat;background-image:url(/static/lck_background.png);background-size:50%;background-position:50%;opacity:.3;pointer-events:none;}*{box-sizing:border-box;}body{margin:0;font-family:Spoqa Han Sans,Spoqa Han Sans JP,\"Sans-serif\",\"sans-serif\",Apple SD Gothic Neo,Helvetica Neue,Arial;font-size:1rem;background-color:#1e2025;font-weight:400;line-height:1.5;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}img,svg{vertical-align:middle;}td{display:table-cell;vertical-align:inherit;}.Icon,.Menus__link{display:inline-block;}.Gilroy{font-family:Gilroy,Spoqa Han Sans,Spoqa Han Sans JP,\"Sans-serif\";font-weight:700;}.float-right{float:right!important;}.FluidContainer{background-color:#1e2025;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXF9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZWEsQUFHdUMsQUFjSSxBQUdiLEFBUVksQUFJQyxBQUdILEFBSUUsQUFHNEMsQUFJM0MsQUFHRyxTQTVCdUYsU0FqQjFHLENBZ0NpQixFQUkzQixDQXRCQSxBQWVBLEFBY0EsRUExQ1csQ0E2Q1gsTUE1Q1ksUUFDQyxHQThCYixNQTdCbUIsRUFxQkgsWUFDaEIsQ0FyQmdDLEVBa0NaLGdCQUNwQixVQWxDb0QsOEJBWWpDLGVBQ1UsSUFaTCxvQkFDSSxDQVlSLGdCQUNBLE9BWkwsU0FhZixFQVp3QixvQkFDeEIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9BcHBMYXlvdXQvQXBwTGF5b3V0JztcclxuXHJcbmNvbnN0IEVQb2dnID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiaGlcIilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+ZS1wb2cuZ2c8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50Lz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLkxlYWd1ZUJhY2tncm91bmQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKC9zdGF0aWMvbGNrX2JhY2tncm91bmQucG5nKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAqIHtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBTcG9xYSBIYW4gU2FucyxTcG9xYSBIYW4gU2FucyBKUCxcIlNhbnMtc2VyaWZcIixcInNhbnMtc2VyaWZcIixBcHBsZSBTRCBHb3RoaWMgTmVvLEhlbHZldGljYSBOZXVlLEFyaWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDI1O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcsIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkljb24sIC5NZW51c19fbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkdpbHJveSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEdpbHJveSxTcG9xYSBIYW4gU2FucyxTcG9xYSBIYW4gU2FucyBKUCxcIlNhbnMtc2VyaWZcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZsb2F0LXJpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLkZsdWlkQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUyMDI1O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFUG9nZzsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\_app.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (EPogg);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=_app.js.map