// FeatureGrid.tsx
import React from "react";
import Card from "./Card";
import Image from "next/image";
import { CardData } from "@/types/cardType";

// Assuming images are stored in public/images folder
const cardData: CardData[] = [
  {
    title: "Token Support",
    imageUrl: "",
  },
  {
    title: "Secure Transfers",
    imageUrl: "/images/card.svg",
  },
  {
    title: "",
    imageUrl: "/images/performance.svg",
  },
  {
    title: "",
    imageUrl: "/images/current-balance.svg",
  },
  {
    title: "Unique Identity",
    imageUrl: "/images/exchange.svg",
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`bg-[#151515] text-white rounded-[20px] p-[35px] relative ${
            index === 0 ? "md:row-span-2" : ""
          }`}
        >
          <div className="absolute top-[25px] right-[25px]">
            <Image
              src="/icons/add-icon.svg"
              alt="Feature Icon"
              width={35}
              height={35}
            />
          </div>
          <h3 className="text-heading-md text-center md:text-heading-sm leading-heading font-[var(--font-weight-body)] mb-4">
            {card.title ? card.title : ""}
          </h3>
          {card.imageUrl && (
            <div className="relative w-full h-[330px] rounded-lg overflow-hidden">
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: "contain" }}
                priority={true} // optional, for important images
                // width={230}
                // height={330}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
