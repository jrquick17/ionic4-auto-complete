(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_select, ion_select_option, ion_select_popover */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_option", function() { return SelectOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_select_popover", function() { return SelectPopover; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _hardware_back_button_7b6ede21_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hardware-back-button-7b6ede21.js */ "./node_modules/@ionic/core/dist/esm/hardware-back-button-7b6ede21.js");
/* harmony import */ var _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlays-7369bfcc.js */ "./node_modules/@ionic/core/dist/esm/overlays-7369bfcc.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");












var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
  /* tslint:disable-next-line */
  if (typeof MutationObserver === 'undefined') {
    return;
  }

  var mutation = new MutationObserver(function (mutationList) {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};

var getSelectedOption = function getSelectedOption(mutationList, tagName) {
  var newOption;
  mutationList.forEach(function (mut) {
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};

var findCheckedOption = function findCheckedOption(el, tagName) {
  if (el.nodeType !== 1) {
    return undefined;
  }

  var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(function (o) {
    return o.value === el.value;
  });
};

var selectIosCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px}";
var selectMdCss = ":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative;opacity:0.33}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part placeholder - The text displayed in the select when there is no value.
 * @part text - The displayed value of the select.
 * @part icon - The select icon container.
 */

var Select = /*#__PURE__*/function () {
  function Select(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Select);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-sel-".concat(selectIds++);
    this.didInit = false;
    this.isExpanded = false;
    /**
     * If `true`, the user cannot interact with the select.
     */

    this.disabled = false;
    /**
     * The text to display on the cancel button.
     */

    this.cancelText = 'Cancel';
    /**
     * The text to display on the ok button.
     */

    this.okText = 'OK';
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the select can accept multiple values.
     */

    this.multiple = false;
    /**
     * The interface the select should use: `action-sheet`, `popover` or `alert`.
     */

    this.interface = 'alert';
    /**
     * Any additional options that the `alert`, `action-sheet` or `popover` interface
     * can take. See the [ion-alert docs](../alert), the
     * [ion-action-sheet docs](../action-sheet) and the
     * [ion-popover docs](../popover) for the
     * create options for each interface.
     *
     * Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.
     */

    this.interfaceOptions = {};

    this.onClick = function (ev) {
      _this.setFocus();

      _this.open(ev);
    };

    this.onFocus = function () {
      _this.ionFocus.emit();
    };

    this.onBlur = function () {
      _this.ionBlur.emit();
    };

    this.ionChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionChange", 7);
    this.ionCancel = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionCancel", 7);
    this.ionFocus = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionBlur = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
    this.ionStyle = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionStyle", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Select, [{
    key: "disabledChanged",
    value: function disabledChanged() {
      this.emitStyle();
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      this.emitStyle();

      if (this.didInit) {
        this.ionChange.emit({
          value: this.value
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var _this2 = this;

        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.updateOverlayOptions();
                this.emitStyle();
                this.mutationO = watchForOptions(this.el, 'ion-select-option', /*#__PURE__*/Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                  return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _this2.updateOverlayOptions();

                        case 1:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                })));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.mutationO) {
        this.mutationO.disconnect();
        this.mutationO = undefined;
      }
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      this.didInit = true;
    }
    /**
     * Open the select overlay. The overlay is either an alert, action sheet, or popover,
     * depending on the `interface` property on the `ion-select`.
     *
     * @param event The user interface event that called the open.
     */

  }, {
    key: "open",
    value: function () {
      var _open = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(event) {
        var _this3 = this;

        var overlay;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.disabled || this.isExpanded)) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", undefined);

              case 2:
                _context3.next = 4;
                return this.createOverlay(event);

              case 4:
                overlay = this.overlay = _context3.sent;
                this.isExpanded = true;
                overlay.onDidDismiss().then(function () {
                  _this3.overlay = undefined;
                  _this3.isExpanded = false;

                  _this3.setFocus();
                });
                _context3.next = 9;
                return overlay.present();

              case 9:
                return _context3.abrupt("return", overlay);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function open(_x) {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "createOverlay",
    value: function createOverlay(ev) {
      var selectInterface = this.interface;

      if ((selectInterface === 'action-sheet' || selectInterface === 'popover') && this.multiple) {
        console.warn("Select interface cannot be \"".concat(selectInterface, "\" with a multi-value select. Using the \"alert\" interface instead."));
        selectInterface = 'alert';
      }

      if (selectInterface === 'popover' && !ev) {
        console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.');
        selectInterface = 'alert';
      }

      if (selectInterface === 'popover') {
        return this.openPopover(ev);
      }

      if (selectInterface === 'action-sheet') {
        return this.openActionSheet();
      }

      return this.openAlert();
    }
  }, {
    key: "updateOverlayOptions",
    value: function updateOverlayOptions() {
      var overlay = this.overlay;

      if (!overlay) {
        return;
      }

      var childOpts = this.childOpts;
      var value = this.value;

      switch (this.interface) {
        case 'action-sheet':
          overlay.buttons = this.createActionSheetButtons(childOpts, value);
          break;

        case 'popover':
          var popover = overlay.querySelector('ion-select-popover');

          if (popover) {
            popover.options = this.createPopoverOptions(childOpts, value);
          }

          break;

        case 'alert':
          var inputType = this.multiple ? 'checkbox' : 'radio';
          overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
          break;
      }
    }
  }, {
    key: "createActionSheetButtons",
    value: function createActionSheetButtons(data, selectValue) {
      var _this4 = this;

      var actionSheetButtons = data.map(function (option) {
        var value = getOptionValue(option); // Remove hydrated before copying over classes

        var copyClasses = Array.from(option.classList).filter(function (cls) {
          return cls !== 'hydrated';
        }).join(' ');
        var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
        return {
          role: isOptionSelected(value, selectValue, _this4.compareWith) ? 'selected' : '',
          text: option.textContent,
          cssClass: optClass,
          handler: function handler() {
            _this4.value = value;
          }
        };
      }); // Add "cancel" button

      actionSheetButtons.push({
        text: this.cancelText,
        role: 'cancel',
        handler: function handler() {
          _this4.ionCancel.emit();
        }
      });
      return actionSheetButtons;
    }
  }, {
    key: "createAlertInputs",
    value: function createAlertInputs(data, inputType, selectValue) {
      var _this5 = this;

      var alertInputs = data.map(function (option) {
        var value = getOptionValue(option); // Remove hydrated before copying over classes

        var copyClasses = Array.from(option.classList).filter(function (cls) {
          return cls !== 'hydrated';
        }).join(' ');
        var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
        return {
          type: inputType,
          cssClass: optClass,
          label: option.textContent || '',
          value: value,
          checked: isOptionSelected(value, selectValue, _this5.compareWith),
          disabled: option.disabled
        };
      });
      return alertInputs;
    }
  }, {
    key: "createPopoverOptions",
    value: function createPopoverOptions(data, selectValue) {
      var _this6 = this;

      var popoverOptions = data.map(function (option) {
        var value = getOptionValue(option); // Remove hydrated before copying over classes

        var copyClasses = Array.from(option.classList).filter(function (cls) {
          return cls !== 'hydrated';
        }).join(' ');
        var optClass = "".concat(OPTION_CLASS, " ").concat(copyClasses);
        return {
          text: option.textContent || '',
          cssClass: optClass,
          value: value,
          checked: isOptionSelected(value, selectValue, _this6.compareWith),
          disabled: option.disabled,
          handler: function handler() {
            _this6.value = value;

            _this6.close();
          }
        };
      });
      return popoverOptions;
    }
  }, {
    key: "openPopover",
    value: function () {
      var _openPopover = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(ev) {
        var interfaceOptions, mode, value, popoverOpts;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                interfaceOptions = this.interfaceOptions;
                mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
                value = this.value;
                popoverOpts = Object.assign(Object.assign({
                  mode: mode
                }, interfaceOptions), {
                  component: 'ion-select-popover',
                  cssClass: ['select-popover', interfaceOptions.cssClass],
                  event: ev,
                  componentProps: {
                    header: interfaceOptions.header,
                    subHeader: interfaceOptions.subHeader,
                    message: interfaceOptions.message,
                    value: value,
                    options: this.createPopoverOptions(this.childOpts, value)
                  }
                });
                return _context4.abrupt("return", _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_9__["c"].create(popoverOpts));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function openPopover(_x2) {
        return _openPopover.apply(this, arguments);
      }

      return openPopover;
    }()
  }, {
    key: "openActionSheet",
    value: function () {
      var _openActionSheet = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        var mode, interfaceOptions, actionSheetOpts;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
                interfaceOptions = this.interfaceOptions;
                actionSheetOpts = Object.assign(Object.assign({
                  mode: mode
                }, interfaceOptions), {
                  buttons: this.createActionSheetButtons(this.childOpts, this.value),
                  cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                });
                return _context5.abrupt("return", _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_9__["b"].create(actionSheetOpts));

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function openActionSheet() {
        return _openActionSheet.apply(this, arguments);
      }

      return openActionSheet;
    }()
  }, {
    key: "openAlert",
    value: function () {
      var _openAlert = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
        var _this7 = this;

        var label, labelText, interfaceOptions, inputType, mode, alertOpts;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                label = this.getLabel();
                labelText = label ? label.textContent : null;
                interfaceOptions = this.interfaceOptions;
                inputType = this.multiple ? 'checkbox' : 'radio';
                mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
                alertOpts = Object.assign(Object.assign({
                  mode: mode
                }, interfaceOptions), {
                  header: interfaceOptions.header ? interfaceOptions.header : labelText,
                  inputs: this.createAlertInputs(this.childOpts, inputType, this.value),
                  buttons: [{
                    text: this.cancelText,
                    role: 'cancel',
                    handler: function handler() {
                      _this7.ionCancel.emit();
                    }
                  }, {
                    text: this.okText,
                    handler: function handler(selectedValues) {
                      _this7.value = selectedValues;
                    }
                  }],
                  cssClass: ['select-alert', interfaceOptions.cssClass, this.multiple ? 'multiple-select-alert' : 'single-select-alert']
                });
                return _context6.abrupt("return", _overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_9__["a"].create(alertOpts));

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function openAlert() {
        return _openAlert.apply(this, arguments);
      }

      return openAlert;
    }()
    /**
     * Close the select interface.
     */

  }, {
    key: "close",
    value: function close() {
      // TODO check !this.overlay || !this.isFocus()
      if (!this.overlay) {
        return Promise.resolve(false);
      }

      return this.overlay.dismiss();
    }
  }, {
    key: "getLabel",
    value: function getLabel() {
      return Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["f"])(this.el);
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return this.getText() !== '';
    }
  }, {
    key: "getText",
    value: function getText() {
      var selectedText = this.selectedText;

      if (selectedText != null && selectedText !== '') {
        return selectedText;
      }

      return generateText(this.childOpts, this.value, this.compareWith);
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this.buttonEl) {
        this.buttonEl.focus();
      }
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'interactive': true,
        'select': true,
        'has-placeholder': this.placeholder != null,
        'has-value': this.hasValue(),
        'interactive-disabled': this.disabled,
        'select-disabled': this.disabled
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _class,
          _this8 = this;

      var placeholder = this.placeholder,
          name = this.name,
          disabled = this.disabled,
          isExpanded = this.isExpanded,
          value = this.value,
          el = this.el;
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var labelId = this.inputId + '-lbl';
      var label = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["f"])(el);

      if (label) {
        label.id = labelId;
      }

      var addPlaceholderClass = false;
      var selectText = this.getText();

      if (selectText === '' && placeholder != null) {
        selectText = placeholder;
        addPlaceholderClass = true;
      }

      Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["a"])(true, el, name, parseValue(value), disabled);
      var selectTextClasses = {
        'select-text': true,
        'select-placeholder': addPlaceholderClass
      };
      var textPart = addPlaceholderClass ? 'placeholder' : 'text';
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        role: "listbox",
        "aria-haspopup": "dialog",
        "aria-disabled": disabled ? 'true' : null,
        "aria-expanded": "".concat(isExpanded),
        "aria-labelledby": labelId,
        class: (_class = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'in-item', Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__["h"])('ion-item', el)), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'select-disabled', disabled), _class)
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: selectTextClasses,
        part: textPart
      }, selectText), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "select-icon",
        role: "presentation",
        part: "icon"
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "select-icon-inner"
      })), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled,
        ref: function ref(btnEl) {
          return _this8.buttonEl = btnEl;
        }
      }));
    }
  }, {
    key: "childOpts",
    get: function get() {
      return Array.from(this.el.querySelectorAll('ion-select-option'));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "disabled": ["disabledChanged"],
        "placeholder": ["disabledChanged"],
        "value": ["valueChanged"]
      };
    }
  }]);

  return Select;
}();

