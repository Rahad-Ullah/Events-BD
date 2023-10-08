import PropTypes from "prop-types"
import { NavLink } from "react-router-dom";

const EventCard = ({event}) => {
    const {id, title, image, description} = event;
    return (
        <div className="card bg-base-100 border rounded-lg">
            <figure><img src={image} alt="image" className="w-full h-56"/></figure>
            <div className="card-body p-5">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center mt-2">
                    <NavLink to={`/event/${id}`} className="btn btn-primary w-full">Learn More</NavLink>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event: PropTypes.object,
}

export default EventCard;