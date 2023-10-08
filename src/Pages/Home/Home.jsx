import { useLoaderData } from "react-router-dom";
import Services from "./Services";
import Navbar from "../Shared/Navbar";

const Home = () => {

    const events = useLoaderData()
    
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            <Navbar></Navbar>
            <Services events={events}></Services>
        </div>
    );
};

export default Home;