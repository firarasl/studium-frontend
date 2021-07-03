import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const userService = {
    getUserByUsername,
    getMyProfile,
    updateMyData,
    sendMessage,
    getUnreadMessages,
    getInbox,
    openMessage
};


function getUserByUsername(username) {

    const requestOptions = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: sessionStorage.getItem("token")
          },
          
    };
    let param=""
    if( username) {
param=username.username;
    } else{
      errorPush("username is empty");
      // history.push("/home");
    return;
    }
    
        return fetch('http://localhost:8080/api/users/user-info/'+param, requestOptions)
          .then((response) => { 
              return response.json().then((data) => {

                  return data;
              }).catch((err) => {
                  console.log(err);
                  history.push("/login");
              }) 
          });
}

function openMessage(id) {

  return fetch('http://localhost:8080/api/users/open-message?messageId='+id.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    }
  })
  .then((response) => { 
      return response.json().then((data) => {
          return data;
      }).catch((err) => {
          console.log(err);
          // history.push("/login");
      }) 
  });

}


function getInbox() {

  return fetch('http://localhost:8080/api/users/my-inbox', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    }
  })
  .then((response) => { 
      return response.json().then((data) => {
          return data;
      }).catch((err) => {
          console.log(err);
          // history.push("/login");
      }) 
  });

}


function sendMessage(name, text ) {

  return fetch('http://localhost:8080/api/users/send-message', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
    body: JSON.stringify({ text: text,
      receiverUsername: name })
  })
  .then(async response => { 

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();

    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message)
    }

})
.catch(error => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
    history.push("/login");
    console.error('There was an error!', error);
});



}


function getMyProfile() {

  return fetch('http://localhost:8080/api/users/my-data', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    }
  })
  .then((response) => { 
      return response.json().then((data) => {
          return data;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 
  });

}
function getUnreadMessages() {

  return fetch('http://localhost:8080/api/users/my-unread-msgs', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    }
  })
  .then((response) => { 
      return response.json().then((data) => {
          return data;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 
  });

}


function updateMyData(newUsername, newFirstname, newLastname, newPassword){


  return fetch('http://localhost:8080/api/users/update-myself', {
    method: "PUT",
    body: JSON.stringify({ username: newUsername,
      password: newPassword, firstname:newFirstname, lastname: newLastname
     }),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    }
  })
  .then(async response => { 

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();

    if (!response.ok) {
      history.push("/login");

    }
    else{
      successPush(data.message)
    }

})
.catch(error => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
    history.push("/login");
    console.error('There was an error!', error);
});




}