import React from 'react';

class Testrokz extends React.Component{
    
    render(){
        
        return (
            <div className="w3-panel w3-card-4">
                <p>
                    <form >
                        <br/>
                <input className="form-control" type="text" name="patient_id" placeholder="Enter patient ID"/><br/><br/>
                <input type="submit" className="btn btn-outline-success my-2 my-sm-0" value="Search"/>
                    </form>
                </p>
            </div>
        );
    }
}
export default Testrokz;