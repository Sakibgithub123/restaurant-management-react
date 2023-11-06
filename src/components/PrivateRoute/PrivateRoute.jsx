import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = () => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <p>Loading....</p>
    }

    if(user){
        return Children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;