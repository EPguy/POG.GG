webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/LolLayout/LolLayout.js":
/*!*******************************************!*\
  !*** ./components/LolLayout/LolLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\poggg_frontend\\components\\LolLayout\\LolLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var AppLayout = function AppLayout(_ref) {
  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      username = _useState[0],
      setUsername = _useState[1];

  var _onClick = function onClick(e) {
    e.preventDefault();
    window.location = 'http://localhost:3000/summoner?name=' + username;
  };

  var onEnterClick = function onEnterClick(e) {
    if (e.charCode == 13) {
      _onClick(e);
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    "class": "header-gnb",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    "class": "header-items",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    "class": "site-item",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("img", {
    src: "https://poro.gg/images/family/ico_lol.png",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("span", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uB9AC\uADF8\uC624\uBE0C\uB808\uC804\uB4DC"))))))), __jsx("div", {
    "class": "sub-items",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-top",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-top-logo",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "POG.GG")), __jsx("div", {
    "class": "sub-items-top-input",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("input", {
    value: username,
    onKeyPress: onEnterClick,
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    },
    placeholder: "\uCC54\uD53C\uC5B8, \uC18C\uD658\uC0AC\uBA85 \uAC80\uC0C9",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("button", {
    onClick: function onClick(e) {
      return _onClick(e);
    },
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("i", {
    className: "jsx-1604195779" + " " + "fas fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })))), __jsx("div", {
    "class": "sub-items-bottom",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    "class": "sub-items-list",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uD648")), __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    href: "http:://localhost:3001",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "e\uC2A4\uD3EC\uCE20")), __jsx("li", {
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    href: "#",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\uD504\uB85C\uAD00\uC804")))))), __jsx("div", {
    "class": "notice",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    "class": "notice_item",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("i", {
    style: {
      paddingRight: "5px"
    },
    className: "jsx-1604195779" + " " + "fas fa-exclamation-circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "\uC548\uB155\uD558\uC138\uC694 lod.gg\uC5D0 \uC624\uC2E0\uAC83\uC744 \uD658\uC601\uD569\uB2C8\uB2E4!")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1604195779",
    __self: this
  }, "body{margin:0;background-color:#f5f5f5;}ul{list-style-type:none;margin:0;padding:0;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}.header-gnb{font-family:'Open Sans',sans-serif;height:40px;background-color:#232F46;}.header-items{height:40px;width:1050px;margin:0 auto;}.site-item{float:left;width:800px;height:40px;}.site-item ul li span{font-size:13px;color:#c0daf1;}.header-items ul{height:100%;}.header-items ul li{padding:0 16px;height:40px;width:120px;}.header-items ul li:first-child{padding-left:0px;padding-right:16px;}.header-items ul li:active{background-color:#313641;}.header-items ul li a img{vertical-align:middle;position:relative;top:-1px;width:17px;height:17px;padding-right:5px;}.header-items ul li a{line-height:40px;font-size:15px;}.sub-items{background-image:url(/static/sub_background.png);height:200px;}.sub-items-top{width:1050px;margin:0 auto;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;}.sub-items-top-logo{margin-left:14px;}.sub-items-top-logo>span{line-height:70px;}.sub-items-top-logo>img{width:150px;height:70px;}.sub-items-top-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;height:35px;}.sub-items-top-input input{float:left;font-size:12px;width:300px;border:0;line-height:35px;padding:0 12px 0 12px;}.sub-items-top-input button{background:#ffffff;height:35px;width:50px;cursor:pointer;border:none;}.sub-items-bottom{height:50px;background-color:rgba(0,0,0,.3);}.sub-items-bottom ul li{width:76px;float:left;line-height:47px;margin-right:15px;text-align:center;}.sub-items-bottom ul li:hover{border-bottom:2px solid #ffffff;}.sub-items-bottom ul li a{font-size:15px;color:#d6d6d6;}.sub-items-list{width:1050px;margin:0 auto;}.notice{height:40px;background-color:#ffc528;}.notice_item{font-size:14px;width:1050px;margin:0 auto;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxwb2dnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcTG9sTGF5b3V0XFxMb2xMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURpQixBQUdrQyxBQUlZLEFBS0EsQUFJZSxBQUt4QixBQUtELEFBS0ksQUFJSCxBQUdHLEFBS0UsQUFJUSxBQUdILEFBUUwsQUFJZ0MsQUFJcEMsQUFTSSxBQUdBLEFBR0wsQUFJQyxBQU9GLEFBUVEsQUFPUCxBQUlELEFBT3FCLEFBR2pCLEFBSUYsQUFJRCxBQUtHLFNBbElVLEVBdUJiLEFBa0VHLEFBbUJKLENBMUZFLEFBY2pCLEFBOENnQixBQTBCb0IsQUFzQlAsQ0EvRFgsQUEyREEsRUE5RkEsQUFPRixBQW1GRSxBQWFELEVBM0ZNLEFBZUosQUFpQm5CLEFBR0EsRUFzQmdCLEVBN0ZILENBMkNTLEFBOERELENBckZMLENBdURoQixDQTVEa0IsQUF5QmxCLENBOENnQixDQXREQyxBQTRCQSxBQTJEakIsQ0FTa0IsQ0F2R2xCLEFBMEZBLENBbEhjLENBNkZDLENBMUNmLEFBMkRBLEVBbEhBLENBWWdCLEFBWWhCLENBZ0JBLENBc0ZBLENBcENhLENBdkViLEFBaUJBLEFBeUVzQixDQXhHdEIsQUEwQ2EsQUFpQkksRUFrQ0UsQUFrQ0UsRUE1QnJCLEdBM0Y2QixBQThFUixFQTNDTixBQVVFLENBbERELE9BMkZBLEFBV00sRUF1QnRCLENBcEZnQixFQXhDaEIsQUFrREEsRUFpQzBCLEtBUTFCLEdBdEZBLEFBb0NzQixFQStCSyxDQThCM0IsV0FsQkEsSUExQ0Esd0JBY2tDLDJEQWlCWCx3REFoQkEscUNBaUJQLFlBQ0EsWUFDaEIsZ0NBbEJnQixZQUNoQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxccG9nZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXExvbExheW91dFxcTG9sTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvc3VtbW9uZXI/bmFtZT0nK3VzZXJuYW1lO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25FbnRlckNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLmNoYXJDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgb25DbGljayhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlci1nbmJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvZmFtaWx5L2ljb19sb2wucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7rpqzqt7jsmKTruIzroIjsoITrk5w8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy10b3AtbG9nb1wiPjxoMT5QT0cuR0c8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLXRvcC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25LZXlQcmVzcz17b25FbnRlckNsaWNrfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLssZTtlLzslrgsIOyGjO2ZmOyCrOuqhSDqsoDsg4lcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+7ZmIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Oi8vbG9jYWxob3N0OjMwMDFcIj5l7Iqk7Y+s7LigPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj7tlITroZzqtIDsoIQ8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGljZV9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLWNpcmNsZVwiIHN0eWxlPXt7cGFkZGluZ1JpZ2h0OiBcIjVweFwifX0+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIOyViOuFle2VmOyEuOyalCBsb2QuZ2fsl5Ag7Jik7Iug6rKD7J2EIO2ZmOyYge2VqeuLiOuLpCFcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1nbmIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMkY0NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaXRlLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zaXRlLWl0ZW0gdWwgbGkgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2MwZGFmMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICAxMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaTpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGk6YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzNjQxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpIGEgaW1ne1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL3N0YXRpYy9zdWJfYmFja2dyb3VuZC5wbmcpOyAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWxvZ28gPiBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWxvZ28gPmltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtaW5wdXQgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMnB4IDAgMTJweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtaW5wdXQgYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWJvdHRvbSB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtYm90dG9tIHVsIGxpOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20gdWwgbGkgYXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2Q2ZDZkNjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1saXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RpY2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM1Mjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RpY2VfaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDsgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcExheW91dDsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\poggg_frontend\\components\\LolLayout\\LolLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=index.js.e9f44984e87f907bc94a.hot-update.js.map