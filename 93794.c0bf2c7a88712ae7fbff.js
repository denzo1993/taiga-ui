"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[93794],{95582:(At,N,n)=>{n.r(N),n.d(N,{ExampleTuiInputPhoneModule:()=>vt});var c=n(12057),u=n(24751),A=n(33982),O=n(29851),T=n(82238),d=n(72002),h=n(9488),$=n(89570),L=n(75695),t=n(74788),H=n(82880),R=n(98204),Z=n(88331),J=n(37159),G=n(57068),V=n(79121),m=n(78750),_=n(45303),X=n(91030),b=n(76189);let z=(()=>{class o{constructor(){this.testForm=new u.cw({testValue:new u.NI("+77777777777",u.kI.required)})}setValue(){this.testForm.get("testValue").setValue("+79926775676")}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-example-1"]],decls:9,vars:4,consts:[[1,"b-form",3,"formGroup"],["formControlName","testValue"],["tuiTextfield","","autocomplete","tel"],[1,"tui-space_bottom-3"],["tuiButton","","type","button","size","m",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input-phone",1),t._uU(2," Type a phone number "),t._UZ(3,"input",2),t.qZA(),t.TgZ(4,"pre",3),t._uU(5),t.ALo(6,"json"),t.qZA(),t.qZA(),t.TgZ(7,"button",4),t.NdJ("click",function(){return a.setValue()}),t._uU(8," Set value from outside: +79926775676\n"),t.qZA()),2&e&&(t.Q6J("formGroup",a.testForm),t.xp6(5),t.hij("Form value: ",t.lcZ(6,2,a.testForm.value),""))},directives:[u._Y,u.JL,u.sg,m.y,_.X,u.JJ,u.u,X.M,b.v],pipes:[c.Ts],encapsulation:2,changeDetection:0}),o})(),Q=(()=>{class o{constructor(){this.control=new u.NI("",u.kI.minLength(12))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-input-phone-example-2"]],decls:5,vars:4,consts:[[1,"b-form",3,"formControl"]],template:function(e,a){1&e&&(t.TgZ(0,"tui-input-phone",0),t._uU(1," Type phone number\n"),t.qZA(),t.TgZ(2,"pre"),t._uU(3),t.ALo(4,"json"),t.qZA()),2&e&&(t.Q6J("formControl",a.control),t.xp6(3),t.hij("Form value: ",t.lcZ(4,2,a.control.value),""))},directives:[m.y,_.X,u.JJ,u.oH],pipes:[c.Ts],encapsulation:2,changeDetection:0}),o})();var Y=n(64762),B=n(27075),F=n(79765),W=n(66682),j=n(9112),K=n(25917),M=n(43190),g=n(88002),w=n(68307),f=n(39761),q=n(18819),k=n(40939),S=n(6707),tt=n(52219),et=n(20933),nt=n(35065),ot=n(44124);function it(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(4).onClick(s)}),t._UZ(1,"tui-avatar",7),t.TgZ(2,"span",8),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"span",9),t._uU(6),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=i.$implicit;t.Q6J("value",e.phone)("disabled",e.disabled),t.xp6(1),t.Q6J("avatarUrl",e.avatarUrl||null)("text",e.firstName),t.xp6(3),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.phone)}}function at(o,i){if(1&o&&(t.TgZ(0,"tui-data-list"),t.YNc(1,it,7,7,"button",5),t.qZA()),2&o){const e=t.oxw(2).tuiLet;t.xp6(1),t.Q6J("ngForOf",e)}}function ut(o,i){1&o&&(t.ynx(0),t.YNc(1,at,2,1,"tui-data-list",4),t.BQk())}function lt(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-input-phone",2),t.NdJ("ngModelChange",function(l){return t.CHM(e),t.oxw().value=l})("searchChange",function(l){return t.CHM(e),t.oxw().onSearch(l)}),t._uU(1),t.ALo(2,"async"),t.YNc(3,ut,2,0,"ng-container",3),t.qZA()}if(2&o){const e=i.tuiLet,a=t.oxw(),l=t.MAs(3);t.Q6J("tuiTextfieldCustomContent",l)("allowText",!0)("ngModel",a.value),t.xp6(1),t.hij(" ",t.lcZ(2,5,a.placeholder$)," "),t.xp6(2),t.Q6J("ngIf",null==e?null:e.length)}}function st(o,i){if(1&o&&t._UZ(0,"tui-avatar",11),2&o){const e=i.ngIf;t.Q6J("rounded",!0)("avatarUrl",e.avatarUrl||null)("text",e.firstName)}}function pt(o,i){if(1&o&&(t.YNc(0,st,1,3,"tui-avatar",10),t.ALo(1,"async")),2&o){const e=t.oxw();t.Q6J("ngIf",t.lcZ(1,1,e.user$))}}class x{constructor(i,e,a,l=null,s=!1){this.firstName=i,this.lastName=e,this.phone=a,this.avatarUrl=l,this.disabled=s}toString(){return`${this.firstName} ${this.lastName}`}}const dt=[new x("Roman","Sedov","+75678901234","https://avatars.githubusercontent.com/u/10106368"),new x("Alex","Inkin","+75678901234",B.L`/images/avatar.jpg`)];class r{constructor(){this.search$=new F.xQ,this.selected$=new F.xQ,this.value="",this.user$=(0,W.T)(this.selected$,this.search$.pipe((0,M.w)(i=>this.request(i).pipe((0,g.U)(e=>this.isFullMatch(e,i)?e[0]:null))))).pipe((0,w.b)(i=>{i&&(this.value=i.phone)})),this.items$=this.search$.pipe((0,f.O)(""),(0,M.w)(i=>this.request(i).pipe((0,g.U)(e=>this.isFullMatch(e,i)?[]:e)))),this.placeholder$=(0,j.aj)(this.user$,this.search$).pipe((0,g.U)(([i,e])=>i||this.getPlaceholder(e)),(0,f.O)("Phone number or name"))}onSearch(i){this.search$.next(i)}onClick(i){this.selected$.next(i)}request(i){return(0,K.of)(dt.filter(e=>(0,T.TUI_DEFAULT_MATCHER)(e,i)||(0,T.TUI_DEFAULT_MATCHER)(e.phone,i))).pipe((0,q.B)())}getPlaceholder(i){return i?i.startsWith("+")?"Phone number":"Name":"Phone number or name"}isFullMatch(i,e){return 1===i.length&&(String(i[0])===e||i[0].phone===e)}}r.\u0275fac=function(i){return new(i||r)},r.\u0275cmp=t.Xpm({type:r,selectors:[["tui-input-phone-example-3"]],decls:6,vars:4,consts:[["class","b-form",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange",4,"tuiLet"],["avatar",""],[1,"b-form",3,"tuiTextfieldCustomContent","allowText","ngModel","ngModelChange","searchChange"],[4,"ngIf"],[4,"tuiDataList"],["tuiOption","",3,"value","disabled","click",4,"ngFor","ngForOf"],["tuiOption","",3,"value","disabled","click"],["size","s",1,"tui-space_right-3",3,"avatarUrl","text"],[1,"user"],[1,"phone"],["size","s",3,"rounded","avatarUrl","text",4,"ngIf"],["size","s",3,"rounded","avatarUrl","text"]],template:function(i,e){1&i&&(t.YNc(0,lt,4,7,"tui-input-phone",0),t.ALo(1,"async"),t.YNc(2,pt,2,3,"ng-template",null,1,t.W1O),t.TgZ(4,"p"),t._uU(5),t.qZA()),2&i&&(t.Q6J("tuiLet",t.lcZ(1,2,e.items$)),t.xp6(5),t.hij("Value: ",e.value,""))},directives:[k.L,m.y,_.X,S.B,u.JJ,u.On,c.O5,tt.g,et.q,c.sg,nt.v,ot.J],pipes:[c.Ov],styles:[".user[_ngcontent-%COMP%]{margin-right:auto}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);display:block;color:var(--tui-text-03)}"],changeDetection:0}),(0,Y.gn)([T.tuiPure],r.prototype,"request",null);var ct=n(31823),rt=n(54476),Tt=n(17023),mt=n(54218),_t=n(3729),Et=n(64374),Ct=n(68874),gt=n(10200),Pt=n(33250),Nt=n(84848),Ot=n(76349);function ht(o,i){if(1&o&&(t.TgZ(0,"p"),t.tHW(1,2),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",3),t.TgZ(4,"tui-notification",4),t._uU(5," If you need to set some attributes or listen to events on native "),t.TgZ(6,"code"),t._uU(7,"input"),t.qZA(),t._uU(8," , you can put it inside with "),t.TgZ(9,"code"),t._uU(10,"Textfield"),t.qZA(),t._uU(11," directive as shown below "),t.qZA(),t._UZ(12,"tui-input-phone-example-1"),t.qZA(),t.TgZ(13,"tui-doc-example",5),t._UZ(14,"tui-input-phone-example-2"),t.qZA(),t.TgZ(15,"tui-doc-example",6),t._UZ(16,"tui-input-phone-example-3"),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.Q6J("content",e.example1),t.xp6(10),t.Q6J("content",e.example2),t.xp6(2),t.Q6J("content",e.example3)}}function Ft(o,i){if(1&o&&(t.TgZ(0,"tui-input-phone",15),t._uU(1," Type a phone number "),t.qZA()),2&o){const e=t.oxw(2);t.Udp("text-align",e.textAlign),t.Q6J("formControl",e.control)("focusable",e.focusable)("readOnly",e.readOnly)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContent)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("countryCode",e.countryCode)("phoneMaskAfterCountryCode",e.phoneMaskAfterCountryCode)("pseudoInvalid",e.pseudoInvalid)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("tuiDropdownAlign",e.dropdownAlign)("tuiDropdownDirection",e.dropdownDirection)("tuiDropdownLimitWidth",e.dropdownLimitWidth)("tuiDropdownMinHeight",e.dropdownMinHeight)("tuiDropdownMaxHeight",e.dropdownMaxHeight)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)}}function Mt(o,i){1&o&&(t.tHW(0,16),t._UZ(1,"code"),t.N_p())}function ft(o,i){1&o&&t.SDv(0,17)}function St(o,i){1&o&&(t.tHW(0,18),t._UZ(1,"code"),t._UZ(2,"code"),t.N_p())}function xt(o,i){1&o&&t.SDv(0,19)}function Dt(o,i){1&o&&t.SDv(0,20)}function It(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tui-doc-demo",7),t.YNc(1,Ft,2,23,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,Mt,2,0,"ng-template",8),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().disabled=l}),t.YNc(4,ft,1,0,"ng-template",9),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().countryCode=l}),t.YNc(5,St,3,0,"ng-template",10),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().phoneMaskAfterCountryCode=l}),t.YNc(6,xt,1,0,"ng-template",11),t.qZA(),t._UZ(7,"inherited-documentation",12),t.TgZ(8,"tui-doc-documentation",13),t.YNc(9,Dt,1,0,"ng-template",14),t.NdJ("documentationPropertyValueChange",function(l){return t.CHM(e),t.oxw().textAlign=l}),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("control",e.control),t.xp6(3),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",e.countryCodes)("documentationPropertyValue",e.countryCode),t.xp6(1),t.Q6J("documentationPropertyValues",e.phoneMasksAfterCountryCode)("documentationPropertyValue",e.phoneMaskAfterCountryCode),t.xp6(2),t.Q6J("dropdown",!0),t.xp6(2),t.Q6J("documentationPropertyValues",e.textAlignVariants)("documentationPropertyValue",e.textAlign)}}function yt(o,i){if(1&o&&(t.TgZ(0,"ol",21),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,22),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",23),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.tHW(8,24),t._UZ(9,"code"),t._UZ(10,"code"),t.N_p(),t.qZA(),t._UZ(11,"tui-doc-code",25),t.qZA(),t.TgZ(12,"li"),t.TgZ(13,"p"),t.SDv(14,26),t.qZA(),t._UZ(15,"tui-doc-code",27),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(6),t.Q6J("code",e.exampleForm),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let Ut=(()=>{class o extends H.b{constructor(){super(...arguments),this.exampleForm=n.e(2207).then(n.t.bind(n,2207,17)),this.exampleModule=n.e(81627).then(n.t.bind(n,81627,17)),this.exampleHtml=n.e(43560).then(n.t.bind(n,43560,17)),this.example1={TypeScript:n.e(95894).then(n.t.bind(n,95894,17)),HTML:n.e(30508).then(n.t.bind(n,30508,17))},this.example2={TypeScript:n.e(81831).then(n.t.bind(n,81831,17)),HTML:n.e(9604).then(n.t.bind(n,9604,17))},this.example3={TypeScript:n.e(893).then(n.t.bind(n,893,17)),HTML:n.e(77707).then(n.t.bind(n,77707,17)),LESS:n.e(96912).then(n.t.bind(n,96912,17))},this.cleaner=!1,this.control=new u.NI("",[u.kI.required,u.kI.minLength(12)]),this.countryCodes=["+7","+850","+1","+52"],this.countryCode=this.countryCodes[0],this.phoneMasksAfterCountryCode=["(###) ###-##-##","(####)+____:-#############","### ###-####"],this.phoneMaskAfterCountryCode=this.phoneMasksAfterCountryCode[0]}}return o.\u0275fac=function(){let i;return function(a){return(i||(i=t.n5z(o)))(a||o)}}(),o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-input-phone"]],features:[t._Bn([{provide:R.x,useExisting:(0,t.Gpc)(()=>o)}]),t.qOj],decls:4,vars:0,consts:function(){let i,e,a,l,s,P,D,E,I,y,U,C,v;return i=$localize`:␟cdedf35da9f1fe59a6967a31fca86bb5223deb5e␟4265916685645891270:${"\ufffd#2\ufffd"}:START_TAG_CODE:InputPhone${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows to input a phone number `,e=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟3d7fa81ead9d15f29cb4d813100cad4c816553cd␟577318767938750368:With length validator`,l=$localize`:␟f7801e64b274854b74c1e808598fc1ddd2f44e16␟7072553736290807084:With autocomplete`,s=$localize`:␟7a074c8c6837e68463062476f13f9646e4b3ffb8␟3923198094532276941:By number and by name`,P=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,D=$localize`:␟3796d9edaba5839bc345b9dc9c1d22bec3e806b3␟2828194013486797327: Country code `,E=$localize`:␟68665a783e62d750ebd0261d482afd5e9717751a␟3398053793685015135: Text mask after country code. You can use ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:#${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: , ${"[\ufffd#1\ufffd|\ufffd#2\ufffd]"}:START_TAG_CODE:-${"[\ufffd/#1\ufffd|\ufffd/#2\ufffd]"}:CLOSE_TAG_CODE: and spaces as a template sumbol `,E=t.Zx4(E),I=$localize`:␟8a6a5ce2ceea7d3a5c99fc7c3eeac0e54d7ecaf2␟8882017065969020678: Textfield value to subscribe on input or setting it from the outside `,y=$localize`:␟f53a375d54d7a00804c315043a43ae281c9efcb8␟226068063890007003: Custom align content by text-align `,U=$localize`:␟3066c1bc71219464813f85b21117fcdb078ebfd8␟4215209632386988101: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputPhoneModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our component: `,C=$localize`:␟456424fe8e0d32d35e8189a73951290607573253␟6039324497180220606: Declare a form ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormGroup${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) or a control ( ${"[\ufffd#9\ufffd|\ufffd#10\ufffd]"}:START_TAG_CODE:FormControl${"[\ufffd/#9\ufffd|\ufffd/#10\ufffd]"}:CLOSE_TAG_CODE: ) in your component: `,C=t.Zx4(C),v=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputPhone","package","KIT","type","components"],["pageTab",""],i,["id","base","heading",e,3,"content"],[1,"tui-space_bottom-4","b-form"],["id","validated","heading",a,3,"content"],["id","autocomplete","heading",l,"description",s,3,"content"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","countryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","phoneMaskAfterCountryCode","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","search","documentationPropertyMode","input-output","documentationPropertyType","string"],[3,"dropdown"],["heading","CSS customization"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.text-align",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","focusable","readOnly","tuiTextfieldIconLeft","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldLabelOutside","tuiTextfieldSize","countryCode","phoneMaskAfterCountryCode","pseudoInvalid","pseudoFocus","pseudoHover","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiHintContent","tuiHintDirection","tuiHintAppearance"],P,D,E,I,y,[1,"b-demo-steps"],U,["filename","myComponent.module.ts",3,"code"],C,["filename","myComponent.component.ts",3,"code"],v,["filename","myComponent.template.html",3,"code"]]},template:function(e,a){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,ht,17,3,"ng-template",1),t.YNc(2,It,10,9,"ng-template",1),t.YNc(3,yt,16,3,"ng-template",1),t.qZA())},directives:[Z.q,J.n,G.f,V.L,z,Q,r,ct.F,rt.z,Tt.B,mt.w,m.y,_.X,u.JJ,u.oH,_t.aR,Et.b,S.B,Ct.x,gt.s,Pt.Ek,Nt.bZ,Ot.c],styles:[".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;width:100%;margin:-.625rem 0}.avatar[_ngcontent-%COMP%]{margin-left:.75rem}.name[_ngcontent-%COMP%], .phone[_ngcontent-%COMP%]{margin:0}.phone[_ngcontent-%COMP%]{font:var(--tui-font-text-s);color:var(--tui-text-03)}"],changeDetection:0}),o})(),vt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.ez,u.u5,u.UX,$.wq,T.TuiLetModule,d.TuiDataListModule,d.TuiButtonModule,d.TuiSvgModule,h.TuiAvatarModule,d.TuiDropdownModule,d.TuiTextfieldControllerModule,d.TuiHintModule,h.TuiInputPhoneModule,d.TuiLinkModule,d.TuiNotificationModule,L.f,O.fV,A.Bz.forChild((0,O.Ve)(Ut))]]}),o})()}}]);