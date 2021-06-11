import React from 'react';
import {history} from "../helpers/history";
import getRole from "../helpers/role";

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username,
        password: password })
    };
    fetch('http://localhost:8080/api/auth/login', requestOptions)
        .then(async response => {
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
               history.push("/login");
            }
sessionStorage.setItem('username', data.username);
sessionStorage.setItem('token', "Bearer " + data.accessToken);
sessionStorage.setItem('role', getRole(data.roles));


            history.push("/home-"+ getRole(data.roles));

        })
        .catch(error => {
            history.push("/login");
            console.error('There was an error!', error);
        });

}

export default login;