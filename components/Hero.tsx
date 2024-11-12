"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import carouselhorse from "@/images/carouselhair.png";
import nonhorsecarousel from "@/images/nonhorsecarousel.png";
import carouselHorizontalHero from "@/images/homepage/CarouselHero.jpg";
import carouselVerticalHero from "@/images/gitzVeticalHero.jpg";
import Image from "next/image";
import furyLeft from "@/images/homepage/goldenLeftborder.png";
import furyRight from "@/images/homepage/goldenRightborder.png";
import { Lobster, Lora, Poppins } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const lora_regular = Lora({ weight: "400", subsets: ["latin"] });

const lora_semibold = Lora({ weight: "600", subsets: ["latin"] });

const poppins_light = Poppins({ weight: "300", subsets: ["latin"] });

const poppins_medium = Poppins({ weight: "500", subsets: ["latin"] });

const Hero = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  // Automatically open doors after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true); // Set the doors to open after 1 second
    }, 1000); // Delay of 1 second before opening the doors

    return () => clearTimeout(timer); // Cleanup the timer if component is unmounted
  }, []);

  return (
    <div className="relative w-full sm:h-[500px] md:h-[620px] mdPlus:h-[670px] md925:h-[655px] lgPlus:h-[660px] overflow-hidden bg-cover bg-center">
      {/* Background Image */}
      <Image
        src={carouselHorizontalHero}
        alt="Carousel Hero"
        className="hidden sm:block object-cover h-full"
        priority
      />

      {/* Background Image for Small Screens */}
      <Image
        src={carouselVerticalHero}
        alt="Carousel Vertical Hero"
        className="block sm:hidden object-cover h-[480px] xxs:h-[500px] xs:h-[580px]"
        priority
      />

      {/* Left Door */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 z-50"
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "-100%" : 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image 
          src={furyLeft} 
          alt="Fury Left Door" 
          width={1151} 
          height={2048} 
          priority
          className="h-[480px] xxs:h-[500px] xs:h-[580px] sm:h-[500px] md:h-[620px] mdPlus:h-[670px] md925:h-[655px] lgPlus:h-[660px]"
          />
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="absolute top-0 right-0 w-1/2  z-50"
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "100%" : 0 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src={furyRight}
          alt="Fury Right Door"
          width={1151}
          height={2048}
          priority
          className="h-[480px] xxs:h-[500px] xs:h-[580px] sm:h-[500px] md:h-[620px] mdPlus:h-[670px] md925:h-[655px] lgPlus:h-[660px]"
        />
      </motion.div>

      {/* Carousel */}
      <motion.div
        className={`absolute inset-0 w-full h-full hidden  lg:top-[537px] lg:left-[615px] ${
          doorsOpen ? "visible" : "invisible"
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: doorsOpen ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div
          className="relative w-52 h-52 sm:w-64 sm:h-64" // Remove the border and rounded styles
          style={{ perspective: "1000px" }} // 3D perspective
        >
          {/* Replace circle with the nonhorsecarousel image */}
          <Image
            src={nonhorsecarousel}
            alt="Carousel Background"
            width={256}
            height={256}
            className="absolute inset-0 object-cover" // Ensure the image covers the area
            priority
          />

          {/* Rotating horses */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }} // Preserve 3D effect
            animate={{ rotateY: 360 }} // Spin around Y-axis
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            {/* Carousel Horses */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-16 h-16 sm:w-18 sm:h-18 flex items-center justify-center pt-10"
                style={{
                  transform: `rotateY(${i * (360 / 5)}deg) translateZ(60px)`, // Circular positioning
                  transformOrigin: "bottom center", // Ground the horse to the bottom center
                }}
              >
                <Image
                  src={carouselhorse}
                  alt="Carousel Horse"
                  width={104}
                  height={104}
                  className="object-contain"
                  priority
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Content Overlay */}

      <div className="absolute right-72 w-3/5 sm:w-1/2 text-white z-20 left-1 sm:left-4 top-3 sm:top-2">
        {/* Overlay with lower opacity */}
        <div className="absolute " />{" "}
        {/* This adds a semi-transparent black overlay */}
        <div className="relative z-20">

          <div className="absolute w-[200px] leading-snug left-44 top-16">
          <h1
            className={`${lobster.className} hidden text-[26px] text-white`}
            // style={{transform: "perspective(470px) rotateX(0deg) rotateY(15deg)"}}
          >
            
            Welcome to
          </h1>{" "} 
          <h1 className={`${lobster.className} hidden text-[30px] text-white`}>Carousel Hair Extensions</h1>
          </div>
          <p
            className={`${poppins_light.className} hidden text-sm leading-relaxed sm:text-[18px] mb-3 sm:mb-6 pr-16 sm:pr-0 pl-1 sm:pl-0 sm:text-center sm:px-6 text-white`}
            style={{transform: "perspective(600px) rotateX(0deg) rotateY(15deg)"}}
          >
            At Carousel Hair Extensions, we offer high-quality, custom-crafted
            extensions designed to enhance your natural beauty and express your
            unique style.
          </p>
          <div className="hidden absolute top-32 left-6 flex items-center sm:justify-center pl-1 sm:pl-0 pb-4">
            <a
              href="/"
              className={`${poppins_medium.className} hover:bg-[#f7bacb] hover:rounded-2xl bg-[#ffa6c1] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-2xl border-white border-2 text-sm shadow-xl sm:text-lg transition duration-300`}
              style={{transform: "perspective(470px) rotateX(0deg) rotateY(1deg)"}}
            >
              Show me the magic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
