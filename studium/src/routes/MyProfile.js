import React from 'react';
import UserProfile from '../components/UserPofile';
import { userService } from '../services/index';
import { UncontrolledCollapse } from 'reactstrap';



class MyProfile extends React.Component {

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

      componentDidMount(){

        userService.getMyProfile().then((data) => {
          this.setState({
            myData: data
          });  
        })

      }

      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };


      handleEditSubmit=()=>{
          userService.updateMyData(this.state.newUsername, this.state.newFirstname, 
            this.state.newLastname, this.state.newPassword);
      }
      isDisabled(){
        if((this.state.newUsername !== ''   && this.state.newUsername.length>=3 ) ||
        (this.state.newFirstname !== ''   && this.state.newFirstname.length>=3 ) ||
        (this.state.newLastname !== ''   && this.state.newLastname.length>=3 ) ||
        (this.state.newPassword !== ''   && this.state.newPassword.length>=3 ) 
        ) {
          return false;
     }else{
       return true;
     }
      }

render(){
  return (
    <div className='home'>

<UserProfile data = {this.state.myData} />


<div className="container ">
  
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
<div className="">
    {sessionStorage.getItem("role") === "ROLE_STUDENT" || sessionStorage.getItem("role") === "ROLE_TEACHER" ? <div>
    <button id ="toggler" className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Edit </button>


    <UncontrolledCollapse toggler="#toggler">
    <form >
      <br/>
      <p>You might have to log in again after changing your data</p>

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
                        <button disabled= {this.isDisabled()} onClick = {this.handleEditSubmit} type="button" className="btn btn-danger">Submit</button>
                    </div>
                </form>
    </UncontrolledCollapse> </div> : ""}</div>
</div></div>
</div>

<div id="msg"></div>

    </div>
  );
}

}

export default MyProfile;