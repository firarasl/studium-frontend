import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import { teacherService } from '../../services/index';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
class AddTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            testName: "",
            testDate: "",
            subjectName: "",

          }
      }

      addTest=()=>{

        teacherService.addTest(this.state.testName, this.state.testDate, this.state.subjectName
          );
      }

      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };

      isDisabled(){
        if(this.state.testName !== '' && this.state.testDate !== '' && this.state.subjectName !== '' 
        && this.state.testName.length>=3 && this.state.testDate.length>=3 && this.state.subjectName.length>=3  ) {
          return false;
     }else{
       return true;
     }
      }
  
  

      render () {
    return (
      <div className='addUser '>
        <div id="msg"></div>
      <h1 style={{ textAlign: 'center' }}>Do you want to add a new test?</h1><br/>

      <div className="col text-center">
      <Button className={"btn black-btn "} id="toggler" style={{ marginBottom: '1rem' }}>
    Add a new Test
  </Button>
</div>
<br/>
  <UncontrolledCollapse toggler="#toggler">




<form className="form-in-center">
                  <div className="row">
                      <div className="col-md-4">
                          <label>
                        <input name="testName"  onChange={this.onChangeHandler}  placeholder="Test Name" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                      <div className="form-group col-md-4">
                          <label>
                            <input type="datetime-local" onChange={this.onChangeHandler} className="form-control fields"
       name="testDate" placeholder="Date (yyyy-MM-dd hh:mm)" 
       min="2020-06-07T00:00" max="2050-06-14T00:00"/>

                        {/* <input type="text"  name="testDate"  onChange={this.onChangeHandler}  className="form-control fields" placeholder="Date (yyyy-MM-dd hh:mm)"/> */}
                        <span className="field-span"></span>
</label>
                      </div>
                      <div className="form-group col-md-4">
                          <label>
                        <input type="text"  name="subjectName"  onChange={this.onChangeHandler}  className="form-control fields" placeholder="Subject Name"/>
                        <span className="field-span"></span>
</label>
                      </div>
                      
            
                    </div>

<div className="row">
<div className="col text-center">
                      <button disabled={this.isDisabled()} onClick={this.addTest} type="button" className="btn btn-danger">Submit</button>
                  </div>
</div>
            
<br/>

              </form>
  </UncontrolledCollapse>

<br/>







</div>    );
    }



  }
  
  export default AddTest;