
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
    <section 
      id="booking" 
      style={{ 
        backgroundColor: '#f1ebdf', 
        padding: '4rem 1rem' 
      }}
    >
      <div style={{ 
        maxWidth: '880px', 
        margin: '0 auto', 
        background: 'white', 
        padding: '2.5rem 2rem 3rem', 
        borderRadius: '24px', 
        boxShadow: '0 10px 28px rgba(0,0,0,0.07)' 
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontFamily: "'Poppins', sans-serif", 
          fontSize: '2rem', 
          color: '#1a1a1a', 
          marginBottom: '0.25rem' 
        }}>
          READY TO MAKE YOUR
        </h2>
        <h3 style={{ 
          textAlign: 'center', 
          fontFamily: "'Barista Script', cursive", 
          fontSize: '2rem', 
          color: '#f7843b', 
          marginTop: '0' 
        }}>
          Event Unforgettable?
        </h3>
        <p style={{ 
          textAlign: 'center', 
          fontFamily: "'Poppins', sans-serif", 
          fontSize: '1rem', 
          color: '#333', 
          marginBottom: '2rem' 
        }}>
          Tell us a few details and we'll get back to you with a custom quote.
        </p>
        <div style={{ height: '900px', overflow: 'auto' }}>
          <iframe 
            data-tally-src="https://tally.so/embed/m6zve5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy" 
            width="100%" 
            height="1000" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            title="Request a Quote" 
            style={{ 
              border: 'none', 
              borderRadius: '16px' 
            }}
          />
        </div>
      </div>

      {/* Call Us Button */}
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
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
            display: 'inline-block' 
          }}
        >
          📞 Call Us Today
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
