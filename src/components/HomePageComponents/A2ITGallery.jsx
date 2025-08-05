import { useState } from "react";
import {
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Download,
  Share2,
  ExternalLink,
  Github,
} from "lucide-react";

export default function A2ITGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const projects = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      alt: "E-commerce Platform",
      title: "E-commerce Platform - TechMart",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg",
      alt: "Mobile Banking App",
      title: "Mobile Banking Application",
      description:
        "Secure banking app with biometric authentication and real-time transaction processing",
      tech: ["React Native", "Firebase", "Biometrics"],
      category: "Mobile Development",
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg",
      alt: "AI Analytics Dashboard",
      title: "AI-Powered Analytics Dashboard",
      description:
        "Machine learning dashboard providing predictive analytics and business intelligence insights",
      tech: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
      category: "Data Science",
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      alt: "Healthcare Management System",
      title: "Healthcare Management System",
      description:
        "Comprehensive patient management system with appointment scheduling and medical records",
      tech: ["Vue.js", "Laravel", "MySQL", "WebRTC"],
      category: "Healthcare Tech",
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      alt: "Cloud Infrastructure",
      title: "Cloud Infrastructure Automation",
      description:
        "DevOps solution for automated deployment and scaling using Kubernetes and Docker",
      tech: ["Kubernetes", "Docker", "AWS", "Terraform"],
      category: "DevOps",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      alt: "Design System",
      title: "Enterprise Design System",
      description:
        "Comprehensive design system with reusable components and design tokens for large-scale applications",
      tech: ["Figma", "Storybook", "React", "Sass"],
      category: "UI/UX Design",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      alt: "Blockchain Platform",
      title: "Blockchain Trading Platform",
      description:
        "Secure cryptocurrency trading platform with real-time market data and advanced charting",
      tech: ["Solidity", "Web3.js", "React", "Node.js"],
      category: "Blockchain",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      alt: "IoT Dashboard",
      title: "IoT Monitoring Dashboard",
      description:
        "Real-time IoT device monitoring and control system for smart building management",
      tech: ["MQTT", "InfluxDB", "Grafana", "Python"],
      category: "IoT Solutions",
    },
    {
      id: 9,
      src: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      alt: "Learning Management System",
      title: "AI-Enhanced Learning Platform",
      description:
        "Personalized learning platform with AI-driven content recommendations and progress tracking",
      tech: ["Next.js", "Python", "OpenAI", "PostgreSQL"],
      category: "EdTech",
    },
    {
      id: 10,
      src: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      alt: "Cybersecurity Suite",
      title: "Enterprise Security Suite",
      description:
        "Comprehensive cybersecurity solution with threat detection and automated response systems",
      tech: ["Python", "Elasticsearch", "Kibana", "Docker"],
      category: "Cybersecurity",
    },
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % projects.length);
    }
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? projects.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const ProjectCard = ({ project, index }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#1c1c1c] h-full">
      <div className="relative overflow-hidden">
        <img
          src={project.src}
          alt={project.alt}
          className={`w-full ${
            index === 0 || index === 5 || index === 8 || index === 9
              ? "h-[543.98px]"
              : "h-64"
          } object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm`}
        />

        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-blue-600/90 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          {project.category}
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            <h3 className="font-bold text-lg mb-2">{project.title}</h3>
            <p className="text-sm text-gray-200 line-clamp-2 mb-3">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tech.slice(0, 3).map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-all duration-200">
                <Github className="w-4 h-4" />
                Code
              </button>
              <button className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-3 py-1 rounded-md text-sm backdrop-blur-sm transition-all duration-200">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </button>
            </div>
          </div>
        </div>

        {/* View Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => openModal(index)}
            className="bg-white/90 text-black hover:bg-white transform scale-0 group-hover:scale-100 transition-all duration-300 shadow-xl backdrop-blur-sm px-6 py-3 rounded-lg font-medium flex items-center gap-2"
          >
            <Eye className="w-5 h-5" />
            View Project
          </button>
        </div>

        {/* Project Number Badge */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          {index + 1}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <section className="py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 px-4 lg:px-0">
            <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              PROJECT SHOWCASE
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-5xl mx-auto leading-relaxed text-justify">
              Explore our portfolio of innovative software solutions. From
              cutting-edge web applications to mobile apps and AI-powered
              systems, each project represents our commitment to excellence and
              technological innovation in delivering transformative digital
              experiences
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`${
                  index === 1 || index === 4 || index === 8 ? "col-span-2" : ""
                } ${
                  index === 5 || index === 0 || index === 8 || index === 9
                    ? "row-span-2"
                    : ""
                }`}
              >
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Modal */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 z-10 backdrop-blur-sm px-3 py-2 rounded-md flex items-center gap-2"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 z-10 backdrop-blur-sm p-3 rounded-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 z-10 backdrop-blur-sm p-3 rounded-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Project Counter */}
          <div className="absolute top-6 left-6 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
            {selectedImageIndex + 1} / {projects.length}
          </div>

          {/* Action Buttons */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <Github className="w-4 h-4" />
              View Code
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm px-4 py-2 rounded-md flex items-center gap-2">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Main Image */}
          <div className="relative max-w-7xl max-h-[80vh] mx-4">
            <img
              src={projects[selectedImageIndex].src}
              alt={projects[selectedImageIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />

            {/* Project Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                  {projects[selectedImageIndex].category}
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">
                {projects[selectedImageIndex].title}
              </h3>
              <p className="text-gray-200 text-sm mb-3">
                {projects[selectedImageIndex].description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects[selectedImageIndex].tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 text-white px-2 py-1 rounded text-xs backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 max-w-md overflow-x-auto pb-2">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setSelectedImageIndex(index)}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                  index === selectedImageIndex
                    ? "border-white shadow-lg scale-110"
                    : "border-white/30 hover:border-white/60"
                }`}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
