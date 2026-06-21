import React from "react";
import Container from "../common/Container";
import { Lightbulb, PenLine, Share2 } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Lightbulb size={26} />,
      title: "Think",
      desc: "Start with your idea, thought, or inspiration. Every great quote begins with a simple idea.",
    },
    {
      icon: <PenLine size={26} />,
      title: "Write",
      desc: "Turn your thoughts into powerful words using our clean and distraction-free editor.",
    },
    {
      icon: <Share2 size={26} />,
      title: "Share",
      desc: "Publish your quote and inspire people around the world instantly with one click.",
    },
  ];

  return (
    <div className="py-20 bg-linear-to-b from-white to-purple-50">
      <Container>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            How It <span className="text-purple-600">Works</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            A simple 3-step process to create and share your inspirational quotes.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >

              {/* Glow effect */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition"></div>

              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-purple-100 text-purple-600 mb-6 group-hover:scale-110 transition">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </div>
  );
};

export default HowItWorks;