var isOptionSelected = function isOptionSelected(currentValue, compareValue, compareWith) {
  if (currentValue === undefined) {
    return false;
  }

  if (Array.isArray(currentValue)) {
    return currentValue.some(function (val) {
      return compareOptions(val, compareValue, compareWith);
    });
  } else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};

var getOptionValue = function getOptionValue(el) {
  var value = el.value;
  return value === undefined ? el.textContent || '' : value;
};

var parseValue = function parseValue(value) {
  if (value == null) {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value.join(',');
  }

  return value.toString();
};

var compareOptions = function compareOptions(currentValue, compareValue, compareWith) {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  } else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  } else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};

var generateText = function generateText(opts, value, compareWith) {
  if (value === undefined) {
    return '';
  }

  if (Array.isArray(value)) {
    return value.map(function (v) {
      return textForValue(opts, v, compareWith);
    }).filter(function (opt) {
      return opt !== null;
    }).join(', ');
  } else {
    return textForValue(opts, value, compareWith) || '';
  }
};

var textForValue = function textForValue(opts, value, compareWith) {
  var selectOpt = opts.find(function (opt) {
    return compareOptions(getOptionValue(opt), value, compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};

var selectIds = 0;
var OPTION_CLASS = 'select-interface-option';
Select.style = {
  /*STENCIL:MODE:ios*/
  ios: selectIosCss,

  /*STENCIL:MODE:md*/
  md: selectMdCss
};
var selectOptionCss = ":host{display:none}";

var SelectOption = /*#__PURE__*/function () {
  function SelectOption(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SelectOption);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-selopt-".concat(selectOptionIds++);
    /**
     * If `true`, the user cannot interact with the select option. This property does not apply when `interface="action-sheet"` as `ion-action-sheet` does not allow for disabled buttons.
     */

    this.disabled = false;
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SelectOption, [{
    key: "render",
    value: function render() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        role: "option",
        id: this.inputId,
        class: Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this)
      });
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }]);

  return SelectOption;
}();

