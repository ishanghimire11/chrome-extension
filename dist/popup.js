/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/componets/Slider/Slider.tsx":
/*!*****************************************!*\
  !*** ./src/componets/Slider/Slider.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slider */ "./node_modules/react-slider/dist/es/dev/components/ReactSlider/ReactSlider.mjs");
/* harmony import */ var _context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/PasswordContext */ "./src/context/PasswordContext.tsx");



const Slider = () => {
    const { passwordLength, handleSliderChange } = (0,_context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__.usePasswordContext)();
    const handleSliderValue = (value) => {
        return handleSliderChange(value);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_slider__WEBPACK_IMPORTED_MODULE_2__["default"], { className: "relative font-extrabold horizontal-slider", thumbClassName: "bg-blue-500 text-xs rounded-full text-white -top-3 cursor-grab focus:outline-none focus-within:outline-none h-[24px] w-[24px] flex items-center justify-center", trackClassName: "bg-blue-500 rounded-full track pb-[2px]", max: 32, min: 8, onAfterChange: handleSliderValue, defaultValue: passwordLength, renderThumb: (props, state) => react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", Object.assign({}, props), state.valueNow) })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);


/***/ }),

/***/ "./src/componets/Title/Title.tsx":
/*!***************************************!*\
  !*** ./src/componets/Title/Title.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Title: () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Title = ({ name }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "inline-block pb-1 mb-1 text-sm" }, name));
};


/***/ }),

/***/ "./src/context/PasswordContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/PasswordContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   usePasswordContext: () => (/* binding */ usePasswordContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const PasswordContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);
const PasswordProvider = ({ children }) => {
    const [passwordLength, setPasswordLength] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20);
    const [passwordResult, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Click generate button");
    const [toggleStates, setToggleStates] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        includeUpperCase: true,
        includeLowerCase: true,
        includeNumbers: true,
        includeSymbols: true,
    });
    const handleSliderChange = (value) => {
        return setPasswordLength(value);
    };
    const handleToggleChange = (key, value) => {
        return setToggleStates((prev) => (Object.assign(Object.assign({}, prev), { [key]: value })));
    };
    const handleResult = (result) => {
        return setResult(result);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PasswordContext.Provider, { value: {
            passwordLength,
            toggleStates,
            passwordResult,
            handleSliderChange,
            handleToggleChange,
            handleResult
        } }, children));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordProvider);
const usePasswordContext = () => {
    const context = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(PasswordContext);
    if (!context) {
        throw new Error('usePasswordContext must be used within a PasswordProvider');
    }
    return context;
};


/***/ }),

/***/ "./src/popup/Customize.tsx":
/*!*********************************!*\
  !*** ./src/popup/Customize.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Toggle */ "./src/popup/Toggle.tsx");


const Customize = ({ option }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: 'flex justify-between px-4 py-2 rounded-sm gap-x-4 bg-slate-700' },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "option-name" }, option.name),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Toggle__WEBPACK_IMPORTED_MODULE_1__["default"], { index: option.key })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customize);


/***/ }),

/***/ "./src/popup/PasswordGenerator.tsx":
/*!*****************************************!*\
  !*** ./src/popup/PasswordGenerator.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/PasswordContext */ "./src/context/PasswordContext.tsx");


const PasswordGenerator = ({ options, charSets }) => {
    const { passwordLength, toggleStates, handleResult, } = (0,_context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__.usePasswordContext)();
    const generatePassword = () => {
        const toggledCharSets = options
            .filter((option) => toggleStates[option.key])
            .map((option) => charSets[option.key])
            .join("");
        if (toggledCharSets) {
            let password = "";
            for (let i = 0; i <= passwordLength; i++) {
                const randomIndex = Math.floor(Math.random() * toggledCharSets.length);
                password += toggledCharSets.charAt(randomIndex);
            }
            return handleResult(password);
        }
        else {
            return handleResult("Customize your password!!");
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: generatePassword, type: "button", className: "w-full px-2 py-2 font-bold uppercase transition-transform duration-300 transform rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-90 active:scale-90" }, "Generate")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordGenerator);


