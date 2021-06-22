import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import ErrorPopup from '../components/ErrorPopup';
import {auth} from "../services/index";

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

    login=()=>{
      auth.login(this.state.username, this.state.password);
    }

      render () {
    return (
      <div className="fake-body">

      <div className='login-div'>
        <center>
            <h1 style={{color: "#0c81af", fontWeight: "bold"}}>
            <FaIcons.FaGraduationCap style={{paddingRight: "5px"}}/>
            Login to Studium
                </h1>
            </center>
            <br/>

            <div className="col-sm-12 col-xs-12">
            <label>

            <input type="text" autoComplete="off" onChange={this.onChangeHandler} placeholder="Username"  name="username" className="fields" required/> 
            <span className="field-span"></span>
</label>
            <br/>
            <label>
            <input type="password" autoComplete="off" onChange={this.onChangeHandler} placeholder="Password"  name="password" className="fields" required/>
            <span className="field-span"></span>
</label>

<br/>
<div className="col text-center">
      <button className="btn info" onClick={this.login}>Login</button>
 </div>

</div>

      </div> 
    <div id="msg"></div>
      
      </div>
    );
    }



  }
  
  export default Login;