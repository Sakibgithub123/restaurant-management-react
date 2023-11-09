import { Link } from "react-router-dom";


const MyFoodItem = ({myAddedFood}) => {
    const {_id,food_name,image,price}=myAddedFood;
    return (
        <div className="card  bg-[#2f2626] shadow-xl my-5 ">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                <h2 className="text-3xl text-[#fff] font-semibold text-center  ">
                        {food_name}
                    </h2>
                    <div className="card-actions justify-center gap-10">
                        <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{food_name}</h2>
                        <h2 className="text-base bg-[#d6c774] p-2 rounded-lg text-[#2f2626] font-semibold">Price : ${price}/-</h2>
                    </div>
                    <Link to={`/updateMyFood/${_id}`}> <button type="submit" className="btn w-full btn-outline text-[#fff]">Update</button></Link>
                </div>
            </div>
    );
};

export default MyFoodItem;