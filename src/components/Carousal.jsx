import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import banner1 from "../assets/carousel/banner1.png";
import banner2 from "../assets/carousel/banner2.png";
import banner3 from "../assets/carousel/banner3.png";

const slides = [
  { id: 1, image: banner1 },
  { id: 2, image: banner2 },
  { id: 3, image: banner3 },
];

export default function Carousal() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative w-screen overflow-hidden">
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full">
            <img
              src={slide.image}
              alt=""
              className="w-full h-[240px] sm:h-[350px] md:h-[450px] lg:h-[520px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft size={26} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-3 rounded-full shadow-lg hover:scale-110 transition"
      >
        <ChevronRight size={26} />
      </button>

      {/* DOT INDICATORS */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
              current === index
                ? "w-6 bg-red-500"
                : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
