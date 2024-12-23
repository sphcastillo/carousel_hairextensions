import Image from "next/image";
import stars from "@/images/logo/pinkStars.png";
import bannerBackground from "@/images/homepage/banner/brightpinkBannerBackground.png";
import LAWeekly from "@/images/homepage/banner/laWeekly.png";
import IrvineWeekly from "@/images/homepage/banner/irvineWeekly.png";
import TheVillageVoice from "@/images/homepage/banner/thevillagevoicelogo.png";
import { Raleway, Dancing_Script } from "next/font/google";

const raleway_medium = Raleway({ weight: "500", subsets: ["latin"] });

function Banner() {
  return (
    <div
      className="w-full bg-cover bg-center shadow-sm pt-4 pb-6 overflow-hidden relative"
      style={{
        backgroundImage: `url(${bannerBackground.src})`,
      }}
    >
      <div
        className={`${raleway_medium.className} text-sm sm:text-md flex items-center justify-center pb-4`}
      >
        Featured in:
      </div>
      <div
        className={`py-2 sm:py-4 tracking-wider flex items-center text-center animate-marquee space-x-7`}
      >
        <Image src={LAWeekly} alt="LA Weekly" className="h-7 inline-block" />
        <Image src={stars} alt="Stars" className="h-6 inline-block" />
        <Image
          src={IrvineWeekly}
          alt="Irvine Weekly"
          className="h-8 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />
        <Image
          src={TheVillageVoice}
          alt="The Village Voice"
          className="h-9 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />

        <Image src={LAWeekly} alt="LA Weekly" className="h-7 inline-block" />
        <Image src={stars} alt="Stars" className="h-6 inline-block" />
        <Image
          src={IrvineWeekly}
          alt="Irvine Weekly"
          className="h-8 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />
        <Image
          src={TheVillageVoice}
          alt="The Village Voice"
          className="h-9 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />

        <Image src={LAWeekly} alt="LA Weekly" className="h-7 inline-block" />
        <Image src={stars} alt="Stars" className="h-6 inline-block" />
        <Image
          src={IrvineWeekly}
          alt="Irvine Weekly"
          className="h-8 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />
        <Image
          src={TheVillageVoice}
          alt="The Village Voice"
          className="h-9 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />

        <Image src={LAWeekly} alt="LA Weekly" className="h-7 inline-block" />
        <Image src={stars} alt="Stars" className="h-6 inline-block" />
        <Image
          src={IrvineWeekly}
          alt="Irvine Weekly"
          className="h-8 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />
        <Image
          src={TheVillageVoice}
          alt="The Village Voice"
          className="h-9 inline-block"
        />
        <Image src={stars} alt="Stars" className="h-6 inline-block" priority />
      </div>
    </div>
  );
}
export default Banner;
