import { Shield, Award, Users, FileCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const safetyInfo = [
  {
    activity: "Kayaking",
    equipment: "Life jackets, waterproof bags, first aid kit",
    protocols: "River safety briefing, guide-to-guest ratio 1:6, emergency communication devices",
    requirements: "Minimum age 10, basic swimming ability recommended",
  },
  {
    activity: "Para Motor Gliding",
    equipment: "Certified para motor equipment, helmets, two-way radios",
    protocols: "Pre-flight safety check, flights with certified pilots, weather monitoring",
    requirements: "Minimum age 12, weight limit 100kg, no heart conditions",
  },
  {
    activity: "Hot Air Balloon",
    equipment: "Certified balloons, fire extinguishers, emergency landing gear",
    protocols: "Pre-flight weather check, experienced pilot, ground crew support",
    requirements: "Minimum age 6, mobility to climb into basket",
  },
  {
    activity: "Buggy Car",
    equipment: "Helmets, safety belts, roll cages, protective gear",
    protocols: "Safety briefing, designated trails, speed monitoring, guide escort",
    requirements: "Valid driver's license, minimum age 18, closed-toe shoes required",
  },
  {
    activity: "Rock Climbing",
    equipment: "Helmets, harnesses, ropes, climbing shoes, belay devices",
    protocols: "Equipment check, certified climbing guides, belaying techniques training",
    requirements: "Minimum age 8, no serious health conditions, basic fitness level",
  },
  {
    activity: "Zip-line",
    equipment: "Harnesses, helmets, gloves, backup safety lines",
    protocols: "Weight check, platform safety briefing, double-hook safety system",
    requirements: "Weight range 30-120kg, minimum age 7, closed-toe shoes",
  },
  {
    activity: "Tubing",
    equipment: "High-quality inner tubes, life jackets, waterproof bags",
    protocols: "River safety briefing, guide supervision, emergency response system",
    requirements: "Minimum age 10, basic swimming ability recommended",
  },
  {
    activity: "Stand Up Paddle Boarding",
    equipment: "Professional SUP boards, paddles, life jackets, safety leashes",
    protocols: "Water safety briefing, technique instruction, guide supervision",
    requirements: "Minimum age 12, basic swimming ability required, balance and coordination",
  },
  {
    activity: "Dirt Biking",
    equipment: "Quality dirt bikes, full-face helmets, protective gear and pads",
    protocols: "Safety briefing, trail assessment, guide escort, support vehicle backup",
    requirements: "Valid motorcycle license, minimum age 18, previous riding experience required",
  },
];

const companySafety = [
  {
    icon: Shield,
    title: "International Standards",
    description: "All equipment meets or exceeds international safety certifications",
  },
  {
    icon: Award,
    title: "Certified Guides",
    description: "Extensively trained and certified with years of experience",
  },
  {
    icon: Users,
    title: "Safety First",
    description: "Comprehensive safety protocols for all activities and participants",
  },
  {
    icon: FileCheck,
    title: "Regular Inspections",
    description: "Daily equipment checks and regular third-party safety audits",
  },
];

export const Safety = () => {
  return (
    <section id="safety" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Your Safety is Our Priority
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We maintain the highest safety standards to ensure your adventure is thrilling and secure
          </p>
        </div>

        {/* Company Safety Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {companySafety.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};