var selectOptionIds = 0;
SelectOption.style = selectOptionCss;
var selectPopoverCss = ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
/**
 * @internal
 */

var SelectPopover = /*#__PURE__*/function () {
  function SelectPopover(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SelectPopover);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /** Array of options for the popover */

    this.options = [];
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SelectPopover, [{
    key: "onSelect",
    value: function onSelect(ev) {
      var option = this.options.find(function (o) {
        return o.value === ev.target.value;
      });

      if (option) {
        Object(_overlays_7369bfcc_js__WEBPACK_IMPORTED_MODULE_9__["s"])(option.handler);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var checkedOption = this.options.find(function (o) {
        return o.checked;
      });
      var checkedValue = checkedOption ? checkedOption.value : undefined;
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        class: Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this)
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-list", null, this.header !== undefined && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-item", null, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-label", {
        class: "ion-text-wrap"
      }, this.subHeader !== undefined && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("p", null, this.message))), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-radio-group", {
        value: checkedValue
      }, this.options.map(function (option) {
        return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-item", {
          class: Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__["g"])(option.cssClass)
        }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-label", null, option.text), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-radio", {
          value: option.value,
          disabled: option.disabled
        }));
      }))));
    }
  }]);

  return SelectPopover;
}();

SelectPopover.style = selectPopoverCss;


/***/ })

}]);
//# sourceMappingURL=59.js.map