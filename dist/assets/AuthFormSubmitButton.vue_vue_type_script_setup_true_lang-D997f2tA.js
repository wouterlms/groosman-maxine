import{d as i,o as f,c as _,e as o,w as a,u as r,a as m,s as l,f as n,t as d,W as c,p,J as b}from"./index-BIVmY7Rl.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="7cde2ece-ba99-4b3b-83bf-72eae9e147d4",e._sentryDebugIdIdentifier="sentry-dbid-7cde2ece-ba99-4b3b-83bf-72eae9e147d4")}catch{}})();const y={class:"flex w-full flex-col items-center justify-center pb-24"},g={class:"mt-6 w-full"},h=i({__name:"AuthPage",props:{description:{},title:{}},setup(e){const t=e;return(s,u)=>(f(),_("div",y,[o(r(c),{class:"font-medium text-foreground",variant:"title"},{default:a(()=>[n(d(t.title),1)]),_:1}),o(r(c),{class:"mt-2",variant:"subtext"},{default:a(()=>[n(d(t.description),1)]),_:1}),m("div",g,[l(s.$slots,"default")])]))}}),x=i({__name:"AuthFormSubmitButton",props:{form:{}},setup(e){const t=e;return(s,u)=>(f(),p(b,{form:t.form,"is-keyboard-command-disabled":!0,class:"mt-4"},{default:a(()=>[l(s.$slots,"default")]),_:3},8,["form"]))}});export{x as _,h as a};