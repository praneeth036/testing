import React from 'react';
import ComponentB from './ComponentB';
import Detaial from './detaial'
import {useFormik} from 'formik';
import { UserProvider } from './context.js';
import Testrokz from './testrokz';
import Display from './display';

const ComponentA=()=>{
    
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
            <UserProvider value="">
            <ComponentB/>
            <Detaial/>
            <Testrokz/>
            </UserProvider>
            <br/>
            <br/>
            <br/>
            <br/>
            <Display/>
            <br/><br/>
            <br/>
            <br/>
            <br/>
            <br/>
            
            <div className="container">
                <h1 className="text-white bg-dark text-center">Patient record entry form</h1>
                <br/>
                <div className="col-lg-6 m-auto d-block">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                                <label htmlFor="user"> Patient No. </label>
                                <input type="text" name="patientno" id="user" class="form-control" value={formik.values.patientno}
                    onChange={formik.handleChange}/>
                </div>
                <div className="form-group">
                                <label htmlFor="admission_date">Date of Admission</label>
                                <input type="date" name="admission_date" id="admission_date" class="form-control" value={formik.values.admission_date}
                    onChange={formik.handleChange}/>
                                
                </div>
                        <div className="form-group">
                        <label htmlFor="discharge_date">Date of Discharge</label>
                                <input type="date" name="discharge_date" id="discharge_date" class="form-control"value={formik.values.discharge_date}
                    onChange={formik.handleChange}/>
                        </div>
        <div className="form-group">
                                <label htmlFor="doctor_id">Doctor ID</label>
                                <input type="text" name="doctor_id" id="doctor_id" class="form-control" value={formik.values.doctor_id}
                    onChange={formik.handleChange}/>
                        </div>
                        <div class="form-group">
                                <label for="remarks">Remarks</label>
                                <textarea id="remarks" name="remarks" class="md-textarea form-control" rows="3" value={formik.values.remarks}
                    onChange={formik.handleChange}></textarea>
                                
                        </div>
                
                
                <div className="form-group">
                                <label htmlFor="support"> Support Documents Link</label>
                                <input type="text" name="support" id="support" class="form-control" value={formik.values.support}
                    onChange={formik.handleChange}/>
                        </div>
                        <div class="form-group">
                                <label for="status"> Status</label>
                                <input type="text" name="status" id="status" class="form-control" value={formik.values.status}
                    onChange={formik.handleChange}/>
                    
                        </div>
                        
                                <input type="submit" name="submit" value="Submit" class="btn btn-success">
                      
                        
                </input>

            </form>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
        </div>
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
export default ComponentA;