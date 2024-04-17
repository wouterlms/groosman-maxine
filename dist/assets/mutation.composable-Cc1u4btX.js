var E=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)};var i=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),m=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},y=(e,t,s,r)=>(E(e,t,"write to private field"),r?r.call(e,s):t.set(e,s),s);var g=(e,t,s)=>(E(e,t,"access private method"),s);import{S as k,M as R,N as x,O as _,P as Q,b as C,Q as U,T as P,U as T,X as I,Y as $,Z as j,$ as H,a0 as L,g as F,a1 as K,H as N}from"./index-BNa35n53.js";import{u as D}from"./useQueryClient-DdVShYgX.js";(function(){try{var e=typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},t=new Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8ad9ee06-c7d6-4ff4-8542-9bcb98dc2753",e._sentryDebugIdIdentifier="sentry-dbid-8ad9ee06-c7d6-4ff4-8542-9bcb98dc2753")}catch{}})();var p,b,a,d,O,M,w,S,A,X=(A=class extends k{constructor(t,s){super();m(this,O);m(this,w);m(this,p,void 0);m(this,b,void 0);m(this,a,void 0);m(this,d,void 0);y(this,p,t),this.setOptions(s),this.bindMethods(),g(this,O,M).call(this)}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var r;const s=this.options;this.options=i(this,p).defaultMutationOptions(t),R(this.options,s)||i(this,p).getMutationCache().notify({type:"observerOptionsUpdated",mutation:i(this,a),observer:this}),s!=null&&s.mutationKey&&this.options.mutationKey&&x(s.mutationKey)!==x(this.options.mutationKey)?this.reset():((r=i(this,a))==null?void 0:r.state.status)==="pending"&&i(this,a).setOptions(this.options)}onUnsubscribe(){var t;this.hasListeners()||(t=i(this,a))==null||t.removeObserver(this)}onMutationUpdate(t){g(this,O,M).call(this),g(this,w,S).call(this,t)}getCurrentResult(){return i(this,b)}reset(){var t;(t=i(this,a))==null||t.removeObserver(this),y(this,a,void 0),g(this,O,M).call(this),g(this,w,S).call(this)}mutate(t,s){var r;return y(this,d,s),(r=i(this,a))==null||r.removeObserver(this),y(this,a,i(this,p).getMutationCache().build(i(this,p),this.options)),i(this,a).addObserver(this),i(this,a).execute(t)}},p=new WeakMap,b=new WeakMap,a=new WeakMap,d=new WeakMap,O=new WeakSet,M=function(){var s;const t=((s=i(this,a))==null?void 0:s.state)??_();y(this,b,{...t,isPending:t.status==="pending",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset})},w=new WeakSet,S=function(t){Q.batch(()=>{var s,r,u,n,v,l,o,h;if(i(this,d)&&this.hasListeners()){const c=i(this,b).variables,f=i(this,b).context;(t==null?void 0:t.type)==="success"?((r=(s=i(this,d)).onSuccess)==null||r.call(s,t.data,c,f),(n=(u=i(this,d)).onSettled)==null||n.call(u,t.data,null,c,f)):(t==null?void 0:t.type)==="error"&&((l=(v=i(this,d)).onError)==null||l.call(v,t.error,c,f),(h=(o=i(this,d)).onSettled)==null||h.call(o,void 0,t.error,c,f))}this.listeners.forEach(c=>{c(i(this,b))})})},A);function Y(e,t){const s=t||D(),r=C(()=>s.defaultMutationOptions(U(e))),u=new X(s,r.value),n=P(u.getCurrentResult()),v=u.subscribe(h=>{T(n,h)}),l=(h,c)=>{u.mutate(h,c).catch(()=>{})};I(r,()=>{u.setOptions(r.value)}),$(()=>{v()});const o=j(H(n));return I(()=>n.error,h=>{if(h&&L(r.value.throwOnError,[h]))throw h}),{...o,mutate:l,mutateAsync:n.mutate,reset:n.reset}}function G(){const{t:e}=F(),t=N();function s(r){var u;if(K.isAxiosError(r)){const{response:n}=r;t.error({description:((u=n==null?void 0:n.data)==null?void 0:u.message)??e("error.default_error.description"),title:e("error.default_error.title")});return}throw r}return{show:s}}function J({queryFn:e,queryKeysToInvalidate:t}){const s=D(),{data:r,isPending:u,mutateAsync:n}=Y({mutationFn:e,onSuccess:async l=>{await Promise.all(t.map(o=>{if("key"in o&&!("params"in o))return console.log(`[CACHE] Invalidating \`${o.key}\``),s.invalidateQueries({queryKey:[o.key],refetchType:"active"});if("key"in o&&"params"in o){const h=Object.values(o.params).map(f=>typeof f=="function"?f(l):f),c=[o.key,...Object.values(h)];return console.log(`[CACHE] Invalidating \`${c}\``),s.invalidateQueries({exact:!0,queryKey:c})}return s.invalidateQueries()}))}});async function v(l){return await n(l)}return{data:C(()=>r.value),execute:v,isLoading:C(()=>u.value)}}export{G as a,J as u};
