(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_input", function() { return Input; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");









var inputIosCss = ".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:0.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios,[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios,[dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h input.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios,.has-focus.sc-ion-input-ios-h button.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-stacked.sc-ion-input-ios-h,.item-label-stacked .sc-ion-input-ios-h,.item-label-floating.sc-ion-input-ios-h,.item-label-floating .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}";
var inputMdCss = ".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0 !important;background:var(--background);color:var(--color);font-family:var(--ion-font-family, inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label),ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:0.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md,[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md,[dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:center;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h input.sc-ion-input-md,.has-focus.sc-ion-input-md-h a.sc-ion-input-md,.has-focus.sc-ion-input-md-h button.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-stacked.sc-ion-input-md-h,.item-label-stacked .sc-ion-input-md-h,.item-label-floating.sc-ion-input-md-h,.item-label-floating .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */

var Input = /*#__PURE__*/function () {
  function Input(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Input);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-input-".concat(inputIds++);
    this.didBlurAfterEdit = false;
    this.hasFocus = false;
    /**
     * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
     */

    this.autocapitalize = 'off';
    /**
     * Indicates whether the value of the control can be automatically completed by the browser.
     */

    this.autocomplete = 'off';
    /**
     * Whether auto correction should be enabled when the user is entering/editing the text value.
     */

    this.autocorrect = 'off';
    /**
     * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
     */

    this.autofocus = false;
    /**
     * If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input.
     */

    this.clearInput = false;
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */

    this.debounce = 0;
    /**
     * If `true`, the user cannot interact with the input.
     */

    this.disabled = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the user cannot modify the value.
     */

    this.readonly = false;
    /**
     * If `true`, the user must fill in a value before submitting a form.
     */

    this.required = false;
    /**
     * If `true`, the element will have its spelling and grammar checked.
     */

    this.spellcheck = false;
    /**
     * The type of control to display. The default type is text.
     */

    this.type = 'text';
    /**
     * The value of the input.
     */

    this.value = '';

    this.onInput = function (ev) {
      var input = ev.target;

      if (input) {
        _this.value = input.value || '';
      }

      _this.ionInput.emit(ev);
    };

    this.onBlur = function () {
      _this.hasFocus = false;

      _this.focusChanged();

      _this.emitStyle();

      _this.ionBlur.emit();
    };

    this.onFocus = function () {
      _this.hasFocus = true;

      _this.focusChanged();

      _this.emitStyle();

      _this.ionFocus.emit();
    };

    this.onKeydown = function (ev) {
      if (_this.shouldClearOnEdit()) {
        // Did the input value change after it was blurred and edited?
        // Do not clear if user is hitting Enter to submit form
        if (_this.didBlurAfterEdit && _this.hasValue() && ev.key !== 'Enter') {
          // Clear the input
          _this.clearTextInput();
        } // Reset the flag


        _this.didBlurAfterEdit = false;
      }
    };

    this.clearTextInput = function (ev) {
      if (_this.clearInput && !_this.readonly && !_this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      _this.value = '';
      /**
       * This is needed for clearOnEdit
       * Otherwise the value will not be cleared
       * if user is inside the input
       */

      if (_this.nativeInput) {
        _this.nativeInput.value = '';
      }
    };

    this.ionInput = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionInput", 7);
    this.ionChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionChange", 7);
    this.ionBlur = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
    this.ionFocus = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionStyle = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionStyle", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Input, [{
    key: "debounceChanged",
    value: function debounceChanged() {
      this.ionChange = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.ionChange, this.debounce);
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      this.emitStyle();
    }
    /**
     * Update the native input element when the value changes
     */

  }, {
    key: "valueChanged",
    value: function valueChanged() {
      this.emitStyle();
      this.ionChange.emit({
        value: this.value == null ? this.value : this.value.toString()
      });
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      // If the ion-input has a tabindex attribute we get the value
      // and pass it down to the native input, then remove it from the
      // ion-input to avoid causing tabbing twice on the same element
      if (this.el.hasAttribute('tabindex')) {
        var tabindex = this.el.getAttribute('tabindex');
        this.tabindex = tabindex !== null ? tabindex : undefined;
        this.el.removeAttribute('tabindex');
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.emitStyle();
      this.debounceChanged();
      {
        document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
          detail: this.el
        }));
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      {
        document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
          detail: this.el
        }));
      }
    }
    /**
     * Sets focus on the specified `ion-input`. Use this method instead of the global
     * `input.focus()`.
     */

  }, {
    key: "setFocus",
    value: function () {
      var _setFocus = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.nativeInput) {
                  this.nativeInput.focus();
                }

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setFocus() {
        return _setFocus.apply(this, arguments);
      }

      return setFocus;
    }()
    /**
     * Returns the native `<input>` element used under the hood.
     */

  }, {
    key: "getInputElement",
    value: function getInputElement() {
      return Promise.resolve(this.nativeInput);
    }
  }, {
    key: "shouldClearOnEdit",
    value: function shouldClearOnEdit() {
      var type = this.type,
          clearOnEdit = this.clearOnEdit;
      return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'interactive': true,
        'input': true,
        'has-placeholder': this.placeholder != null,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "focusChanged",
    value: function focusChanged() {
      // If clearOnEdit is enabled and the input blurred but has a value, set a flag
      if (!this.hasFocus && this.shouldClearOnEdit() && this.hasValue()) {
        this.didBlurAfterEdit = true;
      }
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return this.getValue().length > 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign,
          _this2 = this;

      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var value = this.getValue();
      var labelId = this.inputId + '-lbl';
      var label = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["f"])(this.el);

      if (label) {
        label.id = labelId;
      }

      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        "aria-disabled": this.disabled ? 'true' : null,
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this.color)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'has-value', this.hasValue()), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'has-focus', this.hasFocus), _Object$assign))
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("input", {
        class: "native-input",
        ref: function ref(input) {
          return _this2.nativeInput = input;
        },
        "aria-labelledby": labelId,
        disabled: this.disabled,
        accept: this.accept,
        autoCapitalize: this.autocapitalize,
        autoComplete: this.autocomplete,
        autoCorrect: this.autocorrect,
        autoFocus: this.autofocus,
        enterKeyHint: this.enterkeyhint,
        inputMode: this.inputmode,
        min: this.min,
        max: this.max,
        minLength: this.minlength,
        maxLength: this.maxlength,
        multiple: this.multiple,
        name: this.name,
        pattern: this.pattern,
        placeholder: this.placeholder || '',
        readOnly: this.readonly,
        required: this.required,
        spellcheck: this.spellcheck,
        step: this.step,
        size: this.size,
        tabindex: this.tabindex,
        type: this.type,
        value: value,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        onKeyDown: this.onKeydown
      }), this.clearInput && !this.readonly && !this.disabled && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        "aria-label": "reset",
        type: "button",
        class: "input-clear-icon",
        tabindex: "-1",
        onTouchStart: this.clearTextInput,
        onMouseDown: this.clearTextInput
      }));
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
        "debounce": ["debounceChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
      };
    }
  }]);

  return Input;
}();

var inputIds = 0;
Input.style = {
  /*STENCIL:MODE:ios*/
  ios: inputIosCss,

  /*STENCIL:MODE:md*/
  md: inputMdCss
};


/***/ })

}]);
//# sourceMappingURL=29.js.map