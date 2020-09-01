import React from 'react';
import ComponentC from './ComponentC'
class ComponentB extends React.Component{
    
    render(){
        
        return (
            <div>
                
                <ComponentC/>
            </div>
        );
    }
}
export default ComponentB;