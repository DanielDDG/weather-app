/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/modules/calls.js":
      /*!******************************!*\
  !*** ./src/modules/calls.js ***!
  \******************************/
      /***/ () => {
        const searchInput = document.getElementById("location");
        const submitButton = document.getElementById("glassContainer");
        const locationName = document.getElementById("locationName");
        const dateAndTime = document.getElementById("dateAndTime");
        const forecastTitle = document.getElementById("forecastTitle");
        let selectedTemp = "f";

        const elementNames = [
          "Wind",
          "Humidity",
          "UV Index",
          "Visibility",
          "Cloudiness",
          "Chance of Rain",
          "Sunrise",
          "Sunset",
          "Max Temperature",
        ];

        async function retrieveWeather(location) {
          const fetchedForecastData = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=a016d2051be44e2f9be171214241005&q=${location}&days=3`
          );

          const forecastData = await fetchedForecastData.json();
          return forecastData;
        }

        function setForecastDays(forecast) {
          for (let i = 1; i < 4; i++) {
            let day = document.getElementById(`day${i}`);
            let temp = document.getElementById(`temp${i}`);
            let nextDate = new Date();
            nextDate.setDate(nextDate.getDate() + i);

            const options = {
              weekday: "long",
            };

            let weekday = nextDate.toLocaleDateString(undefined, options);
            day.textContent = weekday;

            temp.textContent = `${
              forecast.forecast.forecastday[i - 1].day[
                "avgtemp_" + selectedTemp
              ]
            }°${selectedTemp.toUpperCase()}`;

            if (day.classList.contains("hidden")) {
              day.classList.remove("hidden");
            }

            if (temp.classList.contains("hidden")) {
              temp.classList.remove("hidden");
            }
          }
        }

        function setLocationInformation(forecast) {
          locationName.textContent = `${forecast.location.name}, ${forecast.location.region}`;
          dateAndTime.textContent = new Date();
          let upperTemp = "°" + selectedTemp.toUpperCase();

          document.getElementById("currentTemp").textContent = `${
            forecast.current["temp_" + selectedTemp]
          }${upperTemp}`;
          document.getElementById(
            "weatherDesc"
          ).textContent = `${forecast.current.condition.text}`;
          document.getElementById("feelsLike").textContent = `Feels like ${
            forecast.current["feelslike_" + selectedTemp]
          }${upperTemp}`;
          document.getElementById(
            "windValue"
          ).textContent = `${forecast.current.wind_mph}mph`;
          document.getElementById(
            "humidityValue"
          ).textContent = `${forecast.current.humidity}%`;
          document.getElementById(
            "uvValue"
          ).textContent = `${forecast.current.uv}`;
          document.getElementById(
            "visibilityValue"
          ).textContent = `${forecast.current.vis_miles}m`;
          document.getElementById(
            "cloudValue"
          ).textContent = `${forecast.current.cloud}%`;
          document.getElementById(
            "rainValue"
          ).textContent = `${forecast.forecast.forecastday[0].day.daily_chance_of_rain}%`;
          document.getElementById(
            "riseValue"
          ).textContent = `${forecast.forecast.forecastday[0].astro.sunrise}`;
          document.getElementById(
            "setValue"
          ).textContent = `${forecast.forecast.forecastday[0].astro.sunset}`;
          document.getElementById("maxTempValue").textContent = `${
            forecast.forecast.forecastday[0].day["maxtemp_" + selectedTemp]
          }${upperTemp}`;

          setElementTitles();
          setForecastDays(forecast);
        }

        function setElementTitles() {
          for (i = 0; i < 9; i++) {
            document.getElementById(`title${i}`).textContent = elementNames[i];
          }

          forecastTitle.textContent = "Forecast";
        }

        submitButton.addEventListener("click", (event) => {
          event.preventDefault();
          retrieveWeather(searchInput.value).then((data) => {
            console.log(data);
            setLocationInformation(data);
          });
        });

        (function changeTemperature() {
          const celsiusButton = document.getElementById("celsius");
          const fahrenheitButton = document.getElementById("fahrenheit");

          window.addEventListener("load", () => {
            fahrenheitButton.style.border = "2px solid white";
          });

          fahrenheitButton.addEventListener("click", () => {
            fahrenheitButton.style.border = "2px solid white";
            celsiusButton.style.border = "2px solid rgb(2, 121, 177)";
            selectedTemp = "f";
            submitButton.click();
          });

          celsiusButton.addEventListener("click", () => {
            celsiusButton.style.border = "2px solid white";
            fahrenheitButton.style.border = "2px solid rgb(2, 121, 177)";
            selectedTemp = "c";
            submitButton.click();
          });
        })();

        /***/
      },

    /***/ "./src/modules/styling.js":
      /*!********************************!*\
  !*** ./src/modules/styling.js ***!
  \********************************/
      /***/ () => {
        const searchInput = document.getElementById("location");
        const glassContainer = document.getElementById("glassContainer");

        function setBorders(color) {
          glassContainer.style.borderRight = `2px solid ${color}`;
          glassContainer.style.borderTop = `2px solid ${color}`;
          glassContainer.style.borderBottom = `2px solid ${color}`;
        }

        searchInput.addEventListener("focus", () => {
          setBorders("white");
        });

        searchInput.addEventListener("blur", () => {
          setBorders("rgb(2, 121, 177)");
        });

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
    "use strict";
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _modules_calls__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./modules/calls */ "./src/modules/calls.js");
    /* harmony import */ var _modules_calls__WEBPACK_IMPORTED_MODULE_0___default =
      /*#__PURE__*/ __webpack_require__.n(
        _modules_calls__WEBPACK_IMPORTED_MODULE_0__
      );
    /* harmony import */ var _modules_styling__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./modules/styling */ "./src/modules/styling.js");
    /* harmony import */ var _modules_styling__WEBPACK_IMPORTED_MODULE_1___default =
      /*#__PURE__*/ __webpack_require__.n(
        _modules_styling__WEBPACK_IMPORTED_MODULE_1__
      );
  })();

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUZBQXlGLFNBQVM7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsNENBQTRDLEVBQUU7QUFDOUMsOENBQThDLEVBQUU7QUFDaEQ7QUFDQTs7QUFFQSxzQkFBc0IsR0FBRzs7QUFFekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssR0FBRywyQkFBMkI7O0FBRW5DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDLHVCQUF1QixJQUFJLHlCQUF5QjtBQUNwRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLEVBQUUsVUFBVTtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQSxHQUFHLEVBQUUsVUFBVTtBQUNmO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DO0FBQ0E7QUFDQSxxQkFBcUIsMEJBQTBCO0FBQy9DLHNEQUFzRCxvQkFBb0I7QUFDMUU7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBLHFCQUFxQix1QkFBdUI7QUFDNUM7QUFDQTtBQUNBLHFCQUFxQiwwREFBMEQ7QUFDL0U7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBK0M7QUFDcEU7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBOEM7QUFDbkU7QUFDQTtBQUNBLEdBQUcsRUFBRSxVQUFVOztBQUVmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsT0FBTztBQUNyQixvQ0FBb0MsRUFBRTtBQUN0Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7OztBQzNJRDtBQUNBOztBQUVBO0FBQ0Esa0RBQWtELE1BQU07QUFDeEQsZ0RBQWdELE1BQU07QUFDdEQsbURBQW1ELE1BQU07QUFDekQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7VUNmRDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ055QjtBQUNFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvbW9kdWxlcy9jYWxscy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL3N0eWxpbmcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsYXNzQ29udGFpbmVyXCIpO1xuY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbk5hbWVcIik7XG5jb25zdCBkYXRlQW5kVGltZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZUFuZFRpbWVcIik7XG5jb25zdCBmb3JlY2FzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb3JlY2FzdFRpdGxlXCIpO1xubGV0IHNlbGVjdGVkVGVtcCA9IFwiZlwiO1xuXG5jb25zdCBlbGVtZW50TmFtZXMgPSBbXG4gIFwiV2luZFwiLFxuICBcIkh1bWlkaXR5XCIsXG4gIFwiVVYgSW5kZXhcIixcbiAgXCJWaXNpYmlsaXR5XCIsXG4gIFwiQ2xvdWRpbmVzc1wiLFxuICBcIkNoYW5jZSBvZiBSYWluXCIsXG4gIFwiU3VucmlzZVwiLFxuICBcIlN1bnNldFwiLFxuICBcIk1heCBUZW1wZXJhdHVyZVwiLFxuXTtcblxuYXN5bmMgZnVuY3Rpb24gcmV0cmlldmVXZWF0aGVyKGxvY2F0aW9uKSB7XG4gIGNvbnN0IGZldGNoZWRGb3JlY2FzdERhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9YTAxNmQyMDUxYmU0NGUyZjliZTE3MTIxNDI0MTAwNSZxPSR7bG9jYXRpb259JmRheXM9M2BcbiAgKTtcblxuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmZXRjaGVkRm9yZWNhc3REYXRhLmpzb24oKTtcbiAgcmV0dXJuIGZvcmVjYXN0RGF0YTtcbn1cblxuZnVuY3Rpb24gc2V0Rm9yZWNhc3REYXlzKGZvcmVjYXN0KSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgNDsgaSsrKSB7XG4gICAgbGV0IGRheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBkYXkke2l9YCk7XG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgdGVtcCR7aX1gKTtcbiAgICBsZXQgbmV4dERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIG5leHREYXRlLnNldERhdGUobmV4dERhdGUuZ2V0RGF0ZSgpICsgaSk7XG5cbiAgICBjb25zb2xlLmxvZyhgZGF5JHtpfSBlbGVtZW50OmAsIGRheSk7XG5cbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgfTtcblxuICAgIGxldCB3ZWVrZGF5ID0gbmV4dERhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG4gICAgZGF5LnRleHRDb250ZW50ID0gd2Vla2RheTtcblxuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtcbiAgICAgIGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2kgLSAxXS5kYXlbXCJhdmd0ZW1wX1wiICsgc2VsZWN0ZWRUZW1wXVxuICAgIH3CsCR7c2VsZWN0ZWRUZW1wLnRvVXBwZXJDYXNlKCl9YDtcblxuICAgIGlmIChkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICBkYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBpZiAodGVtcC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIHRlbXAuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0TG9jYXRpb25JbmZvcm1hdGlvbihmb3JlY2FzdCkge1xuICBsb2NhdGlvbk5hbWUudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5sb2NhdGlvbi5uYW1lfSwgJHtmb3JlY2FzdC5sb2NhdGlvbi5yZWdpb259YDtcbiAgZGF0ZUFuZFRpbWUudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSgpO1xuICBsZXQgdXBwZXJUZW1wID0gXCLCsFwiICsgc2VsZWN0ZWRUZW1wLnRvVXBwZXJDYXNlKCk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50VGVtcFwiKS50ZXh0Q29udGVudCA9IGAke1xuICAgIGZvcmVjYXN0LmN1cnJlbnRbXCJ0ZW1wX1wiICsgc2VsZWN0ZWRUZW1wXVxuICB9JHt1cHBlclRlbXB9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJ3ZWF0aGVyRGVzY1wiXG4gICkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LmNvbmRpdGlvbi50ZXh0fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlXCIpLnRleHRDb250ZW50ID0gYEZlZWxzIGxpa2UgJHtcbiAgICBmb3JlY2FzdC5jdXJyZW50W1wiZmVlbHNsaWtlX1wiICsgc2VsZWN0ZWRUZW1wXVxuICB9JHt1cHBlclRlbXB9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJ3aW5kVmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC53aW5kX21waH1tcGhgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImh1bWlkaXR5VmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC5odW1pZGl0eX0lYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1dlZhbHVlXCIpLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC51dn1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInZpc2liaWxpdHlWYWx1ZVwiXG4gICkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnZpc19taWxlc31tYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJjbG91ZFZhbHVlXCJcbiAgKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmN1cnJlbnQuY2xvdWR9JWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwicmFpblZhbHVlXCJcbiAgKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheS5kYWlseV9jaGFuY2Vfb2ZfcmFpbn0lYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJyaXNlVmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3VucmlzZX1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInNldFZhbHVlXCJcbiAgKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmFzdHJvLnN1bnNldH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1heFRlbXBWYWx1ZVwiKS50ZXh0Q29udGVudCA9IGAke1xuICAgIGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRheVtcIm1heHRlbXBfXCIgKyBzZWxlY3RlZFRlbXBdXG4gIH0ke3VwcGVyVGVtcH1gO1xuXG4gIHNldEVsZW1lbnRUaXRsZXMoKTtcbiAgc2V0Rm9yZWNhc3REYXlzKGZvcmVjYXN0KTtcbn1cblxuZnVuY3Rpb24gc2V0RWxlbWVudFRpdGxlcygpIHtcbiAgZm9yIChpID0gMDsgaSA8IDk7IGkrKykge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0aXRsZSR7aX1gKS50ZXh0Q29udGVudCA9IGVsZW1lbnROYW1lc1tpXTtcbiAgfVxuXG4gIGZvcmVjYXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkZvcmVjYXN0XCI7XG59XG5cbnN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHJldHJpZXZlV2VhdGhlcihzZWFyY2hJbnB1dC52YWx1ZSkudGhlbigoZGF0YSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHNldExvY2F0aW9uSW5mb3JtYXRpb24oZGF0YSk7XG4gIH0pO1xufSk7XG5cbihmdW5jdGlvbiBjaGFuZ2VUZW1wZXJhdHVyZSgpIHtcbiAgY29uc3QgY2Vsc2l1c0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2Vsc2l1c1wiKTtcbiAgY29uc3QgZmFocmVuaGVpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmFocmVuaGVpdFwiKTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcbiAgfSk7XG5cbiAgZmFocmVuaGVpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcbiAgICBjZWxzaXVzQnV0dG9uLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJnYigyLCAxMjEsIDE3NylcIjtcbiAgICBzZWxlY3RlZFRlbXAgPSBcImZcIjtcbiAgICBzdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgfSk7XG5cbiAgY2Vsc2l1c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNlbHNpdXNCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgd2hpdGVcIjtcbiAgICBmYWhyZW5oZWl0QnV0dG9uLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJnYigyLCAxMjEsIDE3NylcIjtcbiAgICBzZWxlY3RlZFRlbXAgPSBcImNcIjtcbiAgICBzdWJtaXRCdXR0b24uY2xpY2soKTtcbiAgfSk7XG59KSgpO1xuIiwiY29uc3Qgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uXCIpO1xuY29uc3QgZ2xhc3NDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdsYXNzQ29udGFpbmVyXCIpO1xuXG5mdW5jdGlvbiBzZXRCb3JkZXJzKGNvbG9yKSB7XG4gIGdsYXNzQ29udGFpbmVyLnN0eWxlLmJvcmRlclJpZ2h0ID0gYDJweCBzb2xpZCAke2NvbG9yfWA7XG4gIGdsYXNzQ29udGFpbmVyLnN0eWxlLmJvcmRlclRvcCA9IGAycHggc29saWQgJHtjb2xvcn1gO1xuICBnbGFzc0NvbnRhaW5lci5zdHlsZS5ib3JkZXJCb3R0b20gPSBgMnB4IHNvbGlkICR7Y29sb3J9YDtcbn1cblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgc2V0Qm9yZGVycyhcIndoaXRlXCIpO1xufSk7XG5cbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgc2V0Qm9yZGVycyhcInJnYigyLCAxMjEsIDE3NylcIik7XG59KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL21vZHVsZXMvY2FsbHNcIjtcbmltcG9ydCBcIi4vbW9kdWxlcy9zdHlsaW5nXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
