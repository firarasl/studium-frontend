import React from 'react';
import UserProfile from '../../components/UserPofile';
import { teacherService } from '../../services/index';
import { UncontrolledCollapse } from 'reactstrap';
import * as FaIcons from 'react-icons/fa';
import {history} from "../../helpers/history";
import dateBeautifier from "../../helpers/dateBeautifier";
import {
    Link
  } from "react-router-dom";
  import beautifyRole from "../../helpers/beautifyRole";

  import Table from "../../components/Table";
  let tableComponent = "";

var columns = [
    { title: 'Student Id', prop: 'id' },
    { title: 'Student Username', prop: 'username' },
  
    { title: 'Firstname', prop: 'firstname'  },
    { title: 'Lastname', prop: 'lastname' },
    { title: 'Grade', prop: 'grade' }

  ];
  var data=[];


class TestProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
          myData: "",
          studentData:"",

          newName: "",
          newDate: "",
          username:"",
          grade:""
          }

      }

      getData () {
        data=[];
     
        if(this.state.studentData.length>0){
     this.state.studentData.map(object => {

       let temp =  { 
         
         id: <Link  to={{ pathname: '/userData', query:{username : object.username}  }}>{object.id}</Link>, 
         username: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.username}</Link>, 
         firstname: <Link to={{ pathname: '/userData', query: {username : object.username}}}>{object.firstname}</Link>,
         lastname: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.lastname }</Link>,
         grade: <Link to={{ pathname: '/userData', query:{username : object.username}}}>{object.grade}</Link>};
    
     
     
       data.push(temp);
     
     })
        }
     return data;
     }

      componentDidMount(){
        if(this.props.location.query){
            teacherService.getTestById(this.props.location.query).then((data) => {
                console.log(data)
              this.setState({
                myData: data,
                studentData:data.students
              }); 
            })

          }
          else {
            history.push("/allTests");
          }

      }

      isDisabledUpdate(){
        if((this.state.newName !== ''&& this.state.newName.length>=3) ||
         (this.state.newDate !== '' && this.state.newDate.length >= 3)) {
          return false;
     }else{
       return true;
     }
      }

      isDisabledGrade(){
        if((this.state.username !== ''&& this.state.username.length>=3) ||
        this.state.grade !== '' ) {
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
        teacherService.deleteTest(this.state.myData.id);
      }




      handleEditSubmit=()=>{
          teacherService.updateTest(this.state.myData.id, this.state.newName, this.state.newDate);
      }

      gradeStudent=()=>{

        teacherService.gradeStudent(this.state.grade, this.state.username, this.state.myData.id);
      }


render(){
    if(this.state.studentData && tableComponent===""){

        tableComponent=<Table getData={ this.getData()} columns={columns} data={this.state.studentData}/>;

      }
  return (
      <div>
    <div className='home'>
    
    <div className="container ">
	<div className="row userprofile">
		<div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
    	 <div className="well profile">
         <div className="col-md-12 text-center">
         <FaIcons.FaBookReader size={100} style={{ color: "black" }} /> 
             </div>

            <div className="col-sm-12">
                <div className="col-xs-12 col-sm-8">
                   <p><strong>Test Name: </strong> {this.state.myData.name}</p>

                    <p><strong>Id: </strong> {this.state.myData.id}</p>
                    <p><strong>Subject: </strong> {this.state.myData.subjectName}</p>
                    <p><strong>Class: </strong> {this.state.myData.clazzName}</p>

                    <p><strong>Date: </strong> {dateBeautifier(this.state.myData.date)}</p>

                </div>             
            </div>            
            <div className="col-xs-12 divider text-center">
                <div className="col-xs-12 col-sm-4 emphasis" style={{float: "right"}}>
                    <button type="button" onClick = {this.handleDeleteSubmit} className="btn btn-primary"><span className="fa fa-gear"></span> Delete Test </button>

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
    <div>
    <button id ="toggler" className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Edit </button>


    <UncontrolledCollapse toggler="#toggler">
    <form >
      <br/>
      <p>You might have to refresh after changing your data</p>

                    <div className="row">
                        <div className="col-md-4">
                            <label>
                          <input name="newName" onChange={this.onChangeHandler} placeholder="New test name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4">
                            <label>
                            <input type="datetime-local" onChange={this.onChangeHandler} className="form-control fields"
       name="newDate" 
       min="2020-06-07T00:00" max="2050-06-14T00:00"/>
                          {/* <input name="newDate" onChange={this.onChangeHandler} placeholder="yyyy-MM-dd hh:mm" className="form-control fields" type="text"/> */}
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4 text-center">
                        <button  disabled={this.isDisabledUpdate()}  onClick = {this.handleEditSubmit} type="button" className="btn btn-danger">Update</button>

</div>
                      </div>

                      <br/>

                      <div className="row">
                        <div className="col-md-4">
                            <label>
                          <input name="username" onChange={this.onChangeHandler} placeholder="Student name" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="col-md-4">
                            <label>
                          <input name="grade" onChange={this.onChangeHandler} placeholder="Grade" className="form-control fields" type="number"/>
                          <span className="field-span"></span>
</label>
                        </div>

                        <div className="col-md-4 text-center">
                        <button disabled={this.isDisabledGrade()} onClick = {this.gradeStudent} type="button" className="btn btn-danger">Grade</button>

</div>
                      </div>

                    <br/>

<br/>

                </form>
    </UncontrolledCollapse> </div> </div>
</div></div>
</div>

<div id="msg"></div>

    <br/>



    </div>
    <div  className="allUsers" >
    {tableComponent}
  </div>
</div>

  );
}

}

export default TestProfile;