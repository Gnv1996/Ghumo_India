import React from "react";
import { Box, Typography, Button, Container, Stack, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";

// Your Components
import bg from "../Assest/bg.jpeg";
import PlaceScreen from "./PlaceScreen";
import PopularScreen from "./PopularScreen";
import PriceList from "./PriceList";
import CrouselScreen from "./Crousel";
import Feedback from "./Feedback";
import MapScreen from "./MapScreen";

function HomeScreen() {
  return (
    <Box>
      {/* --- HERO SECTION --- */}
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // Parallax effect
          color: "white",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={3} alignItems="center">
            {/* Animated Welcome Tag */}
            <Typography
              variant="overline"
              sx={{
                letterSpacing: 4,
                fontWeight: 800,
                color: "#38bdf8",
                textShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              Start Your Adventure
            </Typography>

            {/* Main Title */}
            <Typography
              variant="h1"
              sx={{
                fontWeight: 900,
                fontSize: { xs: "3.5rem", md: "5.5rem" },
                lineHeight: 1,
                letterSpacing: "-0.02em",
                textShadow: "2px 4px 20px rgba(0,0,0,0.4)",
              }}
            >
              Ghumuo <span style={{ color: "#38bdf8" }}>India</span>
            </Typography>

            {/* Subtitle */}
            <Typography
              variant="h6"
              sx={{
                maxWidth: "600px",
                opacity: 0.9,
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              From the majestic Himalayas to the serene backwaters of Kerala, 
              we help you discover the soul of India.
            </Typography>

            {/* --- GLASSMORPHISM SEARCH BAR --- */}
            <Paper
              elevation={0}
              sx={{
                p: "4px 12px",
                display: "flex",
                alignItems: "center",
                width: { xs: "90%", sm: 500 },
                borderRadius: "50px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                mt: 4,
              }}
            >
              <SearchIcon sx={{ ml: 1, color: "white" }} />
              <InputBase
                sx={{ ml: 2, flex: 1, color: "white", fontSize: "1rem" }}
                placeholder="Where do you want to go?"
              />
              <Button
                variant="contained"
                sx={{
                  borderRadius: "40px",
                  px: 4,
                  py: 1,
                  bgcolor: "#38bdf8",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#0ea5e9" },
                }}
              >
                Search
              </Button>
            </Paper>

            {/* CTA Button */}
            <Button
            component={Link} // This tells MUI to act like a React Router Link
            to="/booking"
              variant="outlined"
              startIcon={<ExploreIcon />}
              sx={{
                mt: 2,
                color: "white",
                borderColor: "white",
                borderRadius: "50px",
                px: 4,
                py: 1.5,
                fontWeight: 600,
                "&:hover": { border: "1px solid #38bdf8", color: "#38bdf8" },
              }}
            >
              Book Delhi Tour
            </Button>
          </Stack>
        </Container>

        {/* Floating Scroll Icon */}
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            animation: "bounce 2s infinite",
            "@keyframes bounce": {
              "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
              "40%": { transform: "translateY(-10px)" },
              "60%": { transform: "translateY(-5px)" },
            },
          }}
        >
          <KeyboardArrowDownIcon sx={{ fontSize: 40, opacity: 0.7 }} />
        </Box>
      </Box>

      {/* --- CONTENT SECTIONS --- */}
      <Box sx={{ backgroundColor: "#f8fafc" }}>
        <PlaceScreen />
        <PopularScreen />
        <PriceList />
        <CrouselScreen />
        <MapScreen />
        <Feedback />
      </Box>
    </Box>
  );
}

export default HomeScreen;