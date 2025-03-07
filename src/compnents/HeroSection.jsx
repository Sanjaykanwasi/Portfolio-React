import React from "react";
import { useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import sanjay from "../assets/sanjay.jpg";

const HeroSection = () => {
  const heroReff = useRef(null);
  return (
    <div>
      <section
        className="flex min-h-screen flex-col items-center justify-center gap-4  lg:gap-6 "
        rel={heroReff}
      >
        <div className="mt-8 lg:mt-20">
          <h1 className="hero-title text-4xl uppercase lg:text-7xl ">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-400 bg-clip-text text-transparent text-center text-2xl tracking-tight ">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tight lg:text-2xl">
          {PROFILE.subheading}
        </p>
        <a
          href="/David-stone.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="hero-btn mb-6 flex gap-1 rounded-full border border-pink-200/50 px-3 py-2 tracking-tighter"
        >
          <span>Download Resume </span>
          <RiArrowRightUpLine />
        </a>
        <img
          src={sanjay}
          alt={PROFILE.name}
          width={400}
          height="400"
          className="hero-img rounded-3xl border border-purple-300/20 p-1 "
        />
      </section>
    </div>
  );
};

export default HeroSection;
