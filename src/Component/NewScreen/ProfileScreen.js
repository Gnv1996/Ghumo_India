import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
} from "@mui/material";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        sx={{ marginTop: 19, marginBottom: 18, padding: 4, borderRadius: 10 }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
         
            {image && (
              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={image}
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "none" }}
              id="upload-button"
            />
            <label htmlFor="upload-button">
              <Button variant="contained" component="span" fullWidth>
                {image ? "Change Image" : "Upload Image"}
              </Button>
            </label>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
            <TextField
              label="Document Number"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="tel"
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
          sx={{ marginTop: 2 }}
        >
          Save Profile
        </Button>
      </Paper>
    </Container>
  );
};

export default ProfileScreen;
