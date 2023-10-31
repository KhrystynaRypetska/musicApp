(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ap(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const et={},Eo=[],Jn=()=>{},zP=()=>!1,QP=/^on[^a-z]/,hd=t=>QP.test(t),lp=t=>t.startsWith("onUpdate:"),kt=Object.assign,cp=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},YP=Object.prototype.hasOwnProperty,qe=(t,e)=>YP.call(t,e),_e=Array.isArray,To=t=>oc(t)==="[object Map]",fd=t=>oc(t)==="[object Set]",Jg=t=>oc(t)==="[object Date]",Ce=t=>typeof t=="function",At=t=>typeof t=="string",vl=t=>typeof t=="symbol",Xe=t=>t!==null&&typeof t=="object",mT=t=>Xe(t)&&Ce(t.then)&&Ce(t.catch),pT=Object.prototype.toString,oc=t=>pT.call(t),XP=t=>oc(t).slice(8,-1),_T=t=>oc(t)==="[object Object]",up=t=>At(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,cu=ap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),md=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},JP=/-(\w)/g,wr=md(t=>t.replace(JP,(e,n)=>n?n.toUpperCase():"")),ZP=/\B([A-Z])/g,ra=md(t=>t.replace(ZP,"-$1").toLowerCase()),pd=md(t=>t.charAt(0).toUpperCase()+t.slice(1)),Lh=md(t=>t?`on${pd(t)}`:""),Il=(t,e)=>!Object.is(t,e),uu=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Au=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gT=t=>{const e=parseFloat(t);return isNaN(e)?t:e},eC=t=>{const e=At(t)?Number(t):NaN;return isNaN(e)?t:e};let Zg;const Rf=()=>Zg||(Zg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function El(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=At(r)?iC(r):El(r);if(i)for(const s in i)e[s]=i[s]}return e}else{if(At(t))return t;if(Xe(t))return t}}const tC=/;(?![^(]*\))/g,nC=/:([^]+)/,rC=/\/\*[^]*?\*\//g;function iC(t){const e={};return t.replace(rC,"").split(tC).forEach(n=>{if(n){const r=n.split(nC);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Fr(t){let e="";if(At(t))e=t;else if(_e(t))for(let n=0;n<t.length;n++){const r=Fr(t[n]);r&&(e+=r+" ")}else if(Xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const sC="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",oC=ap(sC);function yT(t){return!!t||t===""}function aC(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=_d(t[r],e[r]);return n}function _d(t,e){if(t===e)return!0;let n=Jg(t),r=Jg(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=vl(t),r=vl(e),n||r)return t===e;if(n=_e(t),r=_e(e),n||r)return n&&r?aC(t,e):!1;if(n=Xe(t),r=Xe(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!_d(t[o],e[o]))return!1}}return String(t)===String(e)}function lC(t,e){return t.findIndex(n=>_d(n,e))}const wi=t=>At(t)?t:t==null?"":_e(t)||Xe(t)&&(t.toString===pT||!Ce(t.toString))?JSON.stringify(t,vT,2):String(t),vT=(t,e)=>e&&e.__v_isRef?vT(t,e.value):To(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:fd(e)?{[`Set(${e.size})`]:[...e.values()]}:Xe(e)&&!_e(e)&&!_T(e)?String(e):e;let Nn;class IT{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Nn,!e&&Nn&&(this.index=(Nn.scopes||(Nn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Nn;try{return Nn=this,e()}finally{Nn=n}}}on(){Nn=this}off(){Nn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function dp(t){return new IT(t)}function cC(t,e=Nn){e&&e.active&&e.effects.push(t)}function ET(){return Nn}function uC(t){Nn&&Nn.cleanups.push(t)}const hp=t=>{const e=new Set(t);return e.w=0,e.n=0,e},TT=t=>(t.w&Ci)>0,wT=t=>(t.n&Ci)>0,dC=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ci},hC=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];TT(i)&&!wT(i)?i.delete(t):e[n++]=i,i.w&=~Ci,i.n&=~Ci}e.length=n}},Ru=new WeakMap;let qa=0,Ci=1;const Sf=30;let zn;const Rs=Symbol(""),Pf=Symbol("");class fp{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,cC(this,r)}run(){if(!this.active)return this.fn();let e=zn,n=bi;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=zn,zn=this,bi=!0,Ci=1<<++qa,qa<=Sf?dC(this):ey(this),this.fn()}finally{qa<=Sf&&hC(this),Ci=1<<--qa,zn=this.parent,bi=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){zn===this?this.deferStop=!0:this.active&&(ey(this),this.onStop&&this.onStop(),this.active=!1)}}function ey(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let bi=!0;const bT=[];function ia(){bT.push(bi),bi=!1}function sa(){const t=bT.pop();bi=t===void 0?!0:t}function kn(t,e,n){if(bi&&zn){let r=Ru.get(t);r||Ru.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=hp()),AT(i)}}function AT(t,e){let n=!1;qa<=Sf?wT(t)||(t.n|=Ci,n=!TT(t)):n=!t.has(zn),n&&(t.add(zn),zn.deps.push(t))}function jr(t,e,n,r,i,s){const o=Ru.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&_e(t)){const l=Number(r);o.forEach((u,h)=>{(h==="length"||h>=l)&&a.push(u)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":_e(t)?up(n)&&a.push(o.get("length")):(a.push(o.get(Rs)),To(t)&&a.push(o.get(Pf)));break;case"delete":_e(t)||(a.push(o.get(Rs)),To(t)&&a.push(o.get(Pf)));break;case"set":To(t)&&a.push(o.get(Rs));break}if(a.length===1)a[0]&&Cf(a[0]);else{const l=[];for(const u of a)u&&l.push(...u);Cf(hp(l))}}function Cf(t,e){const n=_e(t)?t:[...t];for(const r of n)r.computed&&ty(r);for(const r of n)r.computed||ty(r)}function ty(t,e){(t!==zn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function fC(t,e){var n;return(n=Ru.get(t))==null?void 0:n.get(e)}const mC=ap("__proto__,__v_isRef,__isVue"),RT=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vl)),pC=mp(),_C=mp(!1,!0),gC=mp(!0),ny=yC();function yC(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=je(this);for(let s=0,o=this.length;s<o;s++)kn(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(je)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ia();const r=je(this)[e].apply(this,n);return sa(),r}}),t}function vC(t){const e=je(this);return kn(e,"has",t),e.hasOwnProperty(t)}function mp(t=!1,e=!1){return function(r,i,s){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(t?e?LC:OT:e?kT:CT).get(r))return r;const o=_e(r);if(!t){if(o&&qe(ny,i))return Reflect.get(ny,i,s);if(i==="hasOwnProperty")return vC}const a=Reflect.get(r,i,s);return(vl(i)?RT.has(i):mC(i))||(t||kn(r,"get",i),e)?a:Ye(a)?o&&up(i)?a:a.value:Xe(a)?t?gp(a):qr(a):a}}const IC=ST(),EC=ST(!0);function ST(t=!1){return function(n,r,i,s){let o=n[r];if(Lo(o)&&Ye(o)&&!Ye(i))return!1;if(!t&&(!Su(i)&&!Lo(i)&&(o=je(o),i=je(i)),!_e(n)&&Ye(o)&&!Ye(i)))return o.value=i,!0;const a=_e(n)&&up(r)?Number(r)<n.length:qe(n,r),l=Reflect.set(n,r,i,s);return n===je(s)&&(a?Il(i,o)&&jr(n,"set",r,i):jr(n,"add",r,i)),l}}function TC(t,e){const n=qe(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&jr(t,"delete",e,void 0),r}function wC(t,e){const n=Reflect.has(t,e);return(!vl(e)||!RT.has(e))&&kn(t,"has",e),n}function bC(t){return kn(t,"iterate",_e(t)?"length":Rs),Reflect.ownKeys(t)}const PT={get:pC,set:IC,deleteProperty:TC,has:wC,ownKeys:bC},AC={get:gC,set(t,e){return!0},deleteProperty(t,e){return!0}},RC=kt({},PT,{get:_C,set:EC}),pp=t=>t,gd=t=>Reflect.getPrototypeOf(t);function Uc(t,e,n=!1,r=!1){t=t.__v_raw;const i=je(t),s=je(e);n||(e!==s&&kn(i,"get",e),kn(i,"get",s));const{has:o}=gd(i),a=r?pp:n?vp:Tl;if(o.call(i,e))return a(t.get(e));if(o.call(i,s))return a(t.get(s));t!==i&&t.get(e)}function $c(t,e=!1){const n=this.__v_raw,r=je(n),i=je(t);return e||(t!==i&&kn(r,"has",t),kn(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Bc(t,e=!1){return t=t.__v_raw,!e&&kn(je(t),"iterate",Rs),Reflect.get(t,"size",t)}function ry(t){t=je(t);const e=je(this);return gd(e).has.call(e,t)||(e.add(t),jr(e,"add",t,t)),this}function iy(t,e){e=je(e);const n=je(this),{has:r,get:i}=gd(n);let s=r.call(n,t);s||(t=je(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Il(e,o)&&jr(n,"set",t,e):jr(n,"add",t,e),this}function sy(t){const e=je(this),{has:n,get:r}=gd(e);let i=n.call(e,t);i||(t=je(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&jr(e,"delete",t,void 0),s}function oy(){const t=je(this),e=t.size!==0,n=t.clear();return e&&jr(t,"clear",void 0,void 0),n}function jc(t,e){return function(r,i){const s=this,o=s.__v_raw,a=je(o),l=e?pp:t?vp:Tl;return!t&&kn(a,"iterate",Rs),o.forEach((u,h)=>r.call(i,l(u),l(h),s))}}function qc(t,e,n){return function(...r){const i=this.__v_raw,s=je(i),o=To(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=i[t](...r),h=n?pp:e?vp:Tl;return!e&&kn(s,"iterate",l?Pf:Rs),{next(){const{value:c,done:d}=u.next();return d?{value:c,done:d}:{value:a?[h(c[0]),h(c[1])]:h(c),done:d}},[Symbol.iterator](){return this}}}}function ri(t){return function(...e){return t==="delete"?!1:this}}function SC(){const t={get(s){return Uc(this,s)},get size(){return Bc(this)},has:$c,add:ry,set:iy,delete:sy,clear:oy,forEach:jc(!1,!1)},e={get(s){return Uc(this,s,!1,!0)},get size(){return Bc(this)},has:$c,add:ry,set:iy,delete:sy,clear:oy,forEach:jc(!1,!0)},n={get(s){return Uc(this,s,!0)},get size(){return Bc(this,!0)},has(s){return $c.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:jc(!0,!1)},r={get(s){return Uc(this,s,!0,!0)},get size(){return Bc(this,!0)},has(s){return $c.call(this,s,!0)},add:ri("add"),set:ri("set"),delete:ri("delete"),clear:ri("clear"),forEach:jc(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=qc(s,!1,!1),n[s]=qc(s,!0,!1),e[s]=qc(s,!1,!0),r[s]=qc(s,!0,!0)}),[t,n,e,r]}const[PC,CC,kC,OC]=SC();function _p(t,e){const n=e?t?OC:kC:t?CC:PC;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(qe(n,i)&&i in r?n:r,i,s)}const NC={get:_p(!1,!1)},xC={get:_p(!1,!0)},DC={get:_p(!0,!1)},CT=new WeakMap,kT=new WeakMap,OT=new WeakMap,LC=new WeakMap;function VC(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function MC(t){return t.__v_skip||!Object.isExtensible(t)?0:VC(XP(t))}function qr(t){return Lo(t)?t:yp(t,!1,PT,NC,CT)}function NT(t){return yp(t,!1,RC,xC,kT)}function gp(t){return yp(t,!0,AC,DC,OT)}function yp(t,e,n,r,i){if(!Xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=MC(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return i.set(t,a),a}function Ai(t){return Lo(t)?Ai(t.__v_raw):!!(t&&t.__v_isReactive)}function Lo(t){return!!(t&&t.__v_isReadonly)}function Su(t){return!!(t&&t.__v_isShallow)}function xT(t){return Ai(t)||Lo(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function yd(t){return Au(t,"__v_skip",!0),t}const Tl=t=>Xe(t)?qr(t):t,vp=t=>Xe(t)?gp(t):t;function DT(t){bi&&zn&&(t=je(t),AT(t.dep||(t.dep=hp())))}function LT(t,e){t=je(t);const n=t.dep;n&&Cf(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function nt(t){return VT(t,!1)}function Ip(t){return VT(t,!0)}function VT(t,e){return Ye(t)?t:new FC(t,e)}class FC{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:Tl(e)}get value(){return DT(this),this._value}set value(e){const n=this.__v_isShallow||Su(e)||Lo(e);e=n?e:je(e),Il(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Tl(e),LT(this))}}function Ve(t){return Ye(t)?t.value:t}function ht(t){return Ce(t)?t():Ve(t)}const UC={get:(t,e,n)=>Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function MT(t){return Ai(t)?t:new Proxy(t,UC)}function $C(t){const e=_e(t)?new Array(t.length):{};for(const n in t)e[n]=FT(t,n);return e}class BC{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return fC(je(this._object),this._key)}}class jC{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function _i(t,e,n){return Ye(t)?t:Ce(t)?new jC(t):Xe(t)&&arguments.length>1?FT(t,e,n):nt(t)}function FT(t,e,n){const r=t[e];return Ye(r)?r:new BC(t,e,n)}class qC{constructor(e,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fp(e,()=>{this._dirty||(this._dirty=!0,LT(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=je(this);return DT(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function WC(t,e,n=!1){let r,i;const s=Ce(t);return s?(r=t,i=Jn):(r=t.get,i=t.set),new qC(r,i,s||!i,n)}function Ri(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){vd(s,e,n)}return i}function qn(t,e,n,r){if(Ce(t)){const s=Ri(t,e,n,r);return s&&mT(s)&&s.catch(o=>{vd(o,e,n)}),s}const i=[];for(let s=0;s<t.length;s++)i.push(qn(t[s],e,n,r));return i}function vd(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=n;for(;s;){const u=s.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Ri(l,null,10,[t,o,a]);return}}HC(t,n,i,r)}function HC(t,e,n,r=!0){console.error(t)}let wl=!1,kf=!1;const nn=[];let lr=0;const wo=[];let Or=null,ds=0;const UT=Promise.resolve();let Ep=null;function Nr(t){const e=Ep||UT;return t?e.then(this?t.bind(this):t):e}function GC(t){let e=lr+1,n=nn.length;for(;e<n;){const r=e+n>>>1;bl(nn[r])<t?e=r+1:n=r}return e}function Tp(t){(!nn.length||!nn.includes(t,wl&&t.allowRecurse?lr+1:lr))&&(t.id==null?nn.push(t):nn.splice(GC(t.id),0,t),$T())}function $T(){!wl&&!kf&&(kf=!0,Ep=UT.then(jT))}function KC(t){const e=nn.indexOf(t);e>lr&&nn.splice(e,1)}function zC(t){_e(t)?wo.push(...t):(!Or||!Or.includes(t,t.allowRecurse?ds+1:ds))&&wo.push(t),$T()}function ay(t,e=wl?lr+1:0){for(;e<nn.length;e++){const n=nn[e];n&&n.pre&&(nn.splice(e,1),e--,n())}}function BT(t){if(wo.length){const e=[...new Set(wo)];if(wo.length=0,Or){Or.push(...e);return}for(Or=e,Or.sort((n,r)=>bl(n)-bl(r)),ds=0;ds<Or.length;ds++)Or[ds]();Or=null,ds=0}}const bl=t=>t.id==null?1/0:t.id,QC=(t,e)=>{const n=bl(t)-bl(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function jT(t){kf=!1,wl=!0,nn.sort(QC);const e=Jn;try{for(lr=0;lr<nn.length;lr++){const n=nn[lr];n&&n.active!==!1&&Ri(n,null,14)}}finally{lr=0,nn.length=0,BT(),wl=!1,Ep=null,(nn.length||wo.length)&&jT()}}function YC(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||et;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:c,trim:d}=r[h]||et;d&&(i=n.map(f=>At(f)?f.trim():f)),c&&(i=n.map(gT))}let a,l=r[a=Lh(e)]||r[a=Lh(wr(e))];!l&&s&&(l=r[a=Lh(ra(e))]),l&&qn(l,t,6,i);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,qn(u,t,6,i)}}function qT(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},a=!1;if(!Ce(t)){const l=u=>{const h=qT(u,e,!0);h&&(a=!0,kt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(Xe(t)&&r.set(t,null),null):(_e(s)?s.forEach(l=>o[l]=null):kt(o,s),Xe(t)&&r.set(t,o),o)}function Id(t,e){return!t||!hd(e)?!1:(e=e.slice(2).replace(/Once$/,""),qe(t,e[0].toLowerCase()+e.slice(1))||qe(t,ra(e))||qe(t,e))}let bn=null,WT=null;function Pu(t){const e=bn;return bn=t,WT=t&&t.type.__scopeId||null,e}function Qn(t,e=bn,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&vy(-1);const s=Pu(e);let o;try{o=t(...i)}finally{Pu(s),r._d&&vy(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Vh(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:u,render:h,renderCache:c,data:d,setupState:f,ctx:m,inheritAttrs:y}=t;let v,p;const I=Pu(t);try{if(n.shapeFlag&4){const E=i||r;v=or(h.call(E,E,c,s,f,d,m)),p=l}else{const E=e;v=or(E.length>1?E(s,{attrs:l,slots:a,emit:u}):E(s,null)),p=e.props?l:XC(l)}}catch(E){tl.length=0,vd(E,t,1),v=Se(Zn)}let b=v;if(p&&y!==!1){const E=Object.keys(p),{shapeFlag:P}=b;E.length&&P&7&&(o&&E.some(lp)&&(p=JC(p,o)),b=ki(b,p))}return n.dirs&&(b=ki(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),v=b,Pu(I),v}const XC=t=>{let e;for(const n in t)(n==="class"||n==="style"||hd(n))&&((e||(e={}))[n]=t[n]);return e},JC=(t,e)=>{const n={};for(const r in t)(!lp(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ZC(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ly(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let c=0;c<h.length;c++){const d=h[c];if(o[d]!==r[d]&&!Id(u,d))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ly(r,o,u):!0:!!o;return!1}function ly(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!Id(n,s))return!0}return!1}function ek({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const tk=t=>t.__isSuspense;function nk(t,e){e&&e.pendingBranch?_e(t)?e.effects.push(...t):e.effects.push(t):zC(t)}function rk(t,e){return wp(t,null,e)}const Wc={};function sn(t,e,n){return wp(t,e,n)}function wp(t,e,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=et){var a;const l=ET()===((a=Nt)==null?void 0:a.scope)?Nt:null;let u,h=!1,c=!1;if(Ye(t)?(u=()=>t.value,h=Su(t)):Ai(t)?(u=()=>t,r=!0):_e(t)?(c=!0,h=t.some(E=>Ai(E)||Su(E)),u=()=>t.map(E=>{if(Ye(E))return E.value;if(Ai(E))return vs(E);if(Ce(E))return Ri(E,l,2)})):Ce(t)?e?u=()=>Ri(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return d&&d(),qn(t,l,3,[f])}:u=Jn,e&&r){const E=u;u=()=>vs(E())}let d,f=E=>{d=I.onStop=()=>{Ri(E,l,4)}},m;if(Sl)if(f=Jn,e?n&&qn(e,l,3,[u(),c?[]:void 0,f]):u(),i==="sync"){const E=Yk();m=E.__watcherHandles||(E.__watcherHandles=[])}else return Jn;let y=c?new Array(t.length).fill(Wc):Wc;const v=()=>{if(I.active)if(e){const E=I.run();(r||h||(c?E.some((P,k)=>Il(P,y[k])):Il(E,y)))&&(d&&d(),qn(e,l,3,[E,y===Wc?void 0:c&&y[0]===Wc?[]:y,f]),y=E)}else I.run()};v.allowRecurse=!!e;let p;i==="sync"?p=v:i==="post"?p=()=>In(v,l&&l.suspense):(v.pre=!0,l&&(v.id=l.uid),p=()=>Tp(v));const I=new fp(u,p);e?n?v():y=I.run():i==="post"?In(I.run.bind(I),l&&l.suspense):I.run();const b=()=>{I.stop(),l&&l.scope&&cp(l.scope.effects,I)};return m&&m.push(b),b}function ik(t,e,n){const r=this.proxy,i=At(t)?t.includes(".")?HT(r,t):()=>r[t]:t.bind(r,r);let s;Ce(e)?s=e:(s=e.handler,n=e);const o=Nt;Vo(this);const a=wp(i,s.bind(r),n);return o?Vo(o):Ss(),a}function HT(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function vs(t,e){if(!Xe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))vs(t.value,e);else if(_e(t))for(let n=0;n<t.length;n++)vs(t[n],e);else if(fd(t)||To(t))t.forEach(n=>{vs(n,e)});else if(_T(t))for(const n in t)vs(t[n],e);return t}function HK(t,e){const n=bn;if(n===null)return t;const r=Ad(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,l,u=et]=e[s];o&&(Ce(o)&&(o={mounted:o,updated:o}),o.deep&&vs(a),i.push({dir:o,instance:r,value:a,oldValue:void 0,arg:l,modifiers:u}))}return t}function rs(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(ia(),qn(l,n,8,[t.el,a,t,e]),sa())}}function sk(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ac(()=>{t.isMounted=!0}),bp(()=>{t.isUnmounting=!0}),t}const Fn=[Function,Array],GT={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Fn,onEnter:Fn,onAfterEnter:Fn,onEnterCancelled:Fn,onBeforeLeave:Fn,onLeave:Fn,onAfterLeave:Fn,onLeaveCancelled:Fn,onBeforeAppear:Fn,onAppear:Fn,onAfterAppear:Fn,onAppearCancelled:Fn},ok={name:"BaseTransition",props:GT,setup(t,{slots:e}){const n=br(),r=sk();let i;return()=>{const s=e.default&&zT(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const y of s)if(y.type!==Zn){o=y;break}}const a=je(t),{mode:l}=a;if(r.isLeaving)return Mh(o);const u=cy(o);if(!u)return Mh(o);const h=Of(u,a,r,n);Nf(u,h);const c=n.subTree,d=c&&cy(c);let f=!1;const{getTransitionKey:m}=u.type;if(m){const y=m();i===void 0?i=y:y!==i&&(i=y,f=!0)}if(d&&d.type!==Zn&&(!hs(u,d)||f)){const y=Of(d,a,r,n);if(Nf(d,y),l==="out-in")return r.isLeaving=!0,y.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Mh(o);l==="in-out"&&u.type!==Zn&&(y.delayLeave=(v,p,I)=>{const b=KT(r,d);b[String(d.key)]=d,v._leaveCb=()=>{p(),v._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=I})}return o}}},ak=ok;function KT(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Of(t,e,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:u,onEnterCancelled:h,onBeforeLeave:c,onLeave:d,onAfterLeave:f,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:p,onAppearCancelled:I}=e,b=String(t.key),E=KT(n,t),P=(V,F)=>{V&&qn(V,r,9,F)},k=(V,F)=>{const X=F[1];P(V,F),_e(V)?V.every(pe=>pe.length<=1)&&X():V.length<=1&&X()},O={mode:s,persisted:o,beforeEnter(V){let F=a;if(!n.isMounted)if(i)F=y||a;else return;V._leaveCb&&V._leaveCb(!0);const X=E[b];X&&hs(t,X)&&X.el._leaveCb&&X.el._leaveCb(),P(F,[V])},enter(V){let F=l,X=u,pe=h;if(!n.isMounted)if(i)F=v||l,X=p||u,pe=I||h;else return;let K=!1;const ue=V._enterCb=Te=>{K||(K=!0,Te?P(pe,[V]):P(X,[V]),O.delayedLeave&&O.delayedLeave(),V._enterCb=void 0)};F?k(F,[V,ue]):ue()},leave(V,F){const X=String(t.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return F();P(c,[V]);let pe=!1;const K=V._leaveCb=ue=>{pe||(pe=!0,F(),ue?P(m,[V]):P(f,[V]),V._leaveCb=void 0,E[X]===t&&delete E[X])};E[X]=t,d?k(d,[V,K]):K()},clone(V){return Of(V,e,n,r)}};return O}function Mh(t){if(Ed(t))return t=ki(t),t.children=null,t}function cy(t){return Ed(t)?t.children?t.children[0]:void 0:t}function Nf(t,e){t.shapeFlag&6&&t.component?Nf(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function zT(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Gt?(o.patchFlag&128&&i++,r=r.concat(zT(o.children,e,a))):(e||o.type!==Zn)&&r.push(a!=null?ki(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Hi(t,e){return Ce(t)?(()=>kt({name:t.name},e,{setup:t}))():t}const du=t=>!!t.type.__asyncLoader,Ed=t=>t.type.__isKeepAlive;function lk(t,e){QT(t,"a",e)}function ck(t,e){QT(t,"da",e)}function QT(t,e,n=Nt){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Td(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Ed(i.parent.vnode)&&uk(r,e,n,i),i=i.parent}}function uk(t,e,n,r){const i=Td(e,t,r,!0);Ap(()=>{cp(r[e],i)},n)}function Td(t,e,n=Nt,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;ia(),Vo(n);const a=qn(e,n,t,o);return Ss(),sa(),a});return r?i.unshift(s):i.push(s),s}}const Qr=t=>(e,n=Nt)=>(!Sl||t==="sp")&&Td(t,(...r)=>e(...r),n),YT=Qr("bm"),ac=Qr("m"),dk=Qr("bu"),hk=Qr("u"),bp=Qr("bum"),Ap=Qr("um"),fk=Qr("sp"),mk=Qr("rtg"),pk=Qr("rtc");function _k(t,e=Nt){Td("ec",t,e)}const Rp="components",gk="directives";function An(t,e){return Sp(Rp,t,!0,e)||t}const XT=Symbol.for("v-ndc");function wd(t){return At(t)?Sp(Rp,t,!1)||t:t||XT}function GK(t){return Sp(gk,t)}function Sp(t,e,n=!0,r=!1){const i=bn||Nt;if(i){const s=i.type;if(t===Rp){const a=Kk(s,!1);if(a&&(a===e||a===wr(e)||a===pd(wr(e))))return s}const o=uy(i[t]||s[t],e)||uy(i.appContext[t],e);return!o&&r?s:o}}function uy(t,e){return t&&(t[e]||t[wr(e)]||t[pd(wr(e))])}function yk(t,e,n,r){let i;const s=n&&n[r];if(_e(t)||At(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(Xe(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const u=o[a];i[a]=e(t[u],u,a,s&&s[a])}}else i=[];return n&&(n[r]=i),i}const xf=t=>t?cw(t)?Ad(t)||t.proxy:xf(t.parent):null,el=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xf(t.parent),$root:t=>xf(t.root),$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>Tp(t.update)),$nextTick:t=>t.n||(t.n=Nr.bind(t.proxy)),$watch:t=>ik.bind(t)}),Fh=(t,e)=>t!==et&&!t.__isScriptSetup&&qe(t,e),vk={get({_:t},e){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(Fh(r,e))return o[e]=1,r[e];if(i!==et&&qe(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&qe(u,e))return o[e]=3,s[e];if(n!==et&&qe(n,e))return o[e]=4,n[e];Df&&(o[e]=0)}}const h=el[e];let c,d;if(h)return e==="$attrs"&&kn(t,"get",e),h(t);if((c=a.__cssModules)&&(c=c[e]))return c;if(n!==et&&qe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,qe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return Fh(i,e)?(i[e]=n,!0):r!==et&&qe(r,e)?(r[e]=n,!0):qe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return!!n[o]||t!==et&&qe(t,o)||Fh(e,o)||(a=s[0])&&qe(a,o)||qe(r,o)||qe(el,o)||qe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:qe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function dy(t){return _e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Df=!0;function Ik(t){const e=Pp(t),n=t.proxy,r=t.ctx;Df=!1,e.beforeCreate&&hy(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:c,mounted:d,beforeUpdate:f,updated:m,activated:y,deactivated:v,beforeDestroy:p,beforeUnmount:I,destroyed:b,unmounted:E,render:P,renderTracked:k,renderTriggered:O,errorCaptured:V,serverPrefetch:F,expose:X,inheritAttrs:pe,components:K,directives:ue,filters:Te}=e;if(u&&Ek(u,r,null),o)for(const Ee in o){const ge=o[Ee];Ce(ge)&&(r[Ee]=ge.bind(n))}if(i){const Ee=i.call(n,n);Xe(Ee)&&(t.data=qr(Ee))}if(Df=!0,s)for(const Ee in s){const ge=s[Ee],Fe=Ce(ge)?ge.bind(n,n):Ce(ge.get)?ge.get.bind(n,n):Jn,ut=!Ce(ge)&&Ce(ge.set)?ge.set.bind(n):Jn,Et=ve({get:Fe,set:ut});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Et.value,set:dt=>Et.value=dt})}if(a)for(const Ee in a)JT(a[Ee],r,n,Ee);if(l){const Ee=Ce(l)?l.call(n):l;Reflect.ownKeys(Ee).forEach(ge=>{bo(ge,Ee[ge])})}h&&hy(h,t,"c");function te(Ee,ge){_e(ge)?ge.forEach(Fe=>Ee(Fe.bind(n))):ge&&Ee(ge.bind(n))}if(te(YT,c),te(ac,d),te(dk,f),te(hk,m),te(lk,y),te(ck,v),te(_k,V),te(pk,k),te(mk,O),te(bp,I),te(Ap,E),te(fk,F),_e(X))if(X.length){const Ee=t.exposed||(t.exposed={});X.forEach(ge=>{Object.defineProperty(Ee,ge,{get:()=>n[ge],set:Fe=>n[ge]=Fe})})}else t.exposed||(t.exposed={});P&&t.render===Jn&&(t.render=P),pe!=null&&(t.inheritAttrs=pe),K&&(t.components=K),ue&&(t.directives=ue)}function Ek(t,e,n=Jn){_e(t)&&(t=Lf(t));for(const r in t){const i=t[r];let s;Xe(i)?"default"in i?s=Ln(i.from||r,i.default,!0):s=Ln(i.from||r):s=Ln(i),Ye(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function hy(t,e,n){qn(_e(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function JT(t,e,n,r){const i=r.includes(".")?HT(n,r):()=>n[r];if(At(t)){const s=e[t];Ce(s)&&sn(i,s)}else if(Ce(t))sn(i,t.bind(n));else if(Xe(t))if(_e(t))t.forEach(s=>JT(s,e,n,r));else{const s=Ce(t.handler)?t.handler.bind(n):e[t.handler];Ce(s)&&sn(i,s,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(u=>Cu(l,u,o,!0)),Cu(l,e,o)),Xe(e)&&s.set(e,l),l}function Cu(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Cu(t,s,n,!0),i&&i.forEach(o=>Cu(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Tk[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tk={data:fy,props:my,emits:my,methods:Wa,computed:Wa,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:Wa,directives:Wa,watch:bk,provide:fy,inject:wk};function fy(t,e){return e?t?function(){return kt(Ce(t)?t.call(this,this):t,Ce(e)?e.call(this,this):e)}:e:t}function wk(t,e){return Wa(Lf(t),Lf(e))}function Lf(t){if(_e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function un(t,e){return t?[...new Set([].concat(t,e))]:e}function Wa(t,e){return t?kt(Object.create(null),t,e):e}function my(t,e){return t?_e(t)&&_e(e)?[...new Set([...t,...e])]:kt(Object.create(null),dy(t),dy(e??{})):e}function bk(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const r in e)n[r]=un(t[r],e[r]);return n}function ZT(){return{app:null,config:{isNativeTag:zP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ak=0;function Rk(t,e){return function(r,i=null){Ce(r)||(r=kt({},r)),i!=null&&!Xe(i)&&(i=null);const s=ZT(),o=new Set;let a=!1;const l=s.app={_uid:Ak++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Xk,get config(){return s.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ce(u.install)?(o.add(u),u.install(l,...h)):Ce(u)&&(o.add(u),u(l,...h))),l},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),l},component(u,h){return h?(s.components[u]=h,l):s.components[u]},directive(u,h){return h?(s.directives[u]=h,l):s.directives[u]},mount(u,h,c){if(!a){const d=Se(r,i);return d.appContext=s,h&&e?e(d,u):t(d,u,c),a=!0,l._container=u,u.__vue_app__=l,Ad(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,h){return s.provides[u]=h,l},runWithContext(u){Al=l;try{return u()}finally{Al=null}}};return l}}let Al=null;function bo(t,e){if(Nt){let n=Nt.provides;const r=Nt.parent&&Nt.parent.provides;r===n&&(n=Nt.provides=Object.create(r)),n[t]=e}}function Ln(t,e,n=!1){const r=Nt||bn;if(r||Al){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Al._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Ce(e)?e.call(r&&r.proxy):e}}function Sk(){return!!(Nt||bn||Al)}function Pk(t,e,n,r=!1){const i={},s={};Au(s,bd,1),t.propsDefaults=Object.create(null),ew(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:NT(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function Ck(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,a=je(i),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let c=0;c<h.length;c++){let d=h[c];if(Id(t.emitsOptions,d))continue;const f=e[d];if(l)if(qe(s,d))f!==s[d]&&(s[d]=f,u=!0);else{const m=wr(d);i[m]=Vf(l,a,m,f,t,!1)}else f!==s[d]&&(s[d]=f,u=!0)}}}else{ew(t,e,i,s)&&(u=!0);let h;for(const c in a)(!e||!qe(e,c)&&((h=ra(c))===c||!qe(e,h)))&&(l?n&&(n[c]!==void 0||n[h]!==void 0)&&(i[c]=Vf(l,a,c,void 0,t,!0)):delete i[c]);if(s!==a)for(const c in s)(!e||!qe(e,c))&&(delete s[c],u=!0)}u&&jr(t,"set","$attrs")}function ew(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(cu(l))continue;const u=e[l];let h;i&&qe(i,h=wr(l))?!s||!s.includes(h)?n[h]=u:(a||(a={}))[h]=u:Id(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(s){const l=je(n),u=a||et;for(let h=0;h<s.length;h++){const c=s[h];n[c]=Vf(i,l,c,u[c],t,!qe(u,c))}}return o}function Vf(t,e,n,r,i,s){const o=t[n];if(o!=null){const a=qe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ce(l)){const{propsDefaults:u}=i;n in u?r=u[n]:(Vo(i),r=u[n]=l.call(null,e),Ss())}else r=l}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===ra(n))&&(r=!0))}return r}function tw(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},a=[];let l=!1;if(!Ce(t)){const h=c=>{l=!0;const[d,f]=tw(c,e,!0);kt(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!s&&!l)return Xe(t)&&r.set(t,Eo),Eo;if(_e(s))for(let h=0;h<s.length;h++){const c=wr(s[h]);py(c)&&(o[c]=et)}else if(s)for(const h in s){const c=wr(h);if(py(c)){const d=s[h],f=o[c]=_e(d)||Ce(d)?{type:d}:kt({},d);if(f){const m=yy(Boolean,f.type),y=yy(String,f.type);f[0]=m>-1,f[1]=y<0||m<y,(m>-1||qe(f,"default"))&&a.push(c)}}}const u=[o,a];return Xe(t)&&r.set(t,u),u}function py(t){return t[0]!=="$"}function _y(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function gy(t,e){return _y(t)===_y(e)}function yy(t,e){return _e(e)?e.findIndex(n=>gy(n,t)):Ce(e)&&gy(e,t)?0:-1}const nw=t=>t[0]==="_"||t==="$stable",Cp=t=>_e(t)?t.map(or):[or(t)],kk=(t,e,n)=>{if(e._n)return e;const r=Qn((...i)=>Cp(e(...i)),n);return r._c=!1,r},rw=(t,e,n)=>{const r=t._ctx;for(const i in t){if(nw(i))continue;const s=t[i];if(Ce(s))e[i]=kk(i,s,r);else if(s!=null){const o=Cp(s);e[i]=()=>o}}},iw=(t,e)=>{const n=Cp(e);t.slots.default=()=>n},Ok=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=je(e),Au(e,"_",n)):rw(e,t.slots={})}else t.slots={},e&&iw(t,e);Au(t.slots,bd,1)},Nk=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=et;if(r.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(kt(i,e),!n&&a===1&&delete i._):(s=!e.$stable,rw(e,i)),o=e}else e&&(iw(t,e),o={default:1});if(s)for(const a in i)!nw(a)&&!(a in o)&&delete i[a]};function Mf(t,e,n,r,i=!1){if(_e(t)){t.forEach((d,f)=>Mf(d,e&&(_e(e)?e[f]:e),n,r,i));return}if(du(r)&&!i)return;const s=r.shapeFlag&4?Ad(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=t,u=e&&e.r,h=a.refs===et?a.refs={}:a.refs,c=a.setupState;if(u!=null&&u!==l&&(At(u)?(h[u]=null,qe(c,u)&&(c[u]=null)):Ye(u)&&(u.value=null)),Ce(l))Ri(l,a,12,[o,h]);else{const d=At(l),f=Ye(l);if(d||f){const m=()=>{if(t.f){const y=d?qe(c,l)?c[l]:h[l]:l.value;i?_e(y)&&cp(y,s):_e(y)?y.includes(s)||y.push(s):d?(h[l]=[s],qe(c,l)&&(c[l]=h[l])):(l.value=[s],t.k&&(h[t.k]=l.value))}else d?(h[l]=o,qe(c,l)&&(c[l]=o)):f&&(l.value=o,t.k&&(h[t.k]=o))};o?(m.id=-1,In(m,n)):m()}}}const In=nk;function xk(t){return Dk(t)}function Dk(t,e){const n=Rf();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:c,nextSibling:d,setScopeId:f=Jn,insertStaticContent:m}=t,y=(w,_,g,T=null,S=null,x=null,$=!1,j=null,z=!!_.dynamicChildren)=>{if(w===_)return;w&&!hs(w,_)&&(T=D(w),dt(w,S,x,!0),w=null),_.patchFlag===-2&&(z=!1,_.dynamicChildren=null);const{type:H,ref:he,shapeFlag:Y}=_;switch(H){case lc:v(w,_,g,T);break;case Zn:p(w,_,g,T);break;case Uh:w==null&&I(_,g,T,$);break;case Gt:K(w,_,g,T,S,x,$,j,z);break;default:Y&1?P(w,_,g,T,S,x,$,j,z):Y&6?ue(w,_,g,T,S,x,$,j,z):(Y&64||Y&128)&&H.process(w,_,g,T,S,x,$,j,z,G)}he!=null&&S&&Mf(he,w&&w.ref,x,_||w,!_)},v=(w,_,g,T)=>{if(w==null)r(_.el=a(_.children),g,T);else{const S=_.el=w.el;_.children!==w.children&&u(S,_.children)}},p=(w,_,g,T)=>{w==null?r(_.el=l(_.children||""),g,T):_.el=w.el},I=(w,_,g,T)=>{[w.el,w.anchor]=m(w.children,_,g,T,w.el,w.anchor)},b=({el:w,anchor:_},g,T)=>{let S;for(;w&&w!==_;)S=d(w),r(w,g,T),w=S;r(_,g,T)},E=({el:w,anchor:_})=>{let g;for(;w&&w!==_;)g=d(w),i(w),w=g;i(_)},P=(w,_,g,T,S,x,$,j,z)=>{$=$||_.type==="svg",w==null?k(_,g,T,S,x,$,j,z):F(w,_,S,x,$,j,z)},k=(w,_,g,T,S,x,$,j)=>{let z,H;const{type:he,props:Y,shapeFlag:C,transition:M,dirs:ae}=w;if(z=w.el=o(w.type,x,Y&&Y.is,Y),C&8?h(z,w.children):C&16&&V(w.children,z,null,T,S,x&&he!=="foreignObject",$,j),ae&&rs(w,null,T,"created"),O(z,w,w.scopeId,$,T),Y){for(const R in Y)R!=="value"&&!cu(R)&&s(z,R,null,Y[R],x,w.children,T,S,ce);"value"in Y&&s(z,"value",null,Y.value),(H=Y.onVnodeBeforeMount)&&ir(H,T,w)}ae&&rs(w,null,T,"beforeMount");const A=(!S||S&&!S.pendingBranch)&&M&&!M.persisted;A&&M.beforeEnter(z),r(z,_,g),((H=Y&&Y.onVnodeMounted)||A||ae)&&In(()=>{H&&ir(H,T,w),A&&M.enter(z),ae&&rs(w,null,T,"mounted")},S)},O=(w,_,g,T,S)=>{if(g&&f(w,g),T)for(let x=0;x<T.length;x++)f(w,T[x]);if(S){let x=S.subTree;if(_===x){const $=S.vnode;O(w,$,$.scopeId,$.slotScopeIds,S.parent)}}},V=(w,_,g,T,S,x,$,j,z=0)=>{for(let H=z;H<w.length;H++){const he=w[H]=j?mi(w[H]):or(w[H]);y(null,he,_,g,T,S,x,$,j)}},F=(w,_,g,T,S,x,$)=>{const j=_.el=w.el;let{patchFlag:z,dynamicChildren:H,dirs:he}=_;z|=w.patchFlag&16;const Y=w.props||et,C=_.props||et;let M;g&&is(g,!1),(M=C.onVnodeBeforeUpdate)&&ir(M,g,_,w),he&&rs(_,w,g,"beforeUpdate"),g&&is(g,!0);const ae=S&&_.type!=="foreignObject";if(H?X(w.dynamicChildren,H,j,g,T,ae,x):$||ge(w,_,j,null,g,T,ae,x,!1),z>0){if(z&16)pe(j,_,Y,C,g,T,S);else if(z&2&&Y.class!==C.class&&s(j,"class",null,C.class,S),z&4&&s(j,"style",Y.style,C.style,S),z&8){const A=_.dynamicProps;for(let R=0;R<A.length;R++){const U=A[R],ne=Y[U],Oe=C[U];(Oe!==ne||U==="value")&&s(j,U,ne,Oe,S,w.children,g,T,ce)}}z&1&&w.children!==_.children&&h(j,_.children)}else!$&&H==null&&pe(j,_,Y,C,g,T,S);((M=C.onVnodeUpdated)||he)&&In(()=>{M&&ir(M,g,_,w),he&&rs(_,w,g,"updated")},T)},X=(w,_,g,T,S,x,$)=>{for(let j=0;j<_.length;j++){const z=w[j],H=_[j],he=z.el&&(z.type===Gt||!hs(z,H)||z.shapeFlag&70)?c(z.el):g;y(z,H,he,null,T,S,x,$,!0)}},pe=(w,_,g,T,S,x,$)=>{if(g!==T){if(g!==et)for(const j in g)!cu(j)&&!(j in T)&&s(w,j,g[j],null,$,_.children,S,x,ce);for(const j in T){if(cu(j))continue;const z=T[j],H=g[j];z!==H&&j!=="value"&&s(w,j,H,z,$,_.children,S,x,ce)}"value"in T&&s(w,"value",g.value,T.value)}},K=(w,_,g,T,S,x,$,j,z)=>{const H=_.el=w?w.el:a(""),he=_.anchor=w?w.anchor:a("");let{patchFlag:Y,dynamicChildren:C,slotScopeIds:M}=_;M&&(j=j?j.concat(M):M),w==null?(r(H,g,T),r(he,g,T),V(_.children,g,he,S,x,$,j,z)):Y>0&&Y&64&&C&&w.dynamicChildren?(X(w.dynamicChildren,C,g,S,x,$,j),(_.key!=null||S&&_===S.subTree)&&sw(w,_,!0)):ge(w,_,g,he,S,x,$,j,z)},ue=(w,_,g,T,S,x,$,j,z)=>{_.slotScopeIds=j,w==null?_.shapeFlag&512?S.ctx.activate(_,g,T,$,z):Te(_,g,T,S,x,$,z):Ne(w,_,z)},Te=(w,_,g,T,S,x,$)=>{const j=w.component=jk(w,T,S);if(Ed(w)&&(j.ctx.renderer=G),qk(j),j.asyncDep){if(S&&S.registerDep(j,te),!w.el){const z=j.subTree=Se(Zn);p(null,z,_,g)}return}te(j,w,_,g,S,x,$)},Ne=(w,_,g)=>{const T=_.component=w.component;if(ZC(w,_,g))if(T.asyncDep&&!T.asyncResolved){Ee(T,_,g);return}else T.next=_,KC(T.update),T.update();else _.el=w.el,T.vnode=_},te=(w,_,g,T,S,x,$)=>{const j=()=>{if(w.isMounted){let{next:he,bu:Y,u:C,parent:M,vnode:ae}=w,A=he,R;is(w,!1),he?(he.el=ae.el,Ee(w,he,$)):he=ae,Y&&uu(Y),(R=he.props&&he.props.onVnodeBeforeUpdate)&&ir(R,M,he,ae),is(w,!0);const U=Vh(w),ne=w.subTree;w.subTree=U,y(ne,U,c(ne.el),D(ne),w,S,x),he.el=U.el,A===null&&ek(w,U.el),C&&In(C,S),(R=he.props&&he.props.onVnodeUpdated)&&In(()=>ir(R,M,he,ae),S)}else{let he;const{el:Y,props:C}=_,{bm:M,m:ae,parent:A}=w,R=du(_);if(is(w,!1),M&&uu(M),!R&&(he=C&&C.onVnodeBeforeMount)&&ir(he,A,_),is(w,!0),Y&&ye){const U=()=>{w.subTree=Vh(w),ye(Y,w.subTree,w,S,null)};R?_.type.__asyncLoader().then(()=>!w.isUnmounted&&U()):U()}else{const U=w.subTree=Vh(w);y(null,U,g,T,w,S,x),_.el=U.el}if(ae&&In(ae,S),!R&&(he=C&&C.onVnodeMounted)){const U=_;In(()=>ir(he,A,U),S)}(_.shapeFlag&256||A&&du(A.vnode)&&A.vnode.shapeFlag&256)&&w.a&&In(w.a,S),w.isMounted=!0,_=g=T=null}},z=w.effect=new fp(j,()=>Tp(H),w.scope),H=w.update=()=>z.run();H.id=w.uid,is(w,!0),H()},Ee=(w,_,g)=>{_.component=w;const T=w.vnode.props;w.vnode=_,w.next=null,Ck(w,_.props,T,g),Nk(w,_.children,g),ia(),ay(),sa()},ge=(w,_,g,T,S,x,$,j,z=!1)=>{const H=w&&w.children,he=w?w.shapeFlag:0,Y=_.children,{patchFlag:C,shapeFlag:M}=_;if(C>0){if(C&128){ut(H,Y,g,T,S,x,$,j,z);return}else if(C&256){Fe(H,Y,g,T,S,x,$,j,z);return}}M&8?(he&16&&ce(H,S,x),Y!==H&&h(g,Y)):he&16?M&16?ut(H,Y,g,T,S,x,$,j,z):ce(H,S,x,!0):(he&8&&h(g,""),M&16&&V(Y,g,T,S,x,$,j,z))},Fe=(w,_,g,T,S,x,$,j,z)=>{w=w||Eo,_=_||Eo;const H=w.length,he=_.length,Y=Math.min(H,he);let C;for(C=0;C<Y;C++){const M=_[C]=z?mi(_[C]):or(_[C]);y(w[C],M,g,null,S,x,$,j,z)}H>he?ce(w,S,x,!0,!1,Y):V(_,g,T,S,x,$,j,z,Y)},ut=(w,_,g,T,S,x,$,j,z)=>{let H=0;const he=_.length;let Y=w.length-1,C=he-1;for(;H<=Y&&H<=C;){const M=w[H],ae=_[H]=z?mi(_[H]):or(_[H]);if(hs(M,ae))y(M,ae,g,null,S,x,$,j,z);else break;H++}for(;H<=Y&&H<=C;){const M=w[Y],ae=_[C]=z?mi(_[C]):or(_[C]);if(hs(M,ae))y(M,ae,g,null,S,x,$,j,z);else break;Y--,C--}if(H>Y){if(H<=C){const M=C+1,ae=M<he?_[M].el:T;for(;H<=C;)y(null,_[H]=z?mi(_[H]):or(_[H]),g,ae,S,x,$,j,z),H++}}else if(H>C)for(;H<=Y;)dt(w[H],S,x,!0),H++;else{const M=H,ae=H,A=new Map;for(H=ae;H<=C;H++){const Re=_[H]=z?mi(_[H]):or(_[H]);Re.key!=null&&A.set(Re.key,H)}let R,U=0;const ne=C-ae+1;let Oe=!1,Ae=0;const Le=new Array(ne);for(H=0;H<ne;H++)Le[H]=0;for(H=M;H<=Y;H++){const Re=w[H];if(U>=ne){dt(Re,S,x,!0);continue}let xe;if(Re.key!=null)xe=A.get(Re.key);else for(R=ae;R<=C;R++)if(Le[R-ae]===0&&hs(Re,_[R])){xe=R;break}xe===void 0?dt(Re,S,x,!0):(Le[xe-ae]=H+1,xe>=Ae?Ae=xe:Oe=!0,y(Re,_[xe],g,null,S,x,$,j,z),U++)}const Je=Oe?Lk(Le):Eo;for(R=Je.length-1,H=ne-1;H>=0;H--){const Re=ae+H,xe=_[Re],en=Re+1<he?_[Re+1].el:T;Le[H]===0?y(null,xe,g,en,S,x,$,j,z):Oe&&(R<0||H!==Je[R]?Et(xe,g,en,2):R--)}}},Et=(w,_,g,T,S=null)=>{const{el:x,type:$,transition:j,children:z,shapeFlag:H}=w;if(H&6){Et(w.component.subTree,_,g,T);return}if(H&128){w.suspense.move(_,g,T);return}if(H&64){$.move(w,_,g,G);return}if($===Gt){r(x,_,g);for(let Y=0;Y<z.length;Y++)Et(z[Y],_,g,T);r(w.anchor,_,g);return}if($===Uh){b(w,_,g);return}if(T!==2&&H&1&&j)if(T===0)j.beforeEnter(x),r(x,_,g),In(()=>j.enter(x),S);else{const{leave:Y,delayLeave:C,afterLeave:M}=j,ae=()=>r(x,_,g),A=()=>{Y(x,()=>{ae(),M&&M()})};C?C(x,ae,A):A()}else r(x,_,g)},dt=(w,_,g,T=!1,S=!1)=>{const{type:x,props:$,ref:j,children:z,dynamicChildren:H,shapeFlag:he,patchFlag:Y,dirs:C}=w;if(j!=null&&Mf(j,null,g,w,!0),he&256){_.ctx.deactivate(w);return}const M=he&1&&C,ae=!du(w);let A;if(ae&&(A=$&&$.onVnodeBeforeUnmount)&&ir(A,_,w),he&6)oe(w.component,g,T);else{if(he&128){w.suspense.unmount(g,T);return}M&&rs(w,null,_,"beforeUnmount"),he&64?w.type.remove(w,_,g,S,G,T):H&&(x!==Gt||Y>0&&Y&64)?ce(H,_,g,!1,!0):(x===Gt&&Y&384||!S&&he&16)&&ce(z,_,g),T&&Qe(w)}(ae&&(A=$&&$.onVnodeUnmounted)||M)&&In(()=>{A&&ir(A,_,w),M&&rs(w,null,_,"unmounted")},g)},Qe=w=>{const{type:_,el:g,anchor:T,transition:S}=w;if(_===Gt){Wt(g,T);return}if(_===Uh){E(w);return}const x=()=>{i(g),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(w.shapeFlag&1&&S&&!S.persisted){const{leave:$,delayLeave:j}=S,z=()=>$(g,x);j?j(w.el,x,z):z()}else x()},Wt=(w,_)=>{let g;for(;w!==_;)g=d(w),i(w),w=g;i(_)},oe=(w,_,g)=>{const{bum:T,scope:S,update:x,subTree:$,um:j}=w;T&&uu(T),S.stop(),x&&(x.active=!1,dt($,w,_,g)),j&&In(j,_),In(()=>{w.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},ce=(w,_,g,T=!1,S=!1,x=0)=>{for(let $=x;$<w.length;$++)dt(w[$],_,g,T,S)},D=w=>w.shapeFlag&6?D(w.component.subTree):w.shapeFlag&128?w.suspense.next():d(w.anchor||w.el),q=(w,_,g)=>{w==null?_._vnode&&dt(_._vnode,null,null,!0):y(_._vnode||null,w,_,null,null,null,g),ay(),BT(),_._vnode=w},G={p:y,um:dt,m:Et,r:Qe,mt:Te,mc:V,pc:ge,pbc:X,n:D,o:t};let re,ye;return e&&([re,ye]=e(G)),{render:q,hydrate:re,createApp:Rk(q,re)}}function is({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function sw(t,e,n=!1){const r=t.children,i=e.children;if(_e(r)&&_e(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=mi(i[s]),a.el=o.el),n||sw(o,a)),a.type===lc&&(a.el=o.el)}}function Lk(t){const e=t.slice(),n=[0];let r,i,s,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}const Vk=t=>t.__isTeleport,Gt=Symbol.for("v-fgt"),lc=Symbol.for("v-txt"),Zn=Symbol.for("v-cmt"),Uh=Symbol.for("v-stc"),tl=[];let Yn=null;function Ft(t=!1){tl.push(Yn=t?null:[])}function Mk(){tl.pop(),Yn=tl[tl.length-1]||null}let Rl=1;function vy(t){Rl+=t}function ow(t){return t.dynamicChildren=Rl>0?Yn||Eo:null,Mk(),Rl>0&&Yn&&Yn.push(t),t}function Rn(t,e,n,r,i,s){return ow(le(t,e,n,r,i,s,!0))}function ku(t,e,n,r,i){return ow(Se(t,e,n,r,i,!0))}function Ff(t){return t?t.__v_isVNode===!0:!1}function hs(t,e){return t.type===e.type&&t.key===e.key}const bd="__vInternal",aw=({key:t})=>t??null,hu=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?At(t)||Ye(t)||Ce(t)?{i:bn,r:t,k:e,f:!!n}:t:null);function le(t,e=null,n=null,r=0,i=null,s=t===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&aw(e),ref:e&&hu(e),scopeId:WT,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:bn};return a?(Op(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=At(n)?8:16),Rl>0&&!o&&Yn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Yn.push(l),l}const Se=Fk;function Fk(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===XT)&&(t=Zn),Ff(t)){const a=ki(t,e,!0);return n&&Op(a,n),Rl>0&&!s&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(t)]=a:Yn.push(a)),a.patchFlag|=-2,a}if(zk(t)&&(t=t.__vccOpts),e){e=Uk(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=Fr(a)),Xe(l)&&(xT(l)&&!_e(l)&&(l=kt({},l)),e.style=El(l))}const o=At(t)?1:tk(t)?128:Vk(t)?64:Xe(t)?4:Ce(t)?2:0;return le(t,e,n,r,i,o,s,!0)}function Uk(t){return t?xT(t)||bd in t?kt({},t):t:null}function ki(t,e,n=!1){const{props:r,ref:i,patchFlag:s,children:o}=t,a=e?lw(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&aw(a),ref:e&&e.ref?n&&i?_e(i)?i.concat(hu(e)):[i,hu(e)]:hu(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ki(t.ssContent),ssFallback:t.ssFallback&&ki(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function nl(t=" ",e=0){return Se(lc,null,t,e)}function kp(t="",e=!1){return e?(Ft(),ku(Zn,null,t)):Se(Zn,null,t)}function or(t){return t==null||typeof t=="boolean"?Se(Zn):_e(t)?Se(Gt,null,t.slice()):typeof t=="object"?mi(t):Se(lc,null,String(t))}function mi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ki(t)}function Op(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(_e(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),Op(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(bd in e)?e._ctx=bn:i===3&&bn&&(bn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ce(e)?(e={default:e,_ctx:bn},n=32):(e=String(e),r&64?(n=16,e=[nl(e)]):n=8);t.children=e,t.shapeFlag|=n}function lw(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Fr([e.class,r.class]));else if(i==="style")e.style=El([e.style,r.style]);else if(hd(i)){const s=e[i],o=r[i];o&&s!==o&&!(_e(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function ir(t,e,n,r=null){qn(t,e,7,[n,r])}const $k=ZT();let Bk=0;function jk(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||$k,s={uid:Bk++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new IT(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:tw(r,i),emitsOptions:qT(r,i),emit:null,emitted:null,propsDefaults:et,inheritAttrs:r.inheritAttrs,ctx:et,data:et,props:et,attrs:et,slots:et,refs:et,setupState:et,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=YC.bind(null,s),t.ce&&t.ce(s),s}let Nt=null;const br=()=>Nt||bn;let Np,io,Iy="__VUE_INSTANCE_SETTERS__";(io=Rf()[Iy])||(io=Rf()[Iy]=[]),io.push(t=>Nt=t),Np=t=>{io.length>1?io.forEach(e=>e(t)):io[0](t)};const Vo=t=>{Np(t),t.scope.on()},Ss=()=>{Nt&&Nt.scope.off(),Np(null)};function cw(t){return t.vnode.shapeFlag&4}let Sl=!1;function qk(t,e=!1){Sl=e;const{props:n,children:r}=t.vnode,i=cw(t);Pk(t,n,i,e),Ok(t,r);const s=i?Wk(t,e):void 0;return Sl=!1,s}function Wk(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=yd(new Proxy(t.ctx,vk));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Gk(t):null;Vo(t),ia();const s=Ri(r,t,0,[t.props,i]);if(sa(),Ss(),mT(s)){if(s.then(Ss,Ss),e)return s.then(o=>{Ey(t,o,e)}).catch(o=>{vd(o,t,0)});t.asyncDep=s}else Ey(t,s,e)}else uw(t,e)}function Ey(t,e,n){Ce(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Xe(e)&&(t.setupState=MT(e)),uw(t,n)}let Ty;function uw(t,e,n){const r=t.type;if(!t.render){if(!e&&Ty&&!r.render){const i=r.template||Pp(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,u=kt(kt({isCustomElement:s,delimiters:a},o),l);r.render=Ty(i,u)}}t.render=r.render||Jn}Vo(t),ia(),Ik(t),sa(),Ss()}function Hk(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return kn(t,"get","$attrs"),e[n]}}))}function Gk(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Hk(t)},slots:t.slots,emit:t.emit,expose:e}}function Ad(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(MT(yd(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in el)return el[n](t)},has(e,n){return n in e||n in el}}))}function Kk(t,e=!0){return Ce(t)?t.displayName||t.name:t.name||e&&t.__name}function zk(t){return Ce(t)&&"__vccOpts"in t}const ve=(t,e)=>WC(t,e,Sl);function Wr(t,e,n){const r=arguments.length;return r===2?Xe(e)&&!_e(e)?Ff(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ff(n)&&(n=[n]),Se(t,e,n))}const Qk=Symbol.for("v-scx"),Yk=()=>Ln(Qk),Xk="3.3.4",Jk="http://www.w3.org/2000/svg",fs=typeof document<"u"?document:null,wy=fs&&fs.createElement("template"),Zk={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?fs.createElementNS(Jk,t):fs.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>fs.createTextNode(t),createComment:t=>fs.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fs.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{wy.innerHTML=r?`<svg>${t}</svg>`:t;const a=wy.content;if(r){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function eO(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function tO(t,e,n){const r=t.style,i=At(n);if(n&&!i){if(e&&!At(e))for(const s in e)n[s]==null&&Uf(r,s,"");for(const s in n)Uf(r,s,n[s])}else{const s=r.display;i?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=s)}}const by=/\s*!important$/;function Uf(t,e,n){if(_e(n))n.forEach(r=>Uf(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=nO(t,e);by.test(n)?t.setProperty(ra(r),n.replace(by,""),"important"):t[r]=n}}const Ay=["Webkit","Moz","ms"],$h={};function nO(t,e){const n=$h[e];if(n)return n;let r=wr(e);if(r!=="filter"&&r in t)return $h[e]=r;r=pd(r);for(let i=0;i<Ay.length;i++){const s=Ay[i]+r;if(s in t)return $h[e]=s}return e}const Ry="http://www.w3.org/1999/xlink";function rO(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ry,e.slice(6,e.length)):t.setAttributeNS(Ry,e,n);else{const s=oC(e);n==null||s&&!yT(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function iO(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const u=a==="OPTION"?t.getAttribute("value"):t.value,h=n??"";u!==h&&(t.value=h),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=yT(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function dw(t,e,n,r){t.addEventListener(e,n,r)}function sO(t,e,n,r){t.removeEventListener(e,n,r)}function oO(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=aO(e);if(r){const u=s[e]=uO(r,i);dw(t,a,u,l)}else o&&(sO(t,a,o,l),s[e]=void 0)}}const Sy=/(?:Once|Passive|Capture)$/;function aO(t){let e;if(Sy.test(t)){e={};let r;for(;r=t.match(Sy);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ra(t.slice(2)),e]}let Bh=0;const lO=Promise.resolve(),cO=()=>Bh||(lO.then(()=>Bh=0),Bh=Date.now());function uO(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;qn(dO(r,n.value),e,5,[r])};return n.value=t,n.attached=cO(),n}function dO(t,e){if(_e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Py=/^on[a-z]/,hO=(t,e,n,r,i=!1,s,o,a,l)=>{e==="class"?eO(t,r,i):e==="style"?tO(t,n,r):hd(e)?lp(e)||oO(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):fO(t,e,r,i))?iO(t,e,r,s,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),rO(t,e,r,i))};function fO(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Py.test(e)&&Ce(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Py.test(e)&&At(n)?!1:e in t}const ii="transition",ba="animation",xp=(t,{slots:e})=>Wr(ak,mO(t),e);xp.displayName="Transition";const hw={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xp.props=kt({},GT,hw);const ss=(t,e=[])=>{_e(t)?t.forEach(n=>n(...e)):t&&t(...e)},Cy=t=>t?_e(t)?t.some(e=>e.length>1):t.length>1:!1;function mO(t){const e={};for(const K in t)K in hw||(e[K]=t[K]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:c=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,m=pO(i),y=m&&m[0],v=m&&m[1],{onBeforeEnter:p,onEnter:I,onEnterCancelled:b,onLeave:E,onLeaveCancelled:P,onBeforeAppear:k=p,onAppear:O=I,onAppearCancelled:V=b}=e,F=(K,ue,Te)=>{os(K,ue?h:a),os(K,ue?u:o),Te&&Te()},X=(K,ue)=>{K._isLeaving=!1,os(K,c),os(K,f),os(K,d),ue&&ue()},pe=K=>(ue,Te)=>{const Ne=K?O:I,te=()=>F(ue,K,Te);ss(Ne,[ue,te]),ky(()=>{os(ue,K?l:s),si(ue,K?h:a),Cy(Ne)||Oy(ue,r,y,te)})};return kt(e,{onBeforeEnter(K){ss(p,[K]),si(K,s),si(K,o)},onBeforeAppear(K){ss(k,[K]),si(K,l),si(K,u)},onEnter:pe(!1),onAppear:pe(!0),onLeave(K,ue){K._isLeaving=!0;const Te=()=>X(K,ue);si(K,c),yO(),si(K,d),ky(()=>{K._isLeaving&&(os(K,c),si(K,f),Cy(E)||Oy(K,r,v,Te))}),ss(E,[K,Te])},onEnterCancelled(K){F(K,!1),ss(b,[K])},onAppearCancelled(K){F(K,!0),ss(V,[K])},onLeaveCancelled(K){X(K),ss(P,[K])}})}function pO(t){if(t==null)return null;if(Xe(t))return[jh(t.enter),jh(t.leave)];{const e=jh(t);return[e,e]}}function jh(t){return eC(t)}function si(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t._vtc||(t._vtc=new Set)).add(e)}function os(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function ky(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _O=0;function Oy(t,e,n,r){const i=t._endId=++_O,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=gO(t,e);if(!o)return r();const u=o+"end";let h=0;const c=()=>{t.removeEventListener(u,d),s()},d=f=>{f.target===t&&++h>=l&&c()};setTimeout(()=>{h<l&&c()},a+1),t.addEventListener(u,d)}function gO(t,e){const n=window.getComputedStyle(t),r=m=>(n[m]||"").split(", "),i=r(`${ii}Delay`),s=r(`${ii}Duration`),o=Ny(i,s),a=r(`${ba}Delay`),l=r(`${ba}Duration`),u=Ny(a,l);let h=null,c=0,d=0;e===ii?o>0&&(h=ii,c=o,d=s.length):e===ba?u>0&&(h=ba,c=u,d=l.length):(c=Math.max(o,u),h=c>0?o>u?ii:ba:null,d=h?h===ii?s.length:l.length:0);const f=h===ii&&/\b(transform|all)(,|$)/.test(r(`${ii}Property`).toString());return{type:h,timeout:c,propCount:d,hasTransform:f}}function Ny(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>xy(n)+xy(t[r])))}function xy(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function yO(){return document.body.offsetHeight}const Dy=t=>{const e=t.props["onUpdate:modelValue"]||!1;return _e(e)?n=>uu(e,n):e},KK={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const i=fd(e);dw(t,"change",()=>{const s=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?gT(Ou(o)):Ou(o));t._assign(t.multiple?i?new Set(s):s:s[0])}),t._assign=Dy(r)},mounted(t,{value:e}){Ly(t,e)},beforeUpdate(t,e,n){t._assign=Dy(n)},updated(t,{value:e}){Ly(t,e)}};function Ly(t,e){const n=t.multiple;if(!(n&&!_e(e)&&!fd(e))){for(let r=0,i=t.options.length;r<i;r++){const s=t.options[r],o=Ou(s);if(n)_e(e)?s.selected=lC(e,o)>-1:s.selected=e.has(o);else if(_d(Ou(s),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ou(t){return"_value"in t?t._value:t.value}const vO=["ctrl","shift","alt","meta"],IO={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>vO.some(n=>t[`${n}Key`]&&!e.includes(n))},Ps=(t,e)=>(n,...r)=>{for(let i=0;i<e.length;i++){const s=IO[e[i]];if(s&&s(n,e))return}return t(n,...r)},zK={beforeMount(t,{value:e},{transition:n}){t._vod=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Aa(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Aa(t,!0),r.enter(t)):r.leave(t,()=>{Aa(t,!1)}):Aa(t,e))},beforeUnmount(t,{value:e}){Aa(t,e)}};function Aa(t,e){t.style.display=e?t._vod:"none"}const EO=kt({patchProp:hO},Zk);let Vy;function TO(){return Vy||(Vy=xk(EO))}const wO=(...t)=>{const e=TO().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=bO(r);if(!i)return;const s=e._component;!Ce(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function bO(t){return At(t)?document.querySelector(t):t}var AO=!1;/*!
 * pinia v2.1.6
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let fw;const Rd=t=>fw=t,mw=Symbol();function $f(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var rl;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rl||(rl={}));function RO(){const t=dp(!0),e=t.run(()=>nt({}));let n=[],r=[];const i=yd({install(s){Rd(i),i._a=s,s.provide(mw,i),s.config.globalProperties.$pinia=i,r.forEach(o=>n.push(o)),r=[]},use(s){return!this._a&&!AO?r.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const pw=()=>{};function My(t,e,n,r=pw){t.push(e);const i=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),r())};return!n&&ET()&&uC(i),i}function so(t,...e){t.slice().forEach(n=>{n(...e)})}const SO=t=>t();function Bf(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],i=t[n];$f(i)&&$f(r)&&t.hasOwnProperty(n)&&!Ye(r)&&!Ai(r)?t[n]=Bf(i,r):t[n]=r}return t}const PO=Symbol();function CO(t){return!$f(t)||!t.hasOwnProperty(PO)}const{assign:fi}=Object;function kO(t){return!!(Ye(t)&&t.effect)}function OO(t,e,n,r){const{state:i,actions:s,getters:o}=e,a=n.state.value[t];let l;function u(){a||(n.state.value[t]=i?i():{});const h=$C(n.state.value[t]);return fi(h,s,Object.keys(o||{}).reduce((c,d)=>(c[d]=yd(ve(()=>{Rd(n);const f=n._s.get(t);return o[d].call(f,f)})),c),{}))}return l=_w(t,u,e,n,r,!0),l}function _w(t,e,n={},r,i,s){let o;const a=fi({actions:{}},n),l={deep:!0};let u,h,c=[],d=[],f;const m=r.state.value[t];!s&&!m&&(r.state.value[t]={}),nt({});let y;function v(V){let F;u=h=!1,typeof V=="function"?(V(r.state.value[t]),F={type:rl.patchFunction,storeId:t,events:f}):(Bf(r.state.value[t],V),F={type:rl.patchObject,payload:V,storeId:t,events:f});const X=y=Symbol();Nr().then(()=>{y===X&&(u=!0)}),h=!0,so(c,F,r.state.value[t])}const p=s?function(){const{state:F}=n,X=F?F():{};this.$patch(pe=>{fi(pe,X)})}:pw;function I(){o.stop(),c=[],d=[],r._s.delete(t)}function b(V,F){return function(){Rd(r);const X=Array.from(arguments),pe=[],K=[];function ue(te){pe.push(te)}function Te(te){K.push(te)}so(d,{args:X,name:V,store:P,after:ue,onError:Te});let Ne;try{Ne=F.apply(this&&this.$id===t?this:P,X)}catch(te){throw so(K,te),te}return Ne instanceof Promise?Ne.then(te=>(so(pe,te),te)).catch(te=>(so(K,te),Promise.reject(te))):(so(pe,Ne),Ne)}}const E={_p:r,$id:t,$onAction:My.bind(null,d),$patch:v,$reset:p,$subscribe(V,F={}){const X=My(c,V,F.detached,()=>pe()),pe=o.run(()=>sn(()=>r.state.value[t],K=>{(F.flush==="sync"?h:u)&&V({storeId:t,type:rl.direct,events:f},K)},fi({},l,F)));return X},$dispose:I},P=qr(E);r._s.set(t,P);const k=r._a&&r._a.runWithContext||SO,O=r._e.run(()=>(o=dp(),k(()=>o.run(e))));for(const V in O){const F=O[V];if(Ye(F)&&!kO(F)||Ai(F))s||(m&&CO(F)&&(Ye(F)?F.value=m[V]:Bf(F,m[V])),r.state.value[t][V]=F);else if(typeof F=="function"){const X=b(V,F);O[V]=X,a.actions[V]=F}}return fi(P,O),fi(je(P),O),Object.defineProperty(P,"$state",{get:()=>r.state.value[t],set:V=>{v(F=>{fi(F,V)})}}),r._p.forEach(V=>{fi(P,o.run(()=>V({store:P,app:r._a,pinia:r,options:a})))}),m&&s&&n.hydrate&&n.hydrate(P.$state,m),u=!0,h=!0,P}function Dp(t,e,n){let r,i;const s=typeof e=="function";typeof t=="string"?(r=t,i=s?n:e):(i=t,r=t.id);function o(a,l){const u=Sk();return a=a||(u?Ln(mw,null):null),a&&Rd(a),a=fw,a._s.has(r)||(s?_w(r,e,i,a):OO(r,i,a)),a._s.get(r)}return o.$id=r,o}let NO="Store";function xO(...t){return t.reduce((e,n)=>(e[n.$id+NO]=function(){return n(this.$pinia)},e),{})}function gw(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const i=t(this.$pinia),s=e[r];return typeof s=="function"?s.call(this,i):i[s]},n),{})}function Lp(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...i){return t(this.$pinia)[r](...i)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...i){return t(this.$pinia)[e[r]](...i)},n),{})}function yw(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]={get(){return t(this.$pinia)[r]},set(i){return t(this.$pinia)[r]=i}},n),{}):Object.keys(e).reduce((n,r)=>(n[r]={get(){return t(this.$pinia)[e[r]]},set(i){return t(this.$pinia)[e[r]]=i}},n),{})}const jf=Dp("modal",{state:()=>({isOpen:!1}),getters:{hiddenClass(t){return t.isOpen?"":"hidden"}}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},DO=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Iw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,c=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(d=64)),r.push(n[h],n[c],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(vw(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):DO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const c=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||c==null)throw new LO;const d=s<<2|a>>4;if(r.push(d),u!==64){const f=a<<4&240|u>>2;if(r.push(f),c!==64){const m=u<<6&192|c;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VO=function(t){const e=vw(t);return Iw.encodeByteArray(e,!0)},Nu=function(t){return VO(t).replace(/\./g,"")},Ew=function(t){try{return Iw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function xu(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!MO(n)||(t[n]=xu(t[n],e[n]));return t}function MO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FO(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UO=()=>FO().__FIREBASE_DEFAULTS__,$O=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},BO=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ew(t[1]);return e&&JSON.parse(e)},Vp=()=>{try{return UO()||$O()||BO()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Tw=()=>{var t;return(t=Vp())===null||t===void 0?void 0:t.config},jO=t=>{var e;return(e=Vp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nu(JSON.stringify(n)),Nu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function Sd(){var t;const e=(t=Vp())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HO(){return typeof self=="object"&&self.self===self}function bw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Mp(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Aw(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GO(){return!Sd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pl(){try{return typeof indexedDB=="object"}catch{return!1}}function KO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=zO,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qs.prototype.create)}}class Qs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QO(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function QO(t,e){return t.replace(YO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YO=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function XO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uy(s)&&Uy(o)){if(!qf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ha(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Rw(t,e){const n=new JO(t,e);return n.subscribe.bind(n)}class JO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qh),i.error===void 0&&(i.error=qh),i.complete===void 0&&(i.complete=qh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t){return t&&t._delegate?t._delegate:t}class Hn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qO;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nN(e))try{this.getOrInitializeService({instanceIdentifier:ls})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ls){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ls){return this.instances.has(e)}getOptions(e=ls){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ls){return this.component?this.component.multipleInstances?e:ls:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tN(t){return t===ls?void 0:t}function nN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp=[];var $e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($e||($e={}));const Sw={debug:$e.DEBUG,verbose:$e.VERBOSE,info:$e.INFO,warn:$e.WARN,error:$e.ERROR,silent:$e.SILENT},iN=$e.INFO,sN={[$e.DEBUG]:"log",[$e.VERBOSE]:"log",[$e.INFO]:"info",[$e.WARN]:"warn",[$e.ERROR]:"error"},oN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=sN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pd{constructor(e){this.name=e,this._logLevel=iN,this._logHandler=oN,this._userLogHandler=null,Fp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$e.DEBUG,...e),this._logHandler(this,$e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$e.VERBOSE,...e),this._logHandler(this,$e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$e.INFO,...e),this._logHandler(this,$e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$e.WARN,...e),this._logHandler(this,$e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$e.ERROR,...e),this._logHandler(this,$e.ERROR,...e)}}function aN(t){Fp.forEach(e=>{e.setLogLevel(t)})}function lN(t,e){for(const n of Fp){let r=null;e&&e.level&&(r=Sw[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:$e[s].toLowerCase(),message:a,args:o,type:i.name})}}}const cN=(t,e)=>e.some(n=>t instanceof n);let $y,By;function uN(){return $y||($y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dN(){return By||(By=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Pw=new WeakMap,Wf=new WeakMap,Cw=new WeakMap,Wh=new WeakMap,Up=new WeakMap;function hN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Si(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Pw.set(n,t)}).catch(()=>{}),Up.set(e,t),e}function fN(t){if(Wf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wf.set(t,e)}let Hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Si(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mN(t){Hf=t(Hf)}function pN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hh(this),e,...n);return Cw.set(r,e.sort?e.sort():[e]),Si(r)}:dN().includes(t)?function(...e){return t.apply(Hh(this),e),Si(Pw.get(this))}:function(...e){return Si(t.apply(Hh(this),e))}}function _N(t){return typeof t=="function"?pN(t):(t instanceof IDBTransaction&&fN(t),cN(t,uN())?new Proxy(t,Hf):t)}function Si(t){if(t instanceof IDBRequest)return hN(t);if(Wh.has(t))return Wh.get(t);const e=_N(t);return e!==t&&(Wh.set(t,e),Up.set(e,t)),e}const Hh=t=>Up.get(t);function gN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Si(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Si(o.result),l.oldVersion,l.newVersion,Si(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const yN=["get","getKey","getAll","getAllKeys","count"],vN=["put","add","delete","clear"],Gh=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gh.get(e))return Gh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Gh.set(e,s),s}mN(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(EN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function EN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gf="@firebase/app",qy="0.9.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds=new Pd("@firebase/app"),TN="@firebase/app-compat",wN="@firebase/analytics-compat",bN="@firebase/analytics",AN="@firebase/app-check-compat",RN="@firebase/app-check",SN="@firebase/auth",PN="@firebase/auth-compat",CN="@firebase/database",kN="@firebase/database-compat",ON="@firebase/functions",NN="@firebase/functions-compat",xN="@firebase/installations",DN="@firebase/installations-compat",LN="@firebase/messaging",VN="@firebase/messaging-compat",MN="@firebase/performance",FN="@firebase/performance-compat",UN="@firebase/remote-config",$N="@firebase/remote-config-compat",BN="@firebase/storage",jN="@firebase/storage-compat",qN="@firebase/firestore",WN="@firebase/firestore-compat",HN="firebase",GN="10.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi="[DEFAULT]",KN={[Gf]:"fire-core",[TN]:"fire-core-compat",[bN]:"fire-analytics",[wN]:"fire-analytics-compat",[RN]:"fire-app-check",[AN]:"fire-app-check-compat",[SN]:"fire-auth",[PN]:"fire-auth-compat",[CN]:"fire-rtdb",[kN]:"fire-rtdb-compat",[ON]:"fire-fn",[NN]:"fire-fn-compat",[xN]:"fire-iid",[DN]:"fire-iid-compat",[LN]:"fire-fcm",[VN]:"fire-fcm-compat",[MN]:"fire-perf",[FN]:"fire-perf-compat",[UN]:"fire-rc",[$N]:"fire-rc-compat",[BN]:"fire-gcs",[jN]:"fire-gcs-compat",[qN]:"fire-fst",[WN]:"fire-fst-compat","fire-js":"fire-js",[HN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new Map,Cl=new Map;function Du(t,e){try{t.container.addComponent(e)}catch(n){Ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function kw(t,e){t.container.addOrOverwriteComponent(e)}function Hr(t){const e=t.name;if(Cl.has(e))return Ds.debug(`There were multiple attempts to register component ${e}.`),!1;Cl.set(e,t);for(const n of Ni.values())Du(n,t);return!0}function Ow(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zN(t,e,n=Oi){Ow(t,e).clearInstance(n)}function QN(){Cl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ur=new Qs("app","Firebase",YN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let XN=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Hn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=GN;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Oi,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ur.create("bad-app-name",{appName:String(i)});if(n||(n=Tw()),!n)throw Ur.create("no-options");const s=Ni.get(i);if(s){if(qf(n,s.options)&&qf(r,s.config))return s;throw Ur.create("duplicate-app",{appName:i})}const o=new rN(i);for(const l of Cl.values())o.addComponent(l);const a=new XN(n,r,o);return Ni.set(i,a),a}function JN(t=Oi){const e=Ni.get(t);if(!e&&t===Oi&&Tw())return $p();if(!e)throw Ur.create("no-app",{appName:t});return e}function ZN(){return Array.from(Ni.values())}async function Nw(t){const e=t.name;Ni.has(e)&&(Ni.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Wn(t,e,n){var r;let i=(r=KN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ds.warn(a.join(" "));return}Hr(new Hn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function xw(t,e){if(t!==null&&typeof t!="function")throw Ur.create("invalid-log-argument");lN(t,e)}function Dw(t){aN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e1="firebase-heartbeat-database",t1=1,kl="firebase-heartbeat-store";let Kh=null;function Lw(){return Kh||(Kh=gN(e1,t1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(kl)}}}).catch(t=>{throw Ur.create("idb-open",{originalErrorMessage:t.message})})),Kh}async function n1(t){try{return await(await Lw()).transaction(kl).objectStore(kl).get(Vw(t))}catch(e){if(e instanceof on)Ds.warn(e.message);else{const n=Ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ds.warn(n.message)}}}async function Wy(t,e){try{const r=(await Lw()).transaction(kl,"readwrite");await r.objectStore(kl).put(e,Vw(t)),await r.done}catch(n){if(n instanceof on)Ds.warn(n.message);else{const r=Ur.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ds.warn(r.message)}}}function Vw(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1=1024,i1=30*24*60*60*1e3;class s1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=i1}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Hy(),{heartbeatsToSend:n,unsentEntries:r}=o1(this._heartbeatsCache.heartbeats),i=Nu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hy(){return new Date().toISOString().substring(0,10)}function o1(t,e=r1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pl()?KO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await n1(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wy(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gy(t){return Nu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(t){Hr(new Hn("platform-logger",e=>new IN(e),"PRIVATE")),Hr(new Hn("heartbeat",e=>new s1(e),"PRIVATE")),Wn(Gf,qy,t),Wn(Gf,qy,"esm2017"),Wn("fire-js","")}l1("");const c1=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:on,SDK_VERSION:Yr,_DEFAULT_ENTRY_NAME:Oi,_addComponent:Du,_addOrOverwriteComponent:kw,_apps:Ni,_clearComponents:QN,_components:Cl,_getProvider:Ow,_registerComponent:Hr,_removeServiceInstance:zN,deleteApp:Nw,getApp:JN,getApps:ZN,initializeApp:$p,onLog:xw,registerVersion:Wn,setLogLevel:Dw},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n){this._delegate=e,this.firebase=n,Du(e,new Hn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Nw(this._delegate)))}_getService(e,n=Oi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Oi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Du(this._delegate,e)}_addOrOverwriteComponent(e){kw(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Ky=new Qs("app-compat","Firebase",d1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:Wn,setLogLevel:Dw,onLog:xw,apps:null,SDK_VERSION:Yr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:c1}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Oi,!Fy(e,u))throw Ky.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,h={}){const c=$p(u,h);if(Fy(e,c.name))return e[c.name];const d=new t(c,n);return e[c.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const h=u.name,c=h.replace("-compat","");if(Hr(u)&&u.type==="PUBLIC"){const d=(f=i())=>{if(typeof f[c]!="function")throw Ky.create("invalid-app-argument",{appName:h});return f[c]()};u.serviceProps!==void 0&&xu(d,u.serviceProps),n[c]=d,t.prototype[c]=function(...f){return this._getService.bind(this,h).apply(this,u.multipleInstances?f:[])}}return u.type==="PUBLIC"?n[c]:null}function l(u,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(){const t=h1(u1);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Mw,extendNamespace:e,createSubscribe:Rw,ErrorFactory:Qs,deepExtend:xu});function e(n){xu(t,n)}return t}const f1=Mw();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Pd("@firebase/app-compat"),m1="@firebase/app-compat",p1="0.2.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(t){Wn(m1,p1,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(HO()&&self.firebase!==void 0){zy.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&zy.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Pr=f1;_1();var g1="firebase",y1="10.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.registerVersion(g1,y1,"app-compat");function Bp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ra={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},oo={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){return t!==void 0&&t.getResponse!==void 0}function Yy(t){return t!==void 0&&t.enterprise!==void 0}class v1{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I1(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function Fw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E1=I1,T1=Fw,Uw=new Qs("auth","Firebase",Fw());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu=new Pd("@firebase/auth");function w1(t,...e){Lu.logLevel<=$e.WARN&&Lu.warn(`Auth (${Yr}): ${t}`,...e)}function fu(t,...e){Lu.logLevel<=$e.ERROR&&Lu.error(`Auth (${Yr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw jp(t,...e)}function Yt(t,...e){return jp(t,...e)}function $w(t,e,n){const r=Object.assign(Object.assign({},T1()),{[e]:n});return new Qs("auth","Firebase",r).create(e,{appName:t.name})}function aa(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Zt(t,"argument-error"),$w(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Uw.create(t,...e)}function Q(t,e,...n){if(!t)throw jp(e,...n)}function _r(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fu(e),new Error(e)}function er(t,e){t||_r(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qp(){return Xy()==="http:"||Xy()==="https:"}function Xy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qp()||bw()||"connection"in navigator)?navigator.onLine:!0}function A1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=WO()||Mp()}get(){return b1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wp(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S1=new cc(3e4,6e4);function Rt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ot(t,e,n,r,i={}){return jw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=oa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Bw.fetch()(qw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function jw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},R1),e);try{const i=new P1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ga(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ga(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw $w(t,h,u);Zt(t,h)}}catch(i){if(i instanceof on)throw i;Zt(t,"network-request-failed",{message:String(i)})}}async function Xr(t,e,n,r,i={}){const s=await Ot(t,e,n,r,i);return"mfaPendingCredential"in s&&Zt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function qw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Wp(t.config,i):`${t.config.apiScheme}://${i}`}class P1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Yt(this.auth,"network-request-failed")),S1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ga(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Yt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(t){return(await Ot(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function k1(t,e){return Ot(t,"GET","/v2/recaptchaConfig",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(t,e){return Ot(t,"POST","/v1/accounts:delete",e)}async function N1(t,e){return Ot(t,"POST","/v1/accounts:update",e)}async function x1(t,e){return Ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function D1(t,e=!1){const n=de(t),r=await n.getIdToken(e),i=Cd(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:il(zh(i.auth_time)),issuedAtTime:il(zh(i.iat)),expirationTime:il(zh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zh(t){return Number(t)*1e3}function Cd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fu("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ew(n);return i?JSON.parse(i):(fu("Failed to decode base64 JWT payload"),null)}catch(i){return fu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function L1(t){const e=Cd(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&V1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function V1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ww{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Gr(t,x1(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$1(s.providerUserInfo):[],a=U1(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Ww(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,c)}async function F1(t){const e=de(t);await Nl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $1(t){return t.map(e=>{var{providerId:n}=e,r=Bp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B1(t,e){const n=await jw(t,{},async()=>{const r=oa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=qw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Bw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):L1(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await B1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xl;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xl,this.toJSON())}_performRefresh(){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cs{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Ww(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Gr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return D1(this,e)}reload(){return F1(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Nl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gr(this,O1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const c=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,I=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:b,emailVerified:E,isAnonymous:P,providerData:k,stsTokenManager:O}=n;Q(b&&O,e,"internal-error");const V=xl.fromJSON(this.name,O);Q(typeof b=="string",e,"internal-error"),oi(c,e.name),oi(d,e.name),Q(typeof E=="boolean",e,"internal-error"),Q(typeof P=="boolean",e,"internal-error"),oi(f,e.name),oi(m,e.name),oi(y,e.name),oi(v,e.name),oi(p,e.name),oi(I,e.name);const F=new Cs({uid:b,auth:e,email:d,emailVerified:E,displayName:c,isAnonymous:P,photoURL:m,phoneNumber:f,tenantId:y,stsTokenManager:V,createdAt:p,lastLoginAt:I});return k&&Array.isArray(k)&&(F.providerData=k.map(X=>Object.assign({},X))),v&&(F._redirectEventId=v),F}static async _fromIdTokenResponse(e,n,r=!1){const i=new xl;i.updateFromServerResponse(n);const s=new Cs({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Nl(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=new Map;function Dn(t){er(t instanceof Function,"Expected a class definition");let e=Jy.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Hw.type="NONE";const Mo=Hw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t,e,n){return`firebase:${t}:${e}:${n}`}class Ao{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ks(this.userKey,i.apiKey,s),this.fullPersistenceKey=ks("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ao(Dn(Mo),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Dn(Mo);const o=ks(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const c=Cs._fromJSON(e,h);u!==s&&(a=c),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ao(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ao(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qw(e))return"Blackberry";if(Yw(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||Kw(e))&&!e.includes("edge/"))return"Chrome";if(uc(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gw(t=mt()){return/firefox\//i.test(t)}function Hp(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Kw(t=mt()){return/crios\//i.test(t)}function zw(t=mt()){return/iemobile/i.test(t)}function uc(t=mt()){return/android/i.test(t)}function Qw(t=mt()){return/blackberry/i.test(t)}function Yw(t=mt()){return/webos/i.test(t)}function la(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function j1(t=mt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function q1(t=mt()){var e;return la(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function W1(){return Aw()&&document.documentMode===10}function Xw(t=mt()){return la(t)||uc(t)||Yw(t)||Qw(t)||/windows phone/i.test(t)||zw(t)}function H1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jw(t,e=[]){let n;switch(t){case"Browser":n=Zy(mt());break;case"Worker":n=`${Zy(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Yr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K1(t,e={}){return Ot(t,"GET","/v2/passwordPolicy",Rt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=6;class Q1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:z1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ev(this),this.idTokenSubscription=new ev(this),this.beforeStateQueue=new G1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Uw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Dn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ao.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Nl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?de(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await K1(this),n=new Q1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Dn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await Ao.create(this,[Dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&w1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function yt(t){return de(t)}class ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=Rw(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gp(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Yt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",X1().appendChild(r)})}function Zw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const J1="https://www.google.com/recaptcha/enterprise.js?render=",Z1="recaptcha-enterprise",ex="NO_RECAPTCHA";class tx{constructor(e){this.type=Z1,this.auth=yt(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{k1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new v1(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Yy(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(ex)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Yy(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Gp(J1+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function xi(t,e,n,r=!1){const i=new tx(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}function nx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function rx(t,e,n){const r=yt(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=eb(e),{host:o,port:a}=ix(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||sx()}function eb(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ix(t){const e=eb(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tv(o)}}}function tv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function sx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,n){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e){return Ot(t,"POST","/v1/accounts:resetPassword",Rt(t,e))}async function nb(t,e){return Ot(t,"POST","/v1/accounts:update",e)}async function ox(t,e){return Ot(t,"POST","/v1/accounts:update",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(t,e){return Xr(t,"POST","/v1/accounts:signInWithPassword",Rt(t,e))}async function kd(t,e){return Ot(t,"POST","/v1/accounts:sendOobCode",Rt(t,e))}async function ax(t,e){return kd(t,e)}async function Yh(t,e){return kd(t,e)}async function Xh(t,e){return kd(t,e)}async function lx(t,e){return kd(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cx(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Rt(t,e))}async function ux(t,e){return Xr(t,"POST","/v1/accounts:signInWithEmailLink",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends ca{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Dl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Dl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await xi(e,r,"signInWithPassword");return Qh(e,i)}else return Qh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await xi(e,r,"signInWithPassword");return Qh(e,s)}else return Promise.reject(i)});case"emailLink":return cx(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nb(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ux(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t,e){return Xr(t,"POST","/v1/accounts:signInWithIdp",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="http://localhost";class Ar extends ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ar(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}buildRequest(){const e={requestUri:dx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=oa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hx(t,e){return Ot(t,"POST","/v1/accounts:sendVerificationCode",Rt(t,e))}async function fx(t,e){return Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Rt(t,e))}async function mx(t,e){const n=await Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Rt(t,e));if(n.temporaryProof)throw Ga(t,"account-exists-with-different-credential",n);return n}const px={USER_NOT_FOUND:"user-not-found"};async function _x(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xr(t,"POST","/v1/accounts:signInWithPhoneNumber",Rt(t,n),px)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends ca{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Os({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Os({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return fx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return mx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return _x(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Os({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function yx(t){const e=yo(Ha(t)).link,n=e?yo(Ha(e)).deep_link_id:null,r=yo(Ha(t)).deep_link_id;return(r?yo(Ha(r)).link:null)||r||n||e||t}class Od{constructor(e){var n,r,i,s,o,a;const l=yo(Ha(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,c=gx((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&h&&c,"argument-error"),this.apiKey=u,this.operation=c,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=yx(e);try{return new Od(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(){this.providerId=Gi.PROVIDER_ID}static credential(e,n){return Dl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Od.parseLink(n);return Q(r,"argument-error"),Dl._fromEmailAndCode(e,r.code,r.tenantId)}}Gi.PROVIDER_ID="password";Gi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Gi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends Jr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ro extends ua{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return Q("providerId"in n&&"signInMethod"in n,"argument-error"),Ar._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return Q(e.idToken||e.accessToken,"argument-error"),Ar._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ro.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ro.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Ro(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends ua{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends ua{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends ua{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vx="http://localhost";class Fo extends ca{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return $r(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$r(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$r(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Fo(r,s)}static _create(e,n){return new Fo(e,n)}buildRequest(){return{requestUri:vx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ix="saml.";class Vu extends Jr{constructor(e){Q(e.startsWith(Ix),"argument-error"),super(e)}static credentialFromResult(e){return Vu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Vu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Fo.fromJSON(e);return Q(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Fo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends ua{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e){return Xr(t,"POST","/v1/accounts:signUp",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cs._fromIdTokenResponse(e,r,i),o=nv(r);return new Gn({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=nv(r);return new Gn({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function nv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ex(t){var e;const n=yt(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Gn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await mu(n,{returnSecureToken:!0}),i=await Gn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu extends on{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function rb(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tx(t,e){const n=de(t);await Nd(!0,n,e);const{providerUserInfo:r}=await N1(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=ib(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Kp(t,e,n=!1){const r=await Gr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gn._forOperation(t,"link",r)}async function Nd(t,e,n){await Nl(e);const r=ib(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";Q(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sb(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Gr(t,rb(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Cd(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),Gn._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ob(t,e,n=!1){const r="signIn",i=await rb(t,r,e),s=await Gn._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function xd(t,e){return ob(yt(t),e)}async function ab(t,e){const n=de(t);return await Nd(!1,n,e.providerId),Kp(n,e)}async function lb(t,e){return sb(de(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wx(t,e){return Xr(t,"POST","/v1/accounts:signInWithCustomToken",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bx(t,e){const n=yt(t),r=await wx(n,{token:e,returnSecureToken:!0}),i=await Gn._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?zp._fromServerResponse(e,n):"totpInfo"in n?Qp._fromServerResponse(e,n):Zt(e,"internal-error")}}class zp extends dc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new zp(n)}}class Qp extends dc{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Qp(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){var r;Q(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(t){const e=yt(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Ax(t,e,n){var r;const i=yt(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await xi(i,s,"getOobCode",!0);n&&So(i,o,n),await Yh(i,o)}else n&&So(i,s,n),await Yh(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await xi(i,s,"getOobCode",!0);n&&So(i,a,n),await Yh(i,a)}else return Promise.reject(o)})}async function Rx(t,e,n){await tb(de(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yp(t),r})}async function Sx(t,e){await ox(de(t),{oobCode:e})}async function cb(t,e){const n=de(t),r=await tb(n,{oobCode:e}),i=r.requestType;switch(Q(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":Q(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":Q(r.mfaInfo,n,"internal-error");default:Q(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=dc._fromServerResponse(yt(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function Px(t,e){const{data:n}=await cb(de(t),e);return n.email}async function Cx(t,e,n){var r;const i=yt(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await xi(i,s,"signUpPassword");o=mu(i,u)}else o=mu(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const h=await xi(i,s,"signUpPassword");return mu(i,h)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Yp(t),u}),l=await Gn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function kx(t,e,n){return xd(de(t),Gi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Yp(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ox(t,e,n){var r;const i=yt(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){Q(l.handleCodeInApp,i,"argument-error"),l&&So(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await xi(i,s,"getOobCode",!0);o(a,n),await Xh(i,a)}else o(s,n),await Xh(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await xi(i,s,"getOobCode",!0);o(l,n),await Xh(i,l)}else return Promise.reject(a)})}function Nx(t,e){const n=Od.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function xx(t,e,n){const r=de(t),i=Gi.credentialWithLink(e,n||Ol());return Q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,e){return Ot(t,"POST","/v1/accounts:createAuthUri",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(t,e){const n=qp()?Ol():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await Dx(de(t),r);return i||[]}async function Vx(t,e){const n=de(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&So(n.auth,i,e);const{email:s}=await ax(n.auth,i);s!==t.email&&await t.reload()}async function Mx(t,e,n){const r=de(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&So(r.auth,s,n);const{email:o}=await lx(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fx(t,e){return Ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ux(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=de(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Gr(r,Fx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function $x(t,e){return ub(de(t),e,null)}function Bx(t,e){return ub(de(t),null,e)}async function ub(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Gr(t,nb(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jx(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Cd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Po(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new qx(s,i);case"github.com":return new Wx(s,i);case"google.com":return new Hx(s,i);case"twitter.com":return new Gx(s,i,t.screenName||null);case"custom":case"anonymous":return new Po(s,null);default:return new Po(s,r,i)}}class Po{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class db extends Po{constructor(e,n,r,i){super(e,n,r),this.username=i}}class qx extends Po{constructor(e,n){super(e,"facebook.com",n)}}class Wx extends db{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class Hx extends Po{constructor(e,n){super(e,"google.com",n)}}class Gx extends db{constructor(e,n,r){super(e,"twitter.com",n,r)}}function Kx(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:jx(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Is("enroll",e,n)}static _fromMfaPendingCredential(e){return new Is("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Is._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Is._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=yt(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>dc._fromServerResponse(r,a));Q(i.mfaPendingCredential,r,"internal-error");const o=Is._fromMfaPendingCredential(i.mfaPendingCredential);return new Xp(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await Gn._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return Q(n.user,r,"internal-error"),Gn._forOperation(n.user,n.operationType,u);default:Zt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function zx(t,e){var n;const r=de(t),i=e;return Q(e.customData.operationType,r,"argument-error"),Q((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),Xp._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(t,e){return Ot(t,"POST","/v2/accounts/mfaEnrollment:start",Rt(t,e))}function Yx(t,e){return Ot(t,"POST","/v2/accounts/mfaEnrollment:finalize",Rt(t,e))}function Xx(t,e){return Ot(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Rt(t,e))}class Jp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>dc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Jp(e)}async getSession(){return Is._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Gr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Gr(this.user,Xx(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const Jh=new WeakMap;function Jx(t){const e=de(t);return Jh.has(e)||Jh.set(e,Jp._fromUser(e)),Jh.get(e)}const Fu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(){const t=mt();return Hp(t)||la(t)}const eD=1e3,tD=10;class fb extends hb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Zx()&&H1(),this.fallbackToPolling=Xw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);W1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,tD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fb.type="LOCAL";const Zp=fb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb extends hb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mb.type="SESSION";const Ls=mb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Dd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await nD(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dd.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=hc("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(c){const d=c;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function iD(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function sD(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aD(){return e_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="firebaseLocalStorageDb",lD=1,Uu="firebaseLocalStorage",_b="fbase_key";class fc{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ld(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function cD(){const t=indexedDB.deleteDatabase(pb);return new fc(t).toPromise()}function Kf(){const t=indexedDB.open(pb,lD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uu,{keyPath:_b})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uu)?e(r):(r.close(),await cD(),e(await Kf()))})})}async function rv(t,e,n){const r=Ld(t,!0).put({[_b]:e,value:n});return new fc(r).toPromise()}async function uD(t,e){const n=Ld(t,!1).get(e),r=await new fc(n).toPromise();return r===void 0?null:r.value}function iv(t,e){const n=Ld(t,!0).delete(e);return new fc(n).toPromise()}const dD=800,hD=3;class gb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return e_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dd._getInstance(aD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sD(),!this.activeServiceWorker)return;this.sender=new rD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kf();return await rv(e,Fu,"1"),await iv(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ld(i,!1).getAll();return new fc(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}gb.type="LOCAL";const Ll=gb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fD(t,e){return Ot(t,"POST","/v2/accounts/mfaSignIn:start",Rt(t,e))}function mD(t,e){return Ot(t,"POST","/v2/accounts/mfaSignIn:finalize",Rt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pD=500,_D=6e4,Hc=1e12;class gD{constructor(e){this.auth=e,this.counter=Hc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new yD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||Hc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||Hc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||Hc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class yD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;Q(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=vD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},_D)},pD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=Zw("rcb"),ID=new cc(3e4,6e4),ED="https://www.google.com/recaptcha/api.js?";class TD{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Pt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return Q(wD(n),e,"argument-error"),this.shouldResolveImmediately(n)&&Qy(Pt().grecaptcha)?Promise.resolve(Pt().grecaptcha):new Promise((r,i)=>{const s=Pt().setTimeout(()=>{i(Yt(e,"network-request-failed"))},ID.get());Pt()[Zh]=()=>{Pt().clearTimeout(s),delete Pt()[Zh];const a=Pt().grecaptcha;if(!a||!Qy(a)){i(Yt(e,"internal-error"));return}const l=a.render;a.render=(u,h)=>{const c=l(u,h);return this.counter++,c},this.hostLanguage=n,r(a)};const o=`${ED}?${oa({onload:Zh,render:"explicit",hl:n})}`;Gp(o).catch(()=>{clearTimeout(s),i(Yt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Pt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function wD(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class bD{async load(e){return new gD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb="recaptcha",AD={theme:"light",type:"image"};let RD=class{constructor(e,n,r=Object.assign({},AD)){this.parameters=r,this.type=yb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(e),this.isInvisible=this.parameters.size==="invisible",Q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;Q(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new bD:new TD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){Q(!this.parameters.sitekey,this.auth,"argument-error"),Q(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),Q(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Pt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){Q(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){Q(qp()&&!e_(),this.auth,"internal-error"),await SD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await C1(this.auth);Q(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return Q(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function SD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Os._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function PD(t,e,n){const r=yt(t),i=await Vd(r,e,de(n));return new t_(i,s=>xd(r,s))}async function CD(t,e,n){const r=de(t);await Nd(!1,r,"phone");const i=await Vd(r.auth,e,de(n));return new t_(i,s=>ab(r,s))}async function kD(t,e,n){const r=de(t),i=await Vd(r.auth,e,de(n));return new t_(i,s=>lb(r,s))}async function Vd(t,e,n){var r;const i=await n.verify();try{Q(typeof i=="string",t,"argument-error"),Q(n.type===yb,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return Q(o.type==="enroll",t,"internal-error"),(await Qx(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{Q(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return Q(a,t,"missing-multi-factor-info"),(await fD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await hx(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function OD(t,e){await Kp(de(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vs=class pu{constructor(e){this.providerId=pu.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,n){return Vd(this.auth,e,de(n))}static credential(e,n){return Os._fromVerification(e,n)}static credentialFromResult(e){const n=e;return pu.credentialFromTaggedObject(n)}static credentialFromError(e){return pu.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Os._fromTokenResponse(n,r):null}};Vs.PROVIDER_ID="phone";Vs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t,e){return e?Dn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_ extends ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $r(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ND(t){return ob(t.auth,new n_(t),t.bypassAuthState)}function xD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),sb(n,new n_(t),t.bypassAuthState)}async function DD(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Kp(n,new n_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return DD;case"reauthViaPopup":case"reauthViaRedirect":return xD;default:Zt(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LD=new cc(2e3,1e4);async function VD(t,e,n){const r=yt(t);aa(t,e,Jr);const i=Ys(r,n);return new Lr(r,"signInViaPopup",e,i).executeNotNull()}async function MD(t,e,n){const r=de(t);aa(r.auth,e,Jr);const i=Ys(r.auth,n);return new Lr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function FD(t,e,n){const r=de(t);aa(r.auth,e,Jr);const i=Ys(r.auth,n);return new Lr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Lr extends vb{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Lr.currentPopupAction&&Lr.currentPopupAction.cancel(),Lr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Yt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Yt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Lr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Yt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,LD.get())};e()}}Lr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="pendingRedirect",sl=new Map;class $D extends vb{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=sl.get(this.auth._key());if(!e){try{const r=await BD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}sl.set(this.auth._key(),e)}return this.bypassAuthState||sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BD(t,e){const n=Eb(e),r=Ib(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function r_(t,e){return Ib(t)._set(Eb(e),"true")}function jD(){sl.clear()}function i_(t,e){sl.set(t._key(),e)}function Ib(t){return Dn(t._redirectPersistence)}function Eb(t){return ks(UD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qD(t,e,n){return WD(t,e,n)}async function WD(t,e,n){const r=yt(t);aa(t,e,Jr),await r._initializationPromise;const i=Ys(r,n);return await r_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function HD(t,e,n){return GD(t,e,n)}async function GD(t,e,n){const r=de(t);aa(r.auth,e,Jr),await r.auth._initializationPromise;const i=Ys(r.auth,n);await r_(i,r.auth);const s=await Tb(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function KD(t,e,n){return zD(t,e,n)}async function zD(t,e,n){const r=de(t);aa(r.auth,e,Jr),await r.auth._initializationPromise;const i=Ys(r.auth,n);await Nd(!1,r,e.providerId),await r_(i,r.auth);const s=await Tb(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function QD(t,e){return await yt(t)._initializationPromise,Md(t,e,!1)}async function Md(t,e,n=!1){const r=yt(t),i=Ys(r,e),o=await new $D(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function Tb(t){const e=hc(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD=10*60*1e3;class wb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!bb(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Yt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YD&&this.cachedEventUids.clear(),this.cachedEventUids.has(sv(e))}saveEventToCache(e){this.cachedEventUids.add(sv(e)),this.lastProcessedEventTime=Date.now()}}function sv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bb(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return Ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZD=/^https?/;async function eL(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ab(t);for(const n of e)try{if(tL(n))return}catch{}Zt(t,"unauthorized-domain")}function tL(t){const e=Ol(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZD.test(n))return!1;if(JD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nL=new cc(3e4,6e4);function ov(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rL(t){return new Promise((e,n)=>{var r,i,s;function o(){ov(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ov(),n(Yt(t,"network-request-failed"))},timeout:nL.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)o();else{const a=Zw("iframefcb");return Pt()[a]=()=>{gapi.load?o():n(Yt(t,"network-request-failed"))},Gp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw _u=null,e})}let _u=null;function iL(t){return _u=_u||rL(t),_u}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sL=new cc(5e3,15e3),oL="__/auth/iframe",aL="emulator/auth/iframe",lL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uL(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wp(e,aL):`https://${t.config.authDomain}/${oL}`,r={apiKey:e.apiKey,appName:t.name,v:Yr},i=cL.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${oa(r).slice(1)}`}async function dL(t){const e=await iL(t),n=Pt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:uL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lL,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Yt(t,"network-request-failed"),a=Pt().setTimeout(()=>{s(o)},sL.get());function l(){Pt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fL=500,mL=600,pL="_blank",_L="http://localhost";class av{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gL(t,e,n,r=fL,i=mL){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hL),{width:r.toString(),height:i.toString(),top:s,left:o}),u=mt().toLowerCase();n&&(a=Kw(u)?pL:n),Gw(u)&&(e=e||_L,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[f,m])=>`${d}${f}=${m},`,"");if(q1(u)&&a!=="_self")return yL(e||"",a),new av(null);const c=window.open(e||"",a,h);Q(c,t,"popup-blocked");try{c.focus()}catch{}return new av(c)}function yL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL="__/auth/handler",IL="emulator/auth/handler",EL=encodeURIComponent("fac");async function zf(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Yr,eventId:i};if(e instanceof Jr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XO(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,c]of Object.entries(s||{}))o[h]=c}if(e instanceof ua){const h=e.getScopes().filter(c=>c!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${EL}=${encodeURIComponent(l)}`:"";return`${TL(t)}?${oa(a).slice(1)}${u}`}function TL({config:t}){return t.emulator?Wp(t,IL):`https://${t.authDomain}/${vL}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="webStorageSupport";class wL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ls,this._completeRedirectFn=Md,this._overrideRedirectResult=i_}async _openPopup(e,n,r,i){var s;er((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await zf(e,n,r,Ol(),i);return gL(e,o,hc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zf(e,n,r,Ol(),i);return iD(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(er(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dL(e),r=new wb(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ef,{type:ef},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ef];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eL(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xw()||Hp()||la()}}const bL=wL;class AL{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return _r("unexpected MultiFactorSessionType")}}}class s_ extends AL{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new s_(e)}_finalizeEnroll(e,n,r){return Yx(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return mD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Rb{constructor(){}static assertion(e){return s_._fromCredential(e)}}Rb.FACTOR_ID="phone";var lv="@firebase/auth",cv="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function PL(t){Hr(new Hn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jw(t)},u=new Y1(r,i,s,l);return nx(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Hn("auth-internal",e=>{const n=yt(e.getProvider("auth").getImmediate());return(r=>new RL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wn(lv,cv,SL(t)),Wn(lv,cv,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CL=5*60;jO("authIdTokenMaxAge");PL("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kL=2e3;async function OL(t,e,n){var r;const{BuildInfo:i}=Ms();er(e.sessionId,"AuthEvent did not contain a session ID");const s=await VL(e.sessionId),o={};return la()?o.ibi=i.packageName:uc()?o.apn=i.packageName:Zt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,zf(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function NL(t){const{BuildInfo:e}=Ms(),n={};la()?n.iosBundleId=e.packageName:uc()?n.androidPackageName=e.packageName:Zt(t,"operation-not-supported-in-this-environment"),await Ab(t,n)}function xL(t){const{cordova:e}=Ms();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,j1()?"_blank":"_system","location=yes"),n(i)})})}async function DL(t,e,n){const{cordova:r}=Ms();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var c;s();const d=(c=r.plugins.browsertab)===null||c===void 0?void 0:c.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(Yt(t,"redirect-cancelled-by-user"))},kL))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),uc()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function LL(t){var e,n,r,i,s,o,a,l,u,h;const c=Ms();Q(typeof((e=c==null?void 0:c.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),Q(typeof((n=c==null?void 0:c.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),Q(typeof((s=(i=(r=c==null?void 0:c.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Q(typeof((l=(a=(o=c==null?void 0:c.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),Q(typeof((h=(u=c==null?void 0:c.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function VL(t){const e=ML(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function ML(t){if(er(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FL=20;class UL extends wb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function $L(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:qL(),postBody:null,tenantId:t.tenantId,error:Yt(t,"no-auth-event")}}function BL(t,e){return Qf()._set(Yf(t),e)}async function uv(t){const e=await Qf()._get(Yf(t));return e&&await Qf()._remove(Yf(t)),e}function jL(t,e){var n,r;const i=HL(e);if(i.includes("/__/auth/callback")){const s=gu(i),o=s.firebaseError?WL(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Yt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function qL(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<FL;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Qf(){return Dn(Zp)}function Yf(t){return ks("authEvent",t.config.apiKey,t.name)}function WL(t){try{return JSON.parse(t)}catch{return null}}function HL(t){const e=gu(t),n=e.link?decodeURIComponent(e.link):void 0,r=gu(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return gu(i).link||i||r||n||t}function gu(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return yo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GL=500;class KL{constructor(){this._redirectPersistence=Ls,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Md,this._overrideRedirectResult=i_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new UL(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Zt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){LL(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),jD(),await this._originValidation(e);const o=$L(e,r,i);await BL(e,o);const a=await OL(e,o,n),l=await xL(a);return DL(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NL(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ms(),o=setTimeout(async()=>{await uv(e),n.onEvent(dv())},GL),a=async h=>{clearTimeout(o);const c=await uv(e);let d=null;c&&(h!=null&&h.url)&&(d=jL(c,h.url)),n.onEvent(d||dv())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ms().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(u)&&a({url:h}),typeof l=="function")try{l(h)}catch(c){console.error(c)}}}}const zL=KL;function dv(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Yt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(t,e){yt(t)._logFramework(e)}var YL="@firebase/auth-compat",XL="0.4.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JL=1e3;function ol(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function ZL(){return ol()==="http:"||ol()==="https:"}function Sb(t=mt()){return!!((ol()==="file:"||ol()==="ionic:"||ol()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function eV(){return Mp()||Sd()}function tV(){return Aw()&&(document==null?void 0:document.documentMode)===11}function nV(t=mt()){return/Edge\/\d+/.test(t)}function rV(t=mt()){return tV()||nV(t)}function Pb(){try{const t=self.localStorage,e=hc();if(t)return t.setItem(e,"1"),t.removeItem(e),rV()?Pl():!0}catch{return o_()&&Pl()}return!1}function o_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function tf(){return(ZL()||bw()||Sb())&&!eV()&&Pb()&&!o_()}function Cb(){return Sb()&&typeof document<"u"}async function iV(){return Cb()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},JL);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function sV(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={LOCAL:"local",NONE:"none",SESSION:"session"},Sa=Q,kb="persistence";function oV(t,e){if(Sa(Object.values(xn).includes(e),t,"invalid-persistence-type"),Mp()){Sa(e!==xn.SESSION,t,"unsupported-persistence-type");return}if(Sd()){Sa(e===xn.NONE,t,"unsupported-persistence-type");return}if(o_()){Sa(e===xn.NONE||e===xn.LOCAL&&Pl(),t,"unsupported-persistence-type");return}Sa(e===xn.NONE||Pb(),t,"unsupported-persistence-type")}async function Xf(t){await t._initializationPromise;const e=Ob(),n=ks(kb,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function aV(t,e){const n=Ob();if(!n)return[];const r=ks(kb,t,e);switch(n.getItem(r)){case xn.NONE:return[Mo];case xn.LOCAL:return[Ll,Ls];case xn.SESSION:return[Ls];default:return[]}}function Ob(){var t;try{return((t=sV())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lV=Q;class Ii{constructor(){this.browserResolver=Dn(bL),this.cordovaResolver=Dn(zL),this.underlyingResolver=null,this._redirectPersistence=Ls,this._completeRedirectFn=Md,this._overrideRedirectResult=i_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Cb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return lV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){return t.unwrap()}function cV(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){return xb(t)}function dV(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new hV(t,zx(t,e))}else if(r){const i=xb(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function xb(t){const{_tokenResponse:e}=t instanceof on?t.customData:t;if(!e)return null;if(!(t instanceof on)&&"temporaryProof"in e&&"phoneNumber"in e)return Vs.credentialFromResult(t);const n=e.providerId;if(!n||n===Ra.PASSWORD)return null;let r;switch(n){case Ra.GOOGLE:r=ur;break;case Ra.FACEBOOK:r=cr;break;case Ra.GITHUB:r=dr;break;case Ra.TWITTER:r=hr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Fo._create(n,a):Ar._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Ro(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof on?r.credentialFromError(t):r.credentialFromResult(t)}function En(t,e){return e.catch(n=>{throw n instanceof on&&dV(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:uV(n),additionalUserInfo:Kx(n),user:Fd.getOrCreate(i)}})}async function Jf(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>En(t,n.confirm(r))}}class hV{constructor(e,n){this.resolver=n,this.auth=cV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return En(Nb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fd=class Ka{constructor(e){this._delegate=e,this.multiFactor=Jx(e)}static getOrCreate(e){return Ka.USER_MAP.has(e)||Ka.USER_MAP.set(e,new Ka(e)),Ka.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return En(this.auth,ab(this._delegate,e))}async linkWithPhoneNumber(e,n){return Jf(this.auth,CD(this._delegate,e,n))}async linkWithPopup(e){return En(this.auth,FD(this._delegate,e,Ii))}async linkWithRedirect(e){return await Xf(yt(this.auth)),KD(this._delegate,e,Ii)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return En(this.auth,lb(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Jf(this.auth,kD(this._delegate,e,n))}reauthenticateWithPopup(e){return En(this.auth,MD(this._delegate,e,Ii))}async reauthenticateWithRedirect(e){return await Xf(yt(this.auth)),HD(this._delegate,e,Ii)}sendEmailVerification(e){return Vx(this._delegate,e)}async unlink(e){return await Tx(this._delegate,e),this}updateEmail(e){return $x(this._delegate,e)}updatePassword(e){return Bx(this._delegate,e)}updatePhoneNumber(e){return OD(this._delegate,e)}updateProfile(e){return Ux(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return Mx(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Fd.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=Q;let Zf=class{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Pa(r,"invalid-api-key",{appName:e.name}),Pa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Ii:void 0;this._delegate=n.initialize({options:{persistence:fV(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(E1),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Fd.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){rx(this._delegate,e,n)}applyActionCode(e){return Sx(this._delegate,e)}checkActionCode(e){return cb(this._delegate,e)}confirmPasswordReset(e,n){return Rx(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return En(this._delegate,Cx(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return Lx(this._delegate,e)}isSignInWithEmailLink(e){return Nx(this._delegate,e)}async getRedirectResult(){Pa(tf(),this._delegate,"operation-not-supported-in-this-environment");const e=await QD(this._delegate,Ii);return e?En(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QL(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=hv(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=hv(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return Ox(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Ax(this._delegate,e,n||void 0)}async setPersistence(e){oV(this._delegate,e);let n;switch(e){case xn.SESSION:n=Ls;break;case xn.LOCAL:n=await Dn(Ll)._isAvailable()?Ll:Zp;break;case xn.NONE:n=Mo;break;default:return Zt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return En(this._delegate,Ex(this._delegate))}signInWithCredential(e){return En(this._delegate,xd(this._delegate,e))}signInWithCustomToken(e){return En(this._delegate,bx(this._delegate,e))}signInWithEmailAndPassword(e,n){return En(this._delegate,kx(this._delegate,e,n))}signInWithEmailLink(e,n){return En(this._delegate,xx(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Jf(this._delegate,PD(this._delegate,e,n))}async signInWithPopup(e){return Pa(tf(),this._delegate,"operation-not-supported-in-this-environment"),En(this._delegate,VD(this._delegate,e,Ii))}async signInWithRedirect(e){return Pa(tf(),this._delegate,"operation-not-supported-in-this-environment"),await Xf(this._delegate),qD(this._delegate,e,Ii)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Px(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}};Zf.Persistence=xn;function hv(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Fd.getOrCreate(o)),error:e,complete:n}}function fV(t,e){const n=aV(t,e);if(typeof self<"u"&&!n.includes(Ll)&&n.push(Ll),typeof window<"u")for(const r of[Zp,Ls])n.includes(r)||n.push(r);return n.includes(Mo)||n.push(Mo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(){this.providerId="phone",this._delegate=new Vs(Nb(Pr.auth()))}static credential(e,n){return Vs.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}a_.PHONE_SIGN_IN_METHOD=Vs.PHONE_SIGN_IN_METHOD;a_.PROVIDER_ID=Vs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=Q;class pV{constructor(e,n,r=Pr.app()){var i;mV((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new RD(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V="auth-compat";function gV(t){t.INTERNAL.registerComponent(new Hn(_V,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Zf(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:oo.EMAIL_SIGNIN,PASSWORD_RESET:oo.PASSWORD_RESET,RECOVER_EMAIL:oo.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:oo.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:oo.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:oo.VERIFY_EMAIL}},EmailAuthProvider:Gi,FacebookAuthProvider:cr,GithubAuthProvider:dr,GoogleAuthProvider:ur,OAuthProvider:Ro,SAMLAuthProvider:Vu,PhoneAuthProvider:a_,PhoneMultiFactorGenerator:Rb,RecaptchaVerifier:pV,TwitterAuthProvider:hr,Auth:Zf,AuthCredential:ca,Error:on}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(YL,XL)}gV(Pr);var yV=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee,l_=l_||{},we=yV||self;function Ud(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mc(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function vV(t){return Object.prototype.hasOwnProperty.call(t,nf)&&t[nf]||(t[nf]=++IV)}var nf="closure_uid_"+(1e9*Math.random()>>>0),IV=0;function EV(t,e,n){return t.call.apply(t.bind,arguments)}function TV(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function an(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?an=EV:an=TV,an.apply(null,arguments)}function Gc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Bt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ki(){this.s=this.s,this.o=this.o}var wV=0;Ki.prototype.s=!1;Ki.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),wV!=0)&&vV(this)};Ki.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Db=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function c_(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function fv(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ud(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function ln(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ln.prototype.h=function(){this.defaultPrevented=!0};var bV=function(){if(!we.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{we.addEventListener("test",()=>{},e),we.removeEventListener("test",()=>{},e)}catch{}return t}();function Vl(t){return/^[\s\xa0]*$/.test(t)}function $d(){var t=we.navigator;return t&&(t=t.userAgent)?t:""}function fr(t){return $d().indexOf(t)!=-1}function u_(t){return u_[" "](t),t}u_[" "]=function(){};function AV(t,e){var n=gM;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var RV=fr("Opera"),Uo=fr("Trident")||fr("MSIE"),Lb=fr("Edge"),em=Lb||Uo,Vb=fr("Gecko")&&!($d().toLowerCase().indexOf("webkit")!=-1&&!fr("Edge"))&&!(fr("Trident")||fr("MSIE"))&&!fr("Edge"),SV=$d().toLowerCase().indexOf("webkit")!=-1&&!fr("Edge");function Mb(){var t=we.document;return t?t.documentMode:void 0}var tm;e:{var rf="",sf=function(){var t=$d();if(Vb)return/rv:([^\);]+)(\)|;)/.exec(t);if(Lb)return/Edge\/([\d\.]+)/.exec(t);if(Uo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SV)return/WebKit\/(\S+)/.exec(t);if(RV)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(sf&&(rf=sf?sf[1]:""),Uo){var of=Mb();if(of!=null&&of>parseFloat(rf)){tm=String(of);break e}}tm=rf}var nm;if(we.document&&Uo){var mv=Mb();nm=mv||parseInt(tm,10)||void 0}else nm=void 0;var PV=nm;function Ml(t,e){if(ln.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Vb){e:{try{u_(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ml.$.h.call(this)}}Bt(Ml,ln);var CV={2:"touch",3:"pen",4:"mouse"};Ml.prototype.h=function(){Ml.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var pc="closure_listenable_"+(1e6*Math.random()|0),kV=0;function OV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++kV,this.fa=this.ia=!1}function Bd(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function d_(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Fb(t){const e={};for(const n in t)e[n]=t[n];return e}const pv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ub(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pv.length;s++)n=pv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function jd(t){this.src=t,this.g={},this.h=0}jd.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=im(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new OV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function rm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Db(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Bd(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function im(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var h_="closure_lm_"+(1e6*Math.random()|0),af={};function $b(t,e,n,r,i){if(r&&r.once)return jb(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)$b(t,e[s],n,r,i);return null}return n=p_(n),t&&t[pc]?t.O(e,n,mc(r)?!!r.capture:!!r,i):Bb(t,e,n,!1,r,i)}function Bb(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=mc(i)?!!i.capture:!!i,a=m_(t);if(a||(t[h_]=a=new jd(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bV||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Wb(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xV(){function t(n){return e.call(t.src,t.listener,n)}const e=DV;return t}function jb(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)jb(t,e[s],n,r,i);return null}return n=p_(n),t&&t[pc]?t.P(e,n,mc(r)?!!r.capture:!!r,i):Bb(t,e,n,!0,r,i)}function qb(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)qb(t,e[s],n,r,i);else r=mc(r)?!!r.capture:!!r,n=p_(n),t&&t[pc]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=im(s,n,r,i),-1<n&&(Bd(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=m_(t))&&(e=t.g[e.toString()],t=-1,e&&(t=im(e,n,r,i)),(n=-1<t?e[t]:null)&&f_(n))}function f_(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[pc])rm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Wb(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=m_(e))?(rm(n,t),n.h==0&&(n.src=null,e[h_]=null)):Bd(t)}}}function Wb(t){return t in af?af[t]:af[t]="on"+t}function DV(t,e){if(t.fa)t=!0;else{e=new Ml(e,this);var n=t.listener,r=t.la||t.src;t.ia&&f_(t),t=n.call(r,e)}return t}function m_(t){return t=t[h_],t instanceof jd?t:null}var lf="__closure_events_fn_"+(1e9*Math.random()>>>0);function p_(t){return typeof t=="function"?t:(t[lf]||(t[lf]=function(e){return t.handleEvent(e)}),t[lf])}function $t(){Ki.call(this),this.i=new jd(this),this.S=this,this.J=null}Bt($t,Ki);$t.prototype[pc]=!0;$t.prototype.removeEventListener=function(t,e,n,r){qb(this,t,e,n,r)};function Xt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ln(e,t);else if(e instanceof ln)e.target=e.target||t;else{var i=e;e=new ln(r,t),Ub(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Kc(o,r,!0,e)&&i}if(o=e.g=t,i=Kc(o,r,!0,e)&&i,i=Kc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Kc(o,r,!1,e)&&i}$t.prototype.N=function(){if($t.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Bd(n[r]);delete t.g[e],t.h--}}this.J=null};$t.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};$t.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Kc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&rm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var __=we.JSON.stringify;class LV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function VV(){var t=g_;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MV{constructor(){this.h=this.g=null}add(e,n){const r=Hb.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Hb=new LV(()=>new FV,t=>t.reset());class FV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function $V(t){we.setTimeout(()=>{throw t},0)}let Fl,Ul=!1,g_=new MV,Gb=()=>{const t=we.Promise.resolve(void 0);Fl=()=>{t.then(BV)}};var BV=()=>{for(var t;t=VV();){try{t.h.call(t.g)}catch(n){$V(n)}var e=Hb;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ul=!1};function qd(t,e){$t.call(this),this.h=t||1,this.g=e||we,this.j=an(this.qb,this),this.l=Date.now()}Bt(qd,$t);ee=qd.prototype;ee.ga=!1;ee.T=null;ee.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Xt(this,"tick"),this.ga&&(y_(this),this.start()))}};ee.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function y_(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}ee.N=function(){qd.$.N.call(this),y_(this),delete this.g};function v_(t,e,n){if(typeof t=="function")n&&(t=an(t,n));else if(t&&typeof t.handleEvent=="function")t=an(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:we.setTimeout(t,e||0)}function Kb(t){t.g=v_(()=>{t.g=null,t.i&&(t.i=!1,Kb(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class jV extends Ki{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Kb(this)}N(){super.N(),this.g&&(we.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function $l(t){Ki.call(this),this.h=t,this.g={}}Bt($l,Ki);var _v=[];function zb(t,e,n,r){Array.isArray(n)||(n&&(_v[0]=n.toString()),n=_v);for(var i=0;i<n.length;i++){var s=$b(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qb(t){d_(t.g,function(e,n){this.g.hasOwnProperty(n)&&f_(e)},t),t.g={}}$l.prototype.N=function(){$l.$.N.call(this),Qb(this)};$l.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Wd(){this.g=!0}Wd.prototype.Ea=function(){this.g=!1};function qV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var c=h.split("_");o=2<=c.length&&c[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function WV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GV(t,n)+(r?" "+r:"")})}function HV(t,e){t.info(function(){return"TIMEOUT: "+e})}Wd.prototype.info=function(){};function GV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return __(n)}catch{return e}}var Xs={},gv=null;function Hd(){return gv=gv||new $t}Xs.Ta="serverreachability";function Yb(t){ln.call(this,Xs.Ta,t)}Bt(Yb,ln);function Bl(t){const e=Hd();Xt(e,new Yb(e))}Xs.STAT_EVENT="statevent";function Xb(t,e){ln.call(this,Xs.STAT_EVENT,t),this.stat=e}Bt(Xb,ln);function pn(t){const e=Hd();Xt(e,new Xb(e,t))}Xs.Ua="timingevent";function Jb(t,e){ln.call(this,Xs.Ua,t),this.size=e}Bt(Jb,ln);function _c(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return we.setTimeout(function(){t()},e)}var Gd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Zb={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function I_(){}I_.prototype.h=null;function yv(t){return t.h||(t.h=t.i())}function e0(){}var gc={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function E_(){ln.call(this,"d")}Bt(E_,ln);function T_(){ln.call(this,"c")}Bt(T_,ln);var sm;function Kd(){}Bt(Kd,I_);Kd.prototype.g=function(){return new XMLHttpRequest};Kd.prototype.i=function(){return{}};sm=new Kd;function yc(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new $l(this),this.P=KV,t=em?125:void 0,this.V=new qd(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new t0}function t0(){this.i=null,this.g="",this.h=!1}var KV=45e3,om={},$u={};ee=yc.prototype;ee.setTimeout=function(t){this.P=t};function am(t,e,n){t.L=1,t.v=Qd(Kr(e)),t.s=n,t.S=!0,n0(t,null)}function n0(t,e){t.G=Date.now(),vc(t),t.A=Kr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),u0(n.i,"t",r),t.C=0,n=t.l.J,t.h=new t0,t.g=O0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new jV(an(t.Pa,t,t.g),t.O)),zb(t.U,t.g,"readystatechange",t.nb),e=t.I?Fb(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Bl(),qV(t.j,t.u,t.A,t.m,t.W,t.s)}ee.nb=function(t){t=t.target;const e=this.M;e&&gr(t)==3?e.l():this.Pa(t)};ee.Pa=function(t){try{if(t==this.g)e:{const h=gr(this.g);var e=this.g.Ia();const c=this.g.da();if(!(3>h)&&(h!=3||em||this.g&&(this.h.h||this.g.ja()||Tv(this.g)))){this.J||h!=4||e==7||(e==8||0>=c?Bl(3):Bl(2)),zd(this);var n=this.g.da();this.ca=n;t:if(r0(this)){var r=Tv(this.g);t="";var i=r.length,s=gr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Es(this),al(this);var o="";break t}this.h.i=new we.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WV(this.j,this.u,this.A,this.m,this.W,h,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Vl(a)){var u=a;break t}}u=null}if(n=u)vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,lm(this,n);else{this.i=!1,this.o=3,pn(12),Es(this),al(this);break e}}this.S?(i0(this,h,o),em&&this.i&&h==3&&(zb(this.U,this.V,"tick",this.mb),this.V.start())):(vo(this.j,this.m,o,null),lm(this,o)),h==4&&Es(this),this.i&&!this.J&&(h==4?S0(this.l,this):(this.i=!1,vc(this)))}else mM(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,pn(12)):(this.o=0,pn(13)),Es(this),al(this)}}}catch{}finally{}};function r0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function i0(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=zV(t,n),i==$u){e==4&&(t.o=4,pn(14),r=!1),vo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==om){t.o=4,pn(15),vo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vo(t.j,t.m,i,null),lm(t,i);r0(t)&&i!=$u&&i!=om&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,pn(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),P_(e),e.M=!0,pn(11))):(vo(t.j,t.m,n,"[Invalid Chunked Response]"),Es(t),al(t))}ee.mb=function(){if(this.g){var t=gr(this.g),e=this.g.ja();this.C<e.length&&(zd(this),i0(this,t,e),this.i&&t!=4&&vc(this))}};function zV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$u:(n=Number(e.substring(n,r)),isNaN(n)?om:(r+=1,r+n>e.length?$u:(e=e.slice(r,r+n),t.C=r+n,e)))}ee.cancel=function(){this.J=!0,Es(this)};function vc(t){t.Y=Date.now()+t.P,s0(t,t.P)}function s0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=_c(an(t.lb,t),e)}function zd(t){t.B&&(we.clearTimeout(t.B),t.B=null)}ee.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(HV(this.j,this.A),this.L!=2&&(Bl(),pn(17)),Es(this),this.o=2,al(this)):s0(this,this.Y-t)};function al(t){t.l.H==0||t.J||S0(t.l,t)}function Es(t){zd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,y_(t.V),Qb(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function lm(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||cm(n.i,t))){if(!t.K&&cm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qu(n),Zd(n);else break e;S_(n),pn(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=_c(an(n.ib,n),6e3));if(1>=f0(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ts(n,11)}else if((t.K||n.g==t)&&qu(n),!Vl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const h=u[3];h!=null&&(n.ra=h,n.l.info("VER="+n.ra));const c=u[4];c!=null&&(n.Ga=c,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const m=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var s=r.i;s.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(w_(s,s.h),s.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,rt(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=k0(r,r.J?r.pa:null,r.Y),o.K){m0(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(zd(a),vc(a)),r.g=o}else A0(r);0<n.j.length&&eh(n)}else u[0]!="stop"&&u[0]!="close"||Ts(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ts(n,7):R_(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}Bl(4)}catch{}}function QV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ud(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function YV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ud(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function o0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ud(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=YV(t),r=QV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var a0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ns(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ns){this.h=t.h,Bu(this,t.j),this.s=t.s,this.g=t.g,ju(this,t.m),this.l=t.l;var e=t.i,n=new jl;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vv(this,n),this.o=t.o}else t&&(e=String(t).match(a0))?(this.h=!1,Bu(this,e[1]||"",!0),this.s=za(e[2]||""),this.g=za(e[3]||"",!0),ju(this,e[4]),this.l=za(e[5]||"",!0),vv(this,e[6]||"",!0),this.o=za(e[7]||"")):(this.h=!1,this.i=new jl(null,this.h))}Ns.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qa(e,Iv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qa(e,Iv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qa(n,n.charAt(0)=="/"?eM:ZV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qa(n,nM)),t.join("")};function Kr(t){return new Ns(t)}function Bu(t,e,n){t.j=n?za(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ju(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vv(t,e,n){e instanceof jl?(t.i=e,rM(t.i,t.h)):(n||(e=Qa(e,tM)),t.i=new jl(e,t.h))}function rt(t,e,n){t.i.set(e,n)}function Qd(t){return rt(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function za(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qa(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,JV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function JV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Iv=/[#\/\?@]/g,ZV=/[#\?:]/g,eM=/[#\?]/g,tM=/[#\?@]/g,nM=/#/g;function jl(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zi(t){t.g||(t.g=new Map,t.h=0,t.i&&XV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}ee=jl.prototype;ee.add=function(t,e){zi(this),this.i=null,t=da(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function l0(t,e){zi(t),e=da(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function c0(t,e){return zi(t),e=da(t,e),t.g.has(e)}ee.forEach=function(t,e){zi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};ee.ta=function(){zi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};ee.Z=function(t){zi(this);let e=[];if(typeof t=="string")c0(this,t)&&(e=e.concat(this.g.get(da(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};ee.set=function(t,e){return zi(this),this.i=null,t=da(this,t),c0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};ee.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function u0(t,e,n){l0(t,e),0<n.length&&(t.i=null,t.g.set(da(t,e),c_(n)),t.h+=n.length)}ee.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function da(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function rM(t,e){e&&!t.j&&(zi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(l0(this,r),u0(this,i,n))},t)),t.j=e}var iM=class{constructor(t,e){this.g=t,this.map=e}};function d0(t){this.l=t||sM,we.PerformanceNavigationTiming?(t=we.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(we.g&&we.g.Ka&&we.g.Ka()&&we.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var sM=10;function h0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function f0(t){return t.h?1:t.g?t.g.size:0}function cm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function w_(t,e){t.g?t.g.add(e):t.h=e}function m0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}d0.prototype.cancel=function(){if(this.i=p0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function p0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return c_(t.i)}var oM=class{stringify(t){return we.JSON.stringify(t,void 0)}parse(t){return we.JSON.parse(t,void 0)}};function aM(){this.g=new oM}function lM(t,e,n){const r=n||"";try{o0(t,function(i,s){let o=i;mc(i)&&(o=__(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function cM(t,e){const n=new Wd;if(we.Image){const r=new Image;r.onload=Gc(zc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Gc(zc,n,r,"TestLoadImage: error",!1,e),r.onabort=Gc(zc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gc(zc,n,r,"TestLoadImage: timeout",!1,e),we.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Yd(t){this.l=t.fc||null,this.j=t.ob||!1}Bt(Yd,I_);Yd.prototype.g=function(){return new Xd(this.l,this.j)};Yd.prototype.i=function(t){return function(){return t}}({});function Xd(t,e){$t.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=b_,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Bt(Xd,$t);var b_=0;ee=Xd.prototype;ee.open=function(t,e){if(this.readyState!=b_)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ql(this)};ee.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||we).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};ee.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ic(this)),this.readyState=b_};ee.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ql(this)),this.g&&(this.readyState=3,ql(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof we.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function _0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}ee.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ic(this):ql(this),this.readyState==3&&_0(this)}};ee.Za=function(t){this.g&&(this.response=this.responseText=t,Ic(this))};ee.Ya=function(t){this.g&&(this.response=t,Ic(this))};ee.ka=function(){this.g&&Ic(this)};function Ic(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ql(t)}ee.setRequestHeader=function(t,e){this.v.append(t,e)};ee.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};ee.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ql(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xd.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uM=we.JSON.parse;function vt(t){$t.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=g0,this.L=this.M=!1}Bt(vt,$t);var g0="",dM=/^https?$/i,hM=["POST","PUT"];ee=vt.prototype;ee.Oa=function(t){this.M=t};ee.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():sm.g(),this.C=this.u?yv(this.u):yv(sm),this.g.onreadystatechange=an(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Ev(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=we.FormData&&t instanceof we.FormData,!(0<=Db(hM,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{I0(this),0<this.B&&((this.L=fM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=an(this.ua,this)):this.A=v_(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Ev(this,s)}};function fM(t){return Uo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}ee.ua=function(){typeof l_<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Xt(this,"timeout"),this.abort(8))};function Ev(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,y0(t),Jd(t)}function y0(t){t.F||(t.F=!0,Xt(t,"complete"),Xt(t,"error"))}ee.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Xt(this,"complete"),Xt(this,"abort"),Jd(this))};ee.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jd(this,!0)),vt.$.N.call(this)};ee.La=function(){this.s||(this.G||this.v||this.l?v0(this):this.kb())};ee.kb=function(){v0(this)};function v0(t){if(t.h&&typeof l_<"u"&&(!t.C[1]||gr(t)!=4||t.da()!=2)){if(t.v&&gr(t)==4)v_(t.La,0,t);else if(Xt(t,"readystatechange"),gr(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(a0)[1]||null;!i&&we.self&&we.self.location&&(i=we.self.location.protocol.slice(0,-1)),r=!dM.test(i?i.toLowerCase():"")}n=r}if(n)Xt(t,"complete"),Xt(t,"success");else{t.m=6;try{var s=2<gr(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",y0(t)}}finally{Jd(t)}}}}function Jd(t,e){if(t.g){I0(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Xt(t,"ready");try{n.onreadystatechange=r}catch{}}}function I0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(we.clearTimeout(t.A),t.A=null)}ee.isActive=function(){return!!this.g};function gr(t){return t.g?t.g.readyState:0}ee.da=function(){try{return 2<gr(this)?this.g.status:-1}catch{return-1}};ee.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};ee.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uM(e)}};function Tv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case g0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mM(t){const e={};t=(t.g&&2<=gr(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Vl(t[r]))continue;var n=UV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}NV(e,function(r){return r.join(", ")})}ee.Ia=function(){return this.m};ee.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function E0(t){let e="";return d_(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function A_(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=E0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):rt(t,e,n))}function Ca(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function T0(t){this.Ga=0,this.j=[],this.l=new Wd,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ca("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ca("baseRetryDelayMs",5e3,t),this.hb=Ca("retryDelaySeedMs",1e4,t),this.eb=Ca("forwardChannelMaxRetries",2,t),this.xa=Ca("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new d0(t&&t.concurrentRequestLimit),this.Ja=new aM,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}ee=T0.prototype;ee.ra=8;ee.H=1;function R_(t){if(w0(t),t.H==3){var e=t.W++,n=Kr(t.I);if(rt(n,"SID",t.K),rt(n,"RID",e),rt(n,"TYPE","terminate"),Ec(t,n),e=new yc(t,t.l,e),e.L=2,e.v=Qd(Kr(n)),n=!1,we.navigator&&we.navigator.sendBeacon)try{n=we.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&we.Image&&(new Image().src=e.v,n=!0),n||(e.g=O0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),vc(e)}C0(t)}function Zd(t){t.g&&(P_(t),t.g.cancel(),t.g=null)}function w0(t){Zd(t),t.u&&(we.clearTimeout(t.u),t.u=null),qu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&we.clearTimeout(t.m),t.m=null)}function eh(t){if(!h0(t.i)&&!t.m){t.m=!0;var e=t.Na;Fl||Gb(),Ul||(Fl(),Ul=!0),g_.add(e,t),t.C=0}}function pM(t,e){return f0(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=_c(an(t.Na,t,e),P0(t,t.C)),t.C++,!0)}ee.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new yc(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Fb(s),Ub(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=b0(this,i,e),n=Kr(this.I),rt(n,"RID",t),rt(n,"CVER",22),this.F&&rt(n,"X-HTTP-Session-Id",this.F),Ec(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(E0(s)))+"&"+e:this.o&&A_(n,this.o,s)),w_(this.i,i),this.bb&&rt(n,"TYPE","init"),this.P?(rt(n,"$req",e),rt(n,"SID","null"),i.aa=!0,am(i,n,null)):am(i,n,e),this.H=2}}else this.H==3&&(t?wv(this,t):this.j.length==0||h0(this.i)||wv(this))};function wv(t,e){var n;e?n=e.m:n=t.W++;const r=Kr(t.I);rt(r,"SID",t.K),rt(r,"RID",n),rt(r,"AID",t.V),Ec(t,r),t.o&&t.s&&A_(r,t.o,t.s),n=new yc(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=b0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),w_(t.i,n),am(n,r,e)}function Ec(t,e){t.na&&d_(t.na,function(n,r){rt(e,r,n)}),t.h&&o0({},function(n,r){rt(e,r,n)})}function b0(t,e,n){n=Math.min(t.j.length,n);var r=t.h?an(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const h=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{lM(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function A0(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Fl||Gb(),Ul||(Fl(),Ul=!0),g_.add(e,t),t.A=0}}function S_(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=_c(an(t.Ma,t),P0(t,t.A)),t.A++,!0)}ee.Ma=function(){if(this.u=null,R0(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=_c(an(this.jb,this),t)}};ee.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,pn(10),Zd(this),R0(this))};function P_(t){t.B!=null&&(we.clearTimeout(t.B),t.B=null)}function R0(t){t.g=new yc(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Kr(t.wa);rt(e,"RID","rpc"),rt(e,"SID",t.K),rt(e,"AID",t.V),rt(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&rt(e,"TO",t.qa),rt(e,"TYPE","xmlhttp"),Ec(t,e),t.o&&t.s&&A_(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qd(Kr(e)),n.s=null,n.S=!0,n0(n,t)}ee.ib=function(){this.v!=null&&(this.v=null,Zd(this),S_(this),pn(19))};function qu(t){t.v!=null&&(we.clearTimeout(t.v),t.v=null)}function S0(t,e){var n=null;if(t.g==e){qu(t),P_(t),t.g=null;var r=2}else if(cm(t.i,e))n=e.F,m0(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Hd(),Xt(r,new Jb(r,n)),eh(t)}else A0(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&pM(t,e)||r==2&&S_(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Ts(t,5);break;case 4:Ts(t,10);break;case 3:Ts(t,6);break;default:Ts(t,2)}}}function P0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ts(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=an(t.pb,t);n||(n=new Ns("//www.google.com/images/cleardot.gif"),we.location&&we.location.protocol=="http"||Bu(n,"https"),Qd(n)),cM(n.toString(),r)}else pn(2);t.H=0,t.h&&t.h.za(e),C0(t),w0(t)}ee.pb=function(t){t?(this.l.info("Successfully pinged google.com"),pn(2)):(this.l.info("Failed to ping google.com"),pn(1))};function C0(t){if(t.H=0,t.ma=[],t.h){const e=p0(t.i);(e.length!=0||t.j.length!=0)&&(fv(t.ma,e),fv(t.ma,t.j),t.i.i.length=0,c_(t.j),t.j.length=0),t.h.ya()}}function k0(t,e,n){var r=n instanceof Ns?Kr(n):new Ns(n);if(r.g!="")e&&(r.g=e+"."+r.g),ju(r,r.m);else{var i=we.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ns(null);r&&Bu(s,r),e&&(s.g=e),i&&ju(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&rt(r,n,e),rt(r,"VER",t.ra),Ec(t,r),r}function O0(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new vt(new Yd({ob:!0})):new vt(t.va),e.Oa(t.J),e}ee.isActive=function(){return!!this.h&&this.h.isActive(this)};function N0(){}ee=N0.prototype;ee.Ba=function(){};ee.Aa=function(){};ee.za=function(){};ee.ya=function(){};ee.isActive=function(){return!0};ee.Va=function(){};function Wu(){if(Uo&&!(10<=Number(PV)))throw Error("Environmental error: no available transport.")}Wu.prototype.g=function(t,e){return new Vn(t,e)};function Vn(t,e){$t.call(this),this.g=new T0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Vl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Vl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ha(this)}Bt(Vn,$t);Vn.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;pn(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=k0(t,null,t.Y),eh(t)};Vn.prototype.close=function(){R_(this.g)};Vn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=__(t),t=n);e.j.push(new iM(e.fb++,t)),e.H==3&&eh(e)};Vn.prototype.N=function(){this.g.h=null,delete this.j,R_(this.g),delete this.g,Vn.$.N.call(this)};function x0(t){E_.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Bt(x0,E_);function D0(){T_.call(this),this.status=1}Bt(D0,T_);function ha(t){this.g=t}Bt(ha,N0);ha.prototype.Ba=function(){Xt(this.g,"a")};ha.prototype.Aa=function(t){Xt(this.g,new x0(t))};ha.prototype.za=function(t){Xt(this.g,new D0)};ha.prototype.ya=function(){Xt(this.g,"b")};function _M(){this.blockSize=-1}function tr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Bt(tr,_M);tr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function cf(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}tr.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)cf(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){cf(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){cf(this,r),i=0;break}}this.h=i,this.i+=e};tr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ze(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var gM={};function C_(t){return-128<=t&&128>t?AV(t,function(e){return new ze([e|0],0>e?-1:0)}):new ze([t|0],0>t?-1:0)}function yr(t){if(isNaN(t)||!isFinite(t))return Co;if(0>t)return Kt(yr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=um;return new ze(e,0)}function L0(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Kt(L0(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=yr(Math.pow(e,8)),r=Co,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=yr(Math.pow(e,s)),r=r.R(s).add(yr(o))):(r=r.R(n),r=r.add(yr(o)))}return r}var um=4294967296,Co=C_(0),dm=C_(1),bv=C_(16777216);ee=ze.prototype;ee.ea=function(){if($n(this))return-Kt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:um+r)*e,e*=um}return t};ee.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Vr(this))return"0";if($n(this))return"-"+Kt(this).toString(t);for(var e=yr(Math.pow(t,6)),n=this,r="";;){var i=Gu(n,e).g;n=Hu(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Vr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};ee.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Vr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function $n(t){return t.h==-1}ee.X=function(t){return t=Hu(this,t),$n(t)?-1:Vr(t)?0:1};function Kt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ze(n,~t.h).add(dm)}ee.abs=function(){return $n(this)?Kt(this):this};ee.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ze(n,n[n.length-1]&-2147483648?-1:0)};function Hu(t,e){return t.add(Kt(e))}ee.R=function(t){if(Vr(this)||Vr(t))return Co;if($n(this))return $n(t)?Kt(this).R(Kt(t)):Kt(Kt(this).R(t));if($n(t))return Kt(this.R(Kt(t)));if(0>this.X(bv)&&0>t.X(bv))return yr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Qc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Qc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Qc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Qc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ze(n,0)};function Qc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ka(t,e){this.g=t,this.h=e}function Gu(t,e){if(Vr(e))throw Error("division by zero");if(Vr(t))return new ka(Co,Co);if($n(t))return e=Gu(Kt(t),e),new ka(Kt(e.g),Kt(e.h));if($n(e))return e=Gu(t,Kt(e)),new ka(Kt(e.g),e.h);if(30<t.g.length){if($n(t)||$n(e))throw Error("slowDivide_ only works with positive integers.");for(var n=dm,r=e;0>=r.X(t);)n=Av(n),r=Av(r);var i=ao(n,1),s=ao(r,1);for(r=ao(r,2),n=ao(n,2);!Vr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ao(r,1),n=ao(n,1)}return e=Hu(t,i.R(e)),new ka(i,e)}for(i=Co;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=yr(n),o=s.R(e);$n(o)||0<o.X(t);)n-=r,s=yr(n),o=s.R(e);Vr(s)&&(s=dm),i=i.add(s),t=Hu(t,o)}return new ka(i,t)}ee.gb=function(t){return Gu(this,t).h};ee.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ze(n,this.h&t.h)};ee.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ze(n,this.h|t.h)};ee.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ze(n,this.h^t.h)};function Av(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ze(n,t.h)}function ao(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ze(i,t.h)}Wu.prototype.createWebChannel=Wu.prototype.g;Vn.prototype.send=Vn.prototype.u;Vn.prototype.open=Vn.prototype.m;Vn.prototype.close=Vn.prototype.close;Gd.NO_ERROR=0;Gd.TIMEOUT=8;Gd.HTTP_ERROR=6;Zb.COMPLETE="complete";e0.EventType=gc;gc.OPEN="a";gc.CLOSE="b";gc.ERROR="c";gc.MESSAGE="d";$t.prototype.listen=$t.prototype.O;vt.prototype.listenOnce=vt.prototype.P;vt.prototype.getLastError=vt.prototype.Sa;vt.prototype.getLastErrorCode=vt.prototype.Ia;vt.prototype.getStatus=vt.prototype.da;vt.prototype.getResponseJson=vt.prototype.Wa;vt.prototype.getResponseText=vt.prototype.ja;vt.prototype.send=vt.prototype.ha;vt.prototype.setWithCredentials=vt.prototype.Oa;tr.prototype.digest=tr.prototype.l;tr.prototype.reset=tr.prototype.reset;tr.prototype.update=tr.prototype.j;ze.prototype.add=ze.prototype.add;ze.prototype.multiply=ze.prototype.R;ze.prototype.modulo=ze.prototype.gb;ze.prototype.compare=ze.prototype.X;ze.prototype.toNumber=ze.prototype.ea;ze.prototype.toString=ze.prototype.toString;ze.prototype.getBits=ze.prototype.D;ze.fromNumber=yr;ze.fromString=L0;var yM=function(){return new Wu},vM=function(){return Hd()},uf=Gd,IM=Zb,EM=Xs,Rv={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Yc=e0,TM=vt,wM=tr,ko=ze;const Sv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Mt.UNAUTHENTICATED=new Mt(null),Mt.GOOGLE_CREDENTIALS=new Mt("google-credentials-uid"),Mt.FIRST_PARTY=new Mt("first-party-uid"),Mt.MOCK_USER=new Mt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fa="10.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di=new Pd("@firebase/firestore");function hm(){return Di.logLevel}function bM(t){Di.setLogLevel(t)}function W(t,...e){if(Di.logLevel<=$e.DEBUG){const n=e.map(k_);Di.debug(`Firestore (${fa}): ${t}`,...n)}}function Tt(t,...e){if(Di.logLevel<=$e.ERROR){const n=e.map(k_);Di.error(`Firestore (${fa}): ${t}`,...n)}}function nr(t,...e){if(Di.logLevel<=$e.WARN){const n=e.map(k_);Di.warn(`Firestore (${fa}): ${t}`,...n)}}function k_(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(t="Unexpected state"){const e=`FIRESTORE (${fa}) INTERNAL ASSERTION FAILED: `+t;throw Tt(e),new Error(e)}function me(t,e){t||se()}function AM(t,e){t||se()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Mt.UNAUTHENTICATED))}shutdown(){}}class SM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PM{constructor(e){this.t=e,this.currentUser=Mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ut,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ut)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string"),new V0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string"),new Mt(e)}}class CM{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kM{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CM(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class NM{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(me(typeof n.token=="string"),this.R=n.token,new OM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xM(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=xM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function $o(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function F0(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ct.fromMillis(Date.now())}static fromDate(e){return ct.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fe(e)}static min(){return new fe(new ct(0,0))}static max(){return new fe(new ct(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(),r===void 0?r=e.length-n:r>e.length-n&&se(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Wl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Wl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Wl{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const DM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends Wl{construct(e,n,r){return new wt(e,n,r)}static isValidIdentifier(e){return DM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new wt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new B(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new B(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new B(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(n)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Be.fromString(e))}static fromName(e){return new J(Be.fromString(e).popFirst(5))}static empty(){return new J(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Be(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function fm(t){return t.fields.find(e=>e.kind===2)}function cs(t){return t.fields.filter(e=>e.kind!==2)}U0.UNKNOWN_ID=-1;class LM{constructor(e,n){this.fieldPath=e,this.kind=n}}class Ku{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Ku(0,Mn.min())}}function $0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fe.fromTimestamp(r===1e9?new ct(n+1,0):new ct(n,r));return new Mn(i,J.empty(),e)}function B0(t){return new Mn(t.readTime,t.key,-1)}class Mn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mn(fe.min(),J.empty(),-1)}static max(){return new Mn(fe.max(),J.empty(),-1)}}function O_(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class q0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qi(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==j0)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new N((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof N?n:N.resolve(n)}catch(n){return N.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):N.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):N.reject(n)}static resolve(e){return new N((n,r)=>{n(e)})}static reject(e){return new N((n,r)=>{r(e)})}static waitFor(e){return new N((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=N.resolve(!1);for(const r of e)n=n.next(i=>i?N.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new N((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new N((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.m=new Ut,this.transaction.oncomplete=()=>{this.m.resolve()},this.transaction.onabort=()=>{n.error?this.m.reject(new ll(e,n.error)):this.m.resolve()},this.transaction.onerror=r=>{const i=N_(r.target.error);this.m.reject(new ll(e,i))}}static open(e,n,r,i){try{return new th(n,e.transaction(i,r))}catch(s){throw new ll(n,s)}}get g(){return this.m.promise}abort(e){e&&this.m.reject(e),this.aborted||(W("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}p(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new MM(n)}}class Xn{constructor(e,n,r){this.name=e,this.version=n,this.S=r,Xn.D(mt())===12.2&&Tt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return W("SimpleDb","Removing database:",e),ms(window.indexedDB.deleteDatabase(e)).toPromise()}static v(){if(!Pl())return!1;if(Xn.C())return!0;const e=mt(),n=Xn.D(e),r=0<n&&n<10,i=Xn.F(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.M)==="YES"}static O(e,n){return e.store(n)}static D(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static F(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async N(e){return this.db||(W("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new ll(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new B(L.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new B(L.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ll(e,o))},i.onupgradeneeded=s=>{W("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.S.B(o,i.transaction,s.oldVersion,this.version).next(()=>{W("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}k(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.N(e);const a=th.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(u=>(a.p(),u)).catch(u=>(a.abort(u),N.reject(u))).toPromise();return l.catch(()=>{}),await a.g,l}catch(a){const l=a,u=l.name!=="FirebaseError"&&o<3;if(W("SimpleDb","Transaction failed with error:",l.message,"Retrying:",u),this.close(),!u)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class VM{constructor(e){this.q=e,this.K=!1,this.$=null}get isDone(){return this.K}get U(){return this.$}set cursor(e){this.q=e}done(){this.K=!0}W(e){this.$=e}delete(){return ms(this.q.delete())}}class ll extends B{constructor(e,n){super(L.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Yi(t){return t.name==="IndexedDbTransactionError"}class MM{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(W("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(W("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ms(r)}add(e){return W("SimpleDb","ADD",this.store.name,e,e),ms(this.store.add(e))}get(e){return ms(this.store.get(e)).next(n=>(n===void 0&&(n=null),W("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return W("SimpleDb","DELETE",this.store.name,e),ms(this.store.delete(e))}count(){return W("SimpleDb","COUNT",this.store.name),ms(this.store.count())}G(e,n){const r=this.options(e,n);if(r.index||typeof this.store.getAll!="function"){const i=this.cursor(r),s=[];return this.j(i,(o,a)=>{s.push(a)}).next(()=>s)}{const i=this.store.getAll(r.range);return new N((s,o)=>{i.onerror=a=>{o(a.target.error)},i.onsuccess=a=>{s(a.target.result)}})}}H(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new N((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}J(e,n){W("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Y=!1;const i=this.cursor(r);return this.j(i,(s,o,a)=>a.delete())}Z(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.j(i,n)}X(e){const n=this.cursor({});return new N((r,i)=>{n.onerror=s=>{const o=N_(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}j(e,n){const r=[];return new N((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new VM(a),u=n(a.primaryKey,a.value,l);if(u instanceof N){const h=u.catch(c=>(l.done(),N.reject(c)));r.push(h)}l.isDone?i():l.U===null?a.continue():a.continue(l.U)}}).next(()=>N.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ms(t){return new N((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=N_(r.target.error);n(i)}})}let Pv=!1;function N_(t){const e=Xn.D(mt());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Pv||(Pv=!0,setTimeout(()=>{throw r},0)),r}}return t}class FM{constructor(e,n){this.asyncQueue=e,this.ee=n,this.task=null}start(){this.te(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}te(e){W("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{W("IndexBackiller",`Documents written: ${await this.ee.ne()}`)}catch(n){Yi(n)?W("IndexBackiller","Ignoring IndexedDB error during index backfill: ",n):await Qi(n)}await this.te(6e4)})}}class UM{constructor(e,n){this.localStore=e,this.persistence=n}async ne(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.re(n,e))}re(e,n){const r=new Set;let i=n,s=!0;return N.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return W("IndexBackiller",`Processing collection: ${o}`),this.ie(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ie(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.se(i,s)).next(a=>(W("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}se(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=B0(s);O_(o,r)>0&&(r=o)}),new Mn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Sn.ae=-1;function Tc(t){return t==null}function Hl(t){return t===0&&1/t==-1/0}function W0(t){return typeof t=="number"&&Number.isInteger(t)&&!Hl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cv(e)),e=$M(t.get(n),e);return Cv(e)}function $M(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Cv(t){return t+""}function vr(t){const e=t.length;if(me(e>=2),e===2)return me(t.charAt(0)===""&&t.charAt(1)===""),Be.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&se(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:se()}s=o+2}return new Be(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){return[t,_n(e)]}function H0(t,e,n){return[t,_n(e),n]}const BM={},jM=["prefixPath","collectionGroup","readTime","documentId"],qM=["prefixPath","collectionGroup","documentId"],WM=["collectionGroup","readTime","prefixPath","documentId"],HM=["canonicalId","targetId"],GM=["targetId","path"],KM=["path","targetId"],zM=["collectionId","parent"],QM=["indexId","uid"],YM=["uid","sequenceNumber"],XM=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],JM=["indexId","uid","orderedDocumentKey"],ZM=["userId","collectionPath","documentId"],eF=["userId","collectionPath","largestBatchId"],tF=["userId","collectionGroup","largestBatchId"],G0=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nF=[...G0,"documentOverlays"],K0=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],z0=K0,rF=[...z0,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm extends q0{constructor(e,n){super(),this.ue=e,this.currentSequenceNumber=n}}function jt(t,e){const n=Z(t);return Xn.O(n.ue,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Js(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Q0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.comparator=e,this.root=n||Ht.EMPTY}insert(e,n){return new Ze(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ht.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xc(this.root,e,this.comparator,!0)}}class Xc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ht.RED,this.left=i??Ht.EMPTY,this.right=s??Ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw se();const e=this.left.check();if(e!==this.right.check())throw se();return e+(this.isRed()?0:1)}}Ht.EMPTY=null,Ht.RED=!0,Ht.BLACK=!1;Ht.EMPTY=new class{constructor(){this.size=0}get key(){throw se()}get value(){throw se()}get color(){throw se()}get left(){throw se()}get right(){throw se()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nv(this.data.getIterator())}getIteratorFrom(e){return new Nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ot)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ot(this.comparator);return n.data=e,n}}class Nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function lo(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.fields=e,e.sort(wt.comparator)}static empty(){return new Pn([])}unionWith(e){let n=new ot(wt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $o(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Y0("Invalid base64 string: "+s):s}}(e);return new Lt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Lt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Lt.EMPTY_BYTE_STRING=new Lt("");const sF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Li(t){if(me(!!t),typeof t=="string"){let e=0;const n=sF.exec(t);if(me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_t(t.seconds),nanos:_t(t.nanos)}}function _t(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vi(t){return typeof t=="string"?Lt.fromBase64String(t):Lt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function x_(t){const e=t.mapValue.fields.__previous_value__;return nh(e)?x_(e):e}function Gl(t){const e=Li(t.mapValue.fields.__local_write_time__.timestampValue);return new ct(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Mi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Mi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Mi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},vu={nullValue:"NULL_VALUE"};function Fs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?nh(t)?4:X0(t)?9007199254740991:10:se()}function Rr(t,e){if(t===e)return!0;const n=Fs(t);if(n!==Fs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Gl(t).isEqual(Gl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Li(i.timestampValue),a=Li(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Vi(i.bytesValue).isEqual(Vi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _t(i.geoPointValue.latitude)===_t(s.geoPointValue.latitude)&&_t(i.geoPointValue.longitude)===_t(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _t(i.integerValue)===_t(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_t(i.doubleValue),a=_t(s.doubleValue);return o===a?Hl(o)===Hl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return $o(t.arrayValue.values||[],e.arrayValue.values||[],Rr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Ov(o)!==Ov(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Rr(o[l],a[l])))return!1;return!0}(t,e);default:return se()}}function Kl(t,e){return(t.values||[]).find(n=>Rr(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Fs(t),r=Fs(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=_t(s.integerValue||s.doubleValue),l=_t(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return xv(t.timestampValue,e.timestampValue);case 4:return xv(Gl(t),Gl(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Vi(s),l=Vi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Pe(a[u],l[u]);if(h!==0)return h}return Pe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=Pe(_t(s.latitude),_t(o.latitude));return a!==0?a:Pe(_t(s.longitude),_t(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const h=Fi(a[u],l[u]);if(h)return h}return Pe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Ei.mapValue&&o===Ei.mapValue)return 0;if(s===Ei.mapValue)return 1;if(o===Ei.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let c=0;c<l.length&&c<h.length;++c){const d=Pe(l[c],h[c]);if(d!==0)return d;const f=Fi(a[l[c]],u[h[c]]);if(f!==0)return f}return Pe(l.length,h.length)}(t.mapValue,e.mapValue);default:throw se()}}function xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=Li(t),r=Li(e),i=Pe(n.seconds,r.seconds);return i!==0?i:Pe(n.nanos,r.nanos)}function Bo(t){return pm(t)}function pm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Li(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=pm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${pm(n.fields[o])}`;return i+"}"}(t.mapValue):se()}function Us(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function _m(t){return!!t&&"integerValue"in t}function zl(t){return!!t&&"arrayValue"in t}function Dv(t){return!!t&&"nullValue"in t}function Lv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Iu(t){return!!t&&"mapValue"in t}function cl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Js(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function X0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function aF(t){return"nullValue"in t?vu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Us(Mi.empty(),J.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:se()}function lF(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Us(Mi.empty(),J.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Ei:se()}function Vv(t,e){const n=Fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function Mv(t,e){const n=Fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Iu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cl(n)}setAll(e){let n=wt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Iu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Iu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Js(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(cl(this.value))}}function J0(t){const e=[];return Js(t.fields,(n,r)=>{const i=new wt([n]);if(Iu(r)){const s=J0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new it(e,0,fe.min(),fe.min(),fe.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new it(e,1,n,fe.min(),r,i,0)}static newNoDocument(e,n){return new it(e,2,n,fe.min(),fe.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new it(e,3,n,fe.min(),fe.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.position=e,this.inclusive=n}}function Fv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function cF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{}class Me extends Z0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new uF(e,n,r):n==="array-contains"?new fF(e,r):n==="in"?new sA(e,r):n==="not-in"?new mF(e,r):n==="array-contains-any"?new pF(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new dF(e,r):new hF(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&Fs(this.value)===Fs(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ge extends Z0{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Ge(e,n)}matches(e){return jo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function jo(t){return t.op==="and"}function gm(t){return t.op==="or"}function D_(t){return eA(t)&&jo(t)}function eA(t){for(const e of t.filters)if(e instanceof Ge)return!1;return!0}function ym(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Bo(t.value);if(D_(t))return t.filters.map(e=>ym(e)).join(",");{const e=t.filters.map(n=>ym(n)).join(",");return`${t.op}(${e})`}}function tA(t,e){return t instanceof Me?function(r,i){return i instanceof Me&&r.op===i.op&&r.field.isEqual(i.field)&&Rr(r.value,i.value)}(t,e):t instanceof Ge?function(r,i){return i instanceof Ge&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&tA(o,i.filters[a]),!0):!1}(t,e):void se()}function nA(t,e){const n=t.filters.concat(e);return Ge.create(n,t.op)}function rA(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Bo(n.value)}`}(t):t instanceof Ge?function(n){return n.op.toString()+" {"+n.getFilters().map(rA).join(" ,")+"}"}(t):"Filter"}class uF extends Me{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class dF extends Me{constructor(e,n){super(e,"in",n),this.keys=iA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class hF extends Me{constructor(e,n){super(e,"not-in",n),this.keys=iA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function iA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class fF extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zl(n)&&Kl(n.arrayValue,this.value)}}class sA extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class mF extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class pF extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _F{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function vm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new _F(t,e,n,r,i,s,o)}function $s(t){const e=Z(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ym(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Bo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Bo(r)).join(",")),e.he=n}return e.he}function wc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!cF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!tA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Uv(t.startAt,e.startAt)&&Uv(t.endAt,e.endAt)}function zu(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Qu(t,e){return t.filters.filter(n=>n instanceof Me&&n.field.isEqual(e))}function $v(t,e,n){let r=vu,i=!0;for(const s of Qu(t,e)){let o=vu,a=!0;switch(s.op){case"<":case"<=":o=aF(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=vu}Vv({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Vv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function Bv(t,e,n){let r=Ei,i=!0;for(const s of Qu(t,e)){let o=Ei,a=!0;switch(s.op){case">=":case">":o=lF(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Ei}Mv({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];Mv({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.Te=null,this.startAt,this.endAt}}function oA(t,e,n,r,i,s,o,a){return new Zr(t,e,n,r,i,s,o,a)}function ma(t){return new Zr(t)}function jv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function L_(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function rh(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function V_(t){return t.collectionGroup!==null}function No(t){const e=Z(t);if(e.Pe===null){e.Pe=[];const n=rh(e),r=L_(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new Oo(n)),e.Pe.push(new Oo(wt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Oo(wt.keyField(),s))}}}return e.Pe}function On(t){const e=Z(t);return e.Ie||(e.Ie=gF(e,No(t))),e.Ie}function gF(t,e){if(t.limitType==="F")return vm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Oo(i.field,s)});const n=t.endAt?new Ui(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ui(t.startAt.position,t.startAt.inclusive):null;return vm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Im(t,e){e.getFirstInequalityField(),rh(t);const n=t.filters.concat([e]);return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yu(t,e,n){return new Zr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return wc(On(t),On(e))&&t.limitType===e.limitType}function aA(t){return`${$s(On(t))}|lt:${t.limitType}`}function Em(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>rA(i)).join(", ")}]`),Tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Bo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Bo(i)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Ac(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of No(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=Fv(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,No(r),i)||r.endAt&&!function(o,a,l){const u=Fv(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,No(r),i))}(t,e)}function lA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function cA(t){return(e,n)=>{let r=!1;for(const i of No(t)){const s=yF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function yF(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Fi(l,u):se()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Js(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Q0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vF=new Ze(J.comparator);function Cn(){return vF}const uA=new Ze(J.comparator);function Ya(...t){let e=uA;for(const n of t)e=e.insert(n.key,n);return e}function dA(t){let e=uA;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return ul()}function hA(){return ul()}function ul(){return new Xi(t=>t.toString(),(t,e)=>t.isEqual(e))}const IF=new Ze(J.comparator),EF=new ot(J.comparator);function ke(...t){let e=EF;for(const n of t)e=e.add(n);return e}const TF=new ot(Pe);function M_(){return TF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Hl(e)?"-0":e}}function mA(t){return{integerValue:""+t}}function pA(t,e){return W0(e)?mA(e):fA(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this._=void 0}}function wF(t,e,n){return t instanceof qo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&nh(s)&&(s=x_(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bs?gA(t,e):t instanceof js?yA(t,e):function(i,s){const o=_A(i,s),a=qv(o)+qv(i.Ee);return _m(o)&&_m(i.Ee)?mA(a):fA(i.serializer,a)}(t,e)}function bF(t,e,n){return t instanceof Bs?gA(t,e):t instanceof js?yA(t,e):n}function _A(t,e){return t instanceof Wo?function(r){return _m(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class qo extends ih{}class Bs extends ih{constructor(e){super(),this.elements=e}}function gA(t,e){const n=vA(e);for(const r of t.elements)n.some(i=>Rr(i,r))||n.push(r);return{arrayValue:{values:n}}}class js extends ih{constructor(e){super(),this.elements=e}}function yA(t,e){let n=vA(e);for(const r of t.elements)n=n.filter(i=>!Rr(i,r));return{arrayValue:{values:n}}}class Wo extends ih{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function qv(t){return _t(t.integerValue||t.doubleValue)}function vA(t){return zl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n){this.field=e,this.transform=n}}function AF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bs&&i instanceof Bs||r instanceof js&&i instanceof js?$o(r.elements,i.elements,Rr):r instanceof Wo&&i instanceof Wo?Rr(r.Ee,i.Ee):r instanceof qo&&i instanceof qo}(t.transform,e.transform)}class RF{constructor(e,n){this.version=e,this.transformResults=n}}class lt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new lt}static exists(e){return new lt(void 0,e)}static updateTime(e){return new lt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sh{}function IA(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _a(t.key,lt.none()):new pa(t.key,t.data,lt.none());{const n=t.data,r=zt.empty();let i=new ot(wt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ei(t.key,r,new Pn(i.toArray()),lt.none())}}function SF(t,e,n){t instanceof pa?function(i,s,o){const a=i.value.clone(),l=Hv(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ei?function(i,s,o){if(!Eu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Hv(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(EA(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function dl(t,e,n,r){return t instanceof pa?function(s,o,a,l){if(!Eu(s.precondition,o))return a;const u=s.value.clone(),h=Gv(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof ei?function(s,o,a,l){if(!Eu(s.precondition,o))return a;const u=Gv(s.fieldTransforms,l,o),h=o.data;return h.setAll(EA(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(s,o,a){return Eu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function PF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=_A(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function Wv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&$o(r,i,(s,o)=>AF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends sh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ei extends sh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function EA(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Hv(t,e,n){const r=new Map;me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,bF(o,a,n[i]))}return r}function Gv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,wF(s,o,e))}return r}class _a extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F_ extends sh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SF(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=dl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=hA();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=IA(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ke())}isEqual(e){return this.batchId===e.batchId&&$o(this.mutations,e.mutations,(n,r)=>Wv(n,r))&&$o(this.baseMutations,e.baseMutations,(n,r)=>Wv(n,r))}}class $_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){me(e.mutations.length===r.length);let i=function(){return IF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new $_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var St,Ue;function TA(t){switch(t){default:return se();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function wA(t){if(t===void 0)return Tt("GRPC error has no .code"),L.UNKNOWN;switch(t){case St.OK:return L.OK;case St.CANCELLED:return L.CANCELLED;case St.UNKNOWN:return L.UNKNOWN;case St.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case St.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case St.INTERNAL:return L.INTERNAL;case St.UNAVAILABLE:return L.UNAVAILABLE;case St.UNAUTHENTICATED:return L.UNAUTHENTICATED;case St.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case St.NOT_FOUND:return L.NOT_FOUND;case St.ALREADY_EXISTS:return L.ALREADY_EXISTS;case St.PERMISSION_DENIED:return L.PERMISSION_DENIED;case St.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case St.ABORTED:return L.ABORTED;case St.OUT_OF_RANGE:return L.OUT_OF_RANGE;case St.UNIMPLEMENTED:return L.UNIMPLEMENTED;case St.DATA_LOSS:return L.DATA_LOSS;default:return se()}}(Ue=St||(St={}))[Ue.OK=0]="OK",Ue[Ue.CANCELLED=1]="CANCELLED",Ue[Ue.UNKNOWN=2]="UNKNOWN",Ue[Ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ue[Ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ue[Ue.NOT_FOUND=5]="NOT_FOUND",Ue[Ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ue[Ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ue[Ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ue[Ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ue[Ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ue[Ue.ABORTED=10]="ABORTED",Ue[Ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ue[Ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ue[Ue.INTERNAL=13]="INTERNAL",Ue[Ue.UNAVAILABLE=14]="UNAVAILABLE",Ue[Ue.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kF=new ko([4294967295,4294967295],0);function Kv(t){const e=bA().encode(t),n=new wM;return n.update(e),new Uint8Array(n.digest())}function zv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new ko([n,r],0),new ko([i,s],0)]}class j_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xa(`Invalid padding: ${n}`);if(r<0)throw new Xa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xa(`Invalid padding when bitmap length is 0: ${n}`);this.Ae=8*e.length-n,this.Re=ko.fromNumber(this.Ae)}Ve(e,n,r){let i=e.add(n.multiply(ko.fromNumber(r)));return i.compare(kF)===1&&(i=new ko([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Re).toNumber()}me(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ae===0)return!1;const n=Kv(e),[r,i]=zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);if(!this.me(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new j_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ae===0)return;const n=Kv(e),[r,i]=zv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ve(r,i,s);this.fe(o)}}fe(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Pc.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Sc(fe.min(),i,new Ze(Pe),Cn(),ke())}}class Pc{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Pc(r,n,ke(),ke(),ke())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i){this.ge=e,this.removedTargetIds=n,this.key=r,this.pe=i}}class AA{constructor(e,n){this.targetId=e,this.ye=n}}class RA{constructor(e,n,r=Lt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Qv{constructor(){this.we=0,this.Se=Xv(),this.be=Lt.EMPTY_BYTE_STRING,this.De=!1,this.ve=!0}get current(){return this.De}get resumeToken(){return this.be}get Ce(){return this.we!==0}get Fe(){return this.ve}Me(e){e.approximateByteSize()>0&&(this.ve=!0,this.be=e)}xe(){let e=ke(),n=ke(),r=ke();return this.Se.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:se()}}),new Pc(this.be,this.De,e,n,r)}Oe(){this.ve=!1,this.Se=Xv()}Ne(e,n){this.ve=!0,this.Se=this.Se.insert(e,n)}Be(e){this.ve=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.ve=!0,this.De=!0}}class OF{constructor(e){this.Qe=e,this.Ke=new Map,this.$e=Cn(),this.Ue=Yv(),this.We=new Ze(Pe)}Ge(e){for(const n of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(n,e.pe):this.je(n,e.key,e.pe);for(const n of e.removedTargetIds)this.je(n,e.key,e.pe)}He(e){this.forEachTarget(e,n=>{const r=this.Je(n);switch(e.state){case 0:this.Ye(n)&&r.Me(e.resumeToken);break;case 1:r.ke(),r.Ce||r.Oe(),r.Me(e.resumeToken);break;case 2:r.ke(),r.Ce||this.removeTarget(n);break;case 3:this.Ye(n)&&(r.qe(),r.Me(e.resumeToken));break;case 4:this.Ye(n)&&(this.Ze(n),r.Me(e.resumeToken));break;default:se()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ke.forEach((r,i)=>{this.Ye(i)&&n(i)})}Xe(e){const n=e.targetId,r=e.ye.count,i=this.et(n);if(i){const s=i.target;if(zu(s))if(r===0){const o=new J(s.path);this.je(n,o,it.newNoDocument(o,fe.min()))}else me(r===1);else{const o=this.tt(n);if(o!==r){const a=this.nt(e),l=a?this.rt(a,e,o):1;if(l!==0){this.Ze(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.We=this.We.insert(n,u)}}}}}nt(e){const n=e.ye.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=Vi(r).toUint8Array()}catch(l){if(l instanceof Y0)return nr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new j_(o,i,s)}catch(l){return nr(l instanceof Xa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ae===0?null:a}rt(e,n,r){return n.ye.count===r-this.ot(e,n.targetId)?0:2}ot(e,n){const r=this.Qe.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Qe.st(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.je(n,s,null),i++)}),i}_t(e){const n=new Map;this.Ke.forEach((s,o)=>{const a=this.et(o);if(a){if(s.current&&zu(a.target)){const l=new J(a.target.path);this.$e.get(l)!==null||this.ut(o,l)||this.je(o,l,it.newNoDocument(l,e))}s.Fe&&(n.set(o,s.xe()),s.Oe())}});let r=ke();this.Ue.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.et(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.$e.forEach((s,o)=>o.setReadTime(e));const i=new Sc(e,n,this.We,this.$e,r);return this.$e=Cn(),this.Ue=Yv(),this.We=new Ze(Pe),i}ze(e,n){if(!this.Ye(e))return;const r=this.ut(e,n.key)?2:0;this.Je(e).Ne(n.key,r),this.$e=this.$e.insert(n.key,n),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}je(e,n,r){if(!this.Ye(e))return;const i=this.Je(e);this.ut(e,n)?i.Ne(n,1):i.Be(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),r&&(this.$e=this.$e.insert(n,r))}removeTarget(e){this.Ke.delete(e)}tt(e){const n=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let n=this.Ke.get(e);return n||(n=new Qv,this.Ke.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new ot(Pe),this.Ue=this.Ue.insert(e,n)),n}Ye(e){const n=this.et(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}et(e){const n=this.Ke.get(e);return n&&n.Ce?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new Qv),this.Qe.getRemoteKeysForTarget(e).forEach(n=>{this.je(e,n,null)})}ut(e,n){return this.Qe.getRemoteKeysForTarget(e).has(n)}}function Yv(){return new Ze(J.comparator)}function Xv(){return new Ze(J.comparator)}const NF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),DF=(()=>({and:"AND",or:"OR"}))();class LF{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Tm(t,e){return t.useProto3Json||Tc(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function SA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function VF(t,e){return Ho(t,e.toTimestamp())}function bt(t){return me(!!t),fe.fromTimestamp(function(n){const r=Li(n);return new ct(r.seconds,r.nanos)}(t))}function q_(t,e){return function(r){return new Be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function PA(t){const e=Be.fromString(t);return me(MA(e)),e}function Ql(t,e){return q_(t.databaseId,e.path)}function Er(t,e){const n=PA(e);if(n.get(1)!==t.databaseId.projectId)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new B(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(kA(n))}function wm(t,e){return q_(t.databaseId,e)}function CA(t){const e=PA(t);return e.length===4?Be.emptyPath():kA(e)}function Yl(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function kA(t){return me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Jv(t,e,n){return{name:Ql(t,e),fields:n.value.mapValue.fields}}function OA(t,e,n){const r=Er(t,e.name),i=bt(e.updateTime),s=e.createTime?bt(e.createTime):fe.min(),o=new zt({mapValue:{fields:e.fields}}),a=it.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function MF(t,e){return"found"in e?function(r,i){me(!!i.found),i.found.name,i.found.updateTime;const s=Er(r,i.found.name),o=bt(i.found.updateTime),a=i.found.createTime?bt(i.found.createTime):fe.min(),l=new zt({mapValue:{fields:i.found.fields}});return it.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){me(!!i.missing),me(!!i.readTime);const s=Er(r,i.missing),o=bt(i.readTime);return it.newNoDocument(s,o)}(t,e):se()}function FF(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,h){return u.useProto3Json?(me(h===void 0||typeof h=="string"),Lt.fromBase64String(h||"")):(me(h===void 0||h instanceof Uint8Array),Lt.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?L.UNKNOWN:wA(u.code);return new B(h,u.message||"")}(o);n=new RA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Er(t,r.document.name),s=bt(r.document.updateTime),o=r.document.createTime?bt(r.document.createTime):fe.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=it.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Tu(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Er(t,r.document),s=r.readTime?bt(r.readTime):fe.min(),o=it.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Tu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Er(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return se();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new CF(i,s),a=r.targetId;n=new AA(a,o)}}return n}function Xl(t,e){let n;if(e instanceof pa)n={update:Jv(t,e.key,e.value)};else if(e instanceof _a)n={delete:Ql(t,e.key)};else if(e instanceof ei)n={update:Jv(t,e.key,e.data),updateMask:WF(e.fieldMask)};else{if(!(e instanceof F_))return se();n={verify:Ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof qo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof js)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Wo)return{fieldPath:o.field.canonicalString(),increment:a.Ee};throw se()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:VF(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:se()}(t,e.precondition)),n}function bm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?lt.updateTime(bt(s.updateTime)):s.exists!==void 0?lt.exists(s.exists):lt.none()}(e.currentDocument):lt.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)me(a.setToServerValue==="REQUEST_TIME"),l=new qo;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new Bs(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new js(h)}else"increment"in a?l=new Wo(o,a.increment):se();const u=wt.fromServerFormat(a.fieldPath);return new Rc(u,l)}(t,i)):[];if(e.update){e.update.name;const i=Er(t,e.update.name),s=new zt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const u=l.fieldPaths||[];return new Pn(u.map(h=>wt.fromServerFormat(h)))}(e.updateMask);return new ei(i,s,o,n,r)}return new pa(i,s,n,r)}if(e.delete){const i=Er(t,e.delete);return new _a(i,n)}if(e.verify){const i=Er(t,e.verify);return new F_(i,n)}return se()}function UF(t,e){return t&&t.length>0?(me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?bt(i.updateTime):bt(s);return o.isEqual(fe.min())&&(o=bt(s)),new RF(o,i.transformResults||[])}(n,e))):[]}function NA(t,e){return{documents:[wm(t,e.path)]}}function xA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=wm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=wm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return VA(Ge.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ho(c.field),direction:BF(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Tm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function DA(t){let e=CA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){me(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(c){const d=LA(c);return d instanceof Ge&&D_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(c){return c.map(d=>function(m){return new Oo(fo(m.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,Tc(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,f=c.values||[];return new Ui(f,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,f=c.values||[];return new Ui(f,d)}(n.endAt)),oA(e,i,o,s,a,"F",l,u)}function $F(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function LA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fo(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=fo(n.unaryFilter.field);return Me.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=fo(n.unaryFilter.field);return Me.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fo(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return se()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(fo(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return se()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ge.create(n.compositeFilter.filters.map(r=>LA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return se()}}(n.compositeFilter.op))}(t):se()}function BF(t){return NF[t]}function jF(t){return xF[t]}function qF(t){return DF[t]}function ho(t){return{fieldPath:t.canonicalString()}}function fo(t){return wt.fromServerFormat(t.fieldPath)}function VA(t){return t instanceof Me?function(n){if(n.op==="=="){if(Lv(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NAN"}};if(Dv(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lv(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NAN"}};if(Dv(n.value))return{unaryFilter:{field:ho(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ho(n.field),op:jF(n.op),value:n.value}}}(t):t instanceof Ge?function(n){const r=n.getFilters().map(i=>VA(i));return r.length===1?r[0]:{compositeFilter:{op:qF(n.op),filters:r}}}(t):se()}function WF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function MA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r,i,s=fe.min(),o=fe.min(),a=Lt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Mr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e){this.ht=e}}function HF(t,e){let n;if(e.document)n=OA(t.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=J.fromSegments(e.noDocument.path),i=Ws(e.noDocument.readTime);n=it.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return se();{const r=J.fromSegments(e.unknownDocument.path),i=Ws(e.unknownDocument.version);n=it.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ct(i[0],i[1]);return fe.fromTimestamp(s)}(e.readTime)),n}function Zv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Xu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Ql(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Ho(s,o.version.toTimestamp()),createTime:Ho(s,o.createTime.toTimestamp())}}(t.ht,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:qs(e.version)};else{if(!e.isUnknownDocument())return se();r.unknownDocument={path:n.path.toArray(),version:qs(e.version)}}return r}function Xu(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function qs(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ws(t){const e=new ct(t.seconds,t.nanoseconds);return fe.fromTimestamp(e)}function ps(t,e){const n=(e.baseMutations||[]).map(s=>bm(t.ht,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>bm(t.ht,s)),i=ct.fromMillis(e.localWriteTimeMs);return new U_(e.batchId,i,n,r)}function Ja(t){const e=Ws(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ws(t.lastLimboFreeSnapshotVersion):fe.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return me(s.documents.length===1),On(ma(CA(s.documents[0])))}(t.query):function(s){return On(DA(s))}(t.query),new Mr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Lt.fromBase64String(t.resumeToken))}function UA(t,e){const n=qs(e.snapshotVersion),r=qs(e.lastLimboFreeSnapshotVersion);let i;i=zu(e.target)?NA(t.ht,e.target):xA(t.ht,e.target);const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:$s(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function W_(t){const e=DA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yu(e,e.limit,"L"):e}function df(t,e){return new B_(e.largestBatchId,bm(t.ht,e.overlayMutation))}function eI(t,e){const n=e.path.lastSegment();return[t,_n(e.path.popLast()),n]}function tI(t,e,n,r){return{indexId:t,uid:e.uid||"",sequenceNumber:n,readTime:qs(r.readTime),documentKey:_n(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GF{getBundleMetadata(e,n){return nI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:Ws(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return nI(e).put(function(i){return{bundleId:i.id,createTime:qs(bt(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return rI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:W_(s.bundledQuery),readTime:Ws(s.readTime)}}(r)})}saveNamedQuery(e,n){return rI(e).put(function(i){return{name:i.name,readTime:qs(bt(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function nI(t){return jt(t,"bundles")}function rI(t){return jt(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(e,n){this.serializer=e,this.userId=n}static Pt(e,n){const r=n.uid||"";return new oh(e,r)}getOverlay(e,n){return Oa(e).get(eI(this.userId,n)).next(r=>r?df(this.serializer,r):null)}getOverlays(e,n){const r=Ir();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new B_(n,o);i.push(this.It(e,a))}),N.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(_n(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Oa(e).J("collectionPathOverlayIndex",a))}),N.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Ir(),s=_n(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Oa(e).G("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const u=df(this.serializer,l);i.set(u.getKey(),u)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Ir();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Oa(e).Z({index:"collectionGroupOverlayIndex",range:a},(l,u,h)=>{const c=df(this.serializer,u);s.size()<i||c.largestBatchId===o?(s.set(c.getKey(),c),o=c.largestBatchId):h.done()}).next(()=>s)}It(e,n){return Oa(e).put(function(i,s,o){const[a,l,u]=eI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:u,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Xl(i.ht,o.mutation)}}(this.serializer,this.userId,n))}}function Oa(t){return jt(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(){}Tt(e,n){this.Et(e,n),n.dt()}Et(e,n){if("nullValue"in e)this.At(n,5);else if("booleanValue"in e)this.At(n,10),n.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(n,15),n.Rt(_t(e.integerValue));else if("doubleValue"in e){const r=_t(e.doubleValue);isNaN(r)?this.At(n,13):(this.At(n,15),Hl(r)?n.Rt(0):n.Rt(r))}else if("timestampValue"in e){const r=e.timestampValue;this.At(n,20),typeof r=="string"?n.Vt(r):(n.Vt(`${r.seconds||""}`),n.Rt(r.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,n),this.gt(n);else if("bytesValue"in e)this.At(n,30),n.yt(Vi(e.bytesValue)),this.gt(n);else if("referenceValue"in e)this.wt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.At(n,45),n.Rt(r.latitude||0),n.Rt(r.longitude||0)}else"mapValue"in e?X0(e)?this.At(n,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,n),this.gt(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.gt(n)):se()}ft(e,n){this.At(n,25),this.Dt(e,n)}Dt(e,n){n.Vt(e)}St(e,n){const r=e.fields||{};this.At(n,55);for(const i of Object.keys(r))this.ft(i,n),this.Et(r[i],n)}bt(e,n){const r=e.values||[];this.At(n,50);for(const i of r)this.Et(i,n)}wt(e,n){this.At(n,37),J.fromName(e).path.forEach(r=>{this.At(n,60),this.Dt(r,n)})}At(e,n){e.Rt(n)}gt(e){e.Rt(2)}}_s.vt=new _s;function KF(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function iI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=KF(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class zF{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const i=n.codePointAt(0);this.Ft(240|i>>>18),this.Ft(128|63&i>>>12),this.Ft(128|63&i>>>6),this.Ft(128|63&i)}}this.Mt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const i=n.codePointAt(0);this.Ot(240|i>>>18),this.Ot(128|63&i>>>12),this.Ot(128|63&i>>>6),this.Ot(128|63&i)}}this.Nt()}kt(e){const n=this.qt(e),r=iI(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}Kt(e){const n=this.qt(e),r=iI(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class QF{constructor(e){this.jt=e}yt(e){this.jt.Ct(e)}Vt(e){this.jt.Bt(e)}Rt(e){this.jt.kt(e)}dt(){this.jt.$t()}}class YF{constructor(e){this.jt=e}yt(e){this.jt.xt(e)}Vt(e){this.jt.Lt(e)}Rt(e){this.jt.Kt(e)}dt(){this.jt.Wt()}}class Na{constructor(){this.jt=new zF,this.Ht=new QF(this.jt),this.Jt=new YF(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new gs(this.indexId,this.documentKey,this.arrayValue,r)}}function ai(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=sI(t.arrayValue,e.arrayValue),n!==0?n:(n=sI(t.directionalValue,e.directionalValue),n!==0?n:J.comparator(t.documentKey,e.documentKey)))}function sI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XF{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Xt=e.orderBy,this.en=[];for(const n of e.filters){const r=n;r.isInequality()?this.tn=r:this.en.push(r)}}nn(e){me(e.collectionGroup===this.collectionId);const n=fm(e);if(n!==void 0&&!this.rn(n))return!1;const r=cs(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.rn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.tn!==void 0){if(!i.has(this.tn.field.canonicalString())){const a=r[s];if(!this.sn(this.tn,a)||!this.on(this.Xt[o++],a))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Xt.length||!this.on(this.Xt[o++],a))return!1}return!0}rn(e){for(const n of this.en)if(this.sn(n,e))return!0;return!1}sn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}on(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){var e,n;if(me(t instanceof Me||t instanceof Ge),t instanceof Me){if(t instanceof sA){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>Me.create(t.field,"==",s)))||[];return Ge.create(i,"or")}return t}const r=t.filters.map(i=>$A(i));return Ge.create(r,t.op)}function JF(t){if(t.getFilters().length===0)return[];const e=Sm($A(t));return me(BA(e)),Am(e)||Rm(e)?[e]:e.getFilters()}function Am(t){return t instanceof Me}function Rm(t){return t instanceof Ge&&D_(t)}function BA(t){return Am(t)||Rm(t)||function(n){if(n instanceof Ge&&gm(n)){for(const r of n.getFilters())if(!Am(r)&&!Rm(r))return!1;return!0}return!1}(t)}function Sm(t){if(me(t instanceof Me||t instanceof Ge),t instanceof Me)return t;if(t.filters.length===1)return Sm(t.filters[0]);const e=t.filters.map(r=>Sm(r));let n=Ge.create(e,t.op);return n=Ju(n),BA(n)?n:(me(n instanceof Ge),me(jo(n)),me(n.filters.length>1),n.filters.reduce((r,i)=>H_(r,i)))}function H_(t,e){let n;return me(t instanceof Me||t instanceof Ge),me(e instanceof Me||e instanceof Ge),n=t instanceof Me?e instanceof Me?function(i,s){return Ge.create([i,s],"and")}(t,e):oI(t,e):e instanceof Me?oI(e,t):function(i,s){if(me(i.filters.length>0&&s.filters.length>0),jo(i)&&jo(s))return nA(i,s.getFilters());const o=gm(i)?i:s,a=gm(i)?s:i,l=o.filters.map(u=>H_(u,a));return Ge.create(l,"or")}(t,e),Ju(n)}function oI(t,e){if(jo(e))return nA(e,t.getFilters());{const n=e.filters.map(r=>H_(t,r));return Ge.create(n,"or")}}function Ju(t){if(me(t instanceof Me||t instanceof Ge),t instanceof Me)return t;const e=t.getFilters();if(e.length===1)return Ju(e[0]);if(eA(t))return t;const n=e.map(i=>Ju(i)),r=[];return n.forEach(i=>{i instanceof Me?r.push(i):i instanceof Ge&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:Ge.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZF{constructor(){this._n=new G_}addToCollectionParentIndex(e,n){return this._n.add(n),N.resolve()}getCollectionParents(e,n){return N.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return N.resolve()}deleteFieldIndex(e,n){return N.resolve()}getDocumentsMatchingTarget(e,n){return N.resolve(null)}getIndexType(e,n){return N.resolve(0)}getFieldIndexes(e,n){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,n){return N.resolve(Mn.min())}getMinOffsetFromCollectionGroup(e,n){return N.resolve(Mn.min())}updateCollectionGroup(e,n,r){return N.resolve()}updateIndexEntries(e,n){return N.resolve()}}class G_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ot(Be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ot(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc=new Uint8Array(0);class eU{constructor(e,n){this.user=e,this.databaseId=n,this.an=new G_,this.un=new Xi(r=>$s(r),(r,i)=>wc(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:_n(i)};return aI(e).put(s)}return N.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[F0(n),""],!1,!0);return aI(e).G(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(vr(o.parent))}return r})}addFieldIndex(e,n){const r=Zc(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Da(e);return s.next(a=>{o.put(tI(a,this.user,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Zc(e),i=Da(e),s=xa(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,n){const r=xa(e);let i=!0;const s=new Map;return N.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ke();const a=[];return N.forEach(s,(l,u)=>{W("IndexedDbIndexManager",`Using index ${function(b){return`id=${b.indexId}|cg=${b.collectionGroup}|f=${b.fields.map(E=>`${E.fieldPath}:${E.kind}`).join(",")}`}(l)} to execute ${$s(n)}`);const h=function(b,E){const P=fm(E);if(P===void 0)return null;for(const k of Qu(b,P.fieldPath))switch(k.op){case"array-contains-any":return k.value.arrayValue.values||[];case"array-contains":return[k.value]}return null}(u,l),c=function(b,E){const P=new Map;for(const k of cs(E))for(const O of Qu(b,k.fieldPath))switch(O.op){case"==":case"in":P.set(k.fieldPath.canonicalString(),O.value);break;case"not-in":case"!=":return P.set(k.fieldPath.canonicalString(),O.value),Array.from(P.values())}return null}(u,l),d=function(b,E){const P=[];let k=!0;for(const O of cs(E)){const V=O.kind===0?$v(b,O.fieldPath,b.startAt):Bv(b,O.fieldPath,b.startAt);P.push(V.value),k&&(k=V.inclusive)}return new Ui(P,k)}(u,l),f=function(b,E){const P=[];let k=!0;for(const O of cs(E)){const V=O.kind===0?Bv(b,O.fieldPath,b.endAt):$v(b,O.fieldPath,b.endAt);P.push(V.value),k&&(k=V.inclusive)}return new Ui(P,k)}(u,l),m=this.hn(l,u,d),y=this.hn(l,u,f),v=this.Pn(l,u,c),p=this.In(l.indexId,h,m,d.inclusive,y,f.inclusive,v);return N.forEach(p,I=>r.H(I,n.limit).next(b=>{b.forEach(E=>{const P=J.fromSegments(E.documentKey);o.has(P)||(o=o.add(P),a.push(P))})}))}).next(()=>a)}return N.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=JF(Ge.create(e.filters,"and")).map(r=>vm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),u=l/(n!=null?n.length:1),h=[];for(let c=0;c<l;++c){const d=n?this.Tn(n[c/u]):Jc,f=this.En(e,d,r[c%u],i),m=this.dn(e,d,s[c%u],o),y=a.map(v=>this.En(e,d,v,!0));h.push(...this.createRange(f,m,y))}return h}En(e,n,r,i){const s=new gs(e,J.empty(),n,r);return i?s:s.Zt()}dn(e,n,r,i){const s=new gs(e,J.empty(),n,r);return i?s.Zt():s}ln(e,n){const r=new XF(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.nn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return N.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let u=new ot(wt.comparator),h=!1;for(const c of l.filters)for(const d of c.getFlattenedFilters())d.field.isKeyField()||(d.op==="array-contains"||d.op==="array-contains-any"?h=!0:u=u.add(d.field));for(const c of l.orderBy)c.field.isKeyField()||(u=u.add(c.field));return u.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Na;for(const i of cs(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Yt(i.kind);_s.vt.Tt(s,o)}return r.zt()}Tn(e){const n=new Na;return _s.vt.Tt(e,n.Yt(0)),n.zt()}Rn(e,n){const r=new Na;return _s.vt.Tt(Us(this.databaseId,n),r.Yt(function(s){const o=cs(s);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Na);let s=0;for(const o of cs(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&zl(a))i=this.mn(i,o,a);else{const u=l.Yt(o.kind);_s.vt.Tt(a,u)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Na;l.seed(a.zt()),_s.vt.Tt(o,l.Yt(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof Me&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Zc(e),i=Da(e);return(n?r.G("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.G()).next(s=>{const o=[];return N.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,c){const d=c?new Ku(c.sequenceNumber,new Mn(Ws(c.readTime),new J(vr(c.documentKey)),c.largestBatchId)):Ku.empty(),f=h.fields.map(([m,y])=>new LM(wt.fromServerFormat(m),y));return new U0(h.indexId,h.collectionGroup,f,d)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:Pe(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Zc(e),s=Da(e);return this.gn(e).next(o=>i.G("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>N.forEach(a,l=>s.put(tI(l.indexId,this.user,o,r)))))}updateIndexEntries(e,n){const r=new Map;return N.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?N.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),N.forEach(a,l=>this.pn(e,i,l).next(u=>{const h=this.yn(s,l);return u.isEqual(h)?N.resolve():this.wn(e,s,l,u,h)}))))})}Sn(e,n,r,i){return xa(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return xa(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=xa(e);let s=new ot(ai);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new gs(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ot(ai);const i=this.An(n,e);if(i==null)return r;const s=fm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(zl(o))for(const a of o.arrayValue.values||[])r=r.add(new gs(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new gs(n.indexId,e.key,Jc,i));return r}wn(e,n,r,i,s){W("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,u,h,c,d){const f=l.getIterator(),m=u.getIterator();let y=lo(f),v=lo(m);for(;y||v;){let p=!1,I=!1;if(y&&v){const b=h(y,v);b<0?I=!0:b>0&&(p=!0)}else y!=null?I=!0:p=!0;p?(c(v),v=lo(m)):I?(d(y),y=lo(f)):(y=lo(f),v=lo(m))}}(i,s,ai,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),N.waitFor(o)}gn(e){let n=1;return Da(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ai(o,a)).filter((o,a,l)=>!a||ai(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=ai(o,e),l=ai(o,n);if(a===0)i[0]=e.Zt();else if(a>0&&l<0)i.push(o),i.push(o.Zt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,Jc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,Jc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return ai(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(lI)}getMinOffset(e,n){return N.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||se())).next(lI)}}function aI(t){return jt(t,"collectionParents")}function xa(t){return jt(t,"indexEntries")}function Zc(t){return jt(t,"indexConfiguration")}function Da(t){return jt(t,"indexState")}function lI(t){me(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;O_(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new Mn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Tn{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jA(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.Z({range:o},(h,c,d)=>(a++,d.delete()));s.push(l.next(()=>{me(a===1)}));const u=[];for(const h of n.mutations){const c=H0(e,h.key.path,n.batchId);s.push(i.delete(c)),u.push(h.key)}return N.waitFor(s).next(()=>u)}function Zu(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw se();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(41943040,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);class ah{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.vn={}}static Pt(e,n,r,i){me(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new ah(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return li(e).Z({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=mo(e),o=li(e);return o.add({}).next(a=>{me(typeof a=="number");const l=new U_(a,n,r,i),u=function(f,m,y){const v=y.baseMutations.map(I=>Xl(f.ht,I)),p=y.mutations.map(I=>Xl(f.ht,I));return{userId:m,batchId:y.batchId,localWriteTimeMs:y.localWriteTime.toMillis(),baseMutations:v,mutations:p}}(this.serializer,this.userId,l),h=[];let c=new ot((d,f)=>Pe(d.canonicalString(),f.canonicalString()));for(const d of i){const f=H0(this.userId,d.key.path,a);c=c.add(d.key.path.popLast()),h.push(o.put(u)),h.push(s.put(f,BM))}return c.forEach(d=>{h.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.vn[a]=l.keys()}),N.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return li(e).get(n).next(r=>r?(me(r.userId===this.userId),ps(this.serializer,r)):null)}Cn(e,n){return this.vn[n]?N.resolve(this.vn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.vn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return li(e).Z({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(me(a.batchId>=r),s=ps(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return li(e).Z({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return li(e).G("userMutationsIndex",n).next(r=>r.map(i=>ps(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=yu(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return mo(e).Z({range:i},(o,a,l)=>{const[u,h,c]=o,d=vr(h);if(u===this.userId&&n.path.isEqual(d))return li(e).get(c).next(f=>{if(!f)throw se();me(f.userId===this.userId),s.push(ps(this.serializer,f))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(Pe);const i=[];return n.forEach(s=>{const o=yu(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=mo(e).Z({range:a},(u,h,c)=>{const[d,f,m]=u,y=vr(f);d===this.userId&&s.path.isEqual(y)?r=r.add(m):c.done()});i.push(l)}),N.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=yu(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ot(Pe);return mo(e).Z({range:o},(l,u,h)=>{const[c,d,f]=l,m=vr(d);c===this.userId&&r.isPrefixOf(m)?m.length===i&&(a=a.add(f)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(li(e).get(s).next(o=>{if(o===null)throw se();me(o.userId===this.userId),r.push(ps(this.serializer,o))}))}),N.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return jA(e.ue,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),N.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return N.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return mo(e).Z({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=vr(s[1]);i.push(l)}else a.done()}).next(()=>{me(i.length===0)})})}containsKey(e,n){return qA(e,this.userId,n)}xn(e){return WA(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function qA(t,e,n){const r=yu(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return mo(t).Z({range:s,Y:!0},(a,l,u)=>{const[h,c,d]=a;h===e&&c===i&&(o=!0),u.done()}).next(()=>o)}function li(t){return jt(t,"mutations")}function mo(t){return jt(t,"documentMutations")}function WA(t){return jt(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Hs(0)}static Bn(){return new Hs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Ln(e).next(n=>{const r=new Hs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Ln(e).next(n=>fe.fromTimestamp(new ct(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Ln(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Ln(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Ln(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>co(e).delete(n.targetId)).next(()=>this.Ln(e)).next(r=>(me(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return co(e).Z((o,a)=>{const l=Ja(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>N.waitFor(s)).next(()=>i)}forEachTarget(e,n){return co(e).Z((r,i)=>{const s=Ja(i);n(s)})}Ln(e){return uI(e).get("targetGlobalKey").next(n=>(me(n!==null),n))}kn(e,n){return uI(e).put("targetGlobalKey",n)}qn(e,n){return co(e).put(UA(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Ln(e).next(n=>n.targetCount)}getTargetData(e,n){const r=$s(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return co(e).Z({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const u=Ja(a);wc(n,u.target)&&(s=u,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=gi(e);return n.forEach(o=>{const a=_n(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),N.waitFor(i)}removeMatchingKeys(e,n,r){const i=gi(e);return N.forEach(n,s=>{const o=_n(s.path);return N.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=gi(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=gi(e);let s=ke();return i.Z({range:r,Y:!0},(o,a,l)=>{const u=vr(o[1]),h=new J(u);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=_n(n.path),i=IDBKeyRange.bound([r],[F0(r)],!1,!0);let s=0;return gi(e).Z({index:"documentTargetsIndex",Y:!0,range:i},([o,a],l,u)=>{o!==0&&(s++,u.done())}).next(()=>s>0)}lt(e,n){return co(e).get(n).next(r=>r?Ja(r):null)}}function co(t){return jt(t,"targets")}function uI(t){return jt(t,"targetGlobal")}function gi(t){return jt(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI([t,e],[n,r]){const i=Pe(t,n);return i===0?Pe(e,r):i}class nU{constructor(e){this.Kn=e,this.buffer=new ot(dI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();dI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class rU{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){W("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Yi(n)?W("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Qi(n)}await this.zn(3e5)})}}class iU{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return N.resolve(Sn.ae);const r=new nU(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(cI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(c=>(c>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${c}`),i=this.params.maximumSequenceNumbersToCollect):i=c,o=Date.now(),this.nthSequenceNumber(e,i))).next(c=>(r=c,a=Date.now(),this.removeTargets(e,r,n))).next(c=>(s=c,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(c=>(u=Date.now(),hm()<=$e.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${c} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:c})))}}function sU(t,e){return new iU(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e,n){this.db=e,this.garbageCollector=sU(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return eu(e,r)}removeReference(e,n,r){return eu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return eu(e,n)}er(e,n){return function(i,s){let o=!1;return WA(i).X(a=>qA(i,a,s).next(l=>(l&&(o=!0),N.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(u=>{if(!u)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,fe.min()),gi(e).delete(function(c){return[0,_n(c.path)]}(o))))});i.push(l)}}).next(()=>N.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return eu(e,n)}Xn(e,n){const r=gi(e);let i,s=Sn.ae;return r.Z({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:u})=>{o===0?(s!==Sn.ae&&n(new J(vr(i)),s),s=u,i=l):s=Sn.ae}).next(()=>{s!==Sn.ae&&n(new J(vr(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function eu(t,e){return gi(t).put(function(r,i){return{targetId:0,path:_n(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this.changes=new Xi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?N.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return as(e).put(r)}removeEntry(e,n,r){return as(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Xu(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=it.newInvalidDocument(n);return as(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(La(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:it.newInvalidDocument(n)};return as(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(La(n))},(i,s)=>{r={document:this.nr(n,s),size:Zu(s)}}).next(()=>r)}getEntries(e,n){let r=Cn();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Cn(),i=new Ze(J.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,Zu(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return N.resolve();let i=new ot(mI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(La(i.first()),La(i.last())),o=i.getIterator();let a=o.getNext();return as(e).Z({index:"documentKeyIndex",range:s},(l,u,h)=>{const c=J.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&mI(a,c)<0;)r(a,null),a=o.getNext();a&&a.isEqual(c)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?h.W(La(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i){const s=n.path,o=[s.popLast().toArray(),s.lastSegment(),Xu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[s.popLast().toArray(),s.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return as(e).G(IDBKeyRange.bound(o,a,!0)).next(l=>{let u=Cn();for(const h of l){const c=this.nr(J.fromSegments(h.prefixPath.concat(h.collectionGroup,h.documentId)),h);c.isFoundDocument()&&(Ac(n,c)||i.has(c.key))&&(u=u.insert(c.key,c))}return u})}getAllFromCollectionGroup(e,n,r,i){let s=Cn();const o=fI(n,r),a=fI(n,Mn.max());return as(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,u,h)=>{const c=this.nr(J.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);s=s.insert(c.key,c),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new lU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return hI(e).get("remoteDocumentGlobalKey").next(n=>(me(!!n),n))}tr(e,n){return hI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=HF(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(fe.min())))return r}return it.newInvalidDocument(e)}}function GA(t){return new aU(t)}class lU extends HA{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Xi(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ot((s,o)=>Pe(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=Zv(this.ar.serializer,o);i=i.add(s.path.popLast());const u=Zu(l);r+=u-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=Zv(this.ar.serializer,o.convertToNoDocument(fe.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),N.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function hI(t){return jt(t,"remoteDocumentGlobal")}function as(t){return jt(t,"remoteDocumentsV14")}function La(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function fI(t,e){const n=e.documentKey.path.toArray();return[t,Xu(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function mI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=Pe(n[s],r[s]),i)return i;return i=Pe(n.length,r.length),i||(i=Pe(n[n.length-2],r[r.length-2]),i||Pe(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&dl(r.mutation,i,Pn.empty(),ct.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ke()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ke()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ya();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ke()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Cn();const o=ul(),a=function(){return ul()}();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof ei)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),dl(h.mutation,u,h.mutation.getFieldMask(),ct.now())):o.set(u.key,Pn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var c;return a.set(u,new cU(h,(c=o.get(u))!==null&&c!==void 0?c:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ul();let i=new Ze((o,a)=>o-a),s=ke();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Pn.empty();h=a.applyToLocalView(u,h),r.set(l,h);const c=(i.get(a.batchId)||ke()).add(l);i=i.insert(a.batchId,c)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,c=hA();h.forEach(d=>{if(!s.has(d)){const f=IA(n.get(d),r.get(d));f!==null&&c.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,c))}return N.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):V_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):N.resolve(Ir());let a=-1,l=s;return o.next(u=>N.forEach(u,(h,c)=>(a<c.largestBatchId&&(a=c.largestBatchId),s.get(h)?N.resolve():this.remoteDocumentCache.getEntry(e,h).next(d=>{l=l.insert(h,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,ke())).next(h=>({batchId:a,changes:dA(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Ya();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Ya();return this.indexManager.getCollectionParents(e,i).next(o=>N.forEach(o,a=>{const l=function(h,c){return new Zr(c,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,c)=>{s=s.insert(h,c)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,it.newInvalidDocument(u)))});let o=Ya();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&dl(u.mutation,l,Pn.empty(),ct.now()),Ac(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return N.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:bt(i.createTime)}}(n)),N.resolve()}getNamedQuery(e,n){return N.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:W_(i.bundledQuery),readTime:bt(i.readTime)}}(n)),N.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(){this.overlays=new Ze(J.comparator),this.hr=new Map}getOverlay(e,n){return N.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return N.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.It(e,n,s)}),N.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),N.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return N.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ze((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=Ir(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=Ir(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return N.resolve(a)}It(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new B_(n,r));let s=this.hr.get(n);s===void 0&&(s=ke(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Pr=new ot(Vt.Ir),this.Tr=new ot(Vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new Vt(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new Vt(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new J(new Be([])),r=new Vt(n,e),i=new Vt(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new J(new Be([])),r=new Vt(n,e),i=new Vt(n,e+1);let s=ke();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Vt(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Vt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return J.comparator(e.key,n.key)||Pe(e.pr,n.pr)}static Er(e,n){return Pe(e.pr,n.pr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ot(Vt.Ir)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new U_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new Vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return N.resolve(o)}lookupMutationBatch(e,n){return N.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return N.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Vt(n,0),i=new Vt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),N.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ot(Pe);return n.forEach(i=>{const s=new Vt(i,0),o=new Vt(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),N.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new Vt(new J(s),0);let a=new ot(Pe);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),N.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){me(this.vr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return N.forEach(n.mutations,i=>{const s=new Vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new Vt(n,0),i=this.wr.firstAfterOrEqual(r);return N.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}vr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e){this.Cr=e,this.docs=function(){return new Ze(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(n))}getEntries(e,n){let r=Cn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():it.newInvalidDocument(i))}),N.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cn();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||O_(B0(h),r)<=0||(i.has(h.key)||Ac(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return N.resolve(s)}getAllFromCollectionGroup(e,n,r,i){se()}Fr(e,n){return N.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new mU(this)}getSize(e){return N.resolve(this.size)}}class mU extends HA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),N.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pU{constructor(e){this.persistence=e,this.Mr=new Xi(n=>$s(n),wc),this.lastRemoteSnapshotVersion=fe.min(),this.highestTargetId=0,this.Or=0,this.Nr=new K_,this.targetCount=0,this.Br=Hs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),N.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,N.resolve()}updateTargetData(e,n){return this.qn(n),N.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),N.waitFor(s).next(()=>i)}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return N.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),N.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),N.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),N.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return N.resolve(r)}containsKey(e,n){return N.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.Lr={},this.overlays={},this.kr=new Sn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new pU(this),this.indexManager=new ZF,this.remoteDocumentCache=function(i){return new fU(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new FA(n),this.$r=new uU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new hU(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new _U(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return N.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class _U extends q0{constructor(e){super(),this.currentSequenceNumber=e}}class lh{constructor(e){this.persistence=e,this.zr=new K_,this.jr=null}static Hr(e){return new lh(e)}get Jr(){if(this.jr)return this.jr;throw se()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),N.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),N.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.Jr,r=>{const i=J.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,fe.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return N.or([()=>N.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(e){this.serializer=e}B(e,n,r,i){const s=new th("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kv,{unique:!0}),l.createObjectStore("documentMutations")}(e),pI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=N.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),pI(e)),o=o.next(()=>function(l){const u=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:fe.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,u){return u.store("mutations").G().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",kv,{unique:!0});const c=u.store("mutations"),d=h.map(f=>c.put(f));return N.waitFor(d)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const u=l.createObjectStore("documentOverlays",{keyPath:ZM});u.createIndex("collectionPathOverlayIndex",eF,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",tF,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const u=l.createObjectStore("remoteDocumentsV14",{keyPath:jM});u.createIndex("documentKeyIndex",qM),u.createIndex("collectionGroupIndex",WM)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:QM}).createIndex("sequenceNumberIndex",YM,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:XM}).createIndex("documentKeyIndex",JM,{unique:!1})}(e))),o}ei(e){let n=0;return e.store("remoteDocuments").Z((r,i)=>{n+=Zu(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.G().next(i=>N.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.G("userMutationsIndex",o).next(a=>N.forEach(a,l=>{me(l.userId===s.userId);const u=ps(this.serializer,l);return jA(e,s.userId,u).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.Z((o,a)=>{const l=new Be(o),u=function(c){return[0,_n(c)]}(l);s.push(n.get(u).next(h=>h?N.resolve():(c=>n.put({targetId:0,path:_n(c),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>N.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:zM});const r=n.store("collectionParents"),i=new G_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:_n(l)})}};return n.store("remoteDocuments").Z({Y:!0},(o,a)=>{const l=new Be(o);return s(l.popLast())}).next(()=>n.store("documentMutations").Z({Y:!0},([o,a,l],u)=>{const h=vr(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.Z((r,i)=>{const s=Ja(i),o=UA(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.Z((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(c){return c.document?new J(Be.fromString(c.document.name).popFirst(5)):c.noDocument?J.fromSegments(c.noDocument.path):c.unknownDocument?J.fromSegments(c.unknownDocument.path):se()}(o).path.toArray(),u={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(u))}).next(()=>N.waitFor(i))}si(e,n){const r=n.store("mutations"),i=GA(this.serializer),s=new zA(lh.Hr,this.serializer.ht);return r.G().next(o=>{const a=new Map;return o.forEach(l=>{var u;let h=(u=a.get(l.userId))!==null&&u!==void 0?u:ke();ps(this.serializer,l).keys().forEach(c=>h=h.add(c)),a.set(l.userId,h)}),N.forEach(a,(l,u)=>{const h=new Mt(u),c=oh.Pt(this.serializer,h),d=s.getIndexManager(h),f=ah.Pt(h,this.serializer,d,s.referenceDelegate);return new KA(i,f,c,d).recalculateAndSaveOverlaysForDocumentKeys(new mm(n,Sn.ae),l).next()})})}}function pI(t){t.createObjectStore("targetDocuments",{keyPath:GM}).createIndex("documentTargetsIndex",KM,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",HM,{unique:!0}),t.createObjectStore("targetGlobal")}const hf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class z_{constructor(e,n,r,i,s,o,a,l,u,h,c=15){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=u,this.ai=h,this.ui=c,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=d=>Promise.resolve(),!z_.v())throw new B(L.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new oU(this,i),this.Ti=n+"main",this.serializer=new FA(l),this.Ei=new Xn(this.Ti,this.ui,new gU(this.serializer)),this.Qr=new tU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=GA(this.serializer),this.$r=new GF,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&Tt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,hf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Sn(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.k(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Yi(e))return W("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return W("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Va(e).get("owner").next(n=>N.resolve(this.Si(n)))}bi(e){return tu(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.vi(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=jt(n,"clientMetadata");return r.G().next(i=>{const s=this.Ci(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return N.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?N.resolve(!0):Va(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new B(L.FAILED_PRECONDITION,hf);return!1}}return!(!this.networkEnabled||!this.inForeground)||tu(e).G().next(r=>this.Ci(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&W("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new mm(e,Sn.ae);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Bi()}Ci(e,n){return e.filter(r=>this.vi(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Li(){return this.runTransaction("getActiveClients","readonly",e=>tu(e).G().next(n=>this.Ci(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return ah.Pt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new eU(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return oh.Pt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){W("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===15?rF:l===14?z0:l===13?K0:l===12?nF:l===11?G0:void se()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new mm(a,this.kr?this.kr.next():Sn.ae),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Tt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new B(L.FAILED_PRECONDITION,j0);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Va(e).get("owner").next(n=>{if(n!==null&&this.vi(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new B(L.FAILED_PRECONDITION,hf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Va(e).put("owner",n)}static v(){return Xn.v()}yi(e){const n=Va(e);return n.get("owner").next(r=>this.Si(r)?(W("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):N.resolve())}vi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Tt(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;GO()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return W("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Tt("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Tt("Failed to set zombie client id.",e)}}Bi(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Va(t){return jt(t,"owner")}function tu(t){return jt(t,"clientMetadata")}function Q_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ke(),i=ke();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Y_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this.$i=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Wi(e,n).next(s=>s||this.Gi(e,n,i,r)).next(s=>s||this.zi(e,n))}Wi(e,n){if(jv(n))return N.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Yu(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ke(...s);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ji(n,a);return this.Hi(n,u,o,l.readTime)?this.Wi(e,Yu(n,null,"F")):this.Ji(e,u,n,l)}))})))}Gi(e,n,r,i){return jv(n)||i.isEqual(fe.min())?this.zi(e,n):this.Ui.getDocuments(e,r).next(s=>{const o=this.ji(n,s);return this.Hi(n,o,r,i)?this.zi(e,n):(hm()<=$e.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Em(n)),this.Ji(e,o,n,$0(i,-1)))})}ji(e,n){let r=new ot(cA(e));return n.forEach((i,s)=>{Ac(e,s)&&(r=r.add(s))}),r}Hi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}zi(e,n){return hm()<=$e.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",Em(n)),this.Ui.getDocumentsMatchingQuery(e,n,Mn.min())}Ji(e,n,r,i){return this.Ui.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yU{constructor(e,n,r,i){this.persistence=e,this.Yi=n,this.serializer=i,this.Zi=new Ze(Pe),this.Xi=new Xi(s=>$s(s),wc),this.es=new Map,this.ts=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this.ns(r)}ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new KA(this.ts,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ts.setIndexManager(this.indexManager),this.Yi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Zi))}}function YA(t,e,n,r){return new yU(t,e,n,r)}async function XA(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ns(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ke();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function vU(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ts.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const c=u.batch,d=c.keys();let f=N.resolve();return d.forEach(m=>{f=f.next(()=>h.getEntry(l,m)).next(y=>{const v=u.docVersions.get(m);me(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ke();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function JA(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function IU(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Zi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ts.newChangeBuffer({trackRemovals:!0});i=n.Zi;const a=[];e.targetChanges.forEach((h,c)=>{const d=i.get(c);if(!d)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,c).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,c)));let f=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(c)!==null?f=f.withResumeToken(Lt.EMPTY_BYTE_STRING,fe.min()).withLastLimboFreeSnapshotVersion(fe.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,r)),i=i.insert(c,f),function(y,v,p){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,f,h)&&a.push(n.Qr.updateTargetData(s,f))});let l=Cn(),u=ke();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(ZA(s,o,e.documentUpdates).next(h=>{l=h.ss,u=h.os})),!r.isEqual(fe.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(c=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return N.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Zi=i,s))}function ZA(t,e,n){let r=ke(),i=ke();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(fe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):W("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ss:o,os:i}})}function EU(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Go(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,N.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new Mr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Zi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Zi=n.Zi.insert(r.targetId,r),n.Xi.set(e,r.targetId)),r})}async function Ko(t,e,n){const r=Z(t),i=r.Zi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Yi(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Zi=r.Zi.remove(e),r.Xi.delete(i.target)}function ed(t,e,n){const r=Z(t);let i=fe.min(),s=ke();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,h){const c=Z(l),d=c.Xi.get(h);return d!==void 0?N.resolve(c.Zi.get(d)):c.Qr.getTargetData(u,h)}(r,o,On(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Yi.getDocumentsMatchingQuery(o,e,n?i:fe.min(),n?s:ke())).next(a=>(nR(r,lA(e),a),{documents:a,_s:s})))}function eR(t,e){const n=Z(t),r=Z(n.Qr),i=n.Zi.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.lt(s,e).next(o=>o?o.target:null))}function tR(t,e){const n=Z(t),r=n.es.get(e)||fe.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.ts.getAllFromCollectionGroup(i,e,$0(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(nR(n,e,i),i))}function nR(t,e,n){let r=t.es.get(e)||fe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.es.set(e,r)}async function TU(t,e,n,r){const i=Z(t);let s=ke(),o=Cn();for(const u of n){const h=e.us(u.metadata.name);u.document&&(s=s.add(h));const c=e.cs(u);c.setReadTime(e.ls(u.metadata.readTime)),o=o.insert(h,c)}const a=i.ts.newChangeBuffer({trackRemovals:!0}),l=await Go(i,function(h){return On(ma(Be.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",u=>ZA(u,a,o).next(h=>(a.apply(u),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(u,l.targetId).next(()=>i.Qr.addMatchingKeys(u,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(u,h.ss,h.os)).next(()=>h.ss)))}async function wU(t,e,n=ke()){const r=await Go(t,On(W_(e.bundledQuery))),i=Z(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=bt(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Lt.EMPTY_BYTE_STRING,o);return i.Zi=i.Zi.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function _I(t,e){return`firestore_clients_${t}_${e}`}function gI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function ff(t,e){return`firestore_targets_${t}_${e}`}class td{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static hs(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new B(i.error.code,i.error.message))),o?new td(e,n,i.state,s):(Tt("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Ps(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class hl{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static hs(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new B(r.error.code,r.error.message))),s?new hl(e,r.state,i):(Tt("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Ps(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nd{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static hs(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=M_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=W0(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new nd(e,s):(Tt("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class X_{constructor(e,n){this.clientId=e,this.onlineState=n}static hs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new X_(n.clientId,n.onlineState):(Tt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Pm{constructor(){this.activeTargetIds=M_()}Is(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ts(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ps(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Es=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ds=this.As.bind(this),this.Rs=new Ze(Pe),this.started=!1,this.Vs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.fs=_I(this.persistenceKey,this.Es),this.gs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Rs=this.Rs.insert(this.Es,new Pm),this.ps=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.ys=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.ws=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ss=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.bs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.ds)}static v(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Li();for(const r of e){if(r===this.Es)continue;const i=this.getItem(_I(this.persistenceKey,r));if(i){const s=nd.hs(r,i);s&&(this.Rs=this.Rs.insert(s.clientId,s))}}this.Ds();const n=this.storage.getItem(this.Ss);if(n){const r=this.vs(n);r&&this.Cs(r)}for(const r of this.Vs)this.As(r);this.Vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.gs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Fs(this.Rs)}isActiveQueryTarget(e){let n=!1;return this.Rs.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ms(e,"pending")}updateMutationState(e,n,r){this.Ms(e,n,r),this.xs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(ff(this.persistenceKey,e));if(r){const i=hl.hs(e,r);i&&(n=i.state)}}return this.Os.Is(e),this.Ds(),n}removeLocalQueryTarget(e){this.Os.Ts(e),this.Ds()}isLocalQueryTarget(e){return this.Os.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(ff(this.persistenceKey,e))}updateQueryState(e,n,r){this.Ns(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.xs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Bs(e)}notifyBundleLoaded(e){this.Ls(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ds),this.removeItem(this.fs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return W("SharedClientState","READ",e,n),n}setItem(e,n){W("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){W("SharedClientState","REMOVE",e),this.storage.removeItem(e)}As(e){const n=e;if(n.storageArea===this.storage){if(W("SharedClientState","EVENT",n.key,n.newValue),n.key===this.fs)return void Tt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.ps.test(n.key)){if(n.newValue==null){const r=this.ks(n.key);return this.qs(r,null)}{const r=this.Qs(n.key,n.newValue);if(r)return this.qs(r.clientId,r)}}else if(this.ys.test(n.key)){if(n.newValue!==null){const r=this.Ks(n.key,n.newValue);if(r)return this.$s(r)}}else if(this.ws.test(n.key)){if(n.newValue!==null){const r=this.Us(n.key,n.newValue);if(r)return this.Ws(r)}}else if(n.key===this.Ss){if(n.newValue!==null){const r=this.vs(n.newValue);if(r)return this.Cs(r)}}else if(n.key===this.gs){const r=function(s){let o=Sn.ae;if(s!=null)try{const a=JSON.parse(s);me(typeof a=="number"),o=a}catch(a){Tt("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Sn.ae&&this.sequenceNumberHandler(r)}else if(n.key===this.bs){const r=this.Gs(n.newValue);await Promise.all(r.map(i=>this.syncEngine.zs(i)))}}}else this.Vs.push(n)})}}get Os(){return this.Rs.get(this.Es)}Ds(){this.setItem(this.fs,this.Os.Ps())}Ms(e,n,r){const i=new td(this.currentUser,e,n,r),s=gI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ps())}xs(e){const n=gI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Bs(e){const n={clientId:this.Es,onlineState:e};this.storage.setItem(this.Ss,JSON.stringify(n))}Ns(e,n,r){const i=ff(this.persistenceKey,e),s=new hl(e,n,r);this.setItem(i,s.Ps())}Ls(e){const n=JSON.stringify(Array.from(e));this.setItem(this.bs,n)}ks(e){const n=this.ps.exec(e);return n?n[1]:null}Qs(e,n){const r=this.ks(e);return nd.hs(r,n)}Ks(e,n){const r=this.ys.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return td.hs(new Mt(s),i,n)}Us(e,n){const r=this.ws.exec(e),i=Number(r[1]);return hl.hs(i,n)}vs(e){return X_.hs(e)}Gs(e){return JSON.parse(e)}async $s(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.js(e.batchId,e.state,e.error);W("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Ws(e){return this.syncEngine.Hs(e.targetId,e.state,e.error)}qs(e,n){const r=n?this.Rs.insert(e,n):this.Rs.remove(e),i=this.Fs(this.Rs),s=this.Fs(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.Js(o,a).then(()=>{this.Rs=r})}Cs(e){this.Rs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Fs(e){let n=M_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class rR{constructor(){this.Ys=new Pm,this.Zs={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ys.Is(e),this.Zs[e]||"not-current"}updateQueryState(e,n,r){this.Zs[e]=n}removeLocalQueryTarget(e){this.Ys.Ts(e)}isLocalQueryTarget(e){return this.Ys.activeTargetIds.has(e)}clearQueryState(e){delete this.Zs[e]}getAllActiveQueryTargets(){return this.Ys.activeTargetIds}isActiveQueryTarget(e){return this.Ys.activeTargetIds.has(e)}start(){return this.Ys=new Pm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bU{Xs(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yI{constructor(){this.eo=()=>this.no(),this.ro=()=>this.io(),this.so=[],this.oo()}Xs(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.eo),window.removeEventListener("offline",this.ro)}oo(){window.addEventListener("online",this.eo),window.addEventListener("offline",this.ro)}no(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}io(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu=null;function pf(){return nu===null?nu=function(){return 268435456+Math.round(2147483648*Math.random())}():nu++,"0x"+nu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RU{constructor(e){this._o=e._o,this.ao=e.ao}uo(e){this.co=e}lo(e){this.ho=e}onMessage(e){this.Po=e}close(){this.ao()}send(e){this._o(e)}Io(){this.co()}To(e){this.ho(e)}Eo(e){this.Po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn="WebChannelConnection";class SU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ao=r+"://"+n.host,this.Ro=`projects/${i}/databases/${s}`,this.Vo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get mo(){return!1}fo(n,r,i,s,o){const a=pf(),l=this.po(n,r);W("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Ro,"x-goog-request-params":this.Vo};return this.yo(u,s,o),this.wo(n,l,u,i).then(h=>(W("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw nr("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}So(n,r,i,s,o,a){return this.fo(n,r,i,s,o)}yo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}po(n,r){const i=AU[n];return`${this.Ao}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}wo(e,n,r,i){const s=pf();return new Promise((o,a)=>{const l=new TM;l.setWithCredentials(!0),l.listenOnce(IM.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case uf.NO_ERROR:const h=l.getResponseJson();W(tn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case uf.TIMEOUT:W(tn,`RPC '${e}' ${s} timed out`),a(new B(L.DEADLINE_EXCEEDED,"Request time out"));break;case uf.HTTP_ERROR:const c=l.getStatus();if(W(tn,`RPC '${e}' ${s} failed with status:`,c,"response text:",l.getResponseText()),c>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const m=function(v){const p=v.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(p)>=0?p:L.UNKNOWN}(f.status);a(new B(m,f.message))}else a(new B(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new B(L.UNAVAILABLE,"Connection failed."));break;default:se()}}finally{W(tn,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);W(tn,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}bo(e,n,r){const i=pf(),s=[this.Ao,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yM(),a=vM(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.yo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(tn,`Creating RPC '${e}' stream ${i}: ${h}`,l);const c=o.createWebChannel(h,l);let d=!1,f=!1;const m=new RU({_o:v=>{f?W(tn,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(W(tn,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),W(tn,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},ao:()=>c.close()}),y=(v,p,I)=>{v.listen(p,b=>{try{I(b)}catch(E){setTimeout(()=>{throw E},0)}})};return y(c,Yc.EventType.OPEN,()=>{f||W(tn,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Yc.EventType.CLOSE,()=>{f||(f=!0,W(tn,`RPC '${e}' stream ${i} transport closed`),m.To())}),y(c,Yc.EventType.ERROR,v=>{f||(f=!0,nr(tn,`RPC '${e}' stream ${i} transport errored:`,v),m.To(new B(L.UNAVAILABLE,"The operation could not be completed")))}),y(c,Yc.EventType.MESSAGE,v=>{var p;if(!f){const I=v.data[0];me(!!I);const b=I,E=b.error||((p=b[0])===null||p===void 0?void 0:p.error);if(E){W(tn,`RPC '${e}' stream ${i} received error:`,E);const P=E.status;let k=function(F){const X=St[F];if(X!==void 0)return wA(X)}(P),O=E.message;k===void 0&&(k=L.INTERNAL,O="Unknown error status: "+P+" with message "+E.message),f=!0,m.To(new B(k,O)),c.close()}else W(tn,`RPC '${e}' stream ${i} received:`,I),m.Eo(I)}}),y(a,EM.STAT_EVENT,v=>{v.stat===Rv.PROXY?W(tn,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Rv.NOPROXY&&W(tn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Io()},0),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return typeof window<"u"?window:null}function wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(t){return new LF(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Do=r,this.vo=i,this.Co=s,this.Fo=0,this.Mo=null,this.xo=Date.now(),this.reset()}reset(){this.Fo=0}Oo(){this.Fo=this.Co}No(e){this.cancel();const n=Math.floor(this.Fo+this.Bo()),r=Math.max(0,Date.now()-this.xo),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Fo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Mo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.xo=Date.now(),e())),this.Fo*=this.vo,this.Fo<this.Do&&(this.Fo=this.Do),this.Fo>this.Co&&(this.Fo=this.Co)}Lo(){this.Mo!==null&&(this.Mo.skipDelay(),this.Mo=null)}cancel(){this.Mo!==null&&(this.Mo.cancel(),this.Mo=null)}Bo(){return(Math.random()-.5)*this.Fo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.ko=r,this.qo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Qo=0,this.Ko=null,this.$o=null,this.stream=null,this.Uo=new J_(e,n)}Wo(){return this.state===1||this.state===5||this.Go()}Go(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.zo()}async stop(){this.Wo()&&await this.close(0)}jo(){this.state=0,this.Uo.reset()}Ho(){this.Go()&&this.Ko===null&&(this.Ko=this.oi.enqueueAfterDelay(this.ko,6e4,()=>this.Jo()))}Yo(e){this.Zo(),this.stream.send(e)}async Jo(){if(this.Go())return this.close(0)}Zo(){this.Ko&&(this.Ko.cancel(),this.Ko=null)}Xo(){this.$o&&(this.$o.cancel(),this.$o=null)}async close(e,n){this.Zo(),this.Xo(),this.Uo.cancel(),this.Qo++,e!==4?this.Uo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Tt(n.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.Uo.Oo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.e_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.lo(n)}e_(){}auth(){this.state=1;const e=this.t_(this.Qo),n=this.Qo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Qo===n&&this.n_(r,i)},r=>{e(()=>{const i=new B(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.r_(i)})})}n_(e,n){const r=this.t_(this.Qo);this.stream=this.i_(e,n),this.stream.uo(()=>{r(()=>(this.state=2,this.$o=this.oi.enqueueAfterDelay(this.qo,1e4,()=>(this.Go()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.lo(i=>{r(()=>this.r_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}zo(){this.state=5,this.Uo.No(async()=>{this.state=0,this.start()})}r_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}t_(e){return n=>{this.oi.enqueueAndForget(()=>this.Qo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class PU extends sR{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}i_(e,n){return this.connection.bo("Listen",e,n)}onMessage(e){this.Uo.reset();const n=FF(this.serializer,e),r=function(s){if(!("targetChange"in s))return fe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?fe.min():o.readTime?bt(o.readTime):fe.min()}(e);return this.listener.s_(n,r)}o_(e){const n={};n.database=Yl(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=zu(l)?{documents:NA(s,l)}:{query:xA(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=SA(s,o.resumeToken);const u=Tm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(fe.min())>0){a.readTime=Ho(s,o.snapshotVersion.toTimestamp());const u=Tm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=$F(this.serializer,e);r&&(n.labels=r),this.Yo(n)}__(e){const n={};n.database=Yl(this.serializer),n.removeTarget=e,this.Yo(n)}}class CU extends sR{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.a_=!1}get u_(){return this.a_}start(){this.a_=!1,this.lastStreamToken=void 0,super.start()}e_(){this.a_&&this.c_([])}i_(e,n){return this.connection.bo("Write",e,n)}onMessage(e){if(me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_){this.Uo.reset();const n=UF(e.writeResults,e.commitTime),r=bt(e.commitTime);return this.listener.l_(r,n)}return me(!e.writeResults||e.writeResults.length===0),this.a_=!0,this.listener.h_()}P_(){const e={};e.database=Yl(this.serializer),this.Yo(e)}c_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xl(this.serializer,r))};this.Yo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kU extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.I_=!1}T_(){if(this.I_)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}fo(e,n,r){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.fo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new B(L.UNKNOWN,i.toString())})}So(e,n,r,i){return this.T_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.So(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(L.UNKNOWN,s.toString())})}terminate(){this.I_=!0}}class OU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.d_=0,this.A_=null,this.R_=!0}V_(){this.d_===0&&(this.m_("Unknown"),this.A_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.A_=null,this.f_("Backend didn't respond within 10 seconds."),this.m_("Offline"),Promise.resolve())))}g_(e){this.state==="Online"?this.m_("Unknown"):(this.d_++,this.d_>=1&&(this.p_(),this.f_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.m_("Offline")))}set(e){this.p_(),this.d_=0,e==="Online"&&(this.R_=!1),this.m_(e)}m_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}f_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.R_?(Tt(n),this.R_=!1):W("OnlineStateTracker",n)}p_(){this.A_!==null&&(this.A_.cancel(),this.A_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NU{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.y_=[],this.w_=new Map,this.S_=new Set,this.b_=[],this.D_=s,this.D_.Xs(o=>{r.enqueueAndForget(async()=>{Ji(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=Z(l);u.S_.add(4),await ga(u),u.v_.set("Unknown"),u.S_.delete(4),await kc(u)}(this))})}),this.v_=new OU(r,i)}}async function kc(t){if(Ji(t))for(const e of t.b_)await e(!0)}async function ga(t){for(const e of t.b_)await e(!1)}function ch(t,e){const n=Z(t);n.w_.has(e.targetId)||(n.w_.set(e.targetId,e),tg(n)?eg(n):va(n).Go()&&Z_(n,e))}function Jl(t,e){const n=Z(t),r=va(n);n.w_.delete(e),r.Go()&&oR(n,e),n.w_.size===0&&(r.Go()?r.Ho():Ji(n)&&n.v_.set("Unknown"))}function Z_(t,e){if(t.C_.Le(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(fe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).o_(e)}function oR(t,e){t.C_.Le(e),va(t).__(e)}function eg(t){t.C_=new OF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.w_.get(e)||null,st:()=>t.datastore.serializer.databaseId}),va(t).start(),t.v_.V_()}function tg(t){return Ji(t)&&!va(t).Wo()&&t.w_.size>0}function Ji(t){return Z(t).S_.size===0}function aR(t){t.C_=void 0}async function xU(t){t.w_.forEach((e,n)=>{Z_(t,e)})}async function DU(t,e){aR(t),tg(t)?(t.v_.g_(e),eg(t)):t.v_.set("Unknown")}async function LU(t,e,n){if(t.v_.set("Online"),e instanceof RA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.w_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.w_.delete(a),i.C_.removeTarget(a))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await rd(t,r)}else if(e instanceof Tu?t.C_.Ge(e):e instanceof AA?t.C_.Xe(e):t.C_.He(e),!n.isEqual(fe.min()))try{const r=await JA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.C_._t(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.w_.get(u);h&&s.w_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=s.w_.get(l);if(!h)return;s.w_.set(l,h.withResumeToken(Lt.EMPTY_BYTE_STRING,h.snapshotVersion)),oR(s,l);const c=new Mr(h.target,l,u,h.sequenceNumber);Z_(s,c)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await rd(t,r)}}async function rd(t,e,n){if(!Yi(e))throw e;t.S_.add(1),await ga(t),t.v_.set("Offline"),n||(n=()=>JA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.S_.delete(1),await kc(t)})}function lR(t,e){return e().catch(n=>rd(t,n,e))}async function ya(t){const e=Z(t),n=$i(e);let r=e.y_.length>0?e.y_[e.y_.length-1].batchId:-1;for(;VU(e);)try{const i=await EU(e.localStore,r);if(i===null){e.y_.length===0&&n.Ho();break}r=i.batchId,MU(e,i)}catch(i){await rd(e,i)}cR(e)&&uR(e)}function VU(t){return Ji(t)&&t.y_.length<10}function MU(t,e){t.y_.push(e);const n=$i(t);n.Go()&&n.u_&&n.c_(e.mutations)}function cR(t){return Ji(t)&&!$i(t).Wo()&&t.y_.length>0}function uR(t){$i(t).start()}async function FU(t){$i(t).P_()}async function UU(t){const e=$i(t);for(const n of t.y_)e.c_(n.mutations)}async function $U(t,e,n){const r=t.y_.shift(),i=$_.from(r,e,n);await lR(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ya(t)}async function BU(t,e){e&&$i(t).u_&&await async function(r,i){if(function(o){return TA(o)&&o!==L.ABORTED}(i.code)){const s=r.y_.shift();$i(r).jo(),await lR(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ya(r)}}(t,e),cR(t)&&uR(t)}async function vI(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=Ji(n);n.S_.add(3),await ga(n),r&&n.v_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.S_.delete(3),await kc(n)}async function Cm(t,e){const n=Z(t);e?(n.S_.delete(2),await kc(n)):e||(n.S_.add(2),await ga(n),n.v_.set("Unknown"))}function va(t){return t.F_||(t.F_=function(n,r,i){const s=Z(n);return s.T_(),new PU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:xU.bind(null,t),lo:DU.bind(null,t),s_:LU.bind(null,t)}),t.b_.push(async e=>{e?(t.F_.jo(),tg(t)?eg(t):t.v_.set("Unknown")):(await t.F_.stop(),aR(t))})),t.F_}function $i(t){return t.M_||(t.M_=function(n,r,i){const s=Z(n);return s.T_(),new CU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:FU.bind(null,t),lo:BU.bind(null,t),h_:UU.bind(null,t),l_:$U.bind(null,t)}),t.b_.push(async e=>{e?(t.M_.jo(),await ya(t)):(await t.M_.stop(),t.y_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.y_.length} pending writes`),t.y_=[]))})),t.M_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ng(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ia(t,e){if(Tt("AsyncQueue",`${e}: ${t}`),Yi(t))return new B(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Ya(),this.sortedSet=new Ze(this.comparator)}static emptySet(e){return new xo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(){this.x_=new Ze(J.comparator)}track(e){const n=e.doc.key,r=this.x_.get(n);r?e.type!==0&&r.type===3?this.x_=this.x_.insert(n,e):e.type===3&&r.type!==1?this.x_=this.x_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.x_=this.x_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.x_=this.x_.remove(n):e.type===1&&r.type===2?this.x_=this.x_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.x_=this.x_.insert(n,{type:2,doc:e.doc}):se():this.x_=this.x_.insert(n,e)}O_(){const e=[];return this.x_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zo(e,n,xo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jU{constructor(){this.N_=void 0,this.listeners=[]}}class qU{constructor(){this.queries=new Xi(e=>aA(e),bc),this.onlineState="Unknown",this.B_=new Set}}async function rg(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new jU),i)try{s.N_=await n.onListen(r)}catch(o){const a=Ia(o,`Initialization of query '${Em(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.L_(n.onlineState),s.N_&&e.k_(s.N_)&&sg(n)}async function ig(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function WU(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.k_(i)&&(r=!0);o.N_=i}}r&&sg(n)}function HU(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function sg(t){t.B_.forEach(e=>{e.next()})}class og{constructor(e,n,r){this.query=e,this.q_=n,this.Q_=!1,this.K_=null,this.onlineState="Unknown",this.options=r||{}}k_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Q_?this.U_(e)&&(this.q_.next(e),n=!0):this.W_(e,this.onlineState)&&(this.G_(e),n=!0),this.K_=e,n}onError(e){this.q_.error(e)}L_(e){this.onlineState=e;let n=!1;return this.K_&&!this.Q_&&this.W_(this.K_,e)&&(this.G_(this.K_),n=!0),n}W_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.z_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}U_(e){if(e.docChanges.length>0)return!0;const n=this.K_&&this.K_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}G_(e){e=zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Q_=!0,this.q_.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GU{constructor(e,n){this.j_=e,this.byteLength=n}H_(){return"metadata"in this.j_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(e){this.serializer=e}us(e){return Er(this.serializer,e)}cs(e){return e.metadata.exists?OA(this.serializer,e.document,!1):it.newNoDocument(this.us(e.metadata.name),this.ls(e.metadata.readTime))}ls(e){return bt(e)}}class KU{constructor(e,n,r){this.J_=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=dR(e)}Y_(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.j_.namedQuery)this.queries.push(e.j_.namedQuery);else if(e.j_.documentMetadata){this.documents.push({metadata:e.j_.documentMetadata}),e.j_.documentMetadata.exists||++n;const r=Be.fromString(e.j_.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.j_.document&&(this.documents[this.documents.length-1].document=e.j_.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}Z_(e){const n=new Map,r=new EI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.us(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ke()).add(s);n.set(o,a)}}return n}async complete(){const e=await TU(this.localStore,new EI(this.serializer),this.documents,this.J_.id),n=this.Z_(this.documents);for(const r of this.queries)await wU(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,X_:this.collectionGroups,ea:e}}}function dR(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.key=e}}class fR{constructor(e){this.key=e}}class mR{constructor(e,n){this.query=e,this.ta=n,this.na=null,this.hasCachedResults=!1,this.current=!1,this.ra=ke(),this.mutatedKeys=ke(),this.ia=cA(e),this.sa=new xo(this.ia)}get oa(){return this.ta}_a(e,n){const r=n?n.aa:new II,i=n?n.sa:this.sa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,c)=>{const d=i.get(h),f=Ac(this.query,c)?c:null,m=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?m!==y&&(r.track({type:3,doc:f}),v=!0):this.ua(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this.ia(f,l)>0||u&&this.ia(f,u)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||u)&&(a=!0)),v&&(f?(o=o.add(f),s=y?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{sa:o,aa:r,Hi:a,mutatedKeys:s}}ua(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.sa;this.sa=e.sa,this.mutatedKeys=e.mutatedKeys;const s=e.aa.O_();s.sort((u,h)=>function(d,f){const m=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se()}};return m(d)-m(f)}(u.type,h.type)||this.ia(u.doc,h.doc)),this.ca(r);const o=n?this.la():[],a=this.ra.size===0&&this.current?1:0,l=a!==this.na;return this.na=a,s.length!==0||l?{snapshot:new zo(this.query,e.sa,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ha:o}:{ha:o}}L_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({sa:this.sa,aa:new II,mutatedKeys:this.mutatedKeys,Hi:!1},!1)):{ha:[]}}Pa(e){return!this.ta.has(e)&&!!this.sa.has(e)&&!this.sa.get(e).hasLocalMutations}ca(e){e&&(e.addedDocuments.forEach(n=>this.ta=this.ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ta=this.ta.delete(n)),this.current=e.current)}la(){if(!this.current)return[];const e=this.ra;this.ra=ke(),this.sa.forEach(r=>{this.Pa(r.key)&&(this.ra=this.ra.add(r.key))});const n=[];return e.forEach(r=>{this.ra.has(r)||n.push(new fR(r))}),this.ra.forEach(r=>{e.has(r)||n.push(new hR(r))}),n}Ia(e){this.ta=e._s,this.ra=ke();const n=this._a(e.documents);return this.applyChanges(n,!0)}Ta(){return zo.fromInitialDocuments(this.query,this.sa,this.mutatedKeys,this.na===0,this.hasCachedResults)}}class zU{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class QU{constructor(e){this.key=e,this.Ea=!1}}class YU{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.da={},this.Aa=new Xi(a=>aA(a),bc),this.Ra=new Map,this.Va=new Set,this.ma=new Ze(J.comparator),this.fa=new Map,this.ga=new K_,this.pa={},this.ya=new Map,this.wa=Hs.Bn(),this.onlineState="Unknown",this.Sa=void 0}get isPrimaryClient(){return this.Sa===!0}}async function XU(t,e){const n=dg(t);let r,i;const s=n.Aa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ta();else{const o=await Go(n.localStore,On(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await ag(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ch(n.remoteStore,o)}return i}async function ag(t,e,n,r,i){t.ba=(c,d,f)=>async function(y,v,p,I){let b=v.view._a(p);b.Hi&&(b=await ed(y.localStore,v.query,!1).then(({documents:k})=>v.view._a(k,b)));const E=I&&I.targetChanges.get(v.targetId),P=v.view.applyChanges(b,y.isPrimaryClient,E);return km(y,v.targetId,P.ha),P.snapshot}(t,c,d,f);const s=await ed(t.localStore,e,!0),o=new mR(e,s._s),a=o._a(s.documents),l=Pc.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);km(t,n,u.ha);const h=new zU(e,n,o);return t.Aa.set(e,h),t.Ra.has(n)?t.Ra.get(n).push(e):t.Ra.set(n,[e]),u.snapshot}async function JU(t,e){const n=Z(t),r=n.Aa.get(e),i=n.Ra.get(r.targetId);if(i.length>1)return n.Ra.set(r.targetId,i.filter(s=>!bc(s,e))),void n.Aa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Ko(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Jl(n.remoteStore,r.targetId),Qo(n,r.targetId)}).catch(Qi)):(Qo(n,r.targetId),await Ko(n.localStore,r.targetId,!0))}async function ZU(t,e,n){const r=hg(t);try{const i=await function(o,a){const l=Z(o),u=ct.now(),h=a.reduce((f,m)=>f.add(m.key),ke());let c,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let m=Cn(),y=ke();return l.ts.getEntries(f,h).next(v=>{m=v,m.forEach((p,I)=>{I.isValidDocument()||(y=y.add(p))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,m)).next(v=>{c=v;const p=[];for(const I of a){const b=PF(I,c.get(I.key).overlayedDocument);b!=null&&p.push(new ei(I.key,b,J0(b.value.mapValue),lt.exists(!0)))}return l.mutationQueue.addMutationBatch(f,u,p,a)}).next(v=>{d=v;const p=v.applyToLocalDocumentSet(c,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,p)})}).then(()=>({batchId:d.batchId,changes:dA(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.pa[o.currentUser.toKey()];u||(u=new Ze(Pe)),u=u.insert(a,l),o.pa[o.currentUser.toKey()]=u}(r,i.batchId,n),await ti(r,i.changes),await ya(r.remoteStore)}catch(i){const s=Ia(i,"Failed to persist write");n.reject(s)}}async function pR(t,e){const n=Z(t);try{const r=await IU(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fa.get(s);o&&(me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ea=!0:i.modifiedDocuments.size>0?me(o.Ea):i.removedDocuments.size>0&&(me(o.Ea),o.Ea=!1))}),await ti(n,r,e)}catch(r){await Qi(r)}}function TI(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Aa.forEach((s,o)=>{const a=o.view.L_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=Z(o);l.onlineState=a;let u=!1;l.queries.forEach((h,c)=>{for(const d of c.listeners)d.L_(a)&&(u=!0)}),u&&sg(l)}(r.eventManager,e),i.length&&r.da.s_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function e2(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fa.get(e),s=i&&i.key;if(s){let o=new Ze(J.comparator);o=o.insert(s,it.newNoDocument(s,fe.min()));const a=ke().add(s),l=new Sc(fe.min(),new Map,new Ze(Pe),o,a);await pR(r,l),r.ma=r.ma.remove(s),r.fa.delete(e),ug(r)}else await Ko(r.localStore,e,!1).then(()=>Qo(r,e,n)).catch(Qi)}async function t2(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await vU(n.localStore,e);cg(n,r,null),lg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ti(n,i)}catch(i){await Qi(i)}}async function n2(t,e,n){const r=Z(t);try{const i=await function(o,a){const l=Z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(c=>(me(c!==null),h=c.keys(),l.mutationQueue.removeMutationBatch(u,c))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);cg(r,e,n),lg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ti(r,i)}catch(i){await Qi(i)}}async function r2(t,e){const n=Z(t);Ji(n.remoteStore)||W("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=Z(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.ya.get(r)||[];i.push(e),n.ya.set(r,i)}catch(r){const i=Ia(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function lg(t,e){(t.ya.get(e)||[]).forEach(n=>{n.resolve()}),t.ya.delete(e)}function cg(t,e,n){const r=Z(t);let i=r.pa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pa[r.currentUser.toKey()]=i}}function Qo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ra.get(e))t.Aa.delete(r),n&&t.da.Da(r,n);t.Ra.delete(e),t.isPrimaryClient&&t.ga.Vr(e).forEach(r=>{t.ga.containsKey(r)||_R(t,r)})}function _R(t,e){t.Va.delete(e.path.canonicalString());const n=t.ma.get(e);n!==null&&(Jl(t.remoteStore,n),t.ma=t.ma.remove(e),t.fa.delete(n),ug(t))}function km(t,e,n){for(const r of n)r instanceof hR?(t.ga.addReference(r.key,e),i2(t,r)):r instanceof fR?(W("SyncEngine","Document no longer in limbo: "+r.key),t.ga.removeReference(r.key,e),t.ga.containsKey(r.key)||_R(t,r.key)):se()}function i2(t,e){const n=e.key,r=n.path.canonicalString();t.ma.get(n)||t.Va.has(r)||(W("SyncEngine","New document in limbo: "+n),t.Va.add(r),ug(t))}function ug(t){for(;t.Va.size>0&&t.ma.size<t.maxConcurrentLimboResolutions;){const e=t.Va.values().next().value;t.Va.delete(e);const n=new J(Be.fromString(e)),r=t.wa.next();t.fa.set(r,new QU(n)),t.ma=t.ma.insert(n,r),ch(t.remoteStore,new Mr(On(ma(n.path)),r,"TargetPurposeLimboResolution",Sn.ae))}}async function ti(t,e,n){const r=Z(t),i=[],s=[],o=[];r.Aa.isEmpty()||(r.Aa.forEach((a,l)=>{o.push(r.ba(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=Y_.Ki(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.da.s_(i),await async function(l,u){const h=Z(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>N.forEach(u,d=>N.forEach(d.qi,f=>h.persistence.referenceDelegate.addReference(c,d.targetId,f)).next(()=>N.forEach(d.Qi,f=>h.persistence.referenceDelegate.removeReference(c,d.targetId,f)))))}catch(c){if(!Yi(c))throw c;W("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const d=c.targetId;if(!c.fromCache){const f=h.Zi.get(d),m=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(m);h.Zi=h.Zi.insert(d,y)}}}(r.localStore,s))}async function s2(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await XA(n.localStore,e);n.currentUser=e,function(s,o){s.ya.forEach(a=>{a.forEach(l=>{l.reject(new B(L.CANCELLED,o))})}),s.ya.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ti(n,r.rs)}}function o2(t,e){const n=Z(t),r=n.fa.get(e);if(r&&r.Ea)return ke().add(r.key);{let i=ke();const s=n.Ra.get(e);if(!s)return i;for(const o of s){const a=n.Aa.get(o);i=i.unionWith(a.view.oa)}return i}}async function a2(t,e){const n=Z(t),r=await ed(n.localStore,e.query,!0),i=e.view.Ia(r);return n.isPrimaryClient&&km(n,e.targetId,i.ha),i}async function l2(t,e){const n=Z(t);return tR(n.localStore,e).then(r=>ti(n,r))}async function c2(t,e,n,r){const i=Z(t),s=await function(a,l){const u=Z(a),h=Z(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>h.Cn(c,l).next(d=>d?u.localDocuments.getDocuments(c,d):N.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await ya(i.remoteStore):n==="acknowledged"||n==="rejected"?(cg(i,e,r||null),lg(i,e),function(a,l){Z(Z(a).mutationQueue).Mn(l)}(i.localStore,e)):se(),await ti(i,s)):W("SyncEngine","Cannot apply mutation batch with id: "+e)}async function u2(t,e){const n=Z(t);if(dg(n),hg(n),e===!0&&n.Sa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await wI(n,r.toArray());n.Sa=!0,await Cm(n.remoteStore,!0);for(const s of i)ch(n.remoteStore,s)}else if(e===!1&&n.Sa!==!1){const r=[];let i=Promise.resolve();n.Ra.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Qo(n,o),Ko(n.localStore,o,!0))),Jl(n.remoteStore,o)}),await i,await wI(n,r),function(o){const a=Z(o);a.fa.forEach((l,u)=>{Jl(a.remoteStore,u)}),a.ga.mr(),a.fa=new Map,a.ma=new Ze(J.comparator)}(n),n.Sa=!1,await Cm(n.remoteStore,!1)}}async function wI(t,e,n){const r=Z(t),i=[],s=[];for(const o of e){let a;const l=r.Ra.get(o);if(l&&l.length!==0){a=await Go(r.localStore,On(l[0]));for(const u of l){const h=r.Aa.get(u),c=await a2(r,h);c.snapshot&&s.push(c.snapshot)}}else{const u=await eR(r.localStore,o);a=await Go(r.localStore,u),await ag(r,gR(u),o,!1,a.resumeToken)}i.push(a)}return r.da.s_(s),i}function gR(t){return oA(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function d2(t){return function(n){return Z(Z(n).persistence).Li()}(Z(t).localStore)}async function h2(t,e,n,r){const i=Z(t);if(i.Sa)return void W("SyncEngine","Ignoring unexpected query state notification.");const s=i.Ra.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await tR(i.localStore,lA(s[0])),a=Sc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Lt.EMPTY_BYTE_STRING);await ti(i,o,a);break}case"rejected":await Ko(i.localStore,e,!0),Qo(i,e,r);break;default:se()}}async function f2(t,e,n){const r=dg(t);if(r.Sa){for(const i of e){if(r.Ra.has(i)){W("SyncEngine","Adding an already active target "+i);continue}const s=await eR(r.localStore,i),o=await Go(r.localStore,s);await ag(r,gR(s),o.targetId,!1,o.resumeToken),ch(r.remoteStore,o)}for(const i of n)r.Ra.has(i)&&await Ko(r.localStore,i,!1).then(()=>{Jl(r.remoteStore,i),Qo(r,i)}).catch(Qi)}}function dg(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=pR.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=o2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=e2.bind(null,e),e.da.s_=WU.bind(null,e.eventManager),e.da.Da=HU.bind(null,e.eventManager),e}function hg(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=t2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=n2.bind(null,e),e}function m2(t,e,n){const r=Z(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(f,m){const y=Z(f),v=bt(m.createTime);return y.persistence.runTransaction("hasNewerBundle","readonly",p=>y.$r.getBundleMetadata(p,m.id)).then(p=>!!p&&p.createTime.compareTo(v)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(f){return{taskState:"Success",documentsLoaded:f.totalDocuments,bytesLoaded:f.totalBytes,totalDocuments:f.totalDocuments,totalBytes:f.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(dR(l));const u=new KU(l,s.localStore,o.serializer);let h=await o.va();for(;h;){const d=await u.Y_(h);d&&a._updateProgress(d),h=await o.va()}const c=await u.complete();return await ti(s,c.ea,void 0),await function(f,m){const y=Z(f);return y.persistence.runTransaction("Save bundle","readwrite",v=>y.$r.saveBundleMetadata(v,m))}(s.localStore,l),a._completeWith(c.progress),Promise.resolve(c.X_)}catch(l){return nr("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Om{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return YA(this.persistence,new QA,e.initialUser,this.serializer)}createPersistence(e){return new zA(lh.Hr,this.serializer)}createSharedClientState(e){return new rR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yR extends Om{constructor(e,n,r){super(),this.Ca=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ca.initialize(this,e),await hg(this.Ca.syncEngine),await ya(this.Ca.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return YA(this.persistence,new QA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new rU(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new UM(n,this.persistence);return new FM(e.asyncQueue,r)}createPersistence(e){const n=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new z_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,iR(),wu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new rR}}class p2 extends yR{constructor(e,n){super(e,n,!1),this.Ca=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ca.syncEngine;this.sharedClientState instanceof mf&&(this.sharedClientState.syncEngine={js:c2.bind(null,n),Hs:h2.bind(null,n),Js:f2.bind(null,n),Li:d2.bind(null,n),zs:l2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await u2(this.Ca.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=iR();if(!mf.v(n))throw new B(L.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Q_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new mf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class fg{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>TI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s2.bind(null,this.syncEngine),await Cm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qU}()}createDatastore(e){const n=Cc(e.databaseInfo.databaseId),r=function(s){return new SU(s)}(e.databaseInfo);return function(s,o,a,l){return new kU(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new NU(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>TI(this.syncEngine,n,0),function(){return yI.v()?new yI:new bU}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,h){const c=new YU(i,s,o,a,l,u);return h&&(c.Sa=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);W("RemoteStore","RemoteStore shutting down."),r.S_.add(5),await ga(r),r.D_.shutdown(),r.v_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Fa(this.observer.next,e)}error(e){this.observer.error?this.Fa(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString())}Ma(){this.muted=!0}Fa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e,n){this.xa=e,this.serializer=n,this.metadata=new Ut,this.buffer=new Uint8Array,this.Oa=function(){return new TextDecoder("utf-8")}(),this.Na().then(r=>{r&&r.H_()?this.metadata.resolve(r.j_.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.j_)}`))},r=>this.metadata.reject(r))}close(){return this.xa.cancel()}async getMetadata(){return this.metadata.promise}async va(){return await this.getMetadata(),this.Na()}async Na(){const e=await this.Ba();if(e===null)return null;const n=this.Oa.decode(e),r=Number(n);isNaN(r)&&this.La(`length string (${n}) is not valid number`);const i=await this.ka(r);return new GU(JSON.parse(i),e.length+r)}qa(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ba(){for(;this.qa()<0&&!await this.Qa(););if(this.buffer.length===0)return null;const e=this.qa();e<0&&this.La("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ka(e){for(;this.buffer.length<e;)await this.Qa()&&this.La("Reached the end of bundle when more is expected.");const n=this.Oa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}La(e){throw this.xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async Qa(){const e=await this.xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new B(L.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(i,s){const o=Z(i),a=Yl(o.serializer)+"/documents",l={documents:s.map(d=>Ql(o.serializer,d))},u=await o.So("BatchGetDocuments",a,l,s.length),h=new Map;u.forEach(d=>{const f=MF(o.serializer,d);h.set(f.key.toString(),f)});const c=[];return s.forEach(d=>{const f=h.get(d.toString());me(!!f),c.push(f)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new _a(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=J.fromPath(r);this.mutations.push(new F_(i,this.precondition(i)))}),await async function(r,i){const s=Z(r),o=Yl(s.serializer)+"/documents",a={writes:i.map(l=>Xl(s.serializer,l))};await s.fo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se();n=fe.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new B(L.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(fe.min())?lt.exists(!1):lt.updateTime(n):lt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(fe.min()))throw new B(L.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return lt.updateTime(n)}return lt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Ka=r.maxAttempts,this.Uo=new J_(this.asyncQueue,"transaction_retry")}run(){this.Ka-=1,this.$a()}$a(){this.Uo.No(async()=>{const e=new g2(this.datastore),n=this.Ua(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Wa(i)}))}).catch(r=>{this.Wa(r)})})}Ua(e){try{const n=this.updateFunction(e);return!Tc(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Wa(e){this.Ka>0&&this.Ga(e)?(this.Ka-=1,this.asyncQueue.enqueueAndForget(()=>(this.$a(),Promise.resolve()))):this.deferred.reject(e)}Ga(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!TA(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Mt.UNAUTHENTICATED,this.clientId=M0.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{W("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(W("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ia(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function bu(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await XA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Nm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mg(t);W("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>vI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>vI(e.remoteStore,s)),t._onlineComponents=e}function vR(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mg(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await bu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!vR(n))throw n;nr("Error using user provided cache. Falling back to memory cache: "+n),await bu(t,new Om)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await bu(t,new Om);return t._offlineComponents}async function dh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await Nm(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await Nm(t,new fg))),t._onlineComponents}function IR(t){return mg(t).then(e=>e.persistence)}function pg(t){return mg(t).then(e=>e.localStore)}function ER(t){return dh(t).then(e=>e.remoteStore)}function _g(t){return dh(t).then(e=>e.syncEngine)}function I2(t){return dh(t).then(e=>e.datastore)}async function Yo(t){const e=await dh(t),n=e.eventManager;return n.onListen=XU.bind(null,e.syncEngine),n.onUnlisten=JU.bind(null,e.syncEngine),n}function E2(t){return t.asyncQueue.enqueue(async()=>{const e=await IR(t),n=await ER(t);return e.setNetworkEnabled(!0),function(i){const s=Z(i);return s.S_.delete(0),kc(s)}(n)})}function T2(t){return t.asyncQueue.enqueue(async()=>{const e=await IR(t),n=await ER(t);return e.setNetworkEnabled(!1),async function(i){const s=Z(i);s.S_.add(0),await ga(s),s.v_.set("Offline")}(n)})}function w2(t,e){const n=new Ut;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(u,h){const c=Z(u);return c.persistence.runTransaction("read document","readonly",d=>c.localDocuments.getDocument(d,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new B(L.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=Ia(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await pg(t),e,n)),n.promise}function TR(t,e,n={}){const r=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new uh({next:d=>{o.enqueueAndForget(()=>ig(s,c));const f=d.docs.has(a);!f&&d.fromCache?u.reject(new B(L.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),c=new og(ma(a.path),h,{includeMetadataChanges:!0,z_:!0});return rg(s,c)}(await Yo(t),t.asyncQueue,e,n,r)),r.promise}function b2(t,e){const n=new Ut;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await ed(i,s,!0),l=new mR(s,a._s),u=l._a(a.documents),h=l.applyChanges(u,!1);o.resolve(h.snapshot)}catch(a){const l=Ia(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await pg(t),e,n)),n.promise}function wR(t,e,n={}){const r=new Ut;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const h=new uh({next:d=>{o.enqueueAndForget(()=>ig(s,c)),d.fromCache&&l.source==="server"?u.reject(new B(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),c=new og(a,h,{includeMetadataChanges:!0,z_:!0});return rg(s,c)}(await Yo(t),t.asyncQueue,e,n,r)),r.promise}function A2(t,e){const n=new uh(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){Z(i).B_.add(s),s.next()}(await Yo(t),n)),()=>{n.Ma(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){Z(i).B_.delete(s)}(await Yo(t),n))}}function R2(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?bA().encode(o):o,function(h,c){return new _2(h,c)}(function(h,c){if(h instanceof Uint8Array)return bI(h,c);if(h instanceof ArrayBuffer)return bI(new Uint8Array(h),c);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,Cc(e));t.asyncQueue.enqueueAndForget(async()=>{m2(await _g(t),i,r)})}function S2(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=Z(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await pg(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(t,e,n){if(!n)throw new B(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function AR(t,e,n,r){if(e===!0&&r===!0)throw new B(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function RI(t){if(!J.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function SI(t){if(J.isDocumentKey(t))throw new B(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function hh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se()}function We(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=hh(t);throw new B(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function RR(t,e){if(e<=0)throw new B(L.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}AR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bR((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new B(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new PI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new PI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RM;switch(r.type){case"firstParty":return new kM(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=AI.get(n);r&&(W("ComponentProvider","Removing Datastore"),AI.delete(n),r.terminate())}(this),Promise.resolve()}}function P2(t,e,n,r={}){var i;const s=(t=We(t,Oc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Mt.MOCK_USER;else{a=ww(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new B(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Mt(u)}t._authCredentials=new SM(new V0(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yn=class SR{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new SR(this.firestore,e,this._query)}},ft=class PR{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new PR(this.firestore,e,this._key)}},Pi=class CR extends yn{constructor(e,n,r){super(e,n,ma(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new J(e))}withConverter(e){return new CR(this.firestore,e,this._path)}};function kR(t,e,...n){if(t=de(t),gg("collection","path",e),t instanceof Oc){const r=Be.fromString(e,...n);return SI(r),new Pi(t,null,r)}{if(!(t instanceof ft||t instanceof Pi))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return SI(r),new Pi(t.firestore,null,r)}}function C2(t,e){if(t=We(t,Oc),gg("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new B(L.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new yn(t,null,function(r){return new Zr(Be.emptyPath(),r)}(e))}function id(t,e,...n){if(t=de(t),arguments.length===1&&(e=M0.V()),gg("doc","path",e),t instanceof Oc){const r=Be.fromString(e,...n);return RI(r),new ft(t,null,new J(r))}{if(!(t instanceof ft||t instanceof Pi))throw new B(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return RI(r),new ft(t.firestore,t instanceof Pi?t.converter:null,new J(r))}}function OR(t,e){return t=de(t),e=de(e),(t instanceof ft||t instanceof Pi)&&(e instanceof ft||e instanceof Pi)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function NR(t,e){return t=de(t),e=de(e),t instanceof yn&&e instanceof yn&&t.firestore===e.firestore&&bc(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(){this.za=Promise.resolve(),this.ja=[],this.Ha=!1,this.Ja=[],this.Ya=null,this.Za=!1,this.Xa=!1,this.eu=[],this.Uo=new J_(this,"async_queue_retry"),this.tu=()=>{const n=wu();n&&W("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Uo.Lo()};const e=wu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.tu)}get isShuttingDown(){return this.Ha}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nu(),this.ru(e)}enterRestrictedMode(e){if(!this.Ha){this.Ha=!0,this.Xa=e||!1;const n=wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.tu)}}enqueue(e){if(this.nu(),this.Ha)return new Promise(()=>{});const n=new Ut;return this.ru(()=>this.Ha&&this.Xa?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ja.push(e),this.iu()))}async iu(){if(this.ja.length!==0){try{await this.ja[0](),this.ja.shift(),this.Uo.reset()}catch(e){if(!Yi(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.ja.length>0&&this.Uo.No(()=>this.iu())}}ru(e){const n=this.za.then(()=>(this.Za=!0,e().catch(r=>{this.Ya=r,this.Za=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Za=!1,r))));return this.za=n,n}enqueueAfterDelay(e,n,r){this.nu(),this.eu.indexOf(e)>-1&&(n=0);const i=ng.createAndSchedule(this,e,n,r,s=>this.su(s));return this.Ja.push(i),i}nu(){this.Ya&&se()}verifyOperationInProgress(){}async ou(){let e;do e=this.za,await e;while(e!==this.za)}_u(e){for(const n of this.Ja)if(n.timerId===e)return!0;return!1}au(e){return this.ou().then(()=>{this.Ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ou()})}uu(e){this.eu.push(e)}su(e){const n=this.Ja.indexOf(e);this.Ja.splice(n,1)}}function xm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class O2{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ut,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=-1;let It=class extends Oc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new k2}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||xR(this),this._firestoreClient.terminate()}};function qt(t){return t._firestoreClient||xR(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function xR(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,h){return new oF(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bR(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new v2(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function x2(t,e){LR(t=We(t,It));const n=qt(t);if(n._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");nr("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new fg;return DR(n,i,new yR(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function D2(t){LR(t=We(t,It));const e=qt(t);if(e._uninitializedComponentsProvider)throw new B(L.FAILED_PRECONDITION,"SDK cache is already specified.");nr("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new fg;return DR(e,r,new p2(r,n.cacheSizeBytes))}function DR(t,e,n){const r=new Ut;return t.asyncQueue.enqueue(async()=>{try{await bu(t,n),await Nm(t,e),r.resolve()}catch(i){const s=i;if(!vR(s))throw s;nr("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function L2(t){if(t._initialized&&!t._terminated)throw new B(L.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ut;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Xn.v())return Promise.resolve();const i=r+"main";await Xn.delete(i)}(Q_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function V2(t){return function(n){const r=new Ut;return n.asyncQueue.enqueueAndForget(async()=>r2(await _g(n),r)),r.promise}(qt(t=We(t,It)))}function M2(t){return E2(qt(t=We(t,It)))}function F2(t){return T2(qt(t=We(t,It)))}function U2(t,e){const n=qt(t=We(t,It)),r=new O2;return R2(n,t._databaseId,e,r),r}function $2(t,e){return S2(qt(t=We(t,It)),e).then(n=>n?new yn(t,null,n.query):null)}function LR(t){if(t._initialized||t._terminated)throw new B(L.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Sr(Lt.fromBase64String(e))}catch(n){throw new B(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Sr(Lt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2=/^__.*__$/;class j2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}class VR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MR(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se()}}class mh{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.cu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get lu(){return this.settings.lu}hu(e){return new mh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.Tu(e),i}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.hu({path:r,Iu:!1});return i.cu(),i}du(e){return this.hu({path:void 0,Iu:!0})}Au(e){return sd(e,this.settings.methodName,this.settings.Ru||!1,this.path,this.settings.Vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}cu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Tu(this.path.get(e))}Tu(e){if(e.length===0)throw this.Au("Document fields must not be empty");if(MR(this.lu)&&B2.test(e))throw this.Au('Document fields cannot begin and end with "__"')}}class q2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Cc(e)}mu(e,n,r,i=!1){return new mh({lu:e,methodName:n,Vu:r,path:wt.emptyPath(),Iu:!1,Ru:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eo(t){const e=t._freezeSettings(),n=Cc(t._databaseId);return new q2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function ph(t,e,n,r,i,s={}){const o=t.mu(s.merge||s.mergeFields?2:0,e,n,i);Eg("Data must be an object, but it was:",o,r);const a=$R(r,o);let l,u;if(s.merge)l=new Pn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const c of s.mergeFields){const d=Dm(e,c,n);if(!o.contains(d))throw new B(L.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);jR(h,d)||h.push(d)}l=new Pn(h),u=o.fieldTransforms.filter(c=>l.covers(c.field))}else l=null,u=o.fieldTransforms;return new j2(new zt(a),l,u)}class Nc extends Zs{_toFieldTransform(e){if(e.lu!==2)throw e.lu===1?e.Au(`${this._methodName}() can only appear at the top level of your update data`):e.Au(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nc}}function FR(t,e,n){return new mh({lu:3,Vu:e.settings.Vu,methodName:t._methodName,Iu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class yg extends Zs{_toFieldTransform(e){return new Rc(e.path,new qo)}isEqual(e){return e instanceof yg}}class W2 extends Zs{constructor(e,n){super(e),this.fu=n}_toFieldTransform(e){const n=FR(this,e,!0),r=this.fu.map(s=>to(s,n)),i=new Bs(r);return new Rc(e.path,i)}isEqual(e){return this===e}}class H2 extends Zs{constructor(e,n){super(e),this.fu=n}_toFieldTransform(e){const n=FR(this,e,!0),r=this.fu.map(s=>to(s,n)),i=new js(r);return new Rc(e.path,i)}isEqual(e){return this===e}}class G2 extends Zs{constructor(e,n){super(e),this.gu=n}_toFieldTransform(e){const n=new Wo(e.serializer,pA(e.serializer,this.gu));return new Rc(e.path,n)}isEqual(e){return this===e}}function vg(t,e,n,r){const i=t.mu(1,e,n);Eg("Data must be an object, but it was:",i,r);const s=[],o=zt.empty();Js(r,(l,u)=>{const h=Tg(e,l,n);u=de(u);const c=i.Eu(h);if(u instanceof Nc)s.push(h);else{const d=to(u,c);d!=null&&(s.push(h),o.set(h,d))}});const a=new Pn(s);return new VR(o,a,i.fieldTransforms)}function Ig(t,e,n,r,i,s){const o=t.mu(1,e,n),a=[Dm(e,r,n)],l=[i];if(s.length%2!=0)throw new B(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Dm(e,s[d])),l.push(s[d+1]);const u=[],h=zt.empty();for(let d=a.length-1;d>=0;--d)if(!jR(u,a[d])){const f=a[d];let m=l[d];m=de(m);const y=o.Eu(f);if(m instanceof Nc)u.push(f);else{const v=to(m,y);v!=null&&(u.push(f),h.set(f,v))}}const c=new Pn(u);return new VR(h,c,o.fieldTransforms)}function UR(t,e,n,r=!1){return to(n,t.mu(r?4:3,e))}function to(t,e){if(BR(t=de(t)))return Eg("Unsupported field value:",e,t),$R(t,e);if(t instanceof Zs)return function(r,i){if(!MR(i.lu))throw i.Au(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Au(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Iu&&e.lu!==4)throw e.Au("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=to(a,i.du(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=de(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return pA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ct.fromDate(r);return{timestampValue:Ho(i.serializer,s)}}if(r instanceof ct){const s=new ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(i.serializer,s)}}if(r instanceof fh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Sr)return{bytesValue:SA(i.serializer,r._byteString)};if(r instanceof ft){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Au(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:q_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Au(`Unsupported field value: ${hh(r)}`)}(t,e)}function $R(t,e){const n={};return Q0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Js(t,(r,i)=>{const s=to(i,e.Pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BR(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ct||t instanceof fh||t instanceof Sr||t instanceof ft||t instanceof Zs)}function Eg(t,e,n){if(!BR(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=hh(n);throw r==="an object"?e.Au(t+" a custom object"):e.Au(t+" "+r)}}function Dm(t,e,n){if((e=de(e))instanceof Bi)return e._internalPath;if(typeof e=="string")return Tg(t,e);throw sd("Field path arguments must be of type string or ",t,!1,void 0,n)}const K2=new RegExp("[~\\*/\\[\\]]");function Tg(t,e,n){if(e.search(K2)>=0)throw sd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bi(...e.split("."))._internalPath}catch{throw sd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function sd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new B(L.INVALID_ARGUMENT,a+t+l)}function jR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new z2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(_h("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class z2 extends Zl{data(){return super.data()}}function _h(t,e){return typeof e=="string"?Tg(t,e):e instanceof Bi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new B(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class wg{}class xc extends wg{}function ci(t,e,...n){let r=[];e instanceof wg&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof bg).length,a=s.filter(l=>l instanceof gh).length;if(o>1||o>0&&a>0)throw new B(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class gh extends xc{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new gh(e,n,r)}_apply(e){const n=this._parse(e);return HR(e._query,n),new yn(e.firestore,e.converter,Im(e._query,n))}_parse(e){const n=eo(e.firestore);return function(s,o,a,l,u,h,c){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new B(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){kI(c,h);const f=[];for(const m of c)f.push(CI(l,s,m));d={arrayValue:{values:f}}}else d=CI(l,s,c)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||kI(c,h),d=UR(a,o,c,h==="in"||h==="not-in");return Me.create(u,h,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Q2(t,e,n){const r=e,i=_h("where",t);return gh._create(i,r,n)}class bg extends wg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bg(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ge.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)HR(o,l),o=Im(o,l)}(e._query,n),new yn(e.firestore,e.converter,Im(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ag extends xc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ag(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new B(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const a=new Oo(s,o);return function(u,h){if(L_(u)===null){const c=rh(u);c!==null&&GR(u,c,h.field)}}(i,a),a}(e._query,this._field,this._direction);return new yn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Zr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function Y2(t,e="asc"){const n=e,r=_h("orderBy",t);return Ag._create(r,n)}class yh extends xc{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new yh(e,n,r)}_apply(e){return new yn(e.firestore,e.converter,Yu(e._query,this._limit,this._limitType))}}function X2(t){return RR("limit",t),yh._create("limit",t,"F")}function J2(t){return RR("limitToLast",t),yh._create("limitToLast",t,"L")}class vh extends xc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new vh(e,n,r)}_apply(e){const n=WR(e,this.type,this._docOrFields,this._inclusive);return new yn(e.firestore,e.converter,function(i,s){return new Zr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function Z2(...t){return vh._create("startAt",t,!0)}function e$(...t){return vh._create("startAfter",t,!1)}class Ih extends xc{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Ih(e,n,r)}_apply(e){const n=WR(e,this.type,this._docOrFields,this._inclusive);return new yn(e.firestore,e.converter,function(i,s){return new Zr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function t$(...t){return Ih._create("endBefore",t,!1)}function n$(...t){return Ih._create("endAt",t,!0)}function WR(t,e,n,r){if(n[0]=de(n[0]),n[0]instanceof Zl)return function(s,o,a,l,u){if(!l)throw new B(L.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const c of No(s))if(c.field.isKeyField())h.push(Us(o,l.key));else{const d=l.data.field(c.field);if(nh(d))throw new B(L.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(d===null){const f=c.field.canonicalString();throw new B(L.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${f}' (used as the orderBy) does not exist.`)}h.push(d)}return new Ui(h,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=eo(t.firestore);return function(o,a,l,u,h,c){const d=o.explicitOrderBy;if(h.length>d.length)throw new B(L.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const f=[];for(let m=0;m<h.length;m++){const y=h[m];if(d[m].field.isKeyField()){if(typeof y!="string")throw new B(L.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof y}`);if(!V_(o)&&y.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${y}' contains a slash.`);const v=o.path.child(Be.fromString(y));if(!J.isDocumentKey(v))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const p=new J(v);f.push(Us(a,p))}else{const v=UR(l,u,y);f.push(v)}}return new Ui(f,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function CI(t,e,n){if(typeof(n=de(n))=="string"){if(n==="")throw new B(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!V_(e)&&n.indexOf("/")!==-1)throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!J.isDocumentKey(r))throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Us(t,new J(r))}if(n instanceof ft)return Us(t,n._key);throw new B(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hh(n)}.`)}function kI(t,e){if(!Array.isArray(t)||t.length===0)throw new B(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function HR(t,e){if(e.isInequality()){const r=rh(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new B(L.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=L_(t);s!==null&&GR(t,i,s)}const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new B(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function GR(t,e,n){if(!n.isEqual(e))throw new B(L.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Rg{convertValue(e,n="none"){switch(Fs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _t(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw se()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Js(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new fh(_t(e.latitude),_t(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=x_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Gl(e));default:return null}}convertTimestamp(e){const n=Li(e);return new ct(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);me(MA(r));const i=new Mi(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class r$ extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let zr=class extends Zl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new fl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(_h("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},fl=class extends zr{data(e={}){return super.data(e)}},ji=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ws(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new fl(this._firestore,this._userDataWriter,r.key,r,new ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new B(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new fl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ws(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:i$(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function i$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se()}}function KR(t,e){return t instanceof zr&&e instanceof zr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof ji&&e instanceof ji&&t._firestore===e._firestore&&NR(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s$(t){t=We(t,ft);const e=We(t.firestore,It);return TR(qt(e),t._key).then(n=>Sg(e,t,n))}class no extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Sr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function o$(t){t=We(t,ft);const e=We(t.firestore,It),n=qt(e),r=new no(e);return w2(n,t._key).then(i=>new zr(e,r,t._key,i,new ws(i!==null&&i.hasLocalMutations,!0),t.converter))}function a$(t){t=We(t,ft);const e=We(t.firestore,It);return TR(qt(e),t._key,{source:"server"}).then(n=>Sg(e,t,n))}function l$(t){t=We(t,yn);const e=We(t.firestore,It),n=qt(e),r=new no(e);return qR(t._query),wR(n,t._query).then(i=>new ji(e,r,t,i))}function c$(t){t=We(t,yn);const e=We(t.firestore,It),n=qt(e),r=new no(e);return b2(n,t._query).then(i=>new ji(e,r,t,i))}function u$(t){t=We(t,yn);const e=We(t.firestore,It),n=qt(e),r=new no(e);return wR(n,t._query,{source:"server"}).then(i=>new ji(e,r,t,i))}function OI(t,e,n){t=We(t,ft);const r=We(t.firestore,It),i=Eh(t.converter,e,n);return Dc(r,[ph(eo(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,lt.none())])}function NI(t,e,n,...r){t=We(t,ft);const i=We(t.firestore,It),s=eo(i);let o;return o=typeof(e=de(e))=="string"||e instanceof Bi?Ig(s,"updateDoc",t._key,e,n,r):vg(s,"updateDoc",t._key,e),Dc(i,[o.toMutation(t._key,lt.exists(!0))])}function d$(t){return Dc(We(t.firestore,It),[new _a(t._key,lt.none())])}function h$(t,e){const n=We(t.firestore,It),r=id(t),i=Eh(t.converter,e);return Dc(n,[ph(eo(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,lt.exists(!1))]).then(()=>r)}function zR(t,...e){var n,r,i;t=de(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||xm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(xm(e[o])){const c=e[o];e[o]=(n=c.next)===null||n===void 0?void 0:n.bind(c),e[o+1]=(r=c.error)===null||r===void 0?void 0:r.bind(c),e[o+2]=(i=c.complete)===null||i===void 0?void 0:i.bind(c)}let l,u,h;if(t instanceof ft)u=We(t.firestore,It),h=ma(t._key.path),l={next:c=>{e[o]&&e[o](Sg(u,t,c))},error:e[o+1],complete:e[o+2]};else{const c=We(t,yn);u=We(c.firestore,It),h=c._query;const d=new no(u);l={next:f=>{e[o]&&e[o](new ji(u,d,c,f))},error:e[o+1],complete:e[o+2]},qR(t._query)}return function(d,f,m,y){const v=new uh(y),p=new og(f,v,m);return d.asyncQueue.enqueueAndForget(async()=>rg(await Yo(d),p)),()=>{v.Ma(),d.asyncQueue.enqueueAndForget(async()=>ig(await Yo(d),p))}}(qt(u),h,a,l)}function f$(t,e){return A2(qt(t=We(t,It)),xm(e)?e:{next:e})}function Dc(t,e){return function(r,i){const s=new Ut;return r.asyncQueue.enqueueAndForget(async()=>ZU(await _g(r),i,s)),s.promise}(qt(t),e)}function Sg(t,e,n){const r=n.docs.get(e._key),i=new no(t);return new zr(t,i,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m$={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p$=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=eo(e)}set(e,n,r){this._verifyNotCommitted();const i=yi(e,this._firestore),s=Eh(i.converter,n,r),o=ph(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,lt.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=yi(e,this._firestore);let o;return o=typeof(n=de(n))=="string"||n instanceof Bi?Ig(this._dataReader,"WriteBatch.update",s._key,n,r,i):vg(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,lt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=yi(e,this._firestore);return this._mutations=this._mutations.concat(new _a(n._key,lt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new B(L.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function yi(t,e){if((t=de(t)).firestore!==e)throw new B(L.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _$=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=eo(n)}get(n){const r=yi(n,this._firestore),i=new r$(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return se();const o=s[0];if(o.isFoundDocument())return new Zl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Zl(this._firestore,i,r._key,null,r.converter);throw se()})}set(n,r,i){const s=yi(n,this._firestore),o=Eh(s.converter,r,i),a=ph(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=yi(n,this._firestore);let a;return a=typeof(r=de(r))=="string"||r instanceof Bi?Ig(this._dataReader,"Transaction.update",o._key,r,i,s):vg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=yi(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=yi(e,this._firestore),r=new no(this._firestore);return super.get(e).then(i=>new zr(this._firestore,r,n._key,i._document,new ws(!1,!1),n.converter))}};function g$(t,e,n){t=We(t,It);const r=Object.assign(Object.assign({},m$),n);return function(s){if(s.maxAttempts<1)throw new B(L.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new Ut;return s.asyncQueue.enqueueAndForget(async()=>{const u=await I2(s);new y2(s.asyncQueue,u,a,o,l).run()}),l.promise}(qt(t),i=>e(new _$(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y$(){return new Nc("deleteField")}function v$(){return new yg("serverTimestamp")}function I$(...t){return new W2("arrayUnion",t)}function E$(...t){return new H2("arrayRemove",t)}function T$(t){return new G2("increment",t)}(function(e,n=!0){(function(i){fa=i})(Yr),Hr(new Hn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new It(new PM(r.getProvider("auth-internal")),new NM(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Mi(u.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Wn(Sv,"4.1.2",e),Wn(Sv,"4.1.2","esm2017")})();const w$="@firebase/firestore-compat",b$="0.3.16";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pg(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new B("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(){if(typeof Uint8Array>"u")throw new B("unimplemented","Uint8Arrays are not available in this environment.")}function DI(){if(!iF())throw new B("unimplemented","Blobs are unavailable in Firestore in this environment.")}let QR=class Lm{constructor(e){this._delegate=e}static fromBase64String(e){return DI(),new Lm(Sr.fromBase64String(e))}static fromUint8Array(e){return xI(),new Lm(Sr.fromUint8Array(e))}toBase64(){return DI(),this._delegate.toBase64()}toUint8Array(){return xI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t){return A$(t,["next","error","complete"])}function A$(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${enableIndexedDbPersistence(e,n){return x2(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return D2(e._delegate)}clearIndexedDbPersistence(e){return L2(e._delegate)}}class YR{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Mi||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&nr("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){P2(this._delegate,e,n,r)}enableNetwork(){return M2(this._delegate)}disableNetwork(){return F2(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,AR("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return V2(this._delegate)}onSnapshotsInSync(e){return f$(this._delegate,e)}get app(){if(!this._appCompat)throw new B("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Xo(this,kR(this._delegate,e))}catch(n){throw fn(n,"collection()","Firestore.collection()")}}doc(e){try{return new Bn(this,id(this._delegate,e))}catch(n){throw fn(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new hn(this,C2(this._delegate,e))}catch(n){throw fn(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return g$(this._delegate,n=>e(new XR(this,n)))}batch(){return qt(this._delegate),new JR(new p$(this._delegate,e=>Dc(this._delegate,e)))}loadBundle(e){return U2(this._delegate,e)}namedQuery(e){return $2(this._delegate,e).then(n=>n?new hn(this,n):null)}}class Th extends Rg{constructor(e){super(),this.firestore=e}convertBytes(e){return new QR(new Sr(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Bn.forKey(n,this.firestore,null)}}function S$(t){bM(t)}class XR{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}get(e){const n=bs(e);return this._delegate.get(n).then(r=>new ec(this._firestore,new zr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=bs(e);return r?(Pg("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=bs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=bs(e);return this._delegate.delete(n),this}}class JR{constructor(e){this._delegate=e}set(e,n,r){const i=bs(e);return r?(Pg("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=bs(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=bs(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Gs{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new fl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new tc(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Gs.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Gs(e,new Th(e),n),i.set(n,s)),s}}Gs.INSTANCES=new WeakMap;class Bn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}static forPath(e,n,r){if(e.length%2!==0)throw new B("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Bn(n,new ft(n._delegate,r,new J(e)))}static forKey(e,n,r){return new Bn(n,new ft(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Xo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Xo(this.firestore,kR(this._delegate,e))}catch(n){throw fn(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=de(e),e instanceof ft?OR(this._delegate,e):!1}set(e,n){n=Pg("DocumentReference.set",n);try{return n?OI(this._delegate,e,n):OI(this._delegate,e)}catch(r){throw fn(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?NI(this._delegate,e):NI(this._delegate,e,n,...r)}catch(i){throw fn(i,"updateDoc()","DocumentReference.update()")}}delete(){return d$(this._delegate)}onSnapshot(...e){const n=ZR(e),r=eS(e,i=>new ec(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return zR(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=o$(this._delegate):(e==null?void 0:e.source)==="server"?n=a$(this._delegate):n=s$(this._delegate),n.then(r=>new ec(this.firestore,new zr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Bn(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function fn(t,e,n){return t.message=t.message.replace(e,n),t}function ZR(t){for(const e of t)if(typeof e=="object"&&!Vm(e))return e;return{}}function eS(t,e){var n,r;let i;return Vm(t[0])?i=t[0]:Vm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class ec{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Bn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return KR(this._delegate,e._delegate)}}class tc extends ec{data(e){const n=this._delegate.data(e);return AM(n!==void 0),n}}class hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Th(e)}where(e,n,r){try{return new hn(this.firestore,ci(this._delegate,Q2(e,n,r)))}catch(i){throw fn(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new hn(this.firestore,ci(this._delegate,Y2(e,n)))}catch(r){throw fn(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new hn(this.firestore,ci(this._delegate,X2(e)))}catch(n){throw fn(n,"limit()","Query.limit()")}}limitToLast(e){try{return new hn(this.firestore,ci(this._delegate,J2(e)))}catch(n){throw fn(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new hn(this.firestore,ci(this._delegate,Z2(...e)))}catch(n){throw fn(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new hn(this.firestore,ci(this._delegate,e$(...e)))}catch(n){throw fn(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new hn(this.firestore,ci(this._delegate,t$(...e)))}catch(n){throw fn(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new hn(this.firestore,ci(this._delegate,n$(...e)))}catch(n){throw fn(n,"endAt()","Query.endAt()")}}isEqual(e){return NR(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=c$(this._delegate):(e==null?void 0:e.source)==="server"?n=u$(this._delegate):n=l$(this._delegate),n.then(r=>new Mm(this.firestore,new ji(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=ZR(e),r=eS(e,i=>new Mm(this.firestore,new ji(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return zR(this._delegate,n,r)}withConverter(e){return new hn(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class P${constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new tc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Mm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new hn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new tc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new P$(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new tc(this._firestore,r))})}isEqual(e){return KR(this._delegate,e._delegate)}}class Xo extends hn{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Bn(this.firestore,e):null}doc(e){try{return e===void 0?new Bn(this.firestore,id(this._delegate)):new Bn(this.firestore,id(this._delegate,e))}catch(n){throw fn(n,"doc()","CollectionReference.doc()")}}add(e){return h$(this._delegate,e).then(n=>new Bn(this.firestore,n))}isEqual(e){return OR(this._delegate,e._delegate)}withConverter(e){return new Xo(this.firestore,e?this._delegate.withConverter(Gs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bs(t){return We(t,ft)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(...e){this._delegate=new Bi(...e)}static documentId(){return new Cg(wt.keyField().canonicalString())}isEqual(e){return e=de(e),e instanceof Bi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this._delegate=e}static serverTimestamp(){const e=v$();return e._methodName="FieldValue.serverTimestamp",new ys(e)}static delete(){const e=y$();return e._methodName="FieldValue.delete",new ys(e)}static arrayUnion(...e){const n=I$(...e);return n._methodName="FieldValue.arrayUnion",new ys(n)}static arrayRemove(...e){const n=E$(...e);return n._methodName="FieldValue.arrayRemove",new ys(n)}static increment(e){const n=T$(e);return n._methodName="FieldValue.increment",new ys(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C$={Firestore:YR,GeoPoint:fh,Timestamp:ct,Blob:QR,Transaction:XR,WriteBatch:JR,DocumentReference:Bn,DocumentSnapshot:ec,Query:hn,QueryDocumentSnapshot:tc,QuerySnapshot:Mm,CollectionReference:Xo,FieldPath:Cg,FieldValue:ys,setLogLevel:S$,CACHE_SIZE_UNLIMITED:N2};function k$(t,e){t.INTERNAL.registerComponent(new Hn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},C$)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O$(t){k$(t,(e,n)=>new YR(e,n,new R$)),t.registerVersion(w$,b$)}O$(Pr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebasestorage.googleapis.com",nS="storageBucket",N$=2*60*1e3,x$=10*60*1e3,D$=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt extends on{constructor(e,n,r=0){super(_f(e),`Firebase Storage: ${n} (${_f(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var at;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(at||(at={}));function _f(t){return"storage/"+t}function kg(){const t="An unknown error occurred, please check the error payload for server response.";return new pt(at.UNKNOWN,t)}function L$(t){return new pt(at.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function V$(t){return new pt(at.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function M$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pt(at.UNAUTHENTICATED,t)}function F$(){return new pt(at.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function U$(t){return new pt(at.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rS(){return new pt(at.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iS(){return new pt(at.CANCELED,"User canceled the upload/download.")}function $$(t){return new pt(at.INVALID_URL,"Invalid URL '"+t+"'.")}function B$(t){return new pt(at.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function j$(){return new pt(at.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nS+"' property when initializing the app?")}function sS(){return new pt(at.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function q$(){return new pt(at.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function W$(){return new pt(at.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function H$(t){return new pt(at.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Do(t){return new pt(at.INVALID_ARGUMENT,t)}function oS(){return new pt(at.APP_DELETED,"The Firebase app was deleted.")}function aS(t){return new pt(at.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ml(t,e){return new pt(at.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ma(t){throw new pt(at.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rn.makeFromUrl(e,n)}catch{return new rn(e,"")}if(r.path==="")return r;throw B$(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const h="v[A-Za-z0-9_]+",c=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${c}/${h}/b/${i}/o${d}`,"i"),m={bucket:1,path:3},y=n===tS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${v}`,"i"),b=[{regex:a,indices:l,postModify:s},{regex:f,indices:m,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<b.length;E++){const P=b[E],k=P.regex.exec(e);if(k){const O=k[P.indices.bucket];let V=k[P.indices.path];V||(V=""),r=new rn(O,V),P.postModify(r);break}}if(r==null)throw $$(e);return r}}class G${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K$(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...v){u||(u=!0,e.apply(null,v))}function c(v){i=setTimeout(()=>{i=null,t(f,l())},v)}function d(){s&&clearTimeout(s)}function f(v,...p){if(u){d();return}if(v){d(),h.call(null,v,...p);return}if(l()||o){d(),h.call(null,v,...p);return}r<64&&(r*=2);let b;a===1?(a=2,b=0):b=(r+Math.random())*1e3,c(b)}let m=!1;function y(v){m||(m=!0,d(),!u&&(i!==null?(v||(a=2),clearTimeout(i),c(0)):v||(a=1)))}return c(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function z$(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q$(t){return t!==void 0}function Y$(t){return typeof t=="function"}function X$(t){return typeof t=="object"&&!Array.isArray(t)}function wh(t){return typeof t=="string"||t instanceof String}function LI(t){return Og()&&t instanceof Blob}function Og(){return typeof Blob<"u"&&!Sd()}function Fm(t,e,n,r){if(r<e)throw Do(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Do(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xs;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xs||(xs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cS(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J${constructor(e,n,r,i,s,o,a,l,u,h,c,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=c,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,m)=>{this.resolve_=f,this.reject_=m,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ru(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===xs.NO_ERROR,l=s.getStatus();if(!a||cS(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===xs.ABORT;r(!1,new ru(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ru(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Q$(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=kg();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?oS():iS();o(l)}else{const l=rS();o(l)}};this.canceled_?n(!1,new ru(!1,null,!0)):this.backoffId_=K$(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&z$(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ru{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Z$(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rB(t,e,n,r,i,s,o=!0){const a=lS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return tB(u,e),Z$(u,n),eB(u,s),nB(u,r),new J$(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iB(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sB(...t){const e=iB();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Og())return new Blob(t);throw new pt(at.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oB(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aB(t){if(typeof atob>"u")throw H$("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class gf{constructor(e,n){this.data=e,this.contentType=n||null}}function uS(t,e){switch(t){case jn.RAW:return new gf(dS(e));case jn.BASE64:case jn.BASE64URL:return new gf(hS(t,e));case jn.DATA_URL:return new gf(cB(e),uB(e))}throw kg()}function dS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function lB(t){let e;try{e=decodeURIComponent(t)}catch{throw ml(jn.DATA_URL,"Malformed data URL.")}return dS(e)}function hS(t,e){switch(t){case jn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ml(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ml(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aB(e)}catch(i){throw i.message.includes("polyfill")?i:ml(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ml(jn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dB(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cB(t){const e=new fS(t);return e.base64?hS(jn.BASE64,e.rest):lB(e.rest)}function uB(t){return new fS(t).contentType}function dB(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n){let r=0,i="";LI(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(LI(this.data_)){const r=this.data_,i=oB(r,e,n);return i===null?null:new xr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xr(r,!0)}}static getBlob(...e){if(Og()){const n=e.map(r=>r instanceof xr?r.data_:r);return new xr(sB.apply(null,n))}else{const n=e.map(o=>wh(o)?uS(jn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new xr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){let e;try{e=JSON.parse(t)}catch{return null}return X$(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function fB(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mB(t,e){return e}class cn{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mB}}let iu=null;function pB(t){return!wh(t)||t.length<2?t:mS(t)}function bh(){if(iu)return iu;const t=[];t.push(new cn("bucket")),t.push(new cn("generation")),t.push(new cn("metageneration")),t.push(new cn("name","fullPath",!0));function e(s,o){return pB(o)}const n=new cn("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new cn("size");return i.xform=r,t.push(i),t.push(new cn("timeCreated")),t.push(new cn("updated")),t.push(new cn("md5Hash",null,!0)),t.push(new cn("cacheControl",null,!0)),t.push(new cn("contentDisposition",null,!0)),t.push(new cn("contentEncoding",null,!0)),t.push(new cn("contentLanguage",null,!0)),t.push(new cn("contentType",null,!0)),t.push(new cn("metadata","customMetadata",!0)),iu=t,iu}function _B(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gB(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return _B(r,t),r}function pS(t,e,n){const r=Ng(e);return r===null?null:gB(t,r,n)}function yB(t,e,n,r){const i=Ng(e);if(i===null||!wh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,c=t.fullPath,d="/b/"+o(h)+"/o/"+o(c),f=Zi(d,n,r),m=lS({alt:"media",token:u});return f+m})[0]}function xg(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI="prefixes",MI="items";function vB(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[VI])for(const i of n[VI]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new rn(e,s));r.prefixes.push(o)}if(n[MI])for(const i of n[MI]){const s=t._makeStorageReference(new rn(e,i.name));r.items.push(s)}return r}function IB(t,e,n){const r=Ng(n);return r===null?null:vB(t,e,r)}class ni{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(t){if(!t)throw kg()}function Ah(t,e){function n(r,i){const s=pS(t,i,e);return Tr(s!==null),s}return n}function EB(t,e){function n(r,i){const s=IB(t,e,i);return Tr(s!==null),s}return n}function TB(t,e){function n(r,i){const s=pS(t,i,e);return Tr(s!==null),yB(s,i,t.host,t._protocol)}return n}function Ea(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=F$():i=M$():n.getStatus()===402?i=V$(t.bucket):n.getStatus()===403?i=U$(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Rh(t){const e=Ea(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=L$(t.path)),s.serverResponse=i.serverResponse,s}return n}function _S(t,e,n){const r=e.fullServerUrl(),i=Zi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ni(i,s,Ah(t,n),o);return a.errorHandler=Rh(e),a}function wB(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n&&n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Zi(o,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,h=new ni(a,l,EB(t,e.bucket),u);return h.urlParams=s,h.errorHandler=Ea(e),h}function bB(t,e,n){const r=e.fullServerUrl(),i=Zi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ni(i,s,TB(t,n),o);return a.errorHandler=Rh(e),a}function AB(t,e,n,r){const i=e.fullServerUrl(),s=Zi(i,t.host,t._protocol),o="PATCH",a=xg(n,r),l={"Content-Type":"application/json; charset=utf-8"},u=t.maxOperationRetryTime,h=new ni(s,o,Ah(t,r),u);return h.headers=l,h.body=a,h.errorHandler=Rh(e),h}function RB(t,e){const n=e.fullServerUrl(),r=Zi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ni(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Rh(e),a}function SB(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function gS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=SB(null,e)),r}function PB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let E=0;E<2;E++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=gS(e,r,i),h=xg(u,n),c="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=xr.getBlob(c,r,d);if(f===null)throw sS();const m={name:u.fullPath},y=Zi(s,t.host,t._protocol),v="POST",p=t.maxUploadRetryTime,I=new ni(y,v,Ah(t,n),p);return I.urlParams=m,I.headers=o,I.body=f.uploadData(),I.errorHandler=Ea(e),I}class od{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function Dg(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Tr(!1)}return Tr(!!n&&(e||["active"]).indexOf(n)!==-1),n}function CB(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=gS(e,r,i),a={name:o.fullPath},l=Zi(s,t.host,t._protocol),u="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},c=xg(o,n),d=t.maxUploadRetryTime;function f(y){Dg(y);let v;try{v=y.getResponseHeader("X-Goog-Upload-URL")}catch{Tr(!1)}return Tr(wh(v)),v}const m=new ni(l,u,f,d);return m.urlParams=a,m.headers=h,m.body=c,m.errorHandler=Ea(e),m}function kB(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(u){const h=Dg(u,["active","final"]);let c=null;try{c=u.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Tr(!1)}c||Tr(!1);const d=Number(c);return Tr(!isNaN(d)),new od(d,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new ni(n,o,s,a);return l.headers=i,l.errorHandler=Ea(e),l}const FI=256*1024;function OB(t,e,n,r,i,s,o,a){const l=new od(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw q$();const u=l.total-l.current;let h=u;i>0&&(h=Math.min(h,i));const c=l.current,d=c+h;let f="";h===0?f="finalize":u===h?f="upload, finalize":f="upload";const m={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},y=r.slice(c,d);if(y===null)throw sS();function v(E,P){const k=Dg(E,["active","final"]),O=l.current+h,V=r.size();let F;return k==="final"?F=Ah(e,s)(E,P):F=null,new od(O,V,k==="final",F)}const p="POST",I=e.maxUploadRetryTime,b=new ni(n,p,v,I);return b.headers=m,b.body=y.uploadData(),b.progressCallback=a||null,b.errorHandler=Ea(t),b}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NB={STATE_CHANGED:"state_changed"},mn={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yf(t){switch(t){case"running":case"pausing":case"canceling":return mn.RUNNING;case"paused":return mn.PAUSED;case"success":return mn.SUCCESS;case"canceled":return mn.CANCELED;case"error":return mn.ERROR;default:return mn.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xB{constructor(e,n,r){if(Y$(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class DB{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ma("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ma("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ma("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ma("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ma("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class LB extends DB{initXhr(){this.xhr_.responseType="text"}}function mr(){return new LB}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=bh(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(at.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(cS(i.status,[]))if(s)i=rS();else{this.sleepTime=Math.max(this.sleepTime*2,D$),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(at.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=CB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=kB(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,mr,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=FI*this._chunkMultiplier,n=new od(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=OB(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,mr,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){FI*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=_S(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=PB(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,mr,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iS(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=yf(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new xB(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(yf(this._state)){case mn.SUCCESS:uo(this._resolve.bind(null,this.snapshot))();break;case mn.CANCELED:case mn.ERROR:const n=this._reject;uo(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(yf(this._state)){case mn.RUNNING:case mn.PAUSED:e.next&&uo(e.next.bind(e,this.snapshot))();break;case mn.SUCCESS:e.complete&&uo(e.complete.bind(e))();break;case mn.CANCELED:case mn.ERROR:e.error&&uo(e.error.bind(e,this._error))();break;default:e.error&&uo(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,n){this._service=e,n instanceof rn?this._location=n:this._location=rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Ks(e,n)}get root(){const e=new rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mS(this._location.path)}get storage(){return this._service}get parent(){const e=hB(this._location.path);if(e===null)return null;const n=new rn(this._location.bucket,e);return new Ks(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aS(e)}}function VB(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new yS(t,new xr(e),n)}function MB(t){const e={prefixes:[],items:[]};return vS(t,e).then(()=>e)}async function vS(t,e,n){const i=await IS(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await vS(t,e,i.nextPageToken)}function IS(t,e){e!=null&&typeof e.maxResults=="number"&&Fm("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=wB(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,mr)}function FB(t){t._throwIfRoot("getMetadata");const e=_S(t.storage,t._location,bh());return t.storage.makeRequestWithTokens(e,mr)}function UB(t,e){t._throwIfRoot("updateMetadata");const n=AB(t.storage,t._location,e,bh());return t.storage.makeRequestWithTokens(n,mr)}function $B(t){t._throwIfRoot("getDownloadURL");const e=bB(t.storage,t._location,bh());return t.storage.makeRequestWithTokens(e,mr).then(n=>{if(n===null)throw W$();return n})}function BB(t){t._throwIfRoot("deleteObject");const e=RB(t.storage,t._location);return t.storage.makeRequestWithTokens(e,mr)}function ES(t,e){const n=fB(t._location.path,e),r=new rn(t._location.bucket,n);return new Ks(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jB(t){return/^[A-Za-z]+:\/\//.test(t)}function qB(t,e){return new Ks(t,e)}function TS(t,e){if(t instanceof Lg){const n=t;if(n._bucket==null)throw j$();const r=new Ks(n,n._bucket);return e!=null?TS(r,e):r}else return e!==void 0?ES(t,e):t}function WB(t,e){if(e&&jB(e)){if(t instanceof Lg)return qB(t,e);throw Do("To use ref(service, url), the first argument must be a Storage instance.")}else return TS(t,e)}function UI(t,e){const n=e==null?void 0:e[nS];return n==null?null:rn.makeFromBucketSpec(n,t)}function HB(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:ww(i,t.app.options.projectId))}class Lg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=N$,this._maxUploadRetryTime=x$,this._requests=new Set,i!=null?this._bucket=rn.makeFromBucketSpec(i,this._host):this._bucket=UI(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rn.makeFromBucketSpec(this._url,e):this._bucket=UI(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Fm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Fm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ks(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new G$(oS());{const o=rB(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const $I="@firebase/storage",BI="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GB="storage";function KB(t,e,n){return t=de(t),VB(t,e,n)}function zB(t){return t=de(t),FB(t)}function QB(t,e){return t=de(t),UB(t,e)}function YB(t,e){return t=de(t),IS(t,e)}function XB(t){return t=de(t),MB(t)}function JB(t){return t=de(t),$B(t)}function ZB(t){return t=de(t),BB(t)}function jI(t,e){return t=de(t),WB(t,e)}function ej(t,e){return ES(t,e)}function tj(t,e,n,r={}){HB(t,e,n,r)}function nj(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Lg(n,r,i,e,Yr)}function rj(){Hr(new Hn(GB,nj,"PUBLIC").setMultipleInstances(!0)),Wn($I,BI,""),Wn($I,BI,"esm2017")}rj();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new su(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new su(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new su(o,this,this._ref)):s={next:n.next?o=>n.next(new su(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class WI{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new Br(e,this._service))}get items(){return this._delegate.items.map(e=>new Br(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=ej(this._delegate,e);return new Br(n,this.storage)}get root(){return new Br(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new Br(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new qI(KB(this._delegate,e,n),this)}putString(e,n=jn.RAW,r){this._throwIfRoot("putString");const i=uS(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new qI(new yS(this._delegate,new xr(i.data,!0),s),this)}listAll(){return XB(this._delegate).then(e=>new WI(e,this.storage))}list(e){return YB(this._delegate,e||void 0).then(n=>new WI(n,this.storage))}getMetadata(){return zB(this._delegate)}updateMetadata(e){return QB(this._delegate,e)}getDownloadURL(){return JB(this._delegate)}delete(){return this._throwIfRoot("delete"),ZB(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw aS(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(HI(e))throw Do("ref() expected a child path but got a URL, use refFromURL instead.");return new Br(jI(this._delegate,e),this)}refFromURL(e){if(!HI(e))throw Do("refFromURL() expected a full URL but got a child path, use ref() instead.");try{rn.makeFromUrl(e,this._delegate.host)}catch{throw Do("refFromUrl() expected a valid full URL but got an invalid one.")}return new Br(jI(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){tj(this._delegate,e,n,r)}}function HI(t){return/^[A-Za-z]+:\/\//.test(t)}const ij="@firebase/storage-compat",sj="0.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj="storage-compat";function aj(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new wS(n,r)}function lj(t){const e={TaskState:mn,TaskEvent:NB,StringFormat:jn,Storage:wS,Reference:Br};t.INTERNAL.registerComponent(new Hn(oj,aj,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(ij,sj)}lj(Pr);const cj={apiKey:"AIzaSyCyzZtTJxa4e7Fyr9mMcfq1yF6WrzkyQrE",authDomain:"music-57564.firebaseapp.com",projectId:"music-57564",storageBucket:"music-57564.appspot.com",appId:"1:432371692672:web:de4cf401259a9a25632265"};Pr.initializeApp(cj);const pl=Pr.auth(),Sh=Pr.firestore(),u5=Pr.storage();Sh.enablePersistence().catch(t=>{console.log(`Firebase persistence error ${t.code}`)});const uj=Sh.collection("users"),d5=Sh.collection("songs"),h5=Sh.collection("comments"),Lc=Dp("user",{state:()=>({userLoggedIn:!1}),actions:{async register(t){const e=await pl.createUserWithEmailAndPassword(t.email,t.password);await uj.doc(e.user.uid).set({name:t.name,email:t.email,age:t.age,country:t.country}),await e.user.updateProfile({displayName:t.name}),this.userLoggedIn=!0},async authenticate(t){await pl.signInWithEmailAndPassword(t.email,t.password),this.userLoggedIn=!0},async singOut(){await pl.singOut,this.userLoggedIn=!1}}}),ro=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},dj={name:"LoginForm",data(){return{loginSchema:{email:"required|email",password:"required|min:9|max:100"},login_in_submission:!1,login_show_alert:!1,login_alert_variant:"bg-blue-500",login_alert_msg:"Please wait! We are logging you in."}},methods:{...Lp(Lc,["authenticate"]),async login(t){this.login_in_submission=!0,this.login_show_alert=!0,this.login_alert_variant="bg-blue-500",this.login_alert_msg="Please wait! We are logging you in.";try{await this.authenticate(t)}catch{this.login_in_submission=!1,this.login_alert_variant="bg-red-500",this.login_alert_msg="Invalid login details.";return}this.login_alert_variant="bg-green-500",this.login_alert_msg="Success! You are now logged in.",window.location.reload()}}},hj={class:"mb-3"},fj=le("label",{class:"inline-block mb-2"},"Email",-1),mj={class:"mb-3"},pj=le("label",{class:"inline-block mb-2"},"Password",-1),_j=["disabled"];function gj(t,e,n,r,i,s){const o=An("vee-field"),a=An("ErrorMessage"),l=An("vee-form");return Ft(),Rn(Gt,null,[i.login_show_alert?(Ft(),Rn("div",{key:0,class:Fr(["text-white text-center font-bold p-4 mb-4",i.login_alert_variant])},wi(i.login_alert_msg),3)):kp("",!0),Se(l,{"validation-schema":i.loginSchema,onSubmit:s.login},{default:Qn(()=>[le("div",hj,[fj,Se(o,{name:"email",type:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Se(a,{class:"text-red-600",name:"email"})]),le("div",mj,[pj,Se(o,{name:"password",type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password"}),Se(a,{class:"text-red-600",name:"password"})]),le("button",{disabled:i.login_in_submission,type:"submit",class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"}," Submit ",8,_j)]),_:1},8,["validation-schema","onSubmit"])],64)}const yj=ro(dj,[["render",gj]]),vj={name:"RegisterForm",data(){return{tab:"login",schema:{name:"required|min:3|max:100|alpha_spaces",email:"required|min:3|max:100|email",age:"required|min_value:18|max_value:100",password:"required|min:9|max:100|excluded:password",confirmation:"passwords_mismatch:@password",country:"required|country_excluded:Antarctica,Mexico",tos:"tos"},userData:{country:"USA"},reg_in_submission:!1,reg_show_alert:!1,reg_alert_variant:"bg-blue-500",reg_alert_msg:"Please wait! Your account is being created."}},methods:{...Lp(Lc,{createUser:"register"}),async register(t){this.reg_show_alert=!0,this.reg_in_submission=!0,this.reg_alert_variant="bg-blue-500",this.reg_alert_msg="Please wait! Your account is being created.";try{await this.createUser(t)}catch{this.reg_in_submission=!1,this.reg_alert_variant="bg-red-500",this.reg_alert_msg="An unexpected error occured. Please try again later.";return}this.reg_alert_variant="bg-green-500",this.reg_alert_msg="Success! Your account has been created.",window.location.reload()}}},Ij={class:"mb-3"},Ej=le("label",{class:"inline-block mb-2"},"Name",-1),Tj={class:"mb-3"},wj=le("label",{class:"inline-block mb-2"},"Email",-1),bj={class:"mb-3"},Aj=le("label",{class:"inline-block mb-2"},"Age",-1),Rj={class:"mb-3"},Sj=le("label",{class:"inline-block mb-2"},"Password",-1),Pj={class:"mb-3"},Cj=le("label",{class:"inline-block mb-2"},"Confirm Password",-1),kj={class:"mb-3"},Oj=le("label",{class:"inline-block mb-2"},"Country",-1),Nj=le("option",{value:"USA"},"USA",-1),xj=le("option",{value:"Mexico"},"Mexico",-1),Dj=le("option",{value:"Germany"},"Germany",-1),Lj=le("option",{value:"Antarctica"},"Antarctica",-1),Vj={class:"mb-3 pl-6"},Mj={href:"#"},Fj=["disabled"];function Uj(t,e,n,r,i,s){const o=An("vee-field"),a=An("ErrorMessage"),l=An("i18n-t"),u=An("vee-form");return Ft(),Rn(Gt,null,[i.reg_show_alert?(Ft(),Rn("div",{key:0,class:Fr(["text-white text-center font-bold p-4 rounded mb-4",i.reg_alert_variant])},wi(i.reg_alert_msg),3)):kp("",!0),Se(u,{"validation-schema":i.schema,onSubmit:s.register,"initial-values":i.userData},{default:Qn(()=>[le("div",Ij,[Ej,Se(o,{name:"name",type:"text",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Name"}),Se(a,{class:"text-red-400",name:"name"})]),le("div",Tj,[wj,Se(o,{name:"email",type:"email",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Enter Email"}),Se(a,{class:"text-red-400",name:"email"})]),le("div",bj,[Aj,Se(o,{name:"age",type:"number",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"}),Se(a,{class:"text-red-400",name:"age"})]),le("div",Rj,[Sj,Se(o,{name:"password",bails:!1},{default:Qn(({field:h,errors:c})=>[le("input",lw({type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Password"},h),null,16),(Ft(!0),Rn(Gt,null,yk(c,d=>(Ft(),Rn("div",{class:"text-red-600",key:d},wi(d),1))),128))]),_:1}),Se(a,{class:"text-red-400",name:"password"})]),le("div",Pj,[Cj,Se(o,{name:"confirmation",type:"password",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded",placeholder:"Confirm Password"}),Se(a,{class:"text-red-400",name:"confirmation"})]),le("div",kj,[Oj,Se(o,{as:"select",name:"country",class:"block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"},{default:Qn(()=>[Nj,xj,Dj,Lj]),_:1}),Se(a,{class:"text-red-400",name:"country"})]),le("div",Vj,[Se(o,{type:"checkbox",name:"tos",value:"1",class:"w-4 h-4 float-left -ml-6 mt-1 rounded"}),Se(a,{class:"text-red-400",name:"tos"}),Se(l,{class:"inline-block",keypath:"register.accept",tag:"label"},{default:Qn(()=>[le("a",Mj,wi(t.$t("register.tos")),1)]),_:1})]),le("button",{type:"submit",class:"block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700",disabled:i.reg_in_submission}," Submit ",8,Fj)]),_:1},8,["validation-schema","onSubmit","initial-values"])],64)}const $j=ro(vj,[["render",Uj]]),Bj={name:"Auth",components:{AppLoginForm:yj,AppRegisterForm:$j},data(){return{tab:"login"}},computed:{...gw(jf,["hiddenClass"]),...yw(jf,{modalVisibility:"isOpen"})},methods:{}},jj={class:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"},qj=le("div",{class:"fixed inset-0 transition-opacity"},[le("div",{class:"absolute inset-0 bg-gray-800 opacity-75"})],-1),Wj=le("span",{class:"hidden sm:inline-block sm:align-middle sm:h-screen"},"​",-1),Hj={class:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"},Gj={class:"py-4 text-left px-6"},Kj={class:"flex justify-between items-center pb-4"},zj=le("p",{class:"text-2xl font-bold"},"Your Account",-1),Qj=le("i",{class:"fas fa-times"},null,-1),Yj=[Qj],Xj={class:"flex flex-wrap mb-4"},Jj={class:"flex-auto text-center"},Zj={class:"flex-auto text-center"};function eq(t,e,n,r,i,s){const o=An("app-login-form"),a=An("app-register-form");return Ft(),Rn("div",{class:Fr(["fixed z-10 inset-0 overflow-y-auto",t.hiddenClass]),id:"modal"},[le("div",jj,[qj,Wj,le("div",Hj,[le("div",Gj,[le("div",Kj,[zj,le("div",{class:"modal-close cursor-pointer z-50",onClick:e[0]||(e[0]=l=>t.modalVisibility=!1)},Yj)]),le("ul",Xj,[le("li",Jj,[le("a",{class:Fr(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":i.tab==="login","hover:text-blue-600":i.tab==="register"}]),href:"#",onClick:e[1]||(e[1]=Ps(l=>i.tab="login",["prevent"]))},"Login",2)]),le("li",Zj,[le("a",{class:Fr(["block rounded py-3 px-4 transition",{"hover:text-white text-white bg-blue-600":i.tab==="register","hover:text-blue-600":i.tab==="login"}]),href:"#",onClick:e[2]||(e[2]=Ps(l=>i.tab="register",["prevent"]))},"Register",2)])]),i.tab==="login"?(Ft(),ku(o,{key:0})):(Ft(),ku(a,{key:1}))])])])],2)}const tq=ro(Bj,[["render",eq]]),nq={name:"AppHeader",computed:{...xO(jf,Lc),currentLocale(){return this.$i18n.locale==="fr"?"French":"English"}},methods:{toggleAuthModal(){this.modalStore.isOpen=!this.modalStore.isOpen,console.log(this.modalStore.isOpen)},singOut(){this.userStore.singOut(),this.$route.meta.requiresAuth&&this.$router.push({name:"home"})},changeLocale(){this.$i18n.locale=this.$i18n.locale==="fr"?"en":"fr"}}},rq={id:"header",class:"bg-gray-700"},iq={class:"container mx-auto flex justify-start items-center py-5 px-4"},sq={class:"flex flex-grow items-center"},oq={class:"flex flex-row mt-1"},aq={key:0},lq={class:"ml-auto"};function cq(t,e,n,r,i,s){const o=An("router-link");return Ft(),Rn("header",rq,[le("nav",iq,[Se(o,{class:"text-white font-bold uppercase text-2xl mr-4",to:{name:"home"},"exact-active-class":"no-active"},{default:Qn(()=>[nl("Music")]),_:1}),le("div",sq,[le("ul",oq,[le("li",null,[Se(o,{class:"px-2 text-white",to:{name:"about"}},{default:Qn(()=>[nl(" About ")]),_:1})]),t.userStore.userLoggedIn?(Ft(),Rn(Gt,{key:1},[le("li",null,[Se(o,{class:"px-2 text-white",to:{name:"manage"}},{default:Qn(()=>[nl("Manage")]),_:1})]),le("li",null,[le("a",{class:"px-2 text-white",href:"#",onClick:e[1]||(e[1]=Ps((...a)=>s.singOut&&s.singOut(...a),["prevent"]))}," Logout")])],64)):(Ft(),Rn("li",aq,[le("a",{class:"px-2 text-white",href:"#",onClick:e[0]||(e[0]=Ps((...a)=>s.toggleAuthModal&&s.toggleAuthModal(...a),["prevent"]))},"Login / Register")]))]),le("ul",lq,[le("li",null,[le("a",{href:"#",class:"px-2 text-white",onClick:e[2]||(e[2]=Ps((...a)=>s.changeLocale&&s.changeLocale(...a),["prevent"]))},wi(s.currentLocale),1)])])])])])}const uq=ro(nq,[["render",cq]]);var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Um={};/*!
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(t){(function(){var e=function(){this.init()};e.prototype={init:function(){var c=this||n;return c._counter=1e3,c._html5AudioPool=[],c.html5PoolSize=10,c._codecs={},c._howls=[],c._muted=!1,c._volume=1,c._canPlayEvent="canplaythrough",c._navigator=typeof window<"u"&&window.navigator?window.navigator:null,c.masterGain=null,c.noAudio=!1,c.usingWebAudio=!0,c.autoSuspend=!0,c.ctx=null,c.autoUnlock=!0,c._setup(),c},volume:function(c){var d=this||n;if(c=parseFloat(c),d.ctx||h(),typeof c<"u"&&c>=0&&c<=1){if(d._volume=c,d._muted)return d;d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c,n.ctx.currentTime);for(var f=0;f<d._howls.length;f++)if(!d._howls[f]._webAudio)for(var m=d._howls[f]._getSoundIds(),y=0;y<m.length;y++){var v=d._howls[f]._soundById(m[y]);v&&v._node&&(v._node.volume=v._volume*c)}return d}return d._volume},mute:function(c){var d=this||n;d.ctx||h(),d._muted=c,d.usingWebAudio&&d.masterGain.gain.setValueAtTime(c?0:d._volume,n.ctx.currentTime);for(var f=0;f<d._howls.length;f++)if(!d._howls[f]._webAudio)for(var m=d._howls[f]._getSoundIds(),y=0;y<m.length;y++){var v=d._howls[f]._soundById(m[y]);v&&v._node&&(v._node.muted=c?!0:v._muted)}return d},stop:function(){for(var c=this||n,d=0;d<c._howls.length;d++)c._howls[d].stop();return c},unload:function(){for(var c=this||n,d=c._howls.length-1;d>=0;d--)c._howls[d].unload();return c.usingWebAudio&&c.ctx&&typeof c.ctx.close<"u"&&(c.ctx.close(),c.ctx=null,h()),c},codecs:function(c){return(this||n)._codecs[c.replace(/^x-/,"")]},_setup:function(){var c=this||n;if(c.state=c.ctx&&c.ctx.state||"suspended",c._autoSuspend(),!c.usingWebAudio)if(typeof Audio<"u")try{var d=new Audio;typeof d.oncanplaythrough>"u"&&(c._canPlayEvent="canplay")}catch{c.noAudio=!0}else c.noAudio=!0;try{var d=new Audio;d.muted&&(c.noAudio=!0)}catch{}return c.noAudio||c._setupCodecs(),c},_setupCodecs:function(){var c=this||n,d=null;try{d=typeof Audio<"u"?new Audio:null}catch{return c}if(!d||typeof d.canPlayType!="function")return c;var f=d.canPlayType("audio/mpeg;").replace(/^no$/,""),m=c._navigator?c._navigator.userAgent:"",y=m.match(/OPR\/(\d+)/g),v=y&&parseInt(y[0].split("/")[1],10)<33,p=m.indexOf("Safari")!==-1&&m.indexOf("Chrome")===-1,I=m.match(/Version\/(.*?) /),b=p&&I&&parseInt(I[1],10)<15;return c._codecs={mp3:!!(!v&&(f||d.canPlayType("audio/mp3;").replace(/^no$/,""))),mpeg:!!f,opus:!!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),oga:!!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!(d.canPlayType('audio/wav; codecs="1"')||d.canPlayType("audio/wav")).replace(/^no$/,""),aac:!!d.canPlayType("audio/aac;").replace(/^no$/,""),caf:!!d.canPlayType("audio/x-caf;").replace(/^no$/,""),m4a:!!(d.canPlayType("audio/x-m4a;")||d.canPlayType("audio/m4a;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),m4b:!!(d.canPlayType("audio/x-m4b;")||d.canPlayType("audio/m4b;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(d.canPlayType("audio/x-mp4;")||d.canPlayType("audio/mp4;")||d.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!(!b&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),webm:!!(!b&&d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")),dolby:!!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/,""),flac:!!(d.canPlayType("audio/x-flac;")||d.canPlayType("audio/flac;")).replace(/^no$/,"")},c},_unlockAudio:function(){var c=this||n;if(!(c._audioUnlocked||!c.ctx)){c._audioUnlocked=!1,c.autoUnlock=!1,!c._mobileUnloaded&&c.ctx.sampleRate!==44100&&(c._mobileUnloaded=!0,c.unload()),c._scratchBuffer=c.ctx.createBuffer(1,1,22050);var d=function(f){for(;c._html5AudioPool.length<c.html5PoolSize;)try{var m=new Audio;m._unlocked=!0,c._releaseHtml5Audio(m)}catch{c.noAudio=!0;break}for(var y=0;y<c._howls.length;y++)if(!c._howls[y]._webAudio)for(var v=c._howls[y]._getSoundIds(),p=0;p<v.length;p++){var I=c._howls[y]._soundById(v[p]);I&&I._node&&!I._node._unlocked&&(I._node._unlocked=!0,I._node.load())}c._autoResume();var b=c.ctx.createBufferSource();b.buffer=c._scratchBuffer,b.connect(c.ctx.destination),typeof b.start>"u"?b.noteOn(0):b.start(0),typeof c.ctx.resume=="function"&&c.ctx.resume(),b.onended=function(){b.disconnect(0),c._audioUnlocked=!0,document.removeEventListener("touchstart",d,!0),document.removeEventListener("touchend",d,!0),document.removeEventListener("click",d,!0),document.removeEventListener("keydown",d,!0);for(var E=0;E<c._howls.length;E++)c._howls[E]._emit("unlock")}};return document.addEventListener("touchstart",d,!0),document.addEventListener("touchend",d,!0),document.addEventListener("click",d,!0),document.addEventListener("keydown",d,!0),c}},_obtainHtml5Audio:function(){var c=this||n;if(c._html5AudioPool.length)return c._html5AudioPool.pop();var d=new Audio().play();return d&&typeof Promise<"u"&&(d instanceof Promise||typeof d.then=="function")&&d.catch(function(){console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.")}),new Audio},_releaseHtml5Audio:function(c){var d=this||n;return c._unlocked&&d._html5AudioPool.push(c),d},_autoSuspend:function(){var c=this;if(!(!c.autoSuspend||!c.ctx||typeof c.ctx.suspend>"u"||!n.usingWebAudio)){for(var d=0;d<c._howls.length;d++)if(c._howls[d]._webAudio){for(var f=0;f<c._howls[d]._sounds.length;f++)if(!c._howls[d]._sounds[f]._paused)return c}return c._suspendTimer&&clearTimeout(c._suspendTimer),c._suspendTimer=setTimeout(function(){if(c.autoSuspend){c._suspendTimer=null,c.state="suspending";var m=function(){c.state="suspended",c._resumeAfterSuspend&&(delete c._resumeAfterSuspend,c._autoResume())};c.ctx.suspend().then(m,m)}},3e4),c}},_autoResume:function(){var c=this;if(!(!c.ctx||typeof c.ctx.resume>"u"||!n.usingWebAudio))return c.state==="running"&&c.ctx.state!=="interrupted"&&c._suspendTimer?(clearTimeout(c._suspendTimer),c._suspendTimer=null):c.state==="suspended"||c.state==="running"&&c.ctx.state==="interrupted"?(c.ctx.resume().then(function(){c.state="running";for(var d=0;d<c._howls.length;d++)c._howls[d]._emit("resume")}),c._suspendTimer&&(clearTimeout(c._suspendTimer),c._suspendTimer=null)):c.state==="suspending"&&(c._resumeAfterSuspend=!0),c}};var n=new e,r=function(c){var d=this;if(!c.src||c.src.length===0){console.error("An array of source files must be passed with any new Howl.");return}d.init(c)};r.prototype={init:function(c){var d=this;return n.ctx||h(),d._autoplay=c.autoplay||!1,d._format=typeof c.format!="string"?c.format:[c.format],d._html5=c.html5||!1,d._muted=c.mute||!1,d._loop=c.loop||!1,d._pool=c.pool||5,d._preload=typeof c.preload=="boolean"||c.preload==="metadata"?c.preload:!0,d._rate=c.rate||1,d._sprite=c.sprite||{},d._src=typeof c.src!="string"?c.src:[c.src],d._volume=c.volume!==void 0?c.volume:1,d._xhr={method:c.xhr&&c.xhr.method?c.xhr.method:"GET",headers:c.xhr&&c.xhr.headers?c.xhr.headers:null,withCredentials:c.xhr&&c.xhr.withCredentials?c.xhr.withCredentials:!1},d._duration=0,d._state="unloaded",d._sounds=[],d._endTimers={},d._queue=[],d._playLock=!1,d._onend=c.onend?[{fn:c.onend}]:[],d._onfade=c.onfade?[{fn:c.onfade}]:[],d._onload=c.onload?[{fn:c.onload}]:[],d._onloaderror=c.onloaderror?[{fn:c.onloaderror}]:[],d._onplayerror=c.onplayerror?[{fn:c.onplayerror}]:[],d._onpause=c.onpause?[{fn:c.onpause}]:[],d._onplay=c.onplay?[{fn:c.onplay}]:[],d._onstop=c.onstop?[{fn:c.onstop}]:[],d._onmute=c.onmute?[{fn:c.onmute}]:[],d._onvolume=c.onvolume?[{fn:c.onvolume}]:[],d._onrate=c.onrate?[{fn:c.onrate}]:[],d._onseek=c.onseek?[{fn:c.onseek}]:[],d._onunlock=c.onunlock?[{fn:c.onunlock}]:[],d._onresume=[],d._webAudio=n.usingWebAudio&&!d._html5,typeof n.ctx<"u"&&n.ctx&&n.autoUnlock&&n._unlockAudio(),n._howls.push(d),d._autoplay&&d._queue.push({event:"play",action:function(){d.play()}}),d._preload&&d._preload!=="none"&&d.load(),d},load:function(){var c=this,d=null;if(n.noAudio){c._emit("loaderror",null,"No audio support.");return}typeof c._src=="string"&&(c._src=[c._src]);for(var f=0;f<c._src.length;f++){var m,y;if(c._format&&c._format[f])m=c._format[f];else{if(y=c._src[f],typeof y!="string"){c._emit("loaderror",null,"Non-string found in selected audio sources - ignoring.");continue}m=/^data:audio\/([^;,]+);/i.exec(y),m||(m=/\.([^.]+)$/.exec(y.split("?",1)[0])),m&&(m=m[1].toLowerCase())}if(m||console.warn('No file extension was found. Consider using the "format" property or specify an extension.'),m&&n.codecs(m)){d=c._src[f];break}}if(!d){c._emit("loaderror",null,"No codec support for selected audio sources.");return}return c._src=d,c._state="loading",window.location.protocol==="https:"&&d.slice(0,5)==="http:"&&(c._html5=!0,c._webAudio=!1),new i(c),c._webAudio&&o(c),c},play:function(c,d){var f=this,m=null;if(typeof c=="number")m=c,c=null;else{if(typeof c=="string"&&f._state==="loaded"&&!f._sprite[c])return null;if(typeof c>"u"&&(c="__default",!f._playLock)){for(var y=0,v=0;v<f._sounds.length;v++)f._sounds[v]._paused&&!f._sounds[v]._ended&&(y++,m=f._sounds[v]._id);y===1?c=null:m=null}}var p=m?f._soundById(m):f._inactiveSound();if(!p)return null;if(m&&!c&&(c=p._sprite||"__default"),f._state!=="loaded"){p._sprite=c,p._ended=!1;var I=p._id;return f._queue.push({event:"play",action:function(){f.play(I)}}),I}if(m&&!p._paused)return d||f._loadQueue("play"),p._id;f._webAudio&&n._autoResume();var b=Math.max(0,p._seek>0?p._seek:f._sprite[c][0]/1e3),E=Math.max(0,(f._sprite[c][0]+f._sprite[c][1])/1e3-b),P=E*1e3/Math.abs(p._rate),k=f._sprite[c][0]/1e3,O=(f._sprite[c][0]+f._sprite[c][1])/1e3;p._sprite=c,p._ended=!1;var V=function(){p._paused=!1,p._seek=b,p._start=k,p._stop=O,p._loop=!!(p._loop||f._sprite[c][2])};if(b>=O){f._ended(p);return}var F=p._node;if(f._webAudio){var X=function(){f._playLock=!1,V(),f._refreshBuffer(p);var Te=p._muted||f._muted?0:p._volume;F.gain.setValueAtTime(Te,n.ctx.currentTime),p._playStart=n.ctx.currentTime,typeof F.bufferSource.start>"u"?p._loop?F.bufferSource.noteGrainOn(0,b,86400):F.bufferSource.noteGrainOn(0,b,E):p._loop?F.bufferSource.start(0,b,86400):F.bufferSource.start(0,b,E),P!==1/0&&(f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),P)),d||setTimeout(function(){f._emit("play",p._id),f._loadQueue()},0)};n.state==="running"&&n.ctx.state!=="interrupted"?X():(f._playLock=!0,f.once("resume",X),f._clearTimer(p._id))}else{var pe=function(){F.currentTime=b,F.muted=p._muted||f._muted||n._muted||F.muted,F.volume=p._volume*n.volume(),F.playbackRate=p._rate;try{var Te=F.play();if(Te&&typeof Promise<"u"&&(Te instanceof Promise||typeof Te.then=="function")?(f._playLock=!0,V(),Te.then(function(){f._playLock=!1,F._unlocked=!0,d?f._loadQueue():f._emit("play",p._id)}).catch(function(){f._playLock=!1,f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."),p._ended=!0,p._paused=!0})):d||(f._playLock=!1,V(),f._emit("play",p._id)),F.playbackRate=p._rate,F.paused){f._emit("playerror",p._id,"Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");return}c!=="__default"||p._loop?f._endTimers[p._id]=setTimeout(f._ended.bind(f,p),P):(f._endTimers[p._id]=function(){f._ended(p),F.removeEventListener("ended",f._endTimers[p._id],!1)},F.addEventListener("ended",f._endTimers[p._id],!1))}catch(Ne){f._emit("playerror",p._id,Ne)}};F.src==="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA"&&(F.src=f._src,F.load());var K=window&&window.ejecta||!F.readyState&&n._navigator.isCocoonJS;if(F.readyState>=3||K)pe();else{f._playLock=!0,f._state="loading";var ue=function(){f._state="loaded",pe(),F.removeEventListener(n._canPlayEvent,ue,!1)};F.addEventListener(n._canPlayEvent,ue,!1),f._clearTimer(p._id)}}return p._id},pause:function(c){var d=this;if(d._state!=="loaded"||d._playLock)return d._queue.push({event:"pause",action:function(){d.pause(c)}}),d;for(var f=d._getSoundIds(c),m=0;m<f.length;m++){d._clearTimer(f[m]);var y=d._soundById(f[m]);if(y&&!y._paused&&(y._seek=d.seek(f[m]),y._rateSeek=0,y._paused=!0,d._stopFade(f[m]),y._node))if(d._webAudio){if(!y._node.bufferSource)continue;typeof y._node.bufferSource.stop>"u"?y._node.bufferSource.noteOff(0):y._node.bufferSource.stop(0),d._cleanBuffer(y._node)}else(!isNaN(y._node.duration)||y._node.duration===1/0)&&y._node.pause();arguments[1]||d._emit("pause",y?y._id:null)}return d},stop:function(c,d){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"stop",action:function(){f.stop(c)}}),f;for(var m=f._getSoundIds(c),y=0;y<m.length;y++){f._clearTimer(m[y]);var v=f._soundById(m[y]);v&&(v._seek=v._start||0,v._rateSeek=0,v._paused=!0,v._ended=!0,f._stopFade(m[y]),v._node&&(f._webAudio?v._node.bufferSource&&(typeof v._node.bufferSource.stop>"u"?v._node.bufferSource.noteOff(0):v._node.bufferSource.stop(0),f._cleanBuffer(v._node)):(!isNaN(v._node.duration)||v._node.duration===1/0)&&(v._node.currentTime=v._start||0,v._node.pause(),v._node.duration===1/0&&f._clearSound(v._node))),d||f._emit("stop",v._id))}return f},mute:function(c,d){var f=this;if(f._state!=="loaded"||f._playLock)return f._queue.push({event:"mute",action:function(){f.mute(c,d)}}),f;if(typeof d>"u")if(typeof c=="boolean")f._muted=c;else return f._muted;for(var m=f._getSoundIds(d),y=0;y<m.length;y++){var v=f._soundById(m[y]);v&&(v._muted=c,v._interval&&f._stopFade(v._id),f._webAudio&&v._node?v._node.gain.setValueAtTime(c?0:v._volume,n.ctx.currentTime):v._node&&(v._node.muted=n._muted?!0:c),f._emit("mute",v._id))}return f},volume:function(){var c=this,d=arguments,f,m;if(d.length===0)return c._volume;if(d.length===1||d.length===2&&typeof d[1]>"u"){var y=c._getSoundIds(),v=y.indexOf(d[0]);v>=0?m=parseInt(d[0],10):f=parseFloat(d[0])}else d.length>=2&&(f=parseFloat(d[0]),m=parseInt(d[1],10));var p;if(typeof f<"u"&&f>=0&&f<=1){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"volume",action:function(){c.volume.apply(c,d)}}),c;typeof m>"u"&&(c._volume=f),m=c._getSoundIds(m);for(var I=0;I<m.length;I++)p=c._soundById(m[I]),p&&(p._volume=f,d[2]||c._stopFade(m[I]),c._webAudio&&p._node&&!p._muted?p._node.gain.setValueAtTime(f,n.ctx.currentTime):p._node&&!p._muted&&(p._node.volume=f*n.volume()),c._emit("volume",p._id))}else return p=m?c._soundById(m):c._sounds[0],p?p._volume:0;return c},fade:function(c,d,f,m){var y=this;if(y._state!=="loaded"||y._playLock)return y._queue.push({event:"fade",action:function(){y.fade(c,d,f,m)}}),y;c=Math.min(Math.max(0,parseFloat(c)),1),d=Math.min(Math.max(0,parseFloat(d)),1),f=parseFloat(f),y.volume(c,m);for(var v=y._getSoundIds(m),p=0;p<v.length;p++){var I=y._soundById(v[p]);if(I){if(m||y._stopFade(v[p]),y._webAudio&&!I._muted){var b=n.ctx.currentTime,E=b+f/1e3;I._volume=c,I._node.gain.setValueAtTime(c,b),I._node.gain.linearRampToValueAtTime(d,E)}y._startFadeInterval(I,c,d,f,v[p],typeof m>"u")}}return y},_startFadeInterval:function(c,d,f,m,y,v){var p=this,I=d,b=f-d,E=Math.abs(b/.01),P=Math.max(4,E>0?m/E:m),k=Date.now();c._fadeTo=f,c._interval=setInterval(function(){var O=(Date.now()-k)/m;k=Date.now(),I+=b*O,I=Math.round(I*100)/100,b<0?I=Math.max(f,I):I=Math.min(f,I),p._webAudio?c._volume=I:p.volume(I,c._id,!0),v&&(p._volume=I),(f<d&&I<=f||f>d&&I>=f)&&(clearInterval(c._interval),c._interval=null,c._fadeTo=null,p.volume(f,c._id),p._emit("fade",c._id))},P)},_stopFade:function(c){var d=this,f=d._soundById(c);return f&&f._interval&&(d._webAudio&&f._node.gain.cancelScheduledValues(n.ctx.currentTime),clearInterval(f._interval),f._interval=null,d.volume(f._fadeTo,c),f._fadeTo=null,d._emit("fade",c)),d},loop:function(){var c=this,d=arguments,f,m,y;if(d.length===0)return c._loop;if(d.length===1)if(typeof d[0]=="boolean")f=d[0],c._loop=f;else return y=c._soundById(parseInt(d[0],10)),y?y._loop:!1;else d.length===2&&(f=d[0],m=parseInt(d[1],10));for(var v=c._getSoundIds(m),p=0;p<v.length;p++)y=c._soundById(v[p]),y&&(y._loop=f,c._webAudio&&y._node&&y._node.bufferSource&&(y._node.bufferSource.loop=f,f&&(y._node.bufferSource.loopStart=y._start||0,y._node.bufferSource.loopEnd=y._stop,c.playing(v[p])&&(c.pause(v[p],!0),c.play(v[p],!0)))));return c},rate:function(){var c=this,d=arguments,f,m;if(d.length===0)m=c._sounds[0]._id;else if(d.length===1){var y=c._getSoundIds(),v=y.indexOf(d[0]);v>=0?m=parseInt(d[0],10):f=parseFloat(d[0])}else d.length===2&&(f=parseFloat(d[0]),m=parseInt(d[1],10));var p;if(typeof f=="number"){if(c._state!=="loaded"||c._playLock)return c._queue.push({event:"rate",action:function(){c.rate.apply(c,d)}}),c;typeof m>"u"&&(c._rate=f),m=c._getSoundIds(m);for(var I=0;I<m.length;I++)if(p=c._soundById(m[I]),p){c.playing(m[I])&&(p._rateSeek=c.seek(m[I]),p._playStart=c._webAudio?n.ctx.currentTime:p._playStart),p._rate=f,c._webAudio&&p._node&&p._node.bufferSource?p._node.bufferSource.playbackRate.setValueAtTime(f,n.ctx.currentTime):p._node&&(p._node.playbackRate=f);var b=c.seek(m[I]),E=(c._sprite[p._sprite][0]+c._sprite[p._sprite][1])/1e3-b,P=E*1e3/Math.abs(p._rate);(c._endTimers[m[I]]||!p._paused)&&(c._clearTimer(m[I]),c._endTimers[m[I]]=setTimeout(c._ended.bind(c,p),P)),c._emit("rate",p._id)}}else return p=c._soundById(m),p?p._rate:c._rate;return c},seek:function(){var c=this,d=arguments,f,m;if(d.length===0)c._sounds.length&&(m=c._sounds[0]._id);else if(d.length===1){var y=c._getSoundIds(),v=y.indexOf(d[0]);v>=0?m=parseInt(d[0],10):c._sounds.length&&(m=c._sounds[0]._id,f=parseFloat(d[0]))}else d.length===2&&(f=parseFloat(d[0]),m=parseInt(d[1],10));if(typeof m>"u")return 0;if(typeof f=="number"&&(c._state!=="loaded"||c._playLock))return c._queue.push({event:"seek",action:function(){c.seek.apply(c,d)}}),c;var p=c._soundById(m);if(p)if(typeof f=="number"&&f>=0){var I=c.playing(m);I&&c.pause(m,!0),p._seek=f,p._ended=!1,c._clearTimer(m),!c._webAudio&&p._node&&!isNaN(p._node.duration)&&(p._node.currentTime=f);var b=function(){I&&c.play(m,!0),c._emit("seek",m)};if(I&&!c._webAudio){var E=function(){c._playLock?setTimeout(E,0):b()};setTimeout(E,0)}else b()}else if(c._webAudio){var P=c.playing(m)?n.ctx.currentTime-p._playStart:0,k=p._rateSeek?p._rateSeek-p._seek:0;return p._seek+(k+P*Math.abs(p._rate))}else return p._node.currentTime;return c},playing:function(c){var d=this;if(typeof c=="number"){var f=d._soundById(c);return f?!f._paused:!1}for(var m=0;m<d._sounds.length;m++)if(!d._sounds[m]._paused)return!0;return!1},duration:function(c){var d=this,f=d._duration,m=d._soundById(c);return m&&(f=d._sprite[m._sprite][1]/1e3),f},state:function(){return this._state},unload:function(){for(var c=this,d=c._sounds,f=0;f<d.length;f++)d[f]._paused||c.stop(d[f]._id),c._webAudio||(c._clearSound(d[f]._node),d[f]._node.removeEventListener("error",d[f]._errorFn,!1),d[f]._node.removeEventListener(n._canPlayEvent,d[f]._loadFn,!1),d[f]._node.removeEventListener("ended",d[f]._endFn,!1),n._releaseHtml5Audio(d[f]._node)),delete d[f]._node,c._clearTimer(d[f]._id);var m=n._howls.indexOf(c);m>=0&&n._howls.splice(m,1);var y=!0;for(f=0;f<n._howls.length;f++)if(n._howls[f]._src===c._src||c._src.indexOf(n._howls[f]._src)>=0){y=!1;break}return s&&y&&delete s[c._src],n.noAudio=!1,c._state="unloaded",c._sounds=[],c=null,null},on:function(c,d,f,m){var y=this,v=y["_on"+c];return typeof d=="function"&&v.push(m?{id:f,fn:d,once:m}:{id:f,fn:d}),y},off:function(c,d,f){var m=this,y=m["_on"+c],v=0;if(typeof d=="number"&&(f=d,d=null),d||f)for(v=0;v<y.length;v++){var p=f===y[v].id;if(d===y[v].fn&&p||!d&&p){y.splice(v,1);break}}else if(c)m["_on"+c]=[];else{var I=Object.keys(m);for(v=0;v<I.length;v++)I[v].indexOf("_on")===0&&Array.isArray(m[I[v]])&&(m[I[v]]=[])}return m},once:function(c,d,f){var m=this;return m.on(c,d,f,1),m},_emit:function(c,d,f){for(var m=this,y=m["_on"+c],v=y.length-1;v>=0;v--)(!y[v].id||y[v].id===d||c==="load")&&(setTimeout((function(p){p.call(this,d,f)}).bind(m,y[v].fn),0),y[v].once&&m.off(c,y[v].fn,y[v].id));return m._loadQueue(c),m},_loadQueue:function(c){var d=this;if(d._queue.length>0){var f=d._queue[0];f.event===c&&(d._queue.shift(),d._loadQueue()),c||f.action()}return d},_ended:function(c){var d=this,f=c._sprite;if(!d._webAudio&&c._node&&!c._node.paused&&!c._node.ended&&c._node.currentTime<c._stop)return setTimeout(d._ended.bind(d,c),100),d;var m=!!(c._loop||d._sprite[f][2]);if(d._emit("end",c._id),!d._webAudio&&m&&d.stop(c._id,!0).play(c._id),d._webAudio&&m){d._emit("play",c._id),c._seek=c._start||0,c._rateSeek=0,c._playStart=n.ctx.currentTime;var y=(c._stop-c._start)*1e3/Math.abs(c._rate);d._endTimers[c._id]=setTimeout(d._ended.bind(d,c),y)}return d._webAudio&&!m&&(c._paused=!0,c._ended=!0,c._seek=c._start||0,c._rateSeek=0,d._clearTimer(c._id),d._cleanBuffer(c._node),n._autoSuspend()),!d._webAudio&&!m&&d.stop(c._id,!0),d},_clearTimer:function(c){var d=this;if(d._endTimers[c]){if(typeof d._endTimers[c]!="function")clearTimeout(d._endTimers[c]);else{var f=d._soundById(c);f&&f._node&&f._node.removeEventListener("ended",d._endTimers[c],!1)}delete d._endTimers[c]}return d},_soundById:function(c){for(var d=this,f=0;f<d._sounds.length;f++)if(c===d._sounds[f]._id)return d._sounds[f];return null},_inactiveSound:function(){var c=this;c._drain();for(var d=0;d<c._sounds.length;d++)if(c._sounds[d]._ended)return c._sounds[d].reset();return new i(c)},_drain:function(){var c=this,d=c._pool,f=0,m=0;if(!(c._sounds.length<d)){for(m=0;m<c._sounds.length;m++)c._sounds[m]._ended&&f++;for(m=c._sounds.length-1;m>=0;m--){if(f<=d)return;c._sounds[m]._ended&&(c._webAudio&&c._sounds[m]._node&&c._sounds[m]._node.disconnect(0),c._sounds.splice(m,1),f--)}}},_getSoundIds:function(c){var d=this;if(typeof c>"u"){for(var f=[],m=0;m<d._sounds.length;m++)f.push(d._sounds[m]._id);return f}else return[c]},_refreshBuffer:function(c){var d=this;return c._node.bufferSource=n.ctx.createBufferSource(),c._node.bufferSource.buffer=s[d._src],c._panner?c._node.bufferSource.connect(c._panner):c._node.bufferSource.connect(c._node),c._node.bufferSource.loop=c._loop,c._loop&&(c._node.bufferSource.loopStart=c._start||0,c._node.bufferSource.loopEnd=c._stop||0),c._node.bufferSource.playbackRate.setValueAtTime(c._rate,n.ctx.currentTime),d},_cleanBuffer:function(c){var d=this,f=n._navigator&&n._navigator.vendor.indexOf("Apple")>=0;if(!c.bufferSource)return d;if(n._scratchBuffer&&c.bufferSource&&(c.bufferSource.onended=null,c.bufferSource.disconnect(0),f))try{c.bufferSource.buffer=n._scratchBuffer}catch{}return c.bufferSource=null,d},_clearSound:function(c){var d=/MSIE |Trident\//.test(n._navigator&&n._navigator.userAgent);d||(c.src="data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA")}};var i=function(c){this._parent=c,this.init()};i.prototype={init:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,d._sounds.push(c),c.create(),c},create:function(){var c=this,d=c._parent,f=n._muted||c._muted||c._parent._muted?0:c._volume;return d._webAudio?(c._node=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),c._node.gain.setValueAtTime(f,n.ctx.currentTime),c._node.paused=!0,c._node.connect(n.masterGain)):n.noAudio||(c._node=n._obtainHtml5Audio(),c._errorFn=c._errorListener.bind(c),c._node.addEventListener("error",c._errorFn,!1),c._loadFn=c._loadListener.bind(c),c._node.addEventListener(n._canPlayEvent,c._loadFn,!1),c._endFn=c._endListener.bind(c),c._node.addEventListener("ended",c._endFn,!1),c._node.src=d._src,c._node.preload=d._preload===!0?"auto":d._preload,c._node.volume=f*n.volume(),c._node.load()),c},reset:function(){var c=this,d=c._parent;return c._muted=d._muted,c._loop=d._loop,c._volume=d._volume,c._rate=d._rate,c._seek=0,c._rateSeek=0,c._paused=!0,c._ended=!0,c._sprite="__default",c._id=++n._counter,c},_errorListener:function(){var c=this;c._parent._emit("loaderror",c._id,c._node.error?c._node.error.code:0),c._node.removeEventListener("error",c._errorFn,!1)},_loadListener:function(){var c=this,d=c._parent;d._duration=Math.ceil(c._node.duration*10)/10,Object.keys(d._sprite).length===0&&(d._sprite={__default:[0,d._duration*1e3]}),d._state!=="loaded"&&(d._state="loaded",d._emit("load"),d._loadQueue()),c._node.removeEventListener(n._canPlayEvent,c._loadFn,!1)},_endListener:function(){var c=this,d=c._parent;d._duration===1/0&&(d._duration=Math.ceil(c._node.duration*10)/10,d._sprite.__default[1]===1/0&&(d._sprite.__default[1]=d._duration*1e3),d._ended(c)),c._node.removeEventListener("ended",c._endFn,!1)}};var s={},o=function(c){var d=c._src;if(s[d]){c._duration=s[d].duration,u(c);return}if(/^data:[^;]+;base64,/.test(d)){for(var f=atob(d.split(",")[1]),m=new Uint8Array(f.length),y=0;y<f.length;++y)m[y]=f.charCodeAt(y);l(m.buffer,c)}else{var v=new XMLHttpRequest;v.open(c._xhr.method,d,!0),v.withCredentials=c._xhr.withCredentials,v.responseType="arraybuffer",c._xhr.headers&&Object.keys(c._xhr.headers).forEach(function(p){v.setRequestHeader(p,c._xhr.headers[p])}),v.onload=function(){var p=(v.status+"")[0];if(p!=="0"&&p!=="2"&&p!=="3"){c._emit("loaderror",null,"Failed loading audio file with status: "+v.status+".");return}l(v.response,c)},v.onerror=function(){c._webAudio&&(c._html5=!0,c._webAudio=!1,c._sounds=[],delete s[d],c.load())},a(v)}},a=function(c){try{c.send()}catch{c.onerror()}},l=function(c,d){var f=function(){d._emit("loaderror",null,"Decoding audio data failed.")},m=function(y){y&&d._sounds.length>0?(s[d._src]=y,u(d,y)):f()};typeof Promise<"u"&&n.ctx.decodeAudioData.length===1?n.ctx.decodeAudioData(c).then(m).catch(f):n.ctx.decodeAudioData(c,m,f)},u=function(c,d){d&&!c._duration&&(c._duration=d.duration),Object.keys(c._sprite).length===0&&(c._sprite={__default:[0,c._duration*1e3]}),c._state!=="loaded"&&(c._state="loaded",c._emit("load"),c._loadQueue())},h=function(){if(n.usingWebAudio){try{typeof AudioContext<"u"?n.ctx=new AudioContext:typeof webkitAudioContext<"u"?n.ctx=new webkitAudioContext:n.usingWebAudio=!1}catch{n.usingWebAudio=!1}n.ctx||(n.usingWebAudio=!1);var c=/iP(hone|od|ad)/.test(n._navigator&&n._navigator.platform),d=n._navigator&&n._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),f=d?parseInt(d[1],10):null;if(c&&f&&f<9){var m=/safari/.test(n._navigator&&n._navigator.userAgent.toLowerCase());n._navigator&&!m&&(n.usingWebAudio=!1)}n.usingWebAudio&&(n.masterGain=typeof n.ctx.createGain>"u"?n.ctx.createGainNode():n.ctx.createGain(),n.masterGain.gain.setValueAtTime(n._muted?0:n._volume,n.ctx.currentTime),n.masterGain.connect(n.ctx.destination)),n._setup()}};t.Howler=n,t.Howl=r,typeof pr<"u"?(pr.HowlerGlobal=e,pr.Howler=n,pr.Howl=r,pr.Sound=i):typeof window<"u"&&(window.HowlerGlobal=e,window.Howler=n,window.Howl=r,window.Sound=i)})();/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.4
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */(function(){HowlerGlobal.prototype._pos=[0,0,0],HowlerGlobal.prototype._orientation=[0,0,-1,0,1,0],HowlerGlobal.prototype.stereo=function(n){var r=this;if(!r.ctx||!r.ctx.listener)return r;for(var i=r._howls.length-1;i>=0;i--)r._howls[i].stereo(n);return r},HowlerGlobal.prototype.pos=function(n,r,i){var s=this;if(!s.ctx||!s.ctx.listener)return s;if(r=typeof r!="number"?s._pos[1]:r,i=typeof i!="number"?s._pos[2]:i,typeof n=="number")s._pos=[n,r,i],typeof s.ctx.listener.positionX<"u"?(s.ctx.listener.positionX.setTargetAtTime(s._pos[0],Howler.ctx.currentTime,.1),s.ctx.listener.positionY.setTargetAtTime(s._pos[1],Howler.ctx.currentTime,.1),s.ctx.listener.positionZ.setTargetAtTime(s._pos[2],Howler.ctx.currentTime,.1)):s.ctx.listener.setPosition(s._pos[0],s._pos[1],s._pos[2]);else return s._pos;return s},HowlerGlobal.prototype.orientation=function(n,r,i,s,o,a){var l=this;if(!l.ctx||!l.ctx.listener)return l;var u=l._orientation;if(r=typeof r!="number"?u[1]:r,i=typeof i!="number"?u[2]:i,s=typeof s!="number"?u[3]:s,o=typeof o!="number"?u[4]:o,a=typeof a!="number"?u[5]:a,typeof n=="number")l._orientation=[n,r,i,s,o,a],typeof l.ctx.listener.forwardX<"u"?(l.ctx.listener.forwardX.setTargetAtTime(n,Howler.ctx.currentTime,.1),l.ctx.listener.forwardY.setTargetAtTime(r,Howler.ctx.currentTime,.1),l.ctx.listener.forwardZ.setTargetAtTime(i,Howler.ctx.currentTime,.1),l.ctx.listener.upX.setTargetAtTime(s,Howler.ctx.currentTime,.1),l.ctx.listener.upY.setTargetAtTime(o,Howler.ctx.currentTime,.1),l.ctx.listener.upZ.setTargetAtTime(a,Howler.ctx.currentTime,.1)):l.ctx.listener.setOrientation(n,r,i,s,o,a);else return u;return l},Howl.prototype.init=function(n){return function(r){var i=this;return i._orientation=r.orientation||[1,0,0],i._stereo=r.stereo||null,i._pos=r.pos||null,i._pannerAttr={coneInnerAngle:typeof r.coneInnerAngle<"u"?r.coneInnerAngle:360,coneOuterAngle:typeof r.coneOuterAngle<"u"?r.coneOuterAngle:360,coneOuterGain:typeof r.coneOuterGain<"u"?r.coneOuterGain:0,distanceModel:typeof r.distanceModel<"u"?r.distanceModel:"inverse",maxDistance:typeof r.maxDistance<"u"?r.maxDistance:1e4,panningModel:typeof r.panningModel<"u"?r.panningModel:"HRTF",refDistance:typeof r.refDistance<"u"?r.refDistance:1,rolloffFactor:typeof r.rolloffFactor<"u"?r.rolloffFactor:1},i._onstereo=r.onstereo?[{fn:r.onstereo}]:[],i._onpos=r.onpos?[{fn:r.onpos}]:[],i._onorientation=r.onorientation?[{fn:r.onorientation}]:[],n.call(this,r)}}(Howl.prototype.init),Howl.prototype.stereo=function(n,r){var i=this;if(!i._webAudio)return i;if(i._state!=="loaded")return i._queue.push({event:"stereo",action:function(){i.stereo(n,r)}}),i;var s=typeof Howler.ctx.createStereoPanner>"u"?"spatial":"stereo";if(typeof r>"u")if(typeof n=="number")i._stereo=n,i._pos=[n,0,0];else return i._stereo;for(var o=i._getSoundIds(r),a=0;a<o.length;a++){var l=i._soundById(o[a]);if(l)if(typeof n=="number")l._stereo=n,l._pos=[n,0,0],l._node&&(l._pannerAttr.panningModel="equalpower",(!l._panner||!l._panner.pan)&&e(l,s),s==="spatial"?typeof l._panner.positionX<"u"?(l._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),l._panner.positionY.setValueAtTime(0,Howler.ctx.currentTime),l._panner.positionZ.setValueAtTime(0,Howler.ctx.currentTime)):l._panner.setPosition(n,0,0):l._panner.pan.setValueAtTime(n,Howler.ctx.currentTime)),i._emit("stereo",l._id);else return l._stereo}return i},Howl.prototype.pos=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"pos",action:function(){o.pos(n,r,i,s)}}),o;if(r=typeof r!="number"?0:r,i=typeof i!="number"?-.5:i,typeof s>"u")if(typeof n=="number")o._pos=[n,r,i];else return o._pos;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof n=="number")u._pos=[n,r,i],u._node&&((!u._panner||u._panner.pan)&&e(u,"spatial"),typeof u._panner.positionX<"u"?(u._panner.positionX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.positionY.setValueAtTime(r,Howler.ctx.currentTime),u._panner.positionZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setPosition(n,r,i)),o._emit("pos",u._id);else return u._pos}return o},Howl.prototype.orientation=function(n,r,i,s){var o=this;if(!o._webAudio)return o;if(o._state!=="loaded")return o._queue.push({event:"orientation",action:function(){o.orientation(n,r,i,s)}}),o;if(r=typeof r!="number"?o._orientation[1]:r,i=typeof i!="number"?o._orientation[2]:i,typeof s>"u")if(typeof n=="number")o._orientation=[n,r,i];else return o._orientation;for(var a=o._getSoundIds(s),l=0;l<a.length;l++){var u=o._soundById(a[l]);if(u)if(typeof n=="number")u._orientation=[n,r,i],u._node&&(u._panner||(u._pos||(u._pos=o._pos||[0,0,-.5]),e(u,"spatial")),typeof u._panner.orientationX<"u"?(u._panner.orientationX.setValueAtTime(n,Howler.ctx.currentTime),u._panner.orientationY.setValueAtTime(r,Howler.ctx.currentTime),u._panner.orientationZ.setValueAtTime(i,Howler.ctx.currentTime)):u._panner.setOrientation(n,r,i)),o._emit("orientation",u._id);else return u._orientation}return o},Howl.prototype.pannerAttr=function(){var n=this,r=arguments,i,s,o;if(!n._webAudio)return n;if(r.length===0)return n._pannerAttr;if(r.length===1)if(typeof r[0]=="object")i=r[0],typeof s>"u"&&(i.pannerAttr||(i.pannerAttr={coneInnerAngle:i.coneInnerAngle,coneOuterAngle:i.coneOuterAngle,coneOuterGain:i.coneOuterGain,distanceModel:i.distanceModel,maxDistance:i.maxDistance,refDistance:i.refDistance,rolloffFactor:i.rolloffFactor,panningModel:i.panningModel}),n._pannerAttr={coneInnerAngle:typeof i.pannerAttr.coneInnerAngle<"u"?i.pannerAttr.coneInnerAngle:n._coneInnerAngle,coneOuterAngle:typeof i.pannerAttr.coneOuterAngle<"u"?i.pannerAttr.coneOuterAngle:n._coneOuterAngle,coneOuterGain:typeof i.pannerAttr.coneOuterGain<"u"?i.pannerAttr.coneOuterGain:n._coneOuterGain,distanceModel:typeof i.pannerAttr.distanceModel<"u"?i.pannerAttr.distanceModel:n._distanceModel,maxDistance:typeof i.pannerAttr.maxDistance<"u"?i.pannerAttr.maxDistance:n._maxDistance,refDistance:typeof i.pannerAttr.refDistance<"u"?i.pannerAttr.refDistance:n._refDistance,rolloffFactor:typeof i.pannerAttr.rolloffFactor<"u"?i.pannerAttr.rolloffFactor:n._rolloffFactor,panningModel:typeof i.pannerAttr.panningModel<"u"?i.pannerAttr.panningModel:n._panningModel});else return o=n._soundById(parseInt(r[0],10)),o?o._pannerAttr:n._pannerAttr;else r.length===2&&(i=r[0],s=parseInt(r[1],10));for(var a=n._getSoundIds(s),l=0;l<a.length;l++)if(o=n._soundById(a[l]),o){var u=o._pannerAttr;u={coneInnerAngle:typeof i.coneInnerAngle<"u"?i.coneInnerAngle:u.coneInnerAngle,coneOuterAngle:typeof i.coneOuterAngle<"u"?i.coneOuterAngle:u.coneOuterAngle,coneOuterGain:typeof i.coneOuterGain<"u"?i.coneOuterGain:u.coneOuterGain,distanceModel:typeof i.distanceModel<"u"?i.distanceModel:u.distanceModel,maxDistance:typeof i.maxDistance<"u"?i.maxDistance:u.maxDistance,refDistance:typeof i.refDistance<"u"?i.refDistance:u.refDistance,rolloffFactor:typeof i.rolloffFactor<"u"?i.rolloffFactor:u.rolloffFactor,panningModel:typeof i.panningModel<"u"?i.panningModel:u.panningModel};var h=o._panner;h||(o._pos||(o._pos=n._pos||[0,0,-.5]),e(o,"spatial"),h=o._panner),h.coneInnerAngle=u.coneInnerAngle,h.coneOuterAngle=u.coneOuterAngle,h.coneOuterGain=u.coneOuterGain,h.distanceModel=u.distanceModel,h.maxDistance=u.maxDistance,h.refDistance=u.refDistance,h.rolloffFactor=u.rolloffFactor,h.panningModel=u.panningModel}return n},Sound.prototype.init=function(n){return function(){var r=this,i=r._parent;r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,n.call(this),r._stereo?i.stereo(r._stereo):r._pos&&i.pos(r._pos[0],r._pos[1],r._pos[2],r._id)}}(Sound.prototype.init),Sound.prototype.reset=function(n){return function(){var r=this,i=r._parent;return r._orientation=i._orientation,r._stereo=i._stereo,r._pos=i._pos,r._pannerAttr=i._pannerAttr,r._stereo?i.stereo(r._stereo):r._pos?i.pos(r._pos[0],r._pos[1],r._pos[2],r._id):r._panner&&(r._panner.disconnect(0),r._panner=void 0,i._refreshBuffer(r)),n.call(this)}}(Sound.prototype.reset);var e=function(n,r){r=r||"spatial",r==="spatial"?(n._panner=Howler.ctx.createPanner(),n._panner.coneInnerAngle=n._pannerAttr.coneInnerAngle,n._panner.coneOuterAngle=n._pannerAttr.coneOuterAngle,n._panner.coneOuterGain=n._pannerAttr.coneOuterGain,n._panner.distanceModel=n._pannerAttr.distanceModel,n._panner.maxDistance=n._pannerAttr.maxDistance,n._panner.refDistance=n._pannerAttr.refDistance,n._panner.rolloffFactor=n._pannerAttr.rolloffFactor,n._panner.panningModel=n._pannerAttr.panningModel,typeof n._panner.positionX<"u"?(n._panner.positionX.setValueAtTime(n._pos[0],Howler.ctx.currentTime),n._panner.positionY.setValueAtTime(n._pos[1],Howler.ctx.currentTime),n._panner.positionZ.setValueAtTime(n._pos[2],Howler.ctx.currentTime)):n._panner.setPosition(n._pos[0],n._pos[1],n._pos[2]),typeof n._panner.orientationX<"u"?(n._panner.orientationX.setValueAtTime(n._orientation[0],Howler.ctx.currentTime),n._panner.orientationY.setValueAtTime(n._orientation[1],Howler.ctx.currentTime),n._panner.orientationZ.setValueAtTime(n._orientation[2],Howler.ctx.currentTime)):n._panner.setOrientation(n._orientation[0],n._orientation[1],n._orientation[2])):(n._panner=Howler.ctx.createStereoPanner(),n._panner.pan.setValueAtTime(n._stereo,Howler.ctx.currentTime)),n._panner.connect(n._node),n._paused||n._parent.pause(n._id,!0).play(n._id,!0)}})()})(Um);const GI={formatTime(t){const e=Math.floor(t/60)||0,n=Math.round(t-e*60||0);return`${e}:${n<10?"0":""}${n}`}},KI=Dp("player",{state:()=>({current_song:{},sound:{},seek:"00:00",duration:"00:00",playerProgress:"0%"}),actions:{async newSong(t){this.sound instanceof Um.Howl&&this.sound.unload(),this.current_song=t,this.sound=new Um.Howl({src:[t.url],html5:!0}),this.sound.play(),this.sound.on("play",()=>{requestAnimationFrame(this.progress)})},async toggleAudio(){this.sound.playing&&(this.sound.playing()?this.sound.pause():this.sound.play())},progress(){this.seek=GI.formatTime(this.sound.seek()),this.duration=GI.formatTime(this.sound.duration()),this.playerProgress=`${this.sound.seek()/this.sound.duration()*100}%`,this.sound.playing()&&requestAnimationFrame(this.progress)},updateSeek(t){if(!this.sound.playing)return;const{x:e,width:n}=t.currentTarget.getBoundingClientRect(),i=(t.clientX-e)/n,s=this.sound.duration()*i;this.sound.seek(s),this.sound.once("seek",this.progress)}},getters:{playing:t=>t.sound.playing?t.sound.playing():!1}}),dq={name:"Player",methods:{...Lp(KI,["toggleAudio","updateSeek"])},computed:{...gw(KI,["playing","duration","seek","playerProgress","current_song"])}},hq={class:"fixed bottom-0 left-0 bg-white px-4 py-2 w-full"},fq={key:0,class:"text-center"},mq={class:"song-title font-bold"},pq=le("span",{class:"song-artist"},"current_song.display_name",-1),_q={class:"flex flex-nowrap gap-4 items-center"},gq={class:"player-currenttime"},yq=le("i",{class:"fas fa-circle"},null,-1),vq=[yq],Iq={class:"player-duration"};function Eq(t,e,n,r,i,s){return Ft(),Rn("div",hq,[t.current_song.modified_name?(Ft(),Rn("div",fq,[le("span",mq,wi(t.current_song.modified_name),1),nl(" by "),pq])):kp("",!0),le("div",_q,[le("button",{type:"button",onClick:e[0]||(e[0]=Ps((...o)=>t.toggleAudio&&t.toggleAudio(...o),["prevent"]))},[le("i",{class:Fr(["fa text-gray-500 text-xl",{"fa-play":!t.playing,"fa-pause":t.playing}])},null,2)]),le("div",gq,wi(t.seek),1),le("div",{onClick:e[1]||(e[1]=Ps((...o)=>t.updateSeek&&t.updateSeek(...o),["prevent"])),class:"w-full h-2 rounded bg-gray-200 relative cursor-pointer"},[le("span",{class:"absolute -top-2.5 -ml-2.5 text-gray-800 text-lg",style:El({left:t.playerProgress})},vq,4),le("span",{class:"block h-2 rounded bg-gradient-to-r from-green-500 to-green-400",style:El({width:t.playerProgress})},null,4)]),le("div",Iq,wi(t.duration),1)])])}const Tq=ro(dq,[["render",Eq]]);const wq={name:"App",components:{Auth:tq,Header:uq,AppPlayer:Tq},computed:{...yw(Lc,["userLoggedIn"])},created(){pl.currentUser&&(this.userLoggedIn=!0)}};function bq(t,e,n,r,i,s){const o=An("Header"),a=An("router-view"),l=An("app-player"),u=An("auth");return Ft(),Rn(Gt,null,[Se(o),Se(a,null,{default:Qn(({Component:h})=>[Se(xp,{class:"fade",mode:"out-in"},{default:Qn(()=>[(Ft(),ku(wd(h)))]),_:2},1024)]),_:1}),Se(l),Se(u)],64)}const Aq=ro(wq,[["render",bq]]),Rq="modulepreload",Sq=function(t){return"/"+t},zI={},Vc=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Sq(s),s in zI)return;zI[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const c=i[h];if(c.href===s&&(!o||c.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Rq,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((h,c)=>{u.addEventListener("load",h),u.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const po=typeof window<"u";function Pq(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const He=Object.assign;function vf(t,e){const n={};for(const r in e){const i=e[r];n[r]=rr(i)?i.map(t):t(i)}return n}const _l=()=>{},rr=Array.isArray,Cq=/\/$/,kq=t=>t.replace(Cq,"");function If(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Dq(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Oq(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function QI(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Nq(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Jo(e.matched[r],n.matched[i])&&bS(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Jo(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bS(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xq(t[n],e[n]))return!1;return!0}function xq(t,e){return rr(t)?YI(t,e):rr(e)?YI(e,t):t===e}function YI(t,e){return rr(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Dq(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var nc;(function(t){t.pop="pop",t.push="push"})(nc||(nc={}));var gl;(function(t){t.back="back",t.forward="forward",t.unknown=""})(gl||(gl={}));function Lq(t){if(!t)if(po){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kq(t)}const Vq=/^[^#]+#/;function Mq(t,e){return t.replace(Vq,"#")+e}function Fq(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ph=()=>({left:window.pageXOffset,top:window.pageYOffset});function Uq(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=Fq(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function XI(t,e){return(history.state?history.state.position-e:-1)+t}const $m=new Map;function $q(t,e){$m.set(t,e)}function Bq(t){const e=$m.get(t);return $m.delete(t),e}let jq=()=>location.protocol+"//"+location.host;function AS(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let a=i.includes(t.slice(s))?t.slice(s).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),QI(l,"")}return QI(n,t)+r+i}function qq(t,e,n,r){let i=[],s=[],o=null;const a=({state:d})=>{const f=AS(t,location),m=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===m){o=null;return}v=y?d.position-y.position:0}else r(f);i.forEach(p=>{p(n.value,m,{delta:v,type:nc.pop,direction:v?v>0?gl.forward:gl.back:gl.unknown})})};function l(){o=n.value}function u(d){i.push(d);const f=()=>{const m=i.indexOf(d);m>-1&&i.splice(m,1)};return s.push(f),f}function h(){const{history:d}=window;d.state&&d.replaceState(He({},d.state,{scroll:Ph()}),"")}function c(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:c}}function JI(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Ph():null}}function Wq(t){const{history:e,location:n}=window,r={value:AS(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,h){const c=t.indexOf("#"),d=c>-1?(n.host&&document.querySelector("base")?t:t.slice(c))+l:jq()+t+l;try{e[h?"replaceState":"pushState"](u,"",d),i.value=u}catch(f){console.error(f),n[h?"replace":"assign"](d)}}function o(l,u){const h=He({},e.state,JI(i.value.back,l,i.value.forward,!0),u,{position:i.value.position});s(l,h,!0),r.value=l}function a(l,u){const h=He({},i.value,e.state,{forward:l,scroll:Ph()});s(h.current,h,!0);const c=He({},JI(r.value,l,null),{position:h.position+1},u);s(l,c,!1),r.value=l}return{location:r,state:i,push:a,replace:o}}function Hq(t){t=Lq(t);const e=Wq(t),n=qq(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=He({location:"",base:t,go:r,createHref:Mq.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function Gq(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Hq(t)}function Kq(t){return typeof t=="string"||t&&typeof t=="object"}function RS(t){return typeof t=="string"||typeof t=="symbol"}const ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},SS=Symbol("");var ZI;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ZI||(ZI={}));function Zo(t,e){return He(new Error,{type:t,[SS]:!0},e)}function Cr(t,e){return t instanceof Error&&SS in t&&(e==null||!!(t.type&e))}const eE="[^/]+?",zq={sensitive:!1,strict:!1,start:!0,end:!0},Qq=/[.+*?^${}()[\]/\\]/g;function Yq(t,e){const n=He({},zq,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let c=0;c<u.length;c++){const d=u[c];let f=40+(n.sensitive?.25:0);if(d.type===0)c||(i+="/"),i+=d.value.replace(Qq,"\\$&"),f+=40;else if(d.type===1){const{value:m,repeatable:y,optional:v,regexp:p}=d;s.push({name:m,repeatable:y,optional:v});const I=p||eE;if(I!==eE){f+=10;try{new RegExp(`(${I})`)}catch(E){throw new Error(`Invalid custom RegExp for param "${m}" (${I}): `+E.message)}}let b=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;c||(b=v&&u.length<2?`(?:/${b})`:"/"+b),v&&(b+="?"),i+=b,f+=20,v&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}h.push(f)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(u){const h=u.match(o),c={};if(!h)return null;for(let d=1;d<h.length;d++){const f=h[d]||"",m=s[d-1];c[m.name]=f&&m.repeatable?f.split("/"):f}return c}function l(u){let h="",c=!1;for(const d of t){(!c||!h.endsWith("/"))&&(h+="/"),c=!1;for(const f of d)if(f.type===0)h+=f.value;else if(f.type===1){const{value:m,repeatable:y,optional:v}=f,p=m in u?u[m]:"";if(rr(p)&&!y)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const I=rr(p)?p.join("/"):p;if(!I)if(v)d.length<2&&(h.endsWith("/")?h=h.slice(0,-1):c=!0);else throw new Error(`Missing required param "${m}"`);h+=I}}return h||"/"}return{re:o,score:r,keys:s,parse:a,stringify:l}}function Xq(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Jq(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=Xq(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(tE(r))return 1;if(tE(i))return-1}return i.length-r.length}function tE(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zq={type:0,value:""},e4=/[a-zA-Z0-9_]/;function t4(t){if(!t)return[[]];if(t==="/")return[[Zq]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a=0,l,u="",h="";function c(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(u&&c(),o()):l===":"?(c(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:e4.test(l)?d():(c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:c(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),c(),o(),i}function n4(t,e,n){const r=Yq(t4(t.path),n),i=He(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function r4(t,e){const n=[],r=new Map;e=iE({strict:!1,end:!0,sensitive:!1},e);function i(h){return r.get(h)}function s(h,c,d){const f=!d,m=i4(h);m.aliasOf=d&&d.record;const y=iE(e,h),v=[m];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const E of b)v.push(He({},m,{components:d?d.record.components:m.components,path:E,aliasOf:d?d.record:m}))}let p,I;for(const b of v){const{path:E}=b;if(c&&E[0]!=="/"){const P=c.record.path,k=P[P.length-1]==="/"?"":"/";b.path=c.record.path+(E&&k+E)}if(p=n4(b,c,y),d?d.alias.push(p):(I=I||p,I!==p&&I.alias.push(p),f&&h.name&&!rE(p)&&o(h.name)),m.children){const P=m.children;for(let k=0;k<P.length;k++)s(P[k],p,d&&d.children[k])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return I?()=>{o(I)}:_l}function o(h){if(RS(h)){const c=r.get(h);c&&(r.delete(h),n.splice(n.indexOf(c),1),c.children.forEach(o),c.alias.forEach(o))}else{const c=n.indexOf(h);c>-1&&(n.splice(c,1),h.record.name&&r.delete(h.record.name),h.children.forEach(o),h.alias.forEach(o))}}function a(){return n}function l(h){let c=0;for(;c<n.length&&Jq(h,n[c])>=0&&(h.record.path!==n[c].record.path||!PS(h,n[c]));)c++;n.splice(c,0,h),h.record.name&&!rE(h)&&r.set(h.record.name,h)}function u(h,c){let d,f={},m,y;if("name"in h&&h.name){if(d=r.get(h.name),!d)throw Zo(1,{location:h});y=d.record.name,f=He(nE(c.params,d.keys.filter(I=>!I.optional).map(I=>I.name)),h.params&&nE(h.params,d.keys.map(I=>I.name))),m=d.stringify(f)}else if("path"in h)m=h.path,d=n.find(I=>I.re.test(m)),d&&(f=d.parse(m),y=d.record.name);else{if(d=c.name?r.get(c.name):n.find(I=>I.re.test(c.path)),!d)throw Zo(1,{location:h,currentLocation:c});y=d.record.name,f=He({},c.params,h.params),m=d.stringify(f)}const v=[];let p=d;for(;p;)v.unshift(p.record),p=p.parent;return{name:y,path:m,params:f,matched:v,meta:o4(v)}}return t.forEach(h=>s(h)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function nE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function i4(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:s4(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function s4(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function rE(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function o4(t){return t.reduce((e,n)=>He(e,n.meta),{})}function iE(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function PS(t,e){return e.children.some(n=>n===t||PS(t,n))}const CS=/#/g,a4=/&/g,l4=/\//g,c4=/=/g,u4=/\?/g,kS=/\+/g,d4=/%5B/g,h4=/%5D/g,OS=/%5E/g,f4=/%60/g,NS=/%7B/g,m4=/%7C/g,xS=/%7D/g,p4=/%20/g;function Mg(t){return encodeURI(""+t).replace(m4,"|").replace(d4,"[").replace(h4,"]")}function _4(t){return Mg(t).replace(NS,"{").replace(xS,"}").replace(OS,"^")}function Bm(t){return Mg(t).replace(kS,"%2B").replace(p4,"+").replace(CS,"%23").replace(a4,"%26").replace(f4,"`").replace(NS,"{").replace(xS,"}").replace(OS,"^")}function g4(t){return Bm(t).replace(c4,"%3D")}function y4(t){return Mg(t).replace(CS,"%23").replace(u4,"%3F")}function v4(t){return t==null?"":y4(t).replace(l4,"%2F")}function ad(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function I4(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(kS," "),o=s.indexOf("="),a=ad(o<0?s:s.slice(0,o)),l=o<0?null:ad(s.slice(o+1));if(a in e){let u=e[a];rr(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function sE(t){let e="";for(let n in t){const r=t[n];if(n=g4(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(rr(r)?r.map(s=>s&&Bm(s)):[r&&Bm(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function E4(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=rr(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const T4=Symbol(""),oE=Symbol(""),Fg=Symbol(""),DS=Symbol(""),jm=Symbol("");function Fa(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pi(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=c=>{c===!1?a(Zo(4,{from:n,to:e})):c instanceof Error?a(c):Kq(c)?a(Zo(2,{from:e,to:c})):(s&&r.enterCallbacks[i]===s&&typeof c=="function"&&s.push(c),o())},u=t.call(r&&r.instances[i],e,n,l);let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(c=>a(c))})}function Ef(t,e,n,r){const i=[];for(const s of t)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(w4(a)){const u=(a.__vccOpts||a)[e];u&&i.push(pi(u,n,r,s,o))}else{let l=a();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const h=Pq(u)?u.default:u;s.components[o]=h;const d=(h.__vccOpts||h)[e];return d&&pi(d,n,r,s,o)()}))}}return i}function w4(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function aE(t){const e=Ln(Fg),n=Ln(DS),r=ve(()=>e.resolve(Ve(t.to))),i=ve(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],c=n.matched;if(!h||!c.length)return-1;const d=c.findIndex(Jo.bind(null,h));if(d>-1)return d;const f=lE(l[u-2]);return u>1&&lE(h)===f&&c[c.length-1].path!==f?c.findIndex(Jo.bind(null,l[u-2])):d}),s=ve(()=>i.value>-1&&S4(n.params,r.value.params)),o=ve(()=>i.value>-1&&i.value===n.matched.length-1&&bS(n.params,r.value.params));function a(l={}){return R4(l)?e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(_l):Promise.resolve()}return{route:r,href:ve(()=>r.value.href),isActive:s,isExactActive:o,navigate:a}}const b4=Hi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:aE,setup(t,{slots:e}){const n=qr(aE(t)),{options:r}=Ln(Fg),i=ve(()=>({[cE(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cE(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wr("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),A4=b4;function R4(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function S4(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!rr(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function lE(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cE=(t,e,n)=>t??e??n,P4=Hi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Ln(jm),i=ve(()=>t.route||r.value),s=Ln(oE,0),o=ve(()=>{let u=Ve(s);const{matched:h}=i.value;let c;for(;(c=h[u])&&!c.components;)u++;return u}),a=ve(()=>i.value.matched[o.value]);bo(oE,ve(()=>o.value+1)),bo(T4,a),bo(jm,i);const l=nt();return sn(()=>[l.value,a.value,t.name],([u,h,c],[d,f,m])=>{h&&(h.instances[c]=u,f&&f!==h&&u&&u===d&&(h.leaveGuards.size||(h.leaveGuards=f.leaveGuards),h.updateGuards.size||(h.updateGuards=f.updateGuards))),u&&h&&(!f||!Jo(h,f)||!d)&&(h.enterCallbacks[c]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=i.value,h=t.name,c=a.value,d=c&&c.components[h];if(!d)return uE(n.default,{Component:d,route:u});const f=c.props[h],m=f?f===!0?u.params:typeof f=="function"?f(u):f:null,v=Wr(d,He({},m,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(c.instances[h]=null)},ref:l}));return uE(n.default,{Component:v,route:u})||v}}});function uE(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const C4=P4;function k4(t){const e=r4(t.routes,t),n=t.parseQuery||I4,r=t.stringifyQuery||sE,i=t.history,s=Fa(),o=Fa(),a=Fa(),l=Ip(ui);let u=ui;po&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=vf.bind(null,D=>""+D),c=vf.bind(null,v4),d=vf.bind(null,ad);function f(D,q){let G,re;return RS(D)?(G=e.getRecordMatcher(D),re=q):re=D,e.addRoute(re,G)}function m(D){const q=e.getRecordMatcher(D);q&&e.removeRoute(q)}function y(){return e.getRoutes().map(D=>D.record)}function v(D){return!!e.getRecordMatcher(D)}function p(D,q){if(q=He({},q||l.value),typeof D=="string"){const g=If(n,D,q.path),T=e.resolve({path:g.path},q),S=i.createHref(g.fullPath);return He(g,T,{params:d(T.params),hash:ad(g.hash),redirectedFrom:void 0,href:S})}let G;if("path"in D)G=He({},D,{path:If(n,D.path,q.path).path});else{const g=He({},D.params);for(const T in g)g[T]==null&&delete g[T];G=He({},D,{params:c(g)}),q.params=c(q.params)}const re=e.resolve(G,q),ye=D.hash||"";re.params=h(d(re.params));const w=Oq(r,He({},D,{hash:_4(ye),path:re.path})),_=i.createHref(w);return He({fullPath:w,hash:ye,query:r===sE?E4(D.query):D.query||{}},re,{redirectedFrom:void 0,href:_})}function I(D){return typeof D=="string"?If(n,D,l.value.path):He({},D)}function b(D,q){if(u!==D)return Zo(8,{from:q,to:D})}function E(D){return O(D)}function P(D){return E(He(I(D),{replace:!0}))}function k(D){const q=D.matched[D.matched.length-1];if(q&&q.redirect){const{redirect:G}=q;let re=typeof G=="function"?G(D):G;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=I(re):{path:re},re.params={}),He({query:D.query,hash:D.hash,params:"path"in re?{}:D.params},re)}}function O(D,q){const G=u=p(D),re=l.value,ye=D.state,w=D.force,_=D.replace===!0,g=k(G);if(g)return O(He(I(g),{state:typeof g=="object"?He({},ye,g.state):ye,force:w,replace:_}),q||G);const T=G;T.redirectedFrom=q;let S;return!w&&Nq(r,re,G)&&(S=Zo(16,{to:T,from:re}),Et(re,re,!0,!1)),(S?Promise.resolve(S):X(T,re)).catch(x=>Cr(x)?Cr(x,2)?x:ut(x):ge(x,T,re)).then(x=>{if(x){if(Cr(x,2))return O(He({replace:_},I(x.to),{state:typeof x.to=="object"?He({},ye,x.to.state):ye,force:w}),q||T)}else x=K(T,re,!0,_,ye);return pe(T,re,x),x})}function V(D,q){const G=b(D,q);return G?Promise.reject(G):Promise.resolve()}function F(D){const q=Wt.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(D):D()}function X(D,q){let G;const[re,ye,w]=O4(D,q);G=Ef(re.reverse(),"beforeRouteLeave",D,q);for(const g of re)g.leaveGuards.forEach(T=>{G.push(pi(T,D,q))});const _=V.bind(null,D,q);return G.push(_),ce(G).then(()=>{G=[];for(const g of s.list())G.push(pi(g,D,q));return G.push(_),ce(G)}).then(()=>{G=Ef(ye,"beforeRouteUpdate",D,q);for(const g of ye)g.updateGuards.forEach(T=>{G.push(pi(T,D,q))});return G.push(_),ce(G)}).then(()=>{G=[];for(const g of w)if(g.beforeEnter)if(rr(g.beforeEnter))for(const T of g.beforeEnter)G.push(pi(T,D,q));else G.push(pi(g.beforeEnter,D,q));return G.push(_),ce(G)}).then(()=>(D.matched.forEach(g=>g.enterCallbacks={}),G=Ef(w,"beforeRouteEnter",D,q),G.push(_),ce(G))).then(()=>{G=[];for(const g of o.list())G.push(pi(g,D,q));return G.push(_),ce(G)}).catch(g=>Cr(g,8)?g:Promise.reject(g))}function pe(D,q,G){a.list().forEach(re=>F(()=>re(D,q,G)))}function K(D,q,G,re,ye){const w=b(D,q);if(w)return w;const _=q===ui,g=po?history.state:{};G&&(re||_?i.replace(D.fullPath,He({scroll:_&&g&&g.scroll},ye)):i.push(D.fullPath,ye)),l.value=D,Et(D,q,G,_),ut()}let ue;function Te(){ue||(ue=i.listen((D,q,G)=>{if(!oe.listening)return;const re=p(D),ye=k(re);if(ye){O(He(ye,{replace:!0}),re).catch(_l);return}u=re;const w=l.value;po&&$q(XI(w.fullPath,G.delta),Ph()),X(re,w).catch(_=>Cr(_,12)?_:Cr(_,2)?(O(_.to,re).then(g=>{Cr(g,20)&&!G.delta&&G.type===nc.pop&&i.go(-1,!1)}).catch(_l),Promise.reject()):(G.delta&&i.go(-G.delta,!1),ge(_,re,w))).then(_=>{_=_||K(re,w,!1),_&&(G.delta&&!Cr(_,8)?i.go(-G.delta,!1):G.type===nc.pop&&Cr(_,20)&&i.go(-1,!1)),pe(re,w,_)}).catch(_l)}))}let Ne=Fa(),te=Fa(),Ee;function ge(D,q,G){ut(D);const re=te.list();return re.length?re.forEach(ye=>ye(D,q,G)):console.error(D),Promise.reject(D)}function Fe(){return Ee&&l.value!==ui?Promise.resolve():new Promise((D,q)=>{Ne.add([D,q])})}function ut(D){return Ee||(Ee=!D,Te(),Ne.list().forEach(([q,G])=>D?G(D):q()),Ne.reset()),D}function Et(D,q,G,re){const{scrollBehavior:ye}=t;if(!po||!ye)return Promise.resolve();const w=!G&&Bq(XI(D.fullPath,0))||(re||!G)&&history.state&&history.state.scroll||null;return Nr().then(()=>ye(D,q,w)).then(_=>_&&Uq(_)).catch(_=>ge(_,D,q))}const dt=D=>i.go(D);let Qe;const Wt=new Set,oe={currentRoute:l,listening:!0,addRoute:f,removeRoute:m,hasRoute:v,getRoutes:y,resolve:p,options:t,push:E,replace:P,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:Fe,install(D){const q=this;D.component("RouterLink",A4),D.component("RouterView",C4),D.config.globalProperties.$router=q,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(l)}),po&&!Qe&&l.value===ui&&(Qe=!0,E(i.location).catch(ye=>{}));const G={};for(const ye in ui)Object.defineProperty(G,ye,{get:()=>l.value[ye],enumerable:!0});D.provide(Fg,q),D.provide(DS,NT(G)),D.provide(jm,l);const re=D.unmount;Wt.add(D),D.unmount=function(){Wt.delete(D),Wt.size<1&&(u=ui,ue&&ue(),ue=null,l.value=ui,Qe=!1,Ee=!1),re()}}};function ce(D){return D.reduce((q,G)=>q.then(()=>F(G)),Promise.resolve())}return oe}function O4(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>Jo(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>Jo(u,l))||i.push(l))}return[n,r,i]}const N4=()=>Vc(()=>import("./Home-5023c244.js"),[]),x4=()=>Vc(()=>import("./About-ed1305a4.js"),[]),D4=()=>Vc(()=>import("./Manage-2b731a37.js"),[]),L4=()=>Vc(()=>import("./Song-5a37401e.js"),[]),V4=[{name:"home",path:"/",component:N4},{name:"about",path:"/about",component:x4},{name:"manage",path:"/manage-music",component:D4,beforeEnter:(t,e,n)=>{console.log("Manage Route Guard"),n()},meta:{requiresAuth:!0}},{path:"/manage",redirect:{name:"manage"}},{name:"song",path:"/song/:id",component:L4},{path:"/:catchAll(.*)*",redirect:{name:"home"}}],Ug=k4({history:Gq("/"),routes:V4,linkExactActiveClass:"text-yellow-500"});Ug.beforeEach((t,e,n)=>{if(!t.meta.requiresAuth){n();return}Lc().userLoggedIn?n():n({name:"home"})});/**
  * vee-validate v4.11.3
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */function Qt(t){return typeof t=="function"}function LS(t){return t==null}const zs=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function $g(t){return Number(t)>=0}function M4(t){const e=parseFloat(t);return isNaN(e)?t:e}function F4(t){return typeof t=="object"&&t!==null}function U4(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function $4(t){if(!F4(t)||U4(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function ld(t,e){return Object.keys(e).forEach(n=>{if($4(e[n])){t[n]||(t[n]={}),ld(t[n],e[n]);return}t[n]=e[n]}),t}function Za(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if($g(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const VS={};function Kn(t,e){j4(t,e),VS[t]=e}function B4(t){return VS[t]}function j4(t,e){if(!Qt(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}const Ch=Symbol("vee-validate-form"),q4=Symbol("vee-validate-field-instance"),cd=Symbol("Default empty value"),W4=typeof window<"u";function qm(t){return Qt(t)&&!!t.__locatorRef}function qi(t){return!!t&&Qt(t.parse)&&t.__type==="VVTypedSchema"}function ud(t){return!!t&&Qt(t.validate)}function Mc(t){return t==="checkbox"||t==="radio"}function H4(t){return zs(t)||Array.isArray(t)}function G4(t){return Array.isArray(t)?t.length===0:zs(t)&&Object.keys(t).length===0}function kh(t){return/^\[.+\]$/i.test(t)}function K4(t){return MS(t)&&t.multiple}function MS(t){return t.tagName==="SELECT"}function z4(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function Q4(t,e){return!z4(t,e)&&e.type!=="file"&&!Mc(e.type)}function FS(t){return Bg(t)&&t.target&&"submit"in t.target}function Bg(t){return t?!!(typeof Event<"u"&&Qt(Event)&&t instanceof Event||t&&t.srcElement):!1}function dE(t,e){return e in t&&t[e]!==cd}function gn(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,i;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!gn(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!gn(r[1],e.get(r[0])))return!1;return!0}if(hE(t)&&hE(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(i=Object.keys(t),n=i.length,r=n;r--!==0;){var s=i[r];if(!gn(t[s],e[s]))return!1}return!0}return t!==t&&e!==e}function hE(t){return W4?t instanceof File:!1}function fE(t,e,n){typeof n.value=="object"&&(n.value=tt(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function tt(t){if(typeof t!="object")return t;var e=0,n,r,i,s=Object.prototype.toString.call(t);if(s==="[object Object]"?i=Object.create(t.__proto__||null):s==="[object Array]"?i=Array(t.length):s==="[object Set]"?(i=new Set,t.forEach(function(o){i.add(tt(o))})):s==="[object Map]"?(i=new Map,t.forEach(function(o,a){i.set(tt(a),tt(o))})):s==="[object Date]"?i=new Date(+t):s==="[object RegExp]"?i=new RegExp(t.source,t.flags):s==="[object DataView]"?i=new t.constructor(tt(t.buffer)):s==="[object ArrayBuffer]"?i=t.slice(0):s.slice(-6)==="Array]"&&(i=new t.constructor(t)),i){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)fE(i,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(i,n=r[e])&&i[n]===t[n]||fE(i,n,Object.getOwnPropertyDescriptor(t,n))}return i||t}function jg(t){return kh(t)?t.replace(/\[|\]/gi,""):t}function wn(t,e,n){return t?kh(e)?t[jg(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((i,s)=>H4(i)&&s in i?i[s]:n,t):n}function us(t,e,n){if(kh(e)){t[jg(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let i=t;for(let s=0;s<r.length;s++){if(s===r.length-1){i[r[s]]=n;return}(!(r[s]in i)||LS(i[r[s]]))&&(i[r[s]]=$g(r[s+1])?[]:{}),i=i[r[s]]}}function Tf(t,e){if(Array.isArray(t)&&$g(e)){t.splice(Number(e),1);return}zs(t)&&delete t[e]}function mE(t,e){if(kh(e)){delete t[jg(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let s=0;s<n.length;s++){if(s===n.length-1){Tf(r,n[s]);break}if(!(n[s]in r)||LS(r[n[s]]))break;r=r[n[s]]}const i=n.map((s,o)=>wn(t,n.slice(0,o).join(".")));for(let s=i.length-1;s>=0;s--)if(G4(i[s])){if(s===0){Tf(t,n[0]);continue}Tf(i[s-1],n[s-1])}}function ar(t){return Object.keys(t)}function US(t,e=void 0){const n=br();return(n==null?void 0:n.provides[t])||Ln(t,e)}function pE(t,e,n){if(Array.isArray(t)){const r=[...t],i=r.findIndex(s=>gn(s,e));return i>=0?r.splice(i,1):r.push(e),r}return gn(t,e)?n:e}function _E(t,e=0){let n=null,r=[];return function(...i){return n&&clearTimeout(n),n=setTimeout(()=>{const s=t(...i);r.forEach(o=>o(s)),r=[]},e),new Promise(s=>r.push(s))}}function Y4(t,e){return zs(e)&&e.number?M4(t):t}function Wm(t,e){let n;return async function(...i){const s=t(...i);n=s;const o=await s;return s!==n||(n=void 0,e(o,i)),o}}function Hm(t){return Array.isArray(t)?t:t?[t]:[]}function Ua(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function X4(t){let e=null,n=[];return function(...r){const i=Nr(()=>{if(e!==i)return;const s=t(...r);n.forEach(o=>o(s)),n=[],e=null});return e=i,new Promise(s=>n.push(s))}}const qg=(t,e,n)=>e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,i;return(i=(r=e.slots).default)===null||i===void 0?void 0:i.call(r,n())}}:e.slots.default;function wf(t){if($S(t))return t._value}function $S(t){return"_value"in t}function J4(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function dd(t){if(!Bg(t))return t;const e=t.target;if(Mc(e.type)&&$S(e))return wf(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(K4(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(wf);if(MS(e)){const n=Array.from(e.options).find(r=>r.selected);return n?wf(n):e.value}return J4(e)}function BS(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?zs(t)&&t._$$isNormalized?t:zs(t)?Object.keys(t).reduce((n,r)=>{const i=Z4(t[r]);return t[r]!==!1&&(n[r]=gE(i)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const i=eW(r);return i.name&&(n[i.name]=gE(i.params)),n},e):e}function Z4(t){return t===!0?[]:Array.isArray(t)||zs(t)?t:[t]}function gE(t){const e=n=>typeof n=="string"&&n[0]==="@"?tW(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const eW=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function tW(t){const e=n=>wn(n,t)||n[t];return e.__locatorRef=t,e}function nW(t){return Array.isArray(t)?t.filter(qm):ar(t).filter(e=>qm(t[e])).map(e=>t[e])}const rW={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Gm=Object.assign({},rW);const vi=()=>Gm,iW=t=>{Gm=Object.assign(Object.assign({},Gm),t)},sW=iW;async function jS(t,e,n={}){const r=n==null?void 0:n.bails,i={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await oW(i,t)).errors;return{errors:o,valid:!o.length}}async function oW(t,e){if(qi(t.rules)||ud(t.rules))return lW(e,t.rules);if(Qt(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,u=[];for(let h=0;h<l;h++){const c=a[h],d=await c(e,o);if(!(typeof d!="string"&&!Array.isArray(d)&&d)){if(Array.isArray(d))u.push(...d);else{const m=typeof d=="string"?d:WS(o);u.push(m)}if(t.bails)return{errors:u}}}return{errors:u}}const n=Object.assign(Object.assign({},t),{rules:BS(t.rules)}),r=[],i=Object.keys(n.rules),s=i.length;for(let o=0;o<s;o++){const a=i[o],l=await cW(n,e,{name:a,params:n.rules[a]});if(l.error&&(r.push(l.error),t.bails))return{errors:r}}return{errors:r}}function aW(t){return!!t&&t.name==="ValidationError"}function qS(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(i){if(!aW(i))throw i;if(!(!((r=i.inner)===null||r===void 0)&&r.length)&&i.errors.length)return{errors:[{path:i.path,errors:i.errors}]};const s=i.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(s)}}}}}async function lW(t,e){const r=await(qi(e)?e:qS(e)).parse(t),i=[];for(const s of r.errors)s.errors.length&&i.push(...s.errors);return{errors:i}}async function cW(t,e,n){const r=B4(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const i=uW(n.params,t.formData),s={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:i})},o=await r(e,i,s);return typeof o=="string"?{error:o}:{error:o?void 0:WS(s)}}function WS(t){const e=vi().generateMessage;return e?e(t):"Field is invalid"}function uW(t,e){const n=r=>qm(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,i)=>(r[i]=n(t[i]),r),{})}async function dW(t,e){const r=await(qi(t)?t:qS(t)).parse(e),i={},s={};for(const o of r.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(u,h)=>`[${h}]`);i[l]={valid:!a.length,errors:a},a.length&&(s[l]=a[0])}return{valid:!r.errors.length,results:i,errors:s,values:r.value}}async function hW(t,e,n){const i=ar(t).map(async u=>{var h,c,d;const f=(h=n==null?void 0:n.names)===null||h===void 0?void 0:h[u],m=await jS(wn(e,u),t[u],{name:(f==null?void 0:f.name)||u,label:f==null?void 0:f.label,values:e,bails:(d=(c=n==null?void 0:n.bailsMap)===null||c===void 0?void 0:c[u])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},m),{path:u})});let s=!0;const o=await Promise.all(i),a={},l={};for(const u of o)a[u.path]={valid:u.valid,errors:u.errors},u.valid||(s=!1,l[u.path]=u.errors[0]);return{valid:s,results:a,errors:l}}let yE=0;function fW(t,e){const{value:n,initialValue:r,setInitialValue:i}=mW(t,e.modelValue,e.form);if(!e.form){let d=function(f){var m;"value"in f&&(n.value=f.value),"errors"in f&&u(f.errors),"touched"in f&&(c.touched=(m=f.touched)!==null&&m!==void 0?m:c.touched),"initialValue"in f&&i(f.initialValue)};const{errors:l,setErrors:u}=gW(),h=yE>=Number.MAX_SAFE_INTEGER?0:++yE,c=_W(n,r,l);return{id:h,path:t,value:n,initialValue:r,meta:c,flags:{pendingUnmount:{[h]:!1}},errors:l,setState:d}}const s=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate}),o=ve(()=>s.errors);function a(l){var u,h,c;"value"in l&&(n.value=l.value),"errors"in l&&((u=e.form)===null||u===void 0||u.setFieldError(Ve(t),l.errors)),"touched"in l&&((h=e.form)===null||h===void 0||h.setFieldTouched(Ve(t),(c=l.touched)!==null&&c!==void 0?c:!1)),"initialValue"in l&&i(l.initialValue)}return{id:Array.isArray(s.id)?s.id[s.id.length-1]:s.id,path:t,value:n,errors:o,meta:s,initialValue:r,flags:s.__flags,setState:a}}function mW(t,e,n){const r=nt(Ve(e));function i(){return n?wn(n.initialValues.value,Ve(t),Ve(r)):Ve(r)}function s(u){if(!n){r.value=u;return}n.stageInitialValue(Ve(t),u,!0)}const o=ve(i);if(!n)return{value:nt(i()),initialValue:o,setInitialValue:s};const a=pW(e,n,o,t);return n.stageInitialValue(Ve(t),a,!0),{value:ve({get(){return wn(n.values,Ve(t))},set(u){n.setFieldValue(Ve(t),u,!1)}}),initialValue:o,setInitialValue:s}}function pW(t,e,n,r){return Ye(t)?Ve(t):t!==void 0?t:wn(e.values,Ve(r),Ve(n))}function _W(t,e,n){const r=qr({touched:!1,pending:!1,valid:!0,validated:!!Ve(n).length,initialValue:ve(()=>Ve(e)),dirty:ve(()=>!gn(Ve(t),Ve(e)))});return sn(n,i=>{r.valid=!i.length},{immediate:!0,flush:"sync"}),r}function gW(){const t=nt([]);return{errors:t,setErrors:e=>{t.value=Hm(e)}}}function yW(t,e,n){return Mc(n==null?void 0:n.type)?IW(t,e,n):HS(t,e,n)}function HS(t,e,n){const{initialValue:r,validateOnMount:i,bails:s,type:o,checkedValue:a,label:l,validateOnValueUpdate:u,uncheckedValue:h,controlled:c,keepValueOnUnmount:d,syncVModel:f,form:m}=vW(n),y=c?US(Ch):void 0,v=m||y,p=ve(()=>Za(ht(t))),I=ve(()=>{if(ht(v==null?void 0:v.schema))return;const ce=Ve(e);return ud(ce)||qi(ce)||Qt(ce)||Array.isArray(ce)?ce:BS(ce)}),{id:b,value:E,initialValue:P,meta:k,setState:O,errors:V,flags:F}=fW(p,{modelValue:r,form:v,bails:s,label:l,type:o,validate:I.value?Ne:void 0}),X=ve(()=>V.value[0]);f&&EW({value:E,prop:f,handleChange:te});const pe=(oe,ce=!1)=>{k.touched=!0,ce&&ue()};async function K(oe){var ce,D;return v!=null&&v.validateSchema?(ce=(await v.validateSchema(oe)).results[ht(p)])!==null&&ce!==void 0?ce:{valid:!0,errors:[]}:I.value?jS(E.value,I.value,{name:ht(p),label:ht(l),values:(D=v==null?void 0:v.values)!==null&&D!==void 0?D:{},bails:s}):{valid:!0,errors:[]}}const ue=Wm(async()=>(k.pending=!0,k.validated=!0,K("validated-only")),oe=>{if(!F.pendingUnmount[Qe.id])return O({errors:oe.errors}),k.pending=!1,k.valid=oe.valid,oe}),Te=Wm(async()=>K("silent"),oe=>(k.valid=oe.valid,oe));function Ne(oe){return(oe==null?void 0:oe.mode)==="silent"?Te():ue()}function te(oe,ce=!0){const D=dd(oe);ut(D,ce)}ac(()=>{if(i)return ue();(!v||!v.validateSchema)&&Te()});function Ee(oe){k.touched=oe}function ge(oe){var ce;const D=oe&&"value"in oe?oe.value:P.value;O({value:tt(D),initialValue:tt(D),touched:(ce=oe==null?void 0:oe.touched)!==null&&ce!==void 0?ce:!1,errors:(oe==null?void 0:oe.errors)||[]}),k.pending=!1,k.validated=!1,Te()}const Fe=br();function ut(oe,ce=!0){E.value=Fe&&f?Y4(oe,Fe.props.modelModifiers):oe,(ce?ue:Te)()}function Et(oe){O({errors:Array.isArray(oe)?oe:[oe]})}const dt=ve({get(){return E.value},set(oe){ut(oe,u)}}),Qe={id:b,name:p,label:l,value:dt,meta:k,errors:V,errorMessage:X,type:o,checkedValue:a,uncheckedValue:h,bails:s,keepValueOnUnmount:d,resetField:ge,handleReset:()=>ge(),validate:Ne,handleChange:te,handleBlur:pe,setState:O,setTouched:Ee,setErrors:Et,setValue:ut};if(bo(q4,Qe),Ye(e)&&typeof Ve(e)!="function"&&sn(e,(oe,ce)=>{gn(oe,ce)||(k.validated?ue():Te())},{deep:!0}),!v)return Qe;const Wt=ve(()=>{const oe=I.value;return!oe||Qt(oe)||ud(oe)||qi(oe)||Array.isArray(oe)?{}:Object.keys(oe).reduce((ce,D)=>{const q=nW(oe[D]).map(G=>G.__locatorRef).reduce((G,re)=>{const ye=wn(v.values,re)||v.values[re];return ye!==void 0&&(G[re]=ye),G},{});return Object.assign(ce,q),ce},{})});return sn(Wt,(oe,ce)=>{if(!Object.keys(oe).length)return;!gn(oe,ce)&&(k.validated?ue():Te())}),bp(()=>{var oe;const ce=(oe=ht(Qe.keepValueOnUnmount))!==null&&oe!==void 0?oe:ht(v.keepValuesOnUnmount),D=ht(p);if(ce||!v||F.pendingUnmount[Qe.id]){v==null||v.removePathState(D,b);return}F.pendingUnmount[Qe.id]=!0;const q=v.getPathState(D);if(Array.isArray(q==null?void 0:q.id)&&(q!=null&&q.multiple)?q!=null&&q.id.includes(Qe.id):(q==null?void 0:q.id)===Qe.id){if(q!=null&&q.multiple&&Array.isArray(q.value)){const re=q.value.findIndex(ye=>gn(ye,ht(Qe.checkedValue)));if(re>-1){const ye=[...q.value];ye.splice(re,1),v.setFieldValue(D,ye)}Array.isArray(q.id)&&q.id.splice(q.id.indexOf(Qe.id),1)}else v.unsetPathValue(ht(p));v.removePathState(D,b)}}),Qe}function vW(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",i=n&&!("initialValue"in(t||{}))?Km(br(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:i});const s="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled,a=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:i,controlled:o??!0,checkedValue:s,syncVModel:a})}function IW(t,e,n){const r=n!=null&&n.standalone?void 0:US(Ch),i=n==null?void 0:n.checkedValue,s=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,u=ve(()=>{const c=ht(a.value),d=ht(i);return Array.isArray(c)?c.findIndex(f=>gn(f,d))>=0:gn(d,c)});function h(c,d=!0){var f,m;if(u.value===((f=c==null?void 0:c.target)===null||f===void 0?void 0:f.checked)){d&&a.validate();return}const y=ht(t),v=r==null?void 0:r.getPathState(y),p=dd(c);let I=(m=ht(i))!==null&&m!==void 0?m:p;r&&(v!=null&&v.multiple)&&v.type==="checkbox"?I=pE(wn(r.values,y)||[],I,void 0):(n==null?void 0:n.type)==="checkbox"&&(I=pE(ht(a.value),I,ht(s))),l(I,d)}return Object.assign(Object.assign({},a),{checked:u,checkedValue:i,uncheckedValue:s,handleChange:h})}return o(HS(t,e,n))}function EW({prop:t,value:e,handleChange:n}){const r=br();if(!r||!t)return;const i=typeof t=="string"?t:"modelValue",s=`update:${i}`;i in r.props&&(sn(e,o=>{gn(o,Km(r,i))||r.emit(s,o)}),sn(()=>Km(r,i),o=>{if(o===cd&&e.value===void 0)return;const a=o===cd?void 0:o;gn(a,e.value)||n(a)}))}function Km(t,e){if(t)return t.props[e]}const TW=Hi({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>vi().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:cd},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=_i(t,"rules"),r=_i(t,"name"),i=_i(t,"label"),s=_i(t,"uncheckedValue"),o=_i(t,"keepValue"),{errors:a,value:l,errorMessage:u,validate:h,handleChange:c,handleBlur:d,setTouched:f,resetField:m,handleReset:y,meta:v,checked:p,setErrors:I}=yW(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:bW(t,e),checkedValue:e.attrs.value,uncheckedValue:s,label:i,validateOnValueUpdate:!1,keepValueOnUnmount:o,syncVModel:!0}),b=function(F,X=!0){c(F,X),e.emit("update:modelValue",l.value)},E=ve(()=>{const{validateOnInput:V,validateOnChange:F,validateOnBlur:X,validateOnModelUpdate:pe}=wW(t);function K(te){d(te,X),Qt(e.attrs.onBlur)&&e.attrs.onBlur(te)}function ue(te){b(te,V),Qt(e.attrs.onInput)&&e.attrs.onInput(te)}function Te(te){b(te,F),Qt(e.attrs.onChange)&&e.attrs.onChange(te)}const Ne={name:t.name,onBlur:K,onInput:ue,onChange:Te};return Ne["onUpdate:modelValue"]=te=>b(te,pe),Ne}),P=ve(()=>{const V=Object.assign({},E.value);Mc(e.attrs.type)&&p&&(V.checked=p.value);const F=vE(t,e);return Q4(F,e.attrs)&&(V.value=l.value),V}),k=ve(()=>Object.assign(Object.assign({},E.value),{modelValue:l.value}));function O(){return{field:P.value,componentField:k.value,value:l.value,meta:v,errors:a.value,errorMessage:u.value,validate:h,resetField:m,handleChange:b,handleInput:V=>b(V,!1),handleReset:y,handleBlur:E.value.onBlur,setTouched:f,setErrors:I}}return e.expose({setErrors:I,setTouched:f,reset:m,validate:h,handleChange:c}),()=>{const V=wd(vE(t,e)),F=qg(V,e,O);return V?Wr(V,Object.assign(Object.assign({},e.attrs),P.value),F):F}}});function vE(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function wW(t){var e,n,r,i;const{validateOnInput:s,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=vi();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:s,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(i=t.validateOnModelUpdate)!==null&&i!==void 0?i:l}}function bW(t,e){return Mc(e.attrs.type)?dE(t,"modelValue")?t.modelValue:void 0:dE(t,"modelValue")?t.modelValue:e.attrs.value}const AW=TW;let RW=0;const $a=["bails","fieldsCount","id","multiple","type","validate"];function GS(t){const e=Ve(t==null?void 0:t.initialValues)||{},n=Ve(t==null?void 0:t.validationSchema);return n&&qi(n)&&Qt(n.cast)?tt(n.cast(e)||{}):tt(e)}function SW(t){var e;const n=RW++;let r=0;const i=nt(!1),s=nt(!1),o=nt(0),a=[],l=qr(GS(t)),u=nt([]),h=nt({}),c=nt({}),d=X4(()=>{c.value=u.value.reduce((A,R)=>(A[Za(ht(R.path))]=R,A),{})});function f(A,R){const U=te(A);if(!U){typeof A=="string"&&(h.value[Za(A)]=Hm(R));return}if(typeof A=="string"){const ne=Za(A);h.value[ne]&&delete h.value[ne]}U.errors=Hm(R),U.valid=!U.errors.length}function m(A){ar(A).forEach(R=>{f(R,A[R])})}t!=null&&t.initialErrors&&m(t.initialErrors);const y=ve(()=>{const A=u.value.reduce((R,U)=>(U.errors.length&&(R[U.path]=U.errors),R),{});return Object.assign(Object.assign({},h.value),A)}),v=ve(()=>ar(y.value).reduce((A,R)=>{const U=y.value[R];return U!=null&&U.length&&(A[R]=U[0]),A},{})),p=ve(()=>u.value.reduce((A,R)=>(A[R.path]={name:R.path||"",label:R.label||""},A),{})),I=ve(()=>u.value.reduce((A,R)=>{var U;return A[R.path]=(U=R.bails)!==null&&U!==void 0?U:!0,A},{})),b=Object.assign({},(t==null?void 0:t.initialErrors)||{}),E=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:P,originalInitialValues:k,setInitialValues:O}=CW(u,l,t),V=PW(u,l,k,v),F=ve(()=>u.value.reduce((A,R)=>{const U=wn(l,R.path);return us(A,R.path,U),A},{})),X=t==null?void 0:t.validationSchema;function pe(A,R){var U,ne;const Oe=ve(()=>wn(P.value,ht(A))),Ae=c.value[ht(A)];if(Ae){((R==null?void 0:R.type)==="checkbox"||(R==null?void 0:R.type)==="radio")&&(Ae.multiple=!0);const en=r++;return Array.isArray(Ae.id)?Ae.id.push(en):Ae.id=[Ae.id,en],Ae.fieldsCount++,Ae.__flags.pendingUnmount[en]=!1,Ae}const Le=ve(()=>wn(l,ht(A))),Je=ht(A),Re=r++,xe=qr({id:Re,path:A,touched:!1,pending:!1,valid:!0,validated:!!(!((U=b[Je])===null||U===void 0)&&U.length),initialValue:Oe,errors:Ip([]),bails:(ne=R==null?void 0:R.bails)!==null&&ne!==void 0?ne:!1,label:R==null?void 0:R.label,type:(R==null?void 0:R.type)||"default",value:Le,multiple:!1,__flags:{pendingUnmount:{[Re]:!1}},fieldsCount:1,validate:R==null?void 0:R.validate,dirty:ve(()=>!gn(Ve(Le),Ve(Oe)))});return u.value.push(xe),c.value[Je]=xe,d(),v.value[Je]&&!b[Je]&&Nr(()=>{j(Je,{mode:"silent"})}),Ye(A)&&sn(A,en=>{d();const wa=tt(Le.value);c.value[en]=xe,Nr(()=>{us(l,en,wa)})}),xe}const K=_E(Y,5),ue=_E(Y,5),Te=Wm(async A=>await A==="silent"?K():ue(),(A,[R])=>{const U=ar(ce.errorBag.value);return[...new Set([...ar(A.results),...u.value.map(Oe=>Oe.path),...U])].sort().reduce((Oe,Ae)=>{const Le=Ae,Je=te(Le)||Ee(Le),Re=(A.results[Le]||{errors:[]}).errors,xe={errors:Re,valid:!Re.length};return Oe.results[Le]=xe,xe.valid||(Oe.errors[Le]=xe.errors[0]),Je&&h.value[Le]&&delete h.value[Le],Je?(Je.valid=xe.valid,R==="silent"||R==="validated-only"&&!Je.validated||f(Je,xe.errors),Oe):(f(Le,Re),Oe)},{valid:A.valid,results:{},errors:{}})});function Ne(A){u.value.forEach(A)}function te(A){const R=typeof A=="string"?Za(A):A;return typeof R=="string"?c.value[R]:R}function Ee(A){return u.value.filter(U=>A.startsWith(U.path)).reduce((U,ne)=>U?ne.path.length>U.path.length?ne:U:ne,void 0)}let ge=[],Fe;function ut(A){return ge.push(A),Fe||(Fe=Nr(()=>{[...ge].sort().reverse().forEach(U=>{mE(l,U)}),ge=[],Fe=null})),Fe}function Et(A){return function(U,ne){return function(Ae){return Ae instanceof Event&&(Ae.preventDefault(),Ae.stopPropagation()),Ne(Le=>Le.touched=!0),i.value=!0,o.value++,$().then(Le=>{const Je=tt(l);if(Le.valid&&typeof U=="function"){const Re=tt(F.value);let xe=A?Re:Je;return Le.values&&(xe=Le.values),U(xe,{evt:Ae,controlledValues:Re,setErrors:m,setFieldError:f,setTouched:T,setFieldTouched:ye,setValues:q,setFieldValue:D,resetForm:x,resetField:S})}!Le.valid&&typeof ne=="function"&&ne({values:Je,evt:Ae,errors:Le.errors,results:Le.results})}).then(Le=>(i.value=!1,Le),Le=>{throw i.value=!1,Le})}}}const Qe=Et(!1);Qe.withControlled=Et(!0);function Wt(A,R){const U=u.value.findIndex(Oe=>Oe.path===A),ne=u.value[U];if(!(U===-1||!ne)){if(Nr(()=>{j(A,{mode:"silent",warn:!1})}),ne.multiple&&ne.fieldsCount&&ne.fieldsCount--,Array.isArray(ne.id)){const Oe=ne.id.indexOf(R);Oe>=0&&ne.id.splice(Oe,1),delete ne.__flags.pendingUnmount[R]}(!ne.multiple||ne.fieldsCount<=0)&&(u.value.splice(U,1),z(A),d(),delete c.value[A])}}function oe(A){return Ne(R=>{R.path.startsWith(A)&&ar(R.__flags.pendingUnmount).forEach(U=>{R.__flags.pendingUnmount[U]=!0})})}const ce={formId:n,values:l,controlledValues:F,errorBag:y,errors:v,schema:X,submitCount:o,meta:V,isSubmitting:i,isValidating:s,fieldArrays:a,keepValuesOnUnmount:E,validateSchema:Ve(X)?Te:void 0,validate:$,setFieldError:f,validateField:j,setFieldValue:D,setValues:q,setErrors:m,setFieldTouched:ye,setTouched:T,resetForm:x,resetField:S,handleSubmit:Qe,stageInitialValue:H,unsetInitialValue:z,setFieldInitialValue:he,useFieldModel:re,createPathState:pe,getPathState:te,unsetPathValue:ut,removePathState:Wt,initialValues:P,getAllPathStates:()=>u.value,markForUnmount:oe,isFieldTouched:w,isFieldDirty:_,isFieldValid:g};function D(A,R,U=!0){const ne=tt(R),Oe=typeof A=="string"?A:A.path;te(Oe)||pe(Oe),us(l,Oe,ne),U&&j(Oe)}function q(A,R=!0){ld(l,A),a.forEach(U=>U&&U.reset()),R&&$()}function G(A){const R=te(Ve(A))||pe(A);return ve({get(){return R.value},set(U){const ne=Ve(A);D(ne,U,!1),R.validated=!0,R.pending=!0,j(ne).then(()=>{R.pending=!1})}})}function re(A){return Array.isArray(A)?A.map(G):G(A)}function ye(A,R){const U=te(A);U&&(U.touched=R)}function w(A){var R;return!!(!((R=te(A))===null||R===void 0)&&R.touched)}function _(A){var R;return!!(!((R=te(A))===null||R===void 0)&&R.dirty)}function g(A){var R;return!!(!((R=te(A))===null||R===void 0)&&R.valid)}function T(A){if(typeof A=="boolean"){Ne(R=>{R.touched=A});return}ar(A).forEach(R=>{ye(R,!!A[R])})}function S(A,R){var U;const ne=R&&"value"in R?R.value:wn(P.value,A);he(A,tt(ne)),D(A,ne,!1),ye(A,(U=R==null?void 0:R.touched)!==null&&U!==void 0?U:!1),f(A,(R==null?void 0:R.errors)||[])}function x(A){let R=A!=null&&A.values?A.values:k.value;R=qi(X)&&Qt(X.cast)?X.cast(R):R,O(R),Ne(U=>{var ne;U.validated=!1,U.touched=((ne=A==null?void 0:A.touched)===null||ne===void 0?void 0:ne[U.path])||!1,D(U.path,wn(R,U.path),!1),f(U.path,void 0)}),q(R,!1),m((A==null?void 0:A.errors)||{}),o.value=(A==null?void 0:A.submitCount)||0,Nr(()=>{$({mode:"silent"})})}async function $(A){const R=(A==null?void 0:A.mode)||"force";if(R==="force"&&Ne(Ae=>Ae.validated=!0),ce.validateSchema)return ce.validateSchema(R);s.value=!0;const U=await Promise.all(u.value.map(Ae=>Ae.validate?Ae.validate(A).then(Le=>({key:Ae.path,valid:Le.valid,errors:Le.errors})):Promise.resolve({key:Ae.path,valid:!0,errors:[]})));s.value=!1;const ne={},Oe={};for(const Ae of U)ne[Ae.key]={valid:Ae.valid,errors:Ae.errors},Ae.errors.length&&(Oe[Ae.key]=Ae.errors[0]);return{valid:U.every(Ae=>Ae.valid),results:ne,errors:Oe}}async function j(A,R){var U;const ne=te(A);if(ne&&(ne.validated=!0),X){const{results:Oe}=await Te((R==null?void 0:R.mode)||"validated-only");return Oe[A]||{errors:[],valid:!0}}return ne!=null&&ne.validate?ne.validate(R):(!ne&&(U=R==null?void 0:R.warn),Promise.resolve({errors:[],valid:!0}))}function z(A){mE(P.value,A)}function H(A,R,U=!1){he(A,R),us(l,A,R),U&&!(t!=null&&t.initialValues)&&us(k.value,A,tt(R))}function he(A,R){us(P.value,A,tt(R))}async function Y(){const A=Ve(X);if(!A)return{valid:!0,results:{},errors:{}};s.value=!0;const R=ud(A)||qi(A)?await dW(A,l):await hW(A,l,{names:p.value,bailsMap:I.value});return s.value=!1,R}const C=Qe((A,{evt:R})=>{FS(R)&&R.target.submit()});ac(()=>{if(t!=null&&t.initialErrors&&m(t.initialErrors),t!=null&&t.initialTouched&&T(t.initialTouched),t!=null&&t.validateOnMount){$();return}ce.validateSchema&&ce.validateSchema("silent")}),Ye(X)&&sn(X,()=>{var A;(A=ce.validateSchema)===null||A===void 0||A.call(ce,"validated-only")}),bo(Ch,ce);function M(A,R){const U=te(ht(A))||pe(A),ne=()=>Qt(R)?R(Ua(U,$a)):R||{};function Oe(){var Je;U.touched=!0,((Je=ne().validateOnBlur)!==null&&Je!==void 0?Je:vi().validateOnBlur)&&j(U.path)}function Ae(Je){var Re;const xe=(Re=ne().validateOnModelUpdate)!==null&&Re!==void 0?Re:vi().validateOnModelUpdate;D(U.path,Je,xe)}return ve(()=>{if(Qt(R)){const xe=R(U),en=xe.model||"modelValue";return Object.assign({onBlur:Oe,[en]:U.value,[`onUpdate:${en}`]:Ae},xe.props||{})}const Je=(R==null?void 0:R.model)||"modelValue",Re={onBlur:Oe,[Je]:U.value,[`onUpdate:${Je}`]:Ae};return R!=null&&R.mapProps?Object.assign(Object.assign({},Re),R.mapProps(Ua(U,$a))):Re})}function ae(A,R){const U=te(ht(A))||pe(A),ne=()=>Qt(R)?R(Ua(U,$a)):R||{};function Oe(){var Re;U.touched=!0,((Re=ne().validateOnBlur)!==null&&Re!==void 0?Re:vi().validateOnBlur)&&j(U.path)}function Ae(Re){var xe;const en=dd(Re),wa=(xe=ne().validateOnInput)!==null&&xe!==void 0?xe:vi().validateOnInput;D(U.path,en,wa)}function Le(Re){var xe;const en=dd(Re),wa=(xe=ne().validateOnChange)!==null&&xe!==void 0?xe:vi().validateOnChange;D(U.path,en,wa)}return ve(()=>{const Re={value:U.value,onChange:Le,onInput:Ae,onBlur:Oe};return Qt(R)?Object.assign(Object.assign({},Re),R(Ua(U,$a)).attrs||{}):R!=null&&R.mapAttrs?Object.assign(Object.assign({},Re),R.mapAttrs(Ua(U,$a))):Re})}return Object.assign(Object.assign({},ce),{values:gp(l),handleReset:()=>x(),submitForm:C,defineComponentBinds:M,defineInputBinds:ae})}function PW(t,e,n,r){const i={touched:"some",pending:"some",valid:"every"},s=ve(()=>!gn(e,Ve(n)));function o(){const l=t.value;return ar(i).reduce((u,h)=>{const c=i[h];return u[h]=l[c](d=>d[h]),u},{})}const a=qr(o());return rk(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),ve(()=>Object.assign(Object.assign({initialValues:Ve(n)},a),{valid:a.valid&&!ar(r.value).length,dirty:s.value}))}function CW(t,e,n){const r=GS(n),i=n==null?void 0:n.initialValues,s=nt(r),o=nt(tt(r));function a(l,u=!1){s.value=ld(tt(s.value)||{},tt(l)),o.value=ld(tt(o.value)||{},tt(l)),u&&t.value.forEach(h=>{if(h.touched)return;const d=wn(s.value,h.path);us(e,h.path,tt(d))})}return Ye(i)&&sn(i,l=>{l&&a(l,!0)},{deep:!0}),{initialValues:s,originalInitialValues:o,setInitialValues:a}}const kW=Hi({name:"Form",inheritAttrs:!1,props:{as:{type:String,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=_i(t,"initialValues"),r=_i(t,"validationSchema"),i=_i(t,"keepValues"),{errors:s,errorBag:o,values:a,meta:l,isSubmitting:u,isValidating:h,submitCount:c,controlledValues:d,validate:f,validateField:m,handleReset:y,resetForm:v,handleSubmit:p,setErrors:I,setFieldError:b,setFieldValue:E,setValues:P,setFieldTouched:k,setTouched:O,resetField:V}=SW({validationSchema:r.value?r:void 0,initialValues:n,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:i}),F=p((Ee,{evt:ge})=>{FS(ge)&&ge.target.submit()},t.onInvalidSubmit),X=t.onSubmit?p(t.onSubmit,t.onInvalidSubmit):F;function pe(Ee){Bg(Ee)&&Ee.preventDefault(),y(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function K(Ee,ge){return p(typeof Ee=="function"&&!ge?Ee:ge,t.onInvalidSubmit)(Ee)}function ue(){return tt(a)}function Te(){return tt(l.value)}function Ne(){return tt(s.value)}function te(){return{meta:l.value,errors:s.value,errorBag:o.value,values:a,isSubmitting:u.value,isValidating:h.value,submitCount:c.value,controlledValues:d.value,validate:f,validateField:m,handleSubmit:K,handleReset:y,submitForm:F,setErrors:I,setFieldError:b,setFieldValue:E,setValues:P,setFieldTouched:k,setTouched:O,resetForm:v,resetField:V,getValues:ue,getMeta:Te,getErrors:Ne}}return e.expose({setFieldError:b,setErrors:I,setFieldValue:E,setValues:P,setFieldTouched:k,setTouched:O,resetForm:v,validate:f,validateField:m,resetField:V,getValues:ue,getMeta:Te,getErrors:Ne}),function(){const ge=t.as==="form"?t.as:wd(t.as),Fe=qg(ge,e,te);if(!t.as)return Fe;const ut=t.as==="form"?{novalidate:!0}:{};return Wr(ge,Object.assign(Object.assign(Object.assign({},ut),e.attrs),{onSubmit:X,onReset:pe}),Fe)}}}),OW=kW,NW=Hi({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=Ln(Ch,void 0),r=ve(()=>n==null?void 0:n.errors.value[t.name]);function i(){return{message:r.value}}return()=>{if(!r.value)return;const s=t.as?wd(t.as):t.as,o=qg(s,e,i),a=Object.assign({role:"alert"},e.attrs);return!s&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Wr(s||"span",a,r.value):Wr(s,a,o)}}}),xW=NW;/**
  * vee-validate v4.11.3
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */const ou={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},DW=t=>{if(t)return Array.isArray(t)?t[0]:t.locale};function Fc(t,e){return Array.isArray(t)?t[0]:t[e]}function es(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const KS=(t,e)=>{if(es(t))return!0;const n=DW(e);if(Array.isArray(t))return t.every(i=>KS(i,{locale:n}));const r=String(t);return n?(ou[n]||ou.en).test(r):Object.keys(ou).some(i=>ou[i].test(r))},LW=(t,e)=>{const n=Fc(e,"target");return String(t)===String(n)},VW=t=>{if(es(t))return!0;const e=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return Array.isArray(t)?t.every(n=>e.test(String(n))):e.test(String(t))};function MW(t){return t==null}function FW(t){return Array.isArray(t)&&t.length===0}const zS=(t,e)=>{if(es(t))return!0;const n=Fc(e,"length");return Array.isArray(t)?t.every(r=>zS(r,{length:n})):[...String(t)].length<=Number(n)},QS=(t,e)=>{if(es(t))return!0;const n=Fc(e,"max");return Array.isArray(t)?t.length>0&&t.every(r=>QS(r,{max:n})):Number(t)<=Number(n)},YS=(t,e)=>{if(es(t))return!0;const n=Fc(e,"length");return Array.isArray(t)?t.every(r=>YS(r,{length:n})):[...String(t)].length>=Number(n)},XS=(t,e)=>{if(es(t))return!0;const n=Fc(e,"min");return Array.isArray(t)?t.length>0&&t.every(r=>XS(r,{min:n})):Number(t)>=Number(n)},JS=(t,e)=>es(t)?!0:Array.isArray(t)?t.every(n=>JS(n,e)):Array.from(e).some(n=>n==t),IE=(t,e)=>es(t)?!0:!JS(t,e),EE=t=>MW(t)||FW(t)||t===!1?!1:!!String(t).trim().length,UW={install(t){t.component("VeeForm",OW),t.component("VeeField",AW),t.component("ErrorMessage",xW),Kn("required",EE),Kn("tos",EE),Kn("min",YS),Kn("max",zS),Kn("alpha_spaces",KS),Kn("email",VW),Kn("min_value",XS),Kn("max_value",QS),Kn("passwords_mismatch",LW),Kn("excluded",IE),Kn("country_excluded",IE),sW({generateMessage:e=>{const n={required:`The field ${e.field} is required.`,min:`The field ${e.field} is too short.`,max:`The field ${e.field} is too long.`,alpha_spaces:`The field ${e.field} my only contain alphabetic characters and spaces.`,email:`The field ${e.field} must be a valid email.`,min_value:`The field ${e.field} is too low.`,max_value:`The field ${e.field} is too high.`,excluded:`You are not allowed to use this value for the field ${e.field}.`,country_excluded:"Due to restrictions, we do not accept users from this location.",passwords_mismatch:"The passwords don't match.",tos:"You must accept the Terms of Service."};return n[e.rule.name]?n[e.rule.name]:`The field ${e.field} is invalid.`},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}},$W={beforeMount(t,e){let n=`fa fa-${e.value} text-2xl`;e.arg==="full"&&(n=e.value),e.modifiers.right&&(n+=" float-right"),e.modifiers.yellow?n+=" text-yellow-400":n+=" text-green-400",t.innerHTML+=`<i class="${n}"></i>  `}};/*!
  * shared v9.6.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const zm=typeof window<"u",ts=(t,e=!1)=>e?Symbol.for(t):Symbol(t),BW=(t,e,n)=>jW({l:t,k:e,s:n}),jW=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),xt=t=>typeof t=="number"&&isFinite(t),qW=t=>eP(t)==="[object Date]",Wi=t=>eP(t)==="[object RegExp]",Oh=t=>be(t)&&Object.keys(t).length===0,Jt=Object.assign;let TE;const Dr=()=>TE||(TE=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wE(t){return t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")}const WW=Object.prototype.hasOwnProperty;function rc(t,e){return WW.call(t,e)}const st=Array.isArray,gt=t=>typeof t=="function",ie=t=>typeof t=="string",De=t=>typeof t=="boolean",Ke=t=>t!==null&&typeof t=="object",ZS=Object.prototype.toString,eP=t=>ZS.call(t),be=t=>{if(!Ke(t))return!1;const e=Object.getPrototypeOf(t);return e===null||e.constructor===Object},HW=t=>t==null?"":st(t)||be(t)&&t.toString===ZS?JSON.stringify(t,null,2):String(t);function GW(t,e=""){return t.reduce((n,r,i)=>i===0?n+r:n+e+r,"")}function Wg(t){let e=t;return()=>++e}function KW(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}/*!
  * message-compiler v9.6.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function zW(t,e,n){return{line:t,column:e,offset:n}}function Qm(t,e,n){const r={start:t,end:e};return n!=null&&(r.source=n),r}const QW=/\{([0-9a-zA-Z]+)\}/g;function YW(t,...e){return e.length===1&&XW(e[0])&&(e=e[0]),(!e||!e.hasOwnProperty)&&(e={}),t.replace(QW,(n,r)=>e.hasOwnProperty(r)?e[r]:"")}const tP=Object.assign,bE=t=>typeof t=="string",XW=t=>t!==null&&typeof t=="object";function nP(t,e=""){return t.reduce((n,r,i)=>i===0?n+r:n+e+r,"")}const Ie={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14,UNHANDLED_CODEGEN_NODE_TYPE:15,UNHANDLED_MINIFIER_NODE_TYPE:16,__EXTEND_POINT__:17},JW={[Ie.EXPECTED_TOKEN]:"Expected token: '{0}'",[Ie.INVALID_TOKEN_IN_PLACEHOLDER]:"Invalid token in placeholder: '{0}'",[Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]:"Unterminated single quote in placeholder",[Ie.UNKNOWN_ESCAPE_SEQUENCE]:"Unknown escape sequence: \\{0}",[Ie.INVALID_UNICODE_ESCAPE_SEQUENCE]:"Invalid unicode escape sequence: {0}",[Ie.UNBALANCED_CLOSING_BRACE]:"Unbalanced closing brace",[Ie.UNTERMINATED_CLOSING_BRACE]:"Unterminated closing brace",[Ie.EMPTY_PLACEHOLDER]:"Empty placeholder",[Ie.NOT_ALLOW_NEST_PLACEHOLDER]:"Not allowed nest placeholder",[Ie.INVALID_LINKED_FORMAT]:"Invalid linked format",[Ie.MUST_HAVE_MESSAGES_IN_PLURAL]:"Plural must have messages",[Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER]:"Unexpected empty linked modifier",[Ie.UNEXPECTED_EMPTY_LINKED_KEY]:"Unexpected empty linked key",[Ie.UNEXPECTED_LEXICAL_ANALYSIS]:"Unexpected lexical analysis in token: '{0}'",[Ie.UNHANDLED_CODEGEN_NODE_TYPE]:"unhandled codegen node type: '{0}'",[Ie.UNHANDLED_MINIFIER_NODE_TYPE]:"unhandled mimifier node type: '{0}'"};function Ta(t,e,n={}){const{domain:r,messages:i,args:s}=n,o=YW((i||JW)[t]||"",...s||[]),a=new SyntaxError(String(o));return a.code=t,e&&(a.location=e),a.domain=r,a}function ZW(t){throw t}const kr=" ",eH="\r",dn=`
`,tH=String.fromCharCode(8232),nH=String.fromCharCode(8233);function rH(t){const e=t;let n=0,r=1,i=1,s=0;const o=O=>e[O]===eH&&e[O+1]===dn,a=O=>e[O]===dn,l=O=>e[O]===nH,u=O=>e[O]===tH,h=O=>o(O)||a(O)||l(O)||u(O),c=()=>n,d=()=>r,f=()=>i,m=()=>s,y=O=>o(O)||l(O)||u(O)?dn:e[O],v=()=>y(n),p=()=>y(n+s);function I(){return s=0,h(n)&&(r++,i=0),o(n)&&n++,n++,i++,e[n]}function b(){return o(n+s)&&s++,s++,e[n+s]}function E(){n=0,r=1,i=1,s=0}function P(O=0){s=O}function k(){const O=n+s;for(;O!==n;)I();s=0}return{index:c,line:d,column:f,peekOffset:m,charAt:y,currentChar:v,currentPeek:p,next:I,peek:b,reset:E,resetPeek:P,skipToPeek:k}}const di=void 0,iH=".",AE="'",sH="tokenizer";function oH(t,e={}){const n=e.location!==!1,r=rH(t),i=()=>r.index(),s=()=>zW(r.line(),r.column(),r.index()),o=s(),a=i(),l={currentType:14,offset:a,startLoc:o,endLoc:o,lastType:14,lastOffset:a,lastStartLoc:o,lastEndLoc:o,braceNest:0,inLinked:!1,text:""},u=()=>l,{onError:h}=e;function c(_,g,T,...S){const x=u();if(g.column+=T,g.offset+=T,h){const $=n?Qm(x.startLoc,g):null,j=Ta(_,$,{domain:sH,args:S});h(j)}}function d(_,g,T){_.endLoc=s(),_.currentType=g;const S={type:g};return n&&(S.loc=Qm(_.startLoc,_.endLoc)),T!=null&&(S.value=T),S}const f=_=>d(_,14);function m(_,g){return _.currentChar()===g?(_.next(),g):(c(Ie.EXPECTED_TOKEN,s(),0,g),"")}function y(_){let g="";for(;_.currentPeek()===kr||_.currentPeek()===dn;)g+=_.currentPeek(),_.peek();return g}function v(_){const g=y(_);return _.skipToPeek(),g}function p(_){if(_===di)return!1;const g=_.charCodeAt(0);return g>=97&&g<=122||g>=65&&g<=90||g===95}function I(_){if(_===di)return!1;const g=_.charCodeAt(0);return g>=48&&g<=57}function b(_,g){const{currentType:T}=g;if(T!==2)return!1;y(_);const S=p(_.currentPeek());return _.resetPeek(),S}function E(_,g){const{currentType:T}=g;if(T!==2)return!1;y(_);const S=_.currentPeek()==="-"?_.peek():_.currentPeek(),x=I(S);return _.resetPeek(),x}function P(_,g){const{currentType:T}=g;if(T!==2)return!1;y(_);const S=_.currentPeek()===AE;return _.resetPeek(),S}function k(_,g){const{currentType:T}=g;if(T!==8)return!1;y(_);const S=_.currentPeek()===".";return _.resetPeek(),S}function O(_,g){const{currentType:T}=g;if(T!==9)return!1;y(_);const S=p(_.currentPeek());return _.resetPeek(),S}function V(_,g){const{currentType:T}=g;if(!(T===8||T===12))return!1;y(_);const S=_.currentPeek()===":";return _.resetPeek(),S}function F(_,g){const{currentType:T}=g;if(T!==10)return!1;const S=()=>{const $=_.currentPeek();return $==="{"?p(_.peek()):$==="@"||$==="%"||$==="|"||$===":"||$==="."||$===kr||!$?!1:$===dn?(_.peek(),S()):p($)},x=S();return _.resetPeek(),x}function X(_){y(_);const g=_.currentPeek()==="|";return _.resetPeek(),g}function pe(_){const g=y(_),T=_.currentPeek()==="%"&&_.peek()==="{";return _.resetPeek(),{isModulo:T,hasSpace:g.length>0}}function K(_,g=!0){const T=(x=!1,$="",j=!1)=>{const z=_.currentPeek();return z==="{"?$==="%"?!1:x:z==="@"||!z?$==="%"?!0:x:z==="%"?(_.peek(),T(x,"%",!0)):z==="|"?$==="%"||j?!0:!($===kr||$===dn):z===kr?(_.peek(),T(!0,kr,j)):z===dn?(_.peek(),T(!0,dn,j)):!0},S=T();return g&&_.resetPeek(),S}function ue(_,g){const T=_.currentChar();return T===di?di:g(T)?(_.next(),T):null}function Te(_){return ue(_,T=>{const S=T.charCodeAt(0);return S>=97&&S<=122||S>=65&&S<=90||S>=48&&S<=57||S===95||S===36})}function Ne(_){return ue(_,T=>{const S=T.charCodeAt(0);return S>=48&&S<=57})}function te(_){return ue(_,T=>{const S=T.charCodeAt(0);return S>=48&&S<=57||S>=65&&S<=70||S>=97&&S<=102})}function Ee(_){let g="",T="";for(;g=Ne(_);)T+=g;return T}function ge(_){v(_);const g=_.currentChar();return g!=="%"&&c(Ie.EXPECTED_TOKEN,s(),0,g),_.next(),"%"}function Fe(_){let g="";for(;;){const T=_.currentChar();if(T==="{"||T==="}"||T==="@"||T==="|"||!T)break;if(T==="%")if(K(_))g+=T,_.next();else break;else if(T===kr||T===dn)if(K(_))g+=T,_.next();else{if(X(_))break;g+=T,_.next()}else g+=T,_.next()}return g}function ut(_){v(_);let g="",T="";for(;g=Te(_);)T+=g;return _.currentChar()===di&&c(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),T}function Et(_){v(_);let g="";return _.currentChar()==="-"?(_.next(),g+=`-${Ee(_)}`):g+=Ee(_),_.currentChar()===di&&c(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g}function dt(_){v(_),m(_,"'");let g="",T="";const S=$=>$!==AE&&$!==dn;for(;g=ue(_,S);)g==="\\"?T+=Qe(_):T+=g;const x=_.currentChar();return x===dn||x===di?(c(Ie.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),x===dn&&(_.next(),m(_,"'")),T):(m(_,"'"),T)}function Qe(_){const g=_.currentChar();switch(g){case"\\":case"'":return _.next(),`\\${g}`;case"u":return Wt(_,g,4);case"U":return Wt(_,g,6);default:return c(Ie.UNKNOWN_ESCAPE_SEQUENCE,s(),0,g),""}}function Wt(_,g,T){m(_,g);let S="";for(let x=0;x<T;x++){const $=te(_);if(!$){c(Ie.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${g}${S}${_.currentChar()}`);break}S+=$}return`\\${g}${S}`}function oe(_){v(_);let g="",T="";const S=x=>x!=="{"&&x!=="}"&&x!==kr&&x!==dn;for(;g=ue(_,S);)T+=g;return T}function ce(_){let g="",T="";for(;g=Te(_);)T+=g;return T}function D(_){const g=(T=!1,S)=>{const x=_.currentChar();return x==="{"||x==="%"||x==="@"||x==="|"||x==="("||x===")"||!x||x===kr?S:x===dn||x===iH?(S+=x,_.next(),g(T,S)):(S+=x,_.next(),g(!0,S))};return g(!1,"")}function q(_){v(_);const g=m(_,"|");return v(_),g}function G(_,g){let T=null;switch(_.currentChar()){case"{":return g.braceNest>=1&&c(Ie.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),_.next(),T=d(g,2,"{"),v(_),g.braceNest++,T;case"}":return g.braceNest>0&&g.currentType===2&&c(Ie.EMPTY_PLACEHOLDER,s(),0),_.next(),T=d(g,3,"}"),g.braceNest--,g.braceNest>0&&v(_),g.inLinked&&g.braceNest===0&&(g.inLinked=!1),T;case"@":return g.braceNest>0&&c(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),T=re(_,g)||f(g),g.braceNest=0,T;default:let x=!0,$=!0,j=!0;if(X(_))return g.braceNest>0&&c(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),T=d(g,1,q(_)),g.braceNest=0,g.inLinked=!1,T;if(g.braceNest>0&&(g.currentType===5||g.currentType===6||g.currentType===7))return c(Ie.UNTERMINATED_CLOSING_BRACE,s(),0),g.braceNest=0,ye(_,g);if(x=b(_,g))return T=d(g,5,ut(_)),v(_),T;if($=E(_,g))return T=d(g,6,Et(_)),v(_),T;if(j=P(_,g))return T=d(g,7,dt(_)),v(_),T;if(!x&&!$&&!j)return T=d(g,13,oe(_)),c(Ie.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,T.value),v(_),T;break}return T}function re(_,g){const{currentType:T}=g;let S=null;const x=_.currentChar();switch((T===8||T===9||T===12||T===10)&&(x===dn||x===kr)&&c(Ie.INVALID_LINKED_FORMAT,s(),0),x){case"@":return _.next(),S=d(g,8,"@"),g.inLinked=!0,S;case".":return v(_),_.next(),d(g,9,".");case":":return v(_),_.next(),d(g,10,":");default:return X(_)?(S=d(g,1,q(_)),g.braceNest=0,g.inLinked=!1,S):k(_,g)||V(_,g)?(v(_),re(_,g)):O(_,g)?(v(_),d(g,12,ce(_))):F(_,g)?(v(_),x==="{"?G(_,g)||S:d(g,11,D(_))):(T===8&&c(Ie.INVALID_LINKED_FORMAT,s(),0),g.braceNest=0,g.inLinked=!1,ye(_,g))}}function ye(_,g){let T={type:14};if(g.braceNest>0)return G(_,g)||f(g);if(g.inLinked)return re(_,g)||f(g);switch(_.currentChar()){case"{":return G(_,g)||f(g);case"}":return c(Ie.UNBALANCED_CLOSING_BRACE,s(),0),_.next(),d(g,3,"}");case"@":return re(_,g)||f(g);default:if(X(_))return T=d(g,1,q(_)),g.braceNest=0,g.inLinked=!1,T;const{isModulo:x,hasSpace:$}=pe(_);if(x)return $?d(g,0,Fe(_)):d(g,4,ge(_));if(K(_))return d(g,0,Fe(_));break}return T}function w(){const{currentType:_,offset:g,startLoc:T,endLoc:S}=l;return l.lastType=_,l.lastOffset=g,l.lastStartLoc=T,l.lastEndLoc=S,l.offset=i(),l.startLoc=s(),r.currentChar()===di?d(l,14):ye(r,l)}return{nextToken:w,currentOffset:i,currentPosition:s,context:u}}const aH="parser",lH=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function cH(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const r=parseInt(e||n,16);return r<=55295||r>=57344?String.fromCodePoint(r):"�"}}}function uH(t={}){const e=t.location!==!1,{onError:n}=t;function r(p,I,b,E,...P){const k=p.currentPosition();if(k.offset+=E,k.column+=E,n){const O=e?Qm(b,k):null,V=Ta(I,O,{domain:aH,args:P});n(V)}}function i(p,I,b){const E={type:p};return e&&(E.start=I,E.end=I,E.loc={start:b,end:b}),E}function s(p,I,b,E){E&&(p.type=E),e&&(p.end=I,p.loc&&(p.loc.end=b))}function o(p,I){const b=p.context(),E=i(3,b.offset,b.startLoc);return E.value=I,s(E,p.currentOffset(),p.currentPosition()),E}function a(p,I){const b=p.context(),{lastOffset:E,lastStartLoc:P}=b,k=i(5,E,P);return k.index=parseInt(I,10),p.nextToken(),s(k,p.currentOffset(),p.currentPosition()),k}function l(p,I){const b=p.context(),{lastOffset:E,lastStartLoc:P}=b,k=i(4,E,P);return k.key=I,p.nextToken(),s(k,p.currentOffset(),p.currentPosition()),k}function u(p,I){const b=p.context(),{lastOffset:E,lastStartLoc:P}=b,k=i(9,E,P);return k.value=I.replace(lH,cH),p.nextToken(),s(k,p.currentOffset(),p.currentPosition()),k}function h(p){const I=p.nextToken(),b=p.context(),{lastOffset:E,lastStartLoc:P}=b,k=i(8,E,P);return I.type!==12?(r(p,Ie.UNEXPECTED_EMPTY_LINKED_MODIFIER,b.lastStartLoc,0),k.value="",s(k,E,P),{nextConsumeToken:I,node:k}):(I.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,sr(I)),k.value=I.value||"",s(k,p.currentOffset(),p.currentPosition()),{node:k})}function c(p,I){const b=p.context(),E=i(7,b.offset,b.startLoc);return E.value=I,s(E,p.currentOffset(),p.currentPosition()),E}function d(p){const I=p.context(),b=i(6,I.offset,I.startLoc);let E=p.nextToken();if(E.type===9){const P=h(p);b.modifier=P.node,E=P.nextConsumeToken||p.nextToken()}switch(E.type!==10&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(E)),E=p.nextToken(),E.type===2&&(E=p.nextToken()),E.type){case 11:E.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(E)),b.key=c(p,E.value||"");break;case 5:E.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(E)),b.key=l(p,E.value||"");break;case 6:E.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(E)),b.key=a(p,E.value||"");break;case 7:E.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(E)),b.key=u(p,E.value||"");break;default:r(p,Ie.UNEXPECTED_EMPTY_LINKED_KEY,I.lastStartLoc,0);const P=p.context(),k=i(7,P.offset,P.startLoc);return k.value="",s(k,P.offset,P.startLoc),b.key=k,s(b,P.offset,P.startLoc),{nextConsumeToken:E,node:b}}return s(b,p.currentOffset(),p.currentPosition()),{node:b}}function f(p){const I=p.context(),b=I.currentType===1?p.currentOffset():I.offset,E=I.currentType===1?I.endLoc:I.startLoc,P=i(2,b,E);P.items=[];let k=null;do{const F=k||p.nextToken();switch(k=null,F.type){case 0:F.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(F)),P.items.push(o(p,F.value||""));break;case 6:F.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(F)),P.items.push(a(p,F.value||""));break;case 5:F.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(F)),P.items.push(l(p,F.value||""));break;case 7:F.value==null&&r(p,Ie.UNEXPECTED_LEXICAL_ANALYSIS,I.lastStartLoc,0,sr(F)),P.items.push(u(p,F.value||""));break;case 8:const X=d(p);P.items.push(X.node),k=X.nextConsumeToken||null;break}}while(I.currentType!==14&&I.currentType!==1);const O=I.currentType===1?I.lastOffset:p.currentOffset(),V=I.currentType===1?I.lastEndLoc:p.currentPosition();return s(P,O,V),P}function m(p,I,b,E){const P=p.context();let k=E.items.length===0;const O=i(1,I,b);O.cases=[],O.cases.push(E);do{const V=f(p);k||(k=V.items.length===0),O.cases.push(V)}while(P.currentType!==14);return k&&r(p,Ie.MUST_HAVE_MESSAGES_IN_PLURAL,b,0),s(O,p.currentOffset(),p.currentPosition()),O}function y(p){const I=p.context(),{offset:b,startLoc:E}=I,P=f(p);return I.currentType===14?P:m(p,b,E,P)}function v(p){const I=oH(p,tP({},t)),b=I.context(),E=i(0,b.offset,b.startLoc);return e&&E.loc&&(E.loc.source=p),E.body=y(I),t.onCacheKey&&(E.cacheKey=t.onCacheKey(p)),b.currentType!==14&&r(I,Ie.UNEXPECTED_LEXICAL_ANALYSIS,b.lastStartLoc,0,p[b.offset]||""),s(E,I.currentOffset(),I.currentPosition()),E}return{parse:v}}function sr(t){if(t.type===14)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function dH(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function RE(t,e){for(let n=0;n<t.length;n++)Hg(t[n],e)}function Hg(t,e){switch(t.type){case 1:RE(t.cases,e),e.helper("plural");break;case 2:RE(t.items,e);break;case 6:Hg(t.key,e),e.helper("linked"),e.helper("type");break;case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function hH(t,e={}){const n=dH(t);n.helper("normalize"),t.body&&Hg(t.body,n);const r=n.context();t.helpers=Array.from(r.helpers)}function fH(t){const e=t.body;return e.type===2?SE(e):e.cases.forEach(n=>SE(n)),t}function SE(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const r=t.items[n];if(!(r.type===3||r.type===9)||r.value==null)break;e.push(r.value)}if(e.length===t.items.length){t.static=nP(e);for(let n=0;n<t.items.length;n++){const r=t.items[n];(r.type===3||r.type===9)&&delete r.value}}}}const mH="minifier";function _o(t){switch(t.t=t.type,t.type){case 0:const e=t;_o(e.body),e.b=e.body,delete e.body;break;case 1:const n=t,r=n.cases;for(let h=0;h<r.length;h++)_o(r[h]);n.c=r,delete n.cases;break;case 2:const i=t,s=i.items;for(let h=0;h<s.length;h++)_o(s[h]);i.i=s,delete i.items,i.static&&(i.s=i.static,delete i.static);break;case 3:case 9:case 8:case 7:const o=t;o.value&&(o.v=o.value,delete o.value);break;case 6:const a=t;_o(a.key),a.k=a.key,delete a.key,a.modifier&&(_o(a.modifier),a.m=a.modifier,delete a.modifier);break;case 5:const l=t;l.i=l.index,delete l.index;break;case 4:const u=t;u.k=u.key,delete u.key;break;default:throw Ta(Ie.UNHANDLED_MINIFIER_NODE_TYPE,null,{domain:mH,args:[t.type]})}delete t.type}const pH="parser";function _H(t,e){const{sourceMap:n,filename:r,breakLineCode:i,needIndent:s}=e,o=e.location!==!1,a={filename:r,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:s,indentLevel:0};o&&t.loc&&(a.source=t.loc.source);const l=()=>a;function u(v,p){a.code+=v}function h(v,p=!0){const I=p?i:"";u(s?I+"  ".repeat(v):I)}function c(v=!0){const p=++a.indentLevel;v&&h(p)}function d(v=!0){const p=--a.indentLevel;v&&h(p)}function f(){h(a.indentLevel)}return{context:l,push:u,indent:c,deindent:d,newline:f,helper:v=>`_${v}`,needIndent:()=>a.needIndent}}function gH(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ea(t,e.key),e.modifier?(t.push(", "),ea(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function yH(t,e){const{helper:n,needIndent:r}=t;t.push(`${n("normalize")}([`),t.indent(r());const i=e.items.length;for(let s=0;s<i&&(ea(t,e.items[s]),s!==i-1);s++)t.push(", ");t.deindent(r()),t.push("])")}function vH(t,e){const{helper:n,needIndent:r}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(r());const i=e.cases.length;for(let s=0;s<i&&(ea(t,e.cases[s]),s!==i-1);s++)t.push(", ");t.deindent(r()),t.push("])")}}function IH(t,e){e.body?ea(t,e.body):t.push("null")}function ea(t,e){const{helper:n}=t;switch(e.type){case 0:IH(t,e);break;case 1:vH(t,e);break;case 2:yH(t,e);break;case 6:gH(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break;default:throw Ta(Ie.UNHANDLED_CODEGEN_NODE_TYPE,null,{domain:pH,args:[e.type]})}}const EH=(t,e={})=>{const n=bE(e.mode)?e.mode:"normal",r=bE(e.filename)?e.filename:"message.intl",i=!!e.sourceMap,s=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,o=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],l=_H(t,{mode:n,filename:r,sourceMap:i,breakLineCode:s,needIndent:o});l.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),l.indent(o),a.length>0&&(l.push(`const { ${nP(a.map(c=>`${c}: _${c}`),", ")} } = ctx`),l.newline()),l.push("return "),ea(l,t),l.deindent(o),l.push("}"),delete t.helpers;const{code:u,map:h}=l.context();return{ast:t,code:u,map:h?h.toJSON():void 0}};function TH(t,e={}){const n=tP({},e),r=!!n.jit,i=!!n.minify,s=n.optimize==null?!0:n.optimize,a=uH(n).parse(t);return r?(s&&fH(a),i&&_o(a),{ast:a,code:""}):(hH(a,n),EH(a,n))}/*!
  * core-base v9.6.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */function wH(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Dr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}const ns=[];ns[0]={w:[0],i:[3,0],"[":[4],o:[7]};ns[1]={w:[1],".":[2],"[":[4],o:[7]};ns[2]={w:[2],i:[3,0],0:[3,0]};ns[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};ns[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};ns[5]={"'":[4,0],o:8,l:[5,0]};ns[6]={'"':[4,0],o:8,l:[6,0]};const bH=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function AH(t){return bH.test(t)}function RH(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function SH(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function PH(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:AH(e)?RH(e):"*"+e}function CH(t){const e=[];let n=-1,r=0,i=0,s,o,a,l,u,h,c;const d=[];d[0]=()=>{o===void 0?o=a:o+=a},d[1]=()=>{o!==void 0&&(e.push(o),o=void 0)},d[2]=()=>{d[0](),i++},d[3]=()=>{if(i>0)i--,r=4,d[0]();else{if(i=0,o===void 0||(o=PH(o),o===!1))return!1;d[1]()}};function f(){const m=t[n+1];if(r===5&&m==="'"||r===6&&m==='"')return n++,a="\\"+m,d[0](),!0}for(;r!==null;)if(n++,s=t[n],!(s==="\\"&&f())){if(l=SH(s),c=ns[r],u=c[l]||c.l||8,u===8||(r=u[0],u[1]!==void 0&&(h=d[u[1]],h&&(a=s,h()===!1))))return;if(r===7)return e}}const PE=new Map;function kH(t,e){return Ke(t)?t[e]:null}function OH(t,e){if(!Ke(t))return null;let n=PE.get(e);if(n||(n=CH(e),n&&PE.set(e,n)),!n)return null;const r=n.length;let i=t,s=0;for(;s<r;){const o=i[n[s]];if(o===void 0)return null;i=o,s++}return i}const NH=t=>t,xH=t=>"",DH="text",LH=t=>t.length===0?"":GW(t),VH=HW;function CE(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function MH(t){const e=xt(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(xt(t.named.count)||xt(t.named.n))?xt(t.named.count)?t.named.count:xt(t.named.n)?t.named.n:e:e}function FH(t,e){e.count||(e.count=t),e.n||(e.n=t)}function UH(t={}){const e=t.locale,n=MH(t),r=Ke(t.pluralRules)&&ie(e)&&gt(t.pluralRules[e])?t.pluralRules[e]:CE,i=Ke(t.pluralRules)&&ie(e)&&gt(t.pluralRules[e])?CE:void 0,s=p=>p[r(n,p.length,i)],o=t.list||[],a=p=>o[p],l=t.named||{};xt(t.pluralIndex)&&FH(n,l);const u=p=>l[p];function h(p){const I=gt(t.messages)?t.messages(p):Ke(t.messages)?t.messages[p]:!1;return I||(t.parent?t.parent.message(p):xH)}const c=p=>t.modifiers?t.modifiers[p]:NH,d=be(t.processor)&&gt(t.processor.normalize)?t.processor.normalize:LH,f=be(t.processor)&&gt(t.processor.interpolate)?t.processor.interpolate:VH,m=be(t.processor)&&ie(t.processor.type)?t.processor.type:DH,v={list:a,named:u,plural:s,linked:(p,...I)=>{const[b,E]=I;let P="text",k="";I.length===1?Ke(b)?(k=b.modifier||k,P=b.type||P):ie(b)&&(k=b||k):I.length===2&&(ie(b)&&(k=b||k),ie(E)&&(P=E||P));const O=h(p)(v),V=P==="vnode"&&st(O)&&k?O[0]:O;return k?c(k)(V,P):V},message:h,type:m,interpolate:f,normalize:d,values:Jt({},o,l)};return v}let ic=null;function $H(t){ic=t}function BH(t,e,n){ic&&ic.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const jH=qH("function:translate");function qH(t){return e=>ic&&ic.emit(t,e)}const WH={NOT_FOUND_KEY:1,FALLBACK_TO_TRANSLATE:2,CANNOT_FORMAT_NUMBER:3,FALLBACK_TO_NUMBER_FORMAT:4,CANNOT_FORMAT_DATE:5,FALLBACK_TO_DATE_FORMAT:6,EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER:7,__EXTEND_POINT__:8};function Gg(t,e){return e.locale!=null?kE(e.locale):kE(t.locale)}let bf;function kE(t){return ie(t)?t:bf!=null&&t.resolvedOnce?bf:bf=t()}function HH(t,e,n){return[...new Set([n,...st(e)?e:Ke(e)?Object.keys(e):ie(e)?[e]:[n]])]}function rP(t,e,n){const r=ie(n)?n:ta,i=t;i.__localeChainCache||(i.__localeChainCache=new Map);let s=i.__localeChainCache.get(r);if(!s){s=[];let o=[n];for(;st(o);)o=OE(s,o,e);const a=st(e)||!be(e)?e:e.default?e.default:null;o=ie(a)?[a]:a,st(o)&&OE(s,o,!1),i.__localeChainCache.set(r,s)}return s}function OE(t,e,n){let r=!0;for(let i=0;i<e.length&&De(r);i++){const s=e[i];ie(s)&&(r=GH(t,e[i],n))}return r}function GH(t,e,n){let r;const i=e.split("-");do{const s=i.join("-");r=KH(t,s,n),i.splice(-1,1)}while(i.length&&r===!0);return r}function KH(t,e,n){let r=!1;if(!t.includes(e)&&(r=!0,e)){r=e[e.length-1]!=="!";const i=e.replace(/!/g,"");t.push(i),(st(n)||be(n))&&n[i]&&(r=n[i])}return r}const zH="9.6.1",Nh=-1,ta="en-US",NE="",xE=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function QH(){return{upper:(t,e)=>e==="text"&&ie(t)?t.toUpperCase():e==="vnode"&&Ke(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&ie(t)?t.toLowerCase():e==="vnode"&&Ke(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&ie(t)?xE(t):e==="vnode"&&Ke(t)&&"__v_isVNode"in t?xE(t.children):t}}let iP;function DE(t){iP=t}let sP;function YH(t){sP=t}let oP;function XH(t){oP=t}let aP=null;const LE=t=>{aP=t},JH=()=>aP;let lP=null;const VE=t=>{lP=t},ZH=()=>lP;let ME=0;function eG(t={}){const e=gt(t.onWarn)?t.onWarn:KW,n=ie(t.version)?t.version:zH,r=ie(t.locale)||gt(t.locale)?t.locale:ta,i=gt(r)?ta:r,s=st(t.fallbackLocale)||be(t.fallbackLocale)||ie(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:i,o=be(t.messages)?t.messages:{[i]:{}},a=be(t.datetimeFormats)?t.datetimeFormats:{[i]:{}},l=be(t.numberFormats)?t.numberFormats:{[i]:{}},u=Jt({},t.modifiers||{},QH()),h=t.pluralRules||{},c=gt(t.missing)?t.missing:null,d=De(t.missingWarn)||Wi(t.missingWarn)?t.missingWarn:!0,f=De(t.fallbackWarn)||Wi(t.fallbackWarn)?t.fallbackWarn:!0,m=!!t.fallbackFormat,y=!!t.unresolving,v=gt(t.postTranslation)?t.postTranslation:null,p=be(t.processor)?t.processor:null,I=De(t.warnHtmlMessage)?t.warnHtmlMessage:!0,b=!!t.escapeParameter,E=gt(t.messageCompiler)?t.messageCompiler:iP,P=gt(t.messageResolver)?t.messageResolver:sP||kH,k=gt(t.localeFallbacker)?t.localeFallbacker:oP||HH,O=Ke(t.fallbackContext)?t.fallbackContext:void 0,V=t,F=Ke(V.__datetimeFormatters)?V.__datetimeFormatters:new Map,X=Ke(V.__numberFormatters)?V.__numberFormatters:new Map,pe=Ke(V.__meta)?V.__meta:{};ME++;const K={version:n,cid:ME,locale:r,fallbackLocale:s,messages:o,modifiers:u,pluralRules:h,missing:c,missingWarn:d,fallbackWarn:f,fallbackFormat:m,unresolving:y,postTranslation:v,processor:p,warnHtmlMessage:I,escapeParameter:b,messageCompiler:E,messageResolver:P,localeFallbacker:k,fallbackContext:O,onWarn:e,__meta:pe};return K.datetimeFormats=a,K.numberFormats=l,K.__datetimeFormatters=F,K.__numberFormatters=X,__INTLIFY_PROD_DEVTOOLS__&&BH(K,n,pe),K}function Kg(t,e,n,r,i){const{missing:s,onWarn:o}=t;if(s!==null){const a=s(t,n,e,i);return ie(a)?a:e}else return e}function Ba(t,e,n){const r=t;r.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function Af(t){return n=>tG(n,t)}function tG(t,e){const n=e.b||e.body;if((n.t||n.type)===1){const r=n,i=r.c||r.cases;return t.plural(i.reduce((s,o)=>[...s,FE(t,o)],[]))}else return FE(t,n)}function FE(t,e){const n=e.s||e.static;if(n)return t.type==="text"?n:t.normalize([n]);{const r=(e.i||e.items).reduce((i,s)=>[...i,Ym(t,s)],[]);return t.normalize(r)}}function Ym(t,e){const n=e.t||e.type;switch(n){case 3:const r=e;return r.v||r.value;case 9:const i=e;return i.v||i.value;case 4:const s=e;return t.interpolate(t.named(s.k||s.key));case 5:const o=e;return t.interpolate(t.list(o.i!=null?o.i:o.index));case 6:const a=e,l=a.m||a.modifier;return t.linked(Ym(t,a.k||a.key),l?Ym(t,l):void 0,t.type);case 7:const u=e;return u.v||u.value;case 8:const h=e;return h.v||h.value;default:throw new Error(`unhandled node type on format message part: ${n}`)}}const cP=Ie.__EXTEND_POINT__,au=Wg(cP),Ti={INVALID_ARGUMENT:cP,INVALID_DATE_ARGUMENT:au(),INVALID_ISO_DATE_ARGUMENT:au(),NOT_SUPPORT_NON_STRING_MESSAGE:au(),__EXTEND_POINT__:au()};function As(t){return Ta(t,null,void 0)}const uP=t=>t;let Io=Object.create(null);const na=t=>Ke(t)&&(t.t===0||t.type===0)&&("b"in t||"body"in t);function dP(t,e={}){let n=!1;const r=e.onError||ZW;return e.onError=i=>{n=!0,r(i)},{...TH(t,e),detectError:n}}const nG=(t,e)=>{if(!ie(t))throw As(Ti.NOT_SUPPORT_NON_STRING_MESSAGE);{De(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||uP)(t),i=Io[r];if(i)return i;const{code:s,detectError:o}=dP(t,e),a=new Function(`return ${s}`)();return o?a:Io[r]=a}};function rG(t,e){if(__INTLIFY_JIT_COMPILATION__&&!__INTLIFY_DROP_MESSAGE_COMPILER__&&ie(t)){De(e.warnHtmlMessage)&&e.warnHtmlMessage;const r=(e.onCacheKey||uP)(t),i=Io[r];if(i)return i;const{ast:s,detectError:o}=dP(t,{...e,location:!1,jit:!0}),a=Af(s);return o?a:Io[r]=a}else{const n=t.cacheKey;if(n){const r=Io[n];return r||(Io[n]=Af(t))}else return Af(t)}}const UE=()=>"",Un=t=>gt(t);function $E(t,...e){const{fallbackFormat:n,postTranslation:r,unresolving:i,messageCompiler:s,fallbackLocale:o,messages:a}=t,[l,u]=Xm(...e),h=De(u.missingWarn)?u.missingWarn:t.missingWarn,c=De(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn,d=De(u.escapeParameter)?u.escapeParameter:t.escapeParameter,f=!!u.resolvedMessage,m=ie(u.default)||De(u.default)?De(u.default)?s?l:()=>l:u.default:n?s?l:()=>l:"",y=n||m!=="",v=Gg(t,u);d&&iG(u);let[p,I,b]=f?[l,v,a[v]||{}]:hP(t,l,v,o,c,h),E=p,P=l;if(!f&&!(ie(E)||na(E)||Un(E))&&y&&(E=m,P=E),!f&&(!(ie(E)||na(E)||Un(E))||!ie(I)))return i?Nh:l;let k=!1;const O=()=>{k=!0},V=Un(E)?E:fP(t,l,I,E,P,O);if(k)return E;const F=aG(t,I,b,u),X=UH(F),pe=sG(t,V,X),K=r?r(pe,l):pe;if(__INTLIFY_PROD_DEVTOOLS__){const ue={timestamp:Date.now(),key:ie(l)?l:Un(E)?E.key:"",locale:I||(Un(E)?E.locale:""),format:ie(E)?E:Un(E)?E.source:"",message:K};ue.meta=Jt({},t.__meta,JH()||{}),jH(ue)}return K}function iG(t){st(t.list)?t.list=t.list.map(e=>ie(e)?wE(e):e):Ke(t.named)&&Object.keys(t.named).forEach(e=>{ie(t.named[e])&&(t.named[e]=wE(t.named[e]))})}function hP(t,e,n,r,i,s){const{messages:o,onWarn:a,messageResolver:l,localeFallbacker:u}=t,h=u(t,r,n);let c={},d,f=null;const m="translate";for(let y=0;y<h.length&&(d=h[y],c=o[d]||{},(f=l(c,e))===null&&(f=c[e]),!(ie(f)||na(f)||Un(f)));y++){const v=Kg(t,e,d,s,m);v!==e&&(f=v)}return[f,d,c]}function fP(t,e,n,r,i,s){const{messageCompiler:o,warnHtmlMessage:a}=t;if(Un(r)){const u=r;return u.locale=u.locale||n,u.key=u.key||e,u}if(o==null){const u=()=>r;return u.locale=n,u.key=e,u}const l=o(r,oG(t,n,i,r,a,s));return l.locale=n,l.key=e,l.source=r,l}function sG(t,e,n){return e(n)}function Xm(...t){const[e,n,r]=t,i={};if(!ie(e)&&!xt(e)&&!Un(e)&&!na(e))throw As(Ti.INVALID_ARGUMENT);const s=xt(e)?String(e):(Un(e),e);return xt(n)?i.plural=n:ie(n)?i.default=n:be(n)&&!Oh(n)?i.named=n:st(n)&&(i.list=n),xt(r)?i.plural=r:ie(r)?i.default=r:be(r)&&Jt(i,r),[s,i]}function oG(t,e,n,r,i,s){return{locale:e,key:n,warnHtmlMessage:i,onError:o=>{throw s&&s(o),o},onCacheKey:o=>BW(e,n,o)}}function aG(t,e,n,r){const{modifiers:i,pluralRules:s,messageResolver:o,fallbackLocale:a,fallbackWarn:l,missingWarn:u,fallbackContext:h}=t,d={locale:e,modifiers:i,pluralRules:s,messages:f=>{let m=o(n,f);if(m==null&&h){const[,,y]=hP(h,f,e,a,l,u);m=o(y,f)}if(ie(m)||na(m)){let y=!1;const p=fP(t,f,e,m,f,()=>{y=!0});return y?UE:p}else return Un(m)?m:UE}};return t.processor&&(d.processor=t.processor),r.list&&(d.list=r.list),r.named&&(d.named=r.named),xt(r.plural)&&(d.pluralIndex=r.plural),d}function BE(t,...e){const{datetimeFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:o}=t,{__datetimeFormatters:a}=t,[l,u,h,c]=Jm(...e),d=De(h.missingWarn)?h.missingWarn:t.missingWarn;De(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const f=!!h.part,m=Gg(t,h),y=o(t,i,m);if(!ie(l)||l==="")return new Intl.DateTimeFormat(m,c).format(u);let v={},p,I=null;const b="datetime format";for(let k=0;k<y.length&&(p=y[k],v=n[p]||{},I=v[l],!be(I));k++)Kg(t,l,p,d,b);if(!be(I)||!ie(p))return r?Nh:l;let E=`${p}__${l}`;Oh(c)||(E=`${E}__${JSON.stringify(c)}`);let P=a.get(E);return P||(P=new Intl.DateTimeFormat(p,Jt({},I,c)),a.set(E,P)),f?P.formatToParts(u):P.format(u)}const mP=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function Jm(...t){const[e,n,r,i]=t,s={};let o={},a;if(ie(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw As(Ti.INVALID_ISO_DATE_ARGUMENT);const u=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();a=new Date(u);try{a.toISOString()}catch{throw As(Ti.INVALID_ISO_DATE_ARGUMENT)}}else if(qW(e)){if(isNaN(e.getTime()))throw As(Ti.INVALID_DATE_ARGUMENT);a=e}else if(xt(e))a=e;else throw As(Ti.INVALID_ARGUMENT);return ie(n)?s.key=n:be(n)&&Object.keys(n).forEach(l=>{mP.includes(l)?o[l]=n[l]:s[l]=n[l]}),ie(r)?s.locale=r:be(r)&&(o=r),be(i)&&(o=i),[s.key||"",a,s,o]}function jE(t,e,n){const r=t;for(const i in n){const s=`${e}__${i}`;r.__datetimeFormatters.has(s)&&r.__datetimeFormatters.delete(s)}}function qE(t,...e){const{numberFormats:n,unresolving:r,fallbackLocale:i,onWarn:s,localeFallbacker:o}=t,{__numberFormatters:a}=t,[l,u,h,c]=Zm(...e),d=De(h.missingWarn)?h.missingWarn:t.missingWarn;De(h.fallbackWarn)?h.fallbackWarn:t.fallbackWarn;const f=!!h.part,m=Gg(t,h),y=o(t,i,m);if(!ie(l)||l==="")return new Intl.NumberFormat(m,c).format(u);let v={},p,I=null;const b="number format";for(let k=0;k<y.length&&(p=y[k],v=n[p]||{},I=v[l],!be(I));k++)Kg(t,l,p,d,b);if(!be(I)||!ie(p))return r?Nh:l;let E=`${p}__${l}`;Oh(c)||(E=`${E}__${JSON.stringify(c)}`);let P=a.get(E);return P||(P=new Intl.NumberFormat(p,Jt({},I,c)),a.set(E,P)),f?P.formatToParts(u):P.format(u)}const pP=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Zm(...t){const[e,n,r,i]=t,s={};let o={};if(!xt(e))throw As(Ti.INVALID_ARGUMENT);const a=e;return ie(n)?s.key=n:be(n)&&Object.keys(n).forEach(l=>{pP.includes(l)?o[l]=n[l]:s[l]=n[l]}),ie(r)?s.locale=r:be(r)&&(o=r),be(i)&&(o=i),[s.key||"",a,s,o]}function WE(t,e,n){const r=t;for(const i in n){const s=`${e}__${i}`;r.__numberFormatters.has(s)&&r.__numberFormatters.delete(s)}}wH();/*!
  * vue-i18n v9.6.1
  * (c) 2023 kazuya kawaguchi
  * Released under the MIT License.
  */const lG="9.6.1";function cG(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(Dr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(Dr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_JIT_COMPILATION__!="boolean"&&(Dr().__INTLIFY_JIT_COMPILATION__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(Dr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Dr().__INTLIFY_PROD_DEVTOOLS__=!1)}const _P=WH.__EXTEND_POINT__,hi=Wg(_P);hi(),hi(),hi(),hi(),hi(),hi(),hi(),hi();const gP=Ti.__EXTEND_POINT__,vn=Wg(gP),Ct={UNEXPECTED_RETURN_TYPE:gP,INVALID_ARGUMENT:vn(),MUST_BE_CALL_SETUP_TOP:vn(),NOT_INSTALLED:vn(),NOT_AVAILABLE_IN_LEGACY_MODE:vn(),REQUIRED_VALUE:vn(),INVALID_VALUE:vn(),CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:vn(),NOT_INSTALLED_WITH_PROVIDE:vn(),UNEXPECTED_ERROR:vn(),NOT_COMPATIBLE_LEGACY_VUE_I18N:vn(),BRIDGE_SUPPORT_VUE_2_ONLY:vn(),MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION:vn(),NOT_AVAILABLE_COMPOSITION_IN_LEGACY:vn(),__EXTEND_POINT__:vn()};function Dt(t,...e){return Ta(t,null,void 0)}const ep=ts("__translateVNode"),tp=ts("__datetimeParts"),np=ts("__numberParts"),yP=ts("__setPluralRules"),vP=ts("__injectWithOption"),rp=ts("__dispose");function sc(t){if(!Ke(t))return t;for(const e in t)if(rc(t,e))if(!e.includes("."))Ke(t[e])&&sc(t[e]);else{const n=e.split("."),r=n.length-1;let i=t,s=!1;for(let o=0;o<r;o++){if(n[o]in i||(i[n[o]]={}),!Ke(i[n[o]])){s=!0;break}i=i[n[o]]}s||(i[n[r]]=t[e],delete t[e]),Ke(i[n[r]])&&sc(i[n[r]])}return t}function xh(t,e){const{messages:n,__i18n:r,messageResolver:i,flatJson:s}=e,o=be(n)?n:st(r)?{}:{[t]:{}};if(st(r)&&r.forEach(a=>{if("locale"in a&&"resource"in a){const{locale:l,resource:u}=a;l?(o[l]=o[l]||{},yl(u,o[l])):yl(u,o)}else ie(a)&&yl(JSON.parse(a),o)}),i==null&&s)for(const a in o)rc(o,a)&&sc(o[a]);return o}const lu=t=>!Ke(t)||st(t);function yl(t,e){if(lu(t)||lu(e))throw Dt(Ct.INVALID_VALUE);for(const n in t)rc(t,n)&&(lu(t[n])||lu(e[n])?e[n]=t[n]:yl(t[n],e[n]))}function IP(t){return t.type}function EP(t,e,n){let r=Ke(e.messages)?e.messages:{};"__i18nGlobal"in n&&(r=xh(t.locale.value,{messages:r,__i18n:n.__i18nGlobal}));const i=Object.keys(r);i.length&&i.forEach(s=>{t.mergeLocaleMessage(s,r[s])});{if(Ke(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(o=>{t.mergeDateTimeFormat(o,e.datetimeFormats[o])})}if(Ke(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(o=>{t.mergeNumberFormat(o,e.numberFormats[o])})}}}function HE(t){return Se(lc,null,t,0)}const GE="__INTLIFY_META__",KE=()=>[],uG=()=>!1;let zE=0;function QE(t){return(e,n,r,i)=>t(n,r,br()||void 0,i)}const dG=()=>{const t=br();let e=null;return t&&(e=IP(t)[GE])?{[GE]:e}:null};function zg(t={},e){const{__root:n,__injectWithOption:r}=t,i=n===void 0,s=t.flatJson;let o=De(t.inheritLocale)?t.inheritLocale:!0;const a=nt(n&&o?n.locale.value:ie(t.locale)?t.locale:ta),l=nt(n&&o?n.fallbackLocale.value:ie(t.fallbackLocale)||st(t.fallbackLocale)||be(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:a.value),u=nt(xh(a.value,t)),h=nt(be(t.datetimeFormats)?t.datetimeFormats:{[a.value]:{}}),c=nt(be(t.numberFormats)?t.numberFormats:{[a.value]:{}});let d=n?n.missingWarn:De(t.missingWarn)||Wi(t.missingWarn)?t.missingWarn:!0,f=n?n.fallbackWarn:De(t.fallbackWarn)||Wi(t.fallbackWarn)?t.fallbackWarn:!0,m=n?n.fallbackRoot:De(t.fallbackRoot)?t.fallbackRoot:!0,y=!!t.fallbackFormat,v=gt(t.missing)?t.missing:null,p=gt(t.missing)?QE(t.missing):null,I=gt(t.postTranslation)?t.postTranslation:null,b=n?n.warnHtmlMessage:De(t.warnHtmlMessage)?t.warnHtmlMessage:!0,E=!!t.escapeParameter;const P=n?n.modifiers:be(t.modifiers)?t.modifiers:{};let k=t.pluralRules||n&&n.pluralRules,O;O=(()=>{i&&VE(null);const C={version:lG,locale:a.value,fallbackLocale:l.value,messages:u.value,modifiers:P,pluralRules:k,missing:p===null?void 0:p,missingWarn:d,fallbackWarn:f,fallbackFormat:y,unresolving:!0,postTranslation:I===null?void 0:I,warnHtmlMessage:b,escapeParameter:E,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};C.datetimeFormats=h.value,C.numberFormats=c.value,C.__datetimeFormatters=be(O)?O.__datetimeFormatters:void 0,C.__numberFormatters=be(O)?O.__numberFormatters:void 0;const M=eG(C);return i&&VE(M),M})(),Ba(O,a.value,l.value);function F(){return[a.value,l.value,u.value,h.value,c.value]}const X=ve({get:()=>a.value,set:C=>{a.value=C,O.locale=a.value}}),pe=ve({get:()=>l.value,set:C=>{l.value=C,O.fallbackLocale=l.value,Ba(O,a.value,C)}}),K=ve(()=>u.value),ue=ve(()=>h.value),Te=ve(()=>c.value);function Ne(){return gt(I)?I:null}function te(C){I=C,O.postTranslation=C}function Ee(){return v}function ge(C){C!==null&&(p=QE(C)),v=C,O.missing=p}const Fe=(C,M,ae,A,R,U)=>{F();let ne;try{__INTLIFY_PROD_DEVTOOLS__&&LE(dG()),i||(O.fallbackContext=n?ZH():void 0),ne=C(O)}finally{__INTLIFY_PROD_DEVTOOLS__&&LE(null),i||(O.fallbackContext=void 0)}if(ae!=="translate exists"&&xt(ne)&&ne===Nh||ae==="translate exists"&&!ne){const[Oe,Ae]=M();return n&&m?A(n):R(Oe)}else{if(U(ne))return ne;throw Dt(Ct.UNEXPECTED_RETURN_TYPE)}};function ut(...C){return Fe(M=>Reflect.apply($E,null,[M,...C]),()=>Xm(...C),"translate",M=>Reflect.apply(M.t,M,[...C]),M=>M,M=>ie(M))}function Et(...C){const[M,ae,A]=C;if(A&&!Ke(A))throw Dt(Ct.INVALID_ARGUMENT);return ut(M,ae,Jt({resolvedMessage:!0},A||{}))}function dt(...C){return Fe(M=>Reflect.apply(BE,null,[M,...C]),()=>Jm(...C),"datetime format",M=>Reflect.apply(M.d,M,[...C]),()=>NE,M=>ie(M))}function Qe(...C){return Fe(M=>Reflect.apply(qE,null,[M,...C]),()=>Zm(...C),"number format",M=>Reflect.apply(M.n,M,[...C]),()=>NE,M=>ie(M))}function Wt(C){return C.map(M=>ie(M)||xt(M)||De(M)?HE(String(M)):M)}const ce={normalize:Wt,interpolate:C=>C,type:"vnode"};function D(...C){return Fe(M=>{let ae;const A=M;try{A.processor=ce,ae=Reflect.apply($E,null,[A,...C])}finally{A.processor=null}return ae},()=>Xm(...C),"translate",M=>M[ep](...C),M=>[HE(M)],M=>st(M))}function q(...C){return Fe(M=>Reflect.apply(qE,null,[M,...C]),()=>Zm(...C),"number format",M=>M[np](...C),KE,M=>ie(M)||st(M))}function G(...C){return Fe(M=>Reflect.apply(BE,null,[M,...C]),()=>Jm(...C),"datetime format",M=>M[tp](...C),KE,M=>ie(M)||st(M))}function re(C){k=C,O.pluralRules=k}function ye(C,M){return Fe(()=>{if(!C)return!1;const ae=ie(M)?M:a.value,A=g(ae),R=O.messageResolver(A,C);return na(R)||Un(R)||ie(R)},()=>[C],"translate exists",ae=>(console.log("root ... te"),Reflect.apply(ae.te,ae,[C,M])),uG,ae=>De(ae))}function w(C){let M=null;const ae=rP(O,l.value,a.value);for(let A=0;A<ae.length;A++){const R=u.value[ae[A]]||{},U=O.messageResolver(R,C);if(U!=null){M=U;break}}return M}function _(C){const M=w(C);return M??(n?n.tm(C)||{}:{})}function g(C){return u.value[C]||{}}function T(C,M){if(s){const ae={[C]:M};for(const A in ae)rc(ae,A)&&sc(ae[A]);M=ae[C]}u.value[C]=M,O.messages=u.value}function S(C,M){u.value[C]=u.value[C]||{};const ae={[C]:M};for(const A in ae)rc(ae,A)&&sc(ae[A]);M=ae[C],yl(M,u.value[C]),O.messages=u.value}function x(C){return h.value[C]||{}}function $(C,M){h.value[C]=M,O.datetimeFormats=h.value,jE(O,C,M)}function j(C,M){h.value[C]=Jt(h.value[C]||{},M),O.datetimeFormats=h.value,jE(O,C,M)}function z(C){return c.value[C]||{}}function H(C,M){c.value[C]=M,O.numberFormats=c.value,WE(O,C,M)}function he(C,M){c.value[C]=Jt(c.value[C]||{},M),O.numberFormats=c.value,WE(O,C,M)}zE++,n&&zm&&(sn(n.locale,C=>{o&&(a.value=C,O.locale=C,Ba(O,a.value,l.value))}),sn(n.fallbackLocale,C=>{o&&(l.value=C,O.fallbackLocale=C,Ba(O,a.value,l.value))}));const Y={id:zE,locale:X,fallbackLocale:pe,get inheritLocale(){return o},set inheritLocale(C){o=C,C&&n&&(a.value=n.locale.value,l.value=n.fallbackLocale.value,Ba(O,a.value,l.value))},get availableLocales(){return Object.keys(u.value).sort()},messages:K,get modifiers(){return P},get pluralRules(){return k||{}},get isGlobal(){return i},get missingWarn(){return d},set missingWarn(C){d=C,O.missingWarn=d},get fallbackWarn(){return f},set fallbackWarn(C){f=C,O.fallbackWarn=f},get fallbackRoot(){return m},set fallbackRoot(C){m=C},get fallbackFormat(){return y},set fallbackFormat(C){y=C,O.fallbackFormat=y},get warnHtmlMessage(){return b},set warnHtmlMessage(C){b=C,O.warnHtmlMessage=C},get escapeParameter(){return E},set escapeParameter(C){E=C,O.escapeParameter=C},t:ut,getLocaleMessage:g,setLocaleMessage:T,mergeLocaleMessage:S,getPostTranslationHandler:Ne,setPostTranslationHandler:te,getMissingHandler:Ee,setMissingHandler:ge,[yP]:re};return Y.datetimeFormats=ue,Y.numberFormats=Te,Y.rt=Et,Y.te=ye,Y.tm=_,Y.d=dt,Y.n=Qe,Y.getDateTimeFormat=x,Y.setDateTimeFormat=$,Y.mergeDateTimeFormat=j,Y.getNumberFormat=z,Y.setNumberFormat=H,Y.mergeNumberFormat=he,Y[vP]=r,Y[ep]=D,Y[tp]=G,Y[np]=q,Y}function hG(t){const e=ie(t.locale)?t.locale:ta,n=ie(t.fallbackLocale)||st(t.fallbackLocale)||be(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,r=gt(t.missing)?t.missing:void 0,i=De(t.silentTranslationWarn)||Wi(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=De(t.silentFallbackWarn)||Wi(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,o=De(t.fallbackRoot)?t.fallbackRoot:!0,a=!!t.formatFallbackMessages,l=be(t.modifiers)?t.modifiers:{},u=t.pluralizationRules,h=gt(t.postTranslation)?t.postTranslation:void 0,c=ie(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,d=!!t.escapeParameterHtml,f=De(t.sync)?t.sync:!0;let m=t.messages;if(be(t.sharedMessages)){const P=t.sharedMessages;m=Object.keys(P).reduce((O,V)=>{const F=O[V]||(O[V]={});return Jt(F,P[V]),O},m||{})}const{__i18n:y,__root:v,__injectWithOption:p}=t,I=t.datetimeFormats,b=t.numberFormats,E=t.flatJson;return{locale:e,fallbackLocale:n,messages:m,flatJson:E,datetimeFormats:I,numberFormats:b,missing:r,missingWarn:i,fallbackWarn:s,fallbackRoot:o,fallbackFormat:a,modifiers:l,pluralRules:u,postTranslation:h,warnHtmlMessage:c,escapeParameter:d,messageResolver:t.messageResolver,inheritLocale:f,__i18n:y,__root:v,__injectWithOption:p}}function ip(t={},e){{const n=zg(hG(t)),{__extender:r}=t,i={id:n.id,get locale(){return n.locale.value},set locale(s){n.locale.value=s},get fallbackLocale(){return n.fallbackLocale.value},set fallbackLocale(s){n.fallbackLocale.value=s},get messages(){return n.messages.value},get datetimeFormats(){return n.datetimeFormats.value},get numberFormats(){return n.numberFormats.value},get availableLocales(){return n.availableLocales},get formatter(){return{interpolate(){return[]}}},set formatter(s){},get missing(){return n.getMissingHandler()},set missing(s){n.setMissingHandler(s)},get silentTranslationWarn(){return De(n.missingWarn)?!n.missingWarn:n.missingWarn},set silentTranslationWarn(s){n.missingWarn=De(s)?!s:s},get silentFallbackWarn(){return De(n.fallbackWarn)?!n.fallbackWarn:n.fallbackWarn},set silentFallbackWarn(s){n.fallbackWarn=De(s)?!s:s},get modifiers(){return n.modifiers},get formatFallbackMessages(){return n.fallbackFormat},set formatFallbackMessages(s){n.fallbackFormat=s},get postTranslation(){return n.getPostTranslationHandler()},set postTranslation(s){n.setPostTranslationHandler(s)},get sync(){return n.inheritLocale},set sync(s){n.inheritLocale=s},get warnHtmlInMessage(){return n.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(s){n.warnHtmlMessage=s!=="off"},get escapeParameterHtml(){return n.escapeParameter},set escapeParameterHtml(s){n.escapeParameter=s},get preserveDirectiveContent(){return!0},set preserveDirectiveContent(s){},get pluralizationRules(){return n.pluralRules||{}},__composer:n,t(...s){const[o,a,l]=s,u={};let h=null,c=null;if(!ie(o))throw Dt(Ct.INVALID_ARGUMENT);const d=o;return ie(a)?u.locale=a:st(a)?h=a:be(a)&&(c=a),st(l)?h=l:be(l)&&(c=l),Reflect.apply(n.t,n,[d,h||c||{},u])},rt(...s){return Reflect.apply(n.rt,n,[...s])},tc(...s){const[o,a,l]=s,u={plural:1};let h=null,c=null;if(!ie(o))throw Dt(Ct.INVALID_ARGUMENT);const d=o;return ie(a)?u.locale=a:xt(a)?u.plural=a:st(a)?h=a:be(a)&&(c=a),ie(l)?u.locale=l:st(l)?h=l:be(l)&&(c=l),Reflect.apply(n.t,n,[d,h||c||{},u])},te(s,o){return n.te(s,o)},tm(s){return n.tm(s)},getLocaleMessage(s){return n.getLocaleMessage(s)},setLocaleMessage(s,o){n.setLocaleMessage(s,o)},mergeLocaleMessage(s,o){n.mergeLocaleMessage(s,o)},d(...s){return Reflect.apply(n.d,n,[...s])},getDateTimeFormat(s){return n.getDateTimeFormat(s)},setDateTimeFormat(s,o){n.setDateTimeFormat(s,o)},mergeDateTimeFormat(s,o){n.mergeDateTimeFormat(s,o)},n(...s){return Reflect.apply(n.n,n,[...s])},getNumberFormat(s){return n.getNumberFormat(s)},setNumberFormat(s,o){n.setNumberFormat(s,o)},mergeNumberFormat(s,o){n.mergeNumberFormat(s,o)},getChoiceIndex(s,o){return-1}};return i.__extender=r,i}}const Qg={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function fG({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((r,i)=>[...r,...i.type===Gt?i.children:[i]],[]):e.reduce((n,r)=>{const i=t[r];return i&&(n[r]=i()),n},{})}function TP(t){return Gt}const mG=Hi({name:"i18n-t",props:Jt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>xt(t)||!isNaN(t)}},Qg),setup(t,e){const{slots:n,attrs:r}=e,i=t.i18n||Yg({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(c=>c!=="_"),o={};t.locale&&(o.locale=t.locale),t.plural!==void 0&&(o.plural=ie(t.plural)?+t.plural:t.plural);const a=fG(e,s),l=i[ep](t.keypath,a,o),u=Jt({},r),h=ie(t.tag)||Ke(t.tag)?t.tag:TP();return Wr(h,u,l)}}}),YE=mG;function pG(t){return st(t)&&!ie(t[0])}function wP(t,e,n,r){const{slots:i,attrs:s}=e;return()=>{const o={part:!0};let a={};t.locale&&(o.locale=t.locale),ie(t.format)?o.key=t.format:Ke(t.format)&&(ie(t.format.key)&&(o.key=t.format.key),a=Object.keys(t.format).reduce((d,f)=>n.includes(f)?Jt({},d,{[f]:t.format[f]}):d,{}));const l=r(t.value,o,a);let u=[o.key];st(l)?u=l.map((d,f)=>{const m=i[d.type],y=m?m({[d.type]:d.value,index:f,parts:l}):[d.value];return pG(y)&&(y[0].key=`${d.type}-${f}`),y}):ie(l)&&(u=[l]);const h=Jt({},s),c=ie(t.tag)||Ke(t.tag)?t.tag:TP();return Wr(c,h,u)}}const _G=Hi({name:"i18n-n",props:Jt({value:{type:Number,required:!0},format:{type:[String,Object]}},Qg),setup(t,e){const n=t.i18n||Yg({useScope:"parent",__useComponent:!0});return wP(t,e,pP,(...r)=>n[np](...r))}}),XE=_G,gG=Hi({name:"i18n-d",props:Jt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Qg),setup(t,e){const n=t.i18n||Yg({useScope:"parent",__useComponent:!0});return wP(t,e,mP,(...r)=>n[tp](...r))}}),JE=gG;function yG(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const r=n.__getInstance(e);return r!=null?r.__composer:t.global.__composer}}function vG(t){const e=o=>{const{instance:a,modifiers:l,value:u}=o;if(!a||!a.$)throw Dt(Ct.UNEXPECTED_ERROR);const h=yG(t,a.$),c=ZE(u);return[Reflect.apply(h.t,h,[...eT(c)]),h]};return{created:(o,a)=>{const[l,u]=e(a);zm&&t.global===u&&(o.__i18nWatcher=sn(u.locale,()=>{a.instance&&a.instance.$forceUpdate()})),o.__composer=u,o.textContent=l},unmounted:o=>{zm&&o.__i18nWatcher&&(o.__i18nWatcher(),o.__i18nWatcher=void 0,delete o.__i18nWatcher),o.__composer&&(o.__composer=void 0,delete o.__composer)},beforeUpdate:(o,{value:a})=>{if(o.__composer){const l=o.__composer,u=ZE(a);o.textContent=Reflect.apply(l.t,l,[...eT(u)])}},getSSRProps:o=>{const[a]=e(o);return{textContent:a}}}}function ZE(t){if(ie(t))return{path:t};if(be(t)){if(!("path"in t))throw Dt(Ct.REQUIRED_VALUE,"path");return t}else throw Dt(Ct.INVALID_VALUE)}function eT(t){const{path:e,locale:n,args:r,choice:i,plural:s}=t,o={},a=r||{};return ie(n)&&(o.locale=n),xt(i)&&(o.plural=i),xt(s)&&(o.plural=s),[e,a,o]}function IG(t,e,...n){const r=be(n[0])?n[0]:{},i=!!r.useI18nComponentName;(De(r.globalInstall)?r.globalInstall:!0)&&([i?"i18n":YE.name,"I18nT"].forEach(o=>t.component(o,YE)),[XE.name,"I18nN"].forEach(o=>t.component(o,XE)),[JE.name,"I18nD"].forEach(o=>t.component(o,JE))),t.directive("t",vG(e))}function EG(t,e,n){return{beforeCreate(){const r=br();if(!r)throw Dt(Ct.UNEXPECTED_ERROR);const i=this.$options;if(i.i18n){const s=i.i18n;if(i.__i18n&&(s.__i18n=i.__i18n),s.__root=e,this===this.$root)this.$i18n=tT(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=ip(s);const o=this.$i18n;o.__extender&&(o.__disposer=o.__extender(this.$i18n))}}else if(i.__i18n)if(this===this.$root)this.$i18n=tT(t,i);else{this.$i18n=ip({__i18n:i.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;i.__i18nGlobal&&EP(e,i,i),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,o)=>this.$i18n.te(s,o),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(r,this.$i18n)},mounted(){},unmounted(){const r=br();if(!r)throw Dt(Ct.UNEXPECTED_ERROR);const i=this.$i18n;delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,i.__disposer&&(i.__disposer(),delete i.__disposer,delete i.__extender),n.__deleteInstance(r),delete this.$i18n}}}function tT(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[yP](e.pluralizationRules||t.pluralizationRules);const n=xh(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(r=>t.mergeLocaleMessage(r,n[r])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(r=>t.mergeDateTimeFormat(r,e.datetimeFormats[r])),e.numberFormats&&Object.keys(e.numberFormats).forEach(r=>t.mergeNumberFormat(r,e.numberFormats[r])),t}const TG=ts("global-vue-i18n");function wG(t={},e){const n=__VUE_I18N_LEGACY_API__&&De(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,r=De(t.globalInjection)?t.globalInjection:!0,i=__VUE_I18N_LEGACY_API__&&n?!!t.allowComposition:!0,s=new Map,[o,a]=bG(t,n),l=ts("");function u(d){return s.get(d)||null}function h(d,f){s.set(d,f)}function c(d){s.delete(d)}{const d={get mode(){return __VUE_I18N_LEGACY_API__&&n?"legacy":"composition"},get allowComposition(){return i},async install(f,...m){if(f.__VUE_I18N_SYMBOL__=l,f.provide(f.__VUE_I18N_SYMBOL__,d),be(m[0])){const p=m[0];d.__composerExtend=p.__composerExtend,d.__vueI18nExtend=p.__vueI18nExtend}let y=null;!n&&r&&(y=xG(f,d.global)),__VUE_I18N_FULL_INSTALL__&&IG(f,d,...m),__VUE_I18N_LEGACY_API__&&n&&f.mixin(EG(a,a.__composer,d));const v=f.unmount;f.unmount=()=>{y&&y(),d.dispose(),v()}},get global(){return a},dispose(){o.stop()},__instances:s,__getInstance:u,__setInstance:h,__deleteInstance:c};return d}}function Yg(t={}){const e=br();if(e==null)throw Dt(Ct.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw Dt(Ct.NOT_INSTALLED);const n=AG(e),r=SG(n),i=IP(e),s=RG(t,i);if(__VUE_I18N_LEGACY_API__&&n.mode==="legacy"&&!t.__useComponent){if(!n.allowComposition)throw Dt(Ct.NOT_AVAILABLE_IN_LEGACY_MODE);return OG(e,s,r,t)}if(s==="global")return EP(r,t,i),r;if(s==="parent"){let l=PG(n,e,t.__useComponent);return l==null&&(l=r),l}const o=n;let a=o.__getInstance(e);if(a==null){const l=Jt({},t);"__i18n"in i&&(l.__i18n=i.__i18n),r&&(l.__root=r),a=zg(l),o.__composerExtend&&(a[rp]=o.__composerExtend(a)),kG(o,e,a),o.__setInstance(e,a)}return a}function bG(t,e,n){const r=dp();{const i=__VUE_I18N_LEGACY_API__&&e?r.run(()=>ip(t)):r.run(()=>zg(t));if(i==null)throw Dt(Ct.UNEXPECTED_ERROR);return[r,i]}}function AG(t){{const e=Ln(t.isCE?TG:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw Dt(t.isCE?Ct.NOT_INSTALLED_WITH_PROVIDE:Ct.UNEXPECTED_ERROR);return e}}function RG(t,e){return Oh(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function SG(t){return t.mode==="composition"?t.global:t.global.__composer}function PG(t,e,n=!1){let r=null;const i=e.root;let s=CG(e,n);for(;s!=null;){const o=t;if(t.mode==="composition")r=o.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const a=o.__getInstance(s);a!=null&&(r=a.__composer,n&&r&&!r[vP]&&(r=null))}if(r!=null||i===s)break;s=s.parent}return r}function CG(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function kG(t,e,n){ac(()=>{},e),Ap(()=>{const r=n;t.__deleteInstance(e);const i=r[rp];i&&(i(),delete r[rp])},e)}function OG(t,e,n,r={}){const i=e==="local",s=Ip(null);if(i&&t.proxy&&!(t.proxy.$options.i18n||t.proxy.$options.__i18n))throw Dt(Ct.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);const o=De(r.inheritLocale)?r.inheritLocale:!ie(r.locale),a=nt(!i||o?n.locale.value:ie(r.locale)?r.locale:ta),l=nt(!i||o?n.fallbackLocale.value:ie(r.fallbackLocale)||st(r.fallbackLocale)||be(r.fallbackLocale)||r.fallbackLocale===!1?r.fallbackLocale:a.value),u=nt(xh(a.value,r)),h=nt(be(r.datetimeFormats)?r.datetimeFormats:{[a.value]:{}}),c=nt(be(r.numberFormats)?r.numberFormats:{[a.value]:{}}),d=i?n.missingWarn:De(r.missingWarn)||Wi(r.missingWarn)?r.missingWarn:!0,f=i?n.fallbackWarn:De(r.fallbackWarn)||Wi(r.fallbackWarn)?r.fallbackWarn:!0,m=i?n.fallbackRoot:De(r.fallbackRoot)?r.fallbackRoot:!0,y=!!r.fallbackFormat,v=gt(r.missing)?r.missing:null,p=gt(r.postTranslation)?r.postTranslation:null,I=i?n.warnHtmlMessage:De(r.warnHtmlMessage)?r.warnHtmlMessage:!0,b=!!r.escapeParameter,E=i?n.modifiers:be(r.modifiers)?r.modifiers:{},P=r.pluralRules||i&&n.pluralRules;function k(){return[a.value,l.value,u.value,h.value,c.value]}const O=ve({get:()=>s.value?s.value.locale.value:a.value,set:g=>{s.value&&(s.value.locale.value=g),a.value=g}}),V=ve({get:()=>s.value?s.value.fallbackLocale.value:l.value,set:g=>{s.value&&(s.value.fallbackLocale.value=g),l.value=g}}),F=ve(()=>s.value?s.value.messages.value:u.value),X=ve(()=>h.value),pe=ve(()=>c.value);function K(){return s.value?s.value.getPostTranslationHandler():p}function ue(g){s.value&&s.value.setPostTranslationHandler(g)}function Te(){return s.value?s.value.getMissingHandler():v}function Ne(g){s.value&&s.value.setMissingHandler(g)}function te(g){return k(),g()}function Ee(...g){return s.value?te(()=>Reflect.apply(s.value.t,null,[...g])):te(()=>"")}function ge(...g){return s.value?Reflect.apply(s.value.rt,null,[...g]):""}function Fe(...g){return s.value?te(()=>Reflect.apply(s.value.d,null,[...g])):te(()=>"")}function ut(...g){return s.value?te(()=>Reflect.apply(s.value.n,null,[...g])):te(()=>"")}function Et(g){return s.value?s.value.tm(g):{}}function dt(g,T){return s.value?s.value.te(g,T):!1}function Qe(g){return s.value?s.value.getLocaleMessage(g):{}}function Wt(g,T){s.value&&(s.value.setLocaleMessage(g,T),u.value[g]=T)}function oe(g,T){s.value&&s.value.mergeLocaleMessage(g,T)}function ce(g){return s.value?s.value.getDateTimeFormat(g):{}}function D(g,T){s.value&&(s.value.setDateTimeFormat(g,T),h.value[g]=T)}function q(g,T){s.value&&s.value.mergeDateTimeFormat(g,T)}function G(g){return s.value?s.value.getNumberFormat(g):{}}function re(g,T){s.value&&(s.value.setNumberFormat(g,T),c.value[g]=T)}function ye(g,T){s.value&&s.value.mergeNumberFormat(g,T)}const w={get id(){return s.value?s.value.id:-1},locale:O,fallbackLocale:V,messages:F,datetimeFormats:X,numberFormats:pe,get inheritLocale(){return s.value?s.value.inheritLocale:o},set inheritLocale(g){s.value&&(s.value.inheritLocale=g)},get availableLocales(){return s.value?s.value.availableLocales:Object.keys(u.value)},get modifiers(){return s.value?s.value.modifiers:E},get pluralRules(){return s.value?s.value.pluralRules:P},get isGlobal(){return s.value?s.value.isGlobal:!1},get missingWarn(){return s.value?s.value.missingWarn:d},set missingWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackWarn(){return s.value?s.value.fallbackWarn:f},set fallbackWarn(g){s.value&&(s.value.missingWarn=g)},get fallbackRoot(){return s.value?s.value.fallbackRoot:m},set fallbackRoot(g){s.value&&(s.value.fallbackRoot=g)},get fallbackFormat(){return s.value?s.value.fallbackFormat:y},set fallbackFormat(g){s.value&&(s.value.fallbackFormat=g)},get warnHtmlMessage(){return s.value?s.value.warnHtmlMessage:I},set warnHtmlMessage(g){s.value&&(s.value.warnHtmlMessage=g)},get escapeParameter(){return s.value?s.value.escapeParameter:b},set escapeParameter(g){s.value&&(s.value.escapeParameter=g)},t:Ee,getPostTranslationHandler:K,setPostTranslationHandler:ue,getMissingHandler:Te,setMissingHandler:Ne,rt:ge,d:Fe,n:ut,tm:Et,te:dt,getLocaleMessage:Qe,setLocaleMessage:Wt,mergeLocaleMessage:oe,getDateTimeFormat:ce,setDateTimeFormat:D,mergeDateTimeFormat:q,getNumberFormat:G,setNumberFormat:re,mergeNumberFormat:ye};function _(g){g.locale.value=a.value,g.fallbackLocale.value=l.value,Object.keys(u.value).forEach(T=>{g.mergeLocaleMessage(T,u.value[T])}),Object.keys(h.value).forEach(T=>{g.mergeDateTimeFormat(T,h.value[T])}),Object.keys(c.value).forEach(T=>{g.mergeNumberFormat(T,c.value[T])}),g.escapeParameter=b,g.fallbackFormat=y,g.fallbackRoot=m,g.fallbackWarn=f,g.missingWarn=d,g.warnHtmlMessage=I}return YT(()=>{if(t.proxy==null||t.proxy.$i18n==null)throw Dt(Ct.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);const g=s.value=t.proxy.$i18n.__composer;e==="global"?(a.value=g.locale.value,l.value=g.fallbackLocale.value,u.value=g.messages.value,h.value=g.datetimeFormats.value,c.value=g.numberFormats.value):i&&_(g)}),w}const NG=["locale","fallbackLocale","availableLocales"],nT=["t","rt","d","n","tm","te"];function xG(t,e){const n=Object.create(null);return NG.forEach(i=>{const s=Object.getOwnPropertyDescriptor(e,i);if(!s)throw Dt(Ct.UNEXPECTED_ERROR);const o=Ye(s.value)?{get(){return s.value.value},set(a){s.value.value=a}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,i,o)}),t.config.globalProperties.$i18n=n,nT.forEach(i=>{const s=Object.getOwnPropertyDescriptor(e,i);if(!s||!s.value)throw Dt(Ct.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${i}`,s)}),()=>{delete t.config.globalProperties.$i18n,nT.forEach(i=>{delete t.config.globalProperties[`$${i}`]})}}cG();__INTLIFY_JIT_COMPILATION__?DE(rG):DE(nG);YH(OH);XH(rP);if(__INTLIFY_PROD_DEVTOOLS__){const t=Dr();t.__INTLIFY__=!0,$H(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}const DG={listen:"Listen to Great Music!"},LG={comment_count:"No comments | 1 comment | {count} comments"},VG={accept:"I accept Music's {0}",tos:"Terms of Service"},MG={my_songs:"My Songs"},FG={home:DG,song:LG,register:VG,manage:MG},UG={listen:"Écoutez de la bonne musique !"},$G={my_songs:"Mes chansons"},BG={home:UG,manage:$G},jG=wG({locale:"fr",fallbackLocale:"en",messages:{en:FG,fr:BG},numberFormats:{en:{currency:{style:"currency",currency:"USD"}},ja:{currency:{style:"currency",currency:"JPY"}}}});function qG(t={}){const{immediate:e=!1,onNeedRefresh:n,onOfflineReady:r,onRegistered:i,onRegisteredSW:s,onRegisterError:o}=t;let a,l;const u=async(c=!0)=>{await l};async function h(){if("serviceWorker"in navigator){const{Workbox:c}=await Vc(()=>import("./workbox-window.prod.es5-a7b12eab.js"),[]);a=new c("/sw.js",{scope:"/",type:"classic"}),a.addEventListener("activated",d=>{(d.isUpdate||d.isExternal)&&window.location.reload()}),a.addEventListener("installed",d=>{d.isUpdate||r==null||r()}),a.register({immediate:e}).then(d=>{s?s("/sw.js",d):i==null||i(d)}).catch(d=>{o==null||o(d)})}}return l=h(),u}const WG={},HG={type:"button"};function GG(t,e){return Ft(),Rn("button",HG," Press Me! ")}const KG=ro(WG,[["render",GG]]),zG=Object.freeze(Object.defineProperty({__proto__:null,default:KG},Symbol.toStringTag,{value:"Module"}));function QG(t,e,n){var r=-1,i=t.length;e<0&&(e=-e>i?0:i+e),n=n>i?i:n,n<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var s=Array(i);++r<i;)s[r]=t[r+e];return s}var YG=QG,XG=YG;function JG(t,e,n){var r=t.length;return n=n===void 0?r:n,!e&&n>=r?t:XG(t,e,n)}var ZG=JG,e9="\\ud800-\\udfff",t9="\\u0300-\\u036f",n9="\\ufe20-\\ufe2f",r9="\\u20d0-\\u20ff",i9=t9+n9+r9,s9="\\ufe0e\\ufe0f",o9="\\u200d",a9=RegExp("["+o9+e9+i9+s9+"]");function l9(t){return a9.test(t)}var bP=l9;function c9(t){return t.split("")}var u9=c9,AP="\\ud800-\\udfff",d9="\\u0300-\\u036f",h9="\\ufe20-\\ufe2f",f9="\\u20d0-\\u20ff",m9=d9+h9+f9,p9="\\ufe0e\\ufe0f",_9="["+AP+"]",sp="["+m9+"]",op="\\ud83c[\\udffb-\\udfff]",g9="(?:"+sp+"|"+op+")",RP="[^"+AP+"]",SP="(?:\\ud83c[\\udde6-\\uddff]){2}",PP="[\\ud800-\\udbff][\\udc00-\\udfff]",y9="\\u200d",CP=g9+"?",kP="["+p9+"]?",v9="(?:"+y9+"(?:"+[RP,SP,PP].join("|")+")"+kP+CP+")*",I9=kP+CP+v9,E9="(?:"+[RP+sp+"?",sp,SP,PP,_9].join("|")+")",T9=RegExp(op+"(?="+op+")|"+E9+I9,"g");function w9(t){return t.match(T9)||[]}var b9=w9,A9=u9,R9=bP,S9=b9;function P9(t){return R9(t)?S9(t):A9(t)}var C9=P9,k9=typeof pr=="object"&&pr&&pr.Object===Object&&pr,O9=k9,N9=O9,x9=typeof self=="object"&&self&&self.Object===Object&&self,D9=N9||x9||Function("return this")(),L9=D9,V9=L9,M9=V9.Symbol,Xg=M9;function F9(t,e){for(var n=-1,r=t==null?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}var U9=F9,$9=Array.isArray,B9=$9,rT=Xg,OP=Object.prototype,j9=OP.hasOwnProperty,q9=OP.toString,ja=rT?rT.toStringTag:void 0;function W9(t){var e=j9.call(t,ja),n=t[ja];try{t[ja]=void 0;var r=!0}catch{}var i=q9.call(t);return r&&(e?t[ja]=n:delete t[ja]),i}var H9=W9,G9=Object.prototype,K9=G9.toString;function z9(t){return K9.call(t)}var Q9=z9,iT=Xg,Y9=H9,X9=Q9,J9="[object Null]",Z9="[object Undefined]",sT=iT?iT.toStringTag:void 0;function e6(t){return t==null?t===void 0?Z9:J9:sT&&sT in Object(t)?Y9(t):X9(t)}var t6=e6;function n6(t){return t!=null&&typeof t=="object"}var r6=n6,i6=t6,s6=r6,o6="[object Symbol]";function a6(t){return typeof t=="symbol"||s6(t)&&i6(t)==o6}var l6=a6,oT=Xg,c6=U9,u6=B9,d6=l6,h6=1/0,aT=oT?oT.prototype:void 0,lT=aT?aT.toString:void 0;function NP(t){if(typeof t=="string")return t;if(u6(t))return c6(t,NP)+"";if(d6(t))return lT?lT.call(t):"";var e=t+"";return e=="0"&&1/t==-h6?"-0":e}var f6=NP,m6=f6;function p6(t){return t==null?"":m6(t)}var Dh=p6,_6=ZG,g6=bP,y6=C9,v6=Dh;function I6(t){return function(e){e=v6(e);var n=g6(e)?y6(e):void 0,r=n?n[0]:e.charAt(0),i=n?_6(n,1).join(""):e.slice(1);return r[t]()+i}}var E6=I6,T6=E6,w6=T6("toUpperCase"),xP=w6;const b6=Vg(xP);var A6=Dh,R6=xP;function S6(t){return R6(A6(t).toLowerCase())}var P6=S6;function C6(t,e,n,r){var i=-1,s=t==null?0:t.length;for(r&&s&&(n=t[++i]);++i<s;)n=e(n,t[i],i,t);return n}var k6=C6;function O6(t){return function(e){return t==null?void 0:t[e]}}var N6=O6,x6=N6,D6={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},L6=x6(D6),V6=L6,M6=V6,F6=Dh,U6=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,$6="\\u0300-\\u036f",B6="\\ufe20-\\ufe2f",j6="\\u20d0-\\u20ff",q6=$6+B6+j6,W6="["+q6+"]",H6=RegExp(W6,"g");function G6(t){return t=F6(t),t&&t.replace(U6,M6).replace(H6,"")}var K6=G6,z6=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Q6(t){return t.match(z6)||[]}var Y6=Q6,X6=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function J6(t){return X6.test(t)}var Z6=J6,DP="\\ud800-\\udfff",eK="\\u0300-\\u036f",tK="\\ufe20-\\ufe2f",nK="\\u20d0-\\u20ff",rK=eK+tK+nK,LP="\\u2700-\\u27bf",VP="a-z\\xdf-\\xf6\\xf8-\\xff",iK="\\xac\\xb1\\xd7\\xf7",sK="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",oK="\\u2000-\\u206f",aK=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",MP="A-Z\\xc0-\\xd6\\xd8-\\xde",lK="\\ufe0e\\ufe0f",FP=iK+sK+oK+aK,UP="['’]",cT="["+FP+"]",cK="["+rK+"]",$P="\\d+",uK="["+LP+"]",BP="["+VP+"]",jP="[^"+DP+FP+$P+LP+VP+MP+"]",dK="\\ud83c[\\udffb-\\udfff]",hK="(?:"+cK+"|"+dK+")",fK="[^"+DP+"]",qP="(?:\\ud83c[\\udde6-\\uddff]){2}",WP="[\\ud800-\\udbff][\\udc00-\\udfff]",go="["+MP+"]",mK="\\u200d",uT="(?:"+BP+"|"+jP+")",pK="(?:"+go+"|"+jP+")",dT="(?:"+UP+"(?:d|ll|m|re|s|t|ve))?",hT="(?:"+UP+"(?:D|LL|M|RE|S|T|VE))?",HP=hK+"?",GP="["+lK+"]?",_K="(?:"+mK+"(?:"+[fK,qP,WP].join("|")+")"+GP+HP+")*",gK="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yK="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",vK=GP+HP+_K,IK="(?:"+[uK,qP,WP].join("|")+")"+vK,EK=RegExp([go+"?"+BP+"+"+dT+"(?="+[cT,go,"$"].join("|")+")",pK+"+"+hT+"(?="+[cT,go+uT,"$"].join("|")+")",go+"?"+uT+"+"+dT,go+"+"+hT,yK,gK,$P,IK].join("|"),"g");function TK(t){return t.match(EK)||[]}var wK=TK,bK=Y6,AK=Z6,RK=Dh,SK=wK;function PK(t,e,n){return t=RK(t),e=n?void 0:e,e===void 0?AK(t)?SK(t):bK(t):t.match(e)||[]}var CK=PK,kK=k6,OK=K6,NK=CK,xK="['’]",DK=RegExp(xK,"g");function LK(t){return function(e){return kK(NK(OK(e).replace(DK,"")),t,"")}}var VK=LK,MK=P6,FK=VK,UK=FK(function(t,e,n){return e=e.toLowerCase(),t+(n?MK(e):e)}),$K=UK;const BK=Vg($K),jK={install(t){Object.entries(Object.assign({"../components/base/Button.vue":zG})).forEach(([n,r])=>{const i=b6(BK(n.split("/").pop().replace(/\.\w+$/,"")));t.component(`Base${i}`,r.default)})}};var KP={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(t,e){(function(n,r){t.exports=r()})(pr,function(){var n={};n.version="0.2.0";var r=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(m){var y,v;for(y in m)v=m[y],v!==void 0&&m.hasOwnProperty(y)&&(r[y]=v);return this},n.status=null,n.set=function(m){var y=n.isStarted();m=i(m,r.minimum,1),n.status=m===1?null:m;var v=n.render(!y),p=v.querySelector(r.barSelector),I=r.speed,b=r.easing;return v.offsetWidth,a(function(E){r.positionUsing===""&&(r.positionUsing=n.getPositioningCSS()),l(p,o(m,I,b)),m===1?(l(v,{transition:"none",opacity:1}),v.offsetWidth,setTimeout(function(){l(v,{transition:"all "+I+"ms linear",opacity:0}),setTimeout(function(){n.remove(),E()},I)},I)):setTimeout(E,I)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var m=function(){setTimeout(function(){n.status&&(n.trickle(),m())},r.trickleSpeed)};return r.trickle&&m(),this},n.done=function(m){return!m&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(m){var y=n.status;return y?(typeof m!="number"&&(m=(1-y)*i(Math.random()*y,.1,.95)),y=i(y+m,0,.994),n.set(y)):n.start()},n.trickle=function(){return n.inc(Math.random()*r.trickleRate)},function(){var m=0,y=0;n.promise=function(v){return!v||v.state()==="resolved"?this:(y===0&&n.start(),m++,y++,v.always(function(){y--,y===0?(m=0,n.done()):n.set((m-y)/m)}),this)}}(),n.render=function(m){if(n.isRendered())return document.getElementById("nprogress");h(document.documentElement,"nprogress-busy");var y=document.createElement("div");y.id="nprogress",y.innerHTML=r.template;var v=y.querySelector(r.barSelector),p=m?"-100":s(n.status||0),I=document.querySelector(r.parent),b;return l(v,{transition:"all 0 linear",transform:"translate3d("+p+"%,0,0)"}),r.showSpinner||(b=y.querySelector(r.spinnerSelector),b&&f(b)),I!=document.body&&h(I,"nprogress-custom-parent"),I.appendChild(y),y},n.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(r.parent),"nprogress-custom-parent");var m=document.getElementById("nprogress");m&&f(m)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var m=document.body.style,y="WebkitTransform"in m?"Webkit":"MozTransform"in m?"Moz":"msTransform"in m?"ms":"OTransform"in m?"O":"";return y+"Perspective"in m?"translate3d":y+"Transform"in m?"translate":"margin"};function i(m,y,v){return m<y?y:m>v?v:m}function s(m){return(-1+m)*100}function o(m,y,v){var p;return r.positionUsing==="translate3d"?p={transform:"translate3d("+s(m)+"%,0,0)"}:r.positionUsing==="translate"?p={transform:"translate("+s(m)+"%,0)"}:p={"margin-left":s(m)+"%"},p.transition="all "+y+"ms "+v,p}var a=function(){var m=[];function y(){var v=m.shift();v&&v(y)}return function(v){m.push(v),m.length==1&&y()}}(),l=function(){var m=["Webkit","O","Moz","ms"],y={};function v(E){return E.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(P,k){return k.toUpperCase()})}function p(E){var P=document.body.style;if(E in P)return E;for(var k=m.length,O=E.charAt(0).toUpperCase()+E.slice(1),V;k--;)if(V=m[k]+O,V in P)return V;return E}function I(E){return E=v(E),y[E]||(y[E]=p(E))}function b(E,P,k){P=I(P),E.style[P]=k}return function(E,P){var k=arguments,O,V;if(k.length==2)for(O in P)V=P[O],V!==void 0&&P.hasOwnProperty(O)&&b(E,O,V);else b(E,k[1],k[2])}}();function u(m,y){var v=typeof m=="string"?m:d(m);return v.indexOf(" "+y+" ")>=0}function h(m,y){var v=d(m),p=v+y;u(v,y)||(m.className=p.substring(1))}function c(m,y){var v=d(m),p;u(m,y)&&(p=v.replace(" "+y+" "," "),m.className=p.substring(1,p.length-1))}function d(m){return(" "+(m.className||"")+" ").replace(/\s+/gi," ")}function f(m){m&&m.parentNode&&m.parentNode.removeChild(m)}return n})})(KP);var qK=KP.exports;const fT=Vg(qK),WK=t=>{t.beforeEach((e,n,r)=>{fT.start(),r()}),t.afterEach(fT.done)};qG({immediate:!0});WK(Ug);pl.onAuthStateChanged(()=>{{const t=wO(Aq);t.use(RO()),t.use(Ug),t.use(UW),t.use(jG),t.use(jK),t.directive("icon",$W),t.mount("#app")}});export{Gt as F,ro as _,le as a,Se as b,Rn as c,nl as d,GK as e,HK as f,yk as g,ku as h,u5 as i,pl as j,Ps as k,El as l,kp as m,Fr as n,Ft as o,gw as p,Lp as q,An as r,d5 as s,wi as t,Lc as u,zK as v,Qn as w,KI as x,h5 as y,KK as z};
