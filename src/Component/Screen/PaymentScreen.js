import React, { useState } from "react";
import {
  Box,
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,

  Tabs,
  Tab,
  Avatar,

} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Icons
import CreditCardIcon from "@mui/icons-material/CreditCard";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

import SmartphoneIcon from "@mui/icons-material/Smartphone";
import LockIcon from "@mui/icons-material/Lock";
import ShieldIcon from "@mui/icons-material/Shield";
import { Link } from "react-router-dom";

const PaymentScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const amount = location.state?.amount || 1769;
  
  const [loading, setLoading] = useState(false);
  const [tabValue, setTabValue] = useState(0); // 0: Card, 1: UPI, 2: QR

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/payment-success");
    }, 3000);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc", pt: 10, pb: 5 }}>
      <Container maxWidth="sm">
        <Paper 
          elevation={0} 
          sx={{ 
            p: 0, 
            borderRadius: 8, 
            overflow: "hidden", 
            border: "1px solid #e2e8f0",
            boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" 
          }}
        >
          {/* Header Section */}
          <Box sx={{ bgcolor: "#4f46e5", p: 4, color: "white", textAlign: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>Payment Hub</Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Total Payable: <span style={{ fontSize: "1.2rem", fontWeight: 900 }}>₹{amount.toLocaleString()}</span>
            </Typography>
          </Box>

          <Box sx={{ p: 4 }}>
            {loading ? (
              <Box sx={{ py: 8, textAlign: "center" }}>
                <CircularProgress size={60} thickness={5} sx={{ color: "#4f46e5", mb: 3 }} />
                <Typography variant="h6" sx={{ fontWeight: 800 }}>Authenticating...</Typography>
                <Typography variant="body2" color="text.secondary">Talking to your bank. Please wait.</Typography>
              </Box>
            ) : (
              <>
                {/* Payment Method Selector */}
                <Tabs 
                  value={tabValue} 
                  onChange={handleTabChange} 
                  variant="fullWidth" 
                  sx={{ 
                    mb: 4, 
                    "& .MuiTabs-indicator": { height: 3, borderRadius: 3 }
                  }}
                >
                  <Tab icon={<CreditCardIcon />} label="Cards" />
                  <Tab icon={<SmartphoneIcon />} label="UPI" />
                  <Tab icon={<QrCodeScannerIcon />} label="QR Code" />
                </Tabs>

                {/* --- 1. CARD PAYMENT --- */}
                {tabValue === 0 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Card Number" placeholder="XXXX XXXX XXXX XXXX" variant="filled" />
                    </Grid>
                    <Grid item xs={7}>
                      <TextField fullWidth label="Expiry" placeholder="MM/YY" variant="filled" />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField fullWidth label="CVV" type="password" placeholder="***" variant="filled" />
                    </Grid>
                  </Grid>
                )}

                {/* --- 2. UPI PAYMENT --- */}
                {tabValue === 1 && (
                  <Box>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>Enter VPA / UPI ID</Typography>
                    <TextField 
                      fullWidth 
                      placeholder="username@okaxis" 
                      variant="outlined"
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: "12px" } }}
                      InputProps={{
                        endAdornment: <Button sx={{ fontWeight: 800 }}>Verify</Button>
                      }}
                    />
                    <Box sx={{ display: "flex", gap: 2, mt: 3, justifyContent: "center" }}>
                      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/e/e1/UPI-Logo-vector.svg" sx={{ width: 50, height: "auto", borderRadius: 0 }} />
                      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" sx={{ width: 30, height: 30 }} />
                    </Box>
                  </Box>
                )}

                {/* --- 3. QR SCANNER --- */}
                {tabValue === 2 && (
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>Scan QR to Pay</Typography>
                    <Box 
                      sx={{ 
                        p: 2, bgcolor: "white", display: "inline-block", 
                        borderRadius: 4, border: "2px solid #f1f5f9", mb: 2 
                      }}
                    >
                      <img 
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=GhumoIndia_Pay_${amount}`} 
                        alt="Payment QR" 
                        style={{ width: 180 }}
                      />
                    </Box>
                    <Typography variant="caption" display="block" color="text.secondary">
                      Scan using GPay, PhonePe, or Paytm
                    </Typography>
                  </Box>
                )}

                <Button 
                  component={Link} // This tells MUI to act like a React Router Link
                  to="/payment-success"
                  variant="contained" 
                  fullWidth 
                  size="large" 
                  onClick={handlePay}
                  startIcon={<LockIcon />}
                  sx={{ 
                    mt: 4, py: 2, borderRadius: "16px", fontWeight: 800, fontSize: "1rem",
                    background: "linear-gradient(45deg, #4f46e5, #6366f1)",
                    boxShadow: "0 10px 20px rgba(79, 70, 229, 0.3)"
                  }}
                >
                  Pay Securely ₹{amount.toLocaleString()}
                </Button>

                <Box sx={{ mt: 3, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
                  <ShieldIcon sx={{ fontSize: 16, color: "#22c55e" }} />
                  <Typography variant="caption" sx={{ color: "#64748b", fontWeight: 600 }}>
                    PCI-DSS Compliant • 256-bit SSL Encryption
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Paper>

        <Box sx={{ mt: 4, textAlign: "center" }}>
           <Typography variant="caption" color="text.secondary">
             Having trouble? <span style={{ color: "#4f46e5", cursor: "pointer" }}>Contact Support</span>
           </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PaymentScreen;