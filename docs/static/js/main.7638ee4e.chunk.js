(this.webpackJsonpben9i=this.webpackJsonpben9i||[]).push([[0],{56:function(e,t,a){e.exports=a(96)},65:function(e,t,a){},68:function(e,t){},70:function(e,t){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(22),r=a.n(l),o=a(16),s=(a(65),a(25)),i=a(3);var m=function(){return c.a.createElement("div",null)},u=a(4);var d=function(e){var t=e.source;return c.a.createElement("li",{key:t.code,className:t.code===e.selected?"is-active":null,onClick:function(){e.callback(e.source)}},c.a.createElement("a",null,c.a.createElement("span",null,t.label)))};var E=function(e){var t=e.source||[];return c.a.createElement("div",{className:"tabs is-centered is-boxed is-medium"},c.a.createElement("ul",null,t.map((function(t){return c.a.createElement(d,{key:t.code,source:t,callback:e.callback,selected:e.selected})}))))},p=(a(36),[{code:"none",name:"\u306a\u3057",c1:"bpmn-icon-start-event-none",c2:null,c3:null,c4:null,c5:null,c6:null,c7:"??",c8:"??",important:!0},{code:"message",name:"\u30e1\u30c3\u30bb\u30fc\u30b8",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:"??",c8:"??",important:!0},{code:"timer",name:"\u30bf\u30a4\u30de\u30fc",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:null,c8:null,important:!0},{code:"error",name:"\u30a8\u30e9\u30fc",c1:null,c2:"??",c3:null,c4:null,c5:"??",c6:null,c7:null,c8:"??",important:!0},{code:"escalation",name:"\u30a8\u30b9\u30ab\u30ec\u30fc\u30b7\u30e7\u30f3",c1:null,c2:"??",c3:"??",c4:null,c5:"??",c6:"??",c7:"??",c8:"??",important:!1},{code:"cancel",name:"\u30ad\u30e3\u30f3\u30bb\u30eb",c1:null,c2:null,c3:null,c4:null,c5:"??",c6:null,c7:null,c8:"??",important:!1},{code:"compensation",name:"\u4fdd\u8a3c",c1:null,c2:"??",c3:null,c4:null,c5:"??",c6:null,c7:"??",c8:"??",important:!1},{code:"conditional",name:"\u6761\u4ef6",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:null,c8:null,important:!1},{code:"link",name:"\u30ea\u30f3\u30af",c1:null,c2:null,c3:null,c4:"??",c5:null,c6:null,c7:"??",c8:null,important:!1},{code:"signal",name:"\u30b7\u30b0\u30ca\u30eb",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:"??",c8:"??",important:!1},{code:"terminate",name:"\u505c\u6b62",c1:null,c2:null,c3:null,c4:null,c5:null,c6:null,c7:null,c8:"??",important:!1},{code:"multiple",name:"\u591a\u91cd",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:"??",c8:"??",important:!1},{code:"parallel-multiple",name:"\u591a\u91cd\u30d1\u30e9\u30ec\u30eb",c1:"??",c2:"??",c3:"??",c4:"??",c5:"??",c6:"??",c7:null,c8:null,important:!1}]),f=["c1","c2","c3","c4","c5","c6","c7","c8"],v={icon:{fontSize:33,textAlign:"center",padding:0,verticalAlign:"middle"}};var b=function(){return c.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable",style:{fontSize:14}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{rowSpan:"2"},"\u30bf\u30a4\u30d7"),c.a.createElement("th",{colSpan:"3"},"\u958b\u59cb"),c.a.createElement("th",{colSpan:"4"},"\u4e2d\u9593"),c.a.createElement("th",{rowSpan:"2"},"\u7d42\u4e86")),c.a.createElement("tr",null,c.a.createElement("th",null,"\u30c8\u30c3\u30d7",c.a.createElement("br",null),"\u30ec\u30d9\u30eb"),c.a.createElement("th",null,"\u30a4\u30d9\u30f3\u30c8",c.a.createElement("br",null),"\u30b5\u30d6\u30d7\u30ed\u30bb\u30b9",c.a.createElement("br",null),"(\u4e2d\u65ad)"),c.a.createElement("th",null,"\u30a4\u30d9\u30f3\u30c8",c.a.createElement("br",null),"\u30b5\u30d6\u30d7\u30ed\u30bb\u30b9",c.a.createElement("br",null),"(\u975e\u4e2d\u65ad)"),c.a.createElement("th",null,"\u30ad\u30e3\u30c3\u30c1"),c.a.createElement("th",null,"\u5883\u754c",c.a.createElement("br",null),"(\u4e2d\u65ad)"),c.a.createElement("th",null,"\u5883\u754c",c.a.createElement("br",null),"(\u975e\u4e2d\u65ad)"),c.a.createElement("th",null,"\u30b9\u30ed\u30fc"))),c.a.createElement("tbody",null,p.map((function(e,t){return c.a.createElement("tr",{key:t},c.a.createElement("td",null,e.name,c.a.createElement("br",null),"(",e.code,")"),f.map((function(t){return c.a.createElement("td",{key:t,style:v.icon},function(e,t){var a=e[t];return a?"??"===a?"??":c.a.createElement("span",{className:a}):c.a.createElement("span",{style:{fontWeight:"bold",color:"#ccc"}},"--")}(e,t))})))}))))};var h=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement(b,null)))};var g=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable",style:{fontSize:11}},c.a.createElement("thead",null),c.a.createElement("tbody",null)),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30b5\u30d6\u30d7\u30ed\u30bb\u30b9(\u7121\u3057)"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30b5\u30d6\u30d7\u30ed\u30bb\u30b9(\u6709\u308a)"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30d1\u30e9\u30ec\u30eb\u30fb\u30dc\u30c3\u30af\u30b9 (parallel box)"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30a2\u30c9\u30db\u30c3\u30af\u30fb\u30b5\u30d6\u30d7\u30ed\u30bb\u30b9 (ad-hoc subprocess)"))))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30b3\u30fc\u30eb\u30fb\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3 (call activity)")))))};var N=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-4"},"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"XOR \u30b2\u30fc\u30c8\u30a6\u30a7\u30a4 (exclusive data-basee gateway)"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30d1\u30e9\u30ec\u30eb\u30fb\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4")))))},y=[{code:"user",name:"\u30e6\u30fc\u30b6\u30fc\u30fb\u30bf\u30b9\u30af",description:""},{code:"service",name:"\u30b5\u30fc\u30d3\u30b9\u30fb\u30bf\u30b9\u30af",description:""},{code:"abstract",name:"\u62bd\u8c61\u30bf\u30b9\u30af",description:""},{code:"send",name:"\u9001\u4fe1\u30bf\u30b9\u30af",description:""},{code:"receive",name:"\u53d7\u4fe1\u30bf\u30b9\u30af",description:""},{code:"manual",name:"\u30de\u30cb\u30e5\u30a2\u30eb\u30fb\u30bf\u30b9\u30af",description:""},{code:"script",name:"\u30b9\u30af\u30ea\u30d7\u30c8\u30fb\u30bf\u30b9\u30af",description:""},{code:"business-rules",name:"\u30d3\u30b8\u30cd\u30b9\u30eb\u30fc\u30eb\u30fb\u30bf\u30b9\u30af",description:""}];var x=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-4"},"\u30bf\u30b9\u30af"),c.a.createElement("table",{className:"table is-bordered is-striped is-narrow is-hoverable",style:{fontSize:9}},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Image"),c.a.createElement("th",null,"Name"),c.a.createElement("th",null,"Description"))),c.a.createElement("tbody",null,y.map((function(e){return c.a.createElement("tr",{key:e.code},c.a.createElement("td",null),c.a.createElement("td",null,e.name),c.a.createElement("td",null,e.description))}))))))};var w=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-4"},"\u30d5\u30ed\u30fc\u30fb\u30ce\u30fc\u30c9 (flow node)"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30b7\u30fc\u30b1\u30f3\u30b9\u30fb\u30d5\u30ed\u30fc"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30e1\u30c3\u30bb\u30fc\u30b8\u30fb\u30d5\u30ed\u30fc")))))};var _=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-4"},"\u30d7\u30fc\u30eb"),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30d7\u30ed\u30bb\u30b9\u30fb\u30d7\u30fc\u30eb"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30db\u30ef\u30a4\u30c8\u30dc\u30c3\u30af\u30b9\u30fb\u30d7\u30fc\u30eb"))),c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-5"},"\u30d6\u30e9\u30c3\u30af\u30dc\u30c3\u30af\u30b9\u30fb\u30d7\u30fc\u30eb")))))};var j=function(){return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"title is-4"},"\u30ec\u30fc\u30f3")))};var O=function(e){var t=Object(n.useState)([{code:"event",label:"\u30a4\u30d9\u30f3\u30c8"},{code:"task",label:"\u30bf\u30b9\u30af"},{code:"activity",label:"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3"},{code:"flow",label:"\u30d5\u30ed\u30fc\u30fb\u30ce\u30fc\u30c9"},{code:"gateway",label:"\u30b2\u30fc\u30c8\u30a6\u30a7\u30a4"},{code:"pool",label:"\u30d7\u30fc\u30eb"},{code:"lane ",label:"\u30ec\u30fc\u30f3"}]),a=Object(u.a)(t,1)[0],l=function(t){e.history.push({search:"?tab=".concat(t.code)})},r=function(e,t){var a=new URLSearchParams(e.search).get("tab");return a&&t.find((function(e){return e.code===a}))?a:t[0].code}(e.location,a);return c.a.createElement("div",{style:{marginTop:22,marginLeft:77}},c.a.createElement(E,{source:a,callback:l,selected:r}),"event"===r&&c.a.createElement(h,{callback:l}),"task"===r&&c.a.createElement(x,{callback:l}),"activity"===r&&c.a.createElement(g,{callback:l}),"flow"===r&&c.a.createElement(w,{callback:l}),"gateway"===r&&c.a.createElement(N,{callback:l}),"pool"===r&&c.a.createElement(_,{callback:l}),"lane "===r&&c.a.createElement(j,{callback:l}))};var k=function(){return c.a.createElement("div",null)};var S=function(){return c.a.createElement("div",null)},M=a(10),B=a(52),D=a.n(B).a.create({headers:{"Content-Type":"application/xml","X-Requested-With":"XMLHttpRequest"},responseType:"text"}),C=function(e,t){var a="".concat("/Ben9i","/assets/xsd/").concat(e);D.get(a).then((function(e){"OK"===e.statusText&&t(e.data)})).catch((function(){console.log("\u901a\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002")}))},P={root:{display:"flex",paddingLeft:111,paddingRight:111}};var I=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){C("BPMN20.xsd",(function(e){return r(e)}))}),[]),c.a.createElement("div",{style:P.root},c.a.createElement(M.a,{xml:l}))},T={root:{display:"flex",paddingLeft:111,paddingRight:111}};var L=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){C("BPMNDI.xsd",(function(e){return r(e)}))}),[]),c.a.createElement("div",{style:T.root},c.a.createElement(M.a,{xml:l}))},R={root:{display:"flex",paddingLeft:111,paddingRight:111}};var H=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){C("DC.xsd",(function(e){return r(e)}))}),[]),c.a.createElement("div",{style:R.root},c.a.createElement(M.a,{xml:l}))},W={root:{display:"flex",paddingLeft:111,paddingRight:111}};var F=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){C("DI.xsd",(function(e){return r(e)}))}),[]),c.a.createElement("div",{style:W.root},c.a.createElement(M.a,{xml:l}))},z={root:{display:"flex",paddingLeft:111,paddingRight:111}};var U=function(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),l=a[0],r=a[1];return Object(n.useEffect)((function(){C("Semantic.xsd",(function(e){return r(e)}))}),[]),c.a.createElement("div",{style:z.root},c.a.createElement(M.a,{xml:l}))};var X=function(e){var t=Object(n.useState)([{code:"BPMN20",label:"BPMN20.xsd"},{code:"BPMNDI",label:"BPMNDI.xsd"},{code:"DC",label:"DC.xsd"},{code:"DI",label:"DI.xsd"},{code:"Semantic",label:"Semantic.xsd"}]),a=Object(u.a)(t,1)[0];console.log(e);var l=function(e,t){var a=new URLSearchParams(e.search).get("tab");return a&&t.find((function(e){return e.code===a}))?a:t[0].code}(e.location,a),r="/assets/xsd/";return c.a.createElement("div",{style:{marginTop:22,marginLeft:77}},c.a.createElement(E,{source:a,callback:function(t){e.history.push({search:"?tab=".concat(t.code)})},selected:l}),"BPMN20"===l&&c.a.createElement(I,{path:r,code:l}),"BPMNDI"===l&&c.a.createElement(L,{path:r,code:l}),"DC"===l&&c.a.createElement(H,{path:r,code:l}),"DI"===l&&c.a.createElement(F,{path:r,code:l}),"Semantic"===l&&c.a.createElement(U,{path:r,code:l}))},q={root:{display:"flex",justifyContent:"center",marginBottom:22},container:{height:55,width:55,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:5,background:"rgba(255, 255, 255, 0.1)"},container_select:{height:55,width:"100%",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:0,background:"rgba(255, 255, 255, 1.0)"},label:{fontWeight:"bold",color:"#ffffff"},label_select:{fontWeight:"bold",color:"#a59564"}};var A=function(e){return c.a.createElement(s.b,{to:e.source.to,style:{textDecoration:"none"}},c.a.createElement("div",{style:q.root,onClick:function(){e.callback(e.source)}},c.a.createElement("div",{style:e.source.select?q.container_select:q.container},c.a.createElement("p",{style:e.source.select?q.label_select:q.label},e.source.label))))},J={root:{background:"#a59564",height:"100vh",width:77,position:"fixed",left:0,top:0,paddingTop:22}};var K=Object(o.b)((function(e){return{global_menu:e.global_menu}}),(function(e){return{selectedMenu:function(t){return e({type:"SELECTED_MENU",menu:t})}}}))((function(e){var t=function(t){e.selectedMenu(t)};return c.a.createElement("div",{style:J.root},e.global_menu.menus.map((function(e,a){return c.a.createElement(A,{key:a,source:e,callback:t})})))}));var $=Object(o.b)((function(e){return{state:e}}))((function(e){var t=e.state;return c.a.createElement(s.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:m,source:t.page_home}),c.a.createElement(i.a,{exact:!0,path:"/elements",component:O,source:t.page_element}),c.a.createElement(i.a,{exact:!0,path:"/write",component:k,source:t.page_write}),c.a.createElement(i.a,{exact:!0,path:"/view",component:S,source:t.page_view}),c.a.createElement(i.a,{exact:!0,path:"/model",component:X,source:t.page_model})),c.a.createElement(i.a,{component:K}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(95);var G=a(14),Q=a(53),V=a(54),Y=a.n(V),Z=a(55),ee=a(12),te=function(e,t){var a,n=Object(ee.a)({},e),c=Object(Z.a)(n.menus);try{for(c.s();!(a=c.n()).done;){var l=a.value;l.select=l.code===t.menu.code}}catch(r){c.e(r)}finally{c.f()}return n},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_MENU":return te(e,t);default:return e}},ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type,e},se=function(e,t){var a=Object(ee.a)({},e);return a.bpmn20.xsd=t.results,a},ie=function(e,t){var a=Object(ee.a)({},e);return a.bpmndi.xsd=t.results,a},me=function(e,t){var a=Object(ee.a)({},e);return a.dc.xsd=t.results,a},ue=function(e,t){var a=Object(ee.a)({},e);return a.di.xsd=t.results,a},de=function(e,t){var a=Object(ee.a)({},e);return a.semantic.xsd=t.results,a},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_BPMN_BPMN20":return se(e,t);case"FETCH_BPMN_BPMNDI":return ie(e,t);case"FETCH_BPMN_DC":return me(e,t);case"FETCH_BPMN_DI":return ue(e,t);case"FETCH_BPMN_BPMN20":return de(e,t);default:return e}},pe=Object(G.c)({global_menu:ae,modals:ne,page_elements:ce,page_write:le,page_view:re,page_home:oe,page_model:Ee}),fe={modals:{},page_home:{},page_elements:{},page_write:{},page_view:{},page_model:{bpmn20:{xsd:null},bpmndi:{xsd:null},dc:{xsd:null},di:{xsd:null},semantic:{xsd:null}},global_menu:{menus:function(){var e=window.location.pathname.split("/")[1];""===e&&(e="home");return[{code:"home",label:"Home",to:"/",select:!0},{code:"elements",label:"\u8981\u7d20",to:"/elements",select:!1},{code:"write",label:"\u66f8\u304f",to:"/write",select:!1},{code:"view",label:"\u8868\u793a",to:"/view",select:!1},{code:"model",label:"Mdl",to:"/model",select:!1}].map((function(t){return t.select=t.code===e,t}))}()}},ve=Object(G.d)(pe,fe,Object(G.a)(Q.a,Y.a));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:ve},c.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.7638ee4e.chunk.js.map