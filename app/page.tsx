'use client'

import BenefitComp from "./Components/BenefitComp";
import Index from "./Components/FeatureCard";
import Hero from "./Components/Hero";
import Marquee from "./Components/marquee";
import ServiceComp from "./Components/Service";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Marquee/>
    <Index/>
    <BenefitComp/>
    <ServiceComp/>
   </main>
  );
}
