import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Activities } from "@/components/Activities";
import { ActivityDetail } from "@/components/ActivityDetail";
import { TourPackages } from "@/components/TourPackages";
import { Safety } from "@/components/Safety";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import kayakingImg from "@/assets/kayaking.jpg";
import paramotorImg from "@/assets/paramotor.jpg";
import balloonImg from "@/assets/balloon.jpg";
import buggyImg from "@/assets/buggy.jpg";
import climbingImg from "@/assets/climbing.jpg";
import ziplineImg from "@/assets/zipline.jpg";
import tubingImg from "@/assets/tubing.jpg";

const activityDetails = [
  {
    id: "kayaking",
    name: "Kayaking",
    image: kayakingImg,
    description: "Paddle through the pristine waters of the Nam Song River, surrounded by towering limestone karsts and lush jungle. This unforgettable journey takes you past local villages, hidden caves, and stunning natural scenery that makes Vang Vieng famous worldwide.",
    duration: "3-4 hours",
    difficulty: "Beginner to Intermediate",
    whatsIncluded: [
      "Professional kayaking equipment and life jacket",
      "Experienced guide and safety briefing",
      "Waterproof bag for personal items",
      "Light refreshments and drinking water",
      "Hotel pickup and drop-off",
    ],
  },
  {
    id: "paramotor",
    name: "Para Motor Gliding",
    image: paramotorImg,
    description: "Experience the thrill of powered flight above Vang Vieng's breathtaking landscape. Feel the freedom as you soar with a motorized paraglider over rivers, mountains, and rice paddies, taking in panoramic views that will leave you speechless.",
    duration: "2-3 hours",
    difficulty: "All levels",
    whatsIncluded: [
      "Certified para motor equipment",
      "Professional pilot and instructor",
      "Safety helmet and harness",
      "Pre-flight safety briefing and training",
      "Action camera footage of your flight",
      "Transportation to launch site",
    ],
  },
  {
    id: "balloon",
    name: "Hot Air Balloon",
    image: balloonImg,
    description: "Float peacefully above Vang Vieng at sunrise or sunset, watching the mist lift from the valleys or the golden light paint the dramatic karst landscape. This serene experience offers unmatched photo opportunities and memories that will last a lifetime.",
    duration: "3 hours (including preparation)",
    difficulty: "All levels",
    whatsIncluded: [
      "Certified hot air balloon and equipment",
      "Experienced licensed pilot",
      "Pre-flight refreshments and post-flight celebration",
      "Transportation to and from launch site",
      "Flight certificate",
      "Professional photos of your experience",
    ],
  },
  {
    id: "buggy",
    name: "Buggy Car Adventure",
    image: buggyImg,
    description: "Get your adrenaline pumping as you race through rugged terrain, dirt trails, and countryside paths in our high-performance buggies. Navigate through villages, across streams, and over hills while experiencing the raw beauty of rural Laos up close.",
    duration: "2-3 hours",
    difficulty: "Intermediate",
    whatsIncluded: [
      "Modern buggy car with safety features",
      "Safety helmet and protective gear",
      "Professional guide and route briefing",
      "Fuel and vehicle",
      "First aid kit and communication devices",
      "Light refreshments",
    ],
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    image: climbingImg,
    description: "Challenge yourself on some of Southeast Asia's finest limestone climbing routes. Whether you're a complete beginner or seasoned climber, our guides will match you with the perfect route while ensuring your safety with professional-grade equipment and expertise.",
    duration: "4-5 hours",
    difficulty: "Beginner to Advanced",
    whatsIncluded: [
      "Complete climbing equipment (harness, shoes, helmet)",
      "Professional climbing ropes and anchors",
      "Certified climbing instructor",
      "Beginner instruction or advanced route guidance",
      "Transportation to climbing sites",
      "Lunch and refreshments",
    ],
  },
  {
    id: "zipline",
    name: "Zip-line",
    image: ziplineImg,
    description: "Fly through the jungle canopy on a spectacular zipline course. With multiple lines ranging from gentle glides to heart-pounding speeds, you'll experience the forest from a completely unique perspective while our safety systems keep you secure.",
    duration: "3 hours",
    difficulty: "All levels",
    whatsIncluded: [
      "Professional zip-line equipment and harness",
      "Safety helmet and gloves",
      "Certified guides on all platforms",
      "Double-hook safety system",
      "Transportation to zip-line course",
      "Light refreshments",
    ],
  },
  {
    id: "tubing",
    name: "Tubing",
    image: tubingImg,
    description: "Experience the classic Vang Vieng adventure! Float down the Nam Song River on a comfortable inner tube, taking in the spectacular scenery at a relaxed pace. Stop at riverside bars and enjoy the laid-back atmosphere that has made tubing a Vang Vieng tradition.",
    duration: "3-4 hours",
    difficulty: "Easy",
    whatsIncluded: [
      "High-quality inner tube",
      "Life jacket and safety equipment",
      "Waterproof bag for valuables",
      "River guide and safety briefing",
      "Transportation to starting point and from end point",
      "Light refreshments",
    ],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Activities />
      {activityDetails.map((activity) => (
        <ActivityDetail key={activity.id} {...activity} />
      ))}
      <TourPackages />
      <Safety />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
