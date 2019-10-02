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
    id: "3061494625",
    __self: this
  }, ".LoginForm{width:400px;height:600px;margin:0 auto;top:50%;margin-top:250px;}.modal-wrapper{width:400px;background-color:#2A2D33;border-radius:40px;font-family:$font;color:#515866;box-shadow:0 40px 80px rgba(0,0,0,0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWFpQixBQUdxQyxBQU9BLFlBTkMsQUFPWSxhQU5YLFlBT0ssRUFOWCxRQUNTLFNBTUMsUUFMdEIsVUFNa0IsY0FDeUIsdUNBQzNDIiwiZmlsZSI6IkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxccGFnZXNcXGxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMb2dpbkZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dpbi9Mb2dpbkZvcm0nO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXhpb3MucG9zdChcImh0dHA6Ly8xOTIuMTY4LjEzNy4xOjgwODAvam9pblJlcXVlc3Q/dXNlcl9pZD1rMDIxMjI5JnVzZXJfcHc9NDhhNDhhNDhhJnVzZXJfbmFtZT3quYDso7zshLFcIilcclxuICAgICAgICAudGhlbihyZXNwb3NuZSA9PiBjb25zb2xlLmxvZyhyZXNwb3NuZSkpXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxMb2dpbkZvcm0vPlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLkxvZ2luRm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJBMkQzMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICRmb250O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzUxNTg2NjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0MHB4IDgwcHggcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\login.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.47a6b31c85db19116a56.hot-update.js.map