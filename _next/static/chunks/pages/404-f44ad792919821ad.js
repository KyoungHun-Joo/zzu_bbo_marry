(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{9305:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(4822)}])},6101:function(e,t){"use strict";var n,r,o,u;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{ACTION_FAST_REFRESH:function(){return s},ACTION_NAVIGATE:function(){return i},ACTION_PREFETCH:function(){return a},ACTION_REFRESH:function(){return l},ACTION_RESTORE:function(){return f},ACTION_SERVER_ACTION:function(){return d},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return r},PrefetchKind:function(){return n},isThenable:function(){return p}});let l="refresh",i="navigate",f="restore",c="server-patch",a="prefetch",s="fast-refresh",d="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(o=n||(n={})).AUTO="auto",o.FULL="full",o.TEMPORARY="temporary",(u=r||(r={})).fresh="fresh",u.reusable="reusable",u.expired="expired",u.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7670:function(e,t,n){"use strict";function r(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),n(1297),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4116:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return g}});let r=n(8754),o=n(5893),u=r._(n(7294)),l=n(9975),i=n(2712),f=n(8547),c=n(4350),a=n(8109),s=n(4494),d=n(5716),p=n(388),h=n(7670),b=n(6220),y=n(6101),v=new Set;function _(e,t,n,r,o,u){if(u||(0,i.isLocalURL)(t)){if(!r.bypassPrefetchedCheck){let o=t+"%"+n+"%"+(void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(u?e.prefetch(t,o):e.prefetch(t,n,r)).catch(e=>{})}}function x(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let g=u.default.forwardRef(function(e,t){let n,r;let{href:f,as:v,children:g,prefetch:m=null,passHref:P,replace:j,shallow:O,scroll:C,locale:E,onClick:T,onMouseEnter:A,onTouchStart:M,legacyBehavior:R=!1,...k}=e;n=g,R&&("string"==typeof n||"number"==typeof n)&&(n=(0,o.jsx)("a",{children:n}));let w=u.default.useContext(s.RouterContext),I=u.default.useContext(d.AppRouterContext),N=null!=w?w:I,L=!w,S=!1!==m,F=null===m?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:U,as:Z}=u.default.useMemo(()=>{if(!w){let e=x(f);return{href:e,as:v?x(v):e}}let[e,t]=(0,l.resolveHref)(w,f,!0);return{href:e,as:v?(0,l.resolveHref)(w,v):t||e}},[w,f,v]),H=u.default.useRef(U),K=u.default.useRef(Z);R&&(r=u.default.Children.only(n));let z=R?r&&"object"==typeof r&&r.ref:t,[D,V,B]=(0,p.useIntersection)({rootMargin:"200px"}),W=u.default.useCallback(e=>{(K.current!==Z||H.current!==U)&&(B(),K.current=Z,H.current=U),D(e),z&&("function"==typeof z?z(e):"object"==typeof z&&(z.current=e))},[Z,z,U,B,D]);u.default.useEffect(()=>{N&&V&&S&&_(N,U,Z,{locale:E},{kind:F},L)},[Z,U,V,E,S,null==w?void 0:w.locale,N,L,F]);let X={ref:W,onClick(e){R||"function"!=typeof T||T(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),N&&!e.defaultPrevented&&function(e,t,n,r,o,l,f,c,a){let{nodeName:s}=e.currentTarget;if("A"===s.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a&&!(0,i.isLocalURL)(n)))return;e.preventDefault();let d=()=>{let e=null==f||f;"beforePopState"in t?t[o?"replace":"push"](n,r,{shallow:l,locale:c,scroll:e}):t[o?"replace":"push"](r||n,{scroll:e})};a?u.default.startTransition(d):d()}(e,N,U,Z,j,O,C,E,L)},onMouseEnter(e){R||"function"!=typeof A||A(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),N&&(S||!L)&&_(N,U,Z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:F},L)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),N&&(S||!L)&&_(N,U,Z,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:F},L)}};if((0,c.isAbsoluteUrl)(Z))X.href=Z;else if(!R||P||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==w?void 0:w.locale,t=(null==w?void 0:w.isLocaleDomain)&&(0,h.getDomainLocale)(Z,e,null==w?void 0:w.locales,null==w?void 0:w.domainLocales);X.href=t||(0,b.addBasePath)((0,a.addLocale)(Z,e,null==w?void 0:w.defaultLocale))}return R?u.default.cloneElement(r,X):(0,o.jsx)("a",{...k,...X,children:n})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},388:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return f}});let r=n(7294),o=n(460),u="function"==typeof IntersectionObserver,l=new Map,i=[];function f(e){let{rootRef:t,rootMargin:n,disabled:f}=e,c=f||!u,[a,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);return(0,r.useEffect)(()=>{if(u){if(c||a)return;let e=d.current;if(e&&e.tagName)return function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=i.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map;return t={id:n,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:o},i.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=i.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&i.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n})}else if(!a){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[c,n,t,a,d.current]),[p,a,(0,r.useCallback)(()=>{s(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4822:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294);var o=n(1525),u=n(1664),l=n.n(u);t.default=()=>(0,r.jsxs)(o.W2,{children:[(0,r.jsx)(o.Fn,{children:"common:NotFound"}),(0,r.jsx)(l(),{href:"/",children:(0,r.jsx)(o.vb,{children:"common:BackHome"})})]})},1525:function(e,t,n){"use strict";n.d(t,{Fn:function(){return y},W2:function(){return h},vb:function(){return b}});var r=n(2729),o=n(5936);function u(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 100vh;\n"]);return u=function(){return e},e}function l(){let e=(0,r._)(["\n  margin: 100px;\n"]);return l=function(){return e},e}function i(){let e=(0,r._)(["\n  text-align: center;\n  display: flex;\n  flex: 1 1 100%;\n  width: 100%;\n  justify-content: flex-start;\n"]);return i=function(){return e},e}function f(){let e=(0,r._)(["\n  display: flex;\n  flex: 1 1 1%;\n"]);return f=function(){return e},e}function c(){let e=(0,r._)(["\n  background: #f9da2e;\n  border-radius: 8px;\n  font-family: Arial;\n  font-weight: 700;\n  font-size: 25px;\n  color: #4b6c8d;\n  letter-spacing: 0;\n  width: 55px;\n  height: 236px;\n  margin-left: 15px;\n  padding: 10px 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  color: #4b6c8d;\n\n  .button {\n    cursor: pointer;\n  }\n\n  .active {\n    color: #2c3e50;\n  }\n"]);return c=function(){return e},e}function a(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n"]);return a=function(){return e},e}function s(){let e=(0,r._)(["\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n"]);return s=function(){return e},e}function d(){let e=(0,r._)(["\n  background: #f9da2e;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-family: Arial;\n  font-weight: 700;\n  font-size: 25px;\n  letter-spacing: 0;\n  cursor: pointer;\n"]);return d=function(){return e},e}function p(){let e=(0,r._)(["\n  font-size: 110px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: #ffffff;\n  margin-bottom: 10px;\n"]);return p=function(){return e},e}let h=o.ZP.div(u());o.ZP.div(l()),o.ZP.div(i()),o.ZP.div(f()),o.ZP.div(c()),o.ZP.div(a()),o.ZP.div(s());let b=o.ZP.div(d()),y=o.ZP.div(p())},1664:function(e,t,n){e.exports=n(4116)},2729:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{_:function(){return r}})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=9305)}),_N_E=e.O()}]);