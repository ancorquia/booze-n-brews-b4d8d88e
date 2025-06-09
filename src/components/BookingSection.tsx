'use client';

import React from 'react';

const BookingSection = () => {
  return (
    <section id="booking" className="bg-[#f1ebdf] px-4 pt-16 pb-8">
      <div className="text-center mb-10">
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

      <form
        id="booking-form"
        method="POST"
        className="bg-white max-w-4xl mx-auto rounded-2xl shadow-md px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <input name="Full Name" placeholder="Full Name *" className="form-input" required />
        <input name="Email" type="email" placeholder="Email *" className="form-input" required />
        <input name="Phone Number" placeholder="Phone Number" className="form-input" />
        <input name="Event Type" placeholder="Event Type (Birthday, Wedding, etc.)" className="form-input" />
        <input name="Event Date" type="date" placeholder="Event Date *" className="form-input" required />
        <input name="Event Time Start" placeholder="Event Time Start" className="form-input" />
        <input name="Event Duration" placeholder="Event Duration (e.g., 2, 4, 6 hrs)" className="form-input" />
        <input name="Event Venue Address" placeholder="Venue Address" className="form-input" />
        <input name="Venue Type" placeholder="Venue Type" className="form-input" />
        <input name="Estimated Guest Count" placeholder="Estimated Guest Count" className="form-input" />

        <select name="Package" className="form-input">
          <option value="">Choose your Package</option>
          <option value="Basic Package">Basic Package</option>
          <option value="Deluxe Package">Deluxe Package</option>
        </select>

        <select name="Service Type" className="form-input">
          <option value="">Choose your Service</option>
          <option value="Complete Bar Service">Complete Bar Service (Recommended)</option>
          <option value="Bartender Only">Bartender Only</option>
        </select>

        <select name="Preferred Mode of Contact" className="form-input md:col-span-2">
          <option value="">Preferred Mode of Contact</option>
          <option value="Email Only">Email only</option>
          <option value="Virtual Meeting">Virtual Meeting</option>
          <option value="Email and Phone Call">Email and Phone Call</option>
        </select>

        <textarea
          name="Special Requests"
          placeholder="Any extras or special requests? (e.g., theme, cocktails, kids)"
          className="form-input md:col-span-2"
          rows={4}
        ></textarea>

        <div className="md:col-span-2 text-center">
          <button
            type="submit"
            className="bg-[#f7843b] hover:bg-[#e87428] text-white font-medium rounded-full px-8 py-3 text-lg font-poppins transition"
          >
            Get My Quote
          </button>
        </div>
      </form>

      <p className="text-center mt-8 font-poppins text-gray-700">
        Need a quote ASAP? We accept rush events.
      </p>
      <div className="text-center mt-2">
        <a
          href="tel:+112345678910"
          className="inline-block bg-white text-[#f7843b] border border-[#f7843b] px-6 py-2 rounded-full font-poppins hover:bg-[#f7843b] hover:text-white transition"
        >
          📞 Call Us Today
        </a>
      </div>
    </section>
  );
};

export default BookingSection;
