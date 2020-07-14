(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js ***!
  \*****************************************************************************************/
/*! exports provided: AutoCompleteComponent, AutoCompleteModule, AutoCompleteOptions, AutoCompleteStyles, BoldPrefix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function() { return AutoCompleteModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteOptions", function() { return AutoCompleteOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteStyles", function() { return AutoCompleteStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoldPrefix", function() { return BoldPrefix; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");













var _c0 = ["searchbarElem"];
var _c1 = ["inputElem"];

function AutoCompleteComponent_ng_template_0_ion_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 15);
  }

  if (rf & 2) {
    var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", ctx_r14.frontIcon)("slot", "start");
  }
}

function AutoCompleteComponent_ng_template_0_ion_icon_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-icon", 16);
  }

  if (rf & 2) {
    var attrs_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().attrs;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("name", attrs_r13.removeButtonIcon)("slot", attrs_r13.removeButtonSlot);
  }
}

function AutoCompleteComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-chip", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_0_ion_icon_1_Template, 1, 2, "ion-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AutoCompleteComponent_ng_template_0_ion_icon_4_Template, 1, 2, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var attrs_r13 = ctx.attrs;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](attrs_r13.removeButtonClasses);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", attrs_r13.removeButtonColor)("outline", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.frontIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](attrs_r13.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", attrs_r13.removeButtonIcon);
  }
}

function AutoCompleteComponent_div_2_div_1_ng_template_1_Template(rf, ctx) {}

var _c2 = function _c2(a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    label: a1,
    removeButtonClasses: a2,
    removeButtonColor: a3,
    removeButtonIcon: a4,
    removeButtonSlot: a5
  };
};

var _c3 = function _c3(a0) {
  return {
    attrs: a0
  };
};

function AutoCompleteComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutoCompleteComponent_div_2_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      var item_r18 = ctx.$implicit;
      var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return ctx_r20.removeItem(item_r18);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_div_2_div_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var item_r18 = ctx.$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

    var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](1);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r17.selectionTemplate || _r0)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](2, _c2, item_r18, ctx_r17.getLabel(item_r18), ctx_r17.removeButtonClasses, ctx_r17.removeButtonColor, ctx_r17.removeButtonIcon, ctx_r17.removeButtonSlot)));
  }
}

function AutoCompleteComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_div_2_div_1_Template, 2, 11, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.selected);
  }
}

function AutoCompleteComponent_ion_label_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("position", ctx_r3.labelPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.label);
  }
}

function AutoCompleteComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "boldprefix");
  }

  if (rf & 2) {
    var attrs_r22 = ctx.attrs;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 1, attrs_r22.label, attrs_r22.keyword), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
  }
}

function AutoCompleteComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r9.autocompleteOptions.noItems, "\n");
  }
}

function AutoCompleteComponent_ng_template_12_Template(rf, ctx) {}

function AutoCompleteComponent_ng_template_13_ul_0_li_1_ng_template_1_Template(rf, ctx) {}

var _c4 = function _c4(a0) {
  return {
    "focus": a0
  };
};

var _c5 = function _c5(a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    label: a1,
    keyword: a2,
    formValue: a3,
    labelAttribute: a4,
    formValueAttribute: a5
  };
};

function AutoCompleteComponent_ng_template_13_ul_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("mouseenter", function AutoCompleteComponent_ng_template_13_ul_0_li_1_Template_li_mouseenter_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      var index_r29 = ctx.index;
      var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r31.focusedOption = index_r29;
    })("click", function AutoCompleteComponent_ng_template_13_ul_0_li_1_Template_li_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      var suggestion_r28 = ctx.$implicit;
      var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r33.handleSelectTap($event, suggestion_r28);
    })("tap", function AutoCompleteComponent_ng_template_13_ul_0_li_1_Template_li_tap_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      var suggestion_r28 = ctx.$implicit;
      var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return ctx_r34.handleSelectTap($event, suggestion_r28);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_13_ul_0_li_1_ng_template_1_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var suggestion_r28 = ctx.$implicit;
    var index_r29 = ctx.index;
    var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](9);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c4, ctx_r27.focusedOption === index_r29))("ngStyle", ctx_r27.styles.listItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r27.template || _r6)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](6, _c5, suggestion_r28, ctx_r27.getLabel(suggestion_r28), ctx_r27.keyword, ctx_r27.getFormValue(suggestion_r28), ctx_r27.getLabel(suggestion_r28), ctx_r27.getFormValue(suggestion_r28))));
  }
}

function AutoCompleteComponent_ng_template_13_ul_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_13_ul_0_li_1_Template, 2, 15, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var attrs_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().attrs;
    var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r25.listStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind3"](2, 2, attrs_r24.data, 0, attrs_r24.maxResults));
  }
}

function AutoCompleteComponent_ng_template_13_ul_1_ng_template_2_Template(rf, ctx) {}

var _c6 = function _c6(a0) {
  return {
    keyword: a0
  };
};

function AutoCompleteComponent_ng_template_13_ul_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ul", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AutoCompleteComponent_ng_template_13_ul_1_ng_template_2_Template, 0, 0, "ng-template", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);

    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r26.listStyles());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx_r26.styles.listItem);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r26.emptyTemplate || _r8)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c6, ctx_r26.keyword)));
  }
}

function AutoCompleteComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AutoCompleteComponent_ng_template_13_ul_0_Template, 3, 6, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AutoCompleteComponent_ng_template_13_ul_1_Template, 3, 8, "ul", 21);
  }

  if (rf & 2) {
    var attrs_r24 = ctx.attrs;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !(ctx_r12.disabled || attrs_r24.maxSelected !== null && attrs_r24.selected.length >= attrs_r24.maxSelected) && attrs_r24.data.length > 0 && attrs_r24.showSuggestions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r12.suggestions.length === 0 && ctx_r12.showSuggestions);
  }
}

var _c7 = function _c7(a0, a1) {
  return {
    "hidden": a0,
    "loading": a1
  };
};

var _c8 = function _c8(a0, a1, a2) {
  return {
    "hidden": a0,
    "loading": a1,
    "disabled": a2
  };
};

var _c9 = function _c9(a0, a1, a2, a3, a4, a5) {
  return {
    data: a0,
    keyword: a1,
    maxResults: a2,
    maxSelected: a3,
    selected: a4,
    showSuggestions: a5
  };
};

var AutoCompleteOptions = function AutoCompleteOptions() {
  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutoCompleteOptions);

  this.animated = false;
  this.color = null;
  this.autocomplete = 'off';
  this.autocorrect = 'off';
  this.cancelButtonIcon = 'arrow-round-back';
  this.cancelButtonText = 'Cancel';
  this.clearIcon = 'close-circle';
  this.clearInput = false;
  this.clearOnEdit = false;
  this.debounce = 250;
  this.mode = 'md';
  this.noItems = 'No items found.';
  this.searchIcon = 'search';
  this.showCancelButton = false;
  this.spellcheck = 'off';
  this.type = 'search';
  this.value = '';
};

var AutoCompleteStyles = function AutoCompleteStyles() {
  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutoCompleteStyles);

  this.list = {};
  this.listItem = {};
  this.searchbar = {};
};

var AutoCompleteComponent_1;

var AutoCompleteComponent = AutoCompleteComponent_1 = /*#__PURE__*/function () {
  /**
   * Create a new instance
   */
  function AutoCompleteComponent() {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutoCompleteComponent);

    this.alwaysShowList = false;
    this.autoFocusSuggestion = true;
    this.enableBrowserAutoComplete = false;
    this.clearInvalidInput = true;
    this.disabled = false;
    this.exclude = [];
    this.frontIcon = false;
    this.hideListOnSelection = true;
    this.label = '';
    this.labelPosition = 'fixed';
    this.location = 'auto';
    this.maxResults = 8;
    this.maxSelected = null;
    this.multi = false;
    this.name = '';
    this.removeButtonClasses = '';
    this.removeButtonColor = 'primary';
    this.removeButtonIcon = 'close-circle';
    this.removeButtonSlot = 'end';
    this.removeDuplicateSuggestions = true;
    this.selectOnTabOut = true;
    this.styles = new AutoCompleteStyles();
    this.useIonInput = false;
    this.autocompleteOptions = new AutoCompleteOptions();
    this.onTouchedCallback = false;
    this.onChangeCallback = false;
    this.hasFocus = false;
    this.isLoading = false;
    this.focusedOption = -1;
    this.showSuggestions = false;
    this.showListChanged = false;
    this.autoBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.autoFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.ionAutoInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemsCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemsHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.itemsShown = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
    this.keyword = '';
    this.suggestions = [];
    this.autocompleteOptions = new AutoCompleteOptions();
    this.defaultOpts = new AutoCompleteOptions();
    this.selected = [];
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoCompleteComponent, [{
    key: "ngAfterViewChecked",

    /**
     *
     */
    value: function ngAfterViewChecked() {
      if (this.showListChanged) {
        this.showListChanged = false;
        this.showSuggestions ? this.itemsShown.emit() : this.itemsHidden.emit();
      }
    }
  }, {
    key: "ngDoCheck",
    value: function ngDoCheck() {
      if (!this.hasFocus) {
        if (this.clearInvalidInput && (this.selected === null || this.multi)) {
          if (this.keyword !== '') {
            this.keyword = '';
          }

          if (this.inputElem && this.inputElem.nativeElement) {
            if (this.inputElem.nativeElement.children && this.inputElem.nativeElement.children.length !== 0) {
              if (this.inputElem.nativeElement.children[0].children && this.inputElem.nativeElement.children[0].children.length !== 0) {
                if (this.inputElem.nativeElement.children[0].children[0].value) {
                  this.inputElem.nativeElement.children[0].children[0].value = '';
                }
              }
            }
          }

          if (this.searchbarElem && this.searchbarElem.nativeElement) {
            if (this.searchbarElem.nativeElement.children && this.searchbarElem.nativeElement.children.length !== 0) {
              if (this.searchbarElem.nativeElement.children[0].children) {
                if (this.searchbarElem.nativeElement.children[0].children.length !== 0) {
                  if (this.searchbarElem.nativeElement.children[0].children[0].value) {
                    this.searchbarElem.nativeElement.children[0].children[0].value = '';
                  }
                }
              }
            }
          }
        }
      }
    }
    /**
     * Handle document click
     *
     * @param event
     *
     * @private
     */

  }, {
    key: "documentClickHandler",
    value: function documentClickHandler(event) {
      if (this.searchbarElem && this.searchbarElem.nativeElement && !this.searchbarElem.nativeElement.contains(event.target) || this.inputElem && this.inputElem.nativeElement && this.inputElem.nativeElement.contains(event.target)) {
        this.hideItemList();
      }
    }
    /**
     * Get value from form
     *
     * @param selection
     *
     * @private
     */

  }, {
    key: "getFormValue",
    value: function getFormValue(selection) {
      if (typeof this.dataProvider === 'undefined') {
        return null;
      }

      if (selection == null || typeof this.dataProvider === 'function') {
        return null;
      }

      var attr = this.dataProvider.formValueAttribute == null ? this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;

      if (typeof selection === 'object' && attr) {
        return selection[attr];
      }

      return selection;
    }
    /**
     * Get element's position on screen
     *
     * @param el
     *
     * @private
     */

  }, {
    key: "_getPosition",
    value: function _getPosition(el) {
      var xPos = 0;
      var yPos = 0;

      while (el) {
        if (el.tagName === 'BODY') {
          var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
          var yScroll = el.scrollTop || document.documentElement.scrollTop;
          xPos += el.offsetLeft - xScroll + el.clientLeft;
          yPos += el.offsetTop - yScroll + el.clientTop;
        } else {
          xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
          yPos += el.offsetTop - el.scrollTop + el.clientTop;
        }

        el = el.offsetParent;
      }

      return {
        x: xPos,
        y: yPos
      };
    }
  }, {
    key: "clickClear",
    value: function clickClear() {
      this.clearValue(true);
      this.itemsCleared.emit(true);
    }
    /**
     * Clear current input value
     *
     * @param hideItemList
     */

  }, {
    key: "clearValue",
    value: function clearValue() {
      var hideItemList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.keyword = '';
      this.selection = null;
      this.formValue = null;

      if (hideItemList) {
        this.hideItemList();
      }

      this.focusedOption = -1;
      return;
    }
    /**
     * Get items for auto-complete
     *
     * @param event
     * @param show
     */

  }, {
    key: "getItems",
    value: function getItems(event, show) {
      var _this = this;

      this.isLoading = true;

      if (this.promise) {
        clearTimeout(this.promise);
      }

      this.promise = setTimeout(function () {
        if (event) {
          _this.keyword = event.detail.target.value;
        }

        var result;

        if (_this.showResultsFirst && _this.keyword.trim() === '') {
          _this.keyword = '';
        }

        if (typeof _this.dataProvider === 'function') {
          result = _this.dataProvider(_this.keyword);

          _this.setSuggestions(result, show);

          _this.isLoading = false;
        } else {
          result = _this.dataProvider.getResults(_this.keyword);

          if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]) {
            result = result.asObservable();
          } else if (result instanceof Promise) {
            result = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["from"])(result);
          }

          if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]) {
            result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["finalize"])(function () {
              _this.isLoading = false;
            })).subscribe(function (results) {
              _this.setSuggestions(results, show);
            }, function (error) {
              return console.error(error);
            });
          } else {
            _this.setSuggestions(result, show);

            _this.isLoading = false;
          }
        }

        _this.ionAutoInput.emit(_this.keyword);
      }, this.autocompleteOptions.debounce);
    }
    /**
     * Get an item's label
     *
     * @param selection
     */

  }, {
    key: "getLabel",
    value: function getLabel(selection) {
      if (typeof this.dataProvider === 'undefined') {
        return '';
      }

      if (selection == null || typeof this.dataProvider === 'function') {
        return '';
      }

      var attr = this.dataProvider.formValueAttribute == null ? this.dataProvider.labelAttribute : this.dataProvider.formValueAttribute;
      var value = selection;

      if (this.dataProvider.getItemLabel) {
        value = this.dataProvider.getItemLabel(value);
      }

      if (!this.multi && typeof value !== 'undefined' && Object.prototype.toString.call(value) === '[object Array]') {
        if (value.length === 0) {
          return '';
        } else {
          value = value[0];
        }
      }

      if (typeof value === 'object' && attr) {
        return value[attr] || '';
      }

      return value || '';
    }
    /**
     * Get current selection
     */

  }, {
    key: "getSelection",
    value: function getSelection() {
      if (this.multi) {
        return this.selection;
      } else {
        return this.selected;
      }
    }
    /**
     * Get menu style
     */

  }, {
    key: "listStyles",
    value: function listStyles() {
      var listLocationStyles = this.listLocationStyles();
      return Object.assign({}, listLocationStyles, this.styles.list);
    }
  }, {
    key: "listLocationStyles",
    value: function listLocationStyles() {
      var location = this.location;

      if (this.location === 'auto') {
        var elementY = this._getPosition(this.searchbarElem.nativeElement).y;

        var windowY = window.innerHeight;

        if (elementY > windowY - elementY) {
          location = 'top';
        } else {
          location = 'bottom';
        }
      }

      if (location === 'bottom') {
        return {};
      } else {
        return {
          'bottom': '37px'
        };
      }
    }
    /**
     * Get current input value
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.formValue;
    }
    /**
     * Handles tab key press.
     * If `selectOnTabOut` is `true`, will select currently focused item
     *
     * @param event
     */

  }, {
    key: "handleTabOut",
    value: function handleTabOut(event) {
      if (this.selectOnTabOut && this.suggestions.length !== 0) {
        if (this.focusedOption !== -1) {
          this.selectItem(this.suggestions[this.focusedOption]);
        } else {
          this.hideItemList();
        }
      } else {
        this.hideItemList();
      }

      this.onBlur(event);
    }
    /**
     * Handle tap
     *
     * @param event
     */

  }, {
    key: "handleTap",
    value: function handleTap(event) {
      if (this.showResultsFirst || this.keyword.length > 0) {
        this.getItems();
      }
    }
    /**
     * Handle tap when selecting an item
     *
     * @param $event
     * @param suggestion
     */

  }, {
    key: "handleSelectTap",
    value: function handleSelectTap($event, suggestion) {
      if (typeof suggestion !== 'undefined') {
        this.selectItem(suggestion);

        if ($event.srcEvent) {
          if ($event.srcEvent.stopPropagation) {
            $event.srcEvent.stopPropagation();
          }

          if ($event.srcEvent.preventDefault) {
            $event.srcEvent.preventDefault();
          }
        } else if ($event.preventDefault) {
          $event.preventDefault();
        }
      }

      return false;
    }
    /**
     * Hide item list
     */

  }, {
    key: "hideItemList",
    value: function hideItemList() {
      if (this.showSuggestions === false && this.alwaysShowList === false) {
        this.showListChanged = true;
      }

      this.showSuggestions = this.alwaysShowList;
      this.focusedOption = -1;
    }
  }, {
    key: "highlightItem",
    value: function highlightItem(direction) {
      if (this.showSuggestions === false) {
        this.showItemList();
      }

      var max = this.suggestions.length - 1;

      if (max > this.maxResults) {
        max = this.maxResults - 1;
      }

      if (direction < 0) {
        if (this.focusedOption === -1 || this.focusedOption === max) {
          this.focusedOption = 0;
        } else {
          this.focusedOption++;
        }
      } else if (direction > 0) {
        if (this.focusedOption === -1 || this.focusedOption === 0) {
          this.focusedOption = max;
        } else {
          this.focusedOption--;
        }
      }
    }
    /**
     * Fired when the input focused
     */

  }, {
    key: "onFocus",
    value: function onFocus(event) {
      this.hasFocus = true;
      this.getItems();
      event = this._reflectName(event);
      this.autoFocus.emit(event);
      this.focus.emit(event);
    }
    /**
     * Fired when the input focused
     */

  }, {
    key: "onBlur",
    value: function onBlur(event) {
      this.hasFocus = false;
      event = this._reflectName(event);
      this.autoBlur.emit(event);
      this.blur.emit(event);
    }
  }, {
    key: "_reflectName",
    value: function _reflectName(event) {
      if (typeof event.srcElement.attributes['ng-reflect-name'] === 'object') {
        event.srcElement.name = event.srcElement.attributes['ng-reflect-name'].value;
      }

      return event;
    }
    /**
     * Register onChangeCallback
     *
     * @param fn
     */

  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this.onChangeCallback = fn;
    }
    /**
     * Register onTouchedCallback
     *
     * @param fn
     */

  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this.onTouchedCallback = fn;
    }
    /**
     * Remove already selected suggestions
     *
     * @param suggestions
     */

  }, {
    key: "removeDuplicates",
    value: function removeDuplicates(suggestions) {
      var selectedCount = this.selected ? this.selected.length : 0;
      var suggestionCount = suggestions.length;

      for (var i = 0; i < selectedCount; i++) {
        var selectedLabel = this.getLabel(this.selected[i]);

        for (var j = 0; j < suggestionCount; j++) {
          var suggestedLabel = this.getLabel(suggestions[j]);

          if (selectedLabel === suggestedLabel) {
            suggestions.splice(j, 1);
          }
        }
      }

      return suggestions;
    }
  }, {
    key: "removeExcluded",
    value: function removeExcluded(suggestions) {
      var excludedCount = this.exclude.length;

      for (var i = 0; i < excludedCount; i++) {
        var excludeLabel = this.exclude[i];

        if (typeof excludeLabel === 'object') {
          excludeLabel = this.getLabel(excludeLabel);
        }

        var suggestionCount = suggestions.length;

        for (var j = 0; j < suggestionCount; j++) {
          var suggestedLabel = this.getLabel(suggestions[j]);

          if (excludeLabel === suggestedLabel) {
            suggestions.splice(j, 1);
            break;
          }
        }
      }

      return suggestions;
    }
    /**
     * Remove item from selected
     *
     * @param selection
     * @param notify?
     */

  }, {
    key: "removeItem",
    value: function removeItem(selection, notify) {
      var count = this.selected ? this.selected.length : 0;

      for (var i = 0; i < count; i++) {
        var item = this.selected[i];
        var selectedLabel = this.getLabel(selection);
        var itemLabel = this.getLabel(item);

        if (selectedLabel === itemLabel) {
          this.selected.splice(i, 1);
        }
      }

      notify = typeof notify === 'undefined' ? true : notify;

      if (notify) {
        this.itemRemoved.emit(selection);
        this.itemsChange.emit(this.selected);
      }

      this.modelChange.emit(this.selected);
    }
    /**
     * Select item from list
     *
     * @param selection
     **/

  }, {
    key: "selectItem",
    value: function selectItem(selection) {
      this.keyword = this.getLabel(selection);
      this.formValue = this.getFormValue(selection);
      this.hideItemList();
      this.updateModel(this.formValue);

      if (this.hideListOnSelection) {
        this.hideItemList();
      }

      if (this.multi) {
        if (this.maxSelected === null || this.selected.length <= this.maxSelected) {
          this.clearValue();
          this.selected.push(selection);
          this.itemsChange.emit(this.selected);
        } else {
          return;
        }
      } else {
        this.selection = selection;
        this.selected = [selection];
        this.itemsChange.emit(selection);
      }

      this.itemSelected.emit(selection);
      this.modelChange.emit(this.selected);
    }
    /**
     * Set focus of searchbar
     */

  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this.useIonInput && this.inputElem) {
        this.inputElem.nativeElement.setFocus();
      } else if (this.searchbarElem) {
        this.searchbarElem.nativeElement.setFocus();
      }
    }
    /**
     * Set suggestions
     *
     * @param suggestions
     * @param show
     */

  }, {
    key: "setSuggestions",
    value: function setSuggestions(suggestions, show) {
      if (this.removeDuplicateSuggestions) {
        suggestions = this.removeDuplicates(suggestions);
        suggestions = this.removeExcluded(suggestions);
      }

      this.suggestions = suggestions;

      if (show || typeof show === 'undefined') {
        this.showItemList();
      }

      if (this.autoFocusSuggestion) {
        if (this.suggestions.length !== 0) {
          this.focusedOption = 0;
        }
      }
    }
    /**
     * Set current input value
     *
     * @param selection
     */

  }, {
    key: "setValue",
    value: function setValue(selection) {
      this.formValue = this.getFormValue(selection);
      this.keyword = this.getLabel(selection);
      return;
    }
    /**
     * Show item list
     */

  }, {
    key: "showItemList",
    value: function showItemList() {
      if (this.showSuggestions === false) {
        this.showListChanged = true;
      }

      this.showSuggestions = true;
    }
    /**
     * Update the model
     */

  }, {
    key: "updateModel",
    value: function updateModel(enteredText) {
      if (enteredText !== this.formValue) {
        this.formValue = enteredText;

        if (!this.multi) {
          this.selected = null;
        }
      }

      if (this.onChangeCallback) {
        this.onChangeCallback(this.formValue);
      }

      this.modelChange.emit(this.selected);
    }
    /**
     * Write value
     *
     * @param value
     */

  }, {
    key: "writeValue",
    value: function writeValue(value) {
      if (value !== this.selection) {
        this.selection = value || null;
        this.formValue = this.getFormValue(this.selection);
        this.keyword = this.getLabel(this.selection);
      }
    }
  }, {
    key: "model",
    get: function get() {
      var model = this.selected;

      if (!this.multi && typeof this.selected.length !== 'undefined') {
        if (this.selected.length === 0) {
          model = null;
        } else {
          model = this.selected[0];
        }
      }

      return model;
    },
    set: function set(selected) {
      if (typeof selected !== 'undefined' && selected !== null) {
        this.selected = selected;
        this.keyword = this.getLabel(selected);
      }
    }
  }, {
    key: "options",
    set: function set(options) {
      this.autocompleteOptions = new AutoCompleteOptions();
      var keys = Object.keys(this.autocompleteOptions);
      var keysLength = keys.length;

      for (var i = 0; i < keysLength; i++) {
        var key = keys[i];

        if (typeof options[key] !== 'undefined') {
          this.autocompleteOptions[key] = options[key];
        }
      }
    }
  }, {
    key: "eager",
    set: function set(eager) {
      if (eager) {
        this.getItems(null, false);
      }
    }
  }, {
    key: "showList",
    get: function get() {
      return this.showSuggestions;
    },
    set: function set(value) {
      if (typeof value === 'undefined') {
        return;
      }

      if (this.showSuggestions === value) {
        return;
      }

      this.showSuggestions = value === true;
      this.showListChanged = true;
    }
  }]);

  return AutoCompleteComponent;
}();

AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) {
  return new (t || AutoCompleteComponent)();
};

AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: AutoCompleteComponent,
  selectors: [["ion-auto-complete"]],
  viewQuery: function AutoCompleteComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]);
    }

    if (rf & 2) {
      var _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchbarElem = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputElem = _t.first);
    }
  },
  hostBindings: function AutoCompleteComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AutoCompleteComponent_click_HostBindingHandler($event) {
        return ctx.documentClickHandler($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
    }
  },
  inputs: {
    alwaysShowList: "alwaysShowList",
    autoFocusSuggestion: "autoFocusSuggestion",
    enableBrowserAutoComplete: "enableBrowserAutoComplete",
    clearInvalidInput: "clearInvalidInput",
    disabled: "disabled",
    exclude: "exclude",
    frontIcon: "frontIcon",
    hideListOnSelection: "hideListOnSelection",
    label: "label",
    labelPosition: "labelPosition",
    location: "location",
    maxResults: "maxResults",
    maxSelected: "maxSelected",
    multi: "multi",
    name: "name",
    removeButtonClasses: "removeButtonClasses",
    removeButtonColor: "removeButtonColor",
    removeButtonIcon: "removeButtonIcon",
    removeButtonSlot: "removeButtonSlot",
    removeDuplicateSuggestions: "removeDuplicateSuggestions",
    selectOnTabOut: "selectOnTabOut",
    styles: "styles",
    useIonInput: "useIonInput",
    keyword: "keyword",
    model: "model",
    options: "options",
    eager: "eager",
    dataProvider: "dataProvider",
    emptyTemplate: "emptyTemplate",
    selectionTemplate: "selectionTemplate",
    showResultsFirst: "showResultsFirst",
    listTemplate: "listTemplate",
    template: "template"
  },
  outputs: {
    autoBlur: "autoBlur",
    autoFocus: "autoFocus",
    blur: "blur",
    focus: "focus",
    ionAutoInput: "ionAutoInput",
    itemsChange: "itemsChange",
    itemsCleared: "itemsCleared",
    itemsHidden: "itemsHidden",
    itemRemoved: "itemRemoved",
    itemSelected: "itemSelected",
    itemsShown: "itemsShown",
    modelChange: "modelChange"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: AutoCompleteComponent_1,
    multi: true
  }])],
  decls: 15,
  vars: 50,
  consts: [["defaultSelection", ""], [4, "ngIf"], [3, "position", 4, "ngIf"], [3, "autocomplete", "name", "ngModel", "placeholder", "type", "clearOnEdit", "clearInput", "color", "mode", "disabled", "ngClass", "ngStyle", "ionInput", "tap", "ngModelChange", "keydown.tab", "keydown.shift.tab", "keyup.arrowDown", "keyup.arrowUp", "keyup.enter", "keyup.escape", "ionFocus", "ionBlur"], ["inputElem", ""], [3, "autocomplete", "name", "animated", "ngModel", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "showCancelButton", "debounce", "placeholder", "autocorrect", "mode", "searchIcon", "spellcheck", "type", "ngClass", "ngStyle", "ionInput", "tap", "ngModelChange", "keydown.tab", "keydown.shift.tab", "keyup.arrowDown", "keyup.arrowUp", "keyup.enter", "keyup.escape", "ionClear", "ionFocus", "ionBlur"], ["searchbarElem", ""], ["defaultTemplate", ""], ["class", "ion-text-center"], ["defaultEmptyTemplate", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], ["defaultList", ""], [3, "color", "outline"], ["color", "primary", 3, "name", "slot", 4, "ngIf"], [3, "name", "slot", 4, "ngIf"], ["color", "primary", 3, "name", "slot"], [3, "name", "slot"], ["class", "selected-items", 3, "click", 4, "ngFor", "ngForOf"], [1, "selected-items", 3, "click"], [3, "position"], [3, "innerHTML"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "ngClass", "ngStyle", "mouseenter", "click", "tap", 4, "ngFor", "ngForOf"], [3, "ngClass", "ngStyle", "mouseenter", "click", "tap"]],
  template: function AutoCompleteComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AutoCompleteComponent_ng_template_0_Template, 5, 8, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AutoCompleteComponent_div_2_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AutoCompleteComponent_ion_label_3_Template, 2, 2, "ion-label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInput", function AutoCompleteComponent_Template_ion_input_ionInput_4_listener($event) {
        return ctx.getItems($event);
      })("tap", function AutoCompleteComponent_Template_ion_input_tap_4_listener($event) {
        return ctx.handleTap($event);
      })("ngModelChange", function AutoCompleteComponent_Template_ion_input_ngModelChange_4_listener($event) {
        return ctx.keyword = $event;
      })("ngModelChange", function AutoCompleteComponent_Template_ion_input_ngModelChange_4_listener($event) {
        return ctx.updateModel($event);
      })("keydown.tab", function AutoCompleteComponent_Template_ion_input_keydown_tab_4_listener($event) {
        return ctx.handleTabOut($event);
      })("keydown.shift.tab", function AutoCompleteComponent_Template_ion_input_keydown_shift_tab_4_listener() {
        return ctx.hideItemList();
      })("keyup.arrowDown", function AutoCompleteComponent_Template_ion_input_keyup_arrowDown_4_listener() {
        return ctx.highlightItem(0 - 1);
      })("keyup.arrowUp", function AutoCompleteComponent_Template_ion_input_keyup_arrowUp_4_listener() {
        return ctx.highlightItem(1);
      })("keyup.enter", function AutoCompleteComponent_Template_ion_input_keyup_enter_4_listener($event) {
        return ctx.handleSelectTap($event, ctx.suggestions[ctx.focusedOption]);
      })("keyup.escape", function AutoCompleteComponent_Template_ion_input_keyup_escape_4_listener() {
        return ctx.hideItemList();
      })("ionFocus", function AutoCompleteComponent_Template_ion_input_ionFocus_4_listener($event) {
        return ctx.onFocus($event);
      })("ionBlur", function AutoCompleteComponent_Template_ion_input_ionBlur_4_listener($event) {
        return ctx.onBlur($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-searchbar", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ionInput", function AutoCompleteComponent_Template_ion_searchbar_ionInput_6_listener($event) {
        return ctx.getItems($event);
      })("tap", function AutoCompleteComponent_Template_ion_searchbar_tap_6_listener($event) {
        return ctx.handleTap($event);
      })("ngModelChange", function AutoCompleteComponent_Template_ion_searchbar_ngModelChange_6_listener($event) {
        return ctx.keyword = $event;
      })("ngModelChange", function AutoCompleteComponent_Template_ion_searchbar_ngModelChange_6_listener($event) {
        return ctx.updateModel($event);
      })("keydown.tab", function AutoCompleteComponent_Template_ion_searchbar_keydown_tab_6_listener($event) {
        return ctx.handleTabOut($event);
      })("keydown.shift.tab", function AutoCompleteComponent_Template_ion_searchbar_keydown_shift_tab_6_listener() {
        return ctx.hideItemList();
      })("keyup.arrowDown", function AutoCompleteComponent_Template_ion_searchbar_keyup_arrowDown_6_listener() {
        return ctx.highlightItem(0 - 1);
      })("keyup.arrowUp", function AutoCompleteComponent_Template_ion_searchbar_keyup_arrowUp_6_listener() {
        return ctx.highlightItem(1);
      })("keyup.enter", function AutoCompleteComponent_Template_ion_searchbar_keyup_enter_6_listener($event) {
        return ctx.handleSelectTap($event, ctx.suggestions[ctx.focusedOption]);
      })("keyup.escape", function AutoCompleteComponent_Template_ion_searchbar_keyup_escape_6_listener() {
        return ctx.hideItemList();
      })("ionClear", function AutoCompleteComponent_Template_ion_searchbar_ionClear_6_listener() {
        return ctx.clickClear();
      })("ionFocus", function AutoCompleteComponent_Template_ion_searchbar_ionFocus_6_listener($event) {
        return ctx.onFocus($event);
      })("ionBlur", function AutoCompleteComponent_Template_ion_searchbar_ionBlur_6_listener($event) {
        return ctx.onBlur($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AutoCompleteComponent_ng_template_8_Template, 2, 4, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AutoCompleteComponent_ng_template_10_Template, 1, 1, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AutoCompleteComponent_ng_template_12_Template, 0, 0, "ng-template", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AutoCompleteComponent_ng_template_13_Template, 2, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](14);

      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.multi);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.label.length !== 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autocomplete", ctx.enableBrowserAutoComplete ? "on" : "off")("name", ctx.name)("ngModel", ctx.keyword)("placeholder", ctx.autocompleteOptions.placeholder == null ? ctx.defaultOpts.placeholder : ctx.autocompleteOptions.placeholder)("type", ctx.autocompleteOptions.type == null ? ctx.defaultOpts.type : ctx.autocompleteOptions.type)("clearOnEdit", ctx.autocompleteOptions.clearOnEdit == null ? ctx.defaultOpts.clearOnEdit : ctx.autocompleteOptions.clearOnEdit)("clearInput", ctx.autocompleteOptions.clearInput == null ? ctx.defaultOpts.clearInput : ctx.autocompleteOptions.clearInput)("color", ctx.autocompleteOptions.color == null ? null : ctx.autocompleteOptions.color)("mode", ctx.autocompleteOptions.mode == null ? ctx.defaultOpts.mode : ctx.autocompleteOptions.mode)("disabled", ctx.disabled || ctx.maxSelected !== null && ctx.selected.length >= ctx.maxSelected)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](34, _c7, !ctx.useIonInput, ctx.isLoading))("ngStyle", ctx.styles.searchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("autocomplete", ctx.enableBrowserAutoComplete ? "on" : "off")("name", ctx.name)("animated", ctx.autocompleteOptions.animated == null ? ctx.defaultOpts.animated : ctx.autocompleteOptions.animated)("ngModel", ctx.keyword)("cancelButtonIcon", ctx.autocompleteOptions.cancelButtonIcon == null ? ctx.defaultOpts.cancelButtonIcon : ctx.autocompleteOptions.cancelButtonIcon)("cancelButtonText", ctx.autocompleteOptions.cancelButtonText == null ? ctx.defaultOpts.cancelButtonText : ctx.autocompleteOptions.cancelButtonText)("clearIcon", ctx.autocompleteOptions.clearIcon == null ? ctx.defaultOpts.clearIcon : ctx.autocompleteOptions.clearIcon)("color", ctx.autocompleteOptions.color == null ? null : ctx.autocompleteOptions.color)("showCancelButton", ctx.autocompleteOptions.showCancelButton == null ? ctx.defaultOpts.showCancelButton ? "always" : "never" : ctx.autocompleteOptions.showCancelButton ? "always" : "never")("debounce", ctx.autocompleteOptions.debounce == null ? ctx.defaultOpts.debounce : ctx.autocompleteOptions.debounce)("placeholder", ctx.autocompleteOptions.placeholder == null ? ctx.defaultOpts.placeholder : ctx.autocompleteOptions.placeholder)("autocorrect", ctx.autocompleteOptions.autocorrect == null ? ctx.defaultOpts.autocorrect : ctx.autocompleteOptions.autocorrect)("mode", ctx.autocompleteOptions.mode == null ? ctx.defaultOpts.mode : ctx.autocompleteOptions.mode)("searchIcon", ctx.autocompleteOptions.searchIcon == null ? ctx.defaultOpts.searchIcon : ctx.autocompleteOptions.searchIcon)("spellcheck", ctx.autocompleteOptions.spellcheck == null ? ctx.defaultOpts.spellcheck : ctx.autocompleteOptions.spellcheck)("type", ctx.autocompleteOptions.type == null ? ctx.defaultOpts.type : ctx.autocompleteOptions.type)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](37, _c8, ctx.useIonInput, ctx.isLoading, ctx.disabled || ctx.maxSelected !== null && ctx.selected.length >= ctx.maxSelected))("ngStyle", ctx.styles.searchbar);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx.listTemplate || _r11)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](48, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction6"](41, _c9, ctx.suggestions, ctx.keyword, ctx.maxResults, ctx.maxSelected, ctx.selected, ctx.showSuggestions)));
    }
  },
  directives: function directives() {
    return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSearchbar"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonChip"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]];
  },
  pipes: function pipes() {
    return [BoldPrefix, _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]];
  },
  styles: ["ion-auto-complete[_ngcontent-%COMP%]{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete[_ngcontent-%COMP%]   ion-searchbar[_ngcontent-%COMP%]{padding:1px!important}ion-auto-complete[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]   input.searchbar-input[_ngcontent-%COMP%]{pointer-events:none;cursor:default}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   ion-auto-complete-item[_ngcontent-%COMP%]{height:40px;width:100%}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border:none}ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.focus[_ngcontent-%COMP%], ion-auto-complete[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:focus{cursor:pointer;background:#f1f1f1}ion-auto-complete[_ngcontent-%COMP%]   .hidden[_ngcontent-%COMP%]{display:none}ion-auto-complete[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]   input.searchbar-input[_ngcontent-%COMP%]{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete[_ngcontent-%COMP%]   .searchbar-clear-button.sc-ion-searchbar-md[_ngcontent-%COMP%]{right:34px}ion-auto-complete[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{float:left}"]
});

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "alwaysShowList", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "autoFocusSuggestion", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "enableBrowserAutoComplete", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "clearInvalidInput", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "dataProvider", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "disabled", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "emptyTemplate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "exclude", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "frontIcon", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "hideListOnSelection", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "keyword", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "label", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "labelPosition", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "location", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "maxResults", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "maxSelected", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "multi", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "name", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "removeButtonClasses", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "removeButtonColor", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "removeButtonIcon", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "removeButtonSlot", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "removeDuplicateSuggestions", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "selectionTemplate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "selectOnTabOut", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "showResultsFirst", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "styles", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "listTemplate", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "template", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "useIonInput", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "model", null);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "options", null);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "modelChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], AutoCompleteComponent.prototype, "eager", null);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "blur", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "autoFocus", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "autoBlur", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "focus", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "ionAutoInput", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemsChange", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemsCleared", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemsHidden", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemRemoved", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemSelected", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()], AutoCompleteComponent.prototype, "itemsShown", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('searchbarElem', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
  static: false
})], AutoCompleteComponent.prototype, "searchbarElem", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('inputElem', {
  read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
  static: false
})], AutoCompleteComponent.prototype, "inputElem", void 0);

Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"])('document:click', ['$event'])], AutoCompleteComponent.prototype, "documentClickHandler", null);
/**
 * Bolds the beginning of the matching string in the item
 */


