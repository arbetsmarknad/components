const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./react-18-BpBgPb18.js","./index-CnX0ISab.js"])))=>i.map(i=>d[i]);
import{_ as ge}from"./iframe-BaHVuKQz.js";import{r as Ce,R as Y,a as M}from"./index-CnX0ISab.js";var ye=Object.create,he=Object.defineProperty,De=Object.getOwnPropertyDescriptor,Se=Object.getOwnPropertyNames,qe=Object.getPrototypeOf,Ge=Object.prototype.hasOwnProperty,O=(E,s)=>function(){return s||(0,E[Se(E)[0]])((s={exports:{}}).exports,s),s.exports},Fe=(E,s)=>{for(var t in s)he(E,t,{get:s[t],enumerable:!0})},Ue=(E,s,t,o)=>{if(s&&typeof s=="object"||typeof s=="function")for(let a of Se(s))!Ge.call(E,a)&&a!==t&&he(E,a,{get:()=>s[a],enumerable:!(o=De(s,a))||o.enumerable});return E},be=(E,s,t)=>(t=E!=null?ye(qe(E)):{},Ue(!E||!E.__esModule?he(t,"default",{value:E,enumerable:!0}):t,E)),le={exports:{}},oe={};/**
 * @license React
 * react-dom-test-utils.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function Ve(){if(_e)return oe;_e=1;var E=Ce(),s=!1;return oe.act=function(t){return s===!1&&(s=!0,console.error("`ReactDOMTestUtils.act` is deprecated in favor of `React.act`. Import `act` from `react` instead of `react-dom/test-utils`. See https://react.dev/warnings/react-dom-test-utils for more info.")),E.act(t)},oe}var Le;function Xe(){return Le||(Le=1,le.exports=Ve()),le.exports}Xe();var ue={};const{global:Me}=__STORYBOOK_MODULE_GLOBAL__;var Z=O({"../../node_modules/semver/internal/constants.js"(E,s){var t="2.0.0",o=Number.MAX_SAFE_INTEGER||9007199254740991,a=16,n=250,u=["major","premajor","minor","preminor","patch","prepatch","prerelease"];s.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:a,MAX_SAFE_BUILD_LENGTH:n,MAX_SAFE_INTEGER:o,RELEASE_TYPES:u,SEMVER_SPEC_VERSION:t,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}}}),J=O({"../../node_modules/semver/internal/debug.js"(E,s){var t=typeof process=="object"&&ue&&ue.NODE_DEBUG&&/\bsemver\b/i.test(ue.NODE_DEBUG)?(...o)=>console.error("SEMVER",...o):()=>{};s.exports=t}}),z=O({"../../node_modules/semver/internal/re.js"(E,s){var{MAX_SAFE_COMPONENT_LENGTH:t,MAX_SAFE_BUILD_LENGTH:o,MAX_LENGTH:a}=Z(),n=J();E=s.exports={};var u=E.re=[],h=E.safeRe=[],e=E.src=[],r=E.t={},_=0,i="[a-zA-Z0-9-]",p=[["\\s",1],["\\d",a],[i,o]],c=f=>{for(let[T,g]of p)f=f.split(`${T}*`).join(`${T}{0,${g}}`).split(`${T}+`).join(`${T}{1,${g}}`);return f},l=(f,T,g)=>{let A=c(T),P=_++;n(f,P,T),r[f]=P,e[P]=T,u[P]=new RegExp(T,g?"g":void 0),h[P]=new RegExp(A,g?"g":void 0)};l("NUMERICIDENTIFIER","0|[1-9]\\d*"),l("NUMERICIDENTIFIERLOOSE","\\d+"),l("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${i}*`),l("MAINVERSION",`(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})\\.(${e[r.NUMERICIDENTIFIER]})`),l("MAINVERSIONLOOSE",`(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})\\.(${e[r.NUMERICIDENTIFIERLOOSE]})`),l("PRERELEASEIDENTIFIER",`(?:${e[r.NUMERICIDENTIFIER]}|${e[r.NONNUMERICIDENTIFIER]})`),l("PRERELEASEIDENTIFIERLOOSE",`(?:${e[r.NUMERICIDENTIFIERLOOSE]}|${e[r.NONNUMERICIDENTIFIER]})`),l("PRERELEASE",`(?:-(${e[r.PRERELEASEIDENTIFIER]}(?:\\.${e[r.PRERELEASEIDENTIFIER]})*))`),l("PRERELEASELOOSE",`(?:-?(${e[r.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${e[r.PRERELEASEIDENTIFIERLOOSE]})*))`),l("BUILDIDENTIFIER",`${i}+`),l("BUILD",`(?:\\+(${e[r.BUILDIDENTIFIER]}(?:\\.${e[r.BUILDIDENTIFIER]})*))`),l("FULLPLAIN",`v?${e[r.MAINVERSION]}${e[r.PRERELEASE]}?${e[r.BUILD]}?`),l("FULL",`^${e[r.FULLPLAIN]}$`),l("LOOSEPLAIN",`[v=\\s]*${e[r.MAINVERSIONLOOSE]}${e[r.PRERELEASELOOSE]}?${e[r.BUILD]}?`),l("LOOSE",`^${e[r.LOOSEPLAIN]}$`),l("GTLT","((?:<|>)?=?)"),l("XRANGEIDENTIFIERLOOSE",`${e[r.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),l("XRANGEIDENTIFIER",`${e[r.NUMERICIDENTIFIER]}|x|X|\\*`),l("XRANGEPLAIN",`[v=\\s]*(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:\\.(${e[r.XRANGEIDENTIFIER]})(?:${e[r.PRERELEASE]})?${e[r.BUILD]}?)?)?`),l("XRANGEPLAINLOOSE",`[v=\\s]*(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:\\.(${e[r.XRANGEIDENTIFIERLOOSE]})(?:${e[r.PRERELEASELOOSE]})?${e[r.BUILD]}?)?)?`),l("XRANGE",`^${e[r.GTLT]}\\s*${e[r.XRANGEPLAIN]}$`),l("XRANGELOOSE",`^${e[r.GTLT]}\\s*${e[r.XRANGEPLAINLOOSE]}$`),l("COERCEPLAIN",`(^|[^\\d])(\\d{1,${t}})(?:\\.(\\d{1,${t}}))?(?:\\.(\\d{1,${t}}))?`),l("COERCE",`${e[r.COERCEPLAIN]}(?:$|[^\\d])`),l("COERCEFULL",e[r.COERCEPLAIN]+`(?:${e[r.PRERELEASE]})?(?:${e[r.BUILD]})?(?:$|[^\\d])`),l("COERCERTL",e[r.COERCE],!0),l("COERCERTLFULL",e[r.COERCEFULL],!0),l("LONETILDE","(?:~>?)"),l("TILDETRIM",`(\\s*)${e[r.LONETILDE]}\\s+`,!0),E.tildeTrimReplace="$1~",l("TILDE",`^${e[r.LONETILDE]}${e[r.XRANGEPLAIN]}$`),l("TILDELOOSE",`^${e[r.LONETILDE]}${e[r.XRANGEPLAINLOOSE]}$`),l("LONECARET","(?:\\^)"),l("CARETTRIM",`(\\s*)${e[r.LONECARET]}\\s+`,!0),E.caretTrimReplace="$1^",l("CARET",`^${e[r.LONECARET]}${e[r.XRANGEPLAIN]}$`),l("CARETLOOSE",`^${e[r.LONECARET]}${e[r.XRANGEPLAINLOOSE]}$`),l("COMPARATORLOOSE",`^${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]})$|^$`),l("COMPARATOR",`^${e[r.GTLT]}\\s*(${e[r.FULLPLAIN]})$|^$`),l("COMPARATORTRIM",`(\\s*)${e[r.GTLT]}\\s*(${e[r.LOOSEPLAIN]}|${e[r.XRANGEPLAIN]})`,!0),E.comparatorTrimReplace="$1$2$3",l("HYPHENRANGE",`^\\s*(${e[r.XRANGEPLAIN]})\\s+-\\s+(${e[r.XRANGEPLAIN]})\\s*$`),l("HYPHENRANGELOOSE",`^\\s*(${e[r.XRANGEPLAINLOOSE]})\\s+-\\s+(${e[r.XRANGEPLAINLOOSE]})\\s*$`),l("STAR","(<|>)?=?\\s*\\*"),l("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),l("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")}}),fe=O({"../../node_modules/semver/internal/parse-options.js"(E,s){var t=Object.freeze({loose:!0}),o=Object.freeze({}),a=n=>n?typeof n!="object"?t:n:o;s.exports=a}}),Ae=O({"../../node_modules/semver/internal/identifiers.js"(E,s){var t=/^[0-9]+$/,o=(n,u)=>{let h=t.test(n),e=t.test(u);return h&&e&&(n=+n,u=+u),n===u?0:h&&!e?-1:e&&!h?1:n<u?-1:1},a=(n,u)=>o(u,n);s.exports={compareIdentifiers:o,rcompareIdentifiers:a}}}),q=O({"../../node_modules/semver/classes/semver.js"(E,s){var t=J(),{MAX_LENGTH:o,MAX_SAFE_INTEGER:a}=Z(),{safeRe:n,t:u}=z(),h=fe(),{compareIdentifiers:e}=Ae(),r=class V{constructor(i,p){if(p=h(p),i instanceof V){if(i.loose===!!p.loose&&i.includePrerelease===!!p.includePrerelease)return i;i=i.version}else if(typeof i!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof i}".`);if(i.length>o)throw new TypeError(`version is longer than ${o} characters`);t("SemVer",i,p),this.options=p,this.loose=!!p.loose,this.includePrerelease=!!p.includePrerelease;let c=i.trim().match(p.loose?n[u.LOOSE]:n[u.FULL]);if(!c)throw new TypeError(`Invalid Version: ${i}`);if(this.raw=i,this.major=+c[1],this.minor=+c[2],this.patch=+c[3],this.major>a||this.major<0)throw new TypeError("Invalid major version");if(this.minor>a||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>a||this.patch<0)throw new TypeError("Invalid patch version");c[4]?this.prerelease=c[4].split(".").map(l=>{if(/^[0-9]+$/.test(l)){let f=+l;if(f>=0&&f<a)return f}return l}):this.prerelease=[],this.build=c[5]?c[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(i){if(t("SemVer.compare",this.version,this.options,i),!(i instanceof V)){if(typeof i=="string"&&i===this.version)return 0;i=new V(i,this.options)}return i.version===this.version?0:this.compareMain(i)||this.comparePre(i)}compareMain(i){return i instanceof V||(i=new V(i,this.options)),e(this.major,i.major)||e(this.minor,i.minor)||e(this.patch,i.patch)}comparePre(i){if(i instanceof V||(i=new V(i,this.options)),this.prerelease.length&&!i.prerelease.length)return-1;if(!this.prerelease.length&&i.prerelease.length)return 1;if(!this.prerelease.length&&!i.prerelease.length)return 0;let p=0;do{let c=this.prerelease[p],l=i.prerelease[p];if(t("prerelease compare",p,c,l),c===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(c===void 0)return-1;if(c!==l)return e(c,l)}while(++p)}compareBuild(i){i instanceof V||(i=new V(i,this.options));let p=0;do{let c=this.build[p],l=i.build[p];if(t("build compare",p,c,l),c===void 0&&l===void 0)return 0;if(l===void 0)return 1;if(c===void 0)return-1;if(c!==l)return e(c,l)}while(++p)}inc(i,p,c){switch(i){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",p,c);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",p,c);break;case"prepatch":this.prerelease.length=0,this.inc("patch",p,c),this.inc("pre",p,c);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",p,c),this.inc("pre",p,c);break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let l=Number(c)?1:0;if(!p&&c===!1)throw new Error("invalid increment argument: identifier is empty");if(this.prerelease.length===0)this.prerelease=[l];else{let f=this.prerelease.length;for(;--f>=0;)typeof this.prerelease[f]=="number"&&(this.prerelease[f]++,f=-2);if(f===-1){if(p===this.prerelease.join(".")&&c===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(l)}}if(p){let f=[p,l];c===!1&&(f=[p]),e(this.prerelease[0],p)===0?isNaN(this.prerelease[1])&&(this.prerelease=f):this.prerelease=f}break}default:throw new Error(`invalid increment argument: ${i}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};s.exports=r}}),H=O({"../../node_modules/semver/functions/parse.js"(E,s){var t=q(),o=(a,n,u=!1)=>{if(a instanceof t)return a;try{return new t(a,n)}catch(h){if(!u)return null;throw h}};s.exports=o}}),ke=O({"../../node_modules/semver/functions/valid.js"(E,s){var t=H(),o=(a,n)=>{let u=t(a,n);return u?u.version:null};s.exports=o}}),He=O({"../../node_modules/semver/functions/clean.js"(E,s){var t=H(),o=(a,n)=>{let u=t(a.trim().replace(/^[=v]+/,""),n);return u?u.version:null};s.exports=o}}),Be=O({"../../node_modules/semver/functions/inc.js"(E,s){var t=q(),o=(a,n,u,h,e)=>{typeof u=="string"&&(e=h,h=u,u=void 0);try{return new t(a instanceof t?a.version:a,u).inc(n,h,e).version}catch{return null}};s.exports=o}}),We=O({"../../node_modules/semver/functions/diff.js"(E,s){var t=H(),o=(a,n)=>{let u=t(a,null,!0),h=t(n,null,!0),e=u.compare(h);if(e===0)return null;let r=e>0,_=r?u:h,i=r?h:u,p=!!_.prerelease.length;if(i.prerelease.length&&!p)return!i.patch&&!i.minor?"major":_.patch?"patch":_.minor?"minor":"major";let c=p?"pre":"";return u.major!==h.major?c+"major":u.minor!==h.minor?c+"minor":u.patch!==h.patch?c+"patch":"prerelease"};s.exports=o}}),Ye=O({"../../node_modules/semver/functions/major.js"(E,s){var t=q(),o=(a,n)=>new t(a,n).major;s.exports=o}}),ze=O({"../../node_modules/semver/functions/minor.js"(E,s){var t=q(),o=(a,n)=>new t(a,n).minor;s.exports=o}}),Ke=O({"../../node_modules/semver/functions/patch.js"(E,s){var t=q(),o=(a,n)=>new t(a,n).patch;s.exports=o}}),Qe=O({"../../node_modules/semver/functions/prerelease.js"(E,s){var t=H(),o=(a,n)=>{let u=t(a,n);return u&&u.prerelease.length?u.prerelease:null};s.exports=o}}),U=O({"../../node_modules/semver/functions/compare.js"(E,s){var t=q(),o=(a,n,u)=>new t(a,u).compare(new t(n,u));s.exports=o}}),Ze=O({"../../node_modules/semver/functions/rcompare.js"(E,s){var t=U(),o=(a,n,u)=>t(n,a,u);s.exports=o}}),Je=O({"../../node_modules/semver/functions/compare-loose.js"(E,s){var t=U(),o=(a,n)=>t(a,n,!0);s.exports=o}}),de=O({"../../node_modules/semver/functions/compare-build.js"(E,s){var t=q(),o=(a,n,u)=>{let h=new t(a,u),e=new t(n,u);return h.compare(e)||h.compareBuild(e)};s.exports=o}}),er=O({"../../node_modules/semver/functions/sort.js"(E,s){var t=de(),o=(a,n)=>a.sort((u,h)=>t(u,h,n));s.exports=o}}),rr=O({"../../node_modules/semver/functions/rsort.js"(E,s){var t=de(),o=(a,n)=>a.sort((u,h)=>t(h,u,n));s.exports=o}}),ee=O({"../../node_modules/semver/functions/gt.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)>0;s.exports=o}}),ve=O({"../../node_modules/semver/functions/lt.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)<0;s.exports=o}}),we=O({"../../node_modules/semver/functions/eq.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)===0;s.exports=o}}),xe=O({"../../node_modules/semver/functions/neq.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)!==0;s.exports=o}}),Re=O({"../../node_modules/semver/functions/gte.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)>=0;s.exports=o}}),$e=O({"../../node_modules/semver/functions/lte.js"(E,s){var t=U(),o=(a,n,u)=>t(a,n,u)<=0;s.exports=o}}),je=O({"../../node_modules/semver/functions/cmp.js"(E,s){var t=we(),o=xe(),a=ee(),n=Re(),u=ve(),h=$e(),e=(r,_,i,p)=>{switch(_){case"===":return typeof r=="object"&&(r=r.version),typeof i=="object"&&(i=i.version),r===i;case"!==":return typeof r=="object"&&(r=r.version),typeof i=="object"&&(i=i.version),r!==i;case"":case"=":case"==":return t(r,i,p);case"!=":return o(r,i,p);case">":return a(r,i,p);case">=":return n(r,i,p);case"<":return u(r,i,p);case"<=":return h(r,i,p);default:throw new TypeError(`Invalid operator: ${_}`)}};s.exports=e}}),tr=O({"../../node_modules/semver/functions/coerce.js"(E,s){var t=q(),o=H(),{safeRe:a,t:n}=z(),u=(h,e)=>{if(h instanceof t)return h;if(typeof h=="number"&&(h=String(h)),typeof h!="string")return null;e=e||{};let r=null;if(!e.rtl)r=h.match(e.includePrerelease?a[n.COERCEFULL]:a[n.COERCE]);else{let f=e.includePrerelease?a[n.COERCERTLFULL]:a[n.COERCERTL],T;for(;(T=f.exec(h))&&(!r||r.index+r[0].length!==h.length);)(!r||T.index+T[0].length!==r.index+r[0].length)&&(r=T),f.lastIndex=T.index+T[1].length+T[2].length;f.lastIndex=-1}if(r===null)return null;let _=r[2],i=r[3]||"0",p=r[4]||"0",c=e.includePrerelease&&r[5]?`-${r[5]}`:"",l=e.includePrerelease&&r[6]?`+${r[6]}`:"";return o(`${_}.${i}.${p}${c}${l}`,e)};s.exports=u}}),sr=O({"../../node_modules/semver/internal/lrucache.js"(E,s){var t=class{constructor(){this.max=1e3,this.map=new Map}get(o){let a=this.map.get(o);if(a!==void 0)return this.map.delete(o),this.map.set(o,a),a}delete(o){return this.map.delete(o)}set(o,a){if(!this.delete(o)&&a!==void 0){if(this.map.size>=this.max){let n=this.map.keys().next().value;this.delete(n)}this.map.set(o,a)}return this}};s.exports=t}}),b=O({"../../node_modules/semver/classes/range.js"(E,s){var t=/\s+/g,o=class K{constructor(m,$){if($=u($),m instanceof K)return m.loose===!!$.loose&&m.includePrerelease===!!$.includePrerelease?m:new K(m.raw,$);if(m instanceof h)return this.raw=m.value,this.set=[[m]],this.formatted=void 0,this;if(this.options=$,this.loose=!!$.loose,this.includePrerelease=!!$.includePrerelease,this.raw=m.trim().replace(t," "),this.set=this.raw.split("||").map(v=>this.parseRange(v.trim())).filter(v=>v.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let v=this.set[0];if(this.set=this.set.filter(I=>!g(I[0])),this.set.length===0)this.set=[v];else if(this.set.length>1){for(let I of this.set)if(I.length===1&&A(I[0])){this.set=[I];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let m=0;m<this.set.length;m++){m>0&&(this.formatted+="||");let $=this.set[m];for(let v=0;v<$.length;v++)v>0&&(this.formatted+=" "),this.formatted+=$[v].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(m){let $=((this.options.includePrerelease&&f)|(this.options.loose&&T))+":"+m,v=n.get($);if(v)return v;let I=this.options.loose,R=I?_[i.HYPHENRANGELOOSE]:_[i.HYPHENRANGE];m=m.replace(R,ne(this.options.includePrerelease)),e("hyphen replace",m),m=m.replace(_[i.COMPARATORTRIM],p),e("comparator trim",m),m=m.replace(_[i.TILDETRIM],c),e("tilde trim",m),m=m.replace(_[i.CARETTRIM],l),e("caret trim",m);let L=m.split(" ").map(j=>F(j,this.options)).join(" ").split(/\s+/).map(j=>ae(j,this.options));I&&(L=L.filter(j=>(e("loose invalid filter",j,this.options),!!j.match(_[i.COMPARATORLOOSE])))),e("range list",L);let w=new Map,S=L.map(j=>new h(j,this.options));for(let j of S){if(g(j))return[j];w.set(j.value,j)}w.size>1&&w.has("")&&w.delete("");let x=[...w.values()];return n.set($,x),x}intersects(m,$){if(!(m instanceof K))throw new TypeError("a Range is required");return this.set.some(v=>P(v,$)&&m.set.some(I=>P(I,$)&&v.every(R=>I.every(L=>R.intersects(L,$)))))}test(m){if(!m)return!1;if(typeof m=="string")try{m=new r(m,this.options)}catch{return!1}for(let $=0;$<this.set.length;$++)if(ie(this.set[$],m,this.options))return!0;return!1}};s.exports=o;var a=sr(),n=new a,u=fe(),h=re(),e=J(),r=q(),{safeRe:_,t:i,comparatorTrimReplace:p,tildeTrimReplace:c,caretTrimReplace:l}=z(),{FLAG_INCLUDE_PRERELEASE:f,FLAG_LOOSE:T}=Z(),g=d=>d.value==="<0.0.0-0",A=d=>d.value==="",P=(d,m)=>{let $=!0,v=d.slice(),I=v.pop();for(;$&&v.length;)$=v.every(R=>I.intersects(R,m)),I=v.pop();return $},F=(d,m)=>(e("comp",d,m),d=y(d,m),e("caret",d),d=X(d,m),e("tildes",d),d=N(d,m),e("xrange",d),d=se(d,m),e("stars",d),d),C=d=>!d||d.toLowerCase()==="x"||d==="*",X=(d,m)=>d.trim().split(/\s+/).map($=>G($,m)).join(" "),G=(d,m)=>{let $=m.loose?_[i.TILDELOOSE]:_[i.TILDE];return d.replace($,(v,I,R,L,w)=>{e("tilde",d,v,I,R,L,w);let S;return C(I)?S="":C(R)?S=`>=${I}.0.0 <${+I+1}.0.0-0`:C(L)?S=`>=${I}.${R}.0 <${I}.${+R+1}.0-0`:w?(e("replaceTilde pr",w),S=`>=${I}.${R}.${L}-${w} <${I}.${+R+1}.0-0`):S=`>=${I}.${R}.${L} <${I}.${+R+1}.0-0`,e("tilde return",S),S})},y=(d,m)=>d.trim().split(/\s+/).map($=>D($,m)).join(" "),D=(d,m)=>{e("caret",d,m);let $=m.loose?_[i.CARETLOOSE]:_[i.CARET],v=m.includePrerelease?"-0":"";return d.replace($,(I,R,L,w,S)=>{e("caret",d,I,R,L,w,S);let x;return C(R)?x="":C(L)?x=`>=${R}.0.0${v} <${+R+1}.0.0-0`:C(w)?R==="0"?x=`>=${R}.${L}.0${v} <${R}.${+L+1}.0-0`:x=`>=${R}.${L}.0${v} <${+R+1}.0.0-0`:S?(e("replaceCaret pr",S),R==="0"?L==="0"?x=`>=${R}.${L}.${w}-${S} <${R}.${L}.${+w+1}-0`:x=`>=${R}.${L}.${w}-${S} <${R}.${+L+1}.0-0`:x=`>=${R}.${L}.${w}-${S} <${+R+1}.0.0-0`):(e("no pr"),R==="0"?L==="0"?x=`>=${R}.${L}.${w}${v} <${R}.${L}.${+w+1}-0`:x=`>=${R}.${L}.${w}${v} <${R}.${+L+1}.0-0`:x=`>=${R}.${L}.${w} <${+R+1}.0.0-0`),e("caret return",x),x})},N=(d,m)=>(e("replaceXRanges",d,m),d.split(/\s+/).map($=>B($,m)).join(" ")),B=(d,m)=>{d=d.trim();let $=m.loose?_[i.XRANGELOOSE]:_[i.XRANGE];return d.replace($,(v,I,R,L,w,S)=>{e("xRange",d,v,I,R,L,w,S);let x=C(R),j=x||C(L),k=j||C(w),W=k;return I==="="&&W&&(I=""),S=m.includePrerelease?"-0":"",x?I===">"||I==="<"?v="<0.0.0-0":v="*":I&&W?(j&&(L=0),w=0,I===">"?(I=">=",j?(R=+R+1,L=0,w=0):(L=+L+1,w=0)):I==="<="&&(I="<",j?R=+R+1:L=+L+1),I==="<"&&(S="-0"),v=`${I+R}.${L}.${w}${S}`):j?v=`>=${R}.0.0${S} <${+R+1}.0.0-0`:k&&(v=`>=${R}.${L}.0${S} <${R}.${+L+1}.0-0`),e("xRange return",v),v})},se=(d,m)=>(e("replaceStars",d,m),d.trim().replace(_[i.STAR],"")),ae=(d,m)=>(e("replaceGTE0",d,m),d.trim().replace(_[m.includePrerelease?i.GTE0PRE:i.GTE0],"")),ne=d=>(m,$,v,I,R,L,w,S,x,j,k,W)=>(C(v)?$="":C(I)?$=`>=${v}.0.0${d?"-0":""}`:C(R)?$=`>=${v}.${I}.0${d?"-0":""}`:L?$=`>=${$}`:$=`>=${$}${d?"-0":""}`,C(x)?S="":C(j)?S=`<${+x+1}.0.0-0`:C(k)?S=`<${x}.${+j+1}.0-0`:W?S=`<=${x}.${j}.${k}-${W}`:d?S=`<${x}.${j}.${+k+1}-0`:S=`<=${S}`,`${$} ${S}`.trim()),ie=(d,m,$)=>{for(let v=0;v<d.length;v++)if(!d[v].test(m))return!1;if(m.prerelease.length&&!$.includePrerelease){for(let v=0;v<d.length;v++)if(e(d[v].semver),d[v].semver!==h.ANY&&d[v].semver.prerelease.length>0){let I=d[v].semver;if(I.major===m.major&&I.minor===m.minor&&I.patch===m.patch)return!0}return!1}return!0}}}),re=O({"../../node_modules/semver/classes/comparator.js"(E,s){var t=Symbol("SemVer ANY"),o=class Ee{static get ANY(){return t}constructor(p,c){if(c=a(c),p instanceof Ee){if(p.loose===!!c.loose)return p;p=p.value}p=p.trim().split(/\s+/).join(" "),e("comparator",p,c),this.options=c,this.loose=!!c.loose,this.parse(p),this.semver===t?this.value="":this.value=this.operator+this.semver.version,e("comp",this)}parse(p){let c=this.options.loose?n[u.COMPARATORLOOSE]:n[u.COMPARATOR],l=p.match(c);if(!l)throw new TypeError(`Invalid comparator: ${p}`);this.operator=l[1]!==void 0?l[1]:"",this.operator==="="&&(this.operator=""),l[2]?this.semver=new r(l[2],this.options.loose):this.semver=t}toString(){return this.value}test(p){if(e("Comparator.test",p,this.options.loose),this.semver===t||p===t)return!0;if(typeof p=="string")try{p=new r(p,this.options)}catch{return!1}return h(p,this.operator,this.semver,this.options)}intersects(p,c){if(!(p instanceof Ee))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new _(p.value,c).test(this.value):p.operator===""?p.value===""?!0:new _(this.value,c).test(p.semver):(c=a(c),c.includePrerelease&&(this.value==="<0.0.0-0"||p.value==="<0.0.0-0")||!c.includePrerelease&&(this.value.startsWith("<0.0.0")||p.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&p.operator.startsWith(">")||this.operator.startsWith("<")&&p.operator.startsWith("<")||this.semver.version===p.semver.version&&this.operator.includes("=")&&p.operator.includes("=")||h(this.semver,"<",p.semver,c)&&this.operator.startsWith(">")&&p.operator.startsWith("<")||h(this.semver,">",p.semver,c)&&this.operator.startsWith("<")&&p.operator.startsWith(">")))}};s.exports=o;var a=fe(),{safeRe:n,t:u}=z(),h=je(),e=J(),r=q(),_=b()}}),te=O({"../../node_modules/semver/functions/satisfies.js"(E,s){var t=b(),o=(a,n,u)=>{try{n=new t(n,u)}catch{return!1}return n.test(a)};s.exports=o}}),ar=O({"../../node_modules/semver/ranges/to-comparators.js"(E,s){var t=b(),o=(a,n)=>new t(a,n).set.map(u=>u.map(h=>h.value).join(" ").trim().split(" "));s.exports=o}}),nr=O({"../../node_modules/semver/ranges/max-satisfying.js"(E,s){var t=q(),o=b(),a=(n,u,h)=>{let e=null,r=null,_=null;try{_=new o(u,h)}catch{return null}return n.forEach(i=>{_.test(i)&&(!e||r.compare(i)===-1)&&(e=i,r=new t(e,h))}),e};s.exports=a}}),ir=O({"../../node_modules/semver/ranges/min-satisfying.js"(E,s){var t=q(),o=b(),a=(n,u,h)=>{let e=null,r=null,_=null;try{_=new o(u,h)}catch{return null}return n.forEach(i=>{_.test(i)&&(!e||r.compare(i)===1)&&(e=i,r=new t(e,h))}),e};s.exports=a}}),lr=O({"../../node_modules/semver/ranges/min-version.js"(E,s){var t=q(),o=b(),a=ee(),n=(u,h)=>{u=new o(u,h);let e=new t("0.0.0");if(u.test(e)||(e=new t("0.0.0-0"),u.test(e)))return e;e=null;for(let r=0;r<u.set.length;++r){let _=u.set[r],i=null;_.forEach(p=>{let c=new t(p.semver.version);switch(p.operator){case">":c.prerelease.length===0?c.patch++:c.prerelease.push(0),c.raw=c.format();case"":case">=":(!i||a(c,i))&&(i=c);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${p.operator}`)}}),i&&(!e||a(e,i))&&(e=i)}return e&&u.test(e)?e:null};s.exports=n}}),or=O({"../../node_modules/semver/ranges/valid.js"(E,s){var t=b(),o=(a,n)=>{try{return new t(a,n).range||"*"}catch{return null}};s.exports=o}}),Ie=O({"../../node_modules/semver/ranges/outside.js"(E,s){var t=q(),o=re(),{ANY:a}=o,n=b(),u=te(),h=ee(),e=ve(),r=$e(),_=Re(),i=(p,c,l,f)=>{p=new t(p,f),c=new n(c,f);let T,g,A,P,F;switch(l){case">":T=h,g=r,A=e,P=">",F=">=";break;case"<":T=e,g=_,A=h,P="<",F="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(u(p,c,f))return!1;for(let C=0;C<c.set.length;++C){let X=c.set[C],G=null,y=null;if(X.forEach(D=>{D.semver===a&&(D=new o(">=0.0.0")),G=G||D,y=y||D,T(D.semver,G.semver,f)?G=D:A(D.semver,y.semver,f)&&(y=D)}),G.operator===P||G.operator===F||(!y.operator||y.operator===P)&&g(p,y.semver)||y.operator===F&&A(p,y.semver))return!1}return!0};s.exports=i}}),ur=O({"../../node_modules/semver/ranges/gtr.js"(E,s){var t=Ie(),o=(a,n,u)=>t(a,n,">",u);s.exports=o}}),pr=O({"../../node_modules/semver/ranges/ltr.js"(E,s){var t=Ie(),o=(a,n,u)=>t(a,n,"<",u);s.exports=o}}),cr=O({"../../node_modules/semver/ranges/intersects.js"(E,s){var t=b(),o=(a,n,u)=>(a=new t(a,u),n=new t(n,u),a.intersects(n,u));s.exports=o}}),Er=O({"../../node_modules/semver/ranges/simplify.js"(E,s){var t=te(),o=U();s.exports=(a,n,u)=>{let h=[],e=null,r=null,_=a.sort((l,f)=>o(l,f,u));for(let l of _)t(l,n,u)?(r=l,e||(e=l)):(r&&h.push([e,r]),r=null,e=null);e&&h.push([e,null]);let i=[];for(let[l,f]of h)l===f?i.push(l):!f&&l===_[0]?i.push("*"):f?l===_[0]?i.push(`<=${f}`):i.push(`${l} - ${f}`):i.push(`>=${l}`);let p=i.join(" || "),c=typeof n.raw=="string"?n.raw:String(n);return p.length<c.length?p:n}}}),mr=O({"../../node_modules/semver/ranges/subset.js"(E,s){var t=b(),o=re(),{ANY:a}=o,n=te(),u=U(),h=(c,l,f={})=>{if(c===l)return!0;c=new t(c,f),l=new t(l,f);let T=!1;e:for(let g of c.set){for(let A of l.set){let P=_(g,A,f);if(T=T||P!==null,P)continue e}if(T)return!1}return!0},e=[new o(">=0.0.0-0")],r=[new o(">=0.0.0")],_=(c,l,f)=>{if(c===l)return!0;if(c.length===1&&c[0].semver===a){if(l.length===1&&l[0].semver===a)return!0;f.includePrerelease?c=e:c=r}if(l.length===1&&l[0].semver===a){if(f.includePrerelease)return!0;l=r}let T=new Set,g,A;for(let N of c)N.operator===">"||N.operator===">="?g=i(g,N,f):N.operator==="<"||N.operator==="<="?A=p(A,N,f):T.add(N.semver);if(T.size>1)return null;let P;if(g&&A&&(P=u(g.semver,A.semver,f),P>0||P===0&&(g.operator!==">="||A.operator!=="<=")))return null;for(let N of T){if(g&&!n(N,String(g),f)||A&&!n(N,String(A),f))return null;for(let B of l)if(!n(N,String(B),f))return!1;return!0}let F,C,X,G,y=A&&!f.includePrerelease&&A.semver.prerelease.length?A.semver:!1,D=g&&!f.includePrerelease&&g.semver.prerelease.length?g.semver:!1;y&&y.prerelease.length===1&&A.operator==="<"&&y.prerelease[0]===0&&(y=!1);for(let N of l){if(G=G||N.operator===">"||N.operator===">=",X=X||N.operator==="<"||N.operator==="<=",g){if(D&&N.semver.prerelease&&N.semver.prerelease.length&&N.semver.major===D.major&&N.semver.minor===D.minor&&N.semver.patch===D.patch&&(D=!1),N.operator===">"||N.operator===">="){if(F=i(g,N,f),F===N&&F!==g)return!1}else if(g.operator===">="&&!n(g.semver,String(N),f))return!1}if(A){if(y&&N.semver.prerelease&&N.semver.prerelease.length&&N.semver.major===y.major&&N.semver.minor===y.minor&&N.semver.patch===y.patch&&(y=!1),N.operator==="<"||N.operator==="<="){if(C=p(A,N,f),C===N&&C!==A)return!1}else if(A.operator==="<="&&!n(A.semver,String(N),f))return!1}if(!N.operator&&(A||g)&&P!==0)return!1}return!(g&&X&&!A&&P!==0||A&&G&&!g&&P!==0||D||y)},i=(c,l,f)=>{if(!c)return l;let T=u(c.semver,l.semver,f);return T>0?c:T<0||l.operator===">"&&c.operator===">="?l:c},p=(c,l,f)=>{if(!c)return l;let T=u(c.semver,l.semver,f);return T<0?c:T>0||l.operator==="<"&&c.operator==="<="?l:c};s.exports=h}}),hr=O({"../../node_modules/semver/index.js"(E,s){var t=z(),o=Z(),a=q(),n=Ae(),u=H(),h=ke(),e=He(),r=Be(),_=We(),i=Ye(),p=ze(),c=Ke(),l=Qe(),f=U(),T=Ze(),g=Je(),A=de(),P=er(),F=rr(),C=ee(),X=ve(),G=we(),y=xe(),D=Re(),N=$e(),B=je(),se=tr(),ae=re(),ne=b(),ie=te(),d=ar(),m=nr(),$=ir(),v=lr(),I=or(),R=Ie(),L=ur(),w=pr(),S=cr(),x=Er(),j=mr();s.exports={parse:u,valid:h,clean:e,inc:r,diff:_,major:i,minor:p,patch:c,prerelease:l,compare:f,rcompare:T,compareLoose:g,compareBuild:A,sort:P,rsort:F,gt:C,lt:X,eq:G,neq:y,gte:D,lte:N,cmp:B,coerce:se,Comparator:ae,Range:ne,satisfies:ie,toComparators:d,maxSatisfying:m,minSatisfying:$,minVersion:v,validRange:I,outside:R,gtr:L,ltr:w,intersects:S,simplifyRange:x,subset:j,SemVer:a,re:t.re,src:t.src,tokens:t.t,SEMVER_SPEC_VERSION:o.SEMVER_SPEC_VERSION,RELEASE_TYPES:o.RELEASE_TYPES,compareIdentifiers:n.compareIdentifiers,rcompareIdentifiers:n.rcompareIdentifiers}}}),fr={};Fe(fr,{beforeAll:()=>Or,decorators:()=>Lr,mount:()=>Ir,parameters:()=>_r,render:()=>vr,renderToCanvas:()=>$r});var Oe=be(hr());function Ne(E){globalThis.IS_REACT_ACT_ENVIRONMENT=E}function dr(){return globalThis.IS_REACT_ACT_ENVIRONMENT}var Q=E=>E(),vr=(E,s)=>{let{id:t,component:o}=s;if(!o)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return Y.createElement(o,{...E})},{FRAMEWORK_OPTIONS:pe}=Me,Rr=class extends M.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:E}=this.state,{showMain:s}=this.props;E||s()}componentDidCatch(E){let{showException:s}=this.props;s(E)}render(){let{hasError:E}=this.state,{children:s}=this.props;return E?null:s}},Te=pe!=null&&pe.strictMode?M.StrictMode:M.Fragment,me=[],ce=!1,Pe=async()=>{if(ce||me.length===0)return;ce=!0;let E=me.shift();E&&await E(),ce=!1,Pe()};async function $r({storyContext:E,unboundStoryFn:s,showMain:t,showException:o,forceRemount:a},n){let{renderElement:u,unmountElement:h}=await ge(async()=>{const{renderElement:i,unmountElement:p}=await import("./react-18-BpBgPb18.js");return{renderElement:i,unmountElement:p}},__vite__mapDeps([0,1]),import.meta.url),e=s,r=E.parameters.__isPortableStory?Y.createElement(e,{...E}):Y.createElement(Rr,{showMain:t,showException:o},Y.createElement(e,{...E})),_=Te?Y.createElement(Te,null,r):r;return a&&h(n),await new Promise(async(i,p)=>{me.push(async()=>{try{await Q(async()=>{var c,l;await u(_,n,(l=(c=E==null?void 0:E.parameters)==null?void 0:c.react)==null?void 0:l.rootOptions)}),i()}catch(c){p(c)}}),Pe()}),async()=>{await Q(()=>{h(n)})}}var Ir=E=>async s=>(s!=null&&(E.originalStoryFn=()=>s),await E.renderToCanvas(),E.canvas),_r={renderer:"react"},Lr=[(E,s)=>{var a,n;if(!((n=(a=s.parameters)==null?void 0:a.react)!=null&&n.rsc))return E();let t=Oe.default.major(M.version),o=Oe.default.minor(M.version);if(t<18||t===18&&o<3)throw new Error("React Server Components require React >= 18.3");return M.createElement(M.Suspense,null,E())}],Or=async()=>{try{let{configure:E}=await ge(async()=>{const{configure:s}=await import("./index-C8XZjCMN.js");return{configure:s}},[],import.meta.url);E({unstable_advanceTimersWrapper:s=>Q(s),asyncWrapper:async s=>{let t=dr();Ne(!1);try{let o=await s();return await new Promise(a=>{setTimeout(()=>{a()},0),Nr()&&jest.advanceTimersByTime(0)}),o}finally{Ne(t)}},eventWrapper:s=>{let t;return Q(()=>(t=s(),t)),t}})}catch{}};function Nr(){return typeof jest<"u"&&jest!==null?setTimeout._isMockFunction===!0||Object.prototype.hasOwnProperty.call(setTimeout,"clock"):!1}export{Or as beforeAll,Lr as decorators,Ir as mount,_r as parameters,vr as render,$r as renderToCanvas};
