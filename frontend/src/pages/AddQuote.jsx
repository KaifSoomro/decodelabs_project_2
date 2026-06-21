import React, { useState } from "react";
import Container from "../components/common/Container";
import { User, Quote, Sparkles } from "lucide-react";

const AddQuote = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    quote: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({ fullName: "", quote: "" });
  };

  return (
    <div className="min-h-screen py-28 bg-linear-to-b from-white via-purple-50 to-purple-100">
      <Container>
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Add a <span className="text-purple-600">Quote</span>
          </h1>
          <p className="text-gray-600 mt-3">
            Share your thoughts and inspire the world ✨
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative p-8 md:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30"></div>

            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User size={16} /> Full Name
              </label>

              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              />
            </div>

            <div className="mb-6">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Quote size={16} /> Your Quote
              </label>

              <textarea
                name="quote"
                value={formData.quote}
                onChange={handleChange}
                rows={5}
                placeholder="Write your inspiring quote..."
                className="w-full px-4 py-3 rounded-2xl bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 text-white font-semibold shadow-md hover:shadow-purple-400/50 hover:scale-[1.02] active:scale-95 transition-all duration-300"
            >
              <Sparkles size={18} />
              Publish Quote
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AddQuote;
