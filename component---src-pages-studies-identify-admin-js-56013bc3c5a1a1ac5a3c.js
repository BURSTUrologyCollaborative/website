(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"0J0H":function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),s=a.n(i),l=(a("v31m"),a("1GyG")),n=a("RMg3"),r=a("W/9C"),c=a("zoUI");t.default=function(){return s.a.createElement("html",null,s.a.createElement(l.a,null),s.a.createElement(n.a,null),s.a.createElement("section",{className:"section"},s.a.createElement("div",{class:"container"},s.a.createElement("h1",{className:"title is-size-4-mobile",id:"point"},"IDENTIFY Overview"),s.a.createElement("hr",null)),s.a.createElement("div",{class:"container has-text-centered"},s.a.createElement("figure",{className:"media-content is-size-4-mobile"}),s.a.createElement("span",{class:"title"}," The Investigation and DEtection of urological Neoplasia in paTIents reFerred with suspected urinary tract cancer: A multicentre analYsis (IDENTIFY)"),s.a.createElement("hr",null),s.a.createElement("span",{class:"title"}," IDENTIFY Urinary Tract Cancer Prediction Model (under construction)"))),s.a.createElement(c.default,null),s.a.createElement("br",null),s.a.createElement(r.a,null))}},zoUI:function(e,t,a){"use strict";a.r(t);var i=a("9Hrx"),s=a("q1tI"),l=a.n(s),n=(a("i8i4"),a("v31m"),0),r=0,c=0,m=0,o=0,h=0,u=0,d=0,E=0,p=0,f=0,g=0,b=0,x=function(e){function t(){var t;return(t=e.call(this)||this).handlenum1=function(e){t.setState({num1:e.target.value})},t.handlehaematuria=function(e){n+=1,t.state.haematuria=n%2==0?0:1},t.handlecurrentSmoker=function(e){r+=1,t.state.currentSmoker=r%2==0?0:1},t.handleexSmoker=function(e){c+=1,t.state.exSmoker=c%2==0?0:1},t.handlefamHist=function(e){m+=1,t.state.famHist=m%2==0?0:1},t.handlemale=function(e){o+=1,t.state.male=o%2==0?0:1},t.handlebenignIx=function(e){h+=1,t.state.benignIx=h%2==0?0:1},t.handlevoiding=function(e){u+=1,t.state.voiding=u%2==0?0:1},t.handlestorage=function(e){d+=1,t.state.storage=d%2==0?0:1},t.handlemixed=function(e){E+=1,t.state.mixed=E%2==0?0:1},t.handleuti=function(e){p+=1,t.state.uti=p%2==0?0:1},t.handlecatheter=function(e){f+=1,t.state.catheter=f%2==0?0:1},t.handlepelvicXRT=function(e){g+=1,t.state.pelvicXRT=g%2==0?0:1},t.handlesingleuti=function(e){b+=1,t.state.singleuti=b%2==0?0:1},t.exe=function(e){e.preventDefault(),t.setState({total:(9+10*[2.23*t.state.haematuria+.99*t.state.male+.08*(parseInt(t.state.num1)-64.3)+1.25*t.state.currentSmoker+.68*t.state.exSmoker+.77*t.state.famHist-.71*t.state.benignIx-.55*t.state.voiding-.35*t.state.storage-.48*t.state.mixed-.92*t.state.singleuti-.86*t.state.uti-1.24*t.state.catheter-.51*t.state.pelvicXRT-.81*t.state.haematuria*t.state.male-.02*t.state.haematuria*(parseInt(t.state.num1)-64.3)-.03*t.state.male*(parseInt(t.state.num1)-64.3)]).toFixed(0)})},t.state={num1:"",total:"",haematuria:0,currentSmoker:0,exSmoker:0,famHist:0,male:0,benignIx:0,voiding:0,storage:0,mixed:0,uti:0,catheter:0,pelvicXRT:0,singleuti:0,text:""},t}return Object(i.a)(t,e),t.prototype.render=function(){this.state.total<0&&(this.state.total=.01);var e={color:"black"};return this.state.total>=56&&this.state.total<=76?(e={color:"#e27300"},this.state.text=" (There is an INTERMEDIATE Risk of Urinary Tract Cancer)"):this.state.total>76?(e={color:"red"},this.state.text="(There is a HIGH Risk of Urinary Tract Cancer)"):this.state.total>0&&this.state.total<56?this.state.text="(There is a LOW Risk of Urinary Tract Cancer)":this.state.text="",l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"field"},l.a.createElement("form",{onSubmit:this.exe},l.a.createElement("div",{class:"control"},l.a.createElement("h1",{className:"title is-size-5 is-size-4-mobile"},"Age"),l.a.createElement("input",{class:"input is-primary",type:"text",value:this.state.num1,onChange:this.handlenum1,placeholder:"Input Age"})),l.a.createElement("br",null),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"haematuria",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlehaematuria}),l.a.createElement("label",{for:"haematuria",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Visible Haematuria "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"currentSmoker",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlecurrentSmoker}),l.a.createElement("label",{for:"currentSmoker",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Current Smoker "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"exSmoker",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handleexSmoker}),l.a.createElement("label",{for:"exSmoker",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Ex-Smoker "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"famHist",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlefamHist}),l.a.createElement("label",{for:"famHist",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Family History of Urothelial Cancer "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"male",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlemale}),l.a.createElement("label",{for:"male",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Male "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"benignIx",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlebenignIx}),l.a.createElement("label",{for:"benignIx",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Previous benign haematuria investigations "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"voiding",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlevoiding}),l.a.createElement("label",{for:"voiding",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," LUTS: Voiding/Obstructive "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"storage",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlestorage}),l.a.createElement("label",{for:"storage",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," LUTS: Storage/Irritative "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"mixed",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlemixed}),l.a.createElement("label",{for:"mixed",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," LUTS: Mixed "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"singleuti",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlesingleuti}),l.a.createElement("label",{for:"singleuti",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Single UTI associated with haematuria "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"uti",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handleuti}),l.a.createElement("label",{for:"uti",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Recurrent UTI associated with haematuria "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"catheter",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlecatheter}),l.a.createElement("label",{for:"catheter",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Catheter? (indweling or ISC) "))),l.a.createElement("div",{class:"field"},l.a.createElement("input",{id:"pelvicXRT",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlepelvicXRT}),l.a.createElement("label",{for:"pelvicXRT",className:"is-size-5 is-size-3-mobile"},l.a.createElement("strong",null," Previous pelvic radiotherapy "))),l.a.createElement("br",null),l.a.createElement("button",{class:"button is-info is-size-5 is-size-3-mobile",type:"submit"},l.a.createElement("strong",null,"Calculate Risk of Urinary Tract Cancer"))),l.a.createElement("br",null),l.a.createElement("h1",{className:"title is-size-3-mobile",style:e}," ",this.state.total," ",this.state.text," "),l.a.createElement("br",null),l.a.createElement("h1",{className:"title is-size-3-mobile"}," Consider an increased risk of upper tract cancer if the patient has flank pain and haematuria ")))},t}(l.a.Component);t.default=x}}]);
//# sourceMappingURL=component---src-pages-studies-identify-admin-js-56013bc3c5a1a1ac5a3c.js.map