const m=({label:n="Radio",disabled:e=!1,name:s="radio-group",onChange:r=null,classNames:c="",description:u="",id:g="radio"})=>{const a=document.createElement("div");a.className=`relative flex items-start ${c}`;const p=document.createElement("div");p.className="flex h-6 items-center";const t=document.createElement("input");t.type="radio",t.id=g,t.name=s,t.disabled=e,t.className="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-600",r&&t.addEventListener("change",o=>{r(o.target.checked)});const d=document.createElement("div");d.className="ml-3 text-sm leading-6";const l=document.createElement("label");if(l.setAttribute("for",g),l.className="text-gray-900 font-normal",l.innerText=n,u){const o=document.createElement("p");o.className="text-gray-500",o.innerText=u,d.appendChild(o)}return p.appendChild(t),d.appendChild(l),a.appendChild(p),a.appendChild(d),a.classList.add("gap-2"),a},C={title:"Forms/Radio",tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/file/abc123/Radio-Design?t=1234567890"}},argTypes:{label:{control:"text"},disabled:{control:"boolean"},name:{control:"text"},classNames:{control:"text"},description:{control:"text"},id:{control:"text"},onChange:{action:"changed"}}},f=n=>{const e=document.createElement("div");e.className="space-y-2";const s=m({...n,label:"Option 1",id:"option-1"}),r=m({...n,label:"Option 2",id:"option-2"}),c=m({...n,label:"Option 3",id:"option-3"});return e.appendChild(s),e.appendChild(r),e.appendChild(c),e.outerHTML},i=f.bind({});i.args={disabled:!1,name:"radio-group",classNames:"",description:""};var h,b,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  container.className = 'space-y-2';

  // Example: Multiple radio options
  const radio1 = createRadio({
    ...args,
    label: 'Option 1',
    id: 'option-1'
  });
  const radio2 = createRadio({
    ...args,
    label: 'Option 2',
    id: 'option-2'
  });
  const radio3 = createRadio({
    ...args,
    label: 'Option 3',
    id: 'option-3'
  });
  container.appendChild(radio1);
  container.appendChild(radio2);
  container.appendChild(radio3);
  return container.outerHTML;
}`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const E=["MultipleChoices"];export{i as MultipleChoices,E as __namedExportsOrder,C as default};
