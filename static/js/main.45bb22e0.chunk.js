(this["webpackJsonpathlas.us"]=this["webpackJsonpathlas.us"]||[]).push([[0],{33:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(28),u=n.n(l);n(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=n(5),c=n(3),i=n(29),s=n(16),m=n.n(s),d=(n(39),n(41),{apiKey:"AIzaSyCyzjpM-Td5MIf0Lhgaes90Z5L5XtZerYM",authDomain:"athlas-4ae1b.firebaseapp.com",databaseURL:"https://athlas-4ae1b.firebaseio.com",projectId:"athlas-4ae1b",storageBucket:"athlas-4ae1b.appspot.com",messagingSenderId:"681754440432",appId:"1:681754440432:web:3d34c91b082cbeff5c4835",measurementId:"G-VXMB44Z5MT"}),f=function e(){var t=this;Object(i.a)(this,e),this.doSignInWithEmailAndPassword=function(e,n){return t.auth.signInWithEmailAndPassword(e,n)},this.doSignOut=function(){return t.auth.signOut()},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},m.a.initializeApp(d),this.auth=m.a.auth(),this.firestore=m.a.firestore()},p=r.a.createContext(null),E=function(e){return function(t){return r.a.createElement(p.Consumer,null,(function(n){return r.a.createElement(e,Object.assign({},t,{firebase:n}))}))}},h=p,b=f,w=E((function(e){var t=e.firebase;return r.a.createElement("button",{type:"button",onClick:t.doSignOut},"Sign Out")})),g=r.a.createContext(null),v=n(7),O=function(e){return E((function(t){var n=Object(a.useState)(null),l=Object(v.a)(n,2),u=l[0],o=l[1];return Object(a.useEffect)((function(){t.firebase.auth.onAuthStateChanged((function(e){o(e||null)}))})),r.a.createElement(g.Provider,{value:u},r.a.createElement(e,t))}))},j=n(15),S=function(e){return function(t){return Object(j.a)(c.e,E)((function(n){return Object(a.useEffect)((function(){n.firebase.auth.onAuthStateChanged((function(t){e(t)||n.history.push("/signin")}))})),r.a.createElement(g.Consumer,null,(function(a){return e(a)?r.a.createElement(t,n):null}))}))}},P=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Landing")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/editor"},"Editor")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/account"},"Account")),r.a.createElement("li",null,r.a.createElement(w,null))))},y=function(){return r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(o.b,{to:"/signin"},"Sign In")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Landing"))))},C=function(){return r.a.createElement("div",null,r.a.createElement(g.Consumer,null,(function(e){return e?r.a.createElement(P,null):r.a.createElement(y,null)})))},I=function(){return r.a.createElement("div",null,"Landing Page")},A=n(10),M=n(9),k={email:""},x=function(){return r.a.createElement("p",null,r.a.createElement(o.b,{to:"/pw-forget"},"Forgot Password?"))},L=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Password Forget"),r.a.createElement(R,null))},R=E((function(e){var t=Object(a.useState)(k),n=Object(v.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(null),c=Object(v.a)(o,2),i=c[0],s=c[1],m=""===l.email;return r.a.createElement("form",{onSubmit:function(t){var n=l.email;e.firebase.doPasswordReset(n).then((function(){u(k)})).catch((function(e){console.log(e),s(e)})),t.preventDefault()}},r.a.createElement("input",{name:"email",value:l.email,onChange:function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(A.a)({},n,a))}))},type:"text",placeholder:"Email Address"}),r.a.createElement("button",{disabled:m,type:"submit"},"Reset My Password"),i&&r.a.createElement("p",null,i.message))})),T={email:"",password:""},W=Object(j.a)(c.e,E)((function(e){var t=Object(a.useState)(T),n=Object(v.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(null),c=Object(v.a)(o,2),i=c[0],s=c[1],m=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(A.a)({},n,a))}))},d=""===l.password||""===l.email;return r.a.createElement("form",{onSubmit:function(t){var n=l.email,a=l.password;e.firebase.doSignInWithEmailAndPassword(n,a).then((function(){u(T),e.history.push("/editor")})).catch((function(e){console.log(e),s(e)})),t.preventDefault()}},r.a.createElement("input",{name:"email",value:l.email,onChange:m,type:"text",placeholder:"Email Address"}),r.a.createElement("input",{name:"password",value:l.password,onChange:m,type:"password",placeholder:"Password"}),r.a.createElement("button",{disabled:d,type:"submit"},"Sign In"),i&&r.a.createElement("p",null,i.message))})),B=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Sign In"),r.a.createElement(W,null),r.a.createElement(x,null))},D={passwordOne:"",passwordTwo:""},U=E((function(e){var t=Object(a.useState)(D),n=Object(v.a)(t,2),l=n[0],u=n[1],o=Object(a.useState)(null),c=Object(v.a)(o,2),i=c[0],s=c[1],m=function(e){var t=e.target,n=t.name,a=t.value;u((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(A.a)({},n,a))}))},d=l.passwordOne!==l.passwordTwo||""===l.passwordOne;return r.a.createElement("form",{onSubmit:function(t){var n=l.passwordOne;e.firebase.doPasswordUpdate(n).then((function(){u(D)})).catch((function(e){s(e)})),t.preventDefault()}},r.a.createElement("input",{name:"passwordOne",value:l.passwordOne,onChange:m,type:"password",placeholder:"New Password"}),r.a.createElement("input",{name:"passwordTwo",value:l.passwordTwo,onChange:m,type:"password",placeholder:"Confirm New Password"}),r.a.createElement("button",{disabled:d,type:"submit"},"Reset My Password"),i&&r.a.createElement("p",null,i.message))})),z=S((function(e){return!!e}))((function(){return r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Account: ",e.email),r.a.createElement(R,null),r.a.createElement(U,null))}))}));var Z=S((function(e){return!!e}))((function(){return r.a.createElement(g.Consumer,null,(function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"Editor"))}))})),F=O((function(){return r.a.createElement(o.a,null,r.a.createElement(C,null),r.a.createElement("hr",null),r.a.createElement(c.a,{exact:!0,path:"/",component:I}),r.a.createElement(c.a,{path:"/signin",component:B}),r.a.createElement(c.a,{path:"/pw-forget",component:L}),r.a.createElement(c.a,{path:"/account",component:z}),r.a.createElement(c.a,{path:"/editor",component:Z}))}));u.a.render(r.a.createElement(h.Provider,{value:new b},r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.45bb22e0.chunk.js.map