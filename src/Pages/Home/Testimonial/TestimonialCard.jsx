import PropTypes from 'prop-types'
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({testimonial}) => {
    const {name, image, review} = testimonial;
    console.log(testimonial)
    return (
        <div>
            <div className='p-8 py-10 shadow-[0_0_20px_0px_rgba(0,0,0,0.1)] rounded-sm flex flex-col justify-center items-center transform hover:-translate-y-2 transition-transform duration-500'>
                <FaQuoteLeft className='text-2xl text-rose-500 mb-5'></FaQuoteLeft>
                <p className='text-xs text-center text-zinc-500 mb-4'>{review}</p>
                <div className="rating rating-sm gap-1">
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-rose-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-rose-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-rose-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-rose-500" />
                    <input type="radio" name="rating-4" className="mask mask-star-2 bg-rose-500" />
                </div>
                <img src={image} alt="user" className='w-12 rounded-full mb-2 mt-7'/>
                <h3 className='font-semibold text-zinc-600 '>{name}</h3>
            </div>
        </div>
    );
};

TestimonialCard.propTypes = {
    testimonial: PropTypes.object,
}

export default TestimonialCard;