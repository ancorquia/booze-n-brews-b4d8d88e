
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const CTABanner = () => {
  return (
    <section id="cta" className="py-20 relative overflow-hidden" style={{ backgroundColor: 'rgba(247, 132, 59, 0.1)' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 z-10">
        <div className="absolute top-10 left-20 rotate-12">
          <Calendar size={60} className="text-brand-orange" />
        </div>
        <div className="absolute bottom-10 right-20 -rotate-12">
          <Phone size={50} className="text-brand-orange" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 uppercase tracking-tight">
            Let's Craft Your
            <span className="block">
              <span className="font-script normal-case text-5xl md:text-6xl lg:text-7xl text-brand-orange">Next Event</span>
            </span>
          </h2>
          
          <p className="font-poppins text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ready to elevate your celebration? Let's create something unforgettable together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-poppins font-medium text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Calendar size={20} className="mr-2" />
              Book Now
            </Button>
            <Button 
              size="lg" 
              className="bg-brand-milk hover:bg-brand-milk/90 text-brand-orange font-poppins font-semibold text-lg px-8 py-6 rounded-full shadow-xl transition-all duration-300 hover:scale-105 border-2 border-brand-orange"
            >
              <Phone size={20} className="mr-2" />
              Call Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
