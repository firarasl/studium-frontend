import React from 'react';
import {history} from "../helpers/history";
import getRole from "../helpers/role";

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

    let param= username.username;
        return fetch('http://localhost:8080/api/user-info/'+param, requestOptions)
          .then((response) => { 
              return response.json().then((data) => {

                roleList=[];
                data.roles.map(role =>{
                  roleList.push(role.name);
                })
                
data.role = getRole(roleList);
                  return data;
              }).catch((err) => {
                  console.log(err);
                  history.push("/login");
              }) 
          });
}

export default getUserByUsername;