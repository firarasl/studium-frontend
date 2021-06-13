import React from 'react';
import {history} from "../../helpers/history";

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

export default getAllUsers;