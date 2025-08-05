import React from "react";
import clientsImg from "../../assets/clientsImg/clients.png";
import logo1 from "../../assets/logos/1.webp";
import logo2 from "../../assets/logos/2.webp";
import logo3 from "../../assets/logos/3.webp";
import logo4 from "../../assets/logos/4.webp";
import logo5 from "../../assets/logos/5.webp";
import logo6 from "../../assets/logos/6.webp";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

const ClientShowcase = () => {
  return (
    <div className="bg-[#0a0a12]">
      <div className=" text-[#e0e0ff] py-10  overflow-hidden max-w-7xl mx-auto">
        {/* Main row */}
        <div className="max-w-7xl mx-auto flex flex-col md:justify-center items-center gap-2">
          {/* Left text + client image */}
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="text-center md:text-left flex items-end">
              <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0ff] leading-tight">
                Our <span className="text-[#00f0ff]">clients</span>
              </h2>

              {/* Client image - without floating effect */}
              <div className="relative w-48 md:w-60 aspect-[3/2] flex items-end justify-center -ml-6">
                <div className="absolute bottom-0 w-32 md:w-44 h-8 md:h-10 bg-[#00f0ff] rounded-full z-0 shadow-[0_10px_30px_rgba(0,240,255,0.3)]" />
                <img
                  src={clientsImg}
                  alt="Happy Clients"
                  className="relative z-10 ml-20 w-full h-auto object-contain"
                  style={{ filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.3))" }}
                />
              </div>
            </div>

            {/* Premium subtitle */}
            <div className="mt-1 relative">
              <h3 className="text-4xl md:text-5xl font-bold text-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                  Reflects
                </span>{" "}
                <span className="text-[#e0e0ff]">our expertise</span>
              </h3>
              <div className="absolute bottom-[-8px] left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent rounded-full" />
            </div>
          </div>
        </div>

        {/* Scrolling logos */}
        <div className="mt-4 overflow-hidden whitespace-nowrap">
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
                className="inline-block h-26 mx-6 hover:grayscale-0 transition duration-300"
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
    </div>
  );
};

export default ClientShowcase;
