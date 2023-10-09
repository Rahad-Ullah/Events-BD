import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Banner from "./Banner";
import Testimonial from "./Testimonial/Testimonial";
import Feature from "./Feature/Feature";

const Home = () => {

    const events = useLoaderData()
    
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services events={events}></Services>
            </div>
            <div>
                <Feature></Feature>
            </div>
            <div className="py-24">
                <Testimonial></Testimonial>
            </div>
            <div className="bg-base-content text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;