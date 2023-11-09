import { useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from 'sweetalert2'
import RelatedFood from "./RelatedFood";

const FoodDetailsPage = () => {
    const singleFoodsDetails = useLoaderData()
    console.log(singleFoodsDetails)
    const { user } = useContext(AuthContext);
    const useremail=user.email;
    const { _id, food_name, image, category, quantity, price, addby, food_origin, description } = singleFoodsDetails
    const currentDate = new Date().toJSON().slice(0, 10);


    const handleMyOrder = (e) => {
        e.preventDefault();

        const form = e.target;
        const food_name = form.food_name.value;
        const image = form.image.value;
        const email = form.email.value;
        const category = form.category.value;
        const available_quantity = form.available_quantity.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const addby = form.addby.value;
        const food_origin = form.food_origin.value;
        const description = form.description.value;
        const date = form.date.value;

        const addFood = {
            food_name, image, email, category, quantity,
            price, addby, food_origin, description, date
        }
        // console.log(addFood)
           if(quantity <= available_quantity){
            Swal.fire({
                title: "Are you sure?",
                text: "You want to order this item!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, order it!"
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch('https://restaurant-management-server-theta.vercel.app/myorderfood',{
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
                        title: "Order!",
                        text: "Your order completed.",
                        icon: "success"
                      });
                }
             })

                }
              });
           }else{
            Swal.fire({
                title: "Opps!!",
                text: "This quantity is not available now.",
                icon: "error"
              });

           }
    }


 


    return (
        <div className="max-w-5xl mx-auto my-10 font-lato">
            <div className="flex flex-row rounded-lg">
               
                <img className="rounded w-[500px] h-[400px]" src={image} alt="" />
                <div className="text-left pl-8 space-y-4">
                    <h3 className="text-xl text-[#83837d] font-semibold">{food_name}</h3>
                    <h2 className="text-xl text-[#894444] font-semibold">Price : $ {price}/-</h2>
                    <div className="flex flex-row gap-5">
                        <h2 className="text-base bg-[#894444] p-2 rounded-lg text-[#fff] font-semibold">{category}</h2>
                        <h2 className="text-base bg-[#2f2626] p-2 rounded-lg text-[#fff] font-semibold">{food_origin}</h2>
                    </div>
                    <h2 className="text-base  text-[#392623] font-semibold">Made By : {addby}</h2>
                    <form onSubmit={handleMyOrder}>
                        <input type="hidden" name="food_name" value={food_name} />
                        <input type="hidden" name="image" value={image} />
                        <input type="hidden" name="email" value={useremail} />
                        <input type="hidden" name="category" value={category} />
                        <input type="hidden" name="available_quantity" value={quantity} />
                        <p className="text-xl  text-[#392623] font-semibold my-3">Quantity : <input type="number" defaultValue={1} min={1} name="quantity" className="input input-bordered ml-3" /></p>
                        <input type="hidden" name="price" value={price} />
                        <input type="hidden" name="addby" value={addby} />
                        <input type="hidden" name="food_origin" value={food_origin} />
                        <input type="hidden" name="description" value={description} />
                        <input type="hidden" name="date" value={currentDate} />

                        <button type="submit" className="bg-[#2f2626] underline italic text-[#fff] py-2 px-4 font-semibold rounded">Order Now</button>
                    </form>
                    <h4 className="text-lg text-[#392623] font-medium">Description :</h4>
                    <p className="text-base text-[#3e3e3e] font-medium leading-8">
                        {description}
                    </p>
                </div>

            </div>
            <h3 className="text-4xl underline italic text-center text-[#2f2626] font-extrabold my-5">More Foods</h3>
            <div className="my-10">
                {
                   <RelatedFood singleFoodsDetails={singleFoodsDetails}></RelatedFood>
                }
            </div>
        </div>
    );
};

export default FoodDetailsPage;