import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-[#0e0e15] text-[#e0e0ff] px-4 py-2 flex justify-between items-center text-sm border-b border-[#0066ff]/30">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaPhoneAlt className="text-[#0066ff]" />
          <span className="font-semibold">+88 01846 937397</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-[#0066ff]" />
          <span>info@a2itltd.com</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <a
          href="https://www.facebook.com/A2ITLtd"
          className="bg-[#12121a] hover:bg-[#0066ff] p-2 rounded text-[#00f0ff] border border-[#0066ff]/50 hover:border-[#00f0ff] transition-colors duration-300"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-[#12121a] hover:bg-[#0066ff] p-2 rounded text-[#00f0ff] border border-[#0066ff]/50 hover:border-[#00f0ff] transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="bg-[#12121a] hover:bg-[#0066ff] p-2 rounded text-[#00f0ff] border border-[#0066ff]/50 hover:border-[#00f0ff] transition-colors duration-300"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          className="bg-[#12121a] hover:bg-[#0066ff] p-2 rounded text-[#00f0ff] border border-[#0066ff]/50 hover:border-[#00f0ff] transition-colors duration-300"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/a2itlimited/"
          className="bg-[#12121a] hover:bg-[#0066ff] p-2 rounded text-[#00f0ff] border border-[#0066ff]/50 hover:border-[#00f0ff] transition-colors duration-300"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
