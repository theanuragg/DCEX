'use client'

// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark2 text-white w-full py-12 px-10 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image 
                src="./banner.svg" 
                alt="Crypgo Logo" 
                width={80} 
                height={80}
                className="mr-2"
              />
            </div>
            <p className="text-gray-400 max-w-xs">
              Transform your crypto business with Crypgo. Framer, a
              template for startups and blockchain services.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link href="https://twitter.com/crypgo" >
                <FaTwitter size={20} className='text-primary hover:text-light-success transition-colors' />
              </Link>
              <Link href="https://instagram.com/crypgo">
                <FaInstagram size={20} className='text-primary hover:text-light-success transition-colors' />
              </Link>
              <Link href="https://discord.gg/crypgo">
                <FaDiscord size={20}  className='text-primary hover:text-light-success transition-colors' />
              </Link>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg text-primary font-medium mb-4">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/upgrade" className="text-gray-400 hover:text-white transition-colors">
                  Upgrade
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Pages Column */}
          <div>
            <h3 className="text-lg font-medium text-primary mb-4">Other Pages</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/404" className="text-gray-400 hover:text-white transition-colors">
                  Error 404
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Download App Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">Download app</h3>
            <div className="flex space-x-4">
              <Link href="https://play.google.com/store/apps/details?id=com.crypgo" className="inline-block">
                <Image 
                  src="./Playstore.svg" 
                  alt="Get it on Google Play" 
                  width={140} 
                  height={42} 
                  className="h-auto"
                />
              </Link>
              <Link href="https://apps.apple.com/app/crypgo/id123456789" className="inline-block">
                <Image 
                  src="./Appstore.svg" 
                  alt="Download on the App Store" 
                  width={140} 
                  height={42}
                  className="h-auto" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;