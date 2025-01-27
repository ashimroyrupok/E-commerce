"use client";
import type React from "react";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import banner1 from "@/assests/banner1.jpg";
import banner2 from "@/assests/banner2.jpg";
import banner3 from "@/assests/banner3.jpg";
import banner4 from "@/assests/banner4.jpg";

const slides = [
  {
    image: banner1,
  },
  {
    image: banner2,
  },
  {
    image: banner3,
  },
  {
    image: banner4,
  },
];

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative max-w-6xl mt-1 group mx-auto h-full w-full overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrevSlide}
        className="absolute invisible group-hover:visible left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={handleNextSlide}
        className="absolute invisible group-hover:visible right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/75 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slider */}
      <div ref={sliderRef} className="relative w-full h-full select-none">
        <div
          className={`flex w-full h-full transition-transform duration-500 `}
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide, idx) => (
            <div key={idx} className="min-w-full  h-80 w-[988px] relative">
              <Image
                fill
                className=" object-contain lg:object-cover "
                alt={`Banner image ${idx + 1}`}
                src={slide.image}
                // sizes="988px"
                // priority={idx === 0}
              />
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeSlide ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
     
    </div>
  );
};

export default Banner;
