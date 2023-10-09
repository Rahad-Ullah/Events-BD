import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

    const {loginUser, googleSignIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        // password length validation
        if(password.length < 6){
            toast.error("Password must be at least 6 character")
            return;
        }

        loginUser(email, password)
        .then(() => {
            toast.success('Login Successful')
            navigate(location?.state || "/")
        }).catch((err) => {
            toast.error("Invalid Input")
            console.log(err.code)
        });
    }

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(() => {
            toast.success("Login Successful")
            navigate(location?.state || "/")
        }).catch((err) => {
            toast.error("Login Failed")
            console.log(err)
        });
    }
    return (
        <div className="bg-base-200 px-4 md:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <Navbar></Navbar>
            </div>
            <div className="hero min-h-screen py-16">
                <div className="hero-content w-full p-0">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <h2 className="text-2xl text-center font-bold py-6 border-b">Login your account</h2>
                                <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-neutral border-0 bg-rose-500 text-white">Login</button>
                                </div>
                                <p className="text-sm my-2 mb-6 text-center">Don&apos;t have an account? <Link to={"/register"} className="text-rose-500 link-hover font-semibold">Register</Link></p>
                            </form>
                            <div className="pt-4 border-t">
                                <span className="relative bottom-7 left-1/2 pr-2 bg-white">or</span>
                                <button onClick={handleGoogleSignIn} className="btn hover:bg-rose-500 hover:border-none btn-outline normal-case w-full"><FaGoogle></FaGoogle> continue with Google</button>
                                <Toaster position="top-right"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;