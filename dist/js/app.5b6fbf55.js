(function(e){function t(t){for(var n,c,i=t[0],d=t[1],l=t[2],f=0,u=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);s&&s(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var d=a[i];0!==r[d]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/personal-website/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1c9c":function(e,t,a){"use strict";a("5a52")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t,a,r,o,c){var i=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["d"])(n["a"],null,[Object(n["f"])(i,{name:"default"}),Object(n["f"])(i,{name:"footer"})],64)}var o=a("4d5c"),c=a.n(o),i={name:"App",components:{},mounted:function(){console.log("Mounting the App"),c.a.AutoInit()}};a("1c9c");i.render=r;var d=i,l=a("6c02");function s(e,t,a,r,o,c){return Object(n["o"])(),Object(n["d"])("div",null," this is the home page ")}var f={};f.render=s;var u=f,v=Object(n["f"])("div",null," This is the about page ",-1);function b(e,t,a,r,o,c){var i=Object(n["u"])("the-contact");return Object(n["o"])(),Object(n["d"])(n["a"],null,[v,Object(n["f"])("div",null,[Object(n["f"])(i)])],64)}function p(e,t,a,r,o,c){return Object(n["o"])(),Object(n["d"])("div",null," contact form ")}var h={};h.render=p;var g=h,O={components:{TheContact:g}};O.render=b;var j=O,y=a("c7ef"),m=a.n(y),x=Object(n["y"])("data-v-26fa6769");Object(n["r"])("data-v-26fa6769");var w={class:"nav-items"},k=Object(n["f"])("div",{class:"container"},[Object(n["f"])("div",{class:"row"},[Object(n["f"])("div",{class:"personal-image col s6 offset-s7 center-align"},[Object(n["f"])("img",{class:"z-depth-3",id:"my-image",src:m.a,alt:"placeholder"})]),Object(n["f"])("div",{class:"col s6 offset-s7 center-align",id:"welcome-text"},[Object(n["f"])("h5",null,"welcome!"),Object(n["f"])("p",null," Please feel free to look around and explore my various intrests and projects. ")])])],-1),L=Object(n["f"])("div",{class:"down-indication"},null,-1),_={class:"col s12",id:"bottom-footer"};Object(n["p"])();var P=x((function(e,t,a,r,o,c){var i=Object(n["u"])("the-landing-nav"),d=Object(n["u"])("the-landing-footer");return Object(n["o"])(),Object(n["d"])("body",null,[Object(n["f"])("div",w,[Object(n["f"])(i)]),k,L,Object(n["f"])("div",_,[Object(n["f"])(d)])])})),T=Object(n["y"])("data-v-650b29f6");Object(n["r"])("data-v-650b29f6");var M={id:"nav-items"};Object(n["p"])();var S=T((function(e,t,a,r,o,c){return Object(n["o"])(),Object(n["d"])("div",M)})),A={};A.render=S,A.__scopeId="data-v-650b29f6";var C=A,I=Object(n["e"])('<footer class="page-footer grey lighten-1"><div class="container"><div class="row"><div class="col s1 left-align"><h5 class="white-text">Links</h5><ul><li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li><li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li></ul></div></div></div><div class="footer-copyright"><div class="container"> © 2014 Copyright Text <a class="grey-text text-lighten-4 right" href="#!">More Links</a></div></div></footer>',1);function z(e,t,a,r,o,c){return Object(n["o"])(),Object(n["d"])("div",null,[I])}var F={};F.render=z;var J=F,B={components:{TheLandingNav:C,TheLandingFooter:J},data:function(){return{}}};a("b65f");B.render=P,B.__scopeId="data-v-26fa6769";var H=B,N=Object(n["y"])("data-v-235eddfe");Object(n["r"])("data-v-235eddfe");var Y={class:"page-footer light-blue accent-2"},q=Object(n["e"])('<div class="container" data-v-235eddfe><div class="row" data-v-235eddfe><div class="col l6 s12" data-v-235eddfe><h5 class="white-text" data-v-235eddfe>Footer Content</h5><p class="grey-text text-lighten-4" data-v-235eddfe> You can use rows and columns here to organize your footer content. </p></div><div class="col l4 offset-l2 s12" data-v-235eddfe><h5 class="white-text" data-v-235eddfe>Links</h5><ul data-v-235eddfe><li data-v-235eddfe><a class="grey-text text-lighten-3" href="#!" data-v-235eddfe>Link 1</a></li><li data-v-235eddfe><a class="grey-text text-lighten-3" href="#!" data-v-235eddfe>Link 2</a></li><li data-v-235eddfe><a class="grey-text text-lighten-3" href="#!" data-v-235eddfe>Link 3</a></li><li data-v-235eddfe><a class="grey-text text-lighten-3" href="#!" data-v-235eddfe>Link 4</a></li></ul></div></div></div><div class="footer-copyright" data-v-235eddfe><div class="container" data-v-235eddfe> © 2014 Copyright Text <a class="grey-text text-lighten-4 right" href="#!" data-v-235eddfe>More Links</a></div></div>',2);Object(n["p"])();var D=N((function(e,t,a,r,o,c){return Object(n["o"])(),Object(n["d"])("footer",Y,[q])})),E={};E.render=D,E.__scopeId="data-v-235eddfe";var G=E,K=[{path:"/",name:"Landing",components:{default:H,nav:C}},{path:"/home",name:"Home",components:{default:u,footer:G}},{path:"/about",name:"About",components:{default:j,footer:G}}],Q=Object(l["a"])({history:Object(l["b"])(),routes:K,scrollBehavior:function(e,t,a){return a||{left:0,top:0}}}),R=Q,U=(a("8266"),a("619b"),Object(n["c"])(d));U.use(R),U.mount("#app")},"597c":function(e,t,a){},"5a52":function(e,t,a){},b65f:function(e,t,a){"use strict";a("597c")},c7ef:function(e,t,a){e.exports=a.p+"img/head.758cd5dd.png"}});
//# sourceMappingURL=app.5b6fbf55.js.map