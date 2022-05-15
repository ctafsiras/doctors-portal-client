import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: true
                                })}
                                type="email"
                                onBlur={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === "required" && <span className="label-text-alt text-red-600">Email is Required</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: true
                                })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === "required" && <span className="label-text-alt text-red-600">Password is Required</span>}
                            </label>
                            <p>Forget Password? <span
                                className='cursor-pointer text-blue-500'
                                onClick={async () => {
                                    await sendPasswordResetEmail(email);
                                    if (resetError) {
                                        toast.error(resetError.message);
                                    } else {
                                        toast.success("Email Sent!");
                                    }
                                }}
                            >Reset Now</span></p>
                            {resetError && <p className='text-red-500 p-2'>{resetError.message}</p>}
                            {
                                loading ?
                                    <button className="btn loading">loading</button> :
                                    <input className='btn' type="submit" value='Login' />
                            }
                        </div>
                    </form>
                    <p>New to Doctors Portal? <Link to='/register' className='text-primary'>Create new account</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;