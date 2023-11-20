/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ./src/content-scripts/content_scripts.ts ***!
  \************************************************/
const domDetails = {
    pageTitle: document.title,
    pageUrl: window.location.href,
  };
  console.log(domDetails);
  chrome.runtime.sendMessage({ domDetails: domDetails }, (response) => {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError);
      return;
    }
    console.log(response.farewell);
  });
  
/******/ })()
;
//# sourceMappingURL=content_scripts.js.map