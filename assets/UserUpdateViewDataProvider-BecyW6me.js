import{u as g,_ as w}from"./userDetail.query-kd7RNPGe.js";import{u as x}from"./typedRouteParams.composable-CFWYm5DS.js";import{z as c,d as p,g as h,o as f,p as d,w as t,e as a,H as S,f as T,t as $,u as o,_ as F,A as v,b as D,E}from"./index-E1lsH67L.js";import{U as k,_ as q,a as Q}from"./user.service-CzpM2usr.js";import{u as R,a as V}from"./mutation.composable-BQZy2jA9.js";import{u as A}from"./typedRouter.composable-COdRdYtN.js";import{Q as y}from"./queryKey.type-CxycCLMA.js";import{_ as I,a as M}from"./UserFormName.vue_vue_type_script_setup_true_lang-DasoU3eu.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./query.composable-E1x3G_DG.js";import"./useQueryClient-Ct9uGIH0.js";import"./style.util-CHtjtCvc.js";const P=c.object({firstName:c.string().min(1),lastName:c.string().min(1)});function B(){return R({queryFn:async({body:r,params:e})=>await k.update(e.userUuid,r),queryKeysToInvalidate:[{exact:!1,key:y.USERS},{exact:!0,key:y.USER_DETAIL,params:{userUuid:r=>r.uuid}}]})}const C=p({__name:"UserUpdateForm",props:{form:{}},setup(r){const e=r,{t:s}=h(),u=e.form.register("firstName"),m=e.form.register("lastName");return(i,_)=>(f(),d(F,{form:e.form},{default:t(({formId:n})=>[a(I,{target:"header-actions"},{default:t(()=>[a(S,{"form-id":n,form:e.form},{default:t(()=>[T($(o(s)("form.save_changes")),1)]),_:2},1032,["form-id","form"])]),_:2},1024),a(M,{"first-name":o(u),"last-name":o(m)},null,8,["first-name","last-name"])]),_:1},8,["form"]))}}),K=p({__name:"UserUpdateView",props:{user:{}},setup(r){const e=r,{t:s}=h(),u=A(),m=E(),i=V(),_=B(),n=[{label:s("shared.users"),to:{name:"user-overview"},type:"route"},{label:e.user.fullName,to:{name:"user-detail",params:{userUuid:e.user.uuid}},type:"route"},{label:s("shared.edit"),type:"page"}],{form:N,onSubmitForm:b}=v({initialState:D(()=>Q.toUpdateForm(e.user)),schema:P});return b(async l=>{try{await _.execute({body:l,params:{userUuid:e.user.uuid}}),m.success({title:s("users.update.success")}),await u.push({name:"user-detail",params:{userUuid:e.user.uuid}})}catch(U){i.show(U)}}),(l,U)=>(f(),d(q,{breadcrumbs:n,title:e.user.fullName},{default:t(()=>[a(C,{form:o(N)},null,8,["form"])]),_:1},8,["title"]))}}),re=p({__name:"UserUpdateViewDataProvider",setup(r){const e=x(),s=g(e.userUuid);return(u,m)=>(f(),d(w,{queries:{user:o(s)}},{default:t(({data:i})=>[a(K,{user:i.user},null,8,["user"])]),_:1},8,["queries"]))}});export{re as default};