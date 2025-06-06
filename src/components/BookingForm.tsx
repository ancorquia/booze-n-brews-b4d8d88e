
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventDate: "",
    eventLocation: "",
    guestCount: "",
    eventType: "",
    additionalDetails: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email || !formData.eventDate || !formData.eventLocation) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Quote request submitted!",
      description: "We'll get back to you within 24 hours with a custom quote.",
    });

    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      eventDate: "",
      eventLocation: "",
      guestCount: "",
      eventType: "",
      additionalDetails: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-24 bg-brand-milk">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-4 uppercase tracking-tight">
              Let's Craft Your
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Event</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Tell us a few details and we'll get back to you with a custom quote.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName" className="font-poppins font-medium text-gray-900">
                  Full Name *
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="font-poppins"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="font-poppins font-medium text-gray-900">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="font-poppins"
                />
              </div>

              {/* Phone Number */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-poppins font-medium text-gray-900">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter your phone number"
                  className="font-poppins"
                />
              </div>

              {/* Event Date */}
              <div className="space-y-2">
                <Label htmlFor="eventDate" className="font-poppins font-medium text-gray-900">
                  Event Date *
                </Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => handleInputChange("eventDate", e.target.value)}
                  required
                  className="font-poppins"
                />
              </div>

              {/* Event Location */}
              <div className="space-y-2">
                <Label htmlFor="eventLocation" className="font-poppins font-medium text-gray-900">
                  Event Location *
                </Label>
                <Input
                  id="eventLocation"
                  type="text"
                  value={formData.eventLocation}
                  onChange={(e) => handleInputChange("eventLocation", e.target.value)}
                  placeholder="Enter event location"
                  required
                  className="font-poppins"
                />
              </div>

              {/* Guest Count */}
              <div className="space-y-2">
                <Label htmlFor="guestCount" className="font-poppins font-medium text-gray-900">
                  Estimated Guest Count
                </Label>
                <Input
                  id="guestCount"
                  type="number"
                  value={formData.guestCount}
                  onChange={(e) => handleInputChange("guestCount", e.target.value)}
                  placeholder="Number of guests"
                  className="font-poppins"
                />
              </div>
            </div>

            {/* Event Type */}
            <div className="space-y-2">
              <Label htmlFor="eventType" className="font-poppins font-medium text-gray-900">
                Type of Event
              </Label>
              <Select value={formData.eventType} onValueChange={(value) => handleInputChange("eventType", value)}>
                <SelectTrigger className="font-poppins">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate</SelectItem>
                  <SelectItem value="private">Private Party</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Additional Details */}
            <div className="space-y-2">
              <Label htmlFor="additionalDetails" className="font-poppins font-medium text-gray-900">
                Additional Details
              </Label>
              <Textarea
                id="additionalDetails"
                value={formData.additionalDetails}
                onChange={(e) => handleInputChange("additionalDetails", e.target.value)}
                placeholder="Tell us more about your event, special requests, or any questions you have..."
                rows={4}
                className="font-poppins resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <Button
                type="submit"
                size="lg"
                className="bg-brand-orange hover:bg-brand-orange/90 text-white font-poppins font-medium text-lg px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get My Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
