
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 lg:pt-28 pb-20 lg:pb-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern -z-10"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-ocean-100/30 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent -z-10"></div>
      
      {/* Animated Waves */}
      <div className="absolute top-20 left-0 right-0 h-32 opacity-10 -z-10">
        <div className="w-[200%] h-full bg-wave-pattern animate-wave"></div>
      </div>
      <div className="absolute bottom-20 left-0 right-0 h-24 opacity-15 -z-10">
        <div className="w-[200%] h-full bg-wave-pattern animate-wave-reverse"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ocean-900 mb-4 leading-tight">
            Swim with Confidence & Joy
          </h1>
          <p className="text-xl text-ocean-700 mb-8 max-w-2xl">
            Professional swimming lessons for all ages and skill levels with expert instructor Jitesh Wadhwa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="ocean-gradient rounded-full text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Lesson
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-ocean-400 text-ocean-600 hover:text-ocean-700 hover:bg-ocean-50 rounded-full text-lg px-8 py-6"
              onClick={() => document.getElementById("lessons")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Pricing
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
          <div className="relative w-full h-full">
            <div className="absolute -right-20 top-10 w-[500px] h-[500px] rounded-full glass-card opacity-20 animate-pulse-gentle"></div>
            <div className="absolute right-40 top-40 w-[300px] h-[300px] rounded-full glass-card opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Swimming instruction" 
              className="absolute right-0 top-1/2 transform -translate-y-1/2 rounded-3xl shadow-2xl border-4 border-white/50 object-cover w-[500px] h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
