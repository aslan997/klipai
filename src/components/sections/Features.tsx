import React from "react";
import FeatureGrid from "../ui/FeatureGrid";
import Badge from "../ui/Badge";

const Features = () => {
  return (
    <div className="container mx-auto mb-[85px] px-[15px]">
      <div className="mb-[32px]">
        <Badge height={40} width={96}>BENEFIT</Badge>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between w-full mb-[90px]">
        <h2 className="text-heading-mobile md:text-heading leading-heading font-[var(--font-weight-heading)]">
          Say goodbye to <br /> Wallet Addresses.
        </h2>
        <p className="text-body-mobile md:text-body leading-body font-[var(--font-weight-body-sm)] max-w-sm">
          Just enter the handle, select your token, and confirm. No copy-paste.
          No errors. No friction.
        </p>
      </div>

      <FeatureGrid />
    </div>
  );
};

export default Features;
