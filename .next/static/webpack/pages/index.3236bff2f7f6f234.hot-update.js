"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TweetInput.js":
/*!**********************************!*\
  !*** ./components/TweetInput.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TweetInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TweetInput() {\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    // adding logic for tweet\n    async function sendTweet() {\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\"), {\n            username: user.username,\n            name: user.name,\n            photoUrl: user.photoUrl,\n            uid: user.uid,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\n            likes: [],\n            tweet: text\n        });\n        if (image) {\n            //Create Image ref | takes two arguments\n            const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_1__.storage, \"tweetImages/\".concat(docRef.id));\n            //Upload image to storage | takes three arguments\n            const uploadImage = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.uploadString)(imageRef, image, \"data_url\");\n            //Download URL to show the image in the tweet | takes the imageRef\n            const downloadURL = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(imageRef);\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.updateDoc)(doc(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", docRef.id), {\n                image: downloadURL\n            });\n        }\n        setText(\"\");\n    }\n    function addImageToTweet(e) {\n        const reader = new FileReader() // Create Filereader\n        ;\n        //Check if user selected a file\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.addEventListener(\"load\", (e)=>{\n            setImage(e.target.result);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-3 p-3 border-b border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-11 h-11 rounded-full object-cover\",\n                src: user.photoUrl || \"/assets/twitter-logo.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"   bg-transparent    resize-none    outline-none    w-full    min-h-[50px]    text-lg\",\n                        placeholder: \"Whats on your mind?\",\n                        onChange: (e)=>setText(e.target.value),\n                        value: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this),\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>setImage(null),\n                                className: \"absolute    top-1    left-1 bg-[#272c26] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer   hover:bg-white hover:bg-opacity-10   \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.XIcon, {\n                                    className: \"h-5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-2xl max-h-80 object-contain\",\n                                src: image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between border-t border-gray-700 pt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>filePickerRef.current.click(),\n                                        className: \"iconsAnimation\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PhotographIcon, {\n                                                className: \" h-[22px] text-[#1d9bf0]\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: addImageToTweet,\n                                                ref: filePickerRef,\n                                                className: \"hidden\",\n                                                type: \"file\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 96,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ChartBarIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.EmojiHappyIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.CalendarIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 112,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.LocationMarkerIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 115,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendTweet,\n                                disabled: !text && !image,\n                                className: \"bg-[#1d9bf0] rounded-full px-4 py-1.5   disabled:opacity-50   \",\n                                children: \"Tweet\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 118,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(TweetInput, \"1TC001ulIo63M+QJUmy3OrsNovg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = TweetInput;\nvar _c;\n$RefreshReg$(_c, \"TweetInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R3ZWV0SW5wdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBUVA7QUFDa0Q7QUFDZjtBQUM1QjtBQUNDO0FBRTNCLFNBQVNrQjs7SUFDdEIsTUFBTUMsT0FBT0Ysd0RBQVdBLENBQUMsQ0FBQ0csUUFBVUEsTUFBTUQsSUFBSTtJQUM5QyxNQUFNLENBQUNFLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1TLGdCQUFnQlYsNkNBQU1BLENBQUM7SUFDN0IseUJBQXlCO0lBQ3pCLGVBQWVXO1FBQ2IsTUFBTUMsU0FBUyxNQUFNbkIsMERBQU1BLENBQUNDLDhEQUFVQSxDQUFDVCx5Q0FBRUEsRUFBRSxVQUFVO1lBQ25ENEIsVUFBVVQsS0FBS1MsUUFBUTtZQUN2QkMsTUFBTVYsS0FBS1UsSUFBSTtZQUNmQyxVQUFVWCxLQUFLVyxRQUFRO1lBQ3ZCQyxLQUFLWixLQUFLWSxHQUFHO1lBQ2JDLFdBQVd0QixtRUFBZUE7WUFDMUJ1QixPQUFPLEVBQUU7WUFDVEMsT0FBT2I7UUFDVDtRQUNBLElBQUdFLE9BQU07WUFDUCx3Q0FBd0M7WUFDeEMsTUFBTVksV0FBV3RCLHFEQUFHQSxDQUFDWiw4Q0FBT0EsRUFBRSxlQUF5QixPQUFWMEIsT0FBT1MsRUFBRTtZQUN0RCxpREFBaUQ7WUFDakQsTUFBTUMsY0FBYyxNQUFNdkIsOERBQVlBLENBQUNxQixVQUFVWixPQUFPO1lBQ3hELGtFQUFrRTtZQUNsRSxNQUFNZSxjQUFjLE1BQU0xQixnRUFBY0EsQ0FBQ3VCO1lBQ3pDLE1BQU14Qiw2REFBU0EsQ0FBQzRCLElBQUl2Qyx5Q0FBRUEsRUFBRSxTQUFTMkIsT0FBT1MsRUFBRSxHQUFHO2dCQUMzQ2IsT0FBT2U7WUFDVDtRQUNGO1FBQ0FoQixRQUFRO0lBQ1Y7SUFFQSxTQUFTa0IsZ0JBQWdCQyxDQUFDO1FBQ3hCLE1BQU1DLFNBQVMsSUFBSUMsYUFBYSxvQkFBb0I7O1FBQ3BELCtCQUErQjtRQUMvQixJQUFHRixFQUFFRyxNQUFNLENBQUNDLEtBQUssQ0FBQyxFQUFFLEVBQUM7WUFDbkJILE9BQU9JLGFBQWEsQ0FBQ0wsRUFBRUcsTUFBTSxDQUFDQyxLQUFLLENBQUMsRUFBRTtRQUN4QztRQUVBSCxPQUFPSyxnQkFBZ0IsQ0FBQyxRQUFRTixDQUFBQTtZQUM5QmpCLFNBQVNpQixFQUFFRyxNQUFNLENBQUNJLE1BQU07UUFDMUI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZFLEtBQUtqQyxLQUFLVyxRQUFRLElBQUk7Z0JBQ3RCdUIsS0FBSTs7Ozs7OzBCQUVOLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUNDSixXQUFVO3dCQU9WSyxhQUFZO3dCQUNaQyxVQUFVLENBQUNmLElBQU1uQixRQUFRbUIsRUFBRUcsTUFBTSxDQUFDYSxLQUFLO3dCQUN2Q0EsT0FBT3BDOzs7Ozs7b0JBR1JFLHVCQUNDLDhEQUFDMEI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FDRFMsU0FBUyxJQUFNbEMsU0FBUztnQ0FDeEIwQixXQUFVOzBDQUtSLDRFQUFDM0MsMkRBQUtBO29DQUFDMkMsV0FBVTs7Ozs7Ozs7Ozs7MENBRW5CLDhEQUFDQztnQ0FBSUQsV0FBVTtnQ0FBc0NFLEtBQUs3Qjs7Ozs7Ozs7Ozs7O2tDQUk5RCw4REFBQzBCO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRDt3Q0FDRFMsU0FBUyxJQUFNakMsY0FBY2tDLE9BQU8sQ0FBQ0MsS0FBSzt3Q0FDMUNWLFdBQVU7OzBEQUNSLDhEQUFDNUMsb0VBQWNBO2dEQUFDNEMsV0FBVTs7Ozs7OzBEQUMxQiw4REFBQ1c7Z0RBQ0RMLFVBQVVoQjtnREFDVjNCLEtBQUtZO2dEQUNMeUIsV0FBVTtnREFBU1ksTUFBSzs7Ozs7Ozs7Ozs7O2tEQUUxQiw4REFBQ2I7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUMvQyxrRUFBWUE7NENBQUMrQyxXQUFVOzs7Ozs7Ozs7OztrREFFMUIsOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNiLDRFQUFDOUMsb0VBQWNBOzRDQUFDOEMsV0FBVTs7Ozs7Ozs7Ozs7a0RBRTVCLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ2hELGtFQUFZQTs0Q0FBQ2dELFdBQVU7Ozs7Ozs7Ozs7O2tEQUUxQiw4REFBQ0Q7d0NBQUlDLFdBQVU7a0RBQ2IsNEVBQUM3Qyx3RUFBa0JBOzRDQUFDNkMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2xDLDhEQUFDYTtnQ0FDQ0wsU0FBU2hDO2dDQUNUc0MsVUFBVSxDQUFDM0MsUUFBUSxDQUFDRTtnQ0FDcEIyQixXQUFVOzBDQUdYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXBId0JoQzs7UUFDVEQsb0RBQVdBOzs7S0FERkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ud2VldElucHV0LmpzP2QzMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIsIHN0b3JhZ2UgfSBmcm9tIFwiQC9maXJlYmFzZVwiO1xyXG5pbXBvcnQge1xyXG4gIENhbGVuZGFySWNvbixcclxuICBDaGFydEJhckljb24sXHJcbiAgRW1vamlIYXBweUljb24sXHJcbiAgTG9jYXRpb25NYXJrZXJJY29uLFxyXG4gIFBob3RvZ3JhcGhJY29uLFxyXG4gIFhJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uLCBzZXJ2ZXJUaW1lc3RhbXAsIHVwZGF0ZURvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0RG93bmxvYWRVUkwsIHJlZiwgdXBsb2FkU3RyaW5nIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXRJbnB1dCgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVQaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICAvLyBhZGRpbmcgbG9naWMgZm9yIHR3ZWV0XHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFR3ZWV0KCkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIiksIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgcGhvdG9Vcmw6IHVzZXIucGhvdG9VcmwsXHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgdHdlZXQ6IHRleHQsXHJcbiAgICB9KTtcclxuICAgIGlmKGltYWdlKXtcclxuICAgICAgLy9DcmVhdGUgSW1hZ2UgcmVmIHwgdGFrZXMgdHdvIGFyZ3VtZW50c1xyXG4gICAgICBjb25zdCBpbWFnZVJlZiA9IHJlZihzdG9yYWdlLCBgdHdlZXRJbWFnZXMvJHtkb2NSZWYuaWR9YClcclxuICAgICAgLy9VcGxvYWQgaW1hZ2UgdG8gc3RvcmFnZSB8IHRha2VzIHRocmVlIGFyZ3VtZW50c1xyXG4gICAgICBjb25zdCB1cGxvYWRJbWFnZSA9IGF3YWl0IHVwbG9hZFN0cmluZyhpbWFnZVJlZiwgaW1hZ2UsIFwiZGF0YV91cmxcIilcclxuICAgICAgLy9Eb3dubG9hZCBVUkwgdG8gc2hvdyB0aGUgaW1hZ2UgaW4gdGhlIHR3ZWV0IHwgdGFrZXMgdGhlIGltYWdlUmVmXHJcbiAgICAgIGNvbnN0IGRvd25sb2FkVVJMID0gYXdhaXQgZ2V0RG93bmxvYWRVUkwoaW1hZ2VSZWYpXHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwicG9zdHNcIiwgZG9jUmVmLmlkKSwge1xyXG4gICAgICAgIGltYWdlOiBkb3dubG9hZFVSTFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgc2V0VGV4dChcIlwiKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFkZEltYWdlVG9Ud2VldChlKSB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpIC8vIENyZWF0ZSBGaWxlcmVhZGVyXHJcbiAgICAvL0NoZWNrIGlmIHVzZXIgc2VsZWN0ZWQgYSBmaWxlXHJcbiAgICBpZihlLnRhcmdldC5maWxlc1swXSl7XHJcbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGUudGFyZ2V0LmZpbGVzWzBdKVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBlID0+IHtcclxuICAgICAgc2V0SW1hZ2UoZS50YXJnZXQucmVzdWx0KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zIHAtMyBib3JkZXItYiBib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzTmFtZT1cInctMTEgaC0xMSByb3VuZGVkLWZ1bGwgb2JqZWN0LWNvdmVyXCJcclxuICAgICAgICBzcmM9e3VzZXIucGhvdG9VcmwgfHwgXCIvYXNzZXRzL3R3aXR0ZXItbG9nby5wbmdcIn1cclxuICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiXHJcbiAgICAgICAgICAgICAgICBiZy10cmFuc3BhcmVudCBcclxuICAgICAgICAgICAgICAgIHJlc2l6ZS1ub25lIFxyXG4gICAgICAgICAgICAgICAgb3V0bGluZS1ub25lIFxyXG4gICAgICAgICAgICAgICAgdy1mdWxsIFxyXG4gICAgICAgICAgICAgICAgbWluLWgtWzUwcHhdIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1sZ1wiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXRzIG9uIHlvdXIgbWluZD9cIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXt0ZXh0fVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIHtpbWFnZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTRcIj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SW1hZ2UobnVsbCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIFxyXG4gICAgICAgICAgICB0b3AtMSBcclxuICAgICAgICAgICAgbGVmdC0xIGJnLVsjMjcyYzI2XSByb3VuZGVkLWZ1bGwgdy04IGgtOCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgICAgICBob3ZlcjpiZy13aGl0ZSBob3ZlcjpiZy1vcGFjaXR5LTEwXHJcbiAgICAgICAgICAgIFwiPlxyXG4gICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJoLTVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJyb3VuZGVkLTJ4bCBtYXgtaC04MCBvYmplY3QtY29udGFpblwiIHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGJvcmRlci10IGJvcmRlci1ncmF5LTcwMCBwdC00XCI+XHJcbiAgICAgICAgICB7LyogSWNvbnMgRElWICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZpbGVQaWNrZXJSZWYuY3VycmVudC5jbGljaygpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uc0FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxQaG90b2dyYXBoSWNvbiBjbGFzc05hbWU9XCIgaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17YWRkSW1hZ2VUb1R3ZWV0fVxyXG4gICAgICAgICAgICAgIHJlZj17ZmlsZVBpY2tlclJlZn1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIiB0eXBlPVwiZmlsZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zQW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPENoYXJ0QmFySWNvbiBjbGFzc05hbWU9XCIgaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc0FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxFbW9qaUhhcHB5SWNvbiBjbGFzc05hbWU9XCIgaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc0FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPVwiIGgtWzIycHhdIHRleHQtWyMxZDliZjBdXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNBbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICA8TG9jYXRpb25NYXJrZXJJY29uIGNsYXNzTmFtZT1cIiBoLVsyMnB4XSB0ZXh0LVsjMWQ5YmYwXVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3NlbmRUd2VldH1cclxuICAgICAgICAgICAgZGlzYWJsZWQ9eyF0ZXh0ICYmICFpbWFnZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxZDliZjBdIHJvdW5kZWQtZnVsbCBweC00IHB5LTEuNVxyXG4gICAgICAgICAgZGlzYWJsZWQ6b3BhY2l0eS01MFxyXG4gICAgICAgICAgXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgVHdlZXRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwic3RvcmFnZSIsIkNhbGVuZGFySWNvbiIsIkNoYXJ0QmFySWNvbiIsIkVtb2ppSGFwcHlJY29uIiwiTG9jYXRpb25NYXJrZXJJY29uIiwiUGhvdG9ncmFwaEljb24iLCJYSWNvbiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJzZXJ2ZXJUaW1lc3RhbXAiLCJ1cGRhdGVEb2MiLCJnZXREb3dubG9hZFVSTCIsInJlZiIsInVwbG9hZFN0cmluZyIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJUd2VldElucHV0IiwidXNlciIsInN0YXRlIiwidGV4dCIsInNldFRleHQiLCJpbWFnZSIsInNldEltYWdlIiwiZmlsZVBpY2tlclJlZiIsInNlbmRUd2VldCIsImRvY1JlZiIsInVzZXJuYW1lIiwibmFtZSIsInBob3RvVXJsIiwidWlkIiwidGltZXN0YW1wIiwibGlrZXMiLCJ0d2VldCIsImltYWdlUmVmIiwiaWQiLCJ1cGxvYWRJbWFnZSIsImRvd25sb2FkVVJMIiwiZG9jIiwiYWRkSW1hZ2VUb1R3ZWV0IiwiZSIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJ0YXJnZXQiLCJmaWxlcyIsInJlYWRBc0RhdGFVUkwiLCJhZGRFdmVudExpc3RlbmVyIiwicmVzdWx0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwidGV4dGFyZWEiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwiaW5wdXQiLCJ0eXBlIiwiYnV0dG9uIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TweetInput.js\n"));

/***/ })

});