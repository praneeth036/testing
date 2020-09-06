import React from 'react';



class Hospitallogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spin:0,
            patient_id:'',
            hide:false,
            hospital_id:'',
            hospitaldetails:[],
            users:[]
            
        }
    }
    changeHandler=e=>{
            
            this.setState(
                {
                    hospital_id:e.target.value
                }
            )

    }
    changeHandler1=e=>{
            
        this.setState(
            {
                patient_id:e.target.value
            }
        )

}
    getpatientdetails=()=>{
        let x={
            hospital_id:this.state.hospital_id,
            patient_id:this.state.patient_id
            
        }
        this.setState({
            users:[],
            spin:1
        })
        
        fetch("https://medrex.herokuapp.com/get-patient.php",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(x)
        })
        .then(g=>g.json()).then(res=>{
            if(res.success===1){
                
                this.setState({
                    users:res.users,
                    spin:0
                })
            }
            else{
                this.setState({
                    spin:0
                })
            }

        })
    }
    getdetails=()=>{
        
        let x={
            hospital_id:this.state.hospital_id
        }
        this.setState({
            spin:1
        })
        fetch("https://medrex.herokuapp.com/hospital-fetch.php",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(x)

        })
        .then(r=>r.json()).then(res=>{
            if(res.success===1){

                this.setState({
                    hospitaldetails:res.users,
                    hide:true,
                    spin:0
                })
                
            }
            else{
                this.setState({
                    spin:0
                })
            }
            //document.write(JSON.stringify(this.state.hospitaldetails[0]))

        })
    }


    render(){
        return(
            
            <div>
                
                {this.state.hide===true?<div>{this.state.hospitaldetails.map((res,index)=>
                
                <div className="w3-panel w3-card-4" key={index}>
                <h2 key={"username"+index}>Welcome {res.username}</h2>
                <h4 key={"hospitalname"+index}><b>Hospital Name: </b>{res.hospital_name}</h4>
                <h4 key={"contact"+index}><b>Contact :</b> {res.contact}</h4>
                <h4 key={"hospital_id"+index}><b>Hospital ID:</b>{res.hospital_id}</h4>
                
                </div>)}

                <div className="w3-panel w3-card-4">
                <p>
                    <form >
                        <br/>
                        <label className="font-weight-bold">Enter Patient-ID</label>
                <input className="form-control" type="text" name="patient_id" placeholder="Enter patient ID" value={this.state.patient_id} onChange={this.changeHandler1}/><br/><br/>
                
                    </form>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.getpatientdetails}>Get details</button>
                </p>
                <br/>
            </div>

               
            <div class="container">
                <table className="table table-stripped">
                    <thead>
                    <tr>
                            
                            <th scope="col">Patient ID</th>
                            <th scope="col">Admission Date</th>
                            <th scope="col">Discharge Date</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Support Documents</th>
                            <th scope="col">Status</th>
                            <th scope="col">Hospital</th>

                        </tr>
                    </thead>
                    <tbody>
        {this.state.users.map((user,index)=>(
            <tr key={index}>
                <td key={"aadhar_no"+index}>{user.aadhar_no}</td>
        <td key={"admission_date"+index}>{user.admission}</td>
        <td key={"discharge_date"+index}>{user.discharge}</td>
        <td key={"doctor_id"+index}>{user.doctor_id}</td>
        <td key={"remarks"+index}>{user.remarks}</td>
        <td key={"support"+index}>{user.support!=='Not accessible!'?<a href={user.support}>Click here View Medical Documents</a>:<p>Not Accessible!</p>}</td>
        <td key={"status"+index}>{user.status}</td>
        <td key={"hospital_id"+index}>{user.hospital_id}</td>
        </tr>
            ))} 
            </tbody>
            </table>
                </div>
                <div>{this.state.spin===1?<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:null}</div>

                </div>:
                

<div className="w3-panel w3-card-4">
<p>
    <form >
        <br/>
        <label className="font-weight-bold">Hospital-ID</label>
<input className="form-control" type="text" name="hospital_id" placeholder="Enter patient ID" value={this.state.hospital_id} onChange={this.changeHandler}/><br/><br/>

    </form>
    <button onClick={this.getdetails} className="btn btn-primary">Login</button>
</p>
<br/>
        <div>{this.state.spin===1?<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:null}</div>
</div>

                
    }
            </div>
            
        );
    }
    
}
export default Hospitallogin;