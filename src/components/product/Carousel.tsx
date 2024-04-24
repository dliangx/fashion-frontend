// Carousel.tsx
import React, { useState, useEffect } from "react";
import { ImageSlide } from "../data/Product";

const Carousel: React.FC<{ images: ImageSlide[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className=" relative w-full overflow-hidden">
      <div
        className="flex transition duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide) => (
          <img src={slide.src} alt={slide.alt} className="w-full" />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
