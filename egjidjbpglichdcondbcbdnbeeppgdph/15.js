"use strict";(self.webpackChunkbrowser_extension_wallet=self.webpackChunkbrowser_extension_wallet||[]).push([[15],{1824:((m,g,o)=>{o.d(g,{p:()=>u});var n=o(20038);const y={collections:[],collectionsLastSync:null,reportedByWallet:{},nfts:{}},u=(0,n.Z0)({name:"nft",initialState:y,reducers:{addCollections(i,c){i.collections.push(...c.payload.collections)},resetCollections(i,c){i.collections=c.payload.collections},removeCollection(i,c){i.collections=i.collections.filter(d=>d.id!==c.payload.id)},reduceCollectionOwnedTokens(i,c){const d=i.collections.find(s=>s.id===c.payload.id);d&&(d.totalOwnedTokens-=1)},reportCollection(i,c){if(c.payload.report)i.reportedByWallet[c.payload.walletId]?i.reportedByWallet[c.payload.walletId].push(c.payload.collectionId):i.reportedByWallet[c.payload.walletId]=[c.payload.collectionId];else{const d=i.reportedByWallet[c.payload.walletId].indexOf(c.payload.collectionId);i.reportedByWallet[c.payload.walletId].splice(d,1)}},resetCollectionItems(i,c){i.nfts[c.payload.collectionId]={lastSync:Date.now(),items:c.payload.items}},appendCollectionItems(i,c){c.payload.collectionId in i.nfts&&(i.nfts[c.payload.collectionId].items.push(...c.payload.items),i.nfts[c.payload.collectionId].lastSync=Date.now())},resetItemsByCollectionKey(i){const c=Object.keys(i.nfts);for(let d=0;d<c.length;d++)i.collections.some(p=>p.id===c[d])||delete i.nfts[c[d]]},touchNFTs(i){i.collectionsLastSync=Date.now()}}})}),2597:((m,g,o)=>{o.d(g,{Dz:()=>u,b4:()=>c,uv:()=>i});var n=o(90658),y=o(81220);class u extends y.X{constructor(s){var p;super(),this.port=(p=n.A.runtime)==null?void 0:p.connect({name:s||"extension-message"}),this.port||location.reload(),this.port.onMessage.addListener(x=>{const v=x.method;!v||!this.listeners[v]||this.listeners[v].forEach(b=>b(x))})}send(s){try{this.port.postMessage(s)}catch(p){if(p?.message==="Attempting to use a disconnected port object")return;throw p}}listen(s){this.port.onMessage.addListener(p=>{s(p)})}disconnect(){this.port.disconnect()}}const i=d=>(n.A.runtime.onMessage.addListener(d),()=>n.A.runtime.onMessage.removeListener(d)),c=d=>n.A.runtime.sendMessage(d)}),3725:((m,g,o)=>{m.exports=o.p+"8f89158e397ee29236ed.ttf"}),4387:((m,g,o)=>{o.d(g,{W:()=>i});var n=o(56120),y=o(20038);const u={settings:{mev:!0,thorchainStreams:!0,solanaTurboSwaps:!1,environment:n.g.PRODUCTION},isP2PBannerClosed:!1,isUSCitizen:null,assets:{fromAsset:null,toAsset:null},swap712Data:{isEip712:!1,provider:null}},i=(0,y.Z0)({name:"swap",initialState:u,reducers:{toggleMev(c){c.settings.mev=!c.settings.mev},toggleThorchainStreams(c){c.settings.thorchainStreams=!c.settings.thorchainStreams},toggleSolanaTurboSwaps(c){c.settings.solanaTurboSwaps=!c.settings.solanaTurboSwaps},updateEnvironment(c,d){c.settings.environment=d.payload},closeP2PBanner(c){c.isP2PBannerClosed=!0},setFromAsset(c,d){c.assets.fromAsset=d.payload},setToAsset(c,d){c.assets.toAsset=d.payload},setSwap712Data(c,d){c.swap712Data=d.payload},setIsUSCitizen(c,d){c.isUSCitizen=d.payload}}})}),4431:((m,g,o)=>{m.exports=o.p+"8e752fd0ad0ea39bc216.ttf"}),6517:((m,g,o)=>{o.d(g,{Dz:()=>i.Dz,M8:()=>u.M,b4:()=>i.b4,uv:()=>i.uv});var n=o(13123),y=o(32887),u=o(35798),i=o(2597)}),11711:((m,g,o)=>{o.d(g,{A:()=>u});var n=o(24439);const u={RESET:(0,n.If)("Reset"),LOCK:(0,n.If)("Lock"),LOCK_CALLBACK:(0,n.If)("Lock_callback"),AUTHENTICATE:(0,n.If)("Authenticate"),REGISTER_DEVICE:(0,n.If)("RegisterDevice"),APP_DISPLAYED:(0,n.If)("AppDisplayed"),WARNING_DISPLAYED:(0,n.If)("WarningDisplayed"),ICON_THEME_CHANGED:(0,n.If)("IconThemeChanged"),OPEN_POPUP:(0,n.If)("OpenPopup"),GET_APP_SETTINGS:(0,n.w3)("GetAppSettings"),GET_APP_NODES:(0,n.w3)("GetAppNodes"),GET_STORE:(0,n.If)("GetStore"),GET_REDUX_STATE:(0,n.If)("GetReduxState"),DISPATCH_REDUX_ACTION:(0,n.If)("DispatchReduxAction"),PING:(0,n.w3)("Ping"),GET_ONE_TAP_SETTINGS:(0,n.w3)("GetOneTapSettings"),ONE_TAP_DISMISS:(0,n.w3)("OneTapDismiss"),ONE_TAP_CONNECT:(0,n.w3)("OneTapConnect"),GET_TOKEN_SCANNER_I18N:(0,n.w3)("GetTokenScannerI18n"),GET_TOKEN_SCANNER_ENABLED:(0,n.w3)("GetTokenScannerEnabled"),GET_TOKEN_BASIC_INFO:(0,n.w3)("GetTokenBasicInfo"),GET_TOKEN_MARKET_DATA:(0,n.w3)("GetTokenMarketData"),GET_SIMILAR_TOKENS_COUNT:(0,n.w3)("GetSimilarTokensCount"),GET_SIMILAR_TOKENS:(0,n.w3)("GetSimilarTokens"),OPEN_SWAP_PAGE:(0,n.w3)("OpenSwapPage"),GET_FEATURE_FLAG:(0,n.w3)("GetFeatureFlag"),SET_TOKEN_SCANNER_ENABLED:(0,n.w3)("SetTokenScannerEnabled"),TRACK_ANALYTICS:(0,n.w3)("TrackAnalytics"),ANNOUNCEMENT_DISPLAYED:(0,n.If)("AnnouncementDisplayed"),FETCH_ANNOUNCEMENTS:(0,n.If)("FetchAnnouncements"),FETCH_USER_VIP_TIER_DATA:(0,n.If)("FetchUserVipTierData"),FETCH_FUNDING_METHODS:(0,n.If)("FetchFundingMethods"),ROUTE_CHANGED:(0,n.If)("RouteChanged")}}),12464:((m,g,o)=>{o.d(g,{L:()=>d});var n=o(20038),y=o(72519),u=o(93155);const i={approvalsPerWallet:{}};function c(s,p){const x={items:[],lastSync:null};s.approvalsPerWallet[p]||(s.approvalsPerWallet[p]=x)}const d=(0,n.Z0)({name:"approvals",initialState:i,reducers:{startWallet(s,p){c(s,p.payload.walletId)},setApprovalsLoading(s,p){c(s,p.payload.walletId),s.approvalsPerWallet[p.payload.walletId].loading=!0},updateApprovals(s,p){c(s,p.payload.walletId);const{approvals:x,walletId:v,nextToken:b,append:h}=p.payload,w=s.approvalsPerWallet[v].items.filter(r=>r.risk_analysis.level===y.b.PENDING),e=6e5,t=Date.now(),a=new Set;if(w.forEach(r=>{r.pendingTimestamp&&t-r.pendingTimestamp>e&&(a.add(`${r.chain}-${r.address}-${r.asset.id}-${r.spender.address}`),u.A.debug("[ApprovalsStore] Pending approval expired",{chain:r.chain,asset:r.asset.id,spender:r.spender.address}))}),u.A.debug("[ApprovalsStore] Updating approvals",{newCount:x.length,existingCount:s.approvalsPerWallet[v].items.length,pendingCount:w.length,expiredCount:a.size,append:h}),h)s.approvalsPerWallet[v].items=[...s.approvalsPerWallet[v].items,...x];else{const r=[...x];w.forEach(l=>{if(!x.some(_=>_.chain===l.chain&&_.address.toLowerCase()===l.address.toLowerCase()&&_.asset.id===l.asset.id&&_.spender.address.toLowerCase()===l.spender.address.toLowerCase()))u.A.debug("[ApprovalsStore] Approval revoked on-chain",{chain:l.chain,asset:l.asset.id,spender:l.spender.address});else{const _=`${l.chain}-${l.address}-${l.asset.id}-${l.spender.address}`;if(a.has(_))u.A.debug("[ApprovalsStore] Using backend data for expired approval");else{const k=r.findIndex(P=>P.chain===l.chain&&P.address.toLowerCase()===l.address.toLowerCase()&&P.asset.id===l.asset.id&&P.spender.address.toLowerCase()===l.spender.address.toLowerCase());k>=0&&(r[k]=l,u.A.debug("[ApprovalsStore] Preserving PENDING status"))}}}),s.approvalsPerWallet[v].items=r}s.approvalsPerWallet[v].lastSync=new Date().getTime(),s.approvalsPerWallet[v].nextToken=b,s.approvalsPerWallet[v].error=!1,s.approvalsPerWallet[v].loading=!1},setApprovalsError(s,p){c(s,p.payload.walletId),s.approvalsPerWallet[p.payload.walletId].error=!0,s.approvalsPerWallet[p.payload.walletId].loading=!1},clearApprovalsError(s,p){c(s,p.payload.walletId),s.approvalsPerWallet[p.payload.walletId].error=!1},clearApprovals(s,p){c(s,p.payload.walletId),s.approvalsPerWallet[p.payload.walletId].items=[],s.approvalsPerWallet[p.payload.walletId].lastSync=null,s.approvalsPerWallet[p.payload.walletId].nextToken=void 0},markApprovalAsPendingRevoke(s,p){c(s,p.payload.walletId);const{chain:x,address:v,assetId:b,spenderAddress:h,walletId:w,txHash:e}=p.payload,t=s.approvalsPerWallet[w].items.findIndex(a=>a.chain===x&&a.address.toLowerCase()===v.toLowerCase()&&a.asset.id===b&&a.spender.address.toLowerCase()===h.toLowerCase());t>=0?(s.approvalsPerWallet[w].items[t].risk_analysis.level=y.b.PENDING,s.approvalsPerWallet[w].items[t].pendingTxHash=e,s.approvalsPerWallet[w].items[t].pendingTimestamp=Date.now(),u.A.debug("[ApprovalsStore] Marked approval as PENDING")):u.A.warn("[ApprovalsStore] Approval not found",{chain:x,assetId:b,spenderAddress:h})},removeApproval(s,p){c(s,p.payload.walletId);const{chain:x,address:v,assetId:b,spenderAddress:h,walletId:w}=p.payload;s.approvalsPerWallet[w].items=s.approvalsPerWallet[w].items.filter(e=>!(e.chain===x&&e.address.toLowerCase()===v.toLowerCase()&&e.asset.id===b&&e.spender.address.toLowerCase()===h.toLowerCase()))}}})}),13123:((m,g,o)=>{var n=o(66644),y=o(81220),u=(c,d,s)=>new Promise((p,x)=>{var v=w=>{try{h(s.next(w))}catch(e){x(e)}},b=w=>{try{h(s.throw(w))}catch(e){x(e)}},h=w=>w.done?p(w.value):Promise.resolve(w.value).then(v,b);h((s=s.apply(c,d)).next())});class i extends y.X{constructor(d){super(),this.port=new n.X2(d),this.port.addEventListener("message",s=>{const p=s.method;!p||!this.listeners[p]||this.listeners[p].forEach(x=>x(s))})}listen(d){const s=p=>{d(p)};return this.port.addEventListener("message",s),()=>this.port.removeEventListener("message",s)}send(d){return u(this,null,function*(){yield this.port.postMessage(d)})}disconnect(){return u(this,null,function*(){yield this.port.close()})}}}),13787:((m,g,o)=>{m.exports=o.p+"850da36ebaa95f783ceb.otf"}),15314:((m,g,o)=>{o.d(g,{W:()=>n});var n=(y=>(y.LIGHT="light",y.DARK="dark",y))(n||{})}),17855:((m,g,o)=>{o.d(g,{y:()=>w});var n=o(20038),y=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))s.call(t,a)&&p(e,a,t[a]);return e},v=(e,t)=>u(e,i(t));const b=[],h=600*1e3,w=(0,n.Z0)({name:"notification",initialState:b,reducers:{updateNotification(e,t){const a=v(x({},t.payload),{expiresAt:new Date().getTime()+h}),r=a.id,l=e.findIndex(f=>f.id===r);l<0?e.push(a):e.splice(l,1,a)},removeNotification(e,t){const a=t.payload,r=e.findIndex(l=>l.id===a);r!==-1&&e.splice(r,1)},cleanAll(){return[]}}})}),20015:((m,g,o)=>{o.r(g),o.d(g,{default:()=>N});var n=o(74848),y=o(85072),u=o.n(y),i=o(97825),c=o.n(i),d=o(77659),s=o.n(d),p=o(55056),x=o.n(p),v=o(10540),b=o.n(v),h=o(41113),w=o.n(h),e=o(82293),t={};t.styleTagTransform=w(),t.setAttributes=x(),t.insert=s().bind(null,"head"),t.domAPI=c(),t.insertStyleElement=b();var a=u()(e.A,t);const r=e.A&&e.A.locals?e.A.locals:void 0;var l=o(5338),f=o(71468),_=o(68157),E=o(64145),k=o(96540);const P=()=>(0,n.jsxs)("div",{className:"loading-page-container",style:{display:"flex",flexDirection:"column",width:"100vw",height:"100vh",padding:"16px",boxSizing:"border-box"},children:[(0,n.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",flex:1},children:(0,n.jsx)("div",{className:"loading-spinner",style:{width:"64px",height:"64px",borderRadius:"50%",animation:"spin 1s linear infinite"}})}),(0,n.jsx)("style",{children:`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .loading-page-container {
            background-color: #FFFFFF;
          }
          
          .loading-spinner {
            border: 3px solid #2525253D;
            border-top: 3px solid #0500FF;
          }
          
          /* Dark mode styles */
          @media (prefers-color-scheme: dark) {
            .loading-page-container {
              background-color: #1B1B1C;
            }
            
            .loading-spinner {
              border-color: #EAECEF3D;
              border-top-color: #48FF91;
            }
          }
        `})]});var I=o(93155),A=(M,L,O)=>new Promise((W,D)=>{var B=R=>{try{C(O.next(R))}catch(z){D(z)}},U=R=>{try{C(O.throw(R))}catch(z){D(z)}},C=R=>R.done?W(R.value):Promise.resolve(R.value).then(B,U);C((O=O.apply(M,L)).next())});const S=(0,k.lazy)(()=>Promise.all([o.e(8100),o.e(4482)]).then(o.bind(o,94499)));function T(M){return A(this,null,function*(){yield(0,E.k$)(M);const L=yield(0,_.TB)(E.YW),O=document.getElementById("root"),W=(0,l.createRoot)(O);function D(B,U,C,R,z,K){I.A.debug({id:B,phase:U,actualDuration:C,baseDuration:R,startTime:z,commitTime:K})}W.render((0,n.jsx)(f.Kq,{store:L,children:(0,n.jsx)(k.Suspense,{fallback:(0,n.jsx)(k.Profiler,{id:"LoadingPage",onRender:D,children:(0,n.jsx)(P,{})}),children:(0,n.jsx)(k.Profiler,{id:"App",onRender:D,children:(0,n.jsx)(S,{})})})}))})}const N=T}),23230:((m,g,o)=>{m.exports=o.p+"5f36217efbb124e1f06e.otf"}),24439:((m,g,o)=>{o.d(g,{If:()=>i,w3:()=>c});var n=(p=>(p.INTERNAL="INTERNAL",p.PUBLIC="PUBLIC",p))(n||{});function y(p,x){return`${x}_${p}`}function u(p,x){return p.indexOf(x)===0}function i(p){return y(p,"INTERNAL")}function c(p){return y(p,"PUBLIC")}function d(p){return u(p,"INTERNAL")}function s(p){return u(p,"PUBLIC")}}),26113:((m,g,o)=>{o.d(g,{Z:()=>n,sP:()=>y,yy:()=>u});const n=()=>{},y=i=>{const c=window.open(i,"_blank","noopener nofollow noreferrer");c&&(c.opener=null)},u=i=>new Promise(c=>setTimeout(c,i))}),28398:((m,g,o)=>{o.d(g,{A:()=>w,l:()=>v});var n=o(37724),y=o(93155),u=o(20038),i=Object.defineProperty,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))s.call(t,a)&&p(e,a,t[a]);return e},v=(e=>(e.MAIN="MAIN",e.CUSTOM="CUSTOM",e))(v||{});const b=x(x(x({items:{},customItems:{},blockchainsLastSync:null,filterByBlockchain:null},n.KW),n.Ed),n.Mh);function h(e,t,a){var r;return!!((r={CUSTOM:e.customItems,MAIN:e.items}[a])!=null&&r[t])}const w=(0,u.Z0)({name:"blockchains",initialState:b,reducers:{updateBlockchains(e,t){t.payload.forEach(a=>{e.items[a.id]=a,delete e.customItems[a.id]})},setSelectedBlockchainIfNone(e,t){const{id:a,selectedBlockchainType:r}=t.payload;if(!e.selectedBlockchain){if(h(e,a,r)){e.selectedBlockchainType=t.payload.selectedBlockchainType,e.selectedBlockchain=t.payload.id;return}y.A.error(`Invalid blockchain for selected type ${a}:${r}`)}},setSelectedBlockchain(e,t){const{id:a,selectedBlockchainType:r}=t.payload;if(h(e,a,r)){e.selectedBlockchainType=t.payload.selectedBlockchainType,e.selectedBlockchain=t.payload.id;return}y.A.error(`Invalid blockchain for selected type ${a}:${r}`)},setFilteringBlockchain(e,t){e.filterByBlockchain=t.payload},addCustomBlockchain(e,t){e.customItems[t.payload.id]=t.payload},removeCustomBlockchain(e,t){delete e.customItems[t.payload]},touchBlockchains(e){e.blockchainsLastSync=new Date().getTime()}}})}),31335:((m,g,o)=>{o.d(g,{i:()=>s});var n=o(88407),y=o(98649),u=o(80577),i=o(26113),c=o(93155),d=o(6517);function s(p){return new Promise(x=>{(0,u.r)(p).then(v=>{v===y.k.READY?(x(p),(0,n.L)(p)):(p.portStream=new d.Dz(p.portName),p.statusProvider.emit(y.V.REPLACED,y.k.LOADING),(0,u.r)(p).then(b=>{b===y.k.READY?(p.statusProvider.emit(y.V.EVENT,y.k.READY),x(p),(0,n.L)(p)):x((0,i.yy)(p.RETRY_THRESHOLD).then(()=>s(p)))}).catch(c.A.error))}).catch(c.A.error)})}}),31357:((m,g,o)=>{o.d(g,{s:()=>a});var n=o(6517),y=o(20038),u=o(93726),i=o(94323),c=o(83397),d=Object.defineProperty,s=Object.defineProperties,p=Object.getOwnPropertyDescriptors,x=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,h=(r,l,f)=>l in r?d(r,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):r[l]=f,w=(r,l)=>{for(var f in l||(l={}))v.call(l,f)&&h(r,f,l[f]);if(x)for(var f of x(l))b.call(l,f)&&h(r,f,l[f]);return r},e=(r,l)=>s(r,p(l));const t={locale:(0,c.p)(),isDefaultWallet:!0,loadingTranslations:!1,developerSettings:{isCustomNonceEnabled:!1,isAdvancedGasControlsEnabled:!1,isAdvancedTransactionDataEnabled:!1,isEthSignEnabled:!1,isExportPrivateKeyEnabled:!1},pushNotifications:{isPushEnabled:!0,isSendAndReceiveEnabled:!0,topics:{product_announcement:!0}},privacy:{isAnalyticsEnabled:!0,hideBalancesOnDashboard:!1},ui:{colorMode:u.X.SYSTEM},translations:{},translationsLastFetch:{},preferSidePanel:!0,baseCurrency:"USD",passkeyId:null,isPasswordGenerated:!1},a=(0,y.Z0)({name:"settings",initialState:t,reducers:{setLanguage(r,l){r.locale=l.payload},setLoadingTranslations(r,l){r.loadingTranslations=l.payload},setIsCustomNonceEnabled(r,l){r.developerSettings.isCustomNonceEnabled=l.payload},setIsAdvancedGasControlsEnabled(r,l){r.developerSettings.isAdvancedGasControlsEnabled=l.payload},setIsAdvancedTransactionDataEnabled(r,l){r.developerSettings.isAdvancedTransactionDataEnabled=l.payload},setPushNotifications(r,l){r.pushNotifications.isPushEnabled=l.payload,r.pushNotifications.isSendAndReceiveEnabled=l.payload},setNotificationTopics(r,l){r.pushNotifications.topics=l.payload},setTranslations(r,l){r.translations[r.locale]=l.payload.messages},setTranslationsLastFetch(r,l){r.translationsLastFetch[l.payload.language]=l.payload.timestamp},setIsDefaultWallet(r,l){(0,n.M8)({method:i.A.DEFAULT_WALLET_CHANGED,data:{params:l.payload}}),r.isDefaultWallet=l.payload},setIsAnalyticsEnabled(r,l){r.privacy=e(w({},r.privacy),{isAnalyticsEnabled:l.payload})},setHideBalancesOnDashboard(r,l){r.privacy=e(w({},r.privacy),{hideBalancesOnDashboard:l.payload})},setUIColorMode(r,l){r.ui=e(w({},r.ui),{colorMode:l.payload})},toggleSidePanelPreference(r,l){r.preferSidePanel=l.payload},setBaseCurrency(r,l){r.baseCurrency=l.payload},setPasskeyId(r,l){r.passkeyId=l.payload},setIsExportPrivateKeyEnabled(r,l){r.developerSettings.isExportPrivateKeyEnabled=l.payload},setIsPasswordGenerated(r,l){r.isPasswordGenerated=l.payload}}})}),32887:((m,g,o)=>{var n=o(37007),y=o.n(n)}),35328:((m,g,o)=>{o.d(g,{b:()=>h});var n=o(20038),y=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(w,e,t)=>e in w?y(w,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):w[e]=t,x=(w,e)=>{for(var t in e||(e={}))d.call(e,t)&&p(w,t,e[t]);if(c)for(var t of c(e))s.call(e,t)&&p(w,t,e[t]);return w},v=(w,e)=>u(w,i(e));const b={selectedAddress:null,selectedPublicKey:null,connectedSites:[],blacklistedSites:[],dapps:{},connectedDapps:{}},h=(0,n.Z0)({name:"dapps",initialState:b,reducers:{addDapp(w,e){const t=e.payload,{origin:a}=t;return Object.values(w.dapps).find(l=>l.origin===a)||(w.dapps[t.id]=t),w},addConnectedDapp(w,e){const{id:t,chainId:a,networkId:r,accountId:l,address:f,walletId:_}=e.payload;return w.connectedDapps[t]||(w.connectedDapps[t]=[]),w.connectedDapps[t].find(k=>k.accountId===l&&k.address===f)||w.connectedDapps[t].push({id:t,date:new Date().getTime(),chainId:a,networkId:r,address:f,accountId:l,walletId:_}),w},disconnectDapp(w,e){const{id:t,accountId:a}=e.payload,r=w.connectedDapps[t];if(!r)return w;const l=r.filter(f=>f.accountId!==a);return w.connectedDapps[t]=l,l.length===0&&delete w.connectedDapps[t],w},addBlacklistedSite(w,e){const t=v(x({},e.payload),{id:(0,n.Ak)(),date:new Date().getTime()});return w.blacklistedSites=[...w.blacklistedSites,t],w},removeBlacklistedSite(w,e){return w.blacklistedSites=w.blacklistedSites.filter(t=>t.id!==e.payload),w}}})}),35798:((m,g,o)=>{o.d(g,{M:()=>u});var n=o(90658),y=(c,d,s)=>new Promise((p,x)=>{var v=w=>{try{h(s.next(w))}catch(e){x(e)}},b=w=>{try{h(s.throw(w))}catch(e){x(e)}},h=w=>w.done?p(w.value):Promise.resolve(w.value).then(v,b);h((s=s.apply(c,d)).next())});const u=c=>y(null,null,function*(){var d;const s=(d=yield n.A.tabs.query({}))!=null?d:[];yield Promise.all(s.filter(p=>!!p?.id).map(p=>n.A.tabs.sendMessage(p.id,c).catch(x=>{var v;(v=n.A.runtime.lastError)==null||v.message})))});function i(c,d){return y(this,null,function*(){var s;try{return yield browser.tabs.sendMessage(c,d)}catch{(s=browser.runtime.lastError)==null||s.message}})}}),37724:((m,g,o)=>{o.d(g,{Ed:()=>y,KW:()=>i,Mh:()=>u});var n=o(47236);const y={selectedBlockchainOnSolana:"solana",selectedBlockchainTypeOnSolana:n.l.MAIN,validatorsLastSync:0},u={selectedBlockchainOnBinance:"binance",selectedBlockchainTypeOnBinance:n.l.MAIN},i={selectedBlockchain:"",selectedBlockchainType:n.l.MAIN}}),38208:((m,g,o)=>{o.d(g,{w:()=>n});const n=["ar","bg-BG","my-MM","zh-CN","zh-TC","cs-CZ","da-DK","en","fr","de","el-GR","id","it","ja","kk-KZ","ko","lv-LV","lo-LA","pl-PL","pt","pt-BR","ro-RO","ru","si-LK","es-ES","es-LA","sv-SE","tr","uk-UA","vi"]}),39094:((m,g,o)=>{m.exports=o.p+"f0be7d273c3543fe4c4a.ttf"}),42836:((m,g,o)=>{o.d(g,{Z:()=>u});var n=o(20038);const y={rates:{},items:[]},u=(0,n.Z0)({name:"fiat",initialState:y,reducers:{updateFiats(i,c){for(const d of c.payload){const s=i.items.findIndex(p=>p.id===d.id);s<0?i.items.push(d):i.items.splice(s,1,d)}}}})}),44872:((m,g,o)=>{m.exports=o.p+"e87a6b531eb2210f7d44.ttf"}),45668:((m,g,o)=>{o.d(g,{k:()=>n});function n(y,u){return y==="mnemonic"&&(y="Seed Phrase"),`${y.charAt(0).toUpperCase()+y.slice(1)} ${u.reduce((i,c)=>c.type===y?++i:i,1)}`}}),47236:((m,g,o)=>{o.d(g,{l:()=>n});var n=(y=>(y.MAIN="MAIN",y.CUSTOM="CUSTOM",y))(n||{})}),48275:((m,g,o)=>{o.d(g,{P:()=>p});var n=o(98939),y=o(11711),u=o(93155),i=(x,v,b)=>new Promise((h,w)=>{var e=r=>{try{a(b.next(r))}catch(l){w(l)}},t=r=>{try{a(b.throw(r))}catch(l){w(l)}},a=r=>r.done?h(r.value):Promise.resolve(r.value).then(e,t);a((b=b.apply(x,v)).next())});let c=0,d=new Map,s=d;class p{constructor(v){this.dispatch=b=>(u.A.getLogger(p.name).debug(`Dispatching action ${JSON.stringify(b)}`),this.transport.emit(y.A.DISPATCH_REDUX_ACTION,b).catch(u.A.error),b),this.ensureCanMutateNextListeners=()=>{s===d&&(s=new Map,d.forEach((b,h)=>{s.set(h,b)}))},this.getState=()=>this.state,this.subscribe=b=>{this.ensureCanMutateNextListeners();const h=c++;s.set(h,b);let w=!0;return()=>{w&&(w=!1,this.ensureCanMutateNextListeners(),s.delete(h),d=null)}},this.replaceReducer=b=>{throw new Error("Method not implemented.")},this.setTransport(v)}setTransport(v){this.transport=v,this.transport.listen(b=>{b.method===n.TF&&(this.state=b.data,(d=s).forEach(w=>{w()}))})}boot(){return i(this,null,function*(){try{const v=yield this.transport.emit(y.A.GET_REDUX_STATE);this.state=v}catch(v){return u.A.error(v)}})}[Symbol.observable](){throw new Error("Method not implemented.")}}}),48305:((m,g,o)=>{o.d(g,{u:()=>t});var n=o(20038),y=o(98939),u=o(45668),i=o(93155),c=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(a,r,l)=>r in a?c(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,h=(a,r)=>{for(var l in r||(r={}))x.call(r,l)&&b(a,l,r[l]);if(p)for(var l of p(r))v.call(r,l)&&b(a,l,r[l]);return a},w=(a,r)=>d(a,s(r));const e={walletId:null,wallets:{},accounts:{},accountsPerWallet:{},balancesPerWallet:{},balancesPerWalletAccount:{},switching:!1,refreshLastRun:null,refreshingBalance:!1,addressBook:{},selectedAccountId:""},t=(0,n.Z0)({name:"wallet",initialState:e,reducers:{setSwitching(a,r){a.switching=r.payload},changeWalletName(a,r){a.wallets[r.payload.id].name=r.payload.name},setWalletId(a,r){a.walletId=r.payload.walletId,a.selectedAccountId=r.payload.accountId},addToBalancesArray(a,r){a.balancesPerWalletAccount[r.payload.id]={},a.balancesPerWalletAccount[r.payload.id][a.selectedAccountId]=a.balancesPerWalletAccount[r.payload.id][a.selectedAccountId]||{}},addWallet(a,r){if(Object.keys(a.wallets).length>=y.Dv){i.A.error("Maximum wallets amount reached");return}a.wallets[r.payload.id]={balance:"0",id:r.payload.id,registered:!1,type:r.payload.type,name:r.payload.name||(0,u.k)(r.payload.type,Object.values(a.wallets)),isImported:r.payload.isImported},a.balancesPerWalletAccount[r.payload.id]={},a.balancesPerWalletAccount[r.payload.id][r.payload.accountId]={},a.accountsPerWallet[r.payload.id]={},a.accountsPerWallet[r.payload.id][r.payload.accountId]={}},removeWallet(a,r){delete a.wallets[r.payload],delete a.accountsPerWallet[r.payload],a.walletId=Object.keys(a.wallets)[0],a.walletId&&(a.selectedAccountId=Object.keys(a.accountsPerWallet[a.walletId])[0]),Object.keys(a.accountsPerWallet).forEach(l=>{l===r.payload&&delete a.accountsPerWallet[l]})},setWalletAsRegistered(a,r){a.accountsPerWallet[r.payload.walletId][r.payload.accountId]=w(h({},a.accountsPerWallet[r.payload.walletId][r.payload.accountId]),{registered:!0})},setWalletCoinsAsRegistered(a,r){a.accountsPerWallet[r.payload.walletId][r.payload.accountId]=w(h({},a.accountsPerWallet[r.payload.walletId][r.payload.accountId]),{coinsRegistered:!0})},setCoinsAsRegistered(a,r){const l=a.accountsPerWallet[r.payload.walletId][r.payload.accountId].coinsRegisteredMap||{};Object.keys(r.payload.records).forEach(f=>{l[f]=r.payload.records[f]}),a.accountsPerWallet[r.payload.walletId][r.payload.accountId].coinsRegisteredMap=l},removeAccount(a,r){const{walletId:l,accountId:f}=r.payload;if(!Object.values(a.accountsPerWallet[l]).find(k=>k.id===f)){i.A.error(`Account with id ${f} not found in wallet ${l}`);return}return a.accountsPerWallet[l]&&delete a.accountsPerWallet[l][f],a.balancesPerWalletAccount[l]&&delete a.balancesPerWalletAccount[l][f],a},addAccounts(a,r){a.accountsPerWallet[r.payload.walletId][r.payload.accountId]=a.accountsPerWallet[r.payload.walletId][r.payload.accountId]||{},a.accountsPerWallet[r.payload.walletId][r.payload.accountId]={id:r.payload.accountId,items:r.payload.accounts,derivationIndex:r.payload.derivationIndex,name:r.payload.name,registered:!1},a.balancesPerWalletAccount[r.payload.walletId]||(a.balancesPerWalletAccount[r.payload.walletId]={}),a.balancesPerWalletAccount[r.payload.walletId][r.payload.accountId]||(a.balancesPerWalletAccount[r.payload.walletId][r.payload.accountId]={})},pushAccounts(a,r){a.accountsPerWallet[r.payload.walletId]||(a.accountsPerWallet[r.payload.walletId]={}),a.accountsPerWallet[r.payload.walletId][r.payload.accountId]||(a.accountsPerWallet[r.payload.walletId][r.payload.accountId]={}),a.accountsPerWallet[r.payload.walletId][r.payload.accountId].items=h(h({},a.accountsPerWallet[r.payload.walletId][r.payload.accountId].items),r.payload.accounts)},setRefreshingBalance(a,r){a.refreshingBalance=r.payload},setSeedPhraseBackupRequired(a,r){a.wallets[r.payload.walletId].seedPhraseBackupRequired=r.payload.backupRequired},setBalances(a,r){r.payload.balances.forEach(l=>{const{balance:f,staked:_,rewards:E,pending:k,frozen:P,locked:I,blocked:A,claimable:S,transferable:T,inscription:N,coinId:M,address:L,dust:O,blockchainId:W,assetId:D,bandwidth:B,energy:U,reserved:C}=l;a.balancesPerWalletAccount[r.payload.walletId]||(a.balancesPerWalletAccount[r.payload.walletId]={}),a.balancesPerWalletAccount[r.payload.walletId][r.payload.accountId]||(a.balancesPerWalletAccount[r.payload.walletId][r.payload.accountId]={}),a.balancesPerWalletAccount[r.payload.walletId][r.payload.accountId][D]={balance:f,staked:_,rewards:E,pending:k,frozen:P,locked:I,blocked:A,claimable:S,transferable:T,inscription:N,dust:O,coinId:M,address:L,blockchainId:W,bandwidth:B,energy:U,reserved:C}})},updateRefreshLastRun(a,r){a.refreshLastRun=r.payload},updateAssetsLastRun(a,r){a.wallets[r.payload.walletId].assetsLastRun=r.payload.timestamp},addAddressBookWallet(a,r){a.addressBook[r.payload.id]=r.payload},setAddressBookWallet(a,r){a.addressBook[r.payload.id]=r.payload},removeAddressBookWallet(a,r){const l=h({},a.addressBook);delete l[r.payload],a.addressBook=l},removeAddressBookWalletAddress(a,r){const l=h({},a.addressBook);delete l[r.payload.walletId].addresses[r.payload.coinId],a.addressBook[r.payload.walletId]=l[r.payload.walletId]},updateAccountName(a,r){a.accountsPerWallet[r.payload.walletId][r.payload.accountId].name=r.payload.name}}})}),52598:((m,g,o)=>{m.exports=o.p+"c51b145d8cf66a74cc74.ttf"}),52781:((m,g,o)=>{m.exports=o.p+"8583bd6fce14da34ea43.ttf"}),52856:((m,g,o)=>{o.d(g,{B:()=>e});var n=o(93155),y=o(20038),u=o(15192),i=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,v=(t,a,r)=>a in t?i(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,b=(t,a)=>{for(var r in a||(a={}))p.call(a,r)&&v(t,r,a[r]);if(s)for(var r of s(a))x.call(a,r)&&v(t,r,a[r]);return t},h=(t,a)=>c(t,d(a));const w={gasFees:{baseFeeTrend:"",estimatedBaseFee:"",high:{suggestedMaxPriorityFeePerGas:"",suggestedMaxFeePerGas:"",minWaitTimeEstimate:0,maxWaitTimeEstimate:0},historicalBaseFeeRange:[],historicalPriorityFeeRange:[],latestPriorityFeeRange:[],low:{suggestedMaxPriorityFeePerGas:"",suggestedMaxFeePerGas:"",minWaitTimeEstimate:0,maxWaitTimeEstimate:0},medium:{suggestedMaxPriorityFeePerGas:"",suggestedMaxFeePerGas:"",minWaitTimeEstimate:0,maxWaitTimeEstimate:0},networkCongestion:0,priorityFeeTrend:""},itemsPerWallet:{},fetchedAllChainsTransactionPeriods:{},itemsPerWalletAccount:{},fetchedTransactionPeriodsByAccount:{},fetchedAllChainsTransactionPeriodsByAccount:{}},e=(0,y.Z0)({name:"tx",initialState:w,reducers:{startWallet(t,a){t.itemsPerWalletAccount[a.payload.walletId]={},t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=[]},updateTransactionStatus(t,a){const{id:r,status:l,fee:f,walletId:_,hash:E,accountId:k}=a.payload;t.itemsPerWalletAccount[_]||(t.itemsPerWalletAccount[_]={}),t.itemsPerWalletAccount[_][k]||(t.itemsPerWalletAccount[_][k]=[]);const P=t.itemsPerWalletAccount[_][k],I=P.findIndex(A=>A.hash===r);I>=0?P[I]=h(b({},P[I]),{status:l,fee:(0,u.z)(f[0]).gt(0)?f:P[I].fee,initialFee:P[I].fee,hash:E||P[I].hash,initialHash:P[I].initialHash}):n.A.warn(`Trying to update transaction out of range ${r}`),t.itemsPerWalletAccount[_][k]=P},updateTx(t,a){var r,l;const f=a.payload.item;t.itemsPerWalletAccount[a.payload.walletId]||(t.itemsPerWalletAccount[a.payload.walletId]={}),t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]||(t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=[]);const _=(l=(r=t.itemsPerWalletAccount[a.payload.walletId])==null?void 0:r[a.payload.accountId])!=null?l:[],E=_.findIndex(k=>k.hash===f.hash);E<0?_.push(f):_[E]=h(b({},f),{nft:_[E].nft}),t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=_},removeAccountTransactions(t,a){t.itemsPerWalletAccount[a.payload.walletId]&&delete t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId],t.fetchedTransactionPeriodsByAccount[a.payload.walletId]&&delete t.fetchedTransactionPeriodsByAccount[a.payload.walletId][a.payload.accountId],t.fetchedAllChainsTransactionPeriodsByAccount[a.payload.walletId]&&delete t.fetchedAllChainsTransactionPeriodsByAccount[a.payload.walletId][a.payload.accountId]},updateTxs(t,a){var r,l;t.itemsPerWalletAccount[a.payload.walletId]||(t.itemsPerWalletAccount[a.payload.walletId]={}),t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]||(t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=[]);const f=(l=(r=t.itemsPerWalletAccount[a.payload.walletId])==null?void 0:r[a.payload.accountId])!=null?l:[];a.payload.items.forEach(_=>{const E=f.findIndex(k=>k.hash===_.hash);if(E<0)f.push(_);else{const k=f[E].events.map((P,I)=>{const A=_.events[I];return h(b({},A),{metadata:b(b({},P.metadata),A.metadata)})});f[E]=h(b({},_),{nft:f[E].nft,events:k})}}),t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=f},updateGasFees(t,a){t.gasFees=a.payload},updateCachedTransactionsPeriod(t,a){const{selectedWalletId:r,assetId:l,from:f,to:_,nextToken:E,accountId:k}=a.payload;t.fetchedTransactionPeriodsByAccount[r]||(t.fetchedTransactionPeriodsByAccount[r]={}),t.fetchedTransactionPeriodsByAccount[r][k]||(t.fetchedTransactionPeriodsByAccount[r][k]={}),t.fetchedTransactionPeriodsByAccount[r][k][l]={from:f,to:_,nextToken:E}},updateAllChainsCachedTransactionsPeriod(t,a){const{selectedWalletId:r,blockchains:l,from:f,to:_,nextToken:E,accountId:k}=a.payload;t.fetchedAllChainsTransactionPeriodsByAccount[r]||(t.fetchedAllChainsTransactionPeriodsByAccount[r]={}),t.fetchedAllChainsTransactionPeriodsByAccount[r][k]={from:f,to:_,blockchains:l,nextToken:E}},removeTxsForNetwork(t,a){var r,l;t.itemsPerWalletAccount[a.payload.walletId]||(t.itemsPerWalletAccount[a.payload.walletId]={}),t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]||(t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=[]);const f=(l=(r=t.itemsPerWalletAccount[a.payload.walletId])==null?void 0:r[a.payload.accountId])!=null?l:[];t.itemsPerWalletAccount[a.payload.walletId][a.payload.accountId]=f.filter(_=>_.blockchain.id!==a.payload.blockchainId)}}})}),56120:((m,g,o)=>{o.d(g,{g:()=>n});var n=(y=>(y.STAGING="staging",y.PRODUCTION="production",y))(n||{})}),58464:((m,g,o)=>{o.d(g,{H:()=>w});var n=o(20038),y=Object.defineProperty,u=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(c)for(var a of c(t))s.call(t,a)&&p(e,a,t[a]);return e},v=(e,t)=>u(e,i(t));const b={assetsLastSync:null,assetsPerWallet:{},assetsWithBalanceAlreadyEnabled:{},assetsToBeMigrated:{items:[],lastSync:null},cexFundingAssets:{},marketSentimentSupportedCrypto:[]};function h(e,t){const a={itemsV2:[],testItems:[],assetsLastSync:null};e.assetsPerWallet[t]||(e.assetsPerWallet[t]=a)}const w=(0,n.Z0)({name:"asset",initialState:b,reducers:{startWallet(e,t){h(e,t.payload.walletId)},updateAssetsV2(e,t){h(e,t.payload.walletId);const a=e.assetsPerWallet[t.payload.walletId].itemsV2;for(const r of t.payload.assets){const l=a.findIndex(_=>_.blockchainId===r.blockchainId&&_.address===r.address),f=v(x({},r),{name:r.name==="Binance"?"BNB Chain":r.name});l<0?a.push(f):a.splice(l,1,f)}},updateMigratableAssets(e,t){e.assetsToBeMigrated.items=t.payload,e.assetsToBeMigrated.lastSync=new Date().getTime()},removeAssetsForBlockchain(e,t){h(e,t.payload.walletId);for(const a of Object.keys(e.assetsPerWallet))e.assetsPerWallet[a].itemsV2=e.assetsPerWallet[a].itemsV2.filter(r=>r.blockchainId!==t.payload.blockchainId)},setIsShownInHomeScreen(e,t){h(e,t.payload.walletId);const a=e.assetsPerWallet[t.payload.walletId].itemsV2.findIndex(r=>r.assetId===t.payload.item.assetId);a>=0?e.assetsPerWallet[t.payload.walletId].itemsV2.splice(a,1,v(x({},e.assetsPerWallet[t.payload.walletId].itemsV2[a]),{isShownInHomeScreen:!e.assetsPerWallet[t.payload.walletId].itemsV2[a].isShownInHomeScreen})):e.assetsPerWallet[t.payload.walletId].itemsV2.push(v(x({},t.payload.item),{isShownInHomeScreen:!0}))},setIsShownInHomeScreenBulk(e,t){h(e,t.payload.walletId),t.payload.items.forEach(a=>w.caseReducers.setIsShownInHomeScreen(e,{payload:{item:a,walletId:t.payload.walletId},type:t.type}))},touchAssets(e){e.assetsLastSync=new Date().getTime()},setAssetsWithBalanceAlreadyEnabled(e,t){e.assetsWithBalanceAlreadyEnabled[t.payload.currentWalletId]=t.payload.assetsEnabled},setMarketSentimentSupportedCrypto(e,t){e.marketSentimentSupportedCrypto=t.payload},setIsAssetRegistered(e,t){const a=e.assetsPerWallet[t.payload.walletId].itemsV2.findIndex(r=>r.assetId===t.payload.assetId);a>=0&&(e.assetsPerWallet[t.payload.walletId].itemsV2[a].isRegistered=t.payload.isRegistered)},setCexFundingAssets(e,t){e.cexFundingAssets[t.payload.providerId]=t.payload.assets}}})}),60469:((m,g,o)=>{m.exports=o.p+"86c330c66f7333ff6202.ttf"}),61855:((m,g,o)=>{o.d(g,{A:()=>w});var n=o(15314),y=o(20038),u=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,x=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&x(e,a,t[a]);if(d)for(var a of d(t))p.call(t,a)&&x(e,a,t[a]);return e},b=(e,t)=>i(e,c(t));const h={deviceId:null,hashKey:null,firstTime:!0,authenticated:!1,walletNewlyImported:!1,showEmptyWalletImportedModal:!1,lockTimeInMinutes:10,storageVersion:"",migrated:!1,newAuthMigrated:!0,warningDisplayed:!1,warningDisplayedSent:!1,iconTheme:n.W.LIGHT,icon:"",authenticating:!1,legacyDeviceId:null,authIdentifier:"",newFlag:{EARN:!1},featureFlags:null,toasts:[],sidePanelOpened:!1,countryCode:"",oneTap:{dismissCount:0,lastTimeClosed:0,isOneTapDisabled:!1},analyticsQueue:[],lastTimeClosedWalletModal:0,preventAutoTriggerBiometrics:!1,navigationOrigin:void 0,homeScreenAssetsExpanded:!0,tokenScannerEnabled:!0,approvalsExpanded:!1},w=(0,y.Z0)({name:"app",initialState:h,reducers:{setDeviceId(e,t){e.deviceId=t.payload},setHashKey(e,t){e.hashKey=t.payload},setAuthenticated(e,t){e.authenticated=t.payload},setIconTheme(e,t){e.iconTheme=t.payload},setIcon(e,t){e.icon=t.payload},setMigrationStatus(e,t){e.migrated=t.payload},setNewAuthMigrated(e,t){e.newAuthMigrated=t.payload},setFirstTime(e,t){e.firstTime=t.payload},setWarningDisplayed(e,t){e.warningDisplayed=t.payload},setWarningDisplayedSent(e,t){e.warningDisplayedSent=t.payload},setShowEmptyWalletImportedModal(e,t){e.showEmptyWalletImportedModal=t.payload},setStorageVersion(e,t){e.storageVersion=t.payload},setIdentityId(e,t){e.identityId=t.payload},setAuthenticating(e,t){e.authenticating=t.payload},setNewsFlagOff(e,t){e.newFlag=b(v({},e.newFlag),{[t.payload]:!0})},setFeatureFlags(e,t){e.featureFlags=t.payload},setTokenScannerEnabled(e,t){e.tokenScannerEnabled=t.payload},setLegacyDeviceId(e,t){e.legacyDeviceId=t.payload},setAuthIdentifier(e,t){e.authIdentifier=t.payload},setSidePanelOpened(e,t){e.sidePanelOpened=t.payload},setCountryCode(e,t){e.countryCode=t.payload},closeOneTap(e){e.oneTap||(e.oneTap={}),e.oneTap.dismissCount=e.oneTap.dismissCount?e.oneTap.dismissCount+1:1,e.oneTap.lastTimeClosed=new Date().getTime()},useOneTap(e){e.oneTap||(e.oneTap={}),e.oneTap.dismissCount=0,e.oneTap.lastTimeClosed=0},toggleOneTapSetting(e,t){e.oneTap||(e.oneTap={}),e.oneTap.isOneTapDisabled=t.payload,t.payload&&(e.oneTap.dismissCount=0,e.oneTap.lastTimeClosed=0)},addAnalyticsEvent(e,t){e.analyticsQueue||(e.analyticsQueue=[]),e.analyticsQueue.push(b(v({},t.payload.event),{id:t.payload.id}))},clearAnalyticEvent(e,t){e.analyticsQueue=(e.analyticsQueue||[]).filter(a=>!t.payload.includes(a.id))},addToast(e,t){e.toasts.push(t.payload)},removeToast(e,t){e.toasts=e.toasts.filter(a=>a.id!==t.payload.id)},setWalletNewlyImported(e,t){e.walletNewlyImported=t.payload},setLastTimeClosedWalletModal(e,t){e.lastTimeClosedWalletModal=t.payload},setPreventAutoTriggerBiometrics(e,t){e.preventAutoTriggerBiometrics=t.payload},setNavigationOrigin(e,t){e.navigationOrigin=t.payload},clearNavigationOrigin(e){e.navigationOrigin=void 0},setHomeScreenAssetsExpanded(e,t){e.homeScreenAssetsExpanded=t.payload},setApprovalsExpanded(e,t){e.approvalsExpanded=t.payload}}})}),64001:((m,g,o)=>{o.d(g,{m:()=>u});var n=o(20038);const y={validators:{},delegations:{},stakingList:[],validatorsLastSync:{}},u=(0,n.Z0)({name:"staking",initialState:y,reducers:{updateValidators(i,c){i.validators[c.payload.blockchain]=c.payload.validators},updateDelegations(i,c){i.delegations[c.payload.walletId]||(i.delegations[c.payload.walletId]={}),i.delegations[c.payload.walletId][c.payload.blockchain]=c.payload.delegations},updateStakingList(i,c){i.stakingList=c.payload},touchValidators(i,c){i.validatorsLastSync[c.payload]=new Date().getTime()}}})}),64145:((m,g,o)=>{o.d(g,{Qq:()=>d,W0:()=>s,YW:()=>p,b4:()=>n.b4,k$:()=>x});var n=o(6517),y=o(98939),u=o(31335),i=o(98649),c=(v,b,h)=>new Promise((w,e)=>{var t=l=>{try{r(h.next(l))}catch(f){e(f)}},a=l=>{try{r(h.throw(l))}catch(f){e(f)}},r=l=>l.done?w(l.value):Promise.resolve(l.value).then(t,a);r((h=h.apply(v,b)).next())});const d=new i.V,s={portName:y.xo,checking:!1,missCount:0,THRESHOLD:5e3,FIRST_TIME_WAIT:200,RETRY_THRESHOLD:400,MAX_MISS_RECONNECT:15,statusProvider:d},p=new Proxy({},{get(v,b,h){return Reflect.get(s.portStream,b,h)}});function x(v){return c(this,null,function*(){v&&Object.assign(s,v),yield(0,u.i)(s)})}}),67982:((m,g,o)=>{m.exports=o.p+"a17b9c1448ef44367a5f.ttf"}),68157:((m,g,o)=>{o.d(g,{GV:()=>h,M_:()=>e,TB:()=>r,jL:()=>b});var n=o(93155),y=o(79448),u=o.n(y),i=o(62311),c=o(48275),d=o(94566),s=o(71468),p=(l,f,_)=>new Promise((E,k)=>{var P=S=>{try{A(_.next(S))}catch(T){k(T)}},I=S=>{try{A(_.throw(S))}catch(T){k(T)}},A=S=>S.done?E(S.value):Promise.resolve(S.value).then(P,I);A((_=_.apply(l,f)).next())});const x="trust:store",v=[u()],b=s.wA.withTypes(),h=s.d4.withTypes(),w=s.Pj.withTypes();let e={};const t=l=>configureStore({reducer:reducers,middleware:f=>f().concat(v),preloadedState:l}),a=()=>p(null,null,function*(){logger.debug("Init background store for Redux");const l={storageKey:x,isolated:!0};return e=yield setupReduxed(t,l)(),logger.debug("Background store loaded"),e});function r(l){return p(this,null,function*(){const f=new c.P(l);return yield f.boot(),e=f,e})}}),72519:((m,g,o)=>{o.d(g,{b:()=>n});var n=(y=>(y.LOW_RISK="LOW_RISK",y.MEDIUM_RISK="MEDIUM_RISK",y.HIGH_RISK="HIGH_RISK",y.PENDING="PENDING",y))(n||{})}),75576:((m,g,o)=>{m.exports=o.p+"d52a01d17b566af4e096.ttf"}),77318:((m,g,o)=>{m.exports=o.p+"ad33b33b93e135d216bd.otf"}),80577:((m,g,o)=>{o.d(g,{r:()=>i});var n=o(11711),y=o(98649),u=o(26113);function i(c){if(!c.portStream)return Promise.resolve(y.k.IDLE);const d=()=>(0,u.yy)(c.FIRST_TIME_WAIT).then(()=>y.k.IDLE);return Promise.race([c.portStream.emit(n.A.PING),d()])}}),81220:((m,g,o)=>{o.d(g,{X:()=>i});var n=o(44329),y=(c,d,s)=>new Promise((p,x)=>{var v=w=>{try{h(s.next(w))}catch(e){x(e)}},b=w=>{try{h(s.throw(w))}catch(e){x(e)}},h=w=>w.done?p(w.value):Promise.resolve(w.value).then(v,b);h((s=s.apply(c,d)).next())});const u=c=>`${c}_${(0,n.Ak)()}_callback`;class i{constructor(){this.listeners={}}addListener(d,s){const p=this.listeners[d]||[];p.push(s),this.listeners[d]=p}once(d,s){this.addListener(d,p=>(delete this.listeners[d],s(p)))}emit(d,s){return new Promise((p,x)=>{const v=u(d);this.once(v,b=>y(this,null,function*(){var h;if(!((h=b.data)!=null&&h.error)){p(b.data.params);return}x(b.data.error)})),this.send({method:d,data:{cbMethod:v,params:s}})})}disconnect(){}}}),81481:((m,g,o)=>{o.d(g,{K:()=>u});var n=o(20038);const y={version:0,postBootVersion:0},u=(0,n.Z0)({name:"migrations",initialState:y,reducers:{}})}),82293:((m,g,o)=>{o.d(g,{A:()=>C});var n=o(31601),y=o.n(n),u=o(76314),i=o.n(u),c=o(4417),d=o.n(c),s=new URL(o(52781),o.b),p=new URL(o(60469),o.b),x=new URL(o(52598),o.b),v=new URL(o(75576),o.b),b=new URL(o(39094),o.b),h=new URL(o(77318),o.b),w=new URL(o(23230),o.b),e=new URL(o(84989),o.b),t=new URL(o(13787),o.b),a=new URL(o(3725),o.b),r=new URL(o(67982),o.b),l=new URL(o(94023),o.b),f=new URL(o(4431),o.b),_=new URL(o(44872),o.b),E=i()(y()),k=d()(s),P=d()(p),I=d()(x),A=d()(v),S=d()(b),T=d()(h),N=d()(w),M=d()(e),L=d()(t),O=d()(a),W=d()(r),D=d()(l),B=d()(f),U=d()(_);E.push([m.id,`/*
! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}

* {
  scrollbar-color: initial;
  scrollbar-width: initial;
}
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin: 0px;
    overflow: hidden;
    --tw-bg-opacity: 1;
    background-color: hsl(var(--twc-backgroundPrimary) / 1);
    background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));
    padding: 0px;
    font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --tw-text-opacity: 1;
    color: hsl(var(--twc-textPrimary) / 1);
    color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));
  }

  #root {
  display: flex;
  min-height: 100vh;
  width: 100vw;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: stretch;
  overflow: hidden;
}

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @keyframes ripple-effect {
    0% {
      box-shadow: 0 0 0 0px rgba(71, 225, 141, 0.7);
      background: rgba(71, 225, 141, 0.7);
    }
    80% {
      background: rgba(66, 166, 223, 0);
    }
    100% {
      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);
    }
  }

  @keyframes ripple-effect-gray {
    0% {
      box-shadow: 0 0 0 0px rgba(115, 115, 115, 0.7);
      background: rgba(115, 115, 115, 0.7);
    }
    80% {
      background: rgba(66, 166, 223, 0);
    }
    100% {
      box-shadow: 0 0 0 8px rgba(66, 166, 223, 0);
    }
  }

  @keyframes pulse-effect {
    0% {
      transform: scale(1);
    }
    3.3% {
      transform: scale(1.1);
    }
    16.5% {
      transform: scale(1);
    }
    33% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .rippleCircle {
    animation: pulse-effect 2s ease-out infinite;
  }

  .ripple {
    position: absolute;
    top: 0;
    left: 0;
    border: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    animation: ripple-effect 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  .ripple-gray {
    animation: ripple-effect-gray 2s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
  }

  .ripple:nth-child(2) {
    animation-delay: 0.33s;
    animation-duration: 2.2s;
  }

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgba(59, 130, 246, 0.5);
  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);
  --tw-ring-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow: 0 0 rgba(0,0,0,0);
  --tw-shadow-colored: 0 0 rgba(0,0,0,0);
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}
:root {
  --rt-color-white: #fff;
  --rt-color-dark: #222;
  --rt-color-success: #8dc572;
  --rt-color-error: #be6464;
  --rt-color-warning: #f0ad4e;
  --rt-color-info: #337ab7;
  --rt-opacity: 0.9;
  --rt-transition-show-delay: 0.15s;
  --rt-transition-closing-delay: 0.15s;
}
.core-styles-module_tooltip__3vRRp {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 0;
  will-change: opacity;
}
.core-styles-module_fixed__pcSol {
  position: fixed;
}
.core-styles-module_arrow__cvMwQ {
  position: absolute;
  background: inherit;
}
.core-styles-module_noArrow__xock6 {
  display: none;
}
.core-styles-module_clickable__ZuTTB {
  pointer-events: auto;
}
.core-styles-module_show__Nt9eE {
  opacity: 0.9;
  opacity: var(--rt-opacity);
  transition: opacity 0.15s ease-out;
  transition: opacity var(--rt-transition-show-delay) ease-out;
}
.core-styles-module_closing__sGnxF {
  opacity: 0;
  transition: opacity 0.15s ease-in;
  transition: opacity var(--rt-transition-closing-delay) ease-in;
}
/** end - core styles **/
.styles-module_tooltip__mnnfp {
  padding: 8px 16px;
  border-radius: 3px;
  font-size: 90%;
  width: -moz-max-content;
  width: max-content;
}
.styles-module_arrow__K0L3T {
  width: 8px;
  height: 8px;
}
[class*='react-tooltip__place-top'] > .styles-module_arrow__K0L3T {
  transform: rotate(45deg);
}
[class*='react-tooltip__place-right'] > .styles-module_arrow__K0L3T {
  transform: rotate(135deg);
}
[class*='react-tooltip__place-bottom'] > .styles-module_arrow__K0L3T {
  transform: rotate(225deg);
}
[class*='react-tooltip__place-left'] > .styles-module_arrow__K0L3T {
  transform: rotate(315deg);
}
/** Types variant **/
.styles-module_dark__xNqje {
  background: #222;
  background: var(--rt-color-dark);
  color: #fff;
  color: var(--rt-color-white);
}
.styles-module_light__Z6W-X {
  background-color: #fff;
  background-color: var(--rt-color-white);
  color: #222;
  color: var(--rt-color-dark);
}
.styles-module_success__A2AKt {
  background-color: #8dc572;
  background-color: var(--rt-color-success);
  color: #fff;
  color: var(--rt-color-white);
}
.styles-module_warning__SCK0X {
  background-color: #f0ad4e;
  background-color: var(--rt-color-warning);
  color: #fff;
  color: var(--rt-color-white);
}
.styles-module_error__JvumD {
  background-color: #be6464;
  background-color: var(--rt-color-error);
  color: #fff;
  color: var(--rt-color-white);
}
.styles-module_info__BWdHW {
  background-color: #337ab7;
  background-color: var(--rt-color-info);
  color: #fff;
  color: var(--rt-color-white);
}
@font-face {
  font-family: 'Inter';
  src: url(${k}) format('truetype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Inter';
  src: url(${P}) format('truetype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Inter';
  src: url(${I}) format('truetype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Inter';
  src: url(${A}) format('truetype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Inter';
  src: url(${S}) format('truetype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'Binance Plex';
  src: url(${T}) format('opentype');
  font-weight: 300;
  font-style: normal;
}
@font-face {
  font-family: 'Binance Plex';
  src: url(${N}) format('opentype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'Binance Plex';
  src: url(${M}) format('opentype');
  font-weight: 500;
  font-style: normal;
}
@font-face {
  font-family: 'Binance Plex';
  src: url(${L}) format('opentype');
  font-weight: 600;
  font-style: normal;
}
@font-face {
  font-family: 'Geeza';
  src: url(${O}) format('truetype');
  font-weight: 400;
  font-style: normal;
  unicode-range: U+0600-06FF, U+0750-077F;
}
@font-face {
  font-family: 'Geeza';
  src: url(${W}) format('truetype');
  font-weight: 600;
  font-style: normal;
  unicode-range: U+0600-06FF, U+0750-077F;
}
@font-face {
  font-family: 'Ping Fang';
  src: url(${D}) format('truetype');
  font-weight: 300;
  font-style: normal;
  unicode-range: U+4E00-9FFF, U+20000-2A6DF;
}
@font-face {
  font-family: 'Ping Fang';
  src: url(${B}) format('truetype');
  font-weight: 400;
  font-style: normal;
  unicode-range: U+4E00-9FFF, U+20000-2A6DF;
}
@font-face {
  font-family: 'Ping Fang';
  src: url(${U}) format('truetype');
  font-weight: 600;
  font-style: normal;
  unicode-range: U+4E00-9FFF, U+20000-2A6DF;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .container {
    max-width: 768px;
  }
}
@media (min-width: 926px) {

  .container {
    max-width: 926px;
  }
}
@media (min-width: 1024px) {

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .container {
    max-width: 1536px;
  }
}
.button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.default-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.default-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.default-button {
  border-radius: 50px;
}
.icon-circle-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.icon-circle-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.icon-circle-button {
  border-radius: 9999px;
}
.icon-square-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.icon-square-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.icon-square-button {
  border-radius: 12px;
}
/* Deprecated. */
.tiny-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.tiny-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.tiny-button {
  border-radius: 4px;
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 12px;
}
.badge-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.badge-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.badge-button {
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  font-size: 12px;
}
.circle-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.circle-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.circle-button {
  border-radius: 9999px;
  padding: 12px;
  font-size: 16px;
  line-height: 20px;
}
.word-button {
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  line-height: 20px;
}
.word-button:disabled {
  pointer-events: none;
  opacity: 0.5;
}
.word-button {
  border-radius: 4px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  font-size: 16px;
  line-height: 20px;
}
.checkbox {
  position: absolute;
  top: 0px;
  left: 0px;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.checkbox:checked::before {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary) / 1);
  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
.checkbox:disabled {
  opacity: 0.4;
}
.checkbox::before {
    content: '';
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 5px;
    border-width: 2.5px;
    --tw-border-opacity: 1;
    border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
    border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  }
.checkbox[aria-checked="true"]::before {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
/* Legacy typography. */
.massive-text {
  font-size: 32px;
  line-height: 40px;
}
.screamer-text {
  font-size: 28px;
  line-height: 36px;
}
.headline-text {
  font-size: 24px;
  line-height: 32px;
}
.header-text {
  font-size: 20px;
  line-height: 28px;
}
.title-text {
  font-size: 16px;
  line-height: 24px;
}
.body-text {
  font-size: 14px;
  line-height: 22px;
}
.subtitle-text {
  font-size: 14px;
  line-height: 20px;
}
.caption-text {
  font-size: 12px;
  line-height: 16px;
}
.navigation-text {
  font-size: 12px;
  line-height: 16px;
}
/* New typography. */
.typography-header-48 {
  font-size: 48px;
  line-height: 56px;
}
.typography-header-32 {
  font-size: 32px;
  line-height: 40px;
}
.typography-header-24 {
  font-size: 24px;
  line-height: 30px;
}
.typography-header-20 {
  font-size: 20px;
  line-height: 26px;
}
.typography-header-18 {
  font-size: 18px;
  line-height: 24px;
}
.typography-header-16 {
  font-size: 16px;
  line-height: 22px;
}
.typography-subheader-24 {
  font-size: 24px;
  line-height: 28px;
}
.typography-subheader-20 {
  font-size: 20px;
  line-height: 24px;
}
.typography-subheader-18 {
  font-size: 18px;
  line-height: 22px;
}
.typography-subheader-16 {
  font-size: 16px;
  line-height: 20px;
}
.typography-subheader-14 {
  font-size: 14px;
  line-height: 18px;
}
.typography-body-20 {
  font-size: 20px;
  line-height: 24px;
}
.typography-body-16 {
  font-size: 16px;
  line-height: 20px;
}
.typography-body-14 {
  font-size: 14px;
  line-height: 18px;
}
.typography-body-12 {
  font-size: 12px;
  line-height: 16px;
}
.typography-caption-12 {
  font-size: 12px;
  line-height: 16px;
}
/* Other styles. */
.text-unset {
    text-align: inherit;
  }
.break-word {
    word-break: break-word;
  }
.alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
}
.info-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-line) / 1);
  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));
}
.info-alt-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-depthBuyBg) / 1);
  background-color: hsl(var(--twc-depthBuyBg) / var(--twc-depthBuyBg-opacity, var(--tw-bg-opacity)));
}
.default-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));
}
.brand-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-opacity-1) / 1);
  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));
}
.success-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-success-1-opacity-1) / 1);
  background-color: hsl(var(--twc-success-1-opacity-1) / var(--twc-success-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.error-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-opacity-1) / 1);
  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.warning-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);
  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.danger-alert {
  display: flex;
  width: 100%;
  border-radius: 8px;
  padding: 12px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-errorBg) / 1);
  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));
}
.input {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.input:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.input-field {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.input-field:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.search-field {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.search-field:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.search-field {
  border-radius: 9999px;
  border-style: none;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-6) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity)));
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.step-field {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.step-field:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.step-field-long {
  display: flex;
  align-items: center;
  border-radius: 8px;
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
}
.step-field-long:focus-within {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.radio-group__option {
  margin: 2px;
  display: flex;
  width: 1.25rem;
  height: 1.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border-width: 2.5px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
}
.radio-group__option[aria-checked="true"] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary) / 1);
  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));
}
.radio-group__option[aria-disabled="true"] {
  opacity: 0.4;
}
.radio-group__option-indicator {
  width: 10px;
  height: 10px;
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));
}
.radio-group__option[aria-checked='true'] .radio-group__option-indicator {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
.skeleton {
    --start-color: hsl(
      var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity))
    );
    --end-color: hsl(
      var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity))
    );

    background-image: linear-gradient(
      270deg,
      var(--start-color),
      var(--end-color),
      var(--end-color),
      var(--start-color)
    );
    background-size: 400% 100%;
    animation: bg-position 3s ease-in-out infinite;
    box-shadow: none;
    background-clip: padding-box;
    cursor: default;
    pointer-events: none;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
    flex-shrink: 0;
    border-radius: 4px;
  }
