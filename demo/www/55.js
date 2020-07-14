(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_searchbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_searchbar", function() { return Searchbar; });
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









var searchbarIosCss = ".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);padding-left:12px;padding-right:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:calc(50% - 60px);left:5px;top:0;position:absolute;width:22px;height:100%;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px)}}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}.searchbar-input.sc-ion-searchbar-ios{padding-left:28px;padding-right:28px;padding-top:0;padding-bottom:0;height:100%;font-size:17px;font-weight:400;contain:strict}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px}}.searchbar-clear-button.sc-ion-searchbar-ios{right:0;top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:8px;padding-right:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-cancel-button.sc-ion-searchbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{padding-left:unset;-webkit-padding-start:30px;padding-inline-start:30px}}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{margin-right:unset;-webkit-margin-end:-100%;margin-inline-end:-100%}}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";
var searchbarMdCss = ".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-has-value.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;background:inherit}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.searchbar-search-icon.sc-ion-searchbar-md{left:16px;top:11px;width:21px;height:21px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}.searchbar-cancel-button.sc-ion-searchbar-md{left:5px;top:0;background-color:transparent;font-size:1.6em}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{padding-left:55px;padding-right:55px;padding-top:6px;padding-bottom:6px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.searchbar-input.sc-ion-searchbar-md{padding-left:unset;padding-right:unset;-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px}}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}.searchbar-clear-button.sc-ion-searchbar-md{right:13px;top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:7px;padding-right:7px;padding-top:3px;padding-bottom:3px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{padding-left:unset;padding-right:unset;-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px}}";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */

var Searchbar = /*#__PURE__*/function () {
  function Searchbar(hostRef) {
    var _this = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Searchbar);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.isCancelVisible = false;
    this.shouldAlignLeft = true;
    this.focused = false;
    this.noAnimate = true;
    /**
     * If `true`, enable searchbar animation.
     */

    this.animated = false;
    /**
     * Set the input's autocomplete property.
     */

    this.autocomplete = 'off';
    /**
     * Set the input's autocorrect property.
     */

    this.autocorrect = 'off';
    /**
     * Set the cancel button icon. Only applies to `md` mode.
     * Defaults to `"arrow-back-sharp"`.
     */

    this.cancelButtonIcon = _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["c"].get('backButtonIcon', 'arrow-back-sharp');
    /**
     * Set the the cancel button text. Only applies to `ios` mode.
     */

    this.cancelButtonText = 'Cancel';
    /**
     * Set the amount of time, in milliseconds, to wait to trigger the `ionChange` event after each keystroke.
     */

    this.debounce = 250;
    /**
     * If `true`, the user cannot interact with the input.
     */

    this.disabled = false;
    /**
     * Set the input's placeholder.
     * `placeholder` can accept either plaintext or HTML as a string.
     * To display characters normally reserved for HTML, they
     * must be escaped. For example `<Ionic>` would become
     * `&lt;Ionic&gt;`
     *
     * For more information: [Security Documentation](https://ionicframework.com/docs/faq/security)
     */

    this.placeholder = 'Search';
    /**
     * Sets the behavior for the cancel button. Defaults to `"never"`.
     * Setting to `"focus"` shows the cancel button on focus.
     * Setting to `"never"` hides the cancel button.
     * Setting to `"always"` shows the cancel button regardless
     * of focus state.
     */

    this.showCancelButton = 'never';
    /**
     * If `true`, enable spellcheck on the input.
     */

    this.spellcheck = false;
    /**
     * Set the type of the input.
     */

    this.type = 'search';
    /**
     * the value of the searchbar.
     */

    this.value = '';
    /**
     * Clears the input field and triggers the control change.
     */

    this.onClearInput = function (ev) {
      _this.ionClear.emit();

      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      } // setTimeout() fixes https://github.com/ionic-team/ionic/issues/7527
      // wait for 4 frames


      setTimeout(function () {
        var value = _this.getValue();

        if (value !== '') {
          _this.value = '';

          _this.ionInput.emit();
        }
      }, 16 * 4);
    };
    /**
     * Clears the input field and tells the input to blur since
     * the clearInput function doesn't want the input to blur
     * then calls the custom cancel function if the user passed one in.
     */


    this.onCancelSearchbar = function (ev) {
      if (ev) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      _this.ionCancel.emit();

      _this.onClearInput();

      if (_this.nativeInput) {
        _this.nativeInput.blur();
      }
    };
    /**
     * Update the Searchbar input value when the input changes
     */


    this.onInput = function (ev) {
      var input = ev.target;

      if (input) {
        _this.value = input.value;
      }

      _this.ionInput.emit(ev);
    };
    /**
     * Sets the Searchbar to not focused and checks if it should align left
     * based on whether there is a value in the searchbar or not.
     */


    this.onBlur = function () {
      _this.focused = false;

      _this.ionBlur.emit();

      _this.positionElements();
    };
    /**
     * Sets the Searchbar to focused and active on input focus.
     */


    this.onFocus = function () {
      _this.focused = true;

      _this.ionFocus.emit();

      _this.positionElements();
    };

    this.ionInput = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionInput", 7);
    this.ionChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionChange", 7);
    this.ionCancel = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionCancel", 7);
    this.ionClear = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionClear", 7);
    this.ionBlur = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionBlur", 7);
    this.ionFocus = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionFocus", 7);
    this.ionStyle = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this, "ionStyle", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Searchbar, [{
    key: "debounceChanged",
    value: function debounceChanged() {
      this.ionChange = Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.ionChange, this.debounce);
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var inputEl = this.nativeInput;
      var value = this.getValue();

      if (inputEl && inputEl.value !== value) {
        inputEl.value = value;
      }

      this.ionChange.emit({
        value: value
      });
    }
  }, {
    key: "showCancelButtonChanged",
    value: function showCancelButtonChanged() {
      var _this2 = this;

      requestAnimationFrame(function () {
        _this2.positionElements();

        Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["f"])(_this2);
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.emitStyle();
    }
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      var _this3 = this;

      this.positionElements();
      this.debounceChanged();
      setTimeout(function () {
        _this3.noAnimate = false;
      }, 300);
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'searchbar': true
      });
    }
    /**
     * Sets focus on the specified `ion-searchbar`. Use this method instead of the global
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
    /**
     * Positions the input search icon, placeholder, and the cancel button
     * based on the input value and if it is focused. (ios only)
     */

  }, {
    key: "positionElements",
    value: function positionElements() {
      var value = this.getValue();
      var prevAlignLeft = this.shouldAlignLeft;
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var shouldAlignLeft = !this.animated || value.trim() !== '' || !!this.focused;
      this.shouldAlignLeft = shouldAlignLeft;

      if (mode !== 'ios') {
        return;
      }

      if (prevAlignLeft !== shouldAlignLeft) {
        this.positionPlaceholder();
      }

      if (this.animated) {
        this.positionCancelButton();
      }
    }
    /**
     * Positions the input placeholder
     */

  }, {
    key: "positionPlaceholder",
    value: function positionPlaceholder() {
      var inputEl = this.nativeInput;

      if (!inputEl) {
        return;
      }

      var isRTL = document.dir === 'rtl';
      var iconEl = (this.el.shadowRoot || this.el).querySelector('.searchbar-search-icon');

      if (this.shouldAlignLeft) {
        inputEl.removeAttribute('style');
        iconEl.removeAttribute('style');
      } else {
        // Create a dummy span to get the placeholder width
        var doc = document;
        var tempSpan = doc.createElement('span');
        tempSpan.innerText = this.placeholder || '';
        doc.body.appendChild(tempSpan); // Get the width of the span then remove it

        Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_7__["r"])(function () {
          var textWidth = tempSpan.offsetWidth;
          tempSpan.remove(); // Calculate the input padding

          var inputLeft = 'calc(50% - ' + textWidth / 2 + 'px)'; // Calculate the icon margin

          var iconLeft = 'calc(50% - ' + (textWidth / 2 + 30) + 'px)'; // Set the input padding start and icon margin start

          if (isRTL) {
            inputEl.style.paddingRight = inputLeft;
            iconEl.style.marginRight = iconLeft;
          } else {
            inputEl.style.paddingLeft = inputLeft;
            iconEl.style.marginLeft = iconLeft;
          }
        });
      }
    }
    /**
     * Show the iOS Cancel button on focus, hide it offscreen otherwise
     */

  }, {
    key: "positionCancelButton",
    value: function positionCancelButton() {
      var isRTL = document.dir === 'rtl';
      var cancelButton = (this.el.shadowRoot || this.el).querySelector('.searchbar-cancel-button');
      var shouldShowCancel = this.shouldShowCancelButton();

      if (cancelButton && shouldShowCancel !== this.isCancelVisible) {
        var cancelStyle = cancelButton.style;
        this.isCancelVisible = shouldShowCancel;

        if (shouldShowCancel) {
          if (isRTL) {
            cancelStyle.marginLeft = '0';
          } else {
            cancelStyle.marginRight = '0';
          }
        } else {
          var offset = cancelButton.offsetWidth;

          if (offset > 0) {
            if (isRTL) {
              cancelStyle.marginLeft = -offset + 'px';
            } else {
              cancelStyle.marginRight = -offset + 'px';
            }
          }
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value || '';
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return this.getValue() !== '';
    }
    /**
     * Determines whether or not the cancel button should be visible onscreen.
     * Cancel button should be shown if one of two conditions applies:
     * 1. `showCancelButton` is set to `always`.
     * 2. `showCancelButton` is set to `focus`, and the searchbar has been focused.
     */

  }, {
    key: "shouldShowCancelButton",
    value: function shouldShowCancelButton() {
      if (this.showCancelButton === 'never' || this.showCancelButton === 'focus' && !this.focused) {
        return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign,
          _this4 = this;

      var cancelButtonText = this.cancelButtonText;
      var animated = this.animated && _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["c"].getBoolean('animated', true);
      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_6__["b"])(this);
      var clearIcon = this.clearIcon || (mode === 'ios' ? 'close-circle' : 'close-sharp');
      var searchIcon = this.searchIcon || (mode === 'ios' ? 'search-outline' : 'search-sharp');
      var shouldShowCancelButton = this.shouldShowCancelButton();
      var cancelButton = this.showCancelButton !== 'never' && Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        "aria-label": cancelButtonText,
        "aria-hidden": shouldShowCancelButton ? undefined : 'true',
        type: "button",
        tabIndex: mode === 'ios' && !shouldShowCancelButton ? -1 : undefined,
        onMouseDown: this.onCancelSearchbar,
        onTouchStart: this.onCancelSearchbar,
        class: "searchbar-cancel-button"
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        "aria-hidden": "true"
      }, mode === 'md' ? Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
        "aria-hidden": "true",
        mode: mode,
        icon: this.cancelButtonIcon,
        lazy: false
      }) : cancelButtonText));
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        role: "search",
        "aria-disabled": this.disabled ? 'true' : null,
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this.color)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-animated', animated), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-disabled', this.disabled), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-no-animate', animated && this.noAnimate), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-has-value', this.hasValue()), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-left-aligned', this.shouldAlignLeft), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-has-focus', this.focused), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'searchbar-should-show-cancel', this.shouldShowCancelButton()), _Object$assign))
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "searchbar-input-container"
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("input", {
        "aria-label": "search text",
        disabled: this.disabled,
        ref: function ref(el) {
          return _this4.nativeInput = el;
        },
        class: "searchbar-input",
        inputMode: this.inputmode,
        enterKeyHint: this.enterkeyhint,
        onInput: this.onInput,
        onBlur: this.onBlur,
        onFocus: this.onFocus,
        placeholder: this.placeholder,
        type: this.type,
        value: this.getValue(),
        autoComplete: this.autocomplete,
        autoCorrect: this.autocorrect,
        spellcheck: this.spellcheck
      }), mode === 'md' && cancelButton, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
        "aria-hidden": "true",
        mode: mode,
        icon: searchIcon,
        lazy: false,
        class: "searchbar-search-icon"
      }), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("button", {
        "aria-label": "reset",
        type: "button",
        "no-blur": true,
        class: "searchbar-clear-button",
        onMouseDown: this.onClearInput,
        onTouchStart: this.onClearInput
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-icon", {
        "aria-hidden": "true",
        mode: mode,
        icon: clearIcon,
        lazy: false,
        class: "searchbar-clear-icon"
      }))), mode === 'ios' && cancelButton);
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
        "value": ["valueChanged"],
        "showCancelButton": ["showCancelButtonChanged"]
      };
    }
  }]);

  return Searchbar;
}();

Searchbar.style = {
  /*STENCIL:MODE:ios*/
  ios: searchbarIosCss,

  /*STENCIL:MODE:md*/
  md: searchbarMdCss
};


/***/ })

}]);
//# sourceMappingURL=55.js.map