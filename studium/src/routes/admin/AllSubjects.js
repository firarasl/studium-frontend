import React from 'react';
import Table from "../../components/Table";
import {adminService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";

let tableComponent = "";

var columns = [
  { title: 'Id', prop: 'id' },
  { title: 'Subject name', prop: 'name' },
  { title: 'Status', prop: 'isArchieved'  },
  { title: 'Teacher', prop: 'teacherName' },
  { title: 'View it', prop: 'view' }

];
var data=[];

class AllSubjects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : ""
      }
  
  }
  getData () {
    data=[];
    let teacherName="";
    let status="";
    if(this.state.tableData.length>0){
 this.state.tableData.map(object => {
 if(object.user){
    teacherName=object.user.username;
   }
   else{
    teacherName="No teacher"
   }
if(object.archieved==true){
  status="Archieved";
}else{
  status="Not Archieved";
}

   let temp =  { 
     
     id: object.id, 
     name:object.name, 
     isArchieved: status,
     teacherName: teacherName ,
     view: <Link to={{ pathname: '/subjectData', query:{id : object.id}  }}>Click on me!</Link>
    
    };

 
 
   data.push(temp);
 
 })
    }
 return data;
 }

componentDidMount(){

    adminService.getAllSubjects().then((data) => {
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

export default AllSubjects;