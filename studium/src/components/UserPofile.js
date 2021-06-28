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
            {sessionStorage.getItem("role") === "ROLE_ADMIN" ?    <div className="col-xs-12 divider text-center">
        
        <div className="col center" style={{float: "right"}}>
            <button type="button" onClick = {this.handleDeleteSubmit} className="btn btn-primary">Delete</button>

        </div>
    </div> : "" }           
        
    	 </div>  

               
		</div>
	</div>
</div>
    );
    }



  }
  
  export default UserProfile;