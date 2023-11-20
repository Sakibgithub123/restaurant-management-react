import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import MyFoodItem from "./MyFoodItem";
import { Helmet } from "react-helmet";


const MyAddedFoodItems = () => {
    const {user}=useContext(AuthContext)
    const email=user.email;
    const [myAddedFood,setMyAddedFood] = useState([]);
   
    
    useEffect(() => {
        fetch(`https://restaurant-management-server-two.vercel.app/myfood/${email}`,{credentials:'include'})
            .then(res => res.json())
            .then(data => setMyAddedFood(data))
    }, [])
    // console.log(myAddedFoods)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <Helmet>
                <title>Phero|MyFood</title>
            </Helmet>
            {
                myAddedFood.map(myAddedFood=><MyFoodItem key={myAddedFood._id} myAddedFood={myAddedFood}></MyFoodItem>) 
            }
            
        </div>
    );
};

export default MyAddedFoodItems;