import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = { email };

    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-servers.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    setToken(data.token)
                    localStorage.setItem('token', data.token)
                });
        }

    }, [email, currentUser])
    return [token];
};

export default useToken;