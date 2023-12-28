import { InputHTMLAttributes, CSSProperties } from "react";

interface IrangeSlider extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

function RangeSlider({ className, ...props }: IrangeSlider) {
  const styles: CSSProperties = {
    WebkitAppearance: "none",
    MozAppearance: "none",
    appearance: "none",
    height: "0.5rem",
    outline: "none",
    borderRadius: "100rem",
    background: `linear-gradient(to right, #FEFEFE 0%, #FEFEFE ${props.value}%, #9C9C9C ${props.value}%, #9C9C9C 100%)`,
    cursor: "ew-resize",
  };

  return (
    <input
      type="range"
      className={`thumb ${className}`}
      style={styles}
      {...props}
    />
  );
}

export default RangeSlider;
