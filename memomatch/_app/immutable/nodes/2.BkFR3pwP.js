import{t as U,a as W}from"../chunks/3i1_BZIN.js";import{K as ae,M as se,O as Ye,Q as X,h as N,s as re,W as Qe,ai as pe,ao as ct,R as vt,i as ut,b as dt,w,v as _t,j as ht,r as we,k as le,f as B,Z as mt,m as je,d as Xe,p as yt,a1 as Ze,N as pt,A as gt,ap as xe,aq as fe,ar as bt,as as wt,at as xt,a0 as kt,au as Et,e as St,av as Ct,aw as At,V as Tt,ah as et,a as ge,ab as Mt,ax as zt,ay as Nt,az as Pt,aA as It,E as Lt,aB as Rt,aC as Ht,aD as Wt,I as Ot,aj as Ut,n as J,aE as Ft,a3 as tt,ae as P,af as M,aF as $t,ad as ne,a4 as rt,al as Q,an as V,y as Dt,u as Gt,aG as ke,ag as I,g as at,z as ie,aH as qt}from"../chunks/Kr6aEALi.js";import{a as Bt,d as be,s as j,b as Jt}from"../chunks/rf-ivgzE.js";import{i as K,s as Vt}from"../chunks/Bq6DvYQx.js";let Ee=!1;function st(){Ee||(Ee=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function nt(e){var t=Ye,r=X;ae(null),se(null);try{return e()}finally{ae(t),se(r)}}function Kt(e,t,r,a=r){e.addEventListener(t,()=>nt(r));const s=e.__on_r;s?e.__on_r=()=>{s(),a(!0)}:e.__on_r=()=>a(!0),st()}function Yt(e,t){N&&re(Qe(e)),pe(()=>{var r=t();for(var a in r){var s=r[a];s?e.style.setProperty(a,s):e.style.removeProperty(a)}}),ct(()=>{e.remove()})}function Qt(e,t){return t}function jt(e,t,r,a){for(var s=[],o=t.length,n=0;n<o;n++)xt(t[n].e,s,!0);var c=o>0&&s.length===0&&r!==null;if(c){var v=r.parentNode;kt(v),v.append(r),a.clear(),F(e,t[0].prev,t[o-1].next)}Et(s,()=>{for(var f=0;f<o;f++){var i=t[f];c||(a.delete(i.k),F(e,i.prev,i.next)),St(i.e,!c)}})}function Xt(e,t,r,a,s,o=null){var n=e,c={flags:t,items:new Map,first:null};{var v=e;n=N?re(Qe(v)):v.appendChild(vt())}N&&ut();var f=null,i=!1,m=_t(()=>{var l=r();return pt(l)?l:l==null?[]:Ze(l)});dt(()=>{var l=w(m),u=l.length;if(i&&u===0)return;i=u===0;let d=!1;if(N){var _=n.data===ht;_!==(u===0)&&(n=we(),re(n),le(!1),d=!0)}if(N){for(var b=null,h,x=0;x<u;x++){if(B.nodeType===8&&B.data===mt){n=B,d=!0,le(!1);break}var g=l[x],y=a(g,x);h=it(B,c,b,null,g,y,x,s,t,r),c.items.set(y,h),b=h}u>0&&re(we())}N||Zt(l,c,n,s,t,a,r),o!==null&&(u===0?f?je(f):f=Xe(()=>o(n)):f!==null&&yt(f,()=>{f=null})),d&&le(!0),w(m)}),N&&(n=B)}function Zt(e,t,r,a,s,o,n){var c=e.length,v=t.items,f=t.first,i=f,m,l=null,u=[],d=[],_,b,h,x;for(x=0;x<c;x+=1){if(_=e[x],b=o(_,x),h=v.get(b),h===void 0){var g=i?i.e.nodes_start:r;l=it(g,t,l,l===null?t.first:l.next,_,b,x,a,s,n),v.set(b,l),u=[],d=[],i=l.next;continue}if(er(h,_,x),(h.e.f&fe)!==0&&je(h.e),h!==i){if(m!==void 0&&m.has(h)){if(u.length<d.length){var y=d[0],S;l=y.prev;var C=u[0],p=u[u.length-1];for(S=0;S<u.length;S+=1)Se(u[S],y,r);for(S=0;S<d.length;S+=1)m.delete(d[S]);F(t,C.prev,p.next),F(t,l,C),F(t,p,y),i=y,l=p,x-=1,u=[],d=[]}else m.delete(h),Se(h,i,r),F(t,h.prev,h.next),F(t,h,l===null?t.first:l.next),F(t,l,h),l=h;continue}for(u=[],d=[];i!==null&&i.k!==b;)(i.e.f&fe)===0&&(m??(m=new Set)).add(i),d.push(i),i=i.next;if(i===null)continue;h=i}u.push(h),l=h,i=h.next}if(i!==null||m!==void 0){for(var E=m===void 0?[]:Ze(m);i!==null;)(i.e.f&fe)===0&&E.push(i),i=i.next;var T=E.length;if(T>0){var H=c===0?r:null;jt(t,E,H,v)}}X.first=t.first&&t.first.e,X.last=l&&l.e}function er(e,t,r,a){wt(e.v,t),e.i=r}function it(e,t,r,a,s,o,n,c,v,f){var i=(v&Ct)!==0,m=(v&At)===0,l=i?m?gt(s):xe(s):s,u=(v&bt)===0?n:xe(n),d={i:u,v:l,k:o,a:null,e:null,prev:r,next:a};try{return d.e=Xe(()=>c(e,l,u,f),N),d.e.prev=r&&r.e,d.e.next=a&&a.e,r===null?t.first=d:(r.next=d,r.e.next=d.e),a!==null&&(a.prev=d,a.e.prev=d.e),d}finally{}}function Se(e,t,r){for(var a=e.next?e.next.e.nodes_start:r,s=t?t.e.nodes_start:r,o=e.e.nodes_start;o!==a;){var n=Tt(o);s.before(o),o=n}}function F(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function tr(e,t,r){et(()=>{var a=ge(()=>t(e,r==null?void 0:r())||{});if(r&&(a!=null&&a.update)){var s=!1,o={};pe(()=>{var n=r();Mt(n),s&&zt(o,n)&&(o=n,a.update(n))}),s=!0}if(a!=null&&a.destroy)return()=>a.destroy()})}const Ce=[...` 	
\r\f \v\uFEFF`];function rr(e,t,r){var a=""+e;if(r){for(var s in r)if(r[s])a=a?a+" "+s:s;else if(a.length)for(var o=s.length,n=0;(n=a.indexOf(s,n))>=0;){var c=n+o;(n===0||Ce.includes(a[n-1]))&&(c===a.length||Ce.includes(a[c]))?a=(n===0?"":a.substring(0,n))+a.substring(c+1):n=c}}return a===""?null:a}function ar(e,t,r,a,s,o){var n=e.__className;if(N||n!==r){var c=rr(r,a,o);(!N||c!==e.getAttribute("class"))&&(c==null?e.removeAttribute("class"):e.className=c),e.__className=r}else if(o&&s!==o)for(var v in o){var f=!!o[v];(s==null||f!==!!s[v])&&e.classList.toggle(v,f)}return o}const sr=Symbol("is custom element"),nr=Symbol("is html");function ir(e){if(N){var t=!1,r=()=>{if(!t){if(t=!0,e.hasAttribute("value")){var a=e.value;Ae(e,"value",null),e.value=a}if(e.hasAttribute("checked")){var s=e.checked;Ae(e,"checked",null),e.checked=s}}};e.__on_r=r,Nt(r),st()}}function Ae(e,t,r,a){var s=or(e);N&&(s[t]=e.getAttribute(t),t==="src"||t==="srcset"||t==="href"&&e.nodeName==="LINK")||s[t]!==(s[t]=r)&&(t==="loading"&&(e[Pt]=r),e.removeAttribute(t))}function or(e){return e.__attributes??(e.__attributes={[sr]:e.nodeName.includes("-"),[nr]:e.namespaceURI===It})}const lr=()=>performance.now(),O={tick:e=>requestAnimationFrame(e),now:()=>lr(),tasks:new Set};function ot(){const e=O.now();O.tasks.forEach(t=>{t.c(e)||(O.tasks.delete(t),t.f())}),O.tasks.size!==0&&O.tick(ot)}function fr(e){let t;return O.tasks.size===0&&O.tick(ot),{promise:new Promise(r=>{O.tasks.add(t={c:e,f:r})}),abort(){O.tasks.delete(t)}}}function ee(e,t){nt(()=>{e.dispatchEvent(new CustomEvent(t))})}function cr(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(r=>r[0].toUpperCase()+r.slice(1)).join("")}function Te(e){const t={},r=e.split(";");for(const a of r){const[s,o]=a.split(":");if(!s||o===void 0)break;const n=cr(s.trim());t[n]=o.trim()}return t}const vr=e=>e;function G(e,t,r,a){var s=(e&Wt)!==0,o="both",n,c=t.inert,v=t.style.overflow,f,i;function m(){var b=Ye,h=X;ae(null),se(null);try{return n??(n=r()(t,(a==null?void 0:a())??{},{direction:o}))}finally{ae(b),se(h)}}var l={is_global:s,in(){t.inert=c,ee(t,"introstart"),f=ye(t,m(),i,1,()=>{ee(t,"introend"),f==null||f.abort(),f=n=void 0,t.style.overflow=v})},out(b){t.inert=!0,ee(t,"outrostart"),i=ye(t,m(),f,0,()=>{ee(t,"outroend"),b==null||b()})},stop:()=>{f==null||f.abort(),i==null||i.abort()}},u=X;if((u.transitions??(u.transitions=[])).push(l),Bt){var d=s;if(!d){for(var _=u.parent;_&&(_.f&Lt)!==0;)for(;(_=_.parent)&&(_.f&Rt)===0;);d=!_||(_.f&Ht)!==0}d&&et(()=>{ge(()=>l.in())})}}function ye(e,t,r,a,s){var o=a===1;if(Ot(t)){var n,c=!1;return Ut(()=>{if(!c){var b=t({direction:o?"in":"out"});n=ye(e,b,r,a,s)}}),{abort:()=>{c=!0,n==null||n.abort()},deactivate:()=>n.deactivate(),reset:()=>n.reset(),t:()=>n.t()}}if(r==null||r.deactivate(),!(t!=null&&t.duration))return s(),{abort:J,deactivate:J,reset:J,t:()=>a};const{delay:v=0,css:f,tick:i,easing:m=vr}=t;var l=[];if(o&&r===void 0&&(i&&i(0,1),f)){var u=Te(f(0,1));l.push(u,u)}var d=()=>1-a,_=e.animate(l,{duration:v});return _.onfinish=()=>{var b=(r==null?void 0:r.t())??1-a;r==null||r.abort();var h=a-b,x=t.duration*Math.abs(h),g=[];if(x>0){var y=!1;if(f)for(var S=Math.ceil(x/16.666666666666668),C=0;C<=S;C+=1){var p=b+h*m(C/S),E=Te(f(p,1-p));g.push(E),y||(y=E.overflow==="hidden")}y&&(e.style.overflow="hidden"),d=()=>{var T=_.currentTime;return b+h*m(T/x)},i&&fr(()=>{if(_.playState!=="running")return!1;var T=d();return i(T,1-T),!0})}_=e.animate(g,{duration:x,fill:"forwards"}),_.onfinish=()=>{d=()=>a,i==null||i(a,1-a),s()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=J)},deactivate:()=>{s=J},reset:()=>{a===0&&(i==null||i(1,0))},t:()=>d()}}function ur(e,t,r=t){var a=Ft();Kt(e,"input",s=>{var o=s?e.defaultValue:e.value;if(o=ce(e)?ve(o):o,r(o),a&&o!==(o=t())){var n=e.selectionStart,c=e.selectionEnd;e.value=o??"",c!==null&&(e.selectionStart=n,e.selectionEnd=Math.min(c,e.value.length))}}),(N&&e.defaultValue!==e.value||ge(t)==null&&e.value)&&r(ce(e)?ve(e.value):e.value),pe(()=>{var s=t();ce(e)&&s===ve(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function ce(e){var t=e.type;return t==="number"||t==="range"}function ve(e){return e===""?null:+e}const dr=e=>e;function lt(e){const t=e-1;return t*t*t+1}function Me(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function _r(e,{delay:t=0,duration:r=400,easing:a=dr}={}){const s=+getComputedStyle(e).opacity;return{delay:t,duration:r,easing:a,css:o=>`opacity: ${o*s}`}}function ze(e,{delay:t=0,duration:r=400,easing:a=lt,x:s=0,y:o=0,opacity:n=0}={}){const c=getComputedStyle(e),v=+c.opacity,f=c.transform==="none"?"":c.transform,i=v*(1-n),[m,l]=Me(s),[u,d]=Me(o);return{delay:t,duration:r,easing:a,css:(_,b)=>`
			transform: ${f} translate(${(1-_)*m}${l}, ${(1-_)*u}${d});
			opacity: ${v-i*b}`}}function ue(e,{delay:t=0,duration:r=400,easing:a=lt,start:s=0,opacity:o=0}={}){const n=getComputedStyle(e),c=+n.opacity,v=n.transform==="none"?"":n.transform,f=1-s,i=c*(1-o);return{delay:t,duration:r,easing:a,css:(m,l)=>`
			transform: ${v} scale(${1-f*l});
			opacity: ${c-i*l}
		`}}function hr(){const e=[];for(let t=33;t<=126;t++)e.push(String.fromCharCode(t));return e}function Ne(e){for(let t=e.length-1;t>=1;t--){const r=Math.floor(Math.random()*(t+1));[e[t],e[r]]=[e[r],e[t]]}return e}function mr(e){const t=Ne(hr()).slice(0,e*e/2).flatMap(r=>[r,r]).map(r=>({symbol:r,flipped:!1}));return Ne(t)}function Pe(e){const t=localStorage==null?void 0:localStorage.getItem(`record_${e}`);return t!==null?JSON.parse(t):null}function yr(e,t,r,a){localStorage==null||localStorage.setItem(`record_${e}`,JSON.stringify({elapsed:t,elapsedStr:r,steps:a}))}var pr=(e,t)=>t.clickHandler(t.index),gr=U('<button><div class="inner svelte-yr88eh"><div class="front svelte-yr88eh"><div class="content svelte-yr88eh"> </div></div> <div class="back svelte-yr88eh"><div class="content svelte-yr88eh">&nbsp;</div></div></div></button>');function br(e,t){tt(t,!0);var r=gr();let a;r.__click=[pr,t];var s=P(r),o=P(s),n=P(o),c=P(n,!0);M(n),M(o),$t(2),M(s),M(r),ne(v=>{a=ar(r,1,"card svelte-yr88eh",null,a,v),j(c,t.symbol)},[()=>({flipped:t.flipped})]),W(e,r),rt()}be(["click"]);var Ie="mz3PUW_p",Le=["#FFC700","#FF0000","#2E3191","#41BBC7"],Re=3500,He=.5,We=150,Oe="mix",Ue=12,Fe="",$e=!0,De=800,Ge=1600;function de(e,t={}){let{colors:r=Le,duration:a=Re,force:s=He,particleCount:o=We,particleShape:n=Oe,particleSize:c=Ue,particleClass:v=Fe,destroyAfterDone:f=$e,stageHeight:i=De,stageWidth:m=Ge}=t;(function(g){if(document.querySelector("style[data-neoconfetti]"))return;const y=_e("style");y.dataset.neoconfetti="",y.textContent=g,he(document.head,y)})('@keyframes mz3PUW_ya{to{translate:0 var(--sh)}}@keyframes mz3PUW_xa{to{translate:var(--xlp)0}}@keyframes mz3PUW_r{50%{rotate:var(--hr)180deg}to{rotate:var(--r)360deg}}.mz3PUW_c{z-index:1200;width:0;height:0;position:relative;overflow:visible}.mz3PUW_p{animation:xa var(--dc)forwards cubic-bezier(var(--x1),var(--x2),var(--x3),var(--x4));animation-name:mz3PUW_xa}.mz3PUW_p>div{animation:ya var(--dc)forwards cubic-bezier(var(--y1),var(--y2),var(--y3),var(--y4));width:var(--w);height:var(--h);animation-name:mz3PUW_ya;position:absolute;top:0;left:0}.mz3PUW_p>div:before{content:"";background-color:var(--bgc);animation:r var(--rd)infinite linear;border-radius:var(--br);width:100%;height:100%;animation-name:mz3PUW_r;display:block}'),e.classList.add("mz3PUW_c"),e.style.setProperty("--sh",i+"px");let l=[],u=[];const d=()=>Y(R()*(Sr-1)),_=(g,y)=>n!=="rectangles"&&(g==="circles"||Cr(y));function b(g,y){const S=d(),C=_(n,S),p=(H,k)=>g.style.setProperty(H,k+"");p("--xlp",me(te(Ve(y,90)-180),0,180,-m/2,m/2)+"px"),p("--dc",a-Y(1e3*R())+"ms");const E=R()<xr?D(R()*kr,2):0;p("--x1",E),p("--x2",-1*E),p("--x3",E),p("--x4",D(te(me(te(Ve(y,90)-180),0,180,-1,1)),4)),p("--y1",D(R()*Be,4)),p("--y2",D(R()*s*(ft()?1:-1),4)),p("--y3",Be),p("--y4",D(Er(me(te(y-180),0,180,s,-s),0),4)),p("--w",(C?c:Y(4*R())+c/2)+"px"),p("--h",(C?c:Y(2*R())+c)+"px");const T=S.toString(2).padStart(3,"0").split("");p("--hr",T.map(H=>+H/2+"").join(" ")),p("--r",T.join(" ")),p("--rd",D(R()*(wr-qe)+qe)+"ms"),p("--br",C?"50%":0)}let h;function x(){e.innerHTML="",clearTimeout(h),l=Je(o,r),u=function(g,y=[],S){const C=[];for(const{color:p}of y){const E=_e("div");E.className=`${Ie} ${S}`,E.style.setProperty("--bgc",p);const T=_e("div");he(E,T),he(g,E),C.push(E)}return C}(e,l,v);for(const[g,y]of Ke(u))b(y,l[+g].degree);h=setTimeout(()=>{f&&(e.innerHTML="")},a)}return x(),{update(g){const y=g.particleCount??We,S=g.particleShape??Oe,C=g.particleSize??Ue,p=g.particleClass??Fe,E=g.colors??Le,T=g.stageHeight??De,H=g.duration??Re,k=g.force??He,A=g.stageWidth??Ge,z=g.destroyAfterDone??$e;l=Je(y,E);let $=!1;if(y===o){u=Array.from(e.querySelectorAll(`.${Ie}`));for(const[oe,{color:Z}]of Ke(l)){const L=u[+oe];JSON.stringify(r)!==JSON.stringify(E)&&L.style.setProperty("--bgc",Z),S!==n&&L.style.setProperty("--br",_(S,d())?"50%":"0"),p!==v&&(v&&L.classList.remove(v),p&&L.classList.add(p))}}else $=!0;f&&!z&&clearTimeout(h),e.style.setProperty("--sh",T+"px"),a=H,r=E,s=k,o=y,n=S,c=C,v=p,f=z,i=T,m=A,$&&x()},destroy(){e.innerHTML="",clearTimeout(h)}}}var qe=200,wr=800,xr=.1,kr=.3,Be=.5,te=Math.abs,R=Math.random,Y=Math.round,Er=Math.max,_e=e=>document.createElement(e),he=(e,t)=>e.appendChild(t),Je=(e,t)=>Array.from({length:e},(r,a)=>({color:t[a%t.length],degree:360*a/e})),D=(e,t=2)=>Y((e+Number.EPSILON)*10**t)/10**t,me=(e,t,r,a,s)=>(e-t)*(s-a)/(r-t)+a,Ve=(e,t)=>e+t>360?e+t-360:e+t,ft=()=>R()>.5,Ke=Object.entries,Sr=6,Cr=e=>e!==1&&ft(),Ar=U('<h2 class="svelte-1sr39o"> </h2>'),Tr=U('<h3 class="svelte-1sr39o">🏆 New record! 🏆</h3>'),Mr=U('<h1 class="svelte-1sr39o">You won!</h1> <!> <button class="action">Return to title</button>',1),zr=U('<div style="position: absolute; left: 50%; top: 30%;"></div>'),Nr=U('<div class="game svelte-1sr39o"><aside class="stats svelte-1sr39o"><!> <h2 class="svelte-1sr39o"> </h2> <h2 class="svelte-1sr39o"> </h2> <!></aside> <main class="deck svelte-1sr39o"></main> <!></div>');function Pr(e,t){tt(t,!0);let r=Q(0),a=V(()=>w(r)/60|0),s=V(()=>w(r)%60),o=V(()=>`${w(a)<10?"0":""}${w(a)}:${w(s)<10?"0":""}${w(s)}`),n=Q(0),c=Dt(mr(t.size)),v=Q(0),f=V(()=>w(v)==c.length),i=V(()=>{if(!w(f))return!1;const k=Pe(t.size);return k===null||w(r)<k.elapsed&&w(n)<k.steps?(yr(t.size,w(r),w(o),w(n)),!0):!1}),m=Pe(t.size);const l=[];function u(k){const A=c[k];A.flipped||l.length==2||(ke(n),A.flipped=!0,l.push(A),l.length==2&&(l[0].symbol!==l[1].symbol?setTimeout(()=>{l.forEach(z=>{z.flipped=!1}),l.splice(0,l.length)},1e3):(ie(v,w(v)+2),l.splice(0,l.length))))}Gt(()=>{const k=setInterval(()=>{w(f)||ke(r)},1e3);return()=>{clearInterval(k)}});var d=Nr(),_=P(d),b=P(_);{var h=k=>{var A=Ar(),z=P(A);M(A),ne(()=>j(z,`🏅 ${m.steps??""} steps in ${m.elapsedStr??""}`)),W(k,A)};K(b,k=>{m&&k(h)})}var x=I(b,2),g=P(x);M(x);var y=I(x,2),S=P(y);M(y);var C=I(y,2);{var p=k=>{var A=Mr(),z=at(A),$=I(z,2);{var oe=L=>{var q=Tr();G(3,q,()=>ue),W(L,q)};K($,L=>{w(i)&&L(oe)})}var Z=I($,2);Z.__click=function(...L){var q;(q=t.onGameReset)==null||q.apply(this,L)},G(3,z,()=>ue),G(3,Z,()=>ue),W(k,A)};K(C,k=>{w(f)&&k(p)})}M(_);var E=I(_,2);Xt(E,21,()=>c,Qt,(k,A,z)=>{br(k,Vt(()=>w(A),{index:z,clickHandler:u}))}),M(E);var T=I(E,2);{var H=k=>{var A=zr();tr(A,(z,$)=>de==null?void 0:de(z,$),()=>({force:.7,duration:3e3,stageWidth:window.innerWidth,stageHeight:window.innerHeight,colors:["#61e882","#ec9f5c","#f2cde8"]})),W(k,A)};K(T,k=>{w(f)&&k(H)})}M(d),ne(()=>{j(g,`Time: ${w(o)??""}`),j(S,`Steps: ${w(n)??""}`)}),W(e,d),rt()}be(["click"]);var Ir=e=>{e.preventDefault()},Lr=(e,t)=>ie(t,!0),Rr=U(`<a class="repo-link svelte-1b9ho67" target="_blank" href="https://github.com/rczy/memomatch"><img src="./github-mark.svg" alt="GitHub Repository" class="svelte-1b9ho67"></a> <div class="wrapper svelte-1b9ho67"><h1 class="svelte-1b9ho67">MeMoMatch</h1> <h2 class="svelte-1b9ho67">A memory cards game on a(n) <input type="number" min="2" max="10" class="svelte-1b9ho67"> </h2> <button class="action">Let's play!</button></div>`,1),Hr=U('<div class="svelte-1b9ho67"><svelte-css-wrapper style="display: contents"><!></svelte-css-wrapper></div>'),Wr=U('<div class="container svelte-1b9ho67"><!></div>');function Dr(e){let t=Q(!1),r=Q(4);function a(){ie(t,!1)}var s=Wr();Jt(v=>{qt.title="MeMoMatch"});var o=P(s);{var n=v=>{var f=Rr(),i=at(f),m=I(i,2),l=I(P(m),2),u=I(P(l));ir(u),u.__keydown=[Ir];var d=I(u);M(l);var _=I(l,2);_.__click=[Lr,t],M(m),ne(()=>j(d,` × ${w(r)??""} grid.`)),G(3,i,()=>ze,()=>({x:10,y:-10})),ur(u,()=>w(r),b=>ie(r,b)),G(3,m,()=>ze,()=>({y:-200})),W(v,f)},c=v=>{var f=Hr(),i=P(f);Yt(i,()=>({"--size":w(r)})),Pr(i.lastChild,{get size(){return w(r)},onGameReset:a}),M(i),M(f),G(3,f,()=>_r),W(v,f)};K(o,v=>{w(t)?v(c,!1):v(n)})}M(s),W(e,s)}be(["keydown","click"]);export{Dr as component};
