import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const teacherService = {
    getAllMySubjects,
    getAllMyStudents,
    addTest,
    getMyTests,
    getTestById,
    upload
};


function getTestById(id) {

  return fetch('http://localhost:8080/api/teacher/test/'+id.id, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then((response) => { 
      return response.json().then((data) => {
        console.log(data)
          return data;
      }).catch((err) => {
          console.log(err);
          history.push("/login");
      }) 
  });

}

function addTest(name, date, subjectName) {
  console.log(date)

  return fetch('http://localhost:8080/api/teacher/add-test?name='+name+'&date='+date+'&subjectName='+subjectName, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then((response) => { 
    if(response.ok){
      return response.json().then((data) => {
          successPush(data.message)
          return data;
      }).catch((err) => {
          console.log(err);
          history.push("/login");
      }) }

      else{
          errorPush("something went wrong!")
      }
  });

}


  function getAllMySubjects() {

    return fetch('http://localhost:8080/api/teacher/all-teachers-subjects', {
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

  function getMyTests() {

    return fetch('http://localhost:8080/api/teacher/all-tests', {
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

  
  function getAllMyStudents() {

    return fetch('http://localhost:8080/api/teacher/all-students', {
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



  
function upload(file) {
  var dataUpload = new FormData();
  // dataUpload.append(file, 'file')
    dataUpload.append('file', file)

  console.log(dataUpload.get('file'))

  for (var key of dataUpload.entries()) {
    console.log(key[0] + ', ' + key[1]);
}

  return fetch('http://localhost:8080/api/teacher/upload-csv-file', {
    method: "POST",
    body:dataUpload,
    headers: {
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then((response) => { 
    if(response.ok){
      return response.json().then((data) => {
          successPush(data.message)
          return data;
      }).catch((err) => {
          console.log(err);
          history.push("/login");
      }) }

      else{
          errorPush("something went wrong!")
      }
  });

}