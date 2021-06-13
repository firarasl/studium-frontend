import React from 'react';
import UserProfile from '../components/UserPofile';

import getUserByUsername from "../services/userDataService";

let data = "";

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            object:{
                username: "",
                id: "",
                role: "",
                firstname: "",
                lastname:"",
        
            }
        }
      }


      updateStates(data){
        console.log(data);

        this.setState({
          object:{          username: data.username,
            id: data.id,
            role: data.role,
            firstname: data.firstname,
            lastname: data.lastname
  }
            
          
        });

      }

      componentDidMount(){
        getUserByUsername(this.props.location.query).then((data) => {
            data = data;
            this.updateStates(data);            
          })
      }


render(){
  return (
    <div className='home'>
<UserProfile data = {this.state.object} />

    </div>
  );
}

}

export default UserPage;