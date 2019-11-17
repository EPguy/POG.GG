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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Selector.scss */ "./components/highlight/Selector.scss");
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Selector_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Selector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






var Selector = function Selector(_ref) {
  var modal2Visible = _ref.modal2Visible,
      SetModal2Visible = _ref.SetModal2Visible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      youtubeLink = _useState[0],
      SetYoutubeLink = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "Selector_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("div", {
    className: "Selector_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("div", {
    className: "upload-button",
    onClick: function onClick() {
      return SetModal2Visible(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "Selector_underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "Selector_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "\uC804\uCCB4")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\uAC8C\uC784")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\uC720\uBA38")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\uC74C\uC545")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: "\uD558\uC774\uB77C\uC774\uD2B8 \uB4F1\uB85D",
    centered: true,
    visible: modal2Visible,
    onOk: function onOk() {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("/highlightboardWriteRequest", {});
      SetModal2Visible(false);
    },
    onCancel: function onCancel() {
      return SetModal2Visible(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("p", {
    style: {
      "fontSize": "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\uC720\uD29C\uBE0C \uB9C1\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: function onChange(e) {
      return SetYoutubeLink(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ })

})
//# sourceMappingURL=highlights.js.b51846702683c2fb4b78.hot-update.js.map