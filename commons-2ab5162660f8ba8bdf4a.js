(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0B/k":function(e,t,n){"use strict";n("q1tI")},"1GyG":function(e,t,n){"use strict";var a=n("xzmG"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),c=n("qhky");t.a=function(){return i.a.createElement(o.StaticQuery,{query:"513857193",render:function(e){return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),i.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),i.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),i.a.createElement("title",null,e.site.siteMetadata.title),i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",i.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),i.a.createElement("meta",{itemprop:"image",content:e.site.siteMetadata.imageUrl})," />")},data:a})}},"8+s/":function(e,t,n){"use strict";var a,r=n("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",c),d}}},RMg3:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=(n("v31m"),n("ezWK")),c=n.n(o),s=n("Wbzz"),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.setState({active:!n.state.active})},n.state={active:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){return console.log("active : "+JSON.stringify(this.props)),i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement("a",{class:"navbar-item is-hidden-touch"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"350px"}))),i.a.createElement("a",{class:"navbar-item is-hidden-desktop"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"250px"}))),i.a.createElement("span",{role:"button",className:"navbar-burger burger "+(this.state.active?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:this.handleClick},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(this.state.active?"is-active":"")},i.a.createElement("div",{class:"navbar-start "},i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"About Us"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/about/about-burst"},i.a.createElement("a",{class:"navbar-item"},"About Us")),i.a.createElement(s.Link,{to:"/about/history"},i.a.createElement("a",{class:"navbar-item"},"History of BURST")),i.a.createElement("div",{className:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/about/Committee#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"Committee"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/about/committee-members#point"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Committee Members")),i.a.createElement(s.Link,{to:"/about/advisory-members"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Advisory Board")),i.a.createElement(s.Link,{to:"/about/patient-public-involement"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Patient and Public Involvement"))))),i.a.createElement(s.Link,{to:"/about/about-burst#member"},i.a.createElement("a",{class:"navbar-item"},"How do I become a member?")),i.a.createElement(s.Link,{to:"/about/about-burst#trainee"},i.a.createElement("a",{class:"navbar-item"},"Advantages of Trainee-led research")),i.a.createElement(s.Link,{to:"/about/about-burst#ideal"},i.a.createElement("a",{class:"navbar-item"},"Ideal collaborative research project")),i.a.createElement(s.Link,{to:"/about/sponsors#point"},i.a.createElement("a",{class:"navbar-item"},"Our Sponsors")),i.a.createElement(s.Link,{to:"/about/collaborators#point"},i.a.createElement("a",{class:"navbar-item"},"Our Collaborators")))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Studies"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Resect/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"RESECT (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Resect/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Overview")),i.a.createElement(s.Link,{to:"/Studies/Resect/Formal_Registration/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Formal Hospital Registration")),i.a.createElement(s.Link,{to:"/Studies/Resect/study-team/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Team")),i.a.createElement(s.Link,{to:"/Studies/Resect/study-resources/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Resources")),i.a.createElement(s.Link,{to:"/Studies/Resect/REDCAP-Instructions/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"REDCAP Instructions"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Identify/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"IDENTIFY (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Identify/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Overview")),i.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Achievements")),i.a.createElement(s.Link,{to:"/Studies/Identify/sites"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Sites/ Collaborators")),i.a.createElement(s.Link,{to:"/Studies/Identify/study-team/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Study Team"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Mimic/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"MIMIC (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Mimic/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Overview")),i.a.createElement(s.Link,{to:"/Studies/Mimic/collaborators/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Collaborators")),i.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Achievements"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Learn/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"LEARN (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Learn/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"LEARN Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Fixit/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"FIX-IT (Upcoming)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Fixit/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"FIX-IT Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Stent/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"STENT (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Stent/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"STENT Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Detort/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"DETORT (Upcoming)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Detort/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"DETORT Overview"))))))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Achievements"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/Achievements/prizes"},i.a.createElement("a",{class:"navbar-item"},"Prizes")),i.a.createElement(s.Link,{to:"/Achievements/publication"},i.a.createElement("a",{class:"navbar-item"},"Publications")),i.a.createElement(s.Link,{to:"/Achievements/presentation"},i.a.createElement("a",{class:"navbar-item"},"Presentations")),i.a.createElement(s.Link,{to:"/Achievements/how-to"},i.a.createElement("a",{class:"navbar-item"},"How to document my BURST involvement?")))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Opportunities"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/Opportunities/BJUI-Podcast/Overview/"},i.a.createElement("a",{class:"navbar-item"},"BJUI/BURST Podcast Series")),i.a.createElement(s.Link,{to:"/Opportunities/Trainee_Corner/Overview/"},i.a.createElement("a",{class:"navbar-item"},"BJUI Trainees' Corner")),i.a.createElement(s.Link,{to:"/Opportunities/Legends_of_Urology/Overview/"},i.a.createElement("a",{class:"navbar-item"},"Legends of Urology Podcast")),i.a.createElement(s.Link,{to:"/Opportunities/Collaborate-with-us/Overview/"},i.a.createElement("a",{class:"navbar-item"},"Collaborate With Us")))),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},i.a.createElement(s.Link,{to:"/Opportunities/Education/Overview/"},"Education")),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},i.a.createElement(s.Link,{to:"https://sibforms.com/serve/MUIEADEdBDH4twOiEaqhfVzS1BDJm9GRbYImfefgqsXW7ZVcEfkj_ve867tdpgtr-No8-agzTNSqgzdwjW9ceq3tMDnihE5ImN0a8ru2Y9N5SB-vJ6KHtdzIVO51z57eYp03Tl3v9kI885ukhYrOTjajdiNTsZkciDo_jA0PNrxeFPGcBUk8vv5l61Q8C2-H1Iu8YkMhioie2cob",target:"_blank"},"Subscribe"))),i.a.createElement("div",{class:"navbar-end"},i.a.createElement("div",{class:"navbar-item"},i.a.createElement(s.Link,{to:"https://twitter.com/bursturology?lang=en",target:"_blank"},i.a.createElement("a",{class:"button is-medium is-twitter"},i.a.createElement("span",{class:"icon"},i.a.createElement("i",{class:"fab fa-twitter"})),i.a.createElement("span",null,"Twitter"))))))))},t}(r.Component);t.a=l},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);n("Wbzz"),n("v31m"),n("0B/k");t.a=function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Copyright British Urology Researchers in Surgical Training (BURST) Research Collaborative @ 2021. "))))}},bmMU:function(e,t){var n="undefined"!=typeof Element,a="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],o[l[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},ezWK:function(e,t,n){e.exports=n.p+"static/BURST_1-4de9f6d3ce90fa893c664b69b2281db0.png"},qhky:function(e,t,n){"use strict";(function(e){var a,r,i,o,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),d=n("bmMU"),m=n.n(d),p=n("q1tI"),f=n.n(p),v=n("6qGY"),E=n.n(v),h="bodyAttributes",b="htmlAttributes",w="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",S="href",O="http-equiv",k="innerHTML",C="itemprop",A="name",L="property",I="rel",R="src",j="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",x="defer",N="encodeSpecialCharacters",U="onChangeClientState",B="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[y.NOSCRIPT,y.SCRIPT,y.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},J=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Z(e,y.TITLE),n=Z(e,B);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=Z(e,M);return t||a||void 0},G=function(e){return Z(e,U)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Q=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===I&&"canonical"===e[n].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==k&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],s=E()({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},$=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;se(y.BODY,a),se(y.HTML,r),ce(d,m);var p={baseTag:le(y.BASE,n),linkTags:le(y.LINK,i),metaTags:le(y.META,o),noscriptTags:le(y.NOSCRIPT,c),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,u)},f={},v={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,a=t.oldTags;n.length&&(f[e]=n),a.length&&(v[e]=p[e].oldTags)})),t&&t(),s(e,f,v)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(y.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);r.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(y.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===k)n.innerHTML=t.innerHTML;else if(a===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[a]?"":t[a];n.setAttribute(a,c)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(n,a),[f.a.createElement(y.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+J(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+J(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case h:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===k||n===T){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),f.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+J(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(y.BASE,t,a),bodyAttributes:me(h,n,a),htmlAttributes:me(b,r,a),link:me(y.LINK,i,a),meta:me(y.META,o,a),noscript:me(y.NOSCRIPT,c,a),script:me(y.SCRIPT,s,a),style:me(y.STYLE,l,a),title:me(y.TITLE,{title:d,titleAttributes:m},a)}},fe=u()((function(e){return{baseTag:X([S,j],e),bodyAttributes:V(h,e),defer:Z(e,x),encode:Z(e,N),htmlAttributes:V(b,e),linkTags:Q(y.LINK,[I,S],e),metaTags:Q(y.META,[A,g,O,L,C],e),noscriptTags:Q(y.NOSCRIPT,[k],e),onChangeClientState:G(e),scriptTags:Q(y.SCRIPT,[R,k],e),styleTags:Q(y.STYLE,[T],e),title:K(e),titleAttributes:V(w,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),pe)((function(){return null})),ve=(r=fe,o=i=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return Y({},a,((t={})[n.type]=[].concat(a[n.type]||[],[Y({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case y.TITLE:return Y({},r,((t={})[a.type]=o,t.titleAttributes=Y({},i),t));case y.BODY:return Y({},r,{bodyAttributes:Y({},i)});case y.HTML:return Y({},r,{htmlAttributes:Y({},i)})}return Y({},r,((n={})[a.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var a;n=Y({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(H(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=H(e,["children"]),a=Y({},n);return t&&(a=this.mapChildrenToProps(t,a)),f.a.createElement(r,a)},F(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(f.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ve.renderStatic=ve.rewind,t.a=ve}).call(this,n("yLpj"))},v31m:function(e,t,n){},xzmG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BURST Urology","author":"BURST","imageUrl":"src/images/BURST_mini.png","description":"BURST Urology Research Collaborative.","keywords":"BURST, Urology, Research, Collaborative"}}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-2ab5162660f8ba8bdf4a.js.map