import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCard {
  title: string;
  description: string;
  features: string[];
}

const LessonsSection = () => {
  const services: ServiceCard[] = [
    {
      title: "Lifeguarding",
      description: "Professional lifeguard training and certification",
      features: [
        "Water safety techniques",
        "Rescue procedures",
        "First aid and CPR",
        "Emergency response",
        "Certification preparation"
      ],
    },
    {
      title: "Swim Teaching",
      description: "Learn to swim with expert instruction",
      features: [
        "Personalized lesson plans",
        "All skill levels welcome",
        "Proper technique development",
        "Water confidence building",
        "Safety-focused instruction"
      ],
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ocean-50/20 to-white -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-multiply -z-10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-gradient-to-bl from-ocean-200/30 to-ocean-300/10 rounded-full blur-3xl opacity-70 animate-float-slow -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-ocean-300/20 to-ocean-100/20 rounded-full blur-3xl opacity-60 animate-float -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-gradient-to-r from-ocean-50 to-ocean-100/80 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block"></span>
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-900 mb-4">Professional <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Swimming Services</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Expert swimming instruction and lifeguard training for all ages and skill levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-gray-100 shadow-sm bg-white/90"
            >
              {/* Subtle background pattern for cards */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_75%)]"></div>
              
              <CardHeader className="text-center pb-2 relative z-10">
                <CardTitle className="text-2xl font-bold text-ocean-900">{service.title}</CardTitle>
                <CardDescription className="text-ocean-600 mt-3">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4 relative z-10">
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-ocean-50 p-1 rounded-full mr-2 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-ocean-500 shrink-0" />
                      </div>
                      <span className="text-sm text-ocean-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  className="w-full transform transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-700 hover:to-ocean-600 text-white shadow-md hover:shadow-lg"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
