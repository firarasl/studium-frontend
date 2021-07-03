import React from 'react';
import Table from "../../components/Table";
import {studentService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";
import dateBeautifier from "../../helpers/dateBeautifier";
import {history} from "../../helpers/history";

let tableComponent = "";

var columns = [
  { title: 'Test Id', prop: 'id' },
  { title: 'Test name', prop: 'name' },
  { title: 'Test date', prop: 'date' },
  { title: 'Grade', prop: 'grade'  }

];
var data=[];



class SubjectsTestsGrade extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : "",
      myData:""
      
      }
  
  }
  getData () {
    data=[];
    let isGraded="";
    if(this.state.myData.length>0){

 this.state.myData.map(object => {
   console.log(object)

 if(object.graded==false){

    isGraded="Not graded yet!";
   }
   else{

    isGraded=object.grade;
   }
   let temp =  { 
     
     id: object.test.id,
     name: object.test.name, 
 
     date:dateBeautifier(object.test.date), 
     grade: isGraded};

 
   data.push(temp);
 
 })
    }
 return data;
 }


 componentDidMount(){

    if(this.props.location.query){
        studentService.getTestsBySubject(this.props.location.query).then((data) => {
          console.log(data)
          this.setState({
            myData: data
          }); 
        })
      }
      else {
        history.push("/mySubjects");
      }

}

  render(){
      if(this.state.myData && tableComponent===""){

      tableComponent=<Table getData={ this.getData()} columns={columns} data={this.state.myData}/>;

    }
     
  return (

    <div 
    className="allUsers" >
      {tableComponent}
    </div>
  );
}
}

export default SubjectsTestsGrade;