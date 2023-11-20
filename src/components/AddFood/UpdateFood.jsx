import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateFood = () => {
    const updateFoodItem=useLoaderData()
    console.log(updateFoodItem)
    const {_id,food_name,image ,category,quantity,price,addby,food_origin,description}=updateFoodItem;

    const handleUpdateFood=(e)=>{
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

        const updateFood={food_name,image ,category,quantity,
             price,addby,food_origin,description}
             console.log(updateFood)

             fetch(`https://restaurant-management-server-two.vercel.app/food/${_id}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(updateFood)

             })
             .then(res=>res.json())
             .then(data => {
                console.log(data);
                if(data.modifiedCount > 0 ){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food item updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
             })
    }
    return (
        <div className="hero min-h-screen my-10">
            <Helmet>
                <title>phero|Update Food</title>
            </Helmet>
        <div className="card flex-shrink-0 w-full max-w-4xl shadow-2xl mt-10 bg-[#2f2626]">
            <h3 className="text-2xl text-[#fff] font-semibold">Update Food Form</h3>
            <form onSubmit={handleUpdateFood} >
               <div className="grid grid-cols-2 gap-4">
               <div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Food Name</span>
                    </label>
                    <input type="text" placeholder="Enter Food Name" name="food_name" defaultValue={food_name} className="input input-bordered " />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Food Image</span>
                    </label>
                    <input type="text" placeholder="Enter Food Image Url" name="image" defaultValue={image} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Food Category</span>
                    </label>
                    <input type="text" placeholder="Enter Food Category" name="category" defaultValue={category} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Quantity</span>
                    </label>
                    <input type="text" placeholder="Enter quantity" name="quantity" defaultValue={quantity} className="input input-bordered" />
                </div>
                </div>
               <div>
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Price</span>
                    </label>
                    <input type="text" placeholder="Enter Food Price" name="price" defaultValue={price} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff] ">Add By</span>
                    </label>
                    <input type="text" placeholder="Enter Add By" name="addby" defaultValue={addby} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Food Origin (Country)</span>
                    </label>
                    <input type="text" placeholder="Enter Food Origin" name="food_origin" defaultValue={food_origin} className="input input-bordered" />
                </div>
               </div>
               </div>
               <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#fff]">Description </span>
                    </label>
                    <textarea type="text" placeholder="Enter Food description..." name="description" defaultValue={description} className="input input-bordered h-40"  id="" cols="30" rows="40"></textarea>
                </div>
                <div className="form-control mt-6">
                    {/* <button type="submit" className=" btn btn-outline text-red-900 py-2 px-4 font-semibold rounded">Add Item</button> */}
                    {/* <button type="submit" className="btn btn-outline w-full bg-red-900 text-[#fff]">Add Food Item</button> */}
                    <button type="submit" className="btn btn-outline text-[#fff]">Update Food Item</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdateFood;