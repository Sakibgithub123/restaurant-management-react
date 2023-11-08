import { useLoaderData } from "react-router-dom";
import banner4 from "../../assets/Banner-img/banner4.jpg"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'

const FoodDetailsPage = () => {
    const singleFoodsDetails = useLoaderData()
    const {user}=useContext(AuthContext);
    const {_id,food_name,image ,category,quantity,price,addby,food_origin,description}=singleFoodsDetails

    const handleMyOrder=(e)=>{
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

             fetch('http://localhost:5000/myorderfood',{
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
        <div className="max-w-5xl mx-auto my-10 font-lato">
            <div className="flex flex-row rounded-lg">
                <img className="rounded" src={image} alt="" />
                <div className="text-left pl-8 space-y-4">
                    <h3 className="text-xl text-[#83837d] font-semibold">{food_name}</h3>
                    <h2 className="text-xl text-[#894444] font-semibold">Price : $ {price}/-</h2>
                    <div className="flex flex-row gap-5">
                        <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{category}</h2>
                        <h2 className="text-base bg-[#2f2626] p-2 rounded-lg text-[#fff] font-semibold">{food_origin}</h2>
                    </div>
                    <h2 className="text-base  text-[#392623] font-semibold">Made By : {addby}</h2>
                   <form onSubmit={handleMyOrder}>
                    <input type="text" name="food_name" value={food_name} />
                    <input type="text" name="image" value={image} />
                    <input type="text" name="email" value={user.email} />
                    <input type="text" name="category" value={category} />
                    <input type="text" name="quantity" value={quantity} />
                    <input type="text" name="price" value={price} />
                    <input type="text" name="addby" value={addby} />
                    <input type="text" name="food_origin" value={food_origin} />
                    <input type="text" name="description" value={description} />

                   <button className="bg-[#2f2626] underline italic text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                   </form>
                    <h4 className="text-lg text-[#392623] font-medium">Description :</h4>
                    <p className="text-base text-[#3e3e3e] font-medium leading-8">
                        {description}
                    </p>
                </div>

            </div>
            <h3 className="text-4xl underline italic text-center text-[#2f2626] font-extrabold my-5">More Foods</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 my-10">
                <div className="text-center bg-[#fcee9d] space-y-3 rounded-lg">
                    <div className="">
                        <img className="w-full" src={banner4} alt="" />
                    </div>
                    <div className="p-5 space-y-2">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <h3 className="text-xl text-[#83837d] font-bold">Burger</h3>
                        <h2 className="text-lg text-[#894444] font-semibold">Price : $320.00</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetailsPage;