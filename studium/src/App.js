import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MyProfile from './routes/MyProfile';
import AllUsers from './routes/admin/AllUsers';
import UserPage from './routes/UserPage';
import AddUser from './routes/AddUser';
import Example from './routes/Example';

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

        <Fragment>
        <Navbar/>
        <PrivateRoute exact path="/home" component={MyProfile} />

        <PrivateRoute exact path="/allUsers-admin" component={AllUsers} />
        <PrivateRoute exact path="/userData" component={UserPage} />
        <PrivateRoute exact path="/addUser" component={Example} />

         </Fragment>

         {/* <Redirect from="*" to="/login" /> */}


        </Switch>
      </Router>
  );
}
}

export default App;