import { Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import {sliderImages} from "../../../../../t-scanning/src/app/constants/LandingPageData"


export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  const handleSwipeRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') handleSwipeLeft();
    if (event.key === 'ArrowLeft') handleSwipeRight();
  };
  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, []);


  return (
    <Box
      {...handlers}
      className="relative w-full h-[40vh] overflow-hidden"
      style={{ touchAction: 'pan-y' }}
    >
      <div className="w-full h-full">
        <img
          src={sliderImages[currentIndex]}
          alt={`Slide ${currentIndex}`}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl transition-transform duration-500"
        />
      </div>
      <Box className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {sliderImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === index ? 'bg-[#F1414F] w-6' : 'bg-gray-300 w-3'
            }`}
          />
        ))}
      </Box>
    </Box>
  );
}

export default ImageSlider;
