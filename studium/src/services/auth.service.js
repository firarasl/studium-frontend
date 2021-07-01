import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';


export const auth = {
    login
};

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

            if (!response.ok) {
                errorPush(data.message)
            }
            else{
                sessionStorage.setItem('token', "Bearer " + data.accessToken);
                sessionStorage.setItem('role', data.roles);
                history.push("/home");
            }

        })
        .catch(error => {
            history.push("/login");
            console.error('There was an error!', error);
        });

}

