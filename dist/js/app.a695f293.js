(function(e){function t(t){for(var a,o,i=t[0],l=t[1],u=t[2],d=0,p=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);c&&c(t);while(p.length)p.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var a={},n={app:0},r=[];function o(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=a,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(s,a,function(t){return e[t]}.bind(null,a));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),n=s.n(a);n.a},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.name?s("div",{staticClass:"message-body mt-3"},[e._m(1),s("div",{staticClass:"font-bold"},[e._v("Welcome "+e._s(e.name)+"!")]),s("div",{staticClass:"card rounded-lg"},[s("div",{staticClass:"card-body",staticStyle:{overflow:"auto"}},e._l(e.messages,(function(t){return s("div",{key:t,staticClass:"chat-message mb-3"},[s("div",{staticClass:"flex items-end"},[s("div",{staticClass:"flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1"},[s("div",{staticClass:"font-bold"},[e._v(e._s(t.username))]),s("div",{staticClass:"mt-0"},[s("span",{staticClass:"px-4 py-2 rounded-lg inline-block bg-blue-600 text-white "},[e._v(e._s(t.text))])])])])])})),0)]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.showMessage,expression:"showMessage"}],staticClass:"mt-2 w-60 w-full sm:w-3/4 py-3 text-center sm:text-left sm:pl-5 bg-white\n      border border-solid border-black-20% box-border rounded-md font-nunito font-semibold text-career-dropdown text-black-50% mr-3",attrs:{type:"text"},domProps:{value:e.showMessage},on:{input:function(t){t.target.composing||(e.showMessage=t.target.value)}}}),s("button",{staticClass:"px-6 py-3 mb-3 text-lg text-grey font-semibold bg-yellow-300 rounded-md sm:mb-0 sm:w-auto",on:{click:e.sendMessage}},[e._v(" Send ")])]):s("div",{staticClass:"login mt-5 rounded-lg"},[e._m(0),s("label",{staticClass:"font-bold w-2/5",attrs:{for:"userName"}},[e._v(" Username ")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.userName,expression:"userName"}],staticClass:"w-60 w-full sm:w-3/4 py-3 text-center sm:text-left sm:pl-5 bg-white\n      border border-solid border-black-20% box-border rounded-md font-nunito font-semibold text-career-dropdown text-black-50%",attrs:{type:"text"},domProps:{value:e.userName},on:{input:function(t){t.target.composing||(e.userName=t.target.value)}}}),s("br"),s("br"),s("button",{staticClass:"px-6 py-3 mb-3 text-lg text-grey font-semibold bg-yellow-300 rounded-md sm:mb-0 sm:w-auto",on:{click:e.updateUsername}},[e._v(" Join Chat ")])])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-3xl font-nunito font-extrabold pt-4 text-center text-gray-900 mb-7 mt-16"},[s("span",{staticClass:"block xl:inline"},[e._v("Join Chat")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"text-3xl font-nunito font-extrabold pt-4 text-center text-gray-900 mb-7 mt-16"},[s("span",{staticClass:"block xl:inline"},[e._v("Chat")])])}],o=(s("4160"),s("b0c0"),s("b64b"),s("159b"),s("2591")),i=(s("e71f"),{apiKey:"AIzaSyAezd9fmByeEUQ_EoAyADAZ9CeltgJkDKI",authDomain:"gdg-app-chat.firebaseapp.com",databaseURL:"https://gdg-app-chat-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"gdg-app-chat",storageBucket:"gdg-app-chat.appspot.com",messagingSenderId:"307172187198",appId:"1:307172187198:web:63ddf176a437e48059456f",measurementId:"G-446BFZWCTY"}),l=o["a"].initializeApp(i),u=l,c={name:"App",data:function(){return{userName:"",name:null,showMessage:"",messages:[]}},methods:{updateUsername:function(){this.name=this.userName,console.log(this.userName),this.userName=""},sendMessage:function(){console.log("asdas");var e={text:this.showMessage,username:this.name};u.database().ref("messages").push(e),this.showMessage=""}},mounted:function(){var e=this,t=u.database().ref("messages");t.on("value",(function(t){var s=t.val(),a=[];Object.keys(s).forEach((function(e){a.push({id:e,username:s[e].username,text:s[e].text})})),e.messages=a}))}},d=c,p=(s("034f"),s("2877")),m=Object(p["a"])(d,n,r,!1,null,null,null),f=m.exports;s("f9e3");a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(f)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.a695f293.js.map