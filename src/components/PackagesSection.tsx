
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Check, Plus, ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const PackagesSection = () => {
  const isMobile = useIsMobile();

  const packages = [
    {
      name: "The Cheers Package",
      emoji: "🎉",
      price: "Starting at $600",
      guestCount: "Up to 30 Guests",
      description: "Perfect for birthdays, engagements, retirements, showers, and private backyard events.",
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
        "+$100 Satellite Bar",
        "+$2/km travel beyond Calgary"
      ],
      note: "We keep per-guest pricing affordable for birthdays and private events while still covering everything you need — from the garnish to the last straw.",
      popular: false,
      miniHighlight: "Includes 1 Bartender + 2 Signature Cocktails"
    },
    {
      name: "The Mix & Mingle",
      emoji: "🥂",
      price: "Starting at $1,250",
      guestCount: "Up to 50 Guests",
      description: "Tailored for corporate mixers, product launches, staff parties, and networking events.",
      includes: [
        "1 Bartender",
        "5 Hours of Service + 2 Hours Setup/Tear Down",
        "Up to 3 Signature Cocktails + Highballs, Wine & Beer",
        "Branded Drink Menus (Logo or Themed)",
        "Elegant Mobile Bar Setup + Lighting",
        "Ice, Garnishes, Mixers, Disposables"
      ],
      addons: [
        "Additional Guests: $10/guest over 50",
        "+$75 per custom cocktail",
        "+$125/hr extra service hour",
        "+$50/hr per additional bartender",
        "+$2/km travel beyond Calgary"
      ],
      note: "Corporate events often need flexibility and branding — our per-guest rate reflects the added preparation and custom design we put into your event.",
      popular: false,
      miniHighlight: "Includes Branded Menus + Mobile Bar Setup"
    },
    {
      name: "The Ever After Package",
      emoji: "💍",
      price: "Starting at $1,750",
      guestCount: "Up to 70 Guests",
      description: "Designed for weddings, anniversaries, formal celebrations, and milestone moments.",
      includes: [
        "2 Bartenders included (for smooth service up to 70 guests)",
        "6 Hours of Service + 2 Hours Setup/Tear Down",
        "Up to 3 Signature Cocktails + Highballs, Wine & Beer",
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
        "+$2/km travel beyond Calgary"
      ],
      note: "Weddings require personalization, coordination, and extra hands — our per-guest fee includes full menu customization, styled decor, and a second bartender to keep the experience seamless.",
      popular: false,
      miniHighlight: "Includes 2 Bartenders + Custom Cocktail Naming"
    }
  ];

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const MobilePackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
    <Card className="overflow-hidden bg-white shadow-lg">
      <Collapsible>
        <CardHeader className="pb-4">
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">{pkg.emoji}</div>
            <CardTitle className="font-poppins font-medium text-xl text-gray-900 mb-2">
              {pkg.name}
            </CardTitle>
            <div className="mb-3">
              <div className="font-poppins font-semibold text-2xl text-brand-orange mb-1">
                {pkg.price}
              </div>
              <div className="font-poppins text-base font-medium" style={{ color: '#525b46' }}>
                {pkg.guestCount}
              </div>
            </div>
            <p className="font-poppins text-sm font-semibold italic mb-3" style={{ color: '#525b46' }}>
              {pkg.description}
            </p>
            <p className="font-poppins text-sm text-gray-600 bg-gray-50 p-2 rounded">
              {pkg.miniHighlight}
            </p>
          </div>
          
          <CollapsibleTrigger asChild>
            <Button 
              variant="outline" 
              className="w-full font-poppins font-medium border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
            >
              View Full Details
              <ChevronDown className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
            </Button>
          </CollapsibleTrigger>
        </CardHeader>

        <CollapsibleContent>
          <CardContent className="px-6 pb-6">
            {/* Includes Section */}
            <div className="mb-6">
              <h4 className="font-poppins font-medium text-lg text-gray-900 mb-3">
                Includes:
              </h4>
              <ul className="space-y-2">
                {pkg.includes.map((feature: string, featureIndex: number) => (
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
                {pkg.addons.map((addon: string, addonIndex: number) => (
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
          </CardContent>
        </CollapsibleContent>

        <CardContent className="px-6 pb-6 pt-0">
          <Button 
            onClick={scrollToBooking}
            className="w-full font-poppins font-medium bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 py-3 rounded-lg shadow-md hover:shadow-lg"
          >
            Customize & Book This Package
          </Button>
        </CardContent>
      </Collapsible>
    </Card>
  );

  const DesktopPackageCard = ({ pkg, index }: { pkg: any; index: number }) => (
    <Card className="relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white shadow-lg">
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
        <p className="font-poppins text-sm font-semibold italic" style={{ color: '#525b46' }}>
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
            {pkg.includes.map((feature: string, featureIndex: number) => (
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
            {pkg.addons.map((addon: string, addonIndex: number) => (
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
          onClick={scrollToBooking}
          className="w-full font-poppins font-medium bg-brand-orange hover:bg-brand-orange/90 text-white transition-all duration-300 py-3 rounded-lg shadow-md hover:shadow-lg"
        >
          Customize & Book This Package
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <section id="services" className="py-20 bg-white">
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, index) => 
              isMobile ? (
                <MobilePackageCard key={index} pkg={pkg} index={index} />
              ) : (
                <DesktopPackageCard key={index} pkg={pkg} index={index} />
              )
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
