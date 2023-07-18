exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 56268:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 79721:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1428));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3280, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 69274, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3349, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6037, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67120, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2788));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 72899));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 44341))

/***/ }),

/***/ 38229:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 86014))

/***/ }),

/***/ 13259:
/***/ (() => {



/***/ }),

/***/ 2788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShoppingCartButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27787);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


function ShoppingCartButton({ cart }) {
    function closeDropdown() {
        const elem = document.activeElement;
        if (elem) {
            elem.blur();
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "dropdown dropdown-end",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                tabIndex: 0,
                className: "btn btn-circle btn-ghost",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "indicator",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-5 w-5",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: "2",
                                d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "badge indicator-item badge-sm",
                            children: cart?.size || 0
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                tabIndex: 0,
                className: "card dropdown-content card-compact z-30 mt-3 w-52 bg-base-100 shadow",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "card-body",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-lg font-bold",
                            children: [
                                cart?.size || 0,
                                " Items"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                            className: "text-info",
                            children: [
                                "Subtotal: ",
                                (0,_lib_format__WEBPACK_IMPORTED_MODULE_2__/* .formatPrice */ .T)(cart?.subtotal || 0)
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "card-actions",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/cart",
                                className: "btn btn-primary btn-block",
                                onClick: closeDropdown,
                                children: "View cart"
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 72899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UserMenuButton)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
;// CONCATENATED MODULE: ./src/assets/profile-pic-placeholder.png
/* harmony default export */ const profile_pic_placeholder = ({"src":"/_next/static/media/profile-pic-placeholder.a3a9735a.png","height":360,"width":360,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXi4uLLy8ucnJzU1NSxsbG5ubm+vr6dJ7zJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJ0lEQVR4nGNgQAKsrBCamYmJGcJiZITSbGxgFjMTE1SOkYUFKgcGAAhMAD0+mrGSAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/app/Navbar/UserMenuButton.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function UserMenuButton({ session }) {
    const user = session?.user;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "dropdown-end dropdown",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                tabIndex: 0,
                className: "btn btn-circle btn-ghost",
                children: user ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: user?.image || profile_pic_placeholder,
                    alt: "Profile picture",
                    width: 40,
                    height: 40,
                    className: "w-10 rounded-full"
                }) : /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    className: "inline-block h-5 w-5 stroke-current",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        d: "M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                tabIndex: 0,
                className: "menu dropdown-content rounded-box menu-sm z-30 mt-3 w-52 bg-base-100 p-2 shadow",
                children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: user ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>(0,react.signOut)({
                                callbackUrl: "/"
                            }),
                        children: "Sign Out"
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: ()=>(0,react.signIn)(),
                        children: "Sign In"
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 1428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ next_auth_react__WEBPACK_IMPORTED_MODULE_0__.SessionProvider)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


/***/ }),

/***/ 86014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* __next_internal_client_entry_do_not_use__ default auto */ 
function ErrorPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Something went wrong. Please refresh the page."
    });
}


/***/ }),

/***/ 27787:
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


/***/ }),

/***/ 92976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $$ACTION_0: () => (/* binding */ $$ACTION_0),
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-proxy.js
var action_proxy = __webpack_require__(7605);
;// CONCATENATED MODULE: ./src/assets/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.c0e837d1.png","height":840,"width":840,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXH94rv1tlX74730sUz1s1PzrUT65cL0sUr5uFX0tFL6tFT9vVb4t1P2tFX65cL2tVT2skzH2OJsAAAAEnRSTlMAMCZkUapzUDFgmhjrzXh2rTwOXP8FAAAACXBIWXMAAAsSAAALEgHS3X78AAAAOUlEQVR4nCXKSw6AIAwA0bGlP1DB+1/WiLuXzABHlA348JwFZPO82g8xA3QGtoDQYCfSa8/I3fvgBSu5AUTpORhzAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(23928);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(53219);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/lib/db/cart.ts
var db_cart = __webpack_require__(95504);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(1215);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/app/Navbar/ShoppingCartButton.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\user\Desktop\codeSpace\html\nextjsecom\src\app\Navbar\ShoppingCartButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const ShoppingCartButton = (__default__);
;// CONCATENATED MODULE: ./src/app/Navbar/UserMenuButton.tsx

