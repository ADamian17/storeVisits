(this["webpackJsonpdor-challenge"]=this["webpackJsonpdor-challenge"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),o=a.n(c),s=a(2),l=a.n(s),i=a(14),m=a(15),d=a(17),u=a(16),h=a(18),p=a(3),v=a.n(p),E=(a(42),function(e){var t={width:"".concat(e.daysCount.in_count,"px"),height:"20px",backgroundColor:"#000000"},a=e.daysCount.date,n=new Date(a).toDateString().split(/[ ,]+/),c="".concat(n[0]," ").concat(n[2]),o=e.daysCount.in_count;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-3"},r.a.createElement("h5",{className:"card-title text-center mt-2"},c)),r.a.createElement("div",{className:"col-6"},r.a.createElement("div",{className:"mt-2 pogressBar",style:t})),r.a.createElement("div",{className:"col-3"},r.a.createElement("h5",{className:"card-title mt-2 text-center"},o))))))}),g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={chartData:[],token:"",requestedAt:""},a.getData=function(){var e,t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.a.awrap(v.a.post("http://api.getdor.com/v1/tokens",{refresh_token:"wSGgSqmSDKS4YPfMSHZ4YyiOpiNv"}));case 2:return e=n.sent,n.next=5,l.a.awrap(v.a.get("http://api.getdor.com/v1/teams/4/stores/4/days",{headers:{authorization:"Bearer ".concat(e.data.data.token),"Content-Type":"application/json"}}));case 5:t=n.sent,a.setState({chartData:t.data.data,token:e.data.data.token,requestedAt:(new Date).toLocaleTimeString()});case 7:case"end":return n.stop()}}))},a.handleRefresh=function(){a.getData()},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.state.chartData.map((function(e,t){return r.a.createElement(E,{key:t,daysCount:e})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"row p-2"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",className:"btn btn-link",onClick:this.handleRefresh},"Refresh"),r.a.createElement("span",null,r.a.createElement("b",null,"Last update at ",this.state.requestedAt)))),r.a.createElement("div",{className:"row p-2"},r.a.createElement("div",{className:"col"},e)))}}]),t}(n.Component);a(43);var f=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark my-header"},r.a.createElement("h3",{className:"navTitle"},"Store Visits")),r.a.createElement("main",{role:"main",className:"container"},r.a.createElement("div",{className:"my-3 p-3 bg-white rounded shadow-sm"},r.a.createElement(g,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.277ad3d9.chunk.js.map