import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  Grid,
  Switch,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Button,
  Slider,
  Avatar,
  Tab,
  Tabs,
} from "@mui/material";

// Icons
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SecurityIcon from "@mui/icons-material/Security";
import PaletteIcon from "@mui/icons-material/Palette";

import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const SystemSettings = () => {
  const [tabValue, setTabValue] = useState(0);

  // States for toggles
  const [settings, setSettings] = useState({
    darkMode: true,
    emailNotifications: true,
    twoFactor: false,
    autoBackup: true,
    locationTracking: true,
  });

  const handleToggle = (name) => {
    setSettings({ ...settings, [name]: !settings[name] });
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f1f5f9", pt: 12, pb: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* LEFT: SETTINGS NAVIGATION */}
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 2, 
                borderRadius: 6, 
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
              }}
            >
              <Box sx={{ p: 2, textAlign: "center", mb: 2 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: "#4f46e5", 
                    width: 56, 
                    height: 56, 
                    mx: "auto", 
                    mb: 1,
                    boxShadow: "0 8px 16px rgba(79, 70, 229, 0.3)"
                  }}
                >
                  <SettingsIcon />
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 800 }}>System Settings</Typography>
                <Typography variant="caption" color="text.secondary">Ghumo India Admin v2.4</Typography>
              </Box>

              <Tabs
                orientation="vertical"
                value={tabValue}
                onChange={(e, v) => setTabValue(v)}
                sx={{
                  "& .MuiTab-root": {
                    alignItems: "flex-start",
                    textAlign: "left",
                    borderRadius: "12px",
                    mb: 1,
                    minHeight: 50,
                    fontWeight: 700,
                    textTransform: "none",
                  },
                  "& .Mui-selected": {
                    bgcolor: "rgba(79, 70, 229, 0.08)",
                    color: "#4f46e5 !important",
                  },
                  "& .MuiTabs-indicator": { display: "none" },
                }}
              >
                <Tab icon={<PaletteIcon sx={{ mr: 2 }} />} iconPosition="start" label="Appearance" />
                <Tab icon={<NotificationsIcon sx={{ mr: 2 }} />} iconPosition="start" label="Notifications" />
                <Tab icon={<SecurityIcon sx={{ mr: 2 }} />} iconPosition="start" label="Security & Privacy" />
                <Tab icon={<CloudUploadIcon sx={{ mr: 2 }} />} iconPosition="start" label="Backup & Sync" />
              </Tabs>
            </Paper>
          </Grid>

          {/* RIGHT: SETTINGS CONTENT */}
          <Grid item xs={12} md={8}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 3, md: 5 }, 
                borderRadius: 6, 
                minHeight: 500,
                border: "1px solid #e2e8f0",
                boxShadow: "0 10px 30px rgba(0,0,0,0.05)"
              }}
            >
              
              {/* APPEARANCE SECTION */}
              {tabValue === 0 && (
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Appearance</Typography>
                  <List>
                    <ListItem sx={{ px: 0 }}>
                      <ListItemIcon><DarkModeIcon color="primary" /></ListItemIcon>
                      <ListItemText primary="Dark Mode" secondary="Use dark theme across the application" />
                      <ListItemSecondaryAction>
                        <Switch checked={settings.darkMode} onChange={() => handleToggle("darkMode")} color="primary" />
                      </ListItemSecondaryAction>
                    </ListItem>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="subtitle2" sx={{ mb: 2, mt: 2, fontWeight: 700 }}>Accent Color Density</Typography>
                    <Slider defaultValue={70} sx={{ color: "#4f46e5" }} />
                    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                      <Typography variant="caption" color="text.secondary">Minimal</Typography>
                      <Typography variant="caption" color="text.secondary">Vibrant</Typography>
                    </Box>
                  </List>
                </Box>
              )}

              {/* NOTIFICATIONS SECTION */}
              {tabValue === 1 && (
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Notifications</Typography>
                  <List spacing={2}>
                    {[
                      { id: "emailNotifications", title: "Email Notifications", sub: "Receive booking updates via email" },
                      { id: "smsAlerts", title: "SMS Alerts", sub: "Get critical travel alerts on mobile" },
                      { id: "newsletter", title: "Marketing Emails", sub: "New deals and travel inspiration" }
                    ].map((item) => (
                      <ListItem key={item.id} sx={{ px: 0, py: 2 }}>
                        <ListItemText primary={item.title} secondary={item.sub} primaryTypographyProps={{ fontWeight: 700 }} />
                        <Switch checked={settings[item.id]} onChange={() => handleToggle(item.id)} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {/* SECURITY SECTION */}
              {tabValue === 2 && (
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 4 }}>Security & Privacy</Typography>
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemText primary="Two-Factor Authentication" secondary="Add an extra layer of security to your account" />
                    <Switch checked={settings.twoFactor} onChange={() => handleToggle("twoFactor")} />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 2 }}>
                    <ListItemText primary="Location History" secondary="Allow Ghumo India to save your travel routes" />
                    <Switch checked={settings.locationTracking} onChange={() => handleToggle("locationTracking")} />
                  </ListItem>
                  <Button variant="outlined" color="error" sx={{ mt: 4, borderRadius: "12px", textTransform: "none" }}>
                    Clear All Session Data
                  </Button>
                </Box>
              )}

              {/* BACKUP SECTION */}
              {tabValue === 3 && (
                <Box sx={{ textAlign: "center", py: 4 }}>
                  <CloudUploadIcon sx={{ fontSize: 80, color: "#cbd5e1", mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>Cloud Sync</Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Last backup was performed yesterday at 11:45 PM
                  </Typography>
                  <Button variant="contained" sx={{ bgcolor: "#4f46e5", px: 4, py: 1.5, borderRadius: "12px" }}>
                    Backup Now
                  </Button>
                </Box>
              )}

              {/* SAVE BUTTON AT BOTTOM */}
              <Box sx={{ mt: 10, display: "flex", justifyContent: "flex-end" }}>
                 <Button 
                    variant="contained" 
                    startIcon={<SaveIcon />}
                    sx={{ 
                      bgcolor: "#1e293b", 
                      px: 6, 
                      py: 1.5, 
                      borderRadius: "14px",
                      "&:hover": { bgcolor: "#0f172a" }
                    }}
                 >
                   Save Changes
                 </Button>
              </Box>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SystemSettings;