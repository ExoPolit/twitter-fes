/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/modals/comentModal.js":
/*!******************************************!*\
  !*** ./components/modals/comentModal.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// import { db } from \"@/firebase\";\n// import { closeCommentModal } from \"@/redux/modalSlice\";\n// import {\n//   CalendarIcon,\n//   ChartBarIcon,\n//   EmojiHappyIcon,\n//   LocationMarkerIcon,\n//   PhotographIcon,\n//   XIcon,\n// } from \"@heroicons/react/outline\";\n// import Modal from \"@mui/material/Modal\";\n// import { arrayUnion, doc, serverTimestamp, updateDoc } from \"firebase/firestore\";\n// import { Router, useRouter } from \"next/router\";\n// import { useState } from \"react\";\n// import { useDispatch, useSelector } from \"react-redux\";\n// export default function CoomentModal() {\n//   const isOpen = useSelector((state) => state.modals.commentModalOpen);\n//   const userImg = useSelector((state) => state.user.photoUrl);\n//   const tweetDetails = useSelector((state) => state.modals.commentTweetDetails)\n//   const user = useSelector((state) => state.user)\n//   const dispatch = useDispatch();\n//   const [comment, setComment] = useState(\"\")\n//   const router = useRouter()\n//   async function sendComment(){\n//     const docRef = doc(db, \"posts\", tweetDetails.id)\n//     const commentDetails = {\n//       username: user.username,\n//       name: user.name,\n//       photoUrl: user.photoUrl,\n//       comment: comment,\n//       timestamp: serverTimestamp()\n//     }\n//     await updateDoc(docRef, {\n//       comments: arrayUnion(commentDetails)\n//     })\n//     dispatch(closeCommentModal())\n//     router.push(\"/\" + tweetDetails.id)\n//   }\n//   console.log(\"tweetDetails:\", tweetDetails);\n//   return (\n//     <>\n//       <Modal\n//         className=\"flex justify-center items-center\"\n//         open={isOpen}\n//         onClose={() => dispatch(closeCommentModal())}\n//       >\n//         <div\n//           className=\" w-full h-full relative\n//         rounded-lg bg-black border border-gray-500\n//         sm:w-[600px] sm:h-[386px] text-white\n//         sm:p-10 p-4\n//         \"\n//         >\n//           <div className=\"absolute w-[2px] h-[77px] bg-gray-500\n//           left-[40px] top-[96px] sm:left-[64px] sm:top-[120px]\n//           \"></div>\n//           <div\n//           onClick={() => dispatch(closeCommentModal())}\n//           className=\"absolute top-4 cursor-pointer\" >\n//             <XIcon className=\"w-6\" />\n//           </div>\n//           <div className=\"mt-8\">\n//             <div className=\"flex space-x-3 w-full\">\n//               <img\n//                 className=\"w-12 h-12 object-cover rounded-full\"\n//                 src={tweetDetails.photoUrl}\n//               />\n//               <div>\n//                 <div className=\"flex space-x-1.5\">\n//                   <h1 className=\"font-bold\">{tweetDetails.name}</h1>\n//                   <h1 className=\"text-gray-500\">@{tweetDetails.username}</h1>\n//                 </div>\n//                 <p className=\"mt-1\">{tweetDetails.tweet}</p>\n//                 <h1 className=\"text-gray-500 text-[15px] mt-2\">\n//                   Replying to <span className=\"text-[#1b9bf0]\">@{tweetDetails.username}</span>\n//                 </h1>\n//               </div>\n//             </div>\n//           </div>\n//           <div className=\"mt-11\">\n//             <div className=\"flex space-x-3\">\n//               <img\n//                 className=\"w-12 h-12 object-cover rounded-full\"\n//                 src={userImg}\n//               />\n//               <div className=\"w-full\">\n//                 <textarea\n//                   placeholder=\"Tweet your reply\"\n//                   className=\"w-full text-lg outline-none\n//                 bg-transparent resize-none\n//                 \"\n//                 onChange={e => setComment(e.target.value)}\n//                 />\n//                 <div className=\"pt-4 flex justify-between border-t border-gray-700\">\n//                   <div className=\"flex space-x-0\">\n//                     <div className=\"iconAnimation\">\n//                       <PhotographIcon className=\"h-[22px] text-[#1d9bf0]\" />\n//                     </div>\n//                     <div className=\"iconAnimation\">\n//                       <ChartBarIcon className=\"h-[22px] text-[#1d9bf0]\" />\n//                     </div>\n//                     <div className=\"iconAnimation\">\n//                       <EmojiHappyIcon className=\"h-[22px] text-[#1d9bf0]\" />\n//                     </div>\n//                     <div className=\"iconAnimation\">\n//                       <CalendarIcon className=\"h-[22px] text-[#1d9bf0]\" />\n//                     </div>\n//                     <div className=\"iconAnimation\">\n//                       <LocationMarkerIcon className=\"h-[22px] text-[#1d9bf0]\" />\n//                     </div>\n//                   </div>\n//                   <button\n//                     className=\"bg-[#1d9bf0] rounded-full px-4 py-1.5\n//                   disabled:opacity-50\n//                   \"\n//                   disabled={!comment}\n//                   onClick={sendComment}\n//                   >\n//                     Tweet\n//                   </button>\n//                 </div>\n//               </div>\n//             </div>\n//           </div>\n//         </div>\n//       </Modal>\n//     </>\n//   );\n// }\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vZGFscy9jb21lbnRNb2RhbC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxtQ0FBbUM7QUFDbkMsMERBQTBEO0FBQzFELFdBQVc7QUFDWCxrQkFBa0I7QUFDbEIsa0JBQWtCO0FBQ2xCLG9CQUFvQjtBQUNwQix3QkFBd0I7QUFDeEIsb0JBQW9CO0FBQ3BCLFdBQVc7QUFDWCxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLG9GQUFvRjtBQUNwRixtREFBbUQ7QUFDbkQsb0NBQW9DO0FBQ3BDLDBEQUEwRDtBQUUxRCwyQ0FBMkM7QUFDM0MsMEVBQTBFO0FBQzFFLGlFQUFpRTtBQUNqRSxrRkFBa0Y7QUFDbEYsb0RBQW9EO0FBRXBELG9DQUFvQztBQUVwQywrQ0FBK0M7QUFFL0MsK0JBQStCO0FBRS9CLGtDQUFrQztBQUVsQyx1REFBdUQ7QUFDdkQsK0JBQStCO0FBQy9CLGlDQUFpQztBQUNqQyx5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLDBCQUEwQjtBQUMxQixxQ0FBcUM7QUFDckMsUUFBUTtBQUNSLGdDQUFnQztBQUNoQyw2Q0FBNkM7QUFDN0MsU0FBUztBQUVULG9DQUFvQztBQUNwQyx5Q0FBeUM7QUFFekMsTUFBTTtBQUNOLGdEQUFnRDtBQUVoRCxhQUFhO0FBQ2IsU0FBUztBQUNULGVBQWU7QUFDZix1REFBdUQ7QUFDdkQsd0JBQXdCO0FBQ3hCLHdEQUF3RDtBQUN4RCxVQUFVO0FBQ1YsZUFBZTtBQUNmLCtDQUErQztBQUMvQyxxREFBcUQ7QUFDckQsK0NBQStDO0FBQy9DLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osWUFBWTtBQUNaLGtFQUFrRTtBQUNsRSxpRUFBaUU7QUFFakUscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQiwwREFBMEQ7QUFDMUQsd0RBQXdEO0FBQ3hELHdDQUF3QztBQUN4QyxtQkFBbUI7QUFFbkIsbUNBQW1DO0FBQ25DLHNEQUFzRDtBQUN0RCxxQkFBcUI7QUFDckIsa0VBQWtFO0FBQ2xFLDhDQUE4QztBQUM5QyxtQkFBbUI7QUFFbkIsc0JBQXNCO0FBQ3RCLHFEQUFxRDtBQUNyRCx1RUFBdUU7QUFDdkUsZ0ZBQWdGO0FBQ2hGLHlCQUF5QjtBQUN6QiwrREFBK0Q7QUFDL0Qsa0VBQWtFO0FBQ2xFLGlHQUFpRztBQUNqRyx3QkFBd0I7QUFDeEIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFFbkIsb0NBQW9DO0FBQ3BDLCtDQUErQztBQUMvQyxxQkFBcUI7QUFDckIsa0VBQWtFO0FBQ2xFLGdDQUFnQztBQUNoQyxtQkFBbUI7QUFFbkIseUNBQXlDO0FBQ3pDLDRCQUE0QjtBQUM1QixtREFBbUQ7QUFDbkQsMkRBQTJEO0FBQzNELDZDQUE2QztBQUU3QyxvQkFBb0I7QUFDcEIsNkRBQTZEO0FBQzdELHFCQUFxQjtBQUVyQix1RkFBdUY7QUFDdkYscURBQXFEO0FBQ3JELHNEQUFzRDtBQUN0RCwrRUFBK0U7QUFDL0UsNkJBQTZCO0FBQzdCLHNEQUFzRDtBQUN0RCw2RUFBNkU7QUFDN0UsNkJBQTZCO0FBQzdCLHNEQUFzRDtBQUN0RCwrRUFBK0U7QUFDL0UsNkJBQTZCO0FBQzdCLHNEQUFzRDtBQUN0RCw2RUFBNkU7QUFDN0UsNkJBQTZCO0FBQzdCLHNEQUFzRDtBQUN0RCxtRkFBbUY7QUFDbkYsNkJBQTZCO0FBQzdCLDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsdUVBQXVFO0FBQ3ZFLHdDQUF3QztBQUN4QyxzQkFBc0I7QUFDdEIsd0NBQXdDO0FBQ3hDLDBDQUEwQztBQUMxQyxzQkFBc0I7QUFDdEIsNEJBQTRCO0FBQzVCLDhCQUE4QjtBQUM5Qix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQixtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsT0FBTztBQUNQLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tb2RhbHMvY29tZW50TW9kYWwuanM/ZTY0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBkYiB9IGZyb20gXCJAL2ZpcmViYXNlXCI7XHJcbi8vIGltcG9ydCB7IGNsb3NlQ29tbWVudE1vZGFsIH0gZnJvbSBcIkAvcmVkdXgvbW9kYWxTbGljZVwiO1xyXG4vLyBpbXBvcnQge1xyXG4vLyAgIENhbGVuZGFySWNvbixcclxuLy8gICBDaGFydEJhckljb24sXHJcbi8vICAgRW1vamlIYXBweUljb24sXHJcbi8vICAgTG9jYXRpb25NYXJrZXJJY29uLFxyXG4vLyAgIFBob3RvZ3JhcGhJY29uLFxyXG4vLyAgIFhJY29uLFxyXG4vLyB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuLy8gaW1wb3J0IE1vZGFsIGZyb20gXCJAbXVpL21hdGVyaWFsL01vZGFsXCI7XHJcbi8vIGltcG9ydCB7IGFycmF5VW5pb24sIGRvYywgc2VydmVyVGltZXN0YW1wLCB1cGRhdGVEb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbi8vIGltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbi8vIGltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29vbWVudE1vZGFsKCkge1xyXG4vLyAgIGNvbnN0IGlzT3BlbiA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kYWxzLmNvbW1lbnRNb2RhbE9wZW4pO1xyXG4vLyAgIGNvbnN0IHVzZXJJbWcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIucGhvdG9VcmwpO1xyXG4vLyAgIGNvbnN0IHR3ZWV0RGV0YWlscyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUubW9kYWxzLmNvbW1lbnRUd2VldERldGFpbHMpXHJcbi8vICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcilcclxuXHJcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuLy8gICBjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuLy8gICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuLy8gICBhc3luYyBmdW5jdGlvbiBzZW5kQ29tbWVudCgpe1xyXG4gICAgXHJcbi8vICAgICBjb25zdCBkb2NSZWYgPSBkb2MoZGIsIFwicG9zdHNcIiwgdHdlZXREZXRhaWxzLmlkKVxyXG4vLyAgICAgY29uc3QgY29tbWVudERldGFpbHMgPSB7XHJcbi8vICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lLFxyXG4vLyAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbi8vICAgICAgIHBob3RvVXJsOiB1c2VyLnBob3RvVXJsLFxyXG4vLyAgICAgICBjb21tZW50OiBjb21tZW50LFxyXG4vLyAgICAgICB0aW1lc3RhbXA6IHNlcnZlclRpbWVzdGFtcCgpXHJcbi8vICAgICB9XHJcbi8vICAgICBhd2FpdCB1cGRhdGVEb2MoZG9jUmVmLCB7XHJcbi8vICAgICAgIGNvbW1lbnRzOiBhcnJheVVuaW9uKGNvbW1lbnREZXRhaWxzKVxyXG4vLyAgICAgfSlcclxuXHJcbi8vICAgICBkaXNwYXRjaChjbG9zZUNvbW1lbnRNb2RhbCgpKVxyXG4vLyAgICAgcm91dGVyLnB1c2goXCIvXCIgKyB0d2VldERldGFpbHMuaWQpXHJcblxyXG4vLyAgIH1cclxuLy8gICBjb25zb2xlLmxvZyhcInR3ZWV0RGV0YWlsczpcIiwgdHdlZXREZXRhaWxzKTtcclxuICBcclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPD5cclxuLy8gICAgICAgPE1vZGFsXHJcbi8vICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxyXG4vLyAgICAgICAgIG9wZW49e2lzT3Blbn1cclxuLy8gICAgICAgICBvbkNsb3NlPXsoKSA9PiBkaXNwYXRjaChjbG9zZUNvbW1lbnRNb2RhbCgpKX1cclxuLy8gICAgICAgPlxyXG4vLyAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIiB3LWZ1bGwgaC1mdWxsIHJlbGF0aXZlXHJcbi8vICAgICAgICAgcm91bmRlZC1sZyBiZy1ibGFjayBib3JkZXIgYm9yZGVyLWdyYXktNTAwXHJcbi8vICAgICAgICAgc206dy1bNjAwcHhdIHNtOmgtWzM4NnB4XSB0ZXh0LXdoaXRlXHJcbi8vICAgICAgICAgc206cC0xMCBwLTRcclxuLy8gICAgICAgICBcIlxyXG4vLyAgICAgICAgID5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1bMnB4XSBoLVs3N3B4XSBiZy1ncmF5LTUwMFxyXG4vLyAgICAgICAgICAgbGVmdC1bNDBweF0gdG9wLVs5NnB4XSBzbTpsZWZ0LVs2NHB4XSBzbTp0b3AtWzEyMHB4XVxyXG4gICAgICAgICAgXHJcbi8vICAgICAgICAgICBcIj48L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXZcclxuLy8gICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGNsb3NlQ29tbWVudE1vZGFsKCkpfVxyXG4vLyAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTQgY3Vyc29yLXBvaW50ZXJcIiA+XHJcbi8vICAgICAgICAgICAgIDxYSWNvbiBjbGFzc05hbWU9XCJ3LTZcIiAvPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04XCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTMgdy1mdWxsXCI+XHJcbi8vICAgICAgICAgICAgICAgPGltZ1xyXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIlxyXG4vLyAgICAgICAgICAgICAgICAgc3JjPXt0d2VldERldGFpbHMucGhvdG9Vcmx9XHJcbi8vICAgICAgICAgICAgICAgLz5cclxuXHJcbi8vICAgICAgICAgICAgICAgPGRpdj5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBzcGFjZS14LTEuNVwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+e3R3ZWV0RGV0YWlscy5uYW1lfTwvaDE+XHJcbi8vICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+QHt0d2VldERldGFpbHMudXNlcm5hbWV9PC9oMT5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMVwiPnt0d2VldERldGFpbHMudHdlZXR9PC9wPlxyXG4vLyAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDAgdGV4dC1bMTVweF0gbXQtMlwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICBSZXBseWluZyB0byA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LVsjMWI5YmYwXVwiPkB7dHdlZXREZXRhaWxzLnVzZXJuYW1lfTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvaDE+XHJcbi8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcblxyXG4vLyAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMVwiPlxyXG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggc3BhY2UteC0zXCI+XHJcbi8vICAgICAgICAgICAgICAgPGltZ1xyXG4vLyAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMiBoLTEyIG9iamVjdC1jb3ZlciByb3VuZGVkLWZ1bGxcIlxyXG4vLyAgICAgICAgICAgICAgICAgc3JjPXt1c2VySW1nfVxyXG4vLyAgICAgICAgICAgICAgIC8+XHJcblxyXG4vLyAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbi8vICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcclxuLy8gICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUd2VldCB5b3VyIHJlcGx5XCJcclxuLy8gICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtbGcgb3V0bGluZS1ub25lXHJcbi8vICAgICAgICAgICAgICAgICBiZy10cmFuc3BhcmVudCByZXNpemUtbm9uZVxyXG4gICAgICAgICAgICAgICAgXHJcbi8vICAgICAgICAgICAgICAgICBcIlxyXG4vLyAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0Q29tbWVudChlLnRhcmdldC52YWx1ZSl9XHJcbi8vICAgICAgICAgICAgICAgICAvPlxyXG5cclxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBib3JkZXItdCBib3JkZXItZ3JheS03MDBcIj5cclxuLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHNwYWNlLXgtMFwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkFuaW1hdGlvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPFBob3RvZ3JhcGhJY29uIGNsYXNzTmFtZT1cImgtWzIycHhdIHRleHQtWyMxZDliZjBdXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25BbmltYXRpb25cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxDaGFydEJhckljb24gY2xhc3NOYW1lPVwiaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkFuaW1hdGlvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPEVtb2ppSGFwcHlJY29uIGNsYXNzTmFtZT1cImgtWzIycHhdIHRleHQtWyMxZDliZjBdXCIgLz5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImljb25BbmltYXRpb25cIj5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPVwiaC1bMjJweF0gdGV4dC1bIzFkOWJmMF1cIiAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbkFuaW1hdGlvblwiPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uTWFya2VySWNvbiBjbGFzc05hbWU9XCJoLVsyMnB4XSB0ZXh0LVsjMWQ5YmYwXVwiIC8+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbi8vICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctWyMxZDliZjBdIHJvdW5kZWQtZnVsbCBweC00IHB5LTEuNVxyXG4vLyAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDpvcGFjaXR5LTUwXHJcbi8vICAgICAgICAgICAgICAgICAgIFwiXHJcbi8vICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshY29tbWVudH1cclxuLy8gICAgICAgICAgICAgICAgICAgb25DbGljaz17c2VuZENvbW1lbnR9XHJcbi8vICAgICAgICAgICAgICAgICAgID5cclxuLy8gICAgICAgICAgICAgICAgICAgICBUd2VldFxyXG4vLyAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICA8L01vZGFsPlxyXG4vLyAgICAgPC8+XHJcbi8vICAgKTtcclxuLy8gfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/modals/comentModal.js\n"));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Sidebar */ \"./components/Sidebar.js\");\n/* harmony import */ var _components_PostFeed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/PostFeed */ \"./components/PostFeed.js\");\n/* harmony import */ var _components_Trending__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Trending */ \"./components/Trending.js\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Banner */ \"./components/Banner.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _components_modals_comentModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/modals/comentModal */ \"./components/modals/comentModal.js\");\n/* harmony import */ var _components_modals_comentModal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_modals_comentModal__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const userName = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.user.username);\n    console.log(userName);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black min-h-screen text-[#e7e9ea]  flex max-w-[1400px] mx-auto\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Sidebar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PostFeed__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Trending__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_modals_comentModal__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            !userName && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ExoPo\\\\Desktop\\\\twitter-cl-fes\\\\pages\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VbUg7QqwJ+CW/8ZicsnaLIVthlM=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFRTUE7QUFQcUM7QUFDRztBQUNEO0FBQ0o7QUFDQztBQUNpQjtBQUk1QyxTQUFTTzs7SUFFdEIsTUFBTUMsV0FBV0gsd0RBQVdBLENBQUNJLENBQUFBLFFBQVNBLE1BQU1DLElBQUksQ0FBQ0MsUUFBUTtJQUN6REMsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLHFCQUNFLDhEQUFDTTs7MEJBQ0MsOERBQUNBO2dCQUNDQyxXQUFVOztrQ0FHViw4REFBQ2QsMkRBQU9BOzs7OztrQ0FDUiw4REFBQ0MsNERBQVNBOzs7OztrQ0FDViw4REFBQ0MsNERBQVFBOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0csdUVBQVlBOzs7OztZQUNaLENBQUNFLDBCQUFZLDhEQUFDSiwwREFBTUE7Ozs7Ozs7Ozs7O0FBRzNCO0dBbkJ3Qkc7O1FBRUxGLG9EQUFXQTs7O0tBRk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwiQG5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvU2lkZWJhclwiO1xuaW1wb3J0IFBvc3RzRmVlZCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RGZWVkXCI7XG5pbXBvcnQgVHJlbmRpbmcgZnJvbSBcIkAvY29tcG9uZW50cy9UcmVuZGluZ1wiO1xuaW1wb3J0IEJhbm5lciBmcm9tIFwiQC9jb21wb25lbnRzL0Jhbm5lclwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBDb21tZW50TW9kYWwgZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbHMvY29tZW50TW9kYWxcIjtcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IHVzZXJOYW1lID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUudXNlci51c2VybmFtZSlcbiAgY29uc29sZS5sb2codXNlck5hbWUpXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiYmctYmxhY2sgbWluLWgtc2NyZWVuIHRleHQtWyNlN2U5ZWFdIFxuICAgIGZsZXggbWF4LXctWzE0MDBweF0gbXgtYXV0b1wiXG4gICAgICA+XG4gICAgICAgIDxTaWRlYmFyIC8+XG4gICAgICAgIDxQb3N0c0ZlZWQgLz5cbiAgICAgICAgPFRyZW5kaW5nIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPENvbW1lbnRNb2RhbCAvPlxuICAgICAgeyF1c2VyTmFtZSAmJiA8QmFubmVyIC8+fVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImludGVyIiwiU2lkZWJhciIsIlBvc3RzRmVlZCIsIlRyZW5kaW5nIiwiQmFubmVyIiwidXNlU2VsZWN0b3IiLCJDb21tZW50TW9kYWwiLCJIb21lIiwidXNlck5hbWUiLCJzdGF0ZSIsInVzZXIiLCJ1c2VybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});