import React, { useState, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const libraries = ["places"];
const mapContainerStyle = {
  height: "600px",
  width: "100%",
};
const center = {
  lat: 28.7041,
  lng: 77.1025,
};

const polylineOptions = {
  strokeColor: "#0047AB",
  strokeOpacity: 0.8,
  strokeWeight: 6,
};

export default function MapScreen() {
  const [directions, setDirections] = useState(null);
  const startRef = useRef(null);
  const destinationRef = useRef(null);

  const handleStartLoad = (autocomplete) => {
    startRef.current = autocomplete;
  };

  const handleDestinationLoad = (autocomplete) => {
    destinationRef.current = autocomplete;
  };

  const handlePlaceChanged = () => {
    if (startRef.current && destinationRef.current) {
      const startPlace = startRef.current.getPlace();
      const destinationPlace = destinationRef.current.getPlace();

      if (startPlace && destinationPlace) {
        const directionsService = new window.google.maps.DirectionsService();
        directionsService.route(
          {
            origin: startPlace.geometry.location,
            destination: destinationPlace.geometry.location,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            } else {
              console.error(`Error fetching directions: ${result}`);
            }
          }
        );
      }
    }
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBCOOcyGDwCWIyXT8Xrms6qqhqNme00ZY4"
      libraries={libraries}
    >
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ color: blue }}
      >
        Beautiful Cities....
      </Typography>
      <div style={{ marginBottom: "20px" }}>
        <div style={{ display: "flex" }}>
          <Autocomplete
            onLoad={handleStartLoad}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Starting Point"
              style={{ marginRight: "10px", padding: "10px", width: "200px" }}
            />
          </Autocomplete>
          <Autocomplete
            onLoad={handleDestinationLoad}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              placeholder="Destination Point"
              style={{ marginRight: "10px", padding: "10px", width: "200px" }}
            />
          </Autocomplete>
        </div>
        <button
          onClick={handlePlaceChanged}
          style={{
            marginLeft: "10px",
            padding: "10px",
            margin: "20px",
            width: "300px",
            backgroundColor: "darkblue",
            borderRadius: "5px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Show Directions
        </button>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={11}
        center={center}
      >
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: polylineOptions,
            }}
          />
        )}
      </GoogleMap>
    </LoadScript>
  );
}
