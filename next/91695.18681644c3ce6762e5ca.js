"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[91695],{91695:(Z,d,o)=>{o.r(d),o.d(d,{ExampleTuiEditorCustomToolModule:()=>R});var a=o(12057),l=o(24751),c=o(33982),D=o(29851),u=o(48014),m=o(68339),s=o(76040),t=o(74788),E=o(88331),p=o(66596),O=o(57068),C=o(69303),S=o(62939),g=o(33250),f=o(76189),M=o(17163);function L(F,e){if(1&F){const n=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw(2).insertSmile(r)}),t.qZA()}2&F&&t.Q6J("innerHTML",e.$implicit,t.oJD)}function h(F,e){if(1&F&&(t.TgZ(0,"div",4),t.YNc(1,L,1,1,"button",5),t.qZA()),2&F){const n=e.$implicit,i=t.oxw();t.Q6J("tuiActiveZoneParent",n),t.xp6(1),t.Q6J("ngForOf",i.smiles)}}let v=(()=>{class F{constructor(n){this.editor=n,this.smiles=["&#129409;","&#9200;","&#9749;","&#9989;","&#10060;","&#10071;","&#10133;","&#128064;","&#128070;","&#128076;","&#128522;","&#128640;"]}insertSmile(n){this.editor.getOriginTiptapEditor().chain().focus().insertContent(`<p data-type="emoji">${n}</p>`).insertContent(" ").run()}}return F.\u0275fac=function(n){return new(n||F)(t.Y36(u.TuiTiptapEditorService))},F.\u0275cmp=t.Xpm({type:F,selectors:[["smiles-tool"]],decls:5,vars:3,consts:[["tuiDropdownAlign","left",1,"t-wrapper",3,"content"],["dropdown",""],["tuiIconButton","","type","button","size","s","icon","tuiIconStarLarge","appearance","icon","automation-id","smiles-tool__button",1,"tool-button",3,"pseudoActive","focusable"],["smileDropdown",""],[1,"smiles",3,"tuiActiveZoneParent"],["type","button","class","smile",3,"innerHTML","click",4,"ngFor","ngForOf"],["type","button",1,"smile",3,"innerHTML","click"]],template:function(n,i){if(1&n&&(t.TgZ(0,"tui-hosted-dropdown",0,1),t._UZ(2,"button",2),t.YNc(3,h,2,2,"ng-template",null,3,t.W1O),t.qZA()),2&n){const T=t.MAs(1),r=t.MAs(4);t.Q6J("content",r),t.xp6(2),t.Q6J("pseudoActive",T.open)("focusable",T.open)}},directives:[S.o,g.Ek,f.v,M.e,a.sg],styles:[".tool-button[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out}.tool-button[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}.smiles[_ngcontent-%COMP%]{max-width:18rem;display:flex;flex-wrap:wrap;justify-content:space-around;align-items:center}.smile[_ngcontent-%COMP%]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;background:none;font-size:inherit;line-height:inherit;transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;flex:1 0 21%;cursor:pointer;border-radius:var(--tui-radius-s);font:var(--tui-font-heading-4);padding:1rem}.smile[_ngcontent-%COMP%]:hover{background:var(--tui-secondary-hover)}"],changeDetection:0}),F})();var I=o(82707),$=o(34880);let A=(()=>{class F{constructor(){this.builtInTools=[u.TuiEditorTool.Undo],this.control=new l.NI("",l.kI.required)}}return F.\u0275fac=function(n){return new(n||F)},F.\u0275cmp=t.Xpm({type:F,selectors:[["tui-editor-custom-tool-example-1"]],features:[t._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,useValue:[Promise.resolve().then(o.bind(o,2823)).then(({StarterKit:e})=>e),o.e(63524).then(o.bind(o,63524)).then(({EmojiExtension:e})=>e)]}])],decls:7,vars:2,consts:[[1,"editor",3,"formControl","tools"],["ngProjectAs","tools",5,["tools"]],["tuiItem",""],[1,"hint"],["src","tuiIconArrowLeft"]],template:function(n,i){1&n&&(t.TgZ(0,"tui-editor",0),t._uU(1," Smiles are custom tool. Try it. "),t.ynx(2,1),t._UZ(3,"smiles-tool",2),t.TgZ(4,"span",3),t._UZ(5,"tui-svg",4),t._uU(6," click it "),t.qZA(),t.BQk(),t.qZA()),2&n&&t.Q6J("formControl",i.control)("tools",i.builtInTools)},directives:[C.a,l.JJ,l.oH,v,I.w,$.P],styles:[".hint[_ngcontent-%COMP%]{color:var(--tui-base-05);height:100%;display:flex;align-items:center}"],changeDetection:0}),F})(),x=(()=>{class F{constructor(){this.example1={HTML:o.e(91398).then(o.t.bind(o,91398,17)),TypeScript:o.e(12611).then(o.t.bind(o,12611,17)),LESS:o.e(10899).then(o.t.bind(o,10899,17)),"smiles-tool/emoji.extension.ts":o.e(56892).then(o.t.bind(o,56892,17)),"smiles-tool/smiles-tool.component.ts":o.e(83317).then(o.t.bind(o,83317,17)),"smiles-tool/smiles-tool.template.html":o.e(8855).then(o.t.bind(o,8855,17)),"smiles-tool/smiles-tool.styles.less":o.e(26791).then(o.t.bind(o,26791,17)),"smiles-tool/smiles-tool.module.ts":o.e(40865).then(o.t.bind(o,40865,17))}}}return F.\u0275fac=function(n){return new(n||F)},F.\u0275cmp=t.Xpm({type:F,selectors:[["editor-custom-tool"]],features:[t._Bn([{provide:u.TUI_EDITOR_EXTENSIONS,useValue:u.defaultEditorExtensions}])],decls:17,vars:1,consts:function(){let e,n,i;return e=$localize`:␟c1a95de6ffd08f110496afe73d9e3e9631407ea9␟2361436632859407436: Rich Text Editor based on ${"\ufffd#3\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#4\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: with this component. `,e=t.Zx4(e),n=$localize`:␟eb45fe7dc22c363f63b6d6fadfbc3f59a27aecff␟8668316348766652939:Custom tool`,i=$localize`:␟17373857e6e07886d2b12ff1e9eeaa646e9bcfca␟1182211669066577326:${"[\ufffd#9\ufffd|\ufffd#13\ufffd]"}:START_LIST_ITEM: Create component with tool button (which can get access to ${"\ufffd#10\ufffd"}:START_LINK: original TipTap editor API ${"\ufffd/#10\ufffd"}:CLOSE_LINK: via ${"[\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:TuiTiptapEditorService${"[\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: from ${"[\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:@taiga-ui/addon-editor${"[\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: ). ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_LIST_ITEM:${"[\ufffd#9\ufffd|\ufffd#13\ufffd]"}:START_LIST_ITEM: Pass the component as content projection (with ${"[\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:ngProjectAs="tools"${"[\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: ) to ${"[\ufffd#11\ufffd|\ufffd#12\ufffd|\ufffd#14\ufffd|\ufffd#15\ufffd]"}:START_TAG_CODE:<tui-editor>${"[\ufffd/#11\ufffd|\ufffd/#12\ufffd|\ufffd/#14\ufffd|\ufffd/#15\ufffd]"}:CLOSE_TAG_CODE: . ${"[\ufffd/#9\ufffd|\ufffd/#13\ufffd]"}:CLOSE_LIST_ITEM:`,i=t.Zx4(i),[["header","Editor","package","ADDON-EDITOR","type","components"],e,["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","custom-tool","heading",n,3,"content"],[1,"tui-list","tui-space_bottom-6"],i,[1,"tui-list__item"],["tuiLink","","target","_blank","rel","noreferrer","href","https://tiptap.dev/api/introduction"]]},template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.TgZ(1,"p"),t.tHW(2,1),t._UZ(3,"a",2),t._UZ(4,"a",3),t.N_p(),t.qZA(),t.TgZ(5,"tui-doc-example",4),t._uU(6," You can create your own tool: "),t.TgZ(7,"ul",5),t.tHW(8,6),t.TgZ(9,"li",7),t._UZ(10,"a",8),t._UZ(11,"code"),t._UZ(12,"code"),t.qZA(),t.TgZ(13,"li",7),t._UZ(14,"code"),t._UZ(15,"code"),t.qZA(),t.N_p(),t.qZA(),t._UZ(16,"tui-editor-custom-tool-example-1"),t.qZA(),t.qZA()),2&n&&(t.xp6(5),t.Q6J("content",i.example1))},directives:[E.q,p.V,c.yS,O.f,A],encapsulation:2,changeDetection:0}),F})(),N=(()=>{class F{}return F.\u0275fac=function(n){return new(n||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[a.ez,s.TuiButtonModule,s.TuiHostedDropdownModule,m.TuiActiveZoneModule,s.TuiDropdownModule]]}),F})(),R=(()=>{class F{}return F.\u0275fac=function(n){return new(n||F)},F.\u0275mod=t.oAB({type:F}),F.\u0275inj=t.cJS({imports:[[a.ez,m.TuiActiveZoneModule,s.TuiSvgModule,s.TuiLinkModule,s.TuiHostedDropdownModule,s.TuiButtonModule,D.fV,l.u5,l.UX,u.TuiEditorModule,N,u.TuiEditorSocketModule,c.Bz.forChild((0,D.Ve)(x))]]}),F})()}}]);