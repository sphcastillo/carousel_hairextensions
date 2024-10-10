"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import carouselhorse from "@/images/carouselhair.png";
import nonhorsecarousel from "@/images/nonhorsecarousel.png";
import carouselHero from "@/images/CarouselHero.jpg";
import Image from "next/image";
import furyLeft from "@/images/left.jpg";
import furyRight from "@/images/right.jpg";
import { Lobster, Lora, Poppins } from "next/font/google";
import carouselVerticalHero from "@/images/gitzVeticalHero.jpg";

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
    <div className="relative w-full h-[624px] sm:h-[835px] overflow-hidden bg-cover bg-center">
      {/* Background Image */}
      <Image
        src={carouselHero}
        alt="Carousel Hero"
        layout="fill" // This makes the image fill the parent container
        objectFit="cover" // Ensures the image behaves like a background image
        objectPosition="center" // Optional: centers the image like a background-position
        className="hidden sm:block" // Show only on screens larger than 640px
      />

      {/* Background Image for Small Screens */}
      <Image
        src={carouselVerticalHero}
        alt="Carousel Vertical Hero"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="block sm:hidden" // Show only on screens smaller than 640px
      />

      {/* Left Door */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-full z-50"
        style={{
          background: `url(${furyLeft.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "-100%" : 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Right Door */}
      <motion.div
        className="absolute top-0 right-0 w-1/2 h-full z-50"
        style={{
          background: `url(${furyRight.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ x: 0 }}
        animate={{ x: doorsOpen ? "100%" : 0 }}
        transition={{ duration: 1.5 }}
      />

      {/* Carousel */}
      <motion.div
        className={`absolute inset-0 w-full h-full top-[397px] left-14 sm:left-[205px] sm:top-0 ${
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
                />
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Content Overlay */}

      <div className="absolute right-72 w-3/5 sm:w-1/2 text-white z-20 left-1 sm:left-4 top-3 sm:top-[256px]">
        {/* Overlay with lower opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-0 sm:bg-opacity-50 z-10 rounded-3xl sm:border-2 shadow-2xl" />{" "}
        {/* This adds a semi-transparent black overlay */}
        <div className="relative z-20">
          <h1
            className={`${lobster.className} text-[21px] md:text-6xl font-bold mb-4 pl-1 text-white sm:text-center pt-4`}
          >
            R.I.P. Bad Hair Days
          </h1>
          <p
            className={`${poppins_light.className} text-sm leading-relaxed sm:text-[21px] mb-3 sm:mb-6 pr-24 sm:pr-0 pl-1 sm:pl-0 sm:text-center sm:px-6 text-white`}
          >
            At Carousel Hair Extensions, we offer high-quality, custom-crafted
            extensions designed to enhance your natural beauty and express your
            unique style.
          </p>
          <div className="flex items-center sm:justify-center pl-[4px] sm:pl-0 pb-4">
            <a
              href="#cta"
              className={`${poppins_medium.className} hover:bg-[#f7bacb] hover:rounded-2xl bg-[#f8a1b2] text-white px-3 sm:px-6 py-2 sm:py-3 uppercase rounded-none text-sm sm:text-lg transition duration-300`}
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
