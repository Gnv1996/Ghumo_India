import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { useUser } from "../../auth/ContextApi";

export default function Sidebar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  const { logoutUser } = useUser();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const open = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "darkblue",
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleSidebarOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Ghumo
            </Typography>

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Typography
                component={Link}
                to="/message"
                variant="inherit"
                sx={{ color: "white", textDecoration: "none" }}
              >
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="error">
                    <MailIcon />
                  </Badge>
                </IconButton>
              </Typography>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls="primary-search-account-menu-mobile"
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={handleSidebarClose}
          variant="temporary"
          sx={{
            "@media (min-width:600px)": {
              width: 240,
              flexShrink: 0,
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: 40,
              fontWeight: "bold",
              color: "white",
              padding: 5,
              backgroundColor: "darkblue",
              marginTop: 7,
            }}
          >
            Ghumo
          </Typography>
          <List>
            <ListItem button>
              <DashboardIcon sx={{ margin: 1 }} />
              <Typography
                component={Link}
                to="/"
                variant="inherit"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Dashboard
              </Typography>
            </ListItem>
            <ListItem button>
              <PersonPinIcon sx={{ margin: 1 }} />
              <Typography
                component={Link}
                to="/profile"
                variant="inherit"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                My Account
              </Typography>
            </ListItem>
            <Divider />
            <ListItem button sx={{ marginTop: 40 }}>
              <ListItemIcon>
                <PersonAddIcon />
              </ListItemIcon>
              <Typography
                component={Link}
                to="/record"
                variant="inherit"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Add Record
              </Typography>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <Typography
                component={Link}
                to="/faq"
                variant="inherit"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                FAQ'S
              </Typography>
            </ListItem>
            <ListItem button onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <Typography
                variant="inherit"
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                Logout
              </Typography>
            </ListItem>
          </List>
        </Drawer>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <Avatar sx={{ height: 25, width: 25, margin: 0.5 }} />
          <Typography
            component={Link}
            to="profile"
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Profile
          </Typography>
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <Typography
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Settings
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <Typography
            component={Link}
            to="/login"
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Typography>
        </MenuItem>
      </Menu>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        id="primary-search-account-menu-mobile"
        keepMounted
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <Typography
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Messages
          </Typography>
        </MenuItem>
        <MenuItem>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Typography
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Notifications
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Typography
            variant="inherit"
            sx={{ textDecoration: "none", color: "inherit" }}
          >
            Profile
          </Typography>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
