import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import Quotes from "./pages/Quotes";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
