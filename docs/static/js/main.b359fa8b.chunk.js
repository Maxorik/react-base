(this.webpackJsonpsong_library=this.webpackJsonpsong_library||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),s=n.n(r),i=(n(15),n(16),n(2)),l=n(38),j=n(1);var o=function(){var e=Object(c.useState)((function(){return Math.trunc(20*Math.random())})),t=Object(i.a)(e,2),n=t[0],a=t[1],r="btn cyan";if(n<0){var s=r.split(" ");s.push("disabled"),r=s.join(" ")}return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"App-center",children:[Object(j.jsxs)("p",{className:"App-link",style:{fontSize:"33px",margin:"10px"},children:["     ",n]}),Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("button",{className:"waves-effect waves-light btn",onClick:function(){a((function(e){return e+20}))},children:"plus"}),Object(j.jsx)(l.a,{variant:"contained",color:"primary",className:r,onClick:function(){a(n-20)},children:"minus"}),"  ",Object(j.jsx)(l.a,{variant:"contained",color:"primary",className:"red",onClick:function(){a(Math.trunc(40*Math.random()))},children:"random"}),"  "]})]})})};var u=function(){var e=Object(c.useState)({x:0,y:0}),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){}),[n]),Object(c.useEffect)((function(){window.addEventListener("mousemove",(function(e){a({x:e.clientX,y:e.clientY})}))}),[]),Object(j.jsx)("div",{className:"centerContainer",children:Object(j.jsxs)("p",{className:"App-link",children:["\u0412\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0435\u0441\u044c \u0437\u0434\u0435\u0441\u044c:",Object(j.jsxs)("span",{className:"orange-text darken-1",children:[" ",n.x," ",n.y," "]})]})})};var b=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)("\u0295\u2022\u1d25\u2022\u0294"),n=Object(c.useState)("Hello"),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){t.current=r}),[r]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"whiteBox",children:[Object(j.jsx)("input",{style:{width:"100px"},ref:e,value:r,onChange:function(e){s(e.target.value)}}),Object(j.jsx)(l.a,{variant:"contained",color:"primary",onClick:function(){return e.current.focus()},children:"Get my hello"})]}),Object(j.jsxs)("p",{className:"App-link pContainer",children:["\u0410 \u0440\u0430\u043d\u044c\u0448\u0435 \u0431\u044b\u043b\u043e ",Object(j.jsx)("span",{className:"orange-text darken-1",children:t.current})]})]})};var d={width:"60px",marginLeft:"3px"};var x=function(){var e=Object(c.useState)(100),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(42),s=Object(i.a)(r,2),l=s[0],o=s[1],u=Object(c.useMemo)((function(){return function(e,t){for(var n=1;n<1e4;)n++;return console.log("very long thing"),e+t}(l,n)}),[n]);return Object(j.jsx)("div",{className:"App-center",children:Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("p",{className:"pContainer green-text darken-1",children:n}),Object(j.jsx)("p",{className:"pContainer orange-text darken-1",children:l}),Object(j.jsx)("p",{className:"pContainer green-text darken-1",children:u}),Object(j.jsx)("button",{className:"waves-effect waves-light btn green",style:d,onClick:function(){a((function(e){return e+20}))},children:"\u2714"}),Object(j.jsx)("button",{className:"waves-effect waves-light btn red",style:d,onClick:function(){o(1+l*Math.trunc(23*Math.random()/7))},children:"\u2716"})]})})};function O(e){var t=e.callbackRequest,n=Object(c.useState)(),a=Object(i.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){var e=t(13);s(e)}),[t]),Object(j.jsx)("div",{children:Object(j.jsx)("p",{className:"green darken-2",style:{padding:"2px",width:"240px",textAlign:"center"},children:r})})}var f=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(1),s=Object(i.a)(r,2),l=s[0],o=s[1],u={color:n?"pink":"gray",fontSize:"16px"},b=Object(c.useCallback)((function(e){return(.3*l+Math.random()*e).toFixed(3)+" %"}),[l]);return Object(j.jsxs)("div",{className:"App-center",children:[Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("p",{className:"pContainer darkred-text darken-1",style:u,children:"\u0412\u0441\u0435 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e"}),Object(j.jsx)("button",{className:"waves-effect waves-light btn light-green accent-2",style:{width:"115px",color:"#000"},onClick:function(){a((function(e){return!e}))},children:"good button"})]}),Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("p",{className:"pContainer darkred-text darken-1",children:l}),Object(j.jsx)("button",{className:"waves-effect waves-light btn lime accent-2",style:{width:"115px",color:"#000"},onClick:function(){o((function(e){return e+2}))},children:"pip"})]}),Object(j.jsx)(O,{callbackRequest:b})]})};function h(e){var t=e.toggle,n=Object(c.useState)(!0),a=Object(i.a)(n,2),r=a[0],s=a[1],l=Object(c.useRef)("\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c");Object(c.useEffect)((function(){l.current=r?"\u0421\u043a\u0440\u044b\u0442\u044c":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c"}),[r]);return Object(j.jsx)("div",{children:Object(j.jsxs)("button",{className:"waves-effect waves-light btn",style:{color:"#000",fontWeight:"bold"},onClick:function(){t(),s((function(e){return!e}))},children:[l.current," \u0434\u0435\u0432\u0443\u0448\u043a\u0443"]})})}var p=n.p+"static/media/tyan.e86bb4ea.png";function v(){return Object(c.useContext)(m)?Object(j.jsx)("div",{children:Object(j.jsx)("img",{src:p,style:{marginTop:"5px"}})}):null}var m=a.a.createContext();var g=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(j.jsx)(m.Provider,{value:n,children:Object(j.jsxs)("div",{className:"App-center",style:{marginTop:"-30px"},children:[Object(j.jsx)("p",{style:{fontSize:"18px",color:"#e6ee9c"},children:"\u041c\u0443\u0445\u0430 - \u044d\u0442\u043e \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0430\u044f \u043f\u0442\u0438\u0446\u0430"}),Object(j.jsx)(h,{toggle:function(){return a((function(e){return!e}))}}),Object(j.jsx)(v,{})]})})},k=n(7);function N(e){var t=Object(c.useState)(e),n=Object(i.a)(t,2),a=n[0],r=n[1];return{bind:{value:a,onChange:function(e){r(e.target.value)}},value:a,clear:function(){return r("")}}}var y=function(){var e=N("Petr"),t=N("Gabrielevski");return Object(j.jsxs)("div",{className:"App-center",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(k.a)({type:"text",style:{width:"200px"}},e.bind)),Object(j.jsx)("button",{className:"waves-effect waves-light btn pink darken-4",style:{width:"40px"},onClick:function(){return e.clear()},children:"x"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",Object(k.a)({type:"text",style:{width:"200px"}},t.bind)),Object(j.jsx)("button",{className:"waves-effect waves-light btn pink darken-4",style:{width:"40px"},onClick:function(){return t.clear()},children:"x"})]})]})};var w=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{}),Object(j.jsx)(o,{}),Object(j.jsx)(b,{}),Object(j.jsx)(x,{}),Object(j.jsx)(f,{}),Object(j.jsx)(g,{}),Object(j.jsx)(y,{})]})};n(22),n(23);s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.b359fa8b.chunk.js.map