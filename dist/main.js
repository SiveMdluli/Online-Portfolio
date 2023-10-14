"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_boilerplate"] = self["webpackChunkwebpack_boilerplate"] || []).push([["main"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/navbar.js */ \"./modules/navbar.js\");\n/* harmony import */ var _modules_mobileNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mobileNav.js */ \"./modules/mobileNav.js\");\n/* harmony import */ var _modules_scrollOnLinks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/scrollOnLinks.js */ \"./modules/scrollOnLinks.js\");\n/* harmony import */ var _modules_scrollOnPageLoad_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollOnPageLoad.js */ \"./modules/scrollOnPageLoad.js\");\n/* harmony import */ var _modules_typedEffect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/typedEffect.js */ \"./modules/typedEffect.js\");\n/* harmony import */ var _modules_skillsAnimation_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/skillsAnimation.js */ \"./modules/skillsAnimation.js\");\n/* harmony import */ var _modules_portfolio_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/portfolio.js */ \"./modules/portfolio.js\");\n/* harmony import */ var _modules_lightbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/lightbox.js */ \"./modules/lightbox.js\");\n/* harmony import */ var _modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/animationOnScroll.js */ \"./modules/animationOnScroll.js\");\n/* harmony import */ var _style_css_v_1_0__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.css?v=1.0 */ \"./style.css?v=1.0\");\n\n\n\n\n\n\n\n\n\n\n\n// To ensure that it runs after the HTML document has fully loaded\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_modules_navbar_js__WEBPACK_IMPORTED_MODULE_0__.initNavbar)();\n  (0,_modules_mobileNav_js__WEBPACK_IMPORTED_MODULE_1__.initMobileNav)();\n  (0,_modules_scrollOnLinks_js__WEBPACK_IMPORTED_MODULE_2__.initScrollOnLinks)();\n  (0,_modules_scrollOnPageLoad_js__WEBPACK_IMPORTED_MODULE_3__.initScrollOnPageLoad)();\n  (0,_modules_typedEffect_js__WEBPACK_IMPORTED_MODULE_4__.initTypedEffect)();\n  (0,_modules_skillsAnimation_js__WEBPACK_IMPORTED_MODULE_5__.initSkillsAnimation)();\n  (0,_modules_portfolio_js__WEBPACK_IMPORTED_MODULE_6__.initPortfolio)();\n  (0,_modules_lightbox_js__WEBPACK_IMPORTED_MODULE_7__.initLightbox)();\n  (0,_modules_animationOnScroll_js__WEBPACK_IMPORTED_MODULE_8__.initAnimationOnScroll)();\n});\n\n//# sourceURL=webpack://webpack-boilerplate/./index.js?");

/***/ }),

/***/ "./modules/animationOnScroll.js":
/*!**************************************!*\
  !*** ./modules/animationOnScroll.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initAnimationOnScroll\": () => (/* binding */ initAnimationOnScroll)\n/* harmony export */ });\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initAnimationOnScroll = function initAnimationOnScroll() {\n  window.addEventListener('load', function () {\n    aos__WEBPACK_IMPORTED_MODULE_0___default().init({\n      duration: 1000,\n      easing: 'ease-in-out',\n      once: true,\n      mirror: false\n    });\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/animationOnScroll.js?");

/***/ }),

/***/ "./modules/eventListeners.js":
/*!***********************************!*\
  !*** ./modules/eventListeners.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"on\": () => (/* binding */ on),\n/* harmony export */   \"onscroll\": () => (/* binding */ onscroll)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\nvar on = function on(type, el, listener) {\n  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n  var selectEl = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.select)(el, all);\n  if (selectEl) {\n    if (all) {\n      selectEl.forEach(function (e) {\n        return e.addEventListener(type, listener);\n      });\n    } else {\n      selectEl.addEventListener(type, listener);\n    }\n  }\n};\nvar onscroll = function onscroll(el, listener) {\n  el.addEventListener('scroll', listener);\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/eventListeners.js?");

/***/ }),

/***/ "./modules/lightbox.js":
/*!*****************************!*\
  !*** ./modules/lightbox.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initLightbox\": () => (/* binding */ initLightbox)\n/* harmony export */ });\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glightbox */ \"./node_modules/glightbox/dist/js/glightbox.min.js\");\n/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_0__);\n\nvar initLightbox = function initLightbox() {\n  var portfolioLightbox = glightbox__WEBPACK_IMPORTED_MODULE_0___default()({\n    selector: '.portfolio-lightbox'\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/lightbox.js?");

