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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/TeamIntro.js":
/*!**************************************!*\
  !*** ./components/Home/TeamIntro.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TeamIntro_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TeamIntro.scss */ "./components/Home/TeamIntro.scss");
/* harmony import */ var _TeamIntro_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TeamIntro_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamIntro.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const TeamIntro = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "Intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h3", {
    className: "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("div", {
    className: "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    className: "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), "LEAGUE OF LEGENDS CHAMPIONS KOREA TEAMS"), __jsx("div", {
    className: "LeagueTeams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "LeagueTeams__teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "AF"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "DWG"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "GEN"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "GRF"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "HLE"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "SKT"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "JAG"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "KT"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "KZ"))), __jsx("a", {
    className: "LeagueTeams__link",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("figure", {
    className: "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "TeamSymbol__image",
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("span", {
    className: "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, "SB")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamIntro);

/***/ }),

/***/ "./components/Home/TeamIntro.scss":
/*!****************************************!*\
  !*** ./components/Home/TeamIntro.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/community.js":
/*!****************************!*\
  !*** ./pages/community.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_TeamIntro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/TeamIntro */ "./components/Home/TeamIntro.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\community.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Community = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    style: {
      marginTop: "100px"
    },
    className: "jsx-2886349318" + " " + "LeagueTeams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2886349318" + " " + "LeagueTeams__teams",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "AF"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "DWG"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "GEN"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "GRF"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "HLE"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "SKT"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "JAG"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "KT"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "KZ"))), __jsx("a", {
    href: "#",
    className: "jsx-2886349318" + " " + "LeagueTeams__link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx("figure", {
    className: "jsx-2886349318" + " " + "TeamSymbol LeagueTeams__team large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"
    },
    className: "jsx-2886349318" + " " + "TeamSymbol__image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("span", {
    className: "jsx-2886349318" + " " + "TeamSymbol__acronym Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "SB"))))), __jsx("div", {
    className: "jsx-2886349318" + " " + "Post_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-2886349318" + " " + "array_tab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "jsx-2886349318" + " " + "tab_button on",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "\uC804\uCCB4\uAE00"), __jsx("button", {
    type: "button",
    className: "jsx-2886349318" + " " + "tab_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "\uC778\uAE30\uAE00"))), __jsx("div", {
    className: "jsx-2886349318" + " " + "Post_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("table", {
    className: "jsx-2886349318" + " " + "tip_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("colgroup", {
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("col", {
    style: {
      width: "6%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("col", {
    style: {
      width: "6%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("col", {
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx("col", {
    style: {
      width: "18%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("col", {
    style: {
      width: "6%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("col", {
    style: {
      width: "6%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx("col", {
    style: {
      width: "6%"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  })), __jsx("thead", {
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, "\uD300"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, "\uBC88\uD638"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "\uC81C\uBAA9"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, "\uAE00\uC4F4\uC774"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "\uC791\uC131\uC77C"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "\uC870\uD68C"), __jsx("th", {
    scope: "col",
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "\uCD94\uCC9C"))), __jsx("tbody", {
    style: {
      fontSize: "13px"
    },
    className: "jsx-2886349318",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("tr", {
    className: "jsx-2886349318" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx("td", {
    className: "jsx-2886349318" + " " + "post_champ post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, "AF"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_num post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "0000001"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "\uCC4C\uB9B0\uC800 1\uB4F1\uC774 \uC54C\uB824\uC8FC\uB294 \uCE74\uC0AC\uB518"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_writer post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, "\uC544\uC2F8 \uD638\uB791\uB098\uBE44"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_date post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, "09-23"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_count post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, "2321"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_recommend post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, "123")), __jsx("tr", {
    className: "jsx-2886349318" + " " + "post",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("td", {
    className: "jsx-2886349318" + " " + "post_champ post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, "AF"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_num post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, "0000002"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "\uCC4C\uB9B0\uC800 1\uB4F1\uC774 \uC54C\uB824\uC8FC\uB294 \uCE74\uC0AC\uB518"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_writer post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "\uC544\uC2F8 \uD638\uB791\uB098\uBE44"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_date post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "09-23"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_count post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, "512312"), __jsx("td", {
    className: "jsx-2886349318" + " " + "post_recommend post_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, "122"))))), __jsx("div", {
    className: "jsx-2886349318" + " " + "Post_fotter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, __jsx("button", {
    type: "button",
    className: "jsx-2886349318" + " " + "tab_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: undefined
  }, "\uAE00\uC4F0\uAE30")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2886349318",
    __self: undefined
  }, ".Post_top{width:1140px;margin:0 auto;}.Post_fotter{width:1140px;margin:0 auto;margin-top:20px;}.Post_fotter button{background-color:#69db7c;float:right;}.array_tab{margin-top:30px;width:250px;height:32px;}.tab_button{cursor:pointer;width:82px;height:32px;border:1px solid #ccc;border-radius:2px;font-size:14px;font-weight:bold;color:#333;margin-right:5px;}.tab_button.on{background:#74b816;color:#fff;}.Post_bottom{color:white;width:1140px;margin:0 auto;margin-top:10px;}.tip_list{width:1140px;font-family:'\uAD74\uB9BC',Gulim;border-bottom:1px solid #69db7c;}.tip_list thead tr th{height:37px;border-width:2px 0 1px;border-style:solid;border-color:#69db7c;vertical-align:middle;text-align:center;color:#dee2e6;font-family:Dotum,'\uB3CB\uC6C0';}.post{height:37px;}.post_item{text-align:center;}.post_champ img{display:block;margin:0 auto;width:30px;height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGNvbW11bml0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SGlCLEFBR3NDLEFBSUEsQUFLWSxBQUlULEFBS0QsQUFXRyxBQUlOLEFBTUMsQUFLRCxBQVVBLEFBR00sQUFHSixZQTFCRCxBQVdVLEFBVTNCLENBdERrQixBQUlBLEFBbUNTLENBcUJULENBMUNILENBTEMsRUE0Q2hCLENBNUJlLE1BcEJDLEFBeUJFLENBZkYsQ0FsQmhCLEFBSW9CLENBU0osQUErQ0QsRUEvQmYsS0FldUIsQ0FMYSxDQTlCcEMsQ0FVMEIsQ0FlTixBQTJCSixDQS9DaEIsR0FUQSxRQXlEQSxHQWpCeUIsQ0FWekIsS0Fmc0IsUUFvQnRCLE9BTTBCLEdBekJQLGVBQ0UsSUF5QkMsYUF4QlAsS0F5QkcsTUF4QkcsUUF5Qk0sU0F4QjNCLGNBeUJBIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGNvbW11bml0eS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZWFtSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9Ib21lL1RlYW1JbnRybyc7XHJcbmNvbnN0IENvbW11bml0eSA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJMZWFndWVUZWFtc1wiIHN0eWxlPXt7bWFyZ2luVG9wOiBcIjEwMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX3RlYW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9BRi5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+QUY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0RXRy5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+RFdHPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9HRU4ucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPkdFTjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvR1JGLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5HUkY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0hMRS5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+SExFPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9TS1QucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPlNLVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvSkFHLnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5KQUc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJMZWFndWVUZWFtc19fbGlua1wiIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbCBMZWFndWVUZWFtc19fdGVhbSBsYXJnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19pbWFnZVwiIHN0eWxlPXt7YmFja2dyb3VuZEltYWdlOiBcInVybChodHRwczovL3F3ZXIuZ2cvaW1hZ2VzL2xvZ29zL0tULnBuZylcIn19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9fYWNyb255bSBHaWxyb3lcIj5LVDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIkxlYWd1ZVRlYW1zX19saW5rXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJUZWFtU3ltYm9sIExlYWd1ZVRlYW1zX190ZWFtIGxhcmdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2ltYWdlXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvS1oucG5nKVwifX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJUZWFtU3ltYm9sX19hY3JvbnltIEdpbHJveVwiPktaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiTGVhZ3VlVGVhbXNfX2xpbmtcIiBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2wgTGVhZ3VlVGVhbXNfX3RlYW0gbGFyZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGVhbVN5bWJvbF9faW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9TQi5wbmcpXCJ9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIlRlYW1TeW1ib2xfX2Fjcm9ueW0gR2lscm95XCI+U0I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiUG9zdF90b3BcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJyYXlfdGFiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGFiX2J1dHRvbiBvblwiPuyghOyytOq4gDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInRhYl9idXR0b25cIj7snbjquLDquIA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQb3N0X2JvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0aXBfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPXt7d2lkdGg6XCI2JVwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17e3dpZHRoOlwiNiVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2wvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17e3dpZHRoOlwiMTglXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29sIHN0eWxlPXt7d2lkdGg6XCI2JVwifX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbCBzdHlsZT17e3dpZHRoOlwiNiVcIn19Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb2wgc3R5bGU9e3t3aWR0aDpcIjYlXCJ9fS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29sZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7tjIA8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPuuyiO2YuDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+7KCc66qpPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7quIDsk7TsnbQ8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPuyekeyEseydvDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+7KGw7ZqMPC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7stpTsspw8L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IHN0eWxlPXt7Zm9udFNpemU6IFwiMTNweFwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwicG9zdFwiPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicG9zdF9jaGFtcCBwb3N0X2l0ZW1cIj5BRjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBvc3RfbnVtIHBvc3RfaXRlbVwiPjAwMDAwMDE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0X3RpdGxlXCI+7LGM66aw7KCAIDHrk7HsnbQg7JWM66Ck7KO864qUIOy5tOyCrOuUmDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBvc3Rfd3JpdGVyIHBvc3RfaXRlbVwiPuyVhOyLuCDtmLjrnpHrgpjruYQ8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0X2RhdGUgcG9zdF9pdGVtXCI+MDktMjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0X2NvdW50IHBvc3RfaXRlbVwiPjIzMjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0X3JlY29tbWVuZCBwb3N0X2l0ZW1cIj4xMjM8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJwb3N0XCI+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJwb3N0X2NoYW1wIHBvc3RfaXRlbVwiPkFGPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicG9zdF9udW0gcG9zdF9pdGVtXCI+MDAwMDAwMjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBvc3RfdGl0bGVcIj7ssYzrprDsoIAgMeuTseydtCDslYzroKTso7zripQg7Lm07IKs65SYPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicG9zdF93cml0ZXIgcG9zdF9pdGVtXCI+7JWE7Iu4IO2YuOuekeuCmOu5hDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBvc3RfZGF0ZSBwb3N0X2l0ZW1cIj4wOS0yMzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInBvc3RfY291bnQgcG9zdF9pdGVtXCI+NTEyMzEyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwicG9zdF9yZWNvbW1lbmQgcG9zdF9pdGVtXCI+MTIyPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJQb3N0X2ZvdHRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwidGFiX2J1dHRvblwiPuq4gOyTsOq4sDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5Qb3N0X3RvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUG9zdF9mb3R0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlBvc3RfZm90dGVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2OWRiN2M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFycmF5X3RhYiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGFiX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50YWJfYnV0dG9uLm9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiM3NGI4MTY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUG9zdF9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGlwX2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ+q1tOumvCcsR3VsaW07ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2OWRiN2M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50aXBfbGlzdCB0aGVhZCB0ciB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXdpZHRoOiAycHggMCAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzY5ZGI3YztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2RlZTJlNjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERvdHVtLCfrj4vsm4AnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucG9zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzdweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnBvc3RfY2hhbXAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW11bml0eTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\community.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Community);

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/community.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ReactProject\javaproject\lod.gg\Forntend\e-pog_frontend\pages\community.js */"./pages/community.js");


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
//# sourceMappingURL=community.js.map