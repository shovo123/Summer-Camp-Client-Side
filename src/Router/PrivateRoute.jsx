import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const PrivateRoute = ({children}) => {
  const {user,loading} = useAuth()
  const location = useLocation()
  if(loading){
    return <h1 className='absolute top-1/2 left-1/2'><span className="loading text-error loading-infinity loading-lg"></span></h1>
  }
  if(user){
    return children
  }
  return <Navigate to='/login' state={{from: location}}/>
    
};

export default PrivateRoute;
