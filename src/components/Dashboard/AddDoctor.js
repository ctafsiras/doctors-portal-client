import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const AddDoctor = () => {


    const { data, isLoading } = useQuery('serviceName', () => fetch('https://doctors-portal-servers.herokuapp.com/serviceNames').then(res => res.json()))

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        const img_bb_api = 'c8f56afc194c4a22e2bf5fe88af356fd';
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_bb_api}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.Specialty,
                        img: result.data.display_url
                    };
                    fetch('https://doctors-portal-servers.herokuapp.com/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('token')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.acknowledged) {
                                toast.success('Update Successful');
                            } else {
                                toast.error('Update Failed');
                            }
                            reset();
                        })
                }
            })
    };
    if (isLoading) {
        return <div className='text-center'><button className="btn btn-square loading"></button></div>;
    }

    return (
        <div>
            <h2>Add Doctor</h2>
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
                        <span className="label-text">Specialty</span>
                    </label>

                    <select
                        {...register("Specialty", {
                            required: true
                        })}
                        className="select select-bordered w-full max-w-xs">
                        {
                            data.map(service => <option
                                value={service.name}
                                key={service._id}
                            >{service.name}</option>)
                        }
                    </select>

                    <label className="label">
                        {errors.Specialty?.type === "required" && <span className="label-text-alt text-red-600">Specialty is Required</span>}
                    </label>


                    <div className="form-control w-full max-w-xs">
                        <label className="la'bel">
                            <span className="label-text">Image</span>
                        </label>
                        <input
                            {...register("image", {
                                required: true
                            })}
                            type="file"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.name?.type === "required" && <span className="label-text-alt text-red-600">Image is Required</span>}
                        </label>
                    </div>

                    {
                        false ?
                            <button className="btn loading">loading</button> :
                            <input className='btn' type="submit" value='Add' />
                    }
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;