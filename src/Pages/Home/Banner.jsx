import banner_img from "../../assets/conference.png"

const Banner = () => {
    return (
        <div className="flex justify-center items-center h-56 md:h-80 lg:h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${banner_img})`}}>
            <div className="text-center">
                <h1 className="text-2xl md:text-4xl lg:text-6xl text-white font-bold mb-1 md:mb-4">Elevate Your Corporate Events</h1>
                <h3 className="text-white text-xl md:text-3xl lg:text-4xl font-medium mb-0 md:mb-2">with Expert Management</h3>
                <p className="text-white text-base md:text-base lg:text-xl">Learn more about what we have to offer.</p>
                <button className="btn btn-error border-none bg-rose-500 rounded-full text-white text-sm lg:text-base px-6 group hover:bg-rose-600 mt-2 md:mt-6">Explore Now <span className="text-xl transition transform group-hover:translate-x-2">&gt;</span></button>
            </div>
        </div>
    );
};

export default Banner;