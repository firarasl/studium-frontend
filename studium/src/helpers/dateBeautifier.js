import React from 'react';
import ReactDOM from 'react-dom';
import ErrorPopup from '../components/ErrorPopup';
// import reportWebVitals from './reportWebVitals';

function dateBeautifier(uglyDate){
    
  let beautifulDate ="";

  var date = new Date(uglyDate);


  beautifulDate = date.getDate()+'/' + (date.getMonth()+1) + '/' + date.getFullYear() +' '+ date.getHours()+':'+ date.getMinutes();

  return beautifulDate;

}

export default dateBeautifier;

