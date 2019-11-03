(this.webpackJsonpvisix=this.webpackJsonpvisix||[]).push([[0],{181:function(e,t,n){e.exports=n(386)},200:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(46),r=n(1),i=n.n(r),l=n(32),o=n.n(l),c=n(144),u=n.n(c),s=(n(199),n(200),n(160)),m=n(159),d=n(23),p=function(e){for(var t,n,a,r=e.style,l=void 0===r?{}:r,o=(e.fill,e.width),c=void 0===o?"100%":o,u=e.className,s=void 0===u?"":u,m=e.viewBox,d=void 0===m?"0 0 10 6":m,p=e.fillFunction,f=[],E=0;E<5;E++)for(var v=0;v<5;v++){var y=i.a.createElement("rect",{width:.95,height:.95,fill:p?p(E/4,1-v/4):(t=100+E/4*155,n=0,a=255-v/4*155,"rgb(".concat(t,",").concat(n,",").concat(a,")")),x:1*E,y:1*v,key:"".concat(v,"x").concat(E)});f.push(y)}return i.a.createElement("svg",{width:c,style:l,height:c,viewBox:d,xmlns:"http://www.w3.org/2000/svg",className:"svg-icon ".concat(s||""),xmlnsXlink:"http://www.w3.org/1999/xlink"},i.a.createElement("defs",null,i.a.createElement("marker",{id:"arrow",fill:"white",viewBox:"0 0 10 10",refX:"5",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse"},i.a.createElement("path",{d:"M 0 0 L 10 5 L 0 10 z"}))),i.a.createElement("g",{id:"group",transform:" rotate(-45 5 0)"},i.a.createElement("g",null,f),i.a.createElement("polyline",{points:"-0.2,-0.4, -0.2,5.1, 5.3,5.1",fill:"none",stroke:"white",strokeWidth:"0.1",markerStart:"url(#arrow)",markerEnd:"url(#arrow)"}),i.a.createElement("text",{x:"2.5",y:"6",fontSize:"0.06em",textAnchor:"middle",fill:"white",fontWeight:"bold"},"Corruption"),i.a.createElement("text",{transform:" rotate(90 0 0)",fill:"white",x:"2.5",y:"1",fontSize:"0.06em",textAnchor:"middle",fontWeight:"bold"},"Relative Aid")))},f=n(10),E=function(e){var t=e.name,n=e.corruption,a=e.investment,r=e.corruption_color,l=e.investment_color,o=[{name:"Group A",value:n},{name:"inverse",value:1-n}],c=[{name:"Group A",value:a},{name:"inverse",value:1-a}],u=[r,"rgb(100,100,100)"],s=[l,"rgb(100,100,100)"];return i.a.createElement("div",{className:"dataTooltip",style:{display:"flex",justifyContent:"center",flexDirection:"column"}},i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},t),i.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},i.a.createElement(f.d,{width:93,height:50},i.a.createElement(f.c,{data:o,cx:16,cy:16,innerRadius:15,outerRadius:20,paddingAngle:0,isAnimationActive:!1},o.map((function(e,t){return i.a.createElement(f.b,{fill:u[t%u.length],stroke:"black"})}))),i.a.createElement("text",{x:21,y:17,dy:8,textAnchor:"middle",fill:"White"},Number(n).toFixed(2)),i.a.createElement(f.c,{data:c,cx:66,cy:16,innerRadius:15,outerRadius:20,paddingAngle:0,isAnimationActive:!1},c.map((function(e,t){return i.a.createElement(f.b,{fill:s[t%s.length],stroke:"black"})}))),i.a.createElement("text",{x:71,y:17,dy:8,textAnchor:"middle",fill:"White"},Number(a).toFixed(2)))))},v=function(e,t){var n=function(e,t){return{G:255-255*Number(e),B:255-155*(Number(e)+Number(t))/2,R:255-255*Number(t)}}(e,t);return"rgb(".concat(n.R,", ").concat(n.G," , ").concat(n.B,")")},y=function(e){var t=e.setTooltipContent,n=e.dataset,a=(e.country,e.setCountry),l=e.data,o=e.setData;Object(r.useEffect)((function(){Object(m.a)("".concat("/openhack_visix","/data/").concat(n)).then((function(e){var t=Math.max.apply(Math,Object(s.a)(e.map((function(e){return e["Funding USDm"]}))));return e.forEach((function(e){e.investment=e["Funding USDm"]/t})),o(e)}))}),[n]);return i.a.createElement("div",{className:"Map",onClick:function(e){"rsm-geography "!==e.target.className.baseVal&&a(null)}},i.a.createElement(d.ComposableMap,{"data-tip":"",height:400,projectionConfig:{rotate:[0,0,0],scale:140}},i.a.createElement(d.ZoomableGroup,{disablePanning:!0},i.a.createElement(d.Sphere,{stroke:"#E4E5E6",strokeWidth:.3}),i.a.createElement(d.Graticule,{stroke:"#E4E5E6",strokeWidth:.3}),l.length>0&&i.a.createElement(d.Geographies,{geography:"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json"},(function(e){return e.geographies.map((function(e){var n=l.find((function(t){return t.CountryCode===e.properties.ISO_A3}));return i.a.createElement(d.Geography,{key:e.rsmKey,geography:e,fill:n?v(n["Corruption risks"],n.investment):"#F5F4F6",stroke:"#EAEAEC",onClick:function(){a(e.properties.ISO_A3)},onMouseEnter:function(){t(i.a.createElement(E,{name:e.properties.NAME,corruption:n?Number(n["Corruption risks"]):"none",investment:n?Number(n.investment):"none",corruption_color:"rgb(255, 0 , 177.5)",investment_color:"rgb(0, 255 , 177.5)"}))},onMouseLeave:function(){t("")},style:{default:{outline:"none"},hover:{fill:"#F53",outline:"none",cursor:"pointer"},pressed:{fill:"#E42",outline:"none"}}})}))})),i.a.createElement(d.Marker,{coordinates:[-150.006,-10.7128]},i.a.createElement(p,{width:120,fillFunction:v})))))},h=["CountryCode","Country Name","investment"],b=function(e){var t=e.countryCode,n=e.data,a=e.setCountry,r=n.find((function(e){return e.CountryCode===t}));return t&&r&&r["Country Name"]&&i.a.createElement("div",{className:"content Details"},i.a.createElement("button",{class:"close",onClick:function(){a(null)}}),i.a.createElement("h3",null,r["Country Name"]),i.a.createElement("table",null,Object.keys(r).filter((function(e){return!h.includes(e)})).map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,e),i.a.createElement("td",null,Number(r[e]).toFixed(2)))}))))||null},g=function(e){var t=e.data,n=e.displayDetails;return i.a.createElement("div",{className:"ScatterPlot"},i.a.createElement(f.f,{width:400,height:200,margin:{top:20,right:20,bottom:20,left:20}},i.a.createElement(f.a,null),i.a.createElement(f.h,{type:"number",dataKey:"investment",name:"Relative aid",label:"Relative aid",tick:!1}),i.a.createElement(f.i,{type:"number",dataKey:"Corruption risks",name:"Corruption",label:{value:"Corruption",angle:-90},tick:!1}),i.a.createElement(f.j,{type:"string",dataKey:"Country Name",name:"Country Name",unit:""}),i.a.createElement(f.g,{cursor:{strokeDasharray:"3 3"}}),i.a.createElement(f.e,{name:"Corruption",data:t,fill:"#8884d8",onClick:function(e){n(e.CountryCode)}},t.map((function(e,t){var n=v(Number(e["Corruption risks"]),Number(e.investment));return i.a.createElement(f.b,{key:"cell-".concat(t),fill:n})})))))},C=function(e){var t=e.data,n=e.label,a=e.displayDetails,r="Country Name";return i.a.createElement("div",{className:"SingleStat"},i.a.createElement("h5",null,n),i.a.createElement("ul",null,t.map((function(e){return i.a.createElement("li",{onClick:function(){return a(t.find((function(t){return t[r]===e[r]})).CountryCode)}},e[r])}))))},k=function(e){var t=e.data,n=e.displayDetails,a=t.sort((function(e,t){return e["Corruption risks"]<=t["Corruption risks"]?1:-1})).slice(0,5),r=t.sort((function(e,t){return e.investment<=t.investment?1:-1})).slice(0,5),l=t.sort((function(e,t){return e.investment>=t.investment?1:-1})).slice(0,5);return i.a.createElement("div",{className:"content Stats"},i.a.createElement(C,{displayDetails:n,data:a,label:"Highest corruption"}),i.a.createElement(C,{displayDetails:n,data:r,label:"Most aid received"}),i.a.createElement(C,{displayDetails:n,data:l,label:"Least aid received"}),i.a.createElement(g,{data:t,displayDetails:n}))},x=n(390),N=n(389),w=function(e){return e.charAt(0).toUpperCase()+e.substring(1)};var j=document.getElementById("root");o.a.render(i.a.createElement((function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),n=t[0],l=t[1],o=Object(r.useState)("public"),c=Object(a.a)(o,2),s=c[0],m=c[1],d=Object(r.useState)(""),p=Object(a.a)(d,2),f=p[0],E=p[1],v=Object(r.useState)([]),h=Object(a.a)(v,2),g=h[0],C=h[1];return i.a.createElement("div",null,i.a.createElement("div",{className:"page"},i.a.createElement("div",{className:"Tabs"},i.a.createElement(x.a,{id:"controlled-tab-example",activeKey:s,onSelect:function(e){return m(e)}},["public","education","health","business","energy"].map((function(e){return i.a.createElement(N.a,{key:e,eventKey:e,title:w(e)})})))),i.a.createElement(y,{setTooltipContent:l,dataset:s+".csv",country:f,setCountry:E,data:g,setData:C}),i.a.createElement(k,{country:f,data:g,displayDetails:function(e){E(e)}}),i.a.createElement(u.a,null,n),i.a.createElement(b,{countryCode:f,data:g,setCountry:E})))}),null),j)}},[[181,1,2]]]);
//# sourceMappingURL=main.bf6538ef.chunk.js.map