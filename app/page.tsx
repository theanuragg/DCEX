'use client'

import BenefitComp from "./Components/BenefitComp";
import Index from "./Components/FeatureCard";
import Hero from "./Components/Hero";
import Marquee from "./Components/marquee";
import ServiceComp from "./Components/Service";
import FaqAccordion from "./Components/FaqComp";
import UpgradeComp from "./Components/Upgarde";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Marquee/>
    <Index/>
    <BenefitComp/>
    <ServiceComp/>
    <UpgradeComp/>
    <FaqAccordion/>
    <Footer/>
   </main>
  );
}
