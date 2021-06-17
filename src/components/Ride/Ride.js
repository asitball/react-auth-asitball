import { useHistory } from 'react-router';
import './Ride.css';

const Ride = (props) => {
    const {id, rideType, image} = props.ride;
    const history = useHistory()
    const handleRideClick = (rideType) => {
    history.push(`/pick/${rideType}`);
    }
    return (
        <div className='ride-data'>
            <h3>{id}</h3>
            <img src={image} alt=""/>
            <h1>{rideType}</h1>
            <button className="btn btn-primary" onClick={()=>handleRideClick(rideType)}>Pick</button>
        </div>
    );
};

export default Ride;