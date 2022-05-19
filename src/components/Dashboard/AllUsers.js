import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://doctors-portal-servers.herokuapp.com/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }

    function makeAdmin(email) {
        fetch(`https://doctors-portal-servers.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => {
            if (res.status === 403) {
                return toast.error('Making Admin Failed')
            }
            return res.json()
        })
            .then(data => {
                if (data.modifiedCount < 0) {
                    refetch();
                    toast.success('Making Admin Success')
                }
            });
    }
    return (
        <div>
            <h1>A;; user {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin Access</th>
                            <th>Remove User</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((a, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{a.email}</td>
                                    <td>
                                        {
                                            a.role !== 'admin' &&
                                            <button
                                                onClick={() => makeAdmin(a.email)}
                                                className="btn btn-sm">Make Admin</button>
                                        }
                                    </td>
                                    <td><button className="btn btn-sm">Remove User</button></td>
                                </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;