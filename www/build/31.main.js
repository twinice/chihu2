webpackJsonp([31],{203:function(l,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t.d(n,"CollectWorkPageModuleNgFactory",function(){return y});var u=t(0),i=t(382),e=t(19),o=t(21),r=t(85),c=t(253),a=t(141),_=t(142),s=t(143),f=t(144),p=t(383),d=t(302),h=t(86),m=this&&this.__extends||function(){var l=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,n){l.__proto__=n}||function(l,n){for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t])};return function(n,t){function u(){this.constructor=n}l(n,t),n.prototype=null===t?Object.create(t):(u.prototype=t.prototype,new u)}}(),g=function(l){function n(n){return l.call(this,n,[a.a,_.a,s.a,f.a,p.a],[])||this}return m(n,l),Object.defineProperty(n.prototype,"_NgLocalization_8",{get:function(){return null==this.__NgLocalization_8&&(this.__NgLocalization_8=new e.a(this.parent.get(u.c))),this.__NgLocalization_8},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_ɵi_9",{get:function(){return null==this.__ɵi_9&&(this.__ɵi_9=new o.a),this.__ɵi_9},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_FormBuilder_10",{get:function(){return null==this.__FormBuilder_10&&(this.__FormBuilder_10=new o.b),this.__FormBuilder_10},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new e.d,this._ɵba_1=new o.c,this._FormsModule_2=new o.d,this._ReactiveFormsModule_3=new o.e,this._IonicModule_4=new r.b,this._WorkComponentModule_5=new c.a,this._IonicPageModule_6=new r.c,this._CollectWorkPageModule_7=new i.a,this._LAZY_LOADED_TOKEN_11=d.a,this._CollectWorkPageModule_7},n.prototype.getInternal=function(l,n){return l===e.d?this._CommonModule_0:l===o.c?this._ɵba_1:l===o.d?this._FormsModule_2:l===o.e?this._ReactiveFormsModule_3:l===r.b?this._IonicModule_4:l===c.a?this._WorkComponentModule_5:l===r.c?this._IonicPageModule_6:l===i.a?this._CollectWorkPageModule_7:l===e.e?this._NgLocalization_8:l===o.a?this._ɵi_9:l===o.b?this._FormBuilder_10:l===h.d?this._LAZY_LOADED_TOKEN_11:n},n.prototype.destroyInternal=function(){},n}(u.x),y=new u.y(g,i.a)},244:function(l,n,t){"use strict";function u(l){return e._14(2,[e._20(402653184,1,{_fixedContent:0}),e._20(402653184,2,{_scrollContent:0}),(l()(),e._16(0,[[1,0],["fixedContent",1]],null,1,"div",[["class","fixed-content"]],null,null,null,null,null)),e._21(null,0),(l()(),e._16(0,[[2,0],["scrollContent",1]],null,1,"div",[["class","scroll-content"]],null,null,null,null,null)),e._21(null,1),e._21(null,2)],null,null)}function i(l){return e._14(0,[(l()(),e._16(0,null,null,1,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,u,h)),e._17(4374528,null,0,o.a,[r.c,c.b,a.a,e.H,e.I,_.a,s.a,e.g,[2,f.a],[2,p.a]],null,null)],null,function(l,n){l(n,0,0,e._18(n,1).statusbarPadding,e._18(n,1)._hasRefresher)})}t.d(n,"b",function(){return h}),n.a=u;var e=t(0),o=t(20),r=t(1),c=t(3),a=t(7),_=t(6),s=t(27),f=t(5),p=t(15),d=[],h=e._13({encapsulation:2,styles:d,data:{}});e._19("ion-content",o.a,i,{color:"color",mode:"mode",fullscreen:"fullscreen",scrollDownOnLoad:"scrollDownOnLoad"},{ionScrollStart:"ionScrollStart",ionScroll:"ionScroll",ionScrollEnd:"ionScrollEnd"},["[ion-fixed],ion-fab","*","ion-refresher"])},248:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=(t(0),t(82),this&&this.__decorate,this&&this.__metadata,function(){function l(l){this.navCtrl=l,this.data={}}return l.prototype.pushArticlePage=function(l){this.navCtrl.push("ArticlePage",{_id:l})},l.prototype.pushAnswerPage=function(l){this.navCtrl.push("AnswerPage",{_id:l})},l.prototype.pushQuestionPage=function(l){this.navCtrl.push("QuestionPage",{_id:l})},l}())},253:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=(t(0),t(82),t(248),this&&this.__decorate,function(){function l(){}return l}())},258:function(l,n,t){"use strict";function u(l){return p._14(0,[(l()(),p._16(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),p._15(null,[""," 回答了问题"]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name)})}function i(l){return p._14(0,[(l()(),p._16(0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),p._15(null,[""," 分享的作品"]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.name)})}function e(l){return p._14(0,[(l()(),p._16(0,null,null,0,"section",[["class","banner"]],[[4,"background",null]],[[null,"click"]],function(l,n,t){var u=!0,i=l.component;if("click"===n){u=!1!==i.pushArticlePage(l.parent.context.$implicit._id)&&u}return u},null,null))],null,function(l,n){l(n,0,0,"url("+n.parent.context.$implicit.workbanner+")")})}function o(l){return p._14(0,[(l()(),p._16(0,null,null,2,"h5",[],null,[[null,"click"]],function(l,n,t){var u=!0,i=l.component;if("click"===n){u=!1!==i.pushQuestionPage(l.parent.context.$implicit.answerid)&&u}return u},null,null)),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-cutlery"]],null,null,null,null,null)),(l()(),p._15(null,["  ",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.title)})}function r(l){return p._14(0,[(l()(),p._16(0,null,null,2,"h5",[],null,[[null,"click"]],function(l,n,t){var u=!0,i=l.component;if("click"===n){u=!1!==i.pushArticlePage(l.parent.context.$implicit._id)&&u}return u},null,null)),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-cutlery"]],null,null,null,null,null)),(l()(),p._15(null,["  ",""]))],null,function(l,n){l(n,2,0,n.parent.context.$implicit.title)})}function c(l){return p._14(0,[(l()(),p._16(0,null,null,1,"p",[],null,[[null,"click"]],function(l,n,t){var u=!0,i=l.component;if("click"===n){u=!1!==i.pushAnswerPage(l.parent.context.$implicit._id)&&u}return u},null,null)),(l()(),p._15(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.dec)})}function a(l){return p._14(0,[(l()(),p._16(0,null,null,1,"p",[],null,[[null,"click"]],function(l,n,t){var u=!0,i=l.component;if("click"===n){u=!1!==i.pushArticlePage(l.parent.context.$implicit._id)&&u}return u},null,null)),(l()(),p._15(null,["",""]))],null,function(l,n){l(n,1,0,n.parent.context.$implicit.text)})}function _(l){return p._14(0,[(l()(),p._16(0,null,null,42,"section",[["class","item"]],null,null,null,null,null)),(l()(),p._15(null,["\n    "])),(l()(),p._16(0,null,null,13,"header",[],null,null,null,null,null)),(l()(),p._15(null,["\n        "])),(l()(),p._16(0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),p._15(null,["\n        "])),(l()(),p._24(16777216,null,null,1,null,u)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n        "])),(l()(),p._24(16777216,null,null,1,null,i)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n        "])),(l()(),p._16(0,null,null,2,"p",[["class","time"]],null,null,null,null,null)),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-clock-o"]],null,null,null,null,null)),(l()(),p._15(null,[":7-01"])),(l()(),p._15(null,["\n    "])),(l()(),p._15(null,["\n    "])),(l()(),p._24(16777216,null,null,1,null,e)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n    "])),(l()(),p._24(16777216,null,null,1,null,o)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n    "])),(l()(),p._24(16777216,null,null,1,null,r)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n    "])),(l()(),p._24(16777216,null,null,1,null,c)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n    "])),(l()(),p._24(16777216,null,null,1,null,a)),p._17(16384,null,0,d.m,[p.L,p.N],{ngIf:[0,"ngIf"]},null),(l()(),p._15(null,["\n    "])),(l()(),p._16(0,null,null,9,"section",[["class","mark"]],null,null,null,null,null)),(l()(),p._15(null,["\n        "])),(l()(),p._16(0,null,null,6,"p",[],null,null,null,null,null)),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-heart"]],null,null,null,null,null)),(l()(),p._15(null,[" 感谢:"," • "])),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-file"]],null,null,null,null,null)),(l()(),p._15(null,[" 收藏:"," • "])),(l()(),p._16(0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-comment"]],null,null,null,null,null)),(l()(),p._15(null,[" 评论:",""])),(l()(),p._15(null,["\n    "])),(l()(),p._15(null,["\n"]))],function(l,n){l(n,7,0,"0"==n.context.$implicit.type),l(n,10,0,"1"==n.context.$implicit.type),l(n,18,0,"1"==n.context.$implicit.type),l(n,21,0,"0"==n.context.$implicit.type),l(n,24,0,"1"==n.context.$implicit.type),l(n,27,0,"0"==n.context.$implicit.type),l(n,30,0,"1"==n.context.$implicit.type)},function(l,n){l(n,4,0,n.context.$implicit.userimg),l(n,36,0,n.context.$implicit.mark.think),l(n,38,0,n.context.$implicit.mark.collect),l(n,40,0,n.context.$implicit.mark.cont)})}function s(l){return p._14(0,[(l()(),p._15(null,["\n"])),(l()(),p._24(16777216,null,null,1,null,_)),p._17(802816,null,0,d.l,[p.L,p.N,p.t],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,2,0,n.component.data)},null)}function f(l){return p._14(0,[(l()(),p._16(0,null,null,1,"work",[],null,null,null,s,y)),p._17(49152,null,0,h.a,[m.a],null,null)],null,null)}t.d(n,"b",function(){return y}),n.a=s;var p=t(0),d=t(19),h=t(248),m=t(15),g=[],y=p._13({encapsulation:2,styles:g,data:{}});p._19("work",h.a,f,{data:"data"},{},[])},302:function(l,n,t){"use strict";t.d(n,"a",function(){return i});var u=(t(0),t(82),t(28)),i=(this&&this.__decorate,this&&this.__metadata,function(){function l(l,n,t){this.http=l,this.navCtrl=n,this.navParams=t,this.items=[],this.rootNavCtrl=t.get("rootNavCtrl"),this.id=this.navParams.data._id,this.getdata()}return l.prototype.getdata=function(){var l=this,n=new u.l;n.append("Content-Type","application/x-www-form-urlencoded"),this.http.post("http://www.devonhello.com/chihu/my_collect_work","id="+this.id+"&type=1",{headers:n}).subscribe(function(n){l.items=l.items.concat(n.json())})},l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad CollectWorkPage")},l}())},382:function(l,n,t){"use strict";t.d(n,"a",function(){return u});var u=(t(0),t(82),t(302),t(253),this&&this.__decorate,function(){function l(){}return l}())},383:function(l,n,t){"use strict";function u(l){return e._14(0,[(l()(),e._15(null,["\n"])),(l()(),e._16(0,null,null,5,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,o.a,o.b)),e._17(4374528,null,0,r.a,[c.c,a.b,_.a,e.H,e.I,s.a,f.a,e.g,[2,p.a],[2,d.a]],null,null),(l()(),e._15(1,["\n    "])),(l()(),e._16(0,null,1,1,"work",[],null,null,null,h.a,h.b)),e._17(49152,null,0,m.a,[d.a],{data:[0,"data"]},null),(l()(),e._15(1,["\n"]))],function(l,n){l(n,5,0,n.component.items)},function(l,n){l(n,1,0,e._18(n,2).statusbarPadding,e._18(n,2)._hasRefresher)})}function i(l){return e._14(0,[(l()(),e._16(0,null,null,1,"page-collect-work",[],null,null,null,u,k)),e._17(49152,null,0,g.a,[y.k,d.a,w.a],null,null)],null,null)}t.d(n,"a",function(){return v});var e=t(0),o=t(244),r=t(20),c=t(1),a=t(3),_=t(7),s=t(6),f=t(27),p=t(5),d=t(15),h=t(258),m=t(248),g=t(302),y=t(28),w=t(13),b=[],k=e._13({encapsulation:2,styles:b,data:{}}),v=e._19("page-collect-work",g.a,i,{},{},[])}});
//# sourceMappingURL=/Users/apple/Documents/ionic2/3.4/chihu/www/build/31.main.js.map