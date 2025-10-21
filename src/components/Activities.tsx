import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import kayakingImg from "@/assets/kayaking.jpg";
import paramotorImg from "@/assets/paramotor.jpg";
import balloonImg from "@/assets/balloon.jpg";
import buggyImg from "@/assets/buggy.jpg";
import climbingImg from "@/assets/climbing.jpg";
import ziplineImg from "@/assets/zipline.jpg";
import tubingImg from "@/assets/tubing.jpg";
import supImg from "@/assets/sup.jpg";
import dirtbikeImg from "@/assets/dirtbike.jpg";
import paraglidingImg from "@/assets/paragliding.jpg";

const activities = [
  {
    id: "buggy",
    name: "Buggy Ride",
    images: [buggyImg, buggyImg],
    description: "Race through rugged terrain and countryside trails",
    duration: "Minimum 2 hours",
    price: "700,000 Kip (2-seater) / 900,000 Kip (4-seater)",
  },
  {
    id: "balloon",
    name: "Hot Air Balloon",
    images: [balloonImg, balloonImg],
    description: "Float peacefully over misty mountains and rice paddies",
    duration: "25-30 min flight (total trip ~2 hours)",
    price: "$120 per person",
  },
  {
    id: "paramotor",
    name: "Paramotor",
    images: [paramotorImg, paramotorImg],
    description: "Soar above Vang Vieng's dramatic landscape with powered flight",
    duration: "15 min flight (total trip ~1 hour)",
    price: "$65 (May-Sep) / $80 (Oct-Apr)",
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    images: [climbingImg, climbingImg],
    description: "Challenge yourself on world-class limestone routes",
    duration: "9:30 AM-1:30 PM or 1:30 PM-5:30 PM",
    price: "650,000 Kip per person (max 3)",
  },
  {
    id: "zipline",
    name: "Zip-line",
    images: [ziplineImg, ziplineImg],
    description: "Fly through the jungle canopy on 14 platforms",
    duration: "2 hours total (1 hour zipline)",
    price: "400,000 Kip per person (max 2)",
  },
  {
    id: "tubing",
    name: "Tubing",
    images: [tubingImg, tubingImg],
    description: "Float down the Nam Song River, stopping at riverside bars",
    duration: "Cave: ~30 min / River: 12 PM-5:30 PM (5 km)",
    price: "$15 per person (max 3)",
  },
  {
    id: "sup",
    name: "Stand Up Paddle Boarding",
    images: [supImg, supImg],
    description: "Paddle across calm waters with stunning karst views",
    duration: "6 hours (7 km route), 8 AM-2 PM",
    price: "$40 per person (max 3)",
  },
  {
    id: "dirtbike",
    name: "Dirt Biking",
    images: [dirtbikeImg, dirtbikeImg],
    description: "Tackle rugged mountain trails on high-performance bikes",
    duration: "1-day: 6-7 hours / 2-day available",
    price: "1-day: $250/person (2 ppl) or $150/person (3 ppl)",
  },
  {
    id: "trekking",
    name: "Trekking Adventure",
    images: [paraglidingImg, paraglidingImg],
    description: "6 hr mountain hike (1,400 m altitude) + waterfall + hunting. Overnight in mountain hut with tent, breakfast & coffee, local dinner. 3 hr descent + 8 km kayak to Vang Vieng",
    duration: "2 days / 1 night",
    price: "$380 per person (max 2)",
  },
  {
    id: "caves",
    name: "Cave Exploration",
    images: [climbingImg, climbingImg],
    description: "Explore stunning limestone caves including the famous Tham None cave with underground rivers and formations",
    duration: "Half-day or full-day options",
    price: "Contact for pricing",
  },
  {
    id: "bluelagoon",
    name: "Blue Lagoon Visit",
    images: [kayakingImg, kayakingImg],
    description: "Swim in the crystal-clear turquoise waters of Vang Vieng's beautiful blue lagoons surrounded by limestone cliffs",
    duration: "Half-day trip",
    price: "Contact for pricing",
  },
];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % activity.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + activity.images.length) % activity.images.length);
  };

  const handleBooking = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(
      `https://wa.me/8562093439140?text=Hi! I'd like to book ${activity.name}`,
      "_blank"
    );
  };

  return (
    <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
      <div className="relative h-64 overflow-hidden group">
        <img
          src={activity.images[currentImageIndex]}
          alt={`${activity.name} ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
          {activity.name}
        </h3>
        
        {/* Navigation buttons */}
        {activity.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            
            {/* Image indicators */}
            <div className="absolute bottom-2 right-2 flex gap-1">
              {activity.images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === currentImageIndex ? "bg-primary-foreground" : "bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <CardHeader>
        <CardDescription>{activity.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Duration:</span>
            <span className="font-medium text-right">{activity.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Price:</span>
            <span className="font-medium text-right">{activity.price}</span>
          </div>
        </div>
        <Button
          className="w-full gap-2 mt-4"
          onClick={handleBooking}
        >
          <MessageCircle className="h-4 w-4" />
          Contact for Booking
        </Button>
      </CardContent>
    </Card>
  );
};

export const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Our Activities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully curated adventure experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  );
};
