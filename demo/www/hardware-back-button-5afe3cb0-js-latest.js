(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-5afe3cb0-js"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
    \****************************************************************************/

  /*! exports provided: startHardwareBackButton */

  /***/
  function node_modulesIonicCoreDistEsmHardwareBackButton5afe3cb0Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function () {
      return startHardwareBackButton;
    });

    var startHardwareBackButton = function startHardwareBackButton() {
      var doc = document;
      var busy = false;
      doc.addEventListener('backbutton', function () {
        if (busy) {
          return;
        }

        var handlers = [];
        var ev = new CustomEvent('ionBackButton', {
          bubbles: false,
          detail: {
            register: function register(priority, handler) {
              handlers.push({
                priority: priority,
                handler: handler
              });
            }
          }
        });
        doc.dispatchEvent(ev);

        if (handlers.length > 0) {
          var selectedPriority = Number.MIN_SAFE_INTEGER;
          var selectedHandler;
          handlers.forEach(function (_ref) {
            var priority = _ref.priority,
                handler = _ref.handler;

            if (priority >= selectedPriority) {
              selectedPriority = priority;
              selectedHandler = handler;
            }
          });
          busy = true;
          executeAction(selectedHandler).then(function () {
            return busy = false;
          });
        }
      });
    };

    var executeAction = function executeAction(handler) {
      var result;
      return regeneratorRuntime.async(function executeAction$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;

              if (!handler) {
                _context.next = 6;
                break;
              }

              result = handler();

              if (!(result != null)) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return regeneratorRuntime.awrap(result);

            case 6:
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[0, 8]]);
    };
    /***/

  }
}]);
//# sourceMappingURL=hardware-back-button-5afe3cb0-js-latest.js.map