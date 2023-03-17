import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SliderData } from "./SliderData";

const leftArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    />
  </svg>
);

const rightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);

export default function Cards({ animationTime = 2500 }) {
  const [current, setCurrent] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const len = SliderData.length;
  const rightAnimation = { x: "100%" };
  const leftAnimation = { x: "-100%" };

  function prevSlide() {
    setCurrent(current === 0 ? len - 1 : current - 1);
  }

  function nextSlide() {
    setCurrent(current === len - 1 ? 0 : current + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        isNext ? nextSlide() : prevSlide();
      }, animationTime / 2);
    }, animationTime);
    return () => clearInterval(interval);
  });
  return (
    <div className="carousel flex items-center justify-center text-[#E9E8E8] overflow-hidden select-none">
      {
        // Pre Caching Images
        SliderData.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={"image-" + (index + 1)}
            style={{ display: "none" }}
          />
        ))
      }
      <div
        className="relative slider w-full lg:w-[85%] xl:w-[79%] saturate-150 aspect-video text-[#E9E8E8]"
      >
        <div
          className="absolute top-[calc(50%-20px)] p-1 z-10 left-3 md:left-5 bg-[#20262E] hover:scale-115 ease-out duration-500 sm:p-2 rounded-[50%]"
          onClick={() => {
            setTimeout(() => {
              setIsNext(false);
              prevSlide();
            }, 10 / 2);
          }}
        >
          {leftArrow()}
        </div>
        <div
          className="absolute top-[calc(50%-20px)] p-1 z-10 right-3 md:right-5 bg-[#20262E] hover:scale-115 ease-out duration-500 sm:p-2 rounded-[50%]"
          onClick={() => {
            setIsNext(true);
            setTimeout(() => {
              nextSlide();
            }, 10 / 2);
          }}
        >
          {rightArrow()}
        </div>
        <motion.div
          key={current}
          className="w-full aspect-video relative flex justify-center gap-2"
          // Left to Right
          initial={isNext ? rightAnimation : leftAnimation}
          animate={{ x: 0 }}
          exit={isNext ? leftAnimation : rightAnimation}
          transition={{ duration: 0.5 }}
        >
          <img
            src={SliderData[current === 0 ? len - 1 : current - 1].image}
            alt={"image-" + (current === 0 ? len - 1 : current - 1)}
            className="next-image w-full aspect-video object-cover rounded-2xl"
          />
          <img
            src={SliderData[current].image}
            alt={"image-" + current}
            className="current-image w-full aspect-video object-cover rounded-2xl"
          />
          <img
            src={SliderData[current === len - 1 ? 0 : current + 1].image}
            alt={`image-${current === len - 1 ? 0 : current + 1}`}
            className="prev-image w-full aspect-video object-cover rounded-2xl"
          />
        </motion.div>
        <div className="button w-full flex justify-center pt-4 p-2 gap-2">
          {SliderData.map((_, index) => (
            <input
              type="radio"
              key={index}
              name="image-button"
              className="h-4 w-4 text-[#0047ab] rounded-full border-2 border-[#0a87c2] focus:outline-none focus:ring-2 focus:ring-[#0047ab]"
              onClick={() => setCurrent(index)}
              {...(current === index && { checked: true })}
            ></input>
          ))}
        </div>
      </div>
    </div>
  );
}
