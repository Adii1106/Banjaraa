import Navbar  from "../components/layout/Navbar";
import HeroSection from "../components/landing/HeroSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
}