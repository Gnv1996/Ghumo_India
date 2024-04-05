import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Birla from "../Assest/birla.jpeg";
import Gurudwara from "../Assest/gurudwara.jpeg";
import Baoli from "../Assest/architecture.jpeg";
import qutub from "../Assest/qutub-minar.jpeg";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.dark,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const darkBlue = "#001F3F";

const images = [
  {
    label: "Birla Mandir ( Laxmi Narayan Temple ) , Delhi ,India",
    imgPath: Birla,
  },
  {
    label: "Gurudwara Bangla Sahib , Delhi ,India",
    imgPath: Gurudwara,
  },
  {
    label: "Agrasen ki Baoli , Delhi ,India",
    imgPath: Baoli,
  },
  {
    label: "Qutub minar , Delhi ,India ",
    imgPath: qutub,
  },
];

function CrouselScreen() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        marginTop: 10,
      }}
    >
      <Grid item xs={12}>
        <Item>
          <Typography variant="h2" gutterBottom style={{ color: darkBlue }}>
            Previous Tour
          </Typography>

          <Typography variant="body1" align="center">
            Explore ancient ruins, vibrant markets, and scenic landscapes on our
            .......
          </Typography>
        </Item>
      </Grid>

      <Box sx={{ maxWidth: 1100, flexGrow: 1, marginTop: 5 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 500,
                    display: "block",
                    maxWidth: 1100,
                    overflow: "hidden",
                    width: "100%",
                    borderRadius: 2,
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default CrouselScreen;
