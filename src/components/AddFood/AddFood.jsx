

const AddFood = () => {
    return (
        <div className="hero min-h-screen my-10">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#fcee9d]">
                <h3 className="text-xl text-[#fff] font-semibold">Add Food Form</h3>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="bg-[#FFD700] text-[#fff] py-2 px-4 font-semibold rounded">Add Food</button>
                        </div>
                    </form>
                </div>
        </div>
    );
};

export default AddFood;