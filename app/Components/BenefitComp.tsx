// app/page.jsx
"use client";

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function BenefitComp() {
  const { scrollY } = useScroll();
  const [isMounted, setIsMounted] = useState(false);
  
  // Transform values for phone tilt animation
  const phoneRotate = useTransform(scrollY, [0, 300], [15, 0]);
  const phoneScale = useTransform(scrollY, [0, 300], [0.9, 1]);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <main className="min-h-screen bg-dark2 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mb-2 text-white font-medium">We deliver <span className="text-primary">best solution</span></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
          One application with multiple options to give you freedom of buying & selling
        </h1>
      </section>

      {/* Features Section with Phone in Center */}
      <section className="container mx-auto px-4 pb-20 relative">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left features */}
          <div className="md:w-1/4 space-y-8 md:pr-8 z-10">
            {/* Planning */}
            <div className=" md:mr-4">
              <div className="flex justify-start mb-2">
                <div className="bg-light-success bg-opacity-30 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planning</h3>
              <p className="text-gray-400 text-sm">Map the crypto projects scope with framer template</p>
            </div>

            {/* Prototype */}
            <div className=" md:mr-4">
              <div className="flex justify-start mb-2">
                <div className="bg-light-success w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Prototype</h3>
              <p className="text-gray-400 text-sm">Build crypto website test for your product and apps</p>
            </div>
          </div>

          {/* Center Phone with Ring Animation */}
          <div className="relative md:w-1/2 h-[600px] my-12 md:my-0 flex justify-center items-center">
            {/* Orbital Ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div 
                className="w-80 h-80 md:w-112 md:h-112 rounded-full border border-gray-700 opacity-40 "
              />
              <div 
                className="absolute w-96 h-96 md:w-96 md:h-96 rounded-full border border-gray-600 opacity-50 animate-spin"
                style={{ marginLeft: '-10px' }}
              />
              <div 
                className="absolute w-96 h-96 md:w-80 md:h-80 rounded-full border border-gray-100 opacity-30 "
                style={{ marginLeft: '10px' }}
              />
            </div>

            {/* Phone with Animation */}
            <motion.div 
              className="relative z-10 w-72"
              style={{ 
                rotateX: phoneRotate,
                scale: phoneScale,
                transformOrigin: "center top" 
              }}
            >
              <Image
                src='/phoneCTA.avif' 
                width={300} 
                height={600} 
                alt="Crypto Exchange App" 
                className="w-full h-auto"
              />

              <motion.div
                className="absolute top-[120px] right-[-28px]"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  repeatType: "reverse" 
                }}
              >
                <Image 
                  src="./bitcoin.svg" 
                  width={80} 
                  height={80} 
                  alt="Bitcoin" 
                  className="w-28 h-28"
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right features */}
          <div className="md:w-1/4 space-y-8 md:pl-8 z-10">
            {/* Refinement */}
            <div className="text-left md:ml-4">
              <div className="flex justify-start mb-2">
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Refinement</h3>
              <p className="text-gray-400 text-sm">Refine & improve your crypto landing page for better view</p>
            </div>

            {/* Scale and Support */}
            <div className="text-left md:ml-4">
              <div className="flex justify-start mb-2">
                <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Scale and support</h3>
              <p className="text-gray-400 text-sm">Deploy product live and ensure expert support</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}