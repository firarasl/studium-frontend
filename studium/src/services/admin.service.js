import React from 'react';
import {history} from "../helpers/history";
import errorPush from '../helpers/errorPush';
import successPush from '../helpers/successpopup';

export const adminService = {
    updateUser,
    deleteUser,
    getAllClasses,
    getClazzById,
    updateClazzName,
    studentToClazz,
    deleteClazz,
    addClass,
    getAllSubjects,
    addSubject,


    getSubjectById,
    deleteSubject,
    archievateSubject,
    updateSubject,
};


function updateUser(newUsername, newFirstname, newLastname, newPassword, userId){


    return fetch('http://localhost:8080/api/admin/update-user', {
      method: "PUT",
      body: JSON.stringify({ username: newUsername, id: userId,
        password: newPassword, firstname:newFirstname, lastname: newLastname
       }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      }
    })
    .then((response) => { 

      if(response.ok){
        return response.json().then((data) => {
          successPush(data.message);
          // history.push("/allUsers-admin");
          return;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 

      }
      else{
        return response.json().then((data) => {
          errorPush(data.message);
          history.push("/home");
          return;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 
      }
      

    });
  }
  function updateSubject(id, name, teacherName){
console.log(id)
console.log(name)
console.log(teacherName)

    return fetch('http://localhost:8080/api/admin/update-subject', {
      method: "PUT",
      body: JSON.stringify({ id: id,
        name: name, teacherName:teacherName
       }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      }
    })
    .then((response) => { 

      if(response.ok){
        return response.json().then((data) => {
          successPush(data.message);
          // history.push("/allUsers-admin");
          return;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 

      }
      else{
        return response.json().then((data) => {
          errorPush(data.message);
          history.push("/home");
          return;
      }).catch((err) => {
          console.log(err);
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("roles");
          history.push("/login");
      }) 
      }
      

    });
  }

  function deleteSubject(id ) {

    return fetch('http://localhost:8080/api/admin/delete-subject?id='+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      },
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
  
    });}
  


  function deleteUser(id ) {

    return fetch('http://localhost:8080/api/admin/delete-user?id='+id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: sessionStorage.getItem("token")
      },
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


  
  function getAllClasses() {

    return fetch('http://localhost:8080/api/admin/all-clazzes', {
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
 


  function getClazzById(id) {

    return fetch('http://localhost:8080/api/admin/clazz/'+id.id, {
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
  function getSubjectById(id) {
    console.log(id)

    return fetch('http://localhost:8080/api/admin/subject/'+id.id, {
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
  function updateClazzName(id, name) {

    return fetch('http://localhost:8080/api/admin/update-clazzName?id='+id +'&name='+name, {
      method: "PUT",
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


  
  function studentToClazz(id, name) {

    return fetch('http://localhost:8080/api/admin/update-student-toclazz?clazzId='+id +'&username='+name, {
      method: "PUT",
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

  function archievateSubject(id) {

    return fetch('http://localhost:8080/api/admin/archieve-subject?id='+id , {
      method: "PUT",
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

    
  function deleteClazz(id) {

    return fetch('http://localhost:8080/api/admin/delete-class?clazzId='+id, {
      method: "DELETE",
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



  function addClass(name) {

    return fetch('http://localhost:8080/api/admin/add-clazz?clazzname='+name, {
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

  function addSubject(name, teacher) {

    return fetch('http://localhost:8080/api/admin/add-subject?name='+name+'&teacherName='+teacher, {
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

  
function getAllSubjects() {

  return fetch('http://localhost:8080/api/admin/all-subjects', {
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
          errorPush("something went wrong!")
          // history.push("/login");
      }) 
  });

}