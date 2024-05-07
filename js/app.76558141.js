(function(){var e={8191:function(){PASSENGER_TYPE={ADULT:{code:"1",desc:"成人"},CHILD:{code:"2",desc:"儿童"},STUDENT:{code:"3",desc:"学生"}},TRAIN_TYPE={G:{code:"G",desc:"高铁",priceRate:"1.2"},D:{code:"D",desc:"动车",priceRate:"1"},K:{code:"K",desc:"快速",priceRate:"0.8"}},SEAT_TYPE={YDZ:{code:"1",desc:"一等座",price:"0.4"},EDZ:{code:"2",desc:"二等座",price:"0.3"},RW:{code:"3",desc:"软卧",price:"0.6"},YW:{code:"4",desc:"硬卧",price:"0.5"}},SEAT_COL={YDZ_A:{code:"A",desc:"A",type:"1"},YDZ_C:{code:"C",desc:"C",type:"1"},YDZ_D:{code:"D",desc:"D",type:"1"},YDZ_F:{code:"F",desc:"F",type:"1"},EDZ_A:{code:"A",desc:"A",type:"2"},EDZ_B:{code:"B",desc:"B",type:"2"},EDZ_C:{code:"C",desc:"C",type:"2"},EDZ_D:{code:"D",desc:"D",type:"2"},EDZ_F:{code:"F",desc:"F",type:"2"},RW_UP:{code:"S",desc:"S",type:"3"},RW_MIDDLE:{code:"Z",desc:"Z",type:"3"},RW_DOWN:{code:"X",desc:"X",type:"3"},YW_UP:{code:"S",desc:"S",type:"4"},YW_MIDDLE:{code:"Z",desc:"Z",type:"4"},YW_DOWN:{code:"X",desc:"X",type:"4"}},PASSENGER_TYPE_ARRAY=[{code:"1",desc:"成人"},{code:"2",desc:"儿童"},{code:"3",desc:"学生"}],TRAIN_TYPE_ARRAY=[{code:"G",desc:"高铁",priceRate:"1.2"},{code:"D",desc:"动车",priceRate:"1"},{code:"K",desc:"快速",priceRate:"0.8"}],SEAT_TYPE_ARRAY=[{code:"1",desc:"一等座",price:"0.4"},{code:"2",desc:"二等座",price:"0.3"},{code:"3",desc:"软卧",price:"0.6"},{code:"4",desc:"硬卧",price:"0.5"}],SEAT_COL_ARRAY=[{code:"A",desc:"A",type:"1"},{code:"C",desc:"C",type:"1"},{code:"D",desc:"D",type:"1"},{code:"F",desc:"F",type:"1"},{code:"A",desc:"A",type:"2"},{code:"B",desc:"B",type:"2"},{code:"C",desc:"C",type:"2"},{code:"D",desc:"D",type:"2"},{code:"F",desc:"F",type:"2"},{code:"S",desc:"S",type:"3"},{code:"Z",desc:"Z",type:"3"},{code:"X",desc:"X",type:"3"},{code:"S",desc:"S",type:"4"},{code:"Z",desc:"Z",type:"4"},{code:"X",desc:"X",type:"4"}]},2359:function(e,t,n){"use strict";n(4114);var o=n(5130),c=n(6768);function r(e,t){const n=(0,c.g2)("router-view");return(0,c.uX)(),(0,c.Wv)(n)}var d=n(1241);const i={},s=(0,d.A)(i,[["render",r]]);var u=s,a=n(9325),p=n(5129),f=n(3176),l=n(5108),m=(n(3611),n(4044)),h=n(8355);n(8191);const y=(0,o.Ef)(u);y.use(f.Ay).use(p.A).use(a.A).mount("#app");const g=m;for(const b in g)y.component(b,g[b]);h.A.interceptors.request.use((function(e){console.log("请求参数：",e);const t=p.A.state.member.token;return t&&(e.headers.token=t,console.log("请求headers增加token:",t)),e}),(e=>Promise.reject(e))),h.A.interceptors.response.use((function(e){return console.log("返回结果：",e),e}),(e=>{console.log("返回错误：",e);const t=e.response,n=t.status;return 401===n&&(console.log("未登录或登录超时，跳到登录页"),p.A.commit("setMember",{}),l.A.error({description:"未登录或登录超时"}),a.A.push("/login")),Promise.reject(e)})),h.A.defaults.baseURL="https://8.138.89.87",console.log("环境：","production"),console.log("服务端：","https://8.138.89.87")},9325:function(e,t,n){"use strict";var o=n(1387),c=n(5129),r=n(5108);const d=[{path:"/login",component:()=>n.e(338).then(n.bind(n,4338))},{path:"/",component:()=>n.e(464).then(n.bind(n,8464)),meta:{loginRequire:!0},children:[{path:"welcome",component:()=>n.e(233).then(n.bind(n,2233))},{path:"passenger",component:()=>n.e(645).then(n.bind(n,645))},{path:"ticket",component:()=>n.e(421).then(n.bind(n,7421))},{path:"order",component:()=>n.e(853).then(n.bind(n,7853))},{path:"my-ticket",component:()=>n.e(257).then(n.bind(n,2257))}]},{path:"",redirect:"/welcome"}],i=(0,o.aE)({history:(0,o.LA)("/"),routes:d});i.beforeEach(((e,t,n)=>{if(e.matched.some((function(e){return console.log(e,"是否需要登录校验：",e.meta.loginRequire||!1),e.meta.loginRequire}))){const e=c.A.state.member;console.log("页面登录校验开始：",e),e.token?n():(console.log("用户未登录或登录超时！"),r.A.error({description:"未登录或登录超时"}),n("/login"))}else n()})),t.A=i},5129:function(e,t,n){"use strict";var o=n(782);const c="MEMBER";t.A=(0,o.y$)({state:{member:window.SessionStorage.get(c)||{}},getters:{},mutations:{setMember(e,t){e.member=t,window.SessionStorage.set(c,t)}},actions:{},modules:{}})}},t={};function n(o){var c=t[o];if(void 0!==c)return c.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,c,r){if(!o){var d=1/0;for(a=0;a<e.length;a++){o=e[a][0],c=e[a][1],r=e[a][2];for(var i=!0,s=0;s<o.length;s++)(!1&r||d>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(i=!1,r<d&&(d=r));if(i){e.splice(a--,1);var u=c();void 0!==u&&(t=u)}}return t}r=r||0;for(var a=e.length;a>0&&e[a-1][2]>r;a--)e[a]=e[a-1];e[a]=[o,c,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{233:"d5a4de3c",257:"7285176e",338:"0efc8eec",421:"a93e8a10",464:"b41509d0",645:"0df64d2c",853:"31d06621"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{338:"4d88df2f",464:"9ada40be",853:"3f31ddad"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="web:";n.l=function(o,c,r,d){if(e[o])e[o].push(c);else{var i,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),a=0;a<u.length;a++){var p=u[a];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+r){i=p;break}}i||(s=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+r),i.src=o),e[o]=[c];var f=function(t,n){i.onerror=i.onload=null,clearTimeout(l);var c=e[o];if(delete e[o],i.parentNode&&i.parentNode.removeChild(i),c&&c.forEach((function(e){return e(n)})),t)return t(n)},l=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,c,r){var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",n.nc&&(d.nonce=n.nc);var i=function(n){if(d.onerror=d.onload=null,"load"===n.type)c();else{var o=n&&n.type,i=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+": "+i+")");s.name="ChunkLoadError",s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=i,d.parentNode&&d.parentNode.removeChild(d),r(s)}};return d.onerror=d.onload=i,d.href=t,o?o.parentNode.insertBefore(d,o.nextSibling):document.head.appendChild(d),d},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var c=n[o],r=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(r===e||r===t))return c}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],r=c.getAttribute("data-href");if(r===e||r===t)return c}},o=function(o){return new Promise((function(c,r){var d=n.miniCssF(o),i=n.p+d;if(t(d,i))return c();e(o,i,null,c,r)}))},c={524:0};n.f.miniCss=function(e,t){var n={338:1,464:1,853:1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=o(e).then((function(){c[e]=0}),(function(t){throw delete c[e],t})))}}}(),function(){var e={524:0};n.f.j=function(t,o){var c=n.o(e,t)?e[t]:void 0;if(0!==c)if(c)o.push(c[2]);else{var r=new Promise((function(n,o){c=e[t]=[n,o]}));o.push(c[2]=r);var d=n.p+n.u(t),i=new Error,s=function(o){if(n.o(e,t)&&(c=e[t],0!==c&&(e[t]=void 0),c)){var r=o&&("load"===o.type?"missing":o.type),d=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+r+": "+d+")",i.name="ChunkLoadError",i.type=r,i.request=d,c[1](i)}};n.l(d,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var c,r,d=o[0],i=o[1],s=o[2],u=0;if(d.some((function(t){return 0!==e[t]}))){for(c in i)n.o(i,c)&&(n.m[c]=i[c]);if(s)var a=s(n)}for(t&&t(o);u<d.length;u++)r=d[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(a)},o=self["webpackChunkweb"]=self["webpackChunkweb"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(2359)}));o=n.O(o)})();
//# sourceMappingURL=app.76558141.js.map