(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[54],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js":
/*!****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js ***!
  \****************************************************************/
/*! exports provided: ion_route, ion_route_redirect, ion_router, ion_router_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_route_redirect", function() { return RouteRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_router_link", function() { return RouterLink; });
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index-29df6f59.js */ "./node_modules/@ionic/core/dist/esm/index-29df6f59.js");
/* harmony import */ var _ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ionic-global-08f4fb8a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-08f4fb8a.js");
/* harmony import */ var _helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-5c745fbd.js */ "./node_modules/@ionic/core/dist/esm/helpers-5c745fbd.js");
/* harmony import */ var _theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme-3f0b0c04.js */ "./node_modules/@ionic/core/dist/esm/theme-3f0b0c04.js");












var Route = /*#__PURE__*/function () {
  function Route(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Route);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    /**
     * Relative path that needs to match in order for this route to apply.
     *
     * Accepts paths similar to expressjs so that you can define parameters
     * in the url /foo/:bar where bar would be available in incoming props.
     */

    this.url = '';
    this.ionRouteDataChanged = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this, "ionRouteDataChanged", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Route, [{
    key: "onUpdate",
    value: function onUpdate(newValue) {
      this.ionRouteDataChanged.emit(newValue);
    }
  }, {
    key: "onComponentProps",
    value: function onComponentProps(newValue, oldValue) {
      if (newValue === oldValue) {
        return;
      }

      var keys1 = newValue ? Object.keys(newValue) : [];
      var keys2 = oldValue ? Object.keys(oldValue) : [];

      if (keys1.length !== keys2.length) {
        this.onUpdate(newValue);
        return;
      }

      var _iterator = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(keys1),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var key = _step.value;

          if (newValue[key] !== oldValue[key]) {
            this.onUpdate(newValue);
            return;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.ionRouteDataChanged.emit();
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "url": ["onUpdate"],
        "component": ["onUpdate"],
        "componentProps": ["onComponentProps"]
      };
    }
  }]);

  return Route;
}();

var RouteRedirect = /*#__PURE__*/function () {
  function RouteRedirect(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RouteRedirect);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    this.ionRouteRedirectChanged = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this, "ionRouteRedirectChanged", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RouteRedirect, [{
    key: "propDidChange",
    value: function propDidChange() {
      this.ionRouteRedirectChanged.emit();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.ionRouteRedirectChanged.emit();
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "from": ["propDidChange"],
        "to": ["propDidChange"]
      };
    }
  }]);

  return RouteRedirect;
}();

var ROUTER_INTENT_NONE = 'root';
var ROUTER_INTENT_FORWARD = 'forward';
var ROUTER_INTENT_BACK = 'back';

var generatePath = function generatePath(segments) {
  var path = segments.filter(function (s) {
    return s.length > 0;
  }).join('/');
  return '/' + path;
};

var chainToPath = function chainToPath(chain) {
  var path = [];

  var _iterator2 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(chain),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var route = _step2.value;

      var _iterator3 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(route.path),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var segment = _step3.value;

          if (segment[0] === ':') {
            var param = route.params && route.params[segment.slice(1)];

            if (!param) {
              return null;
            }

            path.push(param);
          } else if (segment !== '') {
            path.push(segment);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  return path;
};

var writePath = function writePath(history, root, useHash, path, direction, state, queryString) {
  var url = generatePath([].concat(Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(parsePath(root)), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(path)));

  if (useHash) {
    url = '#' + url;
  }

  if (queryString !== undefined) {
    url = url + '?' + queryString;
  }

  if (direction === ROUTER_INTENT_FORWARD) {
    history.pushState(state, '', url);
  } else {
    history.replaceState(state, '', url);
  }
};

var removePrefix = function removePrefix(prefix, path) {
  if (prefix.length > path.length) {
    return null;
  }

  if (prefix.length <= 1 && prefix[0] === '') {
    return path;
  }

  for (var i = 0; i < prefix.length; i++) {
    if (prefix[i].length > 0 && prefix[i] !== path[i]) {
      return null;
    }
  }

  if (path.length === prefix.length) {
    return [''];
  }

  return path.slice(prefix.length);
};

var readPath = function readPath(loc, root, useHash) {
  var pathname = loc.pathname;

  if (useHash) {
    var hash = loc.hash;
    pathname = hash[0] === '#' ? hash.slice(1) : '';
  }

  var prefix = parsePath(root);
  var path = parsePath(pathname);
  return removePrefix(prefix, path);
};

var parsePath = function parsePath(path) {
  if (path == null) {
    return [''];
  }

  var removeQueryString = path.split('?')[0];
  var segments = removeQueryString.split('/').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s.length > 0;
  });

  if (segments.length === 0) {
    return [''];
  } else {
    return segments;
  }
};

