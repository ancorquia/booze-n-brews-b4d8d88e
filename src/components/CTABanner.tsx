
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTABanner = () => {
  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-20" style={{ backgroundColor: 'rgba(247, 132, 59, 0.1)' }}>
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-tight">
            Ready to Make Your
            <span className="block">
              <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Event Unforgettable?</span>
            </span>
          </h2>
          
          <p className="font-poppins text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's bring the party to you with our professional mobile bartending services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToBooking}
              size="lg" 
              className="bg-brand-orange hover:bg-brand-orange/90 text-white font-poppins font-medium text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Get Your Quote Now
            </Button>
            
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-poppins font-medium text-lg px-8 py-6 rounded-full transition-all duration-300"
              asChild
            >
              <a href="tel:+1-403-555-0123" className="flex items-center gap-2">
                <Phone size={20} />
                Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
