'use client'
// pages/404.js
import Link from "next/link";
import Image from "next/image";

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark2">
      <Image src='./404.svg'  width={300} height={100} alt=""></Image>
      <p className="mt-4 px-4 text-2xl text-gray-600">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link 
        href="/" 
        className="mt-6 px-4 py-2 bg-primary text-dark3 rounded hover:bg-secondary  transition-colors"
      >
       Go Home 
      </Link>
    </div>
  );
}
