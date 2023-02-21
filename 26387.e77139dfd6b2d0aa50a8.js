"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26387],{89842:(Y,m,t)=>{t.r(m),t.d(m,{ExampleTuiTableBarModule:()=>Q});var B=t(12057),F=t(24751),A=t(33982),M=t(23121),d=t(29851),c=t(3497),_=t(18738),f=t(89570),p=t(40249),b=t(79765),r=t(75319),R=t(46782),e=t(74788),O=t(88331),D=t(37159),h=t(57068),E=t(76189),x=t(30644);const L=["tableBarTemplate"];function y(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"button",3),e._uU(2," Save "),e.qZA(),e.TgZ(3,"button",4),e.NdJ("click",function(){return e.CHM(o).$implicit()}),e._uU(4," Cancel "),e.qZA(),e.TgZ(5,"button",5),e._uU(6," Delete "),e.qZA(),e.qZA()}}let N=(()=>{class n{constructor(o){this.tableBarsService=o,this.tableBarTemplate="",this.subscription=new r.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{hasCloseButton:!0,adaptive:!0}).subscribe()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.TuiTableBarsService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-table-bar-example-1"]],viewQuery:function(o,i){if(1&o&&e.Gf(L,5),2&o){let l;e.iGM(l=e.CRH())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:[["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["tuiMode","onDark",1,"content"],["tuiButton","","type","button","size","m"],["tuiButton","","type","button","appearance","flat","size","m",1,"tui-space_left-3",3,"click"],["tuiButton","","type","button","appearance","outline","size","m","icon","tuiIconTrashLarge",1,"delete-button"]],template:function(o,i){1&o&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return i.showTableBar()}),e._uU(1," Show TableBar\n"),e.qZA(),e.YNc(2,y,7,0,"ng-template",null,1,e.W1O))},directives:[E.v,x.w],styles:[".content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.875rem 0}.delete-button[_ngcontent-%COMP%]{margin-left:auto}"],changeDetection:0}),n})();var $=t(54476),P=t(17023),v=t(76349);const Z=["tableBarTemplate"];function I(n,a){if(1&n&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-table-bar-example-1"),e.qZA()),2&n){const o=e.oxw();e.xp6(2),e.Q6J("content",o.example1)}}function U(n,a){1&n&&(e.TgZ(0,"p"),e._uU(1,"Some template"),e.qZA())}function V(n,a){1&n&&e.SDv(0,10)}function J(n,a){1&n&&e.SDv(0,11)}function G(n,a){1&n&&e.SDv(0,12)}function z(n,a){if(1&n){const o=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"button",4),e.NdJ("click",function(){return e.CHM(o),e.oxw().showTableBar()}),e._uU(2," Show tableBar "),e.qZA(),e.TgZ(3,"button",5),e.NdJ("click",function(){return e.CHM(o),e.oxw().destroy()}),e._uU(4," Hide tableBar "),e.qZA(),e.qZA(),e.YNc(5,U,2,0,"ng-template",null,6,e.W1O),e._UZ(7,"br"),e.TgZ(8,"tui-doc-documentation"),e.YNc(9,V,1,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(o),e.oxw().adaptive=l}),e.YNc(10,J,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(o),e.oxw().hasCloseButton=l}),e.YNc(11,G,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(o),e.oxw().mode=l}),e.qZA()}if(2&n){const o=e.oxw();e.xp6(9),e.Q6J("documentationPropertyValue",o.adaptive),e.xp6(1),e.Q6J("documentationPropertyValue",o.hasCloseButton),e.xp6(1),e.Q6J("documentationPropertyValues",o.modeVariants)("documentationPropertyValue",o.mode)}}function H(n,a){if(1&n&&(e.TgZ(0,"ol",13),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,14),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",15),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.tHW(8,16),e._UZ(9,"code"),e.N_p(),e.qZA(),e._UZ(10,"tui-doc-code",15),e.qZA(),e.TgZ(11,"li"),e.TgZ(12,"p"),e.tHW(13,17),e._UZ(14,"code"),e._UZ(15,"code"),e.N_p(),e.qZA(),e._UZ(16,"tui-doc-code",18),e._UZ(17,"tui-doc-code",19),e.qZA(),e.TgZ(18,"li"),e.TgZ(19,"p"),e.tHW(20,20),e._UZ(21,"code"),e.N_p(),e.qZA(),e._UZ(22,"tui-doc-code",21),e.qZA(),e.qZA()),2&n){const o=e.oxw();e.xp6(5),e.Q6J("code",o.exampleModule),e.xp6(5),e.Q6J("code",o.exampleHtml),e.xp6(6),e.Q6J("code",o.exampleServiceUsageHtml),e.xp6(1),e.Q6J("code",o.exampleServiceUsage),e.xp6(5),e.Q6J("code",o.exampleLazyModule)}}let X=(()=>{class n{constructor(o){this.tableBarsService=o,this.destroy$=new b.xQ,this.tableBarTemplate="",this.exampleServiceUsage=t.e(39650).then(t.t.bind(t,39650,17)),this.exampleServiceUsageHtml=t.e(76247).then(t.t.bind(t,76247,17)),this.exampleLazyModule=t.e(3991).then(t.t.bind(t,3991,17)),this.exampleModule=t.e(22945).then(t.t.bind(t,22945,17)),this.exampleHtml=t.e(91077).then(t.t.bind(t,91077,17)),this.example1={TypeScript:t.e(40427).then(t.t.bind(t,40427,17)),HTML:t.e(36573).then(t.t.bind(t,36573,17)),LESS:t.e(53278).then(t.t.bind(t,53278,17))},this.modeVariants=["onLight","onDark"],this.mode=this.modeVariants[0],this.adaptive=!1,this.hasCloseButton=!1,this.subscription=new r.w}showTableBar(){this.subscription.unsubscribe(),this.subscription=this.tableBarsService.open(this.tableBarTemplate||"",{adaptive:this.adaptive,mode:this.mode,hasCloseButton:this.hasCloseButton}).pipe((0,R.R)(this.destroy$)).subscribe()}destroy(){this.destroy$.next()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(p.TuiTableBarsService))},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-table-bar"]],viewQuery:function(o,i){if(1&o&&e.Gf(Z,5),2&o){let l;e.iGM(l=e.CRH())&&(i.tableBarTemplate=l.first)}},decls:4,vars:0,consts:function(){let a,o,i,l,s,C,g,T,S;return a=$localize`:␟d4eaacf31ad166bfe74dbf267afaff7d767d4dad␟7392151570764225525: It is an element on the bottom of screen to show actions by multiselect of some items. It works with custom content. `,o=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,i=$localize`:␟5e641f8103cca3a413f65da8c27fcc74a78fbef3␟5646260285050734970: Adaprive content `,l=$localize`:␟0508167899eda99f73e069ef49027af94e6b0328␟4329350149148955327: Enable close button `,s=$localize`:␟cdcabff292f0314e30e6f31102dd5ede8bb860a0␟1527305502164610498: Light / dark mode `,C=$localize`:␟33b59d28b627891220e6c360c8ffb07eef6c76cb␟5586136887716454770: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiTableBarsHostModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into your app.module `,g=$localize`:␟066cf82b786e3393ee3efed2ca0016a89d7a4357␟5654054825567970286: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:tui-table-bars-host${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: into your app.template `,T=$localize`:␟b7d425f4c801f0a1d193d06c1862a5bc0cc48c14␟2388724752770660394: Use ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:open${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: method and subscribe to returened ${"[\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:Observable${"[\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE:`,T=e.Zx4(T),S=$localize`:␟ba1892794b314f679ac905e2ef9357d65d51e41e␟282224705145462981: If you use component in lazy loading modules, do not forget to pass into ${"\ufffd#21\ufffd"}:START_TAG_CODE:new PolymorpheusComponent Injector${"\ufffd/#21\ufffd"}:CLOSE_TAG_CODE: of component where you open table bar `,[["header","TableBarsService","package","ADDON-TABLEBARS","path","addon-tablebars/services/table-bars.service.ts"],["pageTab",""],a,["id","base","heading",o,3,"content"],["tuiButton","","type","button","size","m",1,"tui-space_right-2",3,"click"],["tuiButton","","type","button","size","m",3,"click"],["tableBarTemplate",""],["documentationPropertyName","adaptive","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","hasCloseButton","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","mode","documentationPropertyType","TuiBrightness",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],i,l,s,[1,"b-demo-steps"],C,["filename","app.module.ts",3,"code"],g,T,["filename","myComponent.template.html",3,"code"],["filename","myComponent.component.ts",3,"code"],S,["filename","customNotification.component.ts",3,"code"]]},template:function(o,i){1&o&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,I,4,1,"ng-template",1),e.YNc(2,z,12,4,"ng-template",1),e.YNc(3,H,23,5,"ng-template",1),e.qZA())},directives:[O.q,D.n,h.f,N,E.v,$.z,P.B,v.c],styles:[".label[_ngcontent-%COMP%]{width:6.25rem}"],changeDetection:0}),n})(),Q=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[B.ez,c.TuiButtonModule,M.TuiMoneyModule,f.wq,_.TuiRadioListModule,_.TuiInputModule,c.TuiLinkModule,F.u5,c.TuiModeModule,d.fV,A.Bz.forChild((0,d.Ve)(X))]]}),n})()}}]);