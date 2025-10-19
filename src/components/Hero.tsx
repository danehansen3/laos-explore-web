import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    window.open("https://wa.me/8562093439140?text=Hi! I'm interested in booking a tour", "_blank");
  };

  const scrollToActivities = () => {
    document.querySelector("#activities")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Container - Using image as fallback */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          {/* YouTube embed or image */}
          <iframe
            className="absolute inset-0 w-full h-full object-cover"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=dQw4w9WgXcQ"
            title="Vang Vieng Adventures"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          {/* Fallback image */}
          <img
            src={heroBg}
            alt="Vang Vieng landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-6 drop-shadow-lg">
          Experience Vang Vieng
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto font-medium">
          Discover the ultimate adventure destination in Laos with premium guided tours
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={scrollToActivities}
            className="gap-2 text-lg px-8 py-6 shadow-glow"
          >
            Explore Activities
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="secondary"
            onClick={handleWhatsApp}
            className="gap-2 text-lg px-8 py-6"
          >
            <MessageCircle className="h-5 w-5" />
            Book Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
