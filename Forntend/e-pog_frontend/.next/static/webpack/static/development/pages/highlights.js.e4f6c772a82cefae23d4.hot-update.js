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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ansi-colors */ "./node_modules/ansi-colors/index.js");
/* harmony import */ var ansi_colors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ansi_colors__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var Highlight = function Highlight(_ref) {
  var youtubeLink = _ref.youtubeLink;
  console.log(youtubeLink);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      showPreview = _useState[0],
      SetShowPreview = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      showComment = _useState2[0],
      SetShowComment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      videoTitle = _useState3[0],
      SetVideoTitle = _useState3[1];

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var matchs = youtubeLink.match(regExp);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://www.googleapis.com/youtube/v3/videos?id=".concat(matchs[7], "&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet")).then(function (response) {
      return SetVideoTitle(response.data.items[0].snippet.title);
    });
  }, []);

  var _onClick = function onClick() {
    if (showPreview === "none") {
      SetShowPreview('block');
    } else if (showPreview === "block") {
      SetShowPreview('none');
    }
  };

  var onCommentClick = function onCommentClick() {
    if (showComment === "none") {
      SetShowComment('block');
    } else if (showComment === "block") {
      SetShowComment('none');
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2718104294" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: "jsx-2718104294" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("img", {
    src: "http://img.youtube.com/vi/".concat(matchs[7], "/0.jpg"),
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2718104294" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2718104294" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("a", {
    href: youtubeLink,
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, videoTitle))), __jsx("div", {
    className: "jsx-2718104294" + " " + "article__comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    onClick: function onClick() {
      return onCommentClick();
    },
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uB313\uAE00 (16\uAC1C)"), __jsx("span", {
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uC0AD\uC81C"))), __jsx("div", {
    className: "jsx-2718104294" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("img", {
    style: {
      marginBottom: "5px"
    },
    src: "/static/up.svg",
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2718104294" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), __jsx("div", {
    style: {
      display: showPreview
    },
    className: "jsx-2718104294" + " " + "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("iframe", {
    id: "player",
    type: "text/html",
    width: "740",
    height: "411",
    src: "https://www.youtube.com/embed/".concat(matchs[7]),
    frameborder: "0",
    className: "jsx-2718104294",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: showComment
    },
    className: "jsx-2718104294" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2718104294" + " " + "comment_inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"].Search, {
    placeholder: "\uB313\uAE00\uC744 \uC785\uB825\uD574 \uC8FC\uC138\uC694.",
    enterButton: "\uC785\uB825",
    onSearch: function onSearch(value) {
      return console.log(value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
    author: __jsx("a", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "Han Solo"),
    content: __jsx("p", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
    author: __jsx("a", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Han Solo"),
    content: __jsx("p", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-2718104294",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2718104294",
    __self: this
  }, ".highlight.jsx-2718104294{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;width:740px;border-radius:10px;-webkit-transition:background-color 0.2s;}.highlight.jsx-2718104294:hover{background-color:#383940;}.article-list.jsx-2718104294{float:left;}.highlight.jsx-2718104294 .raiting.jsx-2718104294{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-2718104294 .raiting.jsx-2718104294 img.jsx-2718104294{width:25px;hight:25px;}.content.jsx-2718104294{text-align:center;width:300px;line-height:50px;margin:0 auto;}.article__title.jsx-2718104294{width:300px;height:60px;}.article__comment.jsx-2718104294{width:260px;height:50px;}.article__comment.jsx-2718104294 span.jsx-2718104294{width:120px;height:48px;float:left;-webkit-transition:background-color 250ms ease 0ms,color 0s ease;transition:background-color 250ms ease 0ms,color 0s ease;}.article__comment.jsx-2718104294 span.jsx-2718104294:hover{background-color:hsla(0,0%,98.4%,.8);color:#27282d;}.article__title.jsx-2718104294 a.jsx-2718104294 span.jsx-2718104294{display:inline-block;text-align:left;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-2718104294 img.jsx-2718104294{width:150px;}.preview.jsx-2718104294{padding-top:10px;width:740px;background-color:#2a2b30;}.comment.jsx-2718104294{padding-top:10px;width:740px;background-color:gray;}.comment_inner.jsx-2718104294{width:700px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUdpQixBQUd3QyxBQVFVLEFBR2QsQUFHRSxBQVFGLEFBSU8sQUFNTixBQUlBLEFBSUEsQUFNeUIsQUFJaEIsQUFXVCxBQUdLLEFBS0EsQUFLTCxXQTlEaEIsQUFXZSxDQVVDLEFBSUEsQUFJQSxBQXFCaEIsQUFha0IsR0ExRUQsRUFnRUQsQUFLQSxDQTNDQSxHQXdCSSxDQTNCcEIsRUFVQSxBQUlBLEFBSWUsQ0FqQ2YsQ0FtRUEsR0FWNkIsQUFLSCxDQTNDTCxLQWV5QyxFQUk1QyxBQUtGLFVBdkJFLEVBd0JLLEVBTHZCLEFBd0JBLEdBTEEsT0FyQ0EsT0F3Qm9CLE1BdkNPLFVBd0NBLEtBckRWLGFBQ0QsS0FxREUsT0FwREssT0FxREosWUFwRDBCLEdBcURwQixxQkFkekIsZ0JBNUJ1QixDQVZ2QixZQXFEQSxnRkExQzBCLDhFQUNULGFBQ0UsZUFDbkIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxoaWdobGlnaHRcXEhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbiwgQXZhdGFyLCBDb21tZW50LCBUb29sdGlwLCBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgd2hpdGUgfSBmcm9tICdhbnNpLWNvbG9ycyc7XHJcblxyXG5jb25zdCBIaWdobGlnaHQgPSAoe3lvdXR1YmVMaW5rfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coeW91dHViZUxpbmspXHJcbiAgICBjb25zdCBbc2hvd1ByZXZpZXcsIFNldFNob3dQcmV2aWV3XSA9IHVzZVN0YXRlKCdub25lJyk7XHJcbiAgICBjb25zdCBbc2hvd0NvbW1lbnQsIFNldFNob3dDb21tZW50XSA9IHVzZVN0YXRlKCdub25lJyk7XHJcbiAgICBjb25zdCBbdmlkZW9UaXRsZSwgU2V0VmlkZW9UaXRsZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICB2YXIgcmVnRXhwID0gL14uKigoeW91dHUuYmVcXC8pfCh2XFwvKXwoXFwvdVxcL1xcd1xcLyl8KGVtYmVkXFwvKXwod2F0Y2hcXD8pKVxcPz92Pz0/KFteI1xcJlxcP10qKS4qLztcclxuICAgIHZhciBtYXRjaHMgPSB5b3V0dWJlTGluay5tYXRjaChyZWdFeHApO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5nZXQoYGh0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL3lvdXR1YmUvdjMvdmlkZW9zP2lkPSR7bWF0Y2hzWzddfSZrZXk9QUl6YVN5Q0hlTlNRNTVtWFVWcjVOZ3lPV1dCVEtodzJYakZUOHR3JmZpZWxkcz1pdGVtcyhzbmlwcGV0KHRpdGxlKSkmcGFydD1zbmlwcGV0YClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiBTZXRWaWRlb1RpdGxlKHJlc3BvbnNlLmRhdGEuaXRlbXNbMF0uc25pcHBldC50aXRsZSkpXHJcbiAgICB9LCBbXSk7XHJcbiAgICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3dQcmV2aWV3ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93UHJldmlldygnYmxvY2snKTtcclxuICAgICAgICB9IGVsc2UgaWYoc2hvd1ByZXZpZXcgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93UHJldmlldygnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG9uQ29tbWVudENsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmKHNob3dDb21tZW50ID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93Q29tbWVudCgnYmxvY2snKTtcclxuICAgICAgICB9IGVsc2UgaWYoc2hvd0NvbW1lbnQgPT09IFwiYmxvY2tcIikge1xyXG4gICAgICAgICAgICBTZXRTaG93Q29tbWVudCgnbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWdobGlnaHRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IHRodW1ibmFpbFwiIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2soKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2BodHRwOi8vaW1nLnlvdXR1YmUuY29tL3ZpLyR7bWF0Y2hzWzddfS8wLmpwZ2B9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLWxpc3QgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17eW91dHViZUxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3ZpZGVvVGl0bGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlX19jb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IG9uQ29tbWVudENsaWNrKCl9PuuMk+q4gCAoMTbqsJwpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7sgq3soJw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IHJhaXRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7bWFyZ2luQm90dG9tOiBcIjVweFwifX1zcmM9XCIvc3RhdGljL3VwLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZvdGVcIj43ODwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9kb3duLnN2Z1wiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3XCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93UHJldmlld319PlxyXG4gICAgICAgICAgICAgICAgPGlmcmFtZSBpZD1cInBsYXllclwiIHR5cGU9XCJ0ZXh0L2h0bWxcIiB3aWR0aD1cIjc0MFwiIGhlaWdodD1cIjQxMVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke21hdGNoc1s3XX1gfVxyXG4gICAgICAgICAgICAgICAgZnJhbWVib3JkZXI9XCIwXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIiBzdHlsZT17e2Rpc3BsYXk6IHNob3dDb21tZW50fX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi64yT6riA7J2EIOyeheugpe2VtCDso7zshLjsmpQuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXJCdXR0b249XCLsnoXroKVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXs8YT5IYW4gU29sbzwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdlIHN1cHBseSBhIHNlcmllcyBvZiBkZXNpZ24gcHJpbmNpcGxlcywgcHJhY3RpY2FsIHBhdHRlcm5zIGFuZCBoaWdoIHF1YWxpdHkgZGVzaWduXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXMgKFNrZXRjaCBhbmQgQXh1cmUpLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmQgZWZmaWNpZW50bHkuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPXttb21lbnQoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6bW06c3MnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bW9tZW50KCkuZnJvbU5vdygpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9ezxhPkhhbiBTb2xvPC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlcyAoU2tldGNoIGFuZCBBeHVyZSksIHRvIGhlbHAgcGVvcGxlIGNyZWF0ZSB0aGVpciBwcm9kdWN0IHByb3RvdHlwZXMgYmVhdXRpZnVsbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZCBlZmZpY2llbnRseS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e21vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb21lbnQoKS5mcm9tTm93KCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM5NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX190aXRsZSAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UgMG1zLCBjb2xvciAwcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fY29tbWVudCBzcGFuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsMCUsOTguNCUsLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX3RpdGxlIGEgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk1NUJDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmIzMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudF9pbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhpZ2hsaWdodDsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ })

})
//# sourceMappingURL=highlights.js.e4f6c772a82cefae23d4.hot-update.js.map