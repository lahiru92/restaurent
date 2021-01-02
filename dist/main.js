/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => /* binding */ contact\n/* harmony export */ });\nfunction contact() {\n    const p = document.createElement('p');\n    p.textContent = \"Contact me 911\";\n\n    return p;\n}\n\n\n\n//# sourceURL=webpack://restaurent/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => /* binding */ home\n/* harmony export */ });\nfunction home() {\n    const x = \"wololo\";\n    const p = document.createElement('p');\n    p.textContent = \"This is the home page\";\n\n    return p;\n}\n\n\n\n//# sourceURL=webpack://restaurent/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nfunction renderNav(module, activetab) {\n    const content = document.getElementById('content');\n    \n    const nav = document.createElement('nav');\n    nav.setAttribute('class', 'tablist');\n    \n    const ul = document.createElement('ul');\n    ul.setAttribute('class', 'tabs');\n    \n    ul.appendChild(createMenuItem('Home'));\n    ul.appendChild(createMenuItem('Menu'));\n    ul.appendChild(createMenuItem('Contact'));\n\n    nav.appendChild(ul);\n    content.appendChild(nav);\n    \n    content.appendChild(module);\n\n    document.getElementById(activetab).classList.add('active');\n\n\n    nav.addEventListener('click',event => {\n       switchTab(event);\n    });\n}\n\n\nfunction createMenuItem(itemname) {\n    const li = document.createElement('li');\n    li.setAttribute('id', itemname.toLowerCase());\n    li.textContent = itemname;\n\n    return li;\n}\nfunction clear() {\n    const content = document.getElementById('content');\n    content.innerHTML = '';\n}\n\nfunction switchTab(event) {\n    clear();\n    let item = event.target.getAttribute('id');\n\n    switch (item) {\n        case 'home': renderNav((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)(), 'home'); break;\n        case 'menu': renderNav((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)(), 'menu'); break;\n        case 'contact': renderNav((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.contact)(), 'contact'); break;\n    }\n \n\n}\n\nrenderNav((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.home)(), 'home');\n\n\n\n//# sourceURL=webpack://restaurent/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => /* binding */ menu\n/* harmony export */ });\nfunction menu() {\n    const p = document.createElement('p');\n    p.textContent = \"Look at the menu. Delicious\";\n\n    return p;\n}\n\n\n\n//# sourceURL=webpack://restaurent/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;