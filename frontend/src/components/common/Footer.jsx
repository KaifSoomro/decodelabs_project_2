import React from "react";
import Container from "../common/Container";
import { Quote, Mail } from "lucide-react";
import { FaGithub as Github, FaTwitter as Twitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-white to-purple-50 border-t border-gray-100 mt-20">

      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold">
              <span className="text-purple-600">Quote</span>App
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              A modern platform to write, share and inspire people with beautiful quotes.
            </p>
            <div className="flex items-center gap-4 mt-5 text-gray-500">
              <Github className="hover:text-black cursor-pointer transition" />
              <Twitter className="hover:text-blue-500 cursor-pointer transition" />
              <Mail className="hover:text-purple-600 cursor-pointer transition" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-purple-600 cursor-pointer transition">
                Home
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition">
                Quotes
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition">
                Featured
              </li>
              <li className="hover:text-purple-600 cursor-pointer transition">
                About
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Stay Inspired
            </h3>

            <p className="text-sm text-gray-600 mb-4">
              Get new quotes and inspiration updates.
            </p>

            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400 text-sm"
              />

              <button className="px-4 py-2 rounded-xl bg-purple-600 text-white text-sm hover:shadow-lg hover:scale-105 transition">
                Join
              </button>
            </div>
          </div>

        </div> 
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} QuoteApp. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Built with ❤️ using MERN Stack By Kaif Soomro
          </p>
        </div>
      </Container>

    </footer>
  );
};

export default Footer;