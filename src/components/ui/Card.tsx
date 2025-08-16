import React from "react";
import { CardProps } from "@/types/cardType";

const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${className || ""}`}>{children}</div>;
};

export default Card;
