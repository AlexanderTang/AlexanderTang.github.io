(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"35Rh":function(l,n,u){"use strict";var t=u("8Y7J"),e=u("s7LF");class r{constructor(l){this.router=l}onSubmitSearch(){this.router.navigate(["/search-results"],{queryParams:{"search-term":this.searchTerm}})}}var o=u("iInd"),a=t.nb({encapsulation:2,styles:[],data:{}});function i(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,18,"div",[["class","card mb-4"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Search"])),(l()(),t.pb(3,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,r=l.component;return"submit"===n&&(e=!1!==t.Bb(l,6).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Bb(l,6).onReset()&&e),"ngSubmit"===n&&(e=!1!==r.onSubmitSearch()&&e),e}),null,null)),t.ob(5,16384,null,0,e.o,[],null,null),t.ob(6,4210688,[["blogPostCommentForm",4]],0,e.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Gb(2048,null,e.b,null,[e.j]),t.ob(8,16384,null,0,e.i,[[4,e.b]],null,null),(l()(),t.pb(9,0,null,null,9,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,5,"input",[["class","form-control"],["id","searchTerm"],["name","searchTerm"],["placeholder","Search for..."],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Bb(l,11)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,11).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,11)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,11)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(r.searchTerm=u)&&e),e}),null,null)),t.ob(11,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Gb(1024,null,e.f,(function(l){return[l]}),[e.c]),t.ob(13,671744,null,0,e.k,[[2,e.b],[8,null],[8,null],[6,e.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,e.g,null,[e.k]),t.ob(15,16384,null,0,e.h,[[4,e.g]],null,null),(l()(),t.pb(16,0,null,null,2,"span",[["class","input-group-btn"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,1,"button",[["class","btn btn-secondary"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Go!"]))],(function(l,n){l(n,13,0,"searchTerm",n.component.searchTerm)}),(function(l,n){l(n,4,0,t.Bb(n,8).ngClassUntouched,t.Bb(n,8).ngClassTouched,t.Bb(n,8).ngClassPristine,t.Bb(n,8).ngClassDirty,t.Bb(n,8).ngClassValid,t.Bb(n,8).ngClassInvalid,t.Bb(n,8).ngClassPending),l(n,10,0,t.Bb(n,15).ngClassUntouched,t.Bb(n,15).ngClassTouched,t.Bb(n,15).ngClassPristine,t.Bb(n,15).ngClassDirty,t.Bb(n,15).ngClassValid,t.Bb(n,15).ngClassInvalid,t.Bb(n,15).ngClassPending)}))}var s=u("SVse"),c=u("L2NZ");class b{constructor(l){this.blogRoutingService=l,this.categoryFrequencyMap=new Map}ngOnInit(){this.initCategoryFrequencyMap()}getTop6Categories(){return new Map([...this.categoryFrequencyMap].sort((l,n)=>n[1]-l[1]).slice(0,6))}getEnumString(l){return c.a[l]}initCategoryFrequencyMap(){this.blogRoutingService.getAllBlogPosts().map(l=>l.postCategories).reduce((l,n)=>l.concat(n),[]).forEach(l=>{this.categoryFrequencyMap.has(l)?this.categoryFrequencyMap.set(l,this.categoryFrequencyMap.get(l)+1):this.categoryFrequencyMap.set(l,1)})}}var g=u("Nfsq"),p=t.nb({encapsulation:2,styles:[],data:{}});function d(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","list-unstyled mb-0"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,2).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(2,671744,null,0,o.o,[o.l,o.a,s.j],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),t.Eb(3,{category:0}),t.Cb(4,1),(l()(),t.Jb(5,null,[" "," (",")"]))],(function(l,n){var u=l(n,3,0,n.context.$implicit.key),t=l(n,4,0,"/search-results");l(n,2,0,u,t)}),(function(l,n){var u=n.component;l(n,1,0,t.Bb(n,2).target,t.Bb(n,2).href),l(n,5,0,u.getEnumString(n.context.$implicit.key),n.context.$implicit.value)}))}function m(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","card my-4"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Categories"])),(l()(),t.pb(3,0,null,null,3,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,2,null,d)),t.ob(5,278528,null,0,s.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(0,s.g,[t.r])],(function(l,n){var u=n.component;l(n,5,0,t.Kb(n,5,0,t.Bb(n,6).transform(u.getTop6Categories())))}),null)}u("f4XN"),u.d(n,"a",(function(){return h})),u.d(n,"b",(function(){return f}));var h=t.nb({encapsulation:2,styles:[],data:{}});function f(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-blog-sidebar-search",[],null,null,null,i,a)),t.ob(1,49152,null,0,r,[o.l],null,null),(l()(),t.pb(2,0,null,null,1,"app-blog-sidebar-category",[],null,null,null,m,p)),t.ob(3,114688,null,0,b,[g.a],null,null)],(function(l,n){l(n,3,0)}),null)}},"543n":function(l,n,u){"use strict";u.d(n,"a",(function(){return s})),u.d(n,"b",(function(){return b}));var t=u("8Y7J"),e=u("SVse"),r=u("iInd"),o=u("s7LF"),a=u("35Rh"),i=u("f4XN"),s=(u("8nRA"),t.nb({encapsulation:2,styles:[],data:{}}));function c(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"img",[["alt",""],["class","img-fluid rounded"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"hr",[],null,null,null,null,null))],null,(function(l,n){l(n,1,0,t.tb(1,"assets/images/",n.component.postImageName,""))}))}function b(l){return t.Lb(0,[t.Db(0,e.e,[t.s]),(l()(),t.pb(1,0,null,null,50,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"h2",[["class","mt-4 mb-3"]],null,null,null,null,null)),(l()(),t.Jb(3,null,["",""])),(l()(),t.pb(4,0,null,null,47,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,43,"div",[["class","col-lg-9"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,c)),t.ob(7,16384,null,0,e.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(8,0,null,null,6,"p",[],null,null,null,null,null)),(l()(),t.Jb(9,null,["Posted on "," by "])),t.Fb(10,2),(l()(),t.pb(11,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,12).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(12,671744,null,0,r.o,[r.l,r.a,e.j],{routerLink:[0,"routerLink"]},null),t.Cb(13,1),(l()(),t.Jb(-1,null,["Alexander Tang"])),(l()(),t.pb(15,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,3,"p",[["class","lead"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,2,"b",[],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,1,"i",[],null,null,null,null,null)),(l()(),t.Jb(19,null,["",""])),t.Ab(null,0),(l()(),t.pb(21,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,26,"div",[["class","card my-4"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"h5",[["class","card-header"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["E-mail a comment:"])),(l()(),t.pb(25,0,null,null,23,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,22,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,r=l.component;return"submit"===n&&(e=!1!==t.Bb(l,28).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Bb(l,28).onReset()&&e),"ngSubmit"===n&&(e=!1!==r.onSubmit()&&e),e}),null,null)),t.ob(27,16384,null,0,o.o,[],null,null),t.ob(28,4210688,[["blogPostCommentForm",4]],0,o.j,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),t.Gb(2048,null,o.b,null,[o.j]),t.ob(30,16384,null,0,o.i,[[4,o.b]],null,null),(l()(),t.pb(31,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(32,0,null,null,5,"input",[["class","form-control"],["id","mailTitle"],["name","mailTitle"],["type","text"]],[[8,"readOnly",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Bb(l,33)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,33).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,33)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,33)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(33,16384,null,0,o.c,[t.B,t.k,[2,o.a]],null,null),t.Gb(1024,null,o.f,(function(l){return[l]}),[o.c]),t.ob(35,671744,null,0,o.k,[[2,o.b],[8,null],[8,null],[6,o.f]],{name:[0,"name"],model:[1,"model"]},null),t.Gb(2048,null,o.g,null,[o.k]),t.ob(37,16384,null,0,o.h,[[4,o.g]],null,null),(l()(),t.pb(38,0,null,null,8,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(39,0,null,null,7,"textarea",[["class","form-control"],["id","mailBody"],["name","mailBody"],["required",""],["rows","3"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0,r=l.component;return"input"===n&&(e=!1!==t.Bb(l,40)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Bb(l,40).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Bb(l,40)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Bb(l,40)._compositionEnd(u.target.value)&&e),"ngModelChange"===n&&(e=!1!==(r.mailBody=u)&&e),e}),null,null)),t.ob(40,16384,null,0,o.c,[t.B,t.k,[2,o.a]],null,null),t.ob(41,16384,null,0,o.l,[],{required:[0,"required"]},null),t.Gb(1024,null,o.e,(function(l){return[l]}),[o.l]),t.Gb(1024,null,o.f,(function(l){return[l]}),[o.c]),t.ob(44,671744,null,0,o.k,[[2,o.b],[6,o.e],[8,null],[6,o.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Gb(2048,null,o.g,null,[o.k]),t.ob(46,16384,null,0,o.h,[[4,o.g]],null,null),(l()(),t.pb(47,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Submit"])),(l()(),t.pb(49,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,1,"app-blog-sidebar",[],null,null,null,a.b,a.a)),t.ob(51,49152,null,0,i.a,[],null,null)],(function(l,n){var u=n.component;l(n,7,0,u.postImagePresent());var t=l(n,13,0,"/about");l(n,12,0,t),l(n,35,0,"mailTitle",u.mailSubject()),l(n,41,0,""),l(n,44,0,"mailBody",u.mailBody)}),(function(l,n){var u=n.component;l(n,3,0,u.postTitle);var e=t.Kb(n,9,0,l(n,10,0,t.Bb(n,0),u.postDate,"longDate"));l(n,9,0,e),l(n,11,0,t.Bb(n,12).target,t.Bb(n,12).href),l(n,19,0,u.postAbstract),l(n,26,0,t.Bb(n,30).ngClassUntouched,t.Bb(n,30).ngClassTouched,t.Bb(n,30).ngClassPristine,t.Bb(n,30).ngClassDirty,t.Bb(n,30).ngClassValid,t.Bb(n,30).ngClassInvalid,t.Bb(n,30).ngClassPending),l(n,32,0,!0,t.Bb(n,37).ngClassUntouched,t.Bb(n,37).ngClassTouched,t.Bb(n,37).ngClassPristine,t.Bb(n,37).ngClassDirty,t.Bb(n,37).ngClassValid,t.Bb(n,37).ngClassInvalid,t.Bb(n,37).ngClassPending),l(n,39,0,t.Bb(n,41).required?"":null,t.Bb(n,46).ngClassUntouched,t.Bb(n,46).ngClassTouched,t.Bb(n,46).ngClassPristine,t.Bb(n,46).ngClassDirty,t.Bb(n,46).ngClassValid,t.Bb(n,46).ngClassInvalid,t.Bb(n,46).ngClassPending)}))}},"6twO":function(l,n,u){"use strict";var t=u("Plff"),e=u("UXXG"),r=u("o0rg"),o=u("aD9X");function a(l){return l?e(l).join(","):void 0}l.exports=function(l){t(l,"options are required");var n={to:a(l.to),cc:a(l.cc),bcc:a(l.bcc),subject:l.subject,body:l.body},u=n.to;delete(n=r(n,Boolean)).to;var e=o.stringify(n);return"mailto:"+(u||"")+(e?"?"+e:"")}},"8nRA":function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));const t=u("6twO");class e{constructor(l){this.document=l}postImagePresent(){return this.postImageName&&""!==this.postImageName}mailSubject(){return"Comment - "+this.postTitle}onSubmit(){this.document.location.href=t({to:"alexanderghtang@gmail.com",subject:this.mailSubject(),body:this.mailBody})}}},IsUS:function(l,n){l.exports=Array.isArray||function(l){return"[object Array]"==Object.prototype.toString.call(l)}},Plff:function(l,n,u){"use strict";l.exports=function(l,n){if(!l)throw new Error(n||"Expected true, got "+l)}},UXXG:function(l,n,u){"use strict";var t=u("IsUS");l.exports=function(l){return t(l)?l:[l]}},ZFOp:function(l,n,u){"use strict";l.exports=function(l){return encodeURIComponent(l).replace(/[!'()*]/g,(function(l){return"%"+l.charCodeAt(0).toString(16).toUpperCase()}))}},aD9X:function(l,n,u){"use strict";var t=u("ZFOp");n.extract=function(l){return l.split("?")[1]||""},n.parse=function(l){return"string"!=typeof l?{}:(l=l.trim().replace(/^(\?|#|&)/,""))?l.split("&").reduce((function(l,n){var u=n.replace(/\+/g," ").split("="),t=u.shift(),e=u.length>0?u.join("="):void 0;return t=decodeURIComponent(t),e=void 0===e?null:decodeURIComponent(e),l.hasOwnProperty(t)?Array.isArray(l[t])?l[t].push(e):l[t]=[l[t],e]:l[t]=e,l}),{}):{}},n.stringify=function(l){return l?Object.keys(l).sort().map((function(n){var u=l[n];return Array.isArray(u)?u.sort().map((function(l){return t(n)+"="+t(l)})).join("&"):t(n)+"="+t(u)})).filter((function(l){return l.length>0})).join("&"):""}},f4XN:function(l,n,u){"use strict";u.d(n,"a",(function(){return t}));class t{constructor(){}}},m158:function(l,n,u){"use strict";u.d(n,"a",(function(){return i})),u.d(n,"b",(function(){return g}));var t=u("8Y7J"),e=u("SVse"),r=u("iInd"),o=u("35Rh"),a=u("f4XN"),i=(u("mo5H"),t.nb({encapsulation:2,styles:[],data:{}}));function s(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"h1",[["class","mt-4 mb-3"]],null,null,null,null,null)),(l()(),t.Jb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.component.blogTitle)}))}function c(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,0,"img",[["alt","Card image cap"],["class","card-img-top"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,0,0,t.tb(1,"assets/images/",n.parent.context.$implicit.postImageName,""))}))}function b(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,17,"div",[["class","card mb-4"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,c)),t.ob(3,16384,null,0,e.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(4,0,null,null,7,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"h2",[["class","card-title"]],null,null,null,null,null)),(l()(),t.Jb(6,null,["",""])),(l()(),t.pb(7,0,null,null,1,"p",[["class","card-text"]],null,null,null,null,null)),(l()(),t.Jb(8,null,["",""])),(l()(),t.pb(9,0,null,null,2,"a",[["class","btn btn-primary"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,10).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(10,671744,null,0,r.o,[r.l,r.a,e.j],{routerLink:[0,"routerLink"]},null),(l()(),t.Jb(-1,null,["Read More \u2192"])),(l()(),t.pb(12,0,null,null,6,"div",[["class","card-footer text-muted"]],null,null,null,null,null)),(l()(),t.Jb(13,null,[" Posted on "," by "])),t.Fb(14,2),(l()(),t.pb(15,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,16).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(16,671744,null,0,r.o,[r.l,r.a,e.j],{routerLink:[0,"routerLink"]},null),t.Cb(17,1),(l()(),t.Jb(-1,null,["Alexander Tang"]))],(function(l,n){l(n,3,0,n.component.postImagePresent(n.context.$implicit)),l(n,10,0,n.context.$implicit.path);var u=l(n,17,0,"/about");l(n,16,0,u)}),(function(l,n){l(n,6,0,n.context.$implicit.postTitle),l(n,8,0,n.context.$implicit.postAbstract),l(n,9,0,t.Bb(n,10).target,t.Bb(n,10).href);var u=t.Kb(n,13,0,l(n,14,0,t.Bb(n.parent,0),n.context.$implicit.postDate,"longDate"));l(n,13,0,u),l(n,15,0,t.Bb(n,16).target,t.Bb(n,16).href)}))}function g(l){return t.Lb(0,[t.Db(0,e.e,[t.s]),(l()(),t.eb(16777216,null,null,1,null,s)),t.ob(2,16384,null,0,e.m,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(3,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,15,"div",[["class","col-md-9"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,b)),t.ob(6,278528,null,0,e.l,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(7,0,null,null,12,"ul",[["class","pagination justify-content-center mb-4"]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),t.Gb(512,null,e.v,e.w,[t.q,t.r,t.k,t.B]),t.ob(10,278528,null,0,e.k,[e.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(11,{disabled:0}),(l()(),t.pb(12,0,null,null,1,"button",[["class","page-link"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.previousPage()&&t),t}),null,null)),(l()(),t.Jb(-1,null,["\u2190 Newer"])),(l()(),t.pb(14,0,null,null,5,"li",[["class","page-item"]],null,null,null,null,null)),t.Gb(512,null,e.v,e.w,[t.q,t.r,t.k,t.B]),t.ob(16,278528,null,0,e.k,[e.v],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),t.Eb(17,{disabled:0}),(l()(),t.pb(18,0,null,null,1,"button",[["class","page-link"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.nextPage()&&t),t}),null,null)),(l()(),t.Jb(-1,null,["Older \u2192"])),(l()(),t.pb(20,0,null,null,2,"div",[["class","col-md-3"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"app-blog-sidebar",[],null,null,null,o.b,o.a)),t.ob(22,49152,null,0,a.a,[],null,null)],(function(l,n){var u=n.component;l(n,2,0,u.blogTitle),l(n,6,0,u.blogPostsForCurrentPage());var t=l(n,11,0,!u.hasNewerPage());l(n,10,0,"page-item",t);var e=l(n,17,0,!u.hasOlderPage());l(n,16,0,"page-item",e)}),null)}},mo5H:function(l,n,u){"use strict";u.d(n,"a",(function(){return e}));var t=u("QC/d");class e{constructor(l,n){this.activatedRoute=l,this.router=n,this.blogPosts=[],this.pageSize=5}ngOnInit(){this.blogPosts.sort((l,n)=>t.a.compareBlogPostsByDate(l,n)),this.initCurrentPage()}postImagePresent(l){return l.postImageName&&""!==l.postImageName}blogPostsForCurrentPage(){let l=(this.currentPage-1)*this.pageSize;return this.blogPosts.slice(l,l+this.pageSize)}hasNewerPage(){return this.currentPage>1}hasOlderPage(){return this.currentPage*this.pageSize<this.blogPosts.length}nextPage(){this.setCurrentPage(this.currentPage+1)}previousPage(){this.setCurrentPage(this.currentPage-1)}initCurrentPage(){this.currentPage=+this.activatedRoute.snapshot.queryParamMap.get("page"),(isNaN(this.currentPage)||this.currentPage<1||(this.currentPage-1)*this.pageSize+1>this.blogPosts.length)&&this.setCurrentPage(1)}setCurrentPage(l){this.currentPage=l,this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{page:l},queryParamsHandling:"merge"})}}},o0rg:function(l,n){l.exports=function(l,n,u){if("function"!=typeof n)throw new TypeError("`f` has to be a function");var t={};return Object.keys(l).forEach((function(e){n.call(u||this,l[e],e,l)&&(t[e]=l[e])})),t}}}]);