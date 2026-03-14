import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { FooterSection } from "./components/FooterSection";
import { PrivacyPreferencesTrigger } from "./components/PrivacyPreferencesTrigger";

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <GallerySection />
      <FooterSection />
      <PrivacyPreferencesTrigger />
    </div>
  );
}

export default App;
