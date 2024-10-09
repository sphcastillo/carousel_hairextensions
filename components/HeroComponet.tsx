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

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const lora_regular = Lora({ weight: "400", subsets: ["latin"] });

const lora_semibold = Lora({ weight: "600", subsets: ["latin"] });

const poppins_light = Poppins({ weight: "300", subsets: ["latin"] });

const poppins_medium = Poppins({ weight: "500", subsets: ["latin"] });

const HeroComponent = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);

  // Automatically open doors after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      setDoorsOpen(true); // Set the doors to open after 1 second
    }, 1000); // Delay of 1 second before opening the doors

    return () => clearTimeout(timer); // Cleanup the timer if component is unmounted
  }, []);

  return (
    <div
      className="relative w-full h-[835px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${carouselHero.src})`,
      }}
    >
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
        className={`absolute inset-0 w-full h-full left-[205px] top-0 ${
          doorsOpen ? "visible" : "invisible"
        }`}
        initial={{ scale: 0 }}
        animate={{ scale: doorsOpen ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div
          className="relative w-64 h-64" // Remove the border and rounded styles
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
                className="absolute w-18 h-18 flex items-center justify-center pt-10"
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

      <div className="absolute right-72 w-1/2 text-white z-20 left-4 top-[256px]">
        {/* Overlay with lower opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-3xl border-2 shadow-2xl" />{" "}
        {/* This adds a semi-transparent black overlay */}
        <div className="relative z-20">
          <h1
            className={`${lobster.className} text-4xl md:text-6xl font-bold mb-4 text-[#fadde1] text-center pt-4`}
          >
            R.I.P. Bad Hair Days
          </h1>
          <p
            className={`${poppins_light.className} text-[21px] mb-6 text-center px-6 text-[#fadde1] `}
          >
            At Carousel Hair Extensions, we offer high-quality, custom-crafted
            extensions designed to enhance your natural beauty and express your
            unique style.
          </p>
          <div className="flex items-center justify-center pb-4">
            <a
              href="#cta"
              className={`${poppins_medium.className} hover:bg-[#f7bacb] bg-[#f8a1b2] text-white px-6 py-3 uppercase rounded-none text-lg transition duration-300`}
            >
              Show me the magic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
