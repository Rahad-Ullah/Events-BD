import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const {creatUser} = useContext(AuthContext)
    
    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo_url = form.get('photo-url')
        console.log(name, email, password, photo_url)
        
        // password length validation
        if(password.length < 6){
            toast.error("Password must be at least 6 character")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            toast.error('Password must have at least one capital letter')
            return;
        }

        creatUser(email, password)
        .then(() => {
            toast.success("Registration Successful")
        }).catch((err) => {
            toast.error("Registration Failed")
            console.log(err)
        });

    }
    
    return (
        <div className="bg-base-200">
            <Navbar></Navbar>
            <div className="bg-base-200 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="hero min-h-screen py-16">
                    <div className="hero-content w-full p-0">
                        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded">
                        <form onSubmit={handleRegister} className="card-body">
                            <h2 className="text-2xl text-center font-bold py-6 border-b">Register your account</h2>

                            {/* Name */}
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required/>
                            </div>

                            {/* Email */}
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email </span>
                            </label>
                            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                            </div>

                            {/* Password */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            </div>

                            {/* Photo URL */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input type="text" name="photo-url" placeholder="Enter your photo URL" className="input input-bordered" />
                            </div>

                            {/* Register Button */}
                            <div className="form-control mt-6">
                                <button className="btn btn-neutral bg-rose-500 border-none text-white">Register</button>
                                <Toaster position="top-right"/>
                            </div>
                            <p className="text-sm mt-2 text-center">Already have an account? <Link to={"/login"} className="text-rose-500 link-hover font-semibold">Login</Link></p>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;