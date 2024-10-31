// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import About from "/src/pages/About";
import Contact from "/src/pages/Contact";
import Header from "/src/components/Header/Header.jsx";

const App = () => {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <Router>
      <>
        <Header setHeaderHeight={setHeaderHeight} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
