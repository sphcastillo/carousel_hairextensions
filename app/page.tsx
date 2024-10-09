import BrightClouds from "@/components/BrightClouds";
import Cloud from "@/components/Cloud";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HeroComponent from "@/components/HeroComponet";
import InfoSection from "@/components/InfoSection";
import IntroSection from "@/components/IntroSection";
import Newsletter from "@/components/Newsletter";
import PassionProject from "@/components/PassionProject";
import Testimonials from "@/components/Testimonials";
import UnevenClouds from "@/components/UnevenClouds";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto bg-white">
      <HeroComponent />
      <Features />
      {/* <Hero /> */}
      {/* <UnevenClouds /> */}
      {/* <IntroSection /> */}
      {/* <InfoSection /> */}
      {/* <Cloud /> */}
      {/* <PassionProject /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter />  */}
      {/* <BrightClouds /> */}
    </main>
  );
}
