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

const ProfileDashboard = ({ name, email, phoneNumber, onSave }) => {
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(phoneNumber);

  const handleSave = () => {
    onSave({
      name: editedName,
      email: editedEmail,
      phoneNumber: editedPhoneNumber,
    });
  };

  return (
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
          Edit Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              value={editedEmail}
              onChange={(e) => setEditedEmail(e.target.value)}
              type="email"
              margin="normal"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              value={editedPhoneNumber}
              onChange={(e) => setEditedPhoneNumber(e.target.value)}
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
          onClick={handleSave}
          sx={{ marginTop: 2 }}
        >
          Save Profile
        </Button>
      </Paper>
    </Container>
  );
};

const ProfileScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phoneNumber, setPhoneNumber] = useState("123-456-7890");
  const [image, setImage] = useState(null);
  const [imageHover, setImageHover] = useState(false); // State for hover

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

  const handleSave = (updatedProfile) => {
    setName(updatedProfile.name);
    setEmail(updatedProfile.email);
    setPhoneNumber(updatedProfile.phoneNumber);
    setEditMode(false);
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
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Name:
              </Typography>
              <Typography variant="body1">{name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Email:
              </Typography>
              <Typography variant="body1">{email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                Phone Number:
              </Typography>
              <Typography variant="body1">{phoneNumber}</Typography>
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
          ) : null}
          {editMode && (
            <ProfileDashboard
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              onSave={handleSave}
            />
          )}
        </Paper>
      </Container>
    </Box>
  );
};

export default ProfileScreen;
