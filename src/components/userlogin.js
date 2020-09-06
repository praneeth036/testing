import React from 'react';

class Userlogin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spin:0,
            users:[],
            id:'',
            message:''
        }
    }
    changeHandler=e=>{
            
            this.setState(
                {
                    id:e.target.value
                }
            )

    }
    getdetails=()=>{
        let x={
            id:this.state.id
        }
        this.setState({
            spin:1
        })
        fetch('https://medrex.herokuapp.com/fetch-user.php',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(x),
        })
        
        .then(r=>r.json()).then(res=>{
            
            if(res.success===1){
                this.setState({
                    spin:0
                })
                
                //document.write(JSON.stringify(res.users))
                
                this.setState({
                    
                    message:'Found!'
                })
                this.setState({ users: res.users })
                //res.users.forEach((x)=>console.log(x.aadhar_no,x.admission));
                
            }
            else{
                this.setState({
                    message:'Invalid!',
                    users:[]
                })
                this.setState({
                    spin:0
                })
            }
        })
    }
    
    render(){
        return(
            <div>
            <div className="w3-panel w3-card-4">
                <p>
                    <form >
                        <br/>
                        <label className="font-weight-bold">Patient-ID</label>
                <input className="form-control" type="text" name="patient_id" placeholder="Enter patient ID" value={this.state.id} onChange={this.changeHandler}/><br/><br/>
                
                    </form>
                    <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.getdetails} >Get details</button>
                </p>
                <br/>
            </div>
            
            
        
        
        {this.state.message==='Invalid!'?<div className="alert alert-danger" role="alert">
  <strong>Oh snap! </strong>Some error occured!
</div>:null}
{this.state.spin===1?<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:null}
        
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
        <td key={"support"+index}>{user.support}</td>
        <td key={"status"+index}>{user.status}</td>
        <td key={"hospital_id"+index}>{user.hospital_id}</td>
        </tr>
            ))} 
            </tbody>
            </table>
        
                
            
        </div>
        
        );
    }
    
}
export default Userlogin;