"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/stripe";
exports.ids = ["pages/api/stripe"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/stripe.js":
/*!*****************************!*\
  !*** ./pages/api/stripe.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const params = {\n                submit_type: \"pay\",\n                mode: \"payment\",\n                payment_method_types: [\n                    \"card\"\n                ],\n                billing_address_collection: \"auto\",\n                shipping_options: [\n                    {\n                        shipping_rate: \"shr_1NOPPOFiLds4J7HeD6fy9CtV\"\n                    }\n                ],\n                line_items: req.body.map((item)=>{\n                    const img = item.image[0].asset._ref;\n                    const newImage = img.replace(\"image-\", \"https://cdn.sanity.io/images/ryj3e4hf/production/\").replace(\"-webp\", \".webp\");\n                    return {\n                        price_data: {\n                            currency: \"ron\",\n                            product_data: {\n                                name: item.name,\n                                images: [\n                                    newImage\n                                ]\n                            },\n                            unit_amount: item.price * 100\n                        },\n                        adjustable_quantity: {\n                            enabled: true,\n                            minimum: 1\n                        },\n                        quantity: item.quantity\n                    };\n                }),\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/canceled`\n            };\n            // Checkout Sessions pt body params\n            const session = await stripe.checkout.sessions.create(params);\n            res.status(200).json(session);\n        } catch (err) {\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc3RyaXBlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUU1QixNQUFNQyxTQUFTLElBQUlELCtDQUFNQSxDQUFDRSxRQUFRQyxJQUFJQztBQUV2QixlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDNUMsSUFBSUQsSUFBSUUsV0FBVyxRQUFRO1FBQ3pCLElBQUk7WUFDRixNQUFNQyxTQUFTO2dCQUNiQyxhQUFhO2dCQUNiQyxNQUFNO2dCQUNOQyxzQkFBc0I7b0JBQUM7aUJBQU87Z0JBQzlCQyw0QkFBNEI7Z0JBQzVCQyxrQkFBa0I7b0JBQ2hCO3dCQUFFQyxlQUFlO29CQUErQjtpQkFDakQ7Z0JBQ0RDLFlBQVlWLElBQUlXLEtBQUtDLElBQUksQ0FBQ0M7b0JBQ3hCLE1BQU1DLE1BQU1ELEtBQUtFLEtBQUssQ0FBQyxFQUFFLENBQUNDLE1BQU1DO29CQUNoQyxNQUFNQyxXQUFXSixJQUFJSyxRQUFRLFVBQVUscURBQXFEQSxRQUFRLFNBQVM7b0JBRTdHLE9BQU87d0JBQ0xDLFlBQVk7NEJBQ1ZDLFVBQVU7NEJBQ1ZDLGNBQWM7Z0NBQ1pDLE1BQU1WLEtBQUtVO2dDQUNYQyxRQUFRO29DQUFDTjtpQ0FBUzs0QkFDcEI7NEJBQ0FPLGFBQWFaLEtBQUthLFFBQVE7d0JBQzVCO3dCQUNBQyxxQkFBcUI7NEJBQ25CQyxTQUFROzRCQUNSQyxTQUFTO3dCQUNYO3dCQUNBQyxVQUFVakIsS0FBS2lCO29CQUNqQjtnQkFDRjtnQkFDQUMsYUFBYSxDQUFDLEVBQUUvQixJQUFJZ0MsUUFBUUMsT0FBTyxRQUFRLENBQUM7Z0JBQzVDQyxZQUFZLENBQUMsRUFBRWxDLElBQUlnQyxRQUFRQyxPQUFPLFNBQVMsQ0FBQztZQUM5QztZQUVBLG1DQUFtQztZQUNuQyxNQUFNRSxVQUFVLE1BQU14QyxPQUFPeUMsU0FBU0MsU0FBU0MsT0FBT25DO1lBRXRERixJQUFJc0MsT0FBTyxLQUFLQyxLQUFLTDtRQUN2QixFQUFFLE9BQU9NLEtBQUs7WUFDWnhDLElBQUlzQyxPQUFPRSxJQUFJQyxjQUFjLEtBQUtGLEtBQUtDLElBQUlFO1FBQzdDO0lBQ0YsT0FBTztRQUNMMUMsSUFBSTJDLFVBQVUsU0FBUztRQUN2QjNDLElBQUlzQyxPQUFPLEtBQUtNLElBQUk7SUFDdEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS8uL3BhZ2VzL2FwaS9zdHJpcGUuanM/ZDc4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RyaXBlIGZyb20gJ3N0cmlwZSc7XHJcblxyXG5jb25zdCBzdHJpcGUgPSBuZXcgU3RyaXBlKHByb2Nlc3MuZW52LlNUUklQRV9TRUNSRVRfS0VZKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgc3VibWl0X3R5cGU6ICdwYXknLFxyXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXHJcbiAgICAgICAgYmlsbGluZ19hZGRyZXNzX2NvbGxlY3Rpb246ICdhdXRvJyxcclxuICAgICAgICBzaGlwcGluZ19vcHRpb25zOiBbXHJcbiAgICAgICAgICB7IHNoaXBwaW5nX3JhdGU6ICdzaHJfMU5PUFBPRmlMZHM0SjdIZUQ2Znk5Q3RWJyB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGluZV9pdGVtczogcmVxLmJvZHkubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpbWcgPSBpdGVtLmltYWdlWzBdLmFzc2V0Ll9yZWY7XHJcbiAgICAgICAgICBjb25zdCBuZXdJbWFnZSA9IGltZy5yZXBsYWNlKCdpbWFnZS0nLCAnaHR0cHM6Ly9jZG4uc2FuaXR5LmlvL2ltYWdlcy9yeWozZTRoZi9wcm9kdWN0aW9uLycpLnJlcGxhY2UoJy13ZWJwJywgJy53ZWJwJyk7XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcHJpY2VfZGF0YTogeyBcclxuICAgICAgICAgICAgICBjdXJyZW5jeTogJ3JvbicsXHJcbiAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7IFxyXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VzOiBbbmV3SW1hZ2VdLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgdW5pdF9hbW91bnQ6IGl0ZW0ucHJpY2UgKiAxMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkanVzdGFibGVfcXVhbnRpdHk6IHtcclxuICAgICAgICAgICAgICBlbmFibGVkOnRydWUsXHJcbiAgICAgICAgICAgICAgbWluaW11bTogMSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2NhbmNlbGVkYCxcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gQ2hlY2tvdXQgU2Vzc2lvbnMgcHQgYm9keSBwYXJhbXNcclxuICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IHN0cmlwZS5jaGVja291dC5zZXNzaW9ucy5jcmVhdGUocGFyYW1zKTtcclxuXHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHNlc3Npb24pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1c0NvZGUgfHwgNTAwKS5qc29uKGVyci5tZXNzYWdlKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCAnUE9TVCcpO1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgnTWV0aG9kIE5vdCBBbGxvd2VkJyk7XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIlN0cmlwZSIsInN0cmlwZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJwYXJhbXMiLCJzdWJtaXRfdHlwZSIsIm1vZGUiLCJwYXltZW50X21ldGhvZF90eXBlcyIsImJpbGxpbmdfYWRkcmVzc19jb2xsZWN0aW9uIiwic2hpcHBpbmdfb3B0aW9ucyIsInNoaXBwaW5nX3JhdGUiLCJsaW5lX2l0ZW1zIiwiYm9keSIsIm1hcCIsIml0ZW0iLCJpbWciLCJpbWFnZSIsImFzc2V0IiwiX3JlZiIsIm5ld0ltYWdlIiwicmVwbGFjZSIsInByaWNlX2RhdGEiLCJjdXJyZW5jeSIsInByb2R1Y3RfZGF0YSIsIm5hbWUiLCJpbWFnZXMiLCJ1bml0X2Ftb3VudCIsInByaWNlIiwiYWRqdXN0YWJsZV9xdWFudGl0eSIsImVuYWJsZWQiLCJtaW5pbXVtIiwicXVhbnRpdHkiLCJzdWNjZXNzX3VybCIsImhlYWRlcnMiLCJvcmlnaW4iLCJjYW5jZWxfdXJsIiwic2Vzc2lvbiIsImNoZWNrb3V0Iiwic2Vzc2lvbnMiLCJjcmVhdGUiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJzZXRIZWFkZXIiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/stripe.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/stripe.js"));
module.exports = __webpack_exports__;

})();