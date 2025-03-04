import{j as e}from"./jsx-runtime-CLpGMVip.js";import{c as r}from"./utils-CytzSlOG.js";const d=({children:t,className:n})=>e.jsx("ol",{className:r("flex flex-col gap-y-4",n),children:t}),a=({children:t,className:n})=>e.jsx("li",{className:r("grid group relative xxs:grid-cols-[64px_auto] xxs:grid-rows-[min-content_1fr]  xs:grid-rows-[1fr_1fr] xxs:gap-x-4 xxs:items-center",n),children:t}),c=({src:t,className:n})=>e.jsx("div",{className:r("aspect-[707/1000] w-16 shrink-0 border-2 border-slate-200 xxs:row-span-2 group-hover:ring-2 ring-blue-200 ring-offset-1",n),children:e.jsx("img",{alt:"",src:t})}),o=({href:t,className:n,children:u})=>e.jsxs(e.Fragment,{children:[e.jsx("a",{"aria-hidden":!0,tabIndex:-1,className:"absolute top-0 right-0 bottom-0 left-0",href:t}),e.jsx("a",{className:r("text-link underline font-bold xxs:col-start-2 xs:self-end",n),href:t,children:u})]}),m=({className:t,children:n})=>e.jsx("div",{className:r("xxs:col-start-2 xxs:self-start xxs:line-clamp-2 xs:line-clamp-none",t),children:n});d.__docgenInfo={description:"",methods:[],displayName:"DocumentList",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement<DocumentItemProps> | ReactElement<DocumentItemProps>[]",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: ReactElement | ReactElement[];
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<DocumentItemProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: ReactElement | ReactElement[];
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<DocumentItemProps>"}],raw:"ReactElement<DocumentItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"DocumentItem",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[]",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DocumentIcon",props:{src:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"DocumentLink",props:{href:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"DocumentDescription",props:{className:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"string"},description:""}}};const g={title:"DocumentList"},s=()=>e.jsxs(d,{children:[e.jsxs(a,{children:[e.jsx(c,{src:"https://placehold.co/64x91/EEE/31343C"}),e.jsx(o,{href:"https://example.org",children:"Exempelavtalet"}),e.jsx(m,{children:"Ett kollektivavtal för exempelbranschen."})]}),e.jsxs(a,{children:[e.jsx(c,{src:"https://placehold.co/64x91/FCC/31343C"}),e.jsx(o,{href:"https://example.org",children:"Ingetavtalet"}),e.jsx(m,{children:"Ett kollektivavtal för ingen."})]}),e.jsxs(a,{children:[e.jsx(c,{src:"https://placehold.co/64x91/CFF/31343C"}),e.jsx(o,{href:"https://example.org",children:"Maffiaavtalet"}),e.jsx(m,{children:"Ett kollektivavtal för den organiserade brottsligheten."})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,l,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => <DocumentList>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/EEE/31343C" />
      <DocumentLink href="https://example.org">Exempelavtalet</DocumentLink>
      <DocumentDescription>
        Ett kollektivavtal för exempelbranschen.
      </DocumentDescription>
    </DocumentItem>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/FCC/31343C" />
      <DocumentLink href="https://example.org">Ingetavtalet</DocumentLink>
      <DocumentDescription>Ett kollektivavtal för ingen.</DocumentDescription>
    </DocumentItem>
    <DocumentItem>
      <DocumentIcon src="https://placehold.co/64x91/CFF/31343C" />
      <DocumentLink href="https://example.org">Maffiaavtalet</DocumentLink>
      <DocumentDescription>
        Ett kollektivavtal för den organiserade brottsligheten.
      </DocumentDescription>
    </DocumentItem>
  </DocumentList>`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,g as default};
