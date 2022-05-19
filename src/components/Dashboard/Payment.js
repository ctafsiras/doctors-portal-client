import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0xd2HpF8f5rMG2u6TRBWsF2uRtK3KjNhwWqdYIQUubrqUhz8rm0z5yVabfYCvKgxZpuvKH60ZF6QSOvHMWVwNJ00BdxxPlKV');
const Payment = () => {
    const { id } = useParams();
    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(`https://doctors-portal-servers.herokuapp.com/booking/${id}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <h2 className="font-bold text-primary">Dear, {appointment.patientName}</h2>
                    <h2 className="card-title">You Booked {appointment.treatmentName}</h2>
                    <p>Your Appointment will be held on {appointment.treatmentDate} at {appointment.slot}</p>
                    <p>Please Pay ${appointment.price} Now</p>

                </div>
            </div>
            <div className="card max-w-lg bg-base-100 shadow-xl my-12 p-5">
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        appointment={appointment}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;