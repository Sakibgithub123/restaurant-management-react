import { useLoaderData } from "react-router-dom";
import FoodTableItem from "./FoodTableItem";
import Swal from 'sweetalert2'
import { useState } from "react";
import { Helmet } from "react-helmet";



const AddFood = () => {
    const loaderfoodItems=useLoaderData()
    const [allFoodItem,setallFoodItem]=useState(loaderfoodItems)
    const [foodItems,setFoodItem]=useState(loaderfoodItems)
   

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
            //  console.log(addFood)

             fetch('https://restaurant-management-server-two.vercel.app/food',{
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
            <Helmet>
                <title>Phero|Add Food</title>
            </Helmet>
            <div className="md:hero min-h-screen my-10">
                <div className="p-2 md:p-5 md:card flex-shrink-0 md:max-w-4xl shadow-2xl mt-10 bg-[#2f2626]">
                    <h3 className="text-2xl text-[#fff] font-semibold">Add Food Form</h3>
                    <form onSubmit={handleAddFood} >
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Food Name</span>
                            </label>
                            <input type="text" placeholder="Enter Food Name" name="food_name" className="input input-bordered " />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Food Image</span>
                            </label>
                            <input type="text" placeholder="Enter Food Image Url" name="image" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Food Category</span>
                            </label>
                            <input type="text" placeholder="Enter Food Category" name="category" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Quantity</span>
                            </label>
                            <input type="text" placeholder="Enter quantity" name="quantity" className="input input-bordered" />
                        </div>
                        </div>
                       <div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Price</span>
                            </label>
                            <input type="text" placeholder="Enter Food Price" name="price" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Add By</span>
                            </label>
                            <input type="text" placeholder="Enter Add By" name="addby" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Food Origin (Country)</span>
                            </label>
                            <input type="text" placeholder="Enter Food Origin" name="food_origin" className="input input-bordered" />
                        </div>
                       </div>
                       </div>
                       <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Description </span>
                            </label>
                            <textarea type="text" placeholder="Enter Food description..." name="description" className="input input-bordered h-40"  id="" cols="30" rows="40"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button type="submit" className=" btn btn-outline text-red-900 py-2 px-4 font-semibold rounded">Add Item</button> */}
                            {/* <button type="submit" className="btn btn-outline w-full bg-red-900 text-[#fff]">Add Food Item</button> */}
                            <button type="submit" className="btn btn-outline text-[#fff]">Add Food Item</button>
                        </div>
                    </form>
                </div>
            </div>

            {/* food table */}

            <div className="overflow-x-auto bg-[#2f2626] my-10 font-lato">
                <table className="table ">
                    {/* head */}
                    <thead>
                        <tr className="text-lg text-[#fff]">
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
                    <tbody className="text-[#c8b5b5] font-medium text-lg">
                        {/* row 1 */}

                        {
                            allFoodItem.map(foodItem=><FoodTableItem key={foodItem._id} foodItem={foodItem} foodItems={foodItems} setFoodItem={setFoodItem} ></FoodTableItem>)
                        }

                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AddFood;