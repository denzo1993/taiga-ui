(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[77644],{77644:(t,e,n)=>{n.r(e),n.d(e,{default:()=>p});var o=n(35548),s=n(39050),i=n(20764),c=n(68018),u=n(14279);function a(t,e){if(1&t&&(o.ynx(0),o._uU(1),o.BQk()),2&t){const t=e.polymorpheusOutlet;o.xp6(1),o.hij(" ",t," ")}}let r=(()=>{var t;class e{}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent5",features:[o.jDz],decls:4,vars:0,consts:[[2,"display","flex","align-items","center"],["icon","@tui.heart"]],template:function(t,e){1&t&&(o.TgZ(0,"label",0)(1,"em"),o._uU(2,"From custom label component with"),o.qZA(),o._UZ(3,"tui-icon",1),o.qZA())},dependencies:[i.TuiIconComponent],encapsulation:2,changeDetection:0}),e})(),l=(()=>{var t;class e{constructor(){this.context=(0,o.f3M)(c.yf)}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["ng-component"]],standalone:!0,features:[o.jDz],decls:5,vars:2,consts:[[4,"polymorpheusOutlet","polymorpheusOutletContext"]],template:function(t,e){1&t&&(o.TgZ(0,"h4"),o._uU(1,"Start content"),o.qZA(),o.YNc(2,a,2,1,"ng-container",0),o.TgZ(3,"h4"),o._uU(4,"End content"),o.qZA()),2&t&&(o.xp6(2),o.Q6J("polymorpheusOutlet",e.context.label)("polymorpheusOutletContext",e.context))},dependencies:[c.s$],encapsulation:2,changeDetection:0}),e})();const p=(()=>{var t;class e{constructor(){this.router=(0,o.f3M)(s.F0),this.alerts=(0,o.f3M)(i.TuiAlertService),this.notification=this.alerts.open(new c.Al(l),{label:({status:t})=>"error"===t?"Error label from function":"Info label from function",status:"error",autoClose:0}).pipe((0,u.R)(this.router.events)),this.notificationWithCustomLabel=this.alerts.open(new c.Al(l),{label:new c.Al(r),status:"warning",autoClose:0}).pipe((0,u.R)(this.router.events))}showNotification(){this.notification.subscribe()}showNotificationWithCustomLabel(){this.notificationWithCustomLabel.subscribe()}}return(t=e).ɵfac=function(e){return new(e||t)},t.ɵcmp=o.Xpm({type:t,selectors:[["tui-alerts-example-5"]],standalone:!0,features:[o.jDz],decls:5,vars:0,consts:[["size","m","tuiButton","","type","button",3,"click"]],template:function(t,e){1&t&&(o.TgZ(0,"button",0),o.NdJ("click",(function(){return e.showNotification()})),o._uU(1," Using function\n"),o.qZA(),o.TgZ(2,"p")(3,"button",0),o.NdJ("click",(function(){return e.showNotificationWithCustomLabel()})),o._uU(4," Using component "),o.qZA()())},dependencies:[i.TuiButtonDirective],encapsulation:2,changeDetection:0}),e})()}}]);