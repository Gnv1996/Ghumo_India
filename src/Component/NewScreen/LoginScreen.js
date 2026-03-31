import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Box,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Modern Icons
import UserIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/LockOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    axios
      .post("http://localhost:4500/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        toast.success("Welcome back!", {
          position: "top-right",
          theme: "colored",
          transition: Bounce,
        });
      })
      .catch((error) => {
        toast.error("Invalid Credentials", {
          position: "top-right",
          theme: "colored",
          transition: Bounce,
        });
      });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f8fafc 50%, #4f46e5 50%)", // Modern split background
        px: 2,
      }}
    >
      <Container maxWidth="xs">
        <Paper
          elevation={20}
          sx={{
            padding: 5,
            borderRadius: 8,
            textAlign: "center",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          {/* Logo/Icon Branding */}
          <Box
            sx={{
              width: 60,
              height: 60,
              bgcolor: "#4f46e5",
              borderRadius: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 2,
              boxShadow: "0 10px 15px -3px rgba(79, 70, 229, 0.4)",
            }}
          >
            <TravelExploreIcon sx={{ color: "white", fontSize: 35 }} />
          </Box>

          <Typography variant="h4" sx={{ fontWeight: 900, color: "#1e293b", mb: 1 }}>
            Login
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            Please enter your details to continue.
          </Typography>

          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <UserIcon sx={{ color: "#64748b" }} />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 1 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon sx={{ color: "#64748b" }} />
                  </InputAdornment>
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

            <Typography
              variant="caption"
              sx={{
                display: "block",
                textAlign: "right",
                mb: 3,
                color: "#4f46e5",
                fontWeight: 600,
                cursor: "pointer",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Forgot Password?
            </Typography>

            <Button
              variant="contained"
              fullWidth
              size="large"
              onClick={handleLogin}
              sx={{
                py: 1.8,
                borderRadius: "12px",
                fontWeight: 800,
                fontSize: "1rem",
                textTransform: "none",
                background: "linear-gradient(45deg, #4f46e5 30%, #6366f1 90%)",
                boxShadow: "0 8px 16px rgba(79, 70, 229, 0.3)",
                "&:hover": {
                  background: "linear-gradient(45deg, #4338ca 30%, #4f46e5 90%)",
                  boxShadow: "0 12px 20px rgba(79, 70, 229, 0.4)",
                },
              }}
            >
              Sign In
            </Button>
          </Box>

          <Divider sx={{ my: 4 }}>
            <Typography variant="body2" color="text.secondary" sx={{ px: 1 }}>
              OR
            </Typography>
          </Divider>

          <Typography variant="body2" color="text.secondary">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#4f46e5",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Sign Up for free
            </Link>
          </Typography>
        </Paper>
      </Container>
      <ToastContainer />
    </Box>
  );
};

export default LoginScreen;