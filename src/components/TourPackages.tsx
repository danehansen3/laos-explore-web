import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, Sparkles, Info } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

// Import tour images
import kayak1 from "@/assets/kayak1.jpg";
import sup2 from "@/assets/sup2.jpg";
import rock1 from "@/assets/rock1.jpg";
import db2 from "@/assets/db2.jpg";
import tube3 from "@/assets/tube3.jpg";

const packages = [
  {
    name: "Tour 1 - Adventure & Blue Lagoon Experience",
    activities: ["Water Cave", "Elephant Cave", "Zipline", "Kayaking", "Blue Lagoon"],
    duration: "9 AM - 5 PM",
    price: "$45 per person",
    description: "Complete adventure including caves, zipline, kayaking and the beautiful Blue Lagoon",
    image: kayak1,
    additionalDetails: "Start your day with a tuktuk ride to the Water Cave and Elephant Cave, followed by lunch, ziplining through the jungle canopy, kayaking along the scenic Nam Song River, and finishing with a refreshing swim at the stunning Blue Lagoon. This full-day experience combines adrenaline-pumping activities with breathtaking natural scenery.",
  },
  {
    name: "Tour 2 - Cave & Kayak Adventure",
    activities: ["Water Cave", "Elephant Cave", "Zipline", "Kayaking"],
    duration: "9 AM - 4 PM",
    price: "$35 per person",
    description: "Explore stunning caves, zipline through the jungle, and kayak the river",
    image: sup2,
    additionalDetails: "Begin with a tuktuk transfer to Water Cave and Elephant Cave where you'll explore impressive underground formations. After lunch, experience the thrill of ziplining across multiple platforms through the jungle canopy, then paddle back downstream via kayak. Perfect for those seeking adventure without the full-day commitment.",
  },
  {
    name: "Tour 3 - Cave Explorer",
    activities: ["Water Cave", "Elephant Cave", "Lunch"],
    duration: "9 AM - 5 PM",
    price: "$40 per person",
    description: "Focus on the amazing cave systems with a relaxing lunch included",
    image: rock1,
    additionalDetails: "This tour is ideal for cave enthusiasts and photographers. Spend quality time exploring the Water Cave and Elephant Cave with our experienced guides who will share fascinating geological and historical information. A delicious local lunch is included, giving you time to rest and enjoy the natural surroundings before continuing your exploration.",
  },
  {
    name: "Tour 4 - Cave & Blue Lagoon Tour",
    activities: ["Water Cave", "Elephant Cave", "Blue Lagoon"],
    duration: "9 AM - 4 PM",
    price: "$30 per person",
    description: "Experience the best caves and finish with a refreshing swim at Blue Lagoon",
    image: db2,
    additionalDetails: "Visit the iconic Water Cave and Elephant Cave in the morning, exploring their stunning limestone formations. After lunch, relax and cool off at the pristine Blue Lagoon with its crystal-clear turquoise waters. This tour strikes the perfect balance between adventure and relaxation.",
  },
  {
    name: "Tour 5 - Half-Day Kayak & Cave Tour",
    activities: ["Kayaking", "2 Caves"],
    duration: "9 AM - 1 PM",
    price: "$20 per person",
    description: "Perfect half-day adventure combining kayaking with cave exploration",
    image: tube3,
    additionalDetails: "A compact morning adventure ideal for travelers with limited time. Explore two fascinating caves with expert guidance, then paddle your kayak back along the Nam Song River. This half-day option allows you to experience the highlights of Vang Vieng without committing your entire day.",
  },
];

export const TourPackages = () => {
  const [selectedTour, setSelectedTour] = useState<number | null>(null);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState("");

  const handleBookingClick = (packageName: string) => {
    setSelectedPackageName(packageName);
    setBookingModalOpen(true);
  };

  const handleCustomTour = () => {
    setSelectedPackageName("Custom Tour Package");
    setBookingModalOpen(true);
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pre-designed tours with pickup from your hotel or guesthouse included
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="hover:shadow-glow transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="font-heading text-2xl">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Includes:</div>
                  <div className="flex flex-wrap gap-2">
                    {pkg.activities.map((activity, i) => (
                      <span
                        key={i}
                        className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-semibold">{pkg.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold">{pkg.price}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button
                    className="w-full gap-2"
                    onClick={() => handleBookingClick(pkg.name)}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book Package
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={() => setSelectedTour(index)}
                  >
                    <Info className="h-4 w-4" />
                    More Info & Pictures
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Tour Section */}
        <Card className="bg-gradient-accent text-primary-foreground border-0 shadow-glow">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <Sparkles className="h-8 w-8" />
            </div>
            <CardTitle className="font-heading text-3xl md:text-4xl mb-2">
              Create Your Custom Tour
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-lg max-w-2xl mx-auto">
              Want a personalized adventure? Mix and match any activities to create your perfect Vang Vieng experience. Our team will help design the ideal itinerary for you.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 text-lg px-8"
              onClick={handleCustomTour}
            >
              <MessageCircle className="h-5 w-5" />
              Design My Tour
            </Button>
          </CardContent>
        </Card>

        {/* Tour Details Dialog */}
        <Dialog open={selectedTour !== null} onOpenChange={() => setSelectedTour(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedTour !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-heading text-2xl">
                    {packages[selectedTour].name}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Tour Image */}
                  <div className="w-full rounded-lg overflow-hidden shadow-md">
                    <img
                      src={packages[selectedTour].image}
                      alt={packages[selectedTour].name}
                      className="w-full h-64 object-cover"
                      style={{ objectPosition: "center 75%" }}
                    />
                  </div>

                  {/* Tour Details */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Tour Overview</h3>
                      <p className="text-muted-foreground">{packages[selectedTour].description}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-2">What's Included</h3>
                      <div className="flex flex-wrap gap-2">
                        {packages[selectedTour].activities.map((activity, i) => (
                          <span
                            key={i}
                            className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <span className="text-sm text-muted-foreground">Duration</span>
                        <p className="font-semibold">{packages[selectedTour].duration}</p>
                      </div>
                      <div>
                        <span className="text-sm text-muted-foreground">Price</span>
                        <p className="font-semibold text-primary text-xl">{packages[selectedTour].price}</p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h3 className="font-semibold text-lg mb-2">Additional Details</h3>
                      <p className="text-muted-foreground">
                        {packages[selectedTour].additionalDetails}
                      </p>
                    </div>

                    <Button
                      className="w-full gap-2 mt-4"
                      onClick={() => {
                        handleBookingClick(packages[selectedTour].name);
                        setSelectedTour(null);
                      }}
                    >
                      <MessageCircle className="h-4 w-4" />
                      Book Now
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Booking Modal */}
        <BookingModal
          isOpen={bookingModalOpen}
          onClose={() => setBookingModalOpen(false)}
          activityName={selectedPackageName}
        />
      </div>
    </section>
  );
};