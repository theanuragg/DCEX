"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/company1.svg",
  "/company2.svg",
  "/company3.svg",
  "/company4.svg",
  "/company5.svg",
];

const Marquee = () => {
  return (
    <div className="relative mx-auto my-4 flex w-full flex-col items-center justify-center overflow-hidden antialiased px-6">
      {/* Marquee Content */}
      <motion.div
        className="flex gap-16" // Increased gap
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative z-20 overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`Marquee ${index}`}
              width={140} // Increased size slightly
              height={70}
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* Vintage Gradient Mask Effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-r from-[#2b2b2b] to-transparent opacity-70" />
        <div className="absolute right-0 top-0 h-full w-48 bg-gradient-to-l from-[#2b2b2b] to-transparent opacity-70" />
      </div>
    </div>
  );
};

export default Marquee;
