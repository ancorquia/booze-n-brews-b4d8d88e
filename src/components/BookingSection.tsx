
"use client";

import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    // Load Tally embed script
    const loadTallyScript = () => {
      if (typeof window !== 'undefined') {
        const d = document;
        const w = "https://tally.so/widgets/embed.js";
        
        const v = function () {
          if (typeof (window as any).Tally !== 'undefined') {
            (window as any).Tally.loadEmbeds();
          } else {
            d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (e: any) {
              e.src = e.dataset.tallySrc;
            });
          }
        };

        if (typeof (window as any).Tally !== 'undefined') {
          v();
        } else if (d.querySelector(`script[src="${w}"]`) == null) {
          const s = d.createElement("script");
          s.src = w;
          s.onload = v;
          s.onerror = v;
          d.body.appendChild(s);
        }
      }
    };

    loadTallyScript();
  }, []);

  return (
    <>
      {/* Elegant Headline Section */}
      <section id="booking" className="bg-[#f1ebdf] px-4 pt-16 pb-4">
  <div className="text-center mb-16">
    <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-tight">
      Ready to Make Your
      <span className="block">
        <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">
          Event Unforgettable?
        </span>
      </span>
    </h2>
    <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
      Tell us a few details and we'll get back to you with a custom quote.
    </p>
  </div>
</section>


      {/* Form Container Section */}
      <section style={{ 
        backgroundColor: '#f1ebdf', 
        padding: '0 1rem 4rem' 
      }}>
        <div style={{ 
          maxWidth: '880px', 
          margin: '0 auto', 
          background: 'white', 
          padding: '2.5rem 2rem 3rem', 
          borderRadius: '24px', 
          boxShadow: '0 10px 28px rgba(0,0,0,0.07)' 
        }}>
          <div style={{ 
            width: '100%', 
            overflowX: 'hidden', 
            overflowY: 'auto', 
            maxHeight: '950px' 
          }}>
         <section className="bg-[#f1ebdf] px-4 pb-16">
  <div className="max-w-[880px] mx-auto bg-white p-10 rounded-3xl shadow-md">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSeLi5nkNDPJabndiE_k3ucd4sYzQSMYOBbA2r4zHcBCW2e23A/viewform?embedded=true"
      width="100%"
      height="1500"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Booze N’ Brews Quote Form"
      className="w-full rounded-xl"
      style={{ border: 'none' }}
    >
      Loading…
    </iframe>
  </div>
</section>

          </div>
        </div>
      </section>

      {/* Call Us Today CTA */}
      <section style={{ 
        backgroundColor: '#f1ebdf', 
        paddingTop: '2rem', 
        textAlign: 'center' 
      }}>
        <p style={{ 
          fontFamily: "'Poppins', sans-serif", 
          fontSize: '1rem', 
          color: '#333' 
        }}>
          Need a quote ASAP? We accept rush events.
        </p>
        <a 
          href="tel:+112345678910" 
          style={{ 
            backgroundColor: '#f7843b', 
            color: 'white', 
            padding: '0.75rem 1.5rem', 
            fontFamily: "'Poppins', sans-serif", 
            borderRadius: '999px', 
            textDecoration: 'none', 
            display: 'inline-block', 
            marginTop: '0.5rem' 
          }}
        >
          📞 Call Us Today
        </a>
      </section>
    </>
  );
};

export default BookingSection;
