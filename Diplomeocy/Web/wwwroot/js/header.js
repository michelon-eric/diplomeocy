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

/***/ "../../../../../c\u0000#/diplomeocy/Diplomeocy/Web/Scripts/src/header.ts":
/*!**************************************************************************!*\
  !*** ../../../../../c #/diplomeocy/Diplomeocy/Web/Scripts/src/header.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results */ \"../../../../../c\\u0000#/diplomeocy/Diplomeocy/Web/Scripts/src/results.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n\r\n$(function () {\r\n    const $joinLink = $('#join-link');\r\n    const $inputContainer = $('#join-input-container');\r\n    const $input = $('#join-input');\r\n    const $submitButton = $('#join-submit-button');\r\n    $joinLink.on('mouseenter', function () {\r\n        $inputContainer.removeClass('hidden').removeClass('hidden-container').addClass('visible-container');\r\n        $joinLink.addClass('absolute').addClass('opacity-0');\r\n        $('#my-tables-link').removeClass('translate-x-[-300%]').addClass('translate-x-[-560%]');\r\n        $('#create-table-link').removeClass('translate-x-[-50%]').addClass('translate-x-[-200%]');\r\n    });\r\n    const hideInput = () => {\r\n        if ($input.is(':focus') || $inputContainer.is(':hover'))\r\n            return;\r\n        $inputContainer.removeClass('visible-container').addClass('hidden-container').addClass('hidden');\r\n        $joinLink.removeClass('absolute').removeClass('opacity-0');\r\n        $input.val('');\r\n        $('#my-tables-link').addClass('translate-x-[-300%]').removeClass('translate-x-[-560%]');\r\n        $('#create-table-link').addClass('translate-x-[-50%]').removeClass('translate-x-[-150%]');\r\n    };\r\n    $inputContainer.on('mouseleave', hideInput);\r\n    $input.on('blur', hideInput);\r\n    $input.on('mouseleave', hideInput);\r\n    $input.on('keypress', function (e) {\r\n        if (e.which === 13) {\r\n            $submitButton.trigger('click');\r\n        }\r\n    });\r\n    $submitButton.on('click', function () {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const tableId = $input.val();\r\n            console.log(tableId);\r\n            let response;\r\n            try {\r\n                response = yield fetch(`/Table/Join/${tableId}`, {\r\n                    method: 'POST',\r\n                });\r\n            }\r\n            catch (error) { }\r\n            const result = yield response.json();\r\n            if ((0,_results__WEBPACK_IMPORTED_MODULE_0__.isRedirectResult)(result)) {\r\n                window.location.href = result.destination;\r\n                return;\r\n            }\r\n            // not gonna handle errors for this I just don't feel like it\r\n        });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://myapp-client-bundle/../../../../../c%00#/diplomeocy/Diplomeocy/Web/Scripts/src/header.ts?");

/***/ }),

/***/ "../../../../../c\u0000#/diplomeocy/Diplomeocy/Web/Scripts/src/results.ts":
/*!***************************************************************************!*\
  !*** ../../../../../c #/diplomeocy/Diplomeocy/Web/Scripts/src/results.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isErrorResult: () => (/* binding */ isErrorResult),\n/* harmony export */   isNotFoundResult: () => (/* binding */ isNotFoundResult),\n/* harmony export */   isRedirectResult: () => (/* binding */ isRedirectResult)\n/* harmony export */ });\nconst isErrorResult = (result) => result.success === false && 'errors' in result;\r\nconst isNotFoundResult = (result) => result.success === false && 'what' in result;\r\nconst isRedirectResult = (result) => result.success === true && 'destination' in result;\r\n\n\n//# sourceURL=webpack://myapp-client-bundle/../../../../../c%00#/diplomeocy/Diplomeocy/Web/Scripts/src/results.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../../../../../c\u0000#/diplomeocy/Diplomeocy/Web/Scripts/src/header.ts");
/******/ 	
/******/ })()
;