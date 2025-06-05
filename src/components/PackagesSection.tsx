
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Coffee, Martini, Star } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Basic Package",
      icon: <Coffee size={32} />,
      price: "Starting at $75/hour",
      priceDetail: "+ $5 per guest",
      features: [
        "Professional bartender service",
        "Basic bar setup & equipment",
        "Standard cocktail menu",
        "Non-alcoholic beverages",
        "2-hour minimum"
      ],
      popular: false
    },
    {
      name: "Complete Package",
      icon: <Martini size={32} />,
      price: "Starting at $125/hour",
      priceDetail: "+ $8 per guest",
      features: [
        "Premium bartender duo service",
        "Full mobile bar setup",
        "Custom cocktail menu creation",
        "Premium mixers & garnishes",
        "Coffee & specialty drinks",
        "Event consultation",
        "Setup & cleanup included"
      ],
      popular: true
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-milk">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-4 uppercase tracking-tight">
              Choose Your
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Experience</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              From intimate gatherings to grand celebrations, we have the perfect package for your event.
            </p>
          </div>

          {/* Package Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  pkg.popular ? 'ring-2 ring-brand-orange shadow-xl' : 'shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-2 text-sm font-poppins font-medium">
                    <Star size={16} className="inline mr-1" />
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                    pkg.popular ? 'bg-brand-orange text-white' : 'bg-brand-orchid text-gray-700'
                  }`}>
                    {pkg.icon}
                  </div>
                  <CardTitle className="font-poppins font-medium text-2xl text-gray-900 uppercase tracking-tight">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-center">
                    <div className="font-poppins font-semibold text-3xl text-brand-orange">
                      {pkg.price}
                    </div>
                    <div className="font-poppins text-sm text-gray-600">
                      {pkg.priceDetail}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Check size={16} className="text-brand-orange flex-shrink-0" />
                        <span className="font-poppins text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-poppins font-medium ${
                      pkg.popular 
                        ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200'
                    }`}
                  >
                    Get Quote for {pkg.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
