import React from 'react';
import UserProfile from '../components/UserPofile';
import { UncontrolledCollapse } from 'reactstrap';
import {history} from "../helpers/history";

import {adminService, userService} from "../services/index";

let data = "";

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          myData: "",
              newUsername: "",
              newFirstname:"",
              newLastname:"",
              newPassword: ""
        }
      }
      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };



      handleEditSubmit=()=>{
        adminService.updateUser(this.state.newUsername, this.state.newFirstname, 
          this.state.newLastname, this.state.newPassword, this.state.myData.id);
    }

    isDisabled(){
      if((this.state.newUsername !== '' && this.state.newUsername.length>=3)  || 
       (this.state.newFirstname !== '' &&  this.state.newFirstname.length>=3 ) || 
      (this.state.newLastname !== '' &&  this.state.newLastname.length>=3) ||  
      (this.state.newPassword !== ''&& this.state.newPassword.length>=3 )
   
      ) {
        return false;
   }else{
     return true;
   }
    }

      componentDidMount(){
if(this.props.location.query){
  userService.getUserByUsername(this.props.location.query).then((data) => {
    this.setState({
      myData: data
    }); 
  })
}
else{
  history.push("/allUsers-admin");
}

        }
       


render(){
  return (
    <div className='home'>
<div id="msg"></div>

<UserProfile data = {this.state.myData} />
<div className="container ">
  
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
<div className="">

{sessionStorage.getItem("role") === "ROLE_ADMIN" ? <div>
    <button id ="toggler" className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Edit </button>


    <UncontrolledCollapse toggler="#toggler">
    <form >
      <br/>

                    <div className="row">
                        <div className="col-md-6">
                            <label>
                          <input name="newUsername" onChange={this.onChangeHandler} placeholder="New Username" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="form-group col-md-6">
                            <label>
                          <input name="newPassword"  type="password" onChange={this.onChangeHandler} className="form-control fields" placeholder="New Password"/>
                          <span className="field-span"></span>
</label>
                        </div>
                      </div>
                    <div className="row">
                        <div className=" col-md-6">
                            <label>
                            <input  name="newFirstname" onChange={this.onChangeHandler} placeholder="New Firstname" className="form-control fields" required="required" type="text"/>
                            <span className="field-span"></span>
</label>
                        </div>
                        <div className=" col-md-6">
                        <label>
                            <input  name="newLastname" onChange={this.onChangeHandler} placeholder="New Lastname" className="form-control fields" required="required" type="text"/>
                            <span className="field-span"></span>
</label>
                        </div>

                    </div>
                    <br/>

<br/>

                    <div className="form-row col text-center">
                        <button onClick = {this.handleEditSubmit} disabled={this.isDisabled()} type="button" className="btn btn-danger">Submit</button>
                    </div>
                </form>
    </UncontrolledCollapse> </div> : ""}
    </div> </div> </div> </div> </div>
  );
}

}

export default UserPage;