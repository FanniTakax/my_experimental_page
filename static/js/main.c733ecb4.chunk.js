(this.webpackJsonpmy_experimental_page=this.webpackJsonpmy_experimental_page||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/mimi_and_fanni.b35e2ec3.jpg"},37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){},66:function(e,t,a){e.exports=a.p+"static/media/moviedb-logo.86ff7c17.svg"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=(a(42),a(13)),m=(a(43),a(4)),i=a(2),s=function(e){return r.a.createElement("button",{type:"button",onClick:e.onClick},e.buttonName)},u=function(){var e=Object(i.f)();return r.a.createElement("div",{className:"landing-page"},r.a.createElement("h1",{className:"title-h"},"You are on Fanni's experimental page!"),r.a.createElement(s,{buttonName:"Check it out!",onClick:function(){return e.push("/main")}}))},p=a(10),h=a(30),g=a(33),d=a(31),E=a.n(d),v=function(){return r.a.createElement("div",{className:"main-page-content about"},r.a.createElement("p",null,"I am ..."),r.a.createElement("p",null,"This experimental website is being created with the aim of using in practice all the different parts I am constantly learning on my journey in web development. It is a blueprint of my knowledge. My journey in web development goes towards being able to participate in projects that create value, to connect dots, to gain and share knowledge."),r.a.createElement("p",null,"This is a simple React website. ..."),r.a.createElement("img",{src:E.a,alt:"Mimi and Me"}))},f=function(){return r.a.createElement("div",{className:"main-page-content"},r.a.createElement("p",null,"I am fine, expanding my knowledge and working on this page. I am learning React and CSS."),r.a.createElement("p",null,"I am also spending a as much time as I can outdoors with my dog, Mimi, practicing qi gong and juggling, playing on cajon and flute."),r.a.createElement("p",{className:"p-center"},"This post is part of the ",r.a.createElement("a",{href:"https://nownownow.com/about"},"\u2018now page\u2019 movement")," by Derek Sivers."))},b=function(){return r.a.createElement("div",{className:"main-page-content cv"},r.a.createElement("p",{className:"p-center"},"My CV is coming here"))},N=a(24),y=function(e){return r.a.createElement("form",{className:"thought-form",onSubmit:e.handleFormSubmit},r.a.createElement("textarea",{className:"textarea",name:"thought",value:e.thought.thought,onChange:e.handleFormChange,placeholder:"Write here a thought",rows:"7",cols:"10",required:!0}),r.a.createElement("div",{className:"thought-form-div"},r.a.createElement("input",{className:"input thoughts-input",type:"text",name:"name",value:e.thought.name,onChange:e.handleFormChange,placeholder:"Your name",required:!0}),r.a.createElement("button",{type:"submit"},"Add Thought")))},w=a(20);w.initializeApp({apiKey:"AIzaSyBjzIwCtEXCgCxZdHINQWDP01JDGzPFm_8",authDomain:"aproject-13fd8.firebaseapp.com",databaseURL:"https://aproject-13fd8.firebaseio.com",projectId:"aproject-13fd8",storageBucket:"aproject-13fd8.appspot.com",messagingSenderId:"214699318623",appId:"1:214699318623:web:73a3d24da50f4fa981eaea",measurementId:"G-X72H6LGJBB"}),w.analytics();var j=w.database(),k=function(e){return r.a.createElement("li",{className:"thought-single"},r.a.createElement("p",{className:"thought-single-p"},e.thought),r.a.createElement("span",{className:"thought-single-span"},e.name))},x=(a(63),function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=(t[0],t[1]),c=Object(n.useState)(function(){var e=[];return j.ref("thoughts").once("value").then((function(t){t?(t.forEach((function(t){e.push(Object(N.a)({id:t.key},t.val())),console.log("pushing")})),a(!0)):e.push({id:"000",name:"Fanni",thought:"Couldn't load thoughts..."})})),e}()),l=Object(p.a)(c,2),m=l[0];l[1];console.log("new render");Object(n.useEffect)((function(){console.log("useEffect on thoughtsArray change")}),[m]);var i=Object(n.useState)({thought:"",name:""}),s=Object(p.a)(i,2),u=s[0],h=s[1];return r.a.createElement("div",{className:"thoughts main-page-content"},r.a.createElement("p",{className:"p-center"},"You can leave a thought here"),r.a.createElement("p",{className:"p-center"},"Inspire and get inspired"),r.a.createElement(y,{thought:u,handleFormChange:function(e){h(Object(N.a)({},u,Object(o.a)({},e.target.name,e.target.value)))},handleFormSubmit:function(e){e.preventDefault(),function(e,t){j.ref("thoughts").push({thought:e,name:t})}(u.thought,u.name),h({thought:"",name:""})}}),r.a.createElement("ul",{className:"thoughts-list"},m.map((function(e){return r.a.createElement(k,{key:e.id,name:e.name,thought:e.thought})}))))}),O=a(25),C=a.n(O),S=a(32),I=function(e){return r.a.createElement("div",{className:"movie-card",key:e.movie.id},r.a.createElement("h4",{className:"movie-card-title"},e.movie.title),r.a.createElement("img",{className:"movie-card-img",src:"https://image.tmdb.org/t/p/w185_and_h278_bestv2/".concat(e.movie.poster_path),alt:e.movie.title+" poster"}),r.a.createElement("p",null,r.a.createElement("small",null,"RELEASE DATE: ",e.movie.release_date)),r.a.createElement("p",null,r.a.createElement("small",null,"RATING: ",e.movie.vote_average)),r.a.createElement("p",{className:"description"},e.movie.overview))},_=(a(66),function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(p.a)(l,2),m=o[0],i=o[1],s=function(){var e=Object(S.a)(C.a.mark((function e(t){var n,r,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n="https://api.themoviedb.org/3/search/movie?api_key=13b13773c8e40b0f6d3c622048ceeef6&language=en-US&query=".concat(a,"&page=1&include_adult=false"),e.prev=2,e.next=5,fetch(n);case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c.results),i(c.results),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"movies main-page-content"},r.a.createElement("h1",null,"Search Movies"),r.a.createElement("form",{className:"movies-form",onSubmit:s},r.a.createElement("label",{htmlFor:"query",className:"movies-label"},"Movie title or keyword"),r.a.createElement("input",{className:"input movies-input",type:"text",name:"query",value:a,onChange:function(e){c(e.target.value)},placeholder:"i. e. Chocolate",required:!0}),r.a.createElement("button",{className:"button",type:"submit"},"SEARCH")),r.a.createElement("div",{className:"movie-card-list"},0===m.length?r.a.createElement("p",null,"No movies found yet..."):m.filter((function(e){return e.poster_path})).map((function(e){return r.a.createElement(I,{movie:e})}))),r.a.createElement("p",{className:"p-center"},r.a.createElement("small",null,"This app is using the ",r.a.createElement("a",{href:"https://www.themoviedb.org"},"https://www.themoviedb.org")," API")))});function T(){var e=Object(h.a)(["\n    max-width: 14rem;\n    position: absolute;\n    z-index: 20;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 1rem;\n\n    background-color: white;\n    border: ",";\n    \n    nav {\n        display: none;\n        flex-direction: column;\n        justify-content: space-around;\n        align-items: flex-start;\n        margin-top: 1rem;\n    }\n\n    @media only screen and (max-width: 600px) {\n        \n        nav {\n            display: ",";\n        }\n        div {\n            width: 2rem;\n            height: 0.25rem;\n            background-color: rgba(49, 54, 42, 0.8);\n            border-radius: 10px;\n            margin: 0.2rem;\n        }\n    }\n"]);return T=function(){return e},e}var P=g.a.div(T(),(function(e){return e.open?"solid 1px rgba(148, 150, 145, 0.8);":"none"}),(function(e){return e.open?"flex":"none"})),U=function(){var e=Object(n.useState)(!1),t=Object(p.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"nav-main"},r.a.createElement(m.b,{to:"/main/about",className:"nav-main-link"},"ABOUT"),r.a.createElement(m.b,{to:"/main/now",className:"nav-main-link"},"NOW"),r.a.createElement(m.b,{to:"/main/curriculum",className:"nav-main-link"},"CURRICULUM"),r.a.createElement(m.b,{to:"/main/thoughts",className:"nav-main-link"},"THOUGHTS"),r.a.createElement(m.b,{to:"/main/movies",className:"nav-main-link"},"MOVIES")),r.a.createElement(P,{open:a,onClick:function(){return c(!a)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("nav",{className:"nav-main-burger"},r.a.createElement(m.b,{to:"/main/about",className:"nav-main-link"},"ABOUT"),r.a.createElement(m.b,{to:"/main/now",className:"nav-main-link"},"NOW"),r.a.createElement(m.b,{to:"/main/curriculum",className:"nav-main-link"},"CURRICULUM"),r.a.createElement(m.b,{to:"/main/thoughts",className:"nav-main-link"},"TOUGHTS"),r.a.createElement(m.b,{to:"/main/movies",className:"nav-main-link"},"MOVIES"))),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/main/about",render:function(e){return r.a.createElement(v,{routerProps:e})}}),r.a.createElement(i.a,{path:"/main/now",render:function(e){return r.a.createElement(f,{routerProps:e})}}),r.a.createElement(i.a,{path:"/main/curriculum",render:function(e){return r.a.createElement(b,{routerProps:e})}}),r.a.createElement(i.a,{path:"/main/thoughts",render:function(e){return r.a.createElement(x,{routerProps:e})}}),r.a.createElement(i.a,{path:"/main/movies",render:function(e){return r.a.createElement(_,{routerProps:e})}})))},A=function(){var e=Object(i.f)();return r.a.createElement(m.a,{basename:"/my_experimental_page"},r.a.createElement("div",{className:"main-page"},r.a.createElement("h2",{className:"title-h title-main"},"Fanni's Page"),r.a.createElement(U,null),r.a.createElement(s,{buttonName:"Back to the Landing Page",onClick:function(){return e.push("/")}})))};var F=function(){var e;return r.a.createElement(m.a,{basename:"/my_experimental_page"},r.a.createElement(i.c,null,r.a.createElement(i.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"render",(function(e){return r.a.createElement(u,{routerProps:e})})),e)),r.a.createElement(i.a,{path:"/main",render:function(e){return r.a.createElement(A,{routerProps:e})}}),r.a.createElement(i.a,{component:u})))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.c733ecb4.chunk.js.map