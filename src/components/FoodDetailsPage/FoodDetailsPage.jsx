import { useLoaderData } from "react-router-dom";
import banner4 from "../../assets/Banner-img/banner4.jpg"

const FoodDetailsPage = () => {
    const singleFoodsDetails = useLoaderData()
    const {_id,food_name,image ,category,quantity,price,addby,food_origin,description}=singleFoodsDetails
    
    return (
        <div className="max-w-5xl mx-auto my-10 font-lato">
            <div className="flex flex-row rounded-lg">
                <img className="rounded" src={image} alt="" />
                <div className="text-left pl-8 space-y-4">
                    <h3 className="text-xl text-[#83837d] font-semibold">{food_name}</h3>
                    <h2 className="text-xl text-[#894444] font-semibold">Price : $ {price}/-</h2>
                    <div className="flex flex-row gap-5">
                        <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{category}</h2>
                        <h2 className="text-base bg-[#2f2626] p-2 rounded-lg text-[#fff] font-semibold">{food_origin}</h2>
                    </div>
                    <h2 className="text-base  text-[#392623] font-semibold">Made By : {addby}</h2>
                    <button className="bg-[#2f2626] underline italic text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    <h4 className="text-lg text-[#392623] font-medium">Description :</h4>
                    <p className="text-base text-[#3e3e3e] font-medium leading-8">
                        {description}
                    </p>
                </div>

            </div>
            <h3 className="text-4xl underline italic text-center text-[#2f2626] font-extrabold my-5">More Foods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 my-10">
                <div className="text-center bg-[#fcee9d] space-y-3 rounded-lg">
                    <div className="">
                        <img className="w-full" src={banner4} alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl text-[#83837d] font-bold">Burger</h3>
                        <h2 className="text-lg text-[#894444] font-semibold">Price : $320.00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;