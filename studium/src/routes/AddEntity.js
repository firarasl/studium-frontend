import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import { userService } from '../services';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { adminService } from '../services';
class AddEntity extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          firstname: '',
          lastname: '',
          role: '',

          className: "",
          subjectName:"",
          newTeacher: ""
          }
      }

      addUser=()=>{
        userService.addUser(this.state.username, this.state.password,
          this.state.firstname, this.state.lastname,this.state.role
          );
      }

      isDisabledUserAdd(){
        if(this.state.username !== ''  &&  this.state.password !== '' && 
        this.state.firstname !== '' && this.state.lastname !== '' && this.state.role !== ''
        && this.state.username.length>=3 && this.state.password.length>=3 &&
        this.state.firstname.length>=3 && this.state.lastname.length>=3
        ) {
          return false;
     }else{
       return true;
     }
      }

      isDisabledClazzAdd(){
        if(this.state.className !== '' && this.state.className.length>=3 
        ) {
          return false;
     }else{
       return true;
     }
      }
      isDisabledSubjectAdd(){
        if(this.state.subjectName !== '' && this.state.newTeacher !== '' &&
        this.state.className.length>=3 &&
        this.state.newTeacher.length>=3
        ) {
          return false;
     }else{
       return true;
     }
      }
      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };

      addClass =()=>{
        adminService.addClass(this.state.className );
      }
      addSubject =()=>{
        adminService.addSubject(this.state.subjectName, this.state.newTeacher );
      }

      render () {
    return (
      <div className='addUser '>
        <div id="msg"></div>
      <h1 style={{ textAlign: 'center' }}>Do you want to add a new user?</h1><br/>

      <div className="col text-center">
      <Button className={"btn black-btn "} id="toggler" style={{ marginBottom: '1rem' }}>
    Add a new User
  </Button>
</div>
<br/>
  <UncontrolledCollapse toggler="#toggler">




<form className="form-in-center">
                  <div className="row">
                      <div className="col-md-6">
                          <label>
                        <input name="username"  onChange={this.onChangeHandler}  placeholder="Username" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                      <div className="form-group col-md-6">
                          <label>
                        <input type="password" name="password"  onChange={this.onChangeHandler}  className="form-control fields" placeholder="Password"/>
                        <span className="field-span"></span>
</label>
                      </div>
                    </div>
                  <div className="row">
                      <div className=" col-md-6">
                          <label>
                          <input  name="firstname" onChange={this.onChangeHandler}  placeholder="Firstname" className="form-control fields" required="required" type="text"/>
                          <span className="field-span"></span>
</label>
                      </div>
                      <div className=" col-md-6">
                      <label>

                                <select  name="role" onChange={this.onChangeHandler} className="form-control fields" placeholder="Role">
                                <option value="" disabled selected>Role</option>

                                  <option value="admin"> Admin</option>
                                  <option value="teacher"> Teacher</option>
                                  <option value="student"> Student</option>
                                </select>
                                <span className="field-span"></span>
</label>
                      </div>

                  </div>
                  <br/>
                  <div className="row">
                      <div className=" col-md-6">
                          <label>
                          <input  name="lastname"  onChange={this.onChangeHandler}  placeholder="Lastname" className="form-control fields" required="required" type="text"/>
                          <span className="field-span"></span>
</label>
                      </div></div>
<br/>

                  <div className="form-row col text-center">
                      <button onClick={this.addUser} type="button" disabled={this.isDisabledUserAdd()} className="btn btn-danger">Submit</button>
                  </div>
              </form>
  </UncontrolledCollapse>

<br/>
<h1 style={{ textAlign: 'center' }}>Or do you want to add a new class?</h1>
<br/>










<div className="col text-center">
      <Button className={"btn black-btn "} id="toggler2" style={{ marginBottom: '1rem' }}>
    Add a new Class
  </Button>
</div>
<UncontrolledCollapse toggler="#toggler2">




<form className="form-in-center">
                  <div className="row">
                      <div className="col-md-8">
                          <label>
                        <input name="className"  onChange={this.onChangeHandler}  placeholder="Class name" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                   <div className="col-md-4">
                   <div className="form-row col text-center">
                      <button onClick={this.addClass} disabled={this.isDisabledClazzAdd()} type="button" className="btn btn-danger">Submit</button>
                  </div>
                   </div>
                    </div>
             
<br/>

            
              </form>
  </UncontrolledCollapse>
  <br/>




<h1 style={{ textAlign: 'center' }}>Or do you want to add a new subject?</h1>
<br/>



<div className="col text-center">
      <Button className={"btn black-btn "} id="toggler3" style={{ marginBottom: '1rem' }}>
    Add a new Subject
  </Button>
</div>


<UncontrolledCollapse toggler="#toggler3">




<form className="form-in-center">
                  <div className="row">
                      <div className="col-md-4">
                          <label>
                        <input name="subjectName"  onChange={this.onChangeHandler}  placeholder="Subject Name" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                      <div className="col-md-4">
                          <label>
                        <input name="newTeacher"  onChange={this.onChangeHandler}  placeholder="Teacher username" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                   <div className="col-md-4">
                   <div className="form-row col text-center">
                      <button onClick={this.addSubject} disabled={this.isDisabledSubjectAdd()} type="button" className="btn btn-danger">Submit</button>
                  </div>
                   </div>
                    </div>
             
<br/>

            
              </form>
  </UncontrolledCollapse>

</div>    );
    }



  }
  
  export default AddEntity;