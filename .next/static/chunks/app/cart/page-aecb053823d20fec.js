(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[565],{2101:function(e,n,r){Promise.resolve().then(r.bind(r,1843))},7630:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{default:function(){return c},unstable_getImgProps:function(){return l}});let t=r(6927),s=r(5468),i=r(3579),a=r(3240),o=t._(r(4489)),l=e=>{(0,i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:n}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(n))void 0===r&&delete n[e];return{props:n}},c=a.Image},1843:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var t=r(3955),s=r(668),i=r(6394),a=r.n(i),o=r(5846),l=r.n(o),c=r(2310);function u(e){let{cartItem:{product:n,quantity:r},setProductQuantity:i}=e,[o,u]=(0,c.useTransition)(),d=[];for(let e=1;e<=19;e++)d.push((0,t.jsx)("option",{value:e,children:e},e));return(0,t.jsxs)("div",{children:[(0,t.jsxs)("div",{className:"flex flex-wrap items-center gap-3",children:[(0,t.jsx)(a(),{src:n.imageUrl,alt:n.name,width:200,height:200,className:"rounded-lg"}),(0,t.jsxs)("div",{children:[(0,t.jsx)(l(),{href:"/products/"+n.id,className:"font-bold",children:n.name}),(0,t.jsxs)("div",{children:["Price: ",(0,s.T)(n.price)]}),(0,t.jsxs)("div",{className:"my-1 flex items-center gap-2",children:["Quantity:",(0,t.jsxs)("select",{className:"select select-bordered w-full max-w-[80px]",defaultValue:r,onChange:e=>{let r=parseInt(e.currentTarget.value);u(async()=>{await i(n.id,r)})},children:[(0,t.jsx)("option",{value:0,children:"0 (Remove)"}),d]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:["Total: ",(0,s.T)(n.price*r),o&&(0,t.jsx)("span",{className:"loading loading-spinner loading-sm"})]})]})]}),(0,t.jsx)("div",{className:"divider"})]})}},668:function(e,n,r){"use strict";function t(e){return(e/100).toLocaleString("en-US",{style:"currency",currency:"USD"})}r.d(n,{T:function(){return t}})},3009:function(e,n,r){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t=r(2310),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var t,i={},c=null,u=null;for(t in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(u=n.ref),n)a.call(n,t)&&!l.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:u,props:i,_owner:o.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},3955:function(e,n,r){"use strict";e.exports=r(3009)},6394:function(e,n,r){e.exports=r(7630)},5846:function(e,n,r){e.exports=r(4896)}},function(e){e.O(0,[240,896,704,381,744],function(){return e(e.s=2101)}),_N_E=e.O()}]);