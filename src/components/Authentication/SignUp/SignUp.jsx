
import { Link } from "react-router-dom";
import image from "../../../assets/Banner-img/loginimage.jpg"
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet";
const SignUp = () => {
    const {createUser}=useContext(AuthContext);
    const [error,setError]=useState()
    const [nameError,setNameError]=useState()
    const [emailError,setEmailError]=useState()
    const [photoError,setPhotoError]=useState()
    const [passwordError,setPasswordError]=useState()

    const handleSignup=(e)=>{
        e.preventDefault();
        const form= new FormData(e.currentTarget)
        const displayName=form.get('name');
        const email=form.get('email');
        const photoURL=form.get('photo');
        const password=form.get('password');
        console.log(displayName,email,photoURL,password)

        setError('');
        setNameError('');
        setEmailError('');
        setPhotoError('');
        setPasswordError('');
         //errors handle
         if(name.valueOf === ''){
            setNameError('Name field is required')
        }
         if(email.valueOf === ''){
            setEmailError('Email field is required')
        }
        //  if(photo.valueOf === ''){
        //     setPhotoError('Photo Url field is required')
        // }

        if(password.valueOf === ''){
            setPasswordError('Password field is required')
            return
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters!')
            return;
      
          }
          else if (!/^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/.test(password)) {
            setPasswordError(
              'Password must contain  number, uppercase letter & a special chracter!')
            return;
      
          }

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            Swal.fire({
                title: "Good job!",
                text: "Sign up success!",
                icon: "success"
              });
        })
        .catch(error=>{
            console.error(error);
            setError('Email already taken or something is wrong')
        })

    }
    return (
        <div className="hero min-h-screen ">
          <Helmet>
                <title>Phero|Signup</title>
            </Helmet>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl  my-20 bg-[#2f2626]">
                <h3 className="font-semibold text-2xl  border p-2 border-[#fff]  text-[#fff]">Signup Here</h3>
                    <form onSubmit={handleSignup} className="card-body">
                        <p className="text-[#fff] uppercase text-base">If you dont have any accout please signup now.</p>
                        {
                            error && <p className="text-lg text-red-900 font-medium">{error}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Name</span>
                            </label>
                            <input type="text" placeholder="Enter name.." name="name" className="input input-bordered"  />
                        </div>
                        {
                            nameError && <p className="text-lg text-red-900 font-medium">{nameError}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Email</span>
                            </label>
                            <input type="text" placeholder="Enter email.." name="email" className="input input-bordered"  />
                        </div>
                        {
                            emailError && <p className="text-lg text-red-900 font-medium">{emailError}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Photo URL</span>
                            </label>
                            <input type="text" placeholder="Enter photo url.." name="photo" className="input input-bordered"  />
                        </div>
                        {
                            photoError && <p className="text-lg text-red-900 font-medium">{photoError}</p> 
                        }
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-[#fff]">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered"  />
                        </div>
                        {
                            passwordError && <p className="text-lg text-red-900 font-medium">{passwordError}</p> 
                        }
                        <div className="form-control mt-6">
                            {/* <button type="submit" className="py-3 px-2 rounded font-semibold text-2xl bg-[#FFD700] text-[#fff]">SignUp</button> */}
                            <button type="submit" className="btn btn-outline text-[#fff]">SignUp</button>
                        </div>
                    </form>
                    <p className="text-base text-[#fff] font-semibold">Have you any account? <Link to={"/login"} className="underline text-[#894444]">Login</Link> </p>
                </div>
            </div>
        // </div>
    );
};

export default SignUp;