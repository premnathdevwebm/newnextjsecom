exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 52954:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const actions = {
'7d80ec9e36af02c77b3f2ac15099c87d2c3a96f7': () => Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 92976)).then(mod => mod["$$ACTION_0"]),
}

async function endpoint(id, ...args) {
  const action = await actions[id]()
  return action.apply(null, args)
}

// Using CJS to avoid this to be tree-shaken away due to unused exports.
module.exports = {
  '7d80ec9e36af02c77b3f2ac15099c87d2c3a96f7': endpoint.bind(null, '7d80ec9e36af02c77b3f2ac15099c87d2c3a96f7'),
}


/***/ }),

/***/ 59163:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67120, 23))

/***/ }),

/***/ 53794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ PriceTag)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21353);


function PriceTag({ price, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: `badge ${className}`,
        children: (0,_lib_format__WEBPACK_IMPORTED_MODULE_1__/* .formatPrice */ .T)(price)
    });
}


/***/ }),

/***/ 9326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ProductCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PriceTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53794);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3501);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53219);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




function ProductCard({ product }) {
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000 * 60 * 60 * 24 * 7;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "card w-full bg-base-100 transition-shadow",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/products/" + product.id,
            className: "hover:shadow-xl",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: product.imageUrl,
                        alt: product.name,
                        width: 800,
                        height: 400,
                        className: "h-48 object-cover"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            className: "card-title",
                            children: product.name
                        }),
                        isNew && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "badge badge-secondary",
                            children: "NEW"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: product.description
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_PriceTag__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            price: product.price
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 21353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   T: () => (/* binding */ formatPrice)
/* harmony export */ });
function formatPrice(price) {
    return (price / 100).toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });
}


/***/ })

};
;