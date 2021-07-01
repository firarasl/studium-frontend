import React from 'react';
import UserProfile from '../../components/UserPofile';
import { adminService } from '../../services/index';
import { UncontrolledCollapse } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import {history} from "../../helpers/history";

var columns = [
    { title: 'Student Id', prop: 'id' },
    { title: 'Student Username', prop: 'username' },
  
    { title: 'Delete', prop: 'firstname'  },
    { title: 'Lastname', prop: 'lastname' },
    { title: 'Status', prop: 'role' }
  ];

  let subjects= "";
class ClassProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          myData: "",
          newName: "",
          usernameAssign: "",
          usernameDeassign:"",
          subjectList:"",
          subjects:""
          }

      }

      componentDidMount(){
        if(this.props.location.query){
            adminService.getClazzById(this.props.location.query).then((data) => {
              this.setState({
                myData: data,
                subjectList:data.subjectList
              }); 
              subjects="";

              for(var i=0; i<this.state.subjectList.length; i++){

                if(i<this.state.subjectList.length-1){
                  console.log(this.state.subjectList[i].name)
                subjects +=this.state.subjectList[i].name+ ", ";}
                else{
                  console.log(this.state.subjectList[i].name)
                  subjects +=this.state.subjectList[i].name+ ". ";
                }
              }
              this.setState({
                subjects:subjects
              }); 

            })
          }
          else {
            history.push("/allClasses");
          }


      }

      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };

      isDisabledClassName(){
        if(this.state.newName !== ''   && this.state.newName.length>=3 
        ) {
          return false;
     }else{
       return true;
     }
      }

      isDisabledAssign(){
        if(this.state.usernameAssign !== ''   && this.state.usernameAssign.length>=3 
        ) {
          return false;
     }else{
       return true;
     }
      }

      isDisabledDeassign(){
        if(this.state.usernameDeassign !== ''   && this.state.usernameDeassign.length>=3 
        ) {
          return false;
     }else{
       return true;
     }
      }
      handleDeleteSubmit=()=>{
        adminService.deleteClazz(this.state.myData.id);
      }

      assignStudentToClazz=()=>{
          adminService.studentToClazz(this.state.myData.id, this.state.usernameAssign);
      }
      deassignStudentToClazz=()=>{
          adminService.studentToClazz(0, this.state.usernameDeassign);
      }

      handleEditSubmit=()=>{
          adminService.updateClazzName(this.state.myData.id, this.state.newName);
      }


render(){
  return (
    <div className='home'>
    
    <div className="container ">
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div className="well profile">
         <div className="col-md-12 text-center">
         <FaIcons.FaUsers size={100} style={{ color: "black" }} /> 
             </div>

            <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                   <p><strong>Class Name: </strong> {this.state.myData.name}</p>

                    <p><strong>Id: </strong> {this.state.myData.id}</p>
                    <p><strong>Subjects: </strong> {this.state.subjects}</p>

                </div>             
            </div>            
            <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-4 emphasis" style={{float: "right"}}>
                    <button type="button" onClick = {this.handleDeleteSubmit} className="btn btn-primary"><span className="fa fa-gear"></span> Delete Class </button>

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
      <p>You might have to refresh after changing your data</p>

                    <div className="row">
                        <div className="col-md-8">
                            <label>
                          <input name="newName" onChange={this.onChangeHandler} placeholder="New class name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4 text-center">
                        <button onClick = {this.handleEditSubmit} disabled={this.isDisabledClassName()} type="button" className="btn btn-danger">Change name</button>

</div>
                      </div>

                      <br/>

                      <div className="row">
                        <div className="col-md-8">
                            <label>
                          <input name="usernameAssign" onChange={this.onChangeHandler} placeholder="Student name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4 text-center">
                        <button onClick = {this.assignStudentToClazz} disabled={this.isDisabledAssign()} type="button" className="btn btn-danger">Assign</button>

</div>
                      </div>

<br/>

                      <div className="row">
                        <div className="col-md-8">
                            <label>
                          <input name="usernameDeassign" onChange={this.onChangeHandler} placeholder="Student name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4 text-center">
                        <button onClick = {this.deassignStudentToClazz} disabled={this.isDisabledDeassign()} type="button" className="btn btn-danger">Deassign</button>

</div>
                      </div>
                    <br/>

<br/>

                </form>
    </UncontrolledCollapse> </div> : ""}</div>
</div></div>
</div>

<div id="msg"></div>

    </div>
  );
}

}

export default ClassProfile;