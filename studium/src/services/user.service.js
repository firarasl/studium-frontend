import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const userService = {
    getUserByUsername,
    getAllUsers,
    getMyProfile,
    updateMyData
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
    let roleList=[];

    let param=""
    if( username) {
param=username.username;
    } else{
      history.push("/home");
    return;
    }
    
        return fetch('http://localhost:8080/api/user-info/'+param, requestOptions)
          .then((response) => { 
              return response.json().then((data) => {

                roleList=[];
                data.roles.map(role =>{
                  roleList.push(role.name);
                })
                
data.role = roleList;
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
        console.log(data);
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