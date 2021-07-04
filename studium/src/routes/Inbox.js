import React from 'react';
import Table from "../components/Table";
import {userService} from '../services/index';
import {
  Link
} from "react-router-dom";
import dateBeautifier from "../helpers/dateBeautifier";

let tableComponent = "";

var columns = [
  { title: 'Id', prop: 'id' },
  { title: 'Status', prop: 'isRead' },

  { title: 'Sender', prop: 'sender'  },
  { title: 'Date', prop: 'date' },
  { title: 'View it', prop: 'view' }

];
var data=[];



class Inbox extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      tableData : ""
      }
  
  }
  getData () {
    data=[];
    let status="";
 
    if(this.state.tableData.length>0){
 this.state.tableData.map(object => {

 if(object.read){
   status="read";
   }
   else{
     status="not read"
   }
   let temp =  { 
     
     id: object.id, 
     isRead: status, 
 
     date:dateBeautifier(object.created), 
     sender: object.sender.username,
    view: <Link to={{ pathname: '/msgById', query: {id : object.id}}}>Click on me!</Link>
    };

 
 
   data.push(temp);
 
 })
    }
 return data;
 }

componentDidMount(){

  userService.getInbox().then((data) => {
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

export default Inbox;