/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/get_weather_promise.js":
/*!************************************!*\
  !*** ./src/get_weather_promise.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst API_KEY = '8f4d1b6deac8c44fd2d6b3aa0aa41c78';\r\n\r\n// Get location of city in terms of longitude and latitude\r\nasync function getLocation(city) {\r\n    let response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${API_KEY}`);\r\n    let json = await response.json();\r\n    if (json.length === 0) {\r\n        throw Error(\"Invalid City \");\r\n    }\r\n    let obj = {\r\n        'lon':json[0].lon,\r\n        'lat':json[0].lat\r\n    };\r\n    return obj;\r\n}\r\n\r\nasync function getWeatherPromise(city) {\r\n    try {\r\n        let weatherObj = await getLocation(city);\r\n        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherObj.lat}&lon=${weatherObj.lon}&appid=${API_KEY}&units=metric`);\r\n        let json = await response.json();\r\n        return json.main;\r\n    }  catch(e) {\r\n        alert(e);\r\n        return false;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherPromise);\n\n//# sourceURL=webpack://weather-app/./src/get_weather_promise.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _get_weather_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get_weather_promise */ \"./src/get_weather_promise.js\");\n\r\n\r\nfunction updateCard(city) {\r\n    let data = (0,_get_weather_promise__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(city);\r\n    data.then(result => {\r\n        if (result) {\r\n            divCityName.textContent = city;\r\n            divTemp.textContent = `Temperature: ${result.temp} °C`;\r\n            divOther1.textContent = `Max temp: ${result.temp_max}`;\r\n            divOther2.textContent = `Feels Like ${result.feels_like} °C`;\r\n            divOther3.textContent = `Humidity: ${result.humidity}%`;\r\n        }\r\n    })\r\n}\r\n\r\n\r\nconst divCard = document.querySelector('#weather-card');\r\nconst divCityName = document.createElement('div');\r\nconst divTemp = document.createElement('div');\r\nconst divOther1 = document.createElement('div');\r\nconst divOther2 = document.createElement('div');\r\nconst divOther3 = document.createElement('div');\r\nconst searchBtn = document.getElementById('search-button');\r\nconst input = document.getElementById('search');\r\n\r\ndivCityName.id = 'city-name';\r\ndivTemp.id = 'city-temp';\r\n\r\nupdateCard('Melbourne');\r\n\r\ndivCard.appendChild(divCityName);\r\ndivCard.appendChild(divTemp);\r\ndivCard.appendChild(divOther1);\r\ndivCard.appendChild(divOther2);\r\ndivCard.appendChild(divOther3);\r\n\r\ndocument.body.appendChild(divCard)\r\n\r\nsearchBtn.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    updateCard(input.value);\r\n    input.value = '';\r\n})\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;