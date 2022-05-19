import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const ManageDoctor = () => {
    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const { data: doctors, isLoading, refetch } = useQuery('manageDoctors', () => fetch('https://doctors-portal-servers.herokuapp.com/doctors', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }
    const handleDelete = (email) => {
        fetch(`https://doctors-portal-servers.herokuapp.com/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success(`Delete Successful`)
                    console.log(data);
                    refetch();
                }

            })
    }
    return (
        <div>
            <h2>Manage Doctors: {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            doctors.map((d, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-24 mask mask-hexagon">
                                                <img src={d.img} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{d.name}</td>
                                    <td>{d.specialty}</td>

                                    <td>

                                        <label
                                            onClick={() => setDeleteDoctor(d)}
                                            for="delete-modal" className="btn btn-sm bg-red-700">Delete</label>


                                        <input type="checkbox" id="delete-modal" className="modal-toggle" />
                                        <button
                                            onClick={() => handleDelete(d.email)}
                                            className="btn btn-sm bg-red-700">Delete</button></td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
            <div>

                {
                    true && <>
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                                <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                                <div className="modal-action">
                                    <label for="delete-modal" className="btn">Yay!</label>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </div>


        </div >
    );
};

export default ManageDoctor;