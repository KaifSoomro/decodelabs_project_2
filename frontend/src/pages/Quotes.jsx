import React, { useState } from "react";
import Container from "../components/common/Container";
import { Plus, Search, User } from "lucide-react";

const Quotes = () => {
  const [search, setSearch] = useState("");

  const quotes = [
    {
      fullName: "Walt Disney",
      quote: "The best way to get started is to quit talking and begin doing.",
    },
    {
      fullName: "Winston Churchill",
      quote:
        "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    },
    {
      fullName: "Sam Levenson",
      quote: "Don’t watch the clock; do what it does. Keep going.",
    },
    {
      fullName: "Vincent Van Gogh",
      quote:
        "Great things are done by a series of small things brought together.",
    },
    {
      fullName: "Unknown",
      quote: "Push yourself, because no one else is going to do it for you.",
    },
  ];

  const filteredQuotes = quotes.filter(
    (q) =>
      q.quote.toLowerCase().includes(search.toLowerCase()) ||
      q.fullName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen py-28 bg-linear-to-b from-white via-purple-50 to-purple-100">
      <Container>
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between mb-10">
          <div className="relative w-full md:w-1/2 group">
            <Search
              className="absolute left-4 top-3.5 text-gray-400"
              size={18}
            />

            <input
              type="text"
              placeholder="Search by name or quote..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/70 backdrop-blur border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition group-hover:shadow-md"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 text-white font-medium shadow-md hover:shadow-purple-400/50 hover:scale-105 active:scale-95 transition-all duration-300">
            <Plus size={18} />
            Add Quote
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Inspirational <span className="text-purple-600">Quotes</span>
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl">
            Explore thoughts from great minds around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredQuotes.map((q, i) => (
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

        {filteredQuotes.length === 0 && (
          <div className="text-center mt-20 text-gray-500">
            No quotes found for {search}.
          </div>
        )}
      </Container>
    </div>
  );
};

export default Quotes;
