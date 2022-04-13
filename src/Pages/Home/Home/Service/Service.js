import React from 'react';
import './Service.css'
const Service = (props) => {
    const { name, price, description, img } = props.service;
    return (
        <div className='service-container '>
            <img src={img} className='w-100' alt="" />
            <div>
                <h2>Name:{name}</h2>
                <p>Price:{price}</p>
                <p>{description}</p>
                <button>Booking</button>
            </div>
        </div>
    );
};

export default Service;