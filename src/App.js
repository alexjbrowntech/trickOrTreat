import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MapComp from "./MapComp";
// import { storedData } from "./data";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapComp />} />
      </Routes>
    </Router>
  );
};

export default App;
