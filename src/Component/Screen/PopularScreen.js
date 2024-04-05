import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography"; // Import Typography component
import sea1 from "../Assest/birla.jpeg";
import sea2 from "../Assest/qutub-minar.jpeg";
import sea3 from "../Assest/humayun.jpeg";
import sea4 from "../Assest/national.jpeg";
import sea5 from "../Assest/architecture.jpeg";
import sea6 from "../Assest/jantar.jpeg";
import sea7 from "../Assest/gurudwara.jpeg";
import sea8 from "../Assest/redFort.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.dark,
}));

const ImageWrapper = styled("div")({
  position: "relative",
  width: "100%",
  height: "400px", // Adjust this height as needed
  overflow: "hidden",
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ImageOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  opacity: 0,
  transition: "opacity 0.3s ease",
  "&:hover": {
    opacity: 1,
  },
});

const OverlayContent = styled("div")({
  textAlign: "center",
  color: "#fff",
  padding: "20px",
});

const Button = styled("button")({
  backgroundColor: "#fff",
  color: "#000",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  marginTop: "10px",
  transition: "background-color 0.3s ease",
  "&:hover": {
    backgroundColor: "#ddd",
  },
});

export default function PopularScreen() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: 10, marginBottom: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item>
            {/* Heading and paragraph */}
            <Typography variant="h2" gutterBottom>
              Popular Destinations
            </Typography>

            <Typography variant="body1" align="center">
              Explore exciting destinations & best places to visit in and around
              Delhi........
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea2} alt="Qutub Minar" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Qutub Minar</Typography>
                  <Typography variant="body2">
                    Qutub Minar is a soaring, 73 m-high tower of victory, built
                    in 1193 by Qutab-ud-din Aibak immediately after the defeat
                    of Delhi's last Hindu kingdom.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea1} alt="Birla Mandir" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Birla Mandir</Typography>
                  <Typography variant="body2">
                    Birla Mandir, also known as the Laxminarayan Temple, is a
                    stunning Hindu temple in Delhi. Constructed in the 20th
                    century, it showcases intricate carvings and sculptures,
                    attracting devotees and tourists alike.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea3} alt="Humayun's Tomb " />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Humayun's Tomb </Typography>
                  <Typography variant="body2">
                    The Humayun's Tomb is a magnificent example of Mughal
                    architecture, constructed in the 16th century. It features a
                    grand dome, intricate carvings, and lush gardens,
                    captivating visitors with its timeless beauty.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea4} alt="National Gallery" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">National Gallery</Typography>
                  <Typography variant="body2">
                    The National Gallery of Modern Art in Delhi houses a vast
                    collection of contemporary Indian art, showcasing diverse
                    styles and mediums, offering a glimpse into the nation's
                    artistic heritage.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea5} alt="Agrasen ki Baoli" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Agrasen ki Baoli</Typography>
                  <Typography variant="body2">
                    Agrasen ki Baoli is a historic stepwell in Delhi, believed
                    to have been built by the legendary king Agrasen. It
                    features intricate architecture and remains a popular
                    tourist attraction in the city.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea6} alt="Jantar Mantar" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Jantar Mantar</Typography>
                  <Typography variant="body2">
                    Jantar Mantar is an ancient astronomical observatory in
                    Delhi, built by Maharaja Jai Singh II in the 18th century.
                    It comprises 13 architectural astronomy instruments,
                    reflecting India's scientific prowess.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea7} alt="Bangla Sahib Gurudwara" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Bangla Sahib Gurudwara</Typography>
                  <Typography variant="body2">
                    Bangla Sahib Gurudwara, located in Delhi, is a prominent
                    Sikh house of worship known for its serene atmosphere,
                    community kitchen serving free meals, and sacred pond
                    offering spiritual solace.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Item>
            {/* Image */}
            <ImageWrapper>
              <Image src={sea8} alt="Red Fort" />
              <ImageOverlay>
                <OverlayContent>
                  <Typography variant="h3">Red Fort</Typography>
                  <Typography variant="body2">
                    The Red Fort, a UNESCO World Heritage Site in Delhi, was
                    built by Emperor Shah Jahan in the 17th century. It
                    showcases magnificent Mughal architecture and hosts cultural
                    events.
                  </Typography>
                  <Button>Book Now</Button>
                </OverlayContent>
              </ImageOverlay>
            </ImageWrapper>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
