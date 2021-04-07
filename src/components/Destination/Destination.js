import React from 'react';
import { useParams } from 'react-router';

const Destination = () => {
    const {pickType} = useParams();
    return (
        <div>
            <h2>Let's Pick {pickType}</h2>
            <h3>This is Destination Page</h3>
        </div>
    );
};

export default Destination;