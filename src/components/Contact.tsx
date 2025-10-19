import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8562093439140?text=Hi! I'd like to book a tour with Smiler Tours",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your adventure with Smiler Tours? Contact us on WhatsApp and we'll help plan your perfect experience.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="text-center">
            <CardContent className="pt-8 pb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-10 w-10 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-2xl mb-2">
                WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                +856 20 9343 9140
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
