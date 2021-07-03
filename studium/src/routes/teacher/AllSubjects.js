import React from 'react';
import Table from "../../components/Table";
import {teacherService} from '../../services/index';
import {
  Link
} from "react-router-dom";
 
let tableComponent = "";
var columns = [
    { title: 'Id', prop: 'id' },
    { title: 'Subject name', prop: 'name' },
    { title: 'Class', prop: 'clazz' },

    { title: 'Status', prop: 'isArchieved'  }  ];
var data= [];



class AllSubjects extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      subjectsData : ""
      }
  }

componentDidMount(){

  teacherService.getAllMySubjects().then((data) => {
    this.setState({
        subjectsData: data
     });
  })

}


getData () {
  data=[];
  let status="";
  if(this.state.subjectsData.length>0){
this.state.subjectsData.map(object => {
if(object.archieved==true)
  status="Archieved";
else
  status="Not archieved"

  let temp =  { 
   

    id: object.id,
    name:object.name,
    clazz: object.clazzName,
    isArchieved:status};


 data.push(temp);

})
  }
return data;
}

  render(){

      if(this.state.subjectsData && tableComponent===""){
      tableComponent=<Table getData={this.getData()} columns= {columns} data={this.state.subjectsData}/>;

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