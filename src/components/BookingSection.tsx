
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
        padding: '3rem 1rem', 
        borderRadius: '1rem' 
      }}
      className="mx-auto max-w-6xl my-8"
    >
      <h2 
        style={{ 
          textAlign: 'center', 
          fontFamily: "'Poppins', sans-serif", 
          color: '#f7843b', 
          fontSize: '2rem', 
          marginBottom: '2rem' 
        }}
      >
        Let's Craft Something Unforgettable
      </h2>
      <iframe 
        data-tally-src="https://tally.so/embed/m6zve5?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
        loading="lazy" 
        width="100%" 
        height="1922" 
        frameBorder="0" 
        marginHeight={0} 
        marginWidth={0} 
        title="Request a Quote"
      />
    </section>
  );
};

export default BookingSection;
