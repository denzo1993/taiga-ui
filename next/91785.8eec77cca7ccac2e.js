(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[91785],{91785:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var o=n(4594),r=n(7233),i=n(29722),l=n(68018),a=n(12569),s=n(35548);let c=(()=>{var e;class t extends i.TuiTreeItemContentComponent{get icon(){return this.isExpandable?"@tui.folder":"@tui.file"}}return(e=t).ɵfac=function(){let t;return function(n){return(t||(t=s.n5z(e)))(n||e)}}(),e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],hostBindings:function(e,t){1&e&&s.NdJ("click",(function(){return t.onClick()}))},standalone:!0,features:[s.qOj,s.jDz],decls:2,vars:2,consts:[[1,"tui-space_right-2",3,"icon"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(s._UZ(0,"tui-icon",0),s.GkF(1,1)),2&e&&(s.Q6J("icon",t.icon),s.xp6(1),s.Q6J("ngTemplateOutlet",t.context.template))},dependencies:[a.TuiIcon,o.tP],styles:['[_nghost-%COMP%]{transition-property:background;transition-duration:var(--tui-duration, .3s);transition-timing-function:ease-in-out;position:relative;height:var(--tui-height-s);display:flex;align-items:center;padding:0 .5rem;border-radius:var(--tui-radius-xs);background:var(--tui-base-01)}[_nghost-%COMP%]:before, [_nghost-%COMP%]:after{content:"";position:absolute;left:-.75rem;z-index:-1}[_nghost-%COMP%]:before{width:1rem;border-bottom:1px solid var(--tui-base-04)}[_nghost-%COMP%]:after{top:-1rem;bottom:1rem;border-left:1px solid var(--tui-base-04)}._expandable[_nghost-%COMP%]:hover{cursor:pointer;background:var(--tui-base-02)}tui-icon[_ngcontent-%COMP%]{position:relative;background:inherit;z-index:1}']}),t})();var u=n(37770),d=n(52659),p=n(43204);function h(e,t){if(1&e&&s._UZ(0,"tui-tree",2),2&e){const e=t.$implicit,n=s.oxw(),o=s.MAs(2);s.Q6J("childrenHandler",n.handler)("content",o)("tuiTreeController",!0)("value",e)}}function f(e,t){if(1&e&&s._uU(0),2&e){const e=t.$implicit;s.hij(" ",e.text,"\n")}}const m=(()=>{var e;class t{constructor(){this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||r.EMPTY_ARRAY}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=s.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent5",features:[s._Bn([{provide:i.TUI_TREE_CONTENT,useValue:new l.Al(c)}]),s.jDz],decls:3,vars:1,consts:[[3,"childrenHandler","content","tuiTreeController","value",4,"ngFor","ngForOf"],["content",""],[3,"childrenHandler","content","tuiTreeController","value"]],template:function(e,t){1&e&&(s.YNc(0,h,1,4,"tui-tree",0),s.YNc(1,f,1,1,"ng-template",null,1,s.W1O)),2&e&&s.Q6J("ngForOf",t.data.children)},dependencies:[i.TuiTree,u.Y,d.n,p.o,o.sg],styles:["tui-tree[_ngcontent-%COMP%]{overflow:hidden}"],changeDetection:0}),t})()}}]);