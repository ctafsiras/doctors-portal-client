import React from 'react';

const ServiceCard = ({ service, setTreatment }) => {
    return (
        <div className="card lg:max-w-lg text-primary-content shadow-lg">
            <div className="card-body  text-center">
                <h2 className="card-title text-secondary mx-auto">{service.name}</h2>
                {service.available.length ?
                    <p>{service.available[0]}</p> :
                    <p>Try another day</p>
                }
                <p>{service.available.length} space{service.available.length > 1 && 's'} available</p>
                <div className="card-actions justify-center">
                    <label
                        htmlFor='booking-modal'
                        onClick={() => setTreatment(service)}
                        disabled={service.available.length === 0} className="btn btn-primary">book now</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;