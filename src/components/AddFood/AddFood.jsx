import { useLoaderData } from "react-router-dom";
import FoodTableItem from "./FoodTableItem";
import Swal from 'sweetalert2'



const AddFood = () => {
    const foodItems=useLoaderData()

    const handleAddFood=(e)=>{
        e.preventDefault();

        const form=e.target;
        const food_name=form.food_name.value;
        const image=form.image.value;
        const category=form.category.value;
        const quantity=form.quantity.value;
        const price=form.price.value;
        const addby=form.addby.value;
        const food_origin=form.food_origin.value;
        const description=form.description.value;

        const addFood={food_name,image ,category,quantity,
             price,addby,food_origin,description}
             console.log(addFood)

             fetch('http://localhost:5000/food',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(addFood)

             })
             .then(res=>res.json())
             .then(data => {
                console.log(data);
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
             })
    }
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#FFD700]">
                    <h3 className="text-xl text-[#00072D] font-semibold">Add Food Form</h3>
                    <form onSubmit={handleAddFood} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Name</span>
                            </label>
                            <input type="text" placeholder="Enter Food Name" name="food_name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Image</span>
                            </label>
                            <input type="text" placeholder="Enter Food Image Url" name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Category</span>
                            </label>
                            <input type="text" placeholder="Enter Food Category" name="category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder="Enter quantity" name="quantity" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" placeholder="Enter Food Price" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add By</span>
                            </label>
                            <input type="text" placeholder="Enter Add By" name="addby" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Food Origin (Country)</span>
                            </label>
                            <input type="text" placeholder="Enter Food Origin" name="food_origin" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description </span>
                            </label>
                            <input type="text" placeholder="Enter Food descriptio" name="description" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className=" btn btn-outline text-[#00072D] py-2 px-4 font-semibold rounded">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* food table */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-[#00072D]">
                            <th>Food Name</th>
                            <th>Food Image</th>
                            <th>Food Category</th>
                            <th>quantity</th>
                            <th>Price</th>
                            <th>Add By</th>
                            <th>Food Origin</th>
                            <th>Description </th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            foodItems.map(foodItem=><FoodTableItem key={foodItem._id} foodItem={foodItem} ></FoodTableItem>)
                        }

                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AddFood;