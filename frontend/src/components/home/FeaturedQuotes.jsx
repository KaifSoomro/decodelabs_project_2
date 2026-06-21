import React from "react";
import Container from "../common/Container";

const FeaturedQuotes = () => {
  const quotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
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
              className="group relative p-6 rounded-3xl bg-white/70 backdrop-blur border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition"></div>

              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                “{q.text}”
              </p>

              <p className="mt-5 text-sm text-gray-500">— {q.author}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FeaturedQuotes;
