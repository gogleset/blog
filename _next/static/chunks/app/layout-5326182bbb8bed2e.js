(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{7071:function(e,t,n){Promise.resolve().then(n.bind(n,1842)),Promise.resolve().then(n.bind(n,1301)),Promise.resolve().then(n.bind(n,6372)),Promise.resolve().then(n.bind(n,8496)),Promise.resolve().then(n.t.bind(n,8877,23)),Promise.resolve().then(n.t.bind(n,231,23))},1842:function(e,t,n){"use strict";n.r(t);var s=n(7437),r=n(2265);t.default=()=>{let[e,t]=(0,r.useState)("light");return(0,s.jsxs)("label",{className:"swap ",children:[(0,s.jsx)("input",{type:"checkbox",onClick:()=>{let e=document.querySelector("html"),t=document.querySelector("iframe.giscus-frame");if(e){var n,s;let r=e.dataset.theme;console.log(r),"dracula"===r||void 0===r?(e.setAttribute("data-theme","cupcake"),localStorage.setItem("theme","light"),null==t||null===(n=t.contentWindow)||void 0===n||n.postMessage({giscus:{setConfig:{theme:"light_protanopia"}}},"https://giscus.app")):(e.setAttribute("data-theme","dracula"),localStorage.setItem("theme","dark"),null==t||null===(s=t.contentWindow)||void 0===s||s.postMessage({giscus:{setConfig:{theme:"noborder_dark"}}},"https://giscus.app"))}}}),(0,s.jsx)("svg",{className:"".concat("light"===e?"swap-off":"swap-on"," fill-current w-10 h-10"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"})}),(0,s.jsx)("svg",{className:"".concat("light"===e?"swap-on":"swap-off"," fill-current w-10 h-10"),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{d:"M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"})})]})}},1301:function(e,t,n){"use strict";var s=n(7437),r=n(6463),o=n(2265);t.default=()=>{let[e,t]=(0,o.useState)(0),n=(0,r.usePathname)().includes("/posts/"),a=()=>t((document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100);return(0,o.useEffect)(()=>{n?window.addEventListener("scroll",a):window.removeEventListener("scroll",()=>a)},[n]),(0,s.jsx)(s.Fragment,{children:n?(0,s.jsx)("progress",{className:"progress progress-primary w-full",value:e,max:"100"}):(0,s.jsx)(s.Fragment,{})})}},6372:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a},myDrawer3Close:function(){return o}});var s=n(7437),r=n(7138);n(2265);let o=()=>{let e=document.querySelector("#my-drawer-3"),{checked:t}=e;t&&(e.checked=!1)};var a=e=>{let{col:t}=e;return(0,s.jsx)("ul",{className:"flex ".concat(t?"flex-col":""," gap-3"),children:(0,s.jsx)("li",{className:"self-center text-lg font-semibold whitespace-nowrap cursor-pointer",onClick:o,children:(0,s.jsx)(r.default,{href:"/about",children:"About"})})})}},8496:function(e,t,n){"use strict";var s=n(7437),r=n(2265);let o=()=>{let e=document.getElementById("my_modal_3");e&&e.showModal()};t.default=e=>{let{children:t}=e,n=(0,r.useCallback)(e=>{(e.metaKey||e.ctrlKey)&&"k"===e.key&&o()},[]);return(0,r.useEffect)(()=>(window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}),[n]),(0,s.jsx)(s.Fragment,{children:t})}},7138:function(e,t,n){"use strict";n.d(t,{default:function(){return r.a}});var s=n(231),r=n.n(s)},6463:function(e,t,n){"use strict";var s=n(1169);n.o(s,"usePathname")&&n.d(t,{usePathname:function(){return s.usePathname}}),n.o(s,"useRouter")&&n.d(t,{useRouter:function(){return s.useRouter}})},8877:function(){}},function(e){e.O(0,[404,231,971,23,744],function(){return e(e.s=7071)}),_N_E=e.O()}]);