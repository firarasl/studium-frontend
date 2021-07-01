import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/Alert';

import React from 'react';

  const useStyles = {
    fontSize: 40
};
  
let errorpopup = "";
class SuccessPopup extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
        this.handleClick = this.handleClick.bind(this);
      }

      handleClick = () =>{
        this.setState({
            isOpen: false
           });

      }



      render () {
          if(!this.state.isOpen){
              errorpopup="";
          }
          else{
           errorpopup = <Alert variant="filled" severity="success" style={{fontSize:"15px"}}
          action={
            <button  onClick = {this.handleClick} color="inherit" style={{backgroundColor: "green", color: "white",fontSize:"15px", border: "none"}}>
              CLOSE
            </button>
          }
        >
        {this.props.message}
        </Alert>;
          }
    return (<>
    
{errorpopup}

</>
    );
    }

  }
  
  export default SuccessPopup;