var BoldPrefix = /*#__PURE__*/function () {
  function BoldPrefix() {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, BoldPrefix);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(BoldPrefix, [{
    key: "transform",
    value: function transform(value, keyword) {
      if (!keyword) {
        return value;
      }

      var escaped_keyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      return value.replace(new RegExp(escaped_keyword, 'gi'), function (str) {
        return str.bold();
      });
    }
  }]);

  return BoldPrefix;
}();

BoldPrefix.ɵfac = function BoldPrefix_Factory(t) {
  return new (t || BoldPrefix)();
};

BoldPrefix.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefinePipe"]({
  name: "boldprefix",
  type: BoldPrefix,
  pure: true
});
BoldPrefix.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: BoldPrefix,
  factory: function factory(t) {
    return BoldPrefix.ɵfac(t);
  }
});
var AutoCompleteModule_1;

var AutoCompleteModule = AutoCompleteModule_1 = /*#__PURE__*/function () {
  function AutoCompleteModule() {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AutoCompleteModule);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(AutoCompleteModule, null, [{
    key: "forRoot",
    value: function forRoot() {
      return {
        ngModule: AutoCompleteModule_1,
        providers: []
      };
    }
  }]);

  return AutoCompleteModule;
}();

AutoCompleteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AutoCompleteModule
});
AutoCompleteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function AutoCompleteModule_Factory(t) {
    return new (t || AutoCompleteModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutoCompleteComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
    args: [{
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
        useExisting: AutoCompleteComponent_1,
        multi: true
      }],
      selector: 'ion-auto-complete',
      template: "<ng-template #defaultSelection\n             let-attrs=\"attrs\">\n    <ion-chip class=\"{{ attrs.removeButtonClasses }}\"\n              [color]=\"attrs.removeButtonColor\"\n              [outline]=\"true\">\n        <ion-icon *ngIf=\"frontIcon\"\n                  [name]=\"frontIcon\"\n                  [slot]=\"'start'\"\n                  color=\"primary\"></ion-icon>\n\n        <ion-label>{{ attrs.label }}</ion-label>\n\n        <ion-icon *ngIf=\"attrs.removeButtonIcon\"\n                  [name]=\"attrs.removeButtonIcon\"\n                  [slot]=\"attrs.removeButtonSlot\"></ion-icon>\n    </ion-chip>\n</ng-template>\n\n<div *ngIf=\"multi\">\n    <div *ngFor=\"let item of selected\"\n         class=\"selected-items\"\n         (click)=\"removeItem(item)\">\n        <ng-template [ngTemplateOutlet]=\"selectionTemplate || defaultSelection\"\n                     [ngTemplateOutletContext]=\"{\n                            attrs: {\n                              data:                item,\n                              label:               getLabel(item),\n                              removeButtonClasses: removeButtonClasses,\n                              removeButtonColor:   removeButtonColor,\n                              removeButtonIcon:    removeButtonIcon,\n                              removeButtonSlot:    removeButtonSlot\n                            }\n                         }\"></ng-template>\n    </div>\n</div>\n\n<ion-label *ngIf=\"label.length !== 0\"\n           [position]=\"labelPosition\">{{ label }}</ion-label>\n\n<ion-input #inputElem\n           [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n           [name]=\"name\"\n           (ionInput)=\"getItems($event)\"\n           (tap)=\"handleTap($event)\"\n           [(ngModel)]=\"keyword\"\n           (ngModelChange)=\"updateModel($event)\"\n           [placeholder]=\"autocompleteOptions.placeholder == null ? defaultOpts.placeholder : autocompleteOptions.placeholder\"\n           [type]=\"autocompleteOptions.type == null ? defaultOpts.type : autocompleteOptions.type\"\n           [clearOnEdit]=\"autocompleteOptions.clearOnEdit == null ? defaultOpts.clearOnEdit : autocompleteOptions.clearOnEdit\"\n           [clearInput]=\"autocompleteOptions.clearInput == null ? defaultOpts.clearInput : autocompleteOptions.clearInput\"\n           [color]=\"autocompleteOptions.color == null ? null : autocompleteOptions.color\"\n           [mode]=\"autocompleteOptions.mode == null ? defaultOpts.mode : autocompleteOptions.mode\"\n           [disabled]=\"disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)\"\n           [ngClass]=\"{ 'hidden': !useIonInput, 'loading': isLoading }\"\n           [ngStyle]=\"styles.searchbar\"\n           (keydown.tab)=\"handleTabOut($event)\"\n           (keydown.shift.tab)=\"hideItemList()\"\n           (keyup.arrowDown)=\"highlightItem(-1)\"\n           (keyup.arrowUp)=\"highlightItem(1)\"\n           (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n           (keyup.escape)=\"hideItemList()\"\n           (ionFocus)=\"onFocus($event)\"\n           (ionBlur)=\"onBlur($event)\"></ion-input>\n\n<ion-searchbar #searchbarElem\n               [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n               [name]=\"name\"\n               [animated]=\"autocompleteOptions.animated == null ? defaultOpts.animated : autocompleteOptions.animated\"\n               (ionInput)=\"getItems($event)\"\n               (tap)=\"handleTap($event)\"\n               [(ngModel)]=\"keyword\"\n               (ngModelChange)=\"updateModel($event)\"\n               [cancelButtonIcon]=\"autocompleteOptions.cancelButtonIcon == null ? defaultOpts.cancelButtonIcon : autocompleteOptions.cancelButtonIcon\"\n               [cancelButtonText]=\"autocompleteOptions.cancelButtonText == null ? defaultOpts.cancelButtonText : autocompleteOptions.cancelButtonText\"\n               [clearIcon]=\"autocompleteOptions.clearIcon == null ? defaultOpts.clearIcon : autocompleteOptions.clearIcon\"\n               [color]=\"autocompleteOptions.color == null ? null : autocompleteOptions.color\"\n               [showCancelButton]=\"autocompleteOptions.showCancelButton == null ?\n                                        (defaultOpts.showCancelButton ? 'always' : 'never') :\n                                        (autocompleteOptions.showCancelButton ? 'always' : 'never')\"\n               [debounce]=\"autocompleteOptions.debounce == null ? defaultOpts.debounce : autocompleteOptions.debounce\"\n               [placeholder]=\"autocompleteOptions.placeholder == null ? defaultOpts.placeholder : autocompleteOptions.placeholder\"\n               [autocorrect]=\"autocompleteOptions.autocorrect == null ? defaultOpts.autocorrect : autocompleteOptions.autocorrect\"\n               [mode]=\"autocompleteOptions.mode == null ? defaultOpts.mode : autocompleteOptions.mode\"\n               [searchIcon]=\"autocompleteOptions.searchIcon == null ? defaultOpts.searchIcon : autocompleteOptions.searchIcon\"\n               [spellcheck]=\"autocompleteOptions.spellcheck == null ? defaultOpts.spellcheck : autocompleteOptions.spellcheck\"\n               [type]=\"autocompleteOptions.type == null ? defaultOpts.type : autocompleteOptions.type\"\n               [ngClass]=\"{ 'hidden': useIonInput, 'loading': isLoading, 'disabled': disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected) }\"\n               [ngStyle]=\"styles.searchbar\"\n               (keydown.tab)=\"handleTabOut($event)\"\n               (keydown.shift.tab)=\"hideItemList()\"\n               (keyup.arrowDown)=\"highlightItem(-1)\"\n               (keyup.arrowUp)=\"highlightItem(1)\"\n               (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n               (keyup.escape)=\"hideItemList()\"\n               (ionClear)=\"clickClear()\"\n               (ionFocus)=\"onFocus($event)\"\n               (ionBlur)=\"onBlur($event)\"></ion-searchbar>\n\n<ng-template #defaultTemplate\n             let-attrs=\"attrs\">\n    <span [innerHTML]='attrs.label | boldprefix:attrs.keyword'></span>\n</ng-template>\n\n<ng-template #defaultEmptyTemplate\n             let-attrs=\"attrs\"\n             class=\"ion-text-center\">\n    {{ autocompleteOptions.noItems }}\n</ng-template>\n\n<ng-template [ngTemplateOutlet]=\"listTemplate || defaultList\"\n             [ngTemplateOutletContext]=\"{\n                        attrs: {\n                            data:            suggestions,\n                            keyword:         keyword,\n                            maxResults:      maxResults,\n                            maxSelected:     maxSelected,\n                            selected:        selected,\n                            showSuggestions: showSuggestions\n                          }\n                        }\"></ng-template>\n\n<ng-template #defaultList\n             let-attrs=\"attrs\">\n    <ul *ngIf=\"!(disabled || (attrs.maxSelected !== null && attrs.selected.length >= attrs.maxSelected)) && attrs.data.length > 0 && attrs.showSuggestions\"\n        [ngStyle]=\"listStyles()\">\n        <li *ngFor=\"let suggestion of attrs.data| slice:0:attrs.maxResults; let index = index\"\n            [ngClass]=\"{ 'focus': focusedOption === index }\"\n            [ngStyle]=\"styles.listItem\"\n            (mouseenter)=\"focusedOption = index\"\n            (click)=\"handleSelectTap($event, suggestion)\"\n            (tap)=\"handleSelectTap($event, suggestion)\">\n            <ng-template [ngTemplateOutlet]=\"template || defaultTemplate\"\n                         [ngTemplateOutletContext]=\"{\n                            attrs:{\n                              data:               suggestion,\n                              label:              getLabel(suggestion),\n                              keyword:            keyword,\n                              formValue:          getFormValue(suggestion),\n                              labelAttribute:     getLabel(suggestion),\n                              formValueAttribute: getFormValue(suggestion)\n                            }\n                         }\"></ng-template>\n        </li>\n    </ul>\n\n    <ul *ngIf=\"suggestions.length === 0 && showSuggestions\"\n        [ngStyle]=\"listStyles()\">\n        <li [ngStyle]=\"styles.listItem\">\n            <ng-template [ngTemplateOutlet]=\"emptyTemplate || defaultEmptyTemplate\"\n                         [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          keyword: keyword\n                        }\n                     }\"></ng-template>\n        </li>\n    </ul>\n</ng-template>\n",
      styles: ["ion-auto-complete{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete ion-searchbar{padding:1px!important}ion-auto-complete .disabled input.searchbar-input{pointer-events:none;cursor:default}ion-auto-complete ul{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete ul li{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete ul ion-auto-complete-item{height:40px;width:100%}ion-auto-complete ul li:last-child{border:none}ion-auto-complete ul li.focus,ion-auto-complete ul li:focus{cursor:pointer;background:#f1f1f1}ion-auto-complete .hidden{display:none}ion-auto-complete .loading input.searchbar-input{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete .searchbar-clear-button.sc-ion-searchbar-md{right:34px}ion-auto-complete .selected-items{float:left}"]
    }]
  }], function () {
    return [];
  }, {
    alwaysShowList: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    autoFocusSuggestion: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    enableBrowserAutoComplete: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    clearInvalidInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    disabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    exclude: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    frontIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    hideListOnSelection: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    label: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    labelPosition: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    location: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maxResults: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    maxSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    multi: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    name: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removeButtonClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removeButtonColor: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removeButtonIcon: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removeButtonSlot: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    removeDuplicateSuggestions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    selectOnTabOut: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    styles: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    useIonInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    autoBlur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    autoFocus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    blur: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    focus: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    ionAutoInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemsChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemsCleared: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemsHidden: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemRemoved: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemSelected: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    itemsShown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    modelChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }],
    keyword: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    model: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    eager: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    documentClickHandler: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
      args: ['document:click', ['$event']]
    }],
    dataProvider: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    emptyTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    selectionTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    showResultsFirst: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    listTemplate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    template: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
    }],
    searchbarElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['searchbarElem', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        static: false
      }]
    }],
    inputElem: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
      args: ['inputElem', {
        read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
        static: false
      }]
    }]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](BoldPrefix, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Pipe"],
    args: [{
      name: 'boldprefix'
    }]
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AutoCompleteModule, {
    declarations: function declarations() {
      return [AutoCompleteComponent, BoldPrefix];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]];
    },
    exports: function exports() {
      return [AutoCompleteComponent, BoldPrefix];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AutoCompleteModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [AutoCompleteComponent, BoldPrefix],
      exports: [AutoCompleteComponent, BoldPrefix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"]]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-picker/country-picker.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-picker/country-picker.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #empty\n             let-attrs=\"attrs\">\n    <div class=\"country-suggestions-empty\">\n        <ion-text>Sorry, we cannot find that country!</ion-text>\n\n        <div class=\"country-suggestions-empty-icon\"></div>\n    </div>\n</ng-template>\n\n<ng-template #selection\n             let-attrs=\"attrs\">\n    <div style=\"position: relative\"\n         class=\"flag-image-wrapper\">\n        <ion-img class=\"flag ion-float-left ion-margin-horizontal\"\n                 style=\"height: 50px;\"\n                 [slot]=\"'start'\"\n                 [src]=\"attrs.data.flag\"></ion-img>\n\n        <div class=\"close-icon\">\n            <img src=\"assets/icons/clear.svg\"/>\n        </div>\n    </div>\n</ng-template>\n\n<ng-template #suggestions\n             let-attrs=\"attrs\">\n    <ion-item>\n        <ion-img class=\"flag\"\n                 [slot]=\"'start'\"\n                 [src]=\"attrs.data.flag\"></ion-img>\n\n        <ion-text>\n            <span [innerHtml]=\"attrs.data.name | boldprefix:attrs.keyword\"></span> ({{ attrs.data.nativeName }})\n        </ion-text>\n    </ion-item>\n</ng-template>\n\n<ion-auto-complete [(model)]=\"selected\"\n                 [eager]=\"true\"\n                 [multi]=\"true\"\n                 [dataProvider]=\"provider\"\n                 [disabled]=\"false\"\n                 [maxSelected]=\"3\"\n                 [template]=\"suggestions\"\n                 [emptyTemplate]=\"empty\"\n                 [selectionTemplate]=\"selection\"\n                 (blur)=\"on('blur', $event)\"\n                 (autoFocus)=\"on('autoFocus', $event)\"\n                 (autoBlur)=\"on('autoBlur', $event)\"\n                 (focus)=\"on('focus', $event)\"\n                 (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                 (itemsChange)=\"on('itemsChange', $event)\"\n                 (itemsCleared)=\"on('itemsCleared', $event)\"\n                 (itemsHidden)=\"on('itemsHidden', $event)\"\n                 (itemRemoved)=\"on('itemRemoved', $event)\"\n                 (itemSelected)=\"on('itemSelected', $event)\"\n                 (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredient-picker/ingredient-picker.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredient-picker/ingredient-picker.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-template #empty\n             let-attrs=\"attrs\">\n    <div class=\"country-suggestions-empty\">\n        <ion-text>Sorry, we could not find that ingredient!</ion-text>\n\n        <ion-button [size]=\"'full'\"\n                    (click)=\"add()\">\n            Add Anyways\n        </ion-button>\n    </div>\n</ng-template>\n\n<ion-auto-complete [(model)]=\"selected\"\n                   [multi]=\"true\"\n                   [dataProvider]=\"provider\"\n                   [disabled]=\"false\"\n                   [emptyTemplate]=\"empty\"\n                   [options]=\"options\"\n                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                   [removeButtonColor]=\"'dark'\"\n                   (blur)=\"on('blur', $event)\"\n                   (autoFocus)=\"on('autoFocus', $event)\"\n                   (autoBlur)=\"on('autoBlur', $event)\"\n                   (focus)=\"on('focus', $event)\"\n                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                   (itemsChange)=\"on('itemsChange', $event)\"\n                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                   (itemSelected)=\"on('itemSelected', $event)\"\n                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-auto-complete [(model)]=\"selected\"\n                   [multi]=\"false\"\n                   [dataProvider]=\"provider\"\n                   [disabled]=\"false\"\n                   [maxResults]=\"6\"\n                   [removeButtonColor]=\"'dark'\"\n                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                   (itemsChange)=\"on('itemsChange', $event)\"\n                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                   (itemSelected)=\"on('itemSelected', $event)\"\n                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-picker/team-picker.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-picker/team-picker.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row>\n    <ion-col [size]=\"12\">\n        <ion-card style=\"overflow: inherit; padding: 15px;\">\n            <ion-item style=\"overflow: inherit;\">\n                <ion-auto-complete [(model)]=\"selected\"\n                                   [multi]=\"true\"\n                                   [dataProvider]=\"provider\"\n                                   [disabled]=\"otherTeamIsSelecting\"\n                                   [exclude]=\"otherTeam\"\n                                   [options]=\"teamOptions\"\n                                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                                   [removeButtonColor]=\"'dark'\"\n                                   [useIonInput]=\"true\"\n                                   [label]=\"'Your Team'\"\n                                   [labelPosition]=\"'floating'\"\n                                   (blur)=\"on('blur', $event)\"\n                                   (autoFocus)=\"on('autoFocus', $event)\"\n                                   (autoBlur)=\"on('autoBlur', $event)\"\n                                   (focus)=\"on('focus', $event)\"\n                                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                                   (itemsChange)=\"on('itemsChange', $event)\"\n                                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                                   (itemSelected)=\"selectTeam($event)\"\n                                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n            </ion-item>\n        </ion-card>\n    </ion-col>\n</ion-row>\n\n<ion-row>\n    <ion-col [size]=\"12\">\n        <ion-card style=\"overflow: inherit; padding: 15px;\">\n            <ion-item style=\"overflow: inherit;\">\n                <ion-auto-complete [(model)]=\"otherTeam\"\n                                   [multi]=\"true\"\n                                   [dataProvider]=\"provider\"\n                                   [disabled]=\"false\"\n                                   [exclude]=\"selected\"\n                                   [options]=\"otherTeamOptions\"\n                                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                                   [removeButtonColor]=\"'dark'\"\n                                   [useIonInput]=\"true\"\n                                   [label]=\"'The Other Team'\"\n                                   [labelPosition]=\"'floating'\"\n                                   (blur)=\"on('blur', $event)\"\n                                   (autoFocus)=\"on('autoFocus', $event)\"\n                                   (autoBlur)=\"on('autoBlur', $event)\"\n                                   (focus)=\"on('focus', $event)\"\n                                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                                   (itemsChange)=\"on('itemsChange', $event)\"\n                                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                                   (itemSelected)=\"on('itemSelected', $event)\"\n                                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n\n                <ion-button [size]=\"'full'\"\n                            (click)=\"random()\">\n                    Random\n                </ion-button>\n            </ion-item>\n        </ion-card>\n    </ion-col>\n</ion-row>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Demo: ionic4-auto-complete\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"height: 100%;\">\n    <ion-segment [value]=\"selectedSegment\"\n                 (ionChange)=\"onClickSegment($event)\">\n      <ion-segment-button *ngFor=\"let segment of segments\"\n                          [value]=\"segment.key\">\n        <ion-label>\n          {{ segment.label }}\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item-divider></ion-item-divider>\n\n    <ion-card *ngIf=\"selectedSegment === 'ingredients'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Ingredients\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <ingredient-picker></ingredient-picker>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'simple-service'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Any Country\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <simple-service></simple-service>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'team-picker'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Multiple People\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <multi-function></multi-function>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'country-picker'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select up to 3 Countries\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <custom-template></custom-template>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/components/country-picker/country-picker.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/country-picker/country-picker.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".country-suggestions-empty {\n  background: lightgray;\n}\n.country-suggestions-empty ion-text {\n  color: white;\n  display: block;\n  font-size: large;\n  margin: 0 auto;\n  width: 225px;\n}\n.country-suggestions-empty div.country-suggestions-empty-icon {\n  background: lightgray url(/assets/icons/not-found.svg) no-repeat center;\n  min-height: 130px;\n}\n.flag {\n  width: 50px;\n  height: 50px;\n}\n.flag-image-wrapper .close-icon {\n  cursor: pointer;\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  width: 30px;\n}\n.close-icon {\n  display: none;\n}\n.close-icon:hover {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb3VudHJ5LXBpY2tlci9jb3VudHJ5LXBpY2tlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKO0FBRUU7RUFDRSx1RUFBQTtFQUNBLGlCQUFBO0FBQUo7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7QUFJQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQURGO0FBSUE7RUFDRSxhQUFBO0FBREY7QUFJQTtFQUNFLGFBQUE7QUFERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY291bnRyeS1waWNrZXIvY291bnRyeS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY291bnRyeS1zdWdnZXN0aW9ucy1lbXB0eSB7XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcblxuICBpb24tdGV4dCB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IDIyNXB4O1xuICB9XG5cbiAgZGl2LmNvdW50cnktc3VnZ2VzdGlvbnMtZW1wdHktaWNvbiB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5IHVybCgvYXNzZXRzL2ljb25zL25vdC1mb3VuZC5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogMTMwcHg7XG4gIH1cbn1cblxuLmZsYWcge1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZmxhZy1pbWFnZS13cmFwcGVyIC5jbG9zZS1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAzMHB4O1xufVxuXG4uY2xvc2UtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jbG9zZS1pY29uOmhvdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/country-picker/country-picker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/country-picker/country-picker.component.ts ***!
  \***********************************************************************/
/*! exports provided: CountryPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPickerComponent", function() { return CountryPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");




var CountryPickerComponent = /** @class */ (function () {
    function CountryPickerComponent(provider) {
        this.provider = provider;
        this.selected = [];
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.type = 'add-friend.svg';
    }
    CountryPickerComponent.prototype.on = function (output, event) {
        console.log(output);
        // console.log(event);
    };
    CountryPickerComponent.ctorParameters = function () { return [
        { type: _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"] }
    ]; };
    CountryPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-template',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./country-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/country-picker/country-picker.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./country-picker.component.scss */ "./src/app/components/country-picker/country-picker.component.scss")).default]
        })
    ], CountryPickerComponent);
    return CountryPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/country-picker/country-picker.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/country-picker/country-picker.module.ts ***!
  \********************************************************************/
/*! exports provided: CountryPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryPickerModule", function() { return CountryPickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _country_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./country-picker.component */ "./src/app/components/country-picker/country-picker.component.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");








var CountryPickerModule = /** @class */ (function () {
    function CountryPickerModule() {
    }
    CountryPickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _country_picker_component__WEBPACK_IMPORTED_MODULE_6__["CountryPickerComponent"]
            ],
            entryComponents: [
                _country_picker_component__WEBPACK_IMPORTED_MODULE_6__["CountryPickerComponent"]
            ],
            exports: [
                _country_picker_component__WEBPACK_IMPORTED_MODULE_6__["CountryPickerComponent"]
            ],
            imports: [
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            providers: [
                _services_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"]
            ]
        })
    ], CountryPickerModule);
    return CountryPickerModule;
}());



