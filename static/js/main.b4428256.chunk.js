(this["webpackJsonpreact-client"]=this["webpackJsonpreact-client"]||[]).push([[0],{65:function(e,a,t){"use strict";(function(e){t.d(a,"a",(function(){return S}));var n=t(35),r=t(36),o=t(0),c=t.n(o),l=t(100),m=t(101),i=t(44),s=t(92),u=t(72),p=t(102),d=t(43),b=t(95),E=t(12),g=t(104),f=t(98),h=t(93),v=t(17),k=t(103),N=t(66),w=t.n(N),C=t(99),y=t(97),x=t(28),j=t(37);function O(e){var a=e.children,t=Object(s.a)({disableHysteresis:!0,threshold:0});return c.a.cloneElement(a,{elevation:t?4:0})}var I=Object(u.a)((function(e){return{toolbarMargin:Object(r.a)({},e.mixins.toolbar),tabContainer:{marginLeft:"auto"},tab:Object(r.a)({},e.typography.tab),button:{textTransform:"none",borderRadius:"50px",marginLeft:"50px",marginRight:"4rem",backgroundColor:e.palette.common.green,"&:hover":{backgroundColor:e.palette.secondary.light}},menu:{backgroundColor:e.palette.common.black,borderRadius:"0"},menuItem:Object(r.a)(Object(r.a)({},e.typography.tab),{},{opacity:.7,"&:hover":{opacity:1},fontSize:"0.9rem"}),drawerIconContainer:{marginLeft:"auto","&:hover":{backgroundColor:"transparent",color:"#AEAEAF"}},drawerIcon:{height:"50px",width:"50px",color:"#AEAEAF"},drawer:{backgroundColor:e.palette.common.black,fontFamily:"Roboto",fontSize:"0.9rem"},drawerItem:Object(r.a)({},e.typography.tab),drawerItemLogIn:{backgroundColor:e.palette.common.green}}}));function S(a){var t=I(),r=Object(v.a)(),s=Object(h.a)(r.breakpoints.down("sm")),u=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),N=Object(o.useState)(0),S=Object(n.a)(N,2),T=S[0],B=S[1],L=Object(o.useState)(null),R=Object(n.a)(L,2),A=R[0],P=R[1],z=Object(o.useState)(!1),F=Object(n.a)(z,2),M=F[0],D=F[1],H=Object(o.useState)(0),Q=Object(n.a)(H,2),W=Q[0],G=Q[1],J=Object(o.useState)(!1),_=Object(n.a)(J,2),q=_[0],K=_[1],U=function(e){P(null),D(!1)},V=c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a,{value:T,onChange:function(e,a){B(a)},className:t.tabContainer},c.a.createElement(d.a,{className:t.tab,component:E.b,to:"/",label:"Home"}),c.a.createElement(d.a,{"aria-owns":A?"about-menu":void 0,"aria-haspopup":A?"true":void 0,onMouseOver:function(e){return function(e){P(e.currentTarget),D(!0)}(e)},className:t.tab,component:E.b,to:"/about",label:"Quienes Somos"}),c.a.createElement(d.a,{className:t.tab,component:E.b,to:"/program",label:"Programa"}),c.a.createElement(d.a,{className:t.tab,component:E.b,to:"/events",label:"Eventos"}),c.a.createElement(d.a,{className:t.tab,component:E.b,to:"/contact",label:"Contacto"})),c.a.createElement(b.a,{className:t.button,variant:"contained"},"Get Started"),c.a.createElement(g.a,{id:"simple-menu",anchorEl:A,open:M,onClose:U,MenuListProps:{onMouseLeave:U},classes:{paper:t.menu},elevation:0},[{name:"Quienes Somos",link:"/about"},{name:"Nuestro Equipo",link:"/our-team"},{name:"Sala de prensa",link:"/press"},{name:"Empleo",link:"/careers"}].map((function(e,a){return c.a.createElement(f.a,{key:e,component:E.b,to:e.link,classes:{root:t.menuItem},onClick:function(e){!function(e,a){P(null),D(!1),G(a)}(0,a),B(1),U()},selected:a===W&&1===T},e.name)})))),X=c.a.createElement(c.a.Fragment,null,c.a.createElement(k.a,{disableBackdropTransition:!u,disableDiscovery:u,open:q,onClose:function(){return K(!1)},onOpen:function(){return K(!0)},classes:{paper:t.drawer}},c.a.createElement(y.a,{disablePadding:!0},c.a.createElement(x.a,{divider:!0,button:!0,component:E.b,to:"/",onClick:function(){return K(!1)}},c.a.createElement(j.a,{className:t.drawerItem,disableTypography:!0},"Home")),c.a.createElement(x.a,{divider:!0,button:!0,component:E.b,to:"/about",onClick:function(){return K(!1)}},c.a.createElement(j.a,{className:t.drawerItem,disableTypography:!0},"Quienes Somos")),c.a.createElement(x.a,{divider:!0,button:!0,component:E.b,to:"/program",onClick:function(){return K(!1)}},c.a.createElement(j.a,{className:t.drawerItem,disableTypography:!0},"Programa")),c.a.createElement(x.a,{divider:!0,button:!0,component:E.b,to:"/events",onClick:function(){return K(!1)}},c.a.createElement(j.a,{className:t.drawerItem,disableTypography:!0},"Eventos")),c.a.createElement(x.a,{divider:!0,button:!0,component:E.b,to:"/contact",onClick:function(){return K(!1)}},c.a.createElement(j.a,{className:t.drawerItem,disableTypography:!0},"Contacto")),c.a.createElement(x.a,{divider:!0,button:!0,onClick:function(){return K(!1)},className:t.drawerItemLogIn},c.a.createElement(j.a,{className:t.drawerItem,style:{color:"black"},disableTypography:!0},"Get Started")))),c.a.createElement(C.a,{onClick:function(){return K(!q)},disableRipple:!0,className:t.drawerIconContainer},c.a.createElement(w.a,{className:t.drawerIcon})));return c.a.createElement(c.a.Fragment,null,c.a.createElement(O,null,c.a.createElement(l.a,{position:"fixed"},c.a.createElement(m.a,null,c.a.createElement(i.a,{variant:"h5",style:{marginLeft:"2rem"}},"Cuid\xe9monos Juntos"),s?X:V))),c.a.createElement("div",{className:t.toolbarMargin}))}}).call(this,t(85))},67:function(e,a,t){e.exports=t.p+"static/media/facebook.73caaa01.svg"},68:function(e,a,t){e.exports=t.p+"static/media/instagram.0b117993.svg"},69:function(e,a,t){e.exports=t.p+"static/media/twitter.435fc4bc.svg"},78:function(e,a,t){e.exports=t(91)},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(6),c=t.n(o),l=t(141),m=t(12),i=t(10),s=t(70),u=Object(s.a)({palette:{common:{black:"".concat("#1A1C1D"),green:"".concat("#90BD4B")},primary:{main:"".concat("#1A1C1D")},secondary:{main:"".concat("#90BD4B")},text:{primary:"#B0B1B1"}},typography:{h5:{fontWeight:200},tab:{textTransform:"none",minWidth:10,marginLeft:"25 px"},h3:{fontSize:"2.5rem",fontWeight:700,lineHeight:1.5}}}),p=t(65);function d(){return r.a.createElement("div",null,"Quienes somos!")}function b(){return r.a.createElement("div",null,"Programa!")}function E(){return r.a.createElement("div",null,"Eventos!")}function g(){return r.a.createElement("div",null,"Contacto!")}var f=t(139),h=t(140),v=t(67),k=t.n(v),N=t(68),w=t.n(N),C=t(69),y=t.n(C),x=Object(f.a)((function(e){return{footer:{backgroundColor:e.palette.common.black,width:"100%",position:"relative"},mainContainer:{},link:{color:"#9E9E9E",fontFamily:"Roboto",fontSize:"smaller",textDecoration:"none"},mainLink:{color:"white",fontFamily:"Roboto",fontSize:"smaller",textDecoration:"none"},gridItem:{margin:"3em"},icon:{height:"1.8rem",width:"1.8rem"},socialContainer:{position:"absolute",marginTop:"-5rem"}}}));function j(){var e=x();return r.a.createElement("footer",{className:e.footer},r.a.createElement(h.a,{container:!0,justify:"flex-start",className:e.mainContainer},r.a.createElement(h.a,{item:!0,className:e.gridItem},r.a.createElement(h.a,{container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,component:m.b,to:"/program",className:e.mainLink},"Programas"),r.a.createElement(h.a,{item:!0,className:e.link},"Cursos Libres"),r.a.createElement(h.a,{item:!0,className:e.link},"Eco-alimentaci\xf3n"),r.a.createElement(h.a,{item:!0,className:e.link},"Enpoderamiento"))),r.a.createElement(h.a,{item:!0,className:e.gridItem},r.a.createElement(h.a,{container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,component:m.b,to:"/events",className:e.mainLink},"Eventos"),r.a.createElement(h.a,{item:!0,className:e.link},"Enraizar "),r.a.createElement(h.a,{item:!0,className:e.link},"Transformar"),r.a.createElement(h.a,{item:!0,className:e.link},"Expansi\xf3n"))),r.a.createElement(h.a,{item:!0,className:e.gridItem},r.a.createElement(h.a,{container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,component:m.b,to:"/about",className:e.mainLink},"Quienes Somos"),r.a.createElement(h.a,{item:!0,className:e.link},"Nuestro Equipo "),r.a.createElement(h.a,{item:!0,className:e.link},"Sala de prensa"),r.a.createElement(h.a,{item:!0,className:e.link},"Empleo"))),r.a.createElement(h.a,{item:!0,className:e.gridItem},r.a.createElement(h.a,{container:!0,direction:"column",spacing:2},r.a.createElement(h.a,{item:!0,component:m.b,to:"/contact",className:e.mainLink},"Contacto")))),r.a.createElement(h.a,{container:!0,justify:"flex-end",spacing:2,className:e.socialContainer},r.a.createElement(h.a,{item:!0,component:"a",href:"http://www.facebook.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"facebook logo",src:k.a,className:e.icon})),r.a.createElement(h.a,{item:!0,component:"a",href:"http://www.twitter.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"twitter logo",src:y.a,className:e.icon})),r.a.createElement(h.a,{item:!0,component:"a",href:"http://www.instagram.com",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("img",{alt:"instagram logo",src:w.a,className:e.icon}))))}function O(){return r.a.createElement("div",null,"OurTeam!")}function I(){return r.a.createElement("div",null,"Press!")}function S(){return r.a.createElement("div",null,"Careers!")}var T=t(17),B=t(95);function L(e){return r.a.createElement("svg",{className:e.class,xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fill:e.fill,viewBox:"0 0 18 18"},r.a.createElement("path",{d:"M9 3L7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"}))}var R=t(44),A=Object(f.a)((function(e){return{getStartedButton:{borderRadius:"50px",height:45,width:145,marginRight:10,textTransform:"none",backgroundColor:e.palette.common.green,"&:hover":{backgroundColor:e.palette.secondary.light}},buttonConatiner:{marginTop:"1rem"},learnMoreButton:{borderColor:e.palette.common.green,color:e.palette.common.black,borderWidth:2,textTransform:"none",borderRadius:50,fontSize:"0.9rem",height:45,width:170},firstBlockContainer:{paddingBottom:"4rem",paddingTop:"4rem"}}}));function P(){var e=A(),a=Object(T.a)();return r.a.createElement(h.a,{container:!0,direction:"column",className:e.mainContainer},r.a.createElement(h.a,{item:!0},r.a.createElement(h.a,{container:!0,justify:"center",direction:"row"},r.a.createElement(h.a,{sm:!0,item:!0,className:e.firstBlockContainer},r.a.createElement(R.a,{variant:"h3",align:"center"},"Transforma tu vida",r.a.createElement("br",null),"No est\xe1s solo, est\xe1mos contigo"),r.a.createElement(h.a,{container:!0,justify:"center",className:e.buttonConatiner},r.a.createElement(h.a,{item:!0},r.a.createElement(B.a,{className:e.getStartedButton,variant:"contained"},"Get Started")),r.a.createElement(h.a,{item:!0},r.a.createElement(B.a,{variant:"outlined",className:e.learnMoreButton},r.a.createElement("span",{style:{marginRight:5}},"Autodiagn\xf3stico"),r.a.createElement(L,{width:15,height:15,fill:a.palette.common.green}))))))))}var z=function(){return r.a.createElement(l.a,{theme:u},r.a.createElement(m.a,null,r.a.createElement(p.a,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:function(){return r.a.createElement(P,null)}}),r.a.createElement(i.a,{exact:!0,path:"/about",component:d}),r.a.createElement(i.a,{exact:!0,path:"/our-team",component:O}),r.a.createElement(i.a,{exact:!0,path:"/press",component:I}),r.a.createElement(i.a,{exact:!0,path:"/careers",component:S}),r.a.createElement(i.a,{exact:!0,path:"/program",component:b}),r.a.createElement(i.a,{exact:!0,path:"/events",component:E}),r.a.createElement(i.a,{exact:!0,path:"/contact",component:g})),r.a.createElement(j,null)))};c.a.render(r.a.createElement(m.a,null,r.a.createElement(z,null)),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.b4428256.chunk.js.map