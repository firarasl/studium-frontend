import React from 'react';
import Table from "../../components/Table";
import {userService} from '../../services/index';
import {
  Link
} from "react-router-dom";
import beautifyRole from "../../helpers/beautifyRole";

let tableComponent = "";

var columns = [
  { title: 'Id', prop: 'id' },
  { title: 'Username', prop: 'username' },

  { title: 'Firstname', prop: 'firstname'  },
  { title: 'Lastname', prop: 'lastname' },
  { title: 'Status', prop: 'role' },
  { title: 'Class name', prop: 'clazz' }
];
var data=[];

class AllUsers extends React.Component {

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
 if(object.clazz){
   className=object.clazz.name;
   }
   else{
     className="Not Assigned"
   }
   let temp =  { 
     
     id: <Link  to={{ pathname: '/userData', query:{username : object.username}  }}>{object.id}</Link>, 
     username: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.username}</Link>, 
 
     role: <Link to={{ pathname: '/userData', query:{username : object.username}}}>{beautifyRole(object.role.name)}</Link>, 
     firstname: <Link to={{ pathname: '/userData', query: {username : object.username}}}>{object.firstname}</Link>,
     lastname: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.lastname }</Link>,
     clazz: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{className }</Link>};

 
 
   data.push(temp);
 
 })
    }
 return data;
 }

componentDidMount(){

  userService.getAllUsers().then((data) => {
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

export default AllUsers;