import React from 'react';
import Table from "../../components/Table";
import {teacherService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";
import dateBeautifier from "../../helpers/dateBeautifier";

let tableComponent = "";

var columns = [
  { title: 'Test Id', prop: 'id' },
  { title: 'Test name', prop: 'testName' },

  { title: 'Subject name', prop: 'subjectName'  },
  { title: 'Date', prop: 'date' },
  { title: 'View it', prop: 'view' }

];
var data=[];

class AllTests extends React.Component {

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
  

     id:object.id, 
     testName: object.name, 
 
     subjectName: object.subject.name, 
     date: dateBeautifier(object.date),
     view: <Link to={{ pathname: '/testDate', query: {id : object.id}}}>Click on me!</Link>

};


 
 
   data.push(temp);
 
 })
    }
 return data;
 }

componentDidMount(){

    teacherService.getMyTests().then((data) => {
        console.log(data)
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

export default AllTests;