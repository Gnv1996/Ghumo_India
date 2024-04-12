import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    axios
      .post("http://localhost:4500/signin", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        toast.success("You are Successfully Login", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error("Error logging in: ", error);
        toast.error("Invalid credential", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
          transition: Bounce,
        });
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{ marginTop: 19, marginBottom: 18, padding: 4, borderRadius: 10 }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Login
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{ marginTop: 2 }}
        >
          Login
        </Button>
        <Typography
          variant="body1"
          align="right"
          gutterBottom
          sx={{ margin: 2, textAlign: "right" }}
        >
          <Link to="/register">New User?</Link>
        </Typography>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default LoginScreen;
