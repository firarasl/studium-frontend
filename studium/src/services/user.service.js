import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const userService = {
    getUserByUsername,
    getAllUsers,
    getMyProfile,
    updateMyData,
    addUser
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



function getAllUsers() {

    return fetch('http://localhost:8080/api/admin/all-users', {
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

function addUser(username, password,firstname,lastname, role ) {

  return fetch('http://localhost:8080/api/admin/add-user', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
    body: JSON.stringify({ username: username,
      password: password, firstname:firstname, lastname: lastname, role: role })
  })
  .then((response) => { 
    if(response.ok){
      return response.json().then((data) => {
        successPush(data.message);
          return data;
      }).catch((err) => {
          console.log(err);
          history.push("/login");
      }) 
    }
    else{
      return response.json().then((data) => {
        errorPush(data.message);
          return data;
      }).catch((err) => {
          console.log(err);
          history.push("/login");
      }) 
    }

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
        console.log(data);
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
  .then((response) => { 
      return response.json().then((data) => {
        if(data.status === 500){
          errorPush(data.message);
        }else if(data.status === 200){
          successPush("You changed your data!");
          history.push("/home");
          return;
        }
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 
  });
}