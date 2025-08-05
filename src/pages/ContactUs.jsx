import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiClock,
  FiSearch,
} from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";
import { OpenStreetMapProvider } from "leaflet-geosearch";

// Fix marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const officePosition = [23.836236, 90.358672];
const officeAddress =
  "Plot No 470, Road No 06 (Old 29), DOHS Mirpur, Dhaka Division, Bangladesh";

const SectionHeader = ({ icon, title }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a12] via-[#12121a] to-[#0a0a12] rounded-t-xl border-b border-[#00f0ff]/30"></div>
    <div className="relative z-10 py-5 px-8 flex items-center gap-3">
      <div className="text-[#00f0ff] text-xl group-hover:text-white transition-colors">
        {icon}
      </div>
      <h2 className="text-xl font-bold tracking-wide group-hover:text-white transition-colors">
        {title}
      </h2>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

const MapWithSearch = ({ position, setPosition }) => {
  const map = useMap();
  const [searchQuery, setSearchQuery] = useState("");
  const provider = new OpenStreetMapProvider();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    const results = await provider.search({ query: searchQuery });
    if (results.length > 0) {
      const { x: lng, y: lat } = results[0];
      setPosition([lat, lng]);
      map.flyTo([lat, lng], 16);
    }
  };

  return (
    <div className="leaflet-top leaflet-right">
      <div className="leaflet-control leaflet-bar p-2 bg-[#12121a] rounded-lg shadow-lg border border-[#00f0ff]/20">
        <form onSubmit={handleSearch} className="flex items-center">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location..."
            className="px-3 py-2 w-48 bg-[#0e0e15] border-0 text-[#e0e0ff] rounded-l focus:outline-none focus:ring-2 focus:ring-[#00f0ff] placeholder-[#b0b0ff]/50"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white px-4 py-2 rounded-r hover:opacity-90 transition-all"
          >
            <FiSearch />
          </button>
        </form>
      </div>
    </div>
  );
};

const ContactUs = () => {
  const [position, setPosition] = useState(officePosition);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      console.log(formData);
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#0a0a12] text-[#e0e0ff] min-h-screen">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00f0ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-60 right-32 w-64 h-64 bg-[#0066ff] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-24">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#0066ff]">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl text-[#b0b0ff] max-w-2xl mx-auto">
            Have questions or want to discuss a project? We'd love to hear from
            you.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#12121a] rounded-xl shadow-xl overflow-hidden border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors"
          >
            <SectionHeader icon={<FiMapPin />} title="Contact Information" />

            <div className="p-8 space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-[#0e0e15] p-3 rounded-xl text-[#00f0ff] flex-shrink-0">
                  <FiMapPin className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Our Address</h3>
                  <p className="text-[#b0b0ff]">{officeAddress}</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#0e0e15] p-3 rounded-xl text-[#00f0ff] flex-shrink-0">
                  <FiPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Phone Number</h3>
                  <p className="text-[#b0b0ff]">(+880) 1234 567890</p>
                  <p className="text-[#b0b0ff]">(+880) 9876 543210</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#0e0e15] p-3 rounded-xl text-[#00f0ff] flex-shrink-0">
                  <FiMail className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Address</h3>
                  <p className="text-[#b0b0ff]">info@example.com</p>
                  <p className="text-[#b0b0ff]">support@example.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-[#0e0e15] p-3 rounded-xl text-[#00f0ff] flex-shrink-0">
                  <FiClock className="text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Working Hours</h3>
                  <p className="text-[#b0b0ff]">Monday - Friday: 9AM - 6PM</p>
                  <p className="text-[#b0b0ff]">Saturday: 10AM - 4PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-[#12121a] rounded-xl shadow-xl overflow-hidden border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors"
          >
            <SectionHeader icon={<FiSend />} title="Send Us a Message" />

            <form onSubmit={handleSubmit} className="p-8">
              <div className="space-y-6">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-[#b0b0ff] font-medium"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#00f0ff]">
                      <FiUser />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="pl-10 w-full px-4 py-3 bg-[#0e0e15] border border-[#00f0ff]/20 text-[#e0e0ff] rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-[#00f0ff] outline-none transition-all placeholder-[#b0b0ff]/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-[#b0b0ff] font-medium"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#00f0ff]">
                      <FiMail />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="pl-10 w-full px-4 py-3 bg-[#0e0e15] border border-[#00f0ff]/20 text-[#e0e0ff] rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-[#00f0ff] outline-none transition-all placeholder-[#b0b0ff]/50"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="phone"
                    className="block text-[#b0b0ff] font-medium"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#00f0ff]">
                      <FiPhone />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1234 567890"
                      className="pl-10 w-full px-4 py-3 bg-[#0e0e15] border border-[#00f0ff]/20 text-[#e0e0ff] rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-[#00f0ff] outline-none transition-all placeholder-[#b0b0ff]/50"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-[#b0b0ff] font-medium"
                  >
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-[#00f0ff]">
                      <FiMessageSquare />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Write your message here..."
                      className="pl-10 w-full px-4 py-3 bg-[#0e0e15] border border-[#00f0ff]/20 text-[#e0e0ff] rounded-lg focus:ring-2 focus:ring-[#00f0ff] focus:border-[#00f0ff] outline-none transition-all placeholder-[#b0b0ff]/50"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-[#00f0ff] to-[#0066ff] text-white font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_-5px_rgba(0,240,255,0.5)] transition-all duration-300 transform hover:scale-[1.01] ${
                    isSubmitting ? "opacity-80" : "hover:opacity-90"
                  }`}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend className="inline mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[#12121a] rounded-xl shadow-xl overflow-hidden border border-[#00f0ff]/20 hover:border-[#00f0ff]/50 transition-colors"
        >
          <SectionHeader icon={<FiMapPin />} title="Find Us on Map" />

          <div className="h-96 w-full relative">
            <MapContainer
              center={position}
              zoom={16}
              scrollWheelZoom={true}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position}>
                <Popup>
                  <div className="font-medium">
                    <h3 className="text-[#00f0ff] font-bold mb-1">
                      Our Office
                    </h3>
                    <p className="text-gray-700">{officeAddress}</p>
                  </div>
                </Popup>
              </Marker>
              <MapWithSearch position={position} setPosition={setPosition} />
            </MapContainer>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
