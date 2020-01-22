function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_col, ion_grid, ion_row */

  /***/
  function node_modulesIonicCoreDistEsmIonCol_3EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_col", function () {
      return Col;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_grid", function () {
      return Grid;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_row", function () {
      return Row;
    });
    /* harmony import */


    var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-feeeff0d.js */
    "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
    /* harmony import */


    var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./config-3c7f3790.js */
    "./node_modules/@ionic/core/dist/esm/config-3c7f3790.js");

    var SIZE_TO_MEDIA = {
      'xs': '(min-width: 0px)',
      'sm': '(min-width: 576px)',
      'md': '(min-width: 768px)',
      'lg': '(min-width: 992px)',
      'xl': '(min-width: 1200px)'
    }; // Check if the window matches the media query
    // at the breakpoint passed
    // e.g. matchBreakpoint('sm') => true if screen width exceeds 576px

    var matchBreakpoint = function matchBreakpoint(breakpoint) {
      if (breakpoint === undefined || breakpoint === '') {
        return true;
      }

      if (window.matchMedia) {
        var mediaQuery = SIZE_TO_MEDIA[breakpoint];
        return window.matchMedia(mediaQuery).matches;
      }

      return false;
    };

    var win = window;
    var SUPPORTS_VARS = !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'));
    var BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl'];

    var Col =
    /*#__PURE__*/
    function () {
      function Col(hostRef) {
        _classCallCheck(this, Col);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Col, [{
        key: "onResize",
        value: function onResize() {
          this.el.forceUpdate();
        } // Loop through all of the breakpoints to see if the media query
        // matches and grab the column value from the relevant prop if so

      }, {
        key: "getColumns",
        value: function getColumns(property) {
          var matched;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = BREAKPOINTS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var breakpoint = _step.value;
              var matches = matchBreakpoint(breakpoint); // Grab the value of the property, if it exists and our
              // media query matches we return the value

              var columns = this[property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)];

              if (matches && columns !== undefined) {
                matched = columns;
              }
            } // Return the last matched columns since the breakpoints
            // increase in size and we want to return the largest match

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

          return matched;
        }
      }, {
        key: "calculateSize",
        value: function calculateSize() {
          var columns = this.getColumns('size'); // If size wasn't set for any breakpoint
          // or if the user set the size without a value
          // it means we need to stick with the default and return
          // e.g. <ion-col size-md>

          if (!columns || columns === '') {
            return;
          } // If the size is set to auto then don't calculate a size


          var colSize = columns === 'auto' ? 'auto' // If CSS supports variables we should use the grid columns var
          : SUPPORTS_VARS ? "calc(calc(".concat(columns, " / var(--ion-grid-columns, 12)) * 100%)") // Convert the columns to a percentage by dividing by the total number
          // of columns (12) and then multiplying by 100
          : columns / 12 * 100 + '%';
          return {
            'flex': "0 0 ".concat(colSize),
            'width': "".concat(colSize),
            'max-width': "".concat(colSize)
          };
        } // Called by push, pull, and offset since they use the same calculations

      }, {
        key: "calculatePosition",
        value: function calculatePosition(property, modifier) {
          var columns = this.getColumns(property);

          if (!columns) {
            return;
          } // If the number of columns passed are greater than 0 and less than
          // 12 we can position the column, else default to auto


          var amount = SUPPORTS_VARS // If CSS supports variables we should use the grid columns var
          ? "calc(calc(".concat(columns, " / var(--ion-grid-columns, 12)) * 100%)") // Convert the columns to a percentage by dividing by the total number
          // of columns (12) and then multiplying by 100
          : columns > 0 && columns < 12 ? columns / 12 * 100 + '%' : 'auto';
          return _defineProperty({}, modifier, amount);
        }
      }, {
        key: "calculateOffset",
        value: function calculateOffset(isRTL) {
          return this.calculatePosition('offset', isRTL ? 'margin-right' : 'margin-left');
        }
      }, {
        key: "calculatePull",
        value: function calculatePull(isRTL) {
          return this.calculatePosition('pull', isRTL ? 'left' : 'right');
        }
      }, {
        key: "calculatePush",
        value: function calculatePush(isRTL) {
          return this.calculatePosition('push', isRTL ? 'right' : 'left');
        }
      }, {
        key: "render",
        value: function render() {
          var isRTL = document.dir === 'rtl';
          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": _defineProperty({}, mode, true),
            style: Object.assign(Object.assign(Object.assign(Object.assign({}, this.calculateOffset(isRTL)), this.calculatePull(isRTL)), this.calculatePush(isRTL)), this.calculateSize())
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{padding-left:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;width:100%;max-width:100%;min-height:1px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xs,var(--ion-grid-column-padding,5px))}}\@media (min-width:576px){:host{padding-left:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-sm,var(--ion-grid-column-padding,5px))}}}\@media (min-width:768px){:host{padding-left:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-md,var(--ion-grid-column-padding,5px))}}}\@media (min-width:992px){:host{padding-left:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-lg,var(--ion-grid-column-padding,5px))}}}\@media (min-width:1200px){:host{padding-left:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-right:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-top:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-bottom:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-start:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));-webkit-padding-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px));padding-inline-end:var(--ion-grid-column-padding-xl,var(--ion-grid-column-padding,5px))}}}";
        }
      }]);

      return Col;
    }();

    var Grid =
    /*#__PURE__*/
    function () {
      function Grid(hostRef) {
        _classCallCheck(this, Grid);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * If `true`, the grid will have a fixed width based on the screen size.
         */

        this.fixed = false;
      }

      _createClass(Grid, [{
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'grid-fixed', this.fixed), _class2)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{padding-left:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));margin-left:auto;margin-right:auto;display:block;-ms-flex:1;flex:1}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xs,var(--ion-grid-padding,5px))}}\@media (min-width:576px){:host{padding-left:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-sm,var(--ion-grid-padding,5px))}}}\@media (min-width:768px){:host{padding-left:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-md,var(--ion-grid-padding,5px))}}}\@media (min-width:992px){:host{padding-left:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-lg,var(--ion-grid-padding,5px))}}}\@media (min-width:1200px){:host{padding-left:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-right:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-top:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-bottom:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px))}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-start:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));-webkit-padding-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));padding-inline-end:var(--ion-grid-padding-xl,var(--ion-grid-padding,5px));margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}}:host(.grid-fixed){width:var(--ion-grid-width-xs,var(--ion-grid-width,100%));max-width:100%}\@media (min-width:576px){:host(.grid-fixed){width:var(--ion-grid-width-sm,var(--ion-grid-width,540px))}}\@media (min-width:768px){:host(.grid-fixed){width:var(--ion-grid-width-md,var(--ion-grid-width,720px))}}\@media (min-width:992px){:host(.grid-fixed){width:var(--ion-grid-width-lg,var(--ion-grid-width,960px))}}\@media (min-width:1200px){:host(.grid-fixed){width:var(--ion-grid-width-xl,var(--ion-grid-width,1140px))}}:host([no-padding]),:host([no-padding]) ::slotted(ion-col){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}";
        }
      }]);

      return Grid;
    }();

    var Row =
    /*#__PURE__*/
    function () {
      function Row(hostRef) {
        _classCallCheck(this, Row);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(Row, [{
        key: "render",
        value: function render() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            "class": Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}";
        }
      }]);

      return Row;
    }();
    /***/

  }
}]);
//# sourceMappingURL=21-latest.js.map