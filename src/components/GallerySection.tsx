
import { Card } from "@/components/ui/card";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/80a8193f-318e-4661-878a-d012a4c30b1a.png",
      alt: "Crafted cocktails with lime garnish"
    },
    {
      src: "/lovable-uploads/48904e35-6d48-488d-a5f0-40ad47a50b7e.png",
      alt: "Professional mobile bar setup"
    },
    {
      src: "/lovable-uploads/66f0b019-2789-4357-b2d7-b885b80a564e.png",
      alt: "Premium spirits bar setup"
    },
    {
      src: "/lovable-uploads/34122b98-0a16-4724-986b-fd2dad870a00.png",
      alt: "Premium spirits collection"
    },
    {
      src: "/lovable-uploads/3a00232d-8161-43a5-9389-247f951c5b60.png",
      alt: "Elegant Booze N' Brews experience"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-4 uppercase tracking-tight">
              Our
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Craft</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Every cocktail tells a story. Every event becomes a memory.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <div className="relative aspect-square">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
