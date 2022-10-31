"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[62202],{62202:(q,m,t)=>{t.r(m),t.d(m,{ExampleTuiBarChartModule:()=>k});var h=t(12057),c=t(23738),C=t(33982),d=t(50179),x=t(23121),p=t(29851),r=t(72002),_=t(753),e=t(74788),O=t(88331),f=t(37159),H=t(66596),N=t(57068),D=t(36692),g=t(70390),T=t(88549);let P=(()=>{class n{constructor(){this.value=[[3660,8281,1069,9034,5797,6918,8495,3234,6204,1392,2088,8637,8779],[3952,3671,3781,5323,3537,4107,2962,3320,8632,4755,9130,1195,3574]],this.labelsX=["Jan 2019","Feb","Mar"],this.labelsY=["0","10 000"]}getHeight(a){return a/(0,D.tuiCeil)(a,-3)*100}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-bar-chart-example-1"]],decls:2,vars:4,consts:[[1,"axes",3,"axisXLabels","axisYLabels"],[3,"max","value"]],template:function(a,o){1&a&&(e.TgZ(0,"tui-axes",0),e._UZ(1,"tui-bar-chart",1),e.qZA()),2&a&&(e.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),e.xp6(1),e.Q6J("max",1e4)("value",o.value))},directives:[g.v,T.g],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),n})();var F=t(79121),y=t(84848),B=t(50170),L=t(1414),v=t(52219),$=t(50020);function Z(n,l){if(1&n&&e._UZ(0,"tui-data-list-wrapper",6),2&n){const a=e.oxw();e.Q6J("items",a.appearances)}}let J=(()=>{class n{constructor(){this.value=[[1e3,8e3,4e3,3e3,4e3],[6e3,2e3,4500,7e3,5e3]],this.labelsX=["Jan 2021","Feb","Mar"],this.labelsY=["0","10 000"],this.appearances=["onDark","error"],this.appearance="onDark",this.hint=({$implicit:a})=>this.value.reduce((o,i)=>`${o}$${(0,r.tuiFormatNumber)(i[a])}\n`,"").trim()}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-bar-chart-example-2"]],decls:8,vars:14,consts:[[1,"flex"],[1,"axes",3,"axisXLabels","axisYLabels"],[3,"tuiHintAppearance","max","value","tuiHintContent"],[3,"tuiHintAppearance","max","value","collapsed","tuiHintContent"],[1,"b-form",3,"ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(a,o){1&a&&(e.TgZ(0,"div",0),e.TgZ(1,"tui-axes",1),e._UZ(2,"tui-bar-chart",2),e.qZA(),e.TgZ(3,"tui-axes",1),e._UZ(4,"tui-bar-chart",3),e.qZA(),e.qZA(),e.TgZ(5,"tui-select",4),e.NdJ("ngModelChange",function(u){return o.appearance=u}),e._uU(6," Hint appearance "),e.YNc(7,Z,1,1,"tui-data-list-wrapper",5),e.qZA()),2&a&&(e.xp6(1),e.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),e.xp6(1),e.Q6J("tuiHintAppearance",o.appearance)("max",1e4)("value",o.value)("tuiHintContent",o.hint),e.xp6(1),e.Q6J("axisXLabels",o.labelsX)("axisYLabels",o.labelsY),e.xp6(1),e.Q6J("tuiHintAppearance",o.appearance)("max",1e4)("value",o.value)("collapsed",!0)("tuiHintContent",o.hint),e.xp6(1),e.Q6J("ngModel",o.appearance))},directives:[g.v,T.g,y.bZ,B.u,L.O,c.JJ,c.On,v.g,$.e],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.axes[_ngcontent-%COMP%]:first-child{--tui-chart-0: gold;--tui-chart-1: purple}.axes[_ngcontent-%COMP%]:last-child{--tui-chart-0: skyblue;--tui-chart-1: violet}.flex[_ngcontent-%COMP%]{display:flex;min-width:31.25rem}"],changeDetection:0}),n})();var U=t(31823),X=t(20546),V=t(17023),z=t(76349);const b=function(){return["/components/axes"]};function G(n,l){if(1&n&&(e.TgZ(0,"p"),e.tHW(1,2),e._UZ(2,"a",3),e.N_p(),e.qZA(),e.TgZ(3,"tui-doc-example",4),e._UZ(4,"tui-bar-chart-example-1"),e.qZA(),e.TgZ(5,"tui-doc-example",5),e.TgZ(6,"tui-notification",6),e._uU(7," Use "),e.TgZ(8,"a",7),e.TgZ(9,"code"),e._uU(10,"Hint"),e.qZA(),e.qZA(),e._uU(11," directive to enable hints with "),e.TgZ(12,"code"),e._uU(13,"tuiHintContent"),e.qZA(),e.qZA(),e._UZ(14,"tui-bar-chart-example-2"),e.qZA()),2&n){const a=e.oxw();e.xp6(2),e.Q6J("routerLink",e.DdM(3,b)),e.xp6(1),e.Q6J("content",a.example1),e.xp6(2),e.Q6J("content",a.example2)}}function I(n,l){1&n&&e.SDv(0,13)}function Q(n,l){1&n&&e.SDv(0,14)}function Y(n,l){1&n&&(e.tHW(0,15),e._UZ(1,"code"),e.N_p())}function W(n,l){1&n&&e.SDv(0,16)}function K(n,l){if(1&n){const a=e.EpF();e.TgZ(0,"tui-doc-demo"),e._UZ(1,"tui-bar-chart",8),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,I,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(a),e.oxw().collapsed=i}),e.YNc(4,Q,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(a),e.oxw().max=i}),e.YNc(5,Y,2,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(a),e.oxw().size=i}),e.YNc(6,W,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(i){return e.CHM(a),e.oxw().value=i}),e.qZA()}if(2&n){const a=e.oxw();e.xp6(1),e.Q6J("collapsed",a.collapsed)("value",a.value)("max",a.max)("size",a.size),e.xp6(2),e.Q6J("documentationPropertyValue",a.collapsed),e.xp6(1),e.Q6J("documentationPropertyValue",a.max),e.xp6(1),e.Q6J("documentationPropertyValues",a.sizeVariants)("documentationPropertyValue",a.size),e.xp6(1),e.Q6J("documentationPropertyValues",a.valueVariants)("documentationPropertyValue",a.value)}}function j(n,l){if(1&n&&(e.TgZ(0,"ol",17),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,18),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",19),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,20),e.qZA(),e._UZ(9,"tui-doc-code",21),e.qZA(),e.qZA()),2&n){const a=e.oxw();e.xp6(5),e.Q6J("code",a.exampleModule),e.xp6(4),e.Q6J("code",a.exampleHtml)}}let w=(()=>{class n{constructor(){this.exampleModule=t.e(15240).then(t.t.bind(t,15240,17)),this.exampleHtml=t.e(26307).then(t.t.bind(t,26307,17)),this.example1={TypeScript:t.e(37816).then(t.t.bind(t,37816,17)),HTML:t.e(29156).then(t.t.bind(t,29156,17)),LESS:t.e(65498).then(t.t.bind(t,65498,17))},this.example2={TypeScript:t.e(57888).then(t.t.bind(t,57888,17)),HTML:t.e(15294).then(t.t.bind(t,15294,17)),LESS:t.e(71019).then(t.t.bind(t,71019,17))},this.collapsed=!1,this.sizeVariants=["s","m","l"],this.size=null,this.max=0,this.valueVariants=[[[3e4,20500,12345],[12422,16124,22424]],[[30,65,30,80,54],[98,48,33,25,11],[55,10,27,36,73]]],this.value=this.valueVariants[0]}}return n.\u0275fac=function(a){return new(a||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-tui-bar-chart"]],decls:4,vars:0,consts:function(){let l,a,o,i,u,R,A,E,M,S;return l=$localize`:␟310e0a6c470048f0830207f8705fc98ddf83e09f␟4972350692603623963:BarChart`,a=$localize`:␟bbf1520055e253a96936868291170717aab058a6␟7559748480779361253: Bar chart that can be used as a content to ${"\ufffd#2\ufffd"}:START_LINK: axes ${"\ufffd/#2\ufffd"}:CLOSE_LINK: . `,o=$localize`:␟91d85f7cd08523d464572a8331ae010403898036␟2292984449512804094:With axes`,i=$localize`:␟787e849982377e68816c88e2bab70d23391c75ce␟3035164386238041785:Same values with collapsed mode`,u=$localize`:␟c8c3cf5337c2dfc41b63a6be38ecb6b8e75a1940␟1300461621231032697: Shows data set in a single bar `,R=$localize`:␟82dfd714cac7d622a7e5aec2489be564da4184e5␟8322206422380376347: Sets chart max manually `,A=$localize`:␟3830e7ef75ee17fa449e62db9388a201fdd9d420␟7603555242726494831: Size (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for autosize) `,E=$localize`:␟5227918e5051fd4c9eac18c22be2f4f747ef8001␟5346468389743474194: Array of segments `,M=$localize`:␟1ee4fd2173f4ec5d3bee4852bc366c9afc95b96f␟3833152904251514807: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiBarChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,S=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",l,"package","ADDON-CHARTS","type","components"],["pageTab",""],a,["tuiLink","",3,"routerLink"],["id","axes","heading",o,3,"content"],["id","collapsed","heading",i,3,"content"],[1,"tui-space_bottom-6"],["routerLink","/directives/hint","tuiLink",""],[1,"chart",3,"collapsed","value","max","size"],["documentationPropertyName","collapsed","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeL | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<readonly number[]>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],u,R,A,E,[1,"b-demo-steps"],M,["filename","myComponent.module.ts",3,"code"],S,["filename","myComponent.template.html",3,"code"]]},template:function(a,o){1&a&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,G,15,4,"ng-template",1),e.YNc(2,K,7,10,"ng-template",1),e.YNc(3,j,10,2,"ng-template",1),e.qZA())},directives:[O.q,f.n,H.V,C.yS,N.f,P,F.L,J,U.F,T.g,X.z,V.B,z.c],styles:[".chart[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),n})(),k=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[h.ez,c.u5,d.TuiAxesModule,d.TuiBarChartModule,r.TuiHintModule,r.TuiNotificationModule,r.TuiLinkModule,x.TuiMoneyModule,_.TuiSelectModule,_.TuiDataListWrapperModule,p.fV,C.Bz.forChild((0,p.Ve)(w))]]}),n})()}}]);