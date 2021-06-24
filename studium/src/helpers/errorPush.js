import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPopup from '../components/ErrorPopup';
// import reportWebVitals from './reportWebVitals';

function errorPush(msg){
    ReactDOM.render(

        <React.StrictMode>
          <ErrorPopup message={msg} />
      
        </React.StrictMode>,
        document.getElementById('msg')
      );
      
    //   reportWebVitals();
}

export default errorPush;

