import React from "react";
import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HomeIcon from "@mui/icons-material/Home";

const SuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)" 
    }}>
      <Container maxWidth="xs">
        <Paper elevation={0} sx={{ p: 5, textAlign: "center", borderRadius: 10, bgcolor: "white", boxShadow: "0 20px 40px rgba(0,0,0,0.05)" }}>
          <CheckCircleOutlineIcon sx={{ fontSize: 100, color: "#22c55e", mb: 2 }} />
          <Typography variant="h4" sx={{ fontWeight: 900, color: "#166534", mb: 1 }}>Success!</Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Your Delhi Heritage Tour has been booked successfully. A confirmation email has been sent to you.
          </Typography>

          <Button 
            variant="contained" 
            fullWidth 
            onClick={() => navigate("/")}
            startIcon={<HomeIcon />}
            sx={{ 
              py: 1.5, borderRadius: "12px", bgcolor: "#22c55e", fontWeight: 700,
              "&:hover": { bgcolor: "#16a34a" } 
            }}
          >
            Go to Home
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default SuccessScreen;