import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [adminRole] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <h2 className='text-secondary text-3xl'>Dashboard</h2>
                <Outlet />


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Appointments</Link></li>
                    <li><Link to='/dashboard/reviews'>My Reviews</Link></li>
                    {adminRole && <>
                        <li><Link to='/dashboard/users'>All Users</Link></li>
                        <li><Link to='/dashboard/addDoctor'>Add Doctor</Link></li>
                        <li><Link to='/dashboard/manageDoctors'>Manage Doctors</Link></li>
                    </>}

                </ul>
            </div>
        </div>
    );
};

export default Dashboard;