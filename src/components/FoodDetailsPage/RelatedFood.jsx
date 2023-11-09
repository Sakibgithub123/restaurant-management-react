import { useEffect, useState } from "react";


const RelatedFood = ({singleFoodsDetails}) => {
    const [nameByFoods, setnameByFoodd] = useState([]);
    const {food_name}=singleFoodsDetails
    useEffect(() => {
        fetch(`https://restaurant-management-server-theta.vercel.app/foodname/${food_name}`)
            .then(res => res.json())
            .then(data => setnameByFoodd(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {
                nameByFoods.slice(0,3).map(nameByFood=>
                    <>
                  <div className="text-center bg-[#fcee9d] space-y-3 rounded-lg">
                    <div className="">
                        <img className="w-full" src={nameByFood.image} alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl text-[#83837d] font-bold">{nameByFood.food_name}</h3>
                        <h2 className="text-lg text-[#894444] font-semibold">Price : ${nameByFood.price}</h2>
                    </div>
                </div>
                    
                    </>
                    
                    
                    )

            }
            
        </div>
    );
};

export default RelatedFood;