(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{eZqP:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiAxesModule",(function(){return ce}));var a=n("An66"),o=n("1VvW"),r=n("UTYu"),i=n("T8fS"),l=n("SVIu"),s=n("Qq0t"),c=n("cWK9"),d=n("kZht"),u=n("OZlg"),p=n("e0eB"),m=n("iyc4"),y=n("ae/2");let x=(()=>{class e{constructor(){this.axisXLabels=["Jan 2019","Feb","Mar"],this.axisYLabels=["","25%","50%","75%","100%"],this.axisYSecondaryLabels=["80 k","100 k","120 k"],this.verticalLinesHandler=(e,t)=>e===t-1?"none":"dashed"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-axes-example-1"]],decls:1,vars:7,consts:[["axisYName","Target","axisYSecondaryName","Sum",1,"axes",3,"axisYInset","horizontalLines","verticalLines","axisXLabels","axisYLabels","axisYSecondaryLabels","verticalLinesHandler"]],template:function(e,t){1&e&&d["\u0275\u0275element"](0,"tui-axes",0),2&e&&d["\u0275\u0275property"]("axisYInset",!0)("horizontalLines",2)("verticalLines",3)("axisXLabels",t.axisXLabels)("axisYLabels",t.axisYLabels)("axisYSecondaryLabels",t.axisYSecondaryLabels)("verticalLinesHandler",t.verticalLinesHandler)},directives:[y.a],styles:[".axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}"],changeDetection:0}),e})();var h=n("D57K"),f=n("l4xa"),b=n("gRvT"),P=n("0/K7");function g(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p",4),d["\u0275\u0275element"](1,"span",5),d["\u0275\u0275elementStart"](2,"span",6),d["\u0275\u0275text"](3),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](4,"tui-money",7),d["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit,n=t.index,a=d["\u0275\u0275nextContext"]().$implicit,o=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275styleProp"]("background",o.getBackground(n),d["\u0275\u0275defaultStyleSanitizer"]),d["\u0275\u0275advance"](2),d["\u0275\u0275textInterpolate"](o.getSetName(n)),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("singleColor",!0)("value",1e3*e[a])}}function V(e,t){if(1&e&&d["\u0275\u0275template"](0,g,5,5,"p",3),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("ngForOf",e.value)}}let L=(()=>{class e{constructor(){this.setNames=["cdk","core","kit","charts"],this.value=[[10,20,3,7],[15,18,24,1],[34,23,12,9],[30,14,18,14]],this.axisYSecondaryLabels=["",this.getMax(this.value)/2+" k",this.getMax(this.value)+" k"],this.axisXLabels=["Q1","Q2","Q3","Q4"],this.horizontalLinesHandler=r.a,this.verticalLinesHandler=r.b}getPercent(e){return 100*Math.max(...e)/this.getMax(this.value)}getSetName(e){return this.setNames[e]}getBackground(e){return`var(--tui-chart-${e})`}getMax(e){return Object(f.lc)(e.reduce((e,t)=>Math.max(...t,e),0),-1)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-axes-example-2"]],decls:4,vars:8,consts:[["axisY","none",1,"axes",3,"axisXLabels","axisYSecondaryLabels","horizontalLines","verticalLines","horizontalLinesHandler","verticalLinesHandler"],[1,"chart",3,"value","hintContent"],["hint",""],["class","hint",4,"ngFor","ngForOf"],[1,"hint"],[1,"dot"],[1,"name"],[3,"singleColor","value"]],template:function(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"tui-axes",0),d["\u0275\u0275element"](1,"tui-bar-chart",1),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](2,V,1,1,"ng-template",null,2,d["\u0275\u0275templateRefExtractor"])),2&e){const e=d["\u0275\u0275reference"](3);d["\u0275\u0275property"]("axisXLabels",t.axisXLabels)("axisYSecondaryLabels",t.axisYSecondaryLabels)("horizontalLines",2)("verticalLines",4)("horizontalLinesHandler",t.horizontalLinesHandler)("verticalLinesHandler",t.verticalLinesHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("value",t.value)("hintContent",e)}},directives:[y.a,b.a,a.s,P.a],styles:[".hint[_ngcontent-%COMP%], [_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8}.axes[_ngcontent-%COMP%]{height:18.75rem;width:37.5rem}.chart[_ngcontent-%COMP%], .wrapper[_ngcontent-%COMP%]{height:100%}.wrapper[_ngcontent-%COMP%]{position:relative;display:flex;flex:1;align-items:flex-end;justify-content:center;margin-bottom:-.0625rem;cursor:pointer}.wrapper[_ngcontent-%COMP%]:hover{background-color:rgba(0,0,0,.05)}.hint[_ngcontent-%COMP%]{display:flex;align-items:center}.dot[_ngcontent-%COMP%]{border-radius:100%;width:.75rem;height:.75rem}.dot[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{margin-right:.5rem}"],changeDetection:0}),Object(h.b)([f.td],e.prototype,"getMax",null),e})();var C=n("EPR0"),Y=n("yHor"),v=n("zGJC"),S=n("u8jZ");const T=["header",$localize`:␟157063b95e7de3b711a5e65f8b1b4a66bf51a9a7␟3176053473328457908:Axes`];var z;z=$localize`:␟299892581b7c29a4afe856bb50e83f932e7c19f9␟3749794859286359761:Just axes for charts`;const M=["heading",$localize`:␟9b735478d27ada48a6cc734cb7f499ffe3b60f31␟5400608477820076858:Cool one`],w=["heading",$localize`:␟befa476ed5c37d3ed4be47fe5759c340c6e24cd4␟927609271953315702:With bars`];function H(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,z),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",2),d["\u0275\u0275i18nAttributes"](3,M),d["\u0275\u0275element"](4,"tui-axes-example-1"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](5,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](6,w),d["\u0275\u0275element"](7,"tui-axes-example-2"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("content",e.example2)}}var N,O,E,X,$,I,_,A,k,D,j,R,J,Q,G;function W(e,t){1&e&&d["\u0275\u0275i18n"](0,N)}function F(e,t){1&e&&(d["\u0275\u0275i18nStart"](0,O),d["\u0275\u0275element"](1,"code"),d["\u0275\u0275i18nEnd"]())}function Z(e,t){1&e&&d["\u0275\u0275i18n"](0,E)}function B(e,t){1&e&&d["\u0275\u0275i18n"](0,X)}function K(e,t){1&e&&d["\u0275\u0275i18n"](0,$)}function q(e,t){1&e&&d["\u0275\u0275i18n"](0,I)}function U(e,t){1&e&&d["\u0275\u0275i18n"](0,_)}function ee(e,t){1&e&&d["\u0275\u0275i18n"](0,A)}function te(e,t){1&e&&d["\u0275\u0275i18n"](0,k)}function ne(e,t){1&e&&d["\u0275\u0275i18n"](0,D)}function ae(e,t){1&e&&d["\u0275\u0275i18n"](0,j)}function oe(e,t){1&e&&d["\u0275\u0275i18n"](0,R)}function re(e,t){1&e&&d["\u0275\u0275i18n"](0,J)}function ie(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"tui-doc-demo"),d["\u0275\u0275element"](1,"tui-axes",4),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-documentation"),d["\u0275\u0275template"](3,W,1,0,"ng-template",5),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisX=t})),d["\u0275\u0275template"](4,F,2,0,"ng-template",6),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisXLabels=t})),d["\u0275\u0275template"](5,Z,1,0,"ng-template",7),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisY=t})),d["\u0275\u0275template"](6,B,1,0,"ng-template",8),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYInset=t})),d["\u0275\u0275template"](7,K,1,0,"ng-template",9),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYLabels=t})),d["\u0275\u0275template"](8,q,1,0,"ng-template",10),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYName=t})),d["\u0275\u0275template"](9,U,1,0,"ng-template",11),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryInset=t})),d["\u0275\u0275template"](10,ee,1,0,"ng-template",12),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryLabels=t})),d["\u0275\u0275template"](11,te,1,0,"ng-template",13),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().axisYSecondaryName=t})),d["\u0275\u0275template"](12,ne,1,0,"ng-template",14),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().horizontalLines=t})),d["\u0275\u0275template"](13,ae,1,0,"ng-template",15),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().horizontalLinesHandler=t})),d["\u0275\u0275template"](14,oe,1,0,"ng-template",16),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().verticalLines=t})),d["\u0275\u0275template"](15,re,1,0,"ng-template",17),d["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().verticalLinesHandler=t})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("axisX",e.axisX)("axisXLabels",e.axisXLabels)("axisY",e.axisY)("axisYInset",e.axisYInset)("axisYLabels",e.axisYLabels)("axisYName",e.axisYName)("axisYSecondaryInset",e.axisYSecondaryInset)("axisYSecondaryLabels",e.axisYSecondaryLabels)("axisYSecondaryName",e.axisYSecondaryName)("horizontalLines",e.horizontalLines)("horizontalLinesHandler",e.horizontalLinesHandler)("verticalLines",e.verticalLines)("verticalLinesHandler",e.verticalLinesHandler),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisX),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsXVariants)("documentationPropertyValue",e.axisXLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.lineVariants)("documentationPropertyValue",e.axisY),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYInset),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsYVariants)("documentationPropertyValue",e.axisYLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYName),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYSecondaryInset),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.labelsYVariants)("documentationPropertyValue",e.axisYSecondaryLabels),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.axisYSecondaryName),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.horizontalLines),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.horizontalLinesHandler),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValue",e.verticalLines),d["\u0275\u0275advance"](1),d["\u0275\u0275property"]("documentationPropertyValues",e.handlerVariants)("documentationPropertyValue",e.verticalLinesHandler)}}function le(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",18),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,Q),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",19),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,G),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",20),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}N=$localize`:␟f64e1f5d1e794dab4b787c26bf022a2c9898d1ef␟7040174970690647937: Axis X `,O=$localize`:␟2f8e23a3f6977505fbbb8b3213e5912e32a2188d␟5270458325684962839: Labels for X. Emptry string is empty stroke, ${"\ufffd#1\ufffd"}:START_TAG_CODE:null${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: — no stroke `,E=$localize`:␟2642d8e7bc40dbf7276fb69cb640c80ac1c07be9␟5140923464869546529: Axis Y `,X=$localize`:␟60800456eca99202fc6cebb2fc9f5a10a5e0a72d␟2837390181413385612: Inset of labels on axis Y `,$=$localize`:␟06d8e98f8b5258586ff187e97dae0d16518e9ab5␟2657129922321475589: Labels for Y `,I=$localize`:␟7e478ef44515adc35026c32852851c7f7d84d651␟4037762709948884159: Name of Y axis `,_=$localize`:␟ac60157a8311a55856019cafd6b36016eb669dab␟1884145993509521583: Inset labels for Y `,A=$localize`:␟83b47ed4c100d02f8d9266656e0a0cd4868829a1␟5391635047792570800: Secondary Y axis labels `,k=$localize`:␟264edf3e9d07bdae2defe9a9a8083e92d020d303␟1495535954616436734: Secondary Y axis name `,D=$localize`:␟b320bfbd957dcc40c0482581c996f149ec3ffbf5␟8249773395630076811: Horizontal lines number `,j=$localize`:␟36af86f2988f299294e7c3e39259c33da740851b␟7177151488130232990: Horizontal lines type handler `,R=$localize`:␟5495dd2570db74aef538977c664775059a1554c9␟6546346680735354696: Number of vertical lines `,J=$localize`:␟cf738f0fc8a03a466440318b0f21a2b9199b10c6␟1142374539392645294: Vertical lines type handler `,Q=$localize`:␟44a035fbfcb4f3f0ef301785a4fea1e80b4afe55␟2561454909924995663: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiAxesModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,G=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let se=(()=>{class e{constructor(){this.exampleModule=n.e(332).then(n.bind(null,"S5Wd")),this.exampleHtml=n.e(333).then(n.bind(null,"6hMf")),this.example1={TypeScript:n.e(328).then(n.bind(null,"6ceT")),HTML:n.e(326).then(n.bind(null,"HevD")),LESS:n.e(327).then(n.bind(null,"52g2"))},this.example2={TypeScript:n.e(331).then(n.bind(null,"VkCX")),HTML:n.e(329).then(n.bind(null,"JWQg")),LESS:n.e(330).then(n.bind(null,"upej"))},this.lineVariants=["solid","dashed","none","hidden"],this.labelsXVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One",null,"","Two and a half","Three",null]],this.labelsYVariants=[[],["","25%","50%","100%"],["One","Two","Three"],["One","","Two and a half","Three"]],this.handlerVariants=[r.c,r.a,e=>e%2?"dashed":"solid"],this.axisX=this.lineVariants[0],this.axisXLabels=this.labelsXVariants[0],this.axisY=this.lineVariants[0],this.axisYInset=!1,this.axisYLabels=this.labelsYVariants[0],this.axisYName="",this.axisYSecondaryInset=!1,this.axisYSecondaryLabels=this.labelsYVariants[0],this.axisYSecondaryName="",this.horizontalLines=0,this.horizontalLinesHandler=this.handlerVariants[0],this.verticalLines=0,this.verticalLinesHandler=this.handlerVariants[1]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-axes"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","advanced",3,"content",6,"heading"],["id","bars",3,"content",6,"heading"],[1,"axes",3,"axisX","axisXLabels","axisY","axisYInset","axisYLabels","axisYName","axisYSecondaryInset","axisYSecondaryLabels","axisYSecondaryName","horizontalLines","horizontalLinesHandler","verticalLines","verticalLinesHandler"],["documentationPropertyName","axisX","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisXLabels","documentationPropertyMode","input","documentationPropertyType","ReadonlyArray<string | null>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisY","documentationPropertyMode","input","documentationPropertyType","TuiLineTypeT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryInset","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryLabels","documentationPropertyMode","input","documentationPropertyType","readonly string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","axisYSecondaryName","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","horizontalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLines","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","verticalLinesHandler","documentationPropertyMode","input","documentationPropertyType","TuiLineHandler",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,T),d["\u0275\u0275template"](2,H,8,2,"ng-template",1),d["\u0275\u0275template"](3,ie,16,33,"ng-template",1),d["\u0275\u0275template"](4,le,10,2,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[u.a,p.a,m.a,x,L,C.a,y.a,Y.a,v.a,S.a],styles:[".axes[_ngcontent-%COMP%]{height:12.5rem}"],changeDetection:0}),e})(),ce=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,o.f,r.e,r.f,s.wb,c.c,i.g,l.m,o.f.forChild(Object(l.u)(se))]]}),e})()}}]);