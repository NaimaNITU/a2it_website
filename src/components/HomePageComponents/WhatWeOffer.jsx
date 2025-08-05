import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Smartphone,
  ShoppingCart,
  Database,
  TrendingUp,
  Share2,
  Award,
  Globe,
  Cpu,
  Cloud,
  Lock,
  BarChart2,
  Users,
} from "lucide-react";

const WhatWeOffer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const services = [
    {
      title: "Web Design & Development",
      icon: <Code className="w-8 h-8" />,
      description:
        "Custom websites with modern design and robust functionality tailored to your business needs.",
      features: ["Responsive Design", "SEO Optimized", "CMS Integration"],
      color: "bg-[#0066ff]", // Blue
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone className="w-8 h-8" />,
      description:
        "High-performance iOS/Android apps built for engagement and scalability.",
      features: [
        "Cross-Platform",
        "Native Development",
        "App Store Optimization",
      ],
      color: "bg-[#00a0ff]", // Light Blue
    },
    {
      title: "eCommerce Solutions",
      icon: <ShoppingCart className="w-8 h-8" />,
      description:
        "Complete online stores with secure payment gateways and inventory management.",
      features: ["Shopify", "WooCommerce", "Custom Solutions"],
      color: "bg-[#00f0ff]", // Cyan
    },
    {
      title: "ERP Systems",
      icon: <Database className="w-8 h-8" />,
      description:
        "Custom enterprise systems to streamline your business operations.",
      features: ["Inventory Management", "CRM Integration", "Analytics"],
      color: "bg-[#0066ff]", // Blue
    },
    {
      title: "Digital Marketing",
      icon: <TrendingUp className="w-8 h-8" />,
      description:
        "Comprehensive strategies to boost your online visibility and conversions.",
      features: ["SEO", "PPC", "Social Media"],
      color: "bg-[#00c0ff]", // Medium Cyan
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="w-8 h-8" />,
      description:
        "Reliable hosting and cloud solutions for your digital infrastructure.",
      features: ["AWS", "Google Cloud", "Azure"],
      color: "bg-[#0066ff]", // Blue
    },
    {
      title: "UI/UX Design",
      icon: <Globe className="w-8 h-8" />,
      description:
        "Beautiful, intuitive interfaces that enhance user experience.",
      features: ["Wireframing", "Prototyping", "User Testing"],
      color: "bg-[#00f0ff]", // Cyan
    },
    {
      title: "Cybersecurity",
      icon: <Lock className="w-8 h-8" />,
      description:
        "Protect your digital assets with our comprehensive security solutions.",
      features: ["Pen Testing", "Firewalls", "Encryption"],
      color: "bg-[#0066ff]", // Blue
    },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => stopAutoPlay();
  }, [isAutoPlaying, services.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const getVisibleServices = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % services.length;
      result.push({ ...services[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section className="relative py-14 bg-gradient-to-b from-[#0a0a12] to-[#12121a] overflow-hidden">
      {/* Decorative elements (cyan-blue glow) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#0066ff] filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00a0ff] to-[#0066ff] filter blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center bg-[#00f0ff]/10 p-4 rounded-full mb-6">
            <Award className="w-8 h-8 text-[#00f0ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#e0e0ff] mb-4">
            What <span className="text-[#00f0ff]">We Offer</span>
          </h2>
          <motion.div
            className="h-1 bg-gradient-to-r from-[#00f0ff] via-[#0066ff] to-transparent rounded-full mx-auto w-32 mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
          <p className="text-[#b0b0ff] text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to elevate your business to
            new heights
          </p>
        </motion.div>

        {/* Services Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 shadow-xl rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-900 shadow-xl rounded-full w-12 h-12 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Services Cards */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {getVisibleServices().map((service, index) => (
              <motion.div
                key={`${service.title}-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${
                  index === 1 ? "md:scale-105 z-10" : "md:scale-95"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div
                  className={`absolute inset-0 ${service.color} opacity-90`}
                ></div>
                <div className="relative z-10 p-8 flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4">
                      {React.cloneElement(service.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/80 mb-2">{service.description}</p>
                  </div>

                  <div className="mt-auto">
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase tracking-wider">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center">
                            <svg
                              className="w-4 h-4 text-white mr-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              ></path>
                            </svg>
                            <span className="text-white/80">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <button className="w-full py-3 bg-white text-[#0a0a12] font-medium rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#00f0ff] scale-125"
                    : "bg-[#b0b0ff] hover:bg-[#00f0ff]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
