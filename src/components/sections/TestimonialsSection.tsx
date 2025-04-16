
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

const TestimonialsSection = () => {
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
    <section id="testimonials" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ocean-600 -z-10"></div>
      <div className="absolute inset-0 opacity-10 wave-bg -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-ocean-400 opacity-20 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-ocean-500 opacity-20 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">What Our Students Say</h2>
          <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-ocean-100 max-w-2xl mx-auto">
            Read about the experiences and transformations of our swimming students
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card p-8 md:p-12 bg-white/5">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 text-ocean-300 opacity-20">
              <Quote size={60} />
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {testimonials[currentIndex].image && (
                  <div className="flex-shrink-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].author}
                      className="w-24 h-24 rounded-full border-2 border-white/30 object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <blockquote className="text-lg md:text-xl text-white mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>
                  <div className="text-ocean-100">
                    <p className="font-semibold">{testimonials[currentIndex].author}</p>
                    <p className="text-sm opacity-80">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-ocean-500/20 hover:bg-ocean-500/30 text-white rounded-full h-10 w-10"
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
                      ? "w-6 bg-white" 
                      : "w-2 bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              size="icon"
              className="bg-ocean-500/20 hover:bg-ocean-500/30 text-white rounded-full h-10 w-10"
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

export default TestimonialsSection;
