import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPopup from '../components/ErrorPopup';
// import reportWebVitals from './reportWebVitals';

function beautifyRole(uglyRole){
    
  let currentStatus ="";
  switch(uglyRole){
    case("ROLE_STUDENT"):
    currentStatus="student"; break;
    case("ROLE_TEACHER"):
    currentStatus="teacher"; break;
    case("ROLE_ADMIN"):
    currentStatus="admin"; break;
  }
  return currentStatus;
}

export default beautifyRole;

