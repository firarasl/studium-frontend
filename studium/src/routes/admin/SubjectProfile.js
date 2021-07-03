import React from 'react';
import UserProfile from '../../components/UserPofile';
import { adminService } from '../../services/index';
import { UncontrolledCollapse } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import {history} from "../../helpers/history";

let status="";

class SubjectProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          myData: "",
          status:"",
          newName: "",
          teacherName: "",
          }

      }

      componentDidMount(){
        if(this.props.location.query){
            adminService.getSubjectById(this.props.location.query).then((data) => {
console.log(data)

if(data.archieved==false){
  status="Not Archieved";
}
else{
  status="Archieved";
}

              this.setState({
                myData: data
              }); 
            })
          }
          else {
            history.push("/allSubjects");
          }

      }

      isDisabled(){
        if((this.state.newName !== ''   && this.state.newName.length>=3  ) || 
        (this.state.teacherName !== ''   && this.state.teacherName.length>=3 )
        ) {
          return false;
     }else{
       return true;
     }
      }

      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };

      handleDeleteSubmit=()=>{
        adminService.deleteSubject(this.state.myData.id);
      }

      archieveSubject=()=>{
          adminService.archievateSubject(this.state.myData.id);
      }

      handleEditSubmit=()=>{
          adminService.updateSubject(this.state.myData.id, this.state.newName, this.state.teacherName);
      }


render(){
  return (
    <div className='home'>
<div id="msg"></div>
    
    <div className="container ">
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div className="well profile">
         <div className="col-md-12 text-center">
         <FaIcons.FaUsers size={100} style={{ color: "black" }} /> 
             </div>

            <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                   <p><strong>Subject Name: </strong> {this.state.myData.name}</p>

                    <p><strong>Id: </strong> {this.state.myData.id}</p>
                    {/* <p><strong>Teacher: </strong> {this.state.myData.user.username}</p> */}
                    <p><strong>Status: </strong> {status}</p>
                    <p><strong>Teacher: </strong> {this.state.myData.teacherName}</p>
                    <p><strong>Class: </strong> {this.state.myData.clazzName}</p>


                </div>             
            </div>            
            <div className="col-xs-12 divider text-center">
                 <div className="col-xs-12 col-sm-4 emphasis">
                    <button onClick = {this.archieveSubject} disabled={status==="Archieved"} className="btn btn-success btn-block">Archivate </button>
                </div> 
                <div className="col-xs-12 col-sm-4 emphasis" style={{float: "right"}}>
                    <button type="button" onClick = {this.handleDeleteSubmit} className="btn btn-primary">Delete Subject </button>

                </div>
            </div>
    	 </div>  

               
		</div>
	</div>
</div>





<div className="container ">
  
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
<div className="">
    {sessionStorage.getItem("role") === "ROLE_ADMIN" ? <div>
    <button id ="toggler" className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Edit </button>


    <UncontrolledCollapse toggler="#toggler">
    <form >
      <br/>
      <p>You might have to refresh after changing data</p>

                    <div className="row">
                        <div className="col-md-4">
                            <label>
                          <input name="newName" onChange={this.onChangeHandler} placeholder="New class name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4">
                            <label>
                          <input name="teacherName" onChange={this.onChangeHandler} placeholder="Teacher username" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>


                        <div className="col-md-4">
                        <button onClick = {this.handleEditSubmit}  disabled={this.isDisabled()}   type="button" className="btn btn-danger">Update subject</button>

</div>
                      </div>


                      <br/>

<br/>

                </form>
    </UncontrolledCollapse> </div> : ""}</div>
</div></div>
</div>


    </div>
  );
}

}

export default SubjectProfile;