(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[64592],{64592:(t,n,e)=>{e.r(n),e.d(n,{default:()=>B});var o=e(35548),i=e(77113),c=e(85483),r=e(85400),s=e(48266),a=e(49609),u=e(70951);const l=["tuiIconElectron","tuiIconElectronMono","tuiIconCirrus","tuiIconMaestro","tuiIconMaestroMono","tuiIconMastercard","tuiIconMastercardMono","tuiIconMir","tuiIconMirMono","tuiIconVisa","tuiIconVisaMono","tuiIconUnionPay","tuiIconJCB","tuiIconPayPal","tuiIconAmex","tuiIconDinersClub","tuiIconDiscover","tuiIconHumo","tuiIconRuPay","tuiIconUzcard","tuiIconVerve"],p=["tuiIconApplePay","tuiIconGooglePay","tuiIconSamsungPay","tuiIconWorldPay","tuiIconAliPay","tuiIconAmazonPay","tuiIconAndroidPay"],g=(0,a.tuiCreateTokenFromFactory)((()=>(t=>{const{LARGE:n,NORMAL:e}=function(){const t=[],n=[],e=new Set([...l,...p]);for(const[o]of Object.entries(u))e.has(o)||"tuiCoreIcons"===o||"tuiKitIcons"===o||(o.includes("Large")?t.push(o):o.includes("Outline")||n.push(o));return{LARGE:t,NORMAL:n}}();return{"Description and examples":{"Normal / 16px":e.filter((n=>!t(n))),"Large / 24px":n.filter((n=>!t(n))),"Payment systems":l,"Payment services":p}}})((0,o.f3M)(s.TUI_SVG_OPTIONS).deprecated)));var m=e(51517),d=e(4594),h=e(54795),f=e(66094),y=e(81470),I=e(51160),x=e(24815),T=e(75123),v=e(13591);let P=(()=>{var t;class n{constructor(){this.template=(0,o.f3M)(o.Rgc)}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵdir=o.lG2({type:t,selectors:[["","iconGroup",""]],inputs:{iconGroup:"iconGroup"},standalone:!0}),n})();var M=e(39519),C=e(23660),b=e(28402),w=e(29329),O=e(63708),Z=e(38264);const A=function(){return{isIntersecting:!1}},_=function(t,n,e,o){return{icon:t,group:n,copyPath:e,entry:o}};function k(t,n){if(1&t&&o.GkF(0,9),2&t){const t=n.$implicit,e=o.oxw(3).$implicit,i=o.oxw();o.Q6J("ngTemplateOutlet",(null==i.iconGroup?null:i.iconGroup.template)||null)("ngTemplateOutletContext",o.l5B(3,_,t,e,i.copyPath,o.DdM(2,A)))}}function U(t,n){if(1&t&&(o.ynx(0),o.TgZ(1,"div",5)(2,"h2",0),o._uU(3),o.qZA(),o.TgZ(4,"tui-badge",6),o._uU(5),o.qZA()(),o.TgZ(6,"div",7),o.YNc(7,k,1,8,"ng-container",8),o.qZA(),o.BQk()),2&t){const t=o.oxw().ngIf,n=o.oxw().$implicit,e=o.oxw();o.xp6(3),o.hij(" ",n," "),o.xp6(2),o.hij(" ",t.length.toString()," "),o.xp6(1),o.Udp("--tui-text-01-night",e.color)("--tui-text-01",e.color),o.xp6(1),o.Q6J("ngForOf",t)}}function N(t,n){if(1&t&&(o.ynx(0),o.YNc(1,U,8,7,"ng-container",4),o.BQk()),2&t){const t=n.ngIf;o.xp6(1),o.Q6J("ngIf",t.length)}}function L(t,n){if(1&t&&(o.ynx(0),o.YNc(1,N,2,1,"ng-container",4),o.ALo(2,"tuiFilter"),o.ALo(3,"async"),o.BQk()),2&t){const t=n.$implicit,e=o.oxw();let i;o.xp6(1),o.Q6J("ngIf",o.Dn7(2,1,e.icons[t],e.matcher,null!==(i=o.lcZ(3,5,e.search$))&&void 0!==i?i:""))}}const F=["*"];let q=(()=>{var t;class n{constructor(){this.clipboard=(0,o.f3M)(m.TU),this.alerts=(0,o.f3M)(s.TuiAlertService),this.route=(0,o.f3M)(i.gz),this.router=(0,o.f3M)(i.F0),this.destroyRef=(0,o.f3M)(o.ktI),this.icons={},this.color=null,this.matcher=a.TUI_DEFAULT_MATCHER,this.control=new f.NI(""),this.search$=this.route.queryParams.pipe((0,I.U)((t=>t.search??"")),(0,x.x)()),this.copyPath=t=>{this.clipboard.copy(t),this.alerts.open(`The name ${t} copied`,{status:"success"}).subscribe()}}ngOnInit(){this.control.patchValue(this.route.snapshot.queryParams.search??""),this.control.valueChanges.pipe((0,T.b)(500),(0,I.U)((t=>t||"")),(0,v.h)((t=>t.length>2||0===t.length)),(0,h.sL)(this.destroyRef)).subscribe((t=>{this.router.navigate([],{queryParams:{search:t}})}))}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["icons-group"]],contentQueries:function(t,n,e){if(1&t&&o.Suo(e,P,5),2&t){let t;o.iGM(t=o.CRH())&&(n.iconGroup=t.first)}},inputs:{icons:"icons",color:"color"},standalone:!0,features:[o.jDz],ngContentSelectors:F,decls:9,vars:6,consts:[[1,"title"],["tuiAutoFocus","","tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"formControl","tuiTextfieldCleaner","tuiTextfieldLabelOutside"],[4,"ngFor","ngForOf"],[1,"nothing","tui-space_top-8"],[4,"ngIf"],[1,"header-group"],["appearance","success","size","m",1,"badge"],[1,"icons"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,n){1&t&&(o.F$t(),o.TgZ(0,"h2",0),o._uU(1,"Search by name"),o.qZA(),o.TgZ(2,"tui-input",1),o._uU(3," Input icon name to highlight\n"),o.qZA(),o.Hsn(4),o.YNc(5,L,4,7,"ng-container",2),o.ALo(6,"tuiKeys"),o.TgZ(7,"div",3),o._uU(8,"Nothing found"),o.qZA()),2&t&&(o.xp6(2),o.Q6J("formControl",n.control)("tuiTextfieldCleaner",!0)("tuiTextfieldLabelOutside",!0),o.xp6(3),o.Q6J("ngForOf",o.lcZ(6,4,n.icons)))},dependencies:[y.TuiInputModule,M.K,C.w,a.TuiAutoFocusDirective,s.TuiHint,b.bZ,f.UX,f.JJ,f.oH,s.TuiTextfieldOptionsDirective,s.TuiTextfieldControllerModule,w.b,O.x,Z.s,d.sg,a.TuiKeysPipe,d.O5,a.TuiFilterPipe,d.Ov,y.TuiBadgeDirective,d.tP],styles:[".header-group[_ngcontent-%COMP%]{display:flex;align-items:center;margin:1.875rem 0 .75rem;justify-content:center}.nothing[_ngcontent-%COMP%]{text-align:center}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6)}.badge[_ngcontent-%COMP%]{margin-left:1rem}.icons[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;margin:0 -.75rem;justify-content:center}.icons[_ngcontent-%COMP%] + .nothing[_ngcontent-%COMP%]{display:none}"],changeDetection:0}),n})();var G=e(55836),J=e(31136),V=e(34962),Q=e(61091),S=e(95413);function H(t,n){if(1&t){const t=o.EpF();o.TgZ(0,"tui-svg",12),o.NdJ("click",(function(){o.CHM(t);const n=o.oxw(),e=n.icon,i=n.copyPath;return o.KtG(i(e))})),o.qZA()}if(2&t){const t=o.oxw().icon;o.Q6J("src",t)}}function E(t,n){if(1&t){const t=o.EpF();o.TgZ(0,"div",10),o.NdJ("waIntersectionObservee",(function(n){const e=o.CHM(t).entry,i=o.oxw(3);return o.KtG(e.isIntersecting=e.isIntersecting||i.onIntersection(n))})),o.YNc(1,H,1,1,"tui-svg",11),o.qZA()}if(2&t){const t=n.entry;o.xp6(1),o.Q6J("ngIf",t.isIntersecting)}}function z(t,n){if(1&t&&(o.TgZ(0,"tui-notification"),o._uU(1," Open source theme for Taiga UI uses processed "),o.TgZ(2,"a",5),o._uU(3," Feather Icons "),o.qZA(),o._uU(4," as its icon pack with some custom made icons. "),o.qZA(),o.TgZ(5,"p"),o._uU(6," These icons can be used by name in "),o.TgZ(7,"a",6),o._uU(8," Svg "),o.qZA(),o._uU(9," component and all Taiga UI component accepting icons as input. If you use unsafe icons or inline SVG with linear gradient you need to provide "),o.TgZ(10,"a",7),o._uU(11," TUI_SANITIZER "),o.qZA(),o._uU(12," token, which is responsible for removing malicious code from the svg. "),o.qZA(),o.TgZ(13,"icons-group",8),o.YNc(14,E,2,1,"ng-template",9),o.qZA()),2&t){const t=o.oxw().$implicit,n=o.oxw();o.xp6(13),o.Q6J("icons",n.icons[t])}}function D(t,n){if(1&t&&o.YNc(0,z,15,1,"ng-template",4),2&t){const t=n.$implicit;o.Q6J("pageTab",t)}}function Y(t,n){1&t&&o._uU(0," SVG image code, link to a file, link to a segment or icon name. If you use name or segment, set icon size with CSS ")}function R(t,n){1&t&&o._uU(0," CustomEvent of loading error ")}function $(t,n){if(1&t){const t=o.EpF();o.TgZ(0,"div")(1,"tui-svg",13),o.NdJ("tui-icon-error",(function(n){o.CHM(t);const e=o.MAs(5);return o.KtG(e.emitEvent(n))})),o.qZA()(),o.TgZ(2,"tui-doc-documentation"),o.YNc(3,Y,1,0,"ng-template",14),o.NdJ("documentationPropertyValueChange",(function(n){o.CHM(t);const e=o.oxw();return o.KtG(e.icon=n)})),o.YNc(4,R,1,0,"ng-template",15,16,o.W1O),o.qZA()}if(2&t){const t=o.oxw();o.xp6(1),o.Q6J("src",t.icon),o.xp6(2),o.Q6J("documentationPropertyValues",t.iconVariants)("documentationPropertyValue",t.icon)}}function j(t,n){1&t&&o._UZ(0,"tui-setup")}const B=(()=>{var t;class n{constructor(){this.icons=(0,o.f3M)(g),this.keys=Object.keys(this.icons),this.exampleModule=e.e(12350).then(e.t.bind(e,12350,17)),this.exampleHtml=e.e(50398).then(e.t.bind(e,50398,17)),this.iconVariants=["https://ng-web-apis.github.io/dist/assets/images/web-api.svg","tuiIconHelpCircle",'<svg xmlns="http://www.w3.org/2000/svg"\n             width="24px"\n             height="24px"\n             viewBox="0 0 24 24">\n            <path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5\n                c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3\n                s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>\n        </svg>',c.Ll`/images/ts.svg#ts`,c.Ll`/images/undefined.svg`],this.icon=this.iconVariants[0]}onIntersection(t){return t[t.length-1]?.isIntersecting??!1}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[o.jDz],decls:4,vars:1,consts:[["header","Icons","type","components"],[4,"ngFor","ngForOf"],["pageTab","Component"],[4,"pageTab"],[3,"pageTab"],["href","https://feathericons.com/","rel","noreferrer","target","_blank","tuiLink",""],["routerLink","/icons/overview","tuiLink",""],["fragment","sanitizer","routerLink","/icons/bundled","tuiLink",""],["waIntersectionObserver","","waIntersectionThreshold","0.5",3,"icons"],["iconGroup",""],[1,"icon-place",3,"waIntersectionObservee"],["class","icon",3,"src","click",4,"ngIf"],[1,"icon",3,"src","click"],[3,"src","tui-icon-error"],["documentationPropertyMode","input","documentationPropertyName","src","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","tui-icon-error","documentationPropertyType","CustomEvent<TuiIconError>"],["documentationPropertyIconErrorChange","documentationProperty"]],template:function(t,n){1&t&&(o.TgZ(0,"tui-doc-page",0),o.YNc(1,D,1,1,null,1),o.YNc(2,$,6,3,"ng-template",2),o.YNc(3,j,1,0,"tui-setup",3),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",n.keys))},dependencies:[c.kG,d.sg,d.O5,G.z,J.B,V.q,Q.n,S.U,s.TuiSvgComponent,q,P,r.$v,r.Z7,r.AY,s.TuiLinkDirective,i.rH,s.TuiNotificationComponent],styles:[".icon-place[_ngcontent-%COMP%]{min-width:4.25rem;min-height:4.25rem;display:flex;align-items:center;justify-content:center;padding:.125rem}.icon[_ngcontent-%COMP%]{transition:all .5s ease-in;border:1px solid var(--tui-base-03);box-shadow:0 .05rem .5rem #3333;will-change:transform,box-shadow;border-radius:.625rem;min-width:var(--tui-height-m);min-height:var(--tui-height-m);box-sizing:border-box;padding:.3125rem;cursor:pointer}.icon[_ngcontent-%COMP%]:hover{transform:scale(1.5);background:var(--tui-base-01);z-index:1}.icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]:hover{transition:.5s}.icon[_ngcontent-%COMP%]:not(.t-appearance)     [tuiWrapper][data-appearance=icon]{opacity:1!important}"],changeDetection:0}),n})()}}]);