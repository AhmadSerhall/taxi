import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RideRequest from './components/RideRequest';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RideRequest passenger_location = {'location 1'} destination = {'location 2'} driver_name = {'driver name'} request_date = {'02/08/2023'} status = {'Completed'} rate = {3}/>
    <RideRequest passenger_location = {'location 1'} destination = {'location 2'} driver_name = {'driver name'} request_date = {'02/08/2023'} status = {'Abandoned'} rate = {3}/>
    <RideRequest passenger_location = {'location 1'} destination = {'location 2'} driver_name = {'driver name'} request_date = {'02/08/2023'} status = {'Pending'} rate = {3}/>
  </React.StrictMode>
);

