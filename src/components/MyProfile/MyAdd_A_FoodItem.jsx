import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet';

const MyAdd_A_FoodItem = () => {
    const {user}=useContext(AuthContext)
    const handleMyAddFood=(e)=>{
        e.preventDefault();

        const form=e.target;
        const food_name=form.food_name.value;
        const image=form.image.value;
        const email=form.email.value;
        const category=form.category.value;
        const quantity=form.quantity.value;
        const price=form.price.value;
        const addby=form.addby.value;
        const food_origin=form.food_origin.value;
        const description=form.description.value;

        const addFood={food_name,image,email,category,quantity,
             price,addby,food_origin,description}
             console.log(addFood)

             fetch('https://restaurant-management-server-two.vercel.app/myfood',{
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
        <div className="md:hero min-h-screen my-10">
            <Helmet>
                <title>Phero|AddFoodForm</title>
            </Helmet>
                <div className="p-2md: p-5 md:card md:flex-shrink-0   md:max-w-4xl shadow-2xl mt-10 bg-[#2f2626]">
                    <h3 className="text-2xl text-[#fff] font-semibold">Add Food Form</h3>
                    <form onSubmit={handleMyAddFood} >
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
                                <span className="label-text text-[#fff]">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Food Image Url" name="email" readOnly value={user?.email} className="input input-bordered" />
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
                            <input type="text" placeholder="Enter Add By" name="addby" value={user?.displayName} className="input input-bordered" />
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
                            <button type="submit" className="btn btn-outline text-[#fff]">Add Food Item</button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

export default MyAdd_A_FoodItem;