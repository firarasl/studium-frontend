import React from 'react';
import Table from "../../components/Table";
import {studentService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";

let tableComponent = "";

var columns = [
  { title: 'Subject Id', prop: 'id' },
  { title: 'Subject name', prop: 'name' },
  { title: 'Status', prop: 'isArchieved' },
  { title: 'Average Grade', prop: 'gpa'  },
  { title: 'Class name', prop: 'clazzName'  },
  { title: 'Teacher', prop: 'teacher'  },

  { title: 'View it', prop: 'view' }


];
var data=[];
var dataHelper="";
class MySubjects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : ""
      
      }
  
  }
  getData () {
    data=[];
    let status="";

    if(this.state.tableData){

        let className=this.state.tableData.clazzName;


        for (var key in dataHelper) {
            if (dataHelper.hasOwnProperty(key)) {

              if(dataHelper[key].archieved==true)
  status="Archieved";
else
  status="Not archieved"


   let temp =  { 
  
     id: dataHelper[key].id, 
     name: dataHelper[key].name, 
 
     isArchieved: status, 
     clazzName:className, 

     gpa: key,
     teacher: dataHelper[key].user.username,
    view: <Link to={{ pathname: '/myTestGrade', query:{id : dataHelper[key].id}}}>Click on me!</Link>
    };

   data.push(temp);

            }
        }
    }
 return data;
 }


 componentDidMount(){

    studentService.getMySubjects().then((data) => {
dataHelper=data.subjects;

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

export default MySubjects;