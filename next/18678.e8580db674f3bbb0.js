(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[18678],{18678:(t,n,e)=>{e.r(n),e.d(n,{default:()=>x});var i=e(39050),o=e(58578),u=e(7233),r=e(12569),a=e(4328),c=e(35548),s=e(73343),p=e(40184);function g(t,n){if(1&t&&c._UZ(0,"div",3),2&t){const t=c.oxw();c.Udp("background-image",t.background)}}function d(t,n){1&t&&(c.TgZ(0,"div")(1,"h2"),c._uU(2,"Carousel is awesome"),c.qZA(),c.TgZ(3,"p"),c._uU(4,"It can show arbitrary content and it's very easy to control"),c.qZA()())}function l(t,n){if(1&t&&(c.TgZ(0,"div")(1,"h2"),c._uU(2,"Pagination"),c.qZA(),c.TgZ(3,"p"),c._uU(4," You can use "),c.TgZ(5,"a",12),c._uU(6," Pagination "),c.qZA(),c._uU(7," component with size 's' together with it "),c.qZA()()),2&t){const t=c.oxw(2);c.xp6(5),c.Q6J("routerLink",t.routes.Pagination)}}function h(t,n){1&t&&(c.TgZ(0,"div")(1,"h2"),c._uU(2,"Buttons"),c.qZA(),c.TgZ(3,"p"),c._uU(4," Use "),c.TgZ(5,"code"),c._uU(6,"tuiCarouselButtons"),c.qZA(),c._uU(7," directive to setup navigation buttons "),c.qZA()())}function m(t,n){if(1&t){const t=c.EpF();c.TgZ(0,"div",4),c.NdJ("touchstart.passive.stop",(function(){return 0})),c.TgZ(1,"button",5),c.NdJ("click",(function(){c.CHM(t);const n=c.oxw();return c.KtG(n.navigate(-1))})),c.qZA(),c.TgZ(2,"tui-carousel",6),c.NdJ("indexChange",(function(n){c.CHM(t);const e=c.oxw();return c.KtG(e.index=n)})),c.YNc(3,d,5,0,"div",7),c.YNc(4,l,8,1,"div",7),c.YNc(5,h,8,0,"div",7),c.qZA(),c.TgZ(6,"button",8),c.NdJ("click",(function(){c.CHM(t);const n=c.oxw();return c.KtG(n.navigate(1))})),c.qZA()(),c.TgZ(7,"tui-pagination",9),c.NdJ("indexChange",(function(n){c.CHM(t);const e=c.oxw();return c.KtG(e.index=n)})),c.qZA(),c.TgZ(8,"div",10)(9,"button",11),c.NdJ("click",(function(){c.CHM(t);const n=c.oxw();return c.KtG(n.open=!1)})),c._uU(10," Got it! "),c.qZA()()}if(2&t){const t=c.oxw();c.xp6(2),c.Q6J("index",t.index),c.xp6(5),c.Q6J("length",3)("index",t.index)}}const f=function(t){return{size:"s",header:t}},x=(()=>{var t;class n{constructor(){this.routes=o.o,this.open=!1,this.index=0}get background(){switch(this.index){case 0:return"url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)";case 1:return"url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)";default:return"url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)"}}onClick(){this.index=0,this.open=!0}navigate(t){this.index=(this.index+t)%3}}return(t=n).ɵfac=function(n){return new(n||t)},t.ɵcmp=c.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent4",features:[c.jDz],decls:5,vars:4,consts:[["size","m","tuiButton","","type","button",3,"click"],["header",""],[3,"tuiDialogOptions","tuiDialog","tuiDialogChange"],[1,"header"],["tuiCarouselButtons","",1,"wrapper",3,"touchstart.passive.stop"],["appearance","neutral","iconLeft","@tui.chevron-left","tuiIconButton","","tuiTheme","dark","type","button",1,"tui-space_right-4",3,"click"],[3,"index","indexChange"],[4,"tuiItem"],["appearance","neutral","iconLeft","@tui.chevron-right","tuiIconButton","","tuiTheme","dark","type","button",1,"tui-space_left-4",3,"click"],["size","s",1,"tui-space_top-4",3,"length","index","indexChange"],[1,"tui-space_top-4"],["appearance","primary","tuiButton","","type","button",3,"click"],["tuiLink","",3,"routerLink"]],template:function(t,n){if(1&t&&(c.TgZ(0,"button",0),c.NdJ("click",(function(){return n.onClick()})),c._uU(1," Show dialog with carousel\n"),c.qZA(),c.YNc(2,g,1,2,"ng-template",null,1,c.W1O),c.YNc(4,m,11,3,"ng-template",2),c.NdJ("tuiDialogChange",(function(t){return n.open=t}))),2&t){const t=c.MAs(3);c.xp6(4),c.Q6J("tuiDialogOptions",c.VKq(2,f,t))("tuiDialog",n.open)}},dependencies:[r.TuiButton,r.TuiDialogModule,s.i,a.TuiCarouselComponent,r.TuiLink,i.rH,a.TuiPaginationModule,p.r,a.TuiCarouselButtonsDirective,u.TuiItem],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;margin:0 -5rem}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]{margin:0}tui-root._mobile[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], tui-root._mobile   [_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:none}.header[_ngcontent-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;height:10rem;flex:1;background:var(--tui-base-01) center;background-size:cover}"],changeDetection:0}),n})()}}]);