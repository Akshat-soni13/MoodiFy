import React from 'react'
import { useAuth } from '../hooks/useAuth'
import Login from './../pages/Login';
import LoaderGeneral from "../../../shared/LoaderGeneral"
import { Navigate, useNavigate } from 'react-router-dom';
import Loader from  "../../../shared/Loader"
const Protected = ({ children }) => {

    const navigate = useNavigate()
    const {user,loading} = useAuth()

     if(loading)
    {
        return <h1>Loading </h1>
    }

    if(   !user )
    {
        return <Navigate to="/Login"></Navigate>
    }

   

  return (
   children
  )
}

export default Protected