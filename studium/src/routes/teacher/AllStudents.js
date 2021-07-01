import React from 'react';
import Table from "../../components/Table";
import {teacherService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";

let tableComponent = "";

var columns = [
  { title: 'Student Id', prop: 'id' },
  { title: 'Username', prop: 'username' },

  { title: 'Firstname', prop: 'firstname'  },
  { title: 'Lastname', prop: 'lastname' },
  { title: 'Status', prop: 'role' },
  { title: 'Class name', prop: 'clazz' },
  { title: 'GPA', prop: 'gpa' }

];
var data=[];

class AllStudents extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : ""
      }
  
  }
  getData () {
    data=[];
    let className="";
 
    if(this.state.tableData.length>0){
 this.state.tableData.map(object => {
   let temp =  { 
  
     id: object.id, 
     username: object.username, 
 
     role: beautifyRole(object.role), 
     firstname: object.firstname,
     lastname: object.lastname ,
     clazz: object.className ,
     gpa: object.gpa     
    };


 
 
   data.push(temp);
 
 })
    }
 return data;
 }

componentDidMount(){
  console.log("HELLO")

    teacherService.getAllMyStudents().then((data) => {
    this.setState({
      tableData: data
     });
  })
}

  render(){
      if(this.state.tableData && tableComponent===""){

      tableComponent=<Table getData={ this.getData()} columns={columns} data={this.state.tableData}/>;

    }
     
  return (

    <div 
    className="allUsers" >
      {tableComponent}
    </div>
  );
}
}

export default AllStudents;