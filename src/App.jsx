import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Analytics />
    </>
  );
}

export default App;
