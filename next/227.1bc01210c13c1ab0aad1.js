(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{S1s2:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleMathModule",(function(){return O}));var r=n("An66"),o=n("3kIJ"),a=n("1VvW"),m=n("SVIu"),l=n("dvRg"),i=n("kZht"),c=n("OZlg"),u=n("e0eB"),p=n("iyc4"),s=n("l4xa"),d=n("YjIA"),f=n("xCPM");let v=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(1.005),precision:new o.FormControl(2)})}get rounded(){const{value:e,precision:t}=this.parametersForm.value;return Object(s.dd)(e,t)}get floored(){const{value:e,precision:t}=this.parametersForm.value;return Object(s.sc)(e,t)}get ceiled(){const{value:e,precision:t}=this.parametersForm.value;return Object(s.lc)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2",3,"precision"],["formControlName","precision",1,"tui-space_top-2"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"p"),i["\u0275\u0275text"](5),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](6,"form",0),i["\u0275\u0275elementStart"](7,"div",1),i["\u0275\u0275elementStart"](8,"tui-input-number",2),i["\u0275\u0275text"](9," value "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](10,"tui-input-number",3),i["\u0275\u0275text"](11," precision "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"]("",t.rounded," = round(value, precision);"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",t.floored," = floor(value, precision);"),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"]("",t.ceiled," = ceil(value, precision);"),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",t.parametersForm),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("precision",3))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),b=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(13),fromInclude:new o.FormControl(5),toExclude:new o.FormControl(42)})}get ranged(){const{value:e,fromInclude:t,toExclude:n}=this.parametersForm.value;return Object(s.Dc)(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","fromInclude",1,"tui-space_top-2"],["formControlName","toExclude",1,"tui-space_top-2"]],template:function(e,t){1&e&&(i["\u0275\u0275text"](0),i["\u0275\u0275elementStart"](1,"form",0),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"tui-input-number",2),i["\u0275\u0275text"](4," value "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"tui-input-number",3),i["\u0275\u0275text"](6," fromInclude "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"tui-input-number",4),i["\u0275\u0275text"](8," toExclude "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275textInterpolate1"]("",t.ranged," = inRange(value, fromInclude, toExclude); "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get normalized(){const{value:e,min:t,max:n}=this.parametersForm.value;return Object(s.Wc)(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-3"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(i["\u0275\u0275text"](0),i["\u0275\u0275elementStart"](1,"form",0),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"tui-input-number",2),i["\u0275\u0275text"](4," value "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"tui-input-number",3),i["\u0275\u0275text"](6," min "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"tui-input-number",4),i["\u0275\u0275text"](8," max "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275textInterpolate1"]("",t.normalized," = normalizeToIntNumber(value, min, max); "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),h=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(3),quantum:new o.FormControl(2)})}get quantized(){const{value:e,quantum:t}=this.parametersForm.value;return Object(s.cd)(e,t)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-4"]],decls:7,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","quantum",1,"tui-space_top-2"]],template:function(e,t){1&e&&(i["\u0275\u0275text"](0),i["\u0275\u0275elementStart"](1,"form",0),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"tui-input-number",2),i["\u0275\u0275text"](4," value "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"tui-input-number",3),i["\u0275\u0275text"](6," quantum "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275textInterpolate1"]("",t.quantized," = quantize(value, quantum); "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),g=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(0),min:new o.FormControl(5),max:new o.FormControl(42)})}get clamped(){const{value:e,min:t,max:n}=this.parametersForm.value;return Object(s.nc)(e,t,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-math-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","min",1,"tui-space_top-2"],["formControlName","max",1,"tui-space_top-2"]],template:function(e,t){1&e&&(i["\u0275\u0275text"](0),i["\u0275\u0275elementStart"](1,"form",0),i["\u0275\u0275elementStart"](2,"div",1),i["\u0275\u0275elementStart"](3,"tui-input-number",2),i["\u0275\u0275text"](4," value "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"tui-input-number",3),i["\u0275\u0275text"](6," min "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](7,"tui-input-number",4),i["\u0275\u0275text"](8," max "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275textInterpolate1"]("",t.clamped," = clamp(value, min, max); "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,d.a,f.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var S=n("u8jZ");const C=["header",$localize`:␟eef2307cf678cdf74d7144079256b7fc344c4950␟5686247209877234159:Math utils`],E=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var F;F=$localize`:␟dd7f17d22638f1551ac688f17563777ddf34163b␟5211598598885509667:A set of utils to calculate math`;const w=["description",$localize`:␟49e3fcef24f18647990d6a9fa1ba78c9f3b862ff␟3234087131078550251:round, floor and ceil with fixed common problems of the native implementation`],y=["description",$localize`:␟5fcae35432bf500967c987df7ee13cfd897f95ca␟984110598713888465:Checks if the value is in range`],_=["description",$localize`:␟5756cf697456ca17c1bfcfce7ab2da2a2976bbcb␟6385777968328902844:Normalizes any number to an integer within inclusive range`],N=["description",$localize`:␟1fa93f4bf5540e71f14d1c49c60f0aa77cccd7d9␟7695262008739590886:Rounds a number to the closest value in a fixed discrete series`],G=["description",$localize`:␟3788fc82353479c593b85fecef9b30b97b44c431␟2743889011977351178:Clamps a value between two inclusive limits`];function z(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"p"),i["\u0275\u0275i18n"](1,F),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](2,"tui-doc-example",3),i["\u0275\u0275i18nAttributes"](3,w),i["\u0275\u0275element"](4,"tui-math-example-1"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](5,"tui-doc-example",4),i["\u0275\u0275i18nAttributes"](6,y),i["\u0275\u0275element"](7,"tui-math-example-2"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](8,"tui-doc-example",5),i["\u0275\u0275i18nAttributes"](9,_),i["\u0275\u0275element"](10,"tui-math-example-3"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](11,"tui-doc-example",6),i["\u0275\u0275i18nAttributes"](12,N),i["\u0275\u0275element"](13,"tui-math-example-4"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](14,"tui-doc-example",7),i["\u0275\u0275i18nAttributes"](15,G),i["\u0275\u0275element"](16,"tui-math-example-5"),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("content",e.example1),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("content",e.example2),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("content",e.example3),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("content",e.example4),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("content",e.example5)}}var I;function M(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"ol",8),i["\u0275\u0275elementStart"](1,"li"),i["\u0275\u0275elementStart"](2,"p"),i["\u0275\u0275i18n"](3,I),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](4,"tui-doc-code",9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]();i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("code",e.importComponentExample)}}I=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let T=(()=>{class e{constructor(){this.importComponentExample=n.e(1899).then(n.bind(null,"vvRP")),this.example1={TypeScript:n.e(1886).then(n.bind(null,"S2y/")),HTML:n.e(1884).then(n.bind(null,"6cx+")),LESS:n.e(1885).then(n.bind(null,"mylP"))},this.example2={TypeScript:n.e(1889).then(n.bind(null,"78U/")),HTML:n.e(1887).then(n.bind(null,"0xCG")),LESS:n.e(1888).then(n.bind(null,"X6Na"))},this.example3={TypeScript:n.e(1892).then(n.bind(null,"wYx0")),HTML:n.e(1890).then(n.bind(null,"PAip")),LESS:n.e(1891).then(n.bind(null,"CDzL"))},this.example4={TypeScript:n.e(1895).then(n.bind(null,"V2pk")),HTML:n.e(1893).then(n.bind(null,"Ojen")),LESS:n.e(1894).then(n.bind(null,"5YnU"))},this.example5={TypeScript:n.e(1898).then(n.bind(null,"pQnN")),HTML:n.e(1896).then(n.bind(null,"gHGc")),LESS:n.e(1897).then(n.bind(null,"irRe"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["example-math"]],decls:5,vars:0,consts:[["package","CDK","path","cdk/utils/math",6,"header"],["pageTab",""],[6,"pageTab"],["id","round","heading","round",3,"content",6,"description"],["id","inRange","heading","inRange",3,"content",6,"description"],["id","normalizeToIntNumber","heading","normalizeToIntNumber",3,"content",6,"description"],["id","quantize","heading","quantize",3,"content",6,"description"],["id","clamp","heading","clamp",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"tui-doc-page",0),i["\u0275\u0275i18nAttributes"](1,C),i["\u0275\u0275template"](2,z,17,5,"ng-template",1),i["\u0275\u0275template"](3,M,5,1,"ng-template",2),i["\u0275\u0275i18nAttributes"](4,E),i["\u0275\u0275elementEnd"]())},directives:[c.a,u.a,p.a,v,b,x,h,g,S.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.c,l.fb,o.FormsModule,o.ReactiveFormsModule,m.m,a.f.forChild(Object(m.u)(T))]]}),e})()}}]);