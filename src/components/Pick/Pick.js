import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Pick = () => {
    const { rideType } = useParams();
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <h1>Let's pick a {rideType}</h1>
                    <p>want a <Link to='/home'>different Ride</Link></p>
                    <div class="mb-3">
                        <label for="formGroupExampleInput" class="form-label"> Pick from</label>
                        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Starting location"/>
                        </div>
                        <div class="mb-3">
                            <label for="formGroupExampleInput2" class="form-label">Pick to</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ending location"/>
                            <br/>
                            <button className='btn btn-primary'>Search</button>
                        </div>
                        </div>
                        <div className="col-md-7">
                            <h3>hello</h3>
                        </div>
                    </div>


                </div>
    );
};

export default Pick;