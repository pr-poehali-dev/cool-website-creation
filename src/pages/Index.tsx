import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import HistorySection from "@/components/HistorySection";
import SymbolsSection from "@/components/SymbolsSection";
import ArtSection from "@/components/ArtSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection />
      <HistorySection />
      <SymbolsSection />
      <ArtSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Index;
