import google from "../../../assets/Banner-img/Google.png"
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
    const {signInUser,googleLogin}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    // const [user, setUser] = useState(null)
    const [error,setError]=useState()
    const [emailError,setEmailError]=useState()
    const [passwordError,setPasswordError]=useState()
    
    const handlelogin=(e)=>{
        e.preventDefault()
        const form =new FormData(e.currentTarget)
        const email=form.get('email')
        const password=form.get('password')
        console.log(email,password)

        setError('');
        setEmailError('');
        setPasswordError('')

        //errors handle
        if(email.valueOf === ''){
            setEmailError('Email field is required')
        }
        if(password.valueOf === ''){
            setPasswordError('Password field is required')
        }
        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state? location.state : "/")
        })
        .catch(error=>{
            console.error(error )
            setError('Try agin email or password is wrong')
        })

    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const logedInUser = result.user
                console.log(logedInUser)
                // setUser(logedInUser)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error('error', error.message)
            })

    }
    return (
        <div className="hero min-h-screen ">
           {/* bg-[#5b7c99] */}
                {/* <div className="text-center lg:text-left">
                   <img src={image} alt="" className="rounded border-[2px] border-[#2f2626]" />
                </div> */}
                {/* bg-[#e5e9ec] */}
                {/* style={{backgroundImage: `url(${image})`}} */}
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-[#2f2626]">
                <h3 className="font-semibold text-2xl text-[#fff]">Login Here</h3>
                <button onClick={handleGoogleLogin} className="font-semibold text-lg  border p-2 border-[#fff]  text-[#fff] flex flex-row justify-center"><span>Login with Google</span> <img className="pl-2" width={23} height={5} src={google} alt="" /></button>
                {/* <h3 className="font-semibold text-3xl  border p-2 border-[#fff]  text-[#fff]">Login Here</h3> */}
                    <form onSubmit={handlelogin} className="card-body">
                    {
                           error && <p className="text-lg text-red-900 font-medium">{error}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered"  />
                        </div>
                        {
                           emailError &&  <p className="text-lg text-red-900 font-medium">{emailError}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered"  />
                            {
                                passwordError && <p className="text-lg text-red-900 font-medium">{passwordError}</p> 
                            }
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            {/* <button className="py-3 px-2 rounded font-semibold text-2xl bg-[#FFD700] text-[#fff]">Login</button> */}
                            <button type="submit" className="btn btn-outline text-[#fff]">Login</button>
                        </div>
                    </form>
                    <p className="text-base text-[#fff] font-semibold">Don't Have  any account? <Link to={"/signup"} className="underline text-[#894444]">SignUp</Link> </p>
                </div>
        </div>
    );
};

export default Login;
