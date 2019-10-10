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
var _this = undefined,
    _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Highlight = function Highlight(_ref) {
  var youtubeLink = _ref.youtubeLink;
  console.log(youtubeLink);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      likes = _useState[0],
      SetLikes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      dislikes = _useState2[0],
      SetDislikes = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      action = _useState3[0],
      SetAction = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('none'),
      showPreview = _useState4[0],
      SetShowPreview = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      videoTitle = _useState5[0],
      SetVideoTitle = _useState5[1];

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

  var like = function like() {
    SetLikes(1);
    SetDislikes(0);
    SetAction('liked');
  };

  var dislike = function dislike() {
    SetLikes(0);
    SetDislikes(1);
    SetAction('disliked');
  };

  var actions = [__jsx("span", {
    key: "comment-basic-like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Like",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "like",
    theme: action === 'liked' ? 'filled' : 'outlined',
    onClick: _this.like,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })), __jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, likes)), __jsx("span", {
    key: " key=\"comment-basic-dislike\"",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Dislike",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
    type: "dislike",
    theme: action === 'disliked' ? 'filled' : 'outlined',
    onClick: _this.dislike,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), __jsx("span", {
    style: {
      paddingLeft: 8,
      cursor: 'auto'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, dislikes)), __jsx("span", {
    key: "comment-basic-reply-to",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Reply to")];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3751471654" + " " + "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    onClick: function onClick() {
      return _onClick();
    },
    className: "jsx-3751471654" + " " + "article-list thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("img", {
    src: "http://img.youtube.com/vi/".concat(matchs[7], "/0.jpg"),
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3751471654" + " " + "article-list content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3751471654" + " " + "article__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx("a", {
    href: youtubeLink,
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, videoTitle))), __jsx("div", {
    className: "jsx-3751471654" + " " + "article__comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\uB313\uAE00 (16\uAC1C)"), __jsx("span", {
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "\uC0AD\uC81C"))), __jsx("div", {
    className: "jsx-3751471654" + " " + "article-list raiting",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("img", {
    style: {
      marginBottom: "5px"
    },
    src: "/static/up.svg",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-3751471654" + " " + "vote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "78"), __jsx("img", {
    src: "/static/down.svg",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }))), __jsx("div", {
    style: {
      display: showPreview
    },
    className: "jsx-3751471654" + " " + "preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("iframe", {
    id: "player",
    type: "text/html",
    width: "740",
    height: "411",
    src: "https://www.youtube.com/embed/".concat(matchs[7]),
    frameborder: "0",
    className: "jsx-3751471654",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-3751471654" + " " + "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
      lineNumber: 89
    },
    __self: this
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Comment"], {
    actions: actions,
    author: __jsx("a", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "Han Solo"),
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      alt: "Han Solo",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }),
    content: __jsx("p", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently."),
    datetime: __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
      title: moment__WEBPACK_IMPORTED_MODULE_4___default()().format('YYYY-MM-DD HH:mm:ss'),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-3751471654",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, moment__WEBPACK_IMPORTED_MODULE_4___default()().fromNow())),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3751471654",
    __self: this
  }, ".highlight.jsx-3751471654{cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:20px;width:740px;border-radius:10px;-webkit-transition:background-color 0.2s;}.highlight.jsx-3751471654:hover{background-color:#383940;}.article-list.jsx-3751471654{float:left;}.highlight.jsx-3751471654 .raiting.jsx-3751471654{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:112px;font-size:20px;}.highlight.jsx-3751471654 .raiting.jsx-3751471654 img.jsx-3751471654{width:25px;hight:25px;}.content.jsx-3751471654{text-align:center;width:300px;line-height:50px;margin:0 auto;}.article__title.jsx-3751471654{width:300px;height:60px;}.article__comment.jsx-3751471654{width:260px;height:50px;}.article__comment.jsx-3751471654 span.jsx-3751471654{width:120px;height:48px;float:left;-webkit-transition:background-color 250ms ease 0ms,color 0s ease;transition:background-color 250ms ease 0ms,color 0s ease;}.article__comment.jsx-3751471654 span.jsx-3751471654:hover{background-color:hsla(0,0%,98.4%,.8);color:#27282d;}.article__title.jsx-3751471654 a.jsx-3751471654 span.jsx-3751471654{display:inline-block;text-align:left;width:300px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#2955BC;font-size:22px;-webkit-text-decoration:none;text-decoration:none;}.thumbnail.jsx-3751471654 img.jsx-3751471654{width:150px;}.preview.jsx-3751471654{padding-top:10px;width:740px;background-color:#2a2b30;}.comment.jsx-3751471654{padding-top:10px;width:740px;background-color:#2a2b30;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcaGlnaGxpZ2h0XFxIaWdobGlnaHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUhpQixBQUd3QyxBQVFVLEFBR2QsQUFHRSxBQVFGLEFBSU8sQUFNTixBQUlBLEFBSUEsQUFNeUIsQUFJaEIsQUFXVCxBQUdLLEFBS0EsV0F6RHJCLEFBV2UsQ0FVQyxBQUlBLEFBSUEsQUFxQmhCLEdBN0RpQixFQWdFRCxBQUtBLENBM0NBLEdBd0JJLENBM0JwQixFQVVBLEFBSUEsQUFJZSxDQWpDZixJQXlENkIsQUFLQSxDQTNDUixLQWV5QyxFQUk1QyxBQUtGLFVBdkJFLEVBd0JLLEVBTHZCLEdBbUJBLEFBS0EsT0ExQ0EsT0F3Qm9CLE1BdkNPLFVBd0NBLEtBckRWLGFBQ0QsS0FxREUsT0FwREssT0FxREosWUFwRDBCLEdBcURwQixxQkFkekIsZ0JBNUJ1QixDQVZ2QixZQXFEQSxnRkExQzBCLDhFQUNULGFBQ0UsZUFDbkIiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxjb21wb25lbnRzXFxoaWdobGlnaHRcXEhpZ2hsaWdodC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbiwgQXZhdGFyLCBDb21tZW50LCBUb29sdGlwLCBCdXR0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuXHJcbmNvbnN0IEhpZ2hsaWdodCA9ICh7eW91dHViZUxpbmt9KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh5b3V0dWJlTGluaylcclxuICAgIGNvbnN0IFtsaWtlcywgU2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbZGlzbGlrZXMsIFNldERpc2xpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FjdGlvbiwgU2V0QWN0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Nob3dQcmV2aWV3LCBTZXRTaG93UHJldmlld10gPSB1c2VTdGF0ZSgnbm9uZScpO1xyXG4gICAgY29uc3QgW3ZpZGVvVGl0bGUsIFNldFZpZGVvVGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgdmFyIHJlZ0V4cCA9IC9eLiooKHlvdXR1LmJlXFwvKXwodlxcLyl8KFxcL3VcXC9cXHdcXC8pfChlbWJlZFxcLyl8KHdhdGNoXFw/KSlcXD8/dj89PyhbXiNcXCZcXD9dKikuKi87XHJcbiAgICB2YXIgbWF0Y2hzID0geW91dHViZUxpbmsubWF0Y2gocmVnRXhwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KGBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3ZpZGVvcz9pZD0ke21hdGNoc1s3XX0ma2V5PUFJemFTeUNIZU5TUTU1bVhVVnI1Tmd5T1dXQlRLaHcyWGpGVDh0dyZmaWVsZHM9aXRlbXMoc25pcHBldCh0aXRsZSkpJnBhcnQ9c25pcHBldGApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gU2V0VmlkZW9UaXRsZShyZXNwb25zZS5kYXRhLml0ZW1zWzBdLnNuaXBwZXQudGl0bGUpKVxyXG4gICAgfSwgW10pO1xyXG4gICAgY29uc3Qgb25DbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZihzaG93UHJldmlldyA9PT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd1ByZXZpZXcoJ2Jsb2NrJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHNob3dQcmV2aWV3ID09PSBcImJsb2NrXCIpIHtcclxuICAgICAgICAgICAgU2V0U2hvd1ByZXZpZXcoJ25vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaWtlID0gKCkgPT4ge1xyXG4gICAgICAgIFNldExpa2VzKDEpO1xyXG4gICAgICAgIFNldERpc2xpa2VzKDApO1xyXG4gICAgICAgIFNldEFjdGlvbignbGlrZWQnKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNvbnN0IGRpc2xpa2UgPSAoKSA9PiB7XHJcbiAgICAgICAgU2V0TGlrZXMoMCk7XHJcbiAgICAgICAgU2V0RGlzbGlrZXMoMSk7XHJcbiAgICAgICAgU2V0QWN0aW9uKCdkaXNsaWtlZCcpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBbXHJcbiAgICAgICAgPHNwYW4ga2V5PVwiY29tbWVudC1iYXNpYy1saWtlXCI+XHJcbiAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkxpa2VcIj5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICB0eXBlPVwibGlrZVwiXHJcbiAgICAgICAgICAgICAgdGhlbWU9e2FjdGlvbiA9PT0gJ2xpa2VkJyA/ICdmaWxsZWQnIDogJ291dGxpbmVkJ31cclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxpa2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogOCwgY3Vyc29yOiAnYXV0bycgfX0+e2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICA8L3NwYW4+LFxyXG4gICAgICAgIDxzcGFuIGtleT0nIGtleT1cImNvbW1lbnQtYmFzaWMtZGlzbGlrZVwiJz5cclxuICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiRGlzbGlrZVwiPlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIHR5cGU9XCJkaXNsaWtlXCJcclxuICAgICAgICAgICAgICB0aGVtZT17YWN0aW9uID09PSAnZGlzbGlrZWQnID8gJ2ZpbGxlZCcgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGlzbGlrZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiA4LCBjdXJzb3I6ICdhdXRvJyB9fT57ZGlzbGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvc3Bhbj4sXHJcbiAgICAgICAgPHNwYW4ga2V5PVwiY29tbWVudC1iYXNpYy1yZXBseS10b1wiPlJlcGx5IHRvPC9zcGFuPixcclxuICAgIF07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlnaGxpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCB0aHVtYm5haWxcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgaHR0cDovL2ltZy55b3V0dWJlLmNvbS92aS8ke21hdGNoc1s3XX0vMC5qcGdgfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1saXN0IGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGVfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3lvdXR1YmVMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt2aWRlb1RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZV9fY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7rjJPquIAgKDE26rCcKTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+7IKt7KCcPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbGlzdCByYWl0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e21hcmdpbkJvdHRvbTogXCI1cHhcIn19c3JjPVwiL3N0YXRpYy91cC5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2b3RlXCI+Nzg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZG93bi5zdmdcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld1wiIHN0eWxlPXt7ZGlzcGxheTogc2hvd1ByZXZpZXd9fT5cclxuICAgICAgICAgICAgICAgIDxpZnJhbWUgaWQ9XCJwbGF5ZXJcIiB0eXBlPVwidGV4dC9odG1sXCIgd2lkdGg9XCI3NDBcIiBoZWlnaHQ9XCI0MTFcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHttYXRjaHNbN119YH1cclxuICAgICAgICAgICAgICAgIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQuU2VhcmNoXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLrjJPquIDsnYQg7J6F66Cl7ZW0IOyjvOyEuOyalC5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyQnV0dG9uPVwi7J6F66ClXCJcclxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaD17dmFsdWUgPT4gY29uc29sZS5sb2codmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9ucz17YWN0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9ezxhPkhhbiBTb2xvPC9hPn1cclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e1xyXG4gICAgICAgICAgICAgICAgICAgIDxBdmF0YXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkhhbiBTb2xvXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgV2Ugc3VwcGx5IGEgc2VyaWVzIG9mIGRlc2lnbiBwcmluY2lwbGVzLCBwcmFjdGljYWwgcGF0dGVybnMgYW5kIGhpZ2ggcXVhbGl0eSBkZXNpZ25cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzIChTa2V0Y2ggYW5kIEF4dXJlKSwgdG8gaGVscCBwZW9wbGUgY3JlYXRlIHRoZWlyIHByb2R1Y3QgcHJvdG90eXBlcyBiZWF1dGlmdWxseVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmQgZWZmaWNpZW50bHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRldGltZT17XHJcbiAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9e21vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e21vbWVudCgpLmZyb21Ob3coKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGlnaGxpZ2h0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODM5NDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlLWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhpZ2hsaWdodCAucmFpdGluZyBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jb250ZW50IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5hcnRpY2xlX190aXRsZSAgeyAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX2NvbW1lbnQgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDI1MG1zIGVhc2UgMG1zLCBjb2xvciAwcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYXJ0aWNsZV9fY29tbWVudCBzcGFuOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsMCUsOTguNCUsLjgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzI3MjgyZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmFydGljbGVfX3RpdGxlIGEgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMjk1NUJDO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRodW1ibmFpbCBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5wcmV2aWV3IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJhMmIzMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyYjMwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIaWdobGlnaHQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Highlight.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Highlight);

/***/ })

})
//# sourceMappingURL=highlights.js.33a3725ef1347372480b.hot-update.js.map