import { Twitter, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ocean-50 text-ocean-800 py-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-ocean-200 to-ocean-100"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ocean-900">Jitesh Wadhwa Swimming</h3>
            <p className="text-ocean-700 max-w-xs">
              Professional swimming lessons for all ages and skill levels. Learn to swim with confidence and joy.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/swimprotraining" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/swimprotraining" target="_blank" rel="noopener noreferrer" className="text-ocean-600 hover:text-ocean-800 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-ocean-700 hover:text-ocean-900 transition-colors">Home</a></li>
              <li><a href="#about" className="text-ocean-700 hover:text-ocean-900 transition-colors">About</a></li>
              <li><a href="#services" className="text-ocean-700 hover:text-ocean-900 transition-colors">Services</a></li>
              <li><a href="#success-stories" className="text-ocean-700 hover:text-ocean-900 transition-colors">Success Stories</a></li>
              <li><Link to="/blog" className="text-ocean-700 hover:text-ocean-900 transition-colors">Blog</Link></li>
              <li><a href="#contact" className="text-ocean-700 hover:text-ocean-900 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-900">Contact Me</h4>
            <div className="space-y-2">
              <p className="flex items-center space-x-2 text-ocean-700">
                <Phone size={16} className="text-ocean-600" />
                <span>647-677-1331</span>
              </p>
              <p className="flex items-center space-x-2 text-ocean-700">
                <Mail size={16} className="text-ocean-600" />
                <span>jiteshwadhwa57@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-ocean-200 text-center text-sm text-ocean-600">
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
