import React from "react";

// routes
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// components
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import HeaderTop from "./components/HeaderTop";
import Header from "./components/Header";

// css
import "./App.css";


const App: React.FC = () => {
  return (
    <Router>
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
