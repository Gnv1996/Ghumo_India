import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  MenuItem,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Icons for a professional look
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import BadgeIcon from "@mui/icons-material/Badge";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RegistrationScreen = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    documentType: "",
    customDocumentType: "",
    username: "",
    email: "",
    mobileNumber: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:4500/signup", formData);
      toast.success("Account Created Successfully!", {
        position: "top-right",
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Registration Failed. Please try again.", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #4f46e5 0%, #1e1b4b 100%)",
        padding: 2,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={24}
          sx={{
            padding: { xs: 3, md: 5 },
            borderRadius: 6,
            backdropFilter: "blur(10px)",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          }}
        >
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="h4" sx={{ fontWeight: 900, color: "#1e1b4b" }}>
              Join <span style={{ color: "#4f46e5" }}>Ghumuo India</span>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Create your account to start your journey
            </Typography>
          </Box>

          <Grid container spacing={2}>
            {/* Name */}
            <Grid item xs={12} sm={8}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><PersonIcon color="action" /></InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Age */}
            <Grid item xs={12} sm={4}>
              <TextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                onChange={handleChange}
              />
            </Grid>

            {/* Document Select */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Document Type"
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
              >
                {["Voter", "Aadhar", "Passport", "Any Other"].map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* ID Number */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Identity Card No."
                name="customDocumentType"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><BadgeIcon color="action" /></InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Username */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                onChange={handleChange}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><EmailIcon color="action" /></InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Mobile */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile Number"
                name="mobileNumber"
                type="tel"
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><PhoneIcon color="action" /></InputAdornment>
                  ),
                }}
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"><LockIcon color="action" /></InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleRegister}
            sx={{
              mt: 4,
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "1rem",
              background: "linear-gradient(45deg, #4f46e5 30%, #3730a3 90%)",
              textTransform: "none",
              boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)",
              "&:hover": {
                background: "linear-gradient(45deg, #3730a3 30%, #1e1b4b 90%)",
              },
            }}
          >
            Create Account
          </Button>

          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Typography variant="body2" color="text.secondary">
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#4f46e5",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Login here
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default RegistrationScreen;