/***/ }),

/***/ "./src/popup/Toggle.tsx":
/*!******************************!*\
  !*** ./src/popup/Toggle.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @headlessui/react */ "./node_modules/@headlessui/react/dist/components/switch/switch.js");
/* harmony import */ var _context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/PasswordContext */ "./src/context/PasswordContext.tsx");



function MyToggle({ index }) {
    const { toggleStates, handleToggleChange } = (0,_context_PasswordContext__WEBPACK_IMPORTED_MODULE_1__.usePasswordContext)();
    const enabled = toggleStates[`${index}`];
    const handleToggleSwitch = () => {
        return handleToggleChange(`${index}`, !enabled);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Switch, { checked: true, onChange: handleToggleSwitch, className: `${enabled ? 'bg-blue-600' : 'bg-gray-400'} relative inline-flex h-6 w-11 items-center rounded-full` },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: `${enabled ? 'translate-x-6' : 'translate-x-1'} inline-block h-4 w-4 transform rounded-full bg-white transition-all duration-300` })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyToggle);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _context_PasswordContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/PasswordContext */ "./src/context/PasswordContext.tsx");
/* harmony import */ var _src_styles_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../src/styles/tailwind.css */ "./src/styles/tailwind.css");
/* harmony import */ var _componets_Title_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componets/Title/Title */ "./src/componets/Title/Title.tsx");
/* harmony import */ var _componets_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componets/Slider/Slider */ "./src/componets/Slider/Slider.tsx");
/* harmony import */ var _Customize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Customize */ "./src/popup/Customize.tsx");
/* harmony import */ var _PasswordGenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PasswordGenerator */ "./src/popup/PasswordGenerator.tsx");








const options = [
    { name: 'Include Uppercase', key: 'includeUpperCase' },
    { name: 'Include Lowercase', key: 'includeLowerCase' },
    { name: 'Include Numbers', key: 'includeNumbers' },
    { name: 'Include Symbols', key: 'includeSymbols' }
];
const charSets = {
    includeUpperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    includeLowerCase: 'abcdefghijklmnopqrstuvwxyz',
    includeNumbers: '0123456789',
    includeSymbols: '!@#$%^&*()-=_+[]{}|;:,.<>?'
};
const Header = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", { className: "flex items-center px-4 pb-4 mb-8 border-b gap-x-2" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "key.png", alt: "key", className: "w-[40px] h-[40px]" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: "text-2xl" }, "SecurePass")));
const ResultSection = () => {
    const { passwordResult } = (0,_context_PasswordContext__WEBPACK_IMPORTED_MODULE_2__.usePasswordContext)();
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full mb-6" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-4 py-2 rounded-sm bg-slate-700" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { id: "result", className: "text-[15px]" }, passwordResult))));
};
const LengthSection = () => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full mb-6" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_componets_Title_Title__WEBPACK_IMPORTED_MODULE_4__.Title, { name: "Length" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_componets_Slider_Slider__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
const CustomizeSection = ({ options }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-full mb-6" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_componets_Title_Title__WEBPACK_IMPORTED_MODULE_4__.Title, { name: "Customize" }),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "flex flex-col gap-y-2" }, options.map((option) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Customize__WEBPACK_IMPORTED_MODULE_6__["default"], { key: option.key, option: option }))))));
const body = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "w-[400px] py-6 bg-slate-800 text-white text-lg" },
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Header, null),
    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "px-6 content" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ResultSection, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(LengthSection, null),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CustomizeSection, { options: options }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_PasswordGenerator__WEBPACK_IMPORTED_MODULE_7__["default"], { options: options, charSets: charSets }))));
const container = document.createElement("main");
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_PasswordContext__WEBPACK_IMPORTED_MODULE_2__["default"], null, body));


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchrome_extension"] = self["webpackChunkchrome_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_headlessui_react_dist_components_switch_switch_js-node_modules_react-sli-d7331e","src_styles_tailwind_css"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map