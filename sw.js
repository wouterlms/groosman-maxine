if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>n(s,i),t={module:{uri:i},exports:o,require:u};e[i]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-cd63daf5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AlertCircleIcon-DbWn12Ta-BB9HUU7_.js",revision:null},{url:"assets/AppConfirmDialog-BRGoM2Qc.js",revision:null},{url:"assets/AppLayout-B0gsgaLJ.js",revision:null},{url:"assets/AppTypedRouterLink.vue_vue_type_script_setup_true_lang-MXdGYyBw.js",revision:null},{url:"assets/ArrowDownIcon-BIcQ3S6z-aPAxISV8.js",revision:null},{url:"assets/ArrowDownIcon-X2GXtd2K.js",revision:null},{url:"assets/ArrowLeftIcon-C1t7p678.js",revision:null},{url:"assets/ArrowLeftIcon-DBMKzbr5-6rOeyuZw.js",revision:null},{url:"assets/ArrowRightIcon-B_OHy7qh.js",revision:null},{url:"assets/ArrowRightIcon-DlPP4P_c-_XLjYzjA.js",revision:null},{url:"assets/ArrowUpArrowDownIcon-BArfPsK3.js",revision:null},{url:"assets/ArrowUpDownIcon-DCIg14Jp-BAHzzIcD.js",revision:null},{url:"assets/ArrowUpIcon-1d_khRGj.js",revision:null},{url:"assets/ArrowUpIcon-VEaqhGVO-CuEUJL84.js",revision:null},{url:"assets/AuthForgotPasswordView-rPT9BcD1.js",revision:null},{url:"assets/AuthFormSubmitButton.vue_vue_type_script_setup_true_lang-Cb4zWZpb.js",revision:null},{url:"assets/AuthLayout-Cte5axHp.js",revision:null},{url:"assets/AuthLoginView-mx8zbfNt.js",revision:null},{url:"assets/AuthResetPasswordView-C_YZXQWy.js",revision:null},{url:"assets/BuildingIcon-q9uIMy6R.js",revision:null},{url:"assets/CalendarIcon-Fb48qbLA.js",revision:null},{url:"assets/CheckmarkCircleIcon-CVnkDLTl-DmgRbMUU.js",revision:null},{url:"assets/CheckmarkIcon-By82owzY.js",revision:null},{url:"assets/CheckmarkIcon-DMR13f1g-CqRyh2yO.js",revision:null},{url:"assets/ChevronDownIcon-Ctba2T6d-DH9tO-HY.js",revision:null},{url:"assets/ChevronDownIcon-DNCop9z7.js",revision:null},{url:"assets/ChevronLeftIcon-C9po99Tf.js",revision:null},{url:"assets/ChevronLeftIcon-CIsTA6y9-B2b-zWo5.js",revision:null},{url:"assets/ChevronRightIcon-03V9xeBp.js",revision:null},{url:"assets/ChevronRightIcon-CalzAsBz-eiRY8NAm.js",revision:null},{url:"assets/ChevronUpIcon-DDylBUa7.js",revision:null},{url:"assets/ChevronUpIcon-IPh0bTt--CePHHti6.js",revision:null},{url:"assets/ClockIcon-B2nXpwfy.js",revision:null},{url:"assets/CloseIcon-au-y4Qo8.js",revision:null},{url:"assets/CloseIcon-Dy5gGwgP-BYFufsjW.js",revision:null},{url:"assets/CreditCardIcon-DywpEPd3.js",revision:null},{url:"assets/DownloadIcon-G1C92la2.js",revision:null},{url:"assets/EditIcon-CpExhJgK.js",revision:null},{url:"assets/EyeIcon-Ch71YvSF-CHFbbAg3.js",revision:null},{url:"assets/EyeIcon-TijuNIwI.js",revision:null},{url:"assets/EyeSlashIcon-C_GCi5h2.js",revision:null},{url:"assets/EyeSlashIcon-CbAT5YuT-JXA3FGrV.js",revision:null},{url:"assets/FilterIcon-S7k85WvP.js",revision:null},{url:"assets/index-aQrCnYkh.js",revision:null},{url:"assets/index-Cp9hM_vu.css",revision:null},{url:"assets/InfoIcon-lvYNs1Nl.js",revision:null},{url:"assets/LinkIcon-DZzpkrSS.js",revision:null},{url:"assets/LogoIcon-CPdh9IkK.js",revision:null},{url:"assets/LogoutIcon-D9Y8ntW1.js",revision:null},{url:"assets/MailIcon-D0WSxR5_.js",revision:null},{url:"assets/MinusIcon-B3K5HdGw-BVnKK8AN.js",revision:null},{url:"assets/MinusIcon-DnUWJyhs.js",revision:null},{url:"assets/mutation.composable-D7nVljzD.js",revision:null},{url:"assets/PlusIcon-Bm0FQDFQ.js",revision:null},{url:"assets/query.composable-7nxB4QuA.js",revision:null},{url:"assets/queryKey.type-8SGhouqn.js",revision:null},{url:"assets/RefreshIcon-BdXGkCtv.js",revision:null},{url:"assets/SearchIcon-4ICr3pTR-FXniYKir.js",revision:null},{url:"assets/SearchIcon-B1RC3Rme.js",revision:null},{url:"assets/SendIcon-DN01qPhG.js",revision:null},{url:"assets/SettingsIcon-B_0Ryhm9.js",revision:null},{url:"assets/SortAscendingIcon-NwTrI0cp.js",revision:null},{url:"assets/SortDescendingIcon-CTA6FoWO.js",revision:null},{url:"assets/SortIcon-B4XZ8NyO.js",revision:null},{url:"assets/style.util-CZO2SqSi.js",revision:null},{url:"assets/ThreeDotsIcon-BevAfAcL.js",revision:null},{url:"assets/typedRouteParams.composable-Bqy_Cmjx.js",revision:null},{url:"assets/typedRouter.composable-YIMjAJq9.js",revision:null},{url:"assets/UpdateCloudIcon-CmLkviOb.js",revision:null},{url:"assets/UploadIcon-BYoAz4O5.js",revision:null},{url:"assets/useQueryClient-BJCLJHuz.js",revision:null},{url:"assets/user.service-LZhDX_sm.js",revision:null},{url:"assets/UserCreateView-DMKWJhwt.js",revision:null},{url:"assets/userDetail.query-CW-143Ay.js",revision:null},{url:"assets/UserDetailViewDataProvider-D3s6UZJx.js",revision:null},{url:"assets/UserFormName.vue_vue_type_script_setup_true_lang-Dpjexb9W.js",revision:null},{url:"assets/UserOverviewView-j5Fy0RMz.js",revision:null},{url:"assets/UserUpdateViewDataProvider-D593lrp_.js",revision:null},{url:"assets/WarningIcon-Bu8Oyiuk.js",revision:null},{url:"assets/WarningIcon-CI1Ts99C-Cn4Yi6IA.js",revision:null},{url:"assets/workbox-window.prod.es5-auNV3q4a.js",revision:null},{url:"index.html",revision:"aa5f659a242260ef2b08fdffa67d424c"},{url:"favicon.ico",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"apple-touch-icon.png",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"favicon_512x512.png",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"favicon_192x192.png",revision:"e6e7f7339fcc325697b00619e4bb98e0"},{url:"manifest.webmanifest",revision:"7d40bb1ebed624f829bad4638b70fa63"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/api/]}))}));
