import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid,
  Box,
} from "@mui/material";
import axios from "axios";

const ProfileScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("Dr. Bugu Boy");
  const [email, setEmail] = useState("nici@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [image, setImage] = useState(null);
  const [imageHover, setImageHover] = useState(false);

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

  const handleSave = () => {
    const updatedProfile = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      image: image,
    };

    axios
      .put("http://localhost:4500/profile", updatedProfile)
      .then((response) => {
        console.log(response.data);
        alert("Profile updated successfully!");
        setEditMode(false);
      })
      .catch((error) => {
        console.error("Error updating profile: ", error);
        alert("Failed to update profile. Please try again.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container component="main" maxWidth="sm">
        <Paper
          elevation={3}
          sx={{
            marginTop: 19,
            marginBottom: 18,
            padding: 4,
            borderRadius: 10,
          }}
        >
          <Typography variant="h5" align="center" gutterBottom>
            Profile
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <div
                style={{
                  position: "relative",
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid #ccc",
                  margin: "auto",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setImageHover(true)}
                onMouseLeave={() => setImageHover(false)}
              >
                {image && (
                  <img
                    src={image}
                    alt="Uploaded"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: "none" }}
                  id="upload-button"
                />
                <label
                  htmlFor="upload-button"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: imageHover ? 1 : 0,
                    transition: "opacity 0.3s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  <Button variant="contained" component="span" fullWidth>
                    {image ? "Change" : "Upload"}
                  </Button>
                </label>
              </div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                variant="outlined"
                disabled={!editMode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                fullWidth
                variant="outlined"
                disabled={!editMode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                type="tel"
                fullWidth
                variant="outlined"
                disabled={!editMode}
              />
            </Grid>
          </Grid>
          {!editMode ? (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setEditMode(true)}
              sx={{ marginTop: 2 }}
            >
              Edit Profile
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => setEditMode(false)}
              sx={{ marginTop: 2 }}
            >
              Cancel Edit
            </Button>
          )}
          {editMode && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSave}
              sx={{ marginTop: 2 }}
            >
              Save Profile
            </Button>
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfileScreen;
