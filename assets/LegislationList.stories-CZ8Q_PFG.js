import{j as e}from"./jsx-runtime-CLpGMVip.js";import{c as l}from"./utils-CytzSlOG.js";const h=({children:t,className:n})=>e.jsx("ol",{className:l("grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8 lg:gap-y-16 max-w-xl lg:max-w-5xl",n),children:t}),i=({children:t,className:n})=>e.jsx("li",{className:l("group grid grid-cols-[min-content_auto] grid-rows-[min-content_auto] gap-x-4 gap-y-1 relative w-full h-full",n),children:t}),s=({children:t,className:n})=>e.jsx("div",{className:l("col-span-0 row-span-2 left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 p-3 group-hover:ring-2 ring-blue-600 ring-offset-1",n),children:t}),a=({children:t,className:n,href:p})=>e.jsxs("a",{className:l("text-link font-bold underline",n),href:p,children:[e.jsx("span",{className:"absolute inset-0"}),t]}),r=({children:t,className:n})=>e.jsx("div",{className:l("text-base leading-7 text-gray-600",n),children:t});h.__docgenInfo={description:"",methods:[],displayName:"LegislationList",props:{children:{required:!0,tsType:{name:"union",raw:`| ReactElement<LegislationItemProps>
| ReactElement<LegislationItemProps>[]`,elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children:
    | ReactElement<LegislationLinkProps>
    | ReactElement<LegislationDescriptionProps>[];
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:`| ReactElement<LegislationLinkProps>
| ReactElement<LegislationDescriptionProps>[]`,elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: string;
  className?: string;
  href: string;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"ReactElement<LegislationLinkProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: ReactElement | ReactElement[] | string;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"ReactElement | ReactElement[] | string",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"string"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<LegislationDescriptionProps>"}],raw:"ReactElement<LegislationDescriptionProps>[]"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<LegislationItemProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children:
    | ReactElement<LegislationLinkProps>
    | ReactElement<LegislationDescriptionProps>[];
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:`| ReactElement<LegislationLinkProps>
| ReactElement<LegislationDescriptionProps>[]`,elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: string;
  className?: string;
  href: string;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"ReactElement<LegislationLinkProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: ReactElement | ReactElement[] | string;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"ReactElement | ReactElement[] | string",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"string"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<LegislationDescriptionProps>"}],raw:"ReactElement<LegislationDescriptionProps>[]"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<LegislationItemProps>"}],raw:"ReactElement<LegislationItemProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"LegislationItem",props:{children:{required:!0,tsType:{name:"union",raw:`| ReactElement<LegislationLinkProps>
| ReactElement<LegislationDescriptionProps>[]`,elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: string;
  className?: string;
  href: string;
}`,signature:{properties:[{key:"children",value:{name:"string",required:!0}},{key:"className",value:{name:"string",required:!1}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"ReactElement<LegislationLinkProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"signature",type:"object",raw:`{
  children: ReactElement | ReactElement[] | string;
  className?: string;
}`,signature:{properties:[{key:"children",value:{name:"union",raw:"ReactElement | ReactElement[] | string",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"string"}],required:!0}},{key:"className",value:{name:"string",required:!1}}]}}],raw:"ReactElement<LegislationDescriptionProps>"}],raw:"ReactElement<LegislationDescriptionProps>[]"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"LegislationIcon",props:{children:{required:!1,tsType:{name:"union",raw:"ReactElement | ReactElement[] | string",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"LegislationLink",props:{children:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},href:{required:!0,tsType:{name:"string"},description:""}}};r.__docgenInfo={description:"",methods:[],displayName:"LegislationDescription",props:{children:{required:!0,tsType:{name:"union",raw:"ReactElement | ReactElement[] | string",elements:[{name:"ReactElement"},{name:"Array",elements:[{name:"ReactElement"}],raw:"ReactElement[]"},{name:"string"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"LegislationList"},c=()=>e.jsxs(h,{children:[e.jsxs(i,{children:[e.jsx(s,{children:e.jsx("svg",{className:"w-full text-xl text-white","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:e.jsx("path",{fill:"currentColor",d:"M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"})})}),e.jsx(a,{href:"https://example.org",children:"The Work Environment Act"}),e.jsx(r,{children:"Sweden's Work Environment Act puts influence in the hands of workers even before the formation of a union."})]}),e.jsxs(i,{children:[e.jsx(s,{children:e.jsx("svg",{className:"w-full text-xl text-white","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:e.jsx("path",{fill:"currentColor",d:"M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"})})}),e.jsx(a,{href:"https://example.org",children:"The Co-Determination Act"}),e.jsx(r,{children:"The Co-Determination Act is the basis for the Swedish model of industrial democracy. It creates legal protections and obligations for unions and employers."})]}),e.jsxs(i,{children:[e.jsx(s,{children:e.jsx("svg",{className:"w-full text-xl text-white","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",children:e.jsx("path",{fill:"currentColor",d:"M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"})})}),e.jsx(a,{href:"https://example.org",children:"The Employment Protection Act"}),e.jsx(r,{children:"The Swedish Employment Protection Act provides strong job security by limiting employers' ability to terminate employment contracts without just cause."})]}),e.jsxs(i,{children:[e.jsx(s,{children:e.jsx("svg",{className:"w-full fill-white text-xl text-white","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:e.jsx("path",{d:"M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"})})}),e.jsx(a,{href:"https://example.org",children:"The Working Hours Act"}),e.jsx(r,{children:"The Swedish Working Hours Act emphasizes flexibility, allowing employees to have a say in their work schedules and promoting work-life balance."})]})]});c.__docgenInfo={description:"",methods:[],displayName:"Default"};var o,m,g;c.parameters={...c.parameters,docs:{...(o=c.parameters)==null?void 0:o.docs,source:{originalSource:`() => <LegislationList>
    <LegislationItem>
      <LegislationIcon>
        <svg className="w-full text-xl text-white" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
        </svg>
      </LegislationIcon>
      <LegislationLink href="https://example.org">
        The Work Environment Act
      </LegislationLink>
      <LegislationDescription>
        Sweden's Work Environment Act puts influence in the hands of workers
        even before the formation of a union.
      </LegislationDescription>
    </LegislationItem>

    <LegislationItem>
      <LegislationIcon>
        <svg className="w-full text-xl text-white" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
        </svg>
      </LegislationIcon>
      <LegislationLink href="https://example.org">
        The Co-Determination Act
      </LegislationLink>
      <LegislationDescription>
        The Co-Determination Act is the basis for the Swedish model of
        industrial democracy. It creates legal protections and obligations for
        unions and employers.
      </LegislationDescription>
    </LegislationItem>

    <LegislationItem>
      <LegislationIcon>
        <svg className="w-full text-xl text-white" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="currentColor" d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"></path>
        </svg>
      </LegislationIcon>
      <LegislationLink href="https://example.org">
        The Employment Protection Act
      </LegislationLink>
      <LegislationDescription>
        The Swedish Employment Protection Act provides strong job security by
        limiting employers' ability to terminate employment contracts without
        just cause.
      </LegislationDescription>
    </LegislationItem>

    <LegislationItem>
      <LegislationIcon>
        <svg className="w-full fill-white text-xl text-white" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
        </svg>
      </LegislationIcon>
      <LegislationLink href="https://example.org">
        The Working Hours Act
      </LegislationLink>
      <LegislationDescription>
        The Swedish Working Hours Act emphasizes flexibility, allowing employees
        to have a say in their work schedules and promoting work-life balance.
      </LegislationDescription>
    </LegislationItem>
  </LegislationList>`,...(g=(m=c.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const v=["Default"];export{c as Default,v as __namedExportsOrder,w as default};
