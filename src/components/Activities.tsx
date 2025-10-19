import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import kayakingImg from "@/assets/kayaking.jpg";
import paramotorImg from "@/assets/paramotor.jpg";
import balloonImg from "@/assets/balloon.jpg";
import buggyImg from "@/assets/buggy.jpg";
import climbingImg from "@/assets/climbing.jpg";
import ziplineImg from "@/assets/zipline.jpg";
import tubingImg from "@/assets/tubing.jpg";

const activities = [
  {
    id: "kayaking",
    name: "Kayaking",
    image: kayakingImg,
    description: "Paddle through crystal-clear waters surrounded by stunning limestone karsts",
    duration: "3-4 hours",
    difficulty: "Beginner to Intermediate",
  },
  {
    id: "paramotor",
    name: "Para Motor Gliding",
    image: paramotorImg,
    description: "Soar above Vang Vieng's dramatic landscape with a powered paraglider",
    duration: "2-3 hours",
    difficulty: "All levels",
  },
  {
    id: "balloon",
    name: "Hot Air Balloon",
    image: balloonImg,
    description: "Float peacefully over misty mountains and rice paddies at sunrise or sunset",
    duration: "3 hours",
    difficulty: "All levels",
  },
  {
    id: "buggy",
    name: "Buggy Car",
    image: buggyImg,
    description: "Race through rugged terrain and countryside trails on an adrenaline-pumping ride",
    duration: "2-3 hours",
    difficulty: "Intermediate",
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    image: climbingImg,
    description: "Challenge yourself on world-class limestone routes with expert guidance",
    duration: "4-5 hours",
    difficulty: "Beginner to Advanced",
  },
  {
    id: "zipline",
    name: "Zip-line",
    image: ziplineImg,
    description: "Fly through the jungle canopy on an exhilarating zipline adventure",
    duration: "3 hours",
    difficulty: "All levels",
  },
  {
    id: "tubing",
    name: "Tubing",
    image: tubingImg,
    description: "Relax and float down the Nam Song River on an inner tube, stopping at riverside bars",
    duration: "3-4 hours",
    difficulty: "Easy",
  },
];

export const Activities = () => {
  const handleBooking = (activityName: string) => {
    window.open(
      `https://wa.me/8562093439140?text=Hi! I'd like to book ${activityName}`,
      "_blank"
    );
  };

  const scrollToActivity = (activityId: string) => {
    document.querySelector(`#activity-${activityId}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="activities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Our Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated adventure experiences designed for all skill levels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer group"
              onClick={() => scrollToActivity(activity.id)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
                  {activity.name}
                </h3>
              </div>
              <CardHeader>
                <CardDescription>{activity.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-medium">{activity.duration}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Difficulty:</span>
                  <span className="font-medium">{activity.difficulty}</span>
                </div>
                <Button
                  className="w-full gap-2 mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBooking(activity.name);
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Book via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
