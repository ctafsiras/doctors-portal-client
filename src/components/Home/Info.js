import React from 'react';
import clock from '../../assets/icons/clock.svg'
import location from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='block lg:flex justify-evenly text-white'>
            <div class="mb-2 mx-auto bg-gradient-to-r from-secondary to-primary flex w-96 rounded-2xl">
                <div class="flex items-center pl-5">
                    <img src={clock} alt="Shoes" class="rounded-xl" />
                </div>
                <div class="card-body items-left text-start">
                    <h2 class="card-title text-left">Opening Hours</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="mb-2 mx-auto bg-gradient-to-r from-neutral to-neutral flex w-96 rounded-2xl">
                <div class="flex items-center pl-5">
                    <img src={location} alt="Shoes" class="rounded-xl" />
                </div>
                <div class="card-body items-left text-start">
                    <h2 class="card-title text-left">Visit Our Location</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
            <div class="mb-2 mx-auto bg-gradient-to-r from-secondary to-primary flex w-96 rounded-2xl">
                <div class="flex items-center pl-5">
                    <img src={phone} alt="Shoes" class="rounded-xl" />
                </div>
                <div class="card-body items-left text-start">
                    <h2 class="card-title text-left">Contact us now</h2>
                    <p>Lorem Ipsum is simply dummy text of the pri</p>
                </div>
            </div>
        </div>
    );
};

export default Info;