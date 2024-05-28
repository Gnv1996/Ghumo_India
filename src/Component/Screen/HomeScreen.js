import React from "react";
import Typography from "@mui/material/Typography";
import bg from "../Assest/bg.jpeg";
import PlaceScreen from "./PlaceScreen";
import PopularScreen from "./PopularScreen";
import PriceList from "./PriceList";
import CrouselScreen from "./Crousel";
import Feedback from "./Feedback";
import MapScreen from "./MapScreen";

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "70%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color: "white",
    zIndex: 1,
  },
};

function HomeScreen() {
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.text}>
          <Typography
            variant="h4"
            component="h4"
            style={{ fontWeight: "bold" }}
          >
            Welcome
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            style={{ fontWeight: "bold" }}
          >
            Ghumo India
          </Typography>
          <Typography variant="p" component="p" style={{ fontWeight: "bold" }}>
            We guide and help you.........
          </Typography>
        </div>
      </div>
      <PlaceScreen />
      <PopularScreen />
      <PriceList />
      <CrouselScreen />
      <MapScreen />
      <Feedback />
    </div>
  );
}

export default HomeScreen;
