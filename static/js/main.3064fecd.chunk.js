(this.webpackJsonpmy_experimental_page=this.webpackJsonpmy_experimental_page||[]).push([[0],{28:function(e,t,a){e.exports=a(57)},33:function(e,t,a){},34:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),m=(a(33),a(12)),i=(a(34),a(8)),u=a(9),l=function(e){return r.a.createElement("button",{type:"button",onClick:e.onClick},e.buttonName)},h=function(){var e=Object(u.f)();return r.a.createElement("div",{className:"landing-page"},r.a.createElement("h1",{className:"title-h"},"You are on my experimental page!"),r.a.createElement(l,{buttonName:"Check it out!",onClick:function(){return e.push("/main")}}))},s=function(){return r.a.createElement("p",{className:"main-page-content"},"Ginger root is yummy.")},g=function(){return r.a.createElement("p",{className:"main-page-content"},"Ginzeng, az ero bennem megin zeng.")},p=function(){return r.a.createElement("p",{className:"main-page-content"},"CV ")},d=a(22),f=a(21),E=function(e){return r.a.createElement("form",{className:"thought-form",onSubmit:e.handleFormSubmit},r.a.createElement("textarea",{name:"thought",value:e.thought.thought,onChange:e.handleFormChange,placeholder:"Write here a thought",rows:"7",cols:"10",required:!0}),r.a.createElement("div",{className:"thought-form-div"},r.a.createElement("input",{type:"text",name:"name",value:e.thought.name,onChange:e.handleFormChange,placeholder:"Your name",required:!0}),r.a.createElement("button",{type:"submit"},"Add Thought")))},b=a(17);b.initializeApp({apiKey:"AIzaSyBjzIwCtEXCgCxZdHINQWDP01JDGzPFm_8",authDomain:"aproject-13fd8.firebaseapp.com",databaseURL:"https://aproject-13fd8.firebaseio.com",projectId:"aproject-13fd8",storageBucket:"aproject-13fd8.appspot.com",messagingSenderId:"214699318623",appId:"1:214699318623:web:73a3d24da50f4fa981eaea",measurementId:"G-X72H6LGJBB"}),b.analytics();var v=b.database(),k=function(e){return r.a.createElement("li",{className:"thought-single",key:e.key},r.a.createElement("p",{className:"thought-single-p"},e.thought),r.a.createElement("span",{className:"thought-single-span"},e.name))},N=(a(55),function(){var e=Object(n.useState)((function(){var e=[];return v.ref("thoughts").once("value").then((function(t){t.forEach((function(t){e.push(Object(f.a)({id:t.key},t.val()))}))})),e})),t=Object(d.a)(e,2),a=t[0];t[1];Object(n.useEffect)((function(){console.log({thoughtsArray:a}),console.log(a)}),[]);var o=Object(n.useState)({thought:"",name:""}),c=Object(d.a)(o,2),i=c[0],u=c[1],l=[{id:"1",name:"Lalika",thought:"vlami valahol valamikor"},{id:"2",name:"Barbie",thought:"where are my shoes"},{id:"3",name:"Geza",thought:"fekete bika pata kopog a patika epita koven"},{id:"4",name:"Simonka a cica",thought:"Prrrrr prrp prrrr prrr grrrrr meeeeeooooooowwwwww wwwweeeeeiiii prrrrrr prrrrr"}];return console.log({tibidubu:l}),r.a.createElement("div",{className:"thoughts main-page-content"},r.a.createElement("p",null,"Write a thought. Any Thought. To inspire each other."),r.a.createElement(E,{thought:i,handleFormChange:function(e){u(Object(f.a)({},i,Object(m.a)({},e.target.name,e.target.value)))},handleFormSubmit:function(e){e.preventDefault(),function(e,t){v.ref("thoughts").push({thought:e,name:t})}(i.thought,i.name),u({thought:"",name:""})}}),r.a.createElement("ul",{className:"thoughts-list"},l.map((function(e){return r.a.createElement(k,{key:e.id,name:e.name,thought:e.thought})}))))}),w=function(){var e=Object(u.f)();return r.a.createElement(i.a,{basename:"/my_experimental_page"},r.a.createElement("div",{className:"main-page"},r.a.createElement("h2",{className:"title-h"},"Thingies I do"),r.a.createElement("nav",{className:"nav-main"},r.a.createElement(i.b,{to:"/main/ginger",className:"nav-main-link"},"Ginger"),r.a.createElement(i.b,{to:"/main/ginseng",className:"nav-main-link"},"Ginseng"),r.a.createElement(i.b,{to:"/main/kombucha",className:"nav-main-link"},"Kombucha"),r.a.createElement(i.b,{to:"/main/thoughts",className:"nav-main-link"},"Leave a Thought!")),r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/main/ginger",render:function(e){return r.a.createElement(s,{routerProps:e})}}),r.a.createElement(u.a,{path:"/main/ginseng",render:function(e){return r.a.createElement(g,{routerProps:e})}}),r.a.createElement(u.a,{path:"/main/kombucha",render:function(e){return r.a.createElement(p,{routerProps:e})}}),r.a.createElement(u.a,{path:"/main/thoughts",render:function(e){return r.a.createElement(N,{routerProps:e})}})),r.a.createElement(l,{buttonName:"Back to the Landing Page",onClick:function(){return e.push("/")}})))};var y=function(){var e;return r.a.createElement(i.a,{basename:"/my_experimental_page"},r.a.createElement(u.c,null,r.a.createElement(u.a,(e={exact:!0,path:"/"},Object(m.a)(e,"exact",!0),Object(m.a)(e,"render",(function(e){return r.a.createElement(h,{routerProps:e})})),e)),r.a.createElement(u.a,{path:"/main",render:function(e){return r.a.createElement(w,{routerProps:e})}}),r.a.createElement(u.a,{component:h})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.3064fecd.chunk.js.map