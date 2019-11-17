webpackHotUpdate("static\\development\\pages\\highlights.js",{

/***/ "./components/highlight/Selector.js":
/*!******************************************!*\
  !*** ./components/highlight/Selector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector.scss */ "./components/highlight/Selector.scss");
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Selector_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Selector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Option = antd__WEBPACK_IMPORTED_MODULE_1__["Select"].Option;

var Selector = function Selector(_ref) {
  var modal2Visible = _ref.modal2Visible,
      SetModal2Visible = _ref.SetModal2Visible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      userInfo = _useState[0],
      setUserInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      category = _useState2[0],
      SetCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      youtubeLink = _useState3[0],
      SetYoutubeLink = _useState3[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "Selector_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "Selector_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "upload-button",
    onClick: function onClick() {
      return SetModal2Visible(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "Selector_underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "Selector_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "?category=0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "\uC804\uCCB4"))), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "?category=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "\uAC8C\uC784"))), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "?category=funny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\uC720\uBA38"))), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "?category=music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "\uC74C\uC545"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uD558\uC774\uB77C\uC774\uD2B8 \uB4F1\uB85D",
    centered: true,
    visible: modal2Visible,
    onOk: function onOk() {
      console.log(youtubeLink, category);
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://192.168.137.1:8080/highlightboardWriteRequest", {
        link: youtubeLink,
        category: category,
        writer: userInfo.username
      });
      SetModal2Visible(false);
    },
    onCancel: function onCancel() {
      return SetModal2Visible(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("p", {
    style: {
      "fontSize": "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uCE74\uD14C\uACE0\uB9AC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    showSearch: true,
    style: {
      width: 200,
      marginBottom: 20
    },
    placeholder: "\uCE74\uD14C\uACE0\uB9AC\uB97C \uC120\uD0DD\uD558\uC138\uC694.",
    optionFilterProp: "children",
    onChange: function onChange(value) {
      return SetCategory(value);
    } //onFocus={}
    //onBlur={}
    //onSearch={}
    ,
    filterOption: function filterOption(input, option) {
      return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(Option, {
    value: "game",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "\uAC8C\uC784"), __jsx(Option, {
    value: "funny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "\uC720\uBA38"), __jsx(Option, {
    value: "music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "\uC74C\uC545")), __jsx("p", {
    style: {
      "fontSize": "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\uC720\uD29C\uBE0C \uB9C1\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: function onChange(e) {
      return SetYoutubeLink(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ })

})
//# sourceMappingURL=highlights.js.27c3bb019e594162e8e6.hot-update.js.map