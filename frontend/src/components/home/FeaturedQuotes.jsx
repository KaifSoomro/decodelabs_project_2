import React from "react";
import Container from "../common/Container";
import { User } from "lucide-react";

const FeaturedQuotes = () => {
  const quotes = [
    {
      quote: "The best way to get started is to quit talking and begin doing.",
      fullName: "Walt Disney",
    },
    {
      quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      fullName: "Winston Churchill",
    },
    {
      quote: "Don’t watch the clock; do what it does. Keep going.",
      fullName: "Sam Levenson",
    },
  ];

  return (
    <div className="py-24 bg-linear-to-b from-white via-purple-50 to-white">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-purple-600">Quotes</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Hand-picked inspirational quotes to motivate and inspire your day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition"></div>

              <p className="text-gray-800 text-lg font-medium leading-relaxed">
                “{q.quote}”
              </p>

              <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <User size={14} className="text-purple-600" />
                </div>

                <span className="font-medium text-gray-700">{q.fullName}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedQuotes;
