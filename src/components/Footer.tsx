
import { Instagram, Mail, Phone, MapPin, Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Services", href: "#services" },
    { name: "FAQ", href: "#faq" },
    { name: "Custom Quote", href: "#cta" },
    { name: "About Us", href: "#about" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <h3 className="font-script text-4xl text-brand-orange mb-4">
                Booze N' Brews
              </h3>
              <p className="font-poppins text-gray-300 mb-6 leading-relaxed">
                Calgary's premier mobile bartending service, bringing exceptional cocktails and unforgettable experiences to your special events.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/boozenbrews_/" target="_blank" rel="noopener noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange/80 p-3 rounded-full transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="mailto:booking@boozenbrews.ca" 
                  className="bg-brand-orchid hover:bg-brand-orchid/80 p-3 rounded-full transition-colors text-gray-700"
                  aria-label="Email us"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+1-226-698-1155" 
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
                <a 
  href="https://www.facebook.com/boozenbrewsinc" target="_blank" rel="noopener noreferrer"
  className="bg-brand-orange hover:bg-brand-orange/80 p-3 rounded-full transition-colors"
  aria-label="Like us on Facebook"
>
  <Facebook size={20} />
</a>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-poppins font-medium text-lg mb-4 uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="font-poppins text-gray-300 hover:text-brand-orange transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-poppins font-medium text-lg mb-4 uppercase tracking-wider">
                Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand-orange flex-shrink-0" />
                  <span className="font-poppins text-gray-300 text-sm">
                    Calgary, Alberta
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-brand-orange flex-shrink-0" />
                  <span className="font-poppins text-gray-300 text-sm">
                    (226) 698-1155
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-brand-orange flex-shrink-0" />
                  <span className="font-poppins text-gray-300 text-sm">
                    booking@boozenbrews.ca
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Instagram size={16} className="text-brand-orange flex-shrink-0" />
                  <span className="font-poppins text-gray-300 text-sm">
                    @boozenbrews_
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="font-poppins text-gray-400 text-sm">
              © 2024 Booze N' Brews. All rights reserved. | Crafting memories, one event at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
