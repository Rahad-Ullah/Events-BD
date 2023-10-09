import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import Banner from "./Banner";

const Home = () => {

    const events = useLoaderData()
    
    return (
        <div>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <Navbar></Navbar>
            </div>
            <div>
                <Banner></Banner>
            </div>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <Services events={events}></Services>
            </div>
            <div className="bg-base-content text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;