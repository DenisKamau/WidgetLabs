const V=({label:u="Button",variant:c="primary",size:b="medium",borderRadius:G="rounded-md",border:N="border",disabled:i=!1,loading:j=!1,icon:m=null,onClick:p=null,classNames:P="",styles:U={},type:g="button",href:_="#"})=>{const A="inline-block text-sm font-semibold capitalize flex gap-x-2 items-center justify-center whitespace-nowrap",F=b==="small"?"py-2 px-4 text-xs":b==="large"?"py-3 px-6 text-lg":"py-2 px-4",I={primary:"primary-btn",secondary:"secondary-btn",outlined:"outlined-btn",error:"error-btn",link:"link",ghost:"ghost-btn"}[c]||"primary-btn",Q=[A,F,I,G,N,i?"disabled-btn":"",P,"transition","duration-200","ease-in-out"].filter(Boolean).join(" "),e=document.createElement(g==="link"?"a":"button");if(e.className=Q,e.innerText=u,Object.assign(e.style,U),m){const r=document.createElement("i");r.className=m,e.prepend(r)}if(i&&(e.disabled=!0),g==="link"&&(e.href=_,e.setAttribute("role","button")),j){const r=document.createElement("span");r.className="loader",e.appendChild(r)}return p&&!i&&e.addEventListener("click",p),e},D={title:"General/Buttons",tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/design/w6S7R8OleB1I3y9Wv51UTA/%E2%9D%96-VCF---Untitled-UI-%E2%80%93-PRO-(v3.1)?node-id=10356-2882&t=Gd4tHyVKXRQQkMsF-1"}},argTypes:{label:{control:"text"},variant:{control:{type:"select"},options:["default","primary","secondary","outlined","error","link","ghost"]},borderRadius:{control:{type:"select"},options:["rounded-none","rounded-sm","rounded","rounded-md","rounded-lg","rounded-xl","rounded-2xl","rounded-3xl","rounded-full"]},border:{control:{type:"select"},options:["border","border-2","border-4","border-8"]},disabled:{control:"boolean"},loading:{control:"boolean"},icon:{control:"text"},classNames:{control:"text"},styles:{control:"object"},type:{control:{type:"select"},options:["button","link"]},href:{control:"text"}}},t=u=>V({...u}).outerHTML,o=t.bind({});o.args={variant:"primary",size:"medium",label:"Primary Button",border:"border",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"button",styles:{}};const n=t.bind({});n.args={variant:"secondary",size:"medium",label:"Secondary Button",border:"border",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"button",styles:{}};const s=t.bind({});s.args={variant:"outlined",size:"medium",label:"Outlined Button",border:"border",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"button",styles:{}};const a=t.bind({});a.args={variant:"error",size:"medium",label:"Error Button",border:"border",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"button",styles:{}};const d=t.bind({});d.args={variant:"link",size:"medium",label:"Link Button",border:"border-none",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"link",href:"#",classNames:"!p-0",styles:{}};const l=t.bind({});l.args={variant:"ghost",size:"medium",label:"Ghost Button",border:"border",borderRadius:"rounded-lg",disabled:!1,loading:!1,type:"button",styles:{}};var y,f,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var B,h,k;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var E,v,L;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(L=(v=s.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,R,S;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(S=(R=a.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var H,M,z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(z=(M=d.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var O,w,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`args => {
  const button = createButton({
    ...args
  });
  return button.outerHTML;
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const K=["Primary","Secondary","Outlined","Error","Link","Ghost"];export{a as Error,l as Ghost,d as Link,s as Outlined,o as Primary,n as Secondary,K as __namedExportsOrder,D as default};
