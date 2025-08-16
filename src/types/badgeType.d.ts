export interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  height?: number;
  width?: number;
  onClick?: () => void;
  textSize?: string;
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
}
