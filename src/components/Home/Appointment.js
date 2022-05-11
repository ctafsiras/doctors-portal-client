import React from 'react';
import ppointment from '../../assets/images/appointment.png'
import doctorSmall from '../../assets/images/doctor.png'

const Appointment = () => {
    //style={`background: url(${ppointment});`}
    return (
        <div className="hero min-h-screen" style={{ background: `url(${ppointment})` }}>
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctorSmall} className="hidden lg:block lg:w-1/2 mt-[-220px]" />
                <div className='text-white lg:w-1/2'>
                    <h3 className="text-primary uppercase font-bold">Make an appointment Today</h3>
                    <h1 className="text-5xl font-bold">Make an appointment Today</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary uppercase">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Appointment;