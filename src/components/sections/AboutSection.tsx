
import { Award, Clock, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-ocean-400" />,
      title: "Certified Instructor",
      description: "Trained and certified with years of professional teaching experience"
    },
    {
      icon: <Users className="w-8 h-8 text-ocean-400" />,
      title: "Small Class Sizes",
      description: "Personalized attention with limited students per class"
    },
    {
      icon: <Clock className="w-8 h-8 text-ocean-400" />,
      title: "Flexible Schedule",
      description: "Morning, afternoon, and weekend sessions available"
    },
    {
      icon: <Heart className="w-8 h-8 text-ocean-400" />,
      title: "All Ages Welcome",
      description: "Specialized programs for kids, adults, and seniors"
    }
  ];

  return (
    <section id="about" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-ocean-900 wave-bg -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-ocean-50 mb-4">About Jitesh Wadhwa</h2>
          <div className="w-20 h-1 bg-ocean-400 mx-auto mb-6"></div>
          <p className="text-ocean-200 max-w-2xl mx-auto">
            Discover the passion and expertise that makes our swimming lessons special
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Jitesh Wadhwa" 
                className="rounded-2xl shadow-xl object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-ocean-700 rounded-2xl -z-[1]"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 ocean-gradient rounded-full -z-[1] opacity-20"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ocean-100">Meet Your Instructor</h3>
            <p className="text-ocean-200">
              With over 15 years of experience teaching swimming to people of all ages, Jitesh Wadhwa has developed a teaching methodology that emphasizes safety, confidence, and enjoyment in the water.
            </p>
            <p className="text-ocean-200">
              Jitesh is certified by the National Swimming Association and has trained competitive swimmers as well as complete beginners. His patient approach and technical expertise ensure that every student develops proper technique while building water confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="glass-card p-5 flex flex-col items-center text-center bg-ocean-800/50">
                  <div className="mb-3">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-ocean-100 mb-2">{feature.title}</h4>
                  <p className="text-sm text-ocean-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
