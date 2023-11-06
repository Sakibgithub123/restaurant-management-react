import { Link } from "react-router-dom";


const TopSeller = ({ topSellFood }) => {
    const { id, image, title, description } = topSellFood
    return (
        <div className="flex flex-row bg-[#f3e17a] p-5 rounded font-lato ">
            {/* <div className="w-2/5">
            <img src={image} />
            </div> */}
            <div className="avatar border-[#392623] rounded-full border-[2px]">
                <div className="w-24 rounded-full">
                    <img src={image} />
                </div>
                </div>

               <div className="flex flex-row gap-10 border-[#392623] border-b-[2px]">
               <div className="3/5">
                    <h3 className="text-[#392623] font-semibold text-2xl pl-4">{title}</h3>
                    {/* <p>{description}</p> */}
                    <Link to={`/foodDetails/${id}`}> <button className="bg-[#FFD700] text-[#fff] py-2 px-4 font-semibold rounded">Details</button> </Link>
                   
                </div>
                <div className="3/5 flex justify-center items-center">
                    <h3 className="text-[#392623] font-semibold text-2xl">$230</h3>
                    {/* <p>{description}</p> */}
                </div>
               </div>

            </div>
            );
};

            export default TopSeller;