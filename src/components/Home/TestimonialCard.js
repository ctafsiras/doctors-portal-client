import React from 'react';

const TestimonialCard = ({testimonial}) => {
    return (
        <div className='shadow-2xl p-10'>
            <p>{testimonial.description}</p>
            <div className='flex items-center justify-center mt-8'>
                <img className='border-4 rounded-full border-primary' src={testimonial.img} alt="" />
                <div className='ml-4'>
                    <h2>{testimonial.name}</h2>
                    <h2>{testimonial.city}</h2>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;