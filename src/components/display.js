import React from 'react';

class Display extends React.Component{
    
    render(){
        
        return (
            <div class="container">
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th scope="col">Hospital</th>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Admission Date</th>
                            <th scope="col">Discharge Date</th>
                            <th scope="col">Doctor</th>
                            <th scope="col">Remarks</th>
                            <th scope="col">Support Documents</th>
                            <th scope="col">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>100</td>
                            <td>3</td>
                            <td>2020-07-04</td>
                            <td>2020-07-06</td>
                            <td>567</td>
                            <td>leg fracture</td>
                            <td><a href="www.medrex.ml">View Medical Reports</a></td>
                            <td>Discharged to take rest for 3 months</td>
                        </tr>
                        <tr>
                            <td>100</td>
                            <td>4</td>
                            <td>2020-02-01</td>
                            <td>2020-02-0</td>
                            <td>456</td>
                            <td>Jandice!</td>
                            <td><a href="www.medrex.ml">View Medical Reports</a></td>
                            <td>Recovred</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        );
    }
}
export default Display;