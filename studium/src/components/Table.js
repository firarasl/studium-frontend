
import {
  Link
} from "react-router-dom";
import beautifyRole from "../helpers/beautifyRole";

var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;

var columns = [
  { title: 'Id', prop: 'id' },
  { title: 'Username', prop: 'username' },

  { title: 'Firstname', prop: 'firstname'  },
  { title: 'Lastname', prop: 'lastname' },
  { title: 'Status', prop: 'role' }
];
var data=[];


class Table extends React.Component{


  componentDidMount(){
    console.log("hello");
  }

getData () {
   data=[];

this.props.data.map(object => {
//   roleList=[];
// object.roles.map(status =>{
//   roleList.push(status.name);
// })



  let temp =  { 


    id: <Link  to={{ pathname: '/userData', query:{username : object.username}  }}>{object.id}</Link>, 
    username: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.username}</Link>, 
    role: <Link to={{ pathname: '/userData', query:{username : object.username}}}>{beautifyRole(object.roles[0])}</Link>, 
    firstname: <Link to={{ pathname: '/userData', query: {username : object.username}}}>{object.firstname}</Link>,
    lastname: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.lastname }</Link>};




  data.push(temp);

})

return data;
}


render(){

return (
    <DataTable
      keys="username"
      columns={columns}
      initialData={this.getData()}
      initialPageLength={5}
      pointerOnHover={true}
      initialSortBy={{ prop: 'username', order: 'descending' }}
    />

  );

}
}

export default Table;