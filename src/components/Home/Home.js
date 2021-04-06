import React, { useEffect, useState } from 'react';
import rideData from '../../data/data.json';
import RideCard from '../RideCard/RideCard';
import './Home.css';

const Home = () => {
    const [ride, setRide] =useState([]);
    useEffect(()=>{
        setRide(rideData);
    },[])
    return (
        <div className='card-container'>
           {
               rideData.map(ride =><RideCard ride={ride}></RideCard>)
           }
          
        </div>
    ); 
};

export default Home;