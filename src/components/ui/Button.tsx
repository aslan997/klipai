import { ButtonProps } from "@/types/buttonType";
import clsx from "clsx";

const baseStyles =
  "items-center justify-center font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

const variantStyles = {
  primary: "bg-[#00FF66] text-black hover:bg-[#00e65c] focus:ring-[#00FF66]",
  secondary: "bg-black text-white hover:bg-gray-900 focus:ring-black",
  outline:
    "border border-black text-black hover:bg-black hover:text-white focus:ring-black",
};

const sizeStyles = {
  sm: "px-4 py-2 text-[14px]",
  md: "px-6 py-3 text-[14px]",
  lg: "px-10.5 py-4 text-[14px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft,
  iconRight,
  width,
  height,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        width && `w-[${width}px]`,
        height && `h-[${height}px]`,
        (iconLeft || iconRight) && "inline-flex",
        className
      )}
    >
      {iconLeft && <span className="mr-4">{iconLeft}</span>}
      {children}
      {iconRight && <span className="ml-4">{iconRight}</span>}
    </button>
  );
}
