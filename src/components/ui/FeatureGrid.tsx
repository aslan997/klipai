// FeatureGrid.tsx
import React from "react";
import Card from "./Card";
import Image from "next/image";

interface CardData {
  title: string;
  imageUrl: string; // added imageUrl
  className?: string;
}

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
    title: "Performance",
    imageUrl: "/images/performance.svg",
  },
  {
    title: "Current Balance",
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
          className={`bg-[#151515] text-white rounded-[20px] p-4 ${
            index === 0 ? "md:row-span-2" : ""
          }`}
        >
          <h3 className="text-lg font-semibold mb-4">{card.title}</h3>
          {card.imageUrl && (
            <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden">
              <Image
                src={card.imageUrl}
                alt={card.title}
                // fill
                // style={{ objectFit: "cover" }}
                // priority={true} // optional, for important images
                width={230}
                height={330}
              />
            </div>
          )}
        </Card>
      ))}
    </div>
  );
};

export default FeatureGrid;
