import { useEffect, useState } from "react";
import AllFood from "./AllFood";


const AllFoodPage = () => {
    const [allFoods,setAllFood]=useState([])
    useEffect(() => {
        fetch('http://localhost:5000/food')
            .then(res => res.json())
            .then(data => setAllFood(data))
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
            {
                allFoods.map(allfood=><AllFood key={allfood._id} allfood={allfood}></AllFood>)
            }
            
        </div>
    );
};

export default AllFoodPage;