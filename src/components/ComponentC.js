import React from 'react';
import { UserConsumer } from './context';


class ComponentC extends React.Component{
    constructor(props){
        super(props);
    }
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
            </div>
        );
    }
}
export default ComponentC;