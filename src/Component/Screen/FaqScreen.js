import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function FaqScreen() {
  const faqs = [
    {
      question: "What is the best time of year to go on a tour ?",
      answer:
        "The best time depends on your destination. For cooler climates, summer months are ideal, whereas for tropical locations, avoiding rainy seasons might be preferable.",
    },
    {
      question: "How far in advance should I book my tour ?",
      answer:
        "It's recommended to book at least 3-6 months in advance to ensure availability and possibly secure early bird discounts.",
    },
    {
      question: "How Can I Stay Healthy While Traveling?",
      answer:
        "Drink plenty of water, eat balanced meals, regularly use hand sanitizer, get enough sleep, and consider taking vitamins to boost your immune system.",
    },
    {
      question: "Are there any age restrictions for tours?",
      answer:
        "Age restrictions vary by tour. Some are family-friendly, while others might have age limits for activities like wine tasting or extreme sports.",
    },
    {
      question: "What should I wear on a tour?",
      answer:
        "Dress comfortably and appropriately for the weather of your destination. Comfortable walking shoes are a must.",
    },
    {
      question:
        "What kind of accessibilities are provided for those with disabilities?",
      answer:
        "Many tours offer accessible options, but it's essential to check with the tour provider in advance regarding specific needs.",
    },
    {
      question: "How much physical activity is involved in tours?",
      answer:
        "This varies widely among tours, from low-impact cultural tours to physically demanding adventure tours. Check the tour description for details.",
    },
    {
      question: "Can I customize my tour?",
      answer:
        "Many tour operators offer customizable itineraries. Contact them directly to discuss your preferences and needs.",
    },
    {
      question: "What is included in the tour price?",
      answer:
        "Typically, the tour price includes all activities mentioned in the itinerary, meals, and accommodations. Always verify what’s included with your operator.",
    },
    {
      question: "Are meals provided during the tour?",
      answer:
        "This varies by tour. Some include all meals, others only provide certain meals, and some may not include meals at all.",
    },
    {
      question: "What if I have dietary restrictions?",
      answer:
        "Inform your tour operator in advance, and they can accommodate most dietary needs.",
    },
    {
      question: "Is it customary to tip our tour guides?",
      answer:
        "Yes, if you’re satisfied with your experience, tipping your guide is appreciated. The amount can vary by country and tour type.",
    },
    {
      question: "What should I do if I get sick during the tour?",
      answer:
        "Inform your tour guide immediately. They will assist you in getting the medical attention you need.",
    },
    {
      question: "Can I bring my pet on the tour?",
      answer:
        "Most tours do not allow pets, but some pet-friendly options are available. Check with your tour operator.",
    },
    {
      question: "Will I have free time during the tour?",
      answer:
        "Yes, most tours include free time for personal exploration. The amount of free time can vary.",
    },
    {
      question: "What safety measures are in place on tours?",
      answer:
        "Tour operators typically have comprehensive safety measures, including first aid, emergency contacts, and safety briefings.",
    },
    {
      question: "What type of accommodation is provided?",
      answer:
        "Accommodations range from hotels and hostels to tents and homestays, depending on the tour's nature.",
    },
    {
      question: "What if I need to cancel my tour?",
      answer:
        "Cancellation policies vary by operator. It's essential to understand the policy at the time of booking.",
    },
    {
      question: "Are tours suitable for families with children?",
      answer:
        "Many tours are family-friendly, but check the age recommendations and activities involved to ensure they fit your family's needs.",
    },
    {
      question: "What documentation do I need for my tour?",
      answer:
        "ou’ll need a valid passport for international tours, possibly a visa depending on the destination, and any required vaccination certificates.",
    },
    {
      question: "How do I handle communication in a foreign country?",
      answer:
        "Learning basic phrases, using translation apps, and carrying a phrasebook can help. Also, consider purchasing a local SIM card or a portable Wi-Fi device.",
    },
    {
      question: "Can I Tour Alone?",
      answer:
        "Yes, solo touring is an enriching experience. However, take extra precautions, stay in touch with someone from home regularly, and plan your itinerary with safety in mind.",
    },
  ];

  return (
    <Box>
      <Typography variant="h4" gutterBottom component="div" sx={{ marginTop:10, textAlign:'center' }}>
        Tour FAQs
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography variant="h6">Ques. {faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography paragraph>Ans. {faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
