import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Client Feedback",
      event: "Engagement Party",
      rating: 5,
      text: "Booze N’ Brews brought the magic to our engagement party! The cocktails were creative, the setup was beautiful, and the bartenders were an absolute vibe. Our guests kept going back for refills and compliments were nonstop. The whole service elevated the night in the best way possible."
    },
    {
      name: "Client Feedback",
      event: "Corporate Event",
      rating: 5,
      text: "We hired Booze N’ Brews for a corporate appreciation night and they truly delivered. The team was professional, efficient, and incredibly easy to work with. The mobile bar was a showstopper and the drink menu had something for everyone — even our non-drinking guests were impressed."
    },
    {
      name: "Client Feedback",
      event: "Birthday Party",
      rating: 5,
      text: "Everything was seamless. From arrival to last call, Booze N’ Brews handled our birthday celebration with class and personality. The bar setup looked amazing, the drinks were delicious, and the bartenders kept the energy flowing all night. We’ll absolutely be booking again!"
    }
  ];

  return (
    <section className="py-20 bg-brand-milk">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-4 uppercase tracking-tight">
              What Our
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Clients Say</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Don't just take our word for it – hear from the amazing people we've had the joy of serving.
            </p>
          </div>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-none">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote size={32} className="text-brand-orange" />
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-brand-orange text-brand-orange" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="font-poppins text-gray-700 mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Event Info + Label */}
                  <div>
                    <div className="font-poppins font-semibold text-base text-brand-orange">
                      {testimonial.event}
                    </div>
                    <div className="font-poppins text-sm text-gray-500">
                      {testimonial.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
