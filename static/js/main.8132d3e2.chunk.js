(this.webpackJsonpmy_experimental_page=this.webpackJsonpmy_experimental_page||[]).push([[0],{26:function(e,a,n){e.exports=n(53)},31:function(e,a,n){},32:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),r=n(22),c=n.n(r),m=(n(31),n(32),n(7)),i=n(9),o=function(e){return l.a.createElement("button",{type:"button",onClick:e.onClick},e.buttonName)},u=function(){var e=Object(i.f)();return l.a.createElement("div",{className:"landing-page"},l.a.createElement("h1",{className:"title-h"},"You are on my experimental page!"),l.a.createElement(o,{buttonName:"Check it out!",onClick:function(){return e.push("/main")}}))},s=function(){return l.a.createElement("p",{className:"main-page-content"},"Ginger root is yummy.")},p=function(){return l.a.createElement("p",{className:"main-page-content"},"Ginzeng, az ero bennem megin zeng.")},h=function(){return l.a.createElement("p",{className:"main-page-content"},"A form will be implementid here where you'll be able to leave a thought. All thoughts left will be rendered.")},g=function(){return l.a.createElement("p",{className:"main-page-content"},"A form will be implementid here where you'll be able to leave a thought. All thoughts left will be rendered.")},E=function(){var e=Object(i.f)();return l.a.createElement(m.a,null,l.a.createElement("div",{className:"main-page"},l.a.createElement("h2",{className:"title-h"},"Thingies I do"),l.a.createElement("nav",{className:"nav-main"},l.a.createElement(m.b,{to:"/main/ginger",className:"nav-main-link"},"Ginger"),l.a.createElement(m.b,{to:"/main/ginseng",className:"nav-main-link"},"Ginseng"),l.a.createElement(m.b,{to:"/main/kombucha",className:"nav-main-link"},"Kombucha"),l.a.createElement(m.b,{to:"/main/kapalabhati",className:"nav-main-link"},"Leave a Thought!")),l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/main/ginger"},l.a.createElement(s,null)),l.a.createElement(i.a,{path:"/main/ginseng"},l.a.createElement(p,null)),l.a.createElement(i.a,{path:"/main/kombucha"},l.a.createElement(h,null)),l.a.createElement(i.a,{path:"/main/kapalabhati"},l.a.createElement(g,null))),l.a.createElement(o,{buttonName:"Back to the Landing Page",onClick:function(){return e.push("/home")}})))};var f=function(){return l.a.createElement(m.a,null,l.a.createElement(i.c,null,l.a.createElement(i.a,{path:"/home"},l.a.createElement(u,null)),l.a.createElement(i.a,{path:"/main"},l.a.createElement(E,null)),l.a.createElement(i.a,{path:"*"},l.a.createElement(u,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(25),d=n(16);d.initializeApp({apiKey:"AIzaSyBjzIwCtEXCgCxZdHINQWDP01JDGzPFm_8",authDomain:"aproject-13fd8.firebaseapp.com",databaseURL:"https://aproject-13fd8.firebaseio.com",projectId:"aproject-13fd8",storageBucket:"aproject-13fd8.appspot.com",messagingSenderId:"214699318623",appId:"1:214699318623:web:73a3d24da50f4fa981eaea",measurementId:"G-X72H6LGJBB"}),d.analytics(),d.database().ref("expenses").once("value").then((function(e){var a=[];e.forEach((function(e){a.push(Object(b.a)({id:e.key},e.val()))})),console.log(a)})),c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.8132d3e2.chunk.js.map