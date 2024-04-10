import React from "react";
import { Box, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import man from "../Assest/man.jpeg";
import man2 from "../Assest/person.jpg";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StarRateIcon from "@mui/icons-material/StarRate";

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#090921",
    color: "white",
    flexDirection: "column",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },

  card: {
    color: "white",
    background: "#090921 ",
    boxShadow: "none",
  },
  clientImage: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    objectFit: "cover",
  },
  ratingIcon: {
    borderRadius: "50%",
    padding: "5px",
  },
}));

const clientFeedbacks = [
  {
    clientName: "Raju Sheoran",
    image: man,
    feedback:
      "Experience pure joy, contentment, and boundless delight on our tour. Discover happiness in every moment, scenery, and interaction. Join us!",
    rating: 3,
    date: "2024-03-15",
  },
  {
    clientName: "John Doe",
    image: man2,
    feedback:
      "Embark on a joyful journey, where laughter echoes through scenic landscapes, creating unforgettable memories at every turn. Happiness awaits!",
    rating: 4,
    date: "2024-03-20",
  },
  {
    clientName: "Jane Smith",
    image: man,
    feedback:
      "Experience pure joy exploring vibrant cultures, breathtaking landscapes, and unforgettable adventures on our tour. Happiness is our destination.",
    rating: 5,
    date: "2024-03-25",
  },
];

function Feedback() {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography variant="h3" sx={{ textAlign: "center", margin: 2 }}>
        Our Happy Clients
      </Typography>
      <Typography variant="p" sx={{ textAlign: "center", margin: 2 }}>
        Client Testimonials: Hear from satisfied clients! <br /> Discover what
        our customers have to say about their experiences with us. <br /> Read
        their feedback and ratings....
      </Typography>
      <Grid container spacing={3}>
        {clientFeedbacks.map((feedback, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              className={classes.card}
              style={{
                padding: "10px",
                backgroundColor: "#090930",
                color: "white",
              }}
            >
              <CardContent style={{ background: "transparent" }}>
                {" "}
                <img
                  src={feedback.image}
                  alt={feedback.clientName}
                  className={classes.clientImage}
                />
                <Typography variant="h6" gutterBottom>
                  {feedback.clientName}
                  <span style={{ marginLeft: "25px" }}>
                    {[...Array(feedback.rating)].map((_, i) => (
                      <StarRateIcon key={i} style={{ color: "yellow" }} />
                    ))}
                  </span>
                </Typography>
                <Typography variant="body1">{feedback.feedback}</Typography>
                <Typography variant="body2" sx={{ fontSize: 17 }}>
                  Date: {feedback.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Feedback;
