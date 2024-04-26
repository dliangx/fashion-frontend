// Carousel.tsx
import React, { useState, useRef } from "react";
import { ImageSlide } from "../data/Product";

const Carousel: React.FC<{ images: ImageSlide[] }> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);
  const isDragging = useRef(false);
  let dx = 0;
  const slideWidth = carouselRef.current ? carouselRef.current.offsetWidth : 0;

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
    isDragging.current = false;
  };

  const dragStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      touchStartX.current = e.touches[0].clientX;

      isDragging.current = true;
    }
  };

  const dragMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      dx = e.touches[0].clientX - touchStartX.current;
      if (carouselRef.current != null)
        carouselRef.current.style.transform = `translateX( ${
          dx - currentIndex * slideWidth
        }px)`;
    }
  };

  const dragEnd = () => {
    if (isDragging.current) {
      const threshold = slideWidth / 3;

      if (Math.abs(dx) > threshold) {
        setCurrentIndex(
          (prevIndex) => (prevIndex + (dx > 0 ? -1 : 1)) % images.length
        );
      }
      if (carouselRef.current != null)
        carouselRef.current.style.transform = `translateX(-${
          currentIndex * slideWidth
        }px)`;
      if (carouselRef.current != null)
        carouselRef.current.style.transition = "transform 0.5s ease-out";
    }
    isDragging.current = false;
  };

  return (
    <div className=" relative w-full overflow-hidden">
      <div
        ref={carouselRef}
        onTouchStart={dragStart}
        onTouchMove={dragMove}
        onTouchEnd={dragEnd}
        className="flex transition duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((slide, index) => (
          <div
            key={index}
            className="flex-none w-full snap-center"
            onClick={() => goToSlide((index + 1) % images.length)}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
