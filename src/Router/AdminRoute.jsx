import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import useAdmin from '../Hook/useAdmin';

const AdminRoute = ({children}) => {
  const [isAdmin, isAdminLoading] = useAdmin()
  const {user,loading} = useAuth()
  const location = useLocation()
  if(loading || isAdminLoading){
    return <h1 className='absolute top-1/2 left-1/2'><span className="loading text-error loading-infinity loading-lg"></span></h1>
  }
  if(user && isAdmin){
    return children
  }
  return <Navigate to='/login' state={{from: location}}/>
    
};

export default AdminRoute;