import React, { useEffect, useState } from 'react';
import './style.css';

const RideRequest = ({passenger_location, destination, driver_name, request_date, status, rate}) => {
    const [BGc, setBGc] = useState('grey');
    useEffect(() => {
        if (status === 'Completed'){
            setBGc('greenbg');
        }else if (status === 'Abandoned'){
            setBGc('redbg')
        }else if (status === 'Pending'){
            setBGc('yellowbg');
        }
    }, [status]);
//:)
    return (
        <div className={`request_card ${BGc}`}>
            <div className='column left'>
                <div className='row'>
                    <p className='txt'>FROM: {passenger_location}</p>
                </div>
                <div className='row'>
                    <p className='txt'>To: {destination}</p>
                </div>
                <div className='row'>
                    <p className='txt'>Driver Name: {driver_name}</p>
                </div>
            </div>

            <div className='row center'>

                <div className='column right'>

                    <div className='row'>
                    <p className='txt right_txt'>Request Date: </p>
                    </div>
                    <div className='row'>
                    <p className='txt right_txt'>Status: </p>
                    </div>
                    <div className='row'>
                    <p className='txt right_txt'>Rate: </p>
                    </div>

                </div>

                <div className='column left'>

                    <div className='row'>
                    <p className='txt left_txt'>    {request_date}</p>
                    </div>
                    <div className='row'>
                    <p className='txt left_txt'>    {status}</p>
                    </div>
                    <div className='row'>
                    <p className='txt left_txt'>    {rate}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default RideRequest;