/***/ }),

/***/ "./modules/mobileNav.js":
/*!******************************!*\
  !*** ./modules/mobileNav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeMobileNav\": () => (/* binding */ closeMobileNav),\n/* harmony export */   \"initMobileNav\": () => (/* binding */ initMobileNav)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./modules/eventListeners.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\n\nvar initMobileNav = function initMobileNav() {\n  var body = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('body');\n  var mobileNavToggle = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('.mobile-nav-toggle');\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.on)('click', '.mobile-nav-toggle', function (e) {\n    body.classList.toggle('mobile-nav-active');\n    mobileNavToggle.classList.toggle('fa-bars');\n    mobileNavToggle.classList.toggle('fa-times');\n  });\n};\nvar closeMobileNav = function closeMobileNav() {\n  var body = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('body');\n  var mobileNavToggle = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('.mobile-nav-toggle');\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.on)('click', '#navbar .scrollto', function () {\n    body.classList.remove('mobile-nav-active');\n    mobileNavToggle.classList.remove('fa-times');\n    mobileNavToggle.classList.add('fa-bars');\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/mobileNav.js?");

/***/ }),

/***/ "./modules/navbar.js":
/*!***************************!*\
  !*** ./modules/navbar.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initNavbar\": () => (/* binding */ initNavbar),\n/* harmony export */   \"navbarlinks\": () => (/* binding */ navbarlinks),\n/* harmony export */   \"navbarlinksActive\": () => (/* binding */ navbarlinksActive)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./modules/eventListeners.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n/* harmony import */ var _mobileNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mobileNav.js */ \"./modules/mobileNav.js\");\n\n\n\nvar navbarlinks = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('#navbar .scrollto', true);\nvar navbarlinksActive = function navbarlinksActive() {\n  var position = window.scrollY + 200;\n  navbarlinks.forEach(function (navbarlink) {\n    if (!navbarlink.hash) return;\n    var section = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)(navbarlink.hash);\n    if (!section) return;\n    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {\n      navbarlink.classList.add('active');\n    } else {\n      navbarlink.classList.remove('active');\n    }\n  });\n};\nvar initNavbar = function initNavbar() {\n  window.addEventListener('load', navbarlinksActive);\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.onscroll)(document, navbarlinksActive);\n  (0,_mobileNav_js__WEBPACK_IMPORTED_MODULE_2__.closeMobileNav)();\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/navbar.js?");

/***/ }),

/***/ "./modules/portfolio.js":
/*!******************************!*\
  !*** ./modules/portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initPortfolio\": () => (/* binding */ initPortfolio)\n/* harmony export */ });\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isotope-layout */ \"./node_modules/isotope-layout/js/isotope.js\");\n/* harmony import */ var isotope_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isotope_layout__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eventListeners.js */ \"./modules/eventListeners.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\n\n\n\nvar initPortfolio = function initPortfolio() {\n  window.addEventListener('load', function () {\n    var portfolioContainer = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_3__.select)('.portfolio-container');\n    if (portfolioContainer) {\n      var portfolioIsotope = new (isotope_layout__WEBPACK_IMPORTED_MODULE_0___default())(portfolioContainer, {\n        itemSelector: '.portfolio-item'\n      });\n      var portfolioFilters = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_3__.select)('#portfolio-flters li', true);\n      (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_2__.on)('click', '#portfolio-flters li', function (e) {\n        e.preventDefault();\n        portfolioFilters.forEach(function (el) {\n          el.classList.remove('filter-active');\n        });\n        this.classList.add('filter-active');\n        portfolioIsotope.arrange({\n          filter: this.getAttribute('data-filter')\n        });\n        portfolioIsotope.on('arrangeComplete', function () {\n          aos__WEBPACK_IMPORTED_MODULE_1___default().refresh();\n        });\n      }, true);\n    }\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/portfolio.js?");

/***/ }),

