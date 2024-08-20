const j=({text:g="Badge",color:i="bg-gray-100 text-gray-600",size:p="default",type:N="default",removable:P=!1,onRemove:m=null,classNames:T="",styles:_={}}={})=>{const e=document.createElement("span");let l="";switch(p){case"small":l="px-2.5 py-0.5 text-xs";break;case"large":l="px-3 py-1 text-sm";break;default:l="px-2 py-1 text-xs"}const $={primary:"bg-blue-100 text-blue-800",success:"bg-green-100 text-green-800",danger:"bg-red-100 text-red-800",warning:"bg-yellow-100 text-yellow-800",gray:"bg-gray-100 text-gray-600"}[N]||"bg-gray-100 text-gray-600";if(e.className=`inline-flex items-center gap-x-0.5 rounded-md ${$} ${l} ${T}`,e.textContent=g,Object.assign(e.style,_),P){const r=document.createElement("button");r.type="button",r.className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-gray-500/20",r.innerHTML=`
        <span class="sr-only">Remove</span>
        <svg viewBox="0 0 14 14" class="h-3.5 w-3.5 stroke-gray-700/50 group-hover:stroke-gray-700/75">
          <path d="M4 4l6 6m0-6l-6 6" />
        </svg>
        <span class="absolute -inset-1"></span>
      `,r.addEventListener("click",()=>{m&&m(),e.remove()}),e.appendChild(r)}return e},z={title:"Data Display/Badge",argTypes:{text:{control:"text",defaultValue:"Badge"},type:{control:"select",options:["primary","success","danger","warning","gray"],defaultValue:"gray"},size:{control:"select",options:["small","default","large"],defaultValue:"default"},removable:{control:"boolean",defaultValue:!1},classNames:{control:"text",defaultValue:""},styles:{control:"object",defaultValue:{}},onRemove:{action:"removed"}}},a=g=>{const i=document.createElement("div"),p=j({...g});return i.appendChild(p),i},t=a.bind({});t.args={text:"Primary Badge",type:"primary",removable:!1};const n=a.bind({});n.args={text:"Success Badge",type:"success",removable:!1};const s=a.bind({});s.args={text:"Danger Badge",type:"danger",removable:!1};const o=a.bind({});o.args={text:"Warning Badge",type:"warning",removable:!1};const c=a.bind({});c.args={text:"Gray Badge",type:"gray",removable:!1};const d=a.bind({});d.args={text:"Removable Badge",type:"gray",removable:!0};var u,b,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,v,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(f=(v=n.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,h,C;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var E,w,S;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(S=(w=o.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var V,k,D;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(D=(k=c.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var W,R,G;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`args => {
  const container = document.createElement('div');
  const badge = createBadge({
    ...args
  });
  container.appendChild(badge);
  return container;
}`,...(G=(R=d.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};const F=["Primary","Success","Danger","Warning","Gray","FlatWithRemoveButton"];export{s as Danger,d as FlatWithRemoveButton,c as Gray,t as Primary,n as Success,o as Warning,F as __namedExportsOrder,z as default};
