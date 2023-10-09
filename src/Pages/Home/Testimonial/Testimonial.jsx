import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        fetch('/testimonials.json')
        .then(res => res.json())
        .then(data => setTestimonials(data))
    }, [])
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center py-2 pb-16"><span className="text-rose-500">About Us </span>What People Say</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
            {
                testimonials.map(testimonial => <TestimonialCard key={testimonial.id} testimonial={testimonial}></TestimonialCard>)
            }
            </div>
        </div>
    );
};

export default Testimonial;