import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import beautifyRole from '../helpers/beautifyRole';
import { adminService } from '../services/index';
import {login} from "../services/auth.service";

var sub = "";
class UserProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                username: "",
                id: "",
                role:"",
                firstname: "",
                lastname: ""
        }
      }
      handleDeleteSubmit=()=>{
        adminService.deleteUser( this.state.id);
    }

      setData(data){

        this.setState({
            username: data.username,
            id: data.id,
            role: beautifyRole(data.role.name),
            lastname: data.lastname,
            firstname: data.firstname,
          });  
      }

      render () {


        if( this.props.data && this.state.username ===""){
            this.setData(this.props.data);
        }

        return (
    
        <div className="container ">
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div className="well profile">
         <div className="col-md-12 text-center">
         <FaIcons.FaUser size={100} style={{ color: "black" }} /> 
             </div>

            <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                    <h2>{this.state.firstname} {this.state.lastname}</h2>
                    <p><strong>Id: </strong> {this.state.id}</p>
                    <p><strong>Username: </strong> {this.state.username} </p>
                    <p><strong>Status:</strong>
                        <span className="tags">{this.state.role}</span>
                   </p>
                </div>             
            </div>            
            <div className="col-xs-12 divider text-center">
                {/* <div className="col-xs-12 col-sm-4 emphasis">
                    <h2><strong> 20,7K </strong></h2>                    
                    <p><small>Followers</small></p>
                    <button className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Follow </button>
                </div>
                <div className="col-xs-12 col-sm-4 emphasis">
                    <h2><strong>245</strong></h2>                    
                    <p><small>Following</small></p>
                    <button className="btn btn-info btn-block"><span className="fa fa-user"></span> View Profile </button>
                </div> */}
                <div className="col-xs-12 col-sm-4 emphasis" style={{float: "right"}}>
                    {/* <h2><strong>43</strong></h2>                    
                    <p><small>Snippets</small></p> */}
                    <button type="button" onClick = {this.handleDeleteSubmit} className="btn btn-primary"><span className="fa fa-gear"></span> Delete User </button>

                    {/* <div className="btn-group dropup btn-block"> */}
                      {/* <button type="button" className="btn btn-primary"><span className="fa fa-gear"></span> Delete User </button> */}
                      {/* <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"> */}
                        {/* <span className="caret"></span>
                        <span className="sr-only">Toggle Dropdown</span>
                      </button> */}
                      {/* <ul className="dropdown-menu text-left" role="menu">
                        <li><a href="#"><span className="fa fa-envelope pull-right"></span> Send an email </a></li>
                        <li><a href="#"><span className="fa fa-list pull-right"></span> Add or remove from a list  </a></li>
                        <li className="divider"></li>
                        <li><a href="#"><span className="fa fa-warning pull-right"></span>Report this user for spam</a></li>
                        <li className="divider"></li>
                        <li><a href="#" className="btn disabled" role="button"> Unfollow </a></li>
                      </ul> */}
                    {/* </div> */}
                </div>
            </div>
    	 </div>  

               
		</div>
	</div>
</div>
    );
    }



  }
  
  export default UserProfile;