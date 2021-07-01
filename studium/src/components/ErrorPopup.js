import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/Alert';

import React from 'react';

  const useStyles = {
    fontSize: 40
};
  
let errorpopup = "";
class ErrorPopup extends React.Component {

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
           errorpopup = <Alert variant="filled" severity="error" style={{fontSize:"15px"}}
          action={
            <button  onClick = {this.handleClick} style={{backgroundColor: "red", color: "white",fontSize:"15px", border: "none"}} >
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
  
  export default ErrorPopup;