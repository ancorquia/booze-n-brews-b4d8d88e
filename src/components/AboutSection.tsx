
import { Heart, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div>
              <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-tight">
                Your Event,
                <span className="block">
                  <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Our Expertise</span>
                </span>
              </h2>
              
              <p className="font-poppins text-lg text-gray-700 mb-8 leading-relaxed">
                We're <span className="font-medium text-brand-orange">Andrea and Dannison</span> – a passionate mobile bartending duo serving cocktails, coffee, and unforgettable vibes across Calgary and beyond.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-orchid rounded-full p-3">
                    <Heart className="text-gray-700" size={24} />
                  </div>
                  <span className="font-poppins text-gray-700">Crafted with passion and precision</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-brand-milk rounded-full p-3">
                    <Users className="text-gray-700" size={24} />
                  </div>
                  <span className="font-poppins text-gray-700">Personalized service for every celebration</span>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/placeholder.svg" 
                    alt="Andrea preparing cocktails"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img 
                    src="/placeholder.svg" 
                    alt="Professional bar setup"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/placeholder.svg" 
                    alt="Dannison serving drinks"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                  <img 
                    src="/placeholder.svg" 
                    alt="Happy event guests"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-4 -left-4 bg-brand-orange rounded-full w-16 h-16 flex items-center justify-center shadow-xl">
                <span className="text-white font-script text-2xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
