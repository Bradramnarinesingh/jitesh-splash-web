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
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ocean-200/20 rounded-full blur-3xl opacity-70 animate-float-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-flex items-center py-1 px-3 text-sm font-medium text-ocean-600 bg-white rounded-full mb-3 shadow-sm">
            <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block"></span>
            Get Started
          </span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-4">Book Your <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Lesson</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Schedule your swimming lessons or get in touch with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-md p-6 lg:p-8 border border-white/80 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold text-ocean-800 mb-6 flex items-center">
              <span className="bg-ocean-50 p-1.5 rounded-md mr-2">
                <Calendar className="h-5 w-5 text-ocean-600" />
              </span>
              Request an Appointment
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-ocean-700 text-sm font-medium">Full Name</Label>
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
                  <Label htmlFor="email" className="text-ocean-700 text-sm font-medium">Email Address</Label>
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
                  <Label htmlFor="phone" className="text-ocean-700 text-sm font-medium">Phone Number</Label>
                  <Input 
                    id="phone"
                    name="phone"
                    placeholder="Your phone"
                    className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-ocean-700 text-sm font-medium">Preferred Date</Label>
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
                <Label htmlFor="message" className="text-ocean-700 text-sm font-medium">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us about your swimming experience and goals"
                  className="border-gray-200 focus:border-ocean-400 focus:ring-ocean-200 rounded-md resize-none h-24"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-700 hover:to-ocean-600 text-white w-full py-2.5 rounded-md shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 mt-2"
              >
                <Send className="mr-2 h-4 w-4" />
                Book Appointment
              </Button>
            </form>
          </div>
          
          <div className="space-y-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-ocean-800 mb-2 flex items-center">
              <span className="bg-ocean-50 p-1.5 rounded-md mr-2">
                <Mail className="h-5 w-5 text-ocean-600" />
              </span>
              Contact Information
            </h3>
            
            <div className="space-y-4 flex-1">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <Phone className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Phone</h4>
                  <p className="text-ocean-700">(123) 456-7890</p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <Mail className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Email</h4>
                  <p className="text-ocean-700">info@jiteshswimming.com</p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
                <div className="bg-ocean-50 p-2 rounded-md">
                  <MapPin className="h-5 w-5 text-ocean-600" />
                </div>
                <div>
                  <h4 className="font-medium text-ocean-800 text-sm mb-1">Location</h4>
                  <p className="text-ocean-700">123 Swim Lane, Watertown, NY 10001</p>
                </div>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 flex items-start space-x-3 shadow-sm border border-white/70 hover:shadow-md transition-shadow duration-300">
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
            <div className="mt-auto rounded-lg overflow-hidden h-[180px] bg-white/90 shadow-md flex items-center justify-center border border-white/70 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <MapPin className="h-8 w-8 text-ocean-400 mx-auto mb-2" />
                <p className="text-ocean-600">Interactive Map</p>
                <p className="text-ocean-500 text-sm mt-1">Coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
