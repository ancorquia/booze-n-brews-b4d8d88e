
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do you provide the alcohol?",
      answer: "We don't supply alcohol due to AGLC regulations. However, we'll happily provide an alcohol shopping list to assist with your needs."
    },
    {
      question: "How much are your services?",
      answer: "As each event is unique, costs may vary. Please share your event details for an accurate quotation."
    },
    {
      question: "Do I need a liquor license?",
      answer: "Yes, event organizers must obtain a liquor license if the event is not in a private residence. Usually, it's a Private Special Event License ($10–$25)."
    },
    {
      question: "What is included in your Mobile Bar Services?",
      answer: "Everything but the alcohol — bartenders, bar tools, mixers, cups, garnishes, and a full setup."
    },
    {
      question: "Do you offer non-alcoholic beverage options?",
      answer: "Yes! Mocktails, juices, soda, and other non-alcoholic beverages are always available."
    },
    {
      question: "How big is the satellite bar?",
      answer: "4 ft (L) x 5 ft (H) x 2 ft (W) – compact, stylish, and ready for any space."
    },
    {
      question: "Any special requests from your end?",
      answer: "We just need a 110V outlet and at least 6 ft x 6 ft space to work our magic!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-brand-milk">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-4 uppercase tracking-tight">
              Frequently Asked
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Questions</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Everything you need to know about our mobile bartending services.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/90 backdrop-blur-sm rounded-lg border-none px-6 shadow-sm"
              >
                <AccordionTrigger className="font-poppins font-medium text-lg text-gray-900 hover:text-brand-orange transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-gray-700 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
