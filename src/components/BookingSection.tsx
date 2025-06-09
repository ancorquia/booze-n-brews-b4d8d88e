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
  {/* Full Name */}
  <div>
    <label htmlFor="full-name" className="form-label">Full Name *</label>
    <input id="full-name" name="Full Name" required className="form-input" />
  </div>

  {/* Email */}
  <div>
    <label htmlFor="email" className="form-label">Email *</label>
    <input id="email" name="Email" type="email" required className="form-input" />
  </div>

  {/* Phone Number */}
  <div>
    <label htmlFor="phone" className="form-label">Phone Number</label>
    <input id="phone" name="Phone Number" className="form-input" />
  </div>

  {/* Event Type */}
  <div>
    <label htmlFor="event-type" className="form-label">Event Type</label>
    <select id="event-type" name="Event Type" className="form-input">
      <option value="">Select Event Type</option>
      <option>Wedding</option>
      <option>Corporate</option>
      <option>Private Party</option>
      <option>Birthday Party</option>
      <option>Other</option>
    </select>
  </div>

  {/* Event Date */}
  <div>
    <label htmlFor="event-date" className="form-label">Event Date *</label>
    <input id="event-date" name="Event Date" type="date" required className="form-input" />
  </div>

  {/* Event Time Start */}
  <div>
    <label htmlFor="event-time" className="form-label">Event Time Start</label>
    <input id="event-time" name="Event Time Start" className="form-input" />
  </div>

  {/* Event Duration */}
  <div>
    <label htmlFor="duration" className="form-label">Event Duration (e.g., 2, 4, 6 hrs)</label>
    <input id="duration" name="Event Duration" className="form-input" />
  </div>

  {/* Venue Address */}
  <div>
    <label htmlFor="venue" className="form-label">Event Venue Address</label>
    <input id="venue" name="Event Venue Address" className="form-input" />
  </div>

  {/* Venue Type */}
  <div>
    <label htmlFor="venue-type" className="form-label">Venue Type</label>
    <select id="venue-type" name="Venue Type" className="form-input">
      <option value="">Select Venue Type</option>
      <option>Private Residence</option>
      <option>Outdoors (Garden, Parks, etc.)</option>
      <option>Community Center</option>
      <option>Club House</option>
      <option>Conference Room</option>
      <option>Events Place</option>
      <option>Other</option>
    </select>
  </div>

  {/* Guest Count */}
  <div>
    <label htmlFor="guest-count" className="form-label">Estimated Guest Count</label>
    <input id="guest-count" name="Estimated Guest Count" className="form-input" />
  </div>

  {/* Package */}
  <div>
    <label htmlFor="package" className="form-label">Choose Your Package</label>
    <select id="package" name="Package" className="form-input">
      <option value="">Choose Package</option>
      <option>Basic Package</option>
      <option>Deluxe Package</option>
    </select>
  </div>

  {/* Service */}
  <div>
    <label htmlFor="service" className="form-label">Choose Your Service</label>
    <select id="service" name="Service Type" className="form-input">
      <option value="">Choose Service</option>
      <option>Complete Bar Service (Recommended)</option>
      <option>Bartender Only</option>
    </select>
  </div>

  {/* Contact Mode */}
  <div className="md:col-span-2">
    <label htmlFor="contact-mode" className="form-label">Preferred Mode of Contact</label>
    <select id="contact-mode" name="Preferred Mode of Contact" className="form-input">
      <option value="">Select Preference</option>
      <option>Email Only</option>
      <option>Virtual Meeting</option>
      <option>Email and Phone Call</option>
    </select>
  </div>

  {/* Special Requests */}
  <div className="md:col-span-2">
    <label htmlFor="requests" className="form-label">Any Extras or Special Requests?</label>
    <textarea
      id="requests"
      name="Special Requests"
      className="form-input"
      rows={4}
      placeholder="Event theme, kids, cocktails, etc."
    ></textarea>
  </div>

  {/* Submit Button */}
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
