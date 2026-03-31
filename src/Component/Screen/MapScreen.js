import React, { useState, useRef } from "react";
import { GoogleMap, LoadScript, Autocomplete, DirectionsRenderer } from "@react-google-maps/api";
import { Box, Typography, Paper, TextField, Button, Stack, InputAdornment, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import DirectionsIcon from "@mui/icons-material/Directions";

const libraries = ["places"];

// Custom Silver Map Style for a cleaner look
const mapStyles = [
  { "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }] },
  { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] },
  { "elementType": "labels.text.fill", "stylers": [{ "color": "#616161" }] },
  { "featureType": "road", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }] },
  { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }] },
  { "featureType": "water", "elementType": "labels.text.fill", "stylers": [{ "color": "#9e9e9e" }] }
];

const mapContainerStyle = { height: "700px", width: "100%", borderRadius: "16px" };
const center = { lat: 28.7041, lng: 77.1025 };

export default function MapScreen() {
  const [directions, setDirections] = useState(null);
  const startRef = useRef(null);
  const destinationRef = useRef(null);

  const handlePlaceChanged = () => {
    const startPlace = startRef.current?.getPlace();
    const destPlace = destinationRef.current?.getPlace();

    if (startPlace?.geometry && destPlace?.geometry) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: startPlace.geometry.location,
          destination: destPlace.geometry.location,
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === "OK") setDirections(result);
        }
      );
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_KEY_HERE" libraries={libraries}>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        
        {/* Header Area */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: "#1a237e" }}>
            Plan Your Journey
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Find the best routes between beautiful cities across India.
          </Typography>
        </Box>

        <Box sx={{ position: "relative", width: "100%" }}>
          
          {/* Floating Search Panel */}
          <Paper
            elevation={6}
            sx={{
              position: { xs: "relative", md: "absolute" },
              top: 20,
              left: 20,
              zIndex: 10,
              p: 3,
              width: { xs: "100%", md: 350 },
              borderRadius: 4,
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Route Finder</Typography>
              
              <Autocomplete onLoad={(a) => (startRef.current = a)} onPlaceChanged={handlePlaceChanged}>
                <TextField
                  fullWidth
                  label="Starting Point"
                  placeholder="Enter origin"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><LocationOnIcon color="primary" /></InputAdornment>,
                  }}
                />
              </Autocomplete>

              <Autocomplete onLoad={(a) => (destinationRef.current = a)} onPlaceChanged={handlePlaceChanged}>
                <TextField
                  fullWidth
                  label="Destination"
                  placeholder="Where to?"
                  InputProps={{
                    startAdornment: <InputAdornment position="start"><FlagIcon color="error" /></InputAdornment>,
                  }}
                />
              </Autocomplete>

              <Button
                variant="contained"
                fullWidth
                size="large"
                startIcon={<DirectionsIcon />}
                onClick={handlePlaceChanged}
                sx={{
                  py: 1.5,
                  borderRadius: 2,
                  fontWeight: "bold",
                  background: "linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)",
                  boxShadow: "0 3px 15px rgba(26, 35, 126, 0.4)",
                }}
              >
                Get Directions
              </Button>
            </Stack>
          </Paper>

          {/* Map Section */}
          <Paper elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={11}
              center={center}
              options={{ 
                styles: mapStyles, 
                disableDefaultUI: true, 
                zoomControl: true 
              }}
            >
              {directions && (
                <DirectionsRenderer
                  directions={directions}
                  options={{
                    polylineOptions: { strokeColor: "#1a237e", strokeWeight: 6, strokeOpacity: 0.7 },
                  }}
                />
              )}
            </GoogleMap>
          </Paper>
        </Box>
      </Container>
    </LoadScript>
  );
}