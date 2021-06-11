import React from 'react';
import Table from "../../components/Table";
import getAllUsers from '../../services/admin/allUsersService';

class AllUsers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    tableData: []
    }
  }

componentDidMount(){

  getAllUsers().then((data) => {
    this.setState({
      tableData: data
    });  
  
  })
}

  render(){
  return (

    <div 
    className="allUsers" >
      <Table data={this.state.tableData}/>
    </div>
  );
}
}

export default AllUsers;