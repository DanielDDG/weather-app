/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/calls.js":
/*!******************************!*\
  !*** ./src/modules/calls.js ***!
  \******************************/
/***/ (() => {

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
    `https://api.weatherapi.com/v1/forecast.json?key=a016d2051be44e2f9be171214241005&q=${location}&days=7`
  );

  const forecastData = await fetchedForecastData.json();
  return forecastData;
}

function setForecastDays(forecast) {
  for (let i = 1; i < 8; i++) {
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
      forecast.forecast.forecastday[i - 1].day["avgtemp_" + selectedTemp]
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
  document.getElementById("uvValue").textContent = `${forecast.current.uv}`;
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

  setForecastDays(forecast);
  setElementTitles();
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


/***/ }),

/***/ "./src/modules/styling.js":
/*!********************************!*\
  !*** ./src/modules/styling.js ***!
  \********************************/
/***/ (() => {

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


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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
/* harmony import */ var _modules_calls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/calls */ "./src/modules/calls.js");
/* harmony import */ var _modules_calls__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_calls__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_styling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/styling */ "./src/modules/styling.js");
/* harmony import */ var _modules_styling__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_styling__WEBPACK_IMPORTED_MODULE_1__);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUZBQXlGLFNBQVM7QUFDbEc7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekIsNENBQTRDLEVBQUU7QUFDOUMsOENBQThDLEVBQUU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSyxHQUFHLDJCQUEyQjs7QUFFbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsdUJBQXVCLElBQUkseUJBQXlCO0FBQ3BGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUcsRUFBRSxVQUFVO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBLEdBQUcsRUFBRSxVQUFVO0FBQ2Y7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0M7QUFDQTtBQUNBLHFCQUFxQiwwQkFBMEI7QUFDL0Msc0RBQXNELG9CQUFvQjtBQUMxRTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QjtBQUM1QztBQUNBO0FBQ0EscUJBQXFCLDBEQUEwRDtBQUMvRTtBQUNBO0FBQ0EscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBO0FBQ0EscUJBQXFCLDhDQUE4QztBQUNuRTtBQUNBO0FBQ0EsR0FBRyxFQUFFLFVBQVU7O0FBRWY7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLG9DQUFvQyxFQUFFO0FBQ3RDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7Ozs7Ozs7Ozs7O0FDeklEO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0QsTUFBTTtBQUN4RCxnREFBZ0QsTUFBTTtBQUN0RCxtREFBbUQsTUFBTTtBQUN6RDs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7Ozs7OztVQ2ZEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTnlCO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9tb2R1bGVzL2NhbGxzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL21vZHVsZXMvc3R5bGluZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xhc3NDb250YWluZXJcIik7XG5jb25zdCBsb2NhdGlvbk5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uTmFtZVwiKTtcbmNvbnN0IGRhdGVBbmRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlQW5kVGltZVwiKTtcbmNvbnN0IGZvcmVjYXN0VGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0VGl0bGVcIik7XG5sZXQgc2VsZWN0ZWRUZW1wID0gXCJmXCI7XG5cbmNvbnN0IGVsZW1lbnROYW1lcyA9IFtcbiAgXCJXaW5kXCIsXG4gIFwiSHVtaWRpdHlcIixcbiAgXCJVViBJbmRleFwiLFxuICBcIlZpc2liaWxpdHlcIixcbiAgXCJDbG91ZGluZXNzXCIsXG4gIFwiQ2hhbmNlIG9mIFJhaW5cIixcbiAgXCJTdW5yaXNlXCIsXG4gIFwiU3Vuc2V0XCIsXG4gIFwiTWF4IFRlbXBlcmF0dXJlXCIsXG5dO1xuXG5hc3luYyBmdW5jdGlvbiByZXRyaWV2ZVdlYXRoZXIobG9jYXRpb24pIHtcbiAgY29uc3QgZmV0Y2hlZEZvcmVjYXN0RGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1hMDE2ZDIwNTFiZTQ0ZTJmOWJlMTcxMjE0MjQxMDA1JnE9JHtsb2NhdGlvbn0mZGF5cz03YFxuICApO1xuXG4gIGNvbnN0IGZvcmVjYXN0RGF0YSA9IGF3YWl0IGZldGNoZWRGb3JlY2FzdERhdGEuanNvbigpO1xuICByZXR1cm4gZm9yZWNhc3REYXRhO1xufVxuXG5mdW5jdGlvbiBzZXRGb3JlY2FzdERheXMoZm9yZWNhc3QpIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCA4OyBpKyspIHtcbiAgICBsZXQgZGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGRheSR7aX1gKTtcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGB0ZW1wJHtpfWApO1xuICAgIGxldCBuZXh0RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbmV4dERhdGUuc2V0RGF0ZShuZXh0RGF0ZS5nZXREYXRlKCkgKyBpKTtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB9O1xuXG4gICAgbGV0IHdlZWtkYXkgPSBuZXh0RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodW5kZWZpbmVkLCBvcHRpb25zKTtcbiAgICBkYXkudGV4dENvbnRlbnQgPSB3ZWVrZGF5O1xuXG4gICAgdGVtcC50ZXh0Q29udGVudCA9IGAke1xuICAgICAgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaSAtIDFdLmRheVtcImF2Z3RlbXBfXCIgKyBzZWxlY3RlZFRlbXBdXG4gICAgfcKwJHtzZWxlY3RlZFRlbXAudG9VcHBlckNhc2UoKX1gO1xuXG4gICAgaWYgKGRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIGRheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmICh0ZW1wLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgdGVtcC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRMb2NhdGlvbkluZm9ybWF0aW9uKGZvcmVjYXN0KSB7XG4gIGxvY2F0aW9uTmFtZS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmxvY2F0aW9uLm5hbWV9LCAke2ZvcmVjYXN0LmxvY2F0aW9uLnJlZ2lvbn1gO1xuICBkYXRlQW5kVGltZS50ZXh0Q29udGVudCA9IG5ldyBEYXRlKCk7XG4gIGxldCB1cHBlclRlbXAgPSBcIsKwXCIgKyBzZWxlY3RlZFRlbXAudG9VcHBlckNhc2UoKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRUZW1wXCIpLnRleHRDb250ZW50ID0gYCR7XG4gICAgZm9yZWNhc3QuY3VycmVudFtcInRlbXBfXCIgKyBzZWxlY3RlZFRlbXBdXG4gIH0ke3VwcGVyVGVtcH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIndlYXRoZXJEZXNjXCJcbiAgKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIikudGV4dENvbnRlbnQgPSBgRmVlbHMgbGlrZSAke1xuICAgIGZvcmVjYXN0LmN1cnJlbnRbXCJmZWVsc2xpa2VfXCIgKyBzZWxlY3RlZFRlbXBdXG4gIH0ke3VwcGVyVGVtcH1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcIndpbmRWYWx1ZVwiXG4gICkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LndpbmRfbXBofW1waGA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwiaHVtaWRpdHlWYWx1ZVwiXG4gICkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50Lmh1bWlkaXR5fSVgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInV2VmFsdWVcIikudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5jdXJyZW50LnV2fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwidmlzaWJpbGl0eVZhbHVlXCJcbiAgKS50ZXh0Q29udGVudCA9IGAke2ZvcmVjYXN0LmN1cnJlbnQudmlzX21pbGVzfW1gO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcImNsb3VkVmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuY3VycmVudC5jbG91ZH0lYDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgXCJyYWluVmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSVgO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICBcInJpc2VWYWx1ZVwiXG4gICkudGV4dENvbnRlbnQgPSBgJHtmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5hc3Ryby5zdW5yaXNlfWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIFwic2V0VmFsdWVcIlxuICApLnRleHRDb250ZW50ID0gYCR7Zm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uYXN0cm8uc3Vuc2V0fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4VGVtcFZhbHVlXCIpLnRleHRDb250ZW50ID0gYCR7XG4gICAgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uZGF5W1wibWF4dGVtcF9cIiArIHNlbGVjdGVkVGVtcF1cbiAgfSR7dXBwZXJUZW1wfWA7XG5cbiAgc2V0Rm9yZWNhc3REYXlzKGZvcmVjYXN0KTtcbiAgc2V0RWxlbWVudFRpdGxlcygpO1xufVxuXG5mdW5jdGlvbiBzZXRFbGVtZW50VGl0bGVzKCkge1xuICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHRpdGxlJHtpfWApLnRleHRDb250ZW50ID0gZWxlbWVudE5hbWVzW2ldO1xuICB9XG5cbiAgZm9yZWNhc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiRm9yZWNhc3RcIjtcbn1cblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgcmV0cmlldmVXZWF0aGVyKHNlYXJjaElucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgc2V0TG9jYXRpb25JbmZvcm1hdGlvbihkYXRhKTtcbiAgfSk7XG59KTtcblxuKGZ1bmN0aW9uIGNoYW5nZVRlbXBlcmF0dXJlKCkge1xuICBjb25zdCBjZWxzaXVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjZWxzaXVzXCIpO1xuICBjb25zdCBmYWhyZW5oZWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYWhyZW5oZWl0XCIpO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB3aGl0ZVwiO1xuICB9KTtcblxuICBmYWhyZW5oZWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgZmFocmVuaGVpdEJ1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB3aGl0ZVwiO1xuICAgIGNlbHNpdXNCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmdiKDIsIDEyMSwgMTc3KVwiO1xuICAgIHNlbGVjdGVkVGVtcCA9IFwiZlwiO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICB9KTtcblxuICBjZWxzaXVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2Vsc2l1c0J1dHRvbi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB3aGl0ZVwiO1xuICAgIGZhaHJlbmhlaXRCdXR0b24uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmdiKDIsIDEyMSwgMTc3KVwiO1xuICAgIHNlbGVjdGVkVGVtcCA9IFwiY1wiO1xuICAgIHN1Ym1pdEJ1dHRvbi5jbGljaygpO1xuICB9KTtcbn0pKCk7XG4iLCJjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBnbGFzc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2xhc3NDb250YWluZXJcIik7XG5cbmZ1bmN0aW9uIHNldEJvcmRlcnMoY29sb3IpIHtcbiAgZ2xhc3NDb250YWluZXIuc3R5bGUuYm9yZGVyUmlnaHQgPSBgMnB4IHNvbGlkICR7Y29sb3J9YDtcbiAgZ2xhc3NDb250YWluZXIuc3R5bGUuYm9yZGVyVG9wID0gYDJweCBzb2xpZCAke2NvbG9yfWA7XG4gIGdsYXNzQ29udGFpbmVyLnN0eWxlLmJvcmRlckJvdHRvbSA9IGAycHggc29saWQgJHtjb2xvcn1gO1xufVxuXG5zZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICBzZXRCb3JkZXJzKFwid2hpdGVcIik7XG59KTtcblxuc2VhcmNoSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4ge1xuICBzZXRCb3JkZXJzKFwicmdiKDIsIDEyMSwgMTc3KVwiKTtcbn0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbW9kdWxlcy9jYWxsc1wiO1xuaW1wb3J0IFwiLi9tb2R1bGVzL3N0eWxpbmdcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==