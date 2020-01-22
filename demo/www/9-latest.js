function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js ***!
    \************************************************************************/

  /*! exports provided: ion_back_button */

  /***/
  function node_modulesIonicCoreDistEsmIonBackButtonIosEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_back_button", function () {
      return BackButton;
    });
    /* harmony import */


    var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-feeeff0d.js */
    "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    var BackButton =
    /*#__PURE__*/
    function () {
      function BackButton(hostRef) {
        var _this = this;

        _classCallCheck(this, BackButton);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        /**
         * If `true`, the user cannot interact with the button.
         */

        this.disabled = false;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = function _callee(ev) {
          var nav;
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  nav = _this.el.closest('ion-nav');
                  ev.preventDefault();
                  _context.t0 = nav;

                  if (!_context.t0) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 6;
                  return regeneratorRuntime.awrap(nav.canGoBack());

                case 6:
                  _context.t0 = _context.sent;

                case 7:
                  if (!_context.t0) {
                    _context.next = 9;
                    break;
                  }

                  return _context.abrupt("return", nav.pop({
                    skipIfBusy: true
                  }));

                case 9:
                  return _context.abrupt("return", Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["o"])(_this.defaultHref, ev, 'back'));

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          });
        };
      }

      _createClass(BackButton, [{
        key: "render",
        value: function render() {
          var _Object$assign;

          var color = this.color,
              defaultHref = this.defaultHref,
              disabled = this.disabled,
              type = this.type,
              mode = this.mode,
              hasIconOnly = this.hasIconOnly,
              backButtonIcon = this.backButtonIcon,
              backButtonText = this.backButtonText;
          var showBackButton = defaultHref !== undefined;
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'button', true), _defineProperty(_Object$assign, 'back-button-disabled', disabled), _defineProperty(_Object$assign, 'back-button-has-icon-only', hasIconOnly), _defineProperty(_Object$assign, 'ion-activatable', true), _defineProperty(_Object$assign, 'ion-focusable', true), _defineProperty(_Object$assign, 'show-back-button', showBackButton), _Object$assign))
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: type,
            disabled: disabled,
            "class": "button-native"
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "button-inner"
          }, backButtonIcon && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: backButtonIcon,
            lazy: false
          }), backButtonText && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "button-text"
          }, backButtonText)), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
            type: this.rippleType
          })));
        }
      }, {
        key: "backButtonIcon",
        get: function get() {
          return this.icon != null ? this.icon : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonIcon', 'arrow-back');
        }
      }, {
        key: "backButtonText",
        get: function get() {
          var defaultBackButtonText = this.mode === 'ios' ? 'Back' : null;
          return this.text != null ? this.text : _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('backButtonText', defaultBackButtonText);
        }
      }, {
        key: "hasIconOnly",
        get: function get() {
          return this.backButtonIcon && !this.backButtonText;
        }
      }, {
        key: "rippleType",
        get: function get() {
          // If the button only has an icon we use the unbounded
          // "circular" ripple effect
          if (this.hasIconOnly) {
            return 'unbounded';
          }

          return 'bounded';
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ".sc-ion-back-button-ios-h{--background:transparent;--color-focused:var(--color);--color-hover:var(--color);--icon-margin-top:0;--icon-margin-bottom:0;--icon-padding-top:0;--icon-padding-end:0;--icon-padding-bottom:0;--icon-padding-start:0;--margin-top:0;--margin-end:0;--margin-bottom:0;--margin-start:0;--min-width:auto;--min-height:auto;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--opacity:1;--ripple-color:currentColor;--transition:background-color,opacity 100ms linear;display:none;min-width:var(--min-width);min-height:var(--min-height);color:var(--color);font-family:var(--ion-font-family,inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.ion-color.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}.show-back-button.sc-ion-back-button-ios-h, .can-go-back.sc-ion-back-button-ios-h > ion-header.sc-ion-back-button-ios, .can-go-back > ion-header .sc-ion-back-button-ios-h{display:block}.back-button-disabled.sc-ion-back-button-ios-h{cursor:default;opacity:.5;pointer-events:none}.button-native.sc-ion-back-button-ios{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:var(--margin-start);margin-right:var(--margin-end);margin-top:var(--margin-top);margin-bottom:var(--margin-bottom);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;min-height:inherit;-webkit-transition:var(--transition);transition:var(--transition);border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;opacity:var(--opacity);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native.sc-ion-back-button-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:var(--margin-start);margin-inline-start:var(--margin-start);-webkit-margin-end:var(--margin-end);margin-inline-end:var(--margin-end);padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner.sc-ion-back-button-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}ion-icon.sc-ion-back-button-ios{padding-left:var(--icon-padding-start);padding-right:var(--icon-padding-end);padding-top:var(--icon-padding-top);padding-bottom:var(--icon-padding-bottom);margin-left:var(--icon-margin-start);margin-right:var(--icon-margin-end);margin-top:var(--icon-margin-top);margin-bottom:var(--icon-margin-bottom);display:inherit;font-size:var(--icon-font-size);font-weight:var(--icon-font-weight);pointer-events:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){ion-icon.sc-ion-back-button-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--icon-padding-start);padding-inline-start:var(--icon-padding-start);-webkit-padding-end:var(--icon-padding-end);padding-inline-end:var(--icon-padding-end);margin-left:unset;margin-right:unset;-webkit-margin-start:var(--icon-margin-start);margin-inline-start:var(--icon-margin-start);-webkit-margin-end:var(--icon-margin-end);margin-inline-end:var(--icon-margin-end)}}\@media (any-hover:hover){.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{background:var(--background-hover);color:var(--color-hover)}}.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:var(--background-focused);color:var(--color-focused)}\@media (any-hover:hover){.ion-color.sc-ion-back-button-ios-h:hover .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{color:var(--ion-color-base)}ion-toolbar.sc-ion-back-button-ios-h:not(.ion-color):not(.ion-color), ion-toolbar:not(.ion-color) .sc-ion-back-button-ios-h:not(.ion-color){color:var(--ion-toolbar-color,var(--color))}.sc-ion-back-button-ios-h{--background-focused:rgba(var(--ion-color-primary-rgb,56,128,255),0.1);--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--icon-margin-end:-5px;--icon-margin-start:-4px;--icon-font-size:1.85em;--min-height:32px;font-size:17px}.button-native.sc-ion-back-button-ios{-webkit-transform:translateZ(0);transform:translateZ(0);overflow:visible;z-index:99}.activated.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{opacity:.4}\@media (any-hover:hover){.sc-ion-back-button-ios-h:hover{--opacity:.6}}.ion-color.ion-focused.sc-ion-back-button-ios-h .button-native.sc-ion-back-button-ios{background:rgba(var(--ion-color-base-rgb),.1)}";
        }
      }]);

      return BackButton;
    }();
    /***/

  }
}]);
//# sourceMappingURL=9-latest.js.map