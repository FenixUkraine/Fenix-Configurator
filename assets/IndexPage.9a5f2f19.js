import{c as m,h as y,k as u}from"./QBtn.ef373c68.js";import{p as o,c as i,h as v,a as l,q as x,I as _,g as $,a1 as Q,r as k,L as P,M as b,N as B,O as s,R as c,S as F,$ as d,d as f}from"./index.224dca76.js";var S=m({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:a}){const{proxy:{$q:n}}=$(),e=l(x,o);if(e===o)return console.error("QPage needs to be a deep child of QLayout"),o;if(l(_,o)===o)return console.error("QPage needs to be child of QPageContainer"),o;const g=i(()=>{const r=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof t.styleFn=="function"){const C=e.isContainer.value===!0?e.containerHeight.value:n.screen.height;return t.styleFn(r,C)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-r+"px":n.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":n.screen.height-r+"px"}}),h=i(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:h.value,style:g.value},y(a.default))}});const q=Q("counter",()=>{const t=k(0),a=i(()=>t.value*2);function n(){t.value++}return{count:t,doubleCount:a,increment:n}}),I=P({name:"IndexPage"}),N=Object.assign(I,{setup(t){const a=q();return(n,e)=>(b(),B(S,{class:"flex flex-center"},{default:s(()=>[c(" Counter: "+F(d(a).count)+" ",1),f(u,{onClick:d(a).increment},{default:s(()=>[c("Increment")]),_:1},8,["onClick"]),f(u,{onClick:e[0]||(e[0]=p=>n.$ble.connect())},{default:s(()=>[c("Connect BLE")]),_:1})]),_:1}))}});export{N as default};
