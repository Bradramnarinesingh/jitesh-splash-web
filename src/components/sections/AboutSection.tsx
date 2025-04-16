import { Award, Clock, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-ocean-600" />,
      title: "Certified Instructor",
      description: "Trained and certified with years of professional teaching experience"
    },
    {
      icon: <Users className="w-6 h-6 text-ocean-600" />,
      title: "Small Class Sizes",
      description: "Personalized attention with limited students per class"
    },
    {
      icon: <Clock className="w-6 h-6 text-ocean-600" />,
      title: "Flexible Schedule",
      description: "Morning, afternoon, and weekend sessions available"
    },
    {
      icon: <Heart className="w-6 h-6 text-ocean-600" />,
      title: "All Ages Welcome",
      description: "Specialized programs for kids, adults, and seniors"
    }
  ];

  return (
    <section id="about" className="py-20 bg-ocean-50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-ocean-400 to-ocean-300"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-ocean-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-ocean-200 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-ocean-100/50 rounded-full mb-3">About</span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-4">About Jitesh Wadhwa</h2>
          <div className="w-16 h-1 bg-ocean-400 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Discover the passion and expertise that makes our swimming lessons special
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/jitesh-profile.jpg" 
                alt="Jitesh Wadhwa" 
                className="object-cover object-center w-full h-[400px]"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 h-24 bg-ocean-100 rounded-xl -z-10"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-ocean-300/20 to-ocean-200/20 rounded-xl -z-10"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ocean-800">Meet Your Instructor</h3>
            <p className="text-ocean-700">
              With over 15 years of experience teaching swimming to people of all ages, Jitesh Wadhwa has developed a teaching methodology that emphasizes safety, confidence, and enjoyment in the water.
            </p>
            <p className="text-ocean-700">
              Jitesh is certified by the National Swimming Association and has trained competitive swimmers as well as complete beginners. His patient approach and technical expertise ensure that every student develops proper technique while building water confidence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-ocean-100 flex items-start space-x-3 hover:shadow-md transition-shadow duration-300">
                  <div className="bg-ocean-50 p-2 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-ocean-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-ocean-600">{feature.description}</p>
                  </div>
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
