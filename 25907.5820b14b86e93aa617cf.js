"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25907],{25907:(D,u,t)=>{t.r(u),t.d(u,{ExampleTuiEditorFocusModule:()=>S});var F=t(12057),l=t(24751),h=t(33982),m=t(29851),i=t(48014),T=t(68339),a=t(3497),n=t(74788),E=t(88331),c=t(66596),f=t(57068),g=t(69303),r=t(20179);let p=(()=>{class s{constructor(){this.builtInTools=[i.TuiEditorTool.Undo,i.TuiEditorTool.Img,i.TuiEditorTool.Link,i.TuiEditorTool.Anchor],this.control=new l.NI('<img src="./assets/images/piece-and-war.jpg" width="732" alt="" title="" data-type="image-editor"><p><strong>WYSIWYG</strong> (<em>What you see is what you get</em>) \u2014 <u>Rich Text Editor</u> for using with Angular <sup>forms.</sup></p><h1>Heading</h1><p>Lorem ipsum dolor sit amet consectetur <a target="_blank" rel="noopener noreferrer nofollow" href="http://taiga-ui.dev">adipiscing elit</a>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</p><blockquote><p> ad minim veniam, quis nostrud exercitation <span style="color: rgb(196, 11, 8); background-color: rgb(221, 228, 237)">ullamco</span>, laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p></blockquote><p style="text-align: right">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><pre><code>class EditorExample {}</code></pre><table><tbody><tr><th colspan="1" rowspan="1"><p></p></th><th colspan="1" rowspan="1"><p>Free</p></th><th colspan="1" rowspan="1"><p>Pro</p></th></tr><tr><td colspan="1" rowspan="1"><p>24/7 support</p></td><td style="background: rgb(255, 221, 41)" colspan="1" rowspan="1"><p>+</p></td><td style="background: rgb(57, 181, 77)" colspan="1" rowspan="1"><p>+</p></td></tr></tbody></table><p style="text-align: center"><code>Code in text</code></p>')}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["tui-editor-focus-example-1"]],features:[n._Bn([{provide:i.TUI_EDITOR_EXTENSIONS,deps:[n.zs3],useFactory:e=>[Promise.resolve().then(t.bind(t,2823)).then(({StarterKit:o})=>o).then(o=>o.configure({heading:{levels:[1,2]}})),t.e(73336).then(t.bind(t,73336)).then(({default:o})=>o.configure({types:["heading","paragraph"]})),Promise.resolve().then(t.bind(t,84402)).then(({default:o})=>o),t.e(17991).then(t.bind(t,17991)).then(({default:o})=>o),t.e(77147).then(t.bind(t,77147)).then(({default:o})=>o),t.e(25034).then(t.bind(t,25034)).then(({default:o})=>o),Promise.resolve().then(t.bind(t,52658)).then(({FontColor:o})=>o),Promise.resolve().then(t.bind(t,57734)).then(({TuiLink:o})=>o),t.e(54058).then(t.bind(t,54058)).then(({TuiJumpAnchor:o})=>o),Promise.resolve().then(t.bind(t,93763)).then(({TuiFileLink:o})=>o),Promise.resolve().then(t.bind(t,15736)).then(({BackgroundColor:o})=>o),Promise.resolve().then(t.bind(t,86624)).then(({TuiTable:o})=>o.configure({resizable:!0})),t.e(45213).then(t.bind(t,45213)).then(({default:o})=>o),t.e(71397).then(t.bind(t,71397)).then(({default:o})=>o),t.e(38840).then(t.bind(t,38840)).then(({TableHeader:o})=>o),Promise.resolve().then(t.bind(t,12177)).then(({TuiTabExtension:o})=>o),Promise.resolve().then(t.bind(t,51919)).then(({TableCellBackground:o})=>o),t.e(44312).then(t.bind(t,44312)).then(({TuiDetailsContent:o})=>o),t.e(44312).then(t.bind(t,44312)).then(({TuiDetails:o})=>o),t.e(44312).then(t.bind(t,44312)).then(({TuiSummary:o})=>o),Promise.resolve().then(t.bind(t,9492)).then(({TuiFontSize:o})=>o),Promise.resolve().then(t.bind(t,53380)).then(({createImageEditorExtension:o})=>o(e)),t.e(13725).then(t.bind(t,13725)).then(({FocusClasses:o})=>o.configure({className:"has-focus",mode:"shallowest"}))]}])],decls:8,vars:4,consts:[[1,"editor",3,"formControl","tools"],[3,"content"]],template:function(o,d){1&o&&(n._UZ(0,"tui-editor",0),n.TgZ(1,"h4"),n._uU(2,"HTML:"),n.qZA(),n._UZ(3,"tui-editor-socket",1),n.TgZ(4,"h4"),n._uU(5,"Text:"),n.qZA(),n.TgZ(6,"p"),n._uU(7),n.qZA()),2&o&&(n.Q6J("formControl",d.control)("tools",d.builtInTools),n.xp6(3),n.Q6J("content",d.control.value||""),n.xp6(4),n.Oqu(d.control.value))},directives:[g.a,l.JJ,l.oH,r.D],styles:[".has-focus:not(tui-image-editor),   tui-image-editor.has-focus img{border-radius:3px;box-shadow:0 0 0 3px #68cef8}"],changeDetection:0}),s})(),O=(()=>{class s{constructor(){this.example1={TypeScript:t.e(96909).then(t.t.bind(t,96909,17)),HTML:t.e(32572).then(t.t.bind(t,32572,17))}}}return s.\u0275fac=function(o){return new(o||s)},s.\u0275cmp=n.Xpm({type:s,selectors:[["editor-focus"]],features:[n._Bn([{provide:i.TUI_EDITOR_EXTENSIONS,useValue:i.defaultEditorExtensions}])],decls:7,vars:1,consts:function(){let e,o;return e=$localize`:␟c1a95de6ffd08f110496afe73d9e3e9631407ea9␟2361436632859407436: Rich Text Editor based on ${"\ufffd#3\ufffd"}:START_LINK: TipTap Editor ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: for using with Angular forms. For safety reasons use a ${"\ufffd#4\ufffd"}:START_LINK_1: sanitizer ${"[\ufffd/#3\ufffd|\ufffd/#4\ufffd]"}:CLOSE_LINK: with this component. `,e=n.Zx4(e),o=$localize`:␟b491cde8047ef907b80f35ec2dcc7cb42ecd391f␟1454365738147076673:Focus`,[["header","Editor","package","ADDON-EDITOR","type","components"],e,["tuiLink","","href","https://www.tiptap.dev/"],["tuiLink","","routerLink","/icon-set","fragment","sanitizer"],["id","anchors","heading",o,"description","The Focus extension adds a CSS class to focused nodes. By default it adds .has-focus, but you can change that. Note that it\u2019s only a class, the styling is totally up to you. The usage example below has some CSS for that class.",3,"content"]]},template:function(o,d){1&o&&(n.TgZ(0,"tui-doc-page",0),n.TgZ(1,"p"),n.tHW(2,1),n._UZ(3,"a",2),n._UZ(4,"a",3),n.N_p(),n.qZA(),n.TgZ(5,"tui-doc-example",4),n._UZ(6,"tui-editor-focus-example-1"),n.qZA(),n.qZA()),2&o&&(n.xp6(5),n.Q6J("content",d.example1))},directives:[E.q,c.V,h.yS,f.f,p],encapsulation:2,changeDetection:0}),s})(),S=(()=>{class s{}return s.\u0275fac=function(o){return new(o||s)},s.\u0275mod=n.oAB({type:s}),s.\u0275inj=n.cJS({imports:[[F.ez,T.TuiActiveZoneModule,a.TuiSvgModule,a.TuiLinkModule,a.TuiHostedDropdownModule,a.TuiButtonModule,m.fV,l.u5,l.UX,i.TuiEditorModule,i.TuiEditorSocketModule,h.Bz.forChild((0,m.Ve)(O))]]}),s})()}}]);