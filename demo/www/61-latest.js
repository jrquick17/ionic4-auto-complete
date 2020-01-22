function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js ***!
    \********************************************************************/

  /*! exports provided: ion_select, ion_select_option, ion_select_popover */

  /***/
  function node_modulesIonicCoreDistEsmIonSelect_3MdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select", function () {
      return Select;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_option", function () {
      return SelectOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_select_popover", function () {
      return SelectPopover;
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


    var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./helpers-46f4a262.js */
    "./node_modules/@ionic/core/dist/esm/helpers-46f4a262.js");
    /* harmony import */


    var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./overlays-10640d86.js */
    "./node_modules/@ionic/core/dist/esm/overlays-10640d86.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./watch-options-2af96011.js */
    "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js");

    var Select =
    /*#__PURE__*/
    function () {
      function Select(hostRef) {
        var _this = this;

        _classCallCheck(this, Select);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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

        this["interface"] = 'alert';
        /**
         * Any additional options that the `alert`, `action-sheet` or `popover` interface
         * can take. See the [AlertController API docs](../../alert/AlertController/#create), the
         * [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
         * [PopoverController API docs](../../popover/PopoverController/#create) for the
         * create options for each interface.
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

        this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionChange", 7);
        this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionCancel", 7);
        this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionFocus", 7);
        this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionBlur", 7);
        this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionStyle", 7);
      }

      _createClass(Select, [{
        key: "disabledChanged",
        value: function disabledChanged() {
          this.emitStyle();
        }
      }, {
        key: "valueChanged",
        value: function valueChanged() {
          this.updateOptions();
          this.emitStyle();

          if (this.didInit) {
            this.ionChange.emit({
              value: this.value
            });
          }
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this2 = this;

          var checked, _checked;

          return regeneratorRuntime.async(function connectedCallback$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (this.value === undefined) {
                    if (this.multiple) {
                      // there are no values set at this point
                      // so check to see who should be selected
                      checked = this.childOpts.filter(function (o) {
                        return o.selected;
                      });
                      this.value = checked.map(function (o) {
                        return getOptionValue(o);
                      });
                    } else {
                      _checked = this.childOpts.find(function (o) {
                        return o.selected;
                      });

                      if (_checked) {
                        this.value = getOptionValue(_checked);
                      }
                    }
                  }

                  this.updateOptions();
                  this.updateOverlayOptions();
                  this.emitStyle();
                  this.mutationO = Object(_watch_options_2af96011_js__WEBPACK_IMPORTED_MODULE_5__["w"])(this.el, 'ion-select-option', function _callee() {
                    return regeneratorRuntime.async(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _this2.updateOptions();

                            _this2.updateOverlayOptions();

                          case 2:
                          case "end":
                            return _context.stop();
                        }
                      }
                    });
                  });

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
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
        value: function open(event) {
          var _this3 = this;

          var overlay;
          return regeneratorRuntime.async(function open$(_context3) {
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
                  return regeneratorRuntime.awrap(this.createOverlay(event));

                case 4:
                  overlay = this.overlay = _context3.sent;
                  this.isExpanded = true;
                  overlay.onDidDismiss().then(function () {
                    _this3.overlay = undefined;
                    _this3.isExpanded = false;

                    _this3.setFocus();
                  });
                  _context3.next = 9;
                  return regeneratorRuntime.awrap(overlay.present());

                case 9:
                  return _context3.abrupt("return", overlay);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "createOverlay",
        value: function createOverlay(ev) {
          var selectInterface = this["interface"];

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

          switch (this["interface"]) {
            case 'action-sheet':
              overlay.buttons = this.createActionSheetButtons(childOpts);
              break;

            case 'popover':
              var popover = overlay.querySelector('ion-select-popover');

              if (popover) {
                popover.options = this.createPopoverOptions(childOpts);
              }

              break;

            case 'alert':
              var inputType = this.multiple ? 'checkbox' : 'radio';
              overlay.inputs = this.createAlertInputs(childOpts, inputType);
              break;
          }
        }
      }, {
        key: "createActionSheetButtons",
        value: function createActionSheetButtons(data) {
          var _this4 = this;

          var actionSheetButtons = data.map(function (option) {
            return {
              role: option.selected ? 'selected' : '',
              text: option.textContent,
              handler: function handler() {
                _this4.value = getOptionValue(option);
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
        value: function createAlertInputs(data, inputType) {
          return data.map(function (o) {
            return {
              type: inputType,
              label: o.textContent,
              value: getOptionValue(o),
              checked: o.selected,
              disabled: o.disabled
            };
          });
        }
      }, {
        key: "createPopoverOptions",
        value: function createPopoverOptions(data) {
          var _this5 = this;

          return data.map(function (o) {
            var value = getOptionValue(o);
            return {
              text: o.textContent,
              value: value,
              checked: o.selected,
              disabled: o.disabled,
              handler: function handler() {
                _this5.value = value;

                _this5.close();
              }
            };
          });
        }
      }, {
        key: "openPopover",
        value: function openPopover(ev) {
          var interfaceOptions, mode, popoverOpts;
          return regeneratorRuntime.async(function openPopover$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  interfaceOptions = this.interfaceOptions;
                  mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
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
                      value: this.value,
                      options: this.createPopoverOptions(this.childOpts)
                    }
                  });
                  return _context4.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["c"].create(popoverOpts));

                case 4:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "openActionSheet",
        value: function openActionSheet() {
          var mode, interfaceOptions, actionSheetOpts;
          return regeneratorRuntime.async(function openActionSheet$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                  interfaceOptions = this.interfaceOptions;
                  actionSheetOpts = Object.assign(Object.assign({
                    mode: mode
                  }, interfaceOptions), {
                    buttons: this.createActionSheetButtons(this.childOpts),
                    cssClass: ['select-action-sheet', interfaceOptions.cssClass]
                  });
                  return _context5.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["b"].create(actionSheetOpts));

                case 4:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "openAlert",
        value: function openAlert() {
          var _this6 = this;

          var label, labelText, interfaceOptions, inputType, mode, alertOpts;
          return regeneratorRuntime.async(function openAlert$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  label = this.getLabel();
                  labelText = label ? label.textContent : null;
                  interfaceOptions = this.interfaceOptions;
                  inputType = this.multiple ? 'checkbox' : 'radio';
                  mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
                  alertOpts = Object.assign(Object.assign({
                    mode: mode
                  }, interfaceOptions), {
                    header: interfaceOptions.header ? interfaceOptions.header : labelText,
                    inputs: this.createAlertInputs(this.childOpts, inputType),
                    buttons: [{
                      text: this.cancelText,
                      role: 'cancel',
                      handler: function handler() {
                        _this6.ionCancel.emit();
                      }
                    }, {
                      text: this.okText,
                      handler: function handler(selectedValues) {
                        _this6.value = selectedValues;
                      }
                    }],
                    cssClass: ['select-alert', interfaceOptions.cssClass, this.multiple ? 'multiple-select-alert' : 'single-select-alert']
                  });
                  return _context6.abrupt("return", _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["a"].create(alertOpts));

                case 7:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
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
        key: "updateOptions",
        value: function updateOptions() {
          // iterate all options, updating the selected prop
          var canSelect = true;
          var value = this.value,
              childOpts = this.childOpts,
              compareWith = this.compareWith,
              multiple = this.multiple;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = childOpts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var selectOption = _step.value;
              var optValue = getOptionValue(selectOption);
              var selected = canSelect && isOptionSelected(value, optValue, compareWith);
              selectOption.selected = selected; // if current option is selected and select is single-option, we can't select
              // any option more

              if (selected && !multiple) {
                canSelect = false;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "getLabel",
        value: function getLabel() {
          return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(this.el);
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
              _this7 = this;

          var placeholder = this.placeholder,
              name = this.name,
              disabled = this.disabled,
              isExpanded = this.isExpanded,
              value = this.value,
              el = this.el;
          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          var labelId = this.inputId + '-lbl';
          var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["f"])(el);

          if (label) {
            label.id = labelId;
          }

          var addPlaceholderClass = false;
          var selectText = this.getText();

          if (selectText === '' && placeholder != null) {
            selectText = placeholder;
            addPlaceholderClass = true;
          }

          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["a"])(true, el, name, parseValue(value), disabled);
          var selectTextClasses = {
            'select-text': true,
            'select-placeholder': addPlaceholderClass
          };
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            role: "combobox",
            "aria-haspopup": "dialog",
            "aria-disabled": disabled ? 'true' : null,
            "aria-expanded": "".concat(isExpanded),
            "aria-labelledby": labelId,
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, 'in-item', Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_4__["h"])('ion-item', el)), _defineProperty(_class, 'select-disabled', disabled), _class)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": selectTextClasses
          }, selectText), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "select-icon",
            role: "presentation"
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "select-icon-inner"
          })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            disabled: disabled,
            ref: function ref(btnEl) {
              return _this7.buttonEl = btnEl;
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
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
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
      }, {
        key: "style",
        get: function get() {
          return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:16px}.select-icon{width:19px;height:19px}";
        }
      }]);

      return Select;
    }();

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

    var compareOptions = function compareOptions(currentValue, compareValue, compareWith) {
      if (typeof compareWith === 'function') {
        return compareWith(currentValue, compareValue);
      } else if (typeof compareWith === 'string') {
        return currentValue[compareWith] === compareValue[compareWith];
      } else {
        return currentValue === compareValue;
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

    var SelectOption =
    /*#__PURE__*/
    function () {
      function SelectOption(hostRef) {
        _classCallCheck(this, SelectOption);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-selopt-".concat(selectOptionIds++);
        /**
         * If `true`, the user cannot interact with the select option.
         */

        this.disabled = false;
        /**
         * If `true`, the element is selected.
         */

        this.selected = false;
      }

      _createClass(SelectOption, [{
        key: "render",
        value: function render() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "option",
            id: this.inputId,
            "class": Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{display:none}";
        }
      }]);

      return SelectOption;
    }();

    var selectOptionIds = 0;

    var SelectPopover =
    /*#__PURE__*/
    function () {
      function SelectPopover(hostRef) {
        _classCallCheck(this, SelectPopover);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Array of options for the popover */

        this.options = [];
      }

      _createClass(SelectPopover, [{
        key: "onSelect",
        value: function onSelect(ev) {
          var option = this.options.find(function (o) {
            return o.value === ev.target.value;
          });

          if (option) {
            Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_3__["s"])(option.handler);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list", null, this.header !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-list-header", null, this.header), (this.subHeader !== undefined || this.message !== undefined) && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", {
            "class": "ion-text-wrap"
          }, this.subHeader !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h3", null, this.subHeader), this.message !== undefined && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, this.message))), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio-group", null, this.options.map(function (option) {
            return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-item", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-label", null, option.text), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-radio", {
              checked: option.checked,
              value: option.value,
              disabled: option.disabled
            }));
          }))));
        }
      }], [{
        key: "style",
        get: function get() {
          return ".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-label.sc-ion-select-popover, .sc-ion-select-popover-h ion-list-header.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
        }
      }]);

      return SelectPopover;
    }();
    /***/

  }
}]);
//# sourceMappingURL=61-latest.js.map