import { useEffect, useState } from "react";

const useAdmin = (user) => {
    const email = user?.email;
    const [adminRole, setAdminRole] = useState(false);
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/admin/${email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setAdminRole(data)
                });
        }
    }, [user])
    return [adminRole];
};

export default useAdmin;