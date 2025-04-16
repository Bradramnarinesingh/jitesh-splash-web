import { Home, Info, Book, MessageSquare, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const MobileNavbar = () => {
  // Determine active route based on pathname and scroll position
  const pathname = window.location.pathname;
  
  const navItems: NavItem[] = [
    {
      icon: <Home className="w-5 h-5" />,
      label: "Home",
      href: "#home",
      isActive: pathname === "/" || pathname.includes("home"),
    },
    {
      icon: <Info className="w-5 h-5" />,
      label: "About",
      href: "#about",
      isActive: pathname.includes("about"),
    },
    {
      icon: <Book className="w-5 h-5" />,
      label: "Lessons",
      href: "#lessons",
      isActive: pathname.includes("lessons"),
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Testimonials",
      href: "#testimonials",
      isActive: pathname.includes("testimonials"),
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Contact",
      href: "#contact",
      isActive: pathname.includes("contact"),
    },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 px-2 py-3 shadow-sm">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={cn(
              "bottom-nav-item",
              item.isActive 
                ? "text-ocean-700" 
                : "text-gray-500 hover:text-ocean-600"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
