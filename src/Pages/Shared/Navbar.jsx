import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>About</NavLink></li>
    <li><NavLink to={"/career"}>Career</NavLink></li>
    <li><NavLink to={"/login"}>Login</NavLink></li>
    <li><NavLink to={"/addict"}>Addict</NavLink></li>
</>
    
    return (
    <div className="navbar mb-16 pt-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {navLinks}
            </ul>
          </div>
          <a href="/" className="text-2xl md:text-3xl font-serif font-bold"><span className="text-rose-500">Events BD</span> </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
                {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-2">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            {/* <img src={userDefaultPic} /> */}fdf
            </div>
            </label>

              <Link to={"/login"} className="btn btn-neutral border-0 bg-rose-500 text-white rounded">Login</Link>
            
        </div>
      </div>
    );
};

export default Navbar;