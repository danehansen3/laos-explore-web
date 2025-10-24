import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Activities } from "@/components/Activities";
import { TourPackages } from "@/components/TourPackages";
import { Transportation } from "@/components/Transportation";
import { Safety } from "@/components/Safety";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Location } from "@/components/Location";
import { Jerseys } from "@/components/Jerseys";


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
      <Location />
      <Jerseys />
      <Footer />
    </div>
  );
};

export default Index;
