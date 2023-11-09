import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const TopSeller = ({ topSellFood }) => {
    const { _id, food_name, image, category, price, description } = topSellFood;
    // console.log(_id)
    const [topfoods,settopfood]=useState([])
    useEffect(() => {
        fetch('https://restaurant-management-server-theta.vercel.app/food')
            .then(res => res.json())
            .then(data => settopfood(data))
    }, [])

    // for(const id of _id){
        
        const foodss=topfoods.filter(topfood =>topfood.food_name ===_id)
        console.log(foodss)
    // }
    // 
    
    return (
        <>
        {
            foodss.map(tfood=>
                <>
                <div className="flex flex-col md:flex-row bg-[#2f2626] p-5 rounded font-lato shadow-xl ">
          
            {/* <div className="w-2/5">
            <img src={image} />
            </div> */}
            <div className="avatar  border-[#83837d] rounded-full border-[2px]">
                <div className="w-full md:w-40  rounded-full">
                    <img className="w-full " src={tfood.image} />
                </div>
            </div>

            <div className="flex flex-col md:flex-row p-4 justify-center items-center md:justify-between md:items-center gap-3 md:gap-10 border-[#392623] border-b-[2px]">
                <div className=" text-center md:text-left pl-4  ">
                    <h3 className="text-[#83837d] font-semibold text-2xl ">
                        {tfood.food_name}
                        <div className="badge badge-secondary ml-2 mb-2">{tfood.category}</div>
                    </h3>
                    <div className="flex flex-row justify-center gap-5">
                        <h3 className=" text-[#894444]   font-medium text-lg">Price : $ {tfood.price}/-</h3>
                    </div>
                    <p className="text-[#c8b5b5] text-base">{tfood.description ? tfood.description.slice(0, 40) : ''}</p>


                </div>
                <div className=" flex justify-center items-center">
                    <Link to={`/foodDetails/${tfood._id}`}> <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold rounded">View</button> </Link>


                </div>
            </div>

        </div>
                
                
                </>
                
                
                
                
                )
        }
        </>
    );
};

export default TopSeller;