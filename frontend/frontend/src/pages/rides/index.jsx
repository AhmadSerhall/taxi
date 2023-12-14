import React, { useEffect, useRef } from 'react';
import './style.css';
import '../../styles/global.css';
import NavBar from '../../components/navbar';
import Button from '../../components/button';
import Input from '../../components/input';
import { Link } from 'react-router-dom';
import Location from '../location/Location';
import LeafletMap from '../../components/location/LeafletMap';
const Map = () => {
  return (
    <div>
      <NavBar/>
      <div className='page-container flex '>
        <div className='info flex column center'>
            <h3>
            Effortlessly find reliable rides for your daily commute or special occasions.
            </h3>
            <h3>
                enter your destination
            </h3>
            <Input placeholder="enter your destination"/>
            <Button text="Request a Ride"/>
            <Link to="/rating"><Button text="Rate us"/></Link>
            <Link to="/yourride"><Button text="rides history"/></Link>
        </div>
        <div className='map'>
        <LeafletMap/>
        </div>
      </div>
    </div>
  )
}

export default Map;
