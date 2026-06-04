(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11520,e=>{"use strict";let t,r;var o,a=e.i(10167);let s={data:""},i=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,n=/\/\*[^]*?\*\/|  +/g,l=/\n+/g,c=(e,t)=>{let r="",o="",a="";for(let s in e){let i=e[s];"@"==s[0]?"i"==s[1]?r=s+" "+i+";":o+="f"==s[1]?c(i,s):s+"{"+c(i,"k"==s[1]?"":t)+"}":"object"==typeof i?o+=c(i,t?t.replace(/([^,])+/g,e=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):s):null!=i&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=c.p?c.p(s,i):s+":"+i+";")}return r+(t&&a?t+"{"+a+"}":a)+o},d={},u=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+u(e[r]);return t}return e};function p(e){let t,r,o=this||{},a=e.call?e(o.p):e;return((e,t,r,o,a)=>{var s;let p=u(e),f=d[p]||(d[p]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(p));if(!d[f]){let t=p!==e?e:(e=>{let t,r,o=[{}];for(;t=i.exec(e.replace(n,""));)t[4]?o.shift():t[3]?(r=t[3].replace(l," ").trim(),o.unshift(o[0][r]=o[0][r]||{})):o[0][t[1]]=t[2].replace(l," ").trim();return o[0]})(e);d[f]=c(a?{["@keyframes "+f]:t}:t,r?"":"."+f)}let m=r&&d.g?d.g:null;return r&&(d.g=d[f]),s=d[f],m?t.data=t.data.replace(m,s):-1===t.data.indexOf(s)&&(t.data=o?s+t.data:t.data+s),f})(a.unshift?a.raw?(t=[].slice.call(arguments,1),r=o.p,a.reduce((e,o,a)=>{let s=t[a];if(s&&s.call){let e=s(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;s=t?"."+t:e&&"object"==typeof e?e.props?"":c(e,""):!1===e?"":e}return e+o+(null==s?"":s)},"")):a.reduce((e,t)=>Object.assign(e,t&&t.call?t(o.p):t),{}):a,(e=>{if("object"==typeof window){let t=(e?e.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return t.nonce=window.__nonce__,t.parentNode||(e||document.head).appendChild(t),t.firstChild}return e||s})(o.target),o.g,o.o,o.k)}p.bind({g:1});let f,m,h,g=p.bind({k:1});function y(e,t){let r=this||{};return function(){let o=arguments;function a(s,i){let n=Object.assign({},s),l=n.className||a.className;r.p=Object.assign({theme:m&&m()},n),r.o=/ *go\d+/.test(l),n.className=p.apply(r,o)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),h&&c[0]&&h(n),f(c,n)}return t?t(a):a}}var b=(e,t)=>"function"==typeof e?e(t):e,v=(t=0,()=>(++t).toString()),k=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},x="default",w=(e,t)=>{let{toastLimit:r}=e.settings;switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,r)};case 1:return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:o}=t;return w(e,{type:+!!e.toasts.find(e=>e.id===o.id),toast:o});case 3:let{toastId:a}=t;return{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,dismissed:!0,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+s}))}}},S=[],A={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},I={},T=(e,t=x)=>{I[t]=w(I[t]||A,e),S.forEach(([e,r])=>{e===t&&r(I[t])})},C=e=>Object.keys(I).forEach(t=>T(e,t)),E=(e=x)=>t=>{T(t,e)},_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},O=(e={},t=x)=>{let[r,o]=(0,a.useState)(I[t]||A),s=(0,a.useRef)(I[t]);(0,a.useEffect)(()=>(s.current!==I[t]&&o(I[t]),S.push([t,o]),()=>{let e=S.findIndex(([e])=>e===t);e>-1&&S.splice(e,1)}),[t]);let i=r.toasts.map(t=>{var r,o,a;return{...e,...e[t.type],...t,removeDelay:t.removeDelay||(null==(r=e[t.type])?void 0:r.removeDelay)||(null==e?void 0:e.removeDelay),duration:t.duration||(null==(o=e[t.type])?void 0:o.duration)||(null==e?void 0:e.duration)||_[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...r,toasts:i}},$=e=>(t,r)=>{let o,a=((e,t="blank",r)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||v()}))(t,e,r);return E(a.toasterId||(o=a.id,Object.keys(I).find(e=>I[e].toasts.some(e=>e.id===o))))({type:2,toast:a}),a.id},N=(e,t)=>$("blank")(e,t);N.error=$("error"),N.success=$("success"),N.loading=$("loading"),N.custom=$("custom"),N.dismiss=(e,t)=>{let r={type:3,toastId:e};t?E(t)(r):C(r)},N.dismissAll=e=>N.dismiss(void 0,e),N.remove=(e,t)=>{let r={type:4,toastId:e};t?E(t)(r):C(r)},N.removeAll=e=>N.remove(void 0,e),N.promise=(e,t,r)=>{let o=N.loading(t.loading,{...r,...null==r?void 0:r.loading});return"function"==typeof e&&(e=e()),e.then(e=>{let a=t.success?b(t.success,e):void 0;return a?N.success(a,{id:o,...r,...null==r?void 0:r.success}):N.dismiss(o),e}).catch(e=>{let a=t.error?b(t.error,e):void 0;a?N.error(a,{id:o,...r,...null==r?void 0:r.error}):N.dismiss(o)}),e};var j=1e3,P=(e,t="default")=>{let{toasts:r,pausedAt:o}=O(e,t),s=(0,a.useRef)(new Map).current,i=(0,a.useCallback)((e,t=j)=>{if(s.has(e))return;let r=setTimeout(()=>{s.delete(e),n({type:4,toastId:e})},t);s.set(e,r)},[]);(0,a.useEffect)(()=>{if(o)return;let e=Date.now(),a=r.map(r=>{if(r.duration===1/0)return;let o=(r.duration||0)+r.pauseDuration-(e-r.createdAt);if(o<0){r.visible&&N.dismiss(r.id);return}return setTimeout(()=>N.dismiss(r.id,t),o)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[r,o,t]);let n=(0,a.useCallback)(E(t),[t]),l=(0,a.useCallback)(()=>{n({type:5,time:Date.now()})},[n]),c=(0,a.useCallback)((e,t)=>{n({type:1,toast:{id:e,height:t}})},[n]),d=(0,a.useCallback)(()=>{o&&n({type:6,time:Date.now()})},[o,n]),u=(0,a.useCallback)((e,t)=>{let{reverseOrder:o=!1,gutter:a=8,defaultPosition:s}=t||{},i=r.filter(t=>(t.position||s)===(e.position||s)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...o?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[r]);return(0,a.useEffect)(()=>{r.forEach(e=>{if(e.dismissed)i(e.id,e.removeDelay);else{let t=s.get(e.id);t&&(clearTimeout(t),s.delete(e.id))}})},[r,i]),{toasts:r,handlers:{updateHeight:c,startPause:l,endPause:d,calculateOffset:u}}},D=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=g`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,z=g`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,R=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${D} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,J=g`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,M=y("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${J} 1s linear infinite;
`,U=g`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,B=g`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,H=y("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${U} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${B} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,F=y("div")`
  position: absolute;
`,W=y("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,K=g`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,q=y("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${K} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,V=({toast:e})=>{let{icon:t,type:r,iconTheme:o}=e;return void 0!==t?"string"==typeof t?a.createElement(q,null,t):t:"blank"===r?null:a.createElement(W,null,a.createElement(M,{...o}),"loading"!==r&&a.createElement(F,null,"error"===r?a.createElement(R,{...o}):a.createElement(H,{...o})))},Y=y("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Z=y("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,G=a.memo(({toast:e,position:t,style:r,children:o})=>{let s=e.height?((e,t)=>{let r=e.includes("top")?1:-1,[o,a]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*r}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*r}%,-1px) scale(.6); opacity:0;}
`];return{animation:t?`${g(o)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${g(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(e.position||t||"top-center",e.visible):{opacity:0},i=a.createElement(V,{toast:e}),n=a.createElement(Z,{...e.ariaProps},b(e.message,e));return a.createElement(Y,{className:e.className,style:{...s,...r,...e.style}},"function"==typeof o?o({icon:i,message:n}):a.createElement(a.Fragment,null,i,n))});o=a.createElement,c.p=void 0,f=o,m=void 0,h=void 0;var Q=({id:e,className:t,style:r,onHeightUpdate:o,children:s})=>{let i=a.useCallback(t=>{if(t){let r=()=>{o(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,o]);return a.createElement("div",{ref:i,className:t,style:r},s)},X=p`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ee=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:o,children:s,toasterId:i,containerStyle:n,containerClassName:l})=>{let{toasts:c,handlers:d}=P(r,i);return a.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...n},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},c.map(r=>{let i,n,l=r.position||t,c=d.calculateOffset(r,{reverseOrder:e,gutter:o,defaultPosition:t}),u=(i=l.includes("top"),n=l.includes("center")?{justifyContent:"center"}:l.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:k()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${c*(i?1:-1)}px)`,...i?{top:0}:{bottom:0},...n});return a.createElement(Q,{id:r.id,key:r.id,onHeightUpdate:d.updateHeight,className:r.visible?X:"",style:u},"custom"===r.type?b(r.message,r):s?s(r):a.createElement(G,{toast:r,position:l}))}))};e.s(["CheckmarkIcon",()=>H,"ErrorIcon",()=>R,"LoaderIcon",()=>M,"ToastBar",()=>G,"ToastIcon",()=>V,"Toaster",()=>ee,"default",()=>N,"resolveValue",()=>b,"toast",()=>N,"useToaster",()=>P,"useToasterStore",()=>O],11520)},22959,e=>{"use strict";let t="http://localhost:8080/api/v1".startsWith("/")?"http://localhost:8080/api/v1":"/api/v1";function r(e){if(t.startsWith("http"))return`${t}${e}`;let r=window.location.origin;return`${r}${t}${e}`}function o(e){return"object"==typeof e&&null!==e}let a=new class{setAccessTokenCookie(e){document.cookie=`access_token=${encodeURIComponent(e)}; Path=/; Max-Age=604800; SameSite=Lax`}clearAccessTokenCookie(){document.cookie="access_token=; Path=/; Max-Age=0; SameSite=Lax"}async login(e){try{let t,a=await fetch(r("/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),s=await a.text();try{t=s?JSON.parse(s):{}}catch{throw Error(`Invalid JSON response (status ${a.status})`)}if(!a.ok){let e=t;throw Error(e.error||e.message||"Login failed")}let i=o(t)&&o(t.data)?t.data:t;if(!o(i))throw console.error("Invalid response structure:",t),Error("Invalid response from server");let n=i.access_token,l=i.refresh_token,c=i.expires_in,d=i.user;if("string"!=typeof n||"string"!=typeof l||"number"!=typeof c||!o(d))throw console.error("Invalid response structure:",t),Error("Invalid response from server");return localStorage.setItem("access_token",i.access_token),localStorage.setItem("refresh_token",i.refresh_token),localStorage.setItem("user",JSON.stringify(i.user)),this.setAccessTokenCookie(i.access_token),i}catch(e){throw console.error("Login error:",e),e}}async logout(){let e=this.getAccessToken();if(e)try{await fetch(r("/logout"),{method:"POST",headers:{Authorization:`Bearer ${e}`}})}catch(e){console.error("Logout error:",e)}localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),this.clearAccessTokenCookie()}async refreshToken(){let e=this.getRefreshToken();if(!e)throw Error("No refresh token available");try{let t,a=await fetch(r("/auth/refresh"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({refresh_token:e})}),s=await a.text();try{t=s?JSON.parse(s):{}}catch{throw Error(`Invalid JSON response (status ${a.status})`)}if(!a.ok){let e=t;throw Error(e.error||e.message||"Token refresh failed")}let i=o(t)&&o(t.data)?t.data:t;if(!o(i)||"string"!=typeof i.access_token)throw Error("Invalid refresh response");return localStorage.setItem("access_token",i.access_token),localStorage.setItem("refresh_token",i.refresh_token),i.user&&localStorage.setItem("user",JSON.stringify(i.user)),this.setAccessTokenCookie(i.access_token),i}catch(e){throw console.error("Refresh token error:",e),this.clearTokens(),e}}getAccessToken(){let e=localStorage.getItem("access_token");return e?!function(e){try{let t=e.split(".")[1];if(!t)return!0;let r=t.replace(/-/g,"+").replace(/_/g,"/"),o=decodeURIComponent(atob(r).split("").map(e=>"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)).join("")),a=JSON.parse(o);if(!a.exp)return!1;let s=Math.floor(Date.now()/1e3);return a.exp<s+5}catch(e){return!0}}(e)?e:(console.warn("Access token expired, returning null"),null):null}getRefreshToken(){return localStorage.getItem("refresh_token")}getUser(){let e=localStorage.getItem("user");try{return e?JSON.parse(e):null}catch{return null}}isAuthenticated(){return!!this.getAccessToken()}clearTokens(){localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),this.clearAccessTokenCookie()}getAuthHeaders(){let e=this.getAccessToken();return{"Content-Type":"application/json",...e?{Authorization:`Bearer ${e}`}:{}}}};e.s(["authService",0,a])},40696,(e,t,r)=>{t.exports=e.r(22058)},35732,e=>{"use strict";var t=e.i(81551),r=e.i(10167),o=e.i(22959),a=e.i(40696);let s=(0,r.createContext)(void 0);function i({children:e}){let[i,n]=(0,r.useState)(null),[l,c]=(0,r.useState)(!0),d=(0,a.useRouter)(),u=(0,a.usePathname)();(0,r.useEffect)(()=>{let e,t;e=o.authService.getUser(),t=o.authService.getAccessToken(),e&&t?n(e):(n(null),o.authService.clearTokens(),u&&!u.startsWith("/login")&&d.push("/login")),c(!1)},[u,d]);let p=async e=>{try{console.log("AuthContext: Attempting login...");let t=await o.authService.login(e);console.log("AuthContext: Login successful",{user:t.user.full_name,role:t.user.role}),n(t.user);let r=t.user.role,a="/dashboard";switch(r){case"manager_hr":a="/dashboard/manager-hr";break;case"manager_departemen":a="/dashboard/manager-dept";break;case"admin_departemen":a="/dashboard/admin-dept";break;case"staf":a="/dashboard/staff";break;case"accountant":a="/dashboard/accountant";break;default:a="/dashboard"}console.log("AuthContext: Redirecting to",a),d.push(a)}catch(e){throw console.error("AuthContext: Login failed",e),n(null),e}},f=async()=>{try{await o.authService.logout()}catch(e){console.error("Logout error:",e)}finally{n(null),d.push("/login")}};return(0,t.jsx)(s.Provider,{value:{user:i,loading:l,login:p,logout:f,isAuthenticated:!!i},children:e})}e.s(["AuthProvider",()=>i,"useAuth",0,()=>{let e=(0,r.useContext)(s);if(void 0===e)throw Error("useAuth must be used within an AuthProvider");return e}])}]);