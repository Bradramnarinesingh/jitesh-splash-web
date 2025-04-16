
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
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ocean-900 mb-4">Book Your Lesson</h2>
          <div className="w-20 h-1 bg-ocean-500 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Schedule your swimming lessons or get in touch with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="glass-card p-8 lg:p-10 bg-white/40">
            <h3 className="text-2xl font-bold text-ocean-800 mb-6">Request an Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ocean-700">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    placeholder="Your name"
                    className="border-ocean-200 focus:border-ocean-400"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-ocean-700">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    className="border-ocean-200 focus:border-ocean-400"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-ocean-700">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    className="border-ocean-200 focus:border-ocean-400"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-ocean-700">Preferred Date</Label>
                  <Input 
                    id="date"
                    name="date"
                    type="date"
                    className="border-ocean-200 focus:border-ocean-400"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-ocean-700">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your swimming experience and goals"
                  className="border-ocean-200 focus:border-ocean-400 h-32"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="ocean-gradient w-full rounded-xl text-white py-6"
              >
                <Send className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-ocean-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="bg-white/40 rounded-xl p-5 flex items-start space-x-4">
                <div className="bg-ocean-100 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 mb-1">Phone</h4>
                  <p className="text-ocean-600">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="bg-white/40 rounded-xl p-5 flex items-start space-x-4">
                <div className="bg-ocean-100 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 mb-1">Email</h4>
                  <p className="text-ocean-600">info@jiteshswimming.com</p>
                </div>
              </div>
              
              <div className="bg-white/40 rounded-xl p-5 flex items-start space-x-4">
                <div className="bg-ocean-100 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 mb-1">Location</h4>
                  <p className="text-ocean-600">123 Swim Lane, Watertown, NY 10001</p>
                </div>
              </div>
              
              <div className="bg-white/40 rounded-xl p-5 flex items-start space-x-4">
                <div className="bg-ocean-100 p-3 rounded-full">
                  <Calendar className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 mb-1">Hours</h4>
                  <p className="text-ocean-600">Monday - Friday: 9am - 7pm</p>
                  <p className="text-ocean-600">Saturday: 9am - 5pm</p>
                  <p className="text-ocean-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-6 rounded-xl overflow-hidden h-60 bg-gray-200 flex items-center justify-center">
              <p className="text-ocean-500">Interactive Map Would Go Here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
