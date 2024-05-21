"use client"
import { useState, useEffect } from 'react';

interface CarouselProps {
  images: { src: string; alt: string }[];
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [images.length, interval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 flex justify-between items-center z-10">
        <button
          onClick={prevSlide}
          className="bg-gray-900 text-white p-2 bg-opacity-50 hover:bg-opacity-75 transition z-20">
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-gray-900 text-white p-2 bg-opacity-50 hover:bg-opacity-75 transition z-20">
          &#10095;
        </button>
      </div>
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative h-full p-2">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded-lg border-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;