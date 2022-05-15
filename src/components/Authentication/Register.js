import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name })
        alert('Profile Created')
    };
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Register</h2>
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="la'bel">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: true
                                })}
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === "required" && <span className="label-text-alt text-red-600">Name is Required</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: true
                                })}
                                type="email"
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
                            {error && <p className='text-red-500 p-2'>{error.message}</p>}
                            {
                                loading ?
                                    <button className="btn loading">loading</button> :
                                    <input className='btn' type="submit" value='Register' />
                            }
                        </div>
                    </form>
                    <p>Already have account? <Link to='/login' className='text-primary'>Please Login</Link></p>
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Register;