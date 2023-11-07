// import { useLoaderData, useParams } from "react-router-dom";
import banner4 from "../../assets/Banner-img/banner4.jpg"

const FoodDetailsPage = () => {
    // const singleFoods = useLoaderData()
    
    return (
        <div className="max-w-5xl mx-auto my-10 font-lato">
            <div className="flex flex-row rounded-lg">
                <img className="rounded" src={banner4} alt="" />
                <div className="text-left pl-8 space-y-4">
                    <h3 className="text-xl text-[#FFD700] font-semibold">Burger</h3>
                    <h2 className="text-xl text-[#392623] font-semibold">Price : $320</h2>
                    <div className="flex flex-row gap-5">
                        <h2 className="text-base bg-[#52ea63] p-2 rounded-lg text-[#fff] font-semibold">Category</h2>
                        <h2 className="text-base bg-[#52ea63] p-2 rounded-lg text-[#fff] font-semibold">Food Origin</h2>
                    </div>
                    <h2 className="text-base  text-[#392623] font-semibold">Made By : Ajmal Hossain</h2>
                    <button className="bg-[#FFD700] text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    <h4 className="text-lg text-[#392623] font-medium">Description :</h4>
                    <p className="text-base text-[#392623] font-medium leading-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Explicabo facere error nihil? Provident vitae molestias ab expedita facere a repellendus
                        magnam omnis atque laboriosam. Deleniti numquam nisi cum distinctio vitae!
                    </p>
                </div>

            </div>
            <h3 className="text-4xl underline italic text-center text-[#FFD700] font-extrabold my-5">More Foods</h3>
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
                        <h3 className="text-xl text-[#FFD700] font-bold">Burger</h3>
                        <h2 className="text-lg text-[#392623] font-semibold">Price : $320.00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;