import React from 'react';
import Table from "../../components/Table";
import {adminService} from '../../services/index';
import {
  Link
} from "react-router-dom";

let tableComponent = "";
var columns = [
  { title: 'Class Id', prop: 'id' },
  { title: 'Class name', prop: 'name' },

  { title: 'Subject count', prop: 'subjects'  }
];
var data= [];
class AllUsers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      classesData : ""
      }
  }

componentDidMount(){

  adminService.getAllClasses().then((data) => {
    this.setState({
        classesData: data
     });
  })

}


getData () {
  data=[];
  if(this.state.classesData.length>0){
this.state.classesData.map(object => {

 let temp =  { 
   
   id: <Link  to={{ pathname: '/classProfile', query:{id : object.id}  }}>{object.id}</Link>, 
   name: <Link to={{ pathname: '/classProfile', query:{id : object.id} }}>{object.name}</Link>, 
   subjects: <Link to={{ pathname: '/classProfile', query:{id : object.id} }}>{object.subjects.length}</Link>};

 data.push(temp);

})
  }
return data;
}

  render(){

      if(this.state.classesData && tableComponent===""){
      tableComponent=<Table getData={this.getData()} columns= {columns} data={this.state.classesData}/>;

    }
    
  return (

    <div 
    className="allUsers" >
      {tableComponent}
    </div>
  );
}
}

export default AllUsers;