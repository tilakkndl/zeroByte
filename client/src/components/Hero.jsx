import React from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { useState } from "react";

const Hero = () => {
  const [x, setX] = useState([27.790768, 85.4702903]);
  function error() {
    alert("Sorry, no position available.");
  }

  const options = {
    enableHighAccuracy: true,
    maximumAge: 30000,
    timeout: 27000,
  };
  function getLocation() {
    console.log("called");
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition, error, options);
    }
  }
  function showPosition(position) {
    setX([position.coords.latitude, position.coords.longitude]);
  }
  // eslint-disable-next-line react/prop-types
  function SetViewOnClick({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());

    return null;
  }

  return (
    // <div className=" h-[90%] bg-hero flex flex-col justify-center items-center">
    //   <div className=" max-w-[50%] mb-[4rem]">
    //     <h1 className="text-black font-medium text-[5.5rem]">
    //       Need Ambulance?
    //     </h1>
    //     <p className="font-medium text-[3rem]">
    //       <span className="text-[#D52323]">Emergency</span>? Get In Contact With
    //       Ambulance Nearby.
    //     </p>
    //   </div>
    //   <div className=" w-[50%] flex justify-start">
    //     <button className="bg-[#D52323] rounded-3xl w-[150px] h-[50px] text-white mr-[150px]">
    //       Click Here
    //     </button>
    //     <button className="bg-[#1C0E0E] rounded-3xl w-[150px] h-[50px] text-white">
    //       Get Started
    //     </button>
    //   </div>
    // </div>
    <>
      <div>
        <button onClick={getLocation}>Click Here {x}</button>
      </div>
      <MapContainer center={x} zoom={13} className="h-[80%]">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={x}>
          <Popup>Your Location</Popup>
        </Marker>
        <SetViewOnClick coords={x} />
      </MapContainer>
    </>
  );
};

export default Hero;
