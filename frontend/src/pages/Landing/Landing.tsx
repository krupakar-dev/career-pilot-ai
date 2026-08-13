import { Navbar } from "../../components/common/Navbar";
import { Hero } from "../../components/landing/Hero";
import { Features } from "../../components/landing/Features";
import { HowItWorks } from "../../components/landing/HowItWorks/HowItWorks";
import { AISection } from "../../components/landing/AISection";
import { CTA } from "../../components/landing/CTA";
import { Footer } from "../../components/common/Footer";
function Landing() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <AISection />
        <CTA />
      </main>
      <Footer/>
    </>
  );
}

export default Landing;