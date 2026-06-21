import React, { useState, useEffect } from "react";
import Container from "./Container";
import { NavLink } from "react-router-dom";
import { Menu, X, Home, Quote } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
      isActive
        ? "bg-purple-600 text-white shadow-md scale-105"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/60 backdrop-blur-xl shadow-md border-b border-gray-100"
            : "bg-white/30 backdrop-blur-md"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between py-4">

            <h1 className="text-2xl font-bold tracking-tight">
              <span className="text-purple-600">Quote</span>
              <span className="text-gray-800">App</span>
            </h1>

            <div className="hidden md:flex items-center gap-2 bg-white/60 backdrop-blur px-2 py-1 rounded-full border border-gray-100 shadow-sm">
              <NavLink to="/" className={linkClass}>
                <Home size={16} />
                Home
              </NavLink>

              <NavLink to="/quotes" className={linkClass}>
                <Quote size={16} />
                Quotes
              </NavLink>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 rounded-xl bg-white shadow-sm border border-gray-100 active:scale-95 transition"
            >
              <Menu size={22} />
            </button>
          </div>
        </Container>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        />
      )}

      <div
        className={`fixed bottom-0 left-0 w-full z-50 transition-transform duration-300 ${
          open ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="bg-white rounded-t-3xl shadow-2xl border-t border-gray-100 p-5">

          <div className="flex justify-center mb-4">
            <div className="w-12 h-1.5 bg-gray-200 rounded-full"></div>
          </div>

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-lg font-semibold">Navigation</h2>

            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-gray-100 active:scale-95 transition"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-3">

            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Home size={18} />
              <span className="font-medium">Home</span>
            </NavLink>

            <NavLink
              to="/quotes"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              <Quote size={18} />
              <span className="font-medium">Quotes</span>
            </NavLink>

          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;