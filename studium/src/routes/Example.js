import React from 'react';
import { UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

const Example = () => (
    <div className='addUser '>
        <h1 style={{ textAlign: 'center' }}>Do you want to add a new user?</h1>
        <div className="col text-center">
        <Button className={"btn black-btn "} id="toggler" style={{ marginBottom: '1rem' }}>
      Add a new User
    </Button>
 </div>

    <UncontrolledCollapse toggler="#toggler">
      {/* <Card>
        <CardBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
          similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
          dignissimos esse fuga! Minus, alias.
        </CardBody>
      </Card> */}



<form className="form-in-center">
                    <div className="row">
                        <div className="col-md-6">
                            <label>
                          <input name="username" placeholder="Username" className="form-control fields" type="text"/>
                          <span className="field-span"></span>
</label>
                        </div>
                        <div className="form-group col-md-6">
                            <label>
                          <input type="password" className="form-control fields" placeholder="Password"/>
                          <span className="field-span"></span>
</label>
                        </div>
                      </div>
                    <div className="row">
                        <div className=" col-md-6">
                            <label>
                            <input  name="firstname" placeholder="Firstname" className="form-control fields" required="required" type="text"/>
                            <span className="field-span"></span>
</label>
                        </div>
                        <div className=" col-md-6">
                        <label>

                                  <select  className="form-control fields" placeholder="Role">
                                  <option value="" disabled selected>Role</option>

                                    <option> Admin</option>
                                    <option> Teacher</option>
                                    <option> Student</option>
                                  </select>
                                  <span className="field-span"></span>
</label>
                        </div>

                    </div>
                    <br/>
                    <div className="row">
                        <div className=" col-md-6">
                            <label>
                            <input  name="lastname" placeholder="Lastname" className="form-control fields" required="required" type="text"/>
                            <span className="field-span"></span>
</label>
                        </div></div>
<br/>

                    <div className="form-row col text-center">
                        <button type="button" className="btn btn-danger">Submit</button>
                    </div>
                </form>
    </UncontrolledCollapse>
  </div>
);

export default Example;