const UserMenuButton_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\user\Desktop\codeSpace\html\nextjsecom\src\app\Navbar\UserMenuButton.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: UserMenuButton_esModule, $$typeof: UserMenuButton_$$typeof } = UserMenuButton_proxy;
const UserMenuButton_default_ = UserMenuButton_proxy.default;


/* harmony default export */ const UserMenuButton = (UserMenuButton_default_);
// EXTERNAL MODULE: ./src/app/api/auth/[...nextauth]/route.ts + 1 modules
var route = __webpack_require__(60509);
;// CONCATENATED MODULE: ./src/app/Navbar/Navbar.tsx
/* __next_internal_action_entry_do_not_use__ $$ACTION_0 */ 










async function searchProducts(...args) {
    return $$ACTION_0.apply(null, (searchProducts.$$bound || []).concat(args));
}
(0,action_proxy/* default */.Z)("7d80ec9e36af02c77b3f2ac15099c87d2c3a96f7", null, searchProducts, $$ACTION_0);
async function $$ACTION_0(formData) {
    const searchQuery = formData.get("searchQuery")?.toString();
    if (searchQuery) {
        (0,navigation.redirect)("/search?query=" + searchQuery);
    }
}
async function Navbar() {
    const cart = await (0,db_cart/* getCart */.dv)();
    const session = await (0,next_auth.getServerSession)(route.authOptions);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-base-100",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: "btn btn-ghost text-xl normal-case",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: logo,
                                height: 40,
                                width: 40,
                                alt: "Flowmazon logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Flowmazon"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex-none gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("form", {
                            action: searchProducts,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "form-control",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    name: "searchQuery",
                                    placeholder: "search",
                                    className: "input input-bordered w-full min-w-[100px]"
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(ShoppingCartButton, {
                            cart: cart
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(UserMenuButton, {
                            session: session
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 35832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\user\Desktop\codeSpace\html\nextjsecom\src\app\error.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 34257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(88857);
var target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/app/SessionProvider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\user\Desktop\codeSpace\html\nextjsecom\src\app\SessionProvider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SessionProvider = (__default__);
// EXTERNAL MODULE: ./src/app/Navbar/Navbar.tsx + 3 modules
var Navbar = __webpack_require__(92976);
;// CONCATENATED MODULE: ./src/app/Footer.tsx

function Footer() {
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "bg-neutral p-10 text-neutral-content",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "footer m-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "footer-title",
                            children: "Services"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Branding"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Design"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Marketing"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Advertisement"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "footer-title",
                            children: "Company"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "About us"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Contact"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Jobs"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Press kit"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "footer-title",
                            children: "Legal"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Terms of use"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Privacy policy"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: "link-hover link",
                            children: "Cookie policy"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/app/layout.tsx






const metadata = {
    title: "Flamazon app",
    description: "Flamazonapp"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(SessionProvider, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar["default"], {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 47606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
        className: "loading loading-dots loading-lg m-auto block",
        children: "'Loading...'"
    });
}


/***/ }),

/***/ 20248:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFoundPage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function NotFoundPage() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: "Page not found."
    });
}


/***/ }),

/***/ 44341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.c0e837d1.png","height":840,"width":840,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXH94rv1tlX74730sUz1s1PzrUT65cL0sUr5uFX0tFL6tFT9vVb4t1P2tFX65cL2tVT2skzH2OJsAAAAEnRSTlMAMCZkUapzUDFgmhjrzXh2rTwOXP8FAAAACXBIWXMAAAsSAAALEgHS3X78AAAAOUlEQVR4nCXKSw6AIAwA0bGlP1DB+1/WiLuXzABHlA348JwFZPO82g8xA3QGtoDQYCfSa8/I3fvgBSu5AUTpORhzAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 38267:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/png","width":1200,"height":630}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "opengraph-image.png")

    return [{
      ...imageData,
      url: imageUrl + "?11782c73ee731c9c",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;