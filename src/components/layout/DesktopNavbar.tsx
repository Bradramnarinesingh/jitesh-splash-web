import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const DesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If it's a hash link (like #about)
    if (href.startsWith('#')) {
      const targetId = href.replace('#', '');
      
      // If we're already on the home page, just scroll to the element
      if (isHomePage) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If we're on another page, navigate to home and then scroll
        navigate('/', { state: { scrollTo: targetId } });
      }
    } else {
      // For non-hash links, just navigate normally
      navigate(href);
    }
  };

  // If we navigated to home with a scrollTo instruction, scroll to that element
  useEffect(() => {
    if (location.pathname === '/' && location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // Clean up the state to avoid scrolling on refresh
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Success Stories", href: "#success-stories" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-3 bg-white shadow-sm border-b border-gray-200"
          : "py-5 bg-white shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href={isHomePage ? "#home" : "/"} 
          onClick={(e) => handleNavClick(e, isHomePage ? "#home" : "/")} 
          className="flex items-center space-x-2"
        >
          <span className="text-2xl font-bold text-ocean-800">Jitesh Wadhwa</span>
          <span className="text-xl font-light text-ocean-600">Swimming</span>
        </a>
        
        <nav className="flex items-center space-x-6">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <a 
                key={index}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)} 
                className={`animated-underline font-medium ${
                  isHomePage && location.hash === item.href 
                    ? 'text-ocean-900' 
                    : 'text-ocean-700 hover:text-ocean-900'
                }`}
              >
                {item.label}
              </a>
            ) : (
              <NavLink 
                key={index}
                to={item.href} 
                className={({ isActive }) => 
                  `animated-underline font-medium ${isActive ? 'text-ocean-900' : 'text-ocean-700 hover:text-ocean-900'}`
                }
              >
                {item.label}
              </NavLink>
            )
          ))}
          
          <a 
            href={isHomePage ? "#contact" : "/#contact"} 
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            <Button className="bg-ocean-600 hover:bg-ocean-700 text-white">
              Book Now
            </Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default DesktopNavbar;
