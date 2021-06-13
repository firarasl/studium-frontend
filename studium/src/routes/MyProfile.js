import React from 'react';
import UserProfile from '../components/UserPofile';
class MyProfile extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            object:{
                username: sessionStorage.getItem("username"),
                id: sessionStorage.getItem("id"),
                role: sessionStorage.getItem("role"),
                firstname: sessionStorage.getItem("firstname"),
                lastname: sessionStorage.getItem("lastname"),
        
            }

        }
      }


render(){
  return (
    <div className='home'>
<UserProfile data = {this.state.object} />

    </div>
  );
}

}

export default MyProfile;