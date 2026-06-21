import React from "react";
import Container from "../common/Container";
import { ArrowRight, Stars } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-linear-to-b from-white via-purple-50 to-purple-600">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full blur-3xl opacity-30"></div>
      </div>

      <Container>
        <div className="relative z-10 text-center flex flex-col items-center">
          <div className="px-5 py-2 rounded-full bg-white/70 backdrop-blur border border-gray-200 text-purple-600 text-sm font-medium mb-6 shadow-sm flex items-center gap-3">
            <Stars /> Share your thoughts with the world
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Write & Share <br />
            <span className="text-purple-600 drop-shadow-sm">
              Powerful Quotes
            </span>
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl text-base md:text-lg">
            A modern SaaS platform to create, share and inspire people with your
            thoughts. Clean design, fast experience, and beautiful UI.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <button className="px-7 py-3 rounded-2xl bg-purple-600 text-white font-semibold shadow-lg hover:shadow-purple-400/50 hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Get Started
              <ArrowRight size={18} />
            </button>

            <button className="px-7 py-3 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 text-gray-700 font-semibold hover:bg-white hover:scale-105 transition-all duration-300">
              View Quotes
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
