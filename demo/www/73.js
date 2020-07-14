(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast", function() { return Toast; });
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
 * iOS Toast Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl, position) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector('.toast-wrapper');
  var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
  var top = "calc(10px + var(--ion-safe-area-top, 0px))";
  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', "translateY(".concat(top, ")"));
      break;

    case 'middle':
      var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = "".concat(topPosition, "px");
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;

    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', "translateY(".concat(bottom, ")"));
      break;
  }

  return baseAnimation.addElement(hostEl).easing('cubic-bezier(.155,1.105,.295,1.12)').duration(400).addAnimation(wrapperAnimation);
};
/**
 * iOS Toast Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl, position) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector('.toast-wrapper');
  var bottom = "calc(-10px - var(--ion-safe-area-bottom, 0px))";
  var top = "calc(10px + var(--ion-safe-area-top, 0px))";
  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', "translateY(".concat(top, ")"), 'translateY(-100%)');
      break;

    case 'middle':
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      break;

    default:
      wrapperAnimation.fromTo('transform', "translateY(".concat(bottom, ")"), 'translateY(100%)');
      break;
  }

  return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};
/**
 * MD Toast Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl, position) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector('.toast-wrapper');
  var bottom = "calc(8px + var(--ion-safe-area-bottom, 0px))";
  var top = "calc(8px + var(--ion-safe-area-top, 0px))";
  wrapperAnimation.addElement(wrapperEl);

  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;

    case 'middle':
      var topPosition = Math.floor(hostEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = "".concat(topPosition, "px");
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;

    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }

  return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation(wrapperAnimation);
};
/**
 * md Toast Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_a635a2fc_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var hostEl = baseEl.host || baseEl;
  var wrapperEl = baseEl.querySelector('.toast-wrapper');
  wrapperAnimation.addElement(wrapperEl).fromTo('opacity', 0.99, 0);
  return baseAnimation.addElement(hostEl).easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};

var toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";
var toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */

