import { InputHTMLAttributes, useId } from "react";

interface Iinput extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  fullWidth?: boolean;
  label?: string;
  variant?: "normal" | "classic";
}

function Input({
  className,
  fullWidth,
  variant = "normal",
  label,
  ...props
}: Iinput) {
  const inputId = useId();

  if (variant === "normal")
    return (
      <input
        className={`h-4 rounded-md bg-slateGray px-2 text-sm outline-none placeholder:text-silverGray focus:outline-2 focus:outline-green md:h-5 md:px-4 md:text-md ${className} ${
          fullWidth && "w-full"
        }`}
        {...props}
      />
    );

  if (variant === "classic")
    return (
      <div className="w-full">
        <label htmlFor={inputId} className="mb-1 block text-silverGray">
          {label}
        </label>
        <input
          className={`h-4 w-full rounded-md bg-slateGray px-2 text-sm outline-none placeholder:text-silverGray focus:outline-2 focus:outline-green md:h-5 md:px-4 md:text-md ${className}`}
          {...props}
          id={inputId}
        />
      </div>
    );
}

export default Input;
