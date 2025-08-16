import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-[80px] pb-24 px-[15px]">
      <div className="container mx-auto px-6 relative">
        {/* Heading stays at top */}
        <h1 className="text-heading-md md:text-heading leading-heading font-[var(--font-weight-heading)] text-center mb-[17px]">
          AI receipts. Simple crypto. <br className="hidden md:block" />
          Smart control.
        </h1>

        {/* Flex layout for image + text below */}
        <div className="flex flex-col md:flex-col-reverse items-center">
          <Image
            src="/images/hero-image.svg"
            alt="App Preview"
            className="mt-[-50px] lg:mt-[-100px]"
            width={1500}
            height={797}
            priority
          />

          {/* Paragraph + CTA */}
          <div className="w-full md:w-1/2 text-center mt-6 md:mt-0 z-[1]">
            <p className="text-body-sm md:text-body-lg leading-body font-[var(--font-weight-body)] capitalize mb-[26px]">
              Klip is Your All-in-One Decentralized Wallet <br />
              Designed For Security, Flexibility, And Full Ownership.
            </p>

            <div className="mt-6">
              <Button
                variant="primary"
                iconRight={<ArrowRight size={16} />}
                size="lg"
              >
                GET STARTED
              </Button>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div
          className="
      absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      w-full h-48 md:w-[800px] md:h-[600px] 
      -z-10 rounded-full
      bg-gradient-to-r from-[#51FC8B] to-[#51FC8B]/0
      blur-[200px] opacity-80
    "
        />
      </div>
    </section>
  );
};

export default Hero;
