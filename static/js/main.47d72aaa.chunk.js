(this.webpackJsonplive_covid_update=this.webpackJsonplive_covid_update||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/stay-home.7f1b657a.png"},15:function(e,t,a){e.exports=a.p+"static/media/quarantine.84f1d79b.png"},16:function(e,t,a){e.exports=a.p+"static/media/shield.18407fba.png"},17:function(e,t,a){e.exports=a(30)},23:function(e,t,a){},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),l=a.n(o),c=(a(22),a(23),a(7)),s=a(3),i=a(4),u=a(6),m=a(5),d=(a(24),a(2)),h=a.n(d),p=a(8),E=a.n(p),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).globalData=n.props.globalData,n.state={series:[n.globalData.total_cases,n.globalData.total_deaths,n.globalData.total_recovered],options:{fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,opacityFrom:.4,opacityTo:1,stops:[0,90,100]}},colors:["#007BFF","#EB5569","#00BB81"],labels:["TOTAL AFFECTED","TOTAL DEATHS","TOTAL RECOVERED"],tooltip:{enabled:!0,y:{formatter:function(e){return e+" people"},title:{formatter:function(e){return e}}}},chart:{animations:{easing:"easeinout",speed:1200,dynamicAnimation:{enabled:!0,speed:1200}}},responsive:[{breakpoint:600,options:{chart:{width:330}}}],plotOptions:{pie:{donut:{size:"95%",labels:{show:!0,color:"#ffffff",name:{color:"#515585",fontFamily:"Roboto, sans-serif",fontWeight:"600",offsetY:30},value:{color:"#ffffff",fontSize:"30px",fontFamily:"Roboto, sans-serif",fontWeight:"800",offsetY:-15},total:{show:!0,label:"TOTAL DEATHS",fontFamily:"Roboto, sans-serif",fontWeight:"600",formatter:function(e){return n.globalData.total_deaths},color:"#515585"}}}}},stroke:{show:!1},dataLabels:{enabled:!1},legend:{show:!0,position:"bottom",fontFamily:"Roboto, sans-serif",labels:{colors:"#515585"},itemMargin:{horizontal:"10",vertical:"5"}}}},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"donut",width:380})}}]),a}(n.Component),f=a(9),g=a(13),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a);var r=(n=t.call(this,e)).props.globalData;return n.state={globalData:r},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-12 col-lg-6 global-stat landing-stat "},r.a.createElement("div",{className:"stat-inr"},r.a.createElement("h2",{className:"landing-title"},r.a.createElement(f.b,null)," Global Outbreak"),r.a.createElement("div",{className:"global-chart-wrap d-flex justify-content-center"},r.a.createElement(b,{globalData:this.state.globalData})),r.a.createElement("div",{className:"counter-up"},r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.total_cases,separator:","})),r.a.createElement("h5",null,"TOTAL CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.total_deaths,separator:","})),r.a.createElement("h5",null,"TOTAL DEATHS")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.total_recovered,separator:","})),r.a.createElement("h5",null,"TOTAL RECOVERED")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.active_cases,separator:","})),r.a.createElement("h5",null,"ACTIVE CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.new_cases,separator:","})),r.a.createElement("h5",null,"NEW CASE TODAY")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.new_deaths,separator:","})),r.a.createElement("h5",null,"TODAY'S DEATHS")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.serious_critical,separator:","})),r.a.createElement("h5",null,"CRITICAL CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:this.state.globalData.total_deaths/this.state.globalData.total_cases*100,separator:","}),"%"),r.a.createElement("h5",null,"DEATH'S RATIO"))),r.a.createElement("a",{href:"/",className:"btn btn-primary"},r.a.createElement(g.a,null),"Stay safe")))}}]),a}(n.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a),(n=t.call(this,e)).countryData=n.props.countryData;var r=n.countryData.map((function(e){var t=new Date(e.record_date);return t.getDate()+"-"+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()].toUpperCase()}));return n.state={series:[{name:"TOTAL DEATHS",data:n.props.countryData.map((function(e){return Number(e.total_deaths.replace(/,/g,""))}))},{name:"TOTAL RECOVERED",data:n.countryData.map((function(e){return Number(e.total_recovered.replace(/,/g,""))}))}],options:{chart:{id:"countrychart",type:"area",height:350,stacked:!1,events:{selection:function(e,t){console.log(new Date(t.xaxis.min))}},toolbar:{show:!1}},colors:["#EB5569","#007BFF"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},fill:{type:"gradient",gradient:{opacityFrom:.6,opacityTo:.8}},legend:{position:"bottom",horizontalAlign:"center",fontFamily:"Roboto, sans-serif",labels:{colors:"#515585"},itemMargin:{horizontal:"10",vertical:"10"}},xaxis:{categories:Object(c.a)(r),labels:{style:{colors:"#515585",fontFamily:"Roboto, sans-serif"}},axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{style:{colors:"#515585",fontFamily:"Roboto, sans-serif"}}},grid:{xaxis:{lines:{show:!1}},yaxis:{lines:{show:!1}}}}},n}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.setState({series:[{name:"TOTAL DEATHS",data:this.props.countryData.map((function(e){return Number(e.total_deaths.replace(/,/g,""))}))},{name:"TOTAL RECOVERED",data:this.countryData.map((function(e){return Number(e.total_recovered.replace(/,/g,""))}))}]})}},{key:"render",value:function(){return r.a.createElement(E.a,{options:this.state.options,series:this.state.series,type:"area",height:270})}}]),a}(n.Component),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(s.a)(this,a);var r=(n=t.call(this,e)).props.countryData,o=n.props.countryNames,l=n.props.countryFlag;return n.state={countryData:r,countryNames:o,countryFlag:l},n}return Object(i.a)(a,[{key:"setCountryName",value:function(e){var t=this,a=Object(c.a)(this.state.countryNames);e.persist(),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=".concat(a.includes(e.target.value)?e.target.value:"Bangladesh"),{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"2a055a73eamshcbf6774bbc5e126p1fbba3jsnb7ba8de81244"}}).then((function(e){return e.json()})).then((function(e){var a=[],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];e.stat_by_country.map((function(e){var t=new Date(e.record_date),a=t.getDate()+"-"+n[t.getMonth()]+"-"+t.getFullYear();e.record_date=a}));for(var r=function(t){var r=new Date(e.stat_by_country[e.stat_by_country.length-1].record_date);r.setDate(r.getDate()-t);var o=r.getDate()+"-"+n[r.getMonth()]+"-"+r.getFullYear();console.log(o);var l=e.stat_by_country.filter((function(e){return e.record_date===o}));a.push(l[l.length-1])},o=0;o<=6;o++)r(o);t.setState({countryData:a,isLoadedCountry:!0})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"country-stat landing-stat col-12 col-lg-6"},r.a.createElement("div",{className:"stat-inr"},r.a.createElement("h2",{className:"landing-title"},"".concat(this.state.countryData[0].country_name)," Status"),r.a.createElement(v,{countryData:this.state.countryData}),r.a.createElement("div",{className:"counter-up"},r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].total_cases.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"TOTAL CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].total_deaths.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"TOTAL DEATHS")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].total_recovered.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"TOTAL RECOVERED")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].active_cases.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"ACTIVE CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].new_cases.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"NEW CASE TODAY")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].new_deaths.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"NEW DEATHS TODAY")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].serious_critical.replace(/,/g,"")),separator:","})),r.a.createElement("h5",null,"CRITICAL CASES")),r.a.createElement("div",{className:"counter-single"},r.a.createElement("h4",null,r.a.createElement(h.a,{end:Number(this.state.countryData[0].total_deaths.replace(/,/g,"")/this.state.countryData[0].total_cases.replace(/,/g,"")*100),separator:","}),"%"),r.a.createElement("h5",null,"DEATHS RATIO"))),r.a.createElement("form",{action:"",className:"country-select"},r.a.createElement("label",null,"You can change country by clicking below"),r.a.createElement("div",{className:"select-wrap"},r.a.createElement(f.a,null),r.a.createElement("select",{onChange:function(t){return e.setCountryName(t)}},this.state.countryNames.map((function(e,t){if(""!==e)return"Bangladesh"===e?r.a.createElement("option",{selected:e,key:t},e):r.a.createElement("option",{value:e,key:t},e)}))))),r.a.createElement("div",{className:"bg-shade"})))}}]),a}(n.Component),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"landing-sec"},r.a.createElement("div",{className:"container d-flex justify-content-between flex-column flex-lg-row"},r.a.createElement(y,{globalData:this.props.globalData}),r.a.createElement(D,{countryData:this.props.countryData,countryNames:this.props.countryNames})))}}]),a}(n.Component),O=a(14),_=a.n(O),T=a(15),A=a.n(T),j=a(16),C=a.n(j),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"toggleClick",value:function(){this.header.classList.contains("nav-open")?this.header.classList.remove("nav-open"):this.header.classList.add("nav-open")}},{key:"render",value:function(){var e=this;return r.a.createElement("header",{className:"d-flex align-items-center",ref:function(t){return e.header=t}},r.a.createElement("div",{className:"container"},r.a.createElement("nav",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("a",{href:"/",className:"navbar-brand d-flex justify-content-center align-items-center"},r.a.createElement("img",{src:_.a,alt:"logo"})," ",r.a.createElement("h3",null,"COVID-19 UPDATE")),r.a.createElement("div",{className:"nav-toggler",onClick:function(t){return e.toggleClick(t)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("ul",{className:"nav-wrap"},r.a.createElement("li",{className:"d-flex align-items-center"},r.a.createElement("img",{src:A.a,alt:"home"}),r.a.createElement("a",{href:"/"},"Stay Home")),r.a.createElement("li",{className:"d-flex align-items-center"},r.a.createElement("img",{src:C.a,alt:"home"}),r.a.createElement("a",{href:"/"},"Stay Safe"))))))}}]),a}(n.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"preloader"},r.a.createElement("div",{className:"preloader-container d-flex align-items-center"},r.a.createElement("span",{className:"animated-preloader"})))}}]),a}(n.Component),k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={globalData:"",isLoadedGlobal:!1,countryData:[],isLoadedCountry:!1,countryNames:[],isCountryNamesLoaded:!1,allData:[],isAllDataLoaded:!1},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"2a055a73eamshcbf6774bbc5e126p1fbba3jsnb7ba8de81244"}}).then((function(e){return e.json()})).then((function(t){for(var a in t)t[a]=Number(t[a].replace(/,/g,""));e.setState({isLoadedGlobal:!0,globalData:t})})),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country=Bangladesh",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"2a055a73eamshcbf6774bbc5e126p1fbba3jsnb7ba8de81244"}}).then((function(e){return e.json()})).then((function(t){var a=[],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];t.stat_by_country.map((function(e){var t=new Date(e.record_date),a=t.getDate()+"-"+n[t.getMonth()]+"-"+t.getFullYear();e.record_date=a}));for(var r=function(e){var r=new Date(t.stat_by_country[t.stat_by_country.length-1].record_date);r.setDate(r.getDate()-e);var o=r.getDate()+"-"+n[r.getMonth()]+"-"+r.getFullYear(),l=t.stat_by_country.filter((function(e){return e.record_date===o}));a.push(l[l.length-1])},o=0;o<=6;o++)r(o);e.setState({countryData:a,isLoadedCountry:!0})})),fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/affected.php",{method:"GET",headers:{"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com","x-rapidapi-key":"2a055a73eamshcbf6774bbc5e126p1fbba3jsnb7ba8de81244"}}).then((function(e){return e.json()})).then((function(t){var a=Object(c.a)(t.affected_countries);a.sort(),e.setState({countryNames:a,isCountryNamesLoaded:!0})}))}},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"App"},this.state.isLoadedGlobal&&this.state.isLoadedCountry&&this.state.isCountryNamesLoaded?r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(N,{globalData:this.state.globalData,countryData:this.state.countryData,countryNames:this.state.countryNames})):r.a.createElement(w,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.47d72aaa.chunk.js.map