webpackJsonp([1],{"54ok":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),o={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",[t._l(t.links,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.url}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}),t._v(" "),t.isUserLoggedIn?r("v-list-tile",{on:{click:t.onLogout}},[r("v-list-tile-action",[r("v-icon",[t._v("exit_to_app")])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{domProps:{textContent:t._s("Logout")}})],1)],1):t._e()],2)],1),t._v(" "),r("v-toolbar",{attrs:{app:"",dark:"",color:"indigo darken-3"}},[r("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{staticClass:"pointer",attrs:{to:"/",tag:"span"}},[t._v("TTR Logic")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[t._l(t.links,function(e){return r("v-btn",{key:e.title,attrs:{to:e.url,flat:""}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n          "+t._s(e.title)+"\n        ")],1)}),t._v(" "),t.isUserLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.onLogout}},[r("v-icon",{attrs:{left:""}},[t._v("exit_to_app")]),t._v("\n          Logout\n        ")],1):t._e()],2)],1),t._v(" "),r("v-content",[r("router-view"),t._v(" "),t.error?[r("v-snackbar",{attrs:{timeout:5e3,"multi-line":!0,color:"error"},on:{input:t.closeError}},[t._v("\n\t        "+t._s(t.error)+"\n\t        "),r("v-btn",{attrs:{flat:"",dark:""},nativeOn:{click:function(e){return t.closeError(e)}}},[t._v("Close")])],1)]:t._e()],2)],1)},staticRenderFns:[]};var s=r("VU/8")({data:function(){return{drawer:!1}},computed:{error:function(){return this.$store.getters.error},isUserLoggedIn:function(){return this.$store.getters.isUserLoggedIn},links:function(){return this.isUserLoggedIn?[]:[{title:"Login",icon:"lock",url:"/login"},{title:"Registration",icon:"face",url:"/registration"}]}},methods:{closeError:function(){this.$store.dispatch("clearError")},onLogout:function(){this.$store.dispatch("logOutUser"),this.$router.push("/")}}},o,!1,function(t){r("54ok")},"data-v-f0eeb368",null).exports,a=r("/ocq"),i=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,l={data:function(){return{email:"",password:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return i.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("loginUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}}},c={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"indigo darken-3"}},[r("v-toolbar-title",[t._v("Login form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{validation:""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3",disabled:!t.valid},on:{click:t.onSubmit}},[t._v("Login")])],1)],1)],1)],1)],1)},staticRenderFns:[]},u=r("VU/8")(l,c,!1,null,null,null).exports,d=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,v={data:function(){var t=this;return{email:"",password:"",confirmPassword:"",valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return d.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"},function(t){return t&&t.length>=6||"Password must be equal or more than 6 characters"}],confirmPasswordRules:[function(t){return!!t||"Password is required"},function(e){return e===t.password||"Password should match"}]}},computed:{loading:function(){return this.$store.getters.loading}},methods:{onSubmit:function(){var t=this;if(this.$refs.form.validate()){var e={email:this.email,password:this.password};this.$store.dispatch("registerUser",e).then(function(){t.$router.push("/")}).catch(function(){})}}}},m={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{"align-center":"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm8:"",md6:""}},[r("v-card",{staticClass:"elevation-12"},[r("v-toolbar",{attrs:{dark:"",color:"indigo darken-3"}},[r("v-toolbar-title",[t._v("Registration form")])],1),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{"prepend-icon":"person",name:"email",label:"Email",type:"email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"password",label:"Password",type:"password",counter:6,rules:t.passwordRules},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-text-field",{attrs:{"prepend-icon":"lock",name:"confirm-password",label:"Confirm Password",type:"password",counter:6,rules:t.confirmPasswordRules},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"white--text",attrs:{color:"blue darken-3",loading:t.loading,disabled:!t.valid||t.loading},on:{click:t.onSubmit}},[t._v("Create account")])],1)],1)],1)],1)],1)},staticRenderFns:[]},f=r("VU/8")(v,m,!1,null,null,null).exports,p={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("Home")])},staticRenderFns:[]},g=r("VU/8")({},p,!1,null,null,null).exports;n.default.use(a.a);var h=new a.a({routes:[{path:"/login",name:"login",component:u},{path:"/registration",name:"reg",component:f},{path:"",name:"home",component:g}],mode:"history"}),w=r("NYxO"),_=r("Xxa5"),b=r.n(_),k=r("exGp"),x=r.n(k),E=r("Zrlr"),L=r.n(E),U=r("kxiW"),P=function t(e){L()(this,t),this.id=e},$={state:{user:null},mutations:{setUser:function(t,e){t.user=e}},actions:{registerUser:function(t,e){var r=this,n=t.commit,o=e.email,s=e.password;return x()(b.a.mark(function t(){var e;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,U.auth().createUserWithEmailAndPassword(o,s);case 5:e=t.sent,n("setUser",new P(e.uid)),n("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),n("setLoading",!1),n("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},loginUser:function(t,e){var r=this,n=t.commit,o=e.email,s=e.password;return x()(b.a.mark(function t(){var e;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n("clearError"),n("setLoading",!0),t.prev=2,t.next=5,U.auth().signInWithEmailAndPassword(o,s);case 5:e=t.sent,n("setUser",new P(e.uid)),n("setLoading",!1),t.next=15;break;case 10:throw t.prev=10,t.t0=t.catch(2),n("setLoading",!1),n("setError",t.t0.message),t.t0;case 15:case"end":return t.stop()}},t,r,[[2,10]])}))()},autoLoginUser:function(t,e){(0,t.commit)("setUser",new P(e.uid))},logOutUser:function(t){var e=t.commit;U.auth().signOut(),e("setUser",null)}},getters:{user:function(t){return t.user},isUserLoggedIn:function(t){return null!==t.user}}};n.default.use(w.a);var R=new w.a.Store({modules:{user:$,shared:{state:{loading:!1,error:null},mutations:{setLoading:function(t,e){t.loading=e},setError:function(t,e){t.error=e},clearError:function(t){t.error=null}},actions:{setLoading:function(t,e){(0,t.commit)("setLoading",e)},setError:function(t,e){(0,t.commit)("setError",e)},clearError:function(t){(0,t.commit)("clearError")}},getters:{loading:function(t){return t.loading},error:function(t){return t.error}}}}}),y=r("3EgV"),C=r.n(y);r("7zck");n.default.use(C.a),n.default.config.productionTip=!1,new n.default({el:"#app",router:h,store:R,components:{App:s},template:"<App/>",created:function(){var t=this;U.initializeApp({apiKey:"AIzaSyB6Kc-JFtn3eVelfnCB7gE5umB4c7lr1JA",authDomain:"ttr-logic.firebaseapp.com",databaseURL:"https://ttr-logic.firebaseio.com",projectId:"ttr-logic",storageBucket:"ttr-logic.appspot.com",messagingSenderId:"1043747398535"}),U.auth().onAuthStateChanged(function(e){e&&t.$store.dispatch("autoLoginUser",e)})}})}},["NHnr"]);
//# sourceMappingURL=app.9960d886efa823ce0477.js.map