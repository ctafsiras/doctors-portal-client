import { useEffect, useState } from "react";

const useToken = (user) => {
    const [token, setToken] = useState('');
    const email = user?.user?.email;
    const currentUser = { email };
    
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:4000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {

                    console.log(data)
                    setToken(data.token)
                    localStorage.setItem('token', data.token)
                });
        }

    }, [user])
    return [token];
};

export default useToken;