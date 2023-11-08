import { Link } from "react-router-dom";
import Swal from 'sweetalert2'

const MyOrderPage2 = ({myorder,myOrderFoods,setMyOrderFood}) => {
    const {_id,food_name,image,category,quantity,addby,price}=myorder;
    const handleDelete=(_id)=>{
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
              
              fetch(`http://localhost:5000/myorderfood/${_id}`,{
                method:'DELETE',

              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your order item has been deleted.",
                        icon: "success"
                      });
                      const remainingFood=myOrderFoods.filter(foodItem=>foodItem._id !== _id);
                      setMyOrderFood(remainingFood);
                      

                }
              })
            }
          });

    }
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
             <button onClick={()=>handleDelete(_id)} className="btn w-full btn-outline text-[#fff]">Delete</button>
        </div>
    </div>
    );
};

export default MyOrderPage2;