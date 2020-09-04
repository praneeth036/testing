import React from 'react';
import { UserConsumer } from './context';


class ComponentC extends React.Component{
    
    render(){
        
        return (
            <div>
                <UserConsumer>
                    {
                        (value)=>{
                            return <div>{value}</div>
                        }
                    }
                </UserConsumer>
                <div>
                <nav class="navbar navbar-light bg-light">
                <h1>Welcome nims!</h1>
                <a href="www.google.com">Click here for Patient-record entry</a>

                <input type="button" className="btn btn-outline-success my-2 my-sm-0"  value="logout"/>
                </nav>
            </div>
            </div>
        );
    }
}
export default ComponentC;