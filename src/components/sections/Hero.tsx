import Image from "next/image";
import Button from "../ui/Button";
import { ArrowRight } from "lucide-react"; // example icon

const Hero = () => {
  return (
    <section className="relative pt-16 pb-24">
      <div className="container mx-auto px-6 text-center md:text-left">
        {/* Text Content */}
        <h1 className="text-heading leading-heading font-[var(--font-weight-heading)] text-center mb-[17px]">
          AI receipts. Simple crypto. <br className="hidden md:block" />
          Smart control.
        </h1>
        <p className="text-body leading-body font-[var(--font-weight-body)] text-center capitalize mb-[26px]">
          Klip is Your All-in-One Decentralized Wallet{" "}
          <br/>
          Designed For Security, Flexibility, And Full Ownership.
        </p>

        {/* CTA */}
        <div className="mt-6 text-center">
          <Button
            variant="primary"
            size="md"
            iconRight={<ArrowRight size={16} />}
          >
            GET STARTED
          </Button>
        </div>
      </div>

      {/* Background 3D Shape */}
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] -z-10">
        <Image
          src="/images/wobbleshape.svg"
          alt="Background Shape"
          fill
          className="object-contain"
        />
      </div> */}

      {/* Phone Mockup */}
      <div className="flex justify-center relative">
        <Image
          src="/images/hero-image.svg"
          alt="App Preview"
          width={1196}
          height={797}
          priority
        />

        {/* Floating Badges */}
        {/* <div className="absolute left-0 top-1/3 -translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          <span className="text-gray-900 font-semibold">$2,951.73</span>
          <span className="text-gray-500 text-sm">APL 17</span>
        </div>
        <div className="absolute right-0 bottom-1/3 translate-x-1/2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
          <span className="text-gray-900 font-semibold">$3,271.20</span>
          <span className="text-gray-500 text-sm">RLS 24</span>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