/***/ }),

/***/ "./src/app/components/ingredient-picker/ingredient-picker.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/components/ingredient-picker/ingredient-picker.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaW5ncmVkaWVudC1waWNrZXIvaW5ncmVkaWVudC1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/ingredient-picker/ingredient-picker.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/ingredient-picker/ingredient-picker.component.ts ***!
  \*****************************************************************************/
/*! exports provided: IngredientPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientPickerComponent", function() { return IngredientPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ingredient.service */ "./src/app/services/ingredient.service.ts");




var IngredientPickerComponent = /** @class */ (function () {
    function IngredientPickerComponent(provider) {
        this.provider = provider;
        this.newIngredient = '';
        this.selected = [];
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.cancelButtonIcon = 'assets/icons/clear.svg';
        this.options.clearIcon = 'assets/icons/clear.svg';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.searchIcon = 'assets/icons/add-user.svg';
        this.options.type = 'search';
    }
    IngredientPickerComponent.prototype.add = function () {
        var ingredient = {
            name: this.newIngredient
        };
        this.provider.add(ingredient);
        this.selected.push(ingredient);
        this.newIngredient = '';
    };
    IngredientPickerComponent.prototype.on = function (output, event) {
        if (output === 'ionAutoInput') {
            this.newIngredient = event;
        }
        console.log(output);
        // console.log(event);
    };
    IngredientPickerComponent.ctorParameters = function () { return [
        { type: _services_ingredient_service__WEBPACK_IMPORTED_MODULE_3__["IngredientService"] }
    ]; };
    IngredientPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ingredient-picker',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ingredient-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ingredient-picker/ingredient-picker.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ingredient-picker.component.scss */ "./src/app/components/ingredient-picker/ingredient-picker.component.scss")).default]
        })
    ], IngredientPickerComponent);
    return IngredientPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/ingredient-picker/ingredient-picker.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/ingredient-picker/ingredient-picker.module.ts ***!
  \**************************************************************************/
/*! exports provided: IngredientPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientPickerModule", function() { return IngredientPickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _ingredient_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ingredient-picker.component */ "./src/app/components/ingredient-picker/ingredient-picker.component.ts");
/* harmony import */ var _services_ingredient_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/ingredient.service */ "./src/app/services/ingredient.service.ts");








var IngredientPickerModule = /** @class */ (function () {
    function IngredientPickerModule() {
    }
    IngredientPickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _ingredient_picker_component__WEBPACK_IMPORTED_MODULE_6__["IngredientPickerComponent"]
            ],
            entryComponents: [
                _ingredient_picker_component__WEBPACK_IMPORTED_MODULE_6__["IngredientPickerComponent"]
            ],
            exports: [
                _ingredient_picker_component__WEBPACK_IMPORTED_MODULE_6__["IngredientPickerComponent"]
            ],
            imports: [
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            providers: [
                _services_ingredient_service__WEBPACK_IMPORTED_MODULE_7__["IngredientService"]
            ]
        })
    ], IngredientPickerModule);
    return IngredientPickerModule;
}());



/***/ }),

/***/ "./src/app/components/simple-service/simple-service.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/simple-service/simple-service.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2ltcGxlLXNlcnZpY2Uvc2ltcGxlLXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/simple-service/simple-service.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/simple-service/simple-service.component.ts ***!
  \***********************************************************************/
