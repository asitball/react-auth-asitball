import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pick = () => {
    const {rideType} = useParams();
    return (
        <div>
            <h1>Let's pick a {rideType}</h1>
            <p>want a <Link to='/home'>different Ride</Link></p>
        </div>
    );
};

export default Pick;