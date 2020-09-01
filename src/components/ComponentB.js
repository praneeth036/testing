import React from 'react';
import ComponentC from './ComponentC'
class ComponentB extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        
        return (
            <div>
                <p>Component B </p>
                <ComponentC/>
            </div>
        );
    }
}
export default ComponentB;