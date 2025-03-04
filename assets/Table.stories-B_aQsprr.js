import{j as e}from"./jsx-runtime-CLpGMVip.js";import{a as s}from"./index-CnX0ISab.js";import{c as t}from"./utils-CytzSlOG.js";const c=s.forwardRef(({className:a,...l},o)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:o,className:t("w-full caption-bottom text-sm",a),...l})}));c.displayName="Table";const m=s.forwardRef(({className:a,...l},o)=>e.jsx("thead",{ref:o,className:t("[&_tr]:border-b",a),...l}));m.displayName="TableHeader";const b=s.forwardRef(({className:a,...l},o)=>e.jsx("tbody",{ref:o,className:t("[&_tr:last-child]:border-0",a),...l}));b.displayName="TableBody";const h=s.forwardRef(({className:a,...l},o)=>e.jsx("tfoot",{ref:o,className:t("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",a),...l}));h.displayName="TableFooter";const i=s.forwardRef(({className:a,...l},o)=>e.jsx("tr",{ref:o,className:t("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",a),...l}));i.displayName="TableRow";const d=s.forwardRef(({className:a,...l},o)=>e.jsx("th",{ref:o,className:t("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l}));d.displayName="TableHead";const r=s.forwardRef(({className:a,...l},o)=>e.jsx("td",{ref:o,className:t("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",a),...l}));r.displayName="TableCell";const T=s.forwardRef(({className:a,...l},o)=>e.jsx("caption",{ref:o,className:t("mt-4 text-sm text-muted-foreground",a),...l}));T.displayName="TableCaption";c.__docgenInfo={description:"",methods:[],displayName:"Table"};m.__docgenInfo={description:"",methods:[],displayName:"TableHeader"};b.__docgenInfo={description:"",methods:[],displayName:"TableBody"};h.__docgenInfo={description:"",methods:[],displayName:"TableFooter"};d.__docgenInfo={description:"",methods:[],displayName:"TableHead"};i.__docgenInfo={description:"",methods:[],displayName:"TableRow"};r.__docgenInfo={description:"",methods:[],displayName:"TableCell"};T.__docgenInfo={description:"",methods:[],displayName:"TableCaption"};const j={title:"Table",component:c},n=()=>e.jsxs(c,{children:[e.jsx(T,{children:"A list of your recent invoices."}),e.jsx(m,{children:e.jsxs(i,{children:[e.jsx(d,{className:"w-[100px]",children:"Invoice"}),e.jsx(d,{children:"Status"}),e.jsx(d,{children:"Method"}),e.jsx(d,{className:"text-right",children:"Amount"})]})}),e.jsx(b,{children:e.jsxs(i,{children:[e.jsx(r,{className:"font-medium",children:"INV001"}),e.jsx(r,{children:"Paid"}),e.jsx(r,{children:"Credit Card"}),e.jsx(r,{className:"text-right",children:"$250.00"})]})})]});n.__docgenInfo={description:"",methods:[],displayName:"Default"};var p,x,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Invoice</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Method</TableHead>
        <TableHead className="text-right">Amount</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableCell className="font-medium">INV001</TableCell>
        <TableCell>Paid</TableCell>
        <TableCell>Credit Card</TableCell>
        <TableCell className="text-right">$250.00</TableCell>
      </TableRow>
    </TableBody>
  </Table>`,...(f=(x=n.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const _=["Default"];export{n as Default,_ as __namedExportsOrder,j as default};
