import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";

const RegistrationScreen = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [documentType, setDocumentType] = useState("");
  const [customDocumentType, setCustomDocumentType] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (
      name &&
      age &&
      (documentType || customDocumentType) &&
      username &&
      email &&
      mobileNumber &&
      password
    ) {
      alert(
        `Registered successfully!\nName: ${name}\nAge: ${age}\nDocument Type: ${
          documentType || customDocumentType
        }\nUsername: ${username}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nPassword: ${password}`
      );
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ marginTop: 14, marginBottom: 10, padding: 4, borderRadius: 10 }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Registration
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              label="Document Type"
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            >
              {["Voter", "Aadhar", "Passport", "Any Other"].map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Identity Card Value"
              value={customDocumentType}
              onChange={(e) => setCustomDocumentType(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              type="tel"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
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
          onClick={handleRegister}
          sx={{ marginTop: 2 }}
        >
          Register
        </Button>
        <Typography
          variant="body1"
          align="right"
          gutterBottom
          sx={{ margin: 2, textAlign: "right" }}
        >
          <Link to="/login">Already Register?</Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default RegistrationScreen;
