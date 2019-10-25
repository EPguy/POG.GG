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
    href: "http://localhost:3001/",
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
    href: "/community",
    className: "jsx-1604195779",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\uD301 \uAC8C\uC2DC\uD310")))))), __jsx("div", {
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
  }, "body{margin:0;background-color:#f5f5f5;}ul{list-style-type:none;margin:0;padding:0;}a{-webkit-text-decoration:none;text-decoration:none;color:white;}.header-gnb{font-family:'Open Sans',sans-serif;height:40px;background-color:#232F46;}.header-items{height:40px;width:1050px;margin:0 auto;}.site-item{float:left;width:800px;height:40px;}.site-item ul li span{font-size:13px;color:#c0daf1;}.header-items ul{height:100%;}.header-items ul li{padding:0 16px;height:40px;width:120px;}.header-items ul li:first-child{padding-left:0px;padding-right:16px;}.header-items ul li:active{background-color:#313641;}.header-items ul li a img{vertical-align:middle;position:relative;top:-1px;width:17px;height:17px;padding-right:5px;}.header-items ul li a{line-height:40px;font-size:15px;}.sub-items{background-image:url(/static/sub_background.png);height:200px;}.sub-items-top{width:1050px;margin:0 auto;height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:white;}.sub-items-top-logo{margin-left:14px;}.sub-items-top-logo>span{line-height:70px;}.sub-items-top-logo>img{width:150px;height:70px;}.sub-items-top-input{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:300px;height:35px;}.sub-items-top-input input{float:left;font-size:12px;width:300px;border:0;line-height:35px;padding:0 12px 0 12px;}.sub-items-top-input button{background:#ffffff;height:35px;width:50px;cursor:pointer;border:none;}.sub-items-bottom{height:50px;background-color:rgba(0,0,0,.3);}.sub-items-bottom ul li{width:76px;float:left;line-height:47px;margin-right:15px;text-align:center;}.sub-items-bottom ul li:hover{border-bottom:2px solid #ffffff;}.sub-items-bottom ul li a{font-size:15px;color:#d6d6d6;}.sub-items-list{width:1050px;margin:0 auto;}.notice{height:40px;background-color:#ffc528;}.notice_item{font-size:14px;width:1050px;margin:0 auto;line-height:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxwb2dnZ19mcm9udGVuZFxcY29tcG9uZW50c1xcTG9sTGF5b3V0XFxMb2xMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdURpQixBQUdrQyxBQUlZLEFBS0EsQUFJZSxBQUt4QixBQUtELEFBS0ksQUFJSCxBQUdHLEFBS0UsQUFJUSxBQUdILEFBUUwsQUFJZ0MsQUFJcEMsQUFTSSxBQUdBLEFBR0wsQUFJQyxBQU9GLEFBUVEsQUFPUCxBQUlELEFBT3FCLEFBR2pCLEFBSUYsQUFJRCxBQUtHLFNBbElVLEVBdUJiLEFBa0VHLEFBbUJKLENBMUZFLEFBY2pCLEFBOENnQixBQTBCb0IsQUFzQlAsQ0EvRFgsQUEyREEsRUE5RkEsQUFPRixBQW1GRSxBQWFELEVBM0ZNLEFBZUosQUFpQm5CLEFBR0EsRUFzQmdCLEVBN0ZILENBMkNTLEFBOERELENBckZMLENBdURoQixDQTVEa0IsQUF5QmxCLENBOENnQixDQXREQyxBQTRCQSxBQTJEakIsQ0FTa0IsQ0F2R2xCLEFBMEZBLENBbEhjLENBNkZDLENBMUNmLEFBMkRBLEVBbEhBLENBWWdCLEFBWWhCLENBZ0JBLENBc0ZBLENBcENhLENBdkViLEFBaUJBLEFBeUVzQixDQXhHdEIsQUEwQ2EsQUFpQkksRUFrQ0UsQUFrQ0UsRUE1QnJCLEdBM0Y2QixBQThFUixFQTNDTixBQVVFLENBbERELE9BMkZBLEFBV00sRUF1QnRCLENBcEZnQixFQXhDaEIsQUFrREEsRUFpQzBCLEtBUTFCLEdBdEZBLEFBb0NzQixFQStCSyxDQThCM0IsV0FsQkEsSUExQ0Esd0JBY2tDLDJEQWlCWCx3REFoQkEscUNBaUJQLFlBQ0EsWUFDaEIsZ0NBbEJnQixZQUNoQiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxccG9nZ2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXExvbExheW91dFxcTG9sTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IEFwcExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICAgIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3Qgb25DbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvc3VtbW9uZXI/bmFtZT0nK3VzZXJuYW1lO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb25FbnRlckNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBpZihlLmNoYXJDb2RlID09IDEzKXtcclxuICAgICAgICAgICAgb25DbGljayhlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImhlYWRlci1nbmJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXItaXRlbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vcG9yby5nZy9pbWFnZXMvZmFtaWx5L2ljb19sb2wucG5nXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7rpqzqt7jsmKTruIzroIjsoITrk5w8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy10b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy10b3AtbG9nb1wiPjxoMT5QT0cuR0c8L2gxPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLXRvcC1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHZhbHVlPXt1c2VybmFtZX0gb25LZXlQcmVzcz17b25FbnRlckNsaWNrfSBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJuYW1lKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCLssZTtlLzslrgsIOyGjO2ZmOyCrOuqhSDqsoDsg4lcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUpfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1Yi1pdGVtcy1ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLWl0ZW1zLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIvXCI+7ZmIPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9cIj5l7Iqk7Y+s7LigPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cIi9jb21tdW5pdHlcIj7tjIEg6rKM7Iuc7YyQPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RpY2VfaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1leGNsYW1hdGlvbi1jaXJjbGVcIiBzdHlsZT17e3BhZGRpbmdSaWdodDogXCI1cHhcIn19PjwvaT5cclxuICAgICAgICAgICAgICAgICAgICDslYjrhZXtlZjshLjsmpQgbG9kLmdn7JeQIOyYpOyLoOqyg+ydhCDtmZjsmIHtlanri4jri6QhXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItZ25iIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzJGNDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2l0ZS1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc2l0ZS1pdGVtIHVsIGxpIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNjMGRhZjE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAgMTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItaXRlbXMgdWwgbGk6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWl0ZW1zIHVsIGxpOmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMxMzY0MTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaSBhIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pdGVtcyB1bCBsaSBhe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9zdGF0aWMvc3ViX2JhY2tncm91bmQucG5nKTsgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1sb2dvID4gc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLXRvcC1sb2dvID5pbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy10b3AtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWlucHV0IGlucHV0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTJweCAwIDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtdG9wLWlucHV0IGJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtYm90dG9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4zKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN1Yi1pdGVtcy1ib3R0b20gdWwgbGl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuc3ViLWl0ZW1zLWJvdHRvbSB1bCBsaTpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtYm90dG9tIHVsIGxpIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkNmQ2ZDY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWItaXRlbXMtbGlzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjNTI4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90aWNlX2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7ICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBMYXlvdXQ7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\poggg_frontend\\components\\LolLayout\\LolLayout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (AppLayout);

/***/ })

})
//# sourceMappingURL=index.js.2916680c57ebf96bb9fd.hot-update.js.map