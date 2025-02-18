import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as t}from"./index-CnX0ISab.js";import{S as E}from"./index-DySocqtW.js";import{c as o}from"./utils-CytzSlOG.js";import{C as T}from"./Container-DtqMyDcu.js";/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=(...a)=>a.filter((r,n,s)=>!!r&&r.trim()!==""&&s.indexOf(r)===n).join(" ").trim();/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=t.forwardRef(({color:a="currentColor",size:r=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:i="",children:l,iconNode:v,...S},C)=>t.createElement("svg",{ref:C,...q,width:r,height:r,stroke:a,strokeWidth:s?Number(n)*24/Number(r):n,className:w("lucide",i),...S},[...v.map(([P,A])=>t.createElement(P,A)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=(a,r)=>{const n=t.forwardRef(({className:s,...i},l)=>t.createElement(H,{ref:l,iconNode:r,className:w(`lucide-${K(a)}`,s),...i}));return n.displayName=`${a}`,n};/**
 * @license lucide-react v0.473.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],D=O("ChevronRight",$),R=({children:a})=>e.jsx(h,{children:e.jsx(x,{children:Object.entries(a).map(([r,n],s)=>e.jsxs(t.Fragment,{children:[e.jsx(c,{children:e.jsx(m,{href:r,children:n})}),s<Object.entries(a).length-1&&e.jsx(d,{})]},r))})}),h=t.forwardRef(({children:a,className:r,...n},s)=>e.jsx("nav",{ref:s,"aria-label":"breadcrumb",className:o("h-16 w-full flex justify-center",r),...n,children:e.jsx(T,{className:"h-full flex justify-center",children:a})}));h.displayName="Breadcrumb";const x=t.forwardRef(({className:a,...r},n)=>e.jsx("ol",{ref:n,className:o("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",a),...r}));x.displayName="BreadcrumbList";const c=t.forwardRef(({className:a,...r},n)=>e.jsx("li",{ref:n,className:o("inline-flex items-center gap-1.5",a),...r}));c.displayName="BreadcrumbItem";const m=t.forwardRef(({asChild:a,className:r,...n},s)=>{const i=a?E:"a";return e.jsx(i,{ref:s,className:o("text-link underline",r),...n})});m.displayName="BreadcrumbLink";const B=t.forwardRef(({className:a,...r},n)=>e.jsx("span",{ref:n,role:"link","aria-disabled":"true","aria-current":"page",className:o("font-normal text-foreground",a),...r}));B.displayName="BreadcrumbPage";const d=({children:a,className:r,...n})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:o("[&>svg]:w-3.5 [&>svg]:h-3.5",r),...n,children:a??e.jsx(D,{})});d.displayName="BreadcrumbSeparator";h.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{children:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:""}}};x.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};B.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};d.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const G={title:"Breadcrumb"},u=()=>e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(m,{href:"/",children:"Home"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(m,{href:"/components",children:"Components"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(B,{children:"Breadcrumb"})})]})}),p=()=>e.jsx(h,{children:e.jsxs(x,{children:[e.jsx(c,{children:e.jsx(m,{href:"/",children:"Arbetsmarknad"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(m,{href:"/components",children:"Kollektivavtal"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(B,{children:"2023"})}),e.jsx(d,{}),e.jsx(c,{children:e.jsx(B,{children:"Almega Spel och Internationella Kasinon Tjänstemannaavtal 2023"})})]})}),b=()=>e.jsx(R,{children:{"/":"Home","/example":"Example"}});u.__docgenInfo={description:"",methods:[],displayName:"Default"};p.__docgenInfo={description:"",methods:[],displayName:"VeryLongText"};b.__docgenInfo={description:"",methods:[],displayName:"QuickBreadcrumbs"};var f,g,j;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`() => <Breadcrumb>
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
  </Breadcrumb>`,...(j=(g=u.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var I,y,N;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`() => <Breadcrumb>
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
  </Breadcrumb>`,...(N=(y=p.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var k,L,_;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`() => <Breadcrumbs>
    {{
    "/": "Home",
    "/example": "Example"
  }}
  </Breadcrumbs>`,...(_=(L=b.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const J=["Default","VeryLongText","QuickBreadcrumbs"];export{u as Default,b as QuickBreadcrumbs,p as VeryLongText,J as __namedExportsOrder,G as default};
