webpackHotUpdate("static\\development\\pages\\highlights.js",{

/***/ "./components/highlight/Highlight.js":
/*!*******************************************!*\
  !*** ./components/highlight/Highlight.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var Highlight = function Highlight(_ref) {
  var youtubeLink = _ref.youtubeLink;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      videoTitle = _useState[0],
      SetVideoTitle = _useState[1];

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var matchs = youtubeLink.match(regExp);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://www.googleapis.com/youtube/v3/videos?id=".concat(matchs[7], "&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet")).then(function (response) {
      return console.log(response);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-828234734" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-828234734" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("img", {
    src: "http://img.youtube.com/vi/".concat(matchs[7], "/0.jpg"),
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-828234734" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-828234734" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\uC720\uD29C\uBE0C \uD14C\uC2A4\uD2B8")))), __jsx("div", {
    className: "jsx-828234734" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("img", {
    style: {
      marginBottom: "5px"
    },
    src: "/static/up.svg",
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-828234734" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "828234734",
    __self: this
  }, ".highlight.jsx-828234734{padding:20px;height:170px;border-radius:10px;}.article-list.jsx-828234734{float:left;}.highlight.jsx-828234734 .raiting.jsx-828234734{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-828234734 .raiting.jsx-828234734 img.jsx-828234734{width:25px;hight:25px;}.content.jsx-828234734{text-align:center;width:890px;line-height:50px;margin:0 auto;}.article__title.jsx-828234734 a.jsx-828234734 span.jsx-828234734{color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-828234734 img.jsx-828234734{width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JpQixBQUdzQyxBQUtGLEFBR0UsQUFRRixBQUlPLEFBTUosQUFLRixXQXpCaEIsQUFXZSxDQWVmLENBL0JpQixDQTBCRSxJQU5ILElBSGhCLElBaEJ1QixHQTBCRSxDQU5KLGVBbkJyQixFQW9Ca0IsY0FDbEIsYUFmMkIsS0FvQjNCLDhGQW5CdUIsNkZBQ0csOEVBQ1QsYUFDRSxlQUNuQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXGhpZ2hsaWdodFxcSGlnaGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgSGlnaGxpZ2h0ID0gKHt5b3V0dWJlTGlua30pID0+IHtcclxuICAgIGNvbnN0IFt2aWRlb1RpdGxlLCBTZXRWaWRlb1RpdGxlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHZhciByZWdFeHAgPSAvXi4qKCh5b3V0dS5iZVxcLyl8KHZcXC8pfChcXC91XFwvXFx3XFwvKXwoZW1iZWRcXC8pfCh3YXRjaFxcPykpXFw/P3Y/PT8oW14jXFwmXFw/XSopLiovO1xyXG4gICAgdmFyIG1hdGNocyA9IHlvdXR1YmVMaW5rLm1hdGNoKHJlZ0V4cCk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3M/aWQ9JHttYXRjaHNbN119JmtleT1BSXphU3lDSGVOU1E1NW1YVVZyNU5neU9XV0JUS2h3MlhqRlQ4dHcmZmllbGRzPWl0ZW1zKHNuaXBwZXQodGl0bGUpKSZwYXJ0PXNuaXBwZXRgKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcclxuICAgIH0sIFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZ2hsaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWxpc3QgdGh1bWJuYWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7bWF0Y2hzWzddfS8wLmpwZ2B9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWxpc3QgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuycoO2KnOu4jCDthYzsiqTtirg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWxpc3QgcmFpdGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3ttYXJnaW5Cb3R0b206IFwiNXB4XCJ9fXNyYz1cIi9zdGF0aWMvdXAuc3ZnXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidm90ZVwiPjc4PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2Rvd24uc3ZnXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGUtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IC5yYWl0aW5ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IC5yYWl0aW5nIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4OTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fdGl0bGUgYSBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI5NTVCQztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC50aHVtYm5haWwgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ })

})
//# sourceMappingURL=highlights.js.1612add13e23fb374dee.hot-update.js.map