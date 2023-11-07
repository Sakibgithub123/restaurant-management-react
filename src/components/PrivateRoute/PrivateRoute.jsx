import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import loadingimg from "../../assets/Banner-img/loading.png"


const PrivateRoute = () => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    if(loading){
        return <p className="flex justify-center items-center"><img src={loadingimg} alt="" /></p>
    }

    if(user){
        return Children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>
};

export default PrivateRoute;