import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/contextapi';

const RedirectToAdminDashboard = () => {
    const navigate = useNavigate();
    const {isAdmin , token} = useAuth();
    useEffect(()=>{
        if(isAdmin && token){
            navigate('/admin/dashboard');
        }
    },[isAdmin, token])
  return null;
}

export default RedirectToAdminDashboard