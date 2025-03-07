import React from "react";
import Navbar from "./compnents/Navbar";
import HeroSection from "./compnents/HeroSection";

const App = () => {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
      <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
      <div className="relaive z-10">
        <Navbar />
        <HeroSection />
      </div>
    </main>
  );
};

export default App;
