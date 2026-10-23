import{j as a}from"./jsx-runtime-CLpGMVip.js";import{a as o}from"./index-CnX0ISab.js";import{c as p}from"./utils-CytzSlOG.js";import{C as T}from"./Container-DtqMyDcu.js";function N(e,r){if(typeof e=="function")return e(r);e!=null&&(e.current=r)}function H(...e){return r=>{let n=!1;const t=e.map(s=>{const c=N(s,r);return!n&&typeof c=="function"&&(n=!0),c});if(n)return()=>{for(let s=0;s<t.length;s++){const c=t[s];typeof c=="function"?c():N(e[s],null)}}}}var E=o.forwardRef((e,r)=>{const{children:n,...t}=e,s=o.Children.toArray(n),c=s.find(D);if(c){const d=c.props.children,u=s.map(j=>j===c?o.Children.count(d)>1?o.Children.only(null):o.isValidElement(d)?d.props.children:null:j);return a.jsx(y,{...t,ref:r,children:o.isValidElement(d)?o.cloneElement(d,void 0,u):null})}return a.jsx(y,{...t,ref:r,children:n})});E.displayName="Slot";var y=o.forwardRef((e,r)=>{const{children:n,...t}=e;if(o.isValidElement(n)){const s=q(n);return o.cloneElement(n,{...K(t,n.props),ref:r?H(r,s):s})}return o.Children.count(n)>1?o.Children.only(null):null});y.displayName="SlotClone";var W=({children:e})=>a.jsx(a.Fragment,{children:e});function D(e){return o.isValidElement(e)&&e.type===W}function K(e,r){const n={...r};for(const t in r){const s=e[t],c=r[t];/^on[A-Z]/.test(t)?s&&c?n[t]=(...u)=>{c(...u),s(...u)}:s&&(n[t]=s):t==="style"?n[t]={...s,...c}:t==="className"&&(n[t]=[s,c].filter(Boolean).join(" "))}return{...e,...n}}function q(e){var t,s;let r=(t=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:t.get,n=r&&"isReactWarning"in r&&r.isReactWarning;return n?e.ref:(r=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=r&&"isReactWarning"in r&&r.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=(...e)=>e.filter((r,n,t)=>!!r&&r.trim()!==""&&t.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=o.forwardRef(({color:e="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:t,className:s="",children:c,iconNode:d,...u},j)=>o.createElement("svg",{ref:j,...Q,width:r,height:r,stroke:e,strokeWidth:t?Number(n)*24/Number(r):n,className:P("lucide",s),...u},[...d.map(([V,O])=>o.createElement(V,O)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=(e,r)=>{const n=o.forwardRef(({className:t,...s},c)=>o.createElement(F,{ref:c,iconNode:r,className:P(`lucide-${$(e)}`,t),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],J=Z("ChevronRight",G),A=({children:e})=>a.jsx(x,{children:a.jsx(g,{children:Object.entries(e).map(([r,n],t)=>a.jsxs(o.Fragment,{children:[a.jsx(i,{children:a.jsx(l,{href:r,children:n})}),t<Object.entries(e).length-1&&a.jsx(m,{})]},r))})}),x=o.forwardRef(({children:e,className:r,...n},t)=>a.jsx("nav",{ref:t,"aria-label":"breadcrumb",className:p("min-h-16 w-full flex justify-center items-center",r),...n,children:a.jsx(T,{className:"h-full flex justify-center",children:e})}));x.displayName="Breadcrumb";const g=o.forwardRef(({className:e,...r},n)=>a.jsx("ol",{ref:n,className:p("flex flex-wrap items-center gap-1.5 break-words font-lilex text-sm text-muted-foreground sm:gap-2.5",e),...r}));g.displayName="BreadcrumbList";const i=o.forwardRef(({className:e,...r},n)=>a.jsx("li",{ref:n,className:p("inline-flex items-center gap-1.5",e),...r}));i.displayName="BreadcrumbItem";const l=o.forwardRef(({asChild:e,className:r,...n},t)=>{const s=e?E:"a";return a.jsx(s,{ref:t,className:p("text-link underline body-text",r),...n})});l.displayName="BreadcrumbLink";const B=o.forwardRef(({className:e,...r},n)=>a.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:p("font-normal text-foreground",e),...r}));B.displayName="BreadcrumbPage";const m=({children:e,className:r,...n})=>a.jsx("li",{role:"presentation","aria-hidden":"true",className:p("[&>svg]:w-3.5 [&>svg]:h-3.5",r),...n,children:e??a.jsx(J,{})});m.displayName="BreadcrumbSeparator";x.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};A.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};g.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};i.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};l.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const z={title:"Breadcrumb"},f=()=>a.jsx(x,{children:a.jsxs(g,{children:[a.jsx(i,{children:a.jsx(l,{href:"/",children:"Home"})}),a.jsx(m,{}),a.jsx(i,{children:a.jsx(l,{href:"/components",children:"Components"})}),a.jsx(m,{}),a.jsx(i,{children:a.jsx(B,{children:"Breadcrumb"})})]})}),b=()=>a.jsx(x,{children:a.jsxs(g,{children:[a.jsx(i,{children:a.jsx(l,{href:"/",children:"Svenska modellen"})}),a.jsx(m,{}),a.jsx(i,{children:a.jsx(l,{href:"/components",children:"Kollektivavtal"})}),a.jsx(m,{}),a.jsx(i,{children:a.jsx(B,{children:"2023"})}),a.jsx(m,{}),a.jsx(i,{children:a.jsx(B,{children:"Almega Spel och Internationella Kasinon Tjänstemannaavtal 2023"})})]})}),h=()=>a.jsx(A,{children:{"/":"Home","/example":"Example"}});f.__docgenInfo={description:"",methods:[],displayName:"Default"};b.__docgenInfo={description:"",methods:[],displayName:"VeryLongText"};h.__docgenInfo={description:"",methods:[],displayName:"QuickBreadcrumbs"};var I,k,w;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`,...(w=(k=f.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var L,_,R;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`() => <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Svenska modellen</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Kollektivavtal</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>2023</BreadcrumbPage>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage>
          Almega Spel och Internationella Kasinon Tjänstemannaavtal 2023
        </BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>`,...(R=(_=b.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var C,S,v;h.parameters={...h.parameters,docs:{...(C=h.parameters)==null?void 0:C.docs,source:{originalSource:`() => <Breadcrumbs>
    {{
    "/": "Home",
    "/example": "Example"
  }}
  </Breadcrumbs>`,...(v=(S=h.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};const ee=["Default","VeryLongText","QuickBreadcrumbs"];export{f as Default,h as QuickBreadcrumbs,b as VeryLongText,ee as __namedExportsOrder,z as default};
