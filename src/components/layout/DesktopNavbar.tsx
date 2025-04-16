
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={cn(
        "hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 glass-card border-b border-white/20 bg-ocean-900/75 backdrop-blur-md"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-ocean-50">Jitesh Wadhwa</span>
          <span className="text-xl font-light text-ocean-200">Swimming</span>
        </a>
        
        <nav className="flex items-center space-x-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, "#home")} 
            className="animated-underline font-medium text-ocean-50 hover:text-white"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, "#about")} 
            className="animated-underline font-medium text-ocean-50 hover:text-white"
          >
            About Us
          </a>
          <a 
            href="#lessons" 
            onClick={(e) => handleNavClick(e, "#lessons")} 
            className="animated-underline font-medium text-ocean-50 hover:text-white"
          >
            Lessons
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => handleNavClick(e, "#testimonials")} 
            className="animated-underline font-medium text-ocean-50 hover:text-white"
          >
            Testimonials
          </a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
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
