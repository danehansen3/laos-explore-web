import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

import allActivities from "@/assets/allactivities.jpg";

import buggy1 from "@/assets/buggy1.jpg";
import buggy2 from "@/assets/buggy2.jpg";

import balloon1 from "@/assets/balloon1.jpg";
import balloon2 from "@/assets/balloon2.jpg";
import balloon3 from "@/assets/balloon3.jpg";
import balloon5 from "@/assets/balloon5.jpg";
import balloonvid from "@/assets/balloonvid.mp4";

import paramotor2 from "@/assets/paramotor2.jpg";
import paramotor3 from "@/assets/paramotor3.jpg";
import paramotor4 from "@/assets/paramotor4.jpg";
import paramotorvid from "@/assets/paraamotorvid.mp4";

import rock1 from "@/assets/rock1.jpg";
import rock2 from "@/assets/rock2.jpg";
import rock3 from "@/assets/rock3.jpg";

import tube1 from "@/assets/tube1.jpg";
import tube2 from "@/assets/tube2.jpg";
import tube3 from "@/assets/tube3.jpg";
import tube4 from "@/assets/tube4.jpg";

import sup2 from "@/assets/sup2.jpg";
import sup3 from "@/assets/sup3.jpg";
import sup4 from "@/assets/sup4.jpg";
import sup5 from "@/assets/sup5.jpg";
import sup6 from "@/assets/sup6.jpg";

import db1 from "@/assets/db1.jpg";
import db2 from "@/assets/db2.jpg";
import db3 from "@/assets/db3.jpg";
import db4 from "@/assets/db4.jpg";
import db5 from "@/assets/db5.jpg";
import db6 from "@/assets/db6.jpg";
import db7 from "@/assets/db7.jpg";

import trek1 from "@/assets/trek1.jpg";
import trek2 from "@/assets/trek2.jpg";
import trek3 from "@/assets/trek3.jpg";

import cave1 from "@/assets/cave1.jpg";
import cave2 from "@/assets/cave2.jpg";

import waterfall1 from "@/assets/waterfall1.jpg";
import waterfall3 from "@/assets/waterfall3.jpg";
import waterfall4 from "@/assets/waterfall4.jpg";
import waterfall5 from "@/assets/waterfall5.jpg";

import view1 from "@/assets/view1.jpg";
import view2 from "@/assets/view2.jpg";
import view3 from "@/assets/view3.jpg";
import view4 from "@/assets/view4.jpg";
import view5 from "@/assets/view5.jpg";

import kayak1 from "@/assets/kayak1.jpg";
import kayak2 from "@/assets/kayak2.jpg";
import kayak3 from "@/assets/kayak3.jpg";
import kayak4 from "@/assets/kayak4.jpg";
import kayakvid from "@/assets/kayakvid.mp4";

import zipline1 from "@/assets/zipline1.jpg";
import zipline2 from "@/assets/zipline2.jpg";
import zipline3 from "@/assets/zipline3.jpg";

import lagoon1 from "@/assets/lagoon1.jpg";
import lagoon2 from "@/assets/lagoon2.jpg";
import lagoon3 from "@/assets/lagoon3.jpg";
import lagoon4 from "@/assets/lagoon4.jpg";
import lagoon5 from "@/assets/lagoon5.jpg";
import lagoon6 from "@/assets/lagoon6.jpg";
import lagoon7 from "@/assets/lagoon7.jpg";

