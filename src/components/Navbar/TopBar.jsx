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
    <div className="bg-[#373737] text-white px-4 py-2 flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-1">
          <FaPhoneAlt className="text-[#f36e27]" />
          <span className="font-semibold">+88 01846 937397</span>
        </div>
        <div className="flex items-center space-x-1">
          <FaEnvelope className="text-[#f36e27]" />
          <span>info@a2itltd.com</span>
        </div>
      </div>

      <div className="flex space-x-2">
        <a
          href="#"
          className="bg-[#f36e27] hover:bg-[#a94d1c] p-2 rounded text-white"
        >
          <FaFacebookF />
        </a>
        <a
          href="#"
          className="bg-[#f36e27] hover:bg-[#a94d1c] p-2 rounded text-white"
        >
          <FaTwitter />
        </a>
        <a
          href="#"
          className="bg-[#f36e27] hover:bg-[#a94d1c] p-2 rounded text-white"
        >
          <FaYoutube />
        </a>
        <a
          href="#"
          className="bg-[#f36e27] hover:bg-[#a94d1c] p-2 rounded text-white"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="bg-[#f36e27] hover:bg-[#a94d1c] p-2 rounded text-white"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
