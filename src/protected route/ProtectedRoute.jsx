import React from 'react';
import { Navigate } from "react-router-dom"

export const ProtectedRoute = ()=>{

  const user = localStorage.getItem('user')
  if(user){
    return children
  } else{
    return <Navigate to={'/login'}/>
  }
}

//admin 
export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'varsha@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}