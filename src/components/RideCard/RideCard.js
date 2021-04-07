import React from 'react';
import { useHistory } from 'react-router';
import './RideCard.css';

const RideCard = (props) => {
    const {ride_name, image} = props.ride;
    const history = useHistory()
    const handleDestinationClick = (pickType) => {
        history.push(`/destination/${pickType}`);
    }
    return (
        <div className='ride-data'>
            <img src={image} alt=""/>
            <h1>{ride_name}</h1>
            <button onClick={handleDestinationClick}>Destination</button>
        </div>
    );
};

export default RideCard;