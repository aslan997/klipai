import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  width?: string;
  height?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  className?: string;
  onClick?: () => void;
}
