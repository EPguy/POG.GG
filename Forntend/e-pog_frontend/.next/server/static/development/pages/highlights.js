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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/highlight/Highlight.js":
/*!*******************************************!*\
  !*** ./components/highlight/Highlight.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ansi-colors */ "ansi-colors");
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Highlight.scss */ "./components/highlight/Highlight.scss");
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Highlight_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Highlight = ({
  youtubeLink
}) => {
  console.log(youtubeLink);
  const {
    0: showPreview,
    1: SetShowPreview
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none');
  const {
    0: showComment,
    1: SetShowComment
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none');
  const {
    0: videoTitle,
    1: SetVideoTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var matchs = youtubeLink.match(regExp);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(`https://www.googleapis.com/youtube/v3/videos?id=${matchs[7]}&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet`).then(response => SetVideoTitle(response.data.items[0].snippet.title));
  }, []);

  const onClick = () => {
    if (showPreview === "none") {
      SetShowPreview('block');
    } else if (showPreview === "block") {
      SetShowPreview('none');
    }
  };

  const onCommentClick = () => {
    if (showComment === "none") {
      SetShowComment('block');
    } else if (showComment === "block") {
      SetShowComment('none');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-113247471" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => onClick(),
    className: "jsx-113247471" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("img", {
    src: `http://img.youtube.com/vi/${matchs[7]}/0.jpg`,
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-113247471" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-113247471" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("a", {
    href: youtubeLink,
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, videoTitle))), __jsx("div", {
    className: "jsx-113247471" + " " + "article__comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("span", {
    onClick: () => onCommentClick(),
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, "\uB313\uAE00 (16\uAC1C)"), __jsx("span", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "\uC0AD\uC81C"))), __jsx("div", {
    className: "jsx-113247471" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx("img", {
    style: {
      marginBottom: "5px"
    },
    src: "/static/up.svg",
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-113247471" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }))), __jsx("div", {
    style: {
      display: showPreview
    },
    className: "jsx-113247471" + " " + "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, __jsx("iframe", {
    id: "player",
    type: "text/html",
    width: "740",
    height: "411",
    src: `https://www.youtube.com/embed/${matchs[7]}`,
    frameborder: "0",
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  })), __jsx("div", {
    style: {
      display: showComment
    },
    className: "jsx-113247471" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-113247471" + " " + "comment_inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
    enterButton: "\uC785\uB825",
    onSearch: value => console.log(value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
    author: __jsx("a", {
      style: {
        color: "#77D"
      },
      className: "jsx-113247471",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, "\uC0CC\uC988TV"),
    content: __jsx("p", {
      className: "jsx-113247471",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, "\uC0CC\uC988\uBCF4\uACE0\uC2F6\uB2E4."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-113247471",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: undefined
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "113247471",
    __self: undefined
  }, ".highlight.jsx-113247471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;width:740px;border-radius:10px;-webkit-transition:background-color 0.2s;}.highlight.jsx-113247471:hover{background-color:#383940;}.article-list.jsx-113247471{float:left;}.highlight.jsx-113247471 .raiting.jsx-113247471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-113247471 .raiting.jsx-113247471 img.jsx-113247471{width:25px;hight:25px;}.content.jsx-113247471{text-align:center;width:300px;line-height:50px;margin:0 auto;}.article__title.jsx-113247471{width:300px;height:60px;}.article__comment.jsx-113247471{cursor:pointer;width:260px;height:50px;}.article__comment.jsx-113247471 span.jsx-113247471{width:120px;height:48px;float:left;-webkit-transition:background-color 250ms ease 0ms,color 0s ease;transition:background-color 250ms ease 0ms,color 0s ease;}.article__comment.jsx-113247471 span.jsx-113247471:hover{background-color:hsla(0,0%,98.4%,.8);color:#27282d;}.article__title.jsx-113247471 a.jsx-113247471 span.jsx-113247471{display:inline-block;text-align:left;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-113247471 img.jsx-113247471{cursor:pointer;width:150px;}.preview.jsx-113247471{padding-top:10px;width:740px;background-color:#2a2b30;}.comment.jsx-113247471{padding-top:10px;width:740px;background-color:#2A2B30;}.comment_inner.jsx-113247471{width:700px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZpQixBQUdzQyxBQU9ZLEFBR2QsQUFHRSxBQVFGLEFBSU8sQUFNTixBQUlHLEFBS0gsQUFNeUIsQUFJaEIsQUFXTixBQUlFLEFBS0EsQUFLTCxXQWhFaEIsQUFXZSxDQVVDLEFBU0EsQUFtQ0UsR0F4Q0YsQUEwQkEsRUFJQSxBQUtBLENBN0NBLEdBeUJJLENBNUJwQixFQVVBLEFBU2UsQ0FsQ2YsQ0FxRUEsQ0F4Q2dCLEFBMEJoQixFQUk2QixBQUtHLENBN0NYLEtBZ0J5QyxFQUk1QyxBQUtGLEVBZGhCLFFBVmtCLEVBeUJLLEVBTHZCLEdBb0JBLEFBS0EsT0E1Q0EsT0F5Qm9CLE1BckRILEFBYVUsVUF5Q0EsR0FyRFgsWUFDTyxRQXFETCxXQXBEMkIsR0FxRDFCLGVBQ00scUJBZHpCLEVBdkNBLGNBVXVCLGFBNEN2QixnRkEzQzBCLDhFQUNULGFBQ0UsZUFDbkIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxoaWdobGlnaHRcXEhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbiwgQXZhdGFyLCBDb21tZW50LCBUb29sdGlwLCBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgd2hpdGUgfSBmcm9tICdhbnNpLWNvbG9ycyc7XHJcbmltcG9ydCAnLi9IaWdobGlnaHQuc2Nzcyc7XHJcblxyXG5jb25zdCBIaWdobGlnaHQgPSAoe3lvdXR1YmVMaW5rfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coeW91dHViZUxpbmspXHJcbiAgICBjb25zdCBbc2hvd1ByZXZpZXcsIFNldFNob3dQcmV2aWV3XSA9IHVzZVN0YXRlKCdub25lJyk7XHJcbiAgICBjb25zdCBbc2hvd0NvbW1lbnQsIFNldFNob3dDb21tZW50XSA9IHVzZVN0YXRlKCdub25lJyk7XHJcbiAgICBjb25zdCBbdmlkZW9UaXRsZSwgU2V0VmlkZW9UaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcclxuICAgIHZhciBtYXRjaHMgPSB5b3V0dWJlTGluay5tYXRjaChyZWdFeHApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2lkPSR7bWF0Y2hzWzddfSZrZXk9QUl6YVN5Q0hlTlNRNTVtWFVWcjVOZ3lPV1dCVEtodzJYakZUOHR3JmZpZWxkcz1pdGVtcyhzbmlwcGV0KHRpdGxlKSkmcGFydD1zbmlwcGV0YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBTZXRWaWRlb1RpdGxlKHJlc3BvbnNlLmRhdGEuaXRlbXNbMF0uc25pcHBldC50aXRsZSkpXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3dQcmV2aWV3ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93UHJldmlldygnYmxvY2snKTtcclxuICAgICAgICB9IGVsc2UgaWYoc2hvd1ByZXZpZXcgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93UHJldmlldygnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ29tbWVudENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3dDb21tZW50ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93Q29tbWVudCgnYmxvY2snKTtcclxuICAgICAgICB9IGVsc2UgaWYoc2hvd0NvbW1lbnQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93Q29tbWVudCgnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IHRodW1ibmFpbFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7bWF0Y2hzWzddfS8wLmpwZ2B9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWxpc3QgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17eW91dHViZUxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZpZGVvVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX19jb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uQ29tbWVudENsaWNrKCl9PuuMk+q4gCAoMTbqsJwpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7sgq3soJw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IHJhaXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjVweFwifX1zcmM9XCIvc3RhdGljL3VwLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVcIj43ODwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9kb3duLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93UHJldmlld319PlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBpZD1cInBsYXllclwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD1cIjc0MFwiIGhlaWdodD1cIjQxMVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke21hdGNoc1s3XX1gfVxyXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIiBzdHlsZT17e2Rpc3BsYXk6IHNob3dDb21tZW50fX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b249XCLsnoXroKVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXs8YSBzdHlsZT17e2NvbG9yOiBcIiM3N0RcIn19PuyDjOymiFRWPC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg7IOM7KaI67O06rOg7Iu264ukLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZXRpbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT17bW9tZW50KCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudCgpLmZyb21Ob3coKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM5NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX190aXRsZSAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fY29tbWVudCBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjUwbXMgZWFzZSAwbXMsIGNvbG9yIDBzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX19jb21tZW50IHNwYW46aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwwJSw5OC40JSwuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjcyODJkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fdGl0bGUgYSBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMyOTU1QkM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAudGh1bWJuYWlsIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucHJldmlldyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJiMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkIzMCAgIDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnRfaW5uZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./components/highlight/Highlight.scss":
/*!*********************************************!*\
  !*** ./components/highlight/Highlight.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/highlight/Selector.js":
/*!******************************************!*\
  !*** ./components/highlight/Selector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selector.scss */ "./components/highlight/Selector.scss");
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Selector_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Selector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Selector = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "Selector_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "Selector_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "upload-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "\uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "Selector_underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "Selector_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "\uC804\uCCB4")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "\uAC8C\uC784")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\uC720\uBA38")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "\uC74C\uC545")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./components/highlight/Selector.scss":
/*!********************************************!*\
  !*** ./components/highlight/Selector.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/highlights.js":
/*!*****************************!*\
  !*** ./pages/highlights.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/highlight/Highlight */ "./components/highlight/Highlight.js");
/* harmony import */ var _components_highlight_Selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/highlight/Selector */ "./components/highlight/Selector.js");
/* harmony import */ var _highlights_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./highlights.scss */ "./pages/highlights.scss");
/* harmony import */ var _highlights_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_highlights_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\highlights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const HighlightPage = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
  className: "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "container",
  style: {
    marginBottom: "20px"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx(_components_highlight_Selector__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
})), __jsx("div", {
  className: "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx(_components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
  youtubeLink: "https://www.youtube.com/watch?v=i1IKnWDecwA",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), __jsx(_components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_1__["default"], {
  youtubeLink: "https://www.youtube.com/watch?v=duLLjVcyOx8",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}))));

/* harmony default export */ __webpack_exports__["default"] = (HighlightPage);

/***/ }),

/***/ "./pages/highlights.scss":
/*!*******************************!*\
  !*** ./pages/highlights.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/highlights.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ReactProject\javaproject\lod.gg\Forntend\e-pog_frontend\pages\highlights.js */"./pages/highlights.js");


/***/ }),

/***/ "ansi-colors":
/*!******************************!*\
  !*** external "ansi-colors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ansi-colors");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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
//# sourceMappingURL=highlights.js.map