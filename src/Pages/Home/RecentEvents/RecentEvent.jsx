import { FaCalendar, FaHome } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const RecentEvent = ({event}) => {
    const { title, image, description, date, center, location} = event;
    return (
        <div className="card card-compact bg-base-100 border shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)] hover:shadow-[0px_10px_20px_10px_rgba(0,0,0,0.1)] transform hover:-translate-y-1 transition-all duration-500">
            <figure><img src={image} alt="recent_event" className="w-full h-52"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="font-medium">{description}</p>
                <p className="flex items-center gap-2"><FaCalendar></FaCalendar>{date}</p>
                <p className="flex items-center gap-2"><FaHome></FaHome>{center}</p>
                <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot>{location}</p>
                <div className="card-actions justify-center mt-2">
                    <Link to={"/contact"} className="btn hover:bg-rose-500 hover:border-0 text-rose-600 btn-outline w-full">Contact Us</Link>
                </div>
            </div>
        </div>
    );
};


RecentEvent.propTypes = {
    event: PropTypes.object,
}

export default RecentEvent;