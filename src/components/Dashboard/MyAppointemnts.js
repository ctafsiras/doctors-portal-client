import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointemnts = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const [myAppointments, setMyAppointments] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/booking?email=${user.email}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth)
                    localStorage.removeItem('token')
                    return navigate('/');
                }
                return res.json()
            })
            .then(data => setMyAppointments(data))
    }, [user]);
    if (!user) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    };

    console.log(myAppointments);
    return (
        <div>
            <h2>My Appointments {myAppointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Slot</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myAppointments.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.treatmentName}</td>
                                    <td>{a.treatmentDate}</td>
                                    <td>{a.slot}</td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointemnts;