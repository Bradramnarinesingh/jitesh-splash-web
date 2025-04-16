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
    <section id="lessons" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.svg')] opacity-[0.02] -z-10"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-ocean-100/50 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 text-sm font-medium text-ocean-600 bg-ocean-50 rounded-full mb-3">Our Programs</span>
          <h2 className="text-3xl font-bold text-ocean-900 mb-4">Swimming Lessons & Pricing</h2>
          <div className="w-16 h-1 bg-ocean-400 mx-auto mb-6"></div>
          <p className="text-ocean-700 max-w-2xl mx-auto">
            Personalized swimming programs for every age and skill level
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden hover:shadow-md transition-shadow duration-300 
                ${plan.highlighted ? 'border-ocean-200 shadow-md' : 'border-gray-100 shadow-sm'}`}
            >
              {plan.highlighted && (
                <div className="absolute top-3 right-3">
                  <div className="bg-ocean-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center pb-2 ${plan.highlighted ? 'bg-ocean-50/50' : ''}`}>
                <div className="text-sm font-medium text-ocean-600 mb-1">{plan.ageGroup}</div>
                <CardTitle className="text-xl font-bold text-ocean-900">{plan.title}</CardTitle>
                <div className="my-4">
                  <span className="text-3xl font-bold text-ocean-800">{plan.price}</span>
                </div>
                <CardDescription className="text-ocean-600">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 pt-4">
                <ul className="space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="mr-2 h-4 w-4 text-ocean-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-ocean-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${
                    plan.highlighted 
                      ? "bg-ocean-600 hover:bg-ocean-700 text-white" 
                      : "bg-white border border-ocean-200 text-ocean-700 hover:bg-ocean-50"
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
          <div className="bg-ocean-50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-lg font-semibold text-ocean-800 mb-2">Not sure which plan is right for you?</h3>
            <p className="text-ocean-700 mb-4">
              Contact us for a free consultation to determine the best fit for your swimming goals.
            </p>
            <Button 
              variant="outline" 
              className="border-ocean-300 bg-white text-ocean-600 hover:text-ocean-700 hover:bg-ocean-50"
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
