import React from 'react';


const role = (roles) => {

    let currentRole = "";
    if(roles.includes("ROLE_ADMIN")){
        currentRole="admin"
    }
    else if(roles.includes("ROLE_TEACHER")){
        currentRole="teacher"
    }
    else if(roles.includes("ROLE_STUDENT")){
        currentRole="student"
    }

    return currentRole;
}

export default role;