webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Home/TeamRank.js":
/*!*************************************!*\
  !*** ./components/Home/TeamRank.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./api/api.js");
var _jsxFileName = "D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamRank.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var TeamRank = function TeamRank() {
  matchFilter = function matchFilter(match) {
    console.log(match);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _api_api__WEBPACK_IMPORTED_MODULE_2__["getPastMatch"]().then(function (response) {
      matchFilter(resposne.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1057806656" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "container Intro_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1057806656" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), "LCK 2019 Summer \uC21C\uC704"), __jsx("div", {
    className: "jsx-1057806656" + " " + "Ranks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-1057806656" + " " + "RankTable Gilroy Ranks--desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("th", {
    colspan: "3",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("th", {
    scope: "col",
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "\uC2B9-\uD328")), __jsx("th", {
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\uC138\uD2B8")), __jsx("th", {
    scope: "col",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "\uB4DD\uC2E4\uCC28")))), __jsx("tbody", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1057806656" + " " + "RankTable__row RankTable__lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("td", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-1057806656" + " " + "RankTabe__row__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "1"), __jsx("td", {
    className: "jsx-1057806656" + " " + "RankTable__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656" + " " + "hidden-in-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Griffin")), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "13W\xA05L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "72.2%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "29W\xA013L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "69.0%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "16"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1057806656",
    __self: this
  }, ".Ranks table{width:100%;}.RankTable{border-collapse:initial;border-spacing:0 1rem;width:100%;}thead{display:table-header-group;vertical-align:middle;border-color:inherit;}.RankTable thead th:first-child{font-size:1.875px;font-size:1.875rem;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}th{text-align:inherit;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}.RankTable tbody td:first-child{width:5rem;position:relative;background-color:#fbfbfb;background-size:60%;background-position:.625rem;background-repeat:no-repeat;}.RankTable tbody td{height:3.75rem;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;background-color:#5b5c64;}.RankTable tbody tr.RankTable__lead td:not(:first-child){background-color:#db0442;}.RankTable tbody td:nth-child(2){font-size:1.5px;font-size:1.5rem;text-align:center;width:3rem;}.RankTable tbody td:nth-child(4){width:6rem;}.RankTable tbody td:last-child{width:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcVGVhbVJhbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMERpQixBQUdvQyxBQUdhLEFBS0csQUFLVCxBQUlGLEFBSUcsQUFHSCxBQUlRLEFBS2IsQUFRSSxBQU1VLEFBR1QsQUFNTCxBQUdBLFdBMURmLEFBaUNzQixBQXVCdEIsQUFHQSxJQWxCNkMsQ0F4QmhCLEFBT0EsQUEwQlIsRUFyQ0UsQ0FRdkIsS0FsQjBCLEFBeUJBLENBbUIxQixFQXZDMEIsRUEwQkcsSUFpQlAsSUFyQ3RCLElBSUEsQUFPQSxLQXJCZSxBQXlCVSxHQXBCQSxFQTJDVixHQWpCUyxFQU9hLENBckNyQyxLQWdEQSxLQXZCQSxHQXBCQSxJQTBCZ0MsNEJBQ0EsNEJBQ2hDLEFBSzZCLHlCQUM3QiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXFRlYW1SYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBUZWFtUmFuayA9ICgpID0+IHtcclxuICAgIG1hdGNoRmlsdGVyID0gKG1hdGNoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobWF0Y2gpXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGFwaS5nZXRQYXN0TWF0Y2goKVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgbWF0Y2hGaWx0ZXIocmVzcG9zbmUuZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkZsdWlkQ29udGFpbmVyIGNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgSW50cm9fc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJUaXRsZSBHaWxyb3lcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlIHNtYWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBMQ0sgMjAxOSBTdW1tZXIg7Iic7JyEXHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlJhbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJSYW5rVGFibGUgR2lscm95IFJhbmtzLS1kZXNrdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY29sc3Bhbj1cIjNcIj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIiBjb2xzcGFuPVwiMlwiPjxzcGFuPuyKuS3tjKg8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIyXCI+PHNwYW4+7IS47Yq4PC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPjxzcGFuPuuTneyLpOywqDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBjbGFzc05hbWU9XCJSYW5rVGFibGVfX3JvdyBSYW5rVGFibGVfX2xlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIlJhbmtUYWJlX19yb3dfX2xvZ29cIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoaHR0cHM6Ly9xd2VyLmdnL2ltYWdlcy9sb2dvcy9HUkYucG5nKVwifX0+PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjE8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiUmFua1RhYmxlX19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoaWRkZW4taW4tbW9iaWxlXCI+R3JpZmZpbjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMTNXJm5ic3A7NUxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjcyLjIlPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjI5VyZuYnNwOzEzTDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD42OS4wJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xNjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuUmFua3MgdGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDAgMXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoZWFkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuODc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS44NzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGhlYWQgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGhlYWQgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuMTI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0Ym9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA2MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IC42MjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMuNzVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIC4xNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1YjVjNjQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdHIuUmFua1RhYmxlX19sZWFkIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiMDQ0MjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogM3JlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZDpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNnJlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZWFtUmFuazsiXX0= */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamRank.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamRank);

/***/ })

})
//# sourceMappingURL=index.js.054a5374cc2ec13422a5.hot-update.js.map