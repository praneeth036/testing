(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{18:function(e,t,a){e.exports=a(28)},23:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),c=a.n(r),m=a(2),o=a(3),u=a(5),s=a(4),i=(a(23),l.a.createContext()),d=i.Provider,E=i.Consumer,p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E,null,(function(e){return l.a.createElement("div",null,e)})),l.a.createElement("div",null,l.a.createElement("nav",{class:"navbar navbar-light bg-light"},l.a.createElement("h1",null,"Welcome nims!"),l.a.createElement("a",{href:"www.google.com"},"Click here for Patient-record entry"),l.a.createElement("input",{type:"button",className:"btn btn-outline-success my-2 my-sm-0",value:"logout"}))))}}]),a}(l.a.Component),h=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null))}}]),a}(l.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"w3-panel w3-card-4"},l.a.createElement("p",null,l.a.createElement("h4",null,"Hospital Name : Nizam Institute of Medical Sciences"),l.a.createElement("h4",null,"Email: apolo@gmail.com"),l.a.createElement("h4",null,"Hospital ID: 100")))}}]),a}(l.a.Component),v=a(17),f=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"w3-panel w3-card-4"},l.a.createElement("p",null,l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("input",{className:"form-control",type:"text",name:"patient_id",placeholder:"Enter patient ID"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"btn btn-outline-success my-2 my-sm-0",value:"Search"}))))}}]),a}(l.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"},l.a.createElement("table",{className:"table table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Hospital"),l.a.createElement("th",{scope:"col"},"Patient ID"),l.a.createElement("th",{scope:"col"},"Admission Date"),l.a.createElement("th",{scope:"col"},"Discharge Date"),l.a.createElement("th",{scope:"col"},"Doctor"),l.a.createElement("th",{scope:"col"},"Remarks"),l.a.createElement("th",{scope:"col"},"Support Documents"),l.a.createElement("th",{scope:"col"},"Status"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"100"),l.a.createElement("td",null,"3"),l.a.createElement("td",null,"2020-07-04"),l.a.createElement("td",null,"2020-07-06"),l.a.createElement("td",null,"567"),l.a.createElement("td",null,"leg fracture"),l.a.createElement("td",null,l.a.createElement("a",{href:"www.medrex.ml"},"View Medical Reports")),l.a.createElement("td",null,"Discharged to take rest for 3 months")),l.a.createElement("tr",null,l.a.createElement("td",null,"100"),l.a.createElement("td",null,"4"),l.a.createElement("td",null,"2020-02-01"),l.a.createElement("td",null,"2020-02-0"),l.a.createElement("td",null,"456"),l.a.createElement("td",null,"Jandice!"),l.a.createElement("td",null,l.a.createElement("a",{href:"www.medrex.ml"},"View Medical Reports")),l.a.createElement("td",null,"Recovred")))))}}]),a}(l.a.Component),y=function(){var e=Object(v.a)({initialValues:{patientno:"",admission_date:"",discharge_date:"",doctor_id:"",remarks:"",status:"",support:"",hospital_id:"12"},onSubmit:function(e){alert(JSON.stringify(e))}});return l.a.createElement("div",null,l.a.createElement(d,{value:""},l.a.createElement(h,null),l.a.createElement(b,null),l.a.createElement(f,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g,null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-white bg-dark text-center"},"Patient record entry form"),l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-6 m-auto d-block"},l.a.createElement("form",{onSubmit:e.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"user"}," Patient No. "),l.a.createElement("input",{type:"text",name:"patientno",id:"user",class:"form-control",value:e.values.patientno,onChange:e.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"admission_date"},"Date of Admission"),l.a.createElement("input",{type:"date",name:"admission_date",id:"admission_date",class:"form-control",value:e.values.admission_date,onChange:e.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"discharge_date"},"Date of Discharge"),l.a.createElement("input",{type:"date",name:"discharge_date",id:"discharge_date",class:"form-control",value:e.values.discharge_date,onChange:e.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"doctor_id"},"Doctor ID"),l.a.createElement("input",{type:"text",name:"doctor_id",id:"doctor_id",class:"form-control",value:e.values.doctor_id,onChange:e.handleChange})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"remarks"},"Remarks"),l.a.createElement("textarea",{id:"remarks",name:"remarks",class:"md-textarea form-control",rows:"3",value:e.values.remarks,onChange:e.handleChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"support"}," Support Documents Link"),l.a.createElement("input",{type:"text",name:"support",id:"support",class:"form-control",value:e.values.support,onChange:e.handleChange})),l.a.createElement("div",{class:"form-group"},l.a.createElement("label",{for:"status"}," Status"),l.a.createElement("input",{type:"text",name:"status",id:"status",class:"form-control",value:e.values.status,onChange:e.handleChange})),l.a.createElement("input",{type:"submit",name:"submit",value:"Submit",class:"btn btn-success"})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))},w=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state={name:"william"},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,{value:""},l.a.createElement(y,null)))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.b7df2072.chunk.js.map