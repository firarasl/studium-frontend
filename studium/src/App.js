import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MyProfile from './routes/MyProfile';
import AllUsers from './routes/admin/AllUsers';
import UserPage from './routes/UserPage';

import Login from './routes/Login';
import Signup from './routes/Signup';
import {history} from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { Fragment } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     firstname:"", 
     lastname:"", 
     username:"", 
     id:"", 
     role :"",
        }
  }


render(){
  
  return (


        <Router history={history}>

        <Switch>
        {/* <Route exact path="/login" component={() => <Login setRole={this.setRole} />} /> */}
        <Route path="/login" component={Login} />


        <Fragment>
        <Navbar role ={this.state.role}/>
        <PrivateRoute exact path="/home" component={MyProfile} />

        <PrivateRoute exact path="/allUsers-admin" component={AllUsers} />
        <PrivateRoute exact path="/userData" component={UserPage} />

         </Fragment>

         {/* <Redirect from="*" to="/login" /> */}


        </Switch>
      </Router>
  );
}
}

export default App;