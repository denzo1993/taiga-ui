"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[80831],{80831:(T,u,o)=>{o.r(u),o.d(u,{JestModule:()=>f});var d=o(12057),l=o(33982),a=o(29851),c=o(3497),e=o(74788),r=o(88331),g=o(76349);let Z=(()=>{class t{constructor(){this.jestConfigJs=o.e(32033).then(o.t.bind(o,32033,17)),this.packageJson=o.e(91173).then(o.t.bind(o,91173,17)),this.setupJestJs=o.e(83380).then(o.t.bind(o,83380,17))}}return t.\u0275fac=function(s){return new(s||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["jest"]],decls:67,vars:3,consts:function(){let n;return n=$localize`:␟1c96647f8f7cd3dc5f81a447e9fd714d3fd48ee3␟6404088366042352039:Jest`,[["header",n],[1,"tui-list"],[1,"tui-list__item"],["filename","jest.config.js",3,"code"],["filename","package.json",3,"code"],["filename","setup-jest.js",3,"code"]]},template:function(s,i){1&s&&(e.TgZ(0,"tui-doc-page",0),e.TgZ(1,"p"),e._uU(2," If you use Jest to run your tests, you need additional configuration because Jest is running on a Node.js emulator. "),e.qZA(),e.TgZ(3,"p"),e._uU(4," Taiga UI uses "),e.TgZ(5,"code"),e._uU(6,"@ng-web-apis/common"),e.qZA(),e._uU(7," to avoid accessing global variables like "),e.TgZ(8,"code"),e._uU(9,"window"),e.qZA(),e._uU(10," or "),e.TgZ(11,"code"),e._uU(12,"navigator"),e.qZA(),e._uU(13," directly. Which requires Server Side Rendering (SSR) with the help of its sister library "),e.TgZ(14,"code"),e._uU(15,"@ng-web-apis/universal"),e.qZA(),e._uU(16," for Jest to run properly. "),e.qZA(),e.TgZ(17,"p"),e._uU(18," Otherwise, you're gonna face errors like "),e.TgZ(19,"code"),e._uU(20,"ReferenceError: IntersectionObserver is not defined"),e.qZA(),e.qZA(),e.TgZ(21,"h2"),e._uU(22," Using "),e.TgZ(23,"code"),e._uU(24,"@angular-builders/jest"),e.qZA(),e._uU(25," or "),e.TgZ(26,"code"),e._uU(27,"jest-preset-angular"),e.qZA(),e.qZA(),e.TgZ(28,"p"),e._uU(29,"If you're using one of these libraries. You can follow the following steps :"),e.qZA(),e.TgZ(30,"ol",1),e.TgZ(31,"li",2),e._uU(32," Install "),e.TgZ(33,"code"),e._uU(34,"npm i @ng-web-apis/universal --save-dev"),e.qZA(),e._uU(35," (install it as a devDependency only if you will use it for Jest, otherwise install it as a regular dependency). Install 2.0 and above for Taiga UI 3.0 and above, otherwise install 1.x.x. "),e.qZA(),e.TgZ(36,"li",2),e._uU(37," Add a "),e.TgZ(38,"code"),e._uU(39,"setupFilesAfterEnv"),e.qZA(),e._uU(40," property to your "),e.TgZ(41,"code"),e._uU(42,"jest.config.js"),e.qZA(),e._uU(43," or "),e.TgZ(44,"code"),e._uU(45,"package.json"),e.qZA(),e._uU(46," jest configuration (depending on where your configuration is) with the path to "),e.TgZ(47,"code"),e._uU(48,"setup-jest.js"),e.qZA(),e._uU(49," if you have not already. "),e._UZ(50,"tui-doc-code",3),e._uU(51," or "),e._UZ(52,"tui-doc-code",4),e.qZA(),e.TgZ(53,"li",2),e._uU(54," Create the file "),e.TgZ(55,"code"),e._uU(56,"setup-jest.js"),e.qZA(),e._uU(57," (wherever you want as long as it's at the path referenced above) if you have not already. For example here at the root of the project. "),e.qZA(),e.TgZ(58,"li",2),e._uU(59," Add the following line to the "),e.TgZ(60,"code"),e._uU(61,"setup-jest.js"),e.qZA(),e._uU(62," : "),e.TgZ(63,"code"),e._uU(64,"import '@ng-web-apis/universal/mocks';"),e.qZA(),e._uU(65," . "),e._UZ(66,"tui-doc-code",5),e.qZA(),e.qZA(),e.qZA()),2&s&&(e.xp6(50),e.Q6J("code",i.jestConfigJs),e.xp6(2),e.Q6J("code",i.packageJson),e.xp6(14),e.Q6J("code",i.setupJestJs))},directives:[r.q,g.c],encapsulation:2,changeDetection:0}),t})(),f=(()=>{class t{}return t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.ez,a.fV,c.TuiLinkModule,l.Bz.forChild((0,a.Ve)(Z))]]}),t})()}}]);