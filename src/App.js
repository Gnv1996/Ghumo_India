import React from "react";
import Sidebar from "./Component/Navigation/Sidebar";
import HomeScreen from "./Component/Screen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterScreen from "./Component/Screen/FooterScreen";
import LoginScreen from "./Component/NewScreen/LoginScreen";
import RegistrationScreen from "./Component/NewScreen/Registration";
import ProfileScreen from "./Component/NewScreen/ProfileScreen";
import MessageScreen from "./Component/NewScreen/MessageScreen";
import FaqScreen from "./Component/Screen/FaqScreen";
import { UserProvider } from "../src/auth/ContextApi";
import AddRecord from "./Component/NewScreen/Record";
import DelhiBookingScreen from "./Component/Screen/DelhiBookingScreen";
import PaymentScreen from "./Component/Screen/PaymentScreen";
import SuccessScreen from "./Component/Screen/SuccessScreen";
import SystemSettings from "./Component/Screen/SystemSettings";

function App() {
  return (
    <UserProvider>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/record" element={<AddRecord />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/register" element={<RegistrationScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/message" element={<MessageScreen />} />
          <Route path="/faq" element={<FaqScreen />} />
          <Route path="/booking" element={<DelhiBookingScreen />} />
          <Route path="/payment" element={<PaymentScreen />} />
          <Route path="/payment-success" element={<SuccessScreen />} />
          <Route path="/system" element={<SystemSettings />} />
        </Routes>

        <FooterScreen />
      </Router>
    </UserProvider>
  );
}

export default App;
