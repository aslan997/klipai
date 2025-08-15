import Header from "@/components/layout/Header";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Partners />
      </main>
    </>
  );
}
