webpackHotUpdate("static\\development\\pages\\highlights.js",{

/***/ "./components/highlight/Selector.js":
/*!******************************************!*\
  !*** ./components/highlight/Selector.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Selector.scss */ "./components/highlight/Selector.scss");
/* harmony import */ var _Selector_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Selector_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\highlight\\Selector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Option = antd__WEBPACK_IMPORTED_MODULE_2__["Select"].Option;

var Selector = function Selector(_ref) {
  var _jsx;

  var modal2Visible = _ref.modal2Visible,
      SetModal2Visible = _ref.SetModal2Visible;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      userInfo = _useState[0],
      setUserInfo = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      youtubeLink = _useState2[0],
      SetYoutubeLink = _useState2[1];

  function onChange(value) {
    console.log("selected ".concat(value));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (localStorage.getItem('token')) {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://192.168.137.1:8080/tokenRequest", {
        token: localStorage.getItem('token')
      }).then(function (response) {
        setUserInfo({
          password: response.data.password,
          userid: response.data.userid,
          username: response.data.username
        });
        setIsLogin(true);
        console.log(userInfo);
      })["catch"](function (error) {
        setIsLogin(false);
        console.log(error);
      });
    }
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "Selector_container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "Selector_top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "upload-button",
    onClick: function onClick() {
      return SetModal2Visible(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\uB4F1\uB85D\uD558\uAE30"))), __jsx("div", {
    className: "Selector_underline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("div", {
    className: "Selector_bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\uC804\uCCB4")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "\uAC8C\uC784")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "\uC720\uBA38")), __jsx("div", {
    className: "categori",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\uC74C\uC545")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "\uD558\uC774\uB77C\uC774\uD2B8 \uB4F1\uB85D",
    centered: true,
    visible: modal2Visible,
    onOk: function onOk() {
      axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("/highlightboardWriteRequest", {
        link: youtubeLink,
        categori: categori
      });
      SetModal2Visible(false);
    },
    onCancel: function onCancel() {
      return SetModal2Visible(false);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("p", {
    style: {
      "fontSize": "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "\uCE74\uD14C\uACE0\uB9AC"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], (_jsx = {
    style: {
      marginBottom: marginBottom
    },
    showSearch: true
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "style", {
    width: 200
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "placeholder", "Select a person"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "optionFilterProp", "children"), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "onChange", onChange), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "filterOption", function filterOption(input, option) {
    return option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__source", {
    fileName: _jsxFileName,
    lineNumber: 64
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_jsx, "__self", this), _jsx), __jsx(Option, {
    value: "game",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\uAC8C\uC784"), __jsx(Option, {
    value: "funny",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "\uC720\uBA38"), __jsx(Option, {
    value: "music",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\uC74C\uC545")), __jsx("p", {
    style: {
      "fontSize": "18px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "\uC720\uD29C\uBE0C \uB9C1\uD06C"), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    onChange: function onChange(e) {
      return SetYoutubeLink(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ })

})
//# sourceMappingURL=highlights.js.51962b4bfad7305365dc.hot-update.js.map