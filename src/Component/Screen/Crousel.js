import * as React from "react";
import { Box, Typography, Paper, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import Birla from "../Assest/birla.jpeg";
import Gurudwara from "../Assest/gurudwara.jpeg";
import Baoli from "../Assest/architecture.jpeg";
import qutub from "../Assest/qutub-minar.jpeg";

const images = [
  { label: "Birla Mandir", location: "Laxmi Narayan Temple, Delhi", imgPath: Birla },
  { label: "Gurudwara Bangla Sahib", location: "Delhi, India", imgPath: Gurudwara },
  { label: "Agrasen ki Baoli", location: "Stepwell Architecture, Delhi", imgPath: Baoli },
  { label: "Qutub Minar", location: "UNESCO World Heritage, Delhi", imgPath: qutub },
];

function CrouselScreen() {
  return (
    <Box sx={{ py: 10, backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography 
            variant="overline" 
            sx={{ color: "primary.main", fontWeight: 800, letterSpacing: 2 }}
          >
            Memories of the Past
          </Typography>
          <Typography 
            variant="h3" 
            sx={{ fontWeight: 900, color: "#001F3F", mt: 1, mb: 2 }}
          >
            Previous Tours
          </Typography>
          <Box 
            sx={{ 
              width: 60, height: 4, bgcolor: "primary.main", mx: "auto", borderRadius: 2 
            }} 
          />
        </Box>

        {/* Swiper Section */}
        <Paper 
          elevation={10} 
          sx={{ 
            borderRadius: 5, 
            overflow: "hidden", 
            boxShadow: "0px 20px 50px rgba(0,0,0,0.15)" 
          }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation, EffectFade]}
            effect="fade" // Smooth cinematic transition
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={true}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
          >
            {images.map((item, index) => (
              <SwiperSlide key={index}>
                <Box sx={{ position: "relative", height: { xs: 400, md: 600 } }}>
                  {/* Image with Gradient Overlay */}
                  <Box
                    component="img"
                    src={item.imgPath}
                    alt={item.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <Box 
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "60%",
                      background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
                    }}
                  />

                  {/* Floating Text Content */}
                  <Box 
                    sx={{
                      position: "absolute",
                      bottom: 40,
                      left: { xs: 20, md: 50 },
                      color: "white",
                      zIndex: 2
                    }}
                  >
                    <Typography 
                      variant="h4" 
                      sx={{ fontWeight: 800, textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
                    >
                      {item.label}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ opacity: 0.8, fontWeight: 300, fontSize: "1.1rem" }}
                    >
                      {item.location}
                    </Typography>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Paper>
      </Container>
    </Box>
  );
}

export default CrouselScreen;