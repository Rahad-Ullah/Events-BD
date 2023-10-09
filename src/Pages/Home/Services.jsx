import EventCard from "./EventCard";
import PropTypes from "prop-types"

const Services = ({events}) => {

    return (
        <div className="py-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-rose-500">Services</span> We Provide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-6">
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