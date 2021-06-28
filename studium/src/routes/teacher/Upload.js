import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import { teacherService } from '../../services/index';
import {  Button } from 'reactstrap';
class AddEntity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null,
            }
      }


      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.files[0]
         });
      };

      upload =()=>{
        teacherService.upload(this.state.file );
      }
      isDisabled(){
        if(this.state.file !== null  ) {
         return false;
    }else{
      return true;
    }
      }


      render () {
    return (
        <div className="container">
      <div className='addUser '>
        <div id="msg"></div>
      <h1 style={{ textAlign: 'center' }}>Do you want to upload grades?</h1><br/>

      <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', margin: '0px 20%'}}>
      <form enctype="multipart/form-data">

      <input type="file" onChange={this.onChangeHandler}  className={"btn black-btn "}  name="file" style={{ margin: '10px auto' }} />

      <Button onClick={this.upload} disabled = {this.isDisabled()} className={"btn black-btn "} id="toggler" style={{ margin: '10px auto' }}>
    Upload
  </Button></form>
</div>
<br/>

<p>Hint: It should be CSV file. See the example below.</p>

<pre>username,testId,grade</pre>
<pre>steven;5;10</pre>


</div>  </div>  );
    }



  }
  
  export default AddEntity;