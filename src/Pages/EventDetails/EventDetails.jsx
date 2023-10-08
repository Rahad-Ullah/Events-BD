import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const EventDetails = () => {

    const {id} = useParams()
    const events = useLoaderData()
    const event = events.find(event => event.id == id)
    const {title, details, image} = event;
    
    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                <div className="col-span-2">
                    <img src={image} alt="seminar" className="w-full rounded-sm"/>
                    <h2 className="text-4xl font-semibold py-14 pb-10">{title}</h2>
                    <p className="mb-16">{details}</p>
                </div>
                <div>
                    <h2>Get in touch</h2>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;