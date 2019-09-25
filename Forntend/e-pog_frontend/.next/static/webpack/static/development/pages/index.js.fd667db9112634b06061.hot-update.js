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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pastLCLMatch = _useState[0],
      SetPastLCLmatch = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pastLJLMatch = _useState2[0],
      SetPastLJLmatch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pastLECMatch = _useState3[0],
      SetPastLECmatch = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pastVCSMatch = _useState4[0],
      SetPastVCSmatch = _useState4[1];

  var matchFilter = function matchFilter(match) {
    for (var i = 0; i < match.length; i++) {
      if (match[i].league.name === "LCL") {
        SetPastLCLmatch(pastLCLMatch.concat(match[i]));
      } else if (match[i].league.name === "LJL") {
        SetPastLJLmatch(pastLJLMatch.concat(match[i]));
      } else if (match[i].league.name === "LEC") {
        SetPastLECmatch(pastLECMatch.concat(match[i]));
      } else if (match[i].league.name === "VCS") {
        SetPastVCSmatch(pastVCSMatch.concat(match[i]));
      }
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    _api_api__WEBPACK_IMPORTED_MODULE_2__["getPastMatch"]().then(function (response) {
      matchFilter(response.data);
    })["catch"](function (error) {
      return console.log(error);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1057806656" + " " + "FluidContainer container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "container Intro_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-1057806656" + " " + "Title Gilroy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__squares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1057806656" + " " + "Title__square small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), "LCK 2019 Summer \uC21C\uC704"), __jsx("div", {
    className: "jsx-1057806656" + " " + "Ranks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("table", {
    className: "jsx-1057806656" + " " + "RankTable Gilroy Ranks--desktop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("thead", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("th", {
    colspan: "3",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("th", {
    scope: "col",
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "\uC2B9-\uD328")), __jsx("th", {
    colspan: "2",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\uC138\uD2B8")), __jsx("th", {
    scope: "col",
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\uB4DD\uC2E4\uCC28")))), __jsx("tbody", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("tr", {
    className: "jsx-1057806656" + " " + "RankTable__row RankTable__lead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("td", {
    style: {
      backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"
    },
    className: "jsx-1057806656" + " " + "RankTabe__row__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "1"), __jsx("td", {
    className: "jsx-1057806656" + " " + "RankTable__name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-1057806656" + " " + "hidden-in-mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Griffin")), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "13W\xA05L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "72.2%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "29W\xA013L"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "69.0%"), __jsx("td", {
    className: "jsx-1057806656",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "16"))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1057806656",
    __self: this
  }, ".Ranks table{width:100%;}.RankTable{border-collapse:initial;border-spacing:0 1rem;width:100%;}thead{display:table-header-group;vertical-align:middle;border-color:inherit;}.RankTable thead th:first-child{font-size:1.875px;font-size:1.875rem;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}th{text-align:inherit;}.RankTable thead th{height:3.125rem;text-transform:uppercase;}tbody{display:table-row-group;vertical-align:middle;border-color:inherit;}.RankTable tbody td:first-child{width:5rem;position:relative;background-color:#fbfbfb;background-size:60%;background-position:.625rem;background-repeat:no-repeat;}.RankTable tbody td{height:3.75rem;-webkit-transition:background-color .15s;-webkit-transition:background-color .15s;transition:background-color .15s;background-color:#5b5c64;}.RankTable tbody tr.RankTable__lead td:not(:first-child){background-color:#db0442;}.RankTable tbody td:nth-child(2){font-size:1.5px;font-size:1.5rem;text-align:center;width:3rem;}.RankTable tbody td:nth-child(4){width:6rem;}.RankTable tbody td:last-child{width:5rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxSZWFjdFByb2plY3RcXGphdmFwcm9qZWN0XFxsb2QuZ2dcXEZvcm50ZW5kXFxlLXBvZ19mcm9udGVuZFxcY29tcG9uZW50c1xcSG9tZVxcVGVhbVJhbmsuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VpQixBQUdvQyxBQUdhLEFBS0csQUFLVCxBQUlGLEFBSUcsQUFHSCxBQUlRLEFBS2IsQUFRSSxBQU1VLEFBR1QsQUFNTCxBQUdBLFdBMURmLEFBaUNzQixBQXVCdEIsQUFHQSxJQWxCNkMsQ0F4QmhCLEFBT0EsQUEwQlIsRUFyQ0UsQ0FRdkIsS0FsQjBCLEFBeUJBLENBbUIxQixFQXZDMEIsRUEwQkcsSUFpQlAsSUFyQ3RCLElBSUEsQUFPQSxLQXJCZSxBQXlCVSxHQXBCQSxFQTJDVixHQWpCUyxFQU9hLENBckNyQyxLQWdEQSxLQXZCQSxHQXBCQSxJQTBCZ0MsNEJBQ0EsNEJBQ2hDLEFBSzZCLHlCQUM3QiIsImZpbGUiOiJEOlxcUmVhY3RQcm9qZWN0XFxqYXZhcHJvamVjdFxcbG9kLmdnXFxGb3JudGVuZFxcZS1wb2dfZnJvbnRlbmRcXGNvbXBvbmVudHNcXEhvbWVcXFRlYW1SYW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSc7XHJcblxyXG5jb25zdCBUZWFtUmFuayA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtwYXN0TENMTWF0Y2gsIFNldFBhc3RMQ0xtYXRjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcGFzdExKTE1hdGNoLCBTZXRQYXN0TEpMbWF0Y2hdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3Bhc3RMRUNNYXRjaCwgU2V0UGFzdExFQ21hdGNoXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtwYXN0VkNTTWF0Y2gsIFNldFBhc3RWQ1NtYXRjaF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBtYXRjaEZpbHRlciA9IChtYXRjaCkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBtYXRjaC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZihtYXRjaFtpXS5sZWFndWUubmFtZSA9PT0gXCJMQ0xcIikge1xyXG4gICAgICAgICAgICAgICAgU2V0UGFzdExDTG1hdGNoKHBhc3RMQ0xNYXRjaC5jb25jYXQobWF0Y2hbaV0pKVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYobWF0Y2hbaV0ubGVhZ3VlLm5hbWUgPT09IFwiTEpMXCIpIHtcclxuICAgICAgICAgICAgICAgIFNldFBhc3RMSkxtYXRjaChwYXN0TEpMTWF0Y2guY29uY2F0KG1hdGNoW2ldKSlcclxuICAgICAgICAgICAgfSBlbHNlIGlmKG1hdGNoW2ldLmxlYWd1ZS5uYW1lID09PSBcIkxFQ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBTZXRQYXN0TEVDbWF0Y2gocGFzdExFQ01hdGNoLmNvbmNhdChtYXRjaFtpXSkpXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihtYXRjaFtpXS5sZWFndWUubmFtZSA9PT0gXCJWQ1NcIikge1xyXG4gICAgICAgICAgICAgICAgU2V0UGFzdFZDU21hdGNoKHBhc3RWQ1NNYXRjaC5jb25jYXQobWF0Y2hbaV0pKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhcGkuZ2V0UGFzdE1hdGNoKClcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIG1hdGNoRmlsdGVyKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJGbHVpZENvbnRhaW5lciBjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIEludHJvX3NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiVGl0bGUgR2lscm95XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJUaXRsZV9fc3F1YXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRpdGxlX19zcXVhcmUgc21hbGxcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVGl0bGVfX3NxdWFyZSBzbWFsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTENLIDIwMTkgU3VtbWVyIOyInOychFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJSYW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwiUmFua1RhYmxlIEdpbHJveSBSYW5rcy0tZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNvbHNwYW49XCIzXCI+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCIgY29sc3Bhbj1cIjJcIj48c3Bhbj7sirkt7YyoPC9zcGFuPjwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjb2xzcGFuPVwiMlwiPjxzcGFuPuyEuO2KuDwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj48c3Bhbj7rk53si6TssKg8L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiUmFua1RhYmxlX19yb3cgUmFua1RhYmxlX19sZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJSYW5rVGFiZV9fcm93X19sb2dvXCIgc3R5bGU9e3tiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKGh0dHBzOi8vcXdlci5nZy9pbWFnZXMvbG9nb3MvR1JGLnBuZylcIn19PjwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4xPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIlJhbmtUYWJsZV9fbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGlkZGVuLWluLW1vYmlsZVwiPkdyaWZmaW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEzVyZuYnNwOzVMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD43Mi4yJTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD4yOVcmbmJzcDsxM0w8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+NjkuMCU8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+MTY8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtzIHRhYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAwIDFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjg3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuODc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGgge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRoZWFkIHRoIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjEyNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLlJhbmtUYWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAuNjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjc1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjE1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuMTVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWI1YzY0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuUmFua1RhYmxlIHRib2R5IHRyLlJhbmtUYWJsZV9fbGVhZCB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYjA0NDI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bnRoLWNoaWxkKDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDZyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5SYW5rVGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVhbVJhbms7Il19 */\n/*@ sourceURL=D:\\ReactProject\\javaproject\\lod.gg\\Forntend\\e-pog_frontend\\components\\Home\\TeamRank.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamRank);

/***/ })

})
//# sourceMappingURL=index.js.fd667db9112634b06061.hot-update.js.map