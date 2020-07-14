(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[35],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function() { return Loading; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation-a635a2fc.js */ "./node_modules/@ionic/core/dist/esm/animation-a635a2fc.js");
/* harmony import */ var _index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index-79d74e0b.js */ "./node_modules/@ionic/core/dist/esm/index-79d74e0b.js");
/* harmony import */ var _hardware_back_button_7b6ede21_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hardware-back-button-7b6ede21.js */ "./node_modules/@ionic/core/dist/esm/hardware-back-button-7b6ede21.js");
/* harmony import */ var _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays-7369bfcc.js */ "./node_modules/@ionic/core/dist/esm/overlays-7369bfcc.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");













/**
 * iOS Loading Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Loading Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 'var(--backdrop-opacity)').beforeStyles({
    'pointer-events': 'none'
  }).afterClearStyles(['pointer-events']);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 'var(--backdrop-opacity)', 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

var loadingIosCss = ".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
var loadingMdCss = ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */

var Loading = /*#__PURE__*/function () {
  function Loading(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Loading);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * Number of milliseconds to wait before dismissing the loading indicator.
     */

    this.duration = 0;
    /**
     * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = false;
    /**
     * If `true`, a backdrop will be displayed behind the loading indicator.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the loading indicator will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * If `true`, the loading indicator will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      _this.dismiss(undefined, _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["B"]);
    };

    Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["d"])(this.el);
    this.didPresent = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionLoadingDidPresent", 7);
    this.willPresent = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionLoadingWillPresent", 7);
    this.willDismiss = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionLoadingDidDismiss", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Loading, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (this.spinner === undefined) {
        var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
        this.spinner = _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["c"].get('loadingSpinner', _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["c"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
      }
    }
    /**
     * Present the loading overlay after it has been created.
     */

  }, {
    key: "present",
    value: function () {
      var _present2 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["e"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);

              case 2:
                if (this.duration > 0) {
                  this.durationTimeout = setTimeout(function () {
                    return _this2.dismiss();
                  }, this.duration + 10);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function present() {
        return _present2.apply(this, arguments);
      }

      return present;
    }()
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }

      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionLoadingWillDismiss');
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var message = this.message,
          spinner = this.spinner;
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onIonBackdropTap: this.onBackdropTap,
        tabindex: "-1",
        style: {
          zIndex: "".concat(40000 + this.overlayIndex)
        },
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_12__["g"])(this.cssClass)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'loading-translucent', this.translucent), _Object$assign))
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-wrapper",
        role: "dialog"
      }, spinner && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-spinner"
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-spinner", {
        name: spinner,
        "aria-hidden": "true"
      })), message && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-content",
        innerHTML: Object(_index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_9__["s"])(message)
      })));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }]);

  return Loading;
}();

Loading.style = {
  /*STENCIL:MODE:ios*/
  ios: loadingIosCss,

  /*STENCIL:MODE:md*/
  md: loadingMdCss
};


/***/ })

}]);
//# sourceMappingURL=35.js.map