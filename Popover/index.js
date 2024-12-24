/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";var e={89:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},248:e=>{e.exports=function(e){return e[1]}},580:(e,t,r)=>{var n=r(15);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},c=Symbol.for("react.portal"),s=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"==typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,r){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:c,key:null==n?null:""+n,children:e,containerInfo:t,implementation:r}}(e,t,null,r)},t.flushSync=function(e){var t=s.T,r=a.p;try{if(s.T=null,a.p=2,e)return e()}finally{s.T=t,a.p=r,a.d.f()}},t.preconnect=function(e,t){"string"==typeof e&&(t=t?"string"==typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"==typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"==typeof e&&t&&"string"==typeof t.as){var r=t.as,n=u(r,t.crossOrigin),o="string"==typeof t.integrity?t.integrity:void 0,i="string"==typeof t.fetchPriority?t.fetchPriority:void 0;"style"===r?a.d.S(e,"string"==typeof t.precedence?t.precedence:void 0,{crossOrigin:n,integrity:o,fetchPriority:i}):"script"===r&&a.d.X(e,{crossOrigin:n,integrity:o,fetchPriority:i,nonce:"string"==typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"==typeof e)if("object"==typeof t&&null!==t){if(null==t.as||"script"===t.as){var r=u(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"==typeof e&&"object"==typeof t&&null!==t&&"string"==typeof t.as){var r=t.as,n=u(r,t.crossOrigin);a.d.L(e,r,{crossOrigin:n,integrity:"string"==typeof t.integrity?t.integrity:void 0,nonce:"string"==typeof t.nonce?t.nonce:void 0,type:"string"==typeof t.type?t.type:void 0,fetchPriority:"string"==typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"==typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"==typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"==typeof t.imageSizes?t.imageSizes:void 0,media:"string"==typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"==typeof e)if(t){var r=u(t.as,t.crossOrigin);a.d.m(e,{as:"string"==typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:r,integrity:"string"==typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,r){return s.H.useFormState(e,t,r)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.0.0"},834:(e,t,r)=>{!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=r(580)},769:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.ArrowContainer=void 0;var o=r(671),i=r(15),a=r(138);t.ArrowContainer=function(e){var t=e.childRect,r=e.popoverRect,c=e.position,s=e.arrowColor,u=e.arrowSize,l=e.arrowClassName,d=e.arrowStyle,p=e.className,f=e.children,v=e.style,y=(0,a.useArrowContainer)({childRect:t,popoverRect:r,position:c,arrowColor:s,arrowSize:u}),h=y.arrowContainerStyle,g=y.arrowStyle,m=(0,i.useMemo)((function(){return n(n({},h),v)}),[h,v]),b=(0,i.useMemo)((function(){return n(n({},g),d)}),[g,d]);return(0,o.jsxs)("div",{className:p,style:m,children:[(0,o.jsx)("div",{style:b,className:l}),f]})}},772:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Popover=t.usePopover=t.ArrowContainer=t.useArrowContainer=void 0;var o=r(671),i=r(15),a=r(974),c=r(85),s=r(305);Object.defineProperty(t,"usePopover",{enumerable:!0,get:function(){return s.usePopover}});var u=r(69),l=r(639),d=r(138);Object.defineProperty(t,"useArrowContainer",{enumerable:!0,get:function(){return d.useArrowContainer}});var p=r(769);Object.defineProperty(t,"ArrowContainer",{enumerable:!0,get:function(){return p.ArrowContainer}});var f=["top","left","right","bottom"],v=(0,i.forwardRef)((function(e,t){var r=e.isOpen,n=e.children,d=e.content,p=e.positions,v=void 0===p?f:p,y=e.align,h=void 0===y?"center":y,g=e.padding,m=void 0===g?0:g,b=e.reposition,R=void 0===b||b,w=e.parentElement,E=void 0===w?window.document.body:w,_=e.boundaryElement,C=void 0===_?E:_,P=e.containerClassName,O=e.containerStyle,S=e.transform,M=e.transformMode,T=void 0===M?"absolute":M,x=e.boundaryInset,A=void 0===x?0:x,N=e.onClickOutside,j=e.clickOutsideCapture,L=void 0!==j&&j,I=(0,u.useMemoizedArray)(Array.isArray(v)?v:[v]),k=(0,l.useHandlePrevValues)({positions:I,reposition:R,transformMode:T,transform:S,boundaryElement:C,boundaryInset:A}),D=k.prev,z=k.updatePrevValues,V=(0,i.useRef)(),B=(0,i.useState)({align:h,nudgedLeft:0,nudgedTop:0,position:I[0],padding:m,childRect:c.EMPTY_RECT,popoverRect:c.EMPTY_RECT,parentRect:c.EMPTY_RECT,boundaryRect:c.EMPTY_RECT,boundaryInset:A,violations:c.EMPTY_RECT,hasViolations:!1}),F=B[0],H=B[1],U=(0,i.useCallback)((function(e){return H(e)}),[]),Y=(0,s.usePopover)({isOpen:r,childRef:V,containerClassName:P,parentElement:E,boundaryElement:C,transform:S,transformMode:T,positions:I,align:h,padding:m,boundaryInset:A,reposition:R,onPositionPopover:U}),q=Y.positionPopover,G=Y.popoverRef,$=Y.scoutRef;(0,i.useLayoutEffect)((function(){var e=!0,t=function(){var n,o;if(r&&e){var i=null===(n=null==V?void 0:V.current)||void 0===n?void 0:n.getBoundingClientRect(),a=null===(o=null==G?void 0:G.current)||void 0===o?void 0:o.getBoundingClientRect();null==i||null==a||(0,c.rectsAreEqual)(i,F.childRect)&&a.width===F.popoverRect.width&&a.height===F.popoverRect.height&&F.padding===m&&F.align===h&&I===D.positions&&R===D.reposition&&T===D.transformMode&&S===D.transform&&C===D.boundaryElement&&A===D.boundaryInset||q(),z(),e&&window.requestAnimationFrame(t)}};return t(),function(){e=!1}}),[h,C,A,r,m,G,F.align,F.childRect,F.padding,F.popoverRect.height,F.popoverRect.width,q,I,D.boundaryElement,D.boundaryInset,D.positions,D.reposition,D.transform,D.transformMode,R,S,T,z]),(0,i.useEffect)((function(){var e=G.current;return Object.assign(e.style,O),function(){Object.keys(null!=O?O:{}).forEach((function(t){return delete e.style[t]}))}}),[O,r,G]);var K=(0,i.useCallback)((function(e){var t,n;!r||(null===(t=G.current)||void 0===t?void 0:t.contains(e.target))||(null===(n=V.current)||void 0===n?void 0:n.contains(e.target))||null==N||N(e)}),[r,N,G]),W=(0,i.useCallback)((function(){V.current&&window.requestAnimationFrame((function(){return q()}))}),[q]);(0,i.useEffect)((function(){var e=E.ownerDocument.body;return e.addEventListener("click",K,L),e.addEventListener("contextmenu",K,L),e.addEventListener("resize",W),function(){e.removeEventListener("click",K,L),e.removeEventListener("contextmenu",K,L),e.removeEventListener("resize",W)}}),[L,K,W,E]);var X=(0,i.useCallback)((function(e){V.current=e,null!=t&&("object"==typeof t?t.current=e:"function"==typeof t&&t(e))}),[t]);return(0,o.jsxs)(o.Fragment,{children:[(0,i.cloneElement)(n,{ref:X}),r?(0,o.jsx)(a.PopoverPortal,{element:G.current,scoutElement:$.current,container:E,children:"function"==typeof d?d(F):d}):null]})}));t.Popover=(0,i.forwardRef)((function(e,t){return"undefined"==typeof window?e.children:(0,o.jsx)(v,n({},e,{ref:t}))}))},974:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PopoverPortal=void 0;var n=r(15),o=r(834);t.PopoverPortal=function(e){var t=e.container,r=e.element,i=e.scoutElement,a=e.children;return(0,n.useLayoutEffect)((function(){return t.appendChild(r),t.appendChild(i),function(){t.removeChild(r),t.removeChild(i)}}),[t,r,i]),(0,o.createPortal)(a,r)}},138:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.useArrowContainer=void 0;var o=r(15);t.useArrowContainer=function(e){var t=e.childRect,r=e.popoverRect,i=e.position,a=e.arrowSize,c=e.arrowColor;return{arrowContainerStyle:(0,o.useMemo)((function(){return{padding:a}}),[a]),arrowStyle:(0,o.useMemo)((function(){return n({position:"absolute"},function(){var e=2*a,n=t.top-r.top+t.height/2-e/2,o=t.left-r.left+t.width/2-e/2,s=a,u=r.width-a,l=r.height-a;switch(o=(o=o<s?s:o)+e>u?u-e:o,n=(n=n<s?s:n)+e>l?l-e:n,n=Number.isNaN(n)?0:n,o=Number.isNaN(o)?0:o,i){case"right":return{borderTop:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid ").concat(c),left:0,top:n};case"left":return{borderTop:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid transparent"),borderLeft:"".concat(a,"px solid ").concat(c),right:0,top:n};case"bottom":return{borderLeft:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid transparent"),borderBottom:"".concat(a,"px solid ").concat(c),top:0,left:o};case"top":return{borderLeft:"".concat(a,"px solid transparent"),borderRight:"".concat(a,"px solid transparent"),borderTop:"".concat(a,"px solid ").concat(c),bottom:0,left:o};default:return{display:"hidden"}}}())}),[c,a,t.height,t.left,t.top,t.width,r.height,r.left,r.top,r.width,i])}}},387:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useElementRef=void 0;var n=r(15),o=r(85);t.useElementRef=function(e){var t=e.containerClassName,r=e.containerStyle,i=(0,n.useRef)(),a=(0,n.useState)((function(){return(0,o.createContainer)({containerStyle:r,containerClassName:t})}))[0];return(0,n.useLayoutEffect)((function(){a.className=t}),[t,a]),(0,n.useLayoutEffect)((function(){Object.assign(a.style,r)}),[r,a]),i.current=a,i}},639:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useHandlePrevValues=void 0;var n=r(15);t.useHandlePrevValues=function(e){var t=(0,n.useRef)(e.positions),r=(0,n.useRef)(e.reposition),o=(0,n.useRef)(e.transformMode),i=(0,n.useRef)(e.transform),a=(0,n.useRef)(e.boundaryElement),c=(0,n.useRef)(e.boundaryInset),s=(0,n.useCallback)((function(){t.current=e.positions,r.current=e.reposition,o.current=e.transformMode,i.current=e.transform,a.current=e.boundaryElement,c.current=e.boundaryInset}),[e.boundaryElement,e.boundaryInset,e.positions,e.reposition,e.transform,e.transformMode]);return{prev:{positions:t.current,reposition:r.current,transformMode:o.current,transform:i.current,boundaryElement:a.current,boundaryInset:c.current},updatePrevValues:s}}},69:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useMemoizedArray=void 0;var n=r(15);t.useMemoizedArray=function(e){var t=(0,n.useRef)(e);return(0,n.useMemo)((function(){if(t.current===e)return t.current;if(t.current.length!==e.length)return t.current=e,e;for(var r=0;r<e.length;r+=1)if(e[r]!==t.current[r])return t.current=e,e;return t.current}),[e])}},305:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.usePopover=void 0;var n=r(15),o=r(85),i=r(387),a={position:"fixed",overflow:"visible",top:"0px",left:"0px"},c={position:"fixed",top:"0px",left:"0px",width:"0px",height:"0px",visibility:"hidden"};t.usePopover=function(e){var t=e.isOpen,r=e.childRef,s=e.positions,u=e.containerClassName,l=e.parentElement,d=e.transform,p=e.transformMode,f=e.align,v=e.padding,y=e.reposition,h=e.boundaryInset,g=e.boundaryElement,m=e.onPositionPopover,b=(0,i.useElementRef)({containerClassName:"react-tiny-popover-scout",containerStyle:c}),R=(0,i.useElementRef)({containerClassName:null!=u&&u.length>0&&"react-tiny-popover-container"!==u?"react-tiny-popover-container ".concat(u):"react-tiny-popover-container",containerStyle:a}),w=(0,n.useCallback)((function(e){var n,i,a=void 0===e?{}:e,c=a.positionIndex,u=void 0===c?0:c,E=a.parentRect,_=void 0===E?l.getBoundingClientRect():E,C=a.childRect,P=void 0===C?null===(n=null==r?void 0:r.current)||void 0===n?void 0:n.getBoundingClientRect():C,O=a.scoutRect,S=void 0===O?null===(i=null==b?void 0:b.current)||void 0===i?void 0:i.getBoundingClientRect():O,M=a.popoverRect,T=void 0===M?R.current.getBoundingClientRect():M,x=a.boundaryRect,A=void 0===x?g===l?_:g.getBoundingClientRect():x;if(P&&_&&t){if(d&&"absolute"===p){var N="function"==typeof d?d({childRect:P,popoverRect:T,parentRect:_,boundaryRect:A,padding:v,align:f,nudgedTop:0,nudgedLeft:0,boundaryInset:h,violations:o.EMPTY_RECT,hasViolations:!1}):d,j=N.top,L=N.left,I=Math.round(_.left+L-S.left),k=Math.round(_.top+j-S.top);return R.current.style.transform="translate(".concat(I,"px, ").concat(k,"px)"),void m({childRect:P,popoverRect:(0,o.createRect)({left:I,top:k,width:T.width,height:T.height}),parentRect:_,boundaryRect:A,padding:v,align:f,transform:{top:j,left:L},nudgedTop:0,nudgedLeft:0,boundaryInset:h,violations:o.EMPTY_RECT,hasViolations:!1})}var D=u===s.length,z=D?s[0]:s[u],V=(0,o.getNewPopoverRect)({childRect:P,popoverRect:T,boundaryRect:A,position:z,align:f,padding:v,reposition:y},h),B=V.rect;if(V.boundaryViolation&&y&&!D)w({positionIndex:u+1,childRect:P,popoverRect:T,parentRect:_,boundaryRect:A});else{var F=B.top,H=B.left,U=B.width,Y=B.height,q=y&&!D,G=(0,o.getNudgedPopoverRect)(B,A,h),$=G.left,K=G.top,W=F,X=H;q&&(W=K,X=$),W=Math.round(W-S.top),X=Math.round(X-S.left),R.current.style.transform="translate(".concat(X,"px, ").concat(W,"px)");var J={top:A.top+h-W,left:A.left+h-X,right:X+U-A.right+h,bottom:W+Y-A.bottom+h},Q={childRect:P,popoverRect:(0,o.createRect)({left:X,top:W,width:U,height:Y}),parentRect:_,boundaryRect:A,position:z,align:f,padding:v,nudgedTop:K-F,nudgedLeft:$-H,boundaryInset:h,violations:{top:J.top<=0?0:J.top,left:J.left<=0?0:J.left,right:J.right<=0?0:J.right,bottom:J.bottom<=0?0:J.bottom},hasViolations:J.top>0||J.left>0||J.right>0||J.bottom>0};if(d){m(Q);var Z="function"==typeof d?d(Q):d,ee=Z.top,te=Z.left;R.current.style.transform="translate(".concat(Math.round(X+(null!=te?te:0)),"px, ").concat(Math.round(W+(null!=ee?ee:0)),"px)"),Q.nudgedLeft+=null!=te?te:0,Q.nudgedTop+=null!=ee?ee:0,Q.transform={top:ee,left:te}}m(Q)}}}),[l,r,b,R,g,t,d,p,s,f,v,y,h,m]);return{positionPopover:w,popoverRef:R,scoutRef:b}}},85:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.getNudgedPopoverRect=t.getNewPopoverRect=t.popoverRectForPosition=t.createContainer=t.rectsAreEqual=t.createRect=t.EMPTY_RECT=void 0,t.EMPTY_RECT={top:0,left:0,right:0,bottom:0,width:0,height:0},t.createRect=function(e){var t=e.top,r=e.left,n=e.width,o=e.height;return{top:t,left:r,width:n,height:o,right:r+n,bottom:t+o}},t.rectsAreEqual=function(e,t){return e===t||(null==e?void 0:e.bottom)===(null==t?void 0:t.bottom)&&(null==e?void 0:e.height)===(null==t?void 0:t.height)&&(null==e?void 0:e.left)===(null==t?void 0:t.left)&&(null==e?void 0:e.right)===(null==t?void 0:t.right)&&(null==e?void 0:e.top)===(null==t?void 0:t.top)&&(null==e?void 0:e.width)===(null==t?void 0:t.width)},t.createContainer=function(e){var t=e.containerStyle,r=e.containerClassName,n=window.document.createElement("div");return r&&(n.className=r),Object.assign(n.style,t),n},t.popoverRectForPosition=function(e,r,n,o,i){var a,c,s=r.left+r.width/2,u=r.top+r.height/2,l=n.width,d=n.height;switch(e){case"left":a=u-d/2,c=r.left-o-l,"start"===i&&(a=r.top),"end"===i&&(a=r.bottom-d);break;case"bottom":a=r.bottom+o,c=s-l/2,"start"===i&&(c=r.left),"end"===i&&(c=r.right-l);break;case"right":a=u-d/2,c=r.right+o,"start"===i&&(a=r.top),"end"===i&&(a=r.bottom-d);break;default:a=r.top-d-o,c=s-l/2,"start"===i&&(c=r.left),"end"===i&&(c=r.right-l)}return(0,t.createRect)({left:c,top:a,width:l,height:d})},t.getNewPopoverRect=function(e,r){var n=e.position,o=e.align,i=e.childRect,a=e.popoverRect,c=e.boundaryRect,s=e.padding,u=e.reposition,l=(0,t.popoverRectForPosition)(n,i,a,s,o);return{rect:l,boundaryViolation:u&&("top"===n&&l.top<c.top+r||"left"===n&&l.left<c.left+r||"right"===n&&l.right>c.right-r||"bottom"===n&&l.bottom>c.bottom-r)}},t.getNudgedPopoverRect=function(e,n,o){var i=n.top+o,a=n.left+o,c=n.right-o,s=n.bottom-o,u=e.top<i?i:e.top;u=u+e.height>s?s-e.height:u;var l=e.left<a?a:e.left;return l=l+e.width>c?c-e.width:l,(0,t.createRect)(r(r({},e),{top:u,left:l}))}},963:(e,t)=>{var r=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function o(e,t,n){var o=null;if(void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in n={},t)"key"!==i&&(n[i]=t[i]);else n=t;return t=n.ref,{$$typeof:r,type:e,key:o,ref:void 0!==t?t:null,props:n}}t.Fragment=n,t.jsx=o,t.jsxs=o},671:(e,t,r)=>{e.exports=r(963)},552:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(248),o=r.n(n),i=r(89),a=r.n(i)()(o());a.push([e.id,".react-tiny-popover-container{\n    z-index: 1000;\n}\n",""]);const c=a},72:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=n.base?s[0]+n.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=r(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var s=n(e,o),u=0;u<i.length;u++){var l=r(i[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=s}}},659:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},15:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};r.r(n),r.d(n,{default:()=>E});var o=r(15),i=r.n(o),a=r(772),c=r(72),s=r.n(c),u=r(825),l=r.n(u),d=r(659),p=r.n(d),f=r(56),v=r.n(f),y=r(540),h=r.n(y),g=r(113),m=r.n(g),b=r(552),R={};function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}R.styleTagTransform=m(),R.setAttributes=v(),R.insert=p().bind(null,"head"),R.domAPI=l(),R.insertStyleElement=h(),s()(b.A,R),b.A&&b.A.locals&&b.A.locals;const E=function(e){var t,r,n=e.trigger,c=e.content,s=e.position,u=void 0===s?"top":s,l=e.hideArrow,d=void 0!==l&&l,p=e.arrowColor,f=void 0===p?"#000000":p,v=e.arrowSize,y=void 0===v?6:v,h=e.distance,g=void 0===h?0:h,m=(t=(0,o.useState)(!1),r=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==t);s=!0);}catch(e){u=!0,o=e}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(t,r)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=m[0],R=m[1],E=function(){return R(!b)};return i().createElement("div",{onClick:E},i().createElement(a.Popover,{isOpen:b,onClickOutside:E,reposition:!0,padding:g,positions:[u,"top","bottom","left","right"],content:function(e){var t=e.position,r=e.childRect,n=e.popoverRect;return d?c:i().createElement(a.ArrowContainer,{position:t,childRect:r,popoverRect:n,arrowColor:f,arrowSize:y},c)}},n))};module.exports=n})();