if(!self.define){let s,e={};const n=(n,l)=>(n=new URL(n+".js",l).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(l,r)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let o={};const u=s=>n(s,i),t={module:{uri:i},exports:o,require:u};e[i]=Promise.all(l.map((s=>t[s]||u(s)))).then((s=>(r(...s),o)))}}define(["./workbox-cd63daf5"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AlertCircleIcon-DbWn12Ta-DrERTXaH.js",revision:null},{url:"assets/AppConfirmDialog-DRbFBpnG.js",revision:null},{url:"assets/AppLayout-DfQ459Sl.js",revision:null},{url:"assets/AppTypedRouterLink.vue_vue_type_script_setup_true_lang-DjLmJdBu.js",revision:null},{url:"assets/ArrowDownIcon-BfZFJnIH.js",revision:null},{url:"assets/ArrowDownIcon-BIcQ3S6z-BkPaMRwj.js",revision:null},{url:"assets/ArrowLeftIcon-DBMKzbr5-BLLgLGBu.js",revision:null},{url:"assets/ArrowLeftIcon-DEC44u5C.js",revision:null},{url:"assets/ArrowRightIcon-CwRHjDKg.js",revision:null},{url:"assets/ArrowRightIcon-DlPP4P_c-B5N8WICQ.js",revision:null},{url:"assets/ArrowUpArrowDownIcon-BS2S1S6l.js",revision:null},{url:"assets/ArrowUpDownIcon-DCIg14Jp-m18RbMlc.js",revision:null},{url:"assets/ArrowUpIcon-USX7kga8.js",revision:null},{url:"assets/ArrowUpIcon-VEaqhGVO-C0ykIHS9.js",revision:null},{url:"assets/AuthForgotPasswordView-CiJxPYmN.js",revision:null},{url:"assets/AuthFormSubmitButton.vue_vue_type_script_setup_true_lang-CjEh3oGg.js",revision:null},{url:"assets/AuthLayout-DLmMRoox.js",revision:null},{url:"assets/AuthLoginView-brWyXix5.js",revision:null},{url:"assets/AuthResetPasswordView-BksHhwFW.js",revision:null},{url:"assets/BuildingIcon--HZ7uTUl.js",revision:null},{url:"assets/CalendarIcon-C04dFeqN.js",revision:null},{url:"assets/CheckmarkCircleIcon-CVnkDLTl-D1zei_2h.js",revision:null},{url:"assets/CheckmarkIcon-8y_F7tTC.js",revision:null},{url:"assets/CheckmarkIcon-DMR13f1g-Dz6MVO1S.js",revision:null},{url:"assets/ChevronDownIcon-BIFew7Qf.js",revision:null},{url:"assets/ChevronDownIcon-Ctba2T6d-DzhHw_WP.js",revision:null},{url:"assets/ChevronLeftIcon-B6wa18xY.js",revision:null},{url:"assets/ChevronLeftIcon-CIsTA6y9-Dk7QJP5y.js",revision:null},{url:"assets/ChevronRightIcon-2hlTtAHw.js",revision:null},{url:"assets/ChevronRightIcon-CalzAsBz-rZ2oe-P7.js",revision:null},{url:"assets/ChevronUpIcon-IPh0bTt--DWaucKgC.js",revision:null},{url:"assets/ChevronUpIcon-xD0WdfqQ.js",revision:null},{url:"assets/ClockIcon-S0gfUd0n.js",revision:null},{url:"assets/CloseIcon-Dy5gGwgP-zOUspPH9.js",revision:null},{url:"assets/CloseIcon-X7sYdwhB.js",revision:null},{url:"assets/CreditCardIcon-CjQ9r4iM.js",revision:null},{url:"assets/DownloadIcon-DJAQC0M2.js",revision:null},{url:"assets/EditIcon-BhfF-oMu.js",revision:null},{url:"assets/EyeIcon-BOSYgqMV.js",revision:null},{url:"assets/EyeIcon-Ch71YvSF-BwWsGOvb.js",revision:null},{url:"assets/EyeSlashIcon-CbAT5YuT-Dmb-yi_5.js",revision:null},{url:"assets/EyeSlashIcon-DDX_9pE4.js",revision:null},{url:"assets/FilterIcon-Cx4_iuPD.js",revision:null},{url:"assets/index-BNa35n53.js",revision:null},{url:"assets/index-DzZgcdt1.css",revision:null},{url:"assets/InfoIcon-CJ86Ui-K.js",revision:null},{url:"assets/LinkIcon-B8cMZyM5.js",revision:null},{url:"assets/LogoIcon-C1BgDOdB.js",revision:null},{url:"assets/LogoutIcon-DKm5NO61.js",revision:null},{url:"assets/MailIcon-_eR9-nSf.js",revision:null},{url:"assets/MinusIcon-B3K5HdGw-E4u4Lyrv.js",revision:null},{url:"assets/MinusIcon-KT0vM9bC.js",revision:null},{url:"assets/mutation.composable-Cc1u4btX.js",revision:null},{url:"assets/PlusIcon-CL35_tSG.js",revision:null},{url:"assets/query.composable-9bole1pb.js",revision:null},{url:"assets/queryKey.type-DKJ3CAEa.js",revision:null},{url:"assets/RefreshIcon-CwqjERGt.js",revision:null},{url:"assets/SearchIcon-4ICr3pTR-DCK6dtNS.js",revision:null},{url:"assets/SearchIcon-CSn1OLNj.js",revision:null},{url:"assets/SendIcon-CSQ9R65r.js",revision:null},{url:"assets/SettingsIcon-CtNRC6RD.js",revision:null},{url:"assets/SortAscendingIcon-DwN7MXyL.js",revision:null},{url:"assets/SortDescendingIcon-pIzt9Ne3.js",revision:null},{url:"assets/SortIcon-Z-Lt7d1C.js",revision:null},{url:"assets/style.util-CvD6zck5.js",revision:null},{url:"assets/ThreeDotsIcon-BMF_A0Jf.js",revision:null},{url:"assets/typedRouteParams.composable-BKx_qslq.js",revision:null},{url:"assets/typedRouter.composable-D7FKgN2N.js",revision:null},{url:"assets/UpdateCloudIcon-Ci1U9st9.js",revision:null},{url:"assets/UploadIcon-DRHuqqAL.js",revision:null},{url:"assets/useQueryClient-DdVShYgX.js",revision:null},{url:"assets/user.service-Dlwyc6rg.js",revision:null},{url:"assets/UserCreateView-JS6cSFlP.js",revision:null},{url:"assets/userDetail.query-D2ZiBq-k.js",revision:null},{url:"assets/UserDetailViewDataProvider-BWX86SU5.js",revision:null},{url:"assets/UserFormName.vue_vue_type_script_setup_true_lang-Dh0JO2jk.js",revision:null},{url:"assets/UserOverviewView-BCdJgFyR.js",revision:null},{url:"assets/UserUpdateViewDataProvider-B0rKhI58.js",revision:null},{url:"assets/WarningIcon-C_BSGEbt.js",revision:null},{url:"assets/WarningIcon-CI1Ts99C-KLOQxVZb.js",revision:null},{url:"assets/workbox-window.prod.es5-auNV3q4a.js",revision:null},{url:"index.html",revision:"ccf2a87db79b9daa519bdaf1cbc41d5e"},{url:"favicon.ico",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"apple-touch-icon.png",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"favicon_512x512.png",revision:"9782268e687e75e48e9c5788cfdb85bd"},{url:"favicon_192x192.png",revision:"e6e7f7339fcc325697b00619e4bb98e0"},{url:"manifest.webmanifest",revision:"bc458d0923a6049cc2a19e2ef5a3f8e8"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/api/]}))}));