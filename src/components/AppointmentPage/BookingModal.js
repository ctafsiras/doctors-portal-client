import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import auth from '../../firebase.init';

const BookingModal = ({ treatment, selected, setTreatment, refetch }) => {
    const { _id, available, name, price } = treatment;
    const treatmentDate = format(selected, 'PP');
    const handleBooking = (e) => {
        e.preventDefault();
        const slot = e.target.slot.value;

        const bookingIfo = {
            treatmentId: _id,
            treatmentName: name,
            treatmentDate,
            slot,
            price,
            patient: user.email,
            patientName: user.displayName,
            patientPhone: user.phoneNumber
        };
        fetch('https://doctors-portal-servers.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingIfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Data Added ${bookingIfo.treatmentName} on ${bookingIfo.slot} on ${bookingIfo.treatmentDate}`);
                } else {
                    toast.error(`Already Exist ${data.result?.treatmentName} on ${data.result?.slot} on ${data.result?.treatmentDate}`);
                }
                refetch();
                setTreatment(null);

            });



    }
    const [user] = useAuthState(auth);
    return (

        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">

                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-primary text-lg">Treatment for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" disabled value={format(selected, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                available.map((slot, index) => <option key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="email" value={user.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;