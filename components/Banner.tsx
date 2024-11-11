import Image from "next/image";
import stars from "@/images/logo/pinkStars.png";
import LAWeekly from "@/images/homepage/banner/laWeekly.png";
import IrvineWeekly from "@/images/homepage/banner/irvineWeekly.png";
import TheVillageVoice from "@/images/homepage/banner/thevillagevoicelogo.png";
import { Lobster, Lora, Poppins } from "next/font/google";

const poppins_light = Poppins({ weight: "300", subsets: ["latin"] });

const poppins_medium = Poppins({ weight: "500", subsets: ["latin"] });

const poppins_semibold = Poppins({ weight: "600", subsets: ["latin"] });

function Banner() {
  return (
    <div className="w-full bg-[#efcbe1] shadow-sm py-4 overflow-hidden relative">
      <div className={`${poppins_medium.className} text-sm flex items-center justify-center pb-4`}>Featured in:</div>
      <div className={`tracking-wider flex items-center text-center animate-marquee space-x-7`}>
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
