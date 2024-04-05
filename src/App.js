import React from "react";
import Sidebar from "./Component/Navigation/Sidebar";
import HomeScreen from "./Component/Screen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FooterScreen from "./Component/Screen/FooterScreen";
import LoginScreen from "./Component/NewScreen/LoginScreen";
import RegistrationScreen from "./Component/NewScreen/Registration";
import ProfileScreen from "./Component/NewScreen/ProfileScreen";

import AddRecord from "./Component/NewScreen/Record";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/record" element={<AddRecord />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>

      <FooterScreen />
    </Router>
  );
}

export default App;
