import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import indiaGate from "../Assest/indiaGate.jpeg";
import lotus from "../Assest/lotus.jpeg";

const ImageWrapper = styled("div")({
  width: "100%",
  height: "auto",
  overflow: "hidden",
  borderRadius: 7,
});

const Image = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export default function PlaceScreen() {
  return (
    <Box sx={{ flexGrow: 1, margin: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            India Gate
          </Typography>
          <Typography variant="h5" gutterBottom>
            The iconic India Gate in New Delhi commemorates British Indian
            troops
          </Typography>
          <Typography variant="body1" align="justify" sx={{ padding: 2 }}>
            At the centre of New Delhi stands the 42 m high India Gate, an
            "Arc-de-Triomphe" like archway in the middle of a crossroad. Almost
            similar to its French counterpart, it commemorates the 70,000 Indian
            soldiers who lost their lives fighting for the British Army during
            the World War I. The memorial bears the names of more than 13,516
            British and Indian soldiers killed in the Northwestern Frontier in
            the Afghan war of 1919.
          </Typography>
          <Typography variant="body1" align="justify" sx={{ padding: 2 }}>
            The foundation stone of India Gate was laid by His Royal Highness,
            the Duke of Connaught in 1921 and it was designed by Edwin Lutyens.
            The monument was dedicated to the nation 10 years later by the then
            Viceroy, Lord Irwin. Another memorial, Amar Jawan Jyoti was added
            much later, after India got its independence. The eternal flame
            burns day and night under the arch to remind the nation of soldiers
            who laid down their lives in the Indo-Pakistan War of December 1971.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageWrapper>
            <Image src={indiaGate} alt="loading" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <ImageWrapper>
            <Image src={lotus} alt="loading" />
          </ImageWrapper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginTop: 5,
            }}
          >
            Lotus Temple
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "justify" }}>
            The Lotus Temple is an edifice of Bahai faith, resembling a lotus
            flower. It’s constructed purely with white marble
          </Typography>
          <Typography variant="body1" align="justify" sx={{ padding: 2 }}>
            Lotus Temple (also known as Baháʼí House of Worship) is one of the
            most unique buildings in the world. It resembles a floating lotus,
            which happens to be Indian national flower. The lotus symbolizes
            spirituality, wealth and knowledge and has been a symbol of Indian
            culture since ancient times. ....
          </Typography>
          <Typography variant="body1" align="justify" sx={{ padding: 2 }}>
            East of Nehru place, this temple is built in the shape of a lotus
            flower and is the last of seven Major Bahai's temples built around
            the world. Completed in1986 it is set among the lush green
            landscaped gardens. The structure is made up of pure white marble
            The architect Furiburz Sabha chose the lotus as the symbol common to
            Hinduism, Buddhism, Bhai TempleJainism and Islam. Adherents of any
            faith are free to visit the temple and pray or meditate. Around the
            blooming petals there are nine pools of water, which light up, in
            natural light. It looks spectacular at dusk when it is flood lit.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
