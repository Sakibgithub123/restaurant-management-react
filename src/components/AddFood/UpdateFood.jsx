import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const UpdateFood = () => {
    const updateFoodItem=useLoaderData()
    const {_id,food_name,image ,category,quantity,price,addby,food_origin,description}=updateFoodItem
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
                <form onSubmit={handleUpdateFood} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Food Name</span>
                        </label>
                        <input type="text" placeholder="Enter Food Name" name="food_name" value={food_name} className="input input-bordered" />
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

    </div>
    );
};

export default UpdateFood;