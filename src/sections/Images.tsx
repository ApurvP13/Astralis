import { useState } from "react";
import { LuCircleArrowLeft, LuCircleArrowRight } from "react-icons/lu";

const images = [
  "/images/black-pic.png",
  "/images/mars-pic.png",
  "/images/saturn-pic.png",
  "/images/sun-pic.png",
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-[url('./images/star-bg.png')] bg-cover font-display w-full max-w-3xl mx-auto overflow-hidden rounded-xl mt-12 md:mt-16 py-20">
      <h2 className="text-gradient text-xl md:text-3xl mb-10">
        Snapshots Of Our Recent Trips <span className="text-white">📸</span>
      </h2>
      {/* Slider container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            className="w-full flex-shrink-0 object-cover h-64 md:h-96"
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-slate-400 p-2 rounded-full hover:bg-black/70 transition"
      >
        <LuCircleArrowLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-slate-400 p-2 rounded-full hover:bg-black/70 transition"
      >
        <LuCircleArrowRight />
      </button>
    </div>
  );
};

export default ImageSlider;
