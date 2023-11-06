
import { Link,  useLocation, useNavigate } from "react-router-dom";
import image from "../../../assets/Banner-img/loginimage.jpg"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const {signInUser}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const handlelogin=(e)=>{
        e.preventDefault()
        const form =new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        .catch(error=>{
            console.error(error )
        })

    }
    return (
        <div className="hero min-h-screen ">
           {/* bg-[#5b7c99] */}
            <div className="hero-content flex-col lg:flex-row">

                <div className="text-center lg:text-left">
                   <img src={image} alt="" className="rounded border-[2px] border-[#FFD700]" />
                </div>
                {/* bg-[#e5e9ec] */}
                {/* style={{backgroundImage: `url(${image})`}} */}
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow">
                <h3 className="font-semibold text-3xl text-[#FFD700]">Login</h3>
                    <form onSubmit={handlelogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="py-3 px-2 rounded font-semibold text-2xl bg-[#FFD700] text-[#fff]">Login</button> */}
                            <button className="btn btn-outline text-[#FFD700]">Login</button>
                        </div>
                    </form>
                    <p className="text-base text-[#392623] font-semibold">Don't Have  any account? <Link to={"/signup"} className="underline text-[#FFD700]">SignUp now</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
