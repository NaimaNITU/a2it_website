import React from "react";
import { FaHeart, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a12] text-[#e0e0ff] pt-16 pb-8 px-6 md:px-16 relative overflow-hidden">
      {/* Glowing orb effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute rounded-full bg-[#00f0ff] blur-3xl opacity-5 w-80 h-80 -left-40 -bottom-40"></div>
        <div className="absolute rounded-full bg-[#0066ff] blur-3xl opacity-5 w-96 h-96 -right-40 -top-40"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#0066ff] flex items-center justify-center text-2xl font-bold text-[#0a0a12]">
                A2
              </div>
              <h2 className="text-3xl font-bold">A2It Ltd</h2>
            </div>
            <p className="text-xl text-[#00f0ff] font-medium">
              Build Your Dreams
            </p>
            <p className="text-[#b0b0ff] leading-relaxed">
              Transforming ideas into digital reality through innovative
              solutions and cutting-edge technology.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {[
                { icon: <FaFacebookF />, color: "hover:text-[#1877F2]" },
                { icon: <FaTwitter />, color: "hover:text-[#1DA1F2]" },
                { icon: <FaLinkedinIn />, color: "hover:text-[#0A66C2]" },
                { icon: <FaInstagram />, color: "hover:text-[#E4405F]" },
                { icon: <FaYoutube />, color: "hover:text-[#FF0000]" },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-10 h-10 rounded-full bg-[#1a1a2a] flex items-center justify-center text-lg text-[#b0b0ff] ${social.color} hover:bg-[#00f0ff]/10 transition-all`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b border-[#00f0ff]/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Home",
                "Services",
                "Portfolio",
                "About Us",
                "Testimonials",
                "Careers",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b border-[#00f0ff]/30 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "UI/UX Design",
                "Digital Marketing",
                "Cloud Solutions",
                "IT Consulting",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#00f0ff] border-b border-[#00f0ff]/30 pb-2">
              Contact Us
            </h3>
            <address className="not-italic text-[#b0b0ff] space-y-4">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-[#00f0ff] mt-1 flex-shrink-0" />
                <p>
                  123 Tech Park Avenue
                  <br />
                  Silicon Valley, CA 94025
                  <br />
                  United States
                </p>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-[#00f0ff]" />
                <a
                  href="tel:+19995556688"
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  +1 (999) 555-6688
                </a>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-[#00f0ff]" />
                <a
                  href="mailto:info@a2it.com"
                  className="hover:text-[#00f0ff] transition-colors"
                >
                  info@a2it.com
                </a>
              </div>
            </address>

            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">
                Subscribe to Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#1a1a2a] text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#00f0ff] w-full"
                />
                <button className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-bold px-4 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#00f0ff]/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#b0b0ff] mb-4 md:mb-0">
            © {new Date().getFullYear()} A2It Ltd. All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-[#b0b0ff] hover:text-[#00f0ff] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
