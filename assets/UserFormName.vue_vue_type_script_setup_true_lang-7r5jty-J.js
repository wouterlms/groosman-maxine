import{L as w,ax as I,b as h,d,u as a,o as r,p as i,s as u,aA as N,k as v,c as x,n as k,a as f,e as l,w as c,f as m,t as _,W as g,g as $,I as b,x as y}from"./index-C7kCUYvj.js";import{c as M}from"./style.util-C2XdqwTU.js";(function(){try{var t=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="4081cfdf-1a6b-4df9-9bf5-923503f2f0a3",t._sentryDebugIdIdentifier="sentry-dbid-4081cfdf-1a6b-4df9-9bf5-923503f2f0a3")}catch{}})();function D(){const t=w(!1);return I(()=>{t.value=!0}),h(()=>t.value)}const A=d({__name:"AppTeleport",props:{target:{}},setup(t){const e=t,s=new Map([["body","body"],["header-actions","#header-actions"]]),o=D(),p=h(()=>{const n=s.get(e.target)??null;if(n===null)throw new Error(`Invalid teleport target: ${e.target}`);return n});return(n,E)=>a(o)?(r(),i(N,{key:0,to:p.value},[u(n.$slots,"default")],8,["to"])):v("",!0)}}),T=d({__name:"FormGrid",props:{cols:{}},setup(t){const e=t;return(s,o)=>(r(),x("div",{class:k([a(M)({"grid-cols-1":e.cols===1,"md:grid-cols-2":e.cols===2,"lg:grid-cols-3":e.cols===3,"xl:grid-cols-4":e.cols===4,"2xl:grid-cols-5":e.cols>=5}),"grid gap-4"])},[u(s.$slots,"default")],2))}}),B={class:"grid gap-x-8 gap-y-4 lg:grid-cols-3"},C={class:"col-span-2"},V=d({__name:"FormSection",props:{description:{default:null},title:{}},setup(t){const e=t;return(s,o)=>(r(),x("div",B,[f("div",null,[l(a(g),{class:"font-medium",variant:"body"},{default:c(()=>[m(_(e.title),1)]),_:1}),e.description!==null?(r(),i(a(g),{key:0,class:"mt-1 text-muted-foreground",variant:"subtext"},{default:c(()=>[m(_(e.description),1)]),_:1})):v("",!0)]),f("div",C,[u(s.$slots,"default")])]))}}),z=d({__name:"UserFormName",props:{firstName:{},lastName:{}},setup(t){const e=t,{t:s}=$();return(o,p)=>(r(),i(V,{description:a(s)("users.form.section.name.description"),title:a(s)("shared.name")},{default:c(()=>[l(T,{cols:2},{default:c(()=>[l(a(b),y(e.firstName,{label:a(s)("shared.first_name")}),null,16,["label"]),l(a(b),y(e.lastName,{label:a(s)("shared.last_name")}),null,16,["label"])]),_:1})]),_:1},8,["description","title"]))}});export{A as _,z as a};