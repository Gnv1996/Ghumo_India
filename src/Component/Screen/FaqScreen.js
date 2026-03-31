import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Typography from "@mui/material/Typography";
import { Box, Container, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function FaqScreen() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqs = [
    {
      question: "What is the best time of year to go on a tour?",
      answer: "The best time depends on your destination. For cooler climates, summer months are ideal, whereas for tropical locations, avoiding rainy seasons might be preferable.",
    },
    {
      question: "How far in advance should I book my tour?",
      answer: "It's recommended to book at least 3-6 months in advance to ensure availability and possibly secure early bird discounts.",
    },
    {
      question: "How Can I Stay Healthy While Traveling?",
      answer: "Drink plenty of water, eat balanced meals, regularly use hand sanitizer, get enough sleep, and consider taking vitamins to boost your immune system.",
    },
    {
      question: "Are there any age restrictions for tours?",
      answer: "Age restrictions vary by tour. Some are family-friendly, while others might have age limits for activities like wine tasting or extreme sports.",
    },
    // ... adding a few more for the visual demo
    {
        question: "Can I customize my tour?",
        answer: "Many tour operators offer customizable itineraries. Contact them directly to discuss your preferences and needs.",
    },
  ];

  return (
    <Box sx={{ backgroundColor: "#fdfdfd", minHeight: "100vh", py: 10 }}>
      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{ color: "primary.main", fontWeight: 800, letterSpacing: 2 }}
          >
            Support Center
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontWeight: 900, color: "#1A237E", mb: 2, mt: 1 }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Everything you need to know about your upcoming journey with Ghumuo India.
          </Typography>

          {/* Styled Search Bar */}
          <TextField
            fullWidth
            placeholder="Search for a question..."
            variant="outlined"
            sx={{
              maxWidth: 500,
              "& .MuiOutlinedInput-root": {
                borderRadius: "50px",
                backgroundColor: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="primary" />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* FAQ List */}
        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              elevation={0}
              sx={{
                mb: 2,
                borderRadius: "16px !important", // Force rounded corners
                border: "1px solid #e0e0e0",
                "&:before": { display: "none" }, // Remove default line
                overflow: "hidden",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "primary.main",
                  transform: "translateY(-2px)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon color="primary" />}
                sx={{
                  px: 3,
                  py: 1,
                  backgroundColor: expanded === `panel${index}` ? "#f5f7ff" : "transparent",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <HelpOutlineIcon color={expanded === `panel${index}` ? "primary" : "disabled"} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 700,
                      color: expanded === `panel${index}` ? "#1A237E" : "#455a64",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0, backgroundColor: expanded === `panel${index}` ? "#f5f7ff" : "transparent" }}>
                <Divider sx={{ mb: 2, opacity: 0.5 }} />
                <Typography
                  variant="body1"
                  sx={{ color: "#546e7a", lineHeight: 1.8, pl: 5 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Small helper for the divider
const Divider = ({ sx }) => <Box sx={{ height: "1px", width: "100%", bgcolor: "divider", ...sx }} />;