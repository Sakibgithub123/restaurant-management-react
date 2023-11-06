
import { Link } from "react-router-dom";
import image from "../../../assets/Banner-img/loginimage.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const handleSignup=(e)=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget)
        const displayName=form.get('name');
        const email=form.get('email');
        const photoURL=form.get('photo');
        const password=form.get('password');
        console.log(displayName,email,photoURL,password)
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div className="hero min-h-screen ">
           {/* bg-[#5b7c99] */}
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left">
                   <img src={image} alt="" className="rounded border-[2px] border-[#FFD700]" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-[#FFD700] bg-[#e5e9ec]">
                <h3 className="font-semibold text-3xl text-[#FFD700]">SignUp</h3>
                    <form onSubmit={handleSignup} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter name.." name="name" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Enter email.." name="email" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter photo url.." name="photo" className="input input-bordered"  />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered"  />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="py-3 px-2 rounded font-semibold text-2xl bg-[#FFD700] text-[#fff]">SignUp</button>
                        </div>
                    </form>
                    <p className="text-base text-[#392623] font-semibold">Have you any account? <Link to={"/login"} className="underline text-[#FFD700]">Login now</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;