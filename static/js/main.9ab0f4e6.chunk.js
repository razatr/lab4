(this["webpackJsonplab-newton"]=this["webpackJsonplab-newton"]||[]).push([[0],{159:function(e,a,t){e.exports=t(271)},271:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),r=t(10),o=t.n(r),i=t(153),u=t(307),c=t(311),m=t(312),s=t(309),f=t(305),d=Math.PI/2,b=[];function h(e){return e<d/3?3*e/d:1}for(var v=0;v<90;v++)b[v]=v*d/90;for(var p=[],y=0;y<89;y++){for(var E=0,x=0;x<89;x++)E+=(h(b[x])-b[x]/d)*Math.sin(Math.PI*(y+1)*b[x]/d);p[y]=2*E/90}function g(e,a){for(var t=e/d,n=0;n<89;n++)t+=p[n]*Math.exp(-(n+1)*(n+1)*a*a/100)*Math.sin(Math.PI*(n+1)*e/d);return t}for(var k=[],M=function(e){e||0===e||(e=0);for(var a=[],t=0;t<b.length;t++)a.push({y:g(b[t],e),x:b[t]});return a},w=0;w<b.length;w++)k.push({y:h(b[w]),x:b[w]});var I=t(304);var j=function(){for(var e=Object(n.useState)(0),a=Object(i.a)(e,2),t=a[0],r=a[1],o=[],d=0;d<30;d++)o[d]=d;return l.a.createElement(n.Fragment,null,l.a.createElement(I.a,{id:"outlined-basic",label:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 j",variant:"outlined",autoFocus:!0,onChange:function(e){r(parseInt(e.target.value))}}),l.a.createElement(u.a,{maxDomain:{x:2,y:1.5},minDomain:{x:-.5,y:-.5},theme:c.a.material,containerComponent:l.a.createElement(m.a,{responsive:!1}),width:800,height:800},l.a.createElement(s.a,{x:200,y:50,orientation:"horizontal",gutter:20,itemsPerRow:2,data:[{name:"\u0413\u0440\u0430\u0444\u0438\u043a \u0444\u0443\u043d\u043a\u0446\u0438\u0438",symbol:{fill:"#d00f50"},labels:{fill:"#d00f50"}},{name:"\u0413\u0440\u0430\u0444\u0438\u043a u \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c j \u0438\u0437 \u043f\u043e\u043b\u044f",symbol:{fill:"black"},labels:{fill:"black"}},{name:"\u0413\u0440\u0430\u0444\u0438\u043a\u0438 u \u043f\u0440\u0438 j \u043e\u0442 0 \u0434\u043e 30",symbol:{fill:"blue"},labels:{fill:"blue"}}]}),l.a.createElement(f.a,{data:k,animate:{duration:1500},style:{data:{stroke:"#d00f50"}}}),o.map((function(e){return l.a.createElement(f.a,{data:M(e),animate:{duration:1500},style:{data:{stroke:"blue"}}})})),l.a.createElement(f.a,{data:M(t),animate:{duration:1500},style:{data:{stroke:"black"}}})))};var P=function(){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement(j,null))};o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root"))}},[[159,1,2]]]);
//# sourceMappingURL=main.9ab0f4e6.chunk.js.map