var Toast = /*#__PURE__*/function () {
  function Toast(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Toast);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.presented = false;
    /**
     * How many milliseconds to wait before hiding the toast. By default, it will show
     * until `dismiss()` is called.
     */

    this.duration = 0;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = false;
    /**
     * The position of the toast on the screen.
     */

    this.position = 'bottom';
    /**
     * If `true`, the toast will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * If `true`, the toast will animate.
     */

    this.animated = true;

    this.dispatchCancelHandler = function (ev) {
      var role = ev.detail.role;

      if (Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["i"])(role)) {
        var cancelButton = _this.getButtons().find(function (b) {
          return b.role === 'cancel';
        });

        _this.callButtonHandler(cancelButton);
      }
    };

    Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["d"])(this.el);
    this.didPresent = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionToastDidPresent", 7);
    this.willPresent = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionToastWillPresent", 7);
    this.willDismiss = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionToastWillDismiss", 7);
    this.didDismiss = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionToastDidDismiss", 7);
  }
  /**
   * Present the toast overlay after it has been created.
   */


  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Toast, [{
    key: "present",
    value: function () {
      var _present2 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["e"])(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);

              case 2:
                if (this.duration > 0) {
                  this.durationTimeout = setTimeout(function () {
                    return _this2.dismiss(undefined, 'timeout');
                  }, this.duration);
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
     * Dismiss the toast overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the toast.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }

      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["f"])(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    }
    /**
     * Returns a promise that resolves when the toast did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionToastDidDismiss');
    }
    /**
     * Returns a promise that resolves when the toast will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionToastWillDismiss');
    }
  }, {
    key: "getButtons",
    value: function getButtons() {
      var buttons = this.buttons ? this.buttons.map(function (b) {
        return typeof b === 'string' ? {
          text: b
        } : b;
      }) : [];
      return buttons;
    }
  }, {
    key: "buttonClick",
    value: function () {
      var _buttonClick = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(button) {
        var role, shouldDismiss;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                role = button.role;

                if (!Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["i"])(role)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return", this.dismiss(undefined, role));

              case 3:
                _context2.next = 5;
                return this.callButtonHandler(button);

              case 5:
                shouldDismiss = _context2.sent;

                if (!shouldDismiss) {
                  _context2.next = 8;
                  break;
                }

                return _context2.abrupt("return", this.dismiss(undefined, role));

              case 8:
                return _context2.abrupt("return", Promise.resolve());

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function buttonClick(_x) {
        return _buttonClick.apply(this, arguments);
      }

      return buttonClick;
    }()
  }, {
    key: "callButtonHandler",
    value: function () {
      var _callButtonHandler = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(button) {
        var rtn;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(button && button.handler)) {
                  _context3.next = 12;
                  break;
                }

                _context3.prev = 1;
                _context3.next = 4;
                return Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_11__["s"])(button.handler);

              case 4:
                rtn = _context3.sent;

                if (!(rtn === false)) {
                  _context3.next = 7;
                  break;
                }

                return _context3.abrupt("return", false);

              case 7:
                _context3.next = 12;
                break;

              case 9:
                _context3.prev = 9;
                _context3.t0 = _context3["catch"](1);
                console.error(_context3.t0);

              case 12:
                return _context3.abrupt("return", true);

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 9]]);
      }));

      function callButtonHandler(_x2) {
        return _callButtonHandler.apply(this, arguments);
      }

      return callButtonHandler;
    }()
  }, {
    key: "renderButtons",
    value: function renderButtons(buttons, side) {
      var _this3 = this;

      if (buttons.length === 0) {
        return;
      }

      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);

      var buttonGroupsClasses = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'toast-button-group': true
      }, "toast-button-group-".concat(side), true);

      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: buttonGroupsClasses
      }, buttons.map(function (b) {
        return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
          type: "button",
          class: buttonClass(b),
          tabIndex: 0,
          onClick: function onClick() {
            return _this3.buttonClick(b);
          },
          part: "button"
        }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
          class: "toast-button-inner"
        }, b.icon && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
          icon: b.icon,
          slot: b.text === undefined ? 'icon-only' : undefined,
          class: "toast-icon"
        }), b.text), mode === 'md' && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-ripple-effect", {
          type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded'
        }));
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var allButtons = this.getButtons();
      var startButtons = allButtons.filter(function (b) {
        return b.side === 'start';
      });
      var endButtons = allButtons.filter(function (b) {
        return b.side !== 'start';
      });
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);

      var wrapperClass = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'toast-wrapper': true
      }, "toast-".concat(this.position), true);

      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        style: {
          zIndex: "".concat(60000 + this.overlayIndex)
        },
        class: Object.assign(Object.assign(Object.assign(Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mode, true), Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_12__["c"])(this.color)), Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_12__["g"])(this.cssClass)), {
          'toast-translucent': this.translucent
        }),
        tabindex: "-1",
        onIonToastWillDismiss: this.dispatchCancelHandler
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: wrapperClass
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toast-container",
        part: "container"
      }, this.renderButtons(startButtons, 'start'), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toast-content"
      }, this.header !== undefined && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toast-header",
        part: "header"
      }, this.header), this.message !== undefined && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "toast-message",
        part: "message",
        innerHTML: Object(_index_79d74e0b_js__WEBPACK_IMPORTED_MODULE_9__["s"])(this.message)
      })), this.renderButtons(endButtons, 'end'))));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }]);

  return Toast;
}();

var buttonClass = function buttonClass(button) {
  var _Object$assign2;

  return Object.assign((_Object$assign2 = {
    'toast-button': true,
    'toast-button-icon-only': button.icon !== undefined && button.text === undefined
  }, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign2, "toast-button-".concat(button.role), button.role !== undefined), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign2, 'ion-focusable', true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign2, 'ion-activatable', true), _Object$assign2), Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_12__["g"])(button.cssClass));
};

Toast.style = {
  /*STENCIL:MODE:ios*/
  ios: toastIosCss,

  /*STENCIL:MODE:md*/
  md: toastMdCss
};


/***/ })

}]);
//# sourceMappingURL=73.js.map