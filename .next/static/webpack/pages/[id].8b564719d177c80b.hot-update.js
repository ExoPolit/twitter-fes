"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./components/TweetInput.js":
/*!**********************************!*\
  !*** ./components/TweetInput.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TweetInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"./node_modules/firebase/storage/dist/esm/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction TweetInput() {\n    _s();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.user);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);\n    const filePickerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    // adding logic for tweet\n    async function sendTweet() {\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\"), {\n            username: user.username,\n            name: user.name,\n            photoUrl: user.photoUrl,\n            uid: user.uid,\n            timestamp: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.serverTimestamp)(),\n            likes: [],\n            tweet: text\n        });\n        if (image) {\n            //Create Image ref | takes two arguments\n            const imageRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.ref)(_firebase__WEBPACK_IMPORTED_MODULE_1__.storage, \"tweetImages/\".concat(docRef.id));\n        }\n        setText(\"\");\n    }\n    function addImageToTweet(e) {\n        const reader = new FileReader() // Create Filereader\n        ;\n        //Check if user selected a file\n        if (e.target.files[0]) {\n            reader.readAsDataURL(e.target.files[0]);\n        }\n        reader.addEventListener(\"load\", (e)=>{\n            setImage(e.target.result);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-3 p-3 border-b border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-11 h-11 rounded-full object-cover\",\n                src: user.photoUrl || \"/assets/twitter-logo.png\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: \"   bg-transparent    resize-none    outline-none    w-full    min-h-[50px]    text-lg\",\n                        placeholder: \"Whats on your mind?\",\n                        onChange: (e)=>setText(e.target.value),\n                        value: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mb-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>setImage(null),\n                                className: \"absolute    top-1    left-1 bg-[#272c26] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer   hover:bg-white hover:bg-opacity-10   \",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.XIcon, {\n                                    className: \"h-5\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 74,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"rounded-2xl max-h-80 object-contain\",\n                                src: image\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between border-t border-gray-700 pt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-0\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        onClick: ()=>filePickerRef.current.click(),\n                                        className: \"iconsAnimation\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.PhotographIcon, {\n                                                className: \" h-[22px] text-[#1d9bf0]\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                                lineNumber: 93,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                onChange: addImageToTweet,\n                                                ref: filePickerRef,\n                                                className: \"hidden\",\n                                                type: \"file\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.ChartBarIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 99,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.EmojiHappyIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 102,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.CalendarIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 105,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"iconsAnimation\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_6__.LocationMarkerIcon, {\n                                            className: \" h-[22px] text-[#1d9bf0]\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: sendTweet,\n                                disabled: !text && !image,\n                                className: \"bg-[#1d9bf0] rounded-full px-4 py-1.5   disabled:opacity-50   \",\n                                children: \"Tweet\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                                lineNumber: 112,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\TweetInput.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(TweetInput, \"1TC001ulIo63M+QJUmy3OrsNovg=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector\n    ];\n});\n_c = TweetInput;\nvar _c;\n$RefreshReg$(_c, \"TweetInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTFCLDhEQUFDRDt3Q0FBSUMsV0FBVTtrREFDYiw0RUFBQ3ZDLHdFQUFrQkE7NENBQUN1QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FHbEMsOERBQUNhO2dDQUNDTCxTQUFTN0I7Z0NBQ1RtQyxVQUFVLENBQUN4QyxRQUFRLENBQUNFO2dDQUNwQndCLFdBQVU7MENBR1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9YO0dBOUd3QjdCOztRQUNURCxvREFBV0E7OztLQURGQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R3ZWV0SW5wdXQuanM/ZDMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiwgc3RvcmFnZSB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgQ2FsZW5kYXJJY29uLFxyXG4gIENoYXJ0QmFySWNvbixcclxuICBFbW9qaUhhcHB5SWNvbixcclxuICBMb2NhdGlvbk1hcmtlckljb24sXHJcbiAgUGhvdG9ncmFwaEljb24sXHJcbiAgWEljb24sXHJcbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24sIHNlcnZlclRpbWVzdGFtcCB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgcmVmIH0gZnJvbSBcImZpcmViYXNlL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXRJbnB1dCgpIHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UsIHNldEltYWdlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGZpbGVQaWNrZXJSZWYgPSB1c2VSZWYobnVsbClcclxuICAvLyBhZGRpbmcgbG9naWMgZm9yIHR3ZWV0XHJcbiAgYXN5bmMgZnVuY3Rpb24gc2VuZFR3ZWV0KCkge1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb24oZGIsIFwicG9zdHNcIiksIHtcclxuICAgICAgdXNlcm5hbWU6IHVzZXIudXNlcm5hbWUsXHJcbiAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgcGhvdG9Vcmw6IHVzZXIucGhvdG9VcmwsXHJcbiAgICAgIHVpZDogdXNlci51aWQsXHJcbiAgICAgIHRpbWVzdGFtcDogc2VydmVyVGltZXN0YW1wKCksXHJcbiAgICAgIGxpa2VzOiBbXSxcclxuICAgICAgdHdlZXQ6IHRleHQsXHJcbiAgICB9KTtcclxuICAgIGlmKGltYWdlKXtcclxuICAgICAgLy9DcmVhdGUgSW1hZ2UgcmVmIHwgdGFrZXMgdHdvIGFyZ3VtZW50c1xyXG4gICAgICBjb25zdCBpbWFnZVJlZiA9IHJlZihzdG9yYWdlLCBgdHdlZXRJbWFnZXMvJHtkb2NSZWYuaWR9YClcclxuICAgIH1cclxuXHJcbiAgICBzZXRUZXh0KFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYWRkSW1hZ2VUb1R3ZWV0KGUpIHtcclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCkgLy8gQ3JlYXRlIEZpbGVyZWFkZXJcclxuICAgIC8vQ2hlY2sgaWYgdXNlciBzZWxlY3RlZCBhIGZpbGVcclxuICAgIGlmKGUudGFyZ2V0LmZpbGVzWzBdKXtcclxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZS50YXJnZXQuZmlsZXNbMF0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGUgPT4ge1xyXG4gICAgICBzZXRJbWFnZShlLnRhcmdldC5yZXN1bHQpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTMgcC0zIGJvcmRlci1iIGJvcmRlci1ncmF5LTcwMFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMSBoLTExIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgIHNyYz17dXNlci5waG90b1VybCB8fCBcIi9hc3NldHMvdHdpdHRlci1sb2dvLnBuZ1wifVxyXG4gICAgICAgIGFsdD1cIlwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJcclxuICAgICAgICAgICAgICAgIGJnLXRyYW5zcGFyZW50IFxyXG4gICAgICAgICAgICAgICAgcmVzaXplLW5vbmUgXHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lLW5vbmUgXHJcbiAgICAgICAgICAgICAgICB3LWZ1bGwgXHJcbiAgICAgICAgICAgICAgICBtaW4taC1bNTBweF0gXHJcbiAgICAgICAgICAgICAgICB0ZXh0LWxnXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdHMgb24geW91ciBtaW5kP1wiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAge2ltYWdlICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgbWItNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJbWFnZShudWxsKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgXHJcbiAgICAgICAgICAgIHRvcC0xIFxyXG4gICAgICAgICAgICBsZWZ0LTEgYmctWyMyNzJjMjZdIHJvdW5kZWQtZnVsbCB3LTggaC04IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgICAgIGhvdmVyOmJnLXdoaXRlIGhvdmVyOmJnLW9wYWNpdHktMTBcclxuICAgICAgICAgICAgXCI+XHJcbiAgICAgICAgICAgICAgPFhJY29uIGNsYXNzTmFtZT1cImgtNVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtMnhsIG1heC1oLTgwIG9iamVjdC1jb250YWluXCIgc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLXQgYm9yZGVyLWdyYXktNzAwIHB0LTRcIj5cclxuICAgICAgICAgIHsvKiBJY29ucyBESVYgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZVBpY2tlclJlZi5jdXJyZW50LmNsaWNrKCl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb25zQW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPFBob3RvZ3JhcGhJY29uIGNsYXNzTmFtZT1cIiBoLVsyMnB4XSB0ZXh0LVsjMWQ5YmYwXVwiIC8+XHJcbiAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXthZGRJbWFnZVRvVHdlZXR9XHJcbiAgICAgICAgICAgICAgcmVmPXtmaWxlUGlja2VyUmVmfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiIHR5cGU9XCJmaWxlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbnNBbmltYXRpb25cIj5cclxuICAgICAgICAgICAgICA8Q2hhcnRCYXJJY29uIGNsYXNzTmFtZT1cIiBoLVsyMnB4XSB0ZXh0LVsjMWQ5YmYwXVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zQW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPEVtb2ppSGFwcHlJY29uIGNsYXNzTmFtZT1cIiBoLVsyMnB4XSB0ZXh0LVsjMWQ5YmYwXVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25zQW5pbWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPENhbGVuZGFySWNvbiBjbGFzc05hbWU9XCIgaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uc0FuaW1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDxMb2NhdGlvbk1hcmtlckljb24gY2xhc3NOYW1lPVwiIGgtWzIycHhdIHRleHQtWyMxZDliZjBdXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17c2VuZFR3ZWV0fVxyXG4gICAgICAgICAgICBkaXNhYmxlZD17IXRleHQgJiYgIWltYWdlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1bIzFkOWJmMF0gcm91bmRlZC1mdWxsIHB4LTQgcHktMS41XHJcbiAgICAgICAgICBkaXNhYmxlZDpvcGFjaXR5LTUwXHJcbiAgICAgICAgICBcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBUd2VldFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiZGIiLCJzdG9yYWdlIiwiQ2FsZW5kYXJJY29uIiwiQ2hhcnRCYXJJY29uIiwiRW1vamlIYXBweUljb24iLCJMb2NhdGlvbk1hcmtlckljb24iLCJQaG90b2dyYXBoSWNvbiIsIlhJY29uIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInNlcnZlclRpbWVzdGFtcCIsInJlZiIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJUd2VldElucHV0IiwidXNlciIsInN0YXRlIiwidGV4dCIsInNldFRleHQiLCJpbWFnZSIsInNldEltYWdlIiwiZmlsZVBpY2tlclJlZiIsInNlbmRUd2VldCIsImRvY1JlZiIsInVzZXJuYW1lIiwibmFtZSIsInBob3RvVXJsIiwidWlkIiwidGltZXN0YW1wIiwibGlrZXMiLCJ0d2VldCIsImltYWdlUmVmIiwiaWQiLCJhZGRJbWFnZVRvVHdlZXQiLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInRhcmdldCIsImZpbGVzIiwicmVhZEFzRGF0YVVSTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJhbHQiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJpbnB1dCIsInR5cGUiLCJidXR0b24iLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TweetInput.js\n"));

/***/ })

});