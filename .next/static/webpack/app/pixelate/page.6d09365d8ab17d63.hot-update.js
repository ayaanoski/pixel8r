"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/pixelate/page",{

/***/ "(app-pages-browser)/./app/pixelate/page.tsx":
/*!*******************************!*\
  !*** ./app/pixelate/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Pixelate; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Pixelate() {\n    _s();\n    const [originalImage, setOriginalImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [pixelatedImage, setPixelatedImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleImageUpload = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        if (file) {\n            const reader = new FileReader();\n            reader.onload = (e)=>{\n                var _e_target;\n                if ((_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.result) {\n                    setOriginalImage(e.target.result);\n                }\n            };\n            reader.readAsDataURL(file);\n        }\n    };\n    const pixelateImage = ()=>{\n        if (!originalImage || !canvasRef.current) return;\n        const img = new window.Image();\n        img.onload = ()=>{\n            const canvas = canvasRef.current;\n            const ctx = canvas.getContext(\"2d\");\n            const pixelSize = 10;\n            canvas.width = img.width;\n            canvas.height = img.height;\n            ctx.drawImage(img, 0, 0, img.width, img.height);\n            for(let y = 0; y < img.height; y += pixelSize){\n                for(let x = 0; x < img.width; x += pixelSize){\n                    const pixelData = ctx.getImageData(x, y, pixelSize, pixelSize);\n                    const [r, g, b] = pixelData.data;\n                    ctx.fillStyle = \"rgb(\".concat(r, \", \").concat(g, \", \").concat(b, \")\");\n                    ctx.fillRect(x, y, pixelSize, pixelSize);\n                }\n            }\n            setPixelatedImage(canvas.toDataURL());\n        };\n        img.src = originalImage;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (originalImage) {\n            pixelateImage();\n        }\n    }, [\n        originalImage\n    ]);\n    const downloadPixelatedImage = ()=>{\n        if (pixelatedImage) {\n            const link = document.createElement(\"a\");\n            link.href = pixelatedImage;\n            link.download = \"pixelated_image.png\";\n            link.click();\n        }\n    };\n    const deployAsNFT = ()=>{\n        if (pixelatedImage) {\n            router.push(\"/nft-maker?image=\".concat(encodeURIComponent(pixelatedImage)));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center p-8 max-w-4xl mx-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BackgroundCollage, {}, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl font-bold mb-8 pixel-font neon-text\",\n                children: \"Image Pixelator\"\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 w-full max-w-md z-50\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"imageUpload\",\n                        className: \"block mb-2 pixel-font neon-text\",\n                        children: \"Upload Image:\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"imageUpload\",\n                        type: \"file\",\n                        accept: \"image/*\",\n                        onChange: handleImageUpload,\n                        className: \"w-full px-3 py-2 bg-gray-800 rounded-lg pixel-font text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-8 mb-8\",\n                children: [\n                    originalImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"neon-border p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl mb-4 pixel-font neon-text\",\n                                children: \"Original\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: originalImage,\n                                alt: \"Original\",\n                                width: 300,\n                                height: 300,\n                                className: \"rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 11\n                    }, this),\n                    pixelatedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"neon-border p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl mb-4 pixel-font neon-text\",\n                                children: \"Pixelated\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: pixelatedImage,\n                                alt: \"Pixelated\",\n                                width: 300,\n                                height: 300,\n                                className: \"rounded-lg\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            pixelatedImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-wrap justify-center gap-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: downloadPixelatedImage,\n                        className: \"bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300\",\n                        children: \"Download\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: deployAsNFT,\n                        className: \"bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg pixel-font neon-border transition-all duration-300\",\n                        children: \"Deploy as NFT\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\pixelate\\\\page.tsx\",\n        lineNumber: 78,\n        columnNumber: 5\n    }, this);\n}\n_s(Pixelate, \"DRx+Xh6ZClMvZRCBuT8nVdl9DpI=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Pixelate;\nvar _c;\n$RefreshReg$(_c, \"Pixelate\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9waXhlbGF0ZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRDtBQUNyQjtBQUNhO0FBRzVCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHUCwrQ0FBUUEsQ0FBZ0I7SUFDbEUsTUFBTSxDQUFDUSxnQkFBZ0JDLGtCQUFrQixHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFDcEUsTUFBTVUsWUFBWVQsNkNBQU1BLENBQW9CO0lBQzVDLE1BQU1VLFNBQVNQLDBEQUFTQTtJQUV4QixNQUFNUSxvQkFBb0IsQ0FBQ0M7WUFDWkE7UUFBYixNQUFNQyxRQUFPRCxrQkFBQUEsRUFBRUUsTUFBTSxDQUFDQyxLQUFLLGNBQWRILHNDQUFBQSxlQUFnQixDQUFDLEVBQUU7UUFDaEMsSUFBSUMsTUFBTTtZQUNSLE1BQU1HLFNBQVMsSUFBSUM7WUFDbkJELE9BQU9FLE1BQU0sR0FBRyxDQUFDTjtvQkFDWEE7Z0JBQUosS0FBSUEsWUFBQUEsRUFBRUUsTUFBTSxjQUFSRixnQ0FBQUEsVUFBVU8sTUFBTSxFQUFFO29CQUNwQmIsaUJBQWlCTSxFQUFFRSxNQUFNLENBQUNLLE1BQU07Z0JBQ2xDO1lBQ0Y7WUFDQUgsT0FBT0ksYUFBYSxDQUFDUDtRQUN2QjtJQUNGO0lBRUEsTUFBTVEsZ0JBQWdCO1FBQ3BCLElBQUksQ0FBQ2hCLGlCQUFpQixDQUFDSSxVQUFVYSxPQUFPLEVBQUU7UUFFMUMsTUFBTUMsTUFBTSxJQUFJQyxPQUFPdEIsS0FBSztRQUM1QnFCLElBQUlMLE1BQU0sR0FBRztZQUNYLE1BQU1PLFNBQVNoQixVQUFVYSxPQUFPO1lBQ2hDLE1BQU1JLE1BQU1ELE9BQU9FLFVBQVUsQ0FBQztZQUU5QixNQUFNQyxZQUFZO1lBQ2xCSCxPQUFPSSxLQUFLLEdBQUdOLElBQUlNLEtBQUs7WUFDeEJKLE9BQU9LLE1BQU0sR0FBR1AsSUFBSU8sTUFBTTtZQUUxQkosSUFBSUssU0FBUyxDQUFDUixLQUFLLEdBQUcsR0FBR0EsSUFBSU0sS0FBSyxFQUFFTixJQUFJTyxNQUFNO1lBRTlDLElBQUssSUFBSUUsSUFBSSxHQUFHQSxJQUFJVCxJQUFJTyxNQUFNLEVBQUVFLEtBQUtKLFVBQVc7Z0JBQzlDLElBQUssSUFBSUssSUFBSSxHQUFHQSxJQUFJVixJQUFJTSxLQUFLLEVBQUVJLEtBQUtMLFVBQVc7b0JBQzdDLE1BQU1NLFlBQVlSLElBQUlTLFlBQVksQ0FBQ0YsR0FBR0QsR0FBR0osV0FBV0E7b0JBQ3BELE1BQU0sQ0FBQ1EsR0FBR0MsR0FBR0MsRUFBRSxHQUFHSixVQUFVSyxJQUFJO29CQUNoQ2IsSUFBSWMsU0FBUyxHQUFHLE9BQWFILE9BQU5ELEdBQUUsTUFBVUUsT0FBTkQsR0FBRSxNQUFNLE9BQUZDLEdBQUU7b0JBQ3JDWixJQUFJZSxRQUFRLENBQUNSLEdBQUdELEdBQUdKLFdBQVdBO2dCQUNoQztZQUNGO1lBRUFwQixrQkFBa0JpQixPQUFPaUIsU0FBUztRQUNwQztRQUNBbkIsSUFBSW9CLEdBQUcsR0FBR3RDO0lBQ1o7SUFFQUosZ0RBQVNBLENBQUM7UUFDUixJQUFJSSxlQUFlO1lBQ2pCZ0I7UUFDRjtJQUNGLEdBQUc7UUFBQ2hCO0tBQWM7SUFFbEIsTUFBTXVDLHlCQUF5QjtRQUM3QixJQUFJckMsZ0JBQWdCO1lBQ2xCLE1BQU1zQyxPQUFPQyxTQUFTQyxhQUFhLENBQUM7WUFDcENGLEtBQUtHLElBQUksR0FBR3pDO1lBQ1pzQyxLQUFLSSxRQUFRLEdBQUc7WUFDaEJKLEtBQUtLLEtBQUs7UUFDWjtJQUNGO0lBRUEsTUFBTUMsY0FBYztRQUNsQixJQUFJNUMsZ0JBQWdCO1lBQ2xCRyxPQUFPMEMsSUFBSSxDQUFDLG9CQUF1RCxPQUFuQ0MsbUJBQW1COUM7UUFDckQ7SUFFRjtJQUVBLHFCQUNFLDhEQUFDK0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7Z0JBQUdGLFdBQVU7MEJBQStDOzs7Ozs7MEJBQzdELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFNQyxTQUFRO3dCQUFjSixXQUFVO2tDQUFrQzs7Ozs7O2tDQUN6RSw4REFBQ0s7d0JBQ0NDLElBQUc7d0JBQ0hDLE1BQUs7d0JBQ0xDLFFBQU87d0JBQ1BDLFVBQVVyRDt3QkFDVjRDLFdBQVU7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O29CQUNabEQsK0JBQ0MsOERBQUNpRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNVO2dDQUFHVixXQUFVOzBDQUFxQzs7Ozs7OzBDQUNuRCw4REFBQ3JELGtEQUFLQTtnQ0FBQ3lDLEtBQUt0QztnQ0FBZTZELEtBQUk7Z0NBQVdyQyxPQUFPO2dDQUFLQyxRQUFRO2dDQUFLeUIsV0FBVTs7Ozs7Ozs7Ozs7O29CQUdoRmhELGdDQUNDLDhEQUFDK0M7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDVTtnQ0FBR1YsV0FBVTswQ0FBcUM7Ozs7OzswQ0FDbkQsOERBQUNyRCxrREFBS0E7Z0NBQUN5QyxLQUFLcEM7Z0NBQWdCMkQsS0FBSTtnQ0FBWXJDLE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUt5QixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJcEZoRCxnQ0FDQyw4REFBQytDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ1k7d0JBQ0NDLFNBQVN4Qjt3QkFDVFcsV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDWTt3QkFDQ0MsU0FBU2pCO3dCQUNUSSxXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBS0wsOERBQUM5QjtnQkFBTzRDLEtBQUs1RDtnQkFBVzZELE9BQU87b0JBQUVDLFNBQVM7Z0JBQU87Ozs7Ozs7Ozs7OztBQUd2RDtHQXBId0JuRTs7UUFJUEQsc0RBQVNBOzs7S0FKRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BpeGVsYXRlL3BhZ2UudHN4PzQyYjIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaXhlbGF0ZSgpIHtcbiAgY29uc3QgW29yaWdpbmFsSW1hZ2UsIHNldE9yaWdpbmFsSW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbClcbiAgY29uc3QgW3BpeGVsYXRlZEltYWdlLCBzZXRQaXhlbGF0ZWRJbWFnZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXVxuICAgIGlmIChmaWxlKSB7XG4gICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgICByZWFkZXIub25sb2FkID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0Py5yZXN1bHQpIHtcbiAgICAgICAgICBzZXRPcmlnaW5hbEltYWdlKGUudGFyZ2V0LnJlc3VsdCBhcyBzdHJpbmcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGl4ZWxhdGVJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAoIW9yaWdpbmFsSW1hZ2UgfHwgIWNhbnZhc1JlZi5jdXJyZW50KSByZXR1cm5cblxuICAgIGNvbnN0IGltZyA9IG5ldyB3aW5kb3cuSW1hZ2UoKVxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudCFcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpIVxuXG4gICAgICBjb25zdCBwaXhlbFNpemUgPSAxMFxuICAgICAgY2FudmFzLndpZHRoID0gaW1nLndpZHRoXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gaW1nLmhlaWdodFxuXG4gICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgaW1nLndpZHRoLCBpbWcuaGVpZ2h0KVxuXG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGltZy5oZWlnaHQ7IHkgKz0gcGl4ZWxTaXplKSB7XG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW1nLndpZHRoOyB4ICs9IHBpeGVsU2l6ZSkge1xuICAgICAgICAgIGNvbnN0IHBpeGVsRGF0YSA9IGN0eC5nZXRJbWFnZURhdGEoeCwgeSwgcGl4ZWxTaXplLCBwaXhlbFNpemUpXG4gICAgICAgICAgY29uc3QgW3IsIGcsIGJdID0gcGl4ZWxEYXRhLmRhdGFcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J9LCAke2d9LCAke2J9KWBcbiAgICAgICAgICBjdHguZmlsbFJlY3QoeCwgeSwgcGl4ZWxTaXplLCBwaXhlbFNpemUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0UGl4ZWxhdGVkSW1hZ2UoY2FudmFzLnRvRGF0YVVSTCgpKVxuICAgIH1cbiAgICBpbWcuc3JjID0gb3JpZ2luYWxJbWFnZVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAob3JpZ2luYWxJbWFnZSkge1xuICAgICAgcGl4ZWxhdGVJbWFnZSgpXG4gICAgfVxuICB9LCBbb3JpZ2luYWxJbWFnZV0pXG5cbiAgY29uc3QgZG93bmxvYWRQaXhlbGF0ZWRJbWFnZSA9ICgpID0+IHtcbiAgICBpZiAocGl4ZWxhdGVkSW1hZ2UpIHtcbiAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICAgIGxpbmsuaHJlZiA9IHBpeGVsYXRlZEltYWdlXG4gICAgICBsaW5rLmRvd25sb2FkID0gJ3BpeGVsYXRlZF9pbWFnZS5wbmcnXG4gICAgICBsaW5rLmNsaWNrKClcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXBsb3lBc05GVCA9ICgpID0+IHtcbiAgICBpZiAocGl4ZWxhdGVkSW1hZ2UpIHtcbiAgICAgIHJvdXRlci5wdXNoKGAvbmZ0LW1ha2VyP2ltYWdlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHBpeGVsYXRlZEltYWdlKX1gKVxuICAgIH1cbiAgXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBwLTggbWF4LXctNHhsIG14LWF1dG9cIj5cbiAgICAgIDxCYWNrZ3JvdW5kQ29sbGFnZSAvPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtYm9sZCBtYi04IHBpeGVsLWZvbnQgbmVvbi10ZXh0XCI+SW1hZ2UgUGl4ZWxhdG9yPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCB3LWZ1bGwgbWF4LXctbWQgei01MFwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlVXBsb2FkXCIgY2xhc3NOYW1lPVwiYmxvY2sgbWItMiBwaXhlbC1mb250IG5lb24tdGV4dFwiPlVwbG9hZCBJbWFnZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgaWQ9XCJpbWFnZVVwbG9hZFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIiBcbiAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCIgXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUltYWdlVXBsb2FkfSBcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtMyBweS0yIGJnLWdyYXktODAwIHJvdW5kZWQtbGcgcGl4ZWwtZm9udCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlciBnYXAtOCBtYi04XCI+XG4gICAgICAgIHtvcmlnaW5hbEltYWdlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5lb24tYm9yZGVyIHAtNCByb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWItNCBwaXhlbC1mb250IG5lb24tdGV4dFwiPk9yaWdpbmFsPC9oMj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e29yaWdpbmFsSW1hZ2V9IGFsdD1cIk9yaWdpbmFsXCIgd2lkdGg9ezMwMH0gaGVpZ2h0PXszMDB9IGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cGl4ZWxhdGVkSW1hZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmVvbi1ib3JkZXIgcC00IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBtYi00IHBpeGVsLWZvbnQgbmVvbi10ZXh0XCI+UGl4ZWxhdGVkPC9oMj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3BpeGVsYXRlZEltYWdlfSBhbHQ9XCJQaXhlbGF0ZWRcIiB3aWR0aD17MzAwfSBoZWlnaHQ9ezMwMH0gY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIHtwaXhlbGF0ZWRJbWFnZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgb25DbGljaz17ZG93bmxvYWRQaXhlbGF0ZWRJbWFnZX0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNjAwIHRleHQtd2hpdGUgZm9udC1ib2xkIHB5LTMgcHgtNiByb3VuZGVkLWxnIHBpeGVsLWZvbnQgbmVvbi1ib3JkZXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICBvbkNsaWNrPXtkZXBsb3lBc05GVH0gXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1wdXJwbGUtNTAwIGhvdmVyOmJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMyBweC02IHJvdW5kZWQtbGcgcGl4ZWwtZm9udCBuZW9uLWJvcmRlciB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIERlcGxveSBhcyBORlRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGNhbnZhcyByZWY9e2NhbnZhc1JlZn0gc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJ1c2VSb3V0ZXIiLCJQaXhlbGF0ZSIsIm9yaWdpbmFsSW1hZ2UiLCJzZXRPcmlnaW5hbEltYWdlIiwicGl4ZWxhdGVkSW1hZ2UiLCJzZXRQaXhlbGF0ZWRJbWFnZSIsImNhbnZhc1JlZiIsInJvdXRlciIsImhhbmRsZUltYWdlVXBsb2FkIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIiwicGl4ZWxhdGVJbWFnZSIsImN1cnJlbnQiLCJpbWciLCJ3aW5kb3ciLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwicGl4ZWxTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJkcmF3SW1hZ2UiLCJ5IiwieCIsInBpeGVsRGF0YSIsImdldEltYWdlRGF0YSIsInIiLCJnIiwiYiIsImRhdGEiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInRvRGF0YVVSTCIsInNyYyIsImRvd25sb2FkUGl4ZWxhdGVkSW1hZ2UiLCJsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJkZXBsb3lBc05GVCIsInB1c2giLCJlbmNvZGVVUklDb21wb25lbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJCYWNrZ3JvdW5kQ29sbGFnZSIsImgxIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJhY2NlcHQiLCJvbkNoYW5nZSIsImgyIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsInJlZiIsInN0eWxlIiwiZGlzcGxheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/pixelate/page.tsx\n"));

/***/ })

});