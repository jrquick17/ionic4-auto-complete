function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js ***!
    \****************************************************************************/

  /*! exports provided: AutoCompleteComponent, AutoCompleteModule, AutoCompleteOptions, BoldPrefix */

  /***/
  function node_modulesIonic4AutoCompleteFesm2015Ionic4AutoCompleteJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function () {
      return AutoCompleteComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteModule", function () {
      return AutoCompleteModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutoCompleteOptions", function () {
      return AutoCompleteOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoldPrefix", function () {
      return BoldPrefix;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AutoCompleteOptions = function AutoCompleteOptions() {
      _classCallCheck(this, AutoCompleteOptions);

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
      this.placeholder = 'Search';
      this.searchIcon = 'search';
      this.showCancelButton = false;
      this.spellcheck = 'off';
      this.type = 'search';
      this.value = '';
    };

    var AutoCompleteStyles = function AutoCompleteStyles() {
      _classCallCheck(this, AutoCompleteStyles);

      this.list = {};
      this.listItem = {};
      this.searchbar = {};
    };

    var AutoCompleteComponent_1;

    var AutoCompleteComponent = AutoCompleteComponent_1 =
    /*#__PURE__*/
    function () {
      /**
       * Create a new instance
       */
      function AutoCompleteComponent(renderer) {
        _classCallCheck(this, AutoCompleteComponent);

        this.renderer = renderer;
        this.enableBrowserAutoComplete = false;
        this.clearInvalidInput = true;
        this.disabled = false;
        this.exclude = [];
        this.frontIcon = false;
        this.hideListOnSelection = true;
        this.location = 'auto';
        this.maxResults = 8;
        this.maxSelected = null;
        this.multi = false;
        this.name = '';
        this.options = new AutoCompleteOptions();
        this.removeButtonClasses = '';
        this.removeButtonColor = 'primary';
        this.removeButtonIcon = 'close-circle';
        this.removeButtonSlot = 'end';
        this.removeDuplicateSuggestions = true;
        this.styles = new AutoCompleteStyles();
        this.useIonInput = false;
        this.onTouchedCallback = false;
        this.onChangeCallback = false;
        this.hasFocus = false;
        this.isLoading = false;
        this.focusedOption = -1;
        this.showListChanged = false;
        this.autoBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.autoFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ionAutoInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsCleared = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsHidden = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemRemoved = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.itemsShown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.keyword = '';
        this.suggestions = [];
        this._showList = false;
        this.options = new AutoCompleteOptions();
        this.defaultOpts = new AutoCompleteOptions();
        this.selected = [];
      }

      _createClass(AutoCompleteComponent, [{
        key: "ngAfterViewChecked",

        /**
         *
         */
        value: function ngAfterViewChecked() {
          if (this.showListChanged) {
            this.showListChanged = false;
            this.showList ? this.itemsShown.emit() : this.itemsHidden.emit();
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
          if (this.searchbarElem && this.searchbarElem.nativeElement && !this.searchbarElem.nativeElement.contains(event.target) || !this.inputElem && this.inputElem.nativeElement && this.inputElem.nativeElement.contains(event.target)) {
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
      }, {
        key: "keyupIonSearchbar",
        value: function keyupIonSearchbar(event, show) {
          this.getItems(event.detail.target.value, show);
        }
      }, {
        key: "keyupIonInput",
        value: function keyupIonInput(event, show) {
          this.getItems(event.target.value, show);
        }
        /**
         * Get items for auto-complete
         *
         * @param keyword
         * @param show
         */

      }, {
        key: "getItems",
        value: function getItems(keyword, show) {
          var _this = this;

          this.isLoading = true;

          if (this.promise) {
            clearTimeout(this.promise);
          }

          this.promise = setTimeout(function () {
            if (event) {
              _this.keyword = keyword;
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

              if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]) {
                result = result.asObservable();
              } else if (result instanceof Promise) {
                result = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(result);
              }

              if (result instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"]) {
                result.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
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
          }, this.options.debounce);
        }
        /**
         * Get an item's label
         *
         * @param selection
         */

      }, {
        key: "getLabel",
        value: function getLabel(selection) {
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

          return false;
        }
        /**
         * Hide item list
         */

      }, {
        key: "hideItemList",
        value: function hideItemList() {
          this.showList = this.alwaysShowList;
          this.focusedOption = -1;
        }
      }, {
        key: "highlightItem",
        value: function highlightItem(direction) {
          var max = this.suggestions.length - 1;

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
          if (this.searchbarElem) {
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
          this.showList = true;
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
          if (typeof selected !== 'undefined') {
            this.selected = selected;
            this.keyword = this.getLabel(selected);
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
          return this._showList;
        },
        set: function set(value) {
          if (this._showList === value) {
            return;
          }

          this._showList = value;
          this.showListChanged = true;
        }
      }]);

      return AutoCompleteComponent;
    }();

    AutoCompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "alwaysShowList", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "enableBrowserAutoComplete", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "clearInvalidInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "dataProvider", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "disabled", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "emptyTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "exclude", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "frontIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "hideListOnSelection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "keyword", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "location", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "maxResults", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "maxSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "multi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "options", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "removeButtonClasses", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "removeButtonColor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "removeButtonIcon", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "removeButtonSlot", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "removeDuplicateSuggestions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "selectionTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "showResultsFirst", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "styles", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "template", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "useIonInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "model", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "modelChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AutoCompleteComponent.prototype, "eager", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "autoFocus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "autoBlur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "ionAutoInput", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemsChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemsCleared", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemsHidden", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemRemoved", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemSelected", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AutoCompleteComponent.prototype, "itemsShown", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('searchbarElem', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], AutoCompleteComponent.prototype, "searchbarElem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElem', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], AutoCompleteComponent.prototype, "inputElem", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event'])], AutoCompleteComponent.prototype, "documentClickHandler", null);
    AutoCompleteComponent = AutoCompleteComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: AutoCompleteComponent_1,
        multi: true
      }],
      selector: 'ion-auto-complete',
      template: "<ng-template #defaultSelection\n             let-attrs=\"attrs\">\n    <ion-chip class=\"{{ attrs.removeButtonClasses }}\"\n              [color]=\"attrs.removeButtonColor\"\n              [outline]=\"true\">\n        <ion-icon *ngIf=\"frontIcon\"\n                  [name]=\"frontIcon\"\n                  [slot]=\"'start'\"\n                  color=\"primary\"></ion-icon>\n\n        <ion-label>{{ attrs.label }}</ion-label>\n\n        <ion-icon *ngIf=\"attrs.removeButtonIcon\"\n                  [name]=\"attrs.removeButtonIcon\"\n                  [slot]=\"attrs.removeButtonSlot\"></ion-icon>\n    </ion-chip>\n</ng-template>\n\n<div *ngIf=\"multi\">\n    <div *ngFor=\"let item of selected\"\n         class=\"selected-items\"\n         (click)=\"removeItem(item)\">\n        <ng-template [ngTemplateOutlet]=\"selectionTemplate || defaultSelection\"\n                     [ngTemplateOutletContext]=\"{\n                            attrs: {\n                              data:                item,\n                              label:               getLabel(item),\n                              removeButtonClasses: removeButtonClasses,\n                              removeButtonColor:   removeButtonColor,\n                              removeButtonIcon:    removeButtonIcon,\n                              removeButtonSlot:    removeButtonSlot\n                            }\n                         }\"></ng-template>\n    </div>\n</div>\n\n<ion-input #inputElem\n           [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n           [name]=\"name\"\n           (keyup)=\"keyupIonInput($event)\"\n           (tap)=\"handleTap($event)\"\n           [(ngModel)]=\"keyword\"\n           (ngModelChange)=\"updateModel($event)\"\n           [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n           [type]=\"options.type == null ? defaultOpts.type : options.type\"\n           [clearOnEdit]=\"options.clearOnEdit == null ? defaultOpts.clearOnEdit : options.clearOnEdit\"\n           [clearInput]=\"options.clearInput == null ? defaultOpts.clearInput : options.clearInput\"\n           [color]=\"options.color == null ? null : options.color\"\n           [mode]=\"options.mode == null ? defaultOpts.mode : options.mode\"\n           [disabled]=\"disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)\"\n           [ngClass]=\"{ 'hidden': !useIonInput, 'loading': isLoading }\"\n           [ngStyle]=\"styles.searchbar\"\n           (keyup.arrowDown)=\"highlightItem(-1)\"\n           (keyup.arrowUp)=\"highlightItem(1)\"\n           (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n           (keyup.escape)=\"hideItemList()\"\n           (ionFocus)=\"onFocus($event)\"\n           (ionBlur)=\"onBlur($event)\"></ion-input>\n\n<ion-searchbar #searchbarElem\n               [autocomplete]=\"enableBrowserAutoComplete ? 'on' : 'off'\"\n               [name]=\"name\"\n               [animated]=\"options.animated == null ? defaultOpts.animated : options.animated\"\n               (ionInput)=\"keyupIonSearchbar($event)\"\n               (tap)=\"handleTap($event)\"\n               [(ngModel)]=\"keyword\"\n               (ngModelChange)=\"updateModel($event)\"\n               [cancelButtonIcon]=\"options.cancelButtonIcon == null ? defaultOpts.cancelButtonIcon : options.cancelButtonIcon\"\n               [cancelButtonText]=\"options.cancelButtonText == null ? defaultOpts.cancelButtonText : options.cancelButtonText\"\n               [clearIcon]=\"options.clearIcon == null ? defaultOpts.clearIcon : options.clearIcon\"\n               [color]=\"options.color == null ? null : options.color\"\n               [showCancelButton]=\"options.showCancelButton == null ?\n                                        (defaultOpts.showCancelButton ? 'always' : 'never') :\n                                        (options.showCancelButton ? 'always' : 'never')\"\n               [debounce]=\"options.debounce == null ? defaultOpts.debounce : options.debounce\"\n               [placeholder]=\"options.placeholder == null ? defaultOpts.placeholder : options.placeholder\"\n               [autocorrect]=\"options.autocorrect == null ? defaultOpts.autocorrect : options.autocorrect\"\n               [mode]=\"options.mode == null ? defaultOpts.mode : options.mode\"\n               [searchIcon]=\"options.searchIcon == null ? defaultOpts.searchIcon : options.searchIcon\"\n               [spellcheck]=\"options.spellcheck == null ? defaultOpts.spellcheck : options.spellcheck\"\n               [type]=\"options.type == null ? defaultOpts.type : options.type\"\n               [ngClass]=\"{ 'hidden': useIonInput, 'loading': isLoading, 'disabled': disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected) }\"\n               [ngStyle]=\"styles.searchbar\"\n               (keyup.arrowDown)=\"highlightItem(-1)\"\n               (keyup.arrowUp)=\"highlightItem(1)\"\n               (keyup.enter)=\"handleSelectTap($event, suggestions[focusedOption])\"\n               (keyup.escape)=\"hideItemList()\"\n               (ionClear)=\"clickClear()\"\n               (ionFocus)=\"onFocus($event)\"\n               (ionBlur)=\"onBlur($event)\"></ion-searchbar>\n\n<ng-template #defaultTemplate\n             let-attrs=\"attrs\">\n    <span [innerHTML]='attrs.label | boldprefix:attrs.keyword'></span>\n</ng-template>\n\n<ng-template #defaultEmptyTemplate\n             let-attrs=\"attrs\"\n             class=\"ion-text-center\">\n    {{ options.noItems }}\n</ng-template>\n\n<ul *ngIf=\"!(disabled || (this.maxSelected !== null && this.selected.length >= this.maxSelected)) && suggestions.length > 0 && showList\"\n    [ngStyle]=\"listStyles()\">\n    <li *ngFor=\"let suggestion of suggestions| slice:0:maxResults; let index = index\"\n        [ngClass]=\"{ 'focus': focusedOption === index }\"\n        [ngStyle]=\"styles.listItem\"\n        (click)=\"handleSelectTap($event, suggestion)\"\n        (tap)=\"handleSelectTap($event, suggestion)\">\n        <ng-template [ngTemplateOutlet]=\"template || defaultTemplate\"\n                     [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          data:               suggestion,\n                          label:              getLabel(suggestion),\n                          keyword:            keyword,\n                          formValue:          getFormValue(suggestion),\n                          labelAttribute:     getLabel(suggestion),\n                          formValueAttribute: getFormValue(suggestion)\n                        }\n                     }\"></ng-template>\n    </li>\n</ul>\n\n<ul *ngIf=\"suggestions.length === 0 && showList && options.noItems\"\n    [ngStyle]=\"listStyles()\">\n    <li [ngStyle]=\"styles.listItem\">\n        <ng-template [ngTemplateOutlet]=\"emptyTemplate || defaultEmptyTemplate\"\n                     [ngTemplateOutletContext]=\"{\n                        attrs:{\n                          keyword: keyword\n                        }\n                     }\"></ng-template>\n    </li>\n</ul>\n",
      styles: ["ion-auto-complete{overflow:hidden!important;width:90vw;display:inline-block}ion-auto-complete ion-searchbar{padding:1px!important}ion-auto-complete .disabled input.searchbar-input{pointer-events:none;cursor:default}ion-auto-complete ul{position:absolute;width:90vw;margin-top:0;background:#fff;list-style-type:none;padding:0;left:16px;z-index:999;box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}ion-auto-complete ul li{padding:15px;border-bottom:1px solid #c1c1c1}ion-auto-complete ul ion-auto-complete-item{height:40px;width:100%}ion-auto-complete ul li:last-child{border:none}ion-auto-complete ul li.focus,ion-auto-complete ul li:focus,ion-auto-complete ul li:hover{cursor:pointer;background:#f1f1f1}ion-auto-complete .hidden{display:none}ion-auto-complete .loading input.searchbar-input{background:url(/assets/loading.gif) right 4px center/25px 25px no-repeat #fff}ion-auto-complete .searchbar-clear-button.sc-ion-searchbar-md{right:34px}ion-auto-complete .selected-items{float:left}"]
    })], AutoCompleteComponent);
    /**
     * Bolds the beginning of the matching string in the item
     */

    var BoldPrefix =
    /*#__PURE__*/
    function () {
      function BoldPrefix() {
        _classCallCheck(this, BoldPrefix);
      }

      _createClass(BoldPrefix, [{
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

    BoldPrefix = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'boldprefix'
    }), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BoldPrefix);
    var AutoCompleteModule_1;

    var AutoCompleteModule = AutoCompleteModule_1 =
    /*#__PURE__*/
    function () {
      function AutoCompleteModule() {
        _classCallCheck(this, AutoCompleteModule);
      }

      _createClass(AutoCompleteModule, null, [{
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

    AutoCompleteModule = AutoCompleteModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [AutoCompleteComponent, BoldPrefix],
      exports: [AutoCompleteComponent, BoldPrefix],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"]]
    })], AutoCompleteModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ionic4-auto-complete.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-template/custom-template.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-template/custom-template.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCustomTemplateCustomTemplateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-template #empty\n             let-attrs=\"attrs\">\n    <ion-text class=\"ion-text-right ion-padding-vertical\">That country does not exist!</ion-text>\n</ng-template>\n\n<ng-template #selection\n             let-attrs=\"attrs\">\n        <ion-img class=\"flag ion-float-left ion-margin-horizontal\"\n                 style=\"height: 50px;\"\n                 [slot]=\"'start'\"\n                 [src]=\"attrs.data.flag\"></ion-img>\n</ng-template>\n\n<ng-template #suggestions\n             let-attrs=\"attrs\">\n    <ion-item>\n        <ion-img class=\"flag\"\n                 [slot]=\"'start'\"\n                 [src]=\"attrs.data.flag\"></ion-img>\n\n        <ion-text>\n            <span [innerHtml]=\"attrs.data.name | boldprefix:attrs.keyword\"></span> ({{ attrs.data.nativeName }})\n        </ion-text>\n    </ion-item>\n</ng-template>\n\n<ion-auto-complete [(model)]=\"selected\"\n                   [eager]=\"true\"\n                   [multi]=\"true\"\n                   [dataProvider]=\"provider\"\n                   [disabled]=\"false\"\n                   [maxSelected]=\"3\"\n                   [template]=\"suggestions\"\n                   [emptyTemplate]=\"empty\"\n                   [selectionTemplate]=\"selection\"\n                   (blur)=\"on('blur', $event)\"\n                   (autoFocus)=\"on('autoFocus', $event)\"\n                   (autoBlur)=\"on('autoBlur', $event)\"\n                   (focus)=\"on('focus', $event)\"\n                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                   (itemsChange)=\"on('itemsChange', $event)\"\n                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                   (itemSelected)=\"on('itemSelected', $event)\"\n                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-function/multi-function.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-function/multi-function.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMultiFunctionMultiFunctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-row>\n    <ion-col [size]=\"12\">\n        <ion-card style=\"overflow: inherit; padding: 15px;\">\n            <ion-card-title class=\"ion-text-center\">\n                Include\n            </ion-card-title>\n\n            <ion-item style=\"overflow: inherit;\">\n                <ion-auto-complete [(model)]=\"selected\"\n                                   [multi]=\"true\"\n                                   [dataProvider]=\"provider\"\n                                   [disabled]=\"false\"\n                                   [exclude]=\"excluded\"\n                                   [options]=\"selectedOptions\"\n                                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                                   [removeButtonColor]=\"'dark'\"\n                                   [useIonInput]=\"false\"\n                                   (blur)=\"on('blur', $event)\"\n                                   (autoFocus)=\"on('autoFocus', $event)\"\n                                   (autoBlur)=\"on('autoBlur', $event)\"\n                                   (focus)=\"on('focus', $event)\"\n                                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                                   (itemsChange)=\"on('itemsChange', $event)\"\n                                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                                   (itemSelected)=\"on('itemSelected', $event)\"\n                                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n            </ion-item>\n        </ion-card>\n    </ion-col>\n</ion-row>\n\n<ion-row>\n    <ion-col [size]=\"12\">\n        <ion-card style=\"overflow: inherit; padding: 15px;\">\n            <ion-card-title class=\"ion-text-center\">\n                Exclude\n            </ion-card-title>\n\n            <ion-item style=\"overflow: inherit;\">\n                <ion-auto-complete [(model)]=\"excluded\"\n                                   [multi]=\"true\"\n                                   [dataProvider]=\"provider\"\n                                   [disabled]=\"false\"\n                                   [exclude]=\"selected\"\n                                   [options]=\"excludedOptions\"\n                                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                                   [removeButtonColor]=\"'dark'\"\n                                   [useIonInput]=\"true\"\n                                   (blur)=\"on('blur', $event)\"\n                                   (autoFocus)=\"on('autoFocus', $event)\"\n                                   (autoBlur)=\"on('autoBlur', $event)\"\n                                   (focus)=\"on('focus', $event)\"\n                                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                                   (itemsChange)=\"on('itemsChange', $event)\"\n                                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                                   (itemSelected)=\"on('itemSelected', $event)\"\n                                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n            </ion-item>\n        </ion-card>\n    </ion-col>\n</ion-row>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-function/simple-function.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-function/simple-function.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSimpleFunctionSimpleFunctionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-auto-complete [(model)]=\"selected\"\n                   [multi]=\"false\"\n                   [dataProvider]=\"provider\"\n                   [disabled]=\"false\"\n                   [options]=\"options\"\n                   [removeButtonIcon]=\"'assets/icons/clear.svg'\"\n                   [removeButtonColor]=\"'dark'\"\n                   (blur)=\"on('blur', $event)\"\n                   (autoFocus)=\"on('autoFocus', $event)\"\n                   (autoBlur)=\"on('autoBlur', $event)\"\n                   (focus)=\"on('focus', $event)\"\n                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                   (itemsChange)=\"on('itemsChange', $event)\"\n                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                   (itemSelected)=\"on('itemSelected', $event)\"\n                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSimpleServiceSimpleServiceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-auto-complete [(model)]=\"selected\"\n                   [multi]=\"false\"\n                   [dataProvider]=\"provider\"\n                   [disabled]=\"false\"\n                   [maxResults]=\"6\"\n                   [removeButtonColor]=\"'dark'\"\n                   (ionAutoInput)=\"on('ionAutoInput', $event)\"\n                   (itemsChange)=\"on('itemsChange', $event)\"\n                   (itemsCleared)=\"on('itemsCleared', $event)\"\n                   (itemsHidden)=\"on('itemsHidden', $event)\"\n                   (itemRemoved)=\"on('itemRemoved', $event)\"\n                   (itemSelected)=\"on('itemSelected', $event)\"\n                   (itemsShown)=\"on('itemsShown', $event)\"></ion-auto-complete>\n\n<ion-button [size]=\"'full'\"\n            (click)=\"random()\">\n    Random\n</ion-button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Demo: ionic4-auto-complete\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list style=\"height: 100%;\">\n    <ion-segment (ionChange)=\"onClickSegment($event)\">\n      <ion-segment-button *ngFor=\"let segment of segments\"\n                          [value]=\"segment.key\"\n                          [checked]=\"segment.key === selectedSegment\">\n        <ion-label>\n          {{ segment.label }}\n        </ion-label>\n      </ion-segment-button>\n    </ion-segment>\n\n    <ion-item-divider></ion-item-divider>\n\n    <ion-card *ngIf=\"selectedSegment === 'simple-function'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Anybody\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <simple-function></simple-function>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'simple-service'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Any Country\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <simple-service></simple-service>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'multi-function'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select Multiple People\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <multi-function></multi-function>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card *ngIf=\"selectedSegment === 'custom-template'\"\n              style=\"height: 100%;\">\n      <ion-card-content>\n        <ion-row>\n          <ion-col class=\"label\">\n            Select up to 3 Countries\n          </ion-col>\n          <ion-col [size]=\"12\">\n            <custom-template></custom-template>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </ion-list>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/components/custom-template/custom-template.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/custom-template/custom-template.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCustomTemplateCustomTemplateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flag {\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qcnF1aWNrL2RldmVsb3BtZW50L2VuY291bnRpbmcvaW9uaWM0LWF1dG8tY29tcGxldGUvZGVtby9zcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXRlbXBsYXRlL2N1c3RvbS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jdXN0b20tdGVtcGxhdGUvY3VzdG9tLXRlbXBsYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3VzdG9tLXRlbXBsYXRlL2N1c3RvbS10ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGFnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiIsIi5mbGFnIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/custom-template/custom-template.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/custom-template/custom-template.component.ts ***!
    \*************************************************************************/

  /*! exports provided: CustomTemplateComponent */

  /***/
  function srcAppComponentsCustomTemplateCustomTemplateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTemplateComponent", function () {
      return CustomTemplateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/simple-service.service */
    "./src/app/services/simple-service.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomTemplateComponent =
    /*#__PURE__*/
    function () {
      function CustomTemplateComponent(provider) {
        _classCallCheck(this, CustomTemplateComponent);

        this.provider = provider;
        this.selected = [];
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.type = 'add-friend.svg';
      }

      _createClass(CustomTemplateComponent, [{
        key: "on",
        value: function on(output, event) {
          console.log(output); // console.log(event);
        }
      }]);

      return CustomTemplateComponent;
    }();

    CustomTemplateComponent.ctorParameters = function () {
      return [{
        type: _services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__["SimpleService"]
      }];
    };

    CustomTemplateComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'custom-template',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./custom-template.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/custom-template/custom-template.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./custom-template.component.scss */
      "./src/app/components/custom-template/custom-template.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__["SimpleService"]])], CustomTemplateComponent);
    /***/
  },

  /***/
  "./src/app/components/custom-template/custom-template.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/custom-template/custom-template.module.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomTemplateModule */

  /***/
  function srcAppComponentsCustomTemplateCustomTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTemplateModule", function () {
      return CustomTemplateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _custom_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./custom-template.component */
    "./src/app/components/custom-template/custom-template.component.ts");
    /* harmony import */


    var _services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/simple-function.service */
    "./src/app/services/simple-function.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CustomTemplateModule = function CustomTemplateModule() {
      _classCallCheck(this, CustomTemplateModule);
    };

    CustomTemplateModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_custom_template_component__WEBPACK_IMPORTED_MODULE_5__["CustomTemplateComponent"]],
      entryComponents: [_custom_template_component__WEBPACK_IMPORTED_MODULE_5__["CustomTemplateComponent"]],
      exports: [_custom_template_component__WEBPACK_IMPORTED_MODULE_5__["CustomTemplateComponent"]],
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      providers: [_services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__["SimpleFunction"]]
    })], CustomTemplateModule);
    /***/
  },

  /***/
  "./src/app/components/multi-function/multi-function.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/multi-function/multi-function.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMultiFunctionMultiFunctionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXVsdGktZnVuY3Rpb24vbXVsdGktZnVuY3Rpb24uY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/multi-function/multi-function.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/multi-function/multi-function.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MultiFunctionComponent */

  /***/
  function srcAppComponentsMultiFunctionMultiFunctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiFunctionComponent", function () {
      return MultiFunctionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/simple-function.service */
    "./src/app/services/simple-function.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MultiFunctionComponent =
    /*#__PURE__*/
    function () {
      function MultiFunctionComponent(provider) {
        _classCallCheck(this, MultiFunctionComponent);

        this.provider = provider;
        this.excluded = [];
        this.selected = [];
        this.selectedOptions = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteOptions"]();
        this.selectedOptions.autocomplete = 'on';
        this.selectedOptions.debounce = 750;
        this.selectedOptions.placeholder = 'Filter and select multiple..';
        this.selectedOptions.searchIcon = 'assets/icons/add-user.svg';
        this.selectedOptions.type = 'search';
        this.excludedOptions = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteOptions"]();
        this.excludedOptions.autocomplete = 'on';
        this.excludedOptions.debounce = 750;
        this.excludedOptions.placeholder = 'Filter and select multiple to exclude..';
        this.excludedOptions.searchIcon = 'assets/icons/add-user.svg';
        this.excludedOptions.type = 'search';
      }

      _createClass(MultiFunctionComponent, [{
        key: "on",
        value: function on(output, event) {
          console.log(output); // console.log(event);
        }
      }]);

      return MultiFunctionComponent;
    }();

    MultiFunctionComponent.ctorParameters = function () {
      return [{
        type: _services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__["SimpleFunction"]
      }];
    };

    MultiFunctionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'multi-function',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./multi-function.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/multi-function/multi-function.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./multi-function.component.scss */
      "./src/app/components/multi-function/multi-function.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__["SimpleFunction"]])], MultiFunctionComponent);
    /***/
  },

  /***/
  "./src/app/components/multi-function/multi-function.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/multi-function/multi-function.module.ts ***!
    \********************************************************************/

  /*! exports provided: MultiFunctionModule */

  /***/
  function srcAppComponentsMultiFunctionMultiFunctionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiFunctionModule", function () {
      return MultiFunctionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _multi_function_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./multi-function.component */
    "./src/app/components/multi-function/multi-function.component.ts");
    /* harmony import */


    var _services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/simple-function.service */
    "./src/app/services/simple-function.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MultiFunctionModule = function MultiFunctionModule() {
      _classCallCheck(this, MultiFunctionModule);
    };

    MultiFunctionModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_multi_function_component__WEBPACK_IMPORTED_MODULE_5__["MultiFunctionComponent"]],
      entryComponents: [_multi_function_component__WEBPACK_IMPORTED_MODULE_5__["MultiFunctionComponent"]],
      exports: [_multi_function_component__WEBPACK_IMPORTED_MODULE_5__["MultiFunctionComponent"]],
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      providers: [_services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__["SimpleFunction"]]
    })], MultiFunctionModule);
    /***/
  },

  /***/
  "./src/app/components/simple-function/simple-function.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/components/simple-function/simple-function.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSimpleFunctionSimpleFunctionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2ltcGxlLWZ1bmN0aW9uL3NpbXBsZS1mdW5jdGlvbi5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/components/simple-function/simple-function.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/components/simple-function/simple-function.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SimpleFunctionComponent */

  /***/
  function srcAppComponentsSimpleFunctionSimpleFunctionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleFunctionComponent", function () {
      return SimpleFunctionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/simple-function.service */
    "./src/app/services/simple-function.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleFunctionComponent =
    /*#__PURE__*/
    function () {
      function SimpleFunctionComponent(provider) {
        _classCallCheck(this, SimpleFunctionComponent);

        this.provider = provider;
        this.selected = '';
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.cancelButtonIcon = 'assets/icons/clear.svg';
        this.options.clearIcon = 'assets/icons/clear.svg';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.searchIcon = 'assets/icons/add-user.svg';
        this.options.type = 'search';
      }

      _createClass(SimpleFunctionComponent, [{
        key: "on",
        value: function on(output, event) {
          console.log(output); // console.log(event);
        }
      }]);

      return SimpleFunctionComponent;
    }();

    SimpleFunctionComponent.ctorParameters = function () {
      return [{
        type: _services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__["SimpleFunction"]
      }];
    };

    SimpleFunctionComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'simple-function',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./simple-function.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-function/simple-function.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./simple-function.component.scss */
      "./src/app/components/simple-function/simple-function.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_simple_function_service__WEBPACK_IMPORTED_MODULE_2__["SimpleFunction"]])], SimpleFunctionComponent);
    /***/
  },

  /***/
  "./src/app/components/simple-function/simple-function.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/simple-function/simple-function.module.ts ***!
    \**********************************************************************/

  /*! exports provided: SimpleFunctionModule */

  /***/
  function srcAppComponentsSimpleFunctionSimpleFunctionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleFunctionModule", function () {
      return SimpleFunctionModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _simple_function_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./simple-function.component */
    "./src/app/components/simple-function/simple-function.component.ts");
    /* harmony import */


    var _services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/simple-function.service */
    "./src/app/services/simple-function.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleFunctionModule = function SimpleFunctionModule() {
      _classCallCheck(this, SimpleFunctionModule);
    };

    SimpleFunctionModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_simple_function_component__WEBPACK_IMPORTED_MODULE_5__["SimpleFunctionComponent"]],
      entryComponents: [_simple_function_component__WEBPACK_IMPORTED_MODULE_5__["SimpleFunctionComponent"]],
      exports: [_simple_function_component__WEBPACK_IMPORTED_MODULE_5__["SimpleFunctionComponent"]],
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      providers: [_services_simple_function_service__WEBPACK_IMPORTED_MODULE_6__["SimpleFunction"]]
    })], SimpleFunctionModule);
    /***/
  },

  /***/
  "./src/app/components/simple-service/simple-service.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/simple-service/simple-service.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSimpleServiceSimpleServiceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2ltcGxlLXNlcnZpY2Uvc2ltcGxlLXNlcnZpY2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/simple-service/simple-service.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/simple-service/simple-service.component.ts ***!
    \***********************************************************************/

  /*! exports provided: SimpleServiceComponent */

  /***/
  function srcAppComponentsSimpleServiceSimpleServiceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleServiceComponent", function () {
      return SimpleServiceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/simple-service.service */
    "./src/app/services/simple-service.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleServiceComponent =
    /*#__PURE__*/
    function () {
      function SimpleServiceComponent(provider) {
        _classCallCheck(this, SimpleServiceComponent);

        this.provider = provider;
        this.selected = '';
        this.options = new ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_1__["AutoCompleteOptions"]();
        this.options.autocomplete = 'on';
        this.options.debounce = 750;
        this.options.placeholder = 'Type text to search..';
        this.options.type = 'add-friend.svg';
      }

      _createClass(SimpleServiceComponent, [{
        key: "random",
        value: function random() {
          var _this2 = this;

          this.provider.getResults().subscribe(function (results) {
            var count = results.length;
            _this2.selected = results[Math.round(Math.random() * count)];
          });
        }
      }, {
        key: "on",
        value: function on(output, event) {
          console.log(output); // console.log(event);
        }
      }]);

      return SimpleServiceComponent;
    }();

    SimpleServiceComponent.ctorParameters = function () {
      return [{
        type: _services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__["SimpleService"]
      }];
    };

    SimpleServiceComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'simple-service',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./simple-service.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/simple-service/simple-service.component.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./simple-service.component.scss */
      "./src/app/components/simple-service/simple-service.component.scss"))["default"]]
    }), __metadata("design:paramtypes", [_services_simple_service_service__WEBPACK_IMPORTED_MODULE_2__["SimpleService"]])], SimpleServiceComponent);
    /***/
  },

  /***/
  "./src/app/components/simple-service/simple-service.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/simple-service/simple-service.module.ts ***!
    \********************************************************************/

  /*! exports provided: SimpleServiceModule */

  /***/
  function srcAppComponentsSimpleServiceSimpleServiceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleServiceModule", function () {
      return SimpleServiceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ionic4-auto-complete */
    "./node_modules/ionic4-auto-complete/fesm2015/ionic4-auto-complete.js");
    /* harmony import */


    var _simple_service_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./simple-service.component */
    "./src/app/components/simple-service/simple-service.component.ts");
    /* harmony import */


    var _services_simple_service_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/simple-service.service */
    "./src/app/services/simple-service.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleServiceModule = function SimpleServiceModule() {
      _classCallCheck(this, SimpleServiceModule);
    };

    SimpleServiceModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_simple_service_component__WEBPACK_IMPORTED_MODULE_5__["SimpleServiceComponent"]],
      entryComponents: [_simple_service_component__WEBPACK_IMPORTED_MODULE_5__["SimpleServiceComponent"]],
      exports: [_simple_service_component__WEBPACK_IMPORTED_MODULE_5__["SimpleServiceComponent"]],
      imports: [ionic4_auto_complete__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]],
      providers: [_services_simple_service_service__WEBPACK_IMPORTED_MODULE_6__["SimpleService"]]
    })], SimpleServiceModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");
    /* harmony import */


    var _components_custom_template_custom_template_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../components/custom-template/custom-template.module */
    "./src/app/components/custom-template/custom-template.module.ts");
    /* harmony import */


    var _components_multi_function_multi_function_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/multi-function/multi-function.module */
    "./src/app/components/multi-function/multi-function.module.ts");
    /* harmony import */


    var _components_simple_function_simple_function_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../components/simple-function/simple-function.module */
    "./src/app/components/simple-function/simple-function.module.ts");
    /* harmony import */


    var _components_simple_service_simple_service_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/simple-service/simple-service.module */
    "./src/app/components/simple-service/simple-service.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _components_custom_template_custom_template_module__WEBPACK_IMPORTED_MODULE_6__["CustomTemplateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_multi_function_multi_function_module__WEBPACK_IMPORTED_MODULE_7__["MultiFunctionModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
      }]), _components_simple_function_simple_function_module__WEBPACK_IMPORTED_MODULE_8__["SimpleFunctionModule"], _components_simple_service_simple_service_module__WEBPACK_IMPORTED_MODULE_9__["SimpleServiceModule"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomePage =
    /*#__PURE__*/
    function () {
      function HomePage(route, router) {
        _classCallCheck(this, HomePage);

        this.route = route;
        this.router = router;
        this.segments = [{
          key: 'simple-function',
          label: 'Simple Function'
        }, {
          key: 'simple-service',
          label: 'Data Provider'
        }, {
          key: 'multi-function',
          label: 'Multi Select'
        }, {
          key: 'custom-template',
          label: 'Custom Template'
        }];
        this.selectedSegment = this.segments[0].key;
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.fragment.subscribe(function (fragment) {
            _this3.setSegment(fragment);
          });
        }
      }, {
        key: "onClickSegment",
        value: function onClickSegment(event) {
          if (event.detail && typeof event.detail.value === 'string') {
            var segment = event.detail.value;
            this.setSegment(segment);
          }
        }
      }, {
        key: "setSegment",
        value: function setSegment(segment) {
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
        }
      }]);

      return HomePage;
    }();

    HomePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }];
    };

    HomePage = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'home-page',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [__importDefault(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])], HomePage);
    /***/
  },

  /***/
  "./src/app/services/simple-function.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/simple-function.service.ts ***!
    \*****************************************************/

  /*! exports provided: SimpleFunction */

  /***/
  function srcAppServicesSimpleFunctionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleFunction", function () {
      return SimpleFunction;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleFunction =
    /*#__PURE__*/
    function () {
      function SimpleFunction() {
        _classCallCheck(this, SimpleFunction);

        this.labelAttribute = 'full_name';
        this.objects = [{
          first_name: 'Dominic',
          last_name: 'Elliot',
          full_name: 'Dominic Elliot'
        }, {
          first_name: 'Duke',
          last_name: 'Ellington',
          full_name: 'Duke Ellington'
        }, {
          first_name: 'Jeremy',
          last_name: 'Quick',
          full_name: 'Jeremy Quick'
        }, {
          first_name: 'Matt',
          last_name: 'Smith',
          full_name: 'Matt Smith'
        }, {
          first_name: 'Matthew',
          last_name: 'Drake',
          full_name: 'Matthew Drake'
        }, {
          first_name: 'Yu',
          last_name: 'Lee',
          full_name: 'Yu Lee'
        }, {
          first_name: 'Zach',
          last_name: 'Smith',
          full_name: 'Zach Smith'
        }];
      }

      _createClass(SimpleFunction, [{
        key: "getResults",
        value: function getResults(keyword) {
          var _this4 = this;

          keyword = keyword.toLowerCase();
          return this.objects.filter(function (object) {
            var value = object[_this4.labelAttribute].toLowerCase();

            return value.includes(keyword);
          });
        }
      }]);

      return SimpleFunction;
    }();

    SimpleFunction = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [])], SimpleFunction);
    /***/
  },

  /***/
  "./src/app/services/simple-service.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/simple-service.service.ts ***!
    \****************************************************/

  /*! exports provided: SimpleService */

  /***/
  function srcAppServicesSimpleServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleService", function () {
      return SimpleService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SimpleService =
    /*#__PURE__*/
    function () {
      function SimpleService(http) {
        _classCallCheck(this, SimpleService);

        this.http = http;
        this.labelAttribute = 'name';
        this.countries = [];
      }

      _createClass(SimpleService, [{
        key: "getResults",
        value: function getResults(keyword) {
          var _this5 = this;

          keyword = typeof keyword === 'string' ? keyword : '';
          var observable;

          if (this.countries.length === 0) {
            observable = this.http.get('https://restcountries.eu/rest/v2/all').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (results) {
              if (results) {
                _this5.countries = results;
              }

              return _this5.countries;
            }));
          } else {
            observable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.countries);
          }

          return observable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) {
            return result.filter(function (item) {
              return item.name.toLowerCase().startsWith(keyword.toLowerCase());
            });
          }));
        }
      }]);

      return SimpleService;
    }();

    SimpleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    SimpleService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], SimpleService);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-latest.js.map