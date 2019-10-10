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
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Highlight = ({
  youtubeLink
}) => {
  console.log(youtubeLink);
  const {
    0: likes,
    1: SetLikes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: dislikes,
    1: SetDislikes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: action,
    1: SetAction
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: showPreview,
    1: SetShowPreview
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

  const like = () => {
    SetLikes(1);
    SetDislikes(0);
    SetAction('liked');
  };

  const dislike = () => {
    SetLikes(0);
    SetDislikes(1);
    SetAction('disliked');
  };

  const actions = [__jsx("span", {
    key: "comment-basic-like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "like",
    theme: action === 'liked' ? 'filled' : 'outlined',
    onClick: like,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, likes)), __jsx("span", {
    key: " key=\"comment-basic-dislike\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Dislike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "dislike",
    theme: action === 'disliked' ? 'filled' : 'outlined',
    onClick: dislike,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  })), __jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, dislikes)), __jsx("span", {
    key: "comment-basic-reply-to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Reply to")];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3751471654" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx("div", {
    onClick: () => onClick(),
    className: "jsx-3751471654" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("img", {
    src: `http://img.youtube.com/vi/${matchs[7]}/0.jpg`,
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3751471654" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, __jsx("div", {
    className: "jsx-3751471654" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("a", {
    href: youtubeLink,
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, videoTitle))), __jsx("div", {
    className: "jsx-3751471654" + " " + "article__comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, "\uB313\uAE00 (16\uAC1C)"), __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "\uC0AD\uC81C"))), __jsx("div", {
    className: "jsx-3751471654" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("img", {
    style: {
      marginBottom: "5px"
    },
    src: "/static/up.svg",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("div", {
    className: "jsx-3751471654" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }))), __jsx("div", {
    style: {
      display: showPreview
    },
    className: "jsx-3751471654" + " " + "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("iframe", {
    id: "player",
    type: "text/html",
    width: "740",
    height: "411",
    src: `https://www.youtube.com/embed/${matchs[7]}`,
    frameborder: "0",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  })), __jsx("div", {
    className: "jsx-3751471654" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
    enterButton: "\uC785\uB825",
    onSearch: value => console.log(value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
    style: {
      backgroundColor: "white"
    },
    actions: actions,
    author: __jsx("a", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: undefined
    }, "Han Solo"),
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      alt: "Han Solo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: undefined
    }),
    content: __jsx("p", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: undefined
    }, __jsx("span", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751471654",
    __self: undefined
  }, ".highlight.jsx-3751471654{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;width:740px;border-radius:10px;-webkit-transition:background-color 0.2s;}.highlight.jsx-3751471654:hover{background-color:#383940;}.article-list.jsx-3751471654{float:left;}.highlight.jsx-3751471654 .raiting.jsx-3751471654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-3751471654 .raiting.jsx-3751471654 img.jsx-3751471654{width:25px;hight:25px;}.content.jsx-3751471654{text-align:center;width:300px;line-height:50px;margin:0 auto;}.article__title.jsx-3751471654{width:300px;height:60px;}.article__comment.jsx-3751471654{width:260px;height:50px;}.article__comment.jsx-3751471654 span.jsx-3751471654{width:120px;height:48px;float:left;-webkit-transition:background-color 250ms ease 0ms,color 0s ease;transition:background-color 250ms ease 0ms,color 0s ease;}.article__comment.jsx-3751471654 span.jsx-3751471654:hover{background-color:hsla(0,0%,98.4%,.8);color:#27282d;}.article__title.jsx-3751471654 a.jsx-3751471654 span.jsx-3751471654{display:inline-block;text-align:left;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-3751471654 img.jsx-3751471654{width:150px;}.preview.jsx-3751471654{padding-top:10px;width:740px;background-color:#2a2b30;}.comment.jsx-3751471654{padding-top:10px;width:740px;background-color:#2a2b30;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUhpQixBQUd3QyxBQVFVLEFBR2QsQUFHRSxBQVFGLEFBSU8sQUFNTixBQUlBLEFBSUEsQUFNeUIsQUFJaEIsQUFXVCxBQUdLLEFBS0EsV0F6RHJCLEFBV2UsQ0FVQyxBQUlBLEFBSUEsQUFxQmhCLEdBN0RpQixFQWdFRCxBQUtBLENBM0NBLEdBd0JJLENBM0JwQixFQVVBLEFBSUEsQUFJZSxDQWpDZixJQXlENkIsQUFLQSxDQTNDUixLQWV5QyxFQUk1QyxBQUtGLFVBdkJFLEVBd0JLLEVBTHZCLEdBbUJBLEFBS0EsT0ExQ0EsT0F3Qm9CLE1BdkNPLFVBd0NBLEtBckRWLGFBQ0QsS0FxREUsT0FwREssT0FxREosWUFwRDBCLEdBcURwQixxQkFkekIsZ0JBNUJ1QixDQVZ2QixZQXFEQSxnRkExQzBCLDhFQUNULGFBQ0UsZUFDbkIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxoaWdobGlnaHRcXEhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbiwgQXZhdGFyLCBDb21tZW50LCBUb29sdGlwLCBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgd2hpdGUgfSBmcm9tICdhbnNpLWNvbG9ycyc7XHJcblxyXG5jb25zdCBIaWdobGlnaHQgPSAoe3lvdXR1YmVMaW5rfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coeW91dHViZUxpbmspXHJcbiAgICBjb25zdCBbbGlrZXMsIFNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Rpc2xpa2VzLCBTZXREaXNsaWtlc10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFthY3Rpb24sIFNldEFjdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtzaG93UHJldmlldywgU2V0U2hvd1ByZXZpZXddID0gdXNlU3RhdGUoJ25vbmUnKTtcclxuICAgIGNvbnN0IFt2aWRlb1RpdGxlLCBTZXRWaWRlb1RpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHZhciByZWdFeHAgPSAvXi4qKCh5b3V0dS5iZVxcLyl8KHZcXC8pfChcXC91XFwvXFx3XFwvKXwoZW1iZWRcXC8pfCh3YXRjaFxcPykpXFw/P3Y/PT8oW14jXFwmXFw/XSopLiovO1xyXG4gICAgdmFyIG1hdGNocyA9IHlvdXR1YmVMaW5rLm1hdGNoKHJlZ0V4cCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3M/aWQ9JHttYXRjaHNbN119JmtleT1BSXphU3lDSGVOU1E1NW1YVVZyNU5neU9XV0JUS2h3MlhqRlQ4dHcmZmllbGRzPWl0ZW1zKHNuaXBwZXQodGl0bGUpKSZwYXJ0PXNuaXBwZXRgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IFNldFZpZGVvVGl0bGUocmVzcG9uc2UuZGF0YS5pdGVtc1swXS5zbmlwcGV0LnRpdGxlKSlcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYoc2hvd1ByZXZpZXcgPT09IFwibm9uZVwiKSB7XHJcbiAgICAgICAgICAgIFNldFNob3dQcmV2aWV3KCdibG9jaycpO1xyXG4gICAgICAgIH0gZWxzZSBpZihzaG93UHJldmlldyA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICAgICAgICAgIFNldFNob3dQcmV2aWV3KCdub25lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgbGlrZSA9ICgpID0+IHtcclxuICAgICAgICBTZXRMaWtlcygxKTtcclxuICAgICAgICBTZXREaXNsaWtlcygwKTtcclxuICAgICAgICBTZXRBY3Rpb24oJ2xpa2VkJyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBkaXNsaWtlID0gKCkgPT4ge1xyXG4gICAgICAgIFNldExpa2VzKDApO1xyXG4gICAgICAgIFNldERpc2xpa2VzKDEpO1xyXG4gICAgICAgIFNldEFjdGlvbignZGlzbGlrZWQnKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBhY3Rpb25zID0gW1xyXG4gICAgICAgIDxzcGFuIGtleT1cImNvbW1lbnQtYmFzaWMtbGlrZVwiPlxyXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJMaWtlXCI+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImxpa2VcIlxyXG4gICAgICAgICAgICAgIHRoZW1lPXthY3Rpb24gPT09ICdsaWtlZCcgPyAnZmlsbGVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17bGlrZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4LCBjdXJzb3I6ICdhdXRvJyB9fT57bGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4ga2V5PScga2V5PVwiY29tbWVudC1iYXNpYy1kaXNsaWtlXCInPlxyXG4gICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJEaXNsaWtlXCI+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgdHlwZT1cImRpc2xpa2VcIlxyXG4gICAgICAgICAgICAgIHRoZW1lPXthY3Rpb24gPT09ICdkaXNsaWtlZCcgPyAnZmlsbGVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17ZGlzbGlrZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4LCBjdXJzb3I6ICdhdXRvJyB9fT57ZGlzbGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4ga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiPlJlcGx5IHRvPC9zcGFuPixcclxuICAgIF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCB0aHVtYm5haWxcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoc1s3XX0vMC5qcGdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3lvdXR1YmVMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2aWRlb1RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7rjJPquIAgKDE26rCcKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+7IKt7KCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCByYWl0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1cHhcIn19c3JjPVwiL3N0YXRpYy91cC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlXCI+Nzg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiIHN0eWxlPXt7ZGlzcGxheTogc2hvd1ByZXZpZXd9fT5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJwbGF5ZXJcIiB0eXBlPVwidGV4dC9odG1sXCIgd2lkdGg9XCI3NDBcIiBoZWlnaHQ9XCI0MTFcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHttYXRjaHNbN119YH1cclxuICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrjJPquIDsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi7J6F66ClXCJcclxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9ezxhPkhhbiBTb2xvPC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkhhbiBTb2xvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgZWZmaWNpZW50bHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e21vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudCgpLmZyb21Ob3coKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM5NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX190aXRsZSAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UgMG1zLCBjb2xvciAwcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fY29tbWVudCBzcGFuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsMCUsOTguNCUsLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX3RpdGxlIGEgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk1NUJDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmIzMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ }),

/***/ "./pages/highlights.js":
/*!*****************************!*\
  !*** ./pages/highlights.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/highlight/Highlight */ "./components/highlight/Highlight.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\highlights.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Home = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
  className: "jsx-2331650113" + " " + "Home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2331650113" + " " + "container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx(_components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_2__["default"], {
  youtubeLink: "https://www.youtube.com/watch?v=iUpqKAf8x3g&feature=youtu.be",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}), __jsx(_components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_2__["default"], {
  youtubeLink: "https://www.youtube.com/watch?v=goVHnE-pdZM",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2331650113",
  __self: undefined
}, ".Home .container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:1000px;background-color:#2a2b30;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGhpZ2hsaWdodHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWEsQUFHaUMsMEVBQ1csbUdBQ0osNkZBQ0csOEVBQ1QsYUFDWSx5QkFFN0IiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxwYWdlc1xcaGlnaGxpZ2h0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIaWdobGlnaHQgZnJvbSAnLi4vY29tcG9uZW50cy9oaWdobGlnaHQvSGlnaGxpZ2h0JztcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiSG9tZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxIaWdobGlnaHQgeW91dHViZUxpbms9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWlVcHFLQWY4eDNnJmZlYXR1cmU9eW91dHUuYmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhpZ2hsaWdodCB5b3V0dWJlTGluaz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Z29WSG5FLXBkWk1cIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLkhvbWUgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYTJiMzA7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbilcclxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\highlights.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 3:
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