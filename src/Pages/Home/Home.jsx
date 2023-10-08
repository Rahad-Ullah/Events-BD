import { useLoaderData } from "react-router-dom";
import Services from "./Services";

const Home = () => {

    const events = useLoaderData()
    
    return (
        <div>
            <Services events={events}></Services>
        </div>
    );
};

export default Home;