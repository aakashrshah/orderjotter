(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{313:function(e,a,t){e.exports=t(586)},424:function(e,a,t){},585:function(e,a,t){},586:function(e,a,t){"use strict";t.r(a);t(314),t(347),t(384),t(388),t(218),t(415);var n=t(1),r=t.n(n),i=t(14),o=t.n(i),l=t(135),c=t(53),m=t(51),s=t(260),u=Object(m.c)({}),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||m.d,d=Object(m.e)(u,p(Object(m.a)(s.a))),E=(t(424),t(52)),g=t(641),h=t(635),f=t(87),b=t(642),v=t(76),y=t(261),x=t(4),w=t(272),N=t(630),S=t(631),C=t(632),k=t(277),T=t(624),W=t(65);function B(e){var a=e.children;return r.a.createElement(f.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},a)}function P(e,a){return{time:e,amount:a}}var M=[P("00:00",0),P("03:00",300),P("06:00",600),P("09:00",800),P("12:00",1500),P("15:00",2e3),P("18:00",2400),P("21:00",2400),P("24:00",void 0)];function F(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,"Today"),r.a.createElement(W.d,null,r.a.createElement(W.c,{data:M,margin:{top:16,right:16,bottom:0,left:24}},r.a.createElement(W.e,{dataKey:"time"}),r.a.createElement(W.f,null,r.a.createElement(W.a,{angle:270,position:"left",style:{textAnchor:"middle"}},"Sales ($)")),r.a.createElement(W.b,{type:"monotone",dataKey:"amount",stroke:"#556CD6",dot:!1}))))}var O=Object(w.a)({depositContext:{flex:1}});function j(){var e=O();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,"Recent Deposits"),r.a.createElement(f.a,{component:"p",variant:"h4"},"$3,024.00"),r.a.createElement(f.a,{color:"textSecondary",className:e.depositContext},"on 15 March, 2019"),r.a.createElement("div",null,r.a.createElement(T.a,{color:"primary",href:"/"},"View balance")))}var I=t(625),D=t(629),A=t(628),V=t(626),Y=t(627);function R(e,a,t,n,r,i){return{id:e,date:a,name:t,shipTo:n,paymentMethod:r,amount:i}}var G=[R(0,"16 Mar, 2019","Elvis Presley","Tupelo, MS","VISA \u2800\u2022\u2022\u2022\u2022 3719",312.44),R(1,"16 Mar, 2019","Paul McCartney","London, UK","VISA \u2800\u2022\u2022\u2022\u2022 2574",866.99),R(2,"16 Mar, 2019","Tom Scholz","Boston, MA","MC \u2800\u2022\u2022\u2022\u2022 1253",100.81),R(3,"16 Mar, 2019","Michael Jackson","Gary, IN","AMEX \u2800\u2022\u2022\u2022\u2022 2000",654.39),R(4,"15 Mar, 2019","Bruce Springsteen","Long Branch, NJ","VISA \u2800\u2022\u2022\u2022\u2022 5919",212.79)],q=Object(w.a)(function(e){return{seeMore:{marginTop:e.spacing(3)}}});function H(){var e=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,null,"Recent Orders"),r.a.createElement(I.a,{size:"small"},r.a.createElement(V.a,null,r.a.createElement(Y.a,null,r.a.createElement(A.a,null,"Date"),r.a.createElement(A.a,null,"Name"),r.a.createElement(A.a,null,"Ship To"),r.a.createElement(A.a,null,"Payment Method"),r.a.createElement(A.a,{align:"right"},"Sale Amount"))),r.a.createElement(D.a,null,G.map(function(e){return r.a.createElement(Y.a,{key:e.id},r.a.createElement(A.a,null,e.date),r.a.createElement(A.a,null,e.name),r.a.createElement(A.a,null,e.shipTo),r.a.createElement(A.a,null,e.paymentMethod),r.a.createElement(A.a,{align:"right"},e.amount))}))),r.a.createElement("div",{className:e.seeMore},r.a.createElement(T.a,{color:"primary",href:"/"},"See more orders")))}function z(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var L=Object(w.a)(function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(y.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(v.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}});function _(){var e=L(),a=Object(x.a)(e.paper,e.fixedHeight);return r.a.createElement("div",{className:e.root},r.a.createElement(N.a,null),r.a.createElement("main",{className:e.content},r.a.createElement("div",{className:e.appBarSpacer}),r.a.createElement(S.a,{maxWidth:"lg",className:e.container},r.a.createElement(C.a,{container:!0,spacing:3},r.a.createElement(C.a,{item:!0,xs:12,md:8,lg:9},r.a.createElement(k.a,{className:a},r.a.createElement(F,null))),r.a.createElement(C.a,{item:!0,xs:12,md:4,lg:3},r.a.createElement(k.a,{className:a},r.a.createElement(j,null))),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(k.a,{className:e.paper},r.a.createElement(H,null))))),r.a.createElement(z,null)))}var U=t(633),J=t(643),X=t(634),$=t(645),K=t(644),Q=t(82),Z=t.n(Q);function ee(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ae=Object(w.a)(function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}});function te(){var e=ae();return r.a.createElement(C.a,{container:!0,component:"main",className:e.root},r.a.createElement(N.a,null),r.a.createElement(C.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(C.a,{item:!0,xs:12,sm:8,md:5,component:k.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{className:e.avatar},r.a.createElement(Z.a,null)),r.a.createElement(f.a,{variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(J.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(X.a,{control:r.a.createElement($.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,component:c.b,to:"/home"},"Sign In"),r.a.createElement(C.a,{container:!0},r.a.createElement(C.a,{item:!0,xs:!0},r.a.createElement(T.a,{type:"submit",variant:"inherit",color:"primary",className:e.submit,component:c.b,to:"/forgotpassword"},"Forgot password")),r.a.createElement(C.a,{item:!0},r.a.createElement(T.a,{type:"submit",variant:"inherit",color:"primary",className:e.submit,component:c.b,to:"/signup"},"Don't have an account? Sign Up"))),r.a.createElement(K.a,{mt:5},r.a.createElement(ee,null))))))}var ne=Object(l.b)()(function(){return r.a.createElement(C.a,{container:!0,spacing:1},r.a.createElement(C.a,{container:!0,spacing:1,direction:"row"}))});function re(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ie=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}});function oe(){var e=ie();return r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(N.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{className:e.avatar},r.a.createElement(Z.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(J.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(X.a,{control:r.a.createElement($.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(T.a,{href:"/",variant:"body2"},"Already have an account? Sign in"))))),r.a.createElement(K.a,{mt:5},r.a.createElement(re,null)))}var le=t(636),ce=t(639),me=t(638),se=t(637),ue=t(276),pe=t.n(ue);function de(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Ee=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white},ul:{margin:0,padding:0},li:{listStyle:"none"}},appBar:{borderBottom:"1px solid ".concat(e.palette.divider)},toolbar:{flexWrap:"wrap"},toolbarTitle:{flexGrow:1},link:{margin:e.spacing(1,1.5)},heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:e.palette.grey[200]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},footer:Object(v.a)({borderTop:"1px solid ".concat(e.palette.divider),marginTop:e.spacing(8),paddingTop:e.spacing(3),paddingBottom:e.spacing(3)},e.breakpoints.up("sm"),{paddingTop:e.spacing(6),paddingBottom:e.spacing(6)})}}),ge=[{title:"Free",price:"0",description:["10 users included","2 GB of storage","Help center access","Email support"],buttonText:"Sign up for free",buttonVariant:"outlined"},{title:"Pro",subheader:"Most popular",price:"15",description:["20 users included","10 GB of storage","Help center access","Priority email support"],buttonText:"Get started",buttonVariant:"contained"},{title:"Enterprise",price:"30",description:["50 users included","30 GB of storage","Help center access","Phone & email support"],buttonText:"Contact us",buttonVariant:"outlined"}],he=[{title:"Company",description:["Team","History","Contact us","Locations"]},{title:"Features",description:["Cool stuff","Random feature","Team feature","Developer stuff","Another one"]},{title:"Resources",description:["Resource","Resource name","Another resource","Final resource"]},{title:"Legal",description:["Privacy policy","Terms of use"]}];function fe(){var e=Ee();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement(S.a,{maxWidth:"sm",component:"main",className:e.heroContent},r.a.createElement(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"Pricing"),r.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",component:"p"},"Quickly build an effective pricing table for your potential customers with this layout. It's built with default Material-UI components with little customization.")),r.a.createElement(S.a,{maxWidth:"md",component:"main"},r.a.createElement(C.a,{container:!0,spacing:5,alignItems:"flex-end"},ge.map(function(a){return r.a.createElement(C.a,{item:!0,key:a.title,xs:12,sm:"Enterprise"===a.title?12:6,md:4},r.a.createElement(le.a,null,r.a.createElement(se.a,{title:a.title,subheader:a.subheader,titleTypographyProps:{align:"center"},subheaderTypographyProps:{align:"center"},action:"Pro"===a.title?r.a.createElement(pe.a,null):null,className:e.cardHeader}),r.a.createElement(me.a,null,r.a.createElement("div",{className:e.cardPricing},r.a.createElement(f.a,{component:"h2",variant:"h3",color:"textPrimary"},"$",a.price),r.a.createElement(f.a,{variant:"h6",color:"textSecondary"},"/mo")),r.a.createElement("ul",null,a.description.map(function(e){return r.a.createElement(f.a,{component:"li",variant:"subtitle1",align:"center",key:e},e)}))),r.a.createElement(ce.a,null,r.a.createElement(h.a,{fullWidth:!0,variant:a.buttonVariant,color:"primary"},a.buttonText))))}))),r.a.createElement(S.a,{maxWidth:"md",component:"footer",className:e.footer},r.a.createElement(C.a,{container:!0,spacing:4,justify:"space-evenly"},he.map(function(e){return r.a.createElement(C.a,{item:!0,xs:6,sm:3,key:e.title},r.a.createElement(f.a,{variant:"h6",color:"textPrimary",gutterBottom:!0},e.title),r.a.createElement("ul",null,e.description.map(function(e){return r.a.createElement("li",{key:e},r.a.createElement(T.a,{href:"/",variant:"subtitle1",color:"textSecondary"},e))})))})),r.a.createElement(K.a,{mt:5},r.a.createElement(de,null))))}var be=t(640);function ve(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var ye=Object(w.a)(function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6)}}}),xe=[1,2,3,4,5,6,7,8,9];function we(){var e=ye();return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null),r.a.createElement("main",null,r.a.createElement("div",{className:e.heroContent},r.a.createElement(S.a,{maxWidth:"sm"},r.a.createElement(f.a,{component:"h1",variant:"h2",align:"center",color:"textPrimary",gutterBottom:!0},"DiscoverPage layout"),r.a.createElement(f.a,{variant:"h5",align:"center",color:"textSecondary",paragraph:!0},"Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely."),r.a.createElement("div",{className:e.heroButtons},r.a.createElement(C.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(C.a,{item:!0},r.a.createElement(h.a,{variant:"contained",color:"primary"},"Main call to action")),r.a.createElement(C.a,{item:!0},r.a.createElement(h.a,{variant:"outlined",color:"primary"},"Secondary action")))))),r.a.createElement(S.a,{className:e.cardGrid,maxWidth:"md"},r.a.createElement(C.a,{container:!0,spacing:4},xe.map(function(a){return r.a.createElement(C.a,{item:!0,key:a,xs:12,sm:6,md:4},r.a.createElement(le.a,{className:e.card},r.a.createElement(be.a,{className:e.cardMedia,image:"https://source.unsplash.com/random",title:"Image title"}),r.a.createElement(me.a,{className:e.cardContent},r.a.createElement(f.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Heading"),r.a.createElement(f.a,null,"This is a media card. You can use this section to describe the content.")),r.a.createElement(ce.a,null,r.a.createElement(h.a,{size:"small",color:"primary"},"View"),r.a.createElement(h.a,{size:"small",color:"primary"},"Edit"))))})))),r.a.createElement("footer",{className:e.footer},r.a.createElement(f.a,{variant:"h6",align:"center",gutterBottom:!0},"Footer"),r.a.createElement(f.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p"},"Something here to give the footer a purpose!"),r.a.createElement(ve,null)))}function Ne(){return r.a.createElement(f.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(T.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var Se=Object(w.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}});function Ce(){var e=Se();return r.a.createElement(S.a,{component:"main",maxWidth:"xs"},r.a.createElement(N.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(U.a,{className:e.avatar},r.a.createElement(Z.a,null)),r.a.createElement(f.a,{component:"h1",variant:"h5"},"Forgot Password"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(C.a,{container:!0,spacing:2},r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(J.a,{autoComplete:"fname",name:"firstName",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0})),r.a.createElement(C.a,{item:!0,xs:12,sm:6},r.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(J.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email"})),r.a.createElement(C.a,{item:!0,xs:12},r.a.createElement(X.a,{control:r.a.createElement($.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."}))),r.a.createElement(h.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign Up"),r.a.createElement(C.a,{container:!0,justify:"flex-end"},r.a.createElement(C.a,{item:!0},r.a.createElement(T.a,{href:"/#",variant:"body2"},"Sign in instead"))))),r.a.createElement(K.a,{mt:5},r.a.createElement(Ne,null)))}t(585);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:d},r.a.createElement(c.a,null,r.a.createElement(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{position:"static"},r.a.createElement(b.a,null,r.a.createElement(h.a,{color:"inherit",component:c.b,to:"/"},r.a.createElement(f.a,{variant:"h6",color:"inherit",style:{textTransform:"none"}},"Order Jotter")))),r.a.createElement("div",{className:"content"},r.a.createElement(E.a,{exact:!0,path:"/",component:te}),r.a.createElement(E.a,{exact:!0,path:"/signup",component:oe}),r.a.createElement(E.a,{exact:!0,path:"/home",component:_}),r.a.createElement(E.a,{exact:!0,path:"/interests",component:ne}),r.a.createElement(E.a,{exact:!0,path:"/pricing",component:fe}),r.a.createElement(E.a,{exact:!0,path:"/explore",component:we}),r.a.createElement(E.a,{exact:!0,path:"/forgotpassword",component:Ce})))},null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[313,1,2]]]);
//# sourceMappingURL=main.c5e5c2bb.chunk.js.map