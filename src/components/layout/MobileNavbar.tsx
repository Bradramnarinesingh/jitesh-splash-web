import { Info, Book, MessageSquare, Calendar, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
  isActive: boolean;
  isRoute?: boolean;
}

const MobileNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const pathname = window.location.pathname;
  const hash = window.location.hash;

  const navItems: NavItem[] = [
    {
      icon: <Info className="w-5 h-5" />,
      label: "About",
      href: "#about",
      isActive: hash === "#about",
    },
    {
      icon: <Book className="w-5 h-5" />,
      label: "Services",
      href: "#services",
      isActive: hash === "#services",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Success",
      href: "#success-stories",
      isActive: hash === "#success-stories",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Contact",
      href: "#contact",
      isActive: hash === "#contact",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      label: "Blog",
      href: "/blog",
      isActive: pathname.includes("blog"),
      isRoute: true,
    },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isRoute: boolean = false
  ) => {
    if (isRoute) return;

    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      if (isHomePage) {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: targetId } });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav
      className="
        lg:hidden
        fixed inset-x-0 bottom-0 z-50
        w-full
        bg-white border-t border-gray-200
        py-3
        shadow-sm
        overflow-x-hidden
      "
    >
      <div className="grid grid-cols-5 gap-1 w-full">
        {navItems.map((item) =>
          item.isRoute ? (
            <Link
              key={item.label}
              to={item.href}
              className={cn(
                "bottom-nav-item flex flex-col items-center text-xs",
                item.isActive
                  ? "text-ocean-700"
                  : "text-gray-500 hover:text-ocean-600"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ) : (
            <a
              key={item.label}
              href={isHomePage ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href, item.isRoute)}
              className={cn(
                "bottom-nav-item flex flex-col items-center text-xs",
                item.isActive
                  ? "text-ocean-700"
                  : "text-gray-500 hover:text-ocean-600"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          )
        )}
      </div>
    </nav>
  );
};

export default MobileNavbar;
