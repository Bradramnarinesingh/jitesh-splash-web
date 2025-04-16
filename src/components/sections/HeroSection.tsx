import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-50/30 via-white to-white"></div>
      
      {/* Subtle accent shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-ocean-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-10 w-32 h-32 bg-ocean-200/30 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-ocean-50 rounded-full mb-4">Professional Swimming Instructor</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4 leading-tight">
              Swim with Confidence & Joy
            </h1>
            <p className="text-lg text-ocean-700/90 mb-8 max-w-md">
              Expert swimming lessons for all ages and skill levels with certified instructor Jitesh Wadhwa.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="bg-ocean-600 hover:bg-ocean-700 text-white rounded-lg px-6 py-2.5 shadow-sm hover:shadow transition-all duration-300"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ 
                    behavior: "smooth" 
                  });
                }}
              >
                Book a Lesson
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border border-ocean-300 text-ocean-600 hover:text-ocean-700 hover:bg-ocean-50 rounded-lg px-6 py-2.5 transition-all duration-300"
                onClick={() => {
                  document.getElementById("lessons")?.scrollIntoView({ 
                    behavior: "smooth" 
                  });
                }}
              >
                View Pricing
              </Button>
            </div>
          </div>
          
          {/* Hero Image with modern design */}
          <div className="hidden lg:block relative">
            {/* Profile Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-md border border-gray-100">
              {/* Replace with the provided image of Jitesh */}
              <img 
                src="https://images.pexels.com/photos/261185/pexels-photo-261185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Jitesh Wadhwa - Swimming Instructor" 
                className="object-cover object-center w-full h-[450px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/40 via-transparent to-transparent"></div>
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-5 -left-5 bg-white shadow-md rounded-lg p-4 flex items-center space-x-3">
              <div className="bg-ocean-50 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ocean-600 font-medium">Trusted by</p>
                <p className="font-bold text-ocean-900 text-sm">500+ Students</p>
              </div>
            </div>
            
            <div className="absolute -top-5 -right-5 bg-white shadow-md rounded-lg p-3">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs font-medium text-ocean-900 mt-1">5.0 Rating</p>
            </div>
            
            {/* Experience badge */}
            <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-ocean-600 text-white py-2 px-3 rounded-lg shadow-md">
              <p className="text-xs font-medium">15+ Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
