import React, { useState, useEffect } from "react";
import axios from "axios";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";

// const LocationMarker = () => {
//   const [position, setPosition] = useState(null);
//   const map = useMapEvents({
//     click() {
//       map.locate();
//     },
//     locationfound(e) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// };

const LeafletMap = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    // Fetch latitude and longitude data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get("API_ENDPOINT"); // Replace with your API endpoint
        setPositions(response.data);
      } catch (error) {
        setPositions([[33.88579137057757, 35.50668447067024]]);
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect only once when the component mounts

  return (
    <MapContainer
      style={{ height: "50vh", width: "100 vw" }}
      center={[33.88579137057757, 35.50668447067024]}
      zoom={13}
      scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {positions.map((x) => (
        <Marker
          key={x[0]}
          position={[x[0], x[1]]}
          draggable={false}
          icon={
            new Leaflet.Icon({
              iconSize: new Leaflet.Point(60, 75),
              iconUrl: "https://static-00.iconduck.com/assets.00/person-icon-512x483-d7q8hqj4.png",
            })
          }>
          <Popup>
            Here I am <br /> Where are you?
          </Popup>
        </Marker>
      ))}
      <Marker position={[51.505, -0.09]}>
        <Popup>
          Here I am. <br /> Where are you?
        </Popup>
      </Marker>
    </MapContainer>
    // <MapContainer
    //   center={{ lat: 51.505, lng: -0.09 }}
    //   zoom={13}
    //   scrollWheelZoom={false}
    // >
    //   <TileLayer
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //   />
    //   <LocationMarker />
    // </MapContainer>
  );
};

export default LeafletMap;