/***/ "./modules/scrollOnLinks.js":
/*!**********************************!*\
  !*** ./modules/scrollOnLinks.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initScrollOnLinks\": () => (/* binding */ initScrollOnLinks)\n/* harmony export */ });\n/* harmony import */ var _eventListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners.js */ \"./modules/eventListeners.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrolling.js */ \"./modules/scrolling.js\");\n\n\n\nvar initScrollOnLinks = function initScrollOnLinks() {\n  (0,_eventListeners_js__WEBPACK_IMPORTED_MODULE_0__.on)('click', '.scrollto', function (e) {\n    if ((0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)(this.hash)) {\n      e.preventDefault();\n      var body = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('body');\n      if (body.classList.contains('mobile-nav-active')) {\n        body.classList.remove('mobile-nav-active');\n        var navbarToggle = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('.mobile-nav-toggle');\n        navbarToggle.classList.toggle('bi-list');\n        navbarToggle.classList.toggle('bi-x');\n      }\n      (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_2__.scrollto)(this.hash);\n    }\n  }, true);\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/scrollOnLinks.js?");

/***/ }),

/***/ "./modules/scrollOnPageLoad.js":
/*!*************************************!*\
  !*** ./modules/scrollOnPageLoad.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initScrollOnPageLoad\": () => (/* binding */ initScrollOnPageLoad)\n/* harmony export */ });\n/* harmony import */ var _scrolling_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrolling.js */ \"./modules/scrolling.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\n\nvar initScrollOnPageLoad = function initScrollOnPageLoad() {\n  window.addEventListener('load', function () {\n    if (window.location.hash) {\n      if ((0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)(window.location.hash)) {\n        (0,_scrolling_js__WEBPACK_IMPORTED_MODULE_0__.scrollto)(window.location.hash);\n      }\n    }\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/scrollOnPageLoad.js?");

/***/ }),

/***/ "./modules/scrolling.js":
/*!******************************!*\
  !*** ./modules/scrolling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scrollto\": () => (/* binding */ scrollto)\n/* harmony export */ });\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\nvar scrollto = function scrollto(el) {\n  var elementPos = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_0__.select)(el).offsetTop;\n  window.scrollTo({\n    top: elementPos,\n    behavior: 'smooth'\n  });\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/scrolling.js?");

/***/ }),

/***/ "./modules/selectors.js":
/*!******************************!*\
  !*** ./modules/selectors.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"select\": () => (/* binding */ select)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nvar select = function select(el) {\n  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  el = el.trim();\n  if (all) {\n    return _toConsumableArray(document.querySelectorAll(el));\n  } else {\n    return document.querySelector(el);\n  }\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/selectors.js?");

/***/ }),

/***/ "./modules/skillsAnimation.js":
/*!************************************!*\
  !*** ./modules/skillsAnimation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initSkillsAnimation\": () => (/* binding */ initSkillsAnimation)\n/* harmony export */ });\nvar initSkillsAnimation = function initSkillsAnimation() {\n  var skillBars = document.querySelectorAll('.skill-progress');\n  function animateSkillBars() {\n    skillBars.forEach(function (skillBar) {\n      if (isElementInViewport(skillBar) && !skillBar.classList.contains('animated')) {\n        skillBar.style.width = skillBar.dataset.skillLevel + '%';\n        skillBar.classList.add('animated');\n      }\n    });\n  }\n  function isElementInViewport(element) {\n    var rect = element.getBoundingClientRect();\n    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);\n  }\n\n  // Add an event listener for scroll events to trigger the animation\n  window.addEventListener('scroll', animateSkillBars);\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/skillsAnimation.js?");

/***/ }),

/***/ "./modules/typedEffect.js":
/*!********************************!*\
  !*** ./modules/typedEffect.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initTypedEffect\": () => (/* binding */ initTypedEffect)\n/* harmony export */ });\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/dist/typed.module.js\");\n/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./selectors.js */ \"./modules/selectors.js\");\n\n\nvar initTypedEffect = function initTypedEffect() {\n  var typed = (0,_selectors_js__WEBPACK_IMPORTED_MODULE_1__.select)('.typed');\n  if (typed) {\n    var typed_strings = typed.getAttribute('data-typed-items');\n    typed_strings = typed_strings.split(',');\n    new typed_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.typed', {\n      strings: typed_strings,\n      loop: true,\n      typeSpeed: 100,\n      backSpeed: 50,\n      backDelay: 2000\n    });\n  }\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./modules/typedEffect.js?");

/***/ }),

/***/ "./style.css?v=1.0":
/*!*************************!*\
  !*** ./style.css?v=1.0 ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-boilerplate/./style.css?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_aos_dist_aos_js-node_modules_glightbox_dist_js_glightbox_min_js-node_mod-877ca5"], () => (__webpack_exec__("./index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);