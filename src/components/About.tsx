import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, MessageCircle, Award } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Local Guides",
    description: "Our team knows every trail, cliff, and river in Vang Vieng intimately",
  },
  {
    icon: Heart,
    title: "Safety First",
    description: "International safety standards with top-quality equipment and trained guides",
  },
  {
    icon: Users,
    title: "Small Group Sizes",
    description: "Personalized attention with limited group sizes for better experiences",
  },
  {
    icon: Target,
    title: "Eco-Conscious",
    description: "We practice responsible tourism to preserve Vang Vieng's natural beauty",
  },
];

export const About = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/8562093439140?text=Hi! I'd like to know more about Smiler Tours", "_blank");
  };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-foreground">
              About Smiler Tours
            </h2>
            
            {/* Placeholder Photo */}
            <div className="mb-8 max-w-2xl mx-auto">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Photo Placeholder</p>
              </div>
            </div>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2016, Smiler Tours has been the premier adventure tour operator in 
                Laos, dedicated to showcasing the breathtaking beauty and thrilling activities that make 
                Vang Vieng a world-class destination.
              </p>
              <p>
                Our mission is simple: provide unforgettable adventure experiences while maintaining 
                the highest safety standards and respecting the natural environment that makes this 
                region so special.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h3 className="font-heading font-bold text-3xl text-center mb-10">
              Why Choose Us
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <Card key={index} className="hover:shadow-card transition-all">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                        <reason.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-heading font-semibold text-xl mb-2">
                          {reason.title}
                        </h4>
                        <p className="text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Info */}
          <Card className="bg-muted border-0">
            <CardContent className="pt-8 text-center">
              <h3 className="font-heading font-bold text-2xl mb-4">
                Our Experienced Team
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our guides are not just certified professionals - they're passionate locals who grew up 
                in these mountains and rivers. With an average of 8+ years of guiding experience, they 
                combine expert knowledge with genuine hospitality to create truly memorable adventures.
              </p>
              <Button size="lg" onClick={handleWhatsApp} className="gap-2">
                <MessageCircle className="h-5 w-5" />
                Contact for Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
