const L=({items:c=[],separator:d="chevron"})=>{const m=document.createElement("nav");m.className="flex my-4";const l=document.createElement("ol");return l.className="hidden sm:flex items-center space-x-2 capitalize",l.setAttribute("role","list"),c.forEach((u,S)=>{const a=document.createElement("li");if(a.className="flex gap-2",S<c.length-1){const e=document.createElement("a");e.href=u.href,e.className="text-slate-600 hover:text-gray-800 text-sm font-medium leading-6",e.innerText=u.label,a.appendChild(e);const t=document.createElement("div");if(t.className="flex items-center",d==="chevron"){const r=document.createElement("svg");r.className="h-5 w-5 flex-shrink-0 text-gray-400",r.setAttribute("viewBox","0 0 20 20"),r.setAttribute("fill","currentColor"),r.setAttribute("aria-hidden","true"),r.innerHTML=`
            <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd"></path>
          `,t.appendChild(r)}else d==="/"&&(t.innerText="/",t.className+=" ml-1 text-gray-400");a.appendChild(t)}else{const e=document.createElement("span");e.className="text-slate-700 text-sm font-semibold bg-gray-50 rounded-md px-1.5 py-0.5",e.innerText=u.label,a.appendChild(e)}l.appendChild(a)}),m.appendChild(l),m},B={title:"Navigation/Breadcrumb",tags:["autodocs"],argTypes:{items:{control:"object"},separator:{control:{type:"select"},options:["chevron","/"]}}},i=c=>L({...c}).outerHTML,o=i.bind({});o.args={items:[{href:"/individual/etims/lpo",label:"local purchase orders"},{href:"#",label:"create local purchase order"}],separator:"chevron"};const s=i.bind({});s.args={items:[{href:"/individual/etims/lpo",label:"local purchase orders"},{href:"#",label:"create local purchase order"}],separator:"/"};const n=i.bind({});n.args={items:[{href:"/home",label:"Home"},{href:"/category",label:"Category"},{href:"/subcategory",label:"Subcategory"},{href:"/product",label:"Product"},{href:"/details",label:"Details"}],separator:"chevron"};var p,b,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`args => {
  const breadcrumb = createBreadcrumb({
    ...args
  });
  return breadcrumb.outerHTML; // Return HTML string for Storybook to render
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,f,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`args => {
  const breadcrumb = createBreadcrumb({
    ...args
  });
  return breadcrumb.outerHTML; // Return HTML string for Storybook to render
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,y,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`args => {
  const breadcrumb = createBreadcrumb({
    ...args
  });
  return breadcrumb.outerHTML; // Return HTML string for Storybook to render
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const E=["Default","SlashSeparator","LongBreadcrumb"];export{o as Default,n as LongBreadcrumb,s as SlashSeparator,E as __namedExportsOrder,B as default};
