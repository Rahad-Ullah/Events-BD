import feature_img from '../../../assets/wave.svg'
import conf_img from '../../../assets/bussiness.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Feature = () => {
    return (
        <div className="bg-cover bg-bottom bg-no-repeat bg-base-200 px-4 md:px-6 lg:px-8 pt-28 pb-0 md:pb-6" style={{backgroundImage: `url(${feature_img})`}}>
            <div className='flex flex-col md:flex-row justify-between items-start h-screen max-w-6xl mx-auto'>
                <div data-aos="fade-right" className='w-full md:w-2/5 text-center md:text-left'>
                    <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-4">Elevate Your Corporate Events</h1>
                    <p>Your Partner for Unforgettable Corporate Experiences. Elevate Your Vision with Our Expertise.</p>
                </div>
                <div data-aos="fade-left" className='w-full md:w-2/5'>
                    <img src={conf_img} alt="" />
                </div>
            </div>
        </div>
    );
};

AOS.init();

export default Feature;