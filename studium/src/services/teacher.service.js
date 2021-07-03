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
    upload,
    deleteTest,
    updateTest,
    gradeStudent
};

function deleteTest(id) {

  return fetch('http://localhost:8080/api/teacher/delete-test?testId='+id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then(async response => { 
    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();

    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message);
    }


    }) 

  .catch(error => {
    console.log(error);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    history.push("/login");
});

}

function updateTest(id, name, date) {
let newDate="";
console.log(date)
  if(date!==""){
    newDate=date.replace("T", " ");
  }
  console.log(newDate)

  return fetch('http://localhost:8080/api/teacher/update-test?name='+name +'&id='+id +'&date='+newDate, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then( async response => { 

    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();

    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message);
    }


    }) 

  .catch(error => {
    console.log(error);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    history.push("/login");
});

}


function gradeStudent(grade, username, id) {


  return fetch('http://localhost:8080/api/teacher/change-test-grade', {
    method: "PUT",
    body: JSON.stringify({ testId: id,
      studentName: username, grade:grade })
  ,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then(async response => { 


    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();
    console.log(response)

    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message);
    }


    }) 

  .catch(error => {
    console.log(error);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    history.push("/login");
});




}



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

function addTest(name, date, subjectName, clazzName) {
  let testDate="";
  testDate=date.replace("T", " ");
  console.log(testDate);

  return fetch('http://localhost:8080/api/teacher/add-test', {
    method: "POST",
    body: JSON.stringify({ name: name,
      date: testDate, subjectName:subjectName, clazzName:clazzName })
  ,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: sessionStorage.getItem("token")
    },
  })
  .then(async response => { 


    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();

    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message);
    }


    }) 

  .catch(error => {
    console.log(error);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    history.push("/login");
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
  .then(async response => { 


    const isJson = response.headers.get('content-type')?.includes('application/json');
    const data = isJson && await response.json();


    console.log(response)
    if (!response.ok) {
        errorPush(data.message)
    }
    else{
      successPush(data.message);
    }


    }) 

  .catch(error => {
    console.log(error);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("roles");
    history.push("/login");
});




}
