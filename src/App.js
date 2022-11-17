import "./App.css";
import React from "react";
import Home from "./Home";
import Advent from "./Advent";
import Popup from './Popup';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Advent" element={<Advent />} />
          <Route path="/Popup" element={<Popup />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
