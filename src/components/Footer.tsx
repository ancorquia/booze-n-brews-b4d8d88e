
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

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
                  href="https://instagram.com/boozenbrews" target="_blank" rel="noopener noreferrer"
                  className="bg-brand-orange hover:bg-brand-orange/80 p-3 rounded-full transition-colors"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="mailto:hello@boozenbrews.ca" 
                  className="bg-brand-orchid hover:bg-brand-orchid/80 p-3 rounded-full transition-colors text-gray-700"
                  aria-label="Email us"
                >
                  <Mail size={20} />
                </a>
                <a 
                  href="tel:+1-403-555-0123" 
                  className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition-colors"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href="https://www.facebook.com/boozenbrewsinc" target="_blank" rel="noopener noreferrer"
                  className="bg-[#1877F3] hover:bg-[#166fe0] p-3 rounded-full transition-colors text-white"
                  aria-label="Like us on Facebook"
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .6 0 1.326v21.348C0 23.4.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.326-.6 1.326-1.326V1.326C24 .6 23.405 0 22.675 0"/>
                </svg>
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
