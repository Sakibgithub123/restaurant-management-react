import { Link } from "react-router-dom";


const MyAddedFoodItems = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="card w-96 bg-[#2f2626] shadow-xl my-5 ">
                <figure><img src="" alt="Shoes" /></figure>
                <div className="card-body space-y-2">
                    <div className="card-actions justify-center gap-20">
                        <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">Name</h2>
                        <h2 className="text-base bg-secondary p-2 rounded-lg text-[#fff] font-semibold">Price</h2>
                    </div>
                    <Link to=""> <button type="submit" className="btn w-full btn-outline text-[#fff]">Update</button></Link>
                </div>
            </div>
            
        </div>
    );
};

export default MyAddedFoodItems;