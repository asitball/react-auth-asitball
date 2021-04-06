import React from 'react';
import './RideCard.css';

const RideCard = (props) => {
    const {ride_name, image} = props.ride;
    return (
        <div className='ride-data'>
            <img src={image} alt=""/>
            <h1>{ride_name}</h1>
            {/* <button onClick={handleDestinationClick}>Destination</button> */}
        </div>
    );
};

export default RideCard;