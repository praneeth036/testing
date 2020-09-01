import React from 'react';
import './App.css';
import ComponentA from './components/ComponentA'
import {UserProvider} from './components/context.js'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name:"william"
    }
  }
  render(){
    return (
      <div >
        <UserProvider value="praneeth">
        <ComponentA/>
        </UserProvider>

        </div>
    )
  }
  

  }
