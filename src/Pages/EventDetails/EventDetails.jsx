import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const EventDetails = () => {

    const {id} = useParams()
    const events = useLoaderData()
    const event = events.find(event => event.id == id)
    const {title, details, image} = event;
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
                <div className="grid grid-cols-1 py-12">
                    <div className="col-span-2">
                        <img src={image} alt="seminar" className="w-full rounded-sm"/>
                        <h2 className="text-4xl font-semibold py-14 pb-10">{title}</h2>
                        <p className="mb-4">{details}</p>
                        <Link to={"/contact"} className="btn btn-neutral bg-rose-500 border-none text-white">Contact Us</Link>
                    </div>
                </div>
            </div>
            <div className="bg-base-content text-white">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default EventDetails;