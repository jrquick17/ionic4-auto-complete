function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
    \**************************************************************/

  /*! exports provided: ion_tab, ion_tabs */

  /***/
  function node_modulesIonicCoreDistEsmIonTab_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tab", function () {
      return Tab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_tabs", function () {
      return Tabs;
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


    var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./framework-delegate-c2e2e1f4.js */
    "./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js");

    var Tab =
    /*#__PURE__*/
    function () {
      function Tab(hostRef) {
        _classCallCheck(this, Tab);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.loaded = false;
        /** @internal */

        this.active = false;
      }

      _createClass(Tab, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {}
        /** Set the active component for the tab */

      }, {
        key: "setActive",
        value: function setActive() {
          return regeneratorRuntime.async(function setActive$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return regeneratorRuntime.awrap(this.prepareLazyLoaded());

                case 2:
                  this.active = true;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "prepareLazyLoaded",
        value: function prepareLazyLoaded() {
          if (!this.loaded && this.component != null) {
            this.loaded = true;

            try {
              return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_2__["a"])(this.delegate, this.el, this.component, ['ion-page']);
            } catch (e) {
              console.error(e);
            }
          }

          return Promise.resolve(undefined);
        }
      }, {
        key: "render",
        value: function render() {
          var tab = this.tab,
              active = this.active,
              component = this.component;
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "tabpanel",
            "aria-hidden": !active ? 'true' : null,
            "aria-labelledby": "tab-button-".concat(tab),
            "class": {
              'ion-page': component === undefined,
              'tab-hidden': !active
            }
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
          return ":host(.tab-hidden){display:none!important}";
        }
      }]);

      return Tab;
    }();

    var Tabs =
    /*#__PURE__*/
    function () {
      function Tabs(hostRef) {
        var _this = this;

        _classCallCheck(this, Tabs);

        Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.transitioning = false;
        /** @internal */

        this.useRouter = false;

        this.onTabClicked = function (ev) {
          var _ev$detail = ev.detail,
              href = _ev$detail.href,
              tab = _ev$detail.tab;

          if (_this.useRouter && href !== undefined) {
            var router = document.querySelector('ion-router');

            if (router) {
              router.push(href);
            }
          } else {
            _this.select(tab);
          }
        };

        this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionNavWillLoad", 7);
        this.ionTabsWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionTabsWillChange", 3);
        this.ionTabsDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "ionTabsDidChange", 3);
      }

      _createClass(Tabs, [{
        key: "componentWillLoad",
        value: function componentWillLoad() {
          var tabs;
          return regeneratorRuntime.async(function componentWillLoad$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!this.useRouter) {
                    this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                  }

                  if (this.useRouter) {
                    _context2.next = 5;
                    break;
                  }

                  tabs = this.tabs;
                  _context2.next = 5;
                  return regeneratorRuntime.awrap(this.select(tabs[0]));

                case 5:
                  this.ionNavWillLoad.emit();

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "componentWillRender",
        value: function componentWillRender() {
          var tabBar = this.el.querySelector('ion-tab-bar');

          if (tabBar) {
            var tab = this.selectedTab ? this.selectedTab.tab : undefined;
            tabBar.selectedTab = tab;
          }
        }
        /**
         * Select a tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "select",
        value: function select(tab) {
          var selectedTab;
          return regeneratorRuntime.async(function select$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  selectedTab = _getTab(this.tabs, tab);

                  if (this.shouldSwitch(selectedTab)) {
                    _context3.next = 3;
                    break;
                  }

                  return _context3.abrupt("return", false);

                case 3:
                  _context3.next = 5;
                  return regeneratorRuntime.awrap(this.setActive(selectedTab));

                case 5:
                  _context3.next = 7;
                  return regeneratorRuntime.awrap(this.notifyRouter());

                case 7:
                  this.tabSwitch();
                  return _context3.abrupt("return", true);

                case 9:
                case "end":
                  return _context3.stop();
              }
            }
          }, null, this);
        }
        /**
         * Get a specific tab by the value of its `tab` property or an element reference.
         *
         * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
         */

      }, {
        key: "getTab",
        value: function getTab(tab) {
          return regeneratorRuntime.async(function getTab$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", _getTab(this.tabs, tab));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, null, this);
        }
        /**
         * Get the currently selected tab.
         */

      }, {
        key: "getSelected",
        value: function getSelected() {
          return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
        }
        /** @internal */

      }, {
        key: "setRouteId",
        value: function setRouteId(id) {
          var _this2 = this;

          var selectedTab;
          return regeneratorRuntime.async(function setRouteId$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  selectedTab = _getTab(this.tabs, id);

                  if (this.shouldSwitch(selectedTab)) {
                    _context5.next = 3;
                    break;
                  }

                  return _context5.abrupt("return", {
                    changed: false,
                    element: this.selectedTab
                  });

                case 3:
                  _context5.next = 5;
                  return regeneratorRuntime.awrap(this.setActive(selectedTab));

                case 5:
                  return _context5.abrupt("return", {
                    changed: true,
                    element: this.selectedTab,
                    markVisible: function markVisible() {
                      return _this2.tabSwitch();
                    }
                  });

                case 6:
                case "end":
                  return _context5.stop();
              }
            }
          }, null, this);
        }
        /** @internal */

      }, {
        key: "getRouteId",
        value: function getRouteId() {
          var tabId;
          return regeneratorRuntime.async(function getRouteId$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  tabId = this.selectedTab && this.selectedTab.tab;
                  return _context6.abrupt("return", tabId !== undefined ? {
                    id: tabId,
                    element: this.selectedTab
                  } : undefined);

                case 2:
                case "end":
                  return _context6.stop();
              }
            }
          }, null, this);
        }
      }, {
        key: "setActive",
        value: function setActive(selectedTab) {
          if (this.transitioning) {
            return Promise.reject('transitioning already happening');
          }

          this.transitioning = true;
          this.leavingTab = this.selectedTab;
          this.selectedTab = selectedTab;
          this.ionTabsWillChange.emit({
            tab: selectedTab.tab
          });
          return selectedTab.setActive();
        }
      }, {
        key: "tabSwitch",
        value: function tabSwitch() {
          var selectedTab = this.selectedTab;
          var leavingTab = this.leavingTab;
          this.leavingTab = undefined;
          this.transitioning = false;

          if (!selectedTab) {
            return;
          }

          if (leavingTab !== selectedTab) {
            if (leavingTab) {
              leavingTab.active = false;
            }

            this.ionTabsDidChange.emit({
              tab: selectedTab.tab
            });
          }
        }
      }, {
        key: "notifyRouter",
        value: function notifyRouter() {
          if (this.useRouter) {
            var router = document.querySelector('ion-router');

            if (router) {
              return router.navChanged('forward');
            }
          }

          return Promise.resolve(false);
        }
      }, {
        key: "shouldSwitch",
        value: function shouldSwitch(selectedTab) {
          var leavingTab = this.selectedTab;
          return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onIonTabButtonClick: this.onTabClicked
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "top"
          }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "tabs-inner"
          }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", {
            name: "bottom"
          }));
        }
      }, {
        key: "tabs",
        get: function get() {
          return Array.from(this.el.querySelectorAll('ion-tab'));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "style",
        get: function get() {
          return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
        }
      }]);

      return Tabs;
    }();

    var _getTab = function _getTab(tabs, tab) {
      var tabEl = typeof tab === 'string' ? tabs.find(function (t) {
        return t.tab === tab;
      }) : tab;

      if (!tabEl) {
        console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
      }

      return tabEl;
    };
    /***/

  }
}]);
//# sourceMappingURL=69-latest.js.map