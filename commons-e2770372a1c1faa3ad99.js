(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0B/k":function(e,t,n){"use strict";n("q1tI")},"1GyG":function(e,t,n){"use strict";var a=n("xzmG"),r=n("q1tI"),i=n.n(r),o=n("Wbzz"),c=n("qhky");t.a=function(){return i.a.createElement(o.StaticQuery,{query:"513857193",render:function(e){return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"}),i.a.createElement("meta",{name:"description",content:e.site.siteMetadata.description}),i.a.createElement("meta",{name:"keywords",content:e.site.siteMetadata.keywords}),i.a.createElement("title",null,e.site.siteMetadata.title),i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{itemprop:"name",content:e.site.siteMetadata.author})," />",i.a.createElement("meta",{itemprop:"description",content:e.site.siteMetadata.description}),i.a.createElement("meta",{itemprop:"image",content:e.site.siteMetadata.imageUrl})," />")},data:a})}},"8+s/":function(e,t,n){"use strict";var a,r=n("q1tI"),i=(a=r)&&"object"==typeof a&&"default"in a?a.default:a;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(a){if("function"!=typeof a)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):n&&(s=n(s))}var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.peek=function(){return s},r.rewind=function(){if(r.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=r.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return i.createElement(a,this.props)},r}(r.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(a)+")"),o(d,"canUseDOM",c),d}}},RMg3:function(e,t,n){"use strict";var a=n("dI71"),r=n("q1tI"),i=n.n(r),o=(n("v31m"),n("ezWK")),c=n.n(o),s=n("Wbzz"),l=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleClick=function(){n.setState({active:!n.state.active})},n.state={active:!1},n}return Object(a.a)(t,e),t.prototype.render=function(){return console.log("active : "+JSON.stringify(this.props)),i.a.createElement("div",{className:"hero-head"},i.a.createElement("nav",{class:"navbar is-fixed-top",role:"navigation","aria-label":"main navigation"},i.a.createElement("div",{class:"navbar-brand"},i.a.createElement("a",{class:"navbar-item is-hidden-touch"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"350px"}))),i.a.createElement("a",{class:"navbar-item is-hidden-desktop"},i.a.createElement(s.Link,{to:"/"},i.a.createElement("img",{src:c.a,alt:"BURST",width:"250px"}))),i.a.createElement("span",{role:"button",className:"navbar-burger burger "+(this.state.active?"is-active":""),"aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:this.handleClick},i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}),i.a.createElement("span",{"aria-hidden":"true"}))),i.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu "+(this.state.active?"is-active":"")},i.a.createElement("div",{class:"navbar-start "},i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"About Us"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement(s.Link,{to:"/about/about-burst"},i.a.createElement("a",{class:"navbar-item"},"About Us")),i.a.createElement("a",{class:"navbar-item"},"History of BURST"),i.a.createElement("div",{className:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"Committee"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement(s.Link,{to:"/about/committee-members#point"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"Committee Members")),i.a.createElement("a",{href:"#",class:"dropdown-item"},"Advisory Board"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"International"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"Patient and Public Involvement")))),i.a.createElement(s.Link,{to:"/about/about-burst#member"},i.a.createElement("a",{class:"navbar-item"},"How do I become a member?")),i.a.createElement(s.Link,{to:"/about/about-burst#trainee"},i.a.createElement("a",{class:"navbar-item"},"Advantages of Trainee-led research")),i.a.createElement(s.Link,{to:"/about/about-burst#ideal"},i.a.createElement("a",{class:"navbar-item"},"Ideal collaborative research project")),i.a.createElement("a",{class:"navbar-item"},"Our Sponsors"),i.a.createElement("a",{class:"navbar-item"},"Our Collaborators"))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Studies"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"RESECT (Open)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Overview"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"RESECT Study Team")))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"IDENTIFY (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Achievements"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Overview"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Pilot"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Sites"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY FAQ"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"IDENTIFY Medical Students")))),i.a.createElement("div",{class:"nested navbar-item dropdown"},i.a.createElement("div",{class:"dropdown-trigger"},i.a.createElement("button",{class:"button","aria-haspopup":"true","aria-controls":"dropdown-menu"},i.a.createElement("span",null,"MIMIC (Closed)"),i.a.createElement("span",{class:"icon is-small"},i.a.createElement("i",{class:"fas fa-angle-right","aria-hidden":"true"})))),i.a.createElement("div",{class:"dropdown-menu",id:"dropdown-menu",role:"menu"},i.a.createElement("div",{class:"dropdown-content"},i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Achievements"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Overview"),i.a.createElement("a",{href:"#",class:"dropdown-item"},"MIMIC Collaborators")))))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Achievements"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement("a",{class:"navbar-item"},"Achievements"),i.a.createElement("a",{class:"navbar-item"},"Publications"),i.a.createElement("a",{class:"navbar-item"},"Media Coverage"))),i.a.createElement("div",{class:"navbar-item has-dropdown is-hoverable"},i.a.createElement("a",{class:"navbar-link"},"Opportunities"),i.a.createElement("div",{class:"navbar-dropdown"},i.a.createElement("a",{class:"navbar-item"},"Current Projects"),i.a.createElement("a",{class:"navbar-item"},"STENT"),i.a.createElement("a",{class:"navbar-item"},"FIX-IT"),i.a.createElement("a",{class:"navbar-item"},"BJUI/BURST Podcast Series"),i.a.createElement("a",{class:"navbar-item"},"Clinical Trials"),i.a.createElement("a",{class:"navbar-item"},"Trial Management Group"),i.a.createElement("a",{class:"navbar-item"},"Collaborate With Us"),i.a.createElement("a",{class:"navbar-item"},"Dragons Den"))),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},"Education"),i.a.createElement("a",{class:"navbar-item",id:"mainlink"},"Subscribe")),i.a.createElement("div",{class:"navbar-end"},i.a.createElement("div",{class:"navbar-item"},i.a.createElement("a",{class:"button is-medium is-twitter"},i.a.createElement("span",{class:"icon"},i.a.createElement("i",{class:"fab fa-twitter"})),i.a.createElement("span",null,"Twitter")))))))},t}(r.Component);t.a=l},"W/9C":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a);n("Wbzz"),n("v31m"),n("0B/k");t.a=function(){return r.a.createElement("footer",{class:"footer"},r.a.createElement("div",{class:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"British Urology Researchers in Surgical Training (BURST) Research Collaborative. ")," The source code is licensed",r.a.createElement("a",{href:"http://opensource.org/licenses/mit-license.php"},"MIT"),". The website content is licensed ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by-nc-sa/4.0/"},"CC BY NC SA 4.0"),".")))}},bmMU:function(e,t){var n="undefined"!=typeof Element,a="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(a&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=t.entries();!(s=u.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(r&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(u=t.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!t.$$typeof)&&!e(t[l[s]],o[l[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},ezWK:function(e,t,n){e.exports=n.p+"static/BURST_1-4de9f6d3ce90fa893c664b69b2281db0.png"},qhky:function(e,t,n){"use strict";(function(e){var a,r,i,o,c=n("17x9"),s=n.n(c),l=n("8+s/"),u=n.n(l),d=n("bmMU"),m=n.n(d),p=n("q1tI"),f=n.n(p),b=n("6qGY"),h=n.n(b),v="bodyAttributes",E="htmlAttributes",y="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(w).map((function(e){return w[e]})),"charset"),g="cssText",C="href",S="http-equiv",A="innerHTML",O="itemprop",I="name",k="property",j="rel",M="src",x="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",R="encodeSpecialCharacters",B="onChangeClientState",U="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},z=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=X(e,w.TITLE),n=X(e,U);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var a=X(e,L);return t||a||void 0},J=function(e){return X(e,B)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},Q=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var a=Object.keys(n),r=0;r<a.length;r++){var i=a[r].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},$=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ae("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||n===j&&"canonical"===e[n].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==A&&c!==g&&c!==O||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][l]&&(r[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),o=0;o<i.length;o++){var c=i[o],s=h()({},a[c],r[c]);a[c]=s}return e}),[]).reverse()},X=function(e,t){for(var n=e.length-1;n>=0;n--){var a=e[n];if(a.hasOwnProperty(t))return a[t]}return null},Z=(a=Date.now(),function(e){var t=Date.now();t-a>16?(a=t,e(t)):setTimeout((function(){Z(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Z:e.requestAnimationFrame||Z,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ae=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ie=function(e,t){var n=e.baseTag,a=e.bodyAttributes,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,m=e.titleAttributes;se(w.BODY,a),se(w.HTML,r),ce(d,m);var p={baseTag:le(w.BASE,n),linkTags:le(w.LINK,i),metaTags:le(w.META,o),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},f={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,a=t.oldTags;n.length&&(f[e]=n),a.length&&(b[e]=p[e].oldTags)})),t&&t(),s(e,f,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var a=n.getAttribute("data-react-helmet"),r=a?a.split(","):[],i=[].concat(r),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===r.indexOf(s)&&r.push(s);var u=i.indexOf(s);-1!==u&&i.splice(u,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);r.length===i.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var n=document.head||document.querySelector(w.HEAD),a=n.querySelectorAll(e+"[data-react-helmet]"),r=Array.prototype.slice.call(a),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var a in t)if(t.hasOwnProperty(a))if(a===A)n.innerHTML=t.innerHTML;else if(a===g)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[a]?"":t[a];n.setAttribute(a,c)}n.setAttribute("data-react-helmet","true"),r.some((function(e,t){return o=t,n.isEqualNode(e)}))?r.splice(o,1):i.push(n)})),r.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:r,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var a=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+a:a}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},me=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(a={key:e})["data-react-helmet"]=!0,r=de(n,a),[f.a.createElement(w.TITLE,r,e)];var e,n,a,r},toString:function(){return function(e,t,n,a){var r=ue(n),i=oe(t);return r?"<"+e+' data-react-helmet="true" '+r+">"+G(i,a)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(i,a)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case v:case E:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var a,r=((a={key:n})["data-react-helmet"]=!0,a);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===A||n===g){var a=t.innerHTML||t.cssText;r.dangerouslySetInnerHTML={__html:a}}else r[n]=t[e]})),f.a.createElement(e,r)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,a){var r=Object.keys(a).filter((function(e){return!(e===A||e===g)})).reduce((function(e,t){var r=void 0===a[t]?t:t+'="'+G(a[t],n)+'"';return e?e+" "+r:r}),""),i=a.innerHTML||a.cssText||"",o=-1===q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+r+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,a=e.encode,r=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,m=e.titleAttributes;return{base:me(w.BASE,t,a),bodyAttributes:me(v,n,a),htmlAttributes:me(E,r,a),link:me(w.LINK,i,a),meta:me(w.META,o,a),noscript:me(w.NOSCRIPT,c,a),script:me(w.SCRIPT,s,a),style:me(w.STYLE,l,a),title:me(w.TITLE,{title:d,titleAttributes:m},a)}},fe=u()((function(e){return{baseTag:Q([C,x],e),bodyAttributes:V(v,e),defer:X(e,N),encode:X(e,R),htmlAttributes:V(E,e),linkTags:$(w.LINK,[j,C],e),metaTags:$(w.META,[I,T,S,k,O],e),noscriptTags:$(w.NOSCRIPT,[A],e),onChangeClientState:J(e),scriptTags:$(w.SCRIPT,[M,A],e),styleTags:$(w.STYLE,[g],e),title:K(e),titleAttributes:V(y,e)}}),(function(e){re&&ne(re),e.defer?re=te((function(){ie(e,(function(){re=null}))})):(ie(e),re=null)}),pe)((function(){return null})),be=(r=fe,o=i=function(e){function t(){return Y(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!m()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,r=e.newChildProps,i=e.nestedChildren;return H({},a,((t={})[n.type]=[].concat(a[n.type]||[],[H({},r,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,r=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(a.type){case w.TITLE:return H({},r,((t={})[a.type]=o,t.titleAttributes=H({},i),t));case w.BODY:return H({},r,{bodyAttributes:H({},i)});case w.HTML:return H({},r,{htmlAttributes:H({},i)})}return H({},r,((n={})[a.type]=H({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var a;n=H({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,a={};return f.a.Children.forEach(e,(function(e){if(e&&e.props){var r=e.props,i=r.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(z(r,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:a=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:a,newChildProps:o,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(a,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),a=H({},n);return t&&(a=this.mapChildrenToProps(t,a)),f.a.createElement(r,a)},_(t,null,[{key:"canUseDOM",set:function(e){r.canUseDOM=e}}]),t}(f.a.Component),i.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=r.peek,i.rewind=function(){var e=r.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind,t.a=be}).call(this,n("yLpj"))},v31m:function(e,t,n){},waaq:function(e,t,n){e.exports=n.p+"static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a.png"},xzmG:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"BURST Urology","author":"BURST","imageUrl":"src/images/BURST_mini.png","description":"A Project to bootstrap your next Gatsby + Bulma site.","keywords":"Web developer, Web, Developer, CSS, HTML, JS, Javascript, Gatsby, Bulma Developer, CSS3, HTML5, Seo, Starter"}}}}')},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=commons-e2770372a1c1faa3ad99.js.map