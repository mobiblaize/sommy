(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{hpOI:function(e,t,n){"use strict";n.r(t),n.d(t,"ProductsGalleryModule",(function(){return u}));var a=n("SVse"),o=n("iInd"),i=n("8Y7J"),r=n("cUpR");function l(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"a",18),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]().$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate"](e.name)}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"nav",16),i["\u0275\u0275template"](1,l,2,1,"a",17),i["\u0275\u0275elementEnd"]()),2&e){const e=i["\u0275\u0275nextContext"]().$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",e.types.length>1)}}function p(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"li",5),i["\u0275\u0275elementStart"](1,"a",14),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.$implicit;return i["\u0275\u0275nextContext"]().toSection(n.name)})),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](3,m,2,1,"nav",15),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate1"](" ",e.name," "),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngForOf",e.types)}}function c(e,t){if(1&e){const e=i["\u0275\u0275getCurrentView"]();i["\u0275\u0275elementStart"](0,"div",23),i["\u0275\u0275element"](1,"img",24),i["\u0275\u0275elementStart"](2,"p",25),i["\u0275\u0275listener"]("click",(function(){i["\u0275\u0275restoreView"](e);const n=t.index,a=i["\u0275\u0275nextContext"]().index;return i["\u0275\u0275nextContext"]().onSelect(a,n)})),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275propertyInterpolate1"]("src","assets/img/",e.image,"",i["\u0275\u0275sanitizeUrl"]),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.name.toUpperCase())}}function s(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"div",19),i["\u0275\u0275elementStart"](1,"h3",20,21),i["\u0275\u0275text"](3),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](4,"div",1),i["\u0275\u0275template"](5,c,4,2,"div",22),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;i["\u0275\u0275advance"](1),i["\u0275\u0275propertyInterpolate"]("id",e.name),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](e.name),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",e.types)}}const d=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.titleService=t,this.pastries=[{name:"Cake",types:[{name:"Soft sponge Cake",image:"sponge.jpg"},{name:"Red velvet Cake",image:"RED-VELVET.jpg"},{name:"Chocolate Cake",image:"chocolate.jpg"},{name:"Vanilla Cake",image:"vanilla.jpg"},{name:"Fondant Cake",image:"fondant.jpg"},{name:"Butter Cake",image:"butter.jpg"}]},{name:"Meat-pie",types:[{name:"Meat-pie",image:"meatpie.jpg"}]},{name:"Samosa",types:[{name:"Samosa",image:"samosa.jpg"}]},{name:"Puff-puff",types:[{name:"Puff-puff",image:"puff-puff.jfif"}]},{name:"Chin-chin",types:[{name:"Long Chin-chin",image:"long-chin-chin.jpg"},{name:"Short Chin-chin",image:"short-chin-chin.jpg"}]},{name:"Peanuts",types:[{name:"Peanuts",image:"peanut-burger-recipe.jpg"}]},{name:"Sausage",types:[{name:"Sausage",image:"sausage.jpg"}]},{name:"Pizza",types:[{name:"Pizza",image:"pizza.png"}]},{name:"Butter-cookies",types:[{name:"Butter-cookies",image:"Butter_Cookies.jpg"}]},{name:"Bread-pizza",types:[{name:"Bread-pizza",image:"bread-pizza.jpg"}]},{name:"Bread",types:[{name:"Bread",image:"bread.jpg"}]},{name:"Pop-corn",types:[{name:"Pop-corn",image:"pop-corn.jpg"}]}]}ngOnInit(){this.titleService.setTitle("Product Gallery")}onSelect(e,t){let n=this.pastries[e].types[t].name.replace(/\s/g,"-");this.router.navigate(["/order",n.toLowerCase()])}toSection(e){const t=document.getElementById(e).getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:t,behavior:"smooth"})}}return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](o.f),i["\u0275\u0275directiveInject"](r.b))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-products-gallery"]],decls:16,vars:2,consts:[[1,"container-fluid"],[1,"row"],["id","sidebarMenu",1,"col-md-3","col-lg-2","d-md-block","bg-light","sidebar","collapse","sticky-top"],[1,"sidebar-sticky","pt-3"],[1,"nav","flex-column"],[1,"nav-item"],[1,"products-label"],["href","#",1,"nav-link","active"],["data-feather","home"],[1,"sr-only"],["class","nav-item",4,"ngFor","ngForOf"],["role","main",1,"col-md-9","ml-sm-auto","col-lg-10","px-md-4"],[1,"container"],["class","products","data-spy","scroll","data-target","#navbar-example3","data-offset","0",4,"ngFor","ngForOf"],["role","button",1,"nav-link","text-primary","pb-0",3,"click"],["class","nav nav-pills flex-column",4,"ngFor","ngForOf"],[1,"nav","nav-pills","flex-column"],["class","nav-link py-0 my-1 btn-sm text-secondary",4,"ngIf"],[1,"nav-link","py-0","my-1","btn-sm","text-secondary"],["data-spy","scroll","data-target","#navbar-example3","data-offset","0",1,"products"],[1,"primary","products-main-title","text-primary",3,"id"],["{{pastry.name}}",""],["class","col-sm-12 col-md-4 content-box",4,"ngFor","ngForOf"],[1,"col-sm-12","col-md-4","content-box"],["alt","SOFT SPONGE CAKE",1,"products-display",3,"src"],[1,"btn","btn-md","btn-outline-primary","w-100","mt-1",3,"click"]],template:function(e,t){1&e&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275elementStart"](1,"div",1),i["\u0275\u0275elementStart"](2,"nav",2),i["\u0275\u0275elementStart"](3,"div",3),i["\u0275\u0275elementStart"](4,"ul",4),i["\u0275\u0275elementStart"](5,"li",5),i["\u0275\u0275elementStart"](6,"h3",6),i["\u0275\u0275elementStart"](7,"a",7),i["\u0275\u0275element"](8,"span",8),i["\u0275\u0275text"](9," Products "),i["\u0275\u0275elementStart"](10,"span",9),i["\u0275\u0275text"](11,"(current)"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275template"](12,p,4,2,"li",10),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](13,"main",11),i["\u0275\u0275elementStart"](14,"div",12),i["\u0275\u0275template"](15,s,6,3,"div",13),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e&&(i["\u0275\u0275advance"](12),i["\u0275\u0275property"]("ngForOf",t.pastries),i["\u0275\u0275advance"](3),i["\u0275\u0275property"]("ngForOf",t.pastries))},directives:[a.NgForOf,a.NgIf],styles:[".gallery-nav[_ngcontent-%COMP%]{top:60px}.products[_ngcontent-%COMP%]:first-child{padding-top:50px}.btn[_ngcontent-%COMP%]{border-radius:0}.products-display[_ngcontent-%COMP%]{width:100%}.content-box[_ngcontent-%COMP%]{padding-bottom:30px}.sidebar[_ngcontent-%COMP%]{overflow:hidden;overflow-y:scroll;position:fixed;top:0;bottom:0;left:0;z-index:9998;padding:48px 0 0;box-shadow:inset -1px 0 0 rgba(0,0,0,.1)}.products-label[_ngcontent-%COMP%]{margin-bottom:0}.nav-item[_ngcontent-%COMP%]:last-child{padding-bottom:40px}"]}),e})()}];let g=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.j.forChild(d)],o.j]}),e})(),u=(()=>{class e{}return e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule,g]]}),e})()}}]);