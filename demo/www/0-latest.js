function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js ***!
    \**********************************************************************************/

  /*! exports provided: ion_action_sheet_controller, ion_alert_controller, ion_anchor, ion_loading_controller, ion_modal_controller, ion_picker_controller, ion_popover_controller, ion_toast_controller */

  /***/
  function node_modulesIonicCoreDistEsmIonActionSheetController_8EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function () {
      return ActionSheetController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function () {
      return AlertController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_anchor", function () {
      return Anchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function () {
      return LoadingController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function () {
      return ModalController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function () {
      return PickerController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function () {
      return PopoverController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function () {
      return ToastController;
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


    var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./overlays-10640d86.js */
    "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");

    var ActionSheetController =
    /*#__PURE__*/
    function () {
      function ActionSheetController(hostRef) {
        _classCallCheck(this, ActionSheetController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create an action sheet overlay with action sheet options.
       *
       * @param options The options to use to create the action sheet.
       */


      _createClass(ActionSheetController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-action-sheet', options);
        }
        /**
         * Dismiss the open action sheet overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the action sheet.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the action sheet.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-action-sheet', id);
        }
        /**
         * Get the most recently opened action sheet overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-action-sheet'));

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          });
        }
      }]);

      return ActionSheetController;
    }();

    var AlertController =
    /*#__PURE__*/
    function () {
      function AlertController(hostRef) {
        _classCallCheck(this, AlertController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create an alert overlay with alert options.
       *
       * @param options The options to use to create the alert.
       */


      _createClass(AlertController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-alert', options);
        }
        /**
         * Dismiss the open alert overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the alert.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the alert.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-alert', id);
        }
        /**
         * Get the most recently opened alert overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-alert'));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          });
        }
      }]);

      return AlertController;
    }();

    var Anchor =
    /*#__PURE__*/
    function () {
      function Anchor(hostRef) {
        var _this = this;

        _classCallCheck(this, Anchor);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * When using a router, it specifies the transition direction when navigating to
         * another page using `href`.
         */

        this.routerDirection = 'forward';

        this.onClick = function (ev) {
          Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["o"])(_this.href, ev, _this.routerDirection);
        };
      }

      _createClass(Anchor, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign;

          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          var attrs = {
            href: this.href,
            rel: this.rel
          };
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "class": Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this.color)), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'ion-activatable', true), _Object$assign))
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", Object.assign({}, attrs), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
        }
      }]);

      return Anchor;
    }();

    var LoadingController =
    /*#__PURE__*/
    function () {
      function LoadingController(hostRef) {
        _classCallCheck(this, LoadingController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a loading overlay with loading options.
       *
       * @param options The options to use to create the loading.
       */


      _createClass(LoadingController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-loading', options);
        }
        /**
         * Dismiss the open loading overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the loading.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the loading.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-loading', id);
        }
        /**
         * Get the most recently opened loading overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  return _context3.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-loading'));

                case 1:
                case "end":
                  return _context3.stop();
              }
            }
          });
        }
      }]);

      return LoadingController;
    }();

    var ModalController =
    /*#__PURE__*/
    function () {
      function ModalController(hostRef) {
        _classCallCheck(this, ModalController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a modal overlay with modal options.
       *
       * @param options The options to use to create the modal.
       */


      _createClass(ModalController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-modal', options);
        }
        /**
         * Dismiss the open modal overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the modal.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the modal.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-modal', id);
        }
        /**
         * Get the most recently opened modal overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-modal'));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          });
        }
      }]);

      return ModalController;
    }();

    var PickerController =
    /*#__PURE__*/
    function () {
      function PickerController(hostRef) {
        _classCallCheck(this, PickerController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a picker overlay with picker options.
       *
       * @param options The options to use to create the picker.
       */


      _createClass(PickerController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-picker', options);
        }
        /**
         * Dismiss the open picker overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the picker.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the picker.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-picker', id);
        }
        /**
         * Get the most recently opened picker overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  return _context5.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-picker'));

                case 1:
                case "end":
                  return _context5.stop();
              }
            }
          });
        }
      }]);

      return PickerController;
    }();

    var PopoverController =
    /*#__PURE__*/
    function () {
      function PopoverController(hostRef) {
        _classCallCheck(this, PopoverController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a popover overlay with popover options.
       *
       * @param options The options to use to create the popover.
       */


      _createClass(PopoverController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-popover', options);
        }
        /**
         * Dismiss the open popover overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the popover.
         * This can be useful in a button handler for determining which button was
         * clicked to dismiss the popover.
         * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
         * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-popover', id);
        }
        /**
         * Get the most recently opened popover overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  return _context6.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-popover'));

                case 1:
                case "end":
                  return _context6.stop();
              }
            }
          });
        }
      }]);

      return PopoverController;
    }();

    var ToastController =
    /*#__PURE__*/
    function () {
      function ToastController(hostRef) {
        _classCallCheck(this, ToastController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Create a toast overlay with toast options.
       *
       * @param options The options to use to create the toast.
       */


      _createClass(ToastController, [{
        key: "create",
        value: function create(options) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-toast', options);
        }
        /**
         * Dismiss the open toast overlay.
         *
         * @param data Any data to emit in the dismiss events.
         * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
         * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
         */

      }, {
        key: "dismiss",
        value: function dismiss(data, role, id) {
          return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["j"])(document, data, role, 'ion-toast', id);
        }
        /**
         * Get the most recently opened toast overlay.
         */

      }, {
        key: "getTop",
        value: function getTop() {
          return regeneratorRuntime.async(function getTop$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  return _context7.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_2__["k"])(document, 'ion-toast'));

                case 1:
                case "end":
                  return _context7.stop();
              }
            }
          });
        }
      }]);

      return ToastController;
    }();
    /***/

  }
}]);
//# sourceMappingURL=0-latest.js.map