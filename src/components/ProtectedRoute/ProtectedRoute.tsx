import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';

interface IProtectedRoute {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ children }) => {
    const location = useLocation();
    const cookie = Cookies.get('a4weopkd1287u65');

    if (!cookie) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
