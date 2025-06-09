
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
        maxWidth: '800px', 
        margin: '0 auto', 
        background: 'white', 
        padding: '2rem 2rem 3rem', 
        borderRadius: '1.5rem', 
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)' 
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
          fontFamily: "'Allura', cursive", 
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

        <iframe 
          data-tally-src="https://tally.so/embed/m6zve5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy" 
          width="100%" 
          height="1922" 
          frameBorder="0" 
          marginHeight={0} 
          marginWidth={0}
          title="Request a Quote" 
          style={{ 
            border: 'none', 
            borderRadius: '12px' 
          }}
        />
      </div>
    </section>
  );
};

export default BookingSection;
