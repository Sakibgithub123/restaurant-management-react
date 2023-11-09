import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyOrderPage2 = ({ myorder, myOrderFoods, setMyOrderFood }) => {
    const { _id, food_name, image, date, quantity, addby, price } = myorder;
    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this order!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://restaurant-management-server-theta.vercel.app/myorderfood/${_id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your order item has been deleted.",
                                icon: "success"
                            });
                            const remainingFood = myOrderFoods.filter(foodItem => foodItem._id !== _id);
                            setMyOrderFood(remainingFood);


                        }
                    })
            }
        });

    }
    return (
        <div className="card  bg-[#2f2626] shadow-xl my-5 ">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-2">
                <div className="">
                    
                        <h2 className="text-2xl  p-2 rounded-lg text-[#83837d] font-semibold">{food_name}</h2>
                        <h2 className="text-base  rounded-lg text-[#fff] font-semibold my-2 text-center">Date : {date}</h2>
                       <div className="flex justify-center gap-10 my-2">
                       <h2 className="text-base bg-[#d6c774] p-2 rounded-lg text-[#fff] font-semibold">$ {price}/-</h2>
                        <h2 className="text-base bg-[#d6c774] p-2 rounded-lg text-[#fff] font-semibold">Qty : {quantity}</h2>
                       </div>
                    

                </div>
                <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#dad0d0] font-semibold"><span className="text-[#fff]">AddedBy : </span>{addby}</h2>
                <button onClick={() => handleDelete(_id)} className="btn w-full btn-outline text-[#fff]">Delete</button>
            </div>
        </div>
    );
};

export default MyOrderPage2;