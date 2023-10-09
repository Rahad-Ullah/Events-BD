import { useEffect, useState } from "react";
import RecentEvent from "./RecentEvent";

const RecentEvents = () => {
    const [recentEvents, setRecentEvents] = useState([])

    useEffect(() => {
        fetch('/recentEvents.json')
        .then(res => res.json())
        .then(data => setRecentEvents(data))
    }, [])
    
    return (
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-24">
            <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-rose-500">Recent Events</span> We Organized</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    recentEvents.map(event => <RecentEvent key={event.id} event={event}></RecentEvent>)
                }
            </div>
        </div>
    );
};

export default RecentEvents;