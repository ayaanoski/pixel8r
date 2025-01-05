"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/marketplace/page",{

/***/ "(app-pages-browser)/./app/marketplace/page.tsx":
/*!**********************************!*\
  !*** ./app/marketplace/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Marketplace; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst baseNFTs = [\n    {\n        id: 1,\n        name: \"Angel of Death\",\n        description: \"A haunting pixel art depicting the ethereal Angel of Death, wings spread wide against a darkened sky, wielding a gleaming scythe.\",\n        image: \"/assets/nft/1.png\"\n    },\n    {\n        id: 2,\n        name: \"Freeze\",\n        description: \"An icy masterpiece capturing the moment of absolute zero, where time stands still and crystals form in mesmerizing patterns.\",\n        image: \"/assets/nft/2.png\"\n    },\n    {\n        id: 3,\n        name: \"Rick and Morty\",\n        description: \"Wubba lubba dub dub! A pixelated adventure featuring everyone's favorite dimension-hopping duo in their most bizarre situation yet.\",\n        image: \"/assets/nft/3.png\"\n    },\n    {\n        id: 4,\n        name: \"Grumpy Sonic\",\n        description: \"The world's fastest hedgehog having a seriously bad day. No chili dogs in sight, and he's not happy about it.\",\n        image: \"/assets/nft/4.png\"\n    },\n    {\n        id: 5,\n        name: \"Pixel Puss\",\n        description: \"A mischievous feline captured in perfect pixel form, plotting its next adventure with gleaming eyes and a swishing tail.\",\n        image: \"/assets/nft/5.png\"\n    },\n    {\n        id: 6,\n        name: \"Deadpool\",\n        description: \"The Merc with a Mouth in 8-bit glory, breaking the fourth wall and probably making a joke about being pixelated.\",\n        image: \"/assets/nft/6.png\"\n    },\n    {\n        id: 7,\n        name: \"Chill Dog\",\n        description: \"The coolest canine in the crypto world, wearing shades and living its best life without a care in the digital universe.\",\n        image: \"/assets/nft/7.png\"\n    },\n    {\n        id: 8,\n        name: \"Pixel Hero Fireman\",\n        description: \"A brave pixel firefighter ready to save the day, complete with classic gear and an unwavering commitment to duty.\",\n        image: \"/assets/nft/8.png\"\n    },\n    {\n        id: 9,\n        name: \"Jotaro Kujo\",\n        description: \"Yare yare daze... The legendary JoJo protagonist strikes his iconic pose in pixel perfect detail, Star Platinum lurking in the shadows.\",\n        image: \"/assets/nft/9.png\"\n    },\n    {\n        id: 10,\n        name: \"Pixel Dragon\",\n        description: \"A fearsome dragon rendered in stunning pixel art, its scales gleaming as it prepares to unleash its digital fury.\",\n        image: \"/assets/nft/10.png\"\n    },\n    {\n        id: 11,\n        name: \"Skull Meme\",\n        description: \"The internet's favorite skeletal reaction, now immortalized in pixel form. Perfect for when you literally can't even.\",\n        image: \"/assets/nft/11.png\"\n    },\n    {\n        id: 12,\n        name: \"Ninja Turtle\",\n        description: \"Cowabunga! A heroic half-shell warrior brings retro gaming vibes to the blockchain, pizza not included.\",\n        image: \"/assets/nft/12.png\"\n    }\n];\nfunction Marketplace() {\n    _s();\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Generate prices on the client side only\n        const nftsWithPrices = baseNFTs.map((nft)=>({\n                ...nft,\n                price: parseFloat((Math.random() * 10 + 0.1).toFixed(2))\n            }));\n        setNfts(nftsWithPrices);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-4 py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold mb-8 pixel-font\",\n                children: \"NFT Marketplace\"\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/my-collection\",\n                        className: \"bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300\",\n                        children: \"My Collection\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        href: \"/nft-maker\",\n                        className: \"bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300\",\n                        children: \"Make Your Own\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6\",\n                children: nfts.map((nft)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded-lg p-4 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-blue-500 flex flex-col h-[450px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-full h-48 mb-4\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    src: nft.image,\n                                    alt: nft.name,\n                                    fill: true,\n                                    priority: nft.id === 1,\n                                    className: \"object-cover rounded-lg\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-2 pixel-font\",\n                                children: nft.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                lineNumber: 137,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 mb-4 pixel-font line-clamp-3\",\n                                children: nft.description\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                lineNumber: 139,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-auto\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-t pt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-between items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-lg font-bold pixel-font\",\n                                                children: nft.price ? \"\".concat(nft.price, \" TLOS\") : \"Loading...\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                                lineNumber: 144,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                href: \"/marketplace/\".concat(nft.id),\n                                                className: \"bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded pixel-font transition-colors duration-300\",\n                                                children: \"Buy NFT\"\n                                            }, void 0, false, {\n                                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                    lineNumber: 142,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                                lineNumber: 141,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, nft.id, true, {\n                        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\telos\\\\pixelator\\\\app\\\\marketplace\\\\page.tsx\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(Marketplace, \"WoQOxielu1Zw1vsEZjYoUHnckyk=\");\n_c = Marketplace;\nvar _c;\n$RefreshReg$(_c, \"Marketplace\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tYXJrZXRwbGFjZS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUUyQztBQUNmO0FBQ0U7QUFVOUIsTUFBTUksV0FBVztJQUNmO1FBQ0VDLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtJQUNBO1FBQ0VILElBQUk7UUFDSkMsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE9BQU87SUFDVDtDQUNEO0FBRWMsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBRTFDQyxnREFBU0EsQ0FBQztRQUNSLDBDQUEwQztRQUMxQyxNQUFNVyxpQkFBaUJSLFNBQVNTLEdBQUcsQ0FBQ0MsQ0FBQUEsTUFBUTtnQkFDMUMsR0FBR0EsR0FBRztnQkFDTkMsT0FBT0MsV0FBVyxDQUFDQyxLQUFLQyxNQUFNLEtBQUssS0FBSyxHQUFFLEVBQUdDLE9BQU8sQ0FBQztZQUN2RDtRQUNBUixRQUFRQztJQUNWLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQXFDOzs7Ozs7MEJBRW5ELDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNuQixpREFBSUE7d0JBQ0hxQixNQUFLO3dCQUNMRixXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNuQixpREFBSUE7d0JBQ0hxQixNQUFLO3dCQUNMRixXQUFVO2tDQUNYOzs7Ozs7Ozs7Ozs7MEJBS0gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaWCxLQUFLRyxHQUFHLENBQUMsQ0FBQ0Msb0JBQ1QsOERBQUNNO3dCQUVDQyxXQUFVOzswQ0FFViw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNsQixrREFBS0E7b0NBQ0pxQixLQUFLVixJQUFJTixLQUFLO29DQUNkaUIsS0FBS1gsSUFBSVIsSUFBSTtvQ0FDYm9CLElBQUk7b0NBQ0pDLFVBQVViLElBQUlULEVBQUUsS0FBSztvQ0FDckJnQixXQUFVOzs7Ozs7Ozs7OzswQ0FJZCw4REFBQ087Z0NBQUdQLFdBQVU7MENBQXFDUCxJQUFJUixJQUFJOzs7Ozs7MENBRTNELDhEQUFDdUI7Z0NBQUVSLFdBQVU7MENBQThDUCxJQUFJUCxXQUFXOzs7Ozs7MENBRTFFLDhEQUFDYTtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNEO3dDQUFJQyxXQUFVOzswREFDYiw4REFBQ1E7Z0RBQUVSLFdBQVU7MERBQ1ZQLElBQUlDLEtBQUssR0FBRyxHQUFhLE9BQVZELElBQUlDLEtBQUssRUFBQyxXQUFTOzs7Ozs7MERBRXJDLDhEQUFDYixpREFBSUE7Z0RBQ0hxQixNQUFNLGdCQUF1QixPQUFQVCxJQUFJVCxFQUFFO2dEQUM1QmdCLFdBQVU7MERBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VCQTFCRlAsSUFBSVQsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OztBQXFDdkI7R0F2RXdCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvbWFya2V0cGxhY2UvcGFnZS50c3g/ZjMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmludGVyZmFjZSBORlQge1xuICBpZDogbnVtYmVyXG4gIG5hbWU6IHN0cmluZ1xuICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gIHByaWNlOiBudW1iZXJcbiAgaW1hZ2U6IHN0cmluZ1xufVxuXG5jb25zdCBiYXNlTkZUcyA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiQW5nZWwgb2YgRGVhdGhcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIGhhdW50aW5nIHBpeGVsIGFydCBkZXBpY3RpbmcgdGhlIGV0aGVyZWFsIEFuZ2VsIG9mIERlYXRoLCB3aW5ncyBzcHJlYWQgd2lkZSBhZ2FpbnN0IGEgZGFya2VuZWQgc2t5LCB3aWVsZGluZyBhIGdsZWFtaW5nIHNjeXRoZS5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC8xLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIkZyZWV6ZVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGljeSBtYXN0ZXJwaWVjZSBjYXB0dXJpbmcgdGhlIG1vbWVudCBvZiBhYnNvbHV0ZSB6ZXJvLCB3aGVyZSB0aW1lIHN0YW5kcyBzdGlsbCBhbmQgY3J5c3RhbHMgZm9ybSBpbiBtZXNtZXJpemluZyBwYXR0ZXJucy5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC8yLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICBuYW1lOiBcIlJpY2sgYW5kIE1vcnR5XCIsXG4gICAgZGVzY3JpcHRpb246IFwiV3ViYmEgbHViYmEgZHViIGR1YiEgQSBwaXhlbGF0ZWQgYWR2ZW50dXJlIGZlYXR1cmluZyBldmVyeW9uZSdzIGZhdm9yaXRlIGRpbWVuc2lvbi1ob3BwaW5nIGR1byBpbiB0aGVpciBtb3N0IGJpemFycmUgc2l0dWF0aW9uIHlldC5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC8zLnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICBuYW1lOiBcIkdydW1weSBTb25pY1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoZSB3b3JsZCdzIGZhc3Rlc3QgaGVkZ2Vob2cgaGF2aW5nIGEgc2VyaW91c2x5IGJhZCBkYXkuIE5vIGNoaWxpIGRvZ3MgaW4gc2lnaHQsIGFuZCBoZSdzIG5vdCBoYXBweSBhYm91dCBpdC5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC80LnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogNSxcbiAgICBuYW1lOiBcIlBpeGVsIFB1c3NcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBIG1pc2NoaWV2b3VzIGZlbGluZSBjYXB0dXJlZCBpbiBwZXJmZWN0IHBpeGVsIGZvcm0sIHBsb3R0aW5nIGl0cyBuZXh0IGFkdmVudHVyZSB3aXRoIGdsZWFtaW5nIGV5ZXMgYW5kIGEgc3dpc2hpbmcgdGFpbC5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC81LnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogNixcbiAgICBuYW1lOiBcIkRlYWRwb29sXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIE1lcmMgd2l0aCBhIE1vdXRoIGluIDgtYml0IGdsb3J5LCBicmVha2luZyB0aGUgZm91cnRoIHdhbGwgYW5kIHByb2JhYmx5IG1ha2luZyBhIGpva2UgYWJvdXQgYmVpbmcgcGl4ZWxhdGVkLlwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvbmZ0LzYucG5nXCJcbiAgfSxcbiAge1xuICAgIGlkOiA3LFxuICAgIG5hbWU6IFwiQ2hpbGwgRG9nXCIsXG4gICAgZGVzY3JpcHRpb246IFwiVGhlIGNvb2xlc3QgY2FuaW5lIGluIHRoZSBjcnlwdG8gd29ybGQsIHdlYXJpbmcgc2hhZGVzIGFuZCBsaXZpbmcgaXRzIGJlc3QgbGlmZSB3aXRob3V0IGEgY2FyZSBpbiB0aGUgZGlnaXRhbCB1bml2ZXJzZS5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC83LnBuZ1wiXG4gIH0sXG4gIHtcbiAgICBpZDogOCxcbiAgICBuYW1lOiBcIlBpeGVsIEhlcm8gRmlyZW1hblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgYnJhdmUgcGl4ZWwgZmlyZWZpZ2h0ZXIgcmVhZHkgdG8gc2F2ZSB0aGUgZGF5LCBjb21wbGV0ZSB3aXRoIGNsYXNzaWMgZ2VhciBhbmQgYW4gdW53YXZlcmluZyBjb21taXRtZW50IHRvIGR1dHkuXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9uZnQvOC5wbmdcIlxuICB9LFxuICB7XG4gICAgaWQ6IDksXG4gICAgbmFtZTogXCJKb3Rhcm8gS3Vqb1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllhcmUgeWFyZSBkYXplLi4uIFRoZSBsZWdlbmRhcnkgSm9KbyBwcm90YWdvbmlzdCBzdHJpa2VzIGhpcyBpY29uaWMgcG9zZSBpbiBwaXhlbCBwZXJmZWN0IGRldGFpbCwgU3RhciBQbGF0aW51bSBsdXJraW5nIGluIHRoZSBzaGFkb3dzLlwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvbmZ0LzkucG5nXCJcbiAgfSxcbiAge1xuICAgIGlkOiAxMCxcbiAgICBuYW1lOiBcIlBpeGVsIERyYWdvblwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgZmVhcnNvbWUgZHJhZ29uIHJlbmRlcmVkIGluIHN0dW5uaW5nIHBpeGVsIGFydCwgaXRzIHNjYWxlcyBnbGVhbWluZyBhcyBpdCBwcmVwYXJlcyB0byB1bmxlYXNoIGl0cyBkaWdpdGFsIGZ1cnkuXCIsXG4gICAgaW1hZ2U6IFwiL2Fzc2V0cy9uZnQvMTAucG5nXCJcbiAgfSxcbiAge1xuICAgIGlkOiAxMSxcbiAgICBuYW1lOiBcIlNrdWxsIE1lbWVcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgaW50ZXJuZXQncyBmYXZvcml0ZSBza2VsZXRhbCByZWFjdGlvbiwgbm93IGltbW9ydGFsaXplZCBpbiBwaXhlbCBmb3JtLiBQZXJmZWN0IGZvciB3aGVuIHlvdSBsaXRlcmFsbHkgY2FuJ3QgZXZlbi5cIixcbiAgICBpbWFnZTogXCIvYXNzZXRzL25mdC8xMS5wbmdcIlxuICB9LFxuICB7XG4gICAgaWQ6IDEyLFxuICAgIG5hbWU6IFwiTmluamEgVHVydGxlXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ293YWJ1bmdhISBBIGhlcm9pYyBoYWxmLXNoZWxsIHdhcnJpb3IgYnJpbmdzIHJldHJvIGdhbWluZyB2aWJlcyB0byB0aGUgYmxvY2tjaGFpbiwgcGl6emEgbm90IGluY2x1ZGVkLlwiLFxuICAgIGltYWdlOiBcIi9hc3NldHMvbmZ0LzEyLnBuZ1wiXG4gIH1cbl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFya2V0cGxhY2UoKSB7XG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlPE5GVFtdPihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEdlbmVyYXRlIHByaWNlcyBvbiB0aGUgY2xpZW50IHNpZGUgb25seVxuICAgIGNvbnN0IG5mdHNXaXRoUHJpY2VzID0gYmFzZU5GVHMubWFwKG5mdCA9PiAoe1xuICAgICAgLi4ubmZ0LFxuICAgICAgcHJpY2U6IHBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAxMCArIDAuMSkudG9GaXhlZCgyKSlcbiAgICB9KSlcbiAgICBzZXROZnRzKG5mdHNXaXRoUHJpY2VzKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNCBweS04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIG1iLTggcGl4ZWwtZm9udFwiPk5GVCBNYXJrZXRwbGFjZTwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItOFwiPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvbXktY29sbGVjdGlvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgaG92ZXI6YmctYmx1ZS02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgcGl4ZWwtZm9udCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgTXkgQ29sbGVjdGlvblxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj1cIi9uZnQtbWFrZXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi02MDAgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWQgcGl4ZWwtZm9udCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0zMDBcIlxuICAgICAgICA+XG4gICAgICAgICAgTWFrZSBZb3VyIE93blxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGxnOmdyaWQtY29scy00IGdhcC02XCI+XG4gICAgICAgIHtuZnRzLm1hcCgobmZ0KSA9PiAoXG4gICAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIGtleT17bmZ0LmlkfSBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciByb3VuZGVkLWxnIHAtNCBzaGFkb3ctbWQgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOnNoYWRvdy14bCBob3ZlcjotdHJhbnNsYXRlLXktMiBob3Zlcjpib3JkZXItYmx1ZS01MDAgZmxleCBmbGV4LWNvbCBoLVs0NTBweF1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtNDggbWItNFwiPlxuICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICBzcmM9e25mdC5pbWFnZX1cbiAgICAgICAgICAgICAgICBhbHQ9e25mdC5uYW1lfVxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICBwcmlvcml0eT17bmZ0LmlkID09PSAxfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItMiBwaXhlbC1mb250XCI+e25mdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItNCBwaXhlbC1mb250IGxpbmUtY2xhbXAtM1wiPntuZnQuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LWF1dG9cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItdCBwdC00XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIHBpeGVsLWZvbnRcIj5cbiAgICAgICAgICAgICAgICAgICAge25mdC5wcmljZSA/IGAke25mdC5wcmljZX0gVExPU2AgOiAnTG9hZGluZy4uLid9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL21hcmtldHBsYWNlLyR7bmZ0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXB1cnBsZS01MDAgaG92ZXI6YmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZCBwaXhlbC1mb250IHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTMwMFwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEJ1eSBORlRcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJJbWFnZSIsImJhc2VORlRzIiwiaWQiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsIk1hcmtldHBsYWNlIiwibmZ0cyIsInNldE5mdHMiLCJuZnRzV2l0aFByaWNlcyIsIm1hcCIsIm5mdCIsInByaWNlIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJyYW5kb20iLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJocmVmIiwic3JjIiwiYWx0IiwiZmlsbCIsInByaW9yaXR5IiwiaDIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/marketplace/page.tsx\n"));

/***/ })

});