import React from "react";
import FeatureGrid from "../ui/FeatureGrid";
import Badge from "../ui/Badge";

const Features = () => {
  return (
    <div className="container relative mx-auto mb-[85px] px-[15px]">
      <div className="mb-[32px]">
        <Badge height={40} width={96}>
          BENEFIT
        </Badge>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full mb-[34px] md:mb-[90px] gap-[15px]">
        <h2 className="text-heading-md md:text-heading leading-heading font-[var(--font-weight-heading)]">
          Say goodbye to <br /> Wallet Addresses.
        </h2>
        <p className="text-body-mobile md:text-body leading-body font-[var(--font-weight-body-sm)] max-w-sm">
          Just enter the handle, select your token, and confirm. No copy-paste.
          No errors. No friction.
        </p>
      </div>

      <FeatureGrid />
      {/* Add gradient only for the first card */}
      <div
        className="
      absolute top-[12%] md:top-[40%] left-0 md:left-[200px] -translate-x-1/2 -translate-y-1/2 
      w-full h-48 md:w-[600px] md:h-[600px] 
      -z-10 rounded-full
      bg-gradient-to-r from-[#51FC8B] to-[#51FC8B]/0
      blur-[100px]
    "
      />
    </div>
  );
};

export default Features;