var printRoutes = function printRoutes(routes) {
  console.group("[ion-core] ROUTES[".concat(routes.length, "]"));

  var _iterator4 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(routes),
      _step4;

  try {
    var _loop = function _loop() {
      var chain = _step4.value;
      var path = [];
      chain.forEach(function (r) {
        return path.push.apply(path, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(r.path));
      });
      var ids = chain.map(function (r) {
        return r.id;
      });
      console.debug("%c ".concat(generatePath(path)), 'font-weight: bold; padding-left: 20px', '=>\t', "(".concat(ids.join(', '), ")"));
    };

    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }

  console.groupEnd();
};

var printRedirects = function printRedirects(redirects) {
  console.group("[ion-core] REDIRECTS[".concat(redirects.length, "]"));

  var _iterator5 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(redirects),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var redirect = _step5.value;

      if (redirect.to) {
        console.debug('FROM: ', "$c ".concat(generatePath(redirect.from)), 'font-weight: bold', ' TO: ', "$c ".concat(generatePath(redirect.to)), 'font-weight: bold');
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  console.groupEnd();
};

var _writeNavState = /*#__PURE__*/function () {
  var _ref = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(root, chain, direction, index) {
    var changed,
        animation,
        outlet,
        route,
        result,
        _args = arguments;
    return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            changed = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
            animation = _args.length > 5 ? _args[5] : undefined;
            _context.prev = 2;
            // find next navigation outlet in the DOM
            outlet = searchNavNode(root); // make sure we can continue interacting the DOM, otherwise abort

            if (!(index >= chain.length || !outlet)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", changed);

          case 6:
            _context.next = 8;
            return outlet.componentOnReady();

          case 8:
            route = chain[index];
            _context.next = 11;
            return outlet.setRouteId(route.id, route.params, direction, animation);

          case 11:
            result = _context.sent;

            // if the outlet changed the page, reset navigation to neutral (no direction)
            // this means nested outlets will not animate
            if (result.changed) {
              direction = ROUTER_INTENT_NONE;
              changed = true;
            } // recursively set nested outlets


            _context.next = 15;
            return _writeNavState(result.element, chain, direction, index + 1, changed, animation);

          case 15:
            changed = _context.sent;

            if (!result.markVisible) {
              _context.next = 19;
              break;
            }

            _context.next = 19;
            return result.markVisible();

          case 19:
            return _context.abrupt("return", changed);

          case 22:
            _context.prev = 22;
            _context.t0 = _context["catch"](2);
            console.error(_context.t0);
            return _context.abrupt("return", false);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 22]]);
  }));

  return function writeNavState(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var readNavState = /*#__PURE__*/function () {
  var _ref2 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(root) {
    var ids, outlet, node, id;
    return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            ids = [];
            node = root; // tslint:disable-next-line:no-constant-condition

          case 2:
            if (false) {}

            outlet = searchNavNode(node);

            if (!outlet) {
              _context2.next = 17;
              break;
            }

            _context2.next = 7;
            return outlet.getRouteId();

          case 7:
            id = _context2.sent;

            if (!id) {
              _context2.next = 14;
              break;
            }

            node = id.element;
            id.element = undefined;
            ids.push(id);
            _context2.next = 15;
            break;

          case 14:
            return _context2.abrupt("break", 20);

          case 15:
            _context2.next = 18;
            break;

          case 17:
            return _context2.abrupt("break", 20);

          case 18:
            _context2.next = 2;
            break;

          case 20:
            return _context2.abrupt("return", {
              ids: ids,
              outlet: outlet
            });

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function readNavState(_x5) {
    return _ref2.apply(this, arguments);
  };
}();

var waitUntilNavNode = function waitUntilNavNode() {
  if (searchNavNode(document.body)) {
    return Promise.resolve();
  }

  return new Promise(function (resolve) {
    window.addEventListener('ionNavWillLoad', resolve, {
      once: true
    });
  });
};

var QUERY = ':not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet';

var searchNavNode = function searchNavNode(root) {
  if (!root) {
    return undefined;
  }

  if (root.matches(QUERY)) {
    return root;
  }

  var outlet = root.querySelector(QUERY);
  return outlet ? outlet : undefined;
};

var matchesRedirect = function matchesRedirect(input, route) {
  var from = route.from,
      to = route.to;

  if (to === undefined) {
    return false;
  }

  if (from.length > input.length) {
    return false;
  }

  for (var i = 0; i < from.length; i++) {
    var expected = from[i];

    if (expected === '*') {
      return true;
    }

    if (expected !== input[i]) {
      return false;
    }
  }

  return from.length === input.length;
};

var routeRedirect = function routeRedirect(path, routes) {
  return routes.find(function (route) {
    return matchesRedirect(path, route);
  });
};

var matchesIDs = function matchesIDs(ids, chain) {
  var len = Math.min(ids.length, chain.length);
  var i = 0;

  for (; i < len; i++) {
    if (ids[i].toLowerCase() !== chain[i].id) {
      break;
    }
  }

  return i;
};

var matchesPath = function matchesPath(inputPath, chain) {
  var segments = new RouterSegments(inputPath);
  var matchesDefault = false;
  var allparams;

  for (var i = 0; i < chain.length; i++) {
    var path = chain[i].path;

    if (path[0] === '') {
      matchesDefault = true;
    } else {
      var _iterator6 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(path),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var segment = _step6.value;
          var data = segments.next(); // data param

          if (segment[0] === ':') {
            if (data === '') {
              return null;
            }

            allparams = allparams || [];
            var params = allparams[i] || (allparams[i] = {});
            params[segment.slice(1)] = data;
          } else if (data !== segment) {
            return null;
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      matchesDefault = false;
    }
  }

  var matches = matchesDefault ? matchesDefault === (segments.next() === '') : true;

  if (!matches) {
    return null;
  }

  if (allparams) {
    return chain.map(function (route, i) {
      return {
        id: route.id,
        path: route.path,
        params: mergeParams(route.params, allparams[i])
      };
    });
  }

  return chain;
};

var mergeParams = function mergeParams(a, b) {
  if (!a && b) {
    return b;
  } else if (a && !b) {
    return a;
  } else if (a && b) {
    return Object.assign(Object.assign({}, a), b);
  }

  return undefined;
};

var routerIDsToChain = function routerIDsToChain(ids, chains) {
  var match = null;
  var maxMatches = 0;
  var plainIDs = ids.map(function (i) {
    return i.id;
  });

  var _iterator7 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(chains),
      _step7;

  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
      var chain = _step7.value;
      var score = matchesIDs(plainIDs, chain);

      if (score > maxMatches) {
        match = chain;
        maxMatches = score;
      }
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }

  if (match) {
    return match.map(function (route, i) {
      return {
        id: route.id,
        path: route.path,
        params: mergeParams(route.params, ids[i] && ids[i].params)
      };
    });
  }

  return null;
};

var routerPathToChain = function routerPathToChain(path, chains) {
  var match = null;
  var matches = 0;

  var _iterator8 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(chains),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var chain = _step8.value;
      var matchedChain = matchesPath(path, chain);

      if (matchedChain !== null) {
        var score = computePriority(matchedChain);

        if (score > matches) {
          matches = score;
          match = matchedChain;
        }
      }
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }

  return match;
};

var computePriority = function computePriority(chain) {
  var score = 1;
  var level = 1;

  var _iterator9 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(chain),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var route = _step9.value;

      var _iterator10 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(route.path),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var path = _step10.value;

          if (path[0] === ':') {
            score += Math.pow(1, level);
          } else if (path !== '') {
            score += Math.pow(2, level);
          }

          level++;
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  return score;
};

var RouterSegments = /*#__PURE__*/function () {
  function RouterSegments(path) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RouterSegments);

    this.path = path.slice();
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RouterSegments, [{
    key: "next",
    value: function next() {
      if (this.path.length > 0) {
        return this.path.shift();
      }

      return '';
    }
  }]);

  return RouterSegments;
}();

