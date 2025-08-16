// FeatureGrid.tsx
import React from "react";
import Card from "./Card";
import Image from "next/image";
import { CardData } from "@/types/cardType";

// Assuming images are stored in public/images folder
const cardData: CardData[] = [
  {
    title: "Token Support",
    imageUrl: "/images/mobile.png",
    showAddIcon: true,
    isFeatured: true,
  },
  {
    title: "Secure Transfers",
    imageUrl: "/images/card.png",
    showAddIcon: false,
    isFeatured: false,
  },
  {
    title: "",
    imageUrl: "/images/performance.svg",
    showAddIcon: true,
    isFeatured: false,
  },
  {
    title: "",
    imageUrl: "/images/current-balance.svg",
    showAddIcon: true,
    isFeatured: false,
  },
  {
    title: "Unique Identity",
    imageUrl: "/images/exchange.svg",
    showAddIcon: true,
    isFeatured: false,
  },
];

const FeatureGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className={`relative bg-[#151515] text-white rounded-[20px] p-[35px] relative overflow-hidden ${
            card.isFeatured ? "md:row-span-2" : ""
          }`}
        >
          {card?.showAddIcon && (
            <div className="absolute top-[25px] right-[25px]">
              <Image
                src="/icons/add-icon.svg"
                alt="Feature Icon"
                width={35}
                height={35}
              />
            </div>
          )}
          {card.isFeatured && (
            <Image
              src="/icons/token-icon.svg"
              alt="Feature Icon"
              width={55}
              height={55}
              className="mb-2"
            />
          )}
          <h3
            className={`text-[36px] leading-heading font-[var(--font-weight-body)] mb-4 ${
              card.isFeatured ? "text-left" : "text-center"
            }`}
          >
            {card.title ? card.title : ""}
          </h3>
          {card.imageUrl && (
            <div
              className={`relative w-full rounded-lg overflow-hidden ${
                card.isFeatured ? "h-[730px] z-[1]" : "h-[330px]"
              }`}
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                fill
                style={{ objectFit: "contain" }}
                priority={true}
              />
            </div>
          )}
          {card.isFeatured && (
            <div className="absolute bottom-0 left-0 w-full h-[100px]">
              <Image
                src="/images/bars.svg"
                alt="Arrow Icon"
                fill
                style={{ objectFit: "contain" }}
                priority={true}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
