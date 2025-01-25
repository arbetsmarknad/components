import{j as e}from"./jsx-runtime-z8MfsBtr.js";import{r as t}from"./index-BPjjPx8-.js";import{S as R}from"./index-tSe9aKf_.js";import{c as b}from"./utils-BNf5BS2b.js";import"./index-C9rmetsa.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=(...a)=>a.filter((r,n,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=t.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:m="",children:i,iconNode:k,...y},_)=>t.createElement("svg",{ref:_,...C,width:r,height:r,stroke:a,strokeWidth:s?Number(n)*24/Number(r):n,className:N("lucide",m),...y},[...k.map(([w,v])=>t.createElement(w,v)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(a,r)=>{const n=t.forwardRef(({className:s,...m},i)=>t.createElement(P,{ref:i,iconNode:r,className:N(`lucide-${S(a)}`,s),...m}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],E=A("ChevronRight",T),B=t.forwardRef(({...a},r)=>e.jsx("nav",{ref:r,"aria-label":"breadcrumb",...a}));B.displayName="Breadcrumb";const h=t.forwardRef(({className:a,...r},n)=>e.jsx("ol",{ref:n,className:b("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...r}));h.displayName="BreadcrumbList";const o=t.forwardRef(({className:a,...r},n)=>e.jsx("li",{ref:n,className:b("inline-flex items-center gap-1.5",a),...r}));o.displayName="BreadcrumbItem";const c=t.forwardRef(({asChild:a,className:r,...n},s)=>{const m=a?R:"a";return e.jsx(m,{ref:s,className:b("transition-colors hover:text-foreground",r),...n})});c.displayName="BreadcrumbLink";const p=t.forwardRef(({className:a,...r},n)=>e.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:b("font-normal text-foreground",a),...r}));p.displayName="BreadcrumbPage";const d=({children:a,className:r,...n})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:b("[&>svg]:w-3.5 [&>svg]:h-3.5",r),...n,children:a??e.jsx(E,{})});d.displayName="BreadcrumbSeparator";B.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const H={title:"Breadcrumb"},u=()=>e.jsx(B,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(c,{href:"/",children:"Home"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(c,{href:"/components",children:"Components"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(p,{children:"Breadcrumb"})})]})}),l=()=>e.jsx(B,{children:e.jsxs(h,{children:[e.jsx(o,{children:e.jsx(c,{href:"/",children:"Arbetsmarknad"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(c,{href:"/components",children:"Kollektivavtal"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(p,{children:"2023"})}),e.jsx(d,{}),e.jsx(o,{children:e.jsx(p,{children:"Almega Spel och Internationella Kasinon Tjänstemannaavtal 2023"})})]})});u.__docgenInfo={description:"",methods:[],displayName:"Default"};l.__docgenInfo={description:"",methods:[],displayName:"VeryLongText"};var f,x,g;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Breadcrumb>
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
  </Breadcrumb>`,...(g=(x=u.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,I,L;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`() => <Breadcrumb>
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Arbetsmarknad</BreadcrumbLink>
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
  </Breadcrumb>`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const O=["Default","VeryLongText"];export{u as Default,l as VeryLongText,O as __namedExportsOrder,H as default};
