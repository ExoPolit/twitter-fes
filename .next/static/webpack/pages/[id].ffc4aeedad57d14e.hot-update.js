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

/***/ "./components/Tweet.js":
/*!*****************************!*\
  !*** ./components/Tweet.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TweetHeader: function() { return /* binding */ TweetHeader; },\n/* harmony export */   \"default\": function() { return /* binding */ Tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.js\");\n/* harmony import */ var _redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/modalSlice */ \"./redux/modalSlice.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Tweet(param) {\n    let { data, id } = param;\n    var _data_timestamp;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.user);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    async function deleteTweet(e) {\n        e.stopPropagation();\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id));\n    }\n    async function likeComment(e) {\n        e.stopPropagation();\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), {\n            likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.arrayUnion)(user.uid)\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (!id) return;\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), (doc)=>{\n            var _doc_data, _doc_data1;\n            setLikes((_doc_data = doc.data()) === null || _doc_data === void 0 ? void 0 : _doc_data.likes);\n            setComments((_doc_data1 = doc.data()) === null || _doc_data1 === void 0 ? void 0 : _doc_data1.comments);\n        });\n        return unsubscribe;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>router.push(\"/\" + id),\n        className: \"border-b border-gray-700 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TweetHeader, {\n                username: data === null || data === void 0 ? void 0 : data.username,\n                name: data === null || data === void 0 ? void 0 : data.name,\n                timestamp: data === null || data === void 0 ? void 0 : (_data_timestamp = data.timestamp) === null || _data_timestamp === void 0 ? void 0 : _data_timestamp.toDate(),\n                text: data === null || data === void 0 ? void 0 : data.tweet,\n                photoUrl: data === null || data === void 0 ? void 0 : data.photoUrl,\n                image: data === null || data === void 0 ? void 0 : data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3 ml-16 text-gray-500 flex space-x-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center space-x-2\",\n                        onClick: (e)=>{\n                            e.stopPropagation();\n                            if (!user.username) {\n                                dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.openLoginModal)());\n                                return;\n                            }\n                            dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.setCommentTweet)({\n                                id: id,\n                                tweet: data === null || data === void 0 ? void 0 : data.tweet,\n                                photoUrl: data === null || data === void 0 ? void 0 : data.photoUrl,\n                                name: data === null || data === void 0 ? void 0 : data.name,\n                                username: data === null || data === void 0 ? void 0 : data.username\n                            }));\n                            dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.openCommentModal)());\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChatIcon, {\n                                className: \"w-5 cursor-pointer hover:text-green-400\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this),\n                            (comments === null || comments === void 0 ? void 0 : comments.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: comments.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 96,\n                                columnNumber: 36\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: likeComment,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.HeartIcon, {\n                            className: \"w-5 cursor-pointer hover:text-pink-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChartBarIcon, {\n                        className: \"w-5 cursor-not-allowed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.UploadIcon, {\n                        className: \"w-5 cursor-not-allowed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(Tweet, \"n0ti8Qpj6ftYGS7N303GpBR24Zc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Tweet;\nfunction TweetHeader(param) {\n    let { username, name, timestamp, text, photoUrl, image } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-3 p-3 border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-11 h-11 rounded-full object-cover\",\n                src: photoUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-500 flex items-center space-x-2 mb-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white font-bold\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 125,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"@\",\n                                    username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1 h-1 bg-gray-500 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                fromNow: true,\n                                children: timestamp\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"object-cover border border-gray-700 rounded-md mt-3 max-h-80\",\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 134,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n        lineNumber: 121,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TweetHeader;\nvar _c, _c1;\n$RefreshReg$(_c, \"Tweet\");\n$RefreshReg$(_c1, \"TweetHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxxQkFBQUEsK0JBQUFBLFNBQVVxQixNQUFNLElBQUcsbUJBQUssOERBQUNDOzBDQUFNdEIsU0FBU3FCLE1BQU07Ozs7Ozs7Ozs7OztrQ0FHakQsOERBQUNiO3dCQUNDQyxTQUFTSjtrQ0FFVCw0RUFBQzlCLCtEQUFTQTs0QkFBQ29DLFdBQVU7Ozs7Ozs7Ozs7O2tDQUd2Qiw4REFBQ3RDLGtFQUFZQTt3QkFBQ3NDLFdBQVU7Ozs7OztrQ0FDeEIsOERBQUNsQyxnRUFBVUE7d0JBQUNrQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FqRndCcEI7O1FBQ0xGLG9EQUFXQTtRQUNiSixrREFBU0E7UUFFWEssb0RBQVdBOzs7S0FKRkM7QUFtRmpCLFNBQVNxQixZQUFZLEtBTzNCO1FBUDJCLEVBQzFCQyxRQUFRLEVBQ1JDLElBQUksRUFDSkMsU0FBUyxFQUNURSxJQUFJLEVBQ0pFLFFBQVEsRUFDUkMsS0FBSyxFQUNOLEdBUDJCO0lBUTFCLHFCQUNFLDhEQUFDWjtRQUFJRyxXQUFVOzswQkFDYiw4REFBQ1k7Z0JBQUlaLFdBQVU7Z0JBQXNDYSxLQUFLTDs7Ozs7OzBCQUMxRCw4REFBQ1g7O2tDQUNDLDhEQUFDQTt3QkFBSUcsV0FBVTs7MENBQ2IsOERBQUNjO2dDQUFHZCxXQUFVOzBDQUF3Qkc7Ozs7OzswQ0FDdEMsOERBQUNROztvQ0FBSztvQ0FBRVQ7Ozs7Ozs7MENBQ1IsOERBQUNMO2dDQUFJRyxXQUFVOzs7Ozs7MENBQ2YsOERBQUN2QixxREFBTUE7Z0NBQUNzQyxPQUFPOzBDQUFFWDs7Ozs7Ozs7Ozs7O2tDQUduQiw4REFBQ087a0NBQU1MOzs7Ozs7b0JBRU5HLHVCQUNDLDhEQUFDRzt3QkFDQ1osV0FBVTt3QkFDVmEsS0FBS0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtNQTlCZ0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHdlZXQuanM/N2RjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgb3BlbkNvbW1lbnRNb2RhbCxcclxuICBvcGVuTG9naW5Nb2RhbCxcclxuICBvcGVuU2lnbnVwTW9kYWwsXHJcbiAgc2V0Q29tbWVudFR3ZWV0LFxyXG59IGZyb20gXCJAL3JlZHV4L21vZGFsU2xpY2VcIjtcclxuaW1wb3J0IHtcclxuICBDaGFydEJhckljb24sXHJcbiAgQ2hhdEljb24sXHJcbiAgSGVhcnRJY29uLFxyXG4gIFRyYXNoSWNvbixcclxuICBVcGxvYWRJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgSGVhcnRJY29uIGFzIEZpbGxlZEhlYXJ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJyYXlSZW1vdmUsXHJcbiAgYXJyYXlVbmlvbixcclxuICBkZWxldGVEb2MsXHJcbiAgZG9jLFxyXG4gIG9uU25hcHNob3QsXHJcbiAgdXBkYXRlRG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXQoeyBkYXRhLCBpZCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVR3ZWV0KGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLCBcInBvc3RzXCIsIGlkKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsaWtlQ29tbWVudChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICBhd2FpdCB1cGRhdGVEb2MoZG9jKGRiLCBcInBvc3RzXCIsIGlkKSwge1xyXG4gICAgICBsaWtlczogYXJyYXlVbmlvbih1c2VyLnVpZCksXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KGRvYyhkYiwgXCJwb3N0c1wiLCBpZCksIChkb2MpID0+IHtcclxuICAgICAgc2V0TGlrZXMoZG9jLmRhdGEoKT8ubGlrZXMpO1xyXG4gICAgICBzZXRDb21tZW50cyhkb2MuZGF0YSgpPy5jb21tZW50cyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmU7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIiArIGlkKX1cclxuICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktNzAwIGN1cnNvci1wb2ludGVyXCJcclxuICAgID5cclxuICAgICAgPFR3ZWV0SGVhZGVyXHJcbiAgICAgICAgdXNlcm5hbWU9e2RhdGE/LnVzZXJuYW1lfVxyXG4gICAgICAgIG5hbWU9e2RhdGE/Lm5hbWV9XHJcbiAgICAgICAgdGltZXN0YW1wPXtkYXRhPy50aW1lc3RhbXA/LnRvRGF0ZSgpfVxyXG4gICAgICAgIHRleHQ9e2RhdGE/LnR3ZWV0fVxyXG4gICAgICAgIHBob3RvVXJsPXtkYXRhPy5waG90b1VybH1cclxuICAgICAgICBpbWFnZT17ZGF0YT8uaW1hZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIG1sLTE2IHRleHQtZ3JheS01MDAgZmxleCBzcGFjZS14LTE0XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgc3BhY2UteC0yXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICghdXNlci51c2VybmFtZSkge1xyXG4gICAgICAgICAgICAgIGRpc3BhdGNoKG9wZW5Mb2dpbk1vZGFsKCkpO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICBzZXRDb21tZW50VHdlZXQoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxyXG4gICAgICAgICAgICAgICAgdHdlZXQ6IGRhdGE/LnR3ZWV0LFxyXG4gICAgICAgICAgICAgICAgcGhvdG9Vcmw6IGRhdGE/LnBob3RvVXJsLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogZGF0YT8ubmFtZSxcclxuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBkYXRhPy51c2VybmFtZSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBkaXNwYXRjaChvcGVuQ29tbWVudE1vZGFsKCkpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2hhdEljb24gY2xhc3NOYW1lPVwidy01IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtZ3JlZW4tNDAwXCIgLz5cclxuICAgICAgICAgIHtjb21tZW50cz8ubGVuZ3RoID4gMCAmJiA8c3Bhbj57Y29tbWVudHMubGVuZ3RofTwvc3Bhbj59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIG9uQ2xpY2s9e2xpa2VDb21tZW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxIZWFydEljb24gY2xhc3NOYW1lPVwidy01IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtcGluay01MDBcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8Q2hhcnRCYXJJY29uIGNsYXNzTmFtZT1cInctNSBjdXJzb3Itbm90LWFsbG93ZWRcIiAvPlxyXG4gICAgICAgIDxVcGxvYWRJY29uIGNsYXNzTmFtZT1cInctNSBjdXJzb3Itbm90LWFsbG93ZWRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUd2VldEhlYWRlcih7XHJcbiAgdXNlcm5hbWUsXHJcbiAgbmFtZSxcclxuICB0aW1lc3RhbXAsXHJcbiAgdGV4dCxcclxuICBwaG90b1VybCxcclxuICBpbWFnZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zIHAtMyBib3JkZXItZ3JheS03MDBcIj5cclxuICAgICAgPGltZyBjbGFzc05hbWU9XCJ3LTExIGgtMTEgcm91bmRlZC1mdWxsIG9iamVjdC1jb3ZlclwiIHNyYz17cGhvdG9Vcmx9IC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMiBtYi0xXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIj57bmFtZX08L2gxPlxyXG4gICAgICAgICAgPHNwYW4+QHt1c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMSBoLTEgYmctZ3JheS01MDAgcm91bmRlZC1mdWxsXCI+PC9kaXY+XHJcbiAgICAgICAgICA8TW9tZW50IGZyb21Ob3c+e3RpbWVzdGFtcH08L01vbWVudD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPHNwYW4+e3RleHR9PC9zcGFuPlxyXG5cclxuICAgICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLW1kIG10LTMgbWF4LWgtODBcIlxyXG4gICAgICAgICAgICBzcmM9e2ltYWdlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImRiIiwib3BlbkNvbW1lbnRNb2RhbCIsIm9wZW5Mb2dpbk1vZGFsIiwib3BlblNpZ251cE1vZGFsIiwic2V0Q29tbWVudFR3ZWV0IiwiQ2hhcnRCYXJJY29uIiwiQ2hhdEljb24iLCJIZWFydEljb24iLCJUcmFzaEljb24iLCJVcGxvYWRJY29uIiwiRmlsbGVkSGVhcnRJY29uIiwiYXJyYXlSZW1vdmUiLCJhcnJheVVuaW9uIiwiZGVsZXRlRG9jIiwiZG9jIiwib25TbmFwc2hvdCIsInVwZGF0ZURvYyIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9tZW50IiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlR3ZWV0IiwiZGF0YSIsImlkIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJ1c2VyIiwic3RhdGUiLCJsaWtlcyIsInNldExpa2VzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImRlbGV0ZVR3ZWV0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsImxpa2VDb21tZW50IiwidWlkIiwidW5zdWJzY3JpYmUiLCJkaXYiLCJvbkNsaWNrIiwicHVzaCIsImNsYXNzTmFtZSIsIlR3ZWV0SGVhZGVyIiwidXNlcm5hbWUiLCJuYW1lIiwidGltZXN0YW1wIiwidG9EYXRlIiwidGV4dCIsInR3ZWV0IiwicGhvdG9VcmwiLCJpbWFnZSIsImxlbmd0aCIsInNwYW4iLCJpbWciLCJzcmMiLCJoMSIsImZyb21Ob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tweet.js\n"));

/***/ })

});