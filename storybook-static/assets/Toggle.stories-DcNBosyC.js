const d=({label:s="Use setting",isEnabled:e=!1,onToggle:o=null,classNames:l=""}={})=>{const r=document.createElement("div");r.className="flex items-center space-x-3";const t=document.createElement("button");t.setAttribute("type","button"),t.setAttribute("role","switch"),t.setAttribute("aria-checked",e.toString()),t.className=["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",e?"bg-indigo-600":"bg-gray-200",l].join(" ");const a=document.createElement("span");a.className=["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",e?"translate-x-5":"translate-x-0"].join(" "),a.setAttribute("aria-hidden","true"),t.appendChild(a),t.addEventListener("click",function(){e=!e,t.setAttribute("aria-checked",e.toString()),t.className=["relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",e?"bg-indigo-600":"bg-gray-200",l].join(" "),a.className=["pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",e?"translate-x-5":"translate-x-0"].join(" "),typeof o=="function"&&o(e)});const i=document.createElement("span");return i.textContent=s,i.className="text-sm font-medium text-gray-900",r.appendChild(t),r.appendChild(i),r},m={title:"Forms/Toggle",argTypes:{label:{control:"text",defaultValue:"Use setting"},isEnabled:{control:"boolean",defaultValue:!1},onToggle:{action:"toggled"},classNames:{control:"text"}}},f=s=>{const e=document.createElement("div"),o=d({...s});return e.appendChild(o),e},n=f.bind({});n.args={label:"Use setting",isEnabled:!1,classNames:""};var c,u,g;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const toggle = createToggle({
    ...args
  });
  container.appendChild(toggle);
  return container;
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const p=["Default"];export{n as Default,p as __namedExportsOrder,m as default};
