import React, { useEffect, useRef, useState } from "react";
import bg1 from "../../assets/backgroundImg/bg3.jpg";
import bg2 from "../../assets/backgroundImg/bg2.jpg";
import bg3 from "../../assets/backgroundImg/bg1.jpg";

const images = [bg1, bg2, bg3];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds
  };

  const stopAutoSlide = () => {
    clearInterval(slideInterval.current);
  };

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-400 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover animate-zoomOut"
          />
        </div>
      ))}

      {/* Overlay Text Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center  text-center px-4  bg-opacity-70">
        <h1 className="text-4xl text-[#f36e27] md:text-5xl font-bold mb-2">
          Your Power To make Great Software
        </h1>
        <p className="text-xl text-black md:text-2xl italic mb-4">
          "We appreciate your concern"
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
