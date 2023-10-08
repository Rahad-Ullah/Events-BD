import EventCard from "./EventCard";
import PropTypes from "prop-types"

const Services = ({events}) => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-center py-2 pb-4">Our Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-5">
                {
                    events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                }
            </div>
        </div>
    );
};

Services.propTypes = {
    events: PropTypes.array,
}


export default Services;