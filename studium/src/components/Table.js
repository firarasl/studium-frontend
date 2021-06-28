
var React = require('react');
var ReactDOM = require('react-dom');
var DataTable = require('react-data-components').DataTable;


class Table extends React.Component{



render(){
return (
  
<DataTable
    keys="id"
    columns={this.props.columns}
    initialData={this.props.getData}
    initialPageLength={5}
    
    pointerOnHover={true}
    initialSortBy={{ prop: 'id', order: 'descending' }}
  />
  );

}
}

export default Table;