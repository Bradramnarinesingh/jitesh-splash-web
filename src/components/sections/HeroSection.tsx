import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from '../../assets/hero-experience.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-10 pb-12 md:py-24 overflow-hidden bg-gradient-to-b from-white via-ocean-50/20 to-white">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.015] mix-blend-multiply"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-ocean-200/40 to-ocean-400/20 rounded-full blur-3xl opacity-60 animate-float-slow"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-ocean-300/30 to-ocean-100/30 rounded-full blur-3xl opacity-70 animate-float"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <div className="absolute -left-10 top-10 w-20 h-20 bg-ocean-100 rounded-full blur-xl opacity-70"></div>
            <div className="relative backdrop-blur-[2px] p-1 rounded-lg">
              <span className="inline-flex items-center py-1 px-3 text-sm font-medium text-ocean-600 bg-gradient-to-r from-ocean-50 to-ocean-100/80 rounded-full mb-4 shadow-sm">
                <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 animate-pulse"></span>
                Professional Swimming Instructor
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ocean-900 mb-4 md:mb-6 leading-tight">
                Swim with <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Confidence</span> & Joy
              </h1>
              <p className="text-lg text-ocean-700/90 mb-6 md:mb-8 max-w-md">
                Expert swimming lessons for all ages and skill levels with certified instructor Jitesh Wadhwa.
              </p>
              <p className="text-md text-ocean-600 mb-6 font-medium">
                Trusted by 150+ students
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-700 hover:to-ocean-600 text-white rounded-lg px-6 py-3 shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5"
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
                  className="border border-ocean-300 text-ocean-600 hover:text-ocean-700 hover:bg-ocean-50/80 backdrop-blur-sm rounded-lg px-6 py-2.5 transition-all duration-300"
                  onClick={() => {
                    document.getElementById("services")?.scrollIntoView({ 
                      behavior: "smooth" 
                    });
                  }}
                >
                  View Services
                </Button>
              </div>
            </div>
          </div>
          
          {/* Mobile Hero Image */}
          <div className="lg:hidden mt-6 relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_60%)]"></div>
            
            {/* Profile Image Container */}
            <div className="relative rounded-xl overflow-hidden shadow-md border border-white/50 backdrop-blur-sm">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-ocean-900/20 to-transparent z-10"></div>
              
              {/* Image */}
              <img 
                src="https://t3.ftcdn.net/jpg/08/44/84/22/360_F_844842278_3Hn98RFHvaQbWdzCdjWiJfCL6SwjGG6v.jpg"
                alt="Jitesh Wadhwa - Swimming Instructor" 
                className="object-cover object-center w-full h-[280px]"
              />
              
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-ocean-900/80 to-transparent z-20">
                <h3 className="text-white text-lg font-semibold mb-0.5">Jitesh Wadhwa</h3>
                <p className="text-ocean-100 text-xs">Professional Swimming Coach</p>
              </div>
            </div>
            
            {/* Mobile Stats */}
            <div className="flex justify-between mt-3">
              <div className="bg-white/90 backdrop-blur-md shadow-sm rounded-lg p-2 flex items-center space-x-2 border border-ocean-50">
                <div className="bg-gradient-to-br from-ocean-100 to-ocean-50 p-1.5 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-ocean-600 font-medium">Experience</p>
                  <p className="font-bold text-ocean-900 text-xs">9+ years</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Hero Image with modern design */}
          <div className="hidden lg:block relative">
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08)_0,transparent_60%)]"></div>
            <div className="absolute -left-4 -bottom-4 w-64 h-64 bg-gradient-to-tr from-ocean-100 to-ocean-200/0 rounded-full blur-2xl opacity-70 -z-10"></div>
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-gradient-to-bl from-ocean-200 to-ocean-100/0 rounded-full blur-xl opacity-70 -z-10"></div>
            
            {/* Profile Image Container */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/50 backdrop-blur-sm transform transition-transform duration-500 hover:scale-[1.01] group">
              {/* Glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/60 via-ocean-900/20 to-transparent z-10"></div>
              
              {/* Image */}
              <img 
                src="https://t3.ftcdn.net/jpg/08/44/84/22/360_F_844842278_3Hn98RFHvaQbWdzCdjWiJfCL6SwjGG6v.jpg"
                alt="Jitesh Wadhwa - Swimming Instructor" 
                className="object-cover object-center w-full h-[450px] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ocean-900/80 to-transparent z-20 transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                <h3 className="text-white text-xl font-semibold mb-1">Jitesh Wadhwa</h3>
                <p className="text-ocean-100 text-sm">Professional Swimming Coach</p>
              </div>
            </div>
            
            {/* Stats cards */}
            <div className="absolute -bottom-5 right-8 bg-white/90 backdrop-blur-md shadow-lg rounded-lg p-4 flex items-center space-x-3 border border-ocean-50">
              <div className="bg-gradient-to-br from-ocean-100 to-ocean-50 p-2 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ocean-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-ocean-600 font-medium">Experience</p>
                <p className="font-bold text-ocean-900 text-sm">9+ years</p>
              </div>
            </div>
            
            {/* Experience badge */}
            <div className="absolute top-20 right-0 transform bg-gradient-to-r from-ocean-600 to-ocean-500 text-white py-2 px-3 rounded-lg shadow-lg z-20">
              <p className="text-xs font-medium">Trusted by 150+ students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
