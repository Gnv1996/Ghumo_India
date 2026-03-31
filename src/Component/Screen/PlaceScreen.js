import * as React from "react";
import { styled } from "@mui/material/styles";
import { 
  Box, 
  Grid, 
  Typography, 
  Container, 
  Paper, 
  Chip, 
  Button, 
  Divider 
} from "@mui/material";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExploreIcon from '@mui/icons-material/Explore';
import indiaGate from "../Assest/indiaGate.jpeg";
import lotus from "../Assest/lotus.jpeg";

// Styled Components for consistent premium look
const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: "32px",
  overflow: "hidden",
  border: "1px solid #f1f5f9",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  '&:hover': {
    transform: "translateY(-8px)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
  }
}));

const ImageContainer = styled(Box)({
  width: "100%",
  height: "500px",
  position: "relative",
  overflow: "hidden",
});

const PlaceImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.6s ease",
  '&:hover': {
    transform: "scale(1.05)",
  }
});

export default function PlaceScreen() {
  const places = [
    {
      name: "India Gate",
      subtitle: "The iconic war memorial of New Delhi",
      tags: ["Historical", "Monument", "Must Visit"],
      image: indiaGate,
      description1: "At the centre of New Delhi stands the 42 m high India Gate, an 'Arc-de-Triomphe' like archway. It commemorates the 70,000 Indian soldiers who lost their lives fighting during World War I.",
      description2: "Designed by Edwin Lutyens, it features the eternal flame 'Amar Jawan Jyoti', burning day and night to remind the nation of its fallen heroes.",
      alignment: "right"
    },
    {
      name: "Lotus Temple",
      subtitle: "A masterpiece of Baháʼí architecture",
      tags: ["Spiritual", "Architecture", "Peaceful"],
      image: lotus,
      description1: "Shaped like a floating lotus, this edifice is constructed purely with white marble. It symbolizes spirituality, wealth, and knowledge across all faiths.",
      description2: "Completed in 1986, it is set among lush green landscaped gardens with nine surrounding pools that light up spectacularly at dusk.",
      alignment: "left"
    }
  ];

  return (
    <Box sx={{ 
      background: 'linear-gradient(180deg, #FDFCFB 0%, #E2D1C3 100%)', // Soft warm gradient
      minHeight: '100vh',
      py: 8 
    }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 10, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ fontWeight: 800, color: '#6366F1', letterSpacing: 3 }}>
            EXPLORE THE CAPITAL
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 900, color: '#1E293B', mt: 1, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Signature Landmarks
          </Typography>
          <Box sx={{ width: 80, height: 4, bgcolor: '#6366F1', mx: 'auto', mt: 2, borderRadius: 2 }} />
        </Box>

        {places.map((place, index) => (
          <StyledPaper elevation={0} key={index} sx={{ mb: 8 }}>
            <Grid container direction={place.alignment === "left" ? "row-reverse" : "row"}>
              <Grid item xs={12} md={6}>
                <ImageContainer>
                  <PlaceImage src={place.image} alt={place.name} />
                  <Box sx={{ 
                    position: 'absolute', 
                    top: 20, 
                    right: 20, 
                    bgcolor: 'rgba(255,255,255,0.9)', 
                    backdropFilter: 'blur(4px)',
                    px: 2, py: 1, borderRadius: 2,
                    display: 'flex', alignItems: 'center', gap: 1
                  }}>
                    <LocationOnIcon sx={{ color: '#F43F5E', fontSize: '1rem' }} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>New Delhi, IN</Typography>
                  </Box>
                </ImageContainer>
              </Grid>
              <Grid item xs={12} md={6} sx={{ p: { xs: 4, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                  {place.tags.map(tag => (
                    <Chip key={tag} label={tag} size="small" variant="outlined" sx={{ fontWeight: 600, color: '#64748B' }} />
                  ))}
                </Box>
                
                <Typography variant="h3" sx={{ fontWeight: 800, color: '#1E293B', mb: 1 }}>
                  {place.name}
                </Typography>
                
                <Typography variant="h6" sx={{ color: '#6366F1', fontWeight: 500, mb: 3 }}>
                  {place.subtitle}
                </Typography>

                <Divider sx={{ mb: 3, width: '40%' }} />

                <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
                  {place.description1}
                </Typography>
                
                <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
                  {place.description2}
                </Typography>

                <Button 
                  variant="contained" 
                  size="large"
                  startIcon={<ExploreIcon />}
                  sx={{ 
                    alignSelf: 'flex-start',
                    borderRadius: '12px',
                    px: 4,
                    py: 1.5,
                    bgcolor: '#1E293B',
                    textTransform: 'none',
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#334155' }
                  }}
                >
                  Plan A Visit
                </Button>
              </Grid>
            </Grid>
          </StyledPaper>
        ))}
      </Container>
    </Box>
  );
}