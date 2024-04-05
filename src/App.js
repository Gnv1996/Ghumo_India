import React from "react";
import Sidebar from "./Component/Navigation/Sidebar";
import HomeScreen from "./Component/Screen/HomeScreen";
import PlaceScreen from "./Component/Screen/PlaceScreen";
import PopularScreen from "./Component/Screen/PopularScreen";
import PriceList from "./Component/Screen/PriceList";

function App() {
  return (
    <div>
      <Sidebar />
      <HomeScreen />
      <PlaceScreen />
      <PopularScreen />
      <PriceList />
    </div>
  );
}

export default App;
