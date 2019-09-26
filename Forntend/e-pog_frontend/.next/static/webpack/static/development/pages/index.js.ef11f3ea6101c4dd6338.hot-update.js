webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: getPastMatch, getTournanments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPastMatch", function() { return getPastMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTournanments", function() { return getTournanments; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var address = "http://localhost:8080";
function getPastMatch() {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/pastMatch");
}
function getTournanments(id) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(address + "/tournaments", {
    "params": id
  });
}

/***/ })

})
//# sourceMappingURL=index.js.ef11f3ea6101c4dd6338.hot-update.js.map