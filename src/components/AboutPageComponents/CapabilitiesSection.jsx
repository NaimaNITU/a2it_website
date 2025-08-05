import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const techImages = [
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80",
  "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
];

const CapabilitiesSection = () => {
  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] py-20 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0066ff] filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#0066ff] to-[#003399] filter blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Unlock Your Software Development{" "}
              <span className="text-[#00f0ff]">Capabilities</span> With Us
            </h2>

            <p className="text-lg text-[#b0b0ff] leading-relaxed">
              TechnoNext empowers your vision with specialized teams proficient
              in:
            </p>

            <ul className="grid grid-cols-2 gap-3">
              {[
                "Software Engineering",
                "System Integration",
                "QA Testing",
                "Maintenance",
                "DevSecOps",
                "Cybersecurity",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-[#00f0ff] mr-2">•</span>
                  <span className="text-[#b0b0ff]">{item}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-medium rounded-lg shadow-lg hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] transition-all duration-300 inline-flex items-center"
            >
              Contact Us <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Image grid - 3 images in first row, 2 columns in second row with one image spanning both */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 gap-4"
          >
            {/* First row - 3 images */}
            {techImages.slice(0, 3).map((img, index) => (
              <motion.div
                key={`first-${index}`}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-xl aspect-square border border-[#00f0ff]/20"
              >
                <img
                  src={img}
                  alt="Technology"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/60 via-transparent to-transparent"></div>
              </motion.div>
            ))}

            {/* Second row - full width image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden rounded-xl aspect-video col-span-3 md:col-span-2 border border-[#00f0ff]/20"
            >
              <img
                src={techImages[3]}
                alt="Technology"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/60 via-transparent to-transparent"></div>
            </motion.div>

            {/* Third image in second row */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-xl aspect-square md:block hidden border border-[#00f0ff]/20"
            >
              <img
                src={techImages[4]}
                alt="Technology"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/60 via-transparent to-transparent"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CapabilitiesSection;
