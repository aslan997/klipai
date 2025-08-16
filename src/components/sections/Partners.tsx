
import React from "react";
import Image from "next/image";

const logos = [
  "/icons/logo1.svg",
  "/icons/logo2.svg",
  "/icons/logo3.svg",
  "/icons/logo4.svg",
  "/icons/logo5.svg",
  "/icons/logo6.svg",
];

const Partners: React.FC = () => {
  return (
    <div className="overflow-hidden py-6">
      <p className="text-center text-lg font-semibold mb-16 text-[#c4c4c4]">
        Partnered with worldwide leading companies
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-1/6 h-[45px] relative">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
