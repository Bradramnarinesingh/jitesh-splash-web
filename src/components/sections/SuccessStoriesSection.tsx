import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const SuccessStoriesSection = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Jitesh's teaching methodology is exceptional. My son was afraid of water, but after just 3 lessons, he was swimming confidently. I highly recommend his classes for children.",
      author: "Sarah Johnson",
      role: "Parent of 6-year-old",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "As an adult who never learned to swim, I was extremely nervous about taking lessons. Jitesh made me feel comfortable and tailored the program to my needs. Now I can swim laps confidently!",
      author: "Michael Chen",
      role: "Adult Student",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "The advanced techniques Jitesh taught my daughter helped her qualify for the regional swim team. His attention to detail and technical expertise is unmatched.",
      author: "Emma Williams",
      role: "Parent of Competitive Swimmer",
      image: "https://randomuser.me/api/portraits/women/23.jpg"
    },
    {
      quote: "I've tried multiple swimming instructors, but none compare to Jitesh. His patience and skill in breaking down complex movements made all the difference in my swimming journey.",
      author: "David Thompson",
      role: "Adult Student",
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="success-stories" className="py-16 relative overflow-hidden bg-gradient-to-b from-white to-ocean-50">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-1 bg-gradient-to-r from-transparent via-ocean-300 to-transparent"></div>
      
      {/* Blurred shapes */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-ocean-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-ocean-200/20 rounded-full blur-2xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-ocean-50 rounded-full mb-3">Success Stories</span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-4">Success Stories</h2>
          <div className="w-16 h-1 bg-ocean-400 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Read about the experiences and transformations of my swimming students
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-xl shadow-md p-6 md:p-8">
            {/* Quote icon */}
            <div className="absolute top-6 right-6 text-ocean-200/40">
              <Quote size={40} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {testimonials[currentIndex].image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-20 h-20 rounded-full border-4 border-ocean-50 object-cover shadow-sm"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <blockquote className="text-lg text-ocean-800 mb-4">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-ocean-900">
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm text-ocean-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              className="border border-ocean-200 bg-white hover:bg-ocean-50 text-ocean-600 rounded-full h-10 w-10"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            {/* Dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === currentIndex 
                      ? "w-6 bg-ocean-500" 
                      : "w-2 bg-ocean-200 hover:bg-ocean-300"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon"
              className="border border-ocean-200 bg-white hover:bg-ocean-50 text-ocean-600 rounded-full h-10 w-10"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
