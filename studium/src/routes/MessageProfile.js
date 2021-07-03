import React from 'react';
import { Fragment } from 'react';
import * as FaIcons from 'react-icons/fa';
import dateBeautifier from '../helpers/dateBeautifier';
import { userService } from '../services/index';
import {history} from "../helpers/history";

class MessageProfile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
                sender:"",
                date:"",
                text:""
        }
      }


      componentDidMount(){
          console.log("ENTERED")
        if(this.props.location.query){
            console.log(this.props.location.query)

          userService.openMessage(this.props.location.query).then((data) => {
            console.log(data)

            this.setState({
              text: data.text,
              date:dateBeautifier(data.created),
              sender:data.sender.username
            }); 
          })
        }
        else{
          history.push("/inbox");
        }
        
                }




      render () {

        return (
    
        <div className="container allUsers ">
  <div class="well well-sm">Sender: {this.state.sender}</div>
  <div class="well well-sm">Date: {this.state.date}</div>
  <div class="well well-lg">{this.state.text}</div>


</div>
    );
    }



  }
  
  export default MessageProfile;