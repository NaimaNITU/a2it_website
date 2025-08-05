import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiCpu,
  FiDatabase,
  FiPieChart,
  FiSettings,
  FiUsers,
  FiBarChart2,
  FiGlobe,
  FiShield,
  FiRefreshCw,
  FiBriefcase,
  FiServer,
  FiCode,
  FiShoppingCart,
} from "react-icons/fi";

const ServiceERP = () => {
  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] overflow-hidden">
      {/* **Hero Section – Cyberpunk Inspired** */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNncmlkKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Glowing elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#3d5afe] opacity-20 blur-[100px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-[#00bcd4] opacity-15 blur-[100px]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-[#3d5afe] text-white font-medium mb-6 rounded-full">
              ENTERPRISE SOLUTIONS
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d5afe] to-[#00bcd4]">
                Next-Gen ERP Systems
              </span>
            </h1>
            <p className="text-xl text-[#b0b0ff] max-w-2xl mb-12">
              AI-powered enterprise platforms that unify your operations with
              predictive analytics and intelligent automation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[#3d5afe] to-[#00bcd4] text-white font-semibold py-4 px-8 rounded-lg hover:shadow-[0_0_30px_rgba(61,90,254,0.5)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Request Demo
                </span>
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-[#3d5afe] text-[#3d5afe] hover:bg-[#3d5afe]/10 font-semibold py-4 px-8 rounded-lg transition-colors duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            {/* Futuristic dashboard mockup */}
            <div className="relative bg-[#12121a] p-1 rounded-xl border border-[#3d5afe]/30">
              <div className="absolute inset-0 rounded-xl border border-[#00bcd4]/20 pointer-events-none"></div>

              {/* Mock dashboard UI */}
              <div className="bg-[#0e0e15] p-6 rounded-lg">
                <div className="flex justify-between items-center mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  </div>
                  <div className="text-sm text-[#b0b0ff]">
                    ERP DASHBOARD v4.2
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-[#3d5afe]/10 p-3 rounded-lg border border-[#3d5afe]/20">
                    <div className="text-[#00bcd4] text-sm mb-1">Revenue</div>
                    <div className="text-xl font-mono">$284,402</div>
                  </div>
                  <div className="bg-[#00bcd4]/10 p-3 rounded-lg border border-[#00bcd4]/20">
                    <div className="text-[#3d5afe] text-sm mb-1">Orders</div>
                    <div className="text-xl font-mono">1,284</div>
                  </div>
                  <div className="bg-[#3d5afe]/10 p-3 rounded-lg border border-[#3d5afe]/20">
                    <div className="text-[#00bcd4] text-sm mb-1">
                      Efficiency
                    </div>
                    <div className="text-xl font-mono">87%</div>
                  </div>
                </div>

                <div className="h-40 bg-gradient-to-r from-[#3d5afe]/10 to-[#00bcd4]/10 rounded-lg border border-[#3d5afe]/20 flex items-center justify-center">
                  <FiPieChart className="text-4xl text-[#b0b0ff] opacity-60" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* **Core Capabilities – Hex Grid** */}
      <section className="py-20 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00bcd4] font-semibold tracking-widest text-sm">
              ENTERPRISE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#3d5afe]">Modular</span> Platform
              Architecture
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Scalable components that adapt to your evolving business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FiCpu className="text-3xl" />,
                title: "AI-Powered Analytics",
                description: "Predictive insights and machine learning models",
                color: "from-[#3d5afe] to-[#00bcd4]",
              },
              {
                icon: <FiDatabase className="text-3xl" />,
                title: "Unified Data Platform",
                description: "Single source of truth across all departments",
                color: "from-[#00bcd4] to-[#3d5afe]",
              },
              {
                icon: <FiRefreshCw className="text-3xl" />,
                title: "Process Automation",
                description: "Eliminate manual workflows with RPA",
                color: "from-[#3d5afe] to-[#00bcd4]",
              },
              {
                icon: <FiGlobe className="text-3xl" />,
                title: "Global Deployment",
                description: "Multi-currency, language, and compliance",
                color: "from-[#00bcd4] to-[#3d5afe]",
              },
              {
                icon: <FiShield className="text-3xl" />,
                title: "Blockchain Security",
                description: "Immutable audit trails and smart contracts",
                color: "from-[#3d5afe] to-[#00bcd4]",
              },
              {
                icon: <FiServer className="text-3xl" />,
                title: "Hybrid Cloud",
                description: "Flexible deployment options",
                color: "from-[#00bcd4] to-[#3d5afe]",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0e0e15] p-8 rounded-xl border border-[#3d5afe]/10 hover:border-[#00bcd4]/50 transition-all duration-300 hover:shadow-[0_0_20px_-5px_rgba(0,188,212,0.3)]"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white mb-6`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#b0b0ff]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* **Industry Solutions – Interactive Tabs** */}
      <section className="py-28 px-6 sm:px-12 bg-[#0a0a12]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00bcd4] font-semibold tracking-widest text-sm">
              INDUSTRY FOCUS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#3d5afe]">Vertical-Specific</span>{" "}
              Solutions
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Tailored ERP configurations for your industry challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left side - Industry selector */}
            <div className="flex flex-col space-y-4">
              {[
                {
                  name: "Manufacturing",
                  icon: <FiSettings className="mr-3" />,
                  features: [
                    "Shop floor control",
                    "Quality management",
                    "Supply chain integration",
                  ],
                },
                {
                  name: "Healthcare",
                  icon: <FiUsers className="mr-3" />,
                  features: [
                    "Patient management",
                    "HIPAA compliance",
                    "Medical inventory",
                  ],
                },
                {
                  name: "Retail",
                  icon: <FiShoppingCart className="mr-3" />,
                  features: [
                    "Omnichannel POS",
                    "Inventory optimization",
                    "Customer analytics",
                  ],
                },
                {
                  name: "Construction",
                  icon: <FiBriefcase className="mr-3" />,
                  features: [
                    "Project costing",
                    "Equipment tracking",
                    "Subcontractor mgmt",
                  ],
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-[#12121a] p-6 rounded-xl border border-[#3d5afe]/10 hover:border-[#00bcd4]/50 cursor-pointer transition-all duration-300 group"
                >
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-r ${
                        index % 2 === 0
                          ? "from-[#3d5afe] to-[#00bcd4]"
                          : "from-[#00bcd4] to-[#3d5afe]"
                      } flex items-center justify-center text-white mr-4`}
                    >
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold">{industry.name}</h3>
                  </div>
                  <div className="mt-4 pl-14">
                    <ul className="space-y-2">
                      {industry.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-[#b0b0ff]">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                              index % 2 === 0 ? "bg-[#00bcd4]" : "bg-[#3d5afe]"
                            }`}
                          ></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right side - Visual representation */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Circular diagram */}
                    <div className="w-80 h-80 rounded-full border-2 border-[#3d5afe]/30 flex items-center justify-center">
                      <div className="w-64 h-64 rounded-full border-2 border-[#00bcd4]/30 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-2 border-[#3d5afe]/30 flex items-center justify-center">
                          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-[#3d5afe]/10 to-[#00bcd4]/10 flex items-center justify-center">
                            <FiDatabase className="text-4xl text-[#b0b0ff]" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating industry icons */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#3d5afe]/20 rounded-full border border-[#3d5afe]/30 flex items-center justify-center backdrop-blur-sm">
                      <FiSettings className="text-xl text-[#3d5afe]" />
                    </div>
                    <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00bcd4]/20 rounded-full border border-[#00bcd4]/30 flex items-center justify-center backdrop-blur-sm">
                      <FiUsers className="text-xl text-[#00bcd4]" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-16 h-16 bg-[#3d5afe]/20 rounded-full border border-[#3d5afe]/30 flex items-center justify-center backdrop-blur-sm">
                      <FiShoppingCart className="text-xl text-[#3d5afe]" />
                    </div>
                    <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00bcd4]/20 rounded-full border border-[#00bcd4]/30 flex items-center justify-center backdrop-blur-sm">
                      <FiBriefcase className="text-xl text-[#00bcd4]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* **Implementation Timeline – Vertical Stepper** */}
      <section className="py-28 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-[#00bcd4] font-semibold tracking-widest text-sm">
              OUR METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              <span className="text-[#3d5afe]">Phased</span> Implementation
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              Minimizing disruption while maximizing value delivery
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="hidden lg:block absolute left-1/2 h-[85%] top-[7.5%] w-1 bg-gradient-to-b from-[#3d5afe] via-[#00bcd4] to-[#3d5afe]"></div>

            {/* Steps */}
            <div className="grid lg:grid-cols-2 gap-y-16">
              {[
                {
                  phase: "Phase 1",
                  title: "Discovery & Planning",
                  duration: "2-4 Weeks",
                  activities: [
                    "Requirements workshop",
                    "Process mapping",
                    "Solution design",
                  ],
                  color: "bg-[#3d5afe]",
                },
                {
                  phase: "Phase 2",
                  title: "Core System Setup",
                  duration: "4-6 Weeks",
                  activities: [
                    "Platform configuration",
                    "Data migration",
                    "Basic automation",
                  ],
                  color: "bg-[#00bcd4]",
                },
                {
                  phase: "Phase 3",
                  title: "Module Implementation",
                  duration: "6-8 Weeks",
                  activities: [
                    "Departmental rollouts",
                    "Custom development",
                    "Integration",
                  ],
                  color: "bg-[#3d5afe]",
                },
                {
                  phase: "Phase 4",
                  title: "Testing & Training",
                  duration: "3-4 Weeks",
                  activities: [
                    "User acceptance testing",
                    "Training programs",
                    "Documentation",
                  ],
                  color: "bg-[#00bcd4]",
                },
                {
                  phase: "Phase 5",
                  title: "Go-Live & Support",
                  duration: "Ongoing",
                  activities: [
                    "Phased rollout",
                    "Hypercare support",
                    "Continuous improvement",
                  ],
                  color: "bg-[#3d5afe]",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${
                    index % 2 === 0
                      ? "lg:pr-24 lg:text-right"
                      : "lg:pl-24 lg:text-left"
                  }`}
                >
                  <div
                    className={`absolute top-0 ${
                      index % 2 === 0 ? "lg:right-0" : "lg:left-0"
                    } w-8 h-8 ${
                      step.color
                    } rounded-full flex items-center justify-center text-white z-10 transform ${
                      index % 2 === 0 ? "translate-x-4" : "-translate-x-4"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="bg-[#0e0e15] p-8 rounded-xl border border-[#3d5afe]/10 hover:border-[#00bcd4]/50 transition-all duration-300">
                    <div
                      className={`text-sm font-mono mb-2 ${
                        step.color === "bg-[#3d5afe]"
                          ? "text-[#3d5afe]"
                          : "text-[#00bcd4]"
                      }`}
                    >
                      {step.phase} • {step.duration}
                    </div>
                    <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                    <ul className="space-y-2">
                      {step.activities.map((activity, i) => (
                        <li key={i} className="flex items-start text-[#b0b0ff]">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                              step.color === "bg-[#3d5afe]"
                                ? "bg-[#3d5afe]"
                                : "bg-[#00bcd4]"
                            }`}
                          ></div>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* **Final CTA – Glowing Effect** */}
      <section className="py-32 px-6 sm:px-12 bg-[#0a0a12] relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-[#3d5afe] opacity-10 blur-[100px]"></div>
        <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-[#00bcd4] opacity-10 blur-[100px]"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3d5afe] to-[#00bcd4]">
              Digital Transformation
            </span>
            ?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's build an intelligent ERP system that becomes your competitive
            advantage.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#3d5afe] to-[#00bcd4] text-white font-semibold py-4 px-12 rounded-lg hover:shadow-[0_0_30px_-5px_rgba(61,90,254,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              Start Your ERP Journey
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceERP;
