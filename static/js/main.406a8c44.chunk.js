(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(5),r=c.n(i),j=(c(12),c(13),c(3)),h=c.n(j),l=c(6),b=c(4),m=(c(15),function(){var e=Object(a.useState)(null),t=Object(b.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),r=Object(b.a)(i,2),j=r[0],m=r[1];Object(a.useEffect)((function(){(function(){var e=Object(l.a)(h.a.mark((function e(){var t,c,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://api.openweathermap.org/data/2.5/weather?q=".concat(j,"&appid=0f8a7bd4982d28e2c88b88c7cc4a9cf5&units=metric"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,console.log(n),s(n.main);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("input",{type:"text",onChange:function(e){m(e.target.value)},placeholder:"City Name",className:"searchBox"}),c?Object(n.jsxs)("div",{className:"mainDisplay",children:[Object(n.jsx)("h2",{className:"cityName",children:"City Name"}),Object(n.jsx)("h3",{children:j}),Object(n.jsx)("h2",{className:"cityName",children:"Temperature"}),Object(n.jsxs)("h3",{children:[c.temp,"\xb0C"]}),Object(n.jsx)("b",{className:"temp",children:"min Temp:"}),Object(n.jsx)("b",{children:c.temp_min}),Object(n.jsx)("b",{className:"temp",children:"max Temp:"}),Object(n.jsx)("b",{children:c.temp_max})]}):Object(n.jsxs)("div",{className:"mainDisplay",children:[Object(n.jsx)("h2",{className:"cityName",children:"City Name"}),Object(n.jsx)("h3",{children:"-- "}),Object(n.jsx)("h2",{className:"cityName",children:"Temperature"}),Object(n.jsxs)("h3",{children:["--","\xb0C"]}),Object(n.jsx)("b",{children:"min Temp:"}),Object(n.jsx)("b",{children:"--"}),Object(n.jsx)("b",{children:"max Temp:"}),Object(n.jsx)("b",{children:"--"})]})]})});var p=function(){return Object(n.jsx)("div",{className:"appWidth",children:Object(n.jsx)(m,{})})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(p,{})}),document.getElementById("root")),d()}},[[16,1,2]]]);
//# sourceMappingURL=main.406a8c44.chunk.js.map