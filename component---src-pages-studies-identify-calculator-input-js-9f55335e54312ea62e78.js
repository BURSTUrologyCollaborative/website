(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{v31m:function(e,t,a){},zoUI:function(e,t,a){"use strict";a.r(t);var i=a("9Hrx"),s=a("q1tI"),n=a.n(s),l=(a("i8i4"),a("v31m"),0),r=0,c=0,o=0,m=0,h=0,u=0,d=0,E=0,p=0,g=0,b=0,f=function(e){function t(){var t;return(t=e.call(this)||this).handlenum1=function(e){t.setState({num1:e.target.value})},t.handlehaematuria=function(e){l+=1,t.state.haematuria=l%2==0?0:1},t.handlecurrentSmoker=function(e){r+=1,t.state.currentSmoker=r%2==0?0:1},t.handleexSmoker=function(e){c+=1,t.state.exSmoker=c%2==0?0:1},t.handlefamHist=function(e){o+=1,t.state.famHist=o%2==0?0:1},t.handlemale=function(e){m+=1,t.state.male=m%2==0?0:1},t.handlebenignIx=function(e){h+=1,t.state.benignIx=h%2==0?0:1},t.handleanticoagulation=function(e){u+=1,t.state.anticoagulation=u%2==0?0:1},t.handledysuria=function(e){d+=1,t.state.dysuria=d%2==0?0:1},t.handleuti=function(e){E+=1,t.state.uti=E%2==0?0:1},t.handlecatheter=function(e){p+=1,t.state.catheter=p%2==0?0:1},t.handlepelvicXRT=function(e){g+=1,t.state.pelvicXRT=g%2==0?0:1},t.handlesingleuti=function(e){b+=1,t.state.singleuti=b%2==0?0:1},t.exe=function(e){e.preventDefault(),t.setState({total:(7+10*[1.91*t.state.haematuria+.71*t.state.male+(.047*parseInt(t.state.num1)+1.06*t.state.currentSmoker+.71*t.state.exSmoker+.72*t.state.famHist-.84*t.state.benignIx-.74*t.state.singleuti-.75*t.state.uti-1.6*t.state.catheter-.6*t.state.pelvicXRT-.33*t.state.anticoagulation-.32*t.state.dysuria-.84*t.state.haematuria*t.state.male)]).toFixed(0)})},t.state={num1:"",total:"",haematuria:0,currentSmoker:0,exSmoker:0,famHist:0,male:0,benignIx:0,uti:0,catheter:0,dysuria:0,pelvicXRT:0,singleuti:0,anticoagulation:0,text:"",output:"",probtext:"",warningsmoking:"",warningUTI:""},t}return Object(i.a)(t,e),t.prototype.render=function(){var e={color:"black"};return this.state.total>0&&this.state.total<=99?this.state.output=[[0,0],[1,.1],[2,.1],[3,.1],[4,.1],[5,.1],[6,.1],[7,.1],[8,.1],[9,.1],[10,.1],[11,.2],[12,.2],[13,.2],[14,.2],[15,.2],[16,.3],[17,.3],[18,.3],[19,.3],[20,.4],[21,.4],[22,.5],[23,.5],[24,.6],[25,.6],[26,.7],[27,.8],[28,.9],[29,1],[30,1.1],[31,1.2],[32,1.3],[33,1.5],[34,1.6],[35,1.8],[36,2],[37,2.2],[38,2.4],[39,2.7],[40,3],[41,3.3],[42,3.7],[43,4.1],[44,4.5],[45,4.9],[46,5.5],[47,6],[48,6.6],[49,7.3],[50,8.1],[51,8.9],[52,9.7],[53,10.7],[54,11.7],[55,12.9],[56,14.1],[57,15.4],[58,16.8],[59,18.3],[60,19.9],[61,21.6],[62,23.4],[63,25.3],[64,27.4],[65,29.5],[66,31.7],[67,34],[68,36.4],[69,38.8],[70,41.3],[71,43.9],[72,46.5],[73,49.1],[74,51.7],[75,54.3],[76,56.8],[77,59.4],[78,61.9],[79,64.3],[80,66.6],[81,68.9],[82,71.1],[83,73.2],[84,75.2],[85,77.1],[86,78.9],[87,80.6],[88,82.1],[89,83.6],[90,85],[91,86.3],[92,87.5],[93,88.6],[94,89.6],[95,90.5],[96,91.4],[97,92.2],[98,92.9],[99,93.5],[100,94.1]][this.state.total][1]:this.state.total<0?this.state.output="Negligible":this.state.output="",this.state.output>0?this.state.probtext="% predicted risk of urinary tract cancer.":this.state.total<0?this.state.probtext="predicted risk of urinary tract cancer.":this.state.probtext="",this.state.total>45&&this.state.total<=60?(e={color:"#e27300"},this.state.text=" There is an INTERMEDIATE Risk of Urinary Tract Cancer"):this.state.total>60?(e={color:"red"},this.state.text="There is a HIGH Risk of Urinary Tract Cancer"):this.state.total>0&&this.state.total<29?(e={color:"green"},this.state.text="There is a VERY LOW Risk of Urinary Tract Cancer"):this.state.total>=29&&this.state.total<=45?(e={color:"green"},this.state.text="There is a LOW Risk of Urinary Tract Cancer"):this.state.text="",this.state.currentSmoker>0&this.state.exSmoker>0?(this.state.warningsmoking="Please review smoking status selection. Both Ex and Current Smoker options have been selected",this.state.text="",this.state.probtext="",this.state.output=""):this.state.warningsmoking="",this.state.singleuti>0&this.state.uti>0?(this.state.warningUTI="Please review UTI associated with haematuria selection. Both single and recurrent UTI options have been selected",this.state.text="",this.state.probtext="",this.state.output=""):this.state.warningUTI="",n.a.createElement("div",{class:"container"},n.a.createElement("div",{class:"field"},n.a.createElement("form",{onSubmit:this.exe},n.a.createElement("div",{class:"control"},n.a.createElement("h1",{className:"title is-size-5"},"Age"),n.a.createElement("input",{class:"input is-primary",type:"text",value:this.state.num1,onChange:this.handlenum1,placeholder:"Input Age (over 16 years)"})),n.a.createElement("br",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"haematuria",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlehaematuria}),n.a.createElement("label",{for:"haematuria",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Visible Haematuria "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"currentSmoker",disabled:this.state.disabled,type:"checkbox",name:"switchExample",class:"switch is-rtl",onClick:this.handlecurrentSmoker}),n.a.createElement("label",{for:"currentSmoker",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Current Smoker "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"exSmoker",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handleexSmoker}),n.a.createElement("label",{for:"exSmoker",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Ex-Smoker "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"famHist",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlefamHist}),n.a.createElement("label",{for:"famHist",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Family History of Urothelial Cancer "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"male",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlemale}),n.a.createElement("label",{for:"male",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Male "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"benignIx",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlebenignIx}),n.a.createElement("label",{for:"benignIx",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Previous benign haematuria investigations "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"singleuti",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlesingleuti}),n.a.createElement("label",{for:"singleuti",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Single UTI associated with haematuria "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"uti",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handleuti}),n.a.createElement("label",{for:"uti",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Recurrent UTI associated with haematuria "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"catheter",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlecatheter}),n.a.createElement("label",{for:"catheter",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Catheter? (Indwelling or ISC) "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"pelvicXRT",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handlepelvicXRT}),n.a.createElement("label",{for:"pelvicXRT",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Previous pelvic radiotherapy "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"dysuria",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handledysuria}),n.a.createElement("label",{for:"dysuria",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Suprapubic pain or dysuria? "))),n.a.createElement("hr",null),n.a.createElement("div",{class:"field"},n.a.createElement("input",{id:"anticoagulation",type:"checkbox",name:"switchExample",class:"switch is-rtl",onChange:this.handleanticoagulation}),n.a.createElement("label",{for:"anticoagulation",className:"is-size-5 is-size-6-mobile"},n.a.createElement("strong",null," Anticoagulation "))),n.a.createElement("br",null),n.a.createElement("button",{class:"button is-info is-size-5 is-size-6-mobile",type:"submit"},n.a.createElement("strong",null,"Calculate Risk of Urinary Tract Cancer"))),n.a.createElement("br",null),n.a.createElement("h1",{className:"title is-size-5-mobile"}," ",this.state.output," ",this.state.probtext),n.a.createElement("h1",{className:"title is-size-5-mobile",style:e},this.state.text," "),n.a.createElement("h1",{className:"title is-size-5-mobile has-text-danger"},this.state.warningsmoking," "),n.a.createElement("h1",{className:"title is-size-5-mobile has-text-danger"},this.state.warningUTI," "),n.a.createElement("br",null),n.a.createElement("h1",{className:"title is-size-5-mobile notification is-danger is-light "}," Consider an increased risk of upper tract cancer if the patient has flank pain and haematuria. ")))},t}(n.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-studies-identify-calculator-input-js-9f55335e54312ea62e78.js.map