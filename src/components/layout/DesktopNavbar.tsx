
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 glass-card border-b border-white/20 bg-white/10 backdrop-blur-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-ocean-700">Jitesh Wadhwa</span>
          <span className="text-xl font-light text-ocean-500">Swimming</span>
        </a>
        
        <nav className="flex items-center space-x-8">
          <a href="#home" className="animated-underline font-medium text-ocean-900 hover:text-ocean-700">
            Home
          </a>
          <a href="#about" className="animated-underline font-medium text-ocean-900 hover:text-ocean-700">
            About Us
          </a>
          <a href="#lessons" className="animated-underline font-medium text-ocean-900 hover:text-ocean-700">
            Lessons
          </a>
          <a href="#testimonials" className="animated-underline font-medium text-ocean-900 hover:text-ocean-700">
            Testimonials
          </a>
          <a href="#contact">
            <Button className="bg-ocean-500 hover:bg-ocean-600 text-white rounded-full px-6">
              Book Now
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNavbar;
