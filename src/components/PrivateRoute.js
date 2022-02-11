import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Dashboard from './Dashboard';
// export default function PrivateRoute({ component: Component, ...rest }) {
//     const { currentUser } = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={props => {
//                 return currentUser ? <Component{...props} /> : <Navigate to="/login" />
//             }}
//         >

//         </Route>
//     );
// }

export default function PrivateRoute() {
    const { currentUser } = useAuth();
    return currentUser ? <Dashboard /> : <Navigate to="/login" />;
}