var readRedirects = function readRedirects(root) {
  return Array.from(root.children).filter(function (el) {
    return el.tagName === 'ION-ROUTE-REDIRECT';
  }).map(function (el) {
    var to = readProp(el, 'to');
    return {
      from: parsePath(readProp(el, 'from')),
      to: to == null ? undefined : parsePath(to)
    };
  });
};

var readRoutes = function readRoutes(root) {
  return flattenRouterTree(readRouteNodes(root));
};

var readRouteNodes = function readRouteNodes(root) {
  var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : root;
  return Array.from(node.children).filter(function (el) {
    return el.tagName === 'ION-ROUTE' && el.component;
  }).map(function (el) {
    var component = readProp(el, 'component');

    if (component == null) {
      throw new Error('component missing in ion-route');
    }

    return {
      path: parsePath(readProp(el, 'url')),
      id: component.toLowerCase(),
      params: el.componentProps,
      children: readRouteNodes(root, el)
    };
  });
};

var readProp = function readProp(el, prop) {
  if (prop in el) {
    return el[prop];
  }

  if (el.hasAttribute(prop)) {
    return el.getAttribute(prop);
  }

  return null;
};

var flattenRouterTree = function flattenRouterTree(nodes) {
  var routes = [];

  var _iterator11 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(nodes),
      _step11;

  try {
    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
      var node = _step11.value;
      flattenNode([], routes, node);
    }
  } catch (err) {
    _iterator11.e(err);
  } finally {
    _iterator11.f();
  }

  return routes;
};

