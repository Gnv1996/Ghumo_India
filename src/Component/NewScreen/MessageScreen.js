import * as React from 'react';
import {
  Box,
  CssBaseline,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  List,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  CircularProgress,
  Typography,
  Container,
  TextField,
  InputAdornment,
  Badge,
  styled
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Styled component for a modern message "card"
const StyledListItem = styled(ListItemButton)(({ theme }) => ({
  borderRadius: '16px',
  marginBottom: theme.spacing(1),
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: '#f1f5f9',
    transform: 'scale(1.01)',
  },
}));

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
  return Array.from(new Array(15)).map((_, i) => ({
    ...messageExamples[getRandomInt(messageExamples.length)],
    id: i,
    time: `${getRandomInt(12) + 1}:${getRandomInt(5) + 10} PM`,
    unread: Math.random() > 0.7
  }));
}

export default function MessageScreen() {
  const [value, setValue] = React.useState(0);
  const [messages, setMessages] = React.useState(() => refreshMessages());
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setMessages(refreshMessages());
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Box sx={{ pb: 10, backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      <CssBaseline />
      
      {/* Header Area */}
      <Box sx={{ pt: 10, pb: 3, px: 2, textAlign: 'center' }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1e293b', mb: 1 }}>
          Messages
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stay connected with your travel companions
        </Typography>
      </Box>

      <Container maxWidth="sm">
        {/* Search Bar */}
        <TextField
          fullWidth
          placeholder="Search conversations..."
          sx={{
            mb: 3,
            '& .MuiOutlinedInput-root': {
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
            }
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#94a3b8' }} />
              </InputAdornment>
            ),
          }}
        />

        {/* Message List */}
        <List sx={{ width: '100%' }}>
          {loading ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
              <CircularProgress size={30} sx={{ mb: 2 }} />
              <Typography variant="caption" color="text.secondary">Updating Inbox...</Typography>
            </Box>
          ) : (
            messages.map((item, index) => (
              <StyledListItem key={index}>
                <ListItemAvatar>
                  <Badge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                    color={item.unread ? "primary" : "transparent"}
                    sx={{ '& .MuiBadge-badge': { width: 12, height: 12, borderRadius: '50%', border: '2px solid white' } }}
                  >
                    <Avatar 
                      alt={item.primary} 
                      src={`https://i.pravatar.cc/150?u=${item.primary}`} 
                      sx={{ width: 50, height: 50 }}
                    />
                  </Badge>
                </ListItemAvatar>
                
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography sx={{ fontWeight: item.unread ? 800 : 600, color: '#1e293b' }}>
                        {item.primary}
                      </Typography>
                      <Typography sx={{ fontSize: '0.7rem', color: '#94a3b8' }}>
                        {item.time}
                      </Typography>
                    </Box>
                  }
                  secondary={
                    <Typography
                      variant="body2"
                      sx={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        color: item.unread ? '#475569' : '#94a3b8',
                        fontWeight: item.unread ? 500 : 400
                      }}
                    >
                      {item.secondary}
                    </Typography>
                  }
                />
                <IconButton size="small" sx={{ ml: 1, color: '#cbd5e1' }}>
                  <MoreVertIcon fontSize="inherit" />
                </IconButton>
              </StyledListItem>
            ))
          )}
        </List>
      </Container>

      {/* Bottom Navigation */}
      <Paper 
        sx={{ 
          position: 'fixed', 
          bottom: 20, 
          left: '50%', 
          transform: 'translateX(-50%)',
          width: { xs: '90%', sm: '400px' },
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        }} 
        elevation={0}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{ height: 70 }}
        >
          <BottomNavigationAction 
            label="Chats" 
            icon={<ChatBubbleOutlineIcon />} 
            sx={{ '&.Mui-selected': { color: '#4f46e5' } }}
          />
          <BottomNavigationAction 
            label="Favs" 
            icon={<FavoriteBorderIcon />} 
            sx={{ '&.Mui-selected': { color: '#4f46e5' } }}
          />
          <BottomNavigationAction 
            label="Archive" 
            icon={<Inventory2OutlinedIcon />} 
            sx={{ '&.Mui-selected': { color: '#4f46e5' } }}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

const messageExamples = [
  { primary: 'Brunch this week?', secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat" },
  { primary: 'Birthday Gift', secondary: `Do you have a suggestion for a good present for John?` },
  { primary: 'Recipe to try', secondary: 'I am try out this new BBQ recipe, it might be amazing' },
  { primary: 'Yes!', secondary: 'I have the tickets to the ReactConf for this year.' },
  { primary: "Doctor's Appointment", secondary: 'My appointment was rescheduled for next Saturday.' },
  { primary: 'Summer BBQ', secondary: `Who wants to have a cookout this weekend?` },
];

// Helper to make the code run
function IconButton({ children, sx, size }) {
  return <Box sx={{ cursor: 'pointer', ...sx }}>{children}</Box>;
}