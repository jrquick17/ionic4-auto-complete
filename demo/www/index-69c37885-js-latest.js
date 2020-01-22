function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-69c37885-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/index-69c37885.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-69c37885.js ***!
    \*************************************************************/

  /*! exports provided: create */

  /***/
  function node_modulesIonicCoreDistEsmIndex69c37885Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "create", function () {
      return create;
    });

    var transitionEnd = function transitionEnd(el, callback) {
      var unRegTrans;
      var opts = {
        passive: true
      };

      var unregister = function unregister() {
        if (unRegTrans) {
          unRegTrans();
        }
      };

      var onTransitionEnd = function onTransitionEnd(ev) {
        if (el === ev.target) {
          unregister();
          callback(ev);
        }
      };

      if (el) {
        el.addEventListener('webkitTransitionEnd', onTransitionEnd, opts);
        el.addEventListener('transitionend', onTransitionEnd, opts);

        unRegTrans = function unRegTrans() {
          el.removeEventListener('webkitTransitionEnd', onTransitionEnd, opts);
          el.removeEventListener('transitionend', onTransitionEnd, opts);
        };
      }

      return unregister;
    };

    var CSS_VALUE_REGEX = /(^-?\d*\.?\d*)(.*)/;
    var DURATION_MIN = 32;
    var TRANSITION_END_FALLBACK_PADDING_MS = 400;
    var TRANSFORM_PROPS = {
      'translateX': 1,
      'translateY': 1,
      'translateZ': 1,
      'scale': 1,
      'scaleX': 1,
      'scaleY': 1,
      'scaleZ': 1,
      'rotate': 1,
      'rotateX': 1,
      'rotateY': 1,
      'rotateZ': 1,
      'skewX': 1,
      'skewY': 1,
      'perspective': 1
    };
    var win = typeof window !== 'undefined' ? window : {};
    var raf = win.requestAnimationFrame ? win.requestAnimationFrame.bind(win) : function (f) {
      return f(Date.now());
    };

    var Animator =
    /*#__PURE__*/
    function () {
      function Animator() {
        _classCallCheck(this, Animator);

        this._hasDur = false;
        this._hasTweenEffect = false;
        this._isAsync = false;
        this._isReverse = false;
        this._destroyed = false;
        this.hasChildren = false;
        this.isPlaying = false;
        this.hasCompleted = false;
      }

      _createClass(Animator, [{
        key: "addElement",
        value: function addElement(el) {
          if (el != null) {
            if (el.length > 0) {
              for (var i = 0; i < el.length; i++) {
                this._addEl(el[i]);
              }
            } else {
              this._addEl(el);
            }
          }

          return this;
        }
        /**
         * NO DOM
         */

      }, {
        key: "_addEl",
        value: function _addEl(el) {
          if (el.nodeType === 1) {
            (this._elements = this._elements || []).push(el);
          }
        }
        /**
         * Add a child animation to this animation.
         */

      }, {
        key: "add",
        value: function add(childAnimation) {
          childAnimation.parent = this;
          this.hasChildren = true;
          (this._childAnimations = this._childAnimations || []).push(childAnimation);
          return this;
        }
        /**
         * Get the duration of this animation. If this animation does
         * not have a duration, then it'll get the duration from its parent.
         */

      }, {
        key: "getDuration",
        value: function getDuration(opts) {
          if (opts && opts.duration !== undefined) {
            return opts.duration;
          } else if (this._duration !== undefined) {
            return this._duration;
          } else if (this.parent) {
            return this.parent.getDuration();
          }

          return 0;
        }
        /**
         * Returns if the animation is a root one.
         */

      }, {
        key: "isRoot",
        value: function isRoot() {
          return !this.parent;
        }
        /**
         * Set the duration for this animation.
         */

      }, {
        key: "duration",
        value: function duration(milliseconds) {
          this._duration = milliseconds;
          return this;
        }
        /**
         * Get the easing of this animation. If this animation does
         * not have an easing, then it'll get the easing from its parent.
         */

      }, {
        key: "getEasing",
        value: function getEasing() {
          if (this._isReverse && this._reversedEasingName !== undefined) {
            return this._reversedEasingName;
          }

          return this._easingName !== undefined ? this._easingName : this.parent && this.parent.getEasing() || null;
        }
        /**
         * Set the easing for this animation.
         */

      }, {
        key: "easing",
        value: function easing(name) {
          this._easingName = name;
          return this;
        }
        /**
         * Set the easing for this reversed animation.
         */

      }, {
        key: "easingReverse",
        value: function easingReverse(name) {
          this._reversedEasingName = name;
          return this;
        }
        /**
         * Add the "from" value for a specific property.
         */

      }, {
        key: "from",
        value: function from(prop, val) {
          this._addProp('from', prop, val);

          return this;
        }
        /**
         * Add the "to" value for a specific property.
         */

      }, {
        key: "to",
        value: function to(prop, val) {
          var clearProperyAfterTransition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var fx = this._addProp('to', prop, val);

          if (clearProperyAfterTransition) {
            // if this effect is a transform then clear the transform effect
            // otherwise just clear the actual property
            this.afterClearStyles(fx.trans ? ['transform', '-webkit-transform'] : [prop]);
          }

          return this;
        }
        /**
         * Shortcut to add both the "from" and "to" for the same property.
         */

      }, {
        key: "fromTo",
        value: function fromTo(prop, fromVal, toVal, clearProperyAfterTransition) {
          return this.from(prop, fromVal).to(prop, toVal, clearProperyAfterTransition);
        }
        /**
         * NO DOM
         */

      }, {
        key: "_getProp",
        value: function _getProp(name) {
          if (this._fxProperties) {
            return this._fxProperties.find(function (prop) {
              return prop.effectName === name;
            });
          }

          return undefined;
        }
      }, {
        key: "_addProp",
        value: function _addProp(state, prop, val) {
          var fxProp = this._getProp(prop);

          if (!fxProp) {
            // first time we've see this EffectProperty
            var shouldTrans = TRANSFORM_PROPS[prop] === 1;
            fxProp = {
              effectName: prop,
              trans: shouldTrans,
              // add the will-change property for transforms or opacity
              wc: shouldTrans ? 'transform' : prop
            };
            (this._fxProperties = this._fxProperties || []).push(fxProp);
          } // add from/to EffectState to the EffectProperty


          var fxState = {
            val: val,
            num: 0,
            effectUnit: ''
          };
          fxProp[state] = fxState;

          if (typeof val === 'string' && val.indexOf(' ') < 0) {
            var r = val.match(CSS_VALUE_REGEX);

            if (r) {
              var num = parseFloat(r[1]);

              if (!isNaN(num)) {
                fxState.num = num;
              }

              fxState.effectUnit = r[0] !== r[2] ? r[2] : '';
            }
          } else if (typeof val === 'number') {
            fxState.num = val;
          }

          return fxProp;
        }
        /**
         * Add CSS class to this animation's elements
         * before the animation begins.
         */

      }, {
        key: "beforeAddClass",
        value: function beforeAddClass(className) {
          (this._beforeAddClasses = this._beforeAddClasses || []).push(className);
          return this;
        }
        /**
         * Remove CSS class from this animation's elements
         * before the animation begins.
         */

      }, {
        key: "beforeRemoveClass",
        value: function beforeRemoveClass(className) {
          (this._beforeRemoveClasses = this._beforeRemoveClasses || []).push(className);
          return this;
        }
        /**
         * Set CSS inline styles to this animation's elements
         * before the animation begins.
         */

      }, {
        key: "beforeStyles",
        value: function beforeStyles(styles) {
          this._beforeStyles = styles;
          return this;
        }
        /**
         * Clear CSS inline styles from this animation's elements
         * before the animation begins.
         */

      }, {
        key: "beforeClearStyles",
        value: function beforeClearStyles(propertyNames) {
          this._beforeStyles = this._beforeStyles || {};
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = propertyNames[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var prop = _step.value;
              this._beforeStyles[prop] = '';
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

          return this;
        }
        /**
         * Add a function which contains DOM reads, which will run
         * before the animation begins.
         */

      }, {
        key: "beforeAddRead",
        value: function beforeAddRead(domReadFn) {
          (this._readCallbacks = this._readCallbacks || []).push(domReadFn);
          return this;
        }
        /**
         * Add a function which contains DOM writes, which will run
         * before the animation begins.
         */

      }, {
        key: "beforeAddWrite",
        value: function beforeAddWrite(domWriteFn) {
          (this._writeCallbacks = this._writeCallbacks || []).push(domWriteFn);
          return this;
        }
        /**
         * Add CSS class to this animation's elements
         * after the animation finishes.
         */

      }, {
        key: "afterAddClass",
        value: function afterAddClass(className) {
          (this._afterAddClasses = this._afterAddClasses || []).push(className);
          return this;
        }
        /**
         * Remove CSS class from this animation's elements
         * after the animation finishes.
         */

      }, {
        key: "afterRemoveClass",
        value: function afterRemoveClass(className) {
          (this._afterRemoveClasses = this._afterRemoveClasses || []).push(className);
          return this;
        }
        /**
         * Set CSS inline styles to this animation's elements
         * after the animation finishes.
         */

      }, {
        key: "afterStyles",
        value: function afterStyles(styles) {
          this._afterStyles = styles;
          return this;
        }
        /**
         * Clear CSS inline styles from this animation's elements
         * after the animation finishes.
         */

      }, {
        key: "afterClearStyles",
        value: function afterClearStyles(propertyNames) {
          this._afterStyles = this._afterStyles || {};
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = propertyNames[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var prop = _step2.value;
              this._afterStyles[prop] = '';
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          return this;
        }
        /**
         * Play the animation.
         */

      }, {
        key: "play",
        value: function play(opts) {
          var _this = this;

          // If the animation was already invalidated (it did finish), do nothing
          if (this._destroyed) {
            return;
          } // this is the top level animation and is in full control
          // of when the async play() should actually kick off
          // if there is no duration then it'll set the TO property immediately
          // if there is a duration, then it'll stage all animations at the
          // FROM property and transition duration, wait a few frames, then
          // kick off the animation by setting the TO property for each animation


          this._isAsync = this._hasDuration(opts); // ensure all past transition end events have been cleared

          this._clearAsync(); // recursively kicks off the correct progress step for each child animation
          // ******** DOM WRITE ****************


          this._playInit(opts); // doubling up RAFs since this animation was probably triggered
          // from an input event, and just having one RAF would have this code
          // run within the same frame as the triggering input event, and the
          // input event probably already did way too much work for one frame


          raf(function () {
            raf(function () {
              _this._playDomInspect(opts);
            });
          });
        }
      }, {
        key: "playAsync",
        value: function playAsync(opts) {
          var _this2 = this;

          return new Promise(function (resolve) {
            _this2.onFinish(resolve, {
              oneTimeCallback: true,
              clearExistingCallbacks: true
            });

            _this2.play(opts);

            return _this2;
          });
        }
      }, {
        key: "playSync",
        value: function playSync() {
          // If the animation was already invalidated (it did finish), do nothing
          if (!this._destroyed) {
            var opts = {
              duration: 0
            };
            this._isAsync = false;

            this._clearAsync();

            this._playInit(opts);

            this._playDomInspect(opts);
          }
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_playInit",
        value: function _playInit(opts) {
          // always default that an animation does not tween
          // a tween requires that an Animation class has an element
          // and that it has at least one FROM/TO effect
          // and that the FROM/TO effect can tween numeric values
          this._hasTweenEffect = false;
          this.isPlaying = true;
          this.hasCompleted = false;
          this._hasDur = this.getDuration(opts) > DURATION_MIN;
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var child = _step3.value;

                // ******** DOM WRITE ****************
                child._playInit(opts);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                  _iterator3["return"]();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          if (this._hasDur) {
            // if there is a duration then we want to start at step 0
            // ******** DOM WRITE ****************
            this._progress(0); // add the will-change properties
            // ******** DOM WRITE ****************


            this._willChange(true);
          }
        }
        /**
         * DOM WRITE
         * NO RECURSION
         * ROOT ANIMATION
         */

      }, {
        key: "_playDomInspect",
        value: function _playDomInspect(opts) {
          var _this3 = this;

          // fire off all the "before" function that have DOM READS in them
          // elements will be in the DOM, however visibily hidden
          // so we can read their dimensions if need be
          // ******** DOM READ ****************
          // ******** DOM WRITE ****************
          this._beforeAnimation(); // for the root animation only
          // set the async TRANSITION END event
          // and run onFinishes when the transition ends


          var dur = this.getDuration(opts);

          if (this._isAsync) {
            this._asyncEnd(dur, true);
          } // ******** DOM WRITE ****************


          this._playProgress(opts);

          if (this._isAsync && !this._destroyed) {
            // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in
            raf(function () {
              _this3._playToStep(1);
            });
          }
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_playProgress",
        value: function _playProgress(opts) {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var child = _step4.value;

                // ******** DOM WRITE ****************
                child._playProgress(opts);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
                  _iterator4["return"]();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }
          }

          if (this._hasDur) {
            // set the CSS TRANSITION duration/easing
            // ******** DOM WRITE ****************
            this._setTrans(this.getDuration(opts), false);
          } else {
            // this animation does not have a duration, so it should not animate
            // just go straight to the TO properties and call it done
            // ******** DOM WRITE ****************
            this._progress(1); // since there was no animation, immediately run the after
            // ******** DOM WRITE ****************


            this._setAfterStyles(); // this animation has no duration, so it has finished
            // other animations could still be running


            this._didFinish(true);
          }
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_playToStep",
        value: function _playToStep(stepValue) {
          if (!this._destroyed) {
            var children = this._childAnimations;

            if (children) {
              var _iteratorNormalCompletion5 = true;
              var _didIteratorError5 = false;
              var _iteratorError5 = undefined;

              try {
                for (var _iterator5 = children[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                  var child = _step5.value;

                  // ******** DOM WRITE ****************
                  child._playToStep(stepValue);
                }
              } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
                    _iterator5["return"]();
                  }
                } finally {
                  if (_didIteratorError5) {
                    throw _iteratorError5;
                  }
                }
              }
            }

            if (this._hasDur) {
              // browser had some time to render everything in place
              // and the transition duration/easing is set
              // now set the TO properties which will trigger the transition to begin
              // ******** DOM WRITE ****************
              this._progress(stepValue);
            }
          }
        }
        /**
         * DOM WRITE
         * NO RECURSION
         * ROOT ANIMATION
         */

      }, {
        key: "_asyncEnd",
        value: function _asyncEnd(dur, shouldComplete) {
          var self = this;

          var onTransitionEnd = function onTransitionEnd() {
            // congrats! a successful transition completed!
            // ensure transition end events and timeouts have been cleared
            self._clearAsync(); // ******** DOM WRITE ****************


            self._playEnd(); // transition finished


            self._didFinishAll(shouldComplete, true, false);
          };

          var onTransitionFallback = function onTransitionFallback() {
            // oh noz! the transition end event didn't fire in time!
            // instead the fallback timer when first
            // if all goes well this fallback should never fire
            // clear the other async end events from firing
            self._timerId = undefined;

            self._clearAsync(); // set the after styles
            // ******** DOM WRITE ****************


            self._playEnd(shouldComplete ? 1 : 0); // transition finished


            self._didFinishAll(shouldComplete, true, false);
          }; // set the TRANSITION END event on one of the transition elements


          self._unregisterTrnsEnd = transitionEnd(self._transEl(), onTransitionEnd); // set a fallback timeout if the transition end event never fires, or is too slow
          // transition end fallback: (animation duration + XXms)

          self._timerId = setTimeout(onTransitionFallback, dur + TRANSITION_END_FALLBACK_PADDING_MS);
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_playEnd",
        value: function _playEnd(stepValue) {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = children[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var child = _step6.value;

                // ******** DOM WRITE ****************
                child._playEnd(stepValue);
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
                  _iterator6["return"]();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }

          if (this._hasDur) {
            if (stepValue !== undefined) {
              // too late to have a smooth animation, just finish it
              // ******** DOM WRITE ****************
              this._setTrans(0, true); // ensure the ending progress step gets rendered
              // ******** DOM WRITE ****************


              this._progress(stepValue);
            } // set the after styles
            // ******** DOM WRITE ****************


            this._setAfterStyles(); // remove the will-change properties
            // ******** DOM WRITE ****************


            this._willChange(false);
          }
        }
        /**
         * NO DOM
         * RECURSION
         */

      }, {
        key: "_hasDuration",
        value: function _hasDuration(opts) {
          if (this.getDuration(opts) > DURATION_MIN) {
            return true;
          }

          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = children[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var child = _step7.value;

                if (child._hasDuration(opts)) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
                  _iterator7["return"]();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }
          }

          return false;
        }
        /**
         * NO DOM
         * RECURSION
         */

      }, {
        key: "_hasDomReads",
        value: function _hasDomReads() {
          if (this._readCallbacks && this._readCallbacks.length > 0) {
            return true;
          }

          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion8 = true;
            var _didIteratorError8 = false;
            var _iteratorError8 = undefined;

            try {
              for (var _iterator8 = children[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                var child = _step8.value;

                if (child._hasDomReads()) {
                  return true;
                }
              }
            } catch (err) {
              _didIteratorError8 = true;
              _iteratorError8 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
                  _iterator8["return"]();
                }
              } finally {
                if (_didIteratorError8) {
                  throw _iteratorError8;
                }
              }
            }
          }

          return false;
        }
        /**
         * Immediately stop at the end of the animation.
         */

      }, {
        key: "stop",
        value: function stop() {
          var stepValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

          // ensure all past transition end events have been cleared
          this._clearAsync();

          this._hasDur = true;

          this._playEnd(stepValue);
        }
        /**
         * NO DOM
         * NO RECURSION
         */

      }, {
        key: "_clearAsync",
        value: function _clearAsync() {
          if (this._unregisterTrnsEnd) {
            this._unregisterTrnsEnd();
          }

          if (this._timerId) {
            clearTimeout(this._timerId);
          }

          this._timerId = this._unregisterTrnsEnd = undefined;
        }
        /**
         * DOM WRITE
         * NO RECURSION
         */

      }, {
        key: "_progress",
        value: function _progress(stepValue) {
          // bread 'n butter
          var val;
          var elements = this._elements;
          var effects = this._fxProperties;

          if (!elements || elements.length === 0 || !effects || this._destroyed) {
            return;
          } // flip the number if we're going in reverse


          if (this._isReverse) {
            stepValue = 1 - stepValue;
          }

          var i = 0;
          var j = 0;
          var finalTransform = '';
          var fx;

          for (i = 0; i < effects.length; i++) {
            fx = effects[i];

            if (fx.from && fx.to) {
              var fromNum = fx.from.num;
              var toNum = fx.to.num;
              var tweenEffect = fromNum !== toNum;

              if (tweenEffect) {
                this._hasTweenEffect = true;
              }

              if (stepValue === 0) {
                // FROM
                val = fx.from.val;
              } else if (stepValue === 1) {
                // TO
                val = fx.to.val;
              } else if (tweenEffect) {
                // EVERYTHING IN BETWEEN
                var valNum = (toNum - fromNum) * stepValue + fromNum;
                var unit = fx.to.effectUnit;
                val = valNum + unit;
              }

              if (val !== null) {
                var prop = fx.effectName;

                if (fx.trans) {
                  finalTransform += prop + '(' + val + ') ';
                } else {
                  for (j = 0; j < elements.length; j++) {
                    // ******** DOM WRITE ****************
                    elements[j].style.setProperty(prop, val);
                  }
                }
              }
            }
          } // place all transforms on the same property


          if (finalTransform.length > 0) {
            if (!this._isReverse && stepValue !== 1 || this._isReverse && stepValue !== 0) {
              finalTransform += 'translateZ(0px)';
            }

            for (i = 0; i < elements.length; i++) {
              // ******** DOM WRITE ****************
              elements[i].style.setProperty('transform', finalTransform);
              elements[i].style.setProperty('-webkit-transform', finalTransform);
            }
          }
        }
        /**
         * DOM WRITE
         * NO RECURSION
         */

      }, {
        key: "_setTrans",
        value: function _setTrans(dur, forcedLinearEasing) {
          // Transition is not enabled if there are not effects
          var elements = this._elements;

          if (!elements || elements.length === 0 || !this._fxProperties) {
            return;
          } // set the TRANSITION properties inline on the element


          var easing = forcedLinearEasing ? 'linear' : this.getEasing();
          var durString = dur + 'ms';
          var _iteratorNormalCompletion9 = true;
          var _didIteratorError9 = false;
          var _iteratorError9 = undefined;

          try {
            for (var _iterator9 = elements[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
              var style = _step9.value.style;

              if (dur > 0) {
                // ******** DOM WRITE ****************
                style.transitionDuration = durString; // each animation can have a different easing

                if (easing !== null) {
                  // ******** DOM WRITE ****************
                  style.transitionTimingFunction = easing;
                }
              } else {
                style.transitionDuration = '0';
              }
            }
          } catch (err) {
            _didIteratorError9 = true;
            _iteratorError9 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
                _iterator9["return"]();
              }
            } finally {
              if (_didIteratorError9) {
                throw _iteratorError9;
              }
            }
          }
        }
        /**
         * DOM READ
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_beforeAnimation",
        value: function _beforeAnimation() {
          // fire off all the "before" function that have DOM READS in them
          // elements will be in the DOM, however visibily hidden
          // so we can read their dimensions if need be
          // ******** DOM READ ****************
          this._fireBeforeReadFunc(); // ******** DOM READS ABOVE / DOM WRITES BELOW ****************
          // fire off all the "before" function that have DOM WRITES in them
          // ******** DOM WRITE ****************


          this._fireBeforeWriteFunc(); // stage all of the before css classes and inline styles
          // ******** DOM WRITE ****************


          this._setBeforeStyles();
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_setBeforeStyles",
        value: function _setBeforeStyles() {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = children[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var child = _step10.value;

                child._setBeforeStyles();
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
                  _iterator10["return"]();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }
          }

          var elements = this._elements; // before the animations have started
          // only set before styles if animation is not reversed

          if (!elements || elements.length === 0 || this._isReverse) {
            return;
          }

          var addClasses = this._beforeAddClasses;
          var removeClasses = this._beforeRemoveClasses;
          var _iteratorNormalCompletion11 = true;
          var _didIteratorError11 = false;
          var _iteratorError11 = undefined;

          try {
            for (var _iterator11 = elements[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
              var el = _step11.value;
              var elementClassList = el.classList; // css classes to add before the animation

              if (addClasses) {
                var _iteratorNormalCompletion12 = true;
                var _didIteratorError12 = false;
                var _iteratorError12 = undefined;

                try {
                  for (var _iterator12 = addClasses[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                    var c = _step12.value;
                    // ******** DOM WRITE ****************
                    elementClassList.add(c);
                  }
                } catch (err) {
                  _didIteratorError12 = true;
                  _iteratorError12 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion12 && _iterator12["return"] != null) {
                      _iterator12["return"]();
                    }
                  } finally {
                    if (_didIteratorError12) {
                      throw _iteratorError12;
                    }
                  }
                }
              } // css classes to remove before the animation


              if (removeClasses) {
                var _iteratorNormalCompletion13 = true;
                var _didIteratorError13 = false;
                var _iteratorError13 = undefined;

                try {
                  for (var _iterator13 = removeClasses[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                    var _c = _step13.value;
                    // ******** DOM WRITE ****************
                    elementClassList.remove(_c);
                  }
                } catch (err) {
                  _didIteratorError13 = true;
                  _iteratorError13 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion13 && _iterator13["return"] != null) {
                      _iterator13["return"]();
                    }
                  } finally {
                    if (_didIteratorError13) {
                      throw _iteratorError13;
                    }
                  }
                }
              } // inline styles to add before the animation


              if (this._beforeStyles) {
                for (var _i = 0, _Object$entries = Object.entries(this._beforeStyles); _i < _Object$entries.length; _i++) {
                  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                      key = _Object$entries$_i[0],
                      value = _Object$entries$_i[1];

                  // ******** DOM WRITE ****************
                  el.style.setProperty(key, value);
                }
              }
            }
          } catch (err) {
            _didIteratorError11 = true;
            _iteratorError11 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
                _iterator11["return"]();
              }
            } finally {
              if (_didIteratorError11) {
                throw _iteratorError11;
              }
            }
          }
        }
        /**
         * DOM READ
         * RECURSION
         */

      }, {
        key: "_fireBeforeReadFunc",
        value: function _fireBeforeReadFunc() {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion14 = true;
            var _didIteratorError14 = false;
            var _iteratorError14 = undefined;

            try {
              for (var _iterator14 = children[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                var child = _step14.value;

                // ******** DOM READ ****************
                child._fireBeforeReadFunc();
              }
            } catch (err) {
              _didIteratorError14 = true;
              _iteratorError14 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion14 && _iterator14["return"] != null) {
                  _iterator14["return"]();
                }
              } finally {
                if (_didIteratorError14) {
                  throw _iteratorError14;
                }
              }
            }
          }

          var readFunctions = this._readCallbacks;

          if (readFunctions) {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = readFunctions[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var callback = _step15.value;
                // ******** DOM READ ****************
                callback();
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15["return"] != null) {
                  _iterator15["return"]();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }
          }
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_fireBeforeWriteFunc",
        value: function _fireBeforeWriteFunc() {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion16 = true;
            var _didIteratorError16 = false;
            var _iteratorError16 = undefined;

            try {
              for (var _iterator16 = children[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                var child = _step16.value;

                // ******** DOM WRITE ****************
                child._fireBeforeWriteFunc();
              }
            } catch (err) {
              _didIteratorError16 = true;
              _iteratorError16 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion16 && _iterator16["return"] != null) {
                  _iterator16["return"]();
                }
              } finally {
                if (_didIteratorError16) {
                  throw _iteratorError16;
                }
              }
            }
          }

          var writeFunctions = this._writeCallbacks;

          if (writeFunctions) {
            var _iteratorNormalCompletion17 = true;
            var _didIteratorError17 = false;
            var _iteratorError17 = undefined;

            try {
              for (var _iterator17 = writeFunctions[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                var callback = _step17.value;
                // ******** DOM WRITE ****************
                callback();
              }
            } catch (err) {
              _didIteratorError17 = true;
              _iteratorError17 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion17 && _iterator17["return"] != null) {
                  _iterator17["return"]();
                }
              } finally {
                if (_didIteratorError17) {
                  throw _iteratorError17;
                }
              }
            }
          }
        }
        /**
         * DOM WRITE
         */

      }, {
        key: "_setAfterStyles",
        value: function _setAfterStyles() {
          var elements = this._elements;

          if (!elements) {
            return;
          }

          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = elements[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var el = _step18.value;
              var elementClassList = el.classList; // remove the transition duration/easing
              // ******** DOM WRITE ****************

              el.style.transitionDuration = el.style.transitionTimingFunction = '';

              if (this._isReverse) {
                // finished in reverse direction
                // css classes that were added before the animation should be removed
                var beforeAddClasses = this._beforeAddClasses;

                if (beforeAddClasses) {
                  var _iteratorNormalCompletion19 = true;
                  var _didIteratorError19 = false;
                  var _iteratorError19 = undefined;

                  try {
                    for (var _iterator19 = beforeAddClasses[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                      var c = _step19.value;
                      elementClassList.remove(c);
                    }
                  } catch (err) {
                    _didIteratorError19 = true;
                    _iteratorError19 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion19 && _iterator19["return"] != null) {
                        _iterator19["return"]();
                      }
                    } finally {
                      if (_didIteratorError19) {
                        throw _iteratorError19;
                      }
                    }
                  }
                } // css classes that were removed before the animation should be added


                var beforeRemoveClasses = this._beforeRemoveClasses;

                if (beforeRemoveClasses) {
                  var _iteratorNormalCompletion20 = true;
                  var _didIteratorError20 = false;
                  var _iteratorError20 = undefined;

                  try {
                    for (var _iterator20 = beforeRemoveClasses[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                      var _c2 = _step20.value;
                      elementClassList.add(_c2);
                    }
                  } catch (err) {
                    _didIteratorError20 = true;
                    _iteratorError20 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion20 && _iterator20["return"] != null) {
                        _iterator20["return"]();
                      }
                    } finally {
                      if (_didIteratorError20) {
                        throw _iteratorError20;
                      }
                    }
                  }
                } // inline styles that were added before the animation should be removed


                var beforeStyles = this._beforeStyles;

                if (beforeStyles) {
                  for (var _i2 = 0, _Object$keys = Object.keys(beforeStyles); _i2 < _Object$keys.length; _i2++) {
                    var propName = _Object$keys[_i2];
                    // ******** DOM WRITE ****************
                    el.style.removeProperty(propName);
                  }
                }
              } else {
                // finished in forward direction
                // css classes to add after the animation
                var afterAddClasses = this._afterAddClasses;

                if (afterAddClasses) {
                  var _iteratorNormalCompletion21 = true;
                  var _didIteratorError21 = false;
                  var _iteratorError21 = undefined;

                  try {
                    for (var _iterator21 = afterAddClasses[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                      var _c3 = _step21.value;
                      // ******** DOM WRITE ****************
                      elementClassList.add(_c3);
                    }
                  } catch (err) {
                    _didIteratorError21 = true;
                    _iteratorError21 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion21 && _iterator21["return"] != null) {
                        _iterator21["return"]();
                      }
                    } finally {
                      if (_didIteratorError21) {
                        throw _iteratorError21;
                      }
                    }
                  }
                } // css classes to remove after the animation


                var afterRemoveClasses = this._afterRemoveClasses;

                if (afterRemoveClasses) {
                  var _iteratorNormalCompletion22 = true;
                  var _didIteratorError22 = false;
                  var _iteratorError22 = undefined;

                  try {
                    for (var _iterator22 = afterRemoveClasses[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                      var _c4 = _step22.value;
                      // ******** DOM WRITE ****************
                      elementClassList.remove(_c4);
                    }
                  } catch (err) {
                    _didIteratorError22 = true;
                    _iteratorError22 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion22 && _iterator22["return"] != null) {
                        _iterator22["return"]();
                      }
                    } finally {
                      if (_didIteratorError22) {
                        throw _iteratorError22;
                      }
                    }
                  }
                } // inline styles to add after the animation


                var afterStyles = this._afterStyles;

                if (afterStyles) {
                  for (var _i3 = 0, _Object$entries2 = Object.entries(afterStyles); _i3 < _Object$entries2.length; _i3++) {
                    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
                        key = _Object$entries2$_i[0],
                        value = _Object$entries2$_i[1];

                    el.style.setProperty(key, value);
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18["return"] != null) {
                _iterator18["return"]();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }
        }
        /**
         * DOM WRITE
         * NO RECURSION
         */

      }, {
        key: "_willChange",
        value: function _willChange(addWillChange) {
          var wc;
          var effects = this._fxProperties;
          var willChange;

          if (addWillChange && effects) {
            wc = [];
            var _iteratorNormalCompletion23 = true;
            var _didIteratorError23 = false;
            var _iteratorError23 = undefined;

            try {
              for (var _iterator23 = effects[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                var effect = _step23.value;
                var propWC = effect.wc;

                if (propWC === 'webkitTransform') {
                  wc.push('transform', '-webkit-transform');
                } else if (propWC !== undefined) {
                  wc.push(propWC);
                }
              }
            } catch (err) {
              _didIteratorError23 = true;
              _iteratorError23 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion23 && _iterator23["return"] != null) {
                  _iterator23["return"]();
                }
              } finally {
                if (_didIteratorError23) {
                  throw _iteratorError23;
                }
              }
            }

            willChange = wc.join(',');
          } else {
            willChange = '';
          }

          var elements = this._elements;

          if (elements) {
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
              for (var _iterator24 = elements[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                var el = _step24.value;
                // ******** DOM WRITE ****************
                el.style.setProperty('will-change', willChange);
              }
            } catch (err) {
              _didIteratorError24 = true;
              _iteratorError24 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion24 && _iterator24["return"] != null) {
                  _iterator24["return"]();
                }
              } finally {
                if (_didIteratorError24) {
                  throw _iteratorError24;
                }
              }
            }
          }
        }
        /**
         * Start the animation with a user controlled progress.
         */

      }, {
        key: "progressStart",
        value: function progressStart() {
          // ensure all past transition end events have been cleared
          this._clearAsync(); // ******** DOM READ/WRITE ****************


          this._beforeAnimation(); // ******** DOM WRITE ****************


          this._progressStart();
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_progressStart",
        value: function _progressStart() {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion25 = true;
            var _didIteratorError25 = false;
            var _iteratorError25 = undefined;

            try {
              for (var _iterator25 = children[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                var child = _step25.value;

                // ******** DOM WRITE ****************
                child._progressStart();
              }
            } catch (err) {
              _didIteratorError25 = true;
              _iteratorError25 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion25 && _iterator25["return"] != null) {
                  _iterator25["return"]();
                }
              } finally {
                if (_didIteratorError25) {
                  throw _iteratorError25;
                }
              }
            }
          } // force no duration, linear easing
          // ******** DOM WRITE ****************


          this._setTrans(0, true); // ******** DOM WRITE ****************


          this._willChange(true);
        }
        /**
         * Set the progress step for this animation.
         * progressStep() is not debounced, so it should not be called faster than 60FPS.
         */

      }, {
        key: "progressStep",
        value: function progressStep(stepValue) {
          // only update if the last update was more than 16ms ago
          stepValue = Math.min(1, Math.max(0, stepValue));
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion26 = true;
            var _didIteratorError26 = false;
            var _iteratorError26 = undefined;

            try {
              for (var _iterator26 = children[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                var child = _step26.value;
                // ******** DOM WRITE ****************
                child.progressStep(stepValue);
              }
            } catch (err) {
              _didIteratorError26 = true;
              _iteratorError26 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion26 && _iterator26["return"] != null) {
                  _iterator26["return"]();
                }
              } finally {
                if (_didIteratorError26) {
                  throw _iteratorError26;
                }
              }
            }
          } // ******** DOM WRITE ****************


          this._progress(stepValue);
        }
        /**
         * End the progress animation.
         */

      }, {
        key: "progressEnd",
        value: function progressEnd(shouldComplete, currentStepValue) {
          var _this4 = this;

          var dur = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;

          if (this._isReverse) {
            // if the animation is going in reverse then
            // flip the step value: 0 becomes 1, 1 becomes 0
            currentStepValue = 1 - currentStepValue;
          }

          var stepValue = shouldComplete ? 1 : 0;
          var diff = Math.abs(currentStepValue - stepValue);

          if (dur < 0) {
            dur = this._duration || 0;
          } else if (diff < 0.05) {
            dur = 0;
          }

          this._isAsync = dur > 30;

          this._progressEnd(shouldComplete, stepValue, dur, this._isAsync);

          if (this._isAsync) {
            // for the root animation only
            // set the async TRANSITION END event
            // and run onFinishes when the transition ends
            // ******** DOM WRITE ****************
            this._asyncEnd(dur, shouldComplete); // this animation has a duration so we need another RAF
            // for the CSS TRANSITION properties to kick in


            if (!this._destroyed) {
              raf(function () {
                _this4._playToStep(stepValue);
              });
            }
          }
        }
        /**
         * DOM WRITE
         * RECURSION
         */

      }, {
        key: "_progressEnd",
        value: function _progressEnd(shouldComplete, stepValue, dur, isAsync) {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion27 = true;
            var _didIteratorError27 = false;
            var _iteratorError27 = undefined;

            try {
              for (var _iterator27 = children[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                var child = _step27.value;

                // ******** DOM WRITE ****************
                child._progressEnd(shouldComplete, stepValue, dur, isAsync);
              }
            } catch (err) {
              _didIteratorError27 = true;
              _iteratorError27 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion27 && _iterator27["return"] != null) {
                  _iterator27["return"]();
                }
              } finally {
                if (_didIteratorError27) {
                  throw _iteratorError27;
                }
              }
            }
          }

          if (!isAsync) {
            // stop immediately
            // set all the animations to their final position
            // ******** DOM WRITE ****************
            this._progress(stepValue);

            this._willChange(false);

            this._setAfterStyles();

            this._didFinish(shouldComplete);
          } else {
            // animate it back to it's ending position
            this.isPlaying = true;
            this.hasCompleted = false;
            this._hasDur = true; // ******** DOM WRITE ****************

            this._willChange(true);

            this._setTrans(dur, false);
          }
        }
        /**
         * Add a callback to fire when the animation has finished.
         */

      }, {
        key: "onFinish",
        value: function onFinish(callback, opts) {
          if (opts && opts.clearExistingCallbacks) {
            this._onFinishCallbacks = this._onFinishOneTimeCallbacks = undefined;
          }

          if (opts && opts.oneTimeCallback) {
            this._onFinishOneTimeCallbacks = this._onFinishOneTimeCallbacks || [];

            this._onFinishOneTimeCallbacks.push(callback);
          } else {
            this._onFinishCallbacks = this._onFinishCallbacks || [];

            this._onFinishCallbacks.push(callback);
          }

          return this;
        }
        /**
         * NO DOM
         * RECURSION
         */

      }, {
        key: "_didFinishAll",
        value: function _didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations) {
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion28 = true;
            var _didIteratorError28 = false;
            var _iteratorError28 = undefined;

            try {
              for (var _iterator28 = children[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
                var child = _step28.value;

                child._didFinishAll(hasCompleted, finishAsyncAnimations, finishNoDurationAnimations);
              }
            } catch (err) {
              _didIteratorError28 = true;
              _iteratorError28 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion28 && _iterator28["return"] != null) {
                  _iterator28["return"]();
                }
              } finally {
                if (_didIteratorError28) {
                  throw _iteratorError28;
                }
              }
            }
          }

          if (finishAsyncAnimations && this._isAsync || finishNoDurationAnimations && !this._isAsync) {
            this._didFinish(hasCompleted);
          }
        }
        /**
         * NO RECURSION
         */

      }, {
        key: "_didFinish",
        value: function _didFinish(hasCompleted) {
          this.isPlaying = false;
          this.hasCompleted = hasCompleted;

          if (this._onFinishCallbacks) {
            // run all finish callbacks
            var _iteratorNormalCompletion29 = true;
            var _didIteratorError29 = false;
            var _iteratorError29 = undefined;

            try {
              for (var _iterator29 = this._onFinishCallbacks[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                var callback = _step29.value;
                callback(this);
              }
            } catch (err) {
              _didIteratorError29 = true;
              _iteratorError29 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion29 && _iterator29["return"] != null) {
                  _iterator29["return"]();
                }
              } finally {
                if (_didIteratorError29) {
                  throw _iteratorError29;
                }
              }
            }
          }

          if (this._onFinishOneTimeCallbacks) {
            // run all "onetime" finish callbacks
            var _iteratorNormalCompletion30 = true;
            var _didIteratorError30 = false;
            var _iteratorError30 = undefined;

            try {
              for (var _iterator30 = this._onFinishOneTimeCallbacks[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
                var _callback = _step30.value;

                _callback(this);
              }
            } catch (err) {
              _didIteratorError30 = true;
              _iteratorError30 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion30 && _iterator30["return"] != null) {
                  _iterator30["return"]();
                }
              } finally {
                if (_didIteratorError30) {
                  throw _iteratorError30;
                }
              }
            }

            this._onFinishOneTimeCallbacks.length = 0;
          }
        }
        /**
         * Reverse the animation.
         */

      }, {
        key: "reverse",
        value: function reverse() {
          var shouldReverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion31 = true;
            var _didIteratorError31 = false;
            var _iteratorError31 = undefined;

            try {
              for (var _iterator31 = children[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
                var child = _step31.value;
                child.reverse(shouldReverse);
              }
            } catch (err) {
              _didIteratorError31 = true;
              _iteratorError31 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion31 && _iterator31["return"] != null) {
                  _iterator31["return"]();
                }
              } finally {
                if (_didIteratorError31) {
                  throw _iteratorError31;
                }
              }
            }
          }

          this._isReverse = !!shouldReverse;
          return this;
        }
        /**
         * Recursively destroy this animation and all child animations.
         */

      }, {
        key: "destroy",
        value: function destroy() {
          this._didFinish(false);

          this._destroyed = true;
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion32 = true;
            var _didIteratorError32 = false;
            var _iteratorError32 = undefined;

            try {
              for (var _iterator32 = children[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
                var child = _step32.value;
                child.destroy();
              }
            } catch (err) {
              _didIteratorError32 = true;
              _iteratorError32 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion32 && _iterator32["return"] != null) {
                  _iterator32["return"]();
                }
              } finally {
                if (_didIteratorError32) {
                  throw _iteratorError32;
                }
              }
            }
          }

          this._clearAsync();

          if (this._elements) {
            this._elements.length = 0;
          }

          if (this._readCallbacks) {
            this._readCallbacks.length = 0;
          }

          if (this._writeCallbacks) {
            this._writeCallbacks.length = 0;
          }

          this.parent = undefined;

          if (this._childAnimations) {
            this._childAnimations.length = 0;
          }

          if (this._onFinishCallbacks) {
            this._onFinishCallbacks.length = 0;
          }

          if (this._onFinishOneTimeCallbacks) {
            this._onFinishOneTimeCallbacks.length = 0;
          }
        }
        /**
         * NO DOM
         */

      }, {
        key: "_transEl",
        value: function _transEl() {
          // get the lowest level element that has an Animator
          var children = this._childAnimations;

          if (children) {
            var _iteratorNormalCompletion33 = true;
            var _didIteratorError33 = false;
            var _iteratorError33 = undefined;

            try {
              for (var _iterator33 = children[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
                var child = _step33.value;

                var targetEl = child._transEl();

                if (targetEl) {
                  return targetEl;
                }
              }
            } catch (err) {
              _didIteratorError33 = true;
              _iteratorError33 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion33 && _iterator33["return"] != null) {
                  _iterator33["return"]();
                }
              } finally {
                if (_didIteratorError33) {
                  throw _iteratorError33;
                }
              }
            }
          }

          return this._hasTweenEffect && this._hasDur && this._elements !== undefined && this._elements.length > 0 ? this._elements[0] : null;
        }
      }]);

      return Animator;
    }();

    var create = function create(animationBuilder, baseEl, opts) {
      if (animationBuilder) {
        return animationBuilder(Animator, baseEl, opts);
      }

      return Promise.resolve(new Animator());
    };
    /***/

  }
}]);
//# sourceMappingURL=index-69c37885-js-latest.js.map