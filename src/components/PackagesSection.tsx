
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Plus } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "The Cheers Package",
      emoji: "🎉",
      price: "Starting at $600",
      guestCount: "Up to 30 Guests",
      description: "Perfect for birthdays and intimate celebrations",
      includes: [
        "1 Bartender",
        "4 Hours of Service + 2 Hours Setup/Tear Down",
        "2 Signature Cocktails + Highballs, Wine & Beer",
        "Ice, Garnishes, Mixers, Disposables",
        "Personalized Menu & Light Decor"
      ],
      addons: [
        "Additional Guests: $8/guest over 30",
        "+$75 per custom cocktail",
        "+$125/hr extra service hour",
        "+$50/hr per additional bartender",
        "+$2/km travel beyond 30km"
      ],
      note: "We keep per-guest pricing affordable for birthdays and private events while still covering everything you need — from the garnish to the last straw.",
      popular: false
    },
    {
      name: "The Mix & Mingle",
      emoji: "🥂",
      price: "Starting at $1,250",
      guestCount: "Up to 50 Guests",
      description: "Ideal for corporate events and professional gatherings",
      includes: [
        "1 Bartender",
        "5 Hours of Service + 2 Hours Setup/Tear Down",
        "3 Signature Cocktails + Full Beverage Service",
        "Branded Drink Menus (Logo or Themed)",
        "Elegant Mobile Bar Setup + Lighting",
        "Ice, Garnishes, Mixers, Disposables"
      ],
      addons: [
        "Additional Guests: $10/guest over 50",
        "+$75 per custom cocktail",
        "+$125/hr extra service hour",
        "+$50/hr per additional bartender",
        "+$2/km travel beyond 30km"
      ],
      note: "Corporate events often need flexibility and branding — our per-guest rate reflects the added preparation and custom design we put into your event.",
      popular: true
    },
    {
      name: "The Ever After Package",
      emoji: "💍",
      price: "Starting at $1,750",
      guestCount: "Up to 70 Guests",
      description: "Designed for weddings and milestone celebrations",
      includes: [
        "2 Bartenders included (for smooth service up to 70 guests)",
        "6 Hours of Service + 2 Hours Setup/Tear Down",
        "Up to 3 Signature Cocktails",
        "Custom Cocktail Naming & Printed Menus",
        "Themed Bar Styling & Champagne Toast Setup",
        "Ice, Garnishes, Mixers, Disposables"
      ],
      addons: [
        "Additional Guests: $12/guest over 70",
        "+$75 per custom cocktail",
        "+$125/hr extra service hour",
        "+$50/hr per additional bartender",
        "+$100 Satellite Bar",
        "+$2/km travel beyond 30km"
      ],
      note: "Weddings require personalization, coordination, and extra hands — our per-guest fee includes full menu customization, styled decor, and a second bartender to keep the experience seamless.",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-brand-milk">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <Card 
                key={index} 
                className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white ${
                  pkg.popular ? 'ring-2 ring-brand-orange shadow-xl scale-105' : 'shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-brand-orange text-white px-4 py-2 text-sm font-poppins font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="text-5xl mb-4">
                    {pkg.emoji}
                  </div>
                  <CardTitle className="font-poppins font-medium text-2xl text-gray-900 mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-center mb-3">
                    <div className="font-poppins font-semibold text-3xl text-brand-orange mb-1">
                      {pkg.price}
                    </div>
                    <div className="font-poppins text-lg font-medium" style={{ color: '#525b46' }}>
                      {pkg.guestCount}
                    </div>
                  </div>
                  <p className="font-poppins text-sm text-gray-600 italic">
                    {pkg.description}
                  </p>
                </CardHeader>
                
                <CardContent className="px-6 pb-6">
                  {/* Includes Section */}
                  <div className="mb-6">
                    <h4 className="font-poppins font-medium text-lg text-gray-900 mb-3">
                      Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />
                          <span className="font-poppins text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons Section */}
                  <div className="mb-6">
                    <h4 className="font-poppins font-medium text-lg text-gray-900 mb-3">
                      Add-ons:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.addons.map((addon, addonIndex) => (
                        <li key={addonIndex} className="flex items-start gap-3">
                          <Plus size={16} className="flex-shrink-0 mt-0.5" style={{ color: '#525b46' }} />
                          <span className="font-poppins text-sm text-gray-700">{addon}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value Note */}
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="font-poppins text-sm text-gray-600 italic leading-relaxed">
                      💡 {pkg.note}
                    </p>
                  </div>
                  
                  <Button 
                    className={`w-full font-poppins font-medium ${
                      pkg.popular 
                        ? 'bg-brand-orange hover:bg-brand-orange/90 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-brand-orange hover:bg-brand-orange hover:text-white'
                    } transition-all duration-300`}
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
