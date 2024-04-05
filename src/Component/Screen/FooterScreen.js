import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function FooterScreen(props) {
  return (
    <Box component="footer" sx={{ backgroundColor: "#333", py: 4 }}>
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          align="center"
          color="text.secondary"
          sx={{ color: "white" }}
        >
          <span>Connect with us: </span>
          <Link
            color="inherit"
            href="https://www.facebook.com/yourpage"
            sx={{ mx: 1 }}
          >
            <FacebookIcon />
          </Link>
          <Link
            color="inherit"
            href="https://twitter.com/yourpage"
            sx={{ mx: 1 }}
          >
            <TwitterIcon />
          </Link>
          <Link
            color="inherit"
            href="https://www.instagram.com/yourpage"
            sx={{ mx: 1 }}
          >
            <InstagramIcon />
          </Link>
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          sx={{ color: "white", mt: 2 }}
        >
          Copyright © {new Date().getFullYear()}{" "}
          <Link color="inherit" href="https://www.ghumuoIndia.com">
            Ghumuo India
          </Link>
          . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default FooterScreen;
