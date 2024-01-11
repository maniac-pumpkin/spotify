import { InputHTMLAttributes } from "react";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fullWidth?: boolean;
}

function Input({ className, fullWidth, ...props }: Iinput) {
  return (
    <input
      className={`h-4 rounded-md bg-slateGray px-2 text-sm outline-none placeholder:text-silverGray focus:outline-2 focus:outline-green md:h-5 md:px-4 md:text-md ${className} ${
        fullWidth && "w-full"
      }`}
      {...props}
    />
  );
}

export default Input;
