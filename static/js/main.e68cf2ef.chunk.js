(this.webpackJsonptesting=this.webpackJsonptesting||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(20),r=a.n(s),i=a(6),c=a(7),o=a(9),m=a(8),d=(a(27),a(11)),u=a(1),p=a(13),h=a(15),E=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).uploadDetails=function(){var e={patientno:n.state.initialValues.patientno,admission_date:n.state.initialValues.admission_date,discharge_date:n.state.initialValues.discharge_date,doctor_id:n.state.initialValues.doctor_id,remarks:n.state.initialValues.remarks,status:n.state.initialValues.status,support:n.state.initialValues.support,hospital_id:n.state.initialValues.hospital_id};n.setState({spin:1}),fetch("https://medrex.herokuapp.com/upload-record.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){1===e.success?n.setState({popup:1,spin:0,initialValues:[]}):n.setState({spin:0})}))},n.changeHandler=function(e){var t=e.target.name,a=e.target.value;n.setState({initialValues:Object(h.a)(Object(h.a)({},n.state.initialValues),{},Object(p.a)({},t,a))})},n.state={spin:0,popup:0,initialValues:{patientno:"",admission_date:"",discharge_date:"",doctor_id:"",remarks:"",status:"",support:"",hospital_id:"",inserted:""}},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-white bg-dark text-center"},"Patient record entry form"),l.a.createElement("br",null),l.a.createElement("div",{className:"col-lg-6 m-auto d-block"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"user"}," Patient No. "),l.a.createElement("input",{type:"text",name:"patientno",id:"user",className:"form-control",value:this.state.initialValues.patientno,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"admission_date"},"Date of Admission"),l.a.createElement("input",{type:"date",name:"admission_date",id:"admission_date",className:"form-control",value:this.state.initialValues.admission_date,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"discharge_date"},"Date of Discharge"),l.a.createElement("input",{type:"date",name:"discharge_date",id:"discharge_date",className:"form-control",value:this.state.initialValues.discharge_date,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"doctor_id"},"Doctor ID"),l.a.createElement("input",{type:"text",name:"doctor_id",id:"doctor_id",className:"form-control",value:this.state.initialValues.doctor_id,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"remarks"},"Remarks"),l.a.createElement("textarea",{id:"remarks",name:"remarks",className:"md-textarea form-control",rows:"3",value:this.state.initialValues.remarks,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"support"}," Support Documents Link"),l.a.createElement("input",{type:"text",name:"support",id:"support",className:"form-control",value:this.state.initialValues.support,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"status"}," Status"),l.a.createElement("input",{type:"text",name:"status",id:"status",className:"form-control",value:this.state.initialValues.status,onChange:this.changeHandler})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"status"}," Hospital-ID"),l.a.createElement("input",{type:"text",name:"hospital_id",id:"hospital_id",className:"form-control",value:this.state.initialValues.hospital_id,onChange:this.changeHandler}))),l.a.createElement("button",{onClick:this.uploadDetails,className:"btn btn-success"},"Upload"),l.a.createElement("br",null),l.a.createElement("br",null),1===this.state.popup?l.a.createElement("div",{class:"alert alert-success"},l.a.createElement("strong",null,"Success!")," Patient-info Recorded.."):null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null))))}}]),a}(l.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState({hospital_id:e.target.value})},n.changeHandler1=function(e){n.setState({patient_id:e.target.value})},n.getpatientdetails=function(){var e={hospital_id:n.state.hospital_id,patient_id:n.state.patient_id};n.setState({users:[],spin:1}),fetch("https://medrex.herokuapp.com/get-patient.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){1===e.success?n.setState({users:e.users,spin:0}):n.setState({spin:0})}))},n.getdetails=function(){var e={hospital_id:n.state.hospital_id};n.setState({spin:1}),fetch("https://medrex.herokuapp.com/hospital-fetch.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){1===e.success?n.setState({hospitaldetails:e.users,hide:!0,spin:0}):n.setState({spin:0})}))},n.state={spin:0,patient_id:"",hide:!1,hospital_id:"",hospitaldetails:[],users:[]},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,!0===this.state.hide?l.a.createElement("div",null,this.state.hospitaldetails.map((function(e,t){return l.a.createElement("div",{className:"w3-panel w3-card-4",key:t},l.a.createElement("h2",{key:"username"+t},"Welcome ",e.username),l.a.createElement("h4",{key:"hospitalname"+t},l.a.createElement("b",null,"Hospital Name: "),e.hospital_name),l.a.createElement("h4",{key:"contact"+t},l.a.createElement("b",null,"Contact :")," ",e.contact),l.a.createElement("h4",{key:"hospital_id"+t},l.a.createElement("b",null,"Hospital ID:"),e.hospital_id))})),l.a.createElement("div",{className:"w3-panel w3-card-4"},l.a.createElement("p",null,l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("label",{className:"font-weight-bold"},"Enter Patient-ID"),l.a.createElement("input",{className:"form-control",type:"text",name:"patient_id",placeholder:"Enter patient ID",value:this.state.patient_id,onChange:this.changeHandler1}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:this.getpatientdetails},"Get details")),l.a.createElement("br",null)),l.a.createElement("div",{class:"container"},l.a.createElement("table",{className:"table table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Patient ID"),l.a.createElement("th",{scope:"col"},"Admission Date"),l.a.createElement("th",{scope:"col"},"Discharge Date"),l.a.createElement("th",{scope:"col"},"Doctor"),l.a.createElement("th",{scope:"col"},"Remarks"),l.a.createElement("th",{scope:"col"},"Support Documents"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Hospital"))),l.a.createElement("tbody",null,this.state.users.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{key:"aadhar_no"+t},e.aadhar_no),l.a.createElement("td",{key:"admission_date"+t},e.admission),l.a.createElement("td",{key:"discharge_date"+t},e.discharge),l.a.createElement("td",{key:"doctor_id"+t},e.doctor_id),l.a.createElement("td",{key:"remarks"+t},e.remarks),l.a.createElement("td",{key:"support"+t},"Not accessible!"!==e.support?l.a.createElement("a",{href:e.support},"Click here View Medical Documents"):l.a.createElement("p",null,"Not Accessible!")),l.a.createElement("td",{key:"status"+t},e.status),l.a.createElement("td",{key:"hospital_id"+t},e.hospital_id))}))))),l.a.createElement("div",null,1===this.state.spin?l.a.createElement("div",{class:"spinner-border",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):null)):l.a.createElement("div",{className:"w3-panel w3-card-4"},l.a.createElement("p",null,l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("label",{className:"font-weight-bold"},"Hospital-ID"),l.a.createElement("input",{className:"form-control",type:"text",name:"hospital_id",placeholder:"Enter patient ID",value:this.state.hospital_id,onChange:this.changeHandler}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("button",{onClick:this.getdetails,className:"btn btn-primary"},"Login")),l.a.createElement("br",null),l.a.createElement("div",null,1===this.state.spin?l.a.createElement("div",{class:"spinner-border",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):null)))}}]),a}(l.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState({id:e.target.value})},n.getdetails=function(){var e={id:n.state.id};n.setState({spin:1}),fetch("https://medrex.herokuapp.com/fetch-user.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){1===e.success?(n.setState({spin:0}),n.setState({message:"Found!"}),n.setState({users:e.users})):(n.setState({message:"Invalid!",users:[]}),n.setState({spin:0}))}))},n.state={spin:0,users:[],id:"",message:""},n}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"w3-panel w3-card-4"},l.a.createElement("p",null,l.a.createElement("form",null,l.a.createElement("br",null),l.a.createElement("label",{className:"font-weight-bold"},"Patient-ID"),l.a.createElement("input",{className:"form-control",type:"text",name:"patient_id",placeholder:"Enter patient ID",value:this.state.id,onChange:this.changeHandler}),l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("button",{className:"btn btn-outline-success my-2 my-sm-0",onClick:this.getdetails},"Get details")),l.a.createElement("br",null)),"Invalid!"===this.state.message?l.a.createElement("div",{className:"alert alert-danger",role:"alert"},l.a.createElement("strong",null,"Oh snap! "),"No User Exists"):null,1===this.state.spin?l.a.createElement("div",{class:"spinner-border",role:"status"},l.a.createElement("span",{class:"sr-only"},"Loading...")):null,l.a.createElement("table",{className:"table table-stripped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Patient ID"),l.a.createElement("th",{scope:"col"},"Admission Date"),l.a.createElement("th",{scope:"col"},"Discharge Date"),l.a.createElement("th",{scope:"col"},"Doctor"),l.a.createElement("th",{scope:"col"},"Remarks"),l.a.createElement("th",{scope:"col"},"Support Documents"),l.a.createElement("th",{scope:"col"},"Status"),l.a.createElement("th",{scope:"col"},"Hospital"))),l.a.createElement("tbody",null,this.state.users.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",{key:"aadhar_no"+t},e.aadhar_no),l.a.createElement("td",{key:"admission_date"+t},e.admission),l.a.createElement("td",{key:"discharge_date"+t},e.discharge),l.a.createElement("td",{key:"doctor_id"+t},e.doctor_id),l.a.createElement("td",{key:"remarks"+t},e.remarks),l.a.createElement("td",{key:"support"+t},e.support),l.a.createElement("td",{key:"status"+t},e.status),l.a.createElement("td",{key:"hospital_id"+t},e.hospital_id))})))))}}]),a}(l.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-sm bg-light "},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",exact:!0,activeClassName:"testclass",to:"/hospital"},"Hospital Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",exact:!0,activeClassName:"testclass",to:"/individual"},"Individual Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(d.b,{className:"nav-link",exact:!0,activeClassName:"testclass",to:"/upload"},"Click here to upload patient-record")))),l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/hospital",component:b}),l.a.createElement(u.a,{path:"/individual",component:g}),l.a.createElement(u.a,{path:"/upload",component:E})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d.a,null,l.a.createElement(v,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.e68cf2ef.chunk.js.map