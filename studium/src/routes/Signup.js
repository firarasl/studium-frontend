import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';

class Signup extends React.Component {

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

    

      render () {
    return (
      <div className='login-div'>
        <center>
            <h1>
            <FaIcons.FaGraduationCap />
                Signup to Studium
                </h1>
            </center>

            <div className="col-sm-12 col-xs-12">

            <input type="text" placeholder="Your username" className="form-control" id="usr"/>
            <br/>
            <input type="password" placeholder="Your password" className="form-control" id="usr"/>
<br/>
<div className="col text-center">
      <button className="btn btn-primary">Signup</button>


    </div>
<br/>
<p className="text">You have an account already? Login <a href="/">here!</a></p>

</div>

      </div> 
    );
    }



  }
  
  export default  Signup
;