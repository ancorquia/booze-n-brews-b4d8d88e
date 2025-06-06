
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import TestimonialSection from "@/components/TestimonialSection";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <TestimonialSection />
      <FAQSection />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
