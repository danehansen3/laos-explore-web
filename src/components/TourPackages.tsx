import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Adventure Combo",
    activities: ["Rock Climbing", "Zip-line"],
    duration: "Full Day",
    description: "Perfect for thrill-seekers wanting to experience the best vertical adventures",
  },
  {
    name: "Full Day Experience",
    activities: ["Kayaking", "Paragliding", "Hot Air Balloon"],
    duration: "Full Day + Sunrise",
    description: "A comprehensive adventure from sunrise balloon rides to sunset kayaking",
  },
  {
    name: "Adrenaline Rush",
    activities: ["Buggy Car", "Zip-line", "Rock Climbing"],
    duration: "Full Day",
    description: "Maximum excitement with our most action-packed activities combined",
  },
  {
    name: "Sky & Water",
    activities: ["Paragliding", "Kayaking"],
    duration: "Half Day",
    description: "Experience Vang Vieng from above and below in one incredible package",
  },
  {
    name: "Ultimate Adventure",
    activities: ["All 6 Activities"],
    duration: "2 Days",
    description: "The complete Vang Vieng experience - all activities over two amazing days",
  },
];

export const TourPackages = () => {
  const handleBooking = (packageName: string) => {
    window.open(
      `https://wa.me/8562093439140?text=Hi! I'd like to book the ${packageName} package`,
      "_blank"
    );
  };

  const handleCustomTour = () => {
    window.open(
      "https://wa.me/8562093439140?text=Hi! I'd like to create a custom tour package",
      "_blank"
    );
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Tour Packages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Save time and money with our pre-designed adventure combinations
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
                <div className="text-sm">
                  <span className="text-muted-foreground">Duration: </span>
                  <span className="font-semibold">{pkg.duration}</span>
                </div>
                <Button
                  className="w-full gap-2"
                  onClick={() => handleBooking(pkg.name)}
                >
                  <MessageCircle className="h-4 w-4" />
                  Book Package
                </Button>
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
      </div>
    </section>
  );
};
