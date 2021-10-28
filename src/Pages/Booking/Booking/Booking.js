import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch(`https://stark-crag-11070.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
        .then(data=> setService(data))
    },[serviceId])

    return (
        <div>
           
            <img src={service.img} alt="" />
            <h2>Details of: {service.name}</h2>
            <h2>Description: {service.description}</h2>
        </div>
    );
};

export default Booking;