import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Avatar,
  
} from "@mui/material";

// Modern Icons
import {
  Menu as MenuIcon,
  Bell,
  Mail,
  LayoutDashboard,
  UserCircle,
  PlusCircle,
  Settings,
  LogOut,
  HelpCircle,
  MoreVertical,
  Compass,
  LogIn
} from "lucide-react";

import { useUser } from "../../auth/ContextApi";

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const { logoutUser } = useUser();
  const location = useLocation();

  const handleProfileMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleMobileMenuOpen = (event) => setMobileMoreAnchorEl(event.currentTarget);
  const handleSidebarToggle = () => setIsSidebarOpen(!isSidebarOpen);

 

  // Modern Nav Item Component
  const NavItem = ({ to, icon: Icon, label, onClick }) => {
    const isActive = location.pathname === to;
  
    const handleClick = () => {
      // 1. Agar koi custom onClick pass kiya hai (jaise logout), use call karein
      if (onClick) onClick();
      
      // 2. Click hote hi Sidebar ko band karein
      setIsSidebarOpen(false); 
    };
    return (
      <ListItem
        component={to ? Link : "div"}
        to={to}
        onClick={handleClick}

        sx={{
          mx: 1.5,
          my: 0.5,
          width: "calc(100% - 24px)",
          borderRadius: "16px",
          transition: "all 0.2s",
          cursor: "pointer",
          backgroundColor: isActive ? "rgba(79, 70, 229, 0.08)" : "transparent",
          color: isActive ? "#4f46e5" : "#64748b",
          "&:hover": {
            backgroundColor: "rgba(79, 70, 229, 0.04)",
            color: "#4f46e5",
            "& .nav-icon": { color: "#4f46e5" }
          }
        }}
      >
        <ListItemIcon sx={{ minWidth: 40 }}>
          <Icon className="nav-icon" size={20} color={isActive ? "#4f46e5" : "#94a3b8"} />
        </ListItemIcon>
        <Typography sx={{ fontSize: "0.875rem", fontWeight: 700, trackingTight: "-0.01em" }}>
          {label}
        </Typography>
      </ListItem>
    );
  };

  return (
    <React.Fragment>
      {/* GLASSMORPHISM APP BAR */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
          color: "#0f172a",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ height: 72 }}>
          <IconButton
            edge="start"
            onClick={handleSidebarToggle}
            sx={{ mr: 2, color: "#64748b" }}
          >
            <MenuIcon size={24} />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <div className="w-9 h-9 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Compass size={20} />
            </div>
            <Typography
              variant="h6"
              sx={{ fontWeight: 900, letterSpacing: "-0.05em", fontSize: "1.25rem" }}
            >
              GHUMO <span className="text-indigo-600">INDIA</span>
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {/* DESKTOP ACTIONS */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            <IconButton sx={{ color: "#64748b" }}>
            <List>

            <NavItem to="/message" icon={Mail} label="Messages" onClick={handleSidebarToggle} />
   
          </List>
            </IconButton>
            <IconButton sx={{ color: "#64748b" }}>
              <Badge badgeContent={17} color="indigo" sx={{ "& .MuiBadge-badge": { backgroundColor: "#4f46e5", color: "white", fontWeight: 900, border: "2px solid white" } }}>
                <Bell size={22} />
              </Badge>
            </IconButton>
            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 1 }}>
              <Avatar
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                sx={{ width: 40, height: 40, border: "2px solid #e2e8f0" }}
              />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={handleMobileMenuOpen}>
              <MoreVertical size={24} color="#64748b" />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* MODERN SLIM DRAWER */}
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={handleSidebarToggle}
        PaperProps={{
          sx: {
            width: 280,
            border: "none",
            backgroundColor: "#ffffff",
            display: "flex",
            flexDirection: "column"
          }
        }}
      >
        {/* Branding Area */}
        <Box sx={{ p: 4, pt: 5, pb: 4, backgroundColor: "#4f46e5", color: "white" }}>
          <Typography variant="h4" sx={{ fontWeight: 900, trackingTight: "-0.05em" }}>
            Ghumo.
          </Typography>
          <Typography sx={{ fontSize: "0.75rem", fontWeight: 700, opacity: 0.7, mt: 0.5, letterSpacing: "0.1em" }}>
            ADMIN PORTAL v2.4
          </Typography>
        </Box>

        <Box sx={{ flex: 1, pt: 2 }}>
          <List>
            <NavItem to="/" icon={LayoutDashboard} label="Dashboard" />
            <NavItem to="/profile" icon={UserCircle} label="My Account" />
          </List>

          <Divider sx={{ mx: 3, my: 2, opacity: 0.5 }} />

          <List>
            <NavItem to="/record" icon={PlusCircle} label="Add Travel Record" />
            <NavItem to="/faq" icon={HelpCircle} label="Support & FAQ" />
          </List>
        </Box>

        {/* UTILITY SECTION AT BOTTOM */}
        <Box sx={{ p: 2, mt: "auto", borderTop: "1px solid #f1f5f9" }}>
          <NavItem to="/system" icon={Settings} label="System Settings" />
          <NavItem to="/login" icon={LogOut} label="Sign Out" onClick={logoutUser} />
        </Box>
      </Drawer>

      {/* PROFILE DROPDOWN MENU */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            minWidth: 200,
            borderRadius: "20px",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
            border: "1px solid #f1f5f9",
            p: 1
          }
        }}
      >
        <MenuItem component={Link} to="/profile" onClick={handleMenuClose} sx={{ borderRadius: "12px", py: 1.5 }}>
          <ListItemIcon><UserCircle size={18} /></ListItemIcon>
          <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>Profile Details</Typography>
        </MenuItem>
        <MenuItem component={Link} to="/system" onClick={handleMenuClose} sx={{ borderRadius: "12px", py: 1.5 }}>
          <ListItemIcon><Settings size={18} /></ListItemIcon>
          <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>Settings</Typography>
        </MenuItem>
        <Divider sx={{ my: 1 }} />
        <MenuItem component={Link} to="/login" onClick={handleMenuClose} sx={{ borderRadius: "12px", py: 1.5, color: "#ef4444" }}>
          <ListItemIcon><LogIn size={18} color="#ef4444" /></ListItemIcon>
          <Typography sx={{ fontWeight: 700, fontSize: "0.875rem" }}>Login Access</Typography>
        </MenuItem>
      </Menu>

      {/* TOOLBAR SPACER */}
      <Toolbar />
    </React.Fragment>
  );
}