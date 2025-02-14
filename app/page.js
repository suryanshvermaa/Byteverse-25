
import ContactUs from "@/components/ContactUs";
import { FAQ } from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import Judges from "@/components/Judges";
import { PrizesSection } from "@/components/PrizesSection";
import OrganizerCardList from "@/components/OrganizerCardList";
import AboutUs from "@/components/AboutUs";
import Themes from "@/components/Themes";
import Tracks from "@/components/Tracks";
import Sponsors from "./sponsers";


export default function Home() {
  return (
    <>

    <div className="bg-cover w-full bg-top" >
      <HeroSection/>
      <AboutUs/>
      <Judges/>
      <Sponsors/> 
      <PrizesSection/>
      <Themes/>
      <Tracks/>
      <FAQ/>
      <ContactUs/>
    </div>
    </>
  );
}
