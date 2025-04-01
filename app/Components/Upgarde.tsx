'use client'
// components/CryptoUpgrade.jsx
import Image from 'next/image';

export default function CryptoUpgrade() {
  return (
    <div className="flex items-center pl-32 min-h-screen bg-gray-950 text-white">
      {/* Left Section */}
      <div className="w-1/2 pr-8">
        <div className="mb-2">
          <span className="text-gray-300">Crypto</span>
          <span className="text-primary ml-2">upgrade</span>
        </div>
        
        <h1 className="text-5xl font-bold mb-6">Upgrade your crypto business</h1>
        
        <p className="text-gray-400 mb-8 max-w-md">
          Get faster, safer, more affordable cloud object storage with no central point of 
          failure.
        </p>
        
        {/* Feature List */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-4">
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>100% Secure</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Free figma file</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>A fraction of the cost</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Powerful in performance</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>More durable</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Designed for crypto</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>Easier to use</span>
          </div>
          
          <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-light-success flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span>100% free framer template</span>
          </div>
        </div>
      </div>
      
      {/* Right Section - Crypto Charts Image */}
      <div className="w-1/2">
        <Image
          src="/Upgrade.avif"
          alt="Crypto trading charts and metrics"
          width={500}
          height={400}
          className="object-contain"
        />
      </div>
    </div>
  );
}