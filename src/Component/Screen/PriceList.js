import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Container,
  Grid,
  CssBaseline,
} from "@mui/material";

const darkBlue = "#001F3F";

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
  isMiddle, 
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "10px",
        backgroundColor: "#F5F5F5",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        position: "relative",
      }}
    >
      {isMiddle && recommended && (
        <Typography
          variant="subtitle1"
          align="center"
          style={{
            position: "absolute",
            top: -25,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#2196f3",
            color: "#ffffff",
            borderRadius: "4px",
            padding: "4px 8px",
          }}
        >
          Recommended
        </Typography>
      )}
      <CardContent style={{ flexGrow: 1 }}>
        <Typography
          variant="h5"
          component="h2"
          align="center"
          gutterBottom
          style={{ color: darkBlue, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          component="h6"
          align="center"
          gutterBottom
          style={{ color: darkBlue }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          style={{ color: darkBlue }}
        >
          {price}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          gutterBottom
          style={{ color: darkBlue }}
        >
          {duration}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          <strong>Hotel:</strong> {hotel}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          <strong>Meals Included:</strong>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          Breakfast: {breakfast ? "Yes" : "No"}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          Lunch: {lunch ? "Yes" : "No"}
        </Typography>
        <Typography
          variant="body2"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          Dinner: {dinner ? "Yes" : "No"}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          paragraph
          style={{ color: darkBlue }}
        >
          {description}
        </Typography>
      </CardContent>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        style={{ backgroundColor: darkBlue, height: "50px" }}
      >
        Book Now
      </Button>
    </Card>
  );
};

const PriceList = () => {
  const packageList = [
    {
      title: "Basic",
      subtitle: "Adventure Package",
      price: "₹ 2000",
      duration: "1 Days",
      hotel: "Na",
      breakfast: false,
      lunch: false,
      dinner: false,
      description:
        "Explore iconic landmarks such as the Red Fort, Rashtrapati Bhavan, India Gate, Kirti Mandir, Lotus Temple, Kalkaji Temple, ISKCON Temple, and Jama Masjid.",
      recommended: true,
    },
    {
      title: "Standard",
      subtitle: "Cultural Package",
      price: "₹ 8000",
      duration: "2 Days / 1 Nights",
      hotel: "3-star accommodations",
      breakfast: true,
      lunch: true,
      dinner: true,
      description:
        "Explore India's iconic landmarks: Red Fort, Rashtrapati Bhavan( Inside Tour ), India Gate, Lotus Temple, Jama Masjid, and vibrant markets like Chandni Chowk, Sarojini Nagar, offering diverse experiences.",
      recommended: true,
    },
    {
      title: "Premium",
      subtitle: "Beach Package",
      price: "₹ 12000",
      duration: "4 Days / 3 Nights",
      hotel: "5-star beachfront resort",
      breakfast: true,
      lunch: true,
      dinner: true,
      description:
        "Discover Delhis charm with iconic landmarks, lively markets, and rejuvenation at a water park, offering diverse experiences for all.",
      recommended: false,
    },
  ];

  return (
    <Container>
      <CssBaseline />
      <Typography
        variant="h3"
        align="center"
        gutterBottom
        style={{ color: darkBlue }}
      >
        Choose Your Tour Package
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        {packageList.map((tourPackage, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <TourPackageCard
              {...tourPackage}
              isMiddle={index === Math.floor(packageList.length / 2)}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PriceList;
