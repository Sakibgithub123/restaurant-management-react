import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyOrderPage2 from "./MyOrderPage2";
import { Helmet } from "react-helmet";


const MyOrderPage = () => {
    const [myOrderFoods, setMyOrderFood] = useState([]);
    const [OrderFoods, setOrderFood] = useState([]);
    const {user}=useContext(AuthContext)

   
    
    useEffect(() => {
        fetch(`https://restaurant-management-server-two.vercel.app/myorderfood/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyOrderFood(data)
                setOrderFood(data)
            })
    }, [user.email])
    // useEffect(() => {
    //     fetch('https://restaurant-management-server-two.vercel.app/myorderfood',{credentials:'include'})
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyOrderFood(data)
    //             setOrderFood(data)
    //         })
    // }, [])
    return (
        <div>
            <Helmet>
                <title>Phero|MyOrder</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            
            {
                 OrderFoods.map(myorder=><MyOrderPage2 key={myorder._id} myorder={myorder} myOrderFoods={myOrderFoods} setMyOrderFood={setMyOrderFood}></MyOrderPage2>)
            }
            
        </div>
        </div>
    );
};

export default MyOrderPage;