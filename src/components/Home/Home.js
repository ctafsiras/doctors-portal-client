import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner />
            <Info/>
            <Services/>
            <Appointment/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;