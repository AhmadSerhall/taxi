import React, { useEffect, useRef } from 'react';
import './style.css';
import '../../styles/global.css';
import NavBar from '../../components/navbar';
import Button from '../../components/button';
import Input from '../../components/input';
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
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
            <Input/>
            <Button text="Request a Ride"/>
        </div>
      </div>
    </div>
  )
}

export default Map;
