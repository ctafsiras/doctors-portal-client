import React from 'react';
import appointment from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <div className='text-center mt-10 py-10 text-white' style={{ background: `url(${appointment})` }}>
            <div className=''>
                <h3 className='text-primary font-bold'>Contact Us</h3>
                <h2 className='text-3xl'>Stay connected with Us</h2>
            </div>
            <input type="text" placeholder="Email Address" className="input input-bordered w-full max-w-xs mt-4" /><br />
            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs mt-4" /><br />
            <textarea className="textarea w- mt-4" placeholder="Your Message"></textarea><br />
            <button className="btn btn-primary mt-4">Submit</button>
        </div>
    );
};

export default Contact;