(this["webpackJsonpreactrouter-course-project"]=this["webpackJsonpreactrouter-course-project"]||[]).push([[9],{35:function(e,t,a){"use strict";function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return r}))},36:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a(12),n=a(0),c=a.n(n),l=a(8),i=a.n(l),s=a(31);function u(e){var t=c.a.useState(null),a=Object(r.a)(t,2),n=a[0],l=a[1],i=e.id,u=e.children;return c.a.useEffect((function(){!function(e){l((function(){return null})),Object(s.c)(e).then((function(e){return l((function(){return e}))}))}(i)}),[i]),u(n)}u.propTypes={id:i.a.string.isRequired,children:i.a.func.isRequired}},56:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var r=a(12),n=a(35),c=a(0),l=a.n(c),i=a(5),s=a(7),u=a(31),o=a(34),m=a(36),p=a(13),d=a(32),f=a.n(d);function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e,t){if("success"===t.type)return{teamNames:t.teamNames,articles:t.articles,loading:!1,error:null};if("error"===t.type)return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e,{loading:!1,error:t.message});throw new Error("That action type isn't supported")}function b(e){var t=e.match,a=function(e){var t=e.match,a=l.a.useReducer(E,{teamNames:[],articles:[],loading:!0,error:null}),n=Object(r.a)(a,2),c=n[0],i=n[1];return l.a.useEffect((function(){Promise.all([Object(u.d)(),Object(u.e)(t.params.teamId)]).then((function(e){var t=Object(r.a)(e,2),a=t[0],n=t[1];i({type:"success",teamNames:a,articles:n})})).catch((function(e){var t=e.message;return i({type:"error",message:t})}))}),[t.params.teamId]),{teamNames:c.teamNames,articles:c.articles,error:c.error,loading:c.loading}}({match:t}),n=a.teamNames,c=a.articles,d=a.loading,h=t.params.teamId;return!1===d&&!1===n.includes(h)?l.a.createElement(i.a,{to:"/"}):l.a.createElement("div",null,l.a.createElement(m.a,{id:h},(function(e){return null===e?l.a.createElement(p.a,null):l.a.createElement("div",{className:"panel"},l.a.createElement(o.a,{id:h}),l.a.createElement("h1",{className:"medium-header"},e.name),l.a.createElement("h4",{style:{margin:5}},l.a.createElement(s.b,{style:{cursor:"pointer"},to:{pathname:"/players",search:"?teamId=".concat(h)}},"View Roster")),l.a.createElement("h4",null,"Championships"),l.a.createElement("ul",{className:"championships"},e.championships.map((function(e){return l.a.createElement("li",{key:e},e)}))),l.a.createElement("ul",{className:"info-list row",style:{width:"100%"}},l.a.createElement("li",null,"Established",l.a.createElement("div",null,e.established)),l.a.createElement("li",null,"Manager",l.a.createElement("div",null,e.manager)),l.a.createElement("li",null,"Coach",l.a.createElement("div",null,e.coach)),l.a.createElement("li",null,"Record",l.a.createElement("div",null,e.wins,"-",e.losses))),l.a.createElement("h2",{className:"header"},"Articles"),l.a.createElement("ul",{className:"articles"},c.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement(s.b,{to:"".concat(t.url,"/articles/").concat(f()(e.title))},l.a.createElement("h4",{className:"article-title"},e.title),l.a.createElement("div",{className:"article-date"},e.date.toLocaleDateString())))}))))})))}}}]);
//# sourceMappingURL=9.1f7d337a.chunk.js.map