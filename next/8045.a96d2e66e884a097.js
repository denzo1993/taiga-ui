(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8045],{8045:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var l=n(4594),o=n(66094),i=n(7233),r=n(12569),c=n(29722),a=n(35548),u=n(37770),s=n(52659),p=n(43204);function d(e,t){if(1&e&&a._UZ(0,"tui-tree",2),2&e){const e=t.$implicit,n=a.oxw(),l=a.MAs(2);a.Q6J("childrenHandler",n.handler)("content",l)("tuiTreeController",!0)("value",e)}}function h(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"label",3)(1,"input",4),a.NdJ("ngModelChange",(function(t){const n=a.CHM(e).$implicit,l=a.oxw();return a.KtG(l.onChecked(n,t))})),a.ALo(2,"tuiMapper"),a.qZA(),a.TgZ(3,"small"),a._uU(4),a.qZA()()}if(2&e){const e=t.$implicit,n=a.oxw();a.xp6(1),a.Q6J("ngModel",a.Dn7(2,2,e,n.getValue,n.map)),a.xp6(3),a.Oqu(e.text)}}function x(e){return e.children?e.children.map(x).reduce(((e,t)=>[...e,...t]),[]):[e]}const m=(()=>{var e;class t{constructor(){this.map=new Map,this.data={text:"Topmost",children:[{text:"Top level 1",children:[{text:"Another item",children:[{text:"Next level 1"},{text:"Next level 2"},{text:"Next level 3"}]}]},{text:"Top level 2"},{text:"Top level 3",children:[{text:"Test 1"},{text:"Test 2"}]}]},this.handler=e=>e.children||i.EMPTY_ARRAY,this.getValue=(e,t)=>{const n=x(e),l=!!t.get(n[0]);for(const e of n)if(l!==!!t.get(e))return null;return l}}onChecked(e,t){x(e).forEach((e=>this.map.set(e,t))),this.map=new Map(this.map.entries())}}return(e=t).ɵfac=function(t){return new(t||e)},e.ɵcmp=a.Xpm({type:e,selectors:[["ng-component"]],standalone:!0,exportAs:"ExampleComponent6",features:[a.jDz],decls:3,vars:1,consts:[[3,"childrenHandler","content","tuiTreeController","value",4,"ngFor","ngForOf"],["content",""],[3,"childrenHandler","content","tuiTreeController","value"],["tuiLabel","",1,"tui-space_vertical-2","tui-space_left-1"],["size","s","tuiCheckbox","","type","checkbox",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.YNc(0,d,1,4,"tui-tree",0),a.YNc(1,h,5,6,"ng-template",null,1,a.W1O)),2&e&&a.Q6J("ngForOf",t.data.children)},dependencies:[c.TuiTree,u.Y,s.n,p.o,l.sg,c.TuiCheckboxComponent,r.TuiLabel,o.u5,o.Wl,o.JJ,o.On,i.TuiMapperPipe],encapsulation:2,changeDetection:0}),t})()}}]);