import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';


class AddUser extends React.Component {
    constructor(props) {
        super(props)
      }

      render () {
    return (
        <div className="container userprofile">
        <div className="row ">
            <div className="col-sm-offset-6 col-md-offset-6 col-md-6 col-lg-offset-4 col-lg-6">
            <div className="col-md-4 py-5 bg-primary text-white text-center " >
                <div className=" ">
                    <div className="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{width:"100%"}}/>
                        <h2 className="py-3">Registration</h2>
                        <p>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.

</p>
                    </div>
                </div>
            </div>
            <div className="col-md-8 py-5 border">
                <h4 className="pb-4">Please fill with your details</h4>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                          <input id="Full Name" name="Full Name" placeholder="Full Name" className="form-control" type="text"/>
                        </div>
                        <div className="form-group col-md-6">
                          <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                        </div>
                      </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text"/>
                        </div>
                        <div className="form-group col-md-6">
                                  
                                  <select id="inputState" className="form-control">
                                    <option selected>Choose ...</option>
                                    <option> New Buyer</option>
                                    <option> Auction</option>
                                    <option> Complaint</option>
                                    <option> Feedback</option>
                                  </select>
                        </div>
                        <div className="form-group col-md-12">
                                  <textarea id="comment" name="comment" cols="40" rows="5" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <div className="form-group">
                                <div className="form-check">
                                  <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
                                  <label className="form-check-label" for="invalidCheck2">
                                    <small>By clicking Submit, you agree to our Terms Conditions, Visitor Agreement and Privacy Policy.</small>
                                  </label>
                                </div>
                              </div>
                    
                          </div>
                    </div>
                    
                    <div className="form-row">
                        <button type="button" className="btn btn-danger">Submit</button>
                    </div>
                </form>
            </div>
        </div>
</div>   </div> 
    );
    }



  }
  
  export default AddUser;