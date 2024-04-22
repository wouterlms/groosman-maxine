import{z as f,o as d,c as E,s as I,d as w,g as L,p as x,w as n,e as a,u as e,I as S,x as p,G as $,W as v,f as g,t as h,_ as U,h as F,y as k,A as B,b as V,B as C,E as N}from"./index-E1lsH67L.js";import{u as T}from"./typedRouter.composable-COdRdYtN.js";import{_ as q,a as G}from"./AuthFormSubmitButton.vue_vue_type_script_setup_true_lang-BjeYwIdp.js";import{_ as R}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{_ as j}from"./AppTypedRouterLink.vue_vue_type_script_setup_true_lang-B9WMLGg7.js";const z=f.object({email:f.string().email(),password:f.string().min(1)}),D={},P={class:"flex flex-col gap-y-2"};function W(l,t){return d(),E("div",P,[I(l.$slots,"default")])}const H=R(D,[["render",W]]),J=w({__name:"AuthLoginForm",props:{form:{},lastLoggedInUser:{}},setup(l){var c;const t=l,{t:o}=L(),r=t.form.register("email",(c=t.lastLoggedInUser)==null?void 0:c.email),u=t.form.register("password");return(i,_)=>(d(),x(U,{form:i.form},{default:n(()=>[a(H,null,{default:n(()=>[a(e(S),p(e(r),{"is-required":!0,label:e(o)("form.fields.email"),placeholder:"email@example.com",type:"email"}),null,16,["label"]),a(e($),p(e(u),{"is-required":!0,label:e(o)("form.fields.password"),placeholder:e(o)("form.fields.password")}),null,16,["label","placeholder"]),a(j,{to:{name:"forgot-password"},class:"py-2"},{default:n(()=>[a(e(v),{class:"font-medium text-primary",variant:"subtext"},{default:n(()=>[g(h(e(o)("auth.login.forgot_password")),1)]),_:1})]),_:1})]),_:1}),a(q,{form:i.form},{default:n(()=>[g(h(e(o)("auth.login.log_in")),1)]),_:1},8,["form"])]),_:1},8,["form"]))}}),Y=w({__name:"AuthLoginView",setup(l){const t=F(),{lastLoggedInUser:o}=k(t),{t:r}=L(),u=N(),c=T(),{form:i,onSubmitForm:_}=B({schema:z}),y=V(()=>o.value===null?r("auth.login.log_in"):r("auth.login.welcome_back_name",{name:o.value.firstName}));async function b(s){t.setLastLoginAttemptEmail(null),t.setLastLoggedInUser(s),await c.replace({name:"index"})}function A(s){if(s instanceof C)i.addErrors({password:{_errors:[r("auth.login.invalid_email_or_password")]}}),u.error({description:r("auth.login.error_toast.description"),title:r("auth.login.error_toast.title")});else throw s}return _(async s=>{try{await t.login(s);const m=await t.getCurrentUser();await b(m)}catch(m){A(m),t.setLastLoginAttemptEmail(s.email)}}),(s,m)=>(d(),x(G,{description:e(r)("auth.login.sign_in_to_continue"),title:y.value},{default:n(()=>[a(J,{form:e(i),"last-logged-in-user":e(o)},null,8,["form","last-logged-in-user"])]),_:1},8,["description","title"]))}});export{Y as default};
