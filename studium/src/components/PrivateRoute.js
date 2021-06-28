import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';


export const PrivateRoute = ({ component: Component,  allowedRoles, ...rest }) => (
  

    <Route {...rest} render={props => (
        sessionStorage.getItem('role') && allowedRoles.includes(sessionStorage.getItem('role'))  && sessionStorage.getItem('token')
            ? <><Navbar/> <Component {...props} /></>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />

)