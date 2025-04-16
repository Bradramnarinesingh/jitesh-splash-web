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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success message
    toast({
      title: "Appointment Request Sent!",
      description: "We'll contact you shortly to confirm your booking.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-ocean-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean-300 to-ocean-200"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-ocean-100/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-white rounded-full mb-3">Get Started</span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-4">Book Your Lesson</h2>
          <div className="w-16 h-1 bg-ocean-400 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Schedule your swimming lessons or get in touch with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-sm p-6 lg:p-8">
            <h3 className="text-xl font-bold text-ocean-800 mb-6">Request an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ocean-700 text-sm">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border-gray-200 focus:border-ocean-400 rounded-md"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ocean-700 text-sm">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="border-gray-200 focus:border-ocean-400 rounded-md"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-ocean-700 text-sm">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    className="border-gray-200 focus:border-ocean-400 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-ocean-700 text-sm">Preferred Date</Label>
                  <Input 
                    id="date"
                    name="date"
                    type="date"
                    className="border-gray-200 focus:border-ocean-400 rounded-md"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-ocean-700 text-sm">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your swimming experience and goals"
                  className="border-gray-200 focus:border-ocean-400 rounded-md h-28"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-ocean-600 hover:bg-ocean-700 text-white w-full py-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-ocean-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 flex items-start space-x-3 shadow-sm">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <Phone className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Phone</h4>
                  <p className="text-ocean-700">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-start space-x-3 shadow-sm">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <Mail className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Email</h4>
                  <p className="text-ocean-700">info@jiteshswimming.com</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-start space-x-3 shadow-sm">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <MapPin className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Location</h4>
                  <p className="text-ocean-700">123 Swim Lane, Watertown, NY 10001</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 flex items-start space-x-3 shadow-sm">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <Calendar className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Hours</h4>
                  <p className="text-ocean-700">Monday - Friday: 9am - 7pm</p>
                  <p className="text-ocean-700">Saturday: 9am - 5pm</p>
                  <p className="text-ocean-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-6 rounded-lg overflow-hidden h-60 bg-white shadow-sm flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-ocean-400 mx-auto mb-2" />
                <p className="text-ocean-600">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
