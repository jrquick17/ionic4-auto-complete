function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js":
  /*!********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
    \********************************************************************/

  /*! exports provided: P, g */

  /***/
  function node_modulesIonicCoreDistEsmCubicBezier2812fda3Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "P", function () {
      return Point;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getTimeGivenProgression;
    });
    /**
     * Based on:
     * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
     * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
     * TODO: Reduce rounding error
     */


    var Point = function Point(x, y) {
      _classCallCheck(this, Point);

      this.x = x;
      this.y = y;
    };
    /**
     * Given a cubic-bezier curve, get the x value (time) given
     * the y value (progression).
     * Ex: cubic-bezier(0.32, 0.72, 0, 1);
     * P0: (0, 0)
     * P1: (0.32, 0.72)
     * P2: (0, 1)
     * P3: (1, 1)
     *
     * If you give a cubic bezier curve that never reaches the
     * provided progression, this function will return NaN.
     */


    var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
      var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
      return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
    };
    /**
     * Solve a cubic equation in one dimension (time)
     */


    var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
      var partA = 3 * p1 * Math.pow(t - 1, 2);
      var partB = -3 * p2 * t + 3 * p2 + p3 * t;
      var partC = p0 * Math.pow(t - 1, 3);
      return t * (partA + t * partB) - partC;
    };
    /**
     * Find the `t` value for a cubic bezier using Cardano's formula
     */


    var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
      p0 -= refPoint;
      p1 -= refPoint;
      p2 -= refPoint;
      p3 -= refPoint;
      var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
      return roots.filter(function (root) {
        return root >= 0 && root <= 1;
      });
    };

    var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
      var discriminant = b * b - 4 * a * c;

      if (discriminant < 0) {
        return [];
      } else {
        return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
      }
    };

    var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
      if (a === 0) {
        return solveQuadraticEquation(b, c, d);
      }

      b /= a;
      c /= a;
      d /= a;
      var p = (3 * c - b * b) / 3;
      var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

      if (p === 0) {
        return [Math.pow(-q, 1 / 3)];
      } else if (q === 0) {
        return [Math.sqrt(-p), -Math.sqrt(-p)];
      }

      var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

      if (discriminant === 0) {
        return [Math.pow(q / 2, 1 / 2) - b / 3];
      } else if (discriminant > 0) {
        return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
      }

      var r = Math.sqrt(Math.pow(-(p / 3), 3));
      var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
      var s = 2 * Math.pow(r, 1 / 3);
      return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
    \**************************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmFrameworkDelegateC2e2e1f4Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = function attachComponent(delegate, container, component, cssClasses, componentProps) {
      var el;
      return regeneratorRuntime.async(function attachComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!delegate) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

            case 2:
              if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                _context.next = 4;
                break;
              }

              throw new Error('framework delegate is missing');

            case 4:
              el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

              if (cssClasses) {
                cssClasses.forEach(function (c) {
                  return el.classList.add(c);
                });
              }

              if (componentProps) {
                Object.assign(el, componentProps);
              }

              container.appendChild(el);

              if (!el.componentOnReady) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return regeneratorRuntime.awrap(el.componentOnReady());

            case 11:
              return _context.abrupt("return", el);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
    \**************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmHapticC8f1473eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-3476b023.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmIndex3476b023Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var dfChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
          sanitizeElement(dfChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes.item(i);
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(el) {
      return el.children != null ? el.children : el.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm/index-4d91f03a.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
    \*************************************************************/

  /*! exports provided: d, g, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmIndex4d91f03aJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getIonPageElement;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./core-feeeff0d.js */
    "./node_modules/@ionic/core/dist/esm/core-feeeff0d.js");
    /* harmony import */


    var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./constants-3c3e1099.js */
    "./node_modules/@ionic/core/dist/esm/constants-3c3e1099.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-504cdd09-js */
      "ios-transition-504cdd09-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-504cdd09.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-504cdd09.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-fea2bbfb-js */
      "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-fea2bbfb.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-fea2bbfb.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition = function runTransition(opts) {
      var animationBuilder, ani;
      return regeneratorRuntime.async(function runTransition$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(getAnimationBuilder(opts));

            case 2:
              animationBuilder = _context2.sent;
              ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

              return _context2.abrupt("return", ani);

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      });
    };

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder = function getAnimationBuilder(opts) {
      var getAnimation;
      return regeneratorRuntime.async(function getAnimationBuilder$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return", undefined);

            case 2:
              if (!opts.animationBuilder) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", opts.animationBuilder);

            case 4:
              if (!(opts.mode === 'ios')) {
                _context3.next = 10;
                break;
              }

              _context3.next = 7;
              return regeneratorRuntime.awrap(iosTransitionAnimation());

            case 7:
              _context3.t0 = _context3.sent.iosTransitionAnimation;
              _context3.next = 13;
              break;

            case 10:
              _context3.next = 12;
              return regeneratorRuntime.awrap(mdTransitionAnimation());

            case 12:
              _context3.t0 = _context3.sent.mdTransitionAnimation;

            case 13:
              getAnimation = _context3.t0;
              return _context3.abrupt("return", getAnimation);

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      });
    };

    var animation = function animation(animationBuilder, opts) {
      var trans, mod, didComplete;
      return regeneratorRuntime.async(function animation$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(waitForReady(opts, true));

            case 2:
              _context4.prev = 2;
              _context4.next = 5;
              return regeneratorRuntime.awrap(__webpack_require__.e(
              /*! import() | index-69c37885-js */
              "index-69c37885-js").then(__webpack_require__.bind(null,
              /*! ./index-69c37885.js */
              "./node_modules/@ionic/core/dist/esm/index-69c37885.js")));

            case 5:
              mod = _context4.sent;
              _context4.next = 8;
              return regeneratorRuntime.awrap(mod.create(animationBuilder, opts.baseEl, opts));

            case 8:
              trans = _context4.sent;
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](2);
              trans = animationBuilder(opts.baseEl, opts);

            case 14:
              fireWillEvents(opts.enteringEl, opts.leavingEl);
              _context4.next = 17;
              return regeneratorRuntime.awrap(playTransition(trans, opts));

            case 17:
              didComplete = _context4.sent;

              if (opts.progressCallback) {
                opts.progressCallback(undefined);
              }

              if (didComplete) {
                fireDidEvents(opts.enteringEl, opts.leavingEl);
              }

              return _context4.abrupt("return", {
                hasCompleted: didComplete,
                animation: trans
              });

            case 21:
            case "end":
              return _context4.stop();
          }
        }
      }, null, null, [[2, 11]]);
    };

    var noAnimation = function noAnimation(opts) {
      var enteringEl, leavingEl;
      return regeneratorRuntime.async(function noAnimation$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              enteringEl = opts.enteringEl;
              leavingEl = opts.leavingEl;
              _context5.next = 4;
              return regeneratorRuntime.awrap(waitForReady(opts, false));

            case 4:
              fireWillEvents(enteringEl, leavingEl);
              fireDidEvents(enteringEl, leavingEl);
              return _context5.abrupt("return", {
                hasCompleted: true
              });

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      });
    };

    var waitForReady = function waitForReady(opts, defaultDeep) {
      var deep, promises;
      return regeneratorRuntime.async(function waitForReady$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
              promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
              _context6.next = 4;
              return regeneratorRuntime.awrap(Promise.all(promises));

            case 4:
              _context6.next = 6;
              return regeneratorRuntime.awrap(notifyViewReady(opts.viewIsReady, opts.enteringEl));

            case 6:
            case "end":
              return _context6.stop();
          }
        }
      });
    };

    var notifyViewReady = function notifyViewReady(viewIsReady, enteringEl) {
      return regeneratorRuntime.async(function notifyViewReady$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (!viewIsReady) {
                _context7.next = 3;
                break;
              }

              _context7.next = 3;
              return regeneratorRuntime.awrap(viewIsReady(enteringEl));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      });
    };

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

      var promise = new Promise(function (resolve) {
        trans.onFinish(function (currentStep) {
          if (typeof currentStep === 'number') {
            resolve(currentStep === 1);
          } else if (trans.hasCompleted !== undefined) {
            resolve(trans.hasCompleted);
          }
        });
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart(true);
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady = function deepReady(el) {
      var element, stencilEl;
      return regeneratorRuntime.async(function deepReady$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              element = el;

              if (!element) {
                _context8.next = 10;
                break;
              }

              if (!(element.componentOnReady != null)) {
                _context8.next = 8;
                break;
              }

              _context8.next = 5;
              return regeneratorRuntime.awrap(element.componentOnReady());

            case 5:
              stencilEl = _context8.sent;

              if (!(stencilEl != null)) {
                _context8.next = 8;
                break;
              }

              return _context8.abrupt("return");

            case 8:
              _context8.next = 10;
              return regeneratorRuntime.awrap(Promise.all(Array.from(element.children).map(deepReady)));

            case 10:
            case "end":
              return _context8.stop();
          }
        }
      });
    };

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };

    var getIonPageElement = function getIonPageElement(element) {
      if (element.classList.contains('ion-page')) {
        return element;
      }

      var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

      if (ionPage) {
        return ionPage;
      } // idk, return the original element so at least something animates and we don't have a null pointer


      return element;
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmTheme18cbe2ccJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = function openURL(url, ev, direction) {
      var router;
      return regeneratorRuntime.async(function openURL$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context9.next = 5;
                break;
              }

              router = document.querySelector('ion-router');

              if (!router) {
                _context9.next = 5;
                break;
              }

              if (ev != null) {
                ev.preventDefault();
              }

              return _context9.abrupt("return", router.push(url, direction));

            case 5:
              return _context9.abrupt("return", false);

            case 6:
            case "end":
              return _context9.stop();
          }
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
    \*********************************************************************/

  /*! exports provided: f, w */

  /***/
  function node_modulesIonicCoreDistEsmWatchOptions2af96011Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findCheckedOption;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "w", function () {
      return watchForOptions;
    });

    var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
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
        return o.checked === true;
      });
    };
    /***/

  }
}]);
//# sourceMappingURL=common-latest.js.map