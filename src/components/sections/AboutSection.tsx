import { Award, Clock, Heart, Users } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-ocean-600" />,
      title: "Certified Instructor",
      description: "Trained and certified with years of professional teaching experience"
    },
    {
      icon: <Users className="w-6 h-6 text-ocean-600" />,
      title: "Small Class Sizes",
      description: "Personalized attention with limited students per class"
    },
    {
      icon: <Clock className="w-6 h-6 text-ocean-600" />,
      title: "Flexible Schedule",
      description: "Weekday and weekend sessions available."
    },
    {
      icon: <Heart className="w-6 h-6 text-ocean-600" />,
      title: "All Ages Welcome",
      description: "Specialized programs for kids, adults, and seniors"
    }
  ];

  const formSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number is required"),
    date: z.string().min(1, "Date is required"),
    message: z.string().min(1, "Message is required"),
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // ...
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-ocean-50/40 to-white -z-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-ocean-200/30 to-ocean-100/20 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-ocean-300/20 to-ocean-100/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent_70%)] mix-blend-multiply"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-gradient-to-r from-ocean-50 to-ocean-100/80 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block"></span>
              About
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-900 mb-4">About Jitesh <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Wadhwa</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Discover the passion and expertise that makes our swimming lessons special
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-gradient-to-tr from-ocean-200/50 to-ocean-300/30 rounded-full blur-3xl -z-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/50 group transform transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-800/70 via-ocean-900/20 to-transparent z-10"></div>
              <img 
                src="https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Jitesh Wadhwa" 
                className="object-cover object-center w-full h-[450px] transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-ocean-900/80 to-transparent transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0 z-20">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-1.5 h-1.5 bg-ocean-400 rounded-full"></div>
                  <p className="text-white/80 text-sm">Certified Professional</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 -left-4 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-3 border border-ocean-50 transform rotate-[-5deg]">
              <p className="text-ocean-800 font-medium text-sm">Professional Coach</p>
            </div>
          </div>
          
          <div className="space-y-8 relative">
            <div className="absolute -right-10 top-0 w-32 h-32 bg-ocean-100/40 rounded-full blur-xl -z-10"></div>
            <div className="relative backdrop-blur-[1px]">
              <h3 className="text-2xl font-bold text-ocean-800 mb-3">Meet Your Instructor</h3>
              <p className="text-ocean-700 leading-relaxed">
                Jitesh Wadhwa has developed a teaching methodology that emphasizes safety, confidence, and enjoyment in the water.
              </p>
              <p className="text-ocean-700 leading-relaxed mt-4">
                Jitesh is certified by the Lifesaving Society of Ontario and has trained competitive swimmers as well as complete beginners. His patient approach and technical expertise ensure that every student develops proper technique while building water confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-ocean-100 flex items-start space-x-4 hover:shadow-md hover:bg-white transform transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-ocean-50 to-ocean-100 p-3 rounded-xl shadow-sm">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-ocean-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-ocean-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
