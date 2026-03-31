import * as React from "react";
import { Box, Container, Grid, Typography, Link, IconButton, Divider, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

function FooterScreen() {
  const currentYear = new Date().getFullYear();

  const footerLinkStyle = {
    color: "#94a3b8",
    textDecoration: "none",
    fontSize: "0.9rem",
    transition: "color 0.2s",
    "&:hover": {
      color: "#38bdf8", // Sky blue hover
    },
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a", // Deep slate blue
        color: "white",
        pt: 8,
        pb: 4,
        borderTop: "4px solid",
        borderImageSource: "linear-gradient(90deg, #38bdf8, #818cf8)",
        borderImageSlice: 1,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 6 }}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TravelExploreIcon sx={{ color: "#38bdf8", fontSize: 32 }} />
                <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: -0.5 }}>
                  Ghumuo<span style={{ color: "#38bdf8" }}>India</span>
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: "#94a3b8", lineHeight: 1.8, pr: 2 }}>
                Making India accessible to everyone. From the peaks of the Himalayas to the backwaters of Kerala, we help you find your next story.
              </Typography>
              <Stack direction="row" spacing={1}>
                {[
                  { icon: <FacebookIcon />, color: "#1877F2" },
                  { icon: <TwitterIcon />, color: "#1DA1F2" },
                  { icon: <InstagramIcon />, color: "#E4405F" },
                  { icon: <LinkedInIcon />, color: "#0A66C2" },
                ].map((social, i) => (
                  <IconButton
                    key={i}
                    sx={{
                      color: "white",
                      backgroundColor: "rgba(255,255,255,0.05)",
                      "&:hover": {
                        backgroundColor: social.color,
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s",
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Explore
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" sx={footerLinkStyle}>Destinations</Link>
              <Link href="#" sx={footerLinkStyle}>Tour Packages</Link>
              <Link href="#" sx={footerLinkStyle}>Hotels</Link>
              <Link href="#" sx={footerLinkStyle}>Travel Guide</Link>
            </Stack>
          </Grid>

          {/* Support */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Company
            </Typography>
            <Stack spacing={1.5}>
              <Link href="#" sx={footerLinkStyle}>About Us</Link>
              <Link href="#" sx={footerLinkStyle}>Contact</Link>
              <Link href="#" sx={footerLinkStyle}>Privacy Policy</Link>
              <Link href="#" sx={footerLinkStyle}>Terms of Service</Link>
            </Stack>
          </Grid>

          {/* Newsletter / CTA */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Need help?
            </Typography>
            <Box
              sx={{
                p: 2,
                borderRadius: 2,
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Typography variant="body2" sx={{ color: "#94a3b8", mb: 1 }}>
                Email us at:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600, color: "#38bdf8" }}>
                support@gautamnici.com
              </Typography>
              <Typography variant="body2" sx={{ color: "#94a3b8", mt: 1 }}>
                Call: +91 98765 43210
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />

        {/* Bottom Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography variant="caption" sx={{ color: "#64748b" }}>
            © {currentYear} Ghumuo India. Crafted with ❤️ for travelers.
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link href="#" sx={{ ...footerLinkStyle, fontSize: "0.75rem" }}>Sitemap</Link>
            <Link href="#" sx={{ ...footerLinkStyle, fontSize: "0.75rem" }}>Cookies</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default FooterScreen;