import { useState } from "react";
import { Calendar, Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "11d067da-ccca-4410-bbc0-2fd9f65b7efe",
          from_name: "Jitesh Swimming Website",
          subject: "New Swimming Lesson Inquiry",
          to_email: "jiteshwadhwa57@gmail.com",
          reply_to: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferred_date: formData.date,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Appointment Request Sent!",
          description: "I'll contact you shortly to confirm your booking.",
          duration: 5000,
        });
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 lg:py-16 bg-ocean-50 relative">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean-300 to-ocean-200" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-ocean-100/40 rounded-full blur-3xl" />
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-ocean-200/20 rounded-full blur-3xl opacity-70 animate-float-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center py-1 px-3 text-sm font-medium text-ocean-600 bg-white rounded-full mb-3 shadow-sm">
            <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block" />
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-3">
            Book Your{" "}
            <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">
              Lesson
            </span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-4" />
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Schedule your swimming lessons or get in touch with me
          </p>
        </div>

        {/* Form + Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start max-w-6xl mx-auto">
          {/* Request Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-md p-6 lg:p-8 border border-white/80 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-ocean-800 mb-6 flex items-center">
              <span className="bg-ocean-50 p-1.5 rounded-md mr-2">
                <Calendar className="h-5 w-5 text-ocean-600" />
              </span>
              Request an Appointment
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ocean-700 text-sm font-medium">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ocean-700 text-sm font-medium">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-ocean-700 text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-ocean-700 text-sm font-medium">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-ocean-700 text-sm font-medium">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your swimming experience and goals"
                  className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md resize-none h-24"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <Button
                type="submit"
                className="bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-700 hover:to-ocean-600 text-white w-full py-2.5 rounded-md shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 mt-2"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                {isSubmitting ? "Sending..." : "Book Appointment"}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:sticky lg:top-24 space-y-5">
            <h3 className="text-xl font-bold text-ocean-800 mb-4 flex items-center">
              <span className="bg-ocean-50 p-1.5 rounded-md mr-2">
                <Mail className="h-5 w-5 text-ocean-600" />
              </span>
              Contact Information
            </h3>
            <div className="space-y-3">
              {/* Phone */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md shrink-0">
                  <Phone className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Phone</h4>
                  <p className="text-ocean-700">647-677-1331</p>
                </div>
              </div>
              {/* Email */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md shrink-0">
                  <Mail className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Email</h4>
                  <p className="text-ocean-700">jiteshwadhwa57@gmail.com</p>
                </div>
              </div>
              {/* Location */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md shrink-0">
                  <MapPin className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Location</h4>
                  <p className="text-ocean-700">Brampton – Mayfield & Hurontario</p>
                </div>
              </div>
              {/* Hours */}
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md shrink-0">
                  <Calendar className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Hours</h4>
                  <p className="text-ocean-700 mb-1">Hours may vary</p>
                  <p className="text-ocean-700">Mon–Fri 5 AM–7 AM • 5 PM–10 PM</p>
                  <p className="text-ocean-700">Weekends 6 AM–10 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width, centered map with pin */}
        <div className="mt-10 w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md h-64 border border-white/70">
          <iframe
            src="https://maps.google.com/maps?q=Mayfield%20%26%20Hurontario%20Brampton%2C%20ON&z=14&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
