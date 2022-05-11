import React, { Component } from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestimonialCard from './TestimonialCard';

class Testimonial extends Component {

    render() {
        const testimonials = [
            { _id: 1, name: 'Winson Harry', city: 'California', img: people1, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
            { _id: 2, name: 'Winson Harry', city: 'California', img: people2, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
            { _id: 3, name: 'Winson Harry', city: 'California', img: people3, description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content' },
        ];
        return (
            <div>
                <div className='flex justify-between my-20'>
                    <div>
                        <h3 className='text-primary font-bold'>Testimonial</h3>
                        <h2 className='text-3xl'>What Our Partner Says</h2>
                    </div>
                    <div>
                        <img src={quote} className="w-40" srcSet="" />
                    </div>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    {
                        testimonials.map(testimonial => <TestimonialCard testimonial={testimonial}
                            key={testimonial._id} />)
                    }
                </div>
            </div>
        );
    }
}

export default Testimonial;