webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Login/LoginForm */ "./components/Login/LoginForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\login.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Login = function Login() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://192.168.137.1:8080/joinRequest?user_id=k021229&user_pw=48a48a48a&user_name=김주성").then(function (resposne) {
      return console.log(resposne);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Login_LoginForm__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2848423492",
    __self: this
  }, ".LoginForm{width:400px;height:600px;margin:0 auto;top:50%;margin-top:250px;}.modal-wrapper{width:400px;background-color:#2A2D33;border-radius:40px;font-family:$font;color:#515866;box-shadow:0 40px 80px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFhLEFBR2lDLEFBT0EsWUFOQyxBQU9ZLGFBTlgsWUFPSyxFQU5YLFFBQ1MsU0FNQyxRQUx0QixVQU1rQixjQUN5Qix1Q0FDM0MiLCJmaWxlIjoiRDpcXFJlYWN0UHJvamVjdFxcamF2YXByb2plY3RcXGxvZC5nZ1xcRm9ybnRlbmRcXGUtcG9nX2Zyb250ZW5kXFxwYWdlc1xcbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvZ2luRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0xvZ2luL0xvZ2luRm9ybSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmNvbnN0IExvZ2luID0gKCkgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBheGlvcy5wb3N0KFwiaHR0cDovLzE5Mi4xNjguMTM3LjE6ODA4MC9qb2luUmVxdWVzdD91c2VyX2lkPWswMjEyMjkmdXNlcl9wdz00OGE0OGE0OGEmdXNlcl9uYW1lPeq5gOyjvOyEsVwiKVxyXG4gICAgICAgIC50aGVuKHJlc3Bvc25lID0+IGNvbnNvbGUubG9nKHJlc3Bvc25lKSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPExvZ2luRm9ybS8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLkxvZ2luRm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAubW9kYWwtd3JhcHBlcntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkQzMztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTg2NjtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDQwcHggODBweCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\login.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.32244b151bf70b4cc821.hot-update.js.map