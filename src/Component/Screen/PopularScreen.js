

import * as React from "react";
import { styled } from "@mui/material/styles";
import { 
  Box, 
  Grid, 
  Typography, 
  Container, 
  Button, 
  Paper 
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import sea1 from "../Assest/birla.jpeg";
import sea2 from "../Assest/qutub-minar.jpeg";
import sea3 from "../Assest/humayun.jpeg";
import sea4 from "../Assest/national.jpeg";
import sea5 from "../Assest/architecture.jpeg";
import sea6 from "../Assest/jantar.jpeg";
import sea7 from "../Assest/gurudwara.jpeg";
import sea8 from "../Assest/redFort.jpeg";

// Styled Components for a high-end feel
const DestinationCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  borderRadius: "24px",
  overflow: "hidden",
  height: "450px",
  cursor: "pointer",
  border: "none",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    transform: "translateY(-10px)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    "& img": {
      transform: "scale(1.1)",
    },
    "& .overlay": {
      background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.1) 100%)",
      backdropFilter: "blur(2px)",
    },
    "& .content": {
      transform: "translateY(0)",
      opacity: 1,
    }
  },
}));

const CardImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.8s ease",
});

const GlassOverlay = styled(Box)({
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "32px",
  background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%)",
  transition: "all 0.4s ease",
});

const ContentWrapper = styled(Box)({
  transform: "translateY(40px)",
  opacity: 0.8,
  transition: "all 0.5s ease",
});

const destinations = [
  { id: 1, name: "Qutub Minar", img:sea2, desc: "A soaring 73m-high tower of victory built in 1193." },
  { id: 2, name: "Birla Mandir", img:sea1, desc: "A stunning Hindu temple showcasing intricate 20th-century carvings." },
  { id: 3, name: "Humayun's Tomb", img: sea3, desc: "A magnificent example of Mughal architecture and lush gardens." },
  { id: 4, name: "National Gallery", img: sea4, desc: "Houses a vast collection of contemporary and heritage Indian art." },
  { id: 5, name: "Agrasen ki Baoli", img:sea5, desc: "A historic 60-meter long stepwell with 103 steps." },
  { id: 6, name: "Jantar Mantar", img:sea6, desc: "An 18th-century astronomical observatory with 13 instruments." },
  { id: 7, name: "Bangla Sahib", img:sea7, desc: "Prominent Sikh house known for its serene pond and community service." },
  { id: 8, name: "Red Fort", img: sea8, desc: "UNESCO World Heritage site representing the peak of Mughal creativity." },
];

export default function PopularScreen() {
  return (
    <Box sx={{ bgcolor: "#F8FAFC", py: 10 }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 900, 
              color: "#0F172A", 
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.75rem" },
              letterSpacing: "-0.02em"
            }}
          >
            Popular Destinations
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: "#64748B", 
              maxWidth: "600px", 
              mx: "auto",
              fontSize: "1.1rem" 
            }}
          >
            Discover the heart of India through its most iconic landmarks and hidden gems in New Delhi.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {destinations.map((place) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={place.id}>
              <DestinationCard elevation={0}>
                <CardImage src={place.img} alt={place.name} />
                
                <GlassOverlay className="overlay">
                  <ContentWrapper className="content">
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 1 }}>
                      <LocationOnIcon sx={{ color: "#FBBF24", fontSize: "1rem" }} />
                      <Typography variant="caption" sx={{ color: "#FDE68A", fontWeight: 700, letterSpacing: 1 }}>
                        NEW DELHI
                      </Typography>
                    </Box>
                    
                    <Typography 
                      variant="h4" 
                      sx={{ 
                        color: "#fff", 
                        fontWeight: 800, 
                        mb: 1.5,
                        fontSize: "1.5rem" 
                      }}
                    >
                      {place.name}
                    </Typography>

                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: "rgba(255,255,255,0.8)", 
                        mb: 3,
                        lineHeight: 1.6,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden"
                      }}
                    >
                      {place.desc}
                    </Typography>

                    <Button 
                      fullWidth
                      variant="contained" 
                      sx={{ 
                        bgcolor: "#fff", 
                        color: "#0F172A", 
                        fontWeight: 700,
                        textTransform: "none",
                        borderRadius: "12px",
                        py: 1.2,
                        "&:hover": { bgcolor: "#F1F5F9" }
                      }}
                    >
                      Book Your Visit
                    </Button>
                  </ContentWrapper>
                </GlassOverlay>
              </DestinationCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
