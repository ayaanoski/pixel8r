"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/nft-maker/page",{

/***/ "(app-pages-browser)/./app/components/BackgroundCollage.tsx":
/*!**********************************************!*\
  !*** ./app/components/BackgroundCollage.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n\n\n\nconst BackgroundCollage = ()=>{\n    const images = Array.from({\n        length: 12\n    }, (_, i)=>i + 1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 overflow-hidden z-[-\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute top-[-10%] left-[-10%] w-[120%] h-[40%] flex justify-around\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 0.3\n                },\n                transition: {\n                    duration: 1\n                },\n                children: images.slice(0, 4).map((num)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-64 h-64 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/assets/nft/\".concat(num, \".png\"),\n                            alt: \"NFT \".concat(num),\n                            fill: true,\n                            className: \"object-cover rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined)\n                    }, \"top-\".concat(num), false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute top-[30%] left-[-5%] w-[110%] h-[40%] flex justify-around\",\n                initial: {\n                    opacity: 0.3\n                },\n                animate: {\n                    opacity: 0.9\n                },\n                transition: {\n                    duration: 1,\n                    delay: 0.1\n                },\n                children: images.slice(4, 8).map((num)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-64 h-64 transform rotate-[5deg] hover:rotate-0 transition-transform duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/assets/nft/\".concat(num, \".png\"),\n                            alt: \"NFT \".concat(num),\n                            fill: true,\n                            className: \"object-cover rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 15\n                        }, undefined)\n                    }, \"middle-\".concat(num), false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute top-[70%] left-[-10%] w-[120%] h-[40%] flex justify-around\",\n                initial: {\n                    opacity: 0.3\n                },\n                animate: {\n                    opacity: 1.0\n                },\n                transition: {\n                    duration: 1,\n                    delay: 0.4\n                },\n                children: images.slice(8, 12).map((num)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-64 h-64 transform rotate-[-3deg] hover:rotate-0 transition-transform duration-500\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: \"/assets/nft/\".concat(num, \".png\"),\n                            alt: \"NFT \".concat(num),\n                            fill: true,\n                            className: \"object-cover rounded-lg\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 15\n                        }, undefined)\n                    }, \"bottom-\".concat(num), false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80\"\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\components\\\\BackgroundCollage.tsx\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, undefined);\n};\n_c = BackgroundCollage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BackgroundCollage);\nvar _c;\n$RefreshReg$(_c, \"BackgroundCollage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0JhY2tncm91bmRDb2xsYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUM4QjtBQUNRO0FBRXRDLE1BQU1FLG9CQUFvQjtJQUN0QixNQUFNQyxTQUFTQyxNQUFNQyxJQUFJLENBQUM7UUFBRUMsUUFBUTtJQUFHLEdBQUcsQ0FBQ0MsR0FBR0MsSUFBTUEsSUFBSTtJQUV4RCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNULGlEQUFNQSxDQUFDUSxHQUFHO2dCQUNUQyxXQUFVO2dCQUNWQyxTQUFTO29CQUFFQyxTQUFTO2dCQUFFO2dCQUN0QkMsU0FBUztvQkFBRUQsU0FBUztnQkFBSTtnQkFDeEJFLFlBQVk7b0JBQUVDLFVBQVU7Z0JBQUU7MEJBRXpCWixPQUFPYSxLQUFLLENBQUMsR0FBRyxHQUFHQyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ3ZCLDhEQUFDVDt3QkFBdUJDLFdBQVU7a0NBQ2hDLDRFQUFDVixrREFBS0E7NEJBQ0ptQixLQUFLLGVBQW1CLE9BQUpELEtBQUk7NEJBQ3hCRSxLQUFLLE9BQVcsT0FBSkY7NEJBQ1pHLElBQUk7NEJBQ0pYLFdBQVU7Ozs7Ozt1QkFMSixPQUFXLE9BQUpROzs7Ozs7Ozs7OzBCQVlyQiw4REFBQ2pCLGlEQUFNQSxDQUFDUSxHQUFHO2dCQUNUQyxXQUFVO2dCQUNWQyxTQUFTO29CQUFFQyxTQUFTO2dCQUFJO2dCQUN4QkMsU0FBUztvQkFBRUQsU0FBUztnQkFBSTtnQkFDeEJFLFlBQVk7b0JBQUVDLFVBQVU7b0JBQUdPLE9BQU87Z0JBQUk7MEJBRXJDbkIsT0FBT2EsS0FBSyxDQUFDLEdBQUcsR0FBR0MsR0FBRyxDQUFDLENBQUNDLG9CQUN2Qiw4REFBQ1Q7d0JBQTBCQyxXQUFVO2tDQUNuQyw0RUFBQ1Ysa0RBQUtBOzRCQUNKbUIsS0FBSyxlQUFtQixPQUFKRCxLQUFJOzRCQUN4QkUsS0FBSyxPQUFXLE9BQUpGOzRCQUNaRyxJQUFJOzRCQUNKWCxXQUFVOzs7Ozs7dUJBTEosVUFBYyxPQUFKUTs7Ozs7Ozs7OzswQkFZeEIsOERBQUNqQixpREFBTUEsQ0FBQ1EsR0FBRztnQkFDVEMsV0FBVTtnQkFDVkMsU0FBUztvQkFBRUMsU0FBUztnQkFBSTtnQkFDeEJDLFNBQVM7b0JBQUVELFNBQVM7Z0JBQUk7Z0JBQ3hCRSxZQUFZO29CQUFFQyxVQUFVO29CQUFHTyxPQUFPO2dCQUFJOzBCQUVyQ25CLE9BQU9hLEtBQUssQ0FBQyxHQUFHLElBQUlDLEdBQUcsQ0FBQyxDQUFDQyxvQkFDeEIsOERBQUNUO3dCQUEwQkMsV0FBVTtrQ0FDbkMsNEVBQUNWLGtEQUFLQTs0QkFDSm1CLEtBQUssZUFBbUIsT0FBSkQsS0FBSTs0QkFDeEJFLEtBQUssT0FBVyxPQUFKRjs0QkFDWkcsSUFBSTs0QkFDSlgsV0FBVTs7Ozs7O3VCQUxKLFVBQWMsT0FBSlE7Ozs7Ozs7Ozs7MEJBWXhCLDhEQUFDVDtnQkFBSUMsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCO0tBbEVJUjtBQW9FTiwrREFBZUEsaUJBQWlCQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0JhY2tncm91bmRDb2xsYWdlLnRzeD83ZDljIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuXHJcbmNvbnN0IEJhY2tncm91bmRDb2xsYWdlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgaW1hZ2VzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTIgfSwgKF8sIGkpID0+IGkgKyAxKVxyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgb3ZlcmZsb3ctaGlkZGVuIHotWy1cIj5cclxuICAgICAgICB7LyogVG9wIHJvdyAqL31cclxuICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bLTEwJV0gbGVmdC1bLTEwJV0gdy1bMTIwJV0gaC1bNDAlXSBmbGV4IGp1c3RpZnktYXJvdW5kXCJcclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxyXG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAwLjMgfX1cclxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7aW1hZ2VzLnNsaWNlKDAsIDQpLm1hcCgobnVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtgdG9wLSR7bnVtfWB9IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctNjQgaC02NCB0cmFuc2Zvcm0gcm90YXRlLVstNWRlZ10gaG92ZXI6cm90YXRlLTAgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tNTAwXCI+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzcmM9e2AvYXNzZXRzL25mdC8ke251bX0ucG5nYH1cclxuICAgICAgICAgICAgICAgIGFsdD17YE5GVCAke251bX1gfVxyXG4gICAgICAgICAgICAgICAgZmlsbFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gIFxyXG4gICAgICAgIHsvKiBNaWRkbGUgcm93ICovfVxyXG4gICAgICAgIDxtb3Rpb24uZGl2IFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLVszMCVdIGxlZnQtWy01JV0gdy1bMTEwJV0gaC1bNDAlXSBmbGV4IGp1c3RpZnktYXJvdW5kXCJcclxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMC4zIH19XHJcbiAgICAgICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDAuOSB9fVxyXG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgZGVsYXk6IDAuMSB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpbWFnZXMuc2xpY2UoNCwgOCkubWFwKChudW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2BtaWRkbGUtJHtudW19YH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy02NCBoLTY0IHRyYW5zZm9ybSByb3RhdGUtWzVkZWddIGhvdmVyOnJvdGF0ZS0wIHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTUwMFwiPlxyXG4gICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2Fzc2V0cy9uZnQvJHtudW19LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2BORlQgJHtudW19YH1cclxuICAgICAgICAgICAgICAgIGZpbGxcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvbW90aW9uLmRpdj5cclxuICBcclxuICAgICAgICB7LyogQm90dG9tIHJvdyAqL31cclxuICAgICAgICA8bW90aW9uLmRpdiBcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC1bNzAlXSBsZWZ0LVstMTAlXSB3LVsxMjAlXSBoLVs0MCVdIGZsZXgganVzdGlmeS1hcm91bmRcIlxyXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLjMgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMS4wIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAxLCBkZWxheTogMC40IH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2ltYWdlcy5zbGljZSg4LCAxMikubWFwKChudW0pID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2Bib3R0b20tJHtudW19YH0gY2xhc3NOYW1lPVwicmVsYXRpdmUgdy02NCBoLTY0IHRyYW5zZm9ybSByb3RhdGUtWy0zZGVnXSBob3Zlcjpyb3RhdGUtMCB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi01MDBcIj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17YC9hc3NldHMvbmZ0LyR7bnVtfS5wbmdgfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtgTkZUICR7bnVtfWB9XHJcbiAgICAgICAgICAgICAgICBmaWxsXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgXHJcbiAgICAgICAgey8qIE92ZXJsYXkgZ3JhZGllbnQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ibGFjay84MCB2aWEtYmxhY2svNzAgdG8tYmxhY2svODBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQ29sbGFnZSJdLCJuYW1lcyI6WyJJbWFnZSIsIm1vdGlvbiIsIkJhY2tncm91bmRDb2xsYWdlIiwiaW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImkiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzbGljZSIsIm1hcCIsIm51bSIsInNyYyIsImFsdCIsImZpbGwiLCJkZWxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BackgroundCollage.tsx\n"));

/***/ })

});