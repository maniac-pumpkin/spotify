import { InputHTMLAttributes } from "react";

interface IrangeSlider extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function RangeSlider({ className, ...props }: IrangeSlider) {
  return (
    <input
      type="range"
      style={{
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none",
        height: "0.5rem",
        outline: "none",
        borderRadius: "100rem",
        background: `linear-gradient(to right, #FEFEFE 0%, #FEFEFE ${props.value}%, #9C9C9C ${props.value}%, #9C9C9C 100%)`,
        cursor: "ew-resize",
      }}
      className={`${className}
    [&::-webkit-slider-thumb]:h-1.2
    [&::-webkit-slider-thumb]:w-1.2
    [&::-webkit-slider-thumb]:appearance-none
    [&::-webkit-slider-thumb]:rounded-full
    [&::-webkit-slider-thumb]:bg-pureWhite
    `}
      min="0"
      step="1"
      max="100"
      {...props}
    />
  );
}

export default RangeSlider;
