import { BadgeProps } from "@/types/badgeType";
import React from "react";
import clsx from "clsx";

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  onClick,
  textSize = "text-body-lg",
  textColor = "text-[#000]",
  bgColor = "bg-[#E6F9E6]",
  borderColor = "border-[#119200]",
}) => (
  <span
    className={clsx(
      "inline-flex items-center justify-center font-[var(--font-weight-heading)] rounded-full border px-3 py-1 cursor-default",
      textSize,
      textColor,
      bgColor,
      borderColor,
      onClick && "cursor-pointer hover:opacity-90 transition",
      className
    )}
    onClick={onClick}
  >
    {children}
  </span>
);

export default Badge;
