import{u as l,_ as f}from"./userDetail.query-nYBGIqpu.js";import{u as _}from"./typedRouteParams.composable-CBwSUAHG.js";import{d as i,g as m,o as n,p as d,w as t,e as c,f as y,t as b,u as a,i as w}from"./index-CGlgPuEt.js";import{_ as D}from"./user.service-ijSwUZN-.js";import"./_plugin-vue_export-helper-5heKHmp9.js";import"./query.composable-B0NZ0lJr.js";import"./useQueryClient-ylb1_Lpr.js";import"./queryKey.type-DuZL0onf.js";(function(){try{var s=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},e=new Error().stack;e&&(s._sentryDebugIds=s._sentryDebugIds||{},s._sentryDebugIds[e]="62887c32-9599-4c02-9966-51a8bfa38394",s._sentryDebugIdIdentifier="sentry-dbid-62887c32-9599-4c02-9966-51a8bfa38394")}catch{}})();const g=i({__name:"UserDetailView",props:{user:{}},setup(s){const e=s,{t:r}=m(),u=[{label:r("shared.users"),to:{name:"user-overview"},type:"route"},{label:e.user.fullName,type:"page"}];return(p,o)=>(n(),d(D,{breadcrumbs:u,title:e.user.fullName},{"header-actions":t(()=>[c(a(w),{to:{name:"users-update",params:{userUuid:e.user.uuid}}},{default:t(()=>[y(b(a(r)("users.detail.edit_user")),1)]),_:1},8,["to"])]),_:1},8,["title"]))}}),P=i({__name:"UserDetailViewDataProvider",setup(s){const e=_(),r=l(e.userUuid);return(u,p)=>(n(),d(f,{queries:{user:a(r)}},{default:t(({data:o})=>[c(g,{user:o.user},null,8,["user"])]),_:1},8,["queries"]))}});export{P as default};
