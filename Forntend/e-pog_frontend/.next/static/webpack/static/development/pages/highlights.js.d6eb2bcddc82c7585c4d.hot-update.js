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
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Highlight.scss */ "./components/highlight/Highlight.scss");
/* harmony import */ var _Highlight_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Highlight_scss__WEBPACK_IMPORTED_MODULE_6__);
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
    className: "jsx-113247471" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: "jsx-113247471" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "http://img.youtube.com/vi/".concat(matchs[7], "/0.jpg"),
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-113247471" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-113247471" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("a", {
    href: youtubeLink,
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, videoTitle))), __jsx("div", {
    className: "jsx-113247471" + " " + "article__comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    onClick: function onClick() {
      return onCommentClick();
    },
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uB313\uAE00 (16\uAC1C)"), __jsx("span", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\uC0AD\uC81C"))), __jsx("div", {
    className: "jsx-113247471" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
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
    __self: this
  }), __jsx("div", {
    className: "jsx-113247471" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }))), __jsx("div", {
    style: {
      display: showPreview
    },
    className: "jsx-113247471" + " " + "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("iframe", {
    id: "player",
    type: "text/html",
    width: "740",
    height: "411",
    src: "https://www.youtube.com/embed/".concat(matchs[7]),
    frameborder: "0",
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: showComment
    },
    className: "jsx-113247471" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-113247471" + " " + "comment_inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
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
      lineNumber: 63
    },
    __self: this
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
      __self: this
    }, "\uC0CC\uC988TV"),
    content: __jsx("p", {
      className: "jsx-113247471",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, "\uC0CC\uC988\uBCF4\uACE0\uC2F6\uB2E4."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-113247471",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Vertically centered modal dialog",
    centered: true,
    visible: modal2Visible,
    onOk: function onOk() {
      return setModal2Visible(false);
    },
    onCancel: function onCancel() {
      return setModal2Visible(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "some contents..."), __jsx("p", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "some contents..."), __jsx("p", {
    className: "jsx-113247471",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "some contents..."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "113247471",
    __self: this
  }, ".highlight.jsx-113247471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;width:740px;border-radius:10px;-webkit-transition:background-color 0.2s;}.highlight.jsx-113247471:hover{background-color:#383940;}.article-list.jsx-113247471{float:left;}.highlight.jsx-113247471 .raiting.jsx-113247471{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-113247471 .raiting.jsx-113247471 img.jsx-113247471{width:25px;hight:25px;}.content.jsx-113247471{text-align:center;width:300px;line-height:50px;margin:0 auto;}.article__title.jsx-113247471{width:300px;height:60px;}.article__comment.jsx-113247471{cursor:pointer;width:260px;height:50px;}.article__comment.jsx-113247471 span.jsx-113247471{width:120px;height:48px;float:left;-webkit-transition:background-color 250ms ease 0ms,color 0s ease;transition:background-color 250ms ease 0ms,color 0s ease;}.article__comment.jsx-113247471 span.jsx-113247471:hover{background-color:hsla(0,0%,98.4%,.8);color:#27282d;}.article__title.jsx-113247471 a.jsx-113247471 span.jsx-113247471{display:inline-block;text-align:left;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-113247471 img.jsx-113247471{cursor:pointer;width:150px;}.preview.jsx-113247471{padding-top:10px;width:740px;background-color:#2a2b30;}.comment.jsx-113247471{padding-top:10px;width:740px;background-color:#2A2B30;}.comment_inner.jsx-113247471{width:700px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZpQixBQUdzQyxBQU9ZLEFBR2QsQUFHRSxBQVFGLEFBSU8sQUFNTixBQUlHLEFBS0gsQUFNeUIsQUFJaEIsQUFXTixBQUlFLEFBS0EsQUFLTCxXQWhFaEIsQUFXZSxDQVVDLEFBU0EsQUFtQ0UsR0F4Q0YsQUEwQkEsRUFJQSxBQUtBLENBN0NBLEdBeUJJLENBNUJwQixFQVVBLEFBU2UsQ0FsQ2YsQ0FxRUEsQ0F4Q2dCLEFBMEJoQixFQUk2QixBQUtHLENBN0NYLEtBZ0J5QyxFQUk1QyxBQUtGLEVBZGhCLFFBVmtCLEVBeUJLLEVBTHZCLEdBb0JBLEFBS0EsT0E1Q0EsT0F5Qm9CLE1BckRILEFBYVUsVUF5Q0EsR0FyRFgsWUFDTyxRQXFETCxXQXBEMkIsR0FxRDFCLGVBQ00scUJBZHpCLEVBdkNBLGNBVXVCLGFBNEN2QixnRkEzQzBCLDhFQUNULGFBQ0UsZUFDbkIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxoaWdobGlnaHRcXEhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9kYWwsIEljb24sIEF2YXRhciwgQ29tbWVudCwgVG9vbHRpcCwgQnV0dG9uLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHdoaXRlIH0gZnJvbSAnYW5zaS1jb2xvcnMnO1xyXG5pbXBvcnQgJy4vSGlnaGxpZ2h0LnNjc3MnO1xyXG5cclxuY29uc3QgSGlnaGxpZ2h0ID0gKHt5b3V0dWJlTGlua30pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHlvdXR1YmVMaW5rKVxyXG4gICAgY29uc3QgW3Nob3dQcmV2aWV3LCBTZXRTaG93UHJldmlld10gPSB1c2VTdGF0ZSgnbm9uZScpO1xyXG4gICAgY29uc3QgW3Nob3dDb21tZW50LCBTZXRTaG93Q29tbWVudF0gPSB1c2VTdGF0ZSgnbm9uZScpO1xyXG4gICAgY29uc3QgW3ZpZGVvVGl0bGUsIFNldFZpZGVvVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiNcXCZcXD9dKikuKi87XHJcbiAgICB2YXIgbWF0Y2hzID0geW91dHViZUxpbmsubWF0Y2gocmVnRXhwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD0ke21hdGNoc1s3XX0ma2V5PUFJemFTeUNIZU5TUTU1bVhVVnI1Tmd5T1dXQlRLaHcyWGpGVDh0dyZmaWVsZHM9aXRlbXMoc25pcHBldCh0aXRsZSkpJnBhcnQ9c25pcHBldGApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2V0VmlkZW9UaXRsZShyZXNwb25zZS5kYXRhLml0ZW1zWzBdLnNuaXBwZXQudGl0bGUpKVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZihzaG93UHJldmlldyA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd1ByZXZpZXcoJ2Jsb2NrJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHNob3dQcmV2aWV3ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd1ByZXZpZXcoJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBvbkNvbW1lbnRDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZihzaG93Q29tbWVudCA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd0NvbW1lbnQoJ2Jsb2NrJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHNob3dDb21tZW50ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd0NvbW1lbnQoJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCB0aHVtYm5haWxcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoc1s3XX0vMC5qcGdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3lvdXR1YmVMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2aWRlb1RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBvbkNvbW1lbnRDbGljaygpfT7rjJPquIAgKDE26rCcKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+7IKt7KCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCByYWl0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1cHhcIn19c3JjPVwiL3N0YXRpYy91cC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlXCI+Nzg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiIHN0eWxlPXt7ZGlzcGxheTogc2hvd1ByZXZpZXd9fT5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJwbGF5ZXJcIiB0eXBlPVwidGV4dC9odG1sXCIgd2lkdGg9XCI3NDBcIiBoZWlnaHQ9XCI0MTFcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHttYXRjaHNbN119YH1cclxuICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCIgc3R5bGU9e3tkaXNwbGF5OiBzaG93Q29tbWVudH19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50X2lubmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0LlNlYXJjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuMk+q4gOydhCDsnoXroKXtlbQg7KO87IS47JqULlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi7J6F66ClXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWFyY2g9e3ZhbHVlID0+IGNvbnNvbGUubG9nKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17PGEgc3R5bGU9e3tjb2xvcjogXCIjNzdEXCJ9fT7sg4zspohUVjwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOyDjOymiOuztOqzoOyLtuuLpC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e21vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnttb21lbnQoKS5mcm9tTm93KCl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZlcnRpY2FsbHkgY2VudGVyZWQgbW9kYWwgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU9e21vZGFsMlZpc2libGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25Paz17KCkgPT4gc2V0TW9kYWwyVmlzaWJsZShmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DYW5jZWw9eygpID0+IHNldE1vZGFsMlZpc2libGUoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cD5zb21lIGNvbnRlbnRzLi4uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPnNvbWUgY29udGVudHMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+c29tZSBjb250ZW50cy4uLjwvcD5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4OyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcclxuICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQ6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzgzOTQwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZS1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQgLnJhaXRpbmd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oaWdobGlnaHQgLnJhaXRpbmcgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29udGVudCB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fdGl0bGUgIHsgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX19jb21tZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UgMG1zLCBjb2xvciAwcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fY29tbWVudCBzcGFuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsMCUsOTguNCUsLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX3RpdGxlIGEgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk1NUJDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4OyAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnByZXZpZXcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY29tbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTJCMzAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb21tZW50X2lubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGlnaGxpZ2h0OyJdfQ== */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ })

})
//# sourceMappingURL=highlights.js.d6eb2bcddc82c7585c4d.hot-update.js.map