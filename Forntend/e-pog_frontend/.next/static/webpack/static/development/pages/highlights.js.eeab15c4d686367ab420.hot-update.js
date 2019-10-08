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
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var matchs = youtubeLink.match(regExp);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("http://youtube.com/get_video_info?video_id=iUpqKAf8x3g").then(function (response) {
      return console.log(response);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-828234734" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-828234734" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("img", {
    src: "http://img.youtube.com/vi/".concat(matchs[7], "/0.jpg"),
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-828234734" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-828234734" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\uC720\uD29C\uBE0C \uD14C\uC2A4\uD2B8")))), __jsx("div", {
    className: "jsx-828234734" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
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
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-828234734" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-828234734",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "828234734",
    __self: this
  }, ".highlight.jsx-828234734{padding:20px;height:170px;border-radius:10px;}.article-list.jsx-828234734{float:left;}.highlight.jsx-828234734 .raiting.jsx-828234734{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-828234734 .raiting.jsx-828234734 img.jsx-828234734{width:25px;hight:25px;}.content.jsx-828234734{text-align:center;width:890px;line-height:50px;margin:0 auto;}.article__title.jsx-828234734 a.jsx-828234734 span.jsx-828234734{color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-828234734 img.jsx-828234734{width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEJpQixBQUdzQyxBQUtGLEFBR0UsQUFRRixBQUlPLEFBTUosQUFLRixXQXpCaEIsQUFXZSxDQWVmLENBL0JpQixDQTBCRSxJQU5ILElBSGhCLElBaEJ1QixHQTBCRSxDQU5KLGVBbkJyQixFQW9Ca0IsY0FDbEIsYUFmMkIsS0FvQjNCLDhGQW5CdUIsNkZBQ0csOEVBQ1QsYUFDRSxlQUNuQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXGhpZ2hsaWdodFxcSGlnaGxpZ2h0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBIaWdobGlnaHQgPSAoe3lvdXR1YmVMaW5rfSkgPT4ge1xyXG4gICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiNcXCZcXD9dKikuKi87XHJcbiAgICB2YXIgbWF0Y2hzID0geW91dHViZUxpbmsubWF0Y2gocmVnRXhwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovL3lvdXR1YmUuY29tL2dldF92aWRlb19pbmZvP3ZpZGVvX2lkPWlVcHFLQWY4eDNnXCIpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCB0aHVtYm5haWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9pbWcueW91dHViZS5jb20vdmkvJHttYXRjaHNbN119LzAuanBnYH0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+7Jyg7Yqc67iMIO2FjOyKpO2KuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCByYWl0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1cHhcIn19c3JjPVwiL3N0YXRpYy91cC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlXCI+Nzg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZS1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQgLnJhaXRpbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQgLnJhaXRpbmcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg5MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX190aXRsZSBhIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk1NUJDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ })

})
//# sourceMappingURL=highlights.js.eeab15c4d686367ab420.hot-update.js.map