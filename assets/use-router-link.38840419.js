import{c,P as T,Q as U,h as f,n as H,g as K,R as X,C as Y,S as G,U as J,E as W,V as Z}from"./index.49bf5c4b.js";const O={xs:18,sm:24,md:32,lg:38,xl:46},ee={size:String};function te(e,t=O){return c(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const Q=e=>T(U(e)),ne=e=>T(e);function re(e,t){return e!==void 0&&e()||t}function xe(e,t){if(e!==void 0){const r=e();if(r!=null)return r.slice()}return t}function E(e,t){return e!==void 0?t.concat(e()):t}function $e(e,t){return e===void 0?t:t!==void 0?t.concat(e()):e()}function be(e,t,r,n,s,u){t.key=n+s;const a=f(e,t,r);return s===!0?H(a,u()):a}const A="0 0 24 24",j=e=>e,C=e=>`ionicons ${e}`,V={"mdi-":e=>`mdi ${e}`,"icon-":j,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":C,"ion-ios":C,"ion-logo":C,"iconfont ":j,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},F={o_:"-outlined",r_:"-round",s_:"-sharp"},N={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},ie=new RegExp("^("+Object.keys(V).join("|")+")"),se=new RegExp("^("+Object.keys(F).join("|")+")"),z=new RegExp("^("+Object.keys(N).join("|")+")"),ae=/^[Mm]\s?[-+]?\.?\d/,oe=/^img:/,ue=/^svguse:/,le=/^ion-/,ce=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Se=Q({name:"QIcon",props:{...ee,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=K(),n=te(e),s=c(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),u=c(()=>{let a,i=e.name;if(i==="none"||!i)return{none:!0};if(r.iconMapFn!==null){const o=r.iconMapFn(i);if(o!==void 0)if(o.icon!==void 0){if(i=o.icon,i==="none"||!i)return{none:!0}}else return{cls:o.cls,content:o.content!==void 0?o.content:" "}}if(ae.test(i)===!0){const[o,p=A]=i.split("|");return{svg:!0,viewBox:p,nodes:o.split("&&").map(y=>{const[m,k,h]=y.split("@@");return f("path",{style:k,d:m,transform:h})})}}if(oe.test(i)===!0)return{img:!0,src:i.substring(4)};if(ue.test(i)===!0){const[o,p=A]=i.split("|");return{svguse:!0,src:o.substring(7),viewBox:p}}let g=" ";const d=i.match(ie);if(d!==null)a=V[d[1]](i);else if(ce.test(i)===!0)a=i;else if(le.test(i)===!0)a=`ionicons ion-${r.platform.is.ios===!0?"ios":"md"}${i.substring(3)}`;else if(z.test(i)===!0){a="notranslate material-symbols";const o=i.match(z);o!==null&&(i=i.substring(6),a+=N[o[1]]),g=i}else{a="notranslate material-icons";const o=i.match(se);o!==null&&(i=i.substring(2),a+=F[o[1]]),g=i}return{cls:a,content:g}});return()=>{const a={class:s.value,style:n.value,"aria-hidden":"true",role:"presentation"};return u.value.none===!0?f(e.tag,a,re(t.default)):u.value.img===!0?f("span",a,E(t.default,[f("img",{src:u.value.src})])):u.value.svg===!0?f("span",a,E(t.default,[f("svg",{viewBox:u.value.viewBox||"0 0 24 24"},u.value.nodes)])):u.value.svguse===!0?f("span",a,E(t.default,[f("svg",{viewBox:u.value.viewBox},[f("use",{"xlink:href":u.value.src})])])):(u.value.cls!==void 0&&(a.class+=" "+u.value.cls),f(e.tag,a,E(t.default,[u.value.content])))}}});const fe={size:{type:[Number,String],default:"1em"},color:String};function de(e){return{cSize:c(()=>e.size in O?`${O[e.size]}px`:e.size),classes:c(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var Re=Q({name:"QSpinner",props:{...fe,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:r}=de(e);return()=>f("svg",{class:r.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[f("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function pe(e,t){const r=e.style;for(const n in t)r[n]=t[n]}function _e(e){if(e==null)return;if(typeof e=="string")try{return document.querySelector(e)||void 0}catch{return}const t=X(e);if(t)return t.$el||t}function qe(e,t){if(e==null||e.contains(t)===!0)return!0;for(let r=e.nextElementSibling;r!==null;r=r.nextElementSibling)if(r.contains(t))return!0;return!1}function ve(e,t=250){let r=!1,n;return function(){return r===!1&&(r=!0,setTimeout(()=>{r=!1},t),n=e.apply(this,arguments)),n}}function B(e,t,r,n){r.modifiers.stop===!0&&W(e);const s=r.modifiers.color;let u=r.modifiers.center;u=u===!0||n===!0;const a=document.createElement("span"),i=document.createElement("span"),g=Z(e),{left:d,top:o,width:p,height:y}=t.getBoundingClientRect(),m=Math.sqrt(p*p+y*y),k=m/2,h=`${(p-m)/2}px`,_=u?h:`${g.left-d-k}px`,q=`${(y-m)/2}px`,w=u?q:`${g.top-o-k}px`;i.className="q-ripple__inner",pe(i,{height:`${m}px`,width:`${m}px`,transform:`translate3d(${_},${w},0) scale3d(.2,.2,1)`,opacity:0}),a.className=`q-ripple${s?" text-"+s:""}`,a.setAttribute("dir","ltr"),a.appendChild(i),t.appendChild(a);const S=()=>{a.remove(),clearTimeout(R)};r.abort.push(S);let R=setTimeout(()=>{i.classList.add("q-ripple__inner--enter"),i.style.transform=`translate3d(${h},${q},0) scale3d(1,1,1)`,i.style.opacity=.2,R=setTimeout(()=>{i.classList.remove("q-ripple__inner--enter"),i.classList.add("q-ripple__inner--leave"),i.style.opacity=0,R=setTimeout(()=>{a.remove(),r.abort.splice(r.abort.indexOf(S),1)},275)},250)},50)}function L(e,{modifiers:t,value:r,arg:n}){const s=Object.assign({},e.cfg.ripple,t,r);e.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||n,keyCodes:[].concat(s.keyCodes||13)}}var we=ne({name:"ripple",beforeMount(e,t){const r=t.instance.$.appContext.config.globalProperties.$q.config||{};if(r.ripple===!1)return;const n={cfg:r,enabled:t.value!==!1,modifiers:{},abort:[],start(s){n.enabled===!0&&s.qSkipRipple!==!0&&s.type===(n.modifiers.early===!0?"pointerdown":"click")&&B(s,e,n,s.qKeyEvent===!0)},keystart:ve(s=>{n.enabled===!0&&s.qSkipRipple!==!0&&Y(s,n.modifiers.keyCodes)===!0&&s.type===`key${n.modifiers.early===!0?"down":"up"}`&&B(s,e,n,!0)},300)};L(n,t),e.__qripple=n,G(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const r=e.__qripple;r!==void 0&&(r.enabled=t.value!==!1,r.enabled===!0&&Object(t.value)===t.value&&L(r,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(r=>{r()}),J(t,"main"),delete e._qripple)}});function Ee(e){if(Object(e.$parent)===e.$parent)return e.$parent;let{parent:t}=e.$;for(;Object(t)===t;){if(Object(t.proxy)===t.proxy)return t.proxy;t=t.parent}}function me(e){return e.appContext.config.globalProperties.$router!==void 0}function Ce(e){return e.isUnmounted===!0||e.isDeactivated===!0}function M(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function I(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ge(e,t){for(const r in t){const n=t[r],s=e[r];if(typeof n=="string"){if(n!==s)return!1}else if(Array.isArray(s)===!1||s.length!==n.length||n.some((u,a)=>u!==s[a]))return!1}return!0}function D(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((r,n)=>r===t[n]):e.length===1&&e[0]===t}function he(e,t){return Array.isArray(e)===!0?D(e,t):Array.isArray(t)===!0?D(t,e):e===t}function ye(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(he(e[r],t[r])===!1)return!1;return!0}const Oe={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function Pe({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const r=K(),{props:n,proxy:s,emit:u}=r,a=me(r),i=c(()=>n.disable!==!0&&n.href!==void 0),g=t===!0?c(()=>a===!0&&n.disable!==!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):c(()=>a===!0&&i.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),d=c(()=>g.value===!0?w(n.to):null),o=c(()=>d.value!==null),p=c(()=>i.value===!0||o.value===!0),y=c(()=>n.type==="a"||p.value===!0?"a":n.tag||e||"div"),m=c(()=>i.value===!0?{href:n.href,target:n.target}:o.value===!0?{href:d.value.href,target:n.target}:{}),k=c(()=>{if(o.value===!1)return-1;const{matched:l}=d.value,{length:v}=l,x=l[v-1];if(x===void 0)return-1;const $=s.$route.matched;if($.length===0)return-1;const b=$.findIndex(I.bind(null,x));if(b>-1)return b;const P=M(l[v-2]);return v>1&&M(x)===P&&$[$.length-1].path!==P?$.findIndex(I.bind(null,l[v-2])):b}),h=c(()=>o.value===!0&&k.value!==-1&&ge(s.$route.params,d.value.params)),_=c(()=>h.value===!0&&k.value===s.$route.matched.length-1&&ye(s.$route.params,d.value.params)),q=c(()=>o.value===!0?_.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":h.value===!0?` ${n.activeClass}`:"":"");function w(l){try{return s.$router.resolve(l)}catch{}return null}function S(l,{returnRouterError:v,to:x=n.to,replace:$=n.replace}={}){if(n.disable===!0)return l.preventDefault(),Promise.resolve(!1);if(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey||l.button!==void 0&&l.button!==0||n.target==="_blank")return Promise.resolve(!1);l.preventDefault();const b=s.$router[$===!0?"replace":"push"](x);return v===!0?b:b.then(()=>{}).catch(()=>{})}function R(l){if(o.value===!0){const v=x=>S(l,x);u("click",l,v),l.defaultPrevented!==!0&&v()}else u("click",l)}return{hasRouterLink:o,hasHrefLink:i,hasLink:p,linkTag:y,resolvedLink:d,linkIsActive:h,linkIsExactActive:_,linkClass:q,linkAttrs:m,getLink:w,navigateToRouterLink:S,navigateOnClick:R}}export{Se as Q,we as R,te as a,E as b,Q as c,Oe as d,Pe as e,Re as f,re as g,$e as h,xe as i,be as j,ne as k,_e as l,pe as m,Ce as n,qe as o,Ee as p,ee as u,me as v};