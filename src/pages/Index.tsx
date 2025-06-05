
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <TestimonialSection />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default Index;
