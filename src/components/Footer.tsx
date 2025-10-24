import { MessageCircle, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/8562093439140?text=Hi! I'm interested in your tours",
      "_blank"
    );
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 flex justify-left">
              <h3 className="font-heading font-bold text-2xl text-foreground text-white">
                Smiler Tours
              </h3>
            </div>
            <p className="text-secondary-foreground/80 mb-4">
              Your premier adventure tour operator in Laos, offering unforgettable experiences 
              with the highest safety standards since 2016.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/smiler_tour_guide/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61558999843811"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-secondary-foreground/10 rounded-full flex items-center justify-center hover:bg-secondary-foreground/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              {/* WhatsApp button (clickable) */}
              <button
                onClick={handleWhatsApp}
                className="flex items-center gap-2 text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>+85620 9343 9140</span>
              </button>

              {/* Static phone number (non-clickable) */}
              <div className="flex items-center gap-2 text-secondary-foreground/80">
                <MessageCircle className="h-4 w-4" />
                <span>+856 20 5152 5544</span>
              </div>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Operating Hours</h4>
            <div className="text-secondary-foreground/80 space-y-2">
              <p>Monday - Sunday</p>
              <p className="font-semibold">9:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {currentYear} Smiler Tours. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};