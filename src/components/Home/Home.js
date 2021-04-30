import React, { useEffect, useState } from 'react';
import rideData from '../../data/data.json';
import Ride from '../Ride/Ride';
import './Home.css';

const Home = () => {
    const [ride, setRide] =useState([]);
    useEffect(()=>{
        setRide(rideData);
    },[])
    return (
        <div className='card-container'>
           {
               rideData.map(ride =><Ride key={ride.pickType} ride={ride}></Ride>)
           }
          
        </div>
    ); 
};

export default Home;