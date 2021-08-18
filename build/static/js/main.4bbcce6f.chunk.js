(this["webpackJsonptwitter_clone-client"]=this["webpackJsonptwitter_clone-client"]||[]).push([[0],{127:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(64),u=n.n(a),s=(n(72),n(3)),o=n(0),i=Object(r.memo)((function(e){var t=e.username,n=e.onLogout,r=e.onMyTweets,c=e.onAllTweets;return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsxs)("div",{className:"logo",children:[Object(o.jsx)("img",{src:"./img/logo.png",alt:"Dwitter Logo",className:"logo-img"}),Object(o.jsx)("h1",{className:"logo-name",children:"Shyuntwitter"}),t&&Object(o.jsxs)("span",{className:"logo-user",children:["@",t]})]}),t&&Object(o.jsxs)("nav",{className:"menu",children:[Object(o.jsx)("button",{onClick:c,children:"All Tweets"}),Object(o.jsx)("button",{onClick:r,children:"My Tweets"}),Object(o.jsx)("button",{className:"menu-item",onClick:n,children:"Logout"})]})]})})),l=n(36),h=n(5),f=Object(r.memo)((function(e){var t=e.text,n=e.isAlert;return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("p",{className:"banner ".concat(n?"banner-red":"banner-green"),children:t})})})),j=n(2),b=n.n(j),p=n(4),m=function(e){var t=e.tweetService,n=e.onError,c=e.user,a=Object(r.useState)(""),u=Object(h.a)(a,2),s=u[0],i=u[1],l=function(){var e=Object(p.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t.postTweet(s,c.userId).then((function(){i("")})).catch(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"tweet-form",onSubmit:l,children:[Object(o.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:s,required:!0,autoFocus:!0,onChange:function(e){i(e.target.value)},className:"form-input tweet-input"}),Object(o.jsx)("button",{type:"submit",className:"form-btn",children:"Post"})]})};function d(e){var t=new Date(Date.parse(e)),n=new Date,r=Math.floor((n-t)/1e3);if(r<=1)return"just now";if(r<20)return r+" seconds ago";if(r<40)return"half a minute ago";if(r<60)return"less than a minute ago";if(r<=90)return"one minute ago";if(r<=3540)return Math.round(r/60)+" minutes ago";if(r<=5400)return"1 hour ago";if(r<=86400)return Math.round(r/3600)+" hours ago";if(r<=129600)return"1 day ago";if(r<604800)return Math.round(r/86400)+" days ago";if(r<=777600)return"1 week ago";var c=t.toLocaleDateString("default",{month:"long"});return"on ".concat(c," ").concat(t.getDate())}var O=Object(r.memo)((function(e){var t=e.url,n=e.name;return Object(o.jsx)("div",{children:t?Object(o.jsx)("img",{src:t,alt:"avatar",className:"avatar-img"}):Object(o.jsx)("div",{className:"avatar-txt",children:n.charAt(0)})})})),v=function(e){var t=e.tweet,n=e.tweetService,c=e.onClose,a=Object(r.useState)(t.text),u=Object(h.a)(a,2),s=u[0],i=u[1],l=function(){var e=Object(p.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),n.updateTweet(t.id,s),c();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"edit-tweet-form",onSubmit:l,children:[Object(o.jsx)("input",{type:"text",placeholder:"Edit your tweet",value:s,required:!0,autoFocus:!0,onChange:function(e){i(e.target.value)},className:"form-input tweet-input"}),Object(o.jsxs)("div",{className:"edit-tweet-form-action",children:[Object(o.jsx)("button",{type:"submit",className:"form-btn-update",children:"Update"}),Object(o.jsx)("button",{type:"button",className:"form-btn-cancel",onClick:c,children:"Cancel"})]})]})},w=Object(r.memo)((function(e){var t=e.tweet,n=e.owner,c=e.tweetService,a=e.onUsernameClick,u=t.id,s=t.username,i=t.name,l=t.url,f=t.text,j=t.createdAt,b=Object(r.useState)(!1),p=Object(h.a)(b,2),m=p[0],w=p[1];return Object(o.jsxs)("li",{className:"tweet",children:[Object(o.jsxs)("section",{className:"tweet-container",children:[Object(o.jsx)(O,{url:l,name:i}),Object(o.jsxs)("div",{className:"tweet-body",children:[Object(o.jsx)("span",{className:"tweet-name",children:i}),Object(o.jsxs)("span",{className:"tweet-username",onClick:function(){return a(t)},children:["@",s]}),Object(o.jsxs)("span",{className:"tweet-date",children:[" \xb7 ",d(j)]}),Object(o.jsx)("p",{children:f}),m&&Object(o.jsx)(v,{tweet:t,tweetService:c,onClose:function(){return w(!1)}})]})]}),n&&Object(o.jsxs)("div",{className:"tweet-action",children:[Object(o.jsx)("button",{className:"tweet-action-btn",onClick:function(){return c.deleteTweet(u)},children:"x"}),Object(o.jsx)("button",{className:"tweet-action-btn",onClick:function(){return w(!0)},children:"\u270e"})]})]})})),x=n(16),g=n(17),y=function(e){var t=e.onSignUp,n=e.onLogin,c=Object(r.useState)(!1),a=Object(h.a)(c,2),u=a[0],s=a[1],i=Object(r.useState)(""),l=Object(h.a)(i,2),j=l[0],b=l[1],p=Object(r.useState)(""),m=Object(h.a)(p,2),d=m[0],O=m[1],v=Object(r.useState)(""),w=Object(h.a)(v,2),x=w[0],g=w[1],y=Object(r.useState)(""),k=Object(h.a)(y,2),S=k[0],N=k[1],C=Object(r.useState)(""),T=Object(h.a)(C,2),E=T[0],M=T[1],D=Object(r.useState)(""),I=Object(h.a)(D,2),L=I[0],U=I[1],P=Object(r.useState)(!1),A=Object(h.a)(P,2),q=A[0],F=A[1],J=function(e){U(e.toString()),F(!0)},R=function(e){var t=e.target,n=t.name,r=t.value,c=t.checked;switch(n){case"username":return b(r);case"password":return O(r);case"name":return g(r);case"email":return N(r);case"url":return M(r);case"signup":return s(c)}};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(f,{text:L,isAlert:q}),Object(o.jsxs)("form",{className:"auth-form",onSubmit:function(e){e.preventDefault(),u?t(j,d,x,S,E).catch(J):n(j,d).catch(J)},children:[Object(o.jsx)("input",{name:"username",type:"text",placeholder:"Id",value:j,onChange:R,className:"form-input",required:!0}),Object(o.jsx)("input",{name:"password",type:"password",placeholder:"Password",value:d,className:"form-input",onChange:R}),u&&Object(o.jsx)("input",{name:"name",type:"text",placeholder:"Name",value:x,onChange:R,className:"form-input",required:!0}),u&&Object(o.jsx)("input",{name:"email",type:"email",placeholder:"Email",value:S,onChange:R,className:"form-input",required:!0}),u&&Object(o.jsx)("input",{name:"url",type:"url",placeholder:"Profile Image URL",value:E,onChange:R,className:"form-input"}),Object(o.jsxs)("div",{className:"form-signup",children:[Object(o.jsx)("input",{name:"signup",id:"signup",type:"checkbox",onChange:R,checked:u}),Object(o.jsx)("label",{htmlFor:"signup",children:" Create a new account?"})]}),Object(o.jsx)("button",{className:"form-btn auth-form-btn",type:"submit",children:u?"Sign Up":"Sign In"})]})]})},k=Object(r.createContext)({}),S=Object(r.createRef)(),N=Object(r.createRef)();function C(e){var t=e.authService,n=e.authErrorEventBus,c=e.children,a=Object(r.useState)(void 0),u=Object(h.a)(a,2),s=u[0],l=u[1],f=Object(r.useState)(void 0),j=Object(h.a)(f,2),m=j[0],d=j[1];Object(r.useImperativeHandle)(S,(function(){return s?s.token:void 0})),Object(r.useImperativeHandle)(N,(function(){return m})),Object(r.useEffect)((function(){n.listen((function(e){console.log(e),l(void 0)}))}),[n]),Object(r.useEffect)((function(){t.csrfToken().then(d).catch(console.error)}),[t]),Object(r.useEffect)((function(){t.me().then(l).catch(console.error)}),[t]);var O=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n,r,c,a,u){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.signup(n,r,c,a,u).then((function(e){return l(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n,r,c,a){return e.apply(this,arguments)}}(),[t]),v=Object(r.useCallback)(function(){var e=Object(p.a)(b.a.mark((function e(n,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.login(n,r).then((function(e){return l(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[t]),w=Object(r.useCallback)(Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.logout().then((function(){return l(void 0)})));case 1:case"end":return e.stop()}}),e)}))),[t]),x=Object(r.useMemo)((function(){return{user:s,signUp:O,logIn:v,logout:w}}),[s,O,v,w]);return Object(o.jsx)(k.Provider,{value:x,children:s?c:Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{}),Object(o.jsx)(y,{onSignUp:O,onLogin:v})]})})}var T=function(){function e(){Object(x.a)(this,e)}return Object(g.a)(e,[{key:"listen",value:function(e){this.callback=e}},{key:"notify",value:function(e){this.callback(e)}}]),e}(),E=function(){return Object(r.useContext)(k)},M=Object(r.memo)((function(e){var t=e.tweetService,n=e.username,c=e.addable,a=Object(r.useState)([]),u=Object(h.a)(a,2),i=u[0],j=u[1],b=Object(r.useState)(""),p=Object(h.a)(b,2),d=p[0],O=p[1],v=Object(s.f)(),x=E().user;Object(r.useEffect)((function(){t.getTweets(n).then((function(e){return j(Object(l.a)(e))})).catch(N);var e=t.onSync((function(e){"create"===e.command?g(e.data):"update"===e.command?k(e.data):"delete"===e.command&&y(e.data)}));return function(){return e()}}),[t,n,x]);var g=function(e){j((function(t){return[e].concat(Object(l.a)(t))}))},y=function(e){j((function(t){return t.filter((function(t){return t.id!==e}))}))},k=function(e){j((function(t){return t.map((function(t){return t.id===e.id?e:t}))}))},S=function(e){return v.push("/".concat(e.username))},N=function(e){O(e.toString()),setTimeout((function(){O("")}),3e3)};return Object(o.jsxs)(o.Fragment,{children:[c&&Object(o.jsx)(m,{tweetService:t,onError:N,onCreated:g,user:x}),d&&Object(o.jsx)(f,{text:d,isAlert:!0,transient:!0}),0===i.length&&Object(o.jsx)("p",{className:"tweets-empty",children:"No Tweets Yet"}),Object(o.jsx)("ul",{className:"tweets",children:i.map((function(e){return Object(o.jsx)(w,{tweet:e,owner:e.username===x.username,tweetService:t,onUsernameClick:S},e.id)}))})]})})),D=function(e){var t=e.tweetService;return Object(o.jsx)(M,{tweetService:t,addable:!0})},I=function(e){var t=e.tweetService,n=Object(s.g)().username;return Object(o.jsx)(M,{tweetService:t,username:n,addable:!1})};var L=function(e){var t=e.tweetService,n=Object(s.f)(),r=E(),c=r.user,a=r.logout;return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(i,{username:c.username,onLogout:function(){window.confirm("Do you want to log out?")&&(a(),n.push("/"))},onAllTweets:function(){n.push("/")},onMyTweets:function(){n.push("/".concat(c.username))}}),Object(o.jsxs)(s.c,{children:["(",Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(s.a,{exact:!0,path:"/",children:Object(o.jsx)(D,{tweetService:t})}),Object(o.jsx)(s.a,{exact:!0,path:"/:username",children:Object(o.jsx)(I,{tweetService:t})})]}),")"]})]})},U=function(){function e(t){Object(x.a)(this,e),this.http=t}return Object(g.a)(e,[{key:"signup",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n,r,c,a){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/auth/signup",{method:"POST",body:JSON.stringify({username:t,password:n,name:r,email:c,url:a})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n,r,c,a){return e.apply(this,arguments)}}()},{key:"login",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/auth/login",{method:"POST",body:JSON.stringify({username:t,password:n})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"me",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/auth/me",{method:"GET"}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logout",value:function(){var e=Object(p.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/auth/logout",{method:"POST"}));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"csrfToken",value:function(){var e=Object(p.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.http.fetch("/auth/csrf-token",{method:"GET"});case 2:return t=e.sent,e.abrupt("return",t.csrfToken);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),P=function(){function e(t,n){Object(x.a)(this,e),this.http=t,this.socket=n}return Object(g.a)(e,[{key:"getTweets",value:function(){var e=Object(p.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?"/?username=".concat(t):"",e.abrupt("return",this.http.fetch("/tweets".concat(n),{method:"GET"}));case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"postTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={userId:n,text:t},e.abrupt("return",this.http.fetch("/tweets",{method:"POST",body:JSON.stringify(r)}));case 2:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/tweets/".concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"updateTweet",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.http.fetch("/tweets/".concat(t),{method:"PUT",body:JSON.stringify({text:n})}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"onSync",value:function(e){return this.socket.onSync("tweets",e)}}]),e}(),A=n(22),q=n(37),F=n(66),J=n.n(F),R=n(35),B=n.n(R),_={delayMs:100,retryCount:3},G=function(){function e(t,n,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:_;Object(x.a)(this,e),this.authErrorEventBus=n,this.getCsrfToken=r,this.client=J.a.create({baseURL:t,headers:{"Content-Type":"application/json"},withCredentials:!0}),B()(this.client,{retries:c.retryCount,retryDelay:function(e){var t=Math.pow(2,e)*c.delayMs;return t+.1*t*Math.random()},retryCondition:function(e){return B.a.isNetworkOrIdempotentRequestError(e)||429===e.response.status}})}return Object(g.a)(e,[{key:"fetch",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){var r,c,a,u,s,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.body,c=n.method,a=n.headers,u={url:t,method:c,headers:Object(q.a)(Object(q.a)({},a),{},{"_csrf-token":this.getCsrfToken()}),data:r},e.prev=2,e.next=5,this.client(u);case 5:return s=e.sent,e.abrupt("return",s.data);case 9:if(e.prev=9,e.t0=e.catch(2),!e.t0.response){e.next=15;break}throw o=e.t0.response.data,i=o&&o.message?o.message:"Something went wrong",new Error(i);case 15:throw new Error("connection error");case 16:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}()}]),e}(),H=n(67),Y=n.n(H),z=function(){function e(t,n){Object(x.a)(this,e),this.io=Y()(t,{auth:function(e){return e({token:n()})}}),this.io.on("connect_error",(function(e){e&&console.log("Socket Error",e.message)}))}return Object(g.a)(e,[{key:"onSync",value:function(e,t){var n=this;return this.io.connected||this.io.connect(),this.io.on(e,(function(e){return t(e)})),function(){return n.io.off(e)}}}]),e}(),K="https://www.master-7rqtwti-crbgscvaublas.us-4.platformsh.site",Q=new T,V=new G(K,Q,(function(){return N.current})),W=new z(K,(function(){return S.current})),X=new U(V),Z=new P(V,W);u.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(A.a,{children:Object(o.jsx)(C,{authService:X,authErrorEventBus:Q,children:Object(o.jsx)(L,{tweetService:Z})})})}),document.getElementById("root"))},72:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.4bbcce6f.chunk.js.map