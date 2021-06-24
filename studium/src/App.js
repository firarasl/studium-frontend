import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MyProfile from './routes/MyProfile';
import AllUsers from './routes/admin/AllUsers';
import UserPage from './routes/UserPage';
import AddEntity from './routes/AddEntity';
import Example from './routes/Example';
import AllClasses from './routes/admin/AllClasses';
import ClassProfile from './routes/admin/ClassProfile';

import Login from './routes/Login';
import {history} from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { Fragment } from 'react';


class App extends Component {



render(){
  
  return (


        <Router history={history}>
        <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute exact path="/home" component={MyProfile} />

        <PrivateRoute exact path="/allUsers-admin" component={AllUsers} />
        <PrivateRoute exact path="/userData" component={UserPage} />
        <PrivateRoute exact path="/add" component={AddEntity} />
        <PrivateRoute exact path="/allClasses" component={AllClasses} />
        <PrivateRoute exact path="/classProfile" component={ClassProfile} />


         <Redirect from="*" to="/login" />


        </Switch>
      </Router>
  );
}
}

export default App;