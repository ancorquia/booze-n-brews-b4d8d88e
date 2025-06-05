
import { Button } from "@/components/ui/button";
import { Martini, Coffee } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-brand-milk flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/9e91a83c-6e03-42d2-8451-a2a4260f1352.png" 
          alt="Professional bartenders at work"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-milk/80"></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
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

      <div className="container mx-auto px-6 text-center relative z-20">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
