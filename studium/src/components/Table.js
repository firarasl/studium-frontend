
import getRole from "../helpers/role";
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
  let temp =  { id: object.id, username: object.username, role: getRole(roleList), firstname: object.firstname, lastname: object.lastname };
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
      initialSortBy={{ prop: 'username', order: 'descending' }}
    />

  );

}
}

export default Table;