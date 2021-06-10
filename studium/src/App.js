import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import StudentHome from './routes/student/StudentHome';
import AdminHome from './routes/admin/AdminHome';
import TeacherHome from './routes/teacher/TeacherHome';

import Login from './routes/Login';
import Signup from './routes/Signup';
import {history} from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { Fragment } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
     role :""
        }

        this.setRole = this.setRole.bind(this);

  }


 setRole (currentRole) {

    this.setState({
      role: currentRole
    })
 };

render(){

  return (
    <>
    
        <Router history={history}>

        <Switch>
        {/* <Route exact path="/login" component={() => <Login setRole={this.setRole} />} /> */}
        <Route path="/login" component={Login} />

          <Route path="/signup" component={Signup} />

<Fragment>
<Navbar role ={this.state.role}/>


        <PrivateRoute exact path="/home-student" component={StudentHome} />
          <PrivateRoute exact path="/home-admin" component={AdminHome} />
          <PrivateRoute exact path="/home-teacher" component={TeacherHome} />
         </Fragment>
 <Redirect from="*" to="/login" />
        </Switch>
      </Router>
    </>
  );
}
}

export default App;