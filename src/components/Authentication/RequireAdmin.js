import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [adminRole, adminLoading] = useAdmin(user);
    const location = useLocation();

    if (loading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }
    if (adminLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }
    if (!adminRole) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAdmin;