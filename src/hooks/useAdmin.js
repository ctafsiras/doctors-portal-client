import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const email = user?.email;
    const [adminRole, setAdminRole] = useState(false);
    const [adminLoading, setAdminLoading] = useState(true);
    useEffect(() => {

        if (email) {
            fetch(`https://doctors-portal-servers.herokuapp.com/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    setAdminRole(data)
                    setAdminLoading(false)
                });
        }
    }, [email])
    return [adminRole, adminLoading];
};

export default useAdmin;