/*! exports provided: SimpleServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleServiceComponent", function() { return SimpleServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");




var SimpleServiceComponent = /** @class */ (function () {
    function SimpleServiceComponent(provider) {
        this.provider = provider;
        this.selected = '';
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.type = 'add-friend.svg';
    }
    SimpleServiceComponent.prototype.on = function (output, event) {
        console.log(output);
        // console.log(event);
    };
    SimpleServiceComponent.ctorParameters = function () { return [
        { type: _services_country_service__WEBPACK_IMPORTED_MODULE_3__["CountryService"] }
    ]; };
    SimpleServiceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'simple-service',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./simple-service.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./simple-service.component.scss */ "./src/app/components/simple-service/simple-service.component.scss")).default]
        })
    ], SimpleServiceComponent);
    return SimpleServiceComponent;
}());



/***/ }),

/***/ "./src/app/components/simple-service/simple-service.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/simple-service/simple-service.module.ts ***!
  \********************************************************************/
/*! exports provided: SimpleServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleServiceModule", function() { return SimpleServiceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _simple_service_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple-service.component */ "./src/app/components/simple-service/simple-service.component.ts");
/* harmony import */ var _services_country_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/country.service */ "./src/app/services/country.service.ts");








var SimpleServiceModule = /** @class */ (function () {
    function SimpleServiceModule() {
    }
    SimpleServiceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _simple_service_component__WEBPACK_IMPORTED_MODULE_6__["SimpleServiceComponent"]
            ],
            entryComponents: [
                _simple_service_component__WEBPACK_IMPORTED_MODULE_6__["SimpleServiceComponent"]
            ],
            exports: [
                _simple_service_component__WEBPACK_IMPORTED_MODULE_6__["SimpleServiceComponent"]
            ],
            imports: [
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            providers: [
                _services_country_service__WEBPACK_IMPORTED_MODULE_7__["CountryService"]
            ]
        })
    ], SimpleServiceModule);
    return SimpleServiceModule;
}());



