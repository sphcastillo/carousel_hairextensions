import Banner from "@/components/Banner";
import CarouselFavorites from "@/components/CarouselFavorites";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import InfoSection from "@/components/InfoSection";
import Newsletter from "@/components/Newsletter";
import PassionProject from "@/components/PassionProject";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto bg-[#fcfcfc] custom-cursor">
      <Hero />
      <Banner />
      <CarouselFavorites />
      <Feature />
      {/* <Hero /> */}
      {/* <InfoSection /> */}
      {/* <PassionProject /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter />  */}
    </main>
  );
}
