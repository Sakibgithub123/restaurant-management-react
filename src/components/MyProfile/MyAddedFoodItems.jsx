import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import MyFoodItem from "./MyFoodItem";


const MyAddedFoodItems = () => {
    const [myAddedFoods, setMyAddedFood] = useState([]);
    const {user}=useContext(AuthContext)
    const email=user.email;
    
    useEffect(() => {
        fetch(`http://localhost:5000/food/${email}`)
            .then(res => res.json())
            .then(data => setMyAddedFood(data))
    }, [])
    console.log(myAddedFoods)
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {
                myAddedFoods.map(myAddedFood=><MyFoodItem key={myAddedFood._id} myAddedFood={myAddedFood}></MyFoodItem>) 
            }
            
        </div>
    );
};

export default MyAddedFoodItems;