import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ageGroup: string;
}

const LessonsSection = () => {
  const pricingPlans: PricingPlan[] = [
    {
      title: "Beginner Kids",
      price: "$120",
      description: "8 sessions, 30 minutes each",
      features: [
        "Water safety basics",
        "Floating techniques",
        "Breath control",
        "Basic swimming strokes",
        "Fun water games",
      ],
      ageGroup: "Ages 4-7",
    },
    {
      title: "Advanced Kids",
      price: "$150",
      description: "8 sessions, 45 minutes each",
      features: [
        "Advanced stroke technique",
        "Swimming endurance",
        "Diving introduction",
        "Water safety skills",
        "Race preparation",
      ],
      highlighted: true,
      ageGroup: "Ages 8-12",
    },
    {
      title: "Beginner Adults",
      price: "$180",
      description: "6 sessions, 45 minutes each",
      features: [
        "Water confidence building",
        "Basic swimming techniques",
        "Proper breathing methods",
        "Stroke development",
        "Personal fitness goals",
      ],
      ageGroup: "Ages 16+",
    },
    {
      title: "Advanced Adults",
      price: "$220",
      description: "6 sessions, 60 minutes each",
      features: [
        "Advanced stroke refinement",
        "Speed and endurance training",
        "Triathlon preparation",
        "Advanced diving techniques",
        "Personalized coaching",
      ],
      ageGroup: "Ages 16+",
    },
  ];

  return (
    <section id="lessons" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Modern background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-ocean-50/20 to-white -z-10"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] mix-blend-multiply -z-10"></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-gradient-to-bl from-ocean-200/30 to-ocean-300/10 rounded-full blur-3xl opacity-70 animate-float-slow -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-72 h-72 bg-gradient-to-tr from-ocean-300/20 to-ocean-100/20 rounded-full blur-3xl opacity-60 animate-float -z-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-gradient-to-r from-ocean-50 to-ocean-100/80 rounded-full shadow-sm">
              <span className="w-2 h-2 bg-ocean-500 rounded-full mr-2 inline-block"></span>
              Our Programs
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-ocean-900 mb-4">Swimming Lessons & <span className="bg-gradient-to-r from-ocean-600 to-ocean-500 inline-block text-transparent bg-clip-text">Pricing</span></h2>
          <div className="w-16 h-1 bg-gradient-to-r from-ocean-400 to-ocean-300 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Personalized swimming programs for every age and skill level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                ${plan.highlighted ? 
                  'border-ocean-200 shadow-md bg-gradient-to-b from-white via-ocean-50/30 to-white' : 
                  'border-gray-100 shadow-sm bg-white/90'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-0 -right-0">
                  <div className="bg-gradient-to-r from-ocean-500 to-ocean-400 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg shadow-md transform rotate-0 translate-x-0 translate-y-0">
                    Popular
                  </div>
                </div>
              )}
              
              {/* Subtle background pattern for cards */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.15),transparent_75%)]"></div>
              
              <CardHeader className={`text-center pb-2 relative z-10 ${plan.highlighted ? 'bg-gradient-to-b from-ocean-50/50 to-transparent' : ''}`}>
                <div className="text-sm font-medium text-ocean-600 mb-2">{plan.ageGroup}</div>
                <CardTitle className="text-xl font-bold text-ocean-900">{plan.title}</CardTitle>
                <div className="my-5">
                  <span className="text-3xl font-bold bg-gradient-to-r from-ocean-700 to-ocean-600 inline-block text-transparent bg-clip-text">{plan.price}</span>
                </div>
                <CardDescription className="text-ocean-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4 relative z-10">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-ocean-50 p-1 rounded-full mr-2 mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-ocean-500 shrink-0" />
                      </div>
                      <span className="text-sm text-ocean-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="relative z-10">
                <Button 
                  className={`w-full transform transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted 
                      ? "bg-gradient-to-r from-ocean-600 to-ocean-500 hover:from-ocean-700 hover:to-ocean-600 text-white shadow-md hover:shadow-lg" 
                      : "bg-white border border-ocean-200 text-ocean-700 hover:bg-ocean-50/80 hover:text-ocean-900"
                  }`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-white to-ocean-50/70 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto shadow-md border border-white/80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.1),transparent_80%)]"></div>
            <h3 className="text-xl font-semibold text-ocean-800 mb-3">Not sure which plan is right for you?</h3>
            <p className="text-ocean-700 mb-5">
              Contact us for a free consultation to determine the best fit for your swimming goals.
            </p>
            <Button 
              variant="outline" 
              className="border-ocean-300 bg-white/80 backdrop-blur-sm text-ocean-600 hover:text-ocean-700 hover:bg-white transform transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
