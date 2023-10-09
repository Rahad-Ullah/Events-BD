import { FaCalendar, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const RecentEvent = ({event}) => {
    const {id, title, image, description, date, center, location} = event;
    console.log(event)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="recent_event" className="w-full h-52"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-medium">{description}</p>
                <p className="flex items-center gap-2"><FaCalendar></FaCalendar>{date}</p>
                <p className="flex items-center gap-2"><FaHome></FaHome>{center}</p>
                <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot>{location}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn hover:bg-rose-500 hover:border-0 text-rose-600 btn-outline w-full">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default RecentEvent;