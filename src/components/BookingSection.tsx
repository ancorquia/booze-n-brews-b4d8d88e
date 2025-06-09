
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone } from "lucide-react";

const BookingSection = () => {
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

 const handleSubmit = async (e: React.FormEvent) => {
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

  try {
    const response = await fetch("/api/submit-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      toast({
        title: "Quote request submitted!",
        description: result.message || "We'll get back to you within 24 hours with a custom quote.",
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
    } else {
      toast({
        title: "Submission failed",
        description: result.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      title: "Submission failed",
      description: "Something went wrong. Please try again.",
      variant: "destructive"
    });
  }
};


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-24" style={{ backgroundColor: '#f1ebdf' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-poppins font-medium text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-tight">
              Ready to Make Your
              <span className="block">
                <span className="font-script text-brand-orange normal-case text-5xl md:text-6xl">Event Unforgettable?</span>
              </span>
            </h2>
            <p className="font-poppins text-lg text-gray-700 max-w-2xl mx-auto">
              Tell us a few details and we'll get back to you with a custom quote.
            </p>
          </div>

          {/* Booking Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 space-y-6 mb-8">
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
                  Guest Count
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
                Event Type
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

          {/* Rush Inquiries CTA */}
          <div className="text-center">
            <p className="font-poppins text-lg text-gray-700 mb-4">
              Need a quote ASAP? We accept rush events.
            </p>
            <Button 
              variant="outline"
              size="lg" 
              className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-poppins font-medium text-lg px-8 py-4 rounded-full transition-all duration-300"
              asChild
            >
              <a href="tel:+1-403-555-0123" className="flex items-center gap-2">
                <Phone size={20} />
                Call Us Today
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
