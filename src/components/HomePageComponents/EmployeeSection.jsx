import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Award,
  Target,
  Code,
  Database,
  Smartphone,
} from "lucide-react";

export default function EmployeeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef(null);

  const teamMembers = [
    {
      id: 1,
      name: "SARAH JOHNSON",
      number: "01",
      position: "Full Stack Developer",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
      stats: {
        projects: 45,
        experience: "5 Years",
        rating: "4.9/5",
      },
      description:
        "Expert in React, Node.js, and cloud architecture with a passion for scalable solutions",
      achievements: [
        "AWS Certified Solutions Architect",
        "Led 15+ Successful Projects",
        "Tech Innovation Award Winner",
      ],
      skills: ["React", "Node.js", "AWS", "MongoDB"],
    },
    {
      id: 2,
      name: "MICHAEL CHEN",
      number: "02",
      position: "DevOps Engineer",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      stats: {
        projects: 38,
        experience: "6 Years",
        rating: "4.8/5",
      },
      description:
        "Kubernetes and Docker specialist focused on CI/CD pipeline optimization",
      achievements: [
        "Kubernetes Certified Administrator",
        "Reduced Deployment Time by 70%",
        "DevOps Excellence Award",
      ],
      skills: ["Kubernetes", "Docker", "Jenkins", "Terraform"],
    },
    {
      id: 3,
      name: "EMILY RODRIGUEZ",
      number: "03",
      position: "UI/UX Designer",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
      stats: {
        projects: 52,
        experience: "4 Years",
        rating: "4.9/5",
      },
      description:
        "Creative designer specializing in user-centered design and modern interfaces",
      achievements: [
        "Adobe Certified Expert",
        "Design System Creator",
        "UX Innovation Award",
      ],
      skills: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    },
    {
      id: 4,
      name: "DAVID THOMPSON",
      number: "04",
      position: "Backend Developer",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
      stats: {
        projects: 41,
        experience: "7 Years",
        rating: "4.8/5",
      },
      description:
        "Python and Java expert with extensive experience in microservices architecture",
      achievements: [
        "Oracle Java Certified Professional",
        "Microservices Architecture Expert",
        "Performance Optimization Specialist",
      ],
      skills: ["Python", "Java", "Spring Boot", "PostgreSQL"],
    },
    {
      id: 5,
      name: "LISA WANG",
      number: "05",
      position: "Mobile Developer",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg",
      stats: {
        projects: 29,
        experience: "4 Years",
        rating: "4.7/5",
      },
      description:
        "React Native and Flutter specialist creating cross-platform mobile solutions",
      achievements: [
        "Google Flutter Certified",
        "App Store Featured Developer",
        "Mobile Innovation Award",
      ],
      skills: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      id: 6,
      name: "JAMES WILSON",
      number: "06",
      position: "Data Scientist",
      image:
        "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
      stats: {
        projects: 33,
        experience: "5 Years",
        rating: "4.9/5",
      },
      description:
        "Machine learning expert specializing in predictive analytics and AI solutions",
      achievements: [
        "TensorFlow Certified Developer",
        "Published 10+ Research Papers",
        "AI Excellence Award",
      ],
      skills: ["Python", "TensorFlow", "PyTorch", "SQL"],
    },
    {
      id: 7,
      name: "ANNA KOWALSKI",
      number: "07",
      position: "QA Engineer",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
      stats: {
        projects: 47,
        experience: "6 Years",
        rating: "4.8/5",
      },
      description:
        "Automation testing expert ensuring quality and reliability across all platforms",
      achievements: [
        "ISTQB Advanced Certified",
        "Test Automation Framework Creator",
        "Quality Assurance Excellence Award",
      ],
      skills: ["Selenium", "Cypress", "Jest", "TestNG"],
    },
    {
      id: 8,
      name: "ROBERT GARCIA",
      number: "08",
      position: "Cybersecurity Specialist",
      image:
        "https://images.pexels.com/photos/3184341/pexels-photo-3184341.jpeg",
      stats: {
        projects: 25,
        experience: "8 Years",
        rating: "4.9/5",
      },
      description:
        "Security expert protecting applications and infrastructure from cyber threats",
      achievements: [
        "CISSP Certified",
        "Prevented 50+ Security Breaches",
        "Cybersecurity Excellence Award",
      ],
      skills: ["Penetration Testing", "OWASP", "Firewall", "Encryption"],
    },
  ];

  const startAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
    }, 3000);
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
  }, [isAutoPlaying, teamMembers.length]);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const getVisibleMembers = () => {
    const visibleCount = 3;
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % teamMembers.length;
      result.push({ ...teamMembers[index], displayIndex: i });
    }
    return result;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            OUR EXPERT TEAM
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet our talented team of developers, designers, and tech experts
            who bring innovation, expertise, and dedication to every project
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-200 text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-gray-200 text-gray-800 shadow-xl rounded-full w-14 h-14 backdrop-blur-sm border-0 flex items-center justify-center transition-all duration-200"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Team Member Cards */}
          <div className="grid md:grid-cols-3 gap-8 px-16">
            {getVisibleMembers().map((member, index) => (
              <div
                key={`${member.id}-${currentIndex}`}
                className={`group relative overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm transform hover:scale-100 rounded-lg ${
                  index === 1 ? "md:scale-110 z-10" : "md:scale-95"
                }`}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="p-0">
                  {/* Member Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover transition-all duration-500 group-hover:scale-110"
                    />

                    {/* Member Number */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white">
                        {member.number}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-blue-400" />
                          <span className="text-sm font-medium">
                            {member.position}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold mb-2">
                          {member.name}
                        </h3>

                        <p className="text-sm text-gray-200 mb-4 leading-relaxed">
                          {member.description}
                        </p>

                        {/* Member Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">
                              {member.stats.projects}
                            </div>
                            <div className="text-xs text-gray-300">
                              Projects
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">
                              {member.stats.experience}
                            </div>
                            <div className="text-xs text-gray-300">
                              Experience
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-400">
                              {member.stats.rating}
                            </div>
                            <div className="text-xs text-gray-300">Rating</div>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-3">
                          {member.skills.slice(0, 3).map((skill, idx) => (
                            <span
                              key={idx}
                              className="text-xs bg-blue-600/80 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-1">
                          {member.achievements
                            .slice(0, 2)
                            .map((achievement, idx) => (
                              <span
                                key={idx}
                                className="text-xs bg-purple-600/80 text-white px-2 py-1 rounded-full backdrop-blur-sm"
                              >
                                {achievement}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Basic Info (Always Visible) */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {member.position}
                    </p>

                    {/* Tech Icons */}
                    <div className="flex justify-center gap-2 mt-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full">
                        <Code className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-2 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
                        <Database className="w-4 h-4 text-white" />
                      </div>
                      <div className="p-2 bg-gradient-to-r from-green-500 to-green-600 rounded-full">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
