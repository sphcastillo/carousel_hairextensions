import BrightClouds from "@/components/BrightClouds";
import Cloud from "@/components/Cloud";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
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
      <Hero />
      <Feature />
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
