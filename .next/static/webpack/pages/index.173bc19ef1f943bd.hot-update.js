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

/***/ "./components/Tweet.js":
/*!*****************************!*\
  !*** ./components/Tweet.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TweetHeader: function() { return /* binding */ TweetHeader; },\n/* harmony export */   \"default\": function() { return /* binding */ Tweet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/firebase */ \"./firebase.js\");\n/* harmony import */ var _redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/modalSlice */ \"./redux/modalSlice.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Tweet(param) {\n    let { data, id } = param;\n    var _data_timestamp;\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.user);\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    async function deleteTweet(e) {\n        e.stopPropagation();\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id));\n    }\n    async function likeComment(e) {\n        e.stopPropagation();\n        if (likes.includes(user.uid)) {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), {\n                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.arrayRemove)(user.uid)\n            });\n        } else {\n            await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), {\n                likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.arrayUnion)(user.uid)\n            });\n        }\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.updateDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), {\n            likes: (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.arrayUnion)(user.uid)\n        });\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (!id) return;\n        const unsubscribe = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.onSnapshot)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"posts\", id), (doc)=>{\n            setLikes(doc.data().likes);\n        });\n        return unsubscribe;\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: ()=>router.push(\"/\" + id),\n        className: \"border-b border-gray-700 cursor-pointer\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TweetHeader, {\n                username: data === null || data === void 0 ? void 0 : data.username,\n                name: data === null || data === void 0 ? void 0 : data.name,\n                timestamp: data === null || data === void 0 ? void 0 : (_data_timestamp = data.timestamp) === null || _data_timestamp === void 0 ? void 0 : _data_timestamp.toDate(),\n                text: data === null || data === void 0 ? void 0 : data.tweet,\n                photoUrl: data === null || data === void 0 ? void 0 : data.photoUrl,\n                image: data === null || data === void 0 ? void 0 : data.image\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-3 ml-16 text-gray-500 flex space-x-14\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-center space-x-2\",\n                        onClick: (e)=>{\n                            e.stopPropagation();\n                            if (!user.username) {\n                                dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.openLoginModal)());\n                                return;\n                            }\n                            dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.setCommentTweet)({\n                                id: id,\n                                tweet: data === null || data === void 0 ? void 0 : data.tweet,\n                                photoUrl: data === null || data === void 0 ? void 0 : data.photoUrl,\n                                name: data === null || data === void 0 ? void 0 : data.name,\n                                username: data === null || data === void 0 ? void 0 : data.username\n                            }));\n                            dispatch((0,_redux_modalSlice__WEBPACK_IMPORTED_MODULE_2__.openCommentModal)());\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChatIcon, {\n                                className: \"w-5 cursor-pointer hover:text-green-400\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 104,\n                                columnNumber: 11\n                            }, this),\n                            (comments === null || comments === void 0 ? void 0 : comments.length) > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: comments.length\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 105,\n                                columnNumber: 36\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: likeComment,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.HeartIcon, {\n                            className: \"w-5 cursor-pointer hover:text-pink-500\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.ChartBarIcon, {\n                        className: \"w-5 cursor-not-allowed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 112,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_8__.UploadIcon, {\n                        className: \"w-5 cursor-not-allowed\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 113,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, this);\n}\n_s(Tweet, \"n0ti8Qpj6ftYGS7N303GpBR24Zc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = Tweet;\nfunction TweetHeader(param) {\n    let { username, name, timestamp, text, photoUrl, image } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex space-x-3 p-3 border-gray-700\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"w-11 h-11 rounded-full object-cover\",\n                src: photoUrl\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-500 flex items-center space-x-2 mb-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-white font-bold\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 132,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"@\",\n                                    username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-1 h-1 bg-gray-500 rounded-full\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 134,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_6___default()), {\n                                fromNow: true,\n                                children: timestamp\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                                lineNumber: 135,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, this),\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"object-cover border border-gray-700 rounded-md mt-3 max-h-80\",\n                        src: image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                        lineNumber: 141,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\components\\\\Tweet.js\",\n        lineNumber: 128,\n        columnNumber: 5\n    }, this);\n}\n_c1 = TweetHeader;\nvar _c, _c1;\n$RefreshReg$(_c, \"Tweet\");\n$RefreshReg$(_c1, \"TweetHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RU5HLHVCQUNDLDhEQUFDRzt3QkFDQ1osV0FBVTt3QkFDVmEsS0FBS0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1qQjtNQTlCZ0JSIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHdlZXQuanM/N2RjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XHJcbmltcG9ydCB7XHJcbiAgb3BlbkNvbW1lbnRNb2RhbCxcclxuICBvcGVuTG9naW5Nb2RhbCxcclxuICBvcGVuU2lnbnVwTW9kYWwsXHJcbiAgc2V0Q29tbWVudFR3ZWV0LFxyXG59IGZyb20gXCJAL3JlZHV4L21vZGFsU2xpY2VcIjtcclxuaW1wb3J0IHtcclxuICBDaGFydEJhckljb24sXHJcbiAgQ2hhdEljb24sXHJcbiAgSGVhcnRJY29uLFxyXG4gIFRyYXNoSWNvbixcclxuICBVcGxvYWRJY29uLFxyXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgSGVhcnRJY29uIGFzIEZpbGxlZEhlYXJ0SWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCI7XHJcbmltcG9ydCB7XHJcbiAgYXJyYXlSZW1vdmUsXHJcbiAgYXJyYXlVbmlvbixcclxuICBkZWxldGVEb2MsXHJcbiAgZG9jLFxyXG4gIG9uU25hcHNob3QsXHJcbiAgdXBkYXRlRG9jLFxyXG59IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vbWVudCBmcm9tIFwicmVhY3QtbW9tZW50XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHdlZXQoeyBkYXRhLCBpZCB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgY29uc3QgW2xpa2VzLCBzZXRMaWtlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVR3ZWV0KGUpIHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBhd2FpdCBkZWxldGVEb2MoZG9jKGRiLCBcInBvc3RzXCIsIGlkKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBsaWtlQ29tbWVudChlKSB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGlmIChsaWtlcy5pbmNsdWRlcyh1c2VyLnVpZCkpIHtcclxuICAgICAgYXdhaXQgdXBkYXRlRG9jKGRvYyhkYiwgXCJwb3N0c1wiLCBpZCksIHtcclxuICAgICAgICBsaWtlczogYXJyYXlSZW1vdmUodXNlci51aWQpLFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwicG9zdHNcIiwgaWQpLCB7XHJcbiAgICAgICAgbGlrZXM6IGFycmF5VW5pb24odXNlci51aWQpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGF3YWl0IHVwZGF0ZURvYyhkb2MoZGIsIFwicG9zdHNcIiwgaWQpLCB7XHJcbiAgICAgIGxpa2VzOiBhcnJheVVuaW9uKHVzZXIudWlkKSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICBpZighaWQpIHJldHVyblxyXG4gICAgY29uc3QgdW5zdWJzY3JpYmUgPSBvblNuYXBzaG90KGRvYyhkYiwgXCJwb3N0c1wiLCBpZCksIChkb2MpID0+IHtcclxuICAgICAgc2V0TGlrZXMoZG9jLmRhdGEoKS5saWtlcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdW5zdWJzY3JpYmVcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiICsgaWQpfVxyXG4gICAgICBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS03MDAgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgPlxyXG4gICAgICA8VHdlZXRIZWFkZXJcclxuICAgICAgICB1c2VybmFtZT17ZGF0YT8udXNlcm5hbWV9XHJcbiAgICAgICAgbmFtZT17ZGF0YT8ubmFtZX1cclxuICAgICAgICB0aW1lc3RhbXA9e2RhdGE/LnRpbWVzdGFtcD8udG9EYXRlKCl9XHJcbiAgICAgICAgdGV4dD17ZGF0YT8udHdlZXR9XHJcbiAgICAgICAgcGhvdG9Vcmw9e2RhdGE/LnBob3RvVXJsfVxyXG4gICAgICAgIGltYWdlPXtkYXRhPy5pbWFnZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgbWwtMTYgdGV4dC1ncmF5LTUwMCBmbGV4IHNwYWNlLXgtMTRcIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTJcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKCF1c2VyLnVzZXJuYW1lKSB7XHJcbiAgICAgICAgICAgICAgZGlzcGF0Y2gob3BlbkxvZ2luTW9kYWwoKSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgIHNldENvbW1lbnRUd2VldCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgICAgICB0d2VldDogZGF0YT8udHdlZXQsXHJcbiAgICAgICAgICAgICAgICBwaG90b1VybDogZGF0YT8ucGhvdG9VcmwsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBkYXRhPy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IGRhdGE/LnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKG9wZW5Db21tZW50TW9kYWwoKSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDaGF0SWNvbiBjbGFzc05hbWU9XCJ3LTUgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ncmVlbi00MDBcIiAvPlxyXG4gICAgICAgICAge2NvbW1lbnRzPy5sZW5ndGggPiAwICYmIDxzcGFuPntjb21tZW50cy5sZW5ndGh9PC9zcGFuPn1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBvbkNsaWNrPXtsaWtlQ29tbWVudH0+XHJcbiAgICAgICAgICA8SGVhcnRJY29uIGNsYXNzTmFtZT1cInctNSBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXBpbmstNTAwXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPENoYXJ0QmFySWNvbiBjbGFzc05hbWU9XCJ3LTUgY3Vyc29yLW5vdC1hbGxvd2VkXCIgLz5cclxuICAgICAgICA8VXBsb2FkSWNvbiBjbGFzc05hbWU9XCJ3LTUgY3Vyc29yLW5vdC1hbGxvd2VkXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVHdlZXRIZWFkZXIoe1xyXG4gIHVzZXJuYW1lLFxyXG4gIG5hbWUsXHJcbiAgdGltZXN0YW1wLFxyXG4gIHRleHQsXHJcbiAgcGhvdG9VcmwsXHJcbiAgaW1hZ2UsXHJcbn0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMyBwLTMgYm9yZGVyLWdyYXktNzAwXCI+XHJcbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0xMSBoLTExIHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJcIiBzcmM9e3Bob3RvVXJsfSAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgbWItMVwiPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgZm9udC1ib2xkXCI+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDxzcGFuPkB7dXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEgaC0xIGJnLWdyYXktNTAwIHJvdW5kZWQtZnVsbFwiPjwvZGl2PlxyXG4gICAgICAgICAgPE1vbWVudCBmcm9tTm93Pnt0aW1lc3RhbXB9PC9Nb21lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxzcGFuPnt0ZXh0fTwvc3Bhbj5cclxuXHJcbiAgICAgICAge2ltYWdlICYmIChcclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC1tZCBtdC0zIG1heC1oLTgwXCJcclxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJkYiIsIm9wZW5Db21tZW50TW9kYWwiLCJvcGVuTG9naW5Nb2RhbCIsIm9wZW5TaWdudXBNb2RhbCIsInNldENvbW1lbnRUd2VldCIsIkNoYXJ0QmFySWNvbiIsIkNoYXRJY29uIiwiSGVhcnRJY29uIiwiVHJhc2hJY29uIiwiVXBsb2FkSWNvbiIsIkZpbGxlZEhlYXJ0SWNvbiIsImFycmF5UmVtb3ZlIiwiYXJyYXlVbmlvbiIsImRlbGV0ZURvYyIsImRvYyIsIm9uU25hcHNob3QiLCJ1cGRhdGVEb2MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1vbWVudCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJUd2VldCIsImRhdGEiLCJpZCIsImRpc3BhdGNoIiwicm91dGVyIiwidXNlciIsInN0YXRlIiwibGlrZXMiLCJzZXRMaWtlcyIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJkZWxldGVUd2VldCIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJsaWtlQ29tbWVudCIsImluY2x1ZGVzIiwidWlkIiwidW5zdWJzY3JpYmUiLCJkaXYiLCJvbkNsaWNrIiwicHVzaCIsImNsYXNzTmFtZSIsIlR3ZWV0SGVhZGVyIiwidXNlcm5hbWUiLCJuYW1lIiwidGltZXN0YW1wIiwidG9EYXRlIiwidGV4dCIsInR3ZWV0IiwicGhvdG9VcmwiLCJpbWFnZSIsImxlbmd0aCIsInNwYW4iLCJpbWciLCJzcmMiLCJoMSIsImZyb21Ob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tweet.js\n"));

/***/ })

});