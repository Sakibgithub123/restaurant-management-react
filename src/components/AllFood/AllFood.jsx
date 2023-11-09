import { Link, useLoaderData } from "react-router-dom";


const AllFood = ({ allfood }) => {

    const { _id, food_name, image, category, quantity, price } = allfood
    console.log(food_name)
    return (
        <div className="card  bg-[#2f2626] shadow-xl">
            <figure><img className="w-full h-50" src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-2">
                <h2 className="text-3xl text-[#fff] font-semibold text-left  ">
                    {food_name}
                </h2>
                <hr />
                <p className="text-xl text-[#FFD700] font-semibold text-center">Available Food:<div className="badge badge-outline ml-2 text-[#FFD700]">{quantity}</div></p>
                <div className="card-actions justify-center md:gap-10">
                    <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{category}</h2>
                    <h2 className="text-base bg-[#d6c774] p-2 rounded-lg text-[#2f2626] font-semibold">$ {price}/-</h2>
                </div>
                <Link to={`/foodDetails/${_id}`}> <button type="submit" className="btn w-full btn-outline text-[#fff]">View</button></Link>
            </div>
        </div>
        // FFD700
    );
};

export default AllFood;