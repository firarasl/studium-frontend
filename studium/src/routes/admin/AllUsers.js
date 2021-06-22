import React from 'react';
import Table from "../../components/Table";
import {userService} from '../../services/index';

class AllUsers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    tableData: []
    }
  }

componentDidMount(){

  userService.getAllUsers().then((data) => {
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