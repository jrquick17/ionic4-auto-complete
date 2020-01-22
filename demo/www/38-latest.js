function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js":
  /*!******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js ***!
    \******************************************************************/

  /*! exports provided: ion_menu, ion_menu_button, ion_menu_controller, ion_menu_toggle */

  /***/
  function node_modulesIonicCoreDistEsmIonMenu_4MdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu", function () {
      return Menu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_button", function () {
      return MenuButton;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_controller", function () {
      return MenuController;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_menu_toggle", function () {
      return MenuToggle;
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


    var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./animation-af478fe9.js */
    "./node_modules/@ionic/core/dist/esm/animation-af478fe9.js");
    /* harmony import */


    var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./index-624eea58.js */
    "./node_modules/@ionic/core/dist/esm/index-624eea58.js");
    /* harmony import */


    var _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./index-1e5940d5.js */
    "./node_modules/@ionic/core/dist/esm/index-1e5940d5.js");
    /* harmony import */


    var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./theme-18cbe2cc.js */
    "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js");
    /* harmony import */


    var _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cubic-bezier-2812fda3.js */
    "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js");

    var Menu =
    /*#__PURE__*/
    function () {
      function Menu(hostRef) {
        _classCallCheck(this, Menu);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.lastOnEnd = 0;
        this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_4__["GESTURE_CONTROLLER"].createBlocker({
          disableScroll: true
        });
        this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
        this.isAnimating = false;
        this._isOpen = false;
        this.isPaneVisible = false;
        this.isEndSide = false;
        /**
         * If `true`, the menu is disabled.
         */

        this.disabled = false;
        /**
         * Which side of the view the menu should be placed.
         */

        this.side = 'start';
        /**
         * If `true`, swiping the menu is enabled.
         */

        this.swipeGesture = true;
        /**
         * The edge threshold for dragging the menu open.
         * If a drag/swipe happens over this value, the menu is not triggered.
         */

        this.maxEdgeStart = 50;
        this.ionWillOpen = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionWillOpen", 7);
        this.ionWillClose = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionWillClose", 7);
        this.ionDidOpen = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDidOpen", 7);
        this.ionDidClose = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionDidClose", 7);
        this.ionMenuChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionMenuChange", 7);
      }

      _createClass(Menu, [{
        key: "typeChanged",
        value: function typeChanged(type, oldType) {
          var contentEl = this.contentEl;

          if (contentEl) {
            if (oldType !== undefined) {
              contentEl.classList.remove("menu-content-".concat(oldType));
            }

            contentEl.classList.add("menu-content-".concat(type));
            contentEl.removeAttribute('style');
          }

          if (this.menuInnerEl) {
            // Remove effects of previous animations
            this.menuInnerEl.removeAttribute('style');
          }

          this.animation = undefined;
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          this.updateState();
          this.ionMenuChange.emit({
            disabled: this.disabled,
            open: this._isOpen
          });
        }
      }, {
        key: "sideChanged",
        value: function sideChanged() {
          this.isEndSide = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.side);
        }
      }, {
        key: "swipeGestureChanged",
        value: function swipeGestureChanged() {
          this.updateState();
        }
      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          var _this = this;

          var el, parent, content;
          return regeneratorRuntime.async(function connectedCallback$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (this.type === undefined) {
                    this.type = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuType', this.mode === 'ios' ? 'reveal' : 'overlay');
                  }

                  el = this.el;
                  parent = el.parentNode;

                  if (this.contentId === undefined) {
                    console.warn("[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the \"contentId\" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId=\"my-content\"></ion-menu>\n  <div id=\"my-content\">...</div>\n");
                  }

                  content = this.contentId !== undefined ? document.getElementById(this.contentId) : parent && parent.querySelector && parent.querySelector('[main]');

                  if (!(!content || !content.tagName)) {
                    _context.next = 8;
                    break;
                  }

                  // requires content element
                  console.error('Menu: must have a "content" element to listen for drag events on.');
                  return _context.abrupt("return");

                case 8:
                  this.contentEl = content; // add menu's content classes

                  content.classList.add('menu-content');
                  this.typeChanged(this.type, undefined);
                  this.sideChanged(); // register this menu with the app's menu controller

                  _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._register(this);

                  _context.next = 15;
                  return regeneratorRuntime.awrap(Promise.resolve().then(__webpack_require__.bind(null,
                  /*! ./index-624eea58.js */
                  "./node_modules/@ionic/core/dist/esm/index-624eea58.js")));

                case 15:
                  _context.t0 = {
                    el: document,
                    gestureName: 'menu-swipe',
                    gesturePriority: 30,
                    threshold: 10,
                    canStart: function canStart(ev) {
                      return _this.canStart(ev);
                    },
                    onWillStart: function onWillStart() {
                      return _this.onWillStart();
                    },
                    onStart: function onStart() {
                      return _this.onStart();
                    },
                    onMove: function onMove(ev) {
                      return _this.onMove(ev);
                    },
                    onEnd: function onEnd(ev) {
                      return _this.onEnd(ev);
                    }
                  };
                  this.gesture = _context.sent.createGesture(_context.t0);
                  this.updateState();

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          return regeneratorRuntime.async(function componentDidLoad$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  this.ionMenuChange.emit({
                    disabled: this.disabled,
                    open: this._isOpen
                  });
                  this.updateState();

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          this.blocker.destroy();

          _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._unregister(this);

          if (this.animation) {
            this.animation.destroy();
          }

          if (this.gesture) {
            this.gesture.destroy();
            this.gesture = undefined;
          }

          this.animation = undefined;
          this.contentEl = this.backdropEl = this.menuInnerEl = undefined;
        }
      }, {
        key: "onSplitPaneChanged",
        value: function onSplitPaneChanged(ev) {
          this.isPaneVisible = ev.detail.isPane(this.el);
          this.updateState();
        }
      }, {
        key: "onBackdropClick",
        value: function onBackdropClick(ev) {
          if (this._isOpen && this.lastOnEnd < ev.timeStamp - 100) {
            var shouldClose = ev.composedPath ? !ev.composedPath().includes(this.menuInnerEl) : false;

            if (shouldClose) {
              ev.preventDefault();
              ev.stopPropagation();
              this.close();
            }
          }
        }
        /**
         * Returns `true` is the menu is open.
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return Promise.resolve(this._isOpen);
        }
        /**
         * Returns `true` is the menu is active.
         *
         * A menu is active when it can be opened or closed, meaning it's enabled
         * and it's not part of a `ion-split-pane`.
         */

      }, {
        key: "isActive",
        value: function isActive() {
          return Promise.resolve(this._isActive());
        }
        /**
         * Opens the menu. If the menu is already open or it can't be opened,
         * it returns `false`.
         */

      }, {
        key: "open",
        value: function open() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(true, animated);
        }
        /**
         * Closes the menu. If the menu is already closed or it can't be closed,
         * it returns `false`.
         */

      }, {
        key: "close",
        value: function close() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(false, animated);
        }
        /**
         * Toggles the menu. If the menu is already open, it will try to close, otherwise it will try to open it.
         * If the operation can't be completed successfully, it returns `false`.
         */

      }, {
        key: "toggle",
        value: function toggle() {
          var animated = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return this.setOpen(!this._isOpen, animated);
        }
        /**
         * Opens or closes the button.
         * If the operation can't be completed successfully, it returns `false`.
         */

      }, {
        key: "setOpen",
        value: function setOpen(shouldOpen) {
          var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setOpen(this, shouldOpen, animated);
        }
      }, {
        key: "_setOpen",
        value: function _setOpen(shouldOpen) {
          var animated,
              _args3 = arguments;
          return regeneratorRuntime.async(function _setOpen$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  animated = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : true;

                  if (!(!this._isActive() || this.isAnimating || shouldOpen === this._isOpen)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return", false);

                case 3:
                  this.beforeAnimation(shouldOpen);
                  _context3.next = 6;
                  return regeneratorRuntime.awrap(this.loadAnimation());

                case 6:
                  _context3.next = 8;
                  return regeneratorRuntime.awrap(this.startAnimation(shouldOpen, animated));

                case 8:
                  this.afterAnimation(shouldOpen);
                  return _context3.abrupt("return", true);

                case 10:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "loadAnimation",
        value: function loadAnimation() {
          var width;
          return regeneratorRuntime.async(function loadAnimation$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  // Menu swipe animation takes the menu's inner width as parameter,
                  // If `offsetWidth` changes, we need to create a new animation.
                  width = this.menuInnerEl.offsetWidth;

                  if (!(width === this.width && this.animation !== undefined)) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return");

                case 3:
                  this.width = width; // Destroy existing animation

                  if (this.animation) {
                    this.animation.destroy();
                    this.animation = undefined;
                  } // Create new animation


                  _context4.next = 7;
                  return regeneratorRuntime.awrap(_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._createAnimation(this.type, this));

                case 7:
                  this.animation = _context4.sent;

                  if (!_config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].getBoolean('animated', true)) {
                    this.animation.duration(0);
                  }

                  this.animation.fill('both');

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "startAnimation",
        value: function startAnimation(shouldOpen, animated) {
          var isReversed, ani;
          return regeneratorRuntime.async(function startAnimation$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  isReversed = !shouldOpen;
                  ani = this.animation.direction(isReversed ? 'reverse' : 'normal').easing(isReversed ? 'cubic-bezier(0.4, 0.0, 0.6, 1)' : 'cubic-bezier(0.0, 0.0, 0.2, 1)');

                  if (!animated) {
                    _context5.next = 7;
                    break;
                  }

                  _context5.next = 5;
                  return regeneratorRuntime.awrap(ani.playAsync());

                case 5:
                  _context5.next = 8;
                  break;

                case 7:
                  ani.playSync();

                case 8:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "_isActive",
        value: function _isActive() {
          return !this.disabled && !this.isPaneVisible;
        }
      }, {
        key: "canSwipe",
        value: function canSwipe() {
          return this.swipeGesture && !this.isAnimating && this._isActive();
        }
      }, {
        key: "canStart",
        value: function canStart(detail) {
          if (!this.canSwipe()) {
            return false;
          }

          if (this._isOpen) {
            return true; // TODO error
          } else if (_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._getOpenSync()) {
            return false;
          }

          return checkEdgeSide(window, detail.currentX, this.isEndSide, this.maxEdgeStart);
        }
      }, {
        key: "onWillStart",
        value: function onWillStart() {
          this.beforeAnimation(!this._isOpen);
          return this.loadAnimation();
        }
      }, {
        key: "onStart",
        value: function onStart() {
          if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
          } // the cloned animation should not use an easing curve during seek


          this.animation.direction(this._isOpen ? 'reverse' : 'normal').progressStart(true);
        }
      }, {
        key: "onMove",
        value: function onMove(detail) {
          if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
          }

          var delta = computeDelta(detail.deltaX, this._isOpen, this.isEndSide);
          var stepValue = delta / this.width;
          this.animation.progressStep(stepValue);
        }
      }, {
        key: "onEnd",
        value: function onEnd(detail) {
          var _this2 = this;

          if (!this.isAnimating || !this.animation) {
            Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(false, 'isAnimating has to be true');
            return;
          }

          var isOpen = this._isOpen;
          var isEndSide = this.isEndSide;
          var delta = computeDelta(detail.deltaX, isOpen, isEndSide);
          var width = this.width;
          var stepValue = delta / width;
          var velocity = detail.velocityX;
          var z = width / 2.0;
          var shouldCompleteRight = velocity >= 0 && (velocity > 0.2 || detail.deltaX > z);
          var shouldCompleteLeft = velocity <= 0 && (velocity < -0.2 || detail.deltaX < -z);
          var shouldComplete = isOpen ? isEndSide ? shouldCompleteRight : shouldCompleteLeft : isEndSide ? shouldCompleteLeft : shouldCompleteRight;
          var shouldOpen = !isOpen && shouldComplete;

          if (isOpen && !shouldComplete) {
            shouldOpen = true;
          }

          this.lastOnEnd = detail.timeStamp; // Account for rounding errors in JS

          var newStepValue = shouldComplete ? 0.001 : -0.001;
          /**
           * TODO: stepValue can sometimes return a negative
           * value, but you can't have a negative time value
           * for the cubic bezier curve (at least with web animations)
           * Not sure if the negative step value is an error or not
           */

          var adjustedStepValue = stepValue <= 0 ? 0.01 : stepValue;
          /**
           * Animation will be reversed here, so need to
           * reverse the easing curve as well
           *
           * Additionally, we need to account for the time relative
           * to the new easing curve, as `stepValue` is going to be given
           * in terms of a linear curve.
           */

          newStepValue += Object(_cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["g"])(new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.4, 0), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](0.6, 1), new _cubic_bezier_2812fda3_js__WEBPACK_IMPORTED_MODULE_7__["P"](1, 1), Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["c"])(0, adjustedStepValue, 1));
          this.animation.easing('cubic-bezier(0.4, 0.0, 0.6, 1)').onFinish(function () {
            return _this2.afterAnimation(shouldOpen);
          }, {
            oneTimeCallback: true
          }).progressEnd(shouldComplete ? 1 : 0, newStepValue, 300);
        }
      }, {
        key: "beforeAnimation",
        value: function beforeAnimation(shouldOpen) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, '_before() should not be called while animating'); // this places the menu into the correct location before it animates in
          // this css class doesn't actually kick off any animations

          this.el.classList.add(SHOW_MENU);

          if (this.backdropEl) {
            this.backdropEl.classList.add(SHOW_BACKDROP);
          }

          this.blocker.block();
          this.isAnimating = true;

          if (shouldOpen) {
            this.ionWillOpen.emit();
          } else {
            this.ionWillClose.emit();
          }
        }
      }, {
        key: "afterAnimation",
        value: function afterAnimation(isOpen) {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this.isAnimating, '_before() should be called while animating'); // keep opening/closing the menu disabled for a touch more yet
          // only add listeners/css if it's enabled and isOpen
          // and only remove listeners/css if it's not open
          // emit opened/closed events

          this._isOpen = isOpen;
          this.isAnimating = false;

          if (!this._isOpen) {
            this.blocker.unblock();
          }

          if (isOpen) {
            // add css class
            if (this.contentEl) {
              this.contentEl.classList.add(MENU_CONTENT_OPEN);
            } // emit open event


            this.ionDidOpen.emit();
          } else {
            // remove css classes
            this.el.classList.remove(SHOW_MENU);

            if (this.contentEl) {
              this.contentEl.classList.remove(MENU_CONTENT_OPEN);
            }

            if (this.backdropEl) {
              this.backdropEl.classList.remove(SHOW_BACKDROP);
            }

            if (this.animation) {
              this.animation.stop();
            } // emit close event


            this.ionDidClose.emit();
          }
        }
      }, {
        key: "updateState",
        value: function updateState() {
          var isActive = this._isActive();

          if (this.gesture) {
            this.gesture.setDisabled(!isActive || !this.swipeGesture);
          } // Close menu immediately


          if (!isActive && this._isOpen) {
            // close if this menu is open, and should not be enabled
            this.forceClosing();
          }

          if (!this.disabled) {
            _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"]._setActiveMenu(this);
          }

          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(!this.isAnimating, 'can not be animating');
        }
      }, {
        key: "forceClosing",
        value: function forceClosing() {
          Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_2__["b"])(this._isOpen, 'menu cannot be closed');
          this.isAnimating = true;
          var ani = this.animation.direction('reverse');
          ani.playSync();
          this.afterAnimation(false);
        }
      }, {
        key: "render",
        value: function render() {
          var _class,
              _this3 = this;

          var isEndSide = this.isEndSide,
              type = this.type,
              disabled = this.disabled,
              mode = this.mode,
              isPaneVisible = this.isPaneVisible;
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "navigation",
            "class": (_class = {}, _defineProperty(_class, mode, true), _defineProperty(_class, "menu-type-".concat(type), true), _defineProperty(_class, 'menu-enabled', !disabled), _defineProperty(_class, 'menu-side-end', isEndSide), _defineProperty(_class, 'menu-side-start', !isEndSide), _defineProperty(_class, 'menu-pane-visible', isPaneVisible), _class)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "menu-inner",
            ref: function ref(el) {
              return _this3.menuInnerEl = el;
            }
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", {
            ref: function ref(el) {
              return _this3.backdropEl = el;
            },
            "class": "menu-backdrop",
            tappable: false,
            stopPropagation: false
          }));
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
            "type": ["typeChanged"],
            "disabled": ["disabledChanged"],
            "side": ["sideChanged"],
            "swipeGesture": ["swipeGestureChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}\@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18);box-shadow:0 2px 22px 0 rgba(0,0,0,.09),4px 0 16px 0 rgba(0,0,0,.18)}";
        }
      }]);

      return Menu;
    }();

    var computeDelta = function computeDelta(deltaX, isOpen, isEndSide) {
      return Math.max(0, isOpen !== isEndSide ? -deltaX : deltaX);
    };

    var checkEdgeSide = function checkEdgeSide(win, posX, isEndSide, maxEdgeStart) {
      if (isEndSide) {
        return posX >= win.innerWidth - maxEdgeStart;
      } else {
        return posX <= maxEdgeStart;
      }
    };

    var SHOW_MENU = 'show-menu';
    var SHOW_BACKDROP = 'show-backdrop';
    var MENU_CONTENT_OPEN = 'menu-content-open'; // Given a menu, return whether or not the menu toggle should be visible

    var updateVisibility = function updateVisibility(menu) {
      var menuEl;
      return regeneratorRuntime.async(function updateVisibility$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu));

            case 2:
              menuEl = _context6.sent;
              _context6.t0 = menuEl;

              if (!_context6.t0) {
                _context6.next = 8;
                break;
              }

              _context6.next = 7;
              return regeneratorRuntime.awrap(menuEl.isActive());

            case 7:
              _context6.t0 = _context6.sent;

            case 8:
              return _context6.abrupt("return", !!_context6.t0);

            case 9:
            case "end":
              return _context6.stop();
          }
        }
      });
    };

    var MenuButton =
    /*#__PURE__*/
    function () {
      function MenuButton(hostRef) {
        var _this4 = this;

        _classCallCheck(this, MenuButton);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * If `true`, the user cannot interact with the menu button.
         */

        this.disabled = false;
        /**
         * Automatically hides the menu button when the corresponding menu is not active
         */

        this.autoHide = true;
        /**
         * The type of the button.
         */

        this.type = 'button';

        this.onClick = function _callee() {
          return regeneratorRuntime.async(function _callee$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  return _context7.abrupt("return", _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this4.menu));

                case 1:
                case "end":
                  return _context7.stop();
              }
            }
          });
        };
      }

      _createClass(MenuButton, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.visibilityChanged();
        }
      }, {
        key: "visibilityChanged",
        value: function visibilityChanged() {
          return regeneratorRuntime.async(function visibilityChanged$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return regeneratorRuntime.awrap(updateVisibility(this.menu));

                case 2:
                  this.visible = _context8.sent;

                case 3:
                case "end":
                  return _context8.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "render",
        value: function render() {
          var color = this.color,
              disabled = this.disabled;
          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);

          var menuIcon = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__["b"].get('menuIcon', 'menu');

          var hidden = this.autoHide && !this.visible;
          var attrs = {
            type: this.type
          };
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "aria-disabled": disabled ? 'true' : null,
            "aria-hidden": hidden ? 'true' : null,
            "class": Object.assign(Object.assign(_defineProperty({}, mode, true), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_6__["c"])(color)), {
              'button': true,
              'menu-button-hidden': hidden,
              'menu-button-disabled': disabled,
              'ion-activatable': true,
              'ion-focusable': true
            })
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", Object.assign({}, attrs, {
            disabled: disabled,
            "class": "button-native"
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon", {
            icon: menuIcon,
            mode: mode,
            lazy: false
          })), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", {
            type: "unbounded"
          })));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{--background:transparent;--color-focused:var(--color);--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}\@media (any-hover:hover){:host(:hover) .button-native{background:var(--background-hover);color:var(--color-hover)}}:host(.ion-focused) .button-native{background:var(--background-focused);color:var(--color-focused)}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host-context(ion-toolbar:not(.ion-color)){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:rgba(66,66,66,0.24);--background-hover:rgba(66,66,66,0.08);--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}\@media (any-hover:hover){:host(.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb),.08)}}:host(.ion-color.ion-focused) .button-native{background:rgba(var(--ion-color-base-rgb),.24);color:var(--ion-color-base)}";
        }
      }]);

      return MenuButton;
    }();

    var MenuController =
    /*#__PURE__*/
    function () {
      function MenuController(hostRef) {
        _classCallCheck(this, MenuController);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }
      /**
       * Open the menu. If a menu is not provided then it will open the first
       * menu found. If the specified menu is `start` or `end`, then it will open
       * the enabled menu on that side. Otherwise, it will try to find the menu
       * using the menu's `id` property. If a menu is not found then it will
       * return `false`.
       *
       * @param menu The menuId or side of the menu to open.
       */


      _createClass(MenuController, [{
        key: "open",
        value: function open(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].open(menu);
        }
        /**
         * Close the menu. If a menu is specified, it will close that menu.
         * If no menu is specified, then it will close any menu that is open.
         * If it does not find any open menus, it will return `false`.
         *
         * @param menu The menuId or side of the menu to close.
         */

      }, {
        key: "close",
        value: function close(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].close(menu);
        }
        /**
         * Toggle the menu open or closed. If the menu is already open, it will try to
         * close the menu, otherwise it will try to open it. Returns `false` if
         * a menu is not found.
         *
         * @param menu The menuId or side of the menu to toggle.
         */

      }, {
        key: "toggle",
        value: function toggle(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(menu);
        }
        /**
         * Enable or disable a menu. Disabling a menu will not allow gestures
         * for that menu or any calls to open it. This is useful when there are
         * multiple menus on the same side and only one of them should be allowed
         * to open. Enabling a menu will automatically disable all other menus
         * on that side.
         *
         * @param enable If `true`, the menu should be enabled.
         * @param menu The menuId or side of the menu to enable or disable.
         */

      }, {
        key: "enable",
        value: function enable(_enable, menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].enable(_enable, menu);
        }
        /**
         * Enable or disable the ability to swipe open the menu.
         *
         * @param enable If `true`, the menu swipe gesture should be enabled.
         * @param menu The menuId or side of the menu to enable or disable the swipe gesture on.
         */

      }, {
        key: "swipeGesture",
        value: function swipeGesture(enable, menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].swipeGesture(enable, menu);
        }
        /**
         * Get whether or not the menu is open. Returns `true` if the specified
         * menu is open. If a menu is not specified, it will return `true` if
         * any menu is currently open.
         *
         * @param menu The menuId or side of the menu that is being checked.
         */

      }, {
        key: "isOpen",
        value: function isOpen(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isOpen(menu);
        }
        /**
         * Get whether or not the menu is enabled. Returns `true` if the
         * specified menu is enabled. Returns `false` if a menu is disabled
         * or not found.
         *
         * @param menu The menuId or side of the menu that is being checked.
         */

      }, {
        key: "isEnabled",
        value: function isEnabled(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isEnabled(menu);
        }
        /**
         * Get a menu instance. If a menu is not provided then it will return the first
         * menu found. If the specified menu is `start` or `end`, then it will return the
         * enabled menu on that side. Otherwise, it will try to find the menu using the menu's
         * `id` property. If a menu is not found then it will return `null`.
         *
         * @param menu The menuId or side of the menu.
         */

      }, {
        key: "get",
        value: function get(menu) {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].get(menu);
        }
        /**
         * Get the instance of the opened menu. Returns `null` if a menu is not found.
         */

      }, {
        key: "getOpen",
        value: function getOpen() {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getOpen();
        }
        /**
         * Get all menu instances.
         */

      }, {
        key: "getMenus",
        value: function getMenus() {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].getMenus();
        }
        /**
         * Get whether or not a menu is animating. Returns `true` if any
         * menu is currently animating.
         */

      }, {
        key: "isAnimating",
        value: function isAnimating() {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].isAnimating();
        }
        /**
         * Registers a new animation that can be used with any `ion-menu` by
         * passing the name of the animation in its `type` property.
         *
         * @param name The name of the animation to register.
         * @param animation The animation function to register.
         */

      }, {
        key: "registerAnimation",
        value: function registerAnimation(name, animation) {
          return regeneratorRuntime.async(function registerAnimation$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  return _context9.abrupt("return", _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].registerAnimation(name, animation));

                case 1:
                case "end":
                  return _context9.stop();
              }
            }
          });
        }
      }]);

      return MenuController;
    }();

    var MenuToggle =
    /*#__PURE__*/
    function () {
      function MenuToggle(hostRef) {
        var _this5 = this;

        _classCallCheck(this, MenuToggle);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visible = false;
        /**
         * Automatically hides the content when the corresponding menu is not active.
         *
         * By default, it's `true`. Change it to `false` in order to
         * keep `ion-menu-toggle` always visible regardless the state of the menu.
         */

        this.autoHide = true;

        this.onClick = function () {
          return _index_1e5940d5_js__WEBPACK_IMPORTED_MODULE_5__["m"].toggle(_this5.menu);
        };
      }

      _createClass(MenuToggle, [{
        key: "connectedCallback",
        value: function connectedCallback() {
          this.visibilityChanged();
        }
      }, {
        key: "visibilityChanged",
        value: function visibilityChanged() {
          return regeneratorRuntime.async(function visibilityChanged$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return regeneratorRuntime.awrap(updateVisibility(this.menu));

                case 2:
                  this.visible = _context10.sent;

                case 3:
                case "end":
                  return _context10.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "render",
        value: function render() {
          var _class2;

          var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this);
          var hidden = this.autoHide && !this.visible;
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            "aria-hidden": hidden ? 'true' : null,
            "class": (_class2 = {}, _defineProperty(_class2, mode, true), _defineProperty(_class2, 'menu-toggle-hidden', hidden), _class2)
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null));
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host(.menu-toggle-hidden){display:none}";
        }
      }]);

      return MenuToggle;
    }();
    /***/

  }
}]);
//# sourceMappingURL=38-latest.js.map