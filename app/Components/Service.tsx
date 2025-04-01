'use client'

import Image from 'next/image';
import { ArrowRight, Clock, Shield, Smartphone } from 'lucide-react';

export default function ServiceComp() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-28 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(68,56,202,0.1)_1px,_transparent_1px)] bg-[length:24px_24px] opacity-20" />
        
        {/* Left side - Crypto cards */}
        <div className="md:w-1/2 flex flex-col gap-6 relative z-10">
          <Image src='./Service.svg'  width={1000}  height={500} alt='hh'></Image>
        </div>
        
        {/* Right side - Content */}
        <div className="md:w-1/2 flex flex-col justify-center z-10">
          <p className="text-primary font-medium mb-2">Crypto landing page template</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Create your cryptocurrency portfolio today
          </h1>
          <p className="text-gray-300 mb-8">
            Coinbase has a variety of features that make it the best place to start trading.
          </p>
          
          {/* Features */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-light-success flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">Manage your portfolio</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-light-success flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">Vault protection</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-light-success flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <p className="font-medium">Mobile apps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}