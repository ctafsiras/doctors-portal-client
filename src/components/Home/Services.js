import React from 'react';
import treatment from '../../assets/images/treatment.png'
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {
    const services = [
        { _id: 1, img: fluoride, name: 'Fluoride Treatment', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 2, img: cavity, name: 'Cavity Filling', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' },
        { _id: 3, img: whitening, name: 'Teeth Whitening', describe: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the' }
    ];
    return (
        <div>
            <h2 className='text-center font-bold text-primary uppercase'>Our Services</h2>
            <h2 className='text-center text-3xl'>Services We Provide</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 px-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id} service={service}></ServiceCard>)
                }
            </div>


            <div className=''>
                <div className="hero min-h-screen mx-auto">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='lg:w-1/2'>
                            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                            <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <button className="btn btn-primary uppercase">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;