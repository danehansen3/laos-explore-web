import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";

export const Location = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const address = "Smiler tour & train ticket&bike for rental, WCCW+3CX Namsong Road Vang Vieng";
  // More precise coordinates for Smiler Tour in Vang Vieng
  const latitude = 18.9265;
  const longitude = 102.4480;

  // Google Maps embed URL with marker pinpoint
  const mapsEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.892123456789!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3125218a7e8c8c8d%3A0x1234567890!2sSmiler+tour+train+ticket+bike+for+rental%2C+Namsong+Road+Vang+Vieng!5e0!3m2!1sen!2sla!4v1234567890`;

  // Direct Google Maps URL with address and marker
  const googleMapsDirectUrl = `https://www.google.com/maps/search/${encodeURIComponent(address)}/@${latitude},${longitude},15z`;

  const handleOpenMaps = () => {
    setIsMapOpen(true);
  };

  const handleDirections = () => {
    // Opens Google Maps with the address already filled in
    window.open(googleMapsDirectUrl, "_blank");
  };

  return (
    <section id="location" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Visit Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find us at our office in the heart of Vang Vieng
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Location Info Card */}
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 font-heading">
                <MapPin className="h-5 w-5 text-primary" />
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                  ADDRESS
                </h3>
                <p className="text-lg font-medium">{address}</p>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                  CONTACT
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a
                      href="https://wa.me/8562093439140"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      +856 20 9343 9140
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-sm text-muted-foreground mb-2">
                  OPERATING HOURS
                </h3>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Monday - Sunday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button onClick={handleOpenMaps} className="flex-1 gap-2">
                  <MapPin className="h-4 w-4" />
                  View Map
                </Button>
                <Button onClick={handleDirections} variant="outline" className="flex-1">
                  Get Directions
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Map Preview Card */}
          <Card className="overflow-hidden h-full">
            <CardHeader>
              <CardTitle className="font-heading">Map Preview</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div 
                className="relative w-full h-96 bg-muted cursor-pointer group"
                onClick={handleOpenMaps}
              >
                <iframe
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src={mapsEmbedUrl}
                ></iframe>
                {/* Overlay to indicate clickability */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium">
                    Click to expand
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Full Map Modal */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-4xl w-full h-[80vh]">
          <DialogHeader>
            <DialogTitle className="font-heading">Smiler Tour Location</DialogTitle>
          </DialogHeader>
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={mapsEmbedUrl}
            ></iframe>
          </div>
          <Button 
            onClick={handleDirections}
            className="w-full gap-2 mt-4"
          >
            <MapPin className="h-4 w-4" />
            Open in Google Maps with Directions
          </Button>
        </DialogContent>
      </Dialog>
    </section>
  );
};