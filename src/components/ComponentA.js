import React from 'react';
import ComponentB from './ComponentB';
class ComponentA extends React.Component{
    render(){
        
        return (
            <div>
                <p>Component A </p>
                <ComponentB/>
            </div>
        );
    }
}
export default ComponentA;