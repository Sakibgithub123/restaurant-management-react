import { Link } from "react-router-dom";


const MyOrderPage2 = ({myorder}) => {
    const {_id,food_name,image,category,quantity,addby,price}=myorder;
    return (
        <div className="card w-96 bg-[#2f2626] shadow-xl my-5 ">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body space-y-2">
            <div className="card-actions justify-center gap-20">
                <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{food_name}</h2>
                <h2 className="text-base bg-secondary p-2 rounded-lg text-[#fff] font-semibold">{price}</h2>
                <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">Time</h2>
                <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{quantity}</h2>
                <h2 className="text-base bg-secondary p-2 rounded-lg text-[#fff] font-semibold">{addby}</h2>
            </div>
            <Link to=""> <button type="submit" className="btn w-full btn-outline text-[#fff]">Delete</button></Link>
        </div>
    </div>
    );
};

export default MyOrderPage2;