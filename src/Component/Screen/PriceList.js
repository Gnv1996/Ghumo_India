import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Container,
  Divider,
  Stack,
  Chip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import HotelIcon from "@mui/icons-material/Hotel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";


const COLORS = {
  primary: "#1E293B", // Navy Slate
  accent: "#6366F1",  // Indigo
  recommended: "#F59E0B", // Amber
  bg: "#F8FAFC",
  textSecondary: "#64748B"
};

const FeatureItem = ({ icon, text, included = true }) => (
  <Stack direction="row" spacing={1.5} alignItems="flex-start" sx={{ mb: 1.5 }}>
    {included ? (
      <CheckCircleIcon sx={{ fontSize: 20, color: COLORS.accent }} />
    ) : (
      <CancelIcon sx={{ fontSize: 20, color: "#CBD5E1" }} />
    )}
    <Typography variant="body2" sx={{ color: included ? COLORS.primary : COLORS.textSecondary, fontWeight: included ? 500 : 400 }}>
      {text}
    </Typography>
  </Stack>
);

const TourPackageCard = ({
  title,
  price,
  duration,
  hotel,
  breakfast,
  lunch,
  dinner,
  description,
  subtitle,
  recommended,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        elevation={0}
        sx={{
          borderRadius: "24px",
          border: recommended ? `2px solid ${COLORS.accent}` : "1px solid #E2E8F0",
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-10px)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
          bgcolor: recommended ? "#fff" : "rgba(255, 255, 255, 0.7)",
        }}
      >
        {recommended && (
          <Box
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
            }}
          >
            <Chip 
              label="Best Value" 
              size="small" 
              sx={{ 
                bgcolor: COLORS.accent, 
                color: "#fff", 
                fontWeight: 800, 
                fontSize: "0.65rem",
                textTransform: "uppercase" 
              }} 
            />
          </Box>
        )}

        <CardContent sx={{ p: 4, flexGrow: 1 }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: COLORS.accent, letterSpacing: 1.5 }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 900, color: COLORS.primary, mb: 1 }}>
            {price}
          </Typography>
          <Typography variant="body2" sx={{ color: COLORS.textSecondary, mb: 3, minHeight: "40px" }}>
            {subtitle}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Stack spacing={2} sx={{ mb: 4 }}>
            <Stack direction="row" spacing={1} alignItems="center">
              <AccessTimeIcon sx={{ color: COLORS.textSecondary, fontSize: 18 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{duration}</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <HotelIcon sx={{ color: COLORS.textSecondary, fontSize: 18 }} />
              <Typography variant="body2">{hotel === "Na" ? "No Hotel Included" : hotel}</Typography>
            </Stack>
          </Stack>

          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 800, textTransform: "uppercase", fontSize: "0.7rem", color: COLORS.textSecondary }}>
            What's Included
          </Typography>
          
          <FeatureItem text="Daily Breakfast" included={breakfast} />
          <FeatureItem text="Luxury Lunch" included={lunch} />
          <FeatureItem text="Gourmet Dinner" included={dinner} />
          <FeatureItem text="Guided Tours" included={true} />

          <Typography variant="body2" sx={{ mt: 3, color: COLORS.textSecondary, fontStyle: "italic", lineHeight: 1.6 }}>
            {description}
          </Typography>
        </CardContent>

        <Box sx={{ p: 4, pt: 0 }}>
          <Button
            fullWidth
            variant="contained"
            disableElevation
            sx={{
              borderRadius: "12px",
              py: 1.5,
              textTransform: "none",
              fontWeight: 700,
              fontSize: "1rem",
              bgcolor: recommended ? COLORS.accent : COLORS.primary,
              "&:hover": {
                bgcolor: recommended ? "#4F46E5" : "#0F172A",
              },
            }}
          >
            Start Journey
          </Button>
        </Box>
      </Card>
    </Grid>
  );
};

const PriceList = () => {
  const packageList = [
    {
      title: "Basic",
      subtitle: "Perfect for quick explorers and local sightseeing.",
      price: "₹ 2000",
      duration: "1 Day",
      hotel: "Na",
      breakfast: false,
      lunch: false,
      dinner: false,
      description: "Includes Red Fort, India Gate, and Lotus Temple visits.",
      recommended: false,
    },
    {
      title: "Standard",
      subtitle: "The full cultural experience for families.",
      price: "₹ 8000",
      duration: "2 Days / 1 Night",
      hotel: "3-star accommodations",
      breakfast: true,
      lunch: true,
      dinner: true,
      description: "Inside tours of Rashtrapati Bhavan & Chandni Chowk shopping.",
      recommended: true,
    },
    {
      title: "Premium",
      subtitle: "Luxury focused retreat with water park access.",
      price: "₹ 12000",
      duration: "4 Days / 3 Nights",
      hotel: "5-star beachfront resort",
      breakfast: true,
      lunch: true,
      dinner: true,
      description: "Delhi's charm with leisure time at premium water parks.",
      recommended: false,
    },
  ];

  return (
    <Box sx={{ bgcolor: COLORS.bg, minHeight: "100vh", py: 10 }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography variant="h2" sx={{ fontWeight: 900, color: COLORS.primary, mb: 2, letterSpacing: "-1px" }}>
            Ready to Explore?
          </Typography>
          <Typography variant="h6" sx={{ color: COLORS.textSecondary, fontWeight: 400, maxWidth: "600px", mx: "auto" }}>
            Choose the perfect tour package tailored for your next big adventure in the capital.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="stretch">
          {packageList.map((tourPackage, index) => (
            <TourPackageCard key={index} {...tourPackage} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PriceList;