import React from "react";
import { Box, Card, Typography, Grid, Avatar, Rating, Container } from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

// If you don't have these assets, replace with URLs for testing
import man from "../Assest/man.jpeg";
import man2 from "../Assest/person.jpg";

const clientFeedbacks = [
  {
    clientName: "Raju Sheoran",
    image: man,
    feedback: "Experience pure joy, contentment, and boundless delight on our tour. Discover happiness in every moment.",
    rating: 4.5,
    date: "2025-12-15",
  },
  {
    clientName: "John Doe",
    image: man2,
    feedback: "Embark on a joyful journey where laughter echoes through scenic landscapes. The attention to detail was simply unmatched.",
    rating: 4,
    date: "2026-03-20",
  },
  {
    clientName: "Jane Smith",
    image: man,
    feedback: "Explore vibrant cultures and breathtaking landscapes with unforgettable experiences. Truly a life-changing trip!",
    rating: 5,
    date: "2026-03-25",
  },
];

function Feedback() {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 15 },
        backgroundColor: "#02020a", // Deep obsidian
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Blobs */}
      <Box sx={{
        position: "absolute",
        top: "20%",
        right: "-5%",
        width: "300px",
        height: "300px",
        background: "linear-gradient(45deg, #4f46e5, #9333ea)",
        filter: "blur(120px)",
        opacity: 0.2,
        borderRadius: "50%",
        zIndex: 0,
        animation: "pulse 10s infinite alternate"
      }} />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 10 }}>
          <Typography
            variant="overline"
            sx={{ 
              color: "#818cf8", 
              fontWeight: 900, 
              letterSpacing: 6,
              display: "block",
              mb: 1
            }}
          >
            VOICES OF TRAVELERS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              background: "linear-gradient(to bottom, #ffffff 30%, #94a3b8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2
            }}
          >
            Trusted by Thousands
          </Typography>
          <Box sx={{ width: 60, height: 4, bgcolor: "#4f46e5", mx: "auto", borderRadius: 2 }} />
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {clientFeedbacks.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  color: "white",
                  borderRadius: 8, // Softer corners
                  padding: "1px", // Space for gradient border
                  border: "none",
                  position: "relative",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  "&:hover": {
                    transform: "translateY(-15px) scale(1.02)",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 20px rgba(79, 70, 229, 0.2)",
                    background: "linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)",
                  },
                }}
              >
                {/* Content Box */}
                <Box sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}>
                  <FormatQuoteIcon 
                    sx={{ 
                      fontSize: 50, 
                      color: "#4f46e5", 
                      opacity: 0.4,
                      mb: -2
                    }} 
                  />

                  <Box sx={{ flexGrow: 1 }}>
                    <Rating 
                      value={item.rating} 
                      readOnly 
                      precision={0.5}
                      sx={{ 
                        mb: 3, 
                        color: "#fbbf24",
                        fontSize: "1.2rem",
                        "& .MuiRating-iconFilled": {
                          filter: "drop-shadow(0 0 8px rgba(251, 191, 36, 0.4))"
                        }
                      }} 
                    />
                    
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "1.1rem",
                        lineHeight: 1.8,
                        color: "#e2e8f0",
                        fontWeight: 300,
                        mb: 4,
                      }}
                    >
                      {item.feedback}
                    </Typography>
                  </Box>

                  <Box sx={{ mt: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      src={item.image}
                      sx={{
                        width: 56,
                        height: 56,
                        border: "3px solid rgba(79, 70, 229, 0.5)",
                        boxShadow: "0 0 20px rgba(0,0,0,0.4)"
                      }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 800, color: "white" }}>
                        {item.clientName}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#94a3b8", fontWeight: 600 }}>
                        Verified Traveler • {new Date(item.date).getFullYear()}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CSS for Pulse Animation */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1) translate(0, 0); }
            100% { transform: scale(1.2) translate(-20px, 20px); }
          }
        `}
      </style>
    </Box>
  );
}

export default Feedback;