var flattenNode = function flattenNode(chain, routes, node) {
  var s = chain.slice();
  s.push({
    id: node.id,
    path: node.path,
    params: node.params
  });

  if (node.children.length === 0) {
    routes.push(s);
    return;
  }

  var _iterator12 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_4__["default"])(node.children),
      _step12;

  try {
    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
      var sub = _step12.value;
      flattenNode(s, routes, sub);
    }
  } catch (err) {
    _iterator12.e(err);
  } finally {
    _iterator12.f();
  }
};

var Router = /*#__PURE__*/function () {
  function Router(hostRef) {
    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Router);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    this.previousPath = null;
    this.busy = false;
    this.state = 0;
    this.lastState = 0;
    /**
     * By default `ion-router` will match the routes at the root path ("/").
     * That can be changed when
     *
     */

    this.root = '/';
    /**
     * The router can work in two "modes":
     * - With hash: `/index.html#/path/to/page`
     * - Without hash: `/path/to/page`
     *
     * Using one or another might depend in the requirements of your app and/or where it's deployed.
     *
     * Usually "hash-less" navigation works better for SEO and it's more user friendly too, but it might
     * requires additional server-side configuration in order to properly work.
     *
     * On the otherside hash-navigation is much easier to deploy, it even works over the file protocol.
     *
     * By default, this property is `true`, change to `false` to allow hash-less URLs.
     */

    this.useHash = true;
    this.ionRouteWillChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this, "ionRouteWillChange", 7);
    this.ionRouteDidChange = Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this, "ionRouteDidChange", 7);
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Router, [{
    key: "componentWillLoad",
    value: function () {
      var _componentWillLoad = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.debug('[ion-router] router will load');
                _context3.next = 3;
                return waitUntilNavNode();

              case 3:
                console.debug('[ion-router] found nav');
                _context3.next = 6;
                return this.onRoutesChanged();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentWillLoad() {
        return _componentWillLoad.apply(this, arguments);
      }

      return componentWillLoad;
    }()
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      window.addEventListener('ionRouteRedirectChanged', Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_9__["e"])(this.onRedirectChanged.bind(this), 10));
      window.addEventListener('ionRouteDataChanged', Object(_helpers_5c745fbd_js__WEBPACK_IMPORTED_MODULE_9__["e"])(this.onRoutesChanged.bind(this), 100));
    }
  }, {
    key: "onPopState",
    value: function onPopState() {
      var direction = this.historyDirection();
      var path = this.getPath();
      console.debug('[ion-router] URL changed -> update nav', path, direction);
      return this.writeNavStateRoot(path, direction);
    }
  }, {
    key: "onBackButton",
    value: function onBackButton(ev) {
      var _this = this;

      ev.detail.register(0, function (processNextHandler) {
        _this.back();

        processNextHandler();
      });
    }
    /**
     * Navigate to the specified URL.
     *
     * @param url The url to navigate to.
     * @param direction The direction of the animation. Defaults to `"forward"`.
     */

  }, {
    key: "push",
    value: function push(url) {
      var direction = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'forward';
      var animation = arguments.length > 2 ? arguments[2] : undefined;

      if (url.startsWith('.')) {
        url = new URL(url, window.location.href).pathname;
      }

      console.debug('[ion-router] URL pushed -> updating nav', url, direction);
      var path = parsePath(url);
      var queryString = url.split('?')[1];
      this.setPath(path, direction, queryString);
      return this.writeNavStateRoot(path, direction, animation);
    }
    /**
     * Go back to previous page in the window.history.
     */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
      return Promise.resolve(this.waitPromise);
    }
    /** @internal */

  }, {
    key: "printDebug",
    value: function () {
      var _printDebug = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.debug('CURRENT PATH', this.getPath());
                console.debug('PREVIOUS PATH', this.previousPath);
                printRoutes(readRoutes(this.el));
                printRedirects(readRedirects(this.el));

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function printDebug() {
        return _printDebug.apply(this, arguments);
      }

      return printDebug;
    }()
    /** @internal */

  }, {
    key: "navChanged",
    value: function () {
      var _navChanged = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(direction) {
        var _yield$readNavState, ids, outlet, routes, chain, path;

        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.busy) {
                  _context5.next = 3;
                  break;
                }

                console.warn('[ion-router] router is busy, navChanged was cancelled');
                return _context5.abrupt("return", false);

              case 3:
                _context5.next = 5;
                return readNavState(window.document.body);

              case 5:
                _yield$readNavState = _context5.sent;
                ids = _yield$readNavState.ids;
                outlet = _yield$readNavState.outlet;
                routes = readRoutes(this.el);
                chain = routerIDsToChain(ids, routes);

                if (chain) {
                  _context5.next = 13;
                  break;
                }

                console.warn('[ion-router] no matching URL for ', ids.map(function (i) {
                  return i.id;
                }));
                return _context5.abrupt("return", false);

              case 13:
                path = chainToPath(chain);

                if (path) {
                  _context5.next = 17;
                  break;
                }

                console.warn('[ion-router] router could not match path because some required param is missing');
                return _context5.abrupt("return", false);

              case 17:
                console.debug('[ion-router] nav changed -> update URL', ids, path);
                this.setPath(path, direction);
                _context5.next = 21;
                return this.safeWriteNavState(outlet, chain, ROUTER_INTENT_NONE, path, null, ids.length);

              case 21:
                return _context5.abrupt("return", true);

              case 22:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function navChanged(_x6) {
        return _navChanged.apply(this, arguments);
      }

      return navChanged;
    }()
  }, {
    key: "onRedirectChanged",
    value: function onRedirectChanged() {
      var path = this.getPath();

      if (path && routeRedirect(path, readRedirects(this.el))) {
        this.writeNavStateRoot(path, ROUTER_INTENT_NONE);
      }
    }
  }, {
    key: "onRoutesChanged",
    value: function onRoutesChanged() {
      return this.writeNavStateRoot(this.getPath(), ROUTER_INTENT_NONE);
    }
  }, {
    key: "historyDirection",
    value: function historyDirection() {
      var win = window;

      if (win.history.state === null) {
        this.state++;
        win.history.replaceState(this.state, win.document.title, win.document.location && win.document.location.href);
      }

      var state = win.history.state;
      var lastState = this.lastState;
      this.lastState = state;

      if (state > lastState || state >= lastState && lastState > 0) {
        return ROUTER_INTENT_FORWARD;
      } else if (state < lastState) {
        return ROUTER_INTENT_BACK;
      } else {
        return ROUTER_INTENT_NONE;
      }
    }
  }, {
    key: "writeNavStateRoot",
    value: function () {
      var _writeNavStateRoot = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(path, direction, animation) {
        var redirects, redirect, redirectFrom, routes, chain;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (path) {
                  _context6.next = 3;
                  break;
                }

                console.error('[ion-router] URL is not part of the routing set');
                return _context6.abrupt("return", false);

              case 3:
                // lookup redirect rule
                redirects = readRedirects(this.el);
                redirect = routeRedirect(path, redirects);
                redirectFrom = null;

                if (redirect) {
                  this.setPath(redirect.to, direction);
                  redirectFrom = redirect.from;
                  path = redirect.to;
                } // lookup route chain


                routes = readRoutes(this.el);
                chain = routerPathToChain(path, routes);

                if (chain) {
                  _context6.next = 12;
                  break;
                }

                console.error('[ion-router] the path does not match any route');
                return _context6.abrupt("return", false);

              case 12:
                return _context6.abrupt("return", this.safeWriteNavState(document.body, chain, direction, path, redirectFrom, 0, animation));

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function writeNavStateRoot(_x7, _x8, _x9) {
        return _writeNavStateRoot.apply(this, arguments);
      }

      return writeNavStateRoot;
    }()
  }, {
    key: "safeWriteNavState",
    value: function () {
      var _safeWriteNavState = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(node, chain, direction, path, redirectFrom) {
        var index,
            animation,
            unlock,
            changed,
            _args7 = arguments;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                index = _args7.length > 5 && _args7[5] !== undefined ? _args7[5] : 0;
                animation = _args7.length > 6 ? _args7[6] : undefined;
                _context7.next = 4;
                return this.lock();

              case 4:
                unlock = _context7.sent;
                changed = false;
                _context7.prev = 6;
                _context7.next = 9;
                return this.writeNavState(node, chain, direction, path, redirectFrom, index, animation);

              case 9:
                changed = _context7.sent;
                _context7.next = 15;
                break;

              case 12:
                _context7.prev = 12;
                _context7.t0 = _context7["catch"](6);
                console.error(_context7.t0);

              case 15:
                unlock();
                return _context7.abrupt("return", changed);

              case 17:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[6, 12]]);
      }));

      function safeWriteNavState(_x10, _x11, _x12, _x13, _x14) {
        return _safeWriteNavState.apply(this, arguments);
      }

      return safeWriteNavState;
    }()
  }, {
    key: "lock",
    value: function () {
      var _lock = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8() {
        var p, resolve;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                p = this.waitPromise;
                this.waitPromise = new Promise(function (r) {
                  return resolve = r;
                });

                if (!(p !== undefined)) {
                  _context8.next = 5;
                  break;
                }

                _context8.next = 5;
                return p;

              case 5:
                return _context8.abrupt("return", resolve);

              case 6:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function lock() {
        return _lock.apply(this, arguments);
      }

      return lock;
    }()
  }, {
    key: "writeNavState",
    value: function () {
      var _writeNavState2 = Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(node, chain, direction, path, redirectFrom) {
        var index,
            animation,
            routeEvent,
            changed,
            _args9 = arguments;
        return _Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                index = _args9.length > 5 && _args9[5] !== undefined ? _args9[5] : 0;
                animation = _args9.length > 6 ? _args9[6] : undefined;

                if (!this.busy) {
                  _context9.next = 5;
                  break;
                }

                console.warn('[ion-router] router is busy, transition was cancelled');
                return _context9.abrupt("return", false);

              case 5:
                this.busy = true; // generate route event and emit will change

                routeEvent = this.routeChangeEvent(path, redirectFrom);

                if (routeEvent) {
                  this.ionRouteWillChange.emit(routeEvent);
                }

                _context9.next = 10;
                return _writeNavState(node, chain, direction, index, false, animation);

              case 10:
                changed = _context9.sent;
                this.busy = false;

                if (changed) {
                  console.debug('[ion-router] route changed', path);
                } // emit did change


                if (routeEvent) {
                  this.ionRouteDidChange.emit(routeEvent);
                }

                return _context9.abrupt("return", changed);

              case 15:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function writeNavState(_x15, _x16, _x17, _x18, _x19) {
        return _writeNavState2.apply(this, arguments);
      }

      return writeNavState;
    }()
  }, {
    key: "setPath",
    value: function setPath(path, direction, queryString) {
      this.state++;
      writePath(window.history, this.root, this.useHash, path, direction, this.state, queryString);
    }
  }, {
    key: "getPath",
    value: function getPath() {
      return readPath(window.location, this.root, this.useHash);
    }
  }, {
    key: "routeChangeEvent",
    value: function routeChangeEvent(path, redirectFromPath) {
      var from = this.previousPath;
      var to = generatePath(path);
      this.previousPath = to;

      if (to === from) {
        return null;
      }

      var redirectedFrom = redirectFromPath ? generatePath(redirectFromPath) : null;
      return {
        from: from,
        redirectedFrom: redirectedFrom,
        to: to
      };
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["e"])(this);
    }
  }]);

  return Router;
}();

var routerLinkCss = ":host{--background:transparent;--color:var(--ion-color-primary, #3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";

var RouterLink = /*#__PURE__*/function () {
  function RouterLink(hostRef) {
    var _this2 = this;

    Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, RouterLink);

    Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */

    this.routerDirection = 'forward';

    this.onClick = function (ev) {
      Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__["o"])(_this2.href, ev, _this2.routerDirection, _this2.routerAnimation);
    };
  }

  Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(RouterLink, [{
    key: "render",
    value: function render() {
      var _Object$assign;

      var mode = Object(_ionic_global_08f4fb8a_js__WEBPACK_IMPORTED_MODULE_8__["b"])(this);
      var attrs = {
        href: this.href,
        rel: this.rel,
        target: this.target
      };
      return Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["h"])(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["H"], {
        onClick: this.onClick,
        class: Object.assign(Object.assign({}, Object(_theme_3f0b0c04_js__WEBPACK_IMPORTED_MODULE_10__["c"])(this.color)), (_Object$assign = {}, Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(_Users_jrquick_development_encounting_ionic4_auto_complete_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'ion-activatable', true), _Object$assign))
      }, Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["h"])("a", Object.assign({}, attrs), Object(_index_29df6f59_js__WEBPACK_IMPORTED_MODULE_7__["h"])("slot", null)));
    }
  }]);

  return RouterLink;
}();

RouterLink.style = routerLinkCss;


/***/ })

}]);
//# sourceMappingURL=54.js.map