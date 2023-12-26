import { ButtonHTMLAttributes, ReactNode } from "react";

interface Tbutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  shape?: "circle" | "triangle" | "square" | "transparent";
  color?: "green" | "white";
}

function Button({
  className,
  shape,
  color,
  fullWidth,
  children,
  ...props
}: Tbutton) {
  const buttonShape =
    shape === "circle"
      ? "rounded-full w-3 h-3 md:w-4.5 md:h-4.5"
      : shape === "triangle"
        ? "rounded-md p-1 h-3 md:p-2 md:h-4.5"
        : shape === "square"
          ? "rounded-md w-3 h-3 md:w-4.5 md:h-4.5"
          : shape === "transparent"
            ? "w-fit h-fit"
            : "rounded-md p-1 h-3 md:p-2 md:h-4.5";

  const buttonColor =
    color === "white"
      ? "bg-pureWhite hover:bg-hoverWhite"
      : color === "green"
        ? "bg-green hover:bg-hoverGreen"
        : shape === "transparent"
          ? "bg-transparent"
          : "bg-pureWhite hover:bg-hoverWhite";

  return (
    <button
      className={`flex items-center justify-center font-bold text-pureBlack ${className} ${buttonShape} ${
        fullWidth && "w-full"
      } ${buttonColor} text-sm transition md:text-md`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
