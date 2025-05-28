"use client";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export const CustomSliderBtn = ({ swiper, containerStyles, btnStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.current?.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.current?.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};
