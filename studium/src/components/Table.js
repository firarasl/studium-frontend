
import getRole from "../helpers/role";
import {
  Link
} from "react-router-dom";

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
var roleList=[];

class Table extends React.Component{


getData () {
data=[];

this.props.data.map(object => {
  roleList=[];
object.roles.map(status =>{
  roleList.push(status.name);
})
  let temp =  { 


    id: <Link  to={{ pathname: '/userData', query:{username : object.username}  }}>{object.id}</Link>, 
    username: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.username}</Link>, 
    role: <Link to={{ pathname: '/userData', query:{username : object.username}}}>{getRole(roleList)}</Link>, 
    firstname: <Link to={{ pathname: '/userData', query: {username : object.username}}}>{object.firstname}</Link>,
    lastname: <Link to={{ pathname: '/userData', query: {username : object.username} }}>{object.lastname }</Link>};





    // id: <Link  user = {object.username} to="/userData">{object.id}</Link>, 
    // username: <Link user = {object.username} to="/userData">{object.username}</Link>, 
    // role: <Link user = {object.username} to="/userData">{getRole(roleList)}</Link>, 
    // firstname: <Link user = {object.username} to="/userData">{object.firstname}</Link>,
    // lastname: <Link user = {object.username} to="/userData">{object.lastname }</Link>};
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