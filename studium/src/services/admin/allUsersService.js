import React from 'react';
import {history} from "../../helpers/history";
import getRole from "../../helpers/role";

function getAllUsers() {
    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json', 'Authorization':  sessionStorage.getItem("token") },
        
    // };

    

    // let users =[];
    // fetch('http://localhost:8080/api/admin/all-users', requestOptions)
    //     .then(async response => {
            
    //         const isJson = response.headers.get('content-type')?.includes('application/json');
    //         const data = isJson && await response.json();

    //         // check for error response
    //         if (!response.ok) {
    //             // get error message from body or default to response status
    //            history.push("/login");
    //         }
    //         console.log(data);

    //         users=data;
    //         console.log(users);
    //         return users;

    //     })
    //     .catch(error => {
    //         history.push("/login");
    //         console.error('There was an error!', error);
    //     });







        // return fetch('http://localhost:8080/api/admin/all-users',
        // {
        //     method: "GET",
        //     headers: { 'Content-Type': 'application/json', 'Authorization':  sessionStorage.getItem("token") },

        // })
      
        // .then((response) => response.json())
        // .then((responseData) => {
        //   console.log(responseData);
        //   return responseData;
        // })
        // .catch(error => {console.warn(error);
        
        //     history.push("/login");
        // });










        // var xhr = new XMLHttpRequest();
        // var json_obj, status = false;        xhr.open("GET", "http://localhost:8080/api/admin/all-users", true);

        // xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
        // xhr.setRequestHeader("Authorization", sessionStorage.getItem("token"));

        // xhr.onload = function (e) {
        //   if (xhr.readyState === 4) {
        //     if (xhr.status === 200) {
        //       var json_obj = JSON.parse(xhr.responseText);
        //       status = true;
        //       console.error(json_obj);

        //       return json_obj;
        //     } else {
        //       console.error(xhr.statusText);
        //     }
        //   }
        // }.bind(this);
        // xhr.onerror = function (e) {
        //   console.error(xhr.statusText);
        // };
        // xhr.send(null);
    











        // fetch( "http://localhost:8080/api/admin/all-users", {
        //     method: "GET",
        //     headers: {
        //       "Content-Type": "application/json",
        //       Accept: "application/json",
        //       Authorization: sessionStorage.getItem("token")
        //     }
        //   })
        //     .then(res => {
        //       if (res.ok) {
        //         console.error(res);
        //         return res;
        //       } else {
        //         history.push("/login");
        //       }
        //     });




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