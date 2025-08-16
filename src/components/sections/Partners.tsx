import React from "react";
import Image from "next/image";
import "@/styles/partners.css";

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
      <p className="text-center text-heading-sm font-[var(--font-weight-body-lg)] mb-[64px] text-[#c4c4c4]">
        Partnered with worldwide leading companies
      </p>
      <div className="marquee-wrapper py-[10px]">
        <div className="marquee-content">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[45px] mx-8 flex items-center"
            >
              <Image
                src={logo}
                alt={`Partner ${(index % logos.length) + 1}`}
                width={120}
                height={45}
                style={{
                  height: "100%",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
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
