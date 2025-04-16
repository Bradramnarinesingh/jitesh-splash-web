
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-ocean-800 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Jitesh Wadhwa Swimming</h3>
            <p className="text-ocean-100 max-w-xs">
              Professional swimming lessons for all ages and skill levels. Learn to swim with confidence and joy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-ocean-300 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-ocean-300 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-ocean-300 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-ocean-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-ocean-300 transition-colors">About Us</a></li>
              <li><a href="#lessons" className="hover:text-ocean-300 transition-colors">Lessons</a></li>
              <li><a href="#testimonials" className="hover:text-ocean-300 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-ocean-300 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <div className="space-y-2">
              <p className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@jiteshswimming.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-ocean-700 text-center text-sm text-ocean-200">
          <p>© {new Date().getFullYear()} Jitesh Wadhwa Swimming. All rights reserved.</p>
        </div>
      </div>
      
      {/* Decorative waves */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-10">
        <div className="w-[200%] h-full bg-wave-pattern animate-wave-reverse"></div>
      </div>
    </footer>
  );
};

export default Footer;
