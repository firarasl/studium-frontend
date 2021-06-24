import React from 'react';
import ReactDOM from 'react-dom';
import SuccessPopup from '../components/SuccessPopup';
// import reportWebVitals from './reportWebVitals';

function successPush(msg){

    ReactDOM.render(

        <React.StrictMode>
          <SuccessPopup message={msg} />
      
        </React.StrictMode>,
        document.getElementById('msg')
      );
      
    //   reportWebVitals();
}

export default successPush;

