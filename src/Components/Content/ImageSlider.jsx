import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "40%",
  transform: "translateX(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "40%",
  transform: "translateX(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#fff",
  zIndex: 1,
  cursor: "pointer",
  transition: '0.25s',
};

const sliderStyles = {
  position: "relative",
  height: "100%",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "8px 5px",
  cursor: "pointer",
};


const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  useEffect(() => {
    let intervalId;

    // Automatically go to the next slide every 2 seconds
    intervalId = setInterval(goToNext, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            <Box sx={{
              width: "0.8em",
              height: "0.8em",
              background: (slideIndex === currentIndex) ? '#fff' : 'gray',
              borderRadius: '50%',
            }}></Box>
          </div>
        ))}
      </div>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', position: 'absolute', bottom: '1em', margin: '0 auto' }}>
        <Button variant="contained" color="warning">Get Started</Button>
      </Box>

    </div>
  );
};

export default ImageSlider;