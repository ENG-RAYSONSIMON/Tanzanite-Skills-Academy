import Navbar from "./components/NavigationBar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
