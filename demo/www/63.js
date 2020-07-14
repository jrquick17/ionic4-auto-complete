(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_spinner", function() { return Spinner; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");
/* harmony import */ var _spinner_configs_c78e170e_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinner-configs-c78e170e.js */ "./node_modules/@ionic/core/dist/esm/spinner-configs-c78e170e.js");







var spinnerCss = ":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}";

var Spinner = /*#__PURE__*/function () {
  function Spinner(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Spinner);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    /**
     * If `true`, the spinner's animation will be paused.
     */

    this.paused = false;
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Spinner, [{
    key: "getName",
    value: function getName() {
      var spinnerName = this.name || _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_4__["c"].get('spinner');
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this);

      if (spinnerName) {
        return spinnerName;
      }

      return mode === 'ios' ? 'lines' : 'circular';
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var self = this;
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_4__["b"])(self);
      var spinnerName = self.getName();
      var spinner = _spinner_configs_c78e170e_js__WEBPACK_IMPORTED_MODULE_6__["S"][spinnerName] || _spinner_configs_c78e170e_js__WEBPACK_IMPORTED_MODULE_6__["S"]['lines'];
      var duration = typeof self.duration === 'number' && self.duration > 10 ? self.duration : spinner.dur;
      var svgs = [];

      if (spinner.circles !== undefined) {
        for (var i = 0; i < spinner.circles; i++) {
          svgs.push(buildCircle(spinner, duration, i, spinner.circles));
        }
      } else if (spinner.lines !== undefined) {
        for (var _i = 0; _i < spinner.lines; _i++) {
          svgs.push(buildLine(spinner, duration, _i, spinner.lines));
        }
      }

      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_5__["c"])(self.color)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, "spinner-".concat(spinnerName), true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'spinner-paused', !!self.paused || _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_4__["c"].getBoolean('_testing')), _Object$assign)),
        role: "progressbar",
        style: spinner.elmDuration ? {
          animationDuration: duration + 'ms'
        } : {}
      }, svgs);
    }
  }]);

  return Spinner;
}();

var buildCircle = function buildCircle(spinner, duration, index, total) {
  var data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["h"])("svg", {
    viewBox: data.viewBox || '0 0 64 64',
    style: data.style
  }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["h"])("circle", {
    transform: data.transform || 'translate(32,32)',
    cx: data.cx,
    cy: data.cy,
    r: data.r,
    style: spinner.elmDuration ? {
      animationDuration: duration + 'ms'
    } : {}
  }));
};

var buildLine = function buildLine(spinner, duration, index, total) {
  var data = spinner.fn(duration, index, total);
  data.style['animation-duration'] = duration + 'ms';
  return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["h"])("svg", {
    viewBox: data.viewBox || '0 0 64 64',
    style: data.style
  }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_3__["h"])("line", {
    transform: "translate(32,32)",
    y1: data.y1,
    y2: data.y2
  }));
};

Spinner.style = spinnerCss;


/***/ })

}]);
//# sourceMappingURL=63.js.map