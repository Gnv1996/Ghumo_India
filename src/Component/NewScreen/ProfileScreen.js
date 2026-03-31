import React, { useState } from "react";

import {
  Box,
  Container,
  Paper,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Button,
  Grid,
  Divider,
  InputAdornment,
  Tooltip,
} from "@mui/material";

// Icons
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SecurityIcon from "@mui/icons-material/Security";
import VerifiedIcon from "@mui/icons-material/Verified";

const ProfileScreen = () => {
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Dr. Bugu Boy",
    email: "nici@example.com",
    phoneNumber: "123-456-7890",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setUserData({ ...userData, image: reader.result });
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    try {
      // await axios.put("http://localhost:4500/profile", userData);
      setEditMode(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ bgcolor: "#f4f7fe", minHeight: "100vh", pb: 10 }}>
      {/* Blue Header Banner */}
      <Box 
        sx={{ 
          height: 220, 
          background: "linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%)",
          borderRadius: "0 0 40px 40px",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0
        }} 
      />

      <Container maxWidth="lg" sx={{ pt: 12, position: "relative", zIndex: 1 }}>
        
        {/* TOP ACTION BAR */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4, color: "white" }}>
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 800 }}>Account Settings</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>Update your personal details and preferences</Typography>
          </Box>
          <Box>
            {!editMode ? (
              <Button 
                variant="contained" 
                startIcon={<EditIcon />} 
                onClick={() => setEditMode(true)}
                sx={{ borderRadius: "12px", bgcolor: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", "&:hover": { bgcolor: "rgba(255,255,255,0.3)" } }}
              >
                Edit Profile
              </Button>
            ) : (
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button variant="text" sx={{ color: "white" }} onClick={() => setEditMode(false)}>Cancel</Button>
                <Button 
                  variant="contained" 
                  color="success" 
                  startIcon={<SaveIcon />} 
                  onClick={handleSave}
                  sx={{ borderRadius: "12px", px: 4, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                >
                  Save Changes
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* LEFT COLUMN: AVATAR CARD */}
          <Grid item xs={12} md={4}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: "24px", textAlign: "center", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <Box sx={{ position: "relative", width: 140, height: 140, mx: "auto", mb: 3 }}>
                <Avatar 
                  src={userData.image} 
                  sx={{ width: "100%", height: "100%", border: "4px solid white", boxShadow: "0 0 20px rgba(0,0,0,0.1)" }} 
                />
                {editMode && (
                  <Tooltip title="Upload Photo">
                    <IconButton 
                      component="label"
                      sx={{ 
                        position: "absolute", bottom: 0, right: 0, bgcolor: "#4f46e5", color: "white", 
                        "&:hover": { bgcolor: "#4338ca" }, boxShadow: "0 4px 10px rgba(0,0,0,0.2)" 
                      }}
                    >
                      <PhotoCameraIcon fontSize="small" />
                      <input hidden accept="image/*" type="file" onChange={handleImageUpload} />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 800 }}>{userData.name} <VerifiedIcon sx={{ color: "#4f46e5", fontSize: 18, verticalAlign: "middle" }} /></Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>Senior Travel Planner</Typography>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>12</Typography>
                  <Typography variant="caption" color="text.secondary">Tours</Typography>
                </Box>
                <Box>
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>4.8</Typography>
                  <Typography variant="caption" color="text.secondary">Rating</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          {/* RIGHT COLUMN: FORM CARD */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: { xs: 3, md: 5 }, borderRadius: "24px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 4 }}>Personal Information</Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={userData.name}
                    disabled={!editMode}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><PersonIcon color="action" /></InputAdornment>,
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    value={userData.email}
                    disabled={!editMode}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><EmailIcon color="action" /></InputAdornment>,
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    value={userData.phoneNumber}
                    disabled={!editMode}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: <InputAdornment position="start"><PhoneIcon color="action" /></InputAdornment>,
                    }}
                    sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mt: 5, p: 3, bgcolor: "#f8faff", borderRadius: "16px", display: "flex", alignItems: "center", gap: 2 }}>
                <SecurityIcon sx={{ color: "#4f46e5" }} />
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Privacy & Security</Typography>
                  <Typography variant="caption" color="text.secondary">Your data is protected using industry-standard AES-256 encryption.</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfileScreen;