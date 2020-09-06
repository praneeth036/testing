import React from 'react';
import './App.css';
//import ComponentA from './components/ComponentA'
//import {UserProvider} from './components/context.js'
import {Route,NavLink, Switch} from 'react-router-dom'
import Upload from './components/upload';
//import Home from './components/home'
import Hospitallogin from './components/hospitallogin'
import Userlogin from './components/userlogin'


export default class App extends React.Component{
    render(){
      return (
        <div>
          <nav className="navbar navbar-expand-sm bg-light ">


<ul className="navbar-nav">
  <li className="nav-item">
  <NavLink className="nav-link" exact activeClassName="testclass" to="/hospital">Hospital Login</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" exact activeClassName="testclass" to="/individual">Individual Login</NavLink>
  </li>
  <li className="nav-item">
  <NavLink className="nav-link" exact activeClassName="testclass" to="/upload">Click here to upload patient-record</NavLink>
  </li>
</ul>

</nav>
        
        
        
        <Switch>
        <Route path="/hospital" component={Hospitallogin}></Route>
        <Route path="/individual" component={Userlogin}></Route>
        <Route path="/upload" component={Upload}></Route>
        </Switch>
        </div>

      );
    }

  }
