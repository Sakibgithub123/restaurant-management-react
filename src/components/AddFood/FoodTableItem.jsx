import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
const FoodTableItem = ({foodItem,foodItems,setFoodItem}) => {

    const {_id,food_name,image ,category,quantity,
        price,addby,food_origin,description}=foodItem;

    const handleDelete=(_id)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              
              fetch(`http://localhost:5000/food/${_id}`,{
                method:'DELETE',

              })
              .then(res=>res.json())
              .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your food item has been deleted.",
                        icon: "success"
                      });
                      const remainingFood=foodItems.filter(foodItem=>foodItem._id !== _id);
                      setFoodItem(remainingFood);
                      

                }
              })
            }
          });

    }
    return (
        // <div>
            <tr>
            <td> {food_name}</td>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td> {category} </td>
                <td>{quantity}</td>
                <td> {price} </td>
                <td>{addby}</td>
                <td> {food_origin} </td>
                <td>{description}</td>
                <th>
                    <Link to={`/updateFood/${_id}`}><button className="btn btn-ghost btn-xs">Edit</button></Link>
                    <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
            
        // </div>
    );
};

export default FoodTableItem;