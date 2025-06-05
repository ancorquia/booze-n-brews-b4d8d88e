
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
  const testimonials = [
    {
      name: "Sarah & Mike",
      event: "Wedding Reception",
      rating: 5,
      text: "Andrea and Dannison made our wedding absolutely perfect! Their cocktails were incredible and they kept the energy up all night. Our guests are still talking about the amazing drinks!"
    },
    {
      name: "Jennifer L.",
      event: "Corporate Event",
      rating: 5,
      text: "Professional, creative, and so much fun! They transformed our company party into something really special. The custom cocktail menu was a huge hit with everyone."
    },
    {
      name: "David & Emma",
      event: "Anniversary Party",
      rating: 5,
      text: "From start to finish, the experience was flawless. They listened to our vision and brought it to life perfectly. We couldn't have asked for better service!"
    }
  ];

  return (
    <section className="py-20 bg-brand-orchid">
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
                  
                  {/* Client Info */}
                  <div>
                    <div className="font-poppins font-medium text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="font-poppins text-sm text-brand-orange">
                      {testimonial.event}
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
