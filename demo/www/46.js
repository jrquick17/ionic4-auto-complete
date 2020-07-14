(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_radio, ion_radio_group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio", function() { return Radio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_radio_group", function() { return RadioGroup; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");









var radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}";
var radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}[dir=rtl] button,:host-context([dir=rtl]) button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @part container - The container for the radio mark.
 * @part mark - The checkmark or dot used to indicate the checked state.
 */

var Radio = /*#__PURE__*/function () {
  function Radio(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Radio);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-rb-".concat(radioButtonIds++);
    this.radioGroup = null;
    /**
     * If `true`, the radio is selected.
     */

    this.checked = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the radio.
     */

    this.disabled = false;

    this.updateState = function () {
      if (_this.radioGroup) {
        _this.checked = _this.radioGroup.value === _this.value;
      }
    };

    this.onFocus = function () {
      _this.ionFocus.emit();
    };

    this.onBlur = function () {
      _this.ionBlur.emit();
    };

    this.ionStyle = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionStyle", 7);
    this.ionFocus = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionBlur = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Radio, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.value === undefined) {
        this.value = this.inputId;
      }

      var radioGroup = this.radioGroup = this.el.closest('ion-radio-group');

      if (radioGroup) {
        this.updateState();
        radioGroup.addEventListener('ionChange', this.updateState);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var radioGroup = this.radioGroup;

      if (radioGroup) {
        radioGroup.removeEventListener('ionChange', this.updateState);
        this.radioGroup = null;
      }
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.emitStyle();
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'radio-checked': this.checked,
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var inputId = this.inputId,
          disabled = this.disabled,
          checked = this.checked,
          color = this.color,
          el = this.el;
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var labelId = inputId + '-lbl';
      var label = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["f"])(el);

      if (label) {
        label.id = labelId;
      }

      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        role: "radio",
        "aria-disabled": disabled ? 'true' : null,
        "aria-checked": "".concat(checked),
        "aria-labelledby": labelId,
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__["c"])(color)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$assign, 'in-item', Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__["h"])('ion-item', el)), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$assign, 'interactive', true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$assign, 'radio-checked', checked), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(_Object$assign, 'radio-disabled', disabled), _Object$assign))
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "radio-icon",
        part: "container"
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "radio-inner",
        part: "mark"
      })), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: disabled
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
        "color": ["emitStyle"],
        "checked": ["emitStyle"],
        "disabled": ["emitStyle"]
      };
    }
  }]);

  return Radio;
}();

var radioButtonIds = 0;
Radio.style = {
  /*STENCIL:MODE:ios*/
  ios: radioIosCss,

  /*STENCIL:MODE:md*/
  md: radioMdCss
};

var RadioGroup = /*#__PURE__*/function () {
  function RadioGroup(hostRef) {
    var _this2 = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, RadioGroup);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.inputId = "ion-rg-".concat(radioGroupIds++);
    this.labelId = "".concat(this.inputId, "-lbl");
    /**
     * If `true`, the radios can be deselected.
     */

    this.allowEmptySelection = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;

    this.onClick = function (ev) {
      var selectedRadio = ev.target && ev.target.closest('ion-radio');

      if (selectedRadio) {
        var currentValue = _this2.value;
        var newValue = selectedRadio.value;

        if (newValue !== currentValue) {
          _this2.value = newValue;
        } else if (_this2.allowEmptySelection) {
          _this2.value = undefined;
        }
      }
    };

    this.ionChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionChange", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(RadioGroup, [{
    key: "valueChanged",
    value: function valueChanged(value) {
      this.ionChange.emit({
        value: value
      });
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var el, header, label;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Get the list header if it exists and set the id
                // this is used to set aria-labelledby
                el = this.el;
                header = el.querySelector('ion-list-header') || el.querySelector('ion-item-divider');

                if (header) {
                  label = header.querySelector('ion-label');

                  if (label) {
                    this.labelId = label.id = this.name + '-lbl';
                  }
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "render",
    value: function render() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        role: "radiogroup",
        "aria-labelledby": this.labelId,
        onClick: this.onClick,
        class: Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this)
      });
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
        "value": ["valueChanged"]
      };
    }
  }]);

  return RadioGroup;
}();

var radioGroupIds = 0;


/***/ })

}]);
//# sourceMappingURL=46.js.map