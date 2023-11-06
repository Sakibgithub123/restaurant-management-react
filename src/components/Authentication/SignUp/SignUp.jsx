
import image from "../../../assets/Banner-img/loginimage.jpg"
const SignUp = () => {
    return (
        <div className="hero min-h-screen ">
           {/* bg-[#5b7c99] */}
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left">
                   <img src={image} alt="" className="rounded border-[2px] border-[#FFD700]" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#FFD700] bg-[#e5e9ec]">
                <h3 className="font-semibold text-3xl text-[#FFD700]">Login</h3>
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
                            <button className="py-3 px-2 rounded font-semibold text-2xl bg-[#FFD700] text-[#fff]">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;