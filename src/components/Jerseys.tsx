import jersey1 from "@/assets/jersey1.jpg";
import jersey2 from "@/assets/jersey2.jpg";
import jersey3 from "@/assets/jersey3.jpg";

export const Jerseys = () => {
  return (
    <section id="jerseys" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-foreground">
            Our Jerseys
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Check out our official Smiler Tours merchandise
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Wide Jersey - Top */}
          <div className="rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
            <img
              src={jersey1}
              alt="Jersey 1"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Two Jerseys - Bottom */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              <img
                src={jersey2}
                alt="Jersey 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-card hover:shadow-glow transition-all duration-300">
              <img
                src={jersey3}
                alt="Jersey 3"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};