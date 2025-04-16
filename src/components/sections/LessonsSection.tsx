
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
    <section id="lessons" className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-ocean-50 -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-ocean-900 mb-4">Swimming Lessons & Pricing</h2>
          <div className="w-20 h-1 bg-ocean-500 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Personalized swimming programs for every age and skill level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${plan.highlighted ? 'shadow-xl border-ocean-400 ring-2 ring-ocean-200' : 'shadow-lg'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0">
                  <div className="bg-ocean-500 text-white text-xs font-bold px-3 py-1 rotate-45 translate-x-6 translate-y-3">
                    Popular
                  </div>
                </div>
              )}
              
              <div className="absolute top-0 w-full h-1 ocean-gradient"></div>
              
              <CardHeader className="text-center pb-2">
                <div className="text-sm font-semibold text-ocean-600 mb-1">{plan.ageGroup}</div>
                <CardTitle className="text-2xl text-ocean-900">{plan.title}</CardTitle>
                <div className="my-4">
                  <span className="text-4xl font-bold text-ocean-800">{plan.price}</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-5 w-5 text-ocean-500 shrink-0 mt-0.5" />
                      <span className="text-ocean-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full rounded-xl ${
                    plan.highlighted 
                      ? "ocean-gradient" 
                      : "bg-white border border-ocean-300 text-ocean-700 hover:bg-ocean-50"
                  }`}
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-ocean-700 max-w-2xl mx-auto mb-6">
            Not sure which plan is right for you? Contact us for a free consultation to determine the best fit for your swimming goals.
          </p>
          <Button 
            variant="outline" 
            className="border-ocean-400 text-ocean-600 hover:text-ocean-700 hover:bg-ocean-50 rounded-full px-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LessonsSection;