/***/ }),

/***/ "./src/app/components/team-picker/team-picker.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/team-picker/team-picker.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhbS1waWNrZXIvdGVhbS1waWNrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/team-picker/team-picker.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/team-picker/team-picker.component.ts ***!
  \*****************************************************************/
/*! exports provided: TeamPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPickerComponent", function() { return TeamPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");




var TeamPickerComponent = /** @class */ (function () {
    function TeamPickerComponent(provider) {
        this.provider = provider;
        this.otherTeamIsSelecting = false;
        this.otherTeam = [];
        this.selected = [];
        this.teamOptions = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteOptions"]();
        this.teamOptions.autocomplete = 'on';
        this.teamOptions.debounce = 750;
        this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
        this.teamOptions.type = 'search';
        this.otherTeamOptions = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteOptions"]();
        this.otherTeamOptions.autocomplete = 'on';
        this.otherTeamOptions.debounce = 750;
        this.teamOptions.searchIcon = 'assets/icons/add-user.svg';
        this.teamOptions.type = 'search';
    }
    TeamPickerComponent.prototype.on = function (output, event) {
        console.log(output);
        // console.log(event);
    };
    TeamPickerComponent.prototype.random = function () {
        var users = this.provider.getResults('');
        var count = users.length;
        this.otherTeam.push(users[Math.round(Math.random() * count)]);
    };
    TeamPickerComponent.prototype.selectTeam = function (name) {
        this.on('itemSelected', name);
        this.selectOtherTeam();
    };
    TeamPickerComponent.prototype.selectOtherTeam = function () {
        var _this = this;
        this.otherTeamIsSelecting = true;
        setTimeout(function () {
            _this.random();
            _this.otherTeamIsSelecting = false;
        }, Math.random() * 1000 * 5);
    };
    TeamPickerComponent.ctorParameters = function () { return [
        { type: _services_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] }
    ]; };
    TeamPickerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'multi-function',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./team-picker.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/team-picker/team-picker.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./team-picker.component.scss */ "./src/app/components/team-picker/team-picker.component.scss")).default]
        })
    ], TeamPickerComponent);
    return TeamPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/team-picker/team-picker.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/team-picker/team-picker.module.ts ***!
  \**************************************************************/
/*! exports provided: TeamPickerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPickerModule", function() { return TeamPickerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic4-auto-complete */ "./node_modules/ionic4-auto-complete/__ivy_ngcc__/fesm2015/ionic4-auto-complete.js");
/* harmony import */ var _team_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-picker.component */ "./src/app/components/team-picker/team-picker.component.ts");
/* harmony import */ var _services_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people.service */ "./src/app/services/people.service.ts");








var TeamPickerModule = /** @class */ (function () {
    function TeamPickerModule() {
    }
    TeamPickerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _team_picker_component__WEBPACK_IMPORTED_MODULE_6__["TeamPickerComponent"]
            ],
            entryComponents: [
                _team_picker_component__WEBPACK_IMPORTED_MODULE_6__["TeamPickerComponent"]
            ],
            exports: [
                _team_picker_component__WEBPACK_IMPORTED_MODULE_6__["TeamPickerComponent"]
            ],
            imports: [
                ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_5__["AutoCompleteModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]
            ],
            providers: [
                _services_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"]
            ]
        })
    ], TeamPickerModule);
    return TeamPickerModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
/* harmony import */ var _components_country_picker_country_picker_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/country-picker/country-picker.module */ "./src/app/components/country-picker/country-picker.module.ts");
/* harmony import */ var _components_team_picker_team_picker_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/team-picker/team-picker.module */ "./src/app/components/team-picker/team-picker.module.ts");
/* harmony import */ var _components_ingredient_picker_ingredient_picker_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ingredient-picker/ingredient-picker.module */ "./src/app/components/ingredient-picker/ingredient-picker.module.ts");
/* harmony import */ var _components_simple_service_simple_service_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/simple-service/simple-service.module */ "./src/app/components/simple-service/simple-service.module.ts");











var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _components_country_picker_country_picker_module__WEBPACK_IMPORTED_MODULE_7__["CountryPickerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_team_picker_team_picker_module__WEBPACK_IMPORTED_MODULE_8__["TeamPickerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
                _components_ingredient_picker_ingredient_picker_module__WEBPACK_IMPORTED_MODULE_9__["IngredientPickerModule"],
                _components_simple_service_simple_service_module__WEBPACK_IMPORTED_MODULE_10__["SimpleServiceModule"]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



var HomePage = /** @class */ (function () {
    function HomePage(route, router) {
        this.route = route;
        this.router = router;
        this.segments = [
            {
                key: 'simple-service',
                label: 'Basic'
            },
            {
                key: 'ingredients',
                label: 'Ingredients'
            },
            {
                key: 'team-picker',
                label: 'Pick Teams'
            },
            {
                key: 'country-picker',
                label: 'Pick Countries'
            }
        ];
        this.selectedSegment = this.segments[0].key;
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.fragment.subscribe(function (fragment) {
            _this.setSegment(fragment);
        });
    };
    HomePage.prototype.onClickSegment = function (event) {
        if (event.detail && typeof event.detail.value === 'string') {
            var segment = event.detail.value;
            this.setSegment(segment);
        }
    };
    HomePage.prototype.setSegment = function (segment) {
        if (typeof segment === 'string') {
            segment = segment.toLowerCase();
            var arrayHas = this.segments.some(function (candidate) {
                return candidate.key === segment;
            });
            if (arrayHas) {
                this.selectedSegment = segment;
                this.router.navigate([], {
                    fragment: segment
                }).then();
            }
        }
    };
    HomePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'home-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
        })
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/country.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/country.service.ts ***!
  \*********************************************/
/*! exports provided: CountryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryService", function() { return CountryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





var CountryService = /** @class */ (function () {
    function CountryService(http) {
        this.http = http;
        this.labelAttribute = 'name';
        this.countries = [];
    }
    CountryService.prototype.getResults = function (keyword) {
        var _this = this;
        keyword = typeof keyword === 'string' ? keyword : '';
        var observable;
        if (this.countries.length === 0) {
            observable = this.http.get('https://restcountries.eu/rest/v2/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (results) {
                if (results) {
                    _this.countries = results;
                }
                return _this.countries;
            }));
        }
        else {
            observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(this.countries);
        }
        return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) {
            return result.filter(function (item) {
                return item.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
        }));
    };
    CountryService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CountryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "./src/app/services/ingredient.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/ingredient.service.ts ***!
  \************************************************/
/*! exports provided: IngredientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientService", function() { return IngredientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var IngredientService = /** @class */ (function () {
    function IngredientService() {
        this.labelAttribute = 'name';
        this.objects = [
            {
                name: 'Cilantro'
            },
            {
                name: 'Avocado'
            },
            {
                name: 'Onion'
            },
            {
                name: 'Pepper'
            },
            {
                name: 'Salt'
            },
            {
                name: 'Tomato'
            }
        ];
    }
    IngredientService.prototype.add = function (ingredient) {
        this.objects.push(ingredient);
    };
    IngredientService.prototype.getResults = function (keyword) {
        var _this = this;
        keyword = keyword.toLowerCase();
        return this.objects.filter(function (object) {
            var value = object[_this.labelAttribute].toLowerCase();
            return value.includes(keyword);
        });
    };
    IngredientService.ctorParameters = function () { return []; };
    IngredientService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], IngredientService);
    return IngredientService;
}());



/***/ }),

/***/ "./src/app/services/people.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/people.service.ts ***!
  \********************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var PeopleService = /** @class */ (function () {
    function PeopleService() {
        this.labelAttribute = 'full_name';
        this.objects = [
            {
                first_name: 'Dominic',
                last_name: 'Elliot',
                full_name: 'Dominic Elliot',
            },
            {
                first_name: 'Duke',
                last_name: 'Ellington',
                full_name: 'Duke Ellington',
            },
            {
                first_name: 'Jeremy',
                last_name: 'Quick',
                full_name: 'Jeremy Quick',
            },
            {
                first_name: 'Matt',
                last_name: 'Smith',
                full_name: 'Matt Smith',
            },
            {
                first_name: 'Matthew',
                last_name: 'Drake',
                full_name: 'Matthew Drake',
            },
            {
                first_name: 'Yu',
                last_name: 'Lee',
                full_name: 'Yu Lee',
            },
            {
                first_name: 'Zach',
                last_name: 'Smith',
                full_name: 'Zach Smith',
            }
        ];
    }
    PeopleService.prototype.getResults = function (keyword) {
        var _this = this;
        keyword = keyword.toLowerCase();
        return this.objects.filter(function (object) {
            var value = object[_this.labelAttribute].toLowerCase();
            return value.includes(keyword);
        });
    };
    PeopleService.ctorParameters = function () { return []; };
    PeopleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PeopleService);
    return PeopleService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map