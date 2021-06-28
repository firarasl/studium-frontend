import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import ErrorPopup from '../components/ErrorPopup';
import {userService} from "../services/index";

class SendMessage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
        receiver: '',
        text: ''
        }
      }

      onChangeHandler = (event) => {
        this.setState({
          [event.target.name]: event.target.value
         });
      };

    sendMessage=()=>{
      userService.sendMessage(this.state.receiver, this.state.text);
    }
    isDisabled(){
      if(this.state.receiver !== ''   && this.state.receiver.length>=3 &&
      this.state.text !== ''   && this.state.text.length>=3 
      ) {
        return false;
   }else{
     return true;
   }
    }

      render () {
    return (
     <div className="addUser">
         <div id="msg"></div><br/>
<form className="form-in-center">
                  <div className="row">
                      <div className="col-md-8">
                          <label>
                        <input name="receiver"  onChange={this.onChangeHandler}  placeholder="Receiver name" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                   <div className="col-md-4">
                   <div className="form-row col text-center">
                      <button disabled={this.isDisabled()} onClick={this.sendMessage} type="button" className="btn btn-danger">Submit</button>
                  </div>
                   </div>
                    </div>
             
<br/>

<div className="row">
                      <div className="col-md-8">
                          <label>
                        <textarea  rows="4" cols="50" name="text"  onChange={this.onChangeHandler}  placeholder="Text" className="form-control fields" type="text"/>
                        <span className="field-span"></span>
</label>
                      </div>
                    </div>
              </form>
              
              
              
              </div>
    );
    }



  }
  
  export default SendMessage;