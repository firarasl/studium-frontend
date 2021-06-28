import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import MyProfile from './routes/MyProfile';
import AllUsers from './routes/admin/AllUsers';
import UserPage from './routes/UserPage';
import AddEntity from './routes/AddEntity';
import AllClasses from './routes/admin/AllClasses';
import ClassProfile from './routes/admin/ClassProfile';
import AllSubjects from './routes/admin/AllSubjects';
import SubjectProfile from './routes/admin/SubjectProfile';
import AllSubjectsTeacher from './routes/teacher/AllSubjects';
import AllStudents from './routes/teacher/AllStudents';
import AddTest from './routes/teacher/AddTest';
import AllTests from './routes/teacher/AllTests';
import TestProfile from './routes/teacher/TestProfile';
import Upload from './routes/teacher/Upload';
import MySubjects from './routes/student/MySubjects';
import SubjectsTestsGrade from './routes/student/SubjectsTestsGrade';
import Inbox from './routes/Inbox';
import Login from './routes/Login';
import {history} from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import SendMessage from './components/SendMessage.js';
import MessageProfile from './routes/MessageProfile';


class App extends Component {



render(){
  
  return (


        <Router history={history}>
        <Switch>
        <Route path="/login" component={Login} />

        <PrivateRoute allowedRoles={["ROLE_STUDENT","ROLE_ADMIN","ROLE_TEACHER"]} exact path="/home" component={MyProfile} />
        <PrivateRoute allowedRoles={["ROLE_STUDENT","ROLE_ADMIN","ROLE_TEACHER"]} exact path="/messages" component={SendMessage} />
        <PrivateRoute allowedRoles={["ROLE_STUDENT","ROLE_ADMIN","ROLE_TEACHER"]} exact path="/inbox" component={Inbox} />
        <PrivateRoute allowedRoles={["ROLE_STUDENT","ROLE_ADMIN","ROLE_TEACHER"]} exact path="/msgById" component={MessageProfile} />

        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/allUsers-admin" component={AllUsers} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/userData" component={UserPage} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/add" component={AddEntity} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/allClasses" component={AllClasses} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/classProfile" component={ClassProfile} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/allSubjects" component={AllSubjects} />
        <PrivateRoute allowedRoles={["ROLE_ADMIN"]} exact path="/subjectData" component={SubjectProfile} />

        <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/allTeachersSubject" component={AllSubjectsTeacher} />
                <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/allMyStudents" component={AllStudents} />
                <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/addTest" component={AddTest} />
                <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/allTests" component={AllTests} />
                <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/testDate" component={TestProfile} />
                <PrivateRoute allowedRoles={["ROLE_TEACHER"]} exact path="/upload" component={Upload} />

                <PrivateRoute allowedRoles={["ROLE_STUDENT"]} exact path="/mySubjects" component={MySubjects} />
                <PrivateRoute allowedRoles={["ROLE_STUDENT"]} exact path="/myTestGrade" component={SubjectsTestsGrade} />

         <Redirect from="*" to="/login" />
         

        </Switch>
      </Router>
  );
}
}

export default App;