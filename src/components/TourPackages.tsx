 import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";

import kayak1 from "@/assets/kayak1.jpg";
import sup2 from "@/assets/sup2.jpg";
import rock1 from "@/assets/rock1.jpg";
import db2 from "@/assets/db2.jpg";
import tube3 from "@/assets/tube3.jpg";

// Tour data
const tours = [
  {
    id: "tour1",
    name: "Adventure & Blue Lagoon Experience",
    popupDescription: "Start your day with a tuktuk ride to the Water Cave and Elephant Cave, followed by lunch, ziplining, kayaking, and a dip at the Blue Lagoon.",
    popupImage: kayak1,
  },
  {
    id: "tour2",
    name: "Cave & Kayak Adventure",
    popupDescription: "Begin with a tuktuk transfer to Water Cave and Elephant Cave, enjoy lunch, then zipline and finish with kayaking along the Nam Song River.",
    popupImage: sup2,
  },
  {
    id: "tour3",
    name: "Cave Explorer",
    popupDescription: "Explore Vang Vieng’s Water Cave and Elephant Cave, with lunch included — ideal for cave enthusiasts.",
    popupImage: rock1,
  },
  {
    id: "tour4",
    name: "Cave & Blue Lagoon Tour",
    popupDescription: "Visit the Water Cave and Elephant Cave, have lunch, and unwind at the Blue Lagoon for a relaxing afternoon.",
    popupImage: db2,
  },
  {
    id: "tour5",
    name: "Half-Day Kayak & Cave Tour",
    popupDescription: "A morning of kayaking and exploring two nearby caves — perfect for those short on time.",
    popupImage: tube3,
  },
];

// Component
export const Tours = () => {
  const [selectedTour, setSelectedTour] = useState<typeof tours[0] | null>(null);

  const handleBooking = (tourName: string) => {
    window.open(
      `https://wa.me/8562093439140?text=Hi! I'd like to book ${tourName}`,
      "_blank"
    );
  };

  return (
    <section id="tours" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Our Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our curated adventure packages with hotel pickup included
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-glow transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={tour.popupImage}
                  alt={tour.name}
                  className="w-full h-full object-cover"
                />
                <h3 className="absolute bottom-4 left-4 font-heading font-bold text-2xl text-primary-foreground">
                  {tour.name}
                </h3>
              </div>
              <CardHeader>
                <CardDescription>{tour.popupDescription.substring(0, 80)}...</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full gap-2"
                  onClick={() => setSelectedTour(tour)}
                >
                  More Info & Pictures
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              className="absolute top-4 right-4 p-1 hover:bg-gray-200 rounded-full"
              onClick={() => setSelectedTour(null)}
            >
              <X className="h-5 w-5" />
            </button>
            <h3 className="font-heading font-bold text-2xl mb-4">{selectedTour.name}</h3>
            <img
              src={selectedTour.popupImage}
              alt={selectedTour.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <p className="mb-4">{selectedTour.popupDescription}</p>
            <Button
              className="w-full gap-2"
              onClick={() => handleBooking(selectedTour.name)}
            >
              <MessageCircle className="h-4 w-4" />
              Contact for Booking
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};
