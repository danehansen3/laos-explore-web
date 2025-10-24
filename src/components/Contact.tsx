import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Mail, Facebook } from "lucide-react";

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8562093439140?text=Hi! I'd like to book a tour with Smiler Tours",
      "_blank"
    );
  };

  const handleInstagram = () => {
    window.open("https://www.instagram.com/smiler_tour_guide/", "_blank");
  };

  const handleEmail = () => {
    window.location.href = "mailto:SmileTourinfo@gmail.com";
  };

  const handleFacebook1 = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61561651779454",
      "_blank"
    );
  };

  const handleFacebook2 = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=61558999843811",
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

        <div className="max-w-2xl mx-auto space-y-6">
          {/* WhatsApp - Main Contact */}
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

          {/* Social Media Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Instagram */}
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3">
                  Instagram
                </h4>
                <Button variant="outline" onClick={handleInstagram} className="gap-2 w-full">
                  <Instagram className="h-4 w-4" />
                  Follow Us
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3">
                  Email
                </h4>
                <Button variant="outline" onClick={handleEmail} className="gap-2 w-full">
                  <Mail className="h-4 w-4" />
                  Email Us
                </Button>
              </CardContent>
            </Card>

            {/* Facebook 1 */}
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Facebook className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3">
                  Facebook
                </h4>
                <Button variant="outline" onClick={handleFacebook1} className="gap-2 w-full">
                  <Facebook className="h-4 w-4" />
                  Ghost Riders
                </Button>
              </CardContent>
            </Card>

            {/* Facebook 2 */}
            <Card className="text-center">
              <CardContent className="pt-6 pb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Facebook className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-lg mb-3">
                  Facebook
                </h4>
                <Button variant="outline" onClick={handleFacebook2} className="gap-2 w-full">
                  <Facebook className="h-4 w-4" />
                  Smiler Tours
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};