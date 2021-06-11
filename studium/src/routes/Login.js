import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';

import LoginRequest from "../services/authService";

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        username: '',
        password: ''
        }
      }
      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };
componentDidMount(){
  sessionStorage.removeItem("role");
}
    login=()=>{
      LoginRequest(this.state.username, this.state.password);

      // document.getElementsByTagName('body')[0].style = 'bgColor: '+sessionStorage.getItem("role");

      
    }

      render () {
    return (
      <div className="fake-body">

      <div className='login-div'>
        <center>
            <h1>
            <FaIcons.FaGraduationCap />
                Login to Studium
                </h1>
            </center>

            <div className="col-sm-12 col-xs-12">

            <input type="text" autoComplete="off" onChange={this.onChangeHandler} placeholder="Your username" required name="username" className="form-control" id="usr"/>
            <br/>
            <input type="password" autoComplete="off" onChange={this.onChangeHandler} placeholder="Your password" required name="password" className="form-control" id="usr"/>
<br/>
<div className="col text-center">
      <button className="btn btn-primary" onClick={this.login}>Login</button>
 </div>
<br/>
<p className="text">Don't have an account yet? Sign up <a href="/signup">here!</a></p>

</div>

      </div> </div>
    );
    }



  }
  
  export default Login;