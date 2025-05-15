'use client'

import BenefitComp from "./Components/Landing/BenefitComp";
import Index from "./Components/Landing/FeatureCard";
import Hero from "./Components/Landing/Hero";
import ServiceComp from "./Components/Landing/Service";
import FaqAccordion from "./Components/Landing/FaqComp";
import UpgradeComp from "./Components/Landing/Upgarde";
import Footer from "./Components/Landing/Footer";

export default function Home() {
  return (
   <main>
    <Hero/>
    <Index/>
    <BenefitComp/>
    <ServiceComp/>
    <UpgradeComp/>
    <FaqAccordion/>
    <Footer/>
   </main>
  );
}