const activities = [
  {
    id: "buggy",
    name: "Buggy Ride",
    images: [buggy1, buggy2],
    videos: [],
    description: "Race through rugged terrain and countryside trails",
    duration: "Minimum 2 hours",
    price: "700,000 Kip (2-seater) / 900,000 Kip (4-seater)",
  },
  {
    id: "balloon",
    name: "Hot Air Balloon",
    images: [balloon1, balloon2, balloon3, balloon5],
    videos: [balloonvid],
    description: "Float peacefully over misty mountains and rice paddies",
    duration: "25-30 min flight (total trip ~2 hours)",
    price: "$120 per person",
  },
  {
    id: "paramotor",
    name: "Paramotor",
    images: [paramotor2, paramotor3, paramotor4],
    videos: [paramotorvid],
    description: "Soar above Vang Vieng's dramatic landscape with powered flight",
    duration: "15 min flight (total trip ~1 hour)",
    price: "$65 (May-Sep) / $80 (Oct-Apr)",
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    images: [rock1, rock2, rock3],
    description: "Challenge yourself on world-class limestone routes",
    duration: "9:30 AM-1:30 PM or 1:30 PM-5:30 PM",
    price: "650,000 Kip per person (max 3)",
  },
  {
    id: "zipline",
    name: "Zip-line",
    images: [zipline1, zipline3, zipline2],
    description: "Fly through the jungle canopy on 14 platforms",
    duration: "2 hours total (1 hour zipline)",
    price: "400,000 Kip per person (max 2)",
  },
  {
    id: "tubing",
    name: "Tubing",
    images: [tube3, tube1, tube2, tube4],
    description: "Float down the Nam Song River, stopping at riverside bars",
    duration: "Cave: ~30 min / River: 12 PM-5:30 PM (5 km)",
    price: "$15 per person (max 3)",
  },
  {
    id: "sup",
    name: "Stand Up Paddle Boarding",
    images: [sup2, sup3, sup4, sup5, sup6],
    description: "Paddle across calm waters with stunning karst views",
    duration: "6 hours (7 km route), 8 AM-2 PM",
    price: "$40 per person (max 3)",
  },
  {
    id: "dirtbike",
    name: "Dirt Biking",
    images: [db6, db1, db2, db3, db4, db5, db7],
    description: "Tackle rugged mountain trails on high-performance bikes",
    duration: "1-day: 6-7 hours / 2-day available",
    price: "1-day: $250/person (2 ppl) or $150/person (3 ppl)",
  },
  {
    id: "trekking",
    name: "Trekking Adventure",
    images: [trek2, trek1, trek3],
    description: "6 hr mountain hike (1,400 m altitude) + waterfall + hunting. Overnight in mountain hut with tent, breakfast & coffee, local dinner. 3 hr descent + 8 km kayak to Vang Vieng",
    duration: "2 days / 1 night",
    price: "$380 per person (max 2)",
  },
  {
    id: "caves",
    name: "Cave Exploration",
    images: [cave1, cave2],
    description: "Explore stunning limestone caves including the famous Tham None cave with underground rivers and formations",
    duration: "Half-day trip",
    price: "Contact for pricing",
  },
  {
    id: "kayak",
    name: "Kayaking",
    images: [kayak1, kayak2, kayak3, kayak4],
    videos: [kayakvid],
    description: "Paddle along the Nam Song River surrounded by towering limestone cliffs and lush jungle scenery — a relaxing yet adventurous way to explore Vang Vieng's natural beauty.",
    duration: "About 1 hour",
    price: "Contact for pricing",
  },
  {
    id: "bluelagoon",
    name: "Blue Lagoon Visit",
    images: [lagoon1, lagoon2, lagoon3, lagoon4, lagoon5, lagoon6, lagoon7],
    description: "Swim in the crystal-clear turquoise waters of Vang Vieng's beautiful blue lagoons surrounded by limestone cliffs",
    duration: "Half-day trip",
    price: "Contact for pricing",
  },
  {
    id: "waterfall",
    name: "Kaeng Nyui Waterfall",
    images: [waterfall1, waterfall3, waterfall4, waterfall5],
    description: "Hike through lush jungle trails to reach Kaeng Nyui, a stunning multi-tiered waterfall where you can cool off in natural pools and enjoy the peaceful sounds of nature.",
    duration: "Half-day trip",
    price: "Contact for pricing",
  },
  {
    id: "viewpoints",
    name: "Viewpoint Hikes",
    images: [view1, view2, view3, view4, view5],
    description: "Explore Vang Vieng's stunning viewpoints, including Nam Xay (350m, accessible by motorbike), Horkham (250m, featuring a model airplane), and Pha Ngern or Silver Cliff (800m) for breathtaking views of the Nam Song River, limestone cliffs, and surrounding valleys. Each viewpoint offers a unique perspective, perfect for adventure seekers and photographers alike.",
    duration: "Half-day trip",
    price: "Contact for pricing",
  },
];

const ActivityCard = ({ activity }: { activity: typeof activities[0] }) => {
  const media = [
    ...(activity.videos || []).map((src) => ({ type: "video", src })),
    ...(activity.images || []).map((src) => ({ type: "image", src })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const nextMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleBookingClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsBookingModalOpen(true);
  };

  const current = media[currentIndex];

  return (
    <>
      <Card className="overflow-hidden hover:shadow-glow transition-all duration-300">
        <div className="relative h-64 overflow-hidden group">
          {current.type === "image" ? (
            <img
              src={current.src}
              alt={`${activity.name} ${currentIndex + 1}`}
              className="w-full h-full object-cover [object-position:center_75%]"
            />
          ) : (
            <video
              src={current.src}
              controls
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
            {activity.name}
          </h3>

          {media.length > 1 && (
            <>
              <button
                onClick={prevMedia}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous media"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextMedia}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next media"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              <div className="absolute bottom-2 right-2 flex gap-1">
                {media.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary-foreground"
                        : "bg-primary-foreground/50"
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
          <Button className="w-full gap-2 mt-4" onClick={handleBookingClick}>
            <MessageCircle className="h-4 w-4" />
            Contact for Booking
          </Button>
        </CardContent>
      </Card>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        activityName={activity.name}
      />
    </>
  );
};

export const Activities = () => {
  return (
    <>
      {/* --- Existing Activities Section --- */}
      <section id="activities" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
              Popular Activities
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

      {/* --- New All Activities Section --- */}
      <section id="all-activities" className="py-20 bg-background text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
            All Activities
          </h2>

          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src={allActivities}
              alt="All activities overview"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
          </div>

          <Button
            className="gap-2 text-lg px-8 py-6"
            onClick={() => {
              const message = "Hi! I'd like to book an activity package";
              window.open(
                `https://wa.me/8562093439140?text=${encodeURIComponent(message)}`,
                "_blank"
              );
            }}
          >
            <MessageCircle className="h-5 w-5" />
            Book Your Adventure
          </Button>
        </div>
      </section>
    </>
  );
};