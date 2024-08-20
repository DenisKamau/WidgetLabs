const C=({id:a="location",name:n="location",label:s="Location",options:u=["United States","Canada","Mexico"],selectedOption:p="Canada",classNames:x=""}={})=>{const c=document.createElement("div");c.className=`${x}`;const o=document.createElement("label");o.className="block text-sm font-medium leading-6 text-gray-900",o.setAttribute("for",a),o.textContent=s;const e=document.createElement("select");return e.id=a,e.name=n,e.className="mt-2 bg-white px-2",u.forEach(r=>{const l=document.createElement("option");l.value=r,l.textContent=r,r===p&&(l.selected=!0),e.appendChild(l)}),c.appendChild(o),c.appendChild(e),c},f={title:"Forms/Select",parameters:{layout:"centered"},argTypes:{label:{control:"text",defaultValue:"Location"},options:{control:"array",defaultValue:["United States","Canada","Mexico"]},selectedOption:{control:"text",defaultValue:"Canada"},classNames:{control:"text"}}},E=a=>{const n=document.createElement("div"),s=C({...a});return n.appendChild(s),n},t=E.bind({});t.args={label:"Location",options:["United States","Canada","Mexico"],selectedOption:"Canada",classNames:"min-w-[250px]"};var d,i,m;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const select = createSelect({
    ...args
  });
  container.appendChild(select);
  return container;
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,f as default};
