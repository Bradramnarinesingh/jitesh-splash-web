
import { Home, Info, Book, MessageSquare, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
}

const MobileNavbar = () => {
  // Determine active route based on pathname
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

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 glass-card rounded-none rounded-t-xl border-t border-white/20 px-2 py-3 bg-ocean-500/90 backdrop-blur-lg">
      <div className="grid grid-cols-5 gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.href}
            className={cn(
              "bottom-nav-item",
              item.isActive 
                ? "text-white" 
                : "text-white/70 hover:text-white"
            )}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
