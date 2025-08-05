import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiServer,
  FiDatabase,
  FiShield,
  FiZap,
  FiGlobe,
  FiCpu,
  FiBarChart2,
  FiDownload,
  FiUpload,
  FiCode,
} from "react-icons/fi";

const ServiceHosting = () => {
  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] overflow-hidden">
      {/* **Hero Section – Data Center Visual** */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Server rack background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597852074816-d933c7d2b988')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-transparent to-[#0a0a12]"></div>

        {/* Animated server lights */}
        <div className="absolute bottom-0 left-0 right-0 h-32">
          <div className="flex justify-center space-x-4">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 rounded-full bg-[#00f0ff]"
              />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#00f0ff] text-[#0a0a12] font-medium mb-6 rounded-full">
              ENTERPRISE HOSTING
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                High-Performance
              </span>{" "}
              Hosting Solutions
            </h1>
            <p className="text-xl text-[#b0b0ff] max-w-2xl mb-12">
              Enterprise-grade server infrastructure with 99.99% uptime, global
              CDN, and military-grade security.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Custom Quote
                </span>
              </Link>
              <Link
                to="/plans"
                className="border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff]/10 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                View Plans
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Server rack visualization */}
            <div className="relative bg-[#12121a] p-6 rounded-xl border border-[#00f0ff]/30">
              <div className="server-rack">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="server-unit flex items-center px-4 py-3 border-b border-[#00f0ff]/10"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00f0ff] mr-3"></div>
                    <div className="flex-1">
                      <div className="h-2 bg-[#00f0ff]/30 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${30 + i * 10}%` }}
                          transition={{ duration: 1, delay: i * 0.2 }}
                          className="h-full bg-[#00f0ff] rounded-full"
                        />
                      </div>
                    </div>
                    <div className="text-xs text-[#00f0ff] ml-3">
                      Node-{i + 1}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-[#0066ff]/10 rounded-lg border border-[#0066ff]/20">
                  <FiDownload className="text-[#00f0ff] text-xl mx-auto mb-1" />
                  <div className="text-sm">10Gbps</div>
                </div>
                <div className="p-3 bg-[#00f0ff]/10 rounded-lg border border-[#00f0ff]/20">
                  <FiCpu className="text-[#00f0ff] text-xl mx-auto mb-1" />
                  <div className="text-sm">64 Cores</div>
                </div>
                <div className="p-3 bg-[#0066ff]/10 rounded-lg border border-[#0066ff]/20">
                  <FiDatabase className="text-[#00f0ff] text-xl mx-auto mb-1" />
                  <div className="text-sm">NVMe SSD</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* **Hosting Types – Tech Spec Cards** */}
      <section className="py-20 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#0066ff]">Scalable</span> Hosting
              Infrastructure
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Enterprise-grade solutions for every workload
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                type: "Cloud Hosting",
                icon: <FiGlobe className="text-4xl" />,
                specs: [
                  { name: "CPU Cores", value: "4-64", icon: <FiCpu /> },
                  { name: "RAM", value: "8-256GB", icon: <FiZap /> },
                  { name: "Storage", value: "100GB-4TB", icon: <FiDatabase /> },
                  { name: "Bandwidth", value: "Unmetered", icon: <FiUpload /> },
                ],
                color: "from-[#00f0ff] to-[#0066ff]",
              },
              {
                type: "Dedicated Servers",
                icon: <FiServer className="text-4xl" />,
                specs: [
                  { name: "Processors", value: "Dual Xeon", icon: <FiCpu /> },
                  { name: "RAM", value: "32-512GB", icon: <FiZap /> },
                  { name: "Storage", value: "RAID NVMe", icon: <FiDatabase /> },
                  { name: "Uplink", value: "10-100Gbps", icon: <FiUpload /> },
                ],
                color: "from-[#0066ff] to-[#00f0ff]",
              },
              {
                type: "Edge Computing",
                icon: <FiCode className="text-4xl" />,
                specs: [
                  { name: "Locations", value: "50+", icon: <FiGlobe /> },
                  { name: "Latency", value: "<10ms", icon: <FiZap /> },
                  { name: "Cache", value: "1TB+", icon: <FiDatabase /> },
                  { name: "Tiering", value: "Smart", icon: <FiBarChart2 /> },
                ],
                color: "from-[#00f0ff] to-[#0066ff]",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0e0e15] rounded-xl overflow-hidden border border-[#00f0ff]/10 hover:border-[#0066ff]/50 transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066ff]/10 to-[#00f0ff]/10 rounded-lg flex items-center justify-center text-[#00f0ff] mb-6 border border-[#00f0ff]/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-6">{service.type}</h3>
                  <ul className="space-y-4">
                    {service.specs.map((spec, i) => (
                      <li key={i} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-[#0066ff]/10 rounded-full flex items-center justify-center text-[#00f0ff] mr-3">
                            {spec.icon}
                          </div>
                          <span className="text-[#b0b0ff]">{spec.name}</span>
                        </div>
                        <span className="font-mono font-bold">
                          {spec.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Global Network – Map Visualization** */}
      <section className="py-28 px-6 sm:px-12 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#0066ff] font-semibold tracking-widest text-sm">
              OUR NETWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#00f0ff]">Worldwide</span> Data Centers
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Low-latency infrastructure across 5 continents
            </p>
          </motion.div>

          <div className="relative h-96 bg-[#12121a] rounded-xl border border-[#00f0ff]/20 flex items-center justify-center">
            {/* Simplified world map with location markers */}
            <div className="relative w-full h-full">
              {/* World map outline */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-30">
                <path d="M..." fill="#0066ff" />{" "}
                {/* Simplified world map path */}
              </svg>

              {/* Data center locations */}
              {[
                { x: 150, y: 100, name: "North America" },
                { x: 250, y: 120, name: "South America" },
                { x: 400, y: 100, name: "Europe" },
                { x: 500, y: 150, name: "Asia" },
                { x: 600, y: 200, name: "Australia" },
                { x: 350, y: 250, name: "Africa" },
              ].map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="absolute"
                  style={{ left: `${location.x}px`, top: `${location.y}px` }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-[#00f0ff] rounded-full animate-ping absolute opacity-30"></div>
                    <div className="w-4 h-4 bg-[#00f0ff] rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-[#0e0e15] px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-[#00f0ff]/20">
                      {location.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
            {[
              { name: "Dallas", ping: "12ms" },
              { name: "Frankfurt", ping: "18ms" },
              { name: "Singapore", ping: "28ms" },
              { name: "São Paulo", ping: "22ms" },
              { name: "Sydney", ping: "35ms" },
              { name: "Johannesburg", ping: "42ms" },
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121a] p-4 rounded-lg border border-[#00f0ff]/10 text-center"
              >
                <div className="text-[#00f0ff] font-bold">{location.name}</div>
                <div className="text-sm text-[#b0b0ff]">
                  {location.ping} avg ping
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Security Features – Shield Visualization** */}
      <section className="py-28 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              ENTERPRISE SECURITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#0066ff]">Military-Grade</span> Protection
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Multi-layered security for your most critical assets
            </p>
          </motion.div>

          <div className="relative">
            {/* Shield visualization with security layers */}
            <div className="flex justify-center">
              <div className="relative w-64 h-64">
                {/* Shield outline */}
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 w-full h-full text-[#0066ff]"
                >
                  <path
                    d="M50 5 L5 30 L15 70 L50 95 L85 70 L95 30 Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>

                {/* Security layers */}
                {[
                  {
                    name: "DDoS Protection",
                    size: 90,
                    color: "#00f0ff",
                    icon: <FiShield />,
                  },
                  { name: "WAF", size: 75, color: "#0066ff", icon: <FiCode /> },
                  {
                    name: "Encryption",
                    size: 60,
                    color: "#00f0ff",
                    icon: <FiDatabase />,
                  },
                  {
                    name: "Backups",
                    size: 45,
                    color: "#0066ff",
                    icon: <FiDownload />,
                  },
                ].map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-${layer.size} h-${layer.size} rounded-full border-2 border-[${layer.color}] flex items-center justify-center text-[${layer.color}]`}
                    style={{
                      width: `${layer.size}%`,
                      height: `${layer.size}%`,
                      borderColor: layer.color,
                      color: layer.color,
                    }}
                  >
                    <div className="text-center">
                      {layer.icon}
                      <div className="text-xs mt-1">{layer.name}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Security features list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
                { name: "DDoS Mitigation", desc: "10Tbps+ capacity" },
                { name: "Web Application Firewall", desc: "OWASP rulesets" },
                { name: "End-to-End Encryption", desc: "AES-256 standard" },
                { name: "Compliance", desc: "GDPR, HIPAA, PCI" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#0e0e15] p-6 rounded-lg border border-[#00f0ff]/10"
                >
                  <div className="w-10 h-10 bg-[#0066ff]/10 rounded-full flex items-center justify-center text-[#00f0ff] mb-3">
                    <FiShield />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{feature.name}</h3>
                  <p className="text-[#b0b0ff] text-sm">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* **Final CTA – Server Visualization** */}
      <section className="py-32 px-6 sm:px-12 bg-[#0a0a12] relative overflow-hidden">
        {/* Animated server lights background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.1, 0.5, 0.1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: Math.random() * 2,
                repeatType: "reverse",
              }}
              className="absolute w-1 h-1 rounded-full bg-[#00f0ff]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
              Enterprise-Grade
            </span>{" "}
            Hosting?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's build the perfect infrastructure for your mission-critical
            applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white font-semibold py-4 px-12 rounded-lg hover:shadow-[0_0_30px_-10px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              Deploy Your Servers
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceHosting;
