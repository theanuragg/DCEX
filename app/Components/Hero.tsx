"use client"; // Ensure animations work in a client component

import { useEffect, useRef } from "react";
import Image from "next/image";
import { SecondaryButton } from "./Button";

const Hero = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it runs on the client

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            entry.target.classList.remove("opacity-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (phoneRef.current) observer.observe(phoneRef.current);
    if (tagRef.current) observer.observe(tagRef.current);
    if (headingRef.current) observer.observe(headingRef.current);

    const currentPhoneRef = phoneRef.current;
    const currentTagRef = tagRef.current;
    const currentHeadingRef = headingRef.current;

    return () => {
      if (currentPhoneRef) observer.unobserve(currentPhoneRef);
      if (currentTagRef) observer.unobserve(currentTagRef);
      if (currentHeadingRef) observer.unobserve(currentHeadingRef);
    };
  }, []);

  return (
    <section className="relative pt-32  bg-dark2 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background elements */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side (Text & Button) */}
          <div className="order-2 md:order-1 pl-8">
            <div
              ref={tagRef}
              className="inline-block px-4 py-1.5 rounded-full bg-light-success  text-sm text-primary font-medium mb-6 opacity-0"
            >
              Future of crypto trading
            </div>

            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-10 opacity-0"
            >
              Fast & Secure <br />
              Cryptocurrency <br />
              Exchange
            </h1>

            <p className="text-white/40 font-normal text-lg  mb-8">
              Trade cryptocurrencies with ease, security, and advanced features on our cutting-edge platform.
            </p>

            <SecondaryButton
            onClick={()=> {
                console.log("error")
            }}
            >
              Explore More
            </SecondaryButton>
          </div>

          {/* Right Side (Image & Effects) */}
          <div ref={phoneRef} className="relative  order-1 md:order-2 flex justify-center  md:justify-center opacity-0">
            {/* Phone mockup */}
            <div className="relative z-10">
              <Image
                src="/mobile.svg"
                alt="Cryptocurrency trading app"
                width={600}
                height={500}
                className="relative z-20 max-w-xs md:max-w-lg w-full h-auto object-contain animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
