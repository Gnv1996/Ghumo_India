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
        </Routes>

        <FooterScreen />
      </Router>
    </UserProvider>
  );
}

export default App;
