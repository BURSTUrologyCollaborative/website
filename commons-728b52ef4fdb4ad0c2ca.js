(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0B/k":function(e,t,a){"use strict";a("q1tI")},"1GyG":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("qhky");t.a=function(){return r.a.createElement(i.StaticQuery,{query:"513857193",render:function(e){return r.a.createElement(o.a,null,r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),r.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),r.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),r.a.createElement("title",null,e.site.siteMetadata.title),r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",r.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),r.a.createElement("meta",{itemprop:"image",content:e.site.siteMetadata.imageUrl})," />")}})}},"8+s/":function(e,t,a){"use strict";var n,r=a("q1tI"),i=(n=r)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,a){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==a&&"function"!=typeof a)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):a&&(s=a(s))}var d=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(n,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",c),d}}},RMg3:function(e,t,a){"use strict";var n=a("9Hrx"),r=a("q1tI"),i=a.n(r),o=(a("v31m"),a("ezWK")),c=a.n(o),s=a("Wbzz"),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleClick=function(){a.setState({active:!a.state.active})},a.state={active:!1},a}return Object(n.a)(t,e),t.prototype.render=function(){return console.log("active : "+JSON.stringify(this.props)),i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement("a",{class:"navbar-item is-hidden-touch"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"350px"}))),i.a.createElement("a",{class:"navbar-item is-hidden-desktop"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"250px"}))),i.a.createElement("span",{role:"button",className:"navbar-burger burger "+(this.state.active?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:this.handleClick},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(this.state.active?"is-active":"")},i.a.createElement("div",{class:"navbar-start "},i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"About Us"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/about/about-burst"},i.a.createElement("a",{class:"navbar-item"},"About Us")),i.a.createElement(s.Link,{to:"/about/history"},i.a.createElement("a",{class:"navbar-item"},"History of BURST")),i.a.createElement("div",{className:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/about/Committee#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"Committee"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/about/committee-members#point"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Committee Members")),i.a.createElement(s.Link,{to:"/about/advisory-members"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Advisory Board")),i.a.createElement(s.Link,{to:"/about/patient-public-involement"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Patient and Public Involvement"))))),i.a.createElement(s.Link,{to:"/about/about-burst#member"},i.a.createElement("a",{class:"navbar-item"},"How do I become a member?")),i.a.createElement(s.Link,{to:"/about/about-burst#trainee"},i.a.createElement("a",{class:"navbar-item"},"Advantages of Trainee-led research")),i.a.createElement(s.Link,{to:"/about/about-burst#ideal"},i.a.createElement("a",{class:"navbar-item"},"Ideal collaborative research project")),i.a.createElement(s.Link,{to:"/about/sponsors#point"},i.a.createElement("a",{class:"navbar-item"},"Our Sponsors")),i.a.createElement(s.Link,{to:"/about/collaborators#point"},i.a.createElement("a",{class:"navbar-item"},"Our Collaborators")))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Studies"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Resect/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"RESECT (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Resect/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Overview")),i.a.createElement(s.Link,{to:"/Studies/Resect/Formal_Registration/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Formal Hospital Registration")),i.a.createElement(s.Link,{to:"/Studies/Resect/study-team/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Team")),i.a.createElement(s.Link,{to:"/Studies/Resect/study-resources/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Resources")),i.a.createElement(s.Link,{to:"/Studies/Resect/REDCAP-Instructions/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"REDCAP Instructions"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Identify/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"IDENTIFY (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Identify/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Overview")),i.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Achievements")),i.a.createElement(s.Link,{to:"/Studies/Identify/sites"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Sites/ Collaborators")),i.a.createElement(s.Link,{to:"/Studies/Identify/study-team/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Study Team")),i.a.createElement(s.Link,{to:"/Studies/Identify/Admin/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"admin"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Mimic/Link#committee"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"MIMIC (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Mimic/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Overview")),i.a.createElement(s.Link,{to:"/Studies/Mimic/collaborators/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Collaborators")),i.a.createElement(s.Link,{to:"/Achievements/achievements-overview"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Achievements"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Learn/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"LEARN (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Learn/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"LEARN Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Fixit/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"FIX-IT (Upcoming)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Fixit/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"FIX-IT Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Stent/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"STENT (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Stent/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"STENT Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/COVIDSurg/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"COVIDSurg Cancer (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/COVIDSurg/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Overview"))))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement(s.Link,{to:"/Studies/Detort/Overview/"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"DETORT (Upcoming)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"}))))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/Studies/Detort/Overview/"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"DETORT Overview"))))))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Achievements"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/Achievements/prizes"},i.a.createElement("a",{class:"navbar-item"},"Prizes")),i.a.createElement(s.Link,{to:"/Achievements/publication"},i.a.createElement("a",{class:"navbar-item"},"Publications")),i.a.createElement(s.Link,{to:"/Achievements/presentation"},i.a.createElement("a",{class:"navbar-item"},"Presentations")),i.a.createElement(s.Link,{to:"/Achievements/how-to"},i.a.createElement("a",{class:"navbar-item"},"How to document my BURST involvement?")))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Opportunities"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/Opportunities/BJUI-Podcast/Overview/"},i.a.createElement("a",{class:"navbar-item"},"BJUI/BURST Podcast Series")),i.a.createElement(s.Link,{to:"/Opportunities/Trainee_Corner/Overview/"},i.a.createElement("a",{class:"navbar-item"},"BJUI Trainees' Corner")),i.a.createElement(s.Link,{to:"/Opportunities/Legends_of_Urology/Overview/"},i.a.createElement("a",{class:"navbar-item"},"Legends of Urology Podcast")),i.a.createElement(s.Link,{to:"/Opportunities/Collaborate-with-us/Overview/"},i.a.createElement("a",{class:"navbar-item"},"Collaborate With Us")))),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},i.a.createElement(s.Link,{to:"/Opportunities/Education/Overview/"},"Education")),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},i.a.createElement(s.Link,{to:"https://sibforms.com/serve/MUIEADEdBDH4twOiEaqhfVzS1BDJm9GRbYImfefgqsXW7ZVcEfkj_ve867tdpgtr-No8-agzTNSqgzdwjW9ceq3tMDnihE5ImN0a8ru2Y9N5SB-vJ6KHtdzIVO51z57eYp03Tl3v9kI885ukhYrOTjajdiNTsZkciDo_jA0PNrxeFPGcBUk8vv5l61Q8C2-H1Iu8YkMhioie2cob",target:"_blank"},"Subscribe"))),i.a.createElement("div",{class:"navbar-end"},i.a.createElement("div",{class:"navbar-item"},i.a.createElement(s.Link,{to:"https://twitter.com/bursturology?lang=en",target:"_blank"},i.a.createElement("a",{class:"button is-medium is-twitter"},i.a.createElement("span",{class:"icon"},i.a.createElement("i",{class:"fab fa-twitter"})),i.a.createElement("span",null,"Twitter"))))))))},t}(r.Component);t.a=l},"W/9C":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);a("Wbzz"),a("v31m"),a("0B/k");t.a=function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Copyright British Urology Researchers in Surgical Training (BURST) Research Collaborative @ 2021. "))))}},ZhWT:function(e,t){var a="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(a&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],o[l[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},ezWK:function(e,t,a){e.exports=a.p+"static/BURST_1-4de9f6d3ce90fa893c664b69b2281db0.png"},qhky:function(e,t,a){"use strict";(function(e){a("E9XD");var n,r,i,o,c=a("17x9"),s=a.n(c),l=a("8+s/"),u=a.n(l),d=a("ZhWT"),m=a.n(d),p=a("q1tI"),f=a.n(p),v=a("YVoz"),E=a.n(v),h="bodyAttributes",b="htmlAttributes",w="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(y).map((function(e){return y[e]})),"charset"),T="cssText",S="href",O="http-equiv",k="innerHTML",C="itemprop",A="name",L="property",I="rel",j="src",P="target",R={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",x="defer",N="encodeSpecialCharacters",B="onChangeClientState",D="titleTemplate",U=Object.keys(R).reduce((function(e,t){return e[R[t]]=t,e}),{}),q=[y.NOSCRIPT,y.SCRIPT,y.STYLE],_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},H=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},V=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=Q(e,y.TITLE),a=Q(e,D);if(a&&t)return a.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,M);return t||n||void 0},J=function(e){return Q(e,B)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[y.BASE]})).map((function(e){return e[y.BASE]})).reverse().reduce((function(t,a){if(!t.length)for(var n=Object.keys(a),r=0;r<n.length;r++){var i=n[r].toLowerCase();if(-1!==e.indexOf(i)&&a[i])return t.concat(a)}return t}),[])},Z=function(e,t,a){var n={};return a.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+_(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,a){var r={};a.filter((function(e){for(var a=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||a===I&&"canonical"===e[a].toLowerCase()||s===I&&"stylesheet"===e[s].toLowerCase()||(a=s),-1===t.indexOf(c)||c!==k&&c!==T&&c!==C||(a=c)}if(!a||!e[a])return!1;var l=e[a].toLowerCase();return n[a]||(n[a]={}),r[a]||(r[a]={}),!n[a][l]&&(r[a][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],s=E()({},n[c],r[c]);n[c]=s}return e}),[]).reverse()},Q=function(e,t){for(var a=e.length-1;a>=0;a--){var n=e[a];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,ae="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var a=e.baseTag,n=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;se(y.BODY,n),se(y.HTML,r),ce(d,m);var p={baseTag:le(y.BASE,a),linkTags:le(y.LINK,i),metaTags:le(y.META,o),noscriptTags:le(y.NOSCRIPT,c),scriptTags:le(y.SCRIPT,l),styleTags:le(y.STYLE,u)},f={},v={};Object.keys(p).forEach((function(e){var t=p[e],a=t.newTags,n=t.oldTags;a.length&&(f[e]=a),n.length&&(v[e]=p[e].oldTags)})),t&&t(),s(e,f,v)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(y.TITLE,t)},se=function(e,t){var a=document.getElementsByTagName(e)[0];if(a){for(var n=a.getAttribute("data-react-helmet"),r=n?n.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";a.getAttribute(s)!==l&&a.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)a.removeAttribute(i[d]);r.length===i.length?a.removeAttribute("data-react-helmet"):a.getAttribute("data-react-helmet")!==o.join(",")&&a.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var a=document.head||document.querySelector(y.HEAD),n=a.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var a=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===k)a.innerHTML=t.innerHTML;else if(n===T)a.styleSheet?a.styleSheet.cssText=t.cssText:a.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];a.setAttribute(n,c)}a.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,a.isEqualNode(e)}))?r.splice(o,1):i.push(a)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return a.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,a){var n=void 0!==e[a]?a+'="'+e[a]+'"':""+a;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[R[a]||a]=e[a],t}),t)},me=function(e,t,a){switch(e){case y.TITLE:return{toComponent:function(){return e=t.title,a=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,r=de(a,n),[f.a.createElement(y.TITLE,r,e)];var e,a,n,r},toString:function(){return function(e,t,a,n){var r=ue(a),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+V(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+V(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,a)}};case h:case b:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,a){var n,r=((n={key:a})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var a=R[e]||e;if(a===k||a===T){var n=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:n}}else r[a]=t[e]})),f.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,a){return t.reduce((function(t,n){var r=Object.keys(n).filter((function(e){return!(e===k||e===T)})).reduce((function(e,t){var r=void 0===n[t]?t:t+'="'+V(n[t],a)+'"';return e?e+" "+r:r}),""),i=n.innerHTML||n.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,a)}}}},pe=function(e){var t=e.baseTag,a=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(y.BASE,t,n),bodyAttributes:me(h,a,n),htmlAttributes:me(b,r,n),link:me(y.LINK,i,n),meta:me(y.META,o,n),noscript:me(y.NOSCRIPT,c,n),script:me(y.SCRIPT,s,n),style:me(y.STYLE,l,n),title:me(y.TITLE,{title:d,titleAttributes:m},n)}},fe=u()((function(e){return{baseTag:X([S,P],e),bodyAttributes:G(h,e),defer:Q(e,x),encode:Q(e,N),htmlAttributes:G(b,e),linkTags:Z(y.LINK,[I,S],e),metaTags:Z(y.META,[A,g,O,L,C],e),noscriptTags:Z(y.NOSCRIPT,[k],e),onChangeClientState:J(e),scriptTags:Z(y.SCRIPT,[j,k],e),styleTags:Z(y.STYLE,[T],e),title:K(e),titleAttributes:G(w,e)}}),(function(e){re&&ae(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),pe)((function(){return null})),ve=(r=fe,o=i=function(e){function t(){return z(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:t};case y.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,a=e.child,n=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return Y({},n,((t={})[a.type]=[].concat(n[a.type]||[],[Y({},r,this.mapNestedChildrenToProps(a,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,a,n=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case y.TITLE:return Y({},r,((t={})[n.type]=o,t.titleAttributes=Y({},i),t));case y.BODY:return Y({},r,{bodyAttributes:Y({},i)});case y.HTML:return Y({},r,{htmlAttributes:Y({},i)})}return Y({},r,((a={})[n.type]=Y({},i),a))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var a=Y({},t);return Object.keys(e).forEach((function(t){var n;a=Y({},a,((n={})[t]=e[t],n))})),a},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var a=this,n={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,a){return t[U[a]||a]=e[a],t}),t)}(H(r,["children"]));switch(a.warnOnInvalidChildren(e,i),e.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:n=a.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=a.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,a=H(e,["children"]),n=Y({},a);return t&&(n=this.mapChildrenToProps(t,n)),f.a.createElement(r,n)},F(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(f.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ve.renderStatic=ve.rewind,t.a=ve}).call(this,a("yLpj"))},v31m:function(e,t,a){}}]);
//# sourceMappingURL=commons-728b52ef4fdb4ad0c2ca.js.map