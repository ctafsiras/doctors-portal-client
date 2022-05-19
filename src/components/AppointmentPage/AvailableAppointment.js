import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import ServiceCard from './ServiceCard';

const AvailableAppointment = ({ selected }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(selected, 'PP')

    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`https://doctors-portal-servers.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }

    // useEffect(() => {
    //     fetch(`https://doctors-portal-servers.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate]);
    return (
        <div>
            <h2 className='text-xl text-center text-primary'>Available Appointment on {format(selected, 'PP')}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        setTreatment={setTreatment}
                        service={service}
                    />)
                }
            </div>
            {treatment && <BookingModal
                refetch={refetch}
                selected={selected}
                setTreatment={setTreatment}
                treatment={treatment} />}
        </div>
    );
};

export default AvailableAppointment;