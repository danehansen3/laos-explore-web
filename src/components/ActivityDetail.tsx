import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, TrendingUp, CheckCircle } from "lucide-react";

interface ActivityDetailProps {
  id: string;
  name: string;
  image: string;
  description: string;
  duration: string;
  difficulty: string;
  whatsIncluded: string[];
  gallery?: string[];
}

export const ActivityDetail = ({
  id,
  name,
  image,
  description,
  duration,
  difficulty,
  whatsIncluded,
}: ActivityDetailProps) => {
  const handleBooking = () => {
    window.open(
      `https://wa.me/8562012345678?text=Hi! I'd like to book ${name}`,
      "_blank"
    );
  };

  return (
    <section id={`activity-${id}`} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative rounded-lg overflow-hidden shadow-card h-96 md:sticky md:top-24">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground">
              {name}
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                  <div className="font-semibold">{duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-muted-foreground">Difficulty</div>
                  <div className="font-semibold">{difficulty}</div>
                </div>
              </div>
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-heading font-semibold text-xl mb-4">What's Included</h3>
              <ul className="space-y-3">
                {whatsIncluded.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              className="w-full md:w-auto gap-2 shadow-glow"
              onClick={handleBooking}
            >
              <MessageCircle className="h-5 w-5" />
              Contact for Booking
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
