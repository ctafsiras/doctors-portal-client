import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className="divider">OR</div>
            {error && <p className='text-red-500 p-2'>{error.message}</p>}
            <div className='flex justify-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className="btn btn-outline text-center">Continue with Google</button>

            </div>

        </div>
    );
};

export default SocialLogin;