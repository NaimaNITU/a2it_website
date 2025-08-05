import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiCode,
  FiLayers,
  FiMonitor,
  FiSmartphone,
  FiShoppingCart,
} from "react-icons/fi";

const ServiceWebDev = () => {
  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a12] via-transparent to-[#0a0a12]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold mb-8 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
                Web Design & Development
              </span>
            </h1>
            <p className="text-xl text-[#b0b0ff] max-w-3xl mx-auto mb-12">
              We craft beautiful, high-performance websites that drive
              measurable business results through strategic design and
              cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="relative overflow-hidden group bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-semibold py-5 px-10 rounded-full shadow-xl hover:shadow-[0_5px_30px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Free Consultation{" "}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff] to-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Showcase Section */}
      <section className="py-20 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-[#00f0ff]">Our</span> Web Projects
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              See our successful website designs and development work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                image:
                  "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "E-Commerce Platform",
                category: "Online Store",
              },
              {
                id: 2,
                image:
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Corporate Website",
                category: "Business Site",
              },
              {
                id: 3,
                image:
                  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Dashboard UI",
                category: "Web Application",
              },
              {
                id: 4,
                image:
                  "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Portfolio Design",
                category: "Creative Website",
              },
              {
                id: 5,
                image:
                  "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Blog Platform",
                category: "CMS Development",
              },
              {
                id: 6,
                image:
                  "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
                title: "Mobile Web App",
                category: "PWA",
              },
            ].map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#00f0ff]/20"
              >
                {/* Project Thumbnail */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold bg-[#00f0ff] text-[#0a0a12] rounded-full">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#e0e0ff]">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* View Project Link (invisible overlay) */}
                <Link
                  to={`/portfolio/${project.id}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${project.title} project details`}
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/portfolio"
              className="inline-flex items-center border-2 border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-[#0a0a12] font-semibold py-3 px-8 rounded-full transition-colors duration-300 group"
            >
              View All Projects
              <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-28 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              Comprehensive Web Solutions
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              End-to-end services tailored to your business objectives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiMonitor className="text-3xl text-[#00f0ff]" />,
                title: "Custom Web Design",
                description:
                  "Bespoke designs that reflect your brand identity and engage your audience",
                features: [
                  "UI/UX Design",
                  "Wireframing",
                  "Prototyping",
                  "Brand Integration",
                ],
              },
              {
                icon: <FiCode className="text-3xl text-[#00f0ff]" />,
                title: "Web Development",
                description:
                  "High-performance websites built with modern technologies",
                features: [
                  "React/Next.js",
                  "Node.js",
                  "Headless CMS",
                  "API Integration",
                ],
              },
              {
                icon: <FiSmartphone className="text-3xl text-[#00f0ff]" />,
                title: "Mobile Optimization",
                description:
                  "Flawless experiences across all devices and screen sizes",
                features: [
                  "Responsive Design",
                  "PWA",
                  "Touch Optimization",
                  "Performance Tuning",
                ],
              },
              {
                icon: <FiShoppingCart className="text-3xl text-[#00f0ff]" />,
                title: "E-Commerce Solutions",
                description:
                  "High-converting online stores with seamless checkout",
                features: [
                  "Shopify",
                  "WooCommerce",
                  "Payment Gateways",
                  "Inventory Management",
                ],
              },
              {
                icon: <FiLayers className="text-3xl text-[#00f0ff]" />,
                title: "CMS Development",
                description:
                  "Easy-to-manage websites with powerful content systems",
                features: ["WordPress", "Strapi", "Custom CMS", "User Roles"],
              },
              {
                icon: <FiCheck className="text-3xl text-[#00f0ff]" />,
                title: "Website Maintenance",
                description:
                  "Ongoing support to keep your site secure and updated",
                features: [
                  "Security Updates",
                  "Performance Optimization",
                  "Content Updates",
                  "Backups",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#12121a] p-8 rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#0a0a12] rounded-lg flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-[#b0b0ff] mb-5">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <FiCheck className="text-[#00f0ff] mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-28 px-6 sm:px-12 bg-[#12121a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-[#00f0ff] font-semibold tracking-widest text-sm">
              OUR PROCESS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-6">
              How We Build Success
            </h2>
            <p className="text-[#b0b0ff] max-w-2xl mx-auto">
              A proven methodology that delivers exceptional results
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden md:block absolute left-16 right-16 top-1/2 h-1 bg-[#12121a]"></div>
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  title: "Discovery",
                  description: "Understanding your goals and requirements",
                },
                {
                  step: "02",
                  title: "Design",
                  description: "Creating wireframes and visual concepts",
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Building with clean code and modern tech",
                },
                {
                  step: "04",
                  title: "Delivery",
                  description: "Testing, optimization and launch",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-[#12121a] p-8 rounded-xl border border-[#00f0ff]/20 hover:border-[#00f0ff] transition-colors duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#00f0ff] to-[#0066ff] rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {item.step}
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#b0b0ff]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 sm:px-12 bg-gradient-to-br from-[#0a0a12] via-[#12121a] to-[#0a0a12]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl font-bold mb-6"
          >
            Ready to <span className="text-[#00f0ff]">Transform</span> Your
            Digital Presence?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-[#b0b0ff] mb-8 max-w-2xl mx-auto"
          >
            Let's discuss how we can create a website that drives real business
            results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-[#0a0a12] font-semibold py-5 px-12 rounded-full shadow-xl hover:shadow-[0_5px_30px_rgba(0,240,255,0.4)] transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
              <FiArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceWebDev;
