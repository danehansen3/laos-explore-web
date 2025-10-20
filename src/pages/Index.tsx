import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Activities } from "@/components/Activities";
import { TourPackages } from "@/components/TourPackages";
import { Transportation } from "@/components/Transportation";
import { Safety } from "@/components/Safety";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Activities />
      <TourPackages />
      <Transportation />
      <Safety />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
