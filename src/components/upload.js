import React from 'react';




export default class Upload extends React.Component{
    constructor(props){
        super(props);
        this.state={
            spin:0,
            popup:0,
            initialValues:{
                patientno:'',
                admission_date:'',
                discharge_date:'',
                doctor_id:'',
                remarks:'',
                status:'',
                support:'',
                hospital_id:'',
                inserted:'',
                
            },
        }
    }
    uploadDetails=()=>{
        let x={
            patientno:this.state.initialValues.patientno,
            admission_date:this.state.initialValues.admission_date,
            discharge_date:this.state.initialValues.discharge_date,
            doctor_id:this.state.initialValues.doctor_id,
            remarks:this.state.initialValues.remarks,
            status:this.state.initialValues.status,
            support:this.state.initialValues.support,
            hospital_id:this.state.initialValues.hospital_id
        }
        this.setState({
            spin:1
        })
        
            fetch("https://medrex.herokuapp.com/upload-record.php",{
                method:'POST',
                headers:{'Content-type':'application/json'},
                body:JSON.stringify(x),
            })
            .then(r=>r.json()).then(res=>{
                if(res.success===1){
                   this.setState({
                       popup:1,
                       spin:0,
                       initialValues:[] //Empty the values on submit button to avoid duplicate entry!
                   })
                }
                else{
                    this.setState({spin:0})
                }
            })
       
    }


    changeHandler=e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            initialValues:{
                ...this.state.initialValues,
                [name]:value
            }
            

        });
        
    }


    render(){
        return(
            <div>
                
                <div className="container">
                <h1 className="text-white bg-dark text-center">Patient record entry form</h1>
                <br/>
                <div className="col-lg-6 m-auto d-block">
            <form >
                <div className="form-group">
                                <label htmlFor="user"> Patient No. </label>
                                <input type="text" name="patientno" id="user" className="form-control" value={this.state.initialValues.patientno}
                    onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                                <label htmlFor="admission_date">Date of Admission</label>
                                <input type="date" name="admission_date" id="admission_date" className="form-control" value={this.state.initialValues.admission_date}
                    onChange={this.changeHandler}/>
                                
                </div>
                        <div className="form-group">
                        <label htmlFor="discharge_date">Date of Discharge</label>
                                <input type="date" name="discharge_date" id="discharge_date" className="form-control"value={this.state.initialValues.discharge_date}
                    onChange={this.changeHandler}/>
                        </div>
        <div className="form-group">
                                <label htmlFor="doctor_id">Doctor ID</label>
                                <input type="text" name="doctor_id" id="doctor_id" className="form-control" value={this.state.initialValues.doctor_id}
                    onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="remarks">Remarks</label>
                                <textarea id="remarks" name="remarks" className="md-textarea form-control" rows="3" value={this.state.initialValues.remarks}
                    onChange={this.changeHandler}></textarea>
                                
                        </div>
                
                
                <div className="form-group">
                                <label htmlFor="support"> Support Documents Link</label>
                                <input type="text" name="support" id="support" className="form-control" value={this.state.initialValues.support}
                    onChange={this.changeHandler}/>
                        </div>
                        <div className="form-group">
                                <label htmlFor="status"> Status</label>
                                <input type="text" name="status" id="status" className="form-control" value={this.state.initialValues.status}
                    onChange={this.changeHandler}/>
                    
                        </div>
                        <div className="form-group">
                                <label htmlFor="status"> Hospital-ID</label>
                                <input type="text" name="hospital_id" id="hospital_id" className="form-control" value={this.state.initialValues.hospital_id}
                    onChange={this.changeHandler}/>
                    
                        </div>
                        
                                

            </form>

            <button onClick={this.uploadDetails} className="btn btn-success">Upload</button>
            <br/>
            <br/>{this.state.popup===1?<div class="alert alert-success">
  <strong>Success!</strong> Patient-info Recorded..
</div>:null}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
            </div>
        );
    }







}























/*

const Upload=()=>{
    
const formik=useFormik({
    initialValues:{
        patientno:'',
        admission_date:'',
        discharge_date:'',
        doctor_id:'',
        remarks:'',
        status:'',
        support:'',
        hospital_id:'12'
        
    },
    onSubmit:values=>{
        alert(JSON.stringify(values))
    }
});
    return(
        <div>
            
            
            
        </div>
    )


}








/*
class ComponentA extends React.Component{

    constructor(props){
        super(props);
        this.state={
            employee:{
                Id:'',
                Name:'',
                Location:'',
                Salary:''
            }
        }
    }


    changeHandler=e=>{
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            employee:{
                ...this.state.employee,
                [name]:value
            }
            

        });
        
    }

    oncreateEmployee=()=>{
        console.log(this.state.employee)
    }
    


    render(){
        
        return (
            
            <div>
                <p>Component  A</p>
                <ComponentB/>
                <h2>New form</h2>
                <form>
                    <p>
                        <label>Employee ID:<input type="text" name="Id"
                        value={this.state.employee.Id} onChange={this.changeHandler}
                        ></input></label>
                    </p>
                    <p>
                        <label>Employee Name:<input type="text" name="Name"
                        value={this.state.employee.Name} onChange={this.changeHandler}
                        ></input></label>
                    </p>
                    <p>
                        <label>Employee Location:<textarea name="Location"
                        value={this.state.employee.Location} onChange={this.changeHandler}
                        ></textarea></label>
                    </p>
                    <p>
                        <label>Employee Salary:<input type="text" name="Salary"
                        value={this.state.employee.Salary} onChange={this.changeHandler}
                        ></input></label>
                    </p>
                </form>
                <button onClick={this.oncreateEmployee}>Create</button>
            </div>
        

            
        );
    }
}



*/
