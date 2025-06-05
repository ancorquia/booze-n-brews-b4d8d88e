
import { Button } from "@/components/ui/button";
import { Martini, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-brand-milk flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 rotate-12">
          <Martini size={60} />
        </div>
        <div className="absolute top-40 right-20 -rotate-12">
          <Coffee size={50} />
        </div>
        <div className="absolute bottom-32 left-32 rotate-45">
          <Martini size={40} />
        </div>
        <div className="absolute bottom-20 right-10 -rotate-45">
          <Coffee size={70} />
        </div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="font-poppins font-medium text-5xl md:text-7xl lg:text-8xl text-gray-900 mb-6 tracking-tight uppercase animate-fade-in">
            Bringing the
            <span className="block">
              <span className="font-script text-brand-orange normal-case text-6xl md:text-8xl lg:text-9xl">Party</span>
            </span>
            <span className="block">to You</span>
          </h1>

          {/* Subheadline */}
          <p className="font-poppins text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Crafting Memories, One Event at a Time.
          </p>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-brand-orange hover:bg-brand-orange/90 text-white font-poppins font-medium text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Get a Custom Quote
          </Button>

          {/* Hero Image Placeholder */}
          <div className="mt-16 relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-4xl">
              <img 
                src="/placeholder.svg" 
                alt="Professional bartenders serving drinks at an elegant event"
                className="w-full h-64 md:h-96 object-cover rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-brand-orchid rounded-full p-4 shadow-lg">
                <Martini className="text-gray-700" size={32} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
