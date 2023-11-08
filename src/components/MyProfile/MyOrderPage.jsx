import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyOrderPage2 from "./MyOrderPage2";


const MyOrderPage = () => {
    const [myOrderFoods, setMyOrderFood] = useState([]);
    const {user}=useContext(AuthContext)
    const email=user.email;
    
    useEffect(() => {
        fetch(`http://localhost:5000/myorderfood/${email}`)
            .then(res => res.json())
            .then(data => setMyOrderFood(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                 myOrderFoods.map(myorder=><MyOrderPage2 key={myorder._id} myorder={myorder}></MyOrderPage2>)
            }
            
        </div>
    );
};

export default MyOrderPage;