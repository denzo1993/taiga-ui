"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[26473],{26473:(re,T,i)=>{i.r(T),i.d(T,{ExampleTuiSheetModule:()=>ce});var r=i(12057),Z=i(33982),h=i(11693),v=i(23121),f=i(29851),p=i(63414),g=i(3497),A=i(55908),d=i(50259),e=i(74788),U=i(88331),E=i(37159),b=i(57068),C=i(79765),_=i(43190),M=i(46782),u=i(76189);let P=(()=>{class t{constructor(n,o){this.stream$=new C.xQ,this.stream$.pipe((0,_.w)(()=>o.open("Simple sheet",{overlay:!0})),(0,M.R)(n)).subscribe()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.TuiDestroyService,2),e.Y36(p.TuiSheetService))},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-1"]],features:[e._Bn([d.TuiDestroyService])],decls:2,vars:0,consts:[["tuiButton","","type","button",3,"click"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.stream$.next()}),e._uU(1," Show/Hide\n"),e.qZA())},directives:[u.v],encapsulation:2,changeDetection:0}),t})();var m=i(77888),c=i(59113);function N(t,a){1&t&&(e.TgZ(0,"h2",2),e._uU(1,"Alexander Inkin"),e.qZA(),e.TgZ(2,"div",3),e._UZ(3,"a",4),e._UZ(4,"a",5),e._UZ(5,"a",6),e.qZA())}let O=(()=>{class t{constructor(){this.open=!1,this.options={overlay:!0,image:"assets/images/avatar.jpg"}}toggle(){this.open=!this.open}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-2"]],decls:3,vars:2,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],[1,"tui-space_top-4"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMailLarge","title","Email","href","mailto:alexander@inkin.ru",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconPhoneForwardedLarge","title","Telegram","href","https://t.me/waterplea",1,"tui-space_right-2"],["tuiIconButton","","size","m","appearance","secondary","icon","tuiIconMusicLarge","title","Music","href","https://waterplea.bandcamp.com/"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,N,6,0,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return o.open=s})),2&n&&(e.xp6(2),e.Q6J("tuiSheetOptions",o.options)("tuiSheet",o.open))},directives:[u.v,m.o,c.ui],encapsulation:2,changeDetection:0}),t})();var J=i(79121),x=i(88135),I=i(16996);function V(t,a){1&t&&(e.TgZ(0,"h2",2),e.TgZ(1,"label",3),e._uU(2,"And the Holy Grail"),e.qZA(),e.qZA(),e.TgZ(3,"p",4),e.TgZ(4,"button",5),e._uU(5," Buy "),e._UZ(6,"tui-money",6),e.qZA(),e.TgZ(7,"button",7),e._uU(8," Rent "),e._UZ(9,"tui-money",6),e.qZA(),e.qZA(),e.TgZ(10,"button",8),e._uU(11," Add to Watch List "),e.qZA(),e.TgZ(12,"h3",9),e._uU(13,"Cast:"),e.qZA(),e.TgZ(14,"p"),e._uU(15,"John Cleese"),e.qZA(),e.TgZ(16,"p"),e._uU(17,"Eric Idle"),e.qZA(),e.TgZ(18,"p"),e._uU(19,"Michael Palin"),e.qZA(),e.TgZ(20,"p"),e._uU(21,"Graham Chapman"),e.qZA(),e.TgZ(22,"p"),e._uU(23,"Terry Gilliam"),e.qZA(),e.TgZ(24,"p"),e._uU(25,"Terry Jones"),e.qZA(),e.TgZ(26,"p"),e._uU(27,"Carol Cleveland"),e.qZA(),e._UZ(28,"hr"),e.TgZ(29,"h3"),e._uU(30,"Directed by:"),e.qZA(),e.TgZ(31,"p"),e._uU(32,"Terry Gilliam"),e.qZA(),e.TgZ(33,"p"),e._uU(34,"Terry Jones"),e.qZA(),e._UZ(35,"hr"),e.TgZ(36,"h3"),e._uU(37,"Produced by:"),e.qZA(),e.TgZ(38,"p"),e._uU(39,"Mark Forstater"),e.qZA(),e.TgZ(40,"p"),e._uU(41,"Michael White"),e.qZA(),e._UZ(42,"hr"),e.TgZ(43,"h3"),e._uU(44,"Written by:"),e.qZA(),e.TgZ(45,"p"),e._uU(46,"John Cleese"),e.qZA(),e.TgZ(47,"p"),e._uU(48,"Eric Idle"),e.qZA(),e.TgZ(49,"p"),e._uU(50,"Michael Palin"),e.qZA(),e.TgZ(51,"p"),e._uU(52,"Graham Chapman"),e.qZA(),e.TgZ(53,"p"),e._uU(54,"Terry Gilliam"),e.qZA(),e.TgZ(55,"p"),e._uU(56,"Terry Jones"),e.qZA(),e._UZ(57,"hr"),e.TgZ(58,"h3"),e._uU(59,"Budget:"),e.qZA(),e.TgZ(60,"p"),e._UZ(61,"tui-money",10),e.qZA(),e._UZ(62,"hr"),e.TgZ(63,"h3"),e._uU(64,"Box office:"),e.qZA(),e.TgZ(65,"p"),e._UZ(66,"tui-money",10),e.qZA(),e._UZ(67,"hr"),e.TgZ(68,"h3"),e._uU(69,"Release date"),e.qZA(),e.TgZ(70,"p"),e._uU(71,"April 3, 1975"),e.qZA(),e._UZ(72,"hr"),e.TgZ(73,"h3"),e._uU(74,"Running time"),e.qZA(),e.TgZ(75,"p"),e._uU(76,"92 minutes"),e.qZA(),e.TgZ(77,"footer",11),e._uU(78,"\xa9 EMI Films"),e.qZA()),2&t&&(e.xp6(6),e.Q6J("value",12.99),e.xp6(3),e.Q6J("value",4.99),e.xp6(52),e.Q6J("value",4e5),e.xp6(5),e.Q6J("value",5e6))}let L=(()=>{class t{constructor(){this.open=!1,this.options={stops:["calc(5rem + 74vw)","calc(9rem + 74vw)"],image:"https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/10/IMG_0323-1024x756.jpeg"}}toggle(){this.open=!this.open}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-3"]],decls:3,vars:2,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading",""],["tuiLabel","Monty Python"],[1,"buttons"],["tuiButton","","size","m","appearance","secondary","type","button",1,"tui-space_right-2"],["currency","USD",1,"tui-space_left-1",3,"value"],["tuiButton","","size","m","type","button","appearance","secondary"],["tuiButton","","size","m","type","button",1,"action"],[1,"cast"],["currency","USD",3,"value"],[1,"footer"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,V,79,4,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return o.open=s})),2&n&&(e.xp6(2),e.Q6J("tuiSheetOptions",o.options)("tuiSheet",o.open))},directives:[u.v,m.o,c.ui,x.A,I.o],styles:[".buttons[_ngcontent-%COMP%]{display:flex;margin:.3rem 0 1rem}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{flex:1}.action[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:calc(100% - 4rem);width:100%;display:block;z-index:1}.cast[_ngcontent-%COMP%]{margin-top:-2rem}.footer[_ngcontent-%COMP%]{margin:0 -1rem -1rem;padding:1rem 1rem 5rem;background:var(--tui-base-02)}"],changeDetection:0}),t})();var B=i(98599),y=i(66596);function F(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"h2",2),e.NdJ("tuiElasticSticky",function(l){return e.CHM(n),e.oxw().onElastic(l)}),e._UZ(1,"img",3),e._uU(2," Web APIs for Angular "),e.qZA(),e.TgZ(3,"p"),e._uU(4,"Our goal is to provide high quality lightweight wrappers for various native Web APIs to use with Angular."),e.qZA(),e.TgZ(5,"h3"),e._uU(6,"Our libraries"),e.qZA(),e.TgZ(7,"p"),e.TgZ(8,"a",4),e._uU(9," Common "),e.qZA(),e.qZA(),e.TgZ(10,"p"),e.TgZ(11,"a",5),e._uU(12," Universal "),e.qZA(),e.qZA(),e.TgZ(13,"p"),e.TgZ(14,"a",6),e._uU(15," Audio "),e.qZA(),e.qZA(),e.TgZ(16,"p"),e.TgZ(17,"a",7),e._uU(18," Canvas "),e.qZA(),e.qZA(),e.TgZ(19,"p"),e.TgZ(20,"a",8),e._uU(21," Geolocation "),e.qZA(),e.qZA(),e.TgZ(22,"p"),e.TgZ(23,"a",9),e._uU(24," Intersection Observer "),e.qZA(),e.qZA(),e.TgZ(25,"p"),e.TgZ(26,"a",10),e._uU(27," MIDI "),e.qZA(),e.qZA(),e.TgZ(28,"p"),e.TgZ(29,"a",11),e._uU(30," Mutation Observer "),e.qZA(),e.qZA(),e.TgZ(31,"p"),e.TgZ(32,"a",12),e._uU(33," Payment Request "),e.qZA(),e.qZA(),e.TgZ(34,"p"),e.TgZ(35,"a",13),e._uU(36," Permissions "),e.qZA(),e.qZA(),e.TgZ(37,"p"),e.TgZ(38,"a",14),e._uU(39," Resize Observer "),e.qZA(),e.qZA(),e.TgZ(40,"p"),e.TgZ(41,"a",15),e._uU(42," Speech "),e.qZA(),e.qZA(),e.TgZ(43,"p"),e.TgZ(44,"a",16),e._uU(45," Storage "),e.qZA(),e.qZA(),e.TgZ(46,"p"),e.TgZ(47,"a",17),e._uU(48," Workers "),e.qZA(),e.qZA(),e.TgZ(49,"h3"),e._uU(50,"Sponsor"),e.qZA(),e.TgZ(51,"p"),e.TgZ(52,"a",18),e._uU(53," Open Collective "),e.qZA(),e.qZA()}if(2&t){const n=e.oxw();e.xp6(1),e.Udp("opacity",n.elastic*n.elastic*n.elastic)("transform",n.transform)}}let H=(()=>{class t{constructor(){this.open=!1,this.elastic=1,this.options={stops:["12rem"]}}get transform(){return`scale(${this.elastic*this.elastic})`}toggle(){this.elastic=1,this.open=!this.open}onElastic(n){this.elastic=n}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-4"]],decls:3,vars:2,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["tuiSheetHeading","",1,"heading",3,"tuiElasticSticky"],["src","assets/images/angular.svg","alt","Angular logo",1,"image"],["tuiLink","","href","https://github.com/ng-web-apis/common"],["tuiLink","","href","https://github.com/ng-web-apis/universal"],["tuiLink","","href","https://github.com/ng-web-apis/audio"],["tuiLink","","href","https://github.com/ng-web-apis/canvas"],["tuiLink","","href","https://github.com/ng-web-apis/geolocation"],["tuiLink","","href","https://github.com/ng-web-apis/intersection-observer"],["tuiLink","","href","https://github.com/ng-web-apis/midi"],["tuiLink","","href","https://github.com/ng-web-apis/mutation-observer"],["tuiLink","","href","https://github.com/ng-web-apis/payment-request"],["tuiLink","","href","https://github.com/ng-web-apis/permissions"],["tuiLink","","href","https://github.com/ng-web-apis/resize-observer"],["tuiLink","","href","https://github.com/ng-web-apis/speech"],["tuiLink","","href","https://github.com/ng-web-apis/storage"],["tuiLink","","href","https://github.com/ng-web-apis/workers"],["tuiLink","","href","https://opencollective.com/ng-web-apis"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,F,54,4,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return o.open=s})),2&n&&(e.xp6(2),e.Q6J("tuiSheetOptions",o.options)("tuiSheet",o.open))},directives:[u.v,m.o,c.ui,B.X,y.V],styles:[".heading[_ngcontent-%COMP%]{height:12rem;top:-8rem;display:flex;align-items:flex-end;flex-direction:row-reverse;justify-content:space-between;background:var(--tui-support-03)}.image[_ngcontent-%COMP%]{position:absolute;height:8rem;width:100%;top:1rem;left:0;transform-origin:bottom;pointer-events:none}"],changeDetection:0}),t})();function w(t,a){if(1&t&&(e.TgZ(0,"div",3),e.TgZ(1,"h2",4),e._uU(2," Planet Earth "),e.qZA(),e.TgZ(3,"div",5),e._UZ(4,"img",6),e.ALo(5,"async"),e.qZA(),e.TgZ(6,"p"),e._uU(7," Earth is the third planet from the Sun and the only astronomical object known to harbour and support life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans, seas, gulfs, and other salt-water bodies, but also by lakes, rivers, and other freshwater, which together constitute the hydrosphere. Much of Earth's polar regions are covered in ice. Earth's outer layer is divided into several rigid tectonic plates that migrate across the surface over many millions of years, while its interior remains active with a solid iron inner core, a liquid outer core that generates Earth's magnetic field, and a convective mantle that drives plate tectonics. "),e.qZA(),e.qZA()),2&t){const n=a.scroll$,o=e.oxw();e.xp6(4),e.Udp("transform",o.getTransform(e.lcZ(5,2,n)))}}let q=(()=>{class t{constructor(){this.open=!1,this.options={overlay:!0,stops:["4.5rem"]}}toggle(){this.open=!this.open}getTransform(n){return`translate3d(0, -${100/166*(Math.round((n||0)/2)%166)}%, 0)`}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-5"]],decls:4,vars:2,consts:[["tuiButton","","type","button",3,"click"],["src","assets/images/earth.jpg","alt","",1,"preload"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],[1,"wrapper"],["tuiSheetHeading","",1,"heading"],[1,"earth"],["src","assets/images/earth.jpg","alt","",1,"image"]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e._UZ(2,"img",1),e.YNc(3,w,8,4,"ng-template",2),e.NdJ("tuiSheetChange",function(s){return o.open=s})),2&n&&(e.xp6(3),e.Q6J("tuiSheetOptions",o.options)("tuiSheet",o.open))},directives:[u.v,m.o,c.ui],pipes:[r.Ov],styles:[".wrapper[_ngcontent-%COMP%]{color:#fff;background:#000;box-shadow:0 5rem 0 1rem #000}.heading[_ngcontent-%COMP%]{background:inherit}.preload[_ngcontent-%COMP%]{position:absolute;height:1px;width:1px;margin:-1px;border:0;padding:0;overflow:hidden;clip:rect(0,0,0,0);-webkit-clip-path:inset(0);clip-path:inset(0)}.earth[_ngcontent-%COMP%]{position:relative;width:50%;height:50%;margin:1rem auto;overflow:hidden}.image[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%}"],changeDetection:0}),t})();function Q(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"img",6,7),e.NdJ("waIntersectionObservee",function(l){e.CHM(n);const s=e.MAs(1);return e.oxw(2).onIntersection(l,s)}),e.qZA()}2&t&&e.Q6J("src",a.$implicit,e.LSH)}function D(t,a){if(1&t&&(e.ynx(0,2),e.TgZ(1,"h2",3),e.TgZ(2,"label",4),e._uU(3,"And the Holy Grail"),e.qZA(),e.qZA(),e.YNc(4,Q,2,1,"img",5),e.BQk()),2&t){const n=e.oxw();e.xp6(4),e.Q6J("ngForOf",n.images)}}let j=(()=>{class t{constructor(){this.open=!1,this.options={overlay:!0,stops:["5rem"]},this.images=["https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg","https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg","https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg","https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg"]}toggle(){this.open=!this.open}onIntersection([{isIntersecting:n}],{classList:o}){o.toggle("_visible",n)}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["tui-sheet-example-6"]],decls:3,vars:2,consts:[["tuiButton","","type","button",3,"click"],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["waIntersectionObserver",""],["tuiSheetHeading",""],["tuiLabel","Monty Python"],["alt","","class","image",3,"src","waIntersectionObservee",4,"ngFor","ngForOf"],["alt","",1,"image",3,"src","waIntersectionObservee"],["img",""]],template:function(n,o){1&n&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return o.toggle()}),e._uU(1," Show/Hide\n"),e.qZA(),e.YNc(2,D,5,1,"ng-template",1),e.NdJ("tuiSheetChange",function(s){return o.open=s})),2&n&&(e.xp6(2),e.Q6J("tuiSheetOptions",o.options)("tuiSheet",o.open))},directives:[u.v,m.o,h.Z7,c.ui,x.A,r.sg,h.AY],styles:[".image[_ngcontent-%COMP%]{transition-property:transform,opacity;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;width:100%;display:block;margin:1rem 0;transform:translate(-5rem);opacity:0}.image._visible[_ngcontent-%COMP%]{transform:none;opacity:1}"],changeDetection:0}),t})();var z=i(31823),Y=i(54476),k=i(17023),X=i(44124),G=i(76349);const R=["template"];function $(t,a){1&t&&(e.TgZ(0,"tui-notification",5),e._uU(1," This component only works on mobile devices. Enable emulation in DevTools "),e.qZA())}function W(t,a){if(1&t&&(e._uU(0," A mobile draggable sheet popup "),e.YNc(1,$,2,0,"tui-notification",2),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-sheet-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-sheet-example-2"),e.TgZ(6,"tui-notification",5),e._uU(7," Note "),e.TgZ(8,"code"),e._uU(9,"SheetHeading"),e.qZA(),e._uU(10," component that styles the heading and adds close button if sheet is closeable. "),e.qZA(),e.qZA(),e.TgZ(11,"tui-doc-example",6),e._UZ(12,"tui-sheet-example-3"),e.qZA(),e.TgZ(13,"tui-doc-example",7),e._UZ(14,"tui-sheet-example-4"),e.TgZ(15,"tui-notification",5),e._uU(16," Using "),e.TgZ(17,"a",8),e.TgZ(18,"code"),e._uU(19,"ElasticSticky"),e.qZA(),e.qZA(),e._uU(20," directive. "),e.qZA(),e.qZA(),e.TgZ(21,"tui-doc-example",9),e._UZ(22,"tui-sheet-example-5"),e.qZA(),e.TgZ(23,"tui-doc-example",10),e._UZ(24,"tui-sheet-example-6"),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",!n.isMobile),e.xp6(1),e.Q6J("content",n.example1),e.xp6(2),e.Q6J("content",n.example2),e.xp6(7),e.Q6J("content",n.example3),e.xp6(2),e.Q6J("content",n.example4),e.xp6(8),e.Q6J("content",n.example5),e.xp6(2),e.Q6J("content",n.example6)}}function K(t,a){1&t&&(e.TgZ(0,"div",21),e._UZ(1,"tui-avatar",22),e.TgZ(2,"h2"),e._uU(3,"Karl Gambolputty"),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("rounded",!0))}function ee(t,a){if(1&t){const n=e.EpF();e._uU(0," Karl Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm was the last-surviving relative of Johann Gambolputty de von Ausfern-schplenden-schlitter-crasscrenbon-fried-digger-dingle-dangle-dongle-dungle-burstein-von-knacker-thrasher-apple-banger-horowitz-ticolensic-grander-knotty-spelltinkle-grandlich-grumblemeyer-spelterwasser-kurstlich-himbleeisen-bahnwagen-gutenabend-bitte-ein-n\xfcrnburger-bratwustle-gerspurten-mitzweimache-luber-hundsfut-gumberaber-sh\xf6nendanker-kalbsfleisch-mittler-aucher von Hautkopft of Ulm. "),e.TgZ(1,"div",5),e.TgZ(2,"button",11),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).toggle()}),e._uU(3," Close "),e.qZA(),e.qZA()}}function te(t,a){1&t&&e._uU(0," Whether or not a sheet can be closed by user. ")}function ne(t,a){1&t&&e._uU(0," Optional data to be passed to the sheet. ")}function ie(t,a){1&t&&e._uU(0," A content to show above the sheet. ")}function oe(t,a){1&t&&e._uU(0," Should image slide as the sheet is dragged. ")}function ae(t,a){1&t&&e._uU(0," An array of stop points in any units for the sheet. ")}function le(t,a){1&t&&(e._uU(0," Initial stop index to open on. Indices exceeding "),e.TgZ(1,"code"),e._uU(2,"stops"),e.qZA(),e._uU(3," are treated as stop on image then stop on top of the sheet's content. "))}function se(t,a){1&t&&e._uU(0," Show overlay under the sheet. ")}function pe(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"tui-doc-demo"),e.TgZ(1,"button",11),e.NdJ("click",function(){return e.CHM(n),e.oxw().toggle()}),e._uU(2," Toggle "),e.qZA(),e.YNc(3,K,4,1,"ng-template",null,12,e.W1O),e.YNc(5,ee,4,0,"ng-template",13),e.NdJ("tuiSheetChange",function(l){return e.CHM(n),e.oxw().open=l}),e.qZA(),e.TgZ(6,"tui-doc-documentation"),e.YNc(7,te,1,0,"ng-template",14),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().closeable=l}),e.YNc(8,ne,1,0,"ng-template",15),e.YNc(9,ie,1,0,"ng-template",16),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().image=l}),e.YNc(10,oe,1,0,"ng-template",17),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().imageSlide=l}),e.YNc(11,ae,1,0,"ng-template",18),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().stops=l}),e.YNc(12,le,4,0,"ng-template",19),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().initial=l}),e.YNc(13,se,1,0,"ng-template",20),e.NdJ("documentationPropertyValueChange",function(l){return e.CHM(n),e.oxw().overlay=l}),e.qZA()}if(2&t){const n=e.oxw();e.xp6(5),e.Q6J("tuiSheetOptions",n.options)("tuiSheet",n.open),e.xp6(2),e.Q6J("documentationPropertyValue",n.closeable),e.xp6(2),e.Q6J("documentationPropertyValues",n.imageVariants)("documentationPropertyValue",n.image),e.xp6(1),e.Q6J("documentationPropertyValue",n.imageSlide),e.xp6(1),e.Q6J("documentationPropertyValues",n.stopsVariants)("documentationPropertyValue",n.stops),e.xp6(1),e.Q6J("documentationPropertyValue",n.initial),e.xp6(1),e.Q6J("documentationPropertyValue",n.overlay)}}function ue(t,a){if(1&t&&(e.TgZ(0,"ol",23),e.TgZ(1,"li"),e.TgZ(2,"p"),e._uU(3," Import "),e.TgZ(4,"code"),e._uU(5,"TuiSheetModule"),e.qZA(),e._uU(6," into main module of your app "),e.qZA(),e._UZ(7,"tui-doc-code",24),e.qZA(),e.TgZ(8,"li"),e.TgZ(9,"p"),e._uU(10," Add "),e.TgZ(11,"code"),e._uU(12,"tui-sheets-host"),e.qZA(),e._uU(13," to the main template like this: "),e.qZA(),e._UZ(14,"tui-doc-code",25),e.qZA(),e.TgZ(15,"li"),e.TgZ(16,"p"),e._uU(17,"Use directive or service as shown in examples."),e.qZA(),e.qZA(),e.qZA()),2&t){const n=e.oxw();e.xp6(7),e.Q6J("code",n.exampleModule),e.xp6(7),e.Q6J("code",n.exampleHtml)}}let me=(()=>{class t{constructor(n){this.isMobile=n,this.templateRef="",this.example1={TypeScript:i.e(27980).then(i.t.bind(i,27980,17)),HTML:i.e(14065).then(i.t.bind(i,14065,17))},this.example2={TypeScript:i.e(56393).then(i.t.bind(i,56393,17)),HTML:i.e(80701).then(i.t.bind(i,80701,17))},this.example3={TypeScript:i.e(20075).then(i.t.bind(i,20075,17)),HTML:i.e(12601).then(i.t.bind(i,12601,17)),LESS:i.e(46823).then(i.t.bind(i,46823,17))},this.example4={TypeScript:i.e(13242).then(i.t.bind(i,13242,17)),HTML:i.e(18247).then(i.t.bind(i,14792,17)),LESS:i.e(14582).then(i.t.bind(i,14582,17))},this.example5={TypeScript:i.e(86695).then(i.t.bind(i,86695,17)),HTML:i.e(35781).then(i.t.bind(i,35781,17)),LESS:i.e(95952).then(i.t.bind(i,95952,17))},this.example6={TypeScript:i.e(78946).then(i.t.bind(i,78946,17)),HTML:i.e(19116).then(i.t.bind(i,19116,17)),LESS:i.e(80217).then(i.t.bind(i,80217,17))},this.exampleModule=i.e(37086).then(i.t.bind(i,37086,17)),this.exampleHtml=i.e(44694).then(i.t.bind(i,44694,17)),this.closeable=p.TUI_SHEET_DEFAULT_OPTIONS.closeable,this.image=p.TUI_SHEET_DEFAULT_OPTIONS.image,this.imageSlide=p.TUI_SHEET_DEFAULT_OPTIONS.imageSlide,this.initial=p.TUI_SHEET_DEFAULT_OPTIONS.initial,this.overlay=p.TUI_SHEET_DEFAULT_OPTIONS.overlay,this.stops=p.TUI_SHEET_DEFAULT_OPTIONS.stops,this.open=!1,this.imageVariants=[this.image,"/assets/images/avatar.jpg","Template"],this.stopsVariants=[this.stops,["100px"],["10rem","20rem"]]}get computedImage(){return"Template"===this.image?this.templateRef:this.image}get options(){return{closeable:this.closeable,image:this.computedImage,imageSlide:this.imageSlide,stops:this.stops,initial:this.initial,overlay:this.overlay}}toggle(){this.open=!this.open}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.TUI_IS_MOBILE))},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-sheet"]],viewQuery:function(n,o){if(1&n&&e.Gf(R,5),2&n){let l;e.iGM(l=e.CRH())&&(o.templateRef=l.first)}},decls:4,vars:0,consts:[["header","Sheet","package","ADDON-MOBILE","type","components"],["pageTab",""],["class","tui-space_top-4",4,"ngIf"],["id","string","heading","String",3,"content"],["id","basic","heading","Basic",3,"content"],[1,"tui-space_top-4"],["id","advanced","heading","Advanced",3,"content"],["id","elastic","heading","Elastic sticky",3,"content"],["tuiLink","","routerLink","directives/elastic-sticky"],["id","scroll","heading","Scroll","description","Modifying content using scroll stream from the context",3,"content"],["id","intersection","heading","IntersectionObserver","description","Modifying content with IntersectionObserver",3,"content"],["tuiButton","","type","button",3,"click"],["template",""],[3,"tuiSheetOptions","tuiSheet","tuiSheetChange"],["documentationPropertyName","closeable","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","data","documentationPropertyType","I"],["documentationPropertyName","image","documentationPropertyType","PolymorpheusContent<TuiSheetOptions<I>>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","imageSlide","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","stops","documentationPropertyType","string[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","initial","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","overlay","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"top"],["text","Karl Gambolputty","size","l",3,"rounded"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(n,o){1&n&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,W,25,7,"ng-template",1),e.YNc(2,pe,14,10,"ng-template",1),e.YNc(3,ue,18,2,"ng-template",1),e.qZA())},directives:[U.q,E.n,r.O5,b.f,P,O,J.L,L,H,y.V,Z.yS,q,j,z.F,u.v,m.o,Y.z,k.B,X.J,G.c],styles:[".top[_ngcontent-%COMP%]{background:var(--tui-accent);padding:1rem;display:flex;flex-direction:column;align-items:center}"],changeDetection:0}),t})(),ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[r.ez,g.TuiButtonModule,g.TuiLabelModule,v.TuiMoneyModule,A.TuiAvatarModule,g.TuiNotificationModule,g.TuiLinkModule,p.TuiElasticStickyModule,p.TuiSheetModule,h.$v,f.fV,Z.Bz.forChild((0,f.Ve)(me))]]}),t})()}}]);