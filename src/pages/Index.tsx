import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import LessonsSection from "@/components/sections/LessonsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const location = useLocation();

  // Handle scrolling when navigated from another page
  useEffect(() => {
    // Check if we have a scrollTo state
    if (location.state && location.state.scrollTo) {
      const targetId = location.state.scrollTo;
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Small delay to ensure all components are fully rendered
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        
        // Clean up the state
        window.history.replaceState({}, document.title);
      }
    }
  }, [location]);

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <LessonsSection />
      <SuccessStoriesSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