@keyframes bg-position {
    from {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }
.switch {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;
  flex-shrink: 0;
  cursor: pointer;
  border-radius: 9999px;
  border-width: 2px;
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-transparent) / 1);
  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.switch:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.switch:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 0 rgba(0,0,0,0);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 rgba(0,0,0,0));
  --tw-ring-color: rgba(255, 255, 255, var(--tw-ring-opacity));
  --tw-ring-opacity: 0.75;
}
.switch[aria-checked='true'] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
.switch[aria-checked='true'] .switch__toggle {
  --tw-translate-x: 16px;
  transform: translate(16px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.switch:disabled {
  opacity: 0.4;
}
.switch__toggle {
  pointer-events: none;
  display: inline-block;
  height: 1.25rem;
  width: 1.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  border-radius: 9999px;
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
@supports (color: rgb(0 0 0 / 0)) {
.switch__toggle {
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }
}
.tw-scrollbar {
  overflow: hidden;
  overflow-y: auto;
  padding-right: 8px;
}
.tw-scrollbar::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
  border-radius: var(--scrollbar-track-radius);
}
.tw-scrollbar::-webkit-scrollbar-track:hover {
  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));
}
.tw-scrollbar::-webkit-scrollbar-track:active {
  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));
}
.tw-scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: var(--scrollbar-thumb-radius);
}
.tw-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));
}
.tw-scrollbar::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));
}
.tw-scrollbar::-webkit-scrollbar-corner {
  background-color: var(--scrollbar-corner);
  border-radius: var(--scrollbar-corner-radius);
}
.tw-scrollbar::-webkit-scrollbar-corner:hover {
  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));
}
.tw-scrollbar::-webkit-scrollbar-corner:active {
  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));
}
.tw-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: initial initial;
  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);
}
.tw-scrollbar::-webkit-scrollbar {
  display: block;
  width: 8px;
  height: 8px;
}
.tw-scrollbar {
  --scrollbar-track: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));
  --scrollbar-thumb: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, 1));
  --scrollbar-thumb-radius: 8px;
}
.tw-tooltip {
  line-height: 18px;
  z-index: 50 !important;
  max-width: 20rem !important;
  border-radius: 4px !important;
  --tw-bg-opacity: 1 !important;
  background-color: hsl(var(--twc-tooltip) / 1) !important;
  background-color: hsl(var(--twc-tooltip) / var(--twc-tooltip-opacity, var(--tw-bg-opacity))) !important;
  padding-left: 12px !important;
  padding-right: 12px !important;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
  --tw-text-opacity: 1 !important;
  color: hsl(var(--twc-utility-1-default) / 1) !important;
  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity))) !important;
  opacity: 1 !important;
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color) !important;
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1) !important;
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;
  --tw-backdrop-blur: blur(40px) !important;
  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia) !important;
    font-size: 14px !important;
}
.tw-tooltip .react-tooltip-arrow {
  display: none;
}
.tw-overlay {
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-overlay-50) / 1);
  background-color: hsl(var(--twc-overlay-50) / var(--twc-overlay-50-opacity, var(--tw-bg-opacity)));
  --tw-backdrop-blur: blur(2px);
  backdrop-filter: blur(2px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.visible {
  visibility: visible;
}
.collapse {
  visibility: collapse;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-bottom-0 {
  bottom: -0px;
}
.-bottom-0\\.5 {
  bottom: -2px;
}
.-bottom-1 {
  bottom: -4px;
}
.-bottom-px {
  bottom: -1px;
}
.-left-\\[3px\\] {
  left: -3px;
}
.-right-0 {
  right: -0px;
}
.-right-0\\.5 {
  right: -2px;
}
.-right-1 {
  right: -4px;
}
.-top-8 {
  top: -32px;
}
.-top-\\[2px\\] {
  top: -2px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.bottom-\\[9px\\] {
  bottom: 9px;
}
.left-0 {
  left: 0px;
}
.left-1\\/2 {
  left: 50%;
}
.left-4 {
  left: 16px;
}
.left-\\[356px\\] {
  left: 356px;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-1 {
  right: 4px;
}
.right-1\\.25 {
  right: 5px;
}
.right-2 {
  right: 8px;
}
.right-2\\.5 {
  right: 0.625rem;
}
.right-4 {
  right: 16px;
}
.right-5 {
  right: 1.25rem;
}
.right-\\[125px\\] {
  right: 125px;
}
.right-\\[9px\\] {
  right: 9px;
}
.top-0 {
  top: 0px;
}
.top-1 {
  top: 4px;
}
.top-1\\.25 {
  top: 5px;
}
.top-1\\/2 {
  top: 50%;
}
.top-7 {
  top: 1.75rem;
}
.top-\\[110px\\] {
  top: 110px;
}
.top-\\[20px\\] {
  top: 20px;
}
.top-\\[5px\\] {
  top: 5px;
}
.-z-10 {
  z-index: -10;
}
.z-0 {
  z-index: 0;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-50 {
  z-index: 50;
}
.z-\\[1\\] {
  z-index: 1;
}
.z-\\[6\\] {
  z-index: 6;
}
.col-span-3 {
  grid-column: span 3 / span 3;
}
.float-right {
  float: right;
}
.m-4 {
  margin: 16px;
}
.m-auto {
  margin: auto;
}
.-mx-0 {
  margin-left: -0px;
  margin-right: -0px;
}
.-mx-0\\.5 {
  margin-left: -2px;
  margin-right: -2px;
}
.-mx-2 {
  margin-left: -8px;
  margin-right: -8px;
}
.-my-3 {
  margin-top: -12px;
  margin-bottom: -12px;
}
.mx-0 {
  margin-left: 0px;
  margin-right: 0px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.mx-1 {
  margin-left: 4px;
  margin-right: 4px;
}
.mx-2 {
  margin-left: 8px;
  margin-right: 8px;
}
.mx-3 {
  margin-left: 12px;
  margin-right: 12px;
}
.mx-4 {
  margin-left: 16px;
  margin-right: 16px;
}
.mx-\\[-16px\\] {
  margin-left: -16px;
  margin-right: -16px;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-0 {
  margin-top: 0px;
  margin-bottom: 0px;
}
.my-0\\.5 {
  margin-top: 2px;
  margin-bottom: 2px;
}
.my-1 {
  margin-top: 4px;
  margin-bottom: 4px;
}
.my-10 {
  margin-top: 40px;
  margin-bottom: 40px;
}
.my-11 {
  margin-top: 2.75rem;
  margin-bottom: 2.75rem;
}
.my-14 {
  margin-top: 56px;
  margin-bottom: 56px;
}
.my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}
.my-2\\.5 {
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
}
.my-3 {
  margin-top: 12px;
  margin-bottom: 12px;
}
.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}
.my-5 {
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;
}
.my-6 {
  margin-top: 24px;
  margin-bottom: 24px;
}
.\\!ml-4 {
  margin-left: 16px !important;
}
.\\!ml-auto {
  margin-left: auto !important;
}
.-mb-2 {
  margin-bottom: -8px;
}
.-mb-4 {
  margin-bottom: -16px;
}
.-ml-2 {
  margin-left: -8px;
}
.-mt-3 {
  margin-top: -12px;
}
.-mt-4 {
  margin-top: -16px;
}
.-mt-6 {
  margin-top: -24px;
}
.-mt-\\[10px\\] {
  margin-top: -10px;
}
.mb-0 {
  margin-bottom: 0px;
}
.mb-0\\.5 {
  margin-bottom: 2px;
}
.mb-1 {
  margin-bottom: 4px;
}
.mb-10 {
  margin-bottom: 40px;
}
.mb-16 {
  margin-bottom: 64px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-2\\.5 {
  margin-bottom: 0.625rem;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-6 {
  margin-bottom: 24px;
}
.mb-7 {
  margin-bottom: 1.75rem;
}
.ml-0 {
  margin-left: 0px;
}
.ml-0\\.5 {
  margin-left: 2px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.25 {
  margin-left: 5px;
}
.ml-2 {
  margin-left: 8px;
}
.ml-2\\.5 {
  margin-left: 0.625rem;
}
.ml-3 {
  margin-left: 12px;
}
.ml-4 {
  margin-left: 16px;
}
.ml-6 {
  margin-left: 24px;
}
.ml-\\[12px\\] {
  margin-left: 12px;
}
.ml-\\[258px\\] {
  margin-left: 258px;
}
.ml-auto {
  margin-left: auto;
}
.mr-1 {
  margin-right: 4px;
}
.mr-2 {
  margin-right: 8px;
}
.mr-2\\.5 {
  margin-right: 0.625rem;
}
.mr-3 {
  margin-right: 12px;
}
.mr-4 {
  margin-right: 16px;
}
.mr-px {
  margin-right: 1px;
}
.mt-0 {
  margin-top: 0px;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-1\\.5 {
  margin-top: 0.375rem;
}
.mt-12 {
  margin-top: 48px;
}
.mt-16 {
  margin-top: 64px;
}
.mt-2 {
  margin-top: 8px;
}
.mt-20 {
  margin-top: 5rem;
}
.mt-24 {
  margin-top: 6rem;
}
.mt-3 {
  margin-top: 12px;
}
.mt-4 {
  margin-top: 16px;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 24px;
}
.mt-8 {
  margin-top: 32px;
}
.mt-\\[-20px\\] {
  margin-top: -20px;
}
.mt-\\[-5px\\] {
  margin-top: -5px;
}
.mt-\\[120px\\] {
  margin-top: 120px;
}
.mt-\\[130px\\] {
  margin-top: 130px;
}
.mt-\\[150px\\] {
  margin-top: 150px;
}
.mt-\\[2px\\] {
  margin-top: 2px;
}
.mt-auto {
  margin-top: auto;
}
.box-border {
  box-sizing: border-box;
}
.\\!block {
  display: block !important;
}
.block {
  display: block;
}
.inline-block {
  display: inline-block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.\\!table {
  display: table !important;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-\\[2\\/1\\.48\\] {
  aspect-ratio: 2/1.48;
}
.aspect-\\[3\\/1\\] {
  aspect-ratio: 3/1;
}
.h-0 {
  height: 0px;
}
.h-0\\.75 {
  height: 3px;
}
.h-1 {
  height: 4px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-14 {
  height: 56px;
}
.h-15 {
  height: 60px;
}
.h-16 {
  height: 64px;
}
.h-2 {
  height: 8px;
}
.h-2\\.5 {
  height: 10px;
}
.h-28 {
  height: 7rem;
}
.h-3 {
  height: 12px;
}
.h-32 {
  height: 8rem;
}
.h-4 {
  height: 16px;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 1.75rem;
}
.h-7\\.5 {
  height: 30px;
}
.h-72 {
  height: 18rem;
}
.h-8 {
  height: 32px;
}
.h-9 {
  height: 36px;
}
.h-\\[100vh\\] {
  height: 100vh;
}
.h-\\[104px\\] {
  height: 104px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[170px\\] {
  height: 170px;
}
.h-\\[18px\\] {
  height: 18px;
}
.h-\\[1px\\] {
  height: 1px;
}
.h-\\[200px\\] {
  height: 200px;
}
.h-\\[20px\\] {
  height: 20px;
}
.h-\\[232px\\] {
  height: 232px;
}
.h-\\[252px\\] {
  height: 252px;
}
.h-\\[26px\\] {
  height: 26px;
}
.h-\\[2px\\] {
  height: 2px;
}
.h-\\[30px\\] {
  height: 30px;
}
.h-\\[330px\\] {
  height: 330px;
}
.h-\\[349px\\] {
  height: 349px;
}
.h-\\[360px\\] {
  height: 360px;
}
.h-\\[36px\\] {
  height: 36px;
}
.h-\\[60vh\\] {
  height: 60vh;
}
.h-\\[6rem\\] {
  height: 6rem;
}
.h-\\[72px\\] {
  height: 72px;
}
.h-\\[780px\\] {
  height: 780px;
}
.h-\\[90px\\] {
  height: 90px;
}
.h-\\[calc\\(100vh-1rem\\)\\] {
  height: calc(100vh - 1rem);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-60 {
  max-height: 15rem;
}
.max-h-96 {
  max-height: 24rem;
}
.max-h-\\[235px\\] {
  max-height: 235px;
}
.max-h-\\[250px\\] {
  max-height: 250px;
}
.max-h-\\[400px\\] {
  max-height: 400px;
}
.max-h-\\[50vh\\] {
  max-height: 50vh;
}
.min-h-15 {
  min-height: 60px;
}
.min-h-17 {
  min-height: 68px;
}
.min-h-5 {
  min-height: 1.25rem;
}
.min-h-6 {
  min-height: 24px;
}
.min-h-\\[316px\\] {
  min-height: 316px;
}
.min-h-\\[400px\\] {
  min-height: 400px;
}
.min-h-\\[52px\\] {
  min-height: 52px;
}
.min-h-\\[54px\\] {
  min-height: 54px;
}
.min-h-full {
  min-height: 100%;
}
.min-h-screen {
  min-height: 100vh;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-10 {
  width: 40px;
}
.w-10\\/12 {
  width: 83.333333%;
}
.w-11 {
  width: 2.75rem;
}
.w-12 {
  width: 48px;
}
.w-14 {
  width: 56px;
}
.w-16 {
  width: 64px;
}
.w-17 {
  width: 68px;
}
.w-2 {
  width: 8px;
}
.w-2\\.5 {
  width: 10px;
}
.w-2\\/3 {
  width: 66.666667%;
}
.w-20 {
  width: 5rem;
}
.w-22\\.5 {
  width: 90px;
}
.w-24 {
  width: 6rem;
}
.w-28 {
  width: 7rem;
}
.w-3 {
  width: 12px;
}
.w-32 {
  width: 8rem;
}
.w-4 {
  width: 16px;
}
.w-40 {
  width: 10rem;
}
.w-5 {
  width: 1.25rem;
}
.w-52 {
  width: 13rem;
}
.w-6 {
  width: 24px;
}
.w-7 {
  width: 1.75rem;
}
.w-7\\.5 {
  width: 30px;
}
.w-8 {
  width: 32px;
}
.w-9 {
  width: 36px;
}
.w-\\[100px\\] {
  width: 100px;
}
.w-\\[102px\\] {
  width: 102px;
}
.w-\\[124px\\] {
  width: 124px;
}
.w-\\[136px\\] {
  width: 136px;
}
.w-\\[150px\\] {
  width: 150px;
}
.w-\\[200px\\] {
  width: 200px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[224px\\] {
  width: 224px;
}
.w-\\[250px\\] {
  width: 250px;
}
.w-\\[300px\\] {
  width: 300px;
}
.w-\\[305px\\] {
  width: 305px;
}
.w-\\[310px\\] {
  width: 310px;
}
.w-\\[320px\\] {
  width: 320px;
}
.w-\\[350px\\] {
  width: 350px;
}
.w-\\[36px\\] {
  width: 36px;
}
.w-\\[389px\\] {
  width: 389px;
}
.w-\\[413px\\] {
  width: 413px;
}
.w-\\[42px\\] {
  width: 42px;
}
.w-\\[438px\\] {
  width: 438px;
}
.w-\\[472px\\] {
  width: 472px;
}
.w-\\[504px\\] {
  width: 504px;
}
.w-\\[56px\\] {
  width: 56px;
}
.w-\\[600px\\] {
  width: 600px;
}
.w-\\[6rem\\] {
  width: 6rem;
}
.w-\\[77px\\] {
  width: 77px;
}
.w-\\[80px\\] {
  width: 80px;
}
.w-\\[86px\\] {
  width: 86px;
}
.w-\\[90px\\] {
  width: 90px;
}
.w-\\[calc\\(100\\%-32px\\)\\] {
  width: calc(100% - 32px);
}
.w-auto {
  width: auto;
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-min {
  width: -moz-min-content;
  width: min-content;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[253px\\] {
  min-width: 253px;
}
.min-w-\\[400px\\] {
  min-width: 400px;
}
.min-w-\\[466px\\] {
  min-width: 466px;
}
.min-w-\\[480px\\] {
  min-width: 480px;
}
.min-w-\\[716px\\] {
  min-width: 716px;
}
.min-w-\\[80px\\] {
  min-width: 80px;
}
.min-w-\\[850px\\] {
  min-width: 850px;
}
.min-w-full {
  min-width: 100%;
}
.min-w-max {
  min-width: -moz-max-content;
  min-width: max-content;
}
.min-w-min {
  min-width: -moz-min-content;
  min-width: min-content;
}
.max-w-\\[120px\\] {
  max-width: 120px;
}
.max-w-\\[200px\\] {
  max-width: 200px;
}
.max-w-\\[375px\\] {
  max-width: 375px;
}
.max-w-\\[400px\\] {
  max-width: 400px;
}
.max-w-\\[716px\\] {
  max-width: 716px;
}
.max-w-md {
  max-width: 28rem;
}
.max-w-xs {
  max-width: 20rem;
}
.flex-1 {
  flex: 1 1 0%;
}
.flex-shrink-0 {
  flex-shrink: 0;
}
.shrink {
  flex-shrink: 1;
}
.shrink-0 {
  flex-shrink: 0;
}
.flex-grow {
  flex-grow: 1;
}
.flex-grow-0 {
  flex-grow: 0;
}
.grow {
  flex-grow: 1;
}
.origin-\\[50\\%_50\\%\\] {
  transform-origin: 50% 50%;
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(-50%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1 {
  --tw-translate-y: -4px;
  transform: translate(var(--tw-translate-x), -4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), -50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-0 {
  --tw-translate-x: 0px;
  transform: translate(0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-5 {
  --tw-translate-x: 1.25rem;
  transform: translate(1.25rem, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-full {
  --tw-translate-x: 100%;
  transform: translate(100%, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), 0px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1 {
  --tw-translate-y: 4px;
  transform: translate(var(--tw-translate-x), 4px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-1\\/2 {
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), 50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[200px\\] {
  --tw-translate-y: 200px;
  transform: translate(var(--tw-translate-x), 200px) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[calc\\(-50\\%\\+6px\\)\\] {
  --tw-translate-y: calc(-50% + 6px);
  transform: translate(var(--tw-translate-x), calc(-50% + 6px)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(-90deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(0deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(180deg) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-scale-100 {
  --tw-scale-x: -1;
  --tw-scale-y: -1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(-1) scaleY(-1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-100 {
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1) scaleY(1);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-95 {
  --tw-scale-x: .95;
  --tw-scale-y: .95;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(.95) scaleY(.95);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-\\[calc\\(20\\/24\\)\\] {
  --tw-scale-x: calc(20 / 24);
  --tw-scale-y: calc(20 / 24);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(calc(20 / 24)) scaleY(calc(20 / 24));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes reverse-spin {

  from {
    transform: rotate(360deg);
  }
}
.animate-reverse-spin {
  animation: reverse-spin 1s linear infinite;
}
@keyframes shimmer {

  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}
.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}
@keyframes spin {

  to {
    transform: rotate(360deg);
  }
}
.animate-spin {
  animation: spin 1s linear infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-not-allowed {
  cursor: not-allowed;
}
.cursor-pointer {
  cursor: pointer;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize-none {
  resize: none;
}
.resize {
  resize: both;
}
.list-disc {
  list-style-type: disc;
}
.grid-cols-2 {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}
.grid-cols-3 {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.grid-cols-4 {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-baseline {
  align-items: baseline;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.justify-evenly {
  justify-content: space-evenly;
}
.justify-stretch {
  justify-content: stretch;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-12 {
  gap: 48px;
}
.gap-2 {
  gap: 8px;
}
.gap-3 {
  gap: 12px;
}
.gap-4 {
  gap: 16px;
}
.gap-6 {
  gap: 24px;
}
.gap-8 {
  gap: 32px;
}
.gap-\\[5px\\] {
  gap: 5px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-x-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0px * 0);
  margin-right: calc(0px * var(--tw-space-x-reverse));
  margin-left: calc(0px * (1 - 0));
  margin-left: calc(0px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(0px * calc(1 - 0));
  margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-0\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(2px * 0);
  margin-right: calc(2px * var(--tw-space-x-reverse));
  margin-left: calc(2px * (1 - 0));
  margin-left: calc(2px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(2px * calc(1 - 0));
  margin-left: calc(2px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(4px * 0);
  margin-right: calc(4px * var(--tw-space-x-reverse));
  margin-left: calc(4px * (1 - 0));
  margin-left: calc(4px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(4px * calc(1 - 0));
  margin-left: calc(4px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-1\\.25 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(5px * 0);
  margin-right: calc(5px * var(--tw-space-x-reverse));
  margin-left: calc(5px * (1 - 0));
  margin-left: calc(5px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(5px * calc(1 - 0));
  margin-left: calc(5px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * 0);
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * (1 - 0));
  margin-left: calc(8px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(8px * calc(1 - 0));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.625rem * 0);
  margin-right: calc(0.625rem * var(--tw-space-x-reverse));
  margin-left: calc(0.625rem * (1 - 0));
  margin-left: calc(0.625rem * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(0.625rem * calc(1 - 0));
  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(12px * 0);
  margin-right: calc(12px * var(--tw-space-x-reverse));
  margin-left: calc(12px * (1 - 0));
  margin-left: calc(12px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(12px * calc(1 - 0));
  margin-left: calc(12px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * 0);
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * (1 - 0));
  margin-left: calc(16px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(16px * calc(1 - 0));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(24px * 0);
  margin-right: calc(24px * var(--tw-space-x-reverse));
  margin-left: calc(24px * (1 - 0));
  margin-left: calc(24px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(24px * calc(1 - 0));
  margin-left: calc(24px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(32px * 0);
  margin-right: calc(32px * var(--tw-space-x-reverse));
  margin-left: calc(32px * (1 - 0));
  margin-left: calc(32px * (1 - var(--tw-space-x-reverse)));
  margin-left: calc(32px * calc(1 - 0));
  margin-left: calc(32px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-0 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0px * (1 - 0));
  margin-top: calc(0px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0px * calc(1 - 0));
  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0px * 0);
  margin-bottom: calc(0px * var(--tw-space-y-reverse));
}
.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(2px * (1 - 0));
  margin-top: calc(2px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(2px * calc(1 - 0));
  margin-top: calc(2px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(2px * 0);
  margin-bottom: calc(2px * var(--tw-space-y-reverse));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(4px * (1 - 0));
  margin-top: calc(4px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(4px * calc(1 - 0));
  margin-top: calc(4px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(4px * 0);
  margin-bottom: calc(4px * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * (1 - 0));
  margin-top: calc(0.375rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0.375rem * calc(1 - 0));
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * 0);
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-12 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(48px * (1 - 0));
  margin-top: calc(48px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(48px * calc(1 - 0));
  margin-top: calc(48px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(48px * 0);
  margin-bottom: calc(48px * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(8px * (1 - 0));
  margin-top: calc(8px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(8px * calc(1 - 0));
  margin-top: calc(8px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(8px * 0);
  margin-bottom: calc(8px * var(--tw-space-y-reverse));
}
.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.625rem * (1 - 0));
  margin-top: calc(0.625rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(0.625rem * calc(1 - 0));
  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.625rem * 0);
  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));
}
.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(12px * (1 - 0));
  margin-top: calc(12px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(12px * calc(1 - 0));
  margin-top: calc(12px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(12px * 0);
  margin-bottom: calc(12px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * (1 - 0));
  margin-top: calc(16px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(16px * calc(1 - 0));
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * 0);
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * (1 - 0));
  margin-top: calc(1.25rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1.25rem * calc(1 - 0));
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * 0);
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * (1 - 0));
  margin-top: calc(24px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(24px * calc(1 - 0));
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * 0);
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.space-y-7 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.75rem * (1 - 0));
  margin-top: calc(1.75rem * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(1.75rem * calc(1 - 0));
  margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.75rem * 0);
  margin-bottom: calc(1.75rem * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(32px * (1 - 0));
  margin-top: calc(32px * (1 - var(--tw-space-y-reverse)));
  margin-top: calc(32px * calc(1 - 0));
  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(32px * 0);
  margin-bottom: calc(32px * var(--tw-space-y-reverse));
}
.self-center {
  align-self: center;
}
.self-stretch {
  align-self: stretch;
}
.justify-self-end {
  justify-self: end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-y-hidden {
  overflow-y: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre {
  white-space: pre;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-nowrap {
  text-wrap: nowrap;
}
.break-words {
  word-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-2 {
  border-radius: 8px;
}
.rounded-3 {
  border-radius: 12px;
}
.rounded-3xl {
  border-radius: 14px;
}
.rounded-4 {
  border-radius: 16px;
}
.rounded-5xl {
  border-radius: 20px;
}
.rounded-6 {
  border-radius: 24px;
}
.rounded-\\[24px_0px_0px_24px\\] {
  border-radius: 24px 0px 0px 24px;
}
.rounded-\\[40px\\] {
  border-radius: 40px;
}
.rounded-\\[4px\\] {
  border-radius: 4px;
}
.rounded-curvy {
  border-radius: 50px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-xl {
  border-radius: 10px;
}
.rounded-b-4 {
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
}
.rounded-t-4 {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.rounded-bl-full {
  border-bottom-left-radius: 9999px;
}
.rounded-br-4 {
  border-bottom-right-radius: 16px;
}
.rounded-tl-full {
  border-top-left-radius: 9999px;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-\\[2px\\] {
  border-width: 2px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-solid {
  border-style: solid;
}
.border-dashed {
  border-style: dashed;
}
.\\!border-error {
  --tw-border-opacity: 1 !important;
  border-color: hsl(var(--twc-error) / 1) !important;
  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity))) !important;
}
.border-accent-blue {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-accent-blue) / 1);
  border-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-border-opacity)));
}
.border-accent-neon-green {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-accent-neon-green) / 1);
  border-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-border-opacity)));
}
.border-accent-pink {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-accent-pink) / 1);
  border-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-border-opacity)));
}
.border-accent-yellow {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-accent-yellow) / 1);
  border-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-border-opacity)));
}
.border-background-1 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-background-1) / 1);
  border-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-border-opacity)));
}
.border-backgroundPrimary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-backgroundPrimary) / 1);
  border-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-border-opacity)));
}
.border-backgroundTertiary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-backgroundTertiary) / 1);
  border-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-border-opacity)));
}
.border-black {
  --tw-border-opacity: 1;
  border-color: rgba(0, 0, 0, 1);
  border-color: rgba(0, 0, 0, var(--tw-border-opacity));
}
.border-error {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-error) / 1);
  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));
}
.border-error-1-opacity-1 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-error-1-opacity-1) / 1);
  border-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-border-opacity)));
}
.border-line {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-line) / 1);
  border-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));
}
.border-on-primary-opacity-1 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-on-primary-opacity-1) / 1);
  border-color: hsl(var(--twc-on-primary-opacity-1) / var(--twc-on-primary-opacity-1-opacity, var(--tw-border-opacity)));
}
.border-other-Gold {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-other-Gold) / 1);
  border-color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-border-opacity)));
}
.border-other-Silver {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-other-Silver) / 1);
  border-color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-border-opacity)));
}
.border-primary {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary) / 1);
  border-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-border-opacity)));
}
.border-primary-default {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.border-primary-opacity-1 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-opacity-1) / 1);
  border-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-border-opacity)));
}
.border-success {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-success) / 1);
  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));
}
.border-transparent {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-transparent) / 1);
  border-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-border-opacity)));
}
.border-utility-1-opacity-3 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-border-opacity)));
}
.border-utility-1-opacity-5 {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-utility-1-opacity-5) / 1);
  border-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));
}
.border-b-error-1-default {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--twc-error-1-default) / 1);
  border-bottom-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-border-opacity)));
}
.border-b-on-primary {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--twc-on-primary) / 1);
  border-bottom-color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-border-opacity)));
}
.border-b-primary-default {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--twc-primary-default) / 1);
  border-bottom-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.border-b-utility-1-opacity-1 {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / 1);
  border-bottom-color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-border-opacity)));
}
.border-b-utility-1-opacity-5 {
  --tw-border-opacity: 1;
  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / 1);
  border-bottom-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));
}
.border-t-line {
  --tw-border-opacity: 1;
  border-top-color: hsl(var(--twc-line) / 1);
  border-top-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-border-opacity)));
}
.border-t-utility-1-opacity-5 {
  --tw-border-opacity: 1;
  border-top-color: hsl(var(--twc-utility-1-opacity-5) / 1);
  border-top-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-border-opacity)));
}
.bg-\\[rgba\\(37\\2c 37\\2c 37\\2c 0\\.08\\)\\] {
  background-color: rgba(37,37,37,0.08);
}
.bg-accent-blue {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-accent-blue) / 1);
  background-color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-bg-opacity)));
}
.bg-accent-neon-green {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-accent-neon-green) / 1);
  background-color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-bg-opacity)));
}
.bg-accent-pink {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-accent-pink) / 1);
  background-color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-bg-opacity)));
}
.bg-accent-yellow {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-accent-yellow) / 1);
  background-color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-bg-opacity)));
}
.bg-background-1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-background-1) / 1);
  background-color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-bg-opacity)));
}
.bg-background-2 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-background-2) / 1);
  background-color: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, var(--tw-bg-opacity)));
}
.bg-background-primary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-background-primary) / 1);
  background-color: hsl(var(--twc-background-primary) / var(--twc-background-primary-opacity, var(--tw-bg-opacity)));
}
.bg-background-secondary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-background-secondary) / 1);
  background-color: hsl(var(--twc-background-secondary) / var(--twc-background-secondary-opacity, var(--tw-bg-opacity)));
}
.bg-backgroundPrimary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-backgroundPrimary) / 1);
  background-color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-bg-opacity)));
}
.bg-backgroundSecondary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-backgroundSecondary) / 1);
  background-color: hsl(var(--twc-backgroundSecondary) / var(--twc-backgroundSecondary-opacity, var(--tw-bg-opacity)));
}
.bg-backgroundTertiary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-backgroundTertiary) / 1);
  background-color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-bg-opacity)));
}
.bg-bg3 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-bg3) / 1);
  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgba(0, 0, 0, 1);
  background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
}
.bg-button-primary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-primary) / 1);
  background-color: hsl(var(--twc-button-primary) / var(--twc-button-primary-opacity, var(--tw-bg-opacity)));
}
.bg-button-secondary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-secondary) / 1);
  background-color: hsl(var(--twc-button-secondary) / var(--twc-button-secondary-opacity, var(--tw-bg-opacity)));
}
.bg-error-1-default {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-default) / 1);
  background-color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-bg-opacity)));
}
.bg-error-1-opacity-1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-opacity-1) / 1);
  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.bg-errorBg {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-errorBg) / 1);
  background-color: hsl(var(--twc-errorBg) / var(--twc-errorBg-opacity, var(--tw-bg-opacity)));
}
.bg-line {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-line) / 1);
  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));
}
.bg-primary {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
.bg-primary-default {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-default) / 1);
  background-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-bg-opacity)));
}
.bg-primary-opacity-1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-opacity-1) / 1);
  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));
}
.bg-success-1-default {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-success-1-default) / 1);
  background-color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-bg-opacity)));
}
.bg-successBg {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-successBg) / 1);
  background-color: hsl(var(--twc-successBg) / var(--twc-successBg-opacity, var(--tw-bg-opacity)));
}
.bg-transparent {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-transparent) / 1);
  background-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-default {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-default) / 1);
  background-color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-opacity-2 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-2) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-opacity-3 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-3) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-opacity-4 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-opacity-5 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));
}
.bg-utility-1-opacity-6 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-6) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-6) / var(--twc-utility-1-opacity-6-opacity, var(--tw-bg-opacity)));
}
.bg-warning {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-warning) / 1);
  background-color: hsl(var(--twc-warning) / var(--twc-warning-opacity, var(--tw-bg-opacity)));
}
.bg-warning-1-opacity-1 {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-warning-1-opacity-1) / 1);
  background-color: hsl(var(--twc-warning-1-opacity-1) / var(--twc-warning-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgba(255, 255, 255, 1);
  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
}
.bg-opacity-50 {
  --tw-bg-opacity: 0.5;
}
.bg-gradient-primary {
  background-image: linear-gradient(268deg, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-light-gradient-mid {
  --tw-gradient-from: hsl(var(--twc-light-gradient-mid) / var(--twc-light-gradient-mid-opacity, 1)) var(--tw-gradient-from-position);
  --tw-gradient-to: hsl(var(--twc-light-gradient-mid) / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-utility-1-opacity-5 {
  --tw-gradient-from: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-from-position);
  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-utility-1-opacity-4 {
  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-4) / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, 1)) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-light-gradient-end {
  --tw-gradient-to: hsl(var(--twc-light-gradient-end) / var(--twc-light-gradient-end-opacity, 1)) var(--tw-gradient-to-position);
}
.to-utility-1-opacity-5 {
  --tw-gradient-to: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, 1)) var(--tw-gradient-to-position);
}
.bg-\\[length\\:200\\%_100\\%\\] {
  background-size: 200% 100%;
}
.fill-background-2 {
  fill: hsl(var(--twc-background-2) / 1);
  fill: hsl(var(--twc-background-2) / var(--twc-background-2-opacity, 1));
}
.fill-utility-1-default {
  fill: hsl(var(--twc-utility-1-default) / 1);
  fill: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, 1));
}
.stroke-current {
  stroke: currentColor;
}
.object-contain {
  -o-object-fit: contain;
     object-fit: contain;
}
.object-cover {
  -o-object-fit: cover;
     object-fit: cover;
}
.\\!p-0 {
  padding: 0px !important;
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-1\\.5 {
  padding: 0.375rem;
}
.p-12 {
  padding: 48px;
}
.p-2 {
  padding: 8px;
}
.p-2\\.5 {
  padding: 0.625rem;
}
.p-3 {
  padding: 12px;
}
.p-3\\.5 {
  padding: 0.875rem;
}
.p-4 {
  padding: 16px;
}
.p-6 {
  padding: 24px;
}
.p-\\[10px\\] {
  padding: 10px;
}
.\\!px-4 {
  padding-left: 16px !important;
  padding-right: 16px !important;
}
.\\!py-2 {
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.\\!py-3 {
  padding-top: 12px !important;
  padding-bottom: 12px !important;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.px-5 {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.px-6 {
  padding-left: 24px;
  padding-right: 24px;
}
.px-8 {
  padding-left: 32px;
  padding-right: 32px;
}
.py-0 {
  padding-top: 0px;
  padding-bottom: 0px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-2\\.5 {
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-6 {
  padding-top: 24px;
  padding-bottom: 24px;
}
.py-8 {
  padding-top: 32px;
  padding-bottom: 32px;
}
.pb-0 {
  padding-bottom: 0px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pb-28 {
  padding-bottom: 7rem;
}
.pb-3 {
  padding-bottom: 12px;
}
.pb-4 {
  padding-bottom: 16px;
}
.pb-5 {
  padding-bottom: 1.25rem;
}
.pb-6 {
  padding-bottom: 24px;
}
.pb-8 {
  padding-bottom: 32px;
}
.pb-\\[100\\%\\] {
  padding-bottom: 100%;
}
.pb-\\[3px\\] {
  padding-bottom: 3px;
}
.pb-\\[4px\\] {
  padding-bottom: 4px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-1\\.5 {
  padding-left: 0.375rem;
}
.pl-11 {
  padding-left: 2.75rem;
}
.pl-16 {
  padding-left: 64px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 0.625rem;
}
.pl-3 {
  padding-left: 12px;
}
.pl-4 {
  padding-left: 16px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-10 {
  padding-right: 40px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-3 {
  padding-right: 12px;
}
.pr-4 {
  padding-right: 16px;
}
.pr-\\[2px\\] {
  padding-right: 2px;
}
.pr-\\[30px\\] {
  padding-right: 30px;
}
.pr-\\[56px\\] {
  padding-right: 56px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-0\\.5 {
  padding-top: 2px;
}
.pt-1 {
  padding-top: 4px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-20 {
  padding-top: 5rem;
}
.pt-3 {
  padding-top: 12px;
}
.pt-4 {
  padding-top: 16px;
}
.pt-5 {
  padding-top: 1.25rem;
}
.pt-6 {
  padding-top: 24px;
}
.pt-8 {
  padding-top: 32px;
}
.pt-\\[40px\\] {
  padding-top: 40px;
}
.pt-\\[59px\\] {
  padding-top: 59px;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.text-right {
  text-align: right;
}
.text-start {
  text-align: left;
}
.text-end {
  text-align: right;
}
.align-middle {
  vertical-align: middle;
}
.font-brand {
  font-family: Inter, Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-inter {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-\\[11px\\]\\/\\[13px\\] {
  font-size: 11px;
  line-height: 13px;
}
.text-\\[16px\\] {
  font-size: 16px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[23px\\] {
  font-size: 23px;
}
.text-\\[24px\\] {
  font-size: 24px;
}
.text-body3 {
  font-size: 14px;
}
.text-caption1 {
  font-size: 12px;
}
.text-header-48 {
  font-size: 48px;
}
.text-headline6 {
  font-size: 24px;
}
.text-subheader-14 {
  font-size: 14px;
}
.text-subheader-16 {
  font-size: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-light {
  font-weight: 300;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.capitalize {
  text-transform: capitalize;
}
.leading-\\[18px\\] {
  line-height: 18px;
}
.leading-\\[24px\\] {
  line-height: 24px;
}
.leading-\\[30px\\] {
  line-height: 30px;
}
.leading-body-12 {
  line-height: 16px;
}
.leading-body-14 {
  line-height: 18px;
}
.leading-body-16 {
  line-height: 20px;
}
.leading-body-20 {
  line-height: 24px;
}
.leading-caption-12 {
  line-height: 16px;
}
.leading-header-16 {
  line-height: 22px;
}
.leading-header-18 {
  line-height: 24px;
}
.leading-header-20 {
  line-height: 26px;
}
.leading-header-24 {
  line-height: 30px;
}
.leading-header-32 {
  line-height: 40px;
}
.leading-header-48 {
  line-height: 56px;
}
.leading-headline6 {
  line-height: 32px;
}
.leading-subheader-14 {
  line-height: 18px;
}
.leading-subheader-16 {
  line-height: 20px;
}
.leading-subheader-18 {
  line-height: 22px;
}
.leading-subheader-20 {
  line-height: 24px;
}
.leading-subheader-24 {
  line-height: 28px;
}
.leading-subtitle4 {
  line-height: 22px;
}
.text-accent-blue {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-accent-blue) / 1);
  color: hsl(var(--twc-accent-blue) / var(--twc-accent-blue-opacity, var(--tw-text-opacity)));
}
.text-accent-lavender {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-accent-lavender) / 1);
  color: hsl(var(--twc-accent-lavender) / var(--twc-accent-lavender-opacity, var(--tw-text-opacity)));
}
.text-accent-neon-green {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-accent-neon-green) / 1);
  color: hsl(var(--twc-accent-neon-green) / var(--twc-accent-neon-green-opacity, var(--tw-text-opacity)));
}
.text-accent-pink {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-accent-pink) / 1);
  color: hsl(var(--twc-accent-pink) / var(--twc-accent-pink-opacity, var(--tw-text-opacity)));
}
.text-accent-yellow {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-accent-yellow) / 1);
  color: hsl(var(--twc-accent-yellow) / var(--twc-accent-yellow-opacity, var(--tw-text-opacity)));
}
.text-background-1 {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-background-1) / 1);
  color: hsl(var(--twc-background-1) / var(--twc-background-1-opacity, var(--tw-text-opacity)));
}
.text-backgroundPrimary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-backgroundPrimary) / 1);
  color: hsl(var(--twc-backgroundPrimary) / var(--twc-backgroundPrimary-opacity, var(--tw-text-opacity)));
}
.text-backgroundTertiary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-backgroundTertiary) / 1);
  color: hsl(var(--twc-backgroundTertiary) / var(--twc-backgroundTertiary-opacity, var(--tw-text-opacity)));
}
.text-brand-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-brand-primary) / 1);
  color: hsl(var(--twc-brand-primary) / var(--twc-brand-primary-opacity, var(--tw-text-opacity)));
}
.text-error {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-error) / 1);
  color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-text-opacity)));
}
.text-error-1-default {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-error-1-default) / 1);
  color: hsl(var(--twc-error-1-default) / var(--twc-error-1-default-opacity, var(--tw-text-opacity)));
}
.text-icon-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-icon-primary) / 1);
  color: hsl(var(--twc-icon-primary) / var(--twc-icon-primary-opacity, var(--tw-text-opacity)));
}
.text-icon-secondary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-icon-secondary) / 1);
  color: hsl(var(--twc-icon-secondary) / var(--twc-icon-secondary-opacity, var(--tw-text-opacity)));
}
.text-iconNormal {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-iconNormal) / 1);
  color: hsl(var(--twc-iconNormal) / var(--twc-iconNormal-opacity, var(--tw-text-opacity)));
}
.text-iconWarning {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-iconWarning) / 1);
  color: hsl(var(--twc-iconWarning) / var(--twc-iconWarning-opacity, var(--tw-text-opacity)));
}
.text-on-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-on-primary) / 1);
  color: hsl(var(--twc-on-primary) / var(--twc-on-primary-opacity, var(--tw-text-opacity)));
}
.text-other-Bronze {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-other-Bronze) / 1);
  color: hsl(var(--twc-other-Bronze) / var(--twc-other-Bronze-opacity, var(--tw-text-opacity)));
}
.text-other-Gold {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-other-Gold) / 1);
  color: hsl(var(--twc-other-Gold) / var(--twc-other-Gold-opacity, var(--tw-text-opacity)));
}
.text-other-Silver {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-other-Silver) / 1);
  color: hsl(var(--twc-other-Silver) / var(--twc-other-Silver-opacity, var(--tw-text-opacity)));
}
.text-primary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-primary) / 1);
  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));
}
.text-primary-default {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-primary-default) / 1);
  color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-text-opacity)));
}
.text-success {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-success) / 1);
  color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-text-opacity)));
}
.text-success-1-default {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-success-1-default) / 1);
  color: hsl(var(--twc-success-1-default) / var(--twc-success-1-default-opacity, var(--tw-text-opacity)));
}
.text-textBrand {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textBrand) / 1);
  color: hsl(var(--twc-textBrand) / var(--twc-textBrand-opacity, var(--tw-text-opacity)));
}
.text-textBuy {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textBuy) / 1);
  color: hsl(var(--twc-textBuy) / var(--twc-textBuy-opacity, var(--tw-text-opacity)));
}
.text-textDisabled {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textDisabled) / 1);
  color: hsl(var(--twc-textDisabled) / var(--twc-textDisabled-opacity, var(--tw-text-opacity)));
}
.text-textPrimary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textPrimary) / 1);
  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));
}
.text-textPrimaryStatic {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textPrimaryStatic) / 1);
  color: hsl(var(--twc-textPrimaryStatic) / var(--twc-textPrimaryStatic-opacity, var(--tw-text-opacity)));
}
.text-textSecondary {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textSecondary) / 1);
  color: hsl(var(--twc-textSecondary) / var(--twc-textSecondary-opacity, var(--tw-text-opacity)));
}
.text-textSell {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textSell) / 1);
  color: hsl(var(--twc-textSell) / var(--twc-textSell-opacity, var(--tw-text-opacity)));
}
.text-textThird {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textThird) / 1);
  color: hsl(var(--twc-textThird) / var(--twc-textThird-opacity, var(--tw-text-opacity)));
}
.text-transparent {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-transparent) / 1);
  color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, var(--tw-text-opacity)));
}
.text-utility-1-default {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-utility-1-default) / 1);
  color: hsl(var(--twc-utility-1-default) / var(--twc-utility-1-default-opacity, var(--tw-text-opacity)));
}
.text-utility-1-opacity-1 {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-utility-1-opacity-1) / 1);
  color: hsl(var(--twc-utility-1-opacity-1) / var(--twc-utility-1-opacity-1-opacity, var(--tw-text-opacity)));
}
.text-utility-1-opacity-2 {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-utility-1-opacity-2) / 1);
  color: hsl(var(--twc-utility-1-opacity-2) / var(--twc-utility-1-opacity-2-opacity, var(--tw-text-opacity)));
}
.text-utility-1-opacity-3 {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-utility-1-opacity-3) / 1);
  color: hsl(var(--twc-utility-1-opacity-3) / var(--twc-utility-1-opacity-3-opacity, var(--tw-text-opacity)));
}
.text-warning-1-default {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-warning-1-default) / 1);
  color: hsl(var(--twc-warning-1-default) / var(--twc-warning-1-default-opacity, var(--tw-text-opacity)));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgba(255, 255, 255, 1);
  color: rgba(255, 255, 255, var(--tw-text-opacity));
}
.underline {
  text-decoration-line: underline;
}
.line-through {
  text-decoration-line: line-through;
}
.decoration-strikethrough {
  text-decoration-color: hsl(var(--twc-decoration-strikethrough));
}
.caret-transparent {
  caret-color: hsl(var(--twc-transparent) / 1);
  caret-color: hsl(var(--twc-transparent) / var(--twc-transparent-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-40 {
  opacity: 0.4;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.shadow-xl {
  --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);
  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline-0 {
  outline-width: 0px;
}
.blur {
  --tw-blur: blur(8px);
  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.blur-md {
  --tw-blur: blur(12px);
  filter: blur(12px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-1 {
  --tw-backdrop-blur: blur(40px);
  backdrop-filter: blur(40px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  backdrop-filter: blur(4px) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-100 {
  transition-duration: 100ms;
}
.duration-150 {
  transition-duration: 150ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-in {
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.light,[data-theme="light"] {
  --twc-primary-default: 241.20000000000005 100% 50%;
  --twc-primary-hover: 241 100% 65.5%;
  --twc-primary-pressed: 241.20000000000005 100% 69.6%;
  --twc-primary-opacity-1: 241.20000000000005 100% 50%;
  --twc-primary-opacity-1-opacity: 0.16;
  --twc-primary-opacity-2: 241.20000000000005 100% 50%;
  --twc-primary-opacity-2-opacity: 0.24;
  --twc-primary-opacity-3: 241.20000000000005 100% 50%;
  --twc-primary-opacity-3-opacity: 0.32;
  --twc-on-primary: 0 0% 100%;
  --twc-on-primary-opacity-1: 0 0% 100%;
  --twc-on-primary-opacity-1-opacity: 0.40;
  --twc-background-1: 0 0% 100%;
  --twc-background-2: 240 7.1% 94.5%;
  --twc-utility-1-default: 0 0% 14.5%;
  --twc-utility-1-opacity-1: 0 0% 14.5%;
  --twc-utility-1-opacity-1-opacity: 0.72;
  --twc-utility-1-opacity-2: 0 0% 14.5%;
  --twc-utility-1-opacity-2-opacity: 0.48;
  --twc-utility-1-opacity-3: 0 0% 14.5%;
  --twc-utility-1-opacity-3-opacity: 0.24;
  --twc-utility-1-opacity-4: 0 0% 14.5%;
  --twc-utility-1-opacity-4-opacity: 0.12;
  --twc-utility-1-opacity-5: 0 0% 14.5%;
  --twc-utility-1-opacity-5-opacity: 0.08;
  --twc-utility-1-opacity-6: 0 0% 14.5%;
  --twc-utility-1-opacity-6-opacity: 0.04;
  --twc-success-1-default: 137.3 100% 27.8%;
  --twc-success-1-opacity-1: 137.3 100% 27.8%;
  --twc-success-1-opacity-1-opacity: 0.16;
  --twc-success-1-opacity-2: 137.3 100% 27.8%;
  --twc-success-1-opacity-2-opacity: 0.24;
  --twc-success-1-opacity-3: 137.3 100% 27.8%;
  --twc-success-1-opacity-3-opacity: 0.32;
  --twc-warning-1-default: 41 85.3% 42.7%;
  --twc-warning-1-opacity-1: 41 85.3% 42.7%;
  --twc-warning-1-opacity-1-opacity: 0.16;
  --twc-warning-1-opacity-2: 41 85.3% 42.7%;
  --twc-warning-1-opacity-2-opacity: 0.24;
  --twc-warning-1-opacity-3: 41 85.3% 42.7%;
  --twc-warning-1-opacity-3-opacity: 0.32;
  --twc-error-1-default: 0 81.3% 42%;
  --twc-error-1-hover: 0 63.9% 47.8%;
  --twc-error-1-pressed: 0 58.6% 53.5%;
  --twc-error-1-opacity-1: 0 81.3% 42%;
  --twc-error-1-opacity-1-opacity: 0.16;
  --twc-error-1-opacity-2: 0 81.3% 42%;
  --twc-error-1-opacity-2-opacity: 0.24;
  --twc-error-1-opacity-3: 0 81.3% 42%;
  --twc-error-1-opacity-3-opacity: 0.32;
  --twc-accent-pink: 300.70000000000005 100% 84.1%;
  --twc-accent-neon-green: 82.80000000000001 100% 50%;
  --twc-accent-yellow: 46.69999999999999 100% 56.7%;
  --twc-accent-blue: 194.60000000000002 100% 59%;
  --twc-light-gradient-start: 194.60000000000002 80.4% 46.1%;
  --twc-light-gradient-mid: 300.9 66.8% 61%;
  --twc-light-gradient-end: 41.10000000000002 100% 42.4%;
  --twc-transparent: 0 0% 0%;
  --twc-transparent-opacity: 0.00;
  --twc-overlay-100: 0 0% 0%;
  --twc-overlay-100-opacity: 0.40;
  --twc-overlay-50: 0 0% 0%;
  --twc-overlay-50-opacity: 0.16;
  --twc-tooltip: 0 0% 96.1%;
  --twc-alert-solid: 137.5 41.4% 88.6%;
  --twc-other-Bronze: 23.399999999999977 46.6% 34.5%;
  --twc-other-Silver: 300 2% 49.2%;
  --twc-other-Gold: 40.30000000000001 61.8% 47.3%;
  --twc-decoration-strikethrough: 240 0.5% 62.5%;
  --twc-brand-primary: 241.20000000000005 100% 50%;
  --twc-button-primary-hovered: 241 100% 65.5%;
  --twc-button-primary-pressed: 241.20000000000005 100% 69.6%;
  --twc-brand-background: 241.20000000000005 100% 50%;
  --twc-brand-background-opacity: 0.16;
  --twc-brand-on-primary: 0 0% 100%;
  --twc-background-primary: 0 0% 100%;
  --twc-background-secondary: 240 7.1% 94.5%;
  --twc-success-background: 137.5 88.8% 34.9%;
  --twc-success-background-opacity: 0.16;
  --twc-error-background: 0 81.3% 42%;
  --twc-error-background-opacity: 0.16;
  --twc-warning-background: 42.10000000000002 98.1% 41.6%;
  --twc-warning-background-opacity: 0.16;
  --twc-text-primary: 0 0% 14.5%;
  --twc-text-secondary: 0 0% 14.5%;
  --twc-text-secondary-opacity: 0.72;
  --twc-_app-colour-utility-utility-1---opacity-2: 0 0% 14.5%;
  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;
  --twc-background-tertiary: 0 0% 0%;
  --twc-background-tertiary-opacity: 0.08;
  --twc-success-main: 137.5 88.8% 34.9%;
  --twc-error-main: 0 81.3% 42%;
  --twc-warning-main: 42.10000000000002 98.1% 41.6%;
  --twc-accent-lavender: 267 100% 56.9%;
  --twc-accent-neon: 82.89999999999998 88.8% 49.2%;
  --twc-accent-sand: 46.80000000000001 88.1% 49.4%;
  --twc-accent-ocean: 194.60000000000002 93.4% 47.5%;
  --twc-_app-colour-utility-utility-1---opacity-4: 0 0% 14.5%;
  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;
  --twc-_app-colour-utility-utility-1---opacity-5: 0 0% 14.5%;
  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;
  --twc-other-skeleton: 0 0% 14.5%;
  --twc-other-skeleton-opacity: 0.04;
  --twc-_app-colour-primary-primary---opacity-2: 241.20000000000005 100% 50%;
  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;
  --twc-_app-colour-primary-primary---opacity-3: 241.20000000000005 100% 50%;
  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;
  --twc-error-border: 0 81.3% 42%;
  --twc-error-border-opacity: 0.24;
  --twc-error-disabled: 0 81.3% 42%;
  --twc-error-disabled-opacity: 0.32;
  --twc-error-hovered: 0 63.9% 47.8%;
  --twc-error-pressed: 0 58.6% 53.5%;
  --twc-success-border: 137.5 88.8% 34.9%;
  --twc-success-border-opacity: 0.24;
  --twc-success-disabled: 137.5 88.8% 34.9%;
  --twc-success-disabled-opacity: 0.32;
  --twc-warning-border: 42.10000000000002 98.1% 41.6%;
  --twc-warning-border-opacity: 0.24;
  --twc-warning-disabed: 42.10000000000002 98.1% 41.6%;
  --twc-warning-disabed-opacity: 0.32;
  --twc-brand-on-primary-disabled: 0 0% 100%;
  --twc-brand-on-primary-disabled-opacity: 0.80;
  --twc-accent-fuchsia: 305.4 100% 50%;
  --twc-accent-lavender-bg: 267 100% 56.9%;
  --twc-accent-lavender-bg-opacity: 0.24;
  --twc-accent-neon-bg: 82.89999999999998 88.8% 49.2%;
  --twc-accent-neon-bg-opacity: 0.24;
  --twc-accent-sand-bg: 46.80000000000001 88.1% 49.4%;
  --twc-accent-sand-bg-opacity: 0.24;
  --twc-accent-ocean-bg: 194.60000000000002 93.4% 47.5%;
  --twc-accent-ocean-bg-opacity: 0.24;
  --twc-accent-fuchsia-bg: 305.4 100% 50%;
  --twc-accent-fuchsia-bg-opacity: 0.24;
  --twc-icon-primary: 0 0% 14.5%;
  --twc-icon-secondary: 0 0% 14.5%;
  --twc-icon-secondary-opacity: 0.72;
  --twc-icon-disabled: 0 0% 14.5%;
  --twc-icon-disabled-opacity: 0.40;
  --twc-button-primary: 241.20000000000005 100% 50%;
  --twc-button-secondary: 240 7.1% 94.5%;
  --twc-button-secondary-hovered: 240 4% 85.3%;
  --twc-button-secondary-disabled: 240 16% 90.2%;
  --twc-button-secondary-disabled-opacity: 0.40;
  --twc-button-primary-disabled: 241.20000000000005 100% 50%;
  --twc-button-primary-disabled-opacity: 0.16;
  --twc-button-secondary-pressed: 240 8.8% 77.6%;
  --twc-line-divider: 0 0% 14.5%;
  --twc-line-divider-opacity: 0.08;
  --twc-line-border: 0 0% 14.5%;
  --twc-line-border-opacity: 0.08;
  --twc-input-border: 0 0% 14.5%;
  --twc-input-border-opacity: 0.18;
  --twc-input-search-bg: 0 0% 14.5%;
  --twc-input-search-bg-opacity: 0.08;
  --twc-text-disabled: 0 0% 14.5%;
  --twc-text-disabled-opacity: 0.40;
  --twc-button-icon-button: 241.20000000000005 100% 50%;
  --twc-button-icon-button-opacity: 0.12;
  --twc-action-hovered: 0 0% 0%;
  --twc-action-hovered-opacity: 0.06;
  --twc-action-pressed: 240 100% 14.3%;
  --twc-action-pressed-opacity: 0.12;
  --twc-action-focused: 241.20000000000005 100% 50%;
  --twc-action-focused-opacity: 0.24;
  --twc-background-flow: 0 0% 92.9%;
  --twc-keyboard-ios-bg: 220 10.6% 83.3%;
  --twc-keyboard-key-light: 0 0% 100%;
  --twc-keyboard-action: 211.29999999999995 100% 50%;
  --twc-keyboard-key-dark: 218.79999999999995 11.1% 70%;
  --twc-keyboard-on-key: 0 0% 19.2%;
  --twc-button-icon-button-disabled: 241.20000000000005 100% 50%;
  --twc-button-icon-button-disabled-opacity: 0.04;
  --twc-background-actionsheet-bg: 0 0% 0%;
  --twc-background-actionsheet-bg-opacity: 0.20;
  --twc-background-actionsheet: 0 0% 100%;
  --twc-background-modal: 0 0% 91.8%;
  --twc-browser-primary-bg: 0 0% 100%;
  --twc-browser-secondary-bg: 0 0% 14.5%;
  --twc-browser-secondary-bg-opacity: 0.08;
  --twc-accent-orange-bg: 37.19999999999999 92% 48.8%;
  --twc-accent-orange-bg-opacity: 0.24;
  --twc-accent-orange: 37.19999999999999 92% 48.8%;
  --twc-other-nologo: 267 100% 56.9%;
  --twc-background-tab: 0 0% 100%;
  --twc-primary: 241.20000000000005 100% 50%;
  --twc-primaryHover: 241 100% 65.5%;
  --twc-primaryPressed: 241.20000000000005 100% 69.6%;
  --twc-primaryInverse: 241.20000000000005 100% 50%;
  --twc-primaryInverse-opacity: 0.16;
  --twc-textPrimary: 0 0% 14.5%;
  --twc-textPrimaryStatic: 0 0% 14.5%;
  --twc-textSecondary: 0 0% 14.5%;
  --twc-textSecondary-opacity: 0.72;
  --twc-textThird: 0 0% 14.5%;
  --twc-textThird-opacity: 0.48;
  --twc-textBuy: 137.3 100% 27.8%;
  --twc-textSell: 0 81.3% 42%;
  --twc-textDisabled: 0 0% 14.5%;
  --twc-textDisabled-opacity: 0.24;
  --twc-textBrand: 41 85.3% 42.7%;
  --twc-bg3: 240 7.1% 94.5%;
  --twc-backgroundPrimary: 0 0% 100%;
  --twc-backgroundSecondary: 240 7.1% 94.5%;
  --twc-backgroundTertiary: 0 0% 14.5%;
  --twc-backgroundTertiary-opacity: 0.12;
  --twc-successBg: 137.3 100% 27.8%;
  --twc-successBg-opacity: 0.16;
  --twc-errorBg: 0 81.3% 42%;
  --twc-errorBg-opacity: 0.16;
  --twc-depthBuyBg: 241.20000000000005 100% 50%;
  --twc-depthBuyBg-opacity: 0.16;
  --twc-iconNormal: 0 0% 14.5%;
  --twc-iconNormal-opacity: 0.72;
  --twc-iconSuccess: 137.3 100% 27.8%;
  --twc-iconWarning: 41 85.3% 42.7%;
  --twc-error: 0 81.3% 42%;
  --twc-warning: 41 85.3% 42.7%;
  --twc-warning-opacity: 0.16;
  --twc-info: 241.20000000000005 100% 50%;
  --twc-info-opacity: 0.16;
  --twc-success: 137.5 88.8% 34.9%;
  --twc-line: 0 0% 14.5%;
  --twc-line-opacity: 0.08;
  --twc-startGradient: 241.20000000000005 100% 50%;
  --twc-finishGradient: 0 0% 14.5%;
  --twc-finishGradient-opacity: 0.48;
  --twc-lightGradientStart: 194.60000000000002 80.4% 46.1%;
  --twc-lightGradientMid: 300.9 66.8% 61%;
  --twc-lightGradientEnd: 41.10000000000002 100% 42.4%;
}
.dark,[data-theme="dark"] {
  --twc-primary-default: 143.89999999999998 100% 64.1%;
  --twc-primary-hover: 144 100% 78.4%;
  --twc-primary-pressed: 143.89999999999998 100% 82.7%;
  --twc-primary-opacity-1: 143.89999999999998 100% 64.1%;
  --twc-primary-opacity-1-opacity: 0.16;
  --twc-primary-opacity-2: 143.89999999999998 100% 64.1%;
  --twc-primary-opacity-2-opacity: 0.24;
  --twc-primary-opacity-3: 143.89999999999998 100% 64.1%;
  --twc-primary-opacity-3-opacity: 0.32;
  --twc-on-primary: 240 1.8% 10.8%;
  --twc-on-primary-opacity-1: 240 1.8% 10.8%;
  --twc-on-primary-opacity-1-opacity: 0.40;
  --twc-background-1: 240 1.8% 10.8%;
  --twc-background-2: 240 2.7% 14.5%;
  --twc-utility-1-default: 216 13.5% 92.7%;
  --twc-utility-1-opacity-1: 216 13.5% 92.7%;
  --twc-utility-1-opacity-1-opacity: 0.72;
  --twc-utility-1-opacity-2: 216 13.5% 92.7%;
  --twc-utility-1-opacity-2-opacity: 0.48;
  --twc-utility-1-opacity-3: 216 13.5% 92.7%;
  --twc-utility-1-opacity-3-opacity: 0.24;
  --twc-utility-1-opacity-4: 216 13.5% 92.7%;
  --twc-utility-1-opacity-4-opacity: 0.12;
  --twc-utility-1-opacity-5: 216 13.5% 92.7%;
  --twc-utility-1-opacity-5-opacity: 0.08;
  --twc-utility-1-opacity-6: 216 13.5% 92.7%;
  --twc-utility-1-opacity-6-opacity: 0.04;
  --twc-success-1-default: 154.89999999999998 61.1% 41.4%;
  --twc-success-1-opacity-1: 154.89999999999998 61.1% 41.4%;
  --twc-success-1-opacity-1-opacity: 0.16;
  --twc-success-1-opacity-2: 154.89999999999998 61.1% 41.4%;
  --twc-success-1-opacity-2-opacity: 0.24;
  --twc-success-1-opacity-3: 154.89999999999998 61.1% 41.4%;
  --twc-success-1-opacity-3-opacity: 0.32;
  --twc-warning-1-default: 42 84.9% 53.1%;
  --twc-warning-1-opacity-1: 42 84.9% 53.1%;
  --twc-warning-1-opacity-1-opacity: 0.16;
  --twc-warning-1-opacity-2: 42 84.9% 53.1%;
  --twc-warning-1-opacity-2-opacity: 0.24;
  --twc-warning-1-opacity-3: 42 84.9% 53.1%;
  --twc-warning-1-opacity-3-opacity: 0.32;
  --twc-error-1-default: 0 100% 68%;
  --twc-error-1-hover: 0 100% 71.2%;
  --twc-error-1-pressed: 0 100% 74.5%;
  --twc-error-1-opacity-1: 0 100% 68%;
  --twc-error-1-opacity-1-opacity: 0.16;
  --twc-error-1-opacity-2: 0 100% 68%;
  --twc-error-1-opacity-2-opacity: 0.24;
  --twc-error-1-opacity-3: 0 100% 68%;
  --twc-error-1-opacity-3-opacity: 0.32;
  --twc-accent-pink: 300.70000000000005 100% 84.1%;
  --twc-accent-neon-green: 82.80000000000001 100% 50%;
  --twc-accent-yellow: 46.69999999999999 100% 56.7%;
  --twc-accent-blue: 194.60000000000002 100% 59%;
  --twc-light-gradient-start: 194.60000000000002 100% 59%;
  --twc-light-gradient-mid: 300.70000000000005 100% 84.1%;
  --twc-light-gradient-end: 46.69999999999999 100% 56.7%;
  --twc-transparent: 0 0% 0%;
  --twc-transparent-opacity: 0.00;
  --twc-overlay-100: 0 0% 37.6%;
  --twc-overlay-100-opacity: 0.40;
  --twc-overlay-50: 0 0% 37.6%;
  --twc-overlay-50-opacity: 0.16;
  --twc-tooltip: 240 1% 20.6%;
  --twc-alert-solid: 157.10000000000002 26.6% 15.5%;
  --twc-other-Bronze: 39.80000000000001 32% 49%;
  --twc-other-Silver: 22.5 10.8% 85.5%;
  --twc-other-Gold: 45.89999999999998 96.4% 56.7%;
  --twc-decoration-strikethrough: 225 1.7% 47.5%;
  --twc-brand-primary: 143.89999999999998 100% 64.1%;
  --twc-button-primary-hovered: 144 100% 78.4%;
  --twc-button-primary-pressed: 143.89999999999998 100% 82.7%;
  --twc-brand-background: 143.89999999999998 100% 64.1%;
  --twc-brand-background-opacity: 0.16;
  --twc-brand-on-primary: 240 1.8% 10.8%;
  --twc-background-primary: 140 7.7% 7.6%;
  --twc-background-secondary: 240 3.4% 17.5%;
  --twc-success-background: 154.79999999999995 68.9% 44.1%;
  --twc-success-background-opacity: 0.16;
  --twc-error-background: 0 100% 68%;
  --twc-error-background-opacity: 0.16;
  --twc-warning-background: 42 84.9% 53.1%;
  --twc-warning-background-opacity: 0.16;
  --twc-text-primary: 216 13.5% 92.7%;
  --twc-text-secondary: 216 13.5% 92.7%;
  --twc-text-secondary-opacity: 0.72;
  --twc-_app-colour-utility-utility-1---opacity-2: 216 13.5% 92.7%;
  --twc-_app-colour-utility-utility-1---opacity-2-opacity: 0.48;
  --twc-background-tertiary: 0 0% 100%;
  --twc-background-tertiary-opacity: 0.12;
  --twc-success-main: 154.79999999999995 68.9% 44.1%;
  --twc-error-main: 0 100% 68%;
  --twc-warning-main: 42 84.9% 53.1%;
  --twc-accent-lavender: 266.9 100% 75.1%;
  --twc-accent-neon: 82.80000000000001 100% 50%;
  --twc-accent-sand: 46.69999999999999 100% 56.7%;
  --twc-accent-ocean: 194.60000000000002 100% 59%;
  --twc-_app-colour-utility-utility-1---opacity-4: 216 13.5% 92.7%;
  --twc-_app-colour-utility-utility-1---opacity-4-opacity: 0.12;
  --twc-_app-colour-utility-utility-1---opacity-5: 216 13.5% 92.7%;
  --twc-_app-colour-utility-utility-1---opacity-5-opacity: 0.08;
  --twc-other-skeleton: 216 13.5% 92.7%;
  --twc-other-skeleton-opacity: 0.04;
  --twc-_app-colour-primary-primary---opacity-2: 143.89999999999998 100% 64.1%;
  --twc-_app-colour-primary-primary---opacity-2-opacity: 0.24;
  --twc-_app-colour-primary-primary---opacity-3: 143.89999999999998 100% 64.1%;
  --twc-_app-colour-primary-primary---opacity-3-opacity: 0.32;
  --twc-error-border: 0 100% 68%;
  --twc-error-border-opacity: 0.24;
  --twc-error-disabled: 0 100% 68%;
  --twc-error-disabled-opacity: 0.32;
  --twc-error-hovered: 0 100% 71.2%;
  --twc-error-pressed: 0 100% 74.5%;
  --twc-success-border: 154.79999999999995 68.9% 44.1%;
  --twc-success-border-opacity: 0.24;
  --twc-success-disabled: 154.79999999999995 68.9% 44.1%;
  --twc-success-disabled-opacity: 0.32;
  --twc-warning-border: 42 84.9% 53.1%;
  --twc-warning-border-opacity: 0.24;
  --twc-warning-disabled: 42 84.9% 53.1%;
  --twc-warning-disabled-opacity: 0.32;
  --twc-brand-on-primary-disabled: 240 1.8% 10.8%;
  --twc-brand-on-primary-disabled-opacity: 0.80;
  --twc-accent-fuchsia: 305.4 100% 50%;
  --twc-accent-lavender-bg: 266.9 100% 75.1%;
  --twc-accent-lavender-bg-opacity: 0.32;
  --twc-accent-neon-bg: 82.80000000000001 100% 50%;
  --twc-accent-neon-bg-opacity: 0.32;
  --twc-accent-sand-bg: 46.69999999999999 100% 56.7%;
  --twc-accent-sand-bg-opacity: 0.32;
  --twc-accent-ocean-bg: 194.60000000000002 100% 59%;
  --twc-accent-ocean-bg-opacity: 0.32;
  --twc-accent-fuchsia-bg: 305.4 100% 50%;
  --twc-accent-fuchsia-bg-opacity: 0.32;
  --twc-icon-primary: 216 13.5% 92.7%;
  --twc-icon-secondary: 216 13.5% 92.7%;
  --twc-icon-secondary-opacity: 0.72;
  --twc-icon-disabled: 216 13.5% 92.7%;
  --twc-icon-disabled-opacity: 0.40;
  --twc-button-primary: 143.89999999999998 100% 64.1%;
  --twc-button-secondary: 240 3.4% 17.5%;
  --twc-button-secondary-hovered: 140 2.1% 27.6%;
  --twc-button-secondary-disabled: 140 3.4% 17.5%;
  --twc-button-secondary-disabled-opacity: 0.40;
  --twc-button-primary-disabled: 143.89999999999998 100% 64.1%;
  --twc-button-primary-disabled-opacity: 0.32;
  --twc-button-secondary-pressed: 150 2.2% 36.5%;
  --twc-line-divider: 216 13.5% 92.7%;
  --twc-line-divider-opacity: 0.12;
  --twc-line-border: 216 13.5% 92.7%;
  --twc-line-border-opacity: 0.12;
  --twc-input-border: 216 13.5% 92.7%;
  --twc-input-border-opacity: 0.24;
  --twc-input-search-bg: 216 13.5% 92.7%;
  --twc-input-search-bg-opacity: 0.12;
  --twc-text-disabled: 216 13.5% 92.7%;
  --twc-text-disabled-opacity: 0.40;
  --twc-button-icon-button: 143.89999999999998 100% 64.1%;
  --twc-button-icon-button-opacity: 0.16;
  --twc-action-hovered: 0 0% 100%;
  --twc-action-hovered-opacity: 0.08;
  --twc-action-pressed: 0 0% 100%;
  --twc-action-pressed-opacity: 0.12;
  --twc-action-focused: 143.89999999999998 100% 64.1%;
  --twc-action-focused-opacity: 0.24;
  --twc-background-flow: 0 0% 28.2%;
  --twc-keyboard-ios-bg: 0 0% 19.2%;
  --twc-keyboard-key-light: 0 0% 43.5%;
  --twc-keyboard-action: 211.29999999999995 100% 50%;
  --twc-keyboard-key-dark: 0 0% 29.4%;
  --twc-keyboard-on-key: 0 0% 100%;
  --twc-button-icon-button-disabled: 143.89999999999998 100% 64.1%;
  --twc-button-icon-button-disabled-opacity: 0.08;
  --twc-background-actionsheet-bg: 0 0% 0%;
  --twc-background-actionsheet-bg-opacity: 0.40;
  --twc-background-actionsheet: 0 0% 12.2%;
  --twc-background-modal: 0 0% 14.5%;
  --twc-browser-primary-bg: 0 0% 23.5%;
  --twc-browser-secondary-bg: 0 0% 15.7%;
  --twc-accent-orange-bg: 37.10000000000002 100% 59.4%;
  --twc-accent-orange-bg-opacity: 0.32;
  --twc-accent-orange: 37.10000000000002 100% 59.4%;
  --twc-other-nologo: 266.9 100% 75.1%;
  --twc-background-tab: 0 0% 100%;
  --twc-background-tab-opacity: 0.16;
  --twc-primary: 143.89999999999998 100% 64.1%;
  --twc-primaryHover: 144 100% 78.4%;
  --twc-primaryPressed: 143.89999999999998 100% 82.7%;
  --twc-primaryInverse: 143.89999999999998 100% 64.1%;
  --twc-primaryInverse-opacity: 0.16;
  --twc-textPrimary: 216 13.5% 92.7%;
  --twc-textPrimaryStatic: 0 0% 14.5%;
  --twc-textSecondary: 216 13.5% 92.7%;
  --twc-textSecondary-opacity: 0.72;
  --twc-textThird: 216 13.5% 92.7%;
  --twc-textThird-opacity: 0.48;
  --twc-textBuy: 154.89999999999998 61.1% 41.4%;
  --twc-textSell: 0 100% 68%;
  --twc-textDisabled: 216 13.5% 92.7%;
  --twc-textDisabled-opacity: 0.24;
  --twc-textBrand: 42 84.9% 53.1%;
  --twc-bg3: 240 2.7% 14.5%;
  --twc-bg4: 216 13.5% 92.7%;
  --twc-bg4-opacity: 0.48;
  --twc-backgroundPrimary: 240 1.8% 10.8%;
  --twc-backgroundSecondary: 240 2.7% 14.5%;
  --twc-backgroundTertiary: 216 13.5% 92.7%;
  --twc-backgroundTertiary-opacity: 0.12;
  --twc-successBg: 154.89999999999998 61.1% 41.4%;
  --twc-successBg-opacity: 0.16;
  --twc-errorBg: 0 100% 68%;
  --twc-errorBg-opacity: 0.16;
  --twc-depthBuyBg: 143.89999999999998 100% 64.1%;
  --twc-depthBuyBg-opacity: 0.16;
  --twc-iconNormal: 216 13.5% 92.7%;
  --twc-iconNormal-opacity: 0.72;
  --twc-iconSuccess: 154.89999999999998 61.1% 41.4%;
  --twc-iconWarning: 42 84.9% 53.1%;
  --twc-success: 154.79999999999995 68.9% 44.1%;
  --twc-error: 0 100% 68%;
  --twc-warning: 42 84.9% 53.1%;
  --twc-warning-opacity: 0.16;
  --twc-info: 143.89999999999998 100% 64.1%;
  --twc-info-opacity: 0.16;
  --twc-line: 216 13.5% 92.7%;
  --twc-line-opacity: 0.08;
  --twc-startGradient: 143.89999999999998 100% 64.1%;
  --twc-finishGradient: 216 13.5% 92.7%;
  --twc-finishGradient-opacity: 0.48;
  --twc-lightGradientStart: 194.60000000000002 100% 59%;
  --twc-lightGradientMid: 300.70000000000005 100% 84.1%;
  --twc-lightGradientEnd: 46.69999999999999 100% 56.7%;
}
.scrollbar::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
  border-radius: var(--scrollbar-track-radius);
}
.scrollbar::-webkit-scrollbar-track:hover {
  background-color: var(--scrollbar-track-hover, var(--scrollbar-track));
}
.scrollbar::-webkit-scrollbar-track:active {
  background-color: var(--scrollbar-track-active, var(--scrollbar-track-hover, var(--scrollbar-track)));
}
.scrollbar::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border-radius: var(--scrollbar-thumb-radius);
}
.scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover, var(--scrollbar-thumb));
}
.scrollbar::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active, var(--scrollbar-thumb-hover, var(--scrollbar-thumb)));
}
.scrollbar::-webkit-scrollbar-corner {
  background-color: var(--scrollbar-corner);
  border-radius: var(--scrollbar-corner-radius);
}
.scrollbar::-webkit-scrollbar-corner:hover {
  background-color: var(--scrollbar-corner-hover, var(--scrollbar-corner));
}
.scrollbar::-webkit-scrollbar-corner:active {
  background-color: var(--scrollbar-corner-active, var(--scrollbar-corner-hover, var(--scrollbar-corner)));
}
.scrollbar {
  scrollbar-width: auto;
  scrollbar-color: initial initial;
  scrollbar-color: var(--scrollbar-thumb, initial) var(--scrollbar-track, initial);
}
.scrollbar::-webkit-scrollbar {
  display: block;
  width: 16px;
  width: var(--scrollbar-width, 16px);
  height: 16px;
  height: var(--scrollbar-height, 16px);
}
.word-break {
  word-break: break-word;
}
.text-gradient-light {
  background: linear-gradient(110deg, hsl(var(--twc-lightGradientStart)) 0%, hsl(var(--twc-lightGradientMid)) 48%, hsl(var(--twc-lightGradientEnd)) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.\\*\\:-mb-\\[18px\\] > * {
  margin-bottom: -18px;
}
.\\*\\:whitespace-nowrap > * {
  white-space: nowrap;
}
.placeholder\\:text-text-primary::-moz-placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-text-primary) / 1);
  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));
}
.placeholder\\:text-text-primary::placeholder {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-text-primary) / 1);
  color: hsl(var(--twc-text-primary) / var(--twc-text-primary-opacity, var(--tw-text-opacity)));
}
.last-of-type\\:\\!mb-5:last-of-type {
  margin-bottom: 1.25rem !important;
}
.empty\\:hidden:empty {
  display: none;
}
.data-\\[hidden\\=true\\]\\:hidden[data-hidden=true] {
  display: none;
}
.data-\\[selected\\=true\\]\\:border-primary-default[data-selected=true] {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.data-\\[selected\\=\\'true\\'\\]\\:bg-bg3[data-selected='true'] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-bg3) / 1);
  background-color: hsl(var(--twc-bg3) / var(--twc-bg3-opacity, var(--tw-bg-opacity)));
}
.data-\\[selected\\=\\'true\\'\\]\\:bg-primary[data-selected='true'] {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary) / 1);
  background-color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-bg-opacity)));
}
.hover\\:-translate-x-0:hover {
  --tw-translate-x: -0px;
  transform: translate(-0px, var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-\\[1\\.01\\]:hover {
  --tw-scale-x: 1.01;
  --tw-scale-y: 1.01;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.01) scaleY(1.01);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:scale-\\[1\\.02\\]:hover {
  --tw-scale-x: 1.02;
  --tw-scale-y: 1.02;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.02) scaleY(1.02);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.hover\\:cursor-pointer:hover {
  cursor: pointer;
}
.hover\\:bg-button-primary-hovered:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-primary-hovered) / 1);
  background-color: hsl(var(--twc-button-primary-hovered) / var(--twc-button-primary-hovered-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-button-secondary-hovered:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-secondary-hovered) / 1);
  background-color: hsl(var(--twc-button-secondary-hovered) / var(--twc-button-secondary-hovered-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-error-1-hover:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-hover) / 1);
  background-color: hsl(var(--twc-error-1-hover) / var(--twc-error-1-hover-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-error-1-opacity-2:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-opacity-2) / 1);
  background-color: hsl(var(--twc-error-1-opacity-2) / var(--twc-error-1-opacity-2-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-line:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-line) / 1);
  background-color: hsl(var(--twc-line) / var(--twc-line-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-primary-hover:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-hover) / 1);
  background-color: hsl(var(--twc-primary-hover) / var(--twc-primary-hover-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-primary-opacity-2:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-opacity-2) / 1);
  background-color: hsl(var(--twc-primary-opacity-2) / var(--twc-primary-opacity-2-opacity, var(--tw-bg-opacity)));
}
.hover\\:bg-utility-1-opacity-5:hover {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-5) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-5) / var(--twc-utility-1-opacity-5-opacity, var(--tw-bg-opacity)));
}
.hover\\:text-blue-600:hover {
  --tw-text-opacity: 1;
  color: rgba(37, 99, 235, 1);
  color: rgba(37, 99, 235, var(--tw-text-opacity));
}
.hover\\:text-primary:hover {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-primary) / 1);
  color: hsl(var(--twc-primary) / var(--twc-primary-opacity, var(--tw-text-opacity)));
}
.hover\\:text-textPrimary:hover {
  --tw-text-opacity: 1;
  color: hsl(var(--twc-textPrimary) / 1);
  color: hsl(var(--twc-textPrimary) / var(--twc-textPrimary-opacity, var(--tw-text-opacity)));
}
.hover\\:opacity-80:hover {
  opacity: 0.8;
}
.focus\\:border-error:focus {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-error) / 1);
  border-color: hsl(var(--twc-error) / var(--twc-error-opacity, var(--tw-border-opacity)));
}
.focus\\:border-primary-default:focus {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-primary-default) / 1);
  border-color: hsl(var(--twc-primary-default) / var(--twc-primary-default-opacity, var(--tw-border-opacity)));
}
.focus\\:border-success:focus {
  --tw-border-opacity: 1;
  border-color: hsl(var(--twc-success) / 1);
  border-color: hsl(var(--twc-success) / var(--twc-success-opacity, var(--tw-border-opacity)));
}
.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.active\\:scale-\\[0\\.9\\]:active {
  --tw-scale-x: 0.9;
  --tw-scale-y: 0.9;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(0.9) scaleY(0.9);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.active\\:scale-\\[1\\.03\\]:active {
  --tw-scale-x: 1.03;
  --tw-scale-y: 1.03;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(1.03) scaleY(1.03);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.active\\:bg-button-primary-pressed:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-primary-pressed) / 1);
  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-button-secondary-pressed:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-secondary-pressed) / 1);
  background-color: hsl(var(--twc-button-secondary-pressed) / var(--twc-button-secondary-pressed-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-error-1-opacity-3:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-opacity-3) / 1);
  background-color: hsl(var(--twc-error-1-opacity-3) / var(--twc-error-1-opacity-3-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-error-1-pressed:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-pressed) / 1);
  background-color: hsl(var(--twc-error-1-pressed) / var(--twc-error-1-pressed-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-primary-opacity-3:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-opacity-3) / 1);
  background-color: hsl(var(--twc-primary-opacity-3) / var(--twc-primary-opacity-3-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-primary-pressed:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-pressed) / 1);
  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));
}
.active\\:bg-utility-1-opacity-4:active {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-utility-1-opacity-4) / 1);
  background-color: hsl(var(--twc-utility-1-opacity-4) / var(--twc-utility-1-opacity-4-opacity, var(--tw-bg-opacity)));
}
.disabled\\:bg-button-primary-pressed:disabled {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-primary-pressed) / 1);
  background-color: hsl(var(--twc-button-primary-pressed) / var(--twc-button-primary-pressed-opacity, var(--tw-bg-opacity)));
}
.disabled\\:bg-button-secondary-disabled:disabled {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-button-secondary-disabled) / 1);
  background-color: hsl(var(--twc-button-secondary-disabled) / var(--twc-button-secondary-disabled-opacity, var(--tw-bg-opacity)));
}
.disabled\\:bg-error-1-opacity-1:disabled {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-error-1-opacity-1) / 1);
  background-color: hsl(var(--twc-error-1-opacity-1) / var(--twc-error-1-opacity-1-opacity, var(--tw-bg-opacity)));
}
.disabled\\:bg-primary-opacity-1:disabled {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-opacity-1) / 1);
  background-color: hsl(var(--twc-primary-opacity-1) / var(--twc-primary-opacity-1-opacity, var(--tw-bg-opacity)));
}
.disabled\\:bg-primary-pressed:disabled {
  --tw-bg-opacity: 1;
  background-color: hsl(var(--twc-primary-pressed) / 1);
  background-color: hsl(var(--twc-primary-pressed) / var(--twc-primary-pressed-opacity, var(--tw-bg-opacity)));
}
@media (min-width: 768px) {

  .md\\:h-\\[7rem\\] {
    height: 7rem;
  }

  .md\\:w-\\[7rem\\] {
    width: 7rem;
  }

  .md\\:max-w-\\[438px\\] {
    max-width: 438px;
  }

  .md\\:max-w-\\[962px\\] {
    max-width: 962px;
  }
}
@media (max-width: 378px) {

  .xs-max\\:px-1 {
    padding-left: 4px;
    padding-right: 4px;
  }
}
@media (max-width: 500px) {

  .sm-max\\:\\!w-full {
    width: 100% !important;
  }
}
@media (max-width: 925px) {

  .lg-max\\:mb-6 {
    margin-bottom: 24px;
  }

  .lg-max\\:h-\\[180px\\] {
    height: 180px;
  }

  .lg-max\\:h-\\[709px\\] {
    height: 709px;
  }

  .lg-max\\:w-\\[488px\\] {
    width: 488px;
  }

  .lg-max\\:w-full {
    width: 100%;
  }

  .lg-max\\:w-min {
    width: -moz-min-content;
    width: min-content;
  }

  .lg-max\\:flex-col {
    flex-direction: column;
  }
}
@media (min-width: 926px) {

  .lg-min\\:h-\\[312px\\] {
    height: 312px;
  }

  .lg-min\\:h-\\[320px\\] {
    height: 320px;
  }

  .lg-min\\:h-\\[497px\\] {
    height: 497px;
  }

  .lg-min\\:h-\\[540px\\] {
    height: 540px;
  }

  .lg-min\\:w-\\[342px\\] {
    width: 342px;
  }

  .lg-min\\:w-\\[925px\\] {
    width: 925px;
  }

  .lg-min\\:max-w-\\[925px\\] {
    max-width: 925px;
  }
}
@media (prefers-color-scheme: dark) {

  .dark\\:text-black {
    --tw-text-opacity: 1;
    color: rgba(0, 0, 0, 1);
    color: rgba(0, 0, 0, var(--tw-text-opacity));
  }
}
.\\[\\&\\>\\*\\:last-child\\]\\:ml-auto>*:last-child {
  margin-left: auto;
}
.\\[\\&\\>\\*\\:not\\(\\:first-child\\)\\]\\:ml-4>*:not(:first-child) {
  margin-left: 16px;
}
.\\[\\&_\\*\\]\\:invisible * {
  visibility: hidden;
}
`,""]);const C=E}),83397:((m,g,o)=>{o.d(g,{p:()=>y});var n=o(38208);function y(){return n.w.find(u=>u===navigator.language||u.split("-")[0]===navigator.language.split("-")[0])||"en"}}),84989:((m,g,o)=>{m.exports=o.p+"6563999da1964c37c508.otf"}),88407:((m,g,o)=>{o.d(g,{L:()=>c});var n=o(98649),y=o(80577),u=o(6517),i=(d,s,p)=>new Promise((x,v)=>{var b=e=>{try{w(p.next(e))}catch(t){v(t)}},h=e=>{try{w(p.throw(e))}catch(t){v(t)}},w=e=>e.done?x(e.value):Promise.resolve(e.value).then(b,h);w((p=p.apply(d,s)).next())});function c(d){return i(this,null,function*(){if(d.checking)return;d.checking=!0,(yield(0,y.r)(d))===n.k.IDLE?d.missCount++:d.statusProvider.emit(n.V.EVENT,n.k.READY),d.missCount>=d.MAX_MISS_RECONNECT&&(d.statusProvider.emit(n.V.EVENT,n.k.LOADING),d.portStream=new u.Dz(d.portName),d.statusProvider.emit(n.V.REPLACED,n.k.LOADING),d.missCount=0),d.checking=!1,setTimeout(()=>c(d),d.THRESHOLD)})}}),89419:((m,g,o)=>{o.d(g,{T:()=>u});var n=o(20038);const y={prepareSend:null,prepareSendResolvedAddress:null,prepareSendResolvingAddress:!1,earn:null,stakeDetails:null,navigation:null,stake:null,validatorSelector:null,stakeDetailsError:null,gasStatus:null,gasStation:null,homeEarnWidget:null},u=(0,n.Z0)({name:"sdkFeatureSlice",initialState:y,reducers:{setPrepareSendState(i,c){i.prepareSend=c.payload.data},removePrepareSendState(i){i.prepareSend=null,i.prepareSendResolvedAddress=null,i.prepareSendResolvingAddress=!1},setPrepareSendResolvedAddress(i,c){i.prepareSendResolvedAddress=c.payload,i.prepareSendResolvingAddress=!1},clearPrepareSendResolvedAddress(i){i.prepareSendResolvedAddress=null,i.prepareSendResolvingAddress=!1},clearPrepareSendAddressError(i){i.prepareSend&&(i.prepareSend.addressError=null)},setPrepareSendResolvingAddress(i,c){i.prepareSendResolvingAddress=c.payload},setEarnState(i,c){i.earn=c.payload},removeEarnState(i){i.earn=null},setStakeDetailsState(i,c){i.stakeDetails=c.payload},removeStakeDetailsState(i){i.stakeDetails=null},setStakeDetailsError(i,c){i.stakeDetailsError=c.payload},removeStakeDetailsError(i){i.stakeDetailsError=null},setStakeState(i,c){i.stake=c.payload},removeStakeState(i){i.stake=null},setNavigation(i,c){i.navigation=c.payload},clearNavigation(i){i.navigation=null},setValidatorSelectorState(i,c){i.validatorSelector=c.payload},removeValidatorSelectorState(i){i.validatorSelector=null},setGasStatusState(i,c){i.gasStatus=c.payload},removeGasStatusState(i){i.gasStatus=null},setGasStationState(i,c){i.gasStation=c.payload},removeGasStationState(i){i.gasStation=null},setHomeEarnWidgetState(i,c){i.homeEarnWidget=c.payload},removeHomeEarnWidgetState(i){i.homeEarnWidget=null}}})}),90658:((m,g,o)=>{o.d(g,{A:()=>d,B:()=>c});var n;const u=typeof chrome!="object"||!((n=chrome==null?void 0:chrome.runtime)!=null&&n.id)?{}:o(96815),i=u;i.action=u.action||u.browserAction;const c=()=>{var s;return!!((s=chrome==null?void 0:chrome.storage)!=null&&s.session)},d=i}),93726:((m,g,o)=>{o.d(g,{X:()=>n});const n={LIGHT:"light",DARK:"dark",SYSTEM:"system"}}),94023:((m,g,o)=>{m.exports=o.p+"dd9993384c19c3bc71d3.ttf"}),94323:((m,g,o)=>{o.d(g,{A:()=>u});var n=o(24439);const u={SITE_DISCONNECTED:(0,n.w3)("SITE_DISCONNECTED"),CHAIN_CHANGED:(0,n.w3)("CHAIN_CHANGED"),ACCOUNT_CHANGED:(0,n.w3)("ACCOUNT_CHANGED"),DEFAULT_WALLET_CHANGED:(0,n.w3)("DEFAULT_WALLET_CHANGED"),BNB_STAKING_CHAIN_CHANGED:(0,n.w3)("BNB_STAKING_CHAIN_CHANGED"),ONE_TAP_CLOSED:(0,n.w3)("OneTapClosed"),ONE_TAP_WAGMI:(0,n.w3)("OneTapWagmi"),WALLET_CONNECTED_ON_ORIGIN:(0,n.w3)("WalletConnectedOnOrigin")}}),94566:((m,g,o)=>{var n=o(14644),y=o(61855),u=o(58464),i=o(1824),c=o(28398),d=o(35328),s=o(42836),p=o(17855),x=o(31357),v=o(52856),b=o(48305),h=o(81481),w=o(64001),e=o(4387),t=o(89419),a=o(12464);const r=(0,n.HY)({migrations:h.K.reducer,app:y.A.reducer,dapps:d.b.reducer,wallet:b.u.reducer,asset:u.H.reducer,nft:i.p.reducer,fiat:s.Z.reducer,notification:p.y.reducer,settings:x.s.reducer,tx:v.B.reducer,blockchains:c.A.reducer,staking:w.m.reducer,swap:e.W.reducer,sdkFeatures:t.T.reducer,approvals:a.L.reducer}),l=(f,_)=>(_.type==="RESET"&&(f=void 0),_.type==="MIGRATE"&&(f=_.payload),r(f,_))}),98649:((m,g,o)=>{o.d(g,{V:()=>i,k:()=>u});var n=o(37007),y=o.n(n),u=(c=>(c.READY="READY",c.LOADING="LOADING",c.IDLE="IDLE",c.RESTARTING="RESTARTING",c))(u||{});class i extends y(){constructor(){super(...arguments),this.status="LOADING"}emit(d,s){return this.status=s,super.emit(d,s)}emitReplaced(d,s){return super.emit(d,s)}}i.EVENT="EVENT",i.REPLACED="REPLACED"})}]);
