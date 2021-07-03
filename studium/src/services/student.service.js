import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const studentService = {

    getMySubjects,
    getTestsBySubject
};


function getMySubjects() {

    return fetch('http://localhost:8080/api/student/my-subjects-gpa', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      },
    })
    .then((response) => { 
        return response.json().then((data) => {
            return data;
        }).catch((err) => {
            console.log(err);
            history.push("/login");
        }) 
    });

}


function getTestsBySubject(id) {

    return fetch('http://localhost:8080/api/student/my-tests-grade?subjectId='+id.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: sessionStorage.getItem("token")
        },
      })
      .then((response) => { 
          return response.json().then((data) => {
            
              return data;
          }).catch((err) => {
              console.log(err);
              history.push("/login");
          }) 
      });
}

