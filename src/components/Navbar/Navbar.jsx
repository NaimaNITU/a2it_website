import React, { useState, useRef, useEffect } from "react";
import Logo from "../shared/Logo";
import {
  FaGlobe,
  FaMobileAlt,
  FaSearch,
  FaUsers,
  FaVectorSquare,
  FaDownload,
  FaLaptopCode,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import serviceImage from "../../assets/banner.avif";
import { Link } from "react-router";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleToggleClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setServicesOpen(false);
  };

  const toggleMobileServices = () => {
    setServicesOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`bg-[#1a1a1a] text-white px-6 md:px-10 py-4 flex items-center justify-between relative z-50 sticky top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-opacity-90 shadow-[0_4px_20px_0px_rgba(243,110,39,0.5)]"
          : "bg-opacity-100 shadow-none"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Logo />
        <span className="text-2xl text-[#f36e27] font-bold">A2IT Ltd</span>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-10 items-center text-sm font-medium relative">
        <li>
          <Link to="/" className="hover:text-[#f36e27]">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-[#f36e27]">
            About
          </Link>
        </li>

        {/* Dropdown for desktop */}
        <li
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            onClick={handleToggleClick}
            className="flex items-center gap-1 hover:text-[#f36e27]"
          >
            Our Services
            <IoIosArrowDown
              className={`transition-transform duration-300 ${
                dropdownOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>

          {dropdownOpen && (
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[900px] h-[320px] bg-[#121212] text-gray-100 grid grid-cols-3 rounded-xl shadow-2xl z-20 px-8 py-6"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Services */}
              <div className="col-span-2 grid grid-cols-2 gap-6">
                {[
                  ["Website Design & Development", <FaLaptopCode />],
                  ["Mobile App Designing & Development", <FaMobileAlt />],
                  ["eCommerce Development Solutions", <FaGlobe />],
                  ["ERP System Development", <FaVectorSquare />],
                  ["SEO / SEM / PPC", <FaSearch />],
                  ["Social Media Marketing", <FaSearch />],
                  ["Server and Hosting Services", <FaUsers />],
                ].map(([title, icon], idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 hover:text-[#f36e27] cursor-pointer"
                    onClick={() => alert(`You clicked on ${title}`)}
                  >
                    <div className="bg-[#f36e27] text-black p-2 rounded-full text-sm mt-1">
                      {icon}
                    </div>
                    <div className="text-sm leading-tight">{title}</div>
                  </div>
                ))}
              </div>

              {/* Right: Blurred card */}
              <div className="bg-[#1a1a1a] border border-[#373737] rounded-lg p-4 relative overflow-hidden">
                <img
                  src={serviceImage}
                  alt="Services"
                  className="absolute inset-0 w-full h-full object-cover blur-[2px] opacity-60 rounded-md"
                />
                <div className="relative z-10">
                  <h3 className="text-base font-semibold mb-2">
                    Download our PDF portfolio
                  </h3>
                  <p className="text-sm text-gray-300 mb-4">
                    See our project experience & offerings in detail.
                  </p>
                  <button className="flex items-center gap-2 px-4 py-2 bg-[#f36e27] hover:bg-[#a94d1c] rounded-full text-sm font-semibold text-white transition w-full justify-center">
                    <FaDownload /> Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </li>

        <li>
          <Link to="/portfolio" className="hover:text-[#f36e27]">
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="/" className="hover:text-[#f36e27]">
            Blog
          </Link>
        </li>
      </ul>

      {/* Contact Button */}
      <button className="bg-black hover:bg-[#f36e27] transition-all text-white px-3 py-2.5 rounded-full shadow-md text-sm font-semibold hidden md:flex items-center gap-1">
        <span className="animate-wave origin-[70%_70%]">👋</span>
        Contact Us
      </button>

      {/* Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#1a1a1a] text-white px-6 py-4 space-y-4 z-40">
          <a href="#" className="block hover:text-[#f36e27]">
            Home
          </a>
          <a href="#" className="block hover:text-[#f36e27]">
            About
          </a>

          <div>
            <button
              onClick={toggleMobileServices}
              className="flex items-center justify-between w-full hover:text-[#f36e27]"
            >
              Our Services
              <IoIosArrowDown
                className={`transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {servicesOpen && (
              <div className="mt-2 pl-4 space-y-2">
                {[
                  "Website Design & Development",
                  "Mobile App Designing & Development",
                  "eCommerce Development Solutions",
                  "ERP System Development",
                  "SEO / SEM / PPC",
                  "Social Media Marketing",
                  "Server and Hosting Services",
                ].map((title, idx) => (
                  <p
                    key={idx}
                    className="hover:text-[#f36e27] cursor-pointer text-sm"
                    onClick={() => alert(`You clicked on ${title}`)}
                  >
                    {title}
                  </p>
                ))}
              </div>
            )}
          </div>

          <a href="#" className="block hover:text-[#f36e27]">
            Portfolio
          </a>
          <a href="#" className="block hover:text-[#f36e27]">
            Blog
          </a>

          <button className="w-full mt-4 bg-black hover:bg-[#f36e27] text-white py-3 px-2 rounded-full text-sm font-semibold flex items-center justify-center gap-1">
            <span className="animate-wave origin-[70%_70%]">👋</span>
            Contact Us
          </button>
        </div>
      )}

      {/* Animation style */}
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          15% { transform: rotate(14deg); }
          30% { transform: rotate(-8deg); }
          40% { transform: rotate(14deg); }
          50% { transform: rotate(-4deg); }
          60% { transform: rotate(10deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-wave {
          display: inline-block;
          animation: wave 2s infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
