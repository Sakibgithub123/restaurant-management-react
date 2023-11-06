import FoodTableItem from "./FoodTableItem";



const AddFood = () => {
    return (
        <div>
            <div className="hero min-h-screen my-10">
                <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-[#FFD700]">
                    <h3 className="text-xl text-[#00072D] font-semibold">Add Food Form</h3>
                    <form className="card-body">
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
                            <input type="text" placeholder="Enter Food description " name="description " className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className=" btn btn-outline text-[#00072D] py-2 px-4 font-semibold rounded">Add Item</button>
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

                        <FoodTableItem></FoodTableItem>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default AddFood;