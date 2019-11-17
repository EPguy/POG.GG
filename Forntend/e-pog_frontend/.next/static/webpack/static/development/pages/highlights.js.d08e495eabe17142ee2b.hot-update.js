webpackHotUpdate("static\\development\\pages\\highlights.js",{

/***/ "./pages/highlights.js":
/*!*****************************!*\
  !*** ./pages/highlights.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_highlight_Highlight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/highlight/Highlight */ "./components/highlight/Highlight.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_highlight_Selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/highlight/Selector */ "./components/highlight/Selector.js");
/* harmony import */ var _highlights_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlights.scss */ "./pages/highlights.scss");
/* harmony import */ var _highlights_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_highlights_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\pages\\highlights.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var HighlightPage = function HighlightPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    link: "https://www.youtube.com/watch?v=mwlJGfgOc78&list=PLKmnCtJnxa9NIoeHbfucgl_97WUiaNEer&index=24",
    freeid: 1
  }]),
      highlightInfo = _useState[0],
      SetHighlightInfo = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var category = router.query.category;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("http://192.168.137.1:8080/tipboard", {
      params: {
        pageNum: 1,
        way: "voteCount",
        category: category
      }
    }).then(function (response) {
      SetHighlightInfo(response.data);
    })["catch"](function (error) {
      console.log(error);
    });
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      modal2Visible = _useState2[0],
      SetModal2Visible = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    style: {
      marginBottom: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx(_components_highlight_Selector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    modal2Visible: modal2Visible,
    SetModal2Visible: SetModal2Visible,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, highlightInfo.map(function (v, i) {
    console.log(v);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (HighlightPage);

/***/ })

})
//# sourceMappingURL=highlights.js.d08e495eabe17142ee2b.hot-update.js.map