import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            <footer className="footer p-10 py-16">
                <aside>
                    <h2 className="text-xl md:text-4xl font-serif font-bold"><span className="text-rose-500">Events BD</span></h2>
                    <p>Events BD Limited<br/>Providing reliable event since 2004</p>
                    <nav className="py-2">
                        <div className="grid grid-flow-col gap-4">
                            <Link className="hover:text-rose-500"><FaTwitter className="text-2xl"></FaTwitter></Link>
                            <Link className="hover:text-rose-500"><FaFacebook className="text-2xl"></FaFacebook></Link> 
                            <Link className="hover:text-rose-500"><FaYoutube className="text-2xl"></FaYoutube></Link> 
                        </div>
                    </nav>
                </aside> 
                <nav>
                    <header className="footer-title">Services</header> 
                    <a className="link link-hover">Branding</a> 
                    <a className="link link-hover">Design</a> 
                    <a className="link link-hover">Marketing</a> 
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <header className="footer-title">Company</header> 
                    <a className="link link-hover">About us</a> 
                    <a className="link link-hover">Contact</a> 
                    <a className="link link-hover">Jobs</a> 
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <header className="footer-title">Legal</header> 
                    <a className="link link-hover">Terms of use</a> 
                    <a className="link link-hover">Privacy policy</a> 
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;