import { Navbar } from "../../components/common/Navbar";
import { Hero } from "../../components/landing/Hero";
import { Features } from "../../components/landing/Features";
import { HowItWorks } from "../../components/landing/HowItWorks/HowItWorks";
function Landing() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
      </main>
    </>
  );
}

export default Landing;