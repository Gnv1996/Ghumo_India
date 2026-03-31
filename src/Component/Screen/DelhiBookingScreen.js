import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Grid,
  MenuItem,
  InputAdornment,
  Chip,
  Divider,
  Rating
} from "@mui/material";
import { Link } from "react-router-dom";

// Modern Icons
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PeopleIcon from "@mui/icons-material/People";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance"; // For Heritage

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DelhiBookingScreen = () => {
  const [guests, setGuests] = useState(1);
  const [packageType, setPackageType] = useState("Heritage Full Day");

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(15, 23, 42, 0.9)), url('https://images.unsplash.com/photo-1587474260584-1f35a491179a?q=80&w=2070')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        pt: 12,
        pb: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          
          {/* LEFT SIDE: DESTINATION INFO */}
          <Grid item xs={12} md={6}>
            <Box sx={{ color: "white", mb: { xs: 4, md: 0 } }}>
              <Chip 
                label="Most Popular in 2026" 
                sx={{ bgcolor: "#4f46e5", color: "white", fontWeight: 700, mb: 2 }} 
              />
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.1 }}>
                Explore the Heart <br />
                of <span style={{ color: "#38bdf8" }}>Delhi</span>
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, mb: 4, fontWeight: 400 }}>
                Experience a perfect blend of Mughal history and modern lifestyle. 
                From Red Fort to Chandni Chowk, we cover it all.
              </Typography>

              <Box sx={{ display: "flex", gap: 3 }}>
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>4.9</Typography>
                  <Rating value={5} readOnly size="small" />
                  <Typography variant="caption" sx={{ display: "block" }}>12k+ Reviews</Typography>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ bgcolor: "rgba(255,255,255,0.2)" }} />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800 }}>8 hrs</Typography>
                  <Typography variant="caption" sx={{ display: "block" }}>Tour Duration</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* RIGHT SIDE: BOOKING CARD */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={24}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: "32px",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800, color: "#1e293b", mb: 3 }}>
                Reserve Your Spot
              </Typography>

              <Grid container spacing={2}>
                {/* SELECT PACKAGE */}
                <Grid item xs={12}>
                  <TextField
                    select
                    fullWidth
                    label="Select Tour Package"
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountBalanceIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  >
                    <MenuItem value="Heritage Full Day">Heritage Full Day (Top Picks)</MenuItem>
                    <MenuItem value="Old Delhi Food Tour">Old Delhi Food Walk</MenuItem>
                    <MenuItem value="Temple Spiritual Tour">Temple & Spiritual Tour</MenuItem>
                  </TextField>
                </Grid>

                {/* DATE PICKER */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="date"
                    label="Travel Date"
                    InputLabelProps={{ shrink: true }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonthIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* GUESTS */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="No. of Guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PeopleIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* PICKUP LOCATION */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Pickup Address (Hotel/Airport)"
                    placeholder="e.g. Radisson Blu, Dwarka"
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "16px" } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationOnIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>

              {/* PRICE SUMMARY */}
              <Box sx={{ mt: 4, p: 3, bgcolor: "#f8fafc", borderRadius: "20px", border: "1px dashed #cbd5e1" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography color="text.secondary">Base Price (Per Person)</Typography>
                  <Typography sx={{ fontWeight: 700 }}>₹1,499</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                  <Typography color="text.secondary">GST (18%)</Typography>
                  <Typography sx={{ fontWeight: 700 }}>₹270</Typography>
                </Box>
                <Divider sx={{ my: 1.5 }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.2rem" }}>Total Amount</Typography>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#4f46e5" }}>
                    ₹{ (1769 * guests).toLocaleString() }
                  </Typography>
                </Box>
              </Box>

              <Button
                variant="contained"
                component={Link} // This tells MUI to act like a React Router Link
            to="/payment"
                fullWidth
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mt: 3,
                  py: 2,
                  borderRadius: "16px",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  background: "linear-gradient(45deg, #4f46e5, #3b82f6)",
                  textTransform: "none",
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.4)",
                  "&:hover": { transform: "translateY(-2px)", transition: "all 0.2s" }
                }}
              >
                Confirm Booking
              </Button>
              
              <Typography variant="caption" sx={{ display: "block", textAlign: "center", mt: 2, color: "#94a3b8" }}>
                *Free cancellation up to 24 hours before the tour
              </Typography>
            </Paper>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

export default DelhiBookingScreen;