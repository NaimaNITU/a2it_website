import React from "react";
import clientsImg from "../../assets/clientsImg/clients.png";

import logo1 from "../../assets/logos/logo1.png";
import logo2 from "../../assets/logos/logo1.png";
import logo3 from "../../assets/logos/logo1.png";
import logo4 from "../../assets/logos/logo1.png";
import logo5 from "../../assets/logos/logo1.png";
import logo6 from "../../assets/logos/logo1.png";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientShowcase = () => {
  return (
    <div className="bg-[#1c1c1c] text-white py-16 px-6 overflow-hidden">
      {/* Main row */}
      <div className="max-w-7xl mx-auto flex flex-col  md:justify-center  items-center gap-2">
        {/* Left text +client image */}
        <div className="text-center md:text-left flex items-end  ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Our clients
          </h2>
          {/* client image part  */}
          <div className="relative w-48 md:w-60 aspect-[3/2] flex items-end justify-center -ml-6 ">
            {/* Orange pill */}
            <div className="absolute bottom-0 w-32 md:w-44 h-8 md:h-10 bg-[#f36e27] rounded-full z-0 shadow-[0_8px_20px_rgba(243,110,39,0.4)]" />
            {/* Clients Image on top of pill, centered */}
            <img
              src={clientsImg}
              alt="Clients"
              className="relative z-10 ml-20 w-full h-auto object-contain"
            />
          </div>
        </div>

        <div>
          <span className="opacity-90 text-[#f36e27] text-4xl md:text-5xl font-bold ">
            Reflects our expertise
          </span>
        </div>
      </div>

      {/* Scrolling logos */}
      <div className="mt-12 overflow-hidden whitespace-nowrap">
        <div
          className="inline-block"
          style={{
            animation: "scroll 18s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`logo-${idx}`}
              className="inline-block h-10 mx-6 grayscale opacity-70 hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ClientShowcase;
