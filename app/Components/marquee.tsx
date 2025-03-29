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
    <section className="relative pt-32 bg-dark2 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h3 className="text-white/70 text-lg font-medium mb-1">
            Trusted by top <span className="text-crypto-green">crypto platforms</span>
          </h3>
        </div>

        {/* Animated Logo Row */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center relative">
          {/* Left and Right gradient for fading effect */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black/50 to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black/50 to-transparent pointer-events-none"></div>

          {/* Infinite Scrolling Effect */}
          <motion.div
            className="flex gap-20 min-w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
          >
            {[...images, ...images].map((src, index) => (
              <div key={index} className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={`Company ${index}`}
                  width={150} // Adjust size here
                  height={80} // Adjust size here
                  // className="object-contain w-48 h-24" // Tailwind for bigger size
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
