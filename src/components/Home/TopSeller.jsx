import { Link } from "react-router-dom";


const TopSeller = ({ topSellFood }) => {
    const { _id,food_name, image, category,price, description } = topSellFood
    return (
        <div className="flex flex-row bg-[#2f2626] p-5 rounded font-lato shadow-xl ">
            {/* <div className="w-2/5">
            <img src={image} />
            </div> */}
            <div className="avatar border-[#83837d] rounded-full border-[2px]">
                <div className="w-24 rounded-full">
                    <img src={image} />
                </div>
                </div>

               <div className="flex flex-row justify-between items-center gap-10 border-[#392623] border-b-[2px]">
               <div className="3/5 text-left pl-4  ">
                    <h3 className="text-[#83837d] font-semibold text-2xl ">
                        {food_name}
                        <div className="badge badge-secondary ml-2 mb-2">{category}</div>
                        </h3>
                    <div className="flex flex-row gap-5">
                    <h3 className=" text-[#894444]  font-medium text-lg">Price : $ {price}/-</h3>
                    {/* <h3 className="text-lg bg-[#FFD700]  p-1 font-medium">{category}</h3> */}
                    </div>
                    <p className="text-[#c8b5b5] text-base">{description? description.slice(0,40):''}</p>
                   
                   
                </div>
                <div className="3/5 flex justify-center items-center">
                <Link to={`/foodDetails/${_id}`}> <button className="bg-[#894444] text-[#fff] py-2 px-4 font-semibold rounded">View</button> </Link>
                    
                    
                </div>
               </div>

            </div>
            );
};

            export default TopSeller;