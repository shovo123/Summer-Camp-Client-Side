import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import useInstructors from '../Hook/useInstructors';

const InstructorRoute = ({children}) => {
  const [isInstructor, isInstructorsLoading] = useInstructors()
  const {user,loading} = useAuth()
  const location = useLocation()
  if(loading || isInstructorsLoading){
    return <h1 className='absolute top-1/2 left-1/2'><span className="loading text-error loading-infinity loading-lg"></span></h1>
  }
  if(user && isInstructor){
    return children
  }
  return <Navigate to='/login' state={{from: location}}/>
    
};

export